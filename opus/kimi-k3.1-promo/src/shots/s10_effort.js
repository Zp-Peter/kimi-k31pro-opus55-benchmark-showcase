// S10 · 思考强度 — an arc gauge whose needle slams LOW → HIGH → MAX on three beats (segments light up,
// hub glow heats from blue to magenta, sparks at MAX), then the reasoning_effort line lands.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { GlyphText, CanvasPlane, font } from '../engine/text.js';
import { keys, ease, clamp, smoothstep, pulse, lerp, mulberry32, shake, applyShake, DEG } from '../engine/util.js';

const BEATS = [0, 0.5, 1.0];
const LEVELS = [
  { name: 'LOW', f: 1 / 3, color: '#6fb7ff' },
  { name: 'HIGH', f: 2 / 3, color: '#b48bff' },
  { name: 'MAX', f: 1, color: '#ff5fa0' },
];
const A0 = 180 * DEG, SWEEP = 180 * DEG, R = 4.0, HUB = new THREE.Vector3(0, -0.8, 0);
const ang = (f) => A0 - SWEEP * f;

const segVert = /* glsl */ `
attribute float aF; varying float vF; varying vec3 vL;
void main(){ vF = aF; vL = position; gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0); }`;
const segFrag = /* glsl */ `
uniform float uLit, uHot, uFlash; varying float vF; varying vec3 vL;
void main(){
  vec3 c = vF < 0.5 ? mix(vec3(0.15, 0.45, 1.0), vec3(0.55, 0.4, 1.0), vF * 2.0) : mix(vec3(0.55, 0.4, 1.0), vec3(1.0, 0.3, 0.6), vF * 2.0 - 1.0);
  float on = smoothstep(vF - 0.01, vF + 0.01, uLit);
  float edge = 0.6 + 0.4 * smoothstep(0.0, 0.22, 0.25 - abs(vL.y));
  vec3 lit = c * (2.2 + 1.5 * uHot * vF + 2.0 * uFlash) * edge;
  gl_FragColor = vec4(mix(vec3(0.025, 0.035, 0.07), lit, on), 1.0);
}`;

export class EffortShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.fov = 40;
    this.clearColor.set('#020309');
    const rnd = mulberry32(1010);
    this.bgGlow = glowSprite('soft', '#2a5bd6', 26, { intensity: 0.7 });
    this.bgGlow.position.set(HUB.x, HUB.y + 1.2, -3);
    this.scene.add(this.bgGlow);

    // segmented arc
    const NS = 48;
    const seg = new THREE.BoxGeometry(0.15, 0.5, 0.1);
    const aF = new Float32Array(NS);
    for (let i = 0; i < NS; i++) aF[i] = (i + 0.5) / NS;
    seg.setAttribute('aF', new THREE.InstancedBufferAttribute(aF, 1));
    this.segU = { uLit: { value: 0 }, uHot: { value: 0 }, uFlash: { value: 0 } };
    this.segs = new THREE.InstancedMesh(seg, new THREE.ShaderMaterial({ vertexShader: segVert, fragmentShader: segFrag, uniforms: this.segU }), NS);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1);
    for (let i = 0; i < NS; i++) {
      const a = ang(aF[i]);
      q.setFromAxisAngle(new THREE.Vector3(0, 0, 1), a - Math.PI / 2);
      m.compose(new THREE.Vector3(HUB.x + Math.cos(a) * R, HUB.y + Math.sin(a) * R, 0), q, s);
      this.segs.setMatrixAt(i, m);
    }
    this.scene.add(this.segs);
    const ring = (r, w, col, k) => {
      const mesh = new THREE.Mesh(new THREE.RingGeometry(r - w / 2, r + w / 2, 160, 1, A0 - SWEEP, SWEEP), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(k), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      mesh.position.copy(HUB); mesh.position.z = -0.05; this.scene.add(mesh); return mesh;
    };
    ring(R + 0.5, 0.025, '#4f7fd8', 1.2); ring(R - 0.48, 0.02, '#4f7fd8', 0.8);
    for (let i = 0; i <= 22; i++) { // minor ticks
      const a = ang(i / 22), r0 = R - 0.72, r1 = R - (i % 11 === 0 ? 1.0 : 0.85);
      const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(Math.cos(a) * r0, Math.sin(a) * r0, 0), new THREE.Vector3(Math.cos(a) * r1, Math.sin(a) * r1, 0)]), new THREE.LineBasicMaterial({ color: new THREE.Color('#6f9ce8').multiplyScalar(0.9), transparent: true }));
      l.position.copy(HUB); this.scene.add(l);
    }
    this.ticks = LEVELS.map((lv) => {
      const a = ang(lv.f), p = new CanvasPlane(200, 60, { worldW: 1.25, res: 2 });
      p.draw((g, W, H) => { g.font = font(700, 30, 'sans'); g.letterSpacing = '4px'; g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(lv.name, W / 2 + 2, H / 2); });
      p.position.set(HUB.x + Math.cos(a) * (R + 1.05), HUB.y + Math.sin(a) * (R + 1.05), 0);
      this.scene.add(p); return p;
    });

    // needle + hub
    const ns = new THREE.Shape();
    ns.moveTo(-0.12, -0.55); ns.lineTo(0.12, -0.55); ns.lineTo(0.035, 3.45); ns.lineTo(-0.035, 3.45); ns.closePath();
    this.needle = new THREE.Mesh(new THREE.ShapeGeometry(ns), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.7, 3.2) }));
    this.needle.position.copy(HUB); this.needle.position.z = 0.1;
    this.tip = glowSprite('glow', '#ffffff', 1.4, { intensity: 3 });
    this.scene.add(this.needle, this.tip);
    const hub = new THREE.Mesh(new THREE.CircleGeometry(0.42, 64), new THREE.MeshBasicMaterial({ color: '#0b1222' }));
    hub.position.set(HUB.x, HUB.y, 0.15);
    this.hubRing = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.5, 64), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 1.8, 3.0) }));
    this.hubRing.position.set(HUB.x, HUB.y, 0.16);
    this.scene.add(hub, this.hubRing);

    // sparks thrown off the tip at MAX
    this.NP = 160;
    this.sparkData = Array.from({ length: this.NP }, () => ({ a: (rnd() - 0.5) * 2.4, v: 2 + rnd() * 7, life: 0.25 + rnd() * 0.6, d: rnd() * 0.08 }));
    this.sparkPos = new Float32Array(this.NP * 3);
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(this.sparkPos, 3));
    this.sparks = new THREE.Points(sg, new THREE.PointsMaterial({ color: new THREE.Color(3, 1.6, 2.2), size: 0.07, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.sparks.frustumCulled = false; this.scene.add(this.sparks);

    // overlay type
    this.words = LEVELS.map((lv) => {
      const w = new GlyphText(lv.name, { family: 'sans', weight: 900, size: 190, tracking: 0.04, color: '#ffffff', colorBottom: lv.color, intensity: 1.3 });
      w.position.set(0, -222, 0); this.overlay.add(w); return w;
    });
    this.copy = new GlyphText('思考强度，按需调节', { family: 'cn', weight: 600, size: 54, tracking: 0.08, color: '#ffffff' });
    this.copy.position.set(0, -372, 0);
    this.code = new GlyphText('reasoning_effort  ·  low / high / max', { family: 'mono', weight: 500, size: 24, tracking: 0.02, color: '#8fb4ff' });
    this.code.position.set(0, -436, 0);
    this.overlay.add(this.copy, this.code);
  }

  level(t) { let k = -1; BEATS.forEach((b, i) => { if (t >= b) k = i; }); return k; }

  update(t) {
    const k = this.level(t);
    // needle springs to each level with overshoot
    let f = 0;
    if (k >= 0) {
      const prev = k > 0 ? LEVELS[k - 1].f : 0, u = clamp((t - BEATS[k]) / 0.42);
      f = lerp(prev, LEVELS[k].f, ease.outElastic(u) * 0.85 + ease.outCubic(u) * 0.15);
    }
    const a = ang(clamp(f, -0.05, 1.04));
    this.needle.rotation.z = a - Math.PI / 2;
    const tip = new THREE.Vector3(HUB.x + Math.cos(a) * 3.45, HUB.y + Math.sin(a) * 3.45, 0.12);
    this.tip.position.copy(tip);
    const hit = BEATS.reduce((s, b) => s + pulse(t, b, 0.12), 0);
    this.segU.uLit.value = k >= 0 ? lerp(k > 0 ? LEVELS[k - 1].f : 0, LEVELS[k].f, ease.outCubic(clamp((t - BEATS[k]) / 0.18))) : 0;
    this.segU.uHot.value = smoothstep(1.0, 1.1, t);
    this.segU.uFlash.value = hit;
    this.tip.setOpacity(1 + 1.5 * hit);
    const col = new THREE.Color(k <= 0 ? '#2a5bd6' : k === 1 ? '#6a3fe0' : '#d6307a');
    this.bgGlow.setColor(col, 0.7 + 0.8 * hit);
    this.hubRing.material.color.setRGB(1.2 + hit * 2, 1.8 + hit, 3.0);

    // sparks (deterministic ballistic burst from the MAX hit)
    const st = t - 1.0;
    for (let i = 0; i < this.NP; i++) {
      const d = this.sparkData[i], tt = st - d.d;
      if (tt < 0 || tt > d.life) { this.sparkPos.set([0, 0, -50], i * 3); continue; }
      const dir = a + d.a;
      this.sparkPos.set([tip.x + Math.cos(dir) * d.v * tt, tip.y + Math.sin(dir) * d.v * tt - 4.5 * tt * tt, 0.2], i * 3);
    }
    this.sparks.geometry.attributes.position.needsUpdate = true;
    this.sparks.material.opacity = 1 - smoothstep(0.3, 0.8, st);

    const cam = this.camera;
    cam.position.set(0, -0.3, lerp(13.6, 12.2, ease.outCubic(clamp((t + 0.15) / 2.15))));
    cam.up.set(0, 1, 0); cam.lookAt(0, -0.2, 0);
    applyShake(cam, shake(t, 0.5 + 9 * hit * (k === 2 ? 1.6 : 1), 2.4, 51));
    cam.updateProjectionMatrix(); cam.updateMatrixWorld();

    this.words.forEach((w, i) => {
      const end = i < 2 ? BEATS[i + 1] - 0.03 : 9;
      w.animate(t, { in: { start: BEATS[i] - 0.02, dur: 0.22, stagger: 0.03, style: 'slam', ease: ease.outQuart }, out: { start: end, dur: 0.06, stagger: 0, style: 'fade' } });
      w.visible = t >= BEATS[i] - 0.02 && t < end + 0.06;
    });
    this.copy.animate(t, { in: { start: 1.3, dur: 0.4, stagger: 0.03, style: 'blur' } });
    this.code.animate(t, { in: { start: 1.45, dur: 0.4, stagger: 0.008, style: 'fade' }, opacity: 0.9 });
  }

  post(t) {
    const hit = BEATS.reduce((s, b, i) => s + pulse(t, b, 0.1) * (i === 2 ? 1.5 : 1), 0);
    const su = clamp((t - 1.0) / 0.45);
    return {
      bloom: 0.65, streak: 0.35, vignette: 0.5, grain: 0.05, punch: 0.06 * hit, ca: 0.003 + 0.01 * hit, zoomBlur: 0.04 * hit,
      flash: 0.35 * BEATS.reduce((s, b) => s + pulse(t, b, 0.04), 0), flashColor: [0.85, 0.75, 1.0],
      shock: t >= 1.0 ? [0.05 + 1.2 * ease.outCubic(su), 0.06, 0, 0.03 * (1 - su)] : [0, 0.05, 0, 0],
      shockCenter: [0.5, 0.44],
    };
  }

  samples(t) { return BEATS.some((b) => t >= b && t < b + 0.25) ? 16 : 8; }
}
