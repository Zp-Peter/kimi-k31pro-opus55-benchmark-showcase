// S04 · 3T 级大脑 — a sphere of experts; token comets hit the router core and light up the
// top-k experts on every beat. Whip-in, slow orbit + push, rack focus from foreground dust.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { GlyphText, CanvasPlane, font } from '../engine/text.js';
import { keys, ease, clamp, smoothstep, mulberry32, pulse, shake, applyShake } from '../engine/util.js';

const R = 5;
const NCL = 48;
const EVENTS = [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5]; // on the beat (local time)

const ptVert = /* glsl */ `
attribute float aSeed; attribute float aCl; attribute float aR;
uniform vec4 fire[24]; uniform float focus; uniform float coc; uniform float time; uniform float pxScale;
varying vec3 vCol; varying float vA;
void main(){
  vec3 p = position;
  // gentle breathing
  p *= 1.0 + 0.012 * sin(time * 2.0 + aSeed * 30.0);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float depth = -mv.z;
  vec3 dir = normalize(position);
  float act = 0.0;
  for (int i = 0; i < 24; i++) {
    float d = dot(dir, fire[i].xyz);
    act += fire[i].w * smoothstep(0.955, 0.995, d);
  }
  act *= mix(0.35, 1.0, aR);
  vec3 base = mix(vec3(0.08, 0.13, 0.26), vec3(0.20, 0.32, 0.60), aSeed) * (0.55 + 0.6 * aR);
  vCol = base + vec3(0.55, 0.85, 1.6) * act * 3.4;
  float size = (2.0 + 2.5 * aSeed * aSeed + act * 2.0) * pxScale * (14.0 / depth);
  float c = abs(depth - focus) * coc;
  float s2 = size + c;
  vA = clamp((size * size) / (s2 * s2), 0.02, 1.0);
  gl_PointSize = s2;
}`;
const ptFrag = /* glsl */ `
varying vec3 vCol; varying float vA;
void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d) * 2.0; float a = smoothstep(1.0, 0.75, r); gl_FragColor = vec4(vCol * a * vA, 1.0); }`;

const arcFrag = /* glsl */ `
uniform float prog; uniform float fade; uniform vec3 col; varying vec2 vUv;
void main(){
  float head = smoothstep(prog, prog - 0.04, vUv.x);
  float tail = smoothstep(prog - 0.6, prog - 0.05, vUv.x);
  float a = head * (0.25 + 0.75 * tail) * fade;
  gl_FragColor = vec4(col * a, 1.0);
}`;

export class MoeShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.near = 0.1; this.camera.far = 400; this.camera.fov = 42;
    const rnd = mulberry32(99);
    // expert cluster centres (fibonacci)
    this.centers = [];
    for (let i = 0; i < NCL; i++) {
      const y = 1 - (i + 0.5) / NCL * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
      this.centers.push(new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r));
    }
    const N1 = 15000, N2 = 5000, N = N1 + N2;
    const pos = new Float32Array(N * 3), seed = new Float32Array(N), cl = new Float32Array(N), rr = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      let v;
      if (i < N1) {
        const y = 1 - (i + 0.5) / N1 * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
        v = new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r).multiplyScalar(R * (1 + (rnd() - 0.5) * 0.03));
        rr[i] = 1;
      } else {
        v = new THREE.Vector3(rnd() * 2 - 1, rnd() * 2 - 1, rnd() * 2 - 1).normalize().multiplyScalar(R * (0.25 + 0.7 * Math.cbrt(rnd())));
        rr[i] = v.length() / R;
      }
      pos.set([v.x, v.y, v.z], i * 3); seed[i] = rnd();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    g.setAttribute('aCl', new THREE.BufferAttribute(cl, 1));
    g.setAttribute('aR', new THREE.BufferAttribute(rr, 1));
    this.fire = Array.from({ length: 24 }, () => new THREE.Vector4(0, 1, 0, 0));
    this.ptU = { fire: { value: this.fire }, focus: { value: 12 }, coc: { value: 2.5 }, time: { value: 0 }, pxScale: { value: 1 } };
    this.points = new THREE.Points(g, new THREE.ShaderMaterial({ vertexShader: ptVert, fragmentShader: ptFrag, uniforms: this.ptU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.points.frustumCulled = false;
    this.brain = new THREE.Group(); this.brain.add(this.points); this.scene.add(this.brain);

    // orbital rings
    const ringMat = (c, k) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    this.rings = [];
    [[6.0, 0.005, 0.42, '#4f8dff', 0.55], [6.7, 0.0035, -0.3, '#8a7bff', 0.35], [7.6, 0.0025, 0.15, '#6fd0ff', 0.22]].forEach(([r, w, tilt, c, k]) => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(r, w * r, 6, 256), ringMat(c, k));
      m.rotation.x = Math.PI / 2 + tilt; this.scene.add(m); this.rings.push(m);
    });

    // router core
    this.core = glowSprite('glow', '#9cd2ff', 3.2, { intensity: 3 });
    this.coreHot = glowSprite('disc', '#ffffff', 0.35, { intensity: 12 });
    this.scene.add(this.core, this.coreHot);

    // routing events: comet -> core -> arcs to top-k experts
    this.events = EVENTS.map((te, k) => {
      const picks = [];
      while (picks.length < 4) { const c = Math.floor(rnd() * NCL); if (!picks.includes(c)) picks.push(c); }
      const a = Math.PI * (0.75 + rnd() * 0.5), el = (rnd() - 0.5) * 0.8;
      const start = new THREE.Vector3(Math.cos(a) * 18, Math.sin(el) * 10, Math.sin(a) * 18 + 4);
      const comet = glowSprite('glow', '#bfe6ff', 1.1, { intensity: 6 });
      const trail = glowSprite('soft', '#6aa8ff', 1.6, { intensity: 1.2 });
      this.scene.add(comet, trail);
      const arcs = picks.map((ci) => {
        const end = this.centers[ci].clone().multiplyScalar(R);
        const mid = end.clone().multiplyScalar(0.55).add(new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).multiplyScalar(2.5));
        const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0, 0), mid, end);
        const mat = new THREE.ShaderMaterial({ vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }', fragmentShader: arcFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { prog: { value: 0 }, fade: { value: 0 }, col: { value: new THREE.Color('#7fc4ff').multiplyScalar(3.2) } } });
        const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 64, 0.028, 6, false), mat);
        m.visible = false; this.brain.add(m);
        return m;
      });
      return { te, picks, start, comet, trail, arcs };
    });

    // foreground dust (rack-focus subject)
    const M = 260, dp = new Float32Array(M * 3), ds = new Float32Array(M), dc = new Float32Array(M), dr = new Float32Array(M);
    for (let i = 0; i < M; i++) { dp.set([(rnd() - 0.5) * 22, (rnd() - 0.5) * 12, (rnd() - 0.5) * 22], i * 3); ds[i] = rnd(); dr[i] = 0.6; }
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(dp, 3)); dg.setAttribute('aSeed', new THREE.BufferAttribute(ds, 1));
    dg.setAttribute('aCl', new THREE.BufferAttribute(dc, 1)); dg.setAttribute('aR', new THREE.BufferAttribute(dr, 1));
    this.dust = new THREE.Points(dg, new THREE.ShaderMaterial({ vertexShader: ptVert, fragmentShader: ptFrag, uniforms: this.ptU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.dust.frustumCulled = false; this.scene.add(this.dust);

    // HUD
    this.statL = new CanvasPlane(560, 190, { res: 1.5 }); this.statL.position.set(-585, 150, 0);
    this.statR = new CanvasPlane(560, 190, { res: 1.5 }); this.statR.position.set(585, 150, 0);
    this.overlay.add(this.statL, this.statR);
    this.head = new GlyphText('3T 级 MoE 架构', { family: 'cn', weight: 600, size: 62, tracking: 0.06, color: '#ffffff' });
    this.head.position.set(0, -330, 0);
    this.sub = new GlyphText('每个 token，只唤醒最合适的专家', { family: 'cn', weight: 300, size: 31, tracking: 0.16, color: '#b8cdf0' });
    this.sub.position.set(0, -398, 0);
    this.overlay.add(this.head, this.sub);
    const lineMat = new THREE.LineBasicMaterial({ color: new THREE.Color('#5d93ff').multiplyScalar(1.4), transparent: true });
    this.leads = [[-360, 112, -235, 50], [360, 112, 235, 50]].map(([x0, y0, x1, y1]) => {
      const lg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x0, y0, 0), new THREE.Vector3(x1, y1, 0)]);
      const l = new THREE.Line(lg, lineMat.clone()); this.overlay.add(l); return l;
    });
  }

  drawStat(plane, t, t0, value, unit, label, en, align, ft = t) {
    const q = clamp((ft - t0) / 0.9);
    const out = 1 - smoothstep(3.5, 3.8, t);
    plane.opacity = smoothstep(t0 - 0.05, t0 + 0.2, t) * out;
    if (plane.opacity <= 0.001) return;
    const v = value * ease.outExpo(q);
    plane.draw((g, W, H) => {
      g.textBaseline = 'alphabetic'; g.textAlign = align;
      const x = align === 'left' ? 0 : W;
      g.font = font(800, 112, 'sans'); g.fillStyle = '#ffffff';
      const num = value >= 100 ? Math.round(v).toString() : v.toFixed(1);
      g.fillText(num + unit, x, 108);
      g.font = font(500, 22, 'cn'); g.fillStyle = '#c6d6f5'; g.fillText(label, x, 150);
      g.font = font(600, 14, 'sans'); g.fillStyle = 'rgba(140,175,235,0.8)'; g.letterSpacing = '4px'; g.fillText(en, x, 178); g.letterSpacing = '0px';
    });
  }

  update(t, ctx) {
    const cam = this.camera;
    const phi = keys(t, [[-0.25, -1.45], [0.14, -0.62, ease.outCubic], [4.4, 0.32, ease.inOutSine || ease.inOutQuad]]);
    const rad = keys(t, [[-0.25, 23.5], [4.4, 17.2, ease.inOutQuad]]);
    const el = keys(t, [[-0.25, 0.12], [4.4, 0.26]]);
    cam.position.set(Math.sin(phi) * Math.cos(el) * rad, Math.sin(el) * rad, Math.cos(phi) * Math.cos(el) * rad);
    cam.up.set(0, 1, 0);
    cam.lookAt(0, -1.25, 0);
    applyShake(cam, shake(t, 0.6, 0.8, 21));
    cam.updateMatrixWorld();
    this.brain.rotation.y = t * 0.12;
    this.ptU.time.value = t;
    this.ptU.focus.value = keys(t, [[0.25, 6.0], [1.25, rad - 4.2, ease.inOutCubic], [4.4, rad - 4.0]]);
    this.ptU.coc.value = 1.6;
    this.rings.forEach((r, i) => { r.rotation.z = t * (0.15 + i * 0.07) * (i % 2 ? -1 : 1); });

    // fire uniforms from routing events
    let fi = 0;
    for (const f of this.fire) f.w = 0;
    let coreKick = 0;
    for (const ev of this.events) {
      const dt = t - ev.te;
      // comet
      const cq = clamp((t - (ev.te - 0.42)) / 0.42);
      const show = t > ev.te - 0.42 && t < ev.te + 0.02;
      const p = ev.start.clone().lerp(new THREE.Vector3(0, 0, 0), ease.inQuad(cq));
      ev.comet.position.copy(p); ev.comet.setOpacity(show ? 1 : 0);
      const p2 = ev.start.clone().lerp(new THREE.Vector3(0, 0, 0), ease.inQuad(clamp(cq - 0.08)));
      ev.trail.position.copy(p2); ev.trail.setOpacity(show ? 0.8 : 0);
      if (dt >= 0) coreKick += Math.exp(-dt / 0.18);
      // arcs and activation
      ev.arcs.forEach((a, k) => {
        const on = dt >= 0 && dt < 1.4;
        a.visible = on;
        if (on) { a.material.uniforms.prog.value = clamp(dt / 0.28) * 1.05; a.material.uniforms.fade.value = 1 - smoothstep(0.5, 1.4, dt); }
      });
      if (dt >= 0.18 && dt < 2.5 && fi < 21) {
        for (const ci of ev.picks) {
          const w = Math.exp(-(dt - 0.18) / 0.55) * smoothstep(0.18, 0.26, dt);
          const d = this.centers[ci].clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), this.brain.rotation.y);
          this.fire[fi++].set(d.x, d.y, d.z, w);
        }
      }
    }
    this.core.setOpacity(0.5 + 0.8 * Math.min(1.5, coreKick));
    this.core.setSize(3.2 + 1.8 * Math.min(1, coreKick));
    this.coreHot.setOpacity(0.4 + Math.min(1, coreKick));

    // HUD
    this.drawStat(this.statL, t, 0.65, 2.8, 'T', '总参数', 'TOTAL PARAMETERS', 'left', ctx ? ctx.ft : t);
    this.drawStat(this.statR, t, 0.95, 104, 'B', '每 token 激活参数', 'ACTIVE PER TOKEN', 'right', ctx ? ctx.ft : t);
    this.leads.forEach((l, i) => { l.material.opacity = smoothstep(0.8 + i * 0.3, 1.2 + i * 0.3, t) * (1 - smoothstep(3.5, 3.8, t)) * 0.7; });
    this.head.animate(t, { in: { start: 0.3, dur: 0.7, stagger: 0.04, style: 'blur' }, out: { start: 3.5, dur: 0.35, stagger: 0.015, style: 'blur' } });
    this.sub.animate(t, { in: { start: 0.6, dur: 0.8, stagger: 0.025, style: 'blur' }, out: { start: 3.55, dur: 0.3, stagger: 0.01, style: 'blur' }, opacity: 0.9 });
  }

  post(t) {
    return { bloom: 0.75, bloomThreshold: 0.85, streak: 0.25, vignette: 0.45, grain: 0.045, ca: 0.0025, temperature: -0.15, flash: 0.0 };
  }

  samples(t) { return t < 0.2 ? 16 : 8; }
}
