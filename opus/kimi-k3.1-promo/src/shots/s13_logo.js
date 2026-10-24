// S13 · 品牌落版 — the converged point detonates into the end card: shock ring and a burst of sparks that
// settles into drifting dust, a moon-phase emblem traced by a comet of light (its "diamond" glint marks the
// frontier), the wordmark letters rush in from behind the camera and lock beside it, an anamorphic light
// sweep crosses the lockup, then tagline, availability and model IDs land on the beat before the fade.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite, FlareGhosts, starField } from './lens.js';
import { GlyphText, CanvasPlane } from '../engine/text.js';
import { ease, clamp, smoothstep, pulse, lerp, mulberry32, shake, applyShake, TAU, DEG } from '../engine/util.js';

// Emblem (overlay px at lockup scale): a ring holding a waxing crescent, cut by an offset disc.
const ER = 80, CUT_R = 72, CUT_D = 24, CUT_A = 200 * DEG;
const HX = (ER * ER - CUT_R * CUT_R + CUT_D * CUT_D) / (2 * CUT_D);
const A0 = CUT_A - Math.atan2(Math.sqrt(ER * ER - HX * HX), HX); // upper horn: the diamond, where the stroke starts
const LOCK_Y = 130, Z0 = 1300, FLY = 0.5, LOCK_Q = 1 - 1.25 / 2.25; // outBack(1.25) first reaches the plane at LOCK_Q

const emVert = /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const emFrag = /* glsl */ `
uniform float uS, uR, uCutR, uA0, uDraw, uFill, uGlow, uDisc, uOpacity, uSettle;
uniform vec2 uCut, uShine;
varying vec2 vUv;
void main(){
  vec2 p = (vUv - 0.5) * uS;
  float r = length(p), dr = r - uR;
  float a = fract((uA0 - atan(p.y, p.x)) / 6.2831853 + 1.0); // clockwise turns from the diamond
  float on = step(0.0005, uDraw);
  float drawn = smoothstep(uDraw + 0.003, uDraw - 0.003, a) * on;
  float trail = smoothstep(uDraw, uDraw - 0.16, a) * on;
  float head = exp(-pow((a - uDraw) * 6.2831853 * uR / 7.0, 2.0)) * on * (1.0 - smoothstep(0.985, 1.0, uDraw));
  float core = exp(-pow(dr / 1.25, 2.0)), halo = exp(-abs(dr) / 7.0);
  float cres = smoothstep(uR + 0.7, uR - 0.7, r) * smoothstep(uCutR - 0.7, uCutR + 0.7, length(p - uCut));
  vec2 n = r > 0.001 ? p / r : vec2(0.0);
  float lit = max(0.0, dot(n, -normalize(uCut)));
  float limb = smoothstep(uR - 30.0, uR - 1.0, r);
  float shine = exp(-pow((p.x - uShine.x) / 26.0, 2.0)) * uShine.y;
  float side = mix(1.0, mix(0.22, 1.0, smoothstep(-0.25, 0.45, dot(n, -normalize(uCut)))), uSettle); // dark-side outline dims once traced
  vec3 ice = vec3(0.42, 0.7, 1.0), white = vec3(1.0, 0.98, 0.96);
  vec3 col = mix(ice, white, 0.55) * core * drawn * (2.4 * side + shine * 4.0);
  col += ice * halo * drawn * 0.35 * side;
  col += white * (core * 9.0 + halo * 1.5) * head;
  col += mix(ice * 0.9, white * 1.9, limb * (0.35 + 0.65 * lit)) * cres * trail * uFill * (1.0 + shine * 1.5);
  col += ice * exp(-max(dr, 0.0) / 20.0) * step(0.0, dr) * pow(lit, 2.5) * uGlow * drawn; // corona on the lit limb
  float disc = smoothstep(uR + 1.2, uR - 1.2, r) * uDisc;
  col += vec3(0.012, 0.02, 0.045) * disc * smoothstep(0.0, uR, r) * (1.0 - cres); // faint earthshine on the dark side
  gl_FragColor = vec4(col, disc) * uOpacity;
}`;

// Burst: every particle leaves the centre at t = 0, drag bleeds its speed, then it drifts like dust.
const dustVert = /* glsl */ `
attribute vec3 aDir; attribute vec4 aP; attribute vec3 aDrift; attribute vec3 aCol;
uniform float uTime; uniform float uPx;
varying vec3 vCol; varying float vA;
void main(){
  float t = max(uTime, 0.0), k = aP.y;
  vec3 pos = aDir * aP.x * (1.0 - exp(-k * t)) / k + aDrift * t;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 0.7 + 0.3 * sin(uTime * (1.3 + aP.w * 2.0) + aP.w * 40.0);
  vA = (0.16 + 2.6 * exp(-t / 0.32)) * tw * step(0.0, uTime);
  vCol = aCol;
  gl_PointSize = aP.z * uPx / -mv.z;
}`;
const dustFrag = /* glsl */ `
varying vec3 vCol; varying float vA;
void main(){ vec2 d = gl_PointCoord - 0.5; gl_FragColor = vec4(vCol * exp(-dot(d, d) * 16.0) * vA, 1.0); }`;

export class LogoShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.near = 0.1; this.camera.far = 2000;
    this.clearColor.set('#010207');
    const rnd = mulberry32(1313);

    // backdrop
    this.stars = starField(2200, 600, 131);
    this.neb1 = glowSprite('soft', '#1e4fd6', 64, { intensity: 0.3 }); this.neb1.position.set(-2, 3, -30);
    this.neb2 = glowSprite('soft', '#6a3fe0', 46, { intensity: 0.14 }); this.neb2.position.set(14, -6, -36);
    this.scene.add(this.stars, this.neb1, this.neb2);
    const N = 1600;
    const aDir = new Float32Array(N * 3), aP = new Float32Array(N * 4), aDrift = new Float32Array(N * 3), aCol = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const ringy = rnd() < 0.6;
      let x, y, z;
      if (ringy) { const a = rnd() * TAU; x = Math.cos(a); y = Math.sin(a); z = (rnd() - 0.5) * 0.3; }
      else { const u = rnd() * 2 - 1, a = rnd() * TAU, s = Math.sqrt(1 - u * u); x = s * Math.cos(a); y = u; z = s * Math.sin(a); }
      const l = Math.hypot(x, y, z), k = 2.2 + rnd() * 2.5;
      const D = ringy ? 5 + rnd() * 11 : 2 + rnd() * 10;
      aDir.set([x / l, y / l, z / l], i * 3);
      aP.set([D * k, k, rnd() < 0.04 ? 0.3 + rnd() * 0.25 : 0.04 + rnd() * 0.1, rnd()], i * 4);
      aDrift.set([(rnd() - 0.5) * 0.25, -0.05 - rnd() * 0.2, (rnd() - 0.5) * 0.2], i * 3);
      const w = rnd();
      aCol.set(w < 0.45 ? [1, 1, 1] : w < 0.85 ? [0.45, 0.72, 1.0] : w < 0.96 ? [0.62, 0.45, 1.0] : [1.0, 0.7, 0.4], i * 3);
    }
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    dg.setAttribute('aDir', new THREE.BufferAttribute(aDir, 3));
    dg.setAttribute('aP', new THREE.BufferAttribute(aP, 4));
    dg.setAttribute('aDrift', new THREE.BufferAttribute(aDrift, 3));
    dg.setAttribute('aCol', new THREE.BufferAttribute(aCol, 3));
    this.du = { uTime: { value: 0 }, uPx: { value: engine.H / (2 * Math.tan(this.camera.fov * DEG / 2)) } };
    this.dust = new THREE.Points(dg, new THREE.ShaderMaterial({ vertexShader: dustVert, fragmentShader: dustFrag, uniforms: this.du, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.dust.frustumCulled = false;
    this.scene.add(this.dust);

    // overlay: everything that belongs to the end card lives in one group for the slow push-in
    this.layout = new THREE.Group();
    this.overlay.add(this.layout);
    const S = ER * 3.8;
    this.emU = {
      uS: { value: S }, uR: { value: ER }, uCutR: { value: CUT_R }, uA0: { value: A0 },
      uCut: { value: new THREE.Vector2(Math.cos(CUT_A) * CUT_D, Math.sin(CUT_A) * CUT_D) },
      uDraw: { value: 0 }, uFill: { value: 0 }, uGlow: { value: 0 }, uDisc: { value: 0 }, uOpacity: { value: 0 }, uSettle: { value: 0 }, uShine: { value: new THREE.Vector2(0, 0) },
    };
    this.emblem = new THREE.Group();
    const em = new THREE.Mesh(new THREE.PlaneGeometry(S, S), new THREE.ShaderMaterial({
      vertexShader: emVert, fragmentShader: emFrag, uniforms: this.emU, transparent: true, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    }));
    em.renderOrder = 8;
    this.diamond = glowSprite('glow', '#ffffff', 34, { intensity: 5, depthTest: false, renderOrder: 20 });
    this.diamondStar = glowSprite('star', '#d4e6ff', 220, { intensity: 1.1, depthTest: false, renderOrder: 20 });
    this.head = glowSprite('glow', '#cfe4ff', 46, { intensity: 4, depthTest: false, renderOrder: 20 });
    this.diamond.position.set(Math.cos(A0) * ER, Math.sin(A0) * ER, 0);
    this.diamondStar.position.copy(this.diamond.position);
    this.emblem.add(em, this.diamond, this.diamondStar, this.head);
    this.layout.add(this.emblem);

    // wordmark: "Kimi" heavy + "K3.1" light, set beside the emblem
    this.wKimi = new GlyphText('Kimi', { family: 'sans', weight: 800, size: 156, color: '#ffffff', colorBottom: '#d8e4ff', intensity: 1.2, align: 'left', seed: 31 });
    this.wVer = new GlyphText('K3.1', { family: 'sans', weight: 300, size: 156, color: '#bfeaff', colorBottom: '#4b8dff', intensity: 1.35, align: 'left', seed: 47 });
    const space = 0.27 * 156, gap = 60;
    this.lockW = 2 * ER + gap + this.wKimi.width + space + this.wVer.width;
    const x0 = -this.lockW / 2;
    this.emHome = new THREE.Vector2(x0 + ER, LOCK_Y);
    this.wKimi.position.set(x0 + 2 * ER + gap, LOCK_Y, 0);
    this.wVer.position.set(this.wKimi.position.x + this.wKimi.width + space, LOCK_Y, 0);
    this.letters = [...this.wKimi.glyphs, ...this.wVer.glyphs].filter((g) => !g.userData.blank);
    for (const g of this.letters) { g.userData.top = g.material.uniforms.colorTop.value.clone(); g.userData.bottom = g.material.uniforms.colorBottom.value.clone(); }
    this.layout.add(this.wKimi, this.wVer);

    // anamorphic sweep: a hot point plus a thin horizontal line riding across the lockup
    this.flare = glowSprite('glow', '#ffffff', 70, { intensity: 6, depthTest: false, renderOrder: 20 });
    this.flareLine = glowSprite('soft', '#8fc4ff', 1, { intensity: 1.4, depthTest: false, renderOrder: 20 });
    this.flareLine.setSize(1500, 9);
    this.layout.add(this.flare, this.flareLine);
    this.ghosts = new FlareGhosts(13);
    this.overlay.add(this.ghosts);

    // copy
    const T = (s, o, y) => { const g = new GlyphText(s, o); g.position.set(0, y, 0); this.layout.add(g); return g; };
    this.cn = T('推进开放智能的前沿', { family: 'cn', weight: 300, size: 44, tracking: 0.34, color: '#ffffff', colorBottom: '#cfe0ff' }, -20);
    this.en = T('ADVANCING THE FRONTIER OF OPEN INTELLIGENCE', { family: 'sans', weight: 500, size: 16, tracking: 0.52, color: '#9db8e8' }, -74);
    this.avail = T('现已上线', { family: 'cn', weight: 500, size: 19, tracking: 0.36, color: '#8fd4ff' }, -205);
    this.chan = T('Kimi.ai  ·  Kimi App  ·  Kimi Work  ·  Kimi Code  ·  Kimi API', { family: 'sans', weight: 500, size: 25, tracking: 0.03, color: '#eef3ff' }, -247);
    this.ids = T('kimi-k3.1-pro   ·   kimi-k3.1-pro-highspeed', { family: 'mono', weight: 400, size: 16, tracking: 0.02, color: '#7f9fd6' }, -292);
    this.note = T('数据来源：Moonshot AI 技术博客（2026.10.23）、Artificial Analysis', { family: 'cn', weight: 400, size: 14, tracking: 0.06, color: '#8b97b3' }, -486);
    this.div = new CanvasPlane(640, 6, { res: 2 });
    this.div.draw((g, W, H) => {
      const gr = g.createLinearGradient(0, 0, W, 0);
      gr.addColorStop(0, 'rgba(111,168,255,0)'); gr.addColorStop(0.5, 'rgba(160,205,255,1)'); gr.addColorStop(1, 'rgba(111,168,255,0)');
      g.fillStyle = gr; g.fillRect(0, H / 2 - 0.75, W, 1.5);
    });
    this.div.position.set(0, -160, 0);
    this.layout.add(this.div);
    this._v = new THREE.Vector3();
  }

  update(t) {
    const cam = this.camera;
    const hit = pulse(t, 0, 0.18);
    cam.position.set(0.5 * Math.sin(t * 0.3), 0.3 * Math.sin(t * 0.21), 30 - 2.6 * ease.inOutQuad(clamp(t / 8)));
    cam.up.set(0, 1, 0); cam.lookAt(0, 0, 0);
    applyShake(cam, shake(t, 0.3 + 6 * hit, 1.6, 71));
    cam.updateProjectionMatrix(); cam.updateMatrixWorld();
    this.du.uTime.value = t;
    this.stars.material.uniforms.time.value = t;
    const glow = smoothstep(0, 1.5, t);
    this.neb1.setOpacity(0.5 + 0.5 * glow); this.neb2.setOpacity(0.4 + 0.6 * glow);

    // layout push-in; emblem: centred hero while it is traced, then it slides into the lockup
    const L = lerp(0.985, 1.025, ease.inOutQuad(clamp((t - 1.2) / 6.8)));
    this.layout.scale.setScalar(L);
    const sl = ease.outExpo(clamp((t - 1.0) / 0.75));
    const es = lerp(2.0, 1.0, sl);
    this.emblem.position.set(lerp(0, this.emHome.x, sl), lerp(10, this.emHome.y, sl), 0);
    this.emblem.scale.setScalar(es);
    const U = this.emU;
    const draw = ease.inOutQuad(clamp((t - 0.06) / 0.9));
    U.uDraw.value = draw;
    U.uFill.value = 0.3 + 0.7 * smoothstep(0.55, 1.15, t);
    U.uGlow.value = 0.6 + 0.9 * pulse(t, 0.97, 0.4);
    U.uDisc.value = smoothstep(0, 0.25, t);
    U.uSettle.value = smoothstep(1.0, 1.6, t);
    U.uOpacity.value = t >= 0 ? 1 : 0;
    const ha = A0 - draw * TAU;
    this.head.position.set(Math.cos(ha) * ER, Math.sin(ha) * ER, 0);
    this.head.setOpacity(draw > 0.001 && draw < 0.995 ? 1 : 0);
    this.head.setSize(46 * es * L);
    // diamond: spark at ignition, flare when the ring closes on the beat, steady twinkle, last glint at 6.0
    const df = 0.8 * pulse(t, 0.04, 0.2) + 1.6 * pulse(t, 0.97, 0.35) + 0.8 * pulse(t, 6.0, 0.4);
    const tw = 0.85 + 0.15 * Math.sin(t * 5.3), dOn = smoothstep(0, 0.08, t);
    this.diamond.setOpacity(dOn * (tw + df)); this.diamond.setSize(34 * es * L * (1 + 0.6 * df));
    this.diamondStar.setOpacity(dOn * (0.55 * tw + df)); this.diamondStar.setSize(220 * es * L * (0.8 + 0.5 * df));
    this.diamondStar.material.uniforms.rot.value = 0.15 + t * 0.03;

    // wordmark letters rush in from behind the camera, overshoot the plane and lock
    this.letters.forEach((g, i) => {
      const u = g.userData, s0 = 1.0 + i * 0.045, q = clamp((t - s0) / FLY);
      const zq = ease.outBack(q, 1.25), xq = ease.outCubic(q), iq = 1 - xq;
      g.position.set(u.bx + (u.r1 - 0.5) * 460 * iq, u.by + (u.r2 - 0.5) * 300 * iq, Z0 * (1 - zq));
      g.rotation.set((u.r3 - 0.5) * 0.8 * iq, (u.r3 - 0.5) * 1.6 * iq, (u.r4 - 0.5) * 0.9 * iq);
      g.scale.set(1, 1, 1);
      const op = smoothstep(0, 0.12, q);
      g.material.uniforms.opacity.value = op;
      g.material.uniforms.blur.value = 24 * Math.pow(iq, 1.5) * 2;
      g.visible = op > 0.002;
      const k = 1 + 1.8 * pulse(t, s0 + LOCK_Q * FLY, 0.09);
      g.material.uniforms.colorTop.value.copy(u.top).multiplyScalar(k);
      g.material.uniforms.colorBottom.value.copy(u.bottom).multiplyScalar(k);
    });

    // light sweep across emblem and wordmark
    const sw = clamp((t - 1.75) / 0.6), bell = Math.sin(Math.PI * sw);
    const sx = lerp(-this.lockW / 2 - 160, this.lockW / 2 + 160, ease.inOutQuad(sw)), sk = 1.5 * bell;
    this.wKimi.setShine(sx - this.wKimi.position.x, 48, sk, 0.35);
    this.wVer.setShine(sx - this.wVer.position.x, 48, sk, 0.35);
    U.uShine.value.set((sx - this.emblem.position.x) / es, sk);
    this.flare.position.set(sx, LOCK_Y + 8, 0); this.flare.setOpacity(bell);
    this.flareLine.position.copy(this.flare.position); this.flareLine.setOpacity(bell * 0.8);

    // flare ghosts follow the diamond
    this.overlay.updateMatrixWorld();
    this.diamond.getWorldPosition(this._v);
    this.ghosts.place(this._v.x, this._v.y, (0.08 + 0.2 * df) * smoothstep(1.2, 1.8, t));

    // copy
    this.cn.animate(t, { in: { start: 2.1, dur: 0.7, stagger: 0.05, style: 'blur' } });
    this.en.animate(t, { in: { start: 2.45, dur: 0.8, stagger: 0.012, style: 'track' }, opacity: 0.85 });
    this.div.scale.x = Math.max(0.001, ease.outExpo(clamp((t - 3.9) / 0.7)));
    this.div.opacity = 0.9 * smoothstep(3.9, 4.05, t);
    this.avail.animate(t, { in: { start: 4.0, dur: 0.5, stagger: 0.04, style: 'rise' } });
    this.chan.animate(t, { in: { start: 4.1, dur: 0.6, stagger: 0.012, style: 'blur' } });
    this.ids.animate(t, { in: { start: 4.45, dur: 0.5, stagger: 0.006, style: 'fade' }, opacity: 0.85 });
    this.note.animate(t, { in: { start: 4.8, dur: 0.6, stagger: 0, style: 'fade' }, opacity: 0.6 });
  }

  post(t) {
    const hit = pulse(t, 0, 0.22), u = clamp(t / 1.1);
    const bell = Math.sin(Math.PI * clamp((t - 1.75) / 0.6));
    return {
      bloom: 0.62 + 0.3 * hit, bloomThreshold: 0.95, streak: 0.42 + 0.5 * bell + 0.4 * hit, streakTint: [0.42, 0.66, 1.0],
      vignette: 0.42, grain: 0.04, letterbox: 0, ca: 0.0025 + 0.012 * hit,
      flash: 0.9 * pulse(t, 0, 0.03), flashColor: [0.86, 0.92, 1.0],
      punch: 0.06 * pulse(t, 0, 0.14), zoomBlur: 0.07 * pulse(t, 0, 0.12),
      shock: t >= 0 ? [0.04 + 1.45 * ease.outCubic(u), 0.085, 0, 0.04 * (1 - u)] : [0, 0.05, 0, 0],
      shockCenter: [0.5, 0.5],
      rays: 0.4 * pulse(t, 0, 0.45), raysPos: [0.5, 0.51],
      fade: smoothstep(7.0, 7.95, t),
    };
  }

  samples(t) { return (t > -0.05 && t < 0.5) || (t > 0.95 && t < 1.85) ? 16 : 8; }
}
