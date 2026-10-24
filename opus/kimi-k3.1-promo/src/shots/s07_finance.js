// S07 · 金融与办公 — a data landscape cut on the beat: low dolly as the bars surge, top-down heatmap
// with a scan band, close-up of the screener filtering rows, then a wide reveal where rejected bars
// sink and the profit curve completes. Stats stack bottom-left, one row per cut.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { GlyphText, CanvasPlane, roundRect, font } from '../engine/text.js';
import { ease, clamp, smoothstep, pulse, lerp, mulberry32, shake, applyShake } from '../engine/util.js';

const NX = 16, NZ = 7, SP = 1.05;
const CUTS = [1, 2, 3];

const barVert = /* glsl */ `
attribute float aTone; attribute float aSel;
varying vec3 vN; varying vec3 vL; varying vec3 vW; varying float vTone; varying float vSel; varying float vH;
void main(){
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vL = position; vW = w.xyz; vTone = aTone; vSel = aSel; vN = normal;
  vH = length(instanceMatrix[1].xyz);
  gl_Position = projectionMatrix * viewMatrix * w;
}`;
const barFrag = /* glsl */ `
uniform vec3 cLow, cMid, cHigh, cSel; uniform float uMirror, uScreen, uScanX;
varying vec3 vN; varying vec3 vL; varying vec3 vW; varying float vTone; varying float vSel; varying float vH;
void main(){
  vec3 base = vTone < 0.5 ? mix(cLow, cMid, vTone * 2.0) : mix(cMid, cHigh, vTone * 2.0 - 1.0);
  float sel = vSel * uScreen, rej = (1.0 - vSel) * uScreen;
  base = mix(base, cSel, sel * 0.7);
  vec3 col;
  if (vN.y > 0.5) {
    float e = min(0.5 - abs(vL.x), 0.5 - abs(vL.z));
    col = base * 1.5 + base * 3.0 * (1.0 - smoothstep(0.0, 0.07, e));
  } else {
    float shade = abs(vN.x) > 0.5 ? 0.8 : 0.55;
    col = base * shade * (0.16 + 0.84 * vL.y * vL.y);
    col += base * 2.5 * (1.0 - smoothstep(0.0, 0.05, (1.0 - vL.y) * vH));
  }
  col *= 1.0 + 2.5 * exp(-pow((vW.x - uScanX) / 0.7, 2.0));
  col = mix(col, vec3(dot(col, vec3(0.3, 0.5, 0.2))) * 0.3, rej);
  col *= 1.0 + sel * 0.6;
  if (uMirror > 0.5) col *= 0.5 * exp(vW.y * 0.55);
  gl_FragColor = vec4(col, 1.0);
}`;
const floorVert = 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
const floorFrag = /* glsl */ `
varying vec3 vW;
float grid(vec2 p, float s){ vec2 q = p / s, fw = fwidth(q); vec2 g = abs(fract(q - 0.5) - 0.5) / fw; return (1.0 - min(min(g.x, g.y), 1.0)) * (1.0 - smoothstep(0.1, 0.4, max(fw.x, fw.y))); }
void main(){
  float d = length(vW.xz * vec2(0.8, 1.0));
  float g = grid(vW.xz + vec2(0.0, 0.525), 1.05);
  vec3 col = vec3(0.008, 0.016, 0.036) + vec3(0.05, 0.13, 0.27) * g * exp(-d * 0.07);
  float a = mix(0.72, 1.0, smoothstep(14.0, 40.0, d));
  gl_FragColor = vec4(mix(col, vec3(0.012, 0.03, 0.07), smoothstep(16.0, 45.0, d)), a);
}`;
const skyFrag = /* glsl */ `
varying vec3 vW;
void main(){ float y = normalize(vW).y; gl_FragColor = vec4(mix(vec3(0.012, 0.03, 0.07), vec3(0.003, 0.005, 0.012), smoothstep(0.0, 0.5, y)), 1.0); }`;
const fillVert = 'attribute float aV; varying float vV; void main(){ vV = aV; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';
const fillFrag = 'varying float vV; void main(){ gl_FragColor = vec4(vec3(0.05, 0.42, 0.85) * pow(vV, 1.6) * 0.42, 1.0); }';
const dustVert = /* glsl */ `
attribute float aR; uniform float time; varying float vA;
void main(){ vec3 p = position; p.y += sin(time * 0.6 + aR * 20.0) * 0.15;
  vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
  gl_PointSize = (2.0 + aR * 3.5) * (14.0 / -mv.z); vA = 0.35 + 0.65 * aR; }`;
const dustFrag = 'varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = exp(-dot(d, d) * 16.0); gl_FragColor = vec4(vec3(0.35, 0.75, 1.0) * a * vA * 0.7, 1.0); }';

// Illustrative screener / P&L (labelled 示例数据 on screen).
const ROWS = [
  ['公司 A', 22.4, 48.1, 15.2], ['公司 B', 8.9, 52.3, 18.0], ['公司 C', 31.0, 61.7, 21.4], ['公司 D', 17.5, 35.2, 9.8],
  ['公司 E', 26.8, 44.9, 13.1], ['公司 F', 12.2, 58.4, 16.6], ['公司 G', 19.3, 41.5, 12.7], ['公司 H', 5.4, 29.8, 7.2],
  ['公司 I', 16.1, 39.0, 14.3], ['公司 J', 28.5, 55.2, 19.8],
];
const PASS = (r) => r[1] > 15 && r[2] > 40 && r[3] > 12;
const WATERFALL = [['营收', 100, 'total'], ['成本', -58], ['毛利', 42, 'sub'], ['费用', -19], ['营业利润', 23, 'sub'], ['税费', -5], ['净利润', 18, 'final']];
const STATS = [
  { label: '金融研究', v: 70.4, d: '▲ 11.6', at: 1.0 },
  { label: '金融建模', v: 57.6, d: '▲ 7.2', at: 2.0 },
  { label: 'OfficeQA Pro v2', v: 64.4, d: null, at: 3.0 },
];

export class FinanceShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.near = 0.1; this.camera.far = 400;
    this.clearColor.set('#03060f');
    const rnd = mulberry32(77);
    this.m4 = new THREE.Matrix4();

    const sky = new THREE.Mesh(new THREE.SphereGeometry(160, 32, 16), new THREE.ShaderMaterial({ vertexShader: floorVert, fragmentShader: skyFrag, side: THREE.BackSide, depthWrite: false }));
    this.scene.add(sky);

    // bars + mirrored reflection under a translucent floor
    const n = NX * NZ;
    const geo = new THREE.BoxGeometry(1, 1, 1); geo.translate(0, 0.5, 0);
    const tone = new Float32Array(n), sel = new Float32Array(n);
    this.bars = [];
    for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) {
      const k = this.bars.length, u = i / (NX - 1);
      const h = 0.45 + 3.7 * Math.pow(u, 1.25) * (0.72 + 0.28 * Math.sin(j * 1.3 + i * 0.45)) + rnd() * 0.65;
      const s = h > 2.0 && rnd() < 0.42 ? 1 : 0;
      tone[k] = clamp(h / 5); sel[k] = s;
      this.bars.push({ i, j, h, sel: s, x: (i - (NX - 1) / 2) * SP, z: (j - (NZ - 1) / 2) * SP, delay: -0.35 + 0.045 * i + 0.035 * (NZ - 1 - j) });
    }
    geo.setAttribute('aTone', new THREE.InstancedBufferAttribute(tone, 1));
    geo.setAttribute('aSel', new THREE.InstancedBufferAttribute(sel, 1));
    const barMat = (mirror) => new THREE.ShaderMaterial({
      vertexShader: barVert, fragmentShader: barFrag, side: mirror ? THREE.DoubleSide : THREE.FrontSide,
      uniforms: { cLow: { value: new THREE.Color(0.02, 0.05, 0.16) }, cMid: { value: new THREE.Color(0.03, 0.30, 0.55) }, cHigh: { value: new THREE.Color(0.25, 0.95, 0.85) }, cSel: { value: new THREE.Color(0.35, 1.0, 0.6) }, uMirror: { value: mirror ? 1 : 0 }, uScreen: { value: 0 }, uScanX: { value: -100 } },
    });
    this.barMesh = new THREE.InstancedMesh(geo, barMat(false), n);
    this.mirror = new THREE.InstancedMesh(geo, barMat(true), n);
    this.mirror.scale.y = -1;
    this.barMesh.frustumCulled = this.mirror.frustumCulled = false;
    this.scene.add(this.barMesh, this.mirror);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.ShaderMaterial({ vertexShader: floorVert, fragmentShader: floorFrag, transparent: true }));
    floor.rotation.x = -Math.PI / 2; this.scene.add(floor);
    this.scan = glowSprite('soft', '#4fd0ff', 1, { intensity: 1.4 });
    this.scan.setSize(2.2, 11); this.scene.add(this.scan);

    // profit curve: glowing tube, gradient area fill, drop lines and data points
    const P = [0.0, 0.35, -0.2, 0.45, 0.1, -0.35, 0.3, 0.55, -0.1, 0.4, 0.2, 0.5, 0.3].map((w, k) => new THREE.Vector3(-8.4 + k * 1.4, 4.3 + 2.6 * Math.pow(k / 12, 1.5) + w, -4.9));
    this.curve = new THREE.CatmullRomCurve3(P, false, 'centripetal');
    this.SEG = 300;
    this.tube = new THREE.Mesh(new THREE.TubeGeometry(this.curve, this.SEG, 0.045, 8, false), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.55, 1.5, 2.3) }));
    const fp = [], fv = [], xs = [];
    for (let s = 0; s <= this.SEG; s++) xs.push(this.curve.getPointAt(s / this.SEG));
    for (let s = 0; s < this.SEG; s++) {
      const a = xs[s], b = xs[s + 1];
      fp.push(a.x, a.y, a.z, a.x, 0, a.z, b.x, b.y, b.z, b.x, b.y, b.z, a.x, 0, a.z, b.x, 0, b.z);
      fv.push(1, 0, 1, 1, 0, 0);
    }
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3));
    fg.setAttribute('aV', new THREE.Float32BufferAttribute(fv, 1));
    this.fill = new THREE.Mesh(fg, new THREE.ShaderMaterial({ vertexShader: fillVert, fragmentShader: fillFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
    this.scene.add(this.tube, this.fill);
    this.points = P.map((p) => {
      const s = xs.findIndex((q) => q.x >= p.x - 1e-3);
      const dot = glowSprite('glow', '#9ff6ff', 0.9, { intensity: 3 }); dot.position.copy(p);
      const drop = new THREE.Line(new THREE.BufferGeometry().setFromPoints([p, new THREE.Vector3(p.x, 0, p.z)]), new THREE.LineDashedMaterial({ color: new THREE.Color(0.2, 0.55, 0.9), dashSize: 0.12, gapSize: 0.1, transparent: true, opacity: 0.6, depthWrite: false }));
      drop.computeLineDistances();
      this.scene.add(dot, drop);
      return { dot, drop, f: Math.max(0, s) / this.SEG };
    });
    this.head = glowSprite('glow', '#ffffff', 1.4, { intensity: 4 });
    this.scene.add(this.head);

    // floating data dust
    const dn = 520, dp = new Float32Array(dn * 3), dr = new Float32Array(dn);
    for (let i = 0; i < dn; i++) { dp.set([(rnd() - 0.5) * 30, rnd() * 10, (rnd() - 0.5) * 20], i * 3); dr[i] = rnd(); }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(dp, 3)); dg.setAttribute('aR', new THREE.BufferAttribute(dr, 1));
    this.dust = new THREE.Points(dg, new THREE.ShaderMaterial({ vertexShader: dustVert, fragmentShader: dustFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { time: { value: 0 } } }));
    this.dust.frustumCulled = false; this.scene.add(this.dust);

    // spreadsheet panels in the scene
    this.p1 = new CanvasPlane(900, 640, { worldW: 4.8, res: 1.5, depthWrite: true });
    this.p1.position.set(6.0, 2.6, 5.4); this.p1.rotation.y = -0.35;
    this.p2 = new CanvasPlane(760, 520, { worldW: 4.4, res: 1.5, depthWrite: true });
    this.p2.position.set(-9.6, 4.0, -2.4); this.p2.rotation.y = 0.75;
    this.scene.add(this.p1, this.p2);
    this.p1Key = this.p2Key = '';

    // overlay
    this.headline = new GlyphText('从筛选到盈利分析，一气呵成', { family: 'cn', weight: 600, size: 58, tracking: 0.04, color: '#ffffff', align: 'left' });
    this.headline.position.set(-960 + 96, 540 - 130, 0);
    this.kicker = new GlyphText('FINANCIAL RESEARCH  ·  MODELING  ·  OFFICE', { family: 'sans', weight: 600, size: 16, tracking: 0.28, color: '#8fb4ff', align: 'left' });
    this.kicker.position.set(-960 + 98, 540 - 190, 0);
    this.card = new CanvasPlane(600, 300, { res: 1.5 });
    this.card.position.set(-960 + 96 + 300, -150 - 150, 0);
    this.overlay.add(this.headline, this.kicker, this.card);
  }

  // ---------------------------------------------------------------------------------------------
  pose(t) {
    const P1 = this.p1.position, a = this.p1.rotation.y;
    const nrm = [Math.sin(a), 0, Math.cos(a)], lat = [Math.cos(a), 0, -Math.sin(a)];
    let u;
    if (t < 1) {
      u = clamp((t + 0.3) / 1.3);
      return { p: [lerp(-7.2, -4.8, u), lerp(0.45, 0.6, u), lerp(6.6, 6.1, u)], l: [lerp(2.5, 4.2, u), 2.8, -1.5], fov: 54, cut: -10 };
    }
    if (t < 2) {
      u = t - 1;
      return { p: [0.6, lerp(18.5, 16.5, ease.outCubic(u)), -1.5], l: [0.6, 0, -1.501], up: [0, 0, -1], roll: lerp(0.32, 0.12, u), fov: 42, cut: 1 };
    }
    if (t < 3) {
      u = t - 2;
      // raking angle from the right: the result column is near and large, the table recedes left
      const s = lerp(2.9, 2.5, u), d = lerp(2.3, 2.1, u), r = lerp(0.2, 0.45, u);
      return {
        p: [P1.x + lat[0] * s + nrm[0] * d, P1.y + lerp(0.45, 0.3, u), P1.z + lat[2] * s + nrm[2] * d],
        l: [P1.x + lat[0] * r, P1.y - 0.15, P1.z + lat[2] * r], fov: 44, cut: 2,
      };
    }
    u = ease.outCubic(clamp((t - 3) / 1.3));
    return { p: [lerp(-12.5, -15.5, u), lerp(7.2, 9.2, u), lerp(14.5, 18.5, u)], l: [1.0, 2.2, 0], fov: 38, cut: 3 };
  }

  drawP1(t) {
    const s = (t - 2.05) / 0.065;
    const nEval = clamp(Math.floor(s) + 1, 0, ROWS.length);
    const scanRow = s >= 0 && s < ROWS.length ? Math.floor(s) : -1;
    const key = `${nEval}|${scanRow}`;
    if (key === this.p1Key) return;
    this.p1Key = key;
    const passed = ROWS.slice(0, nEval).filter(PASS).length;
    this.p1.draw((g, W, H) => {
      roundRect(g, 2, 2, W - 4, H - 4, 18); g.fillStyle = 'rgb(10,18,36)'; g.fill(); g.strokeStyle = 'rgba(100,160,255,0.5)'; g.lineWidth = 2; g.stroke();
      g.textBaseline = 'alphabetic';
      g.font = font(600, 26, 'cn'); g.fillStyle = '#ffffff'; g.fillText('筛选器 · SCREENER', 30, 44);
      g.font = font(400, 16, 'cn'); g.fillStyle = 'rgba(160,180,220,0.7)'; g.fillText('示例数据', 262, 42);
      const label = `符合条件 ${passed} / ${ROWS.length}`;
      g.font = font(600, 19, 'cn'); const pw = g.measureText(label).width + 36;
      roundRect(g, W - 30 - pw, 16, pw, 38, 19); g.fillStyle = nEval ? 'rgba(94,224,160,0.16)' : 'rgba(120,160,230,0.1)'; g.fill();
      g.strokeStyle = nEval ? 'rgba(94,224,160,0.8)' : 'rgba(120,160,230,0.4)'; g.lineWidth = 1.5; g.stroke();
      g.fillStyle = nEval ? '#7dffbf' : 'rgba(170,190,230,0.7)'; g.textAlign = 'center'; g.fillText(label, W - 30 - pw / 2, 42); g.textAlign = 'left';
      let cx = 30;
      for (const c of ['营收增速 > 15%', '毛利率 > 40%', 'ROE > 12%']) {
        g.font = font(500, 16, 'mono'); const w = g.measureText(c).width + 28;
        roundRect(g, cx, 66, w, 34, 17); g.fillStyle = 'rgba(79,141,255,0.14)'; g.fill(); g.strokeStyle = 'rgba(120,190,255,0.7)'; g.lineWidth = 1.5; g.stroke();
        g.fillStyle = '#cfe2ff'; g.fillText(c, cx + 14, 89); cx += w + 12;
      }
      const cols = [[40, 'left', '公司'], [400, 'right', '营收增速'], [560, 'right', '毛利率'], [700, 'right', 'ROE'], [800, 'center', '结果']];
      g.font = font(500, 16, 'cn'); g.fillStyle = 'rgba(150,175,220,0.75)';
      for (const [x, al, name] of cols) { g.textAlign = al; g.fillText(name, x, 140); }
      g.fillStyle = 'rgba(120,160,230,0.25)'; g.fillRect(28, 152, W - 56, 1.5);
      ROWS.forEach((r, i) => {
        const y = 190 + i * 40, done = i < nEval, ok = PASS(r);
        if (i === scanRow) { g.fillStyle = 'rgba(90,200,255,0.30)'; g.fillRect(28, y - 27, W - 56, 38); }
        else if (done && ok) { g.fillStyle = 'rgba(60,220,150,0.12)'; g.fillRect(28, y - 27, W - 56, 38); }
        g.globalAlpha = done && !ok ? 0.35 : 1;
        g.font = font(500, 20, 'cn'); g.fillStyle = '#e4ebf7'; g.textAlign = 'left'; g.fillText(r[0], 40, y);
        g.font = font(400, 20, 'mono');
        [[400, r[1], 15], [560, r[2], 40], [700, r[3], 12]].forEach(([x, v, lim]) => { g.textAlign = 'right'; g.fillStyle = done && v <= lim ? '#ff8a96' : '#e4ebf7'; g.fillText(v.toFixed(1) + '%', x, y); });
        g.textAlign = 'center';
        if (done) { g.font = font(700, 22, 'sans'); g.fillStyle = ok ? '#5ee0a0' : '#ff6b7a'; g.fillText(ok ? '✓' : '✗', 800, y); }
        g.globalAlpha = 1;
      });
    });
  }

  drawP2(t) {
    const q = WATERFALL.map((_, k) => ease.outCubic(clamp((t - (0.4 + 0.42 * k)) / 0.35)));
    const badge = smoothstep(3.3, 3.5, t);
    const key = q.map((v) => v.toFixed(3)).join() + badge.toFixed(2);
    if (key === this.p2Key) return;
    this.p2Key = key;
    this.p2.draw((g, W, H) => {
      roundRect(g, 2, 2, W - 4, H - 4, 18); g.fillStyle = 'rgb(10,18,36)'; g.fill(); g.strokeStyle = 'rgba(100,160,255,0.5)'; g.lineWidth = 2; g.stroke();
      g.textBaseline = 'alphabetic';
      g.font = font(600, 24, 'cn'); g.fillStyle = '#ffffff'; g.fillText('盈利分析 · PROFIT ANALYSIS', 28, 42);
      g.font = font(400, 15, 'cn'); g.fillStyle = 'rgba(160,180,220,0.7)'; g.textAlign = 'right'; g.fillText('示例数据', W - 28, 40); g.textAlign = 'left';
      const base = 440, k = 3.0, bw = 64, gap = (W - 80 - bw * 7) / 6;
      g.fillStyle = 'rgba(120,160,230,0.3)'; g.fillRect(36, base, W - 72, 1.5);
      let run = 0;
      WATERFALL.forEach(([name, v, kind], i) => {
        const x = 40 + i * (bw + gap);
        let y0, y1;
        if (kind) { y0 = 0; y1 = v; run = v; } else { y0 = run + v; y1 = run; run += v; }
        const top = base - y1 * k, h = (y1 - y0) * k * q[i];
        const col = kind === 'final' ? '#5ee0a0' : kind === 'sub' ? '#4fc3ff' : kind ? '#3d7bff' : '#ff6b7a';
        const gr = g.createLinearGradient(0, top, 0, top + (y1 - y0) * k); gr.addColorStop(0, col); gr.addColorStop(1, col + '88');
        g.fillStyle = gr; g.fillRect(x, kind ? base - h : top, bw, h);
        g.globalAlpha = q[i];
        g.font = font(700, 17, 'sans'); g.fillStyle = '#e4ebf7'; g.textAlign = 'center'; g.fillText((v > 0 && !kind ? '+' : '') + v, x + bw / 2, top - 10);
        g.font = font(500, 16, 'cn'); g.fillStyle = 'rgba(190,205,235,0.85)'; g.fillText(name, x + bw / 2, base + 28);
        g.globalAlpha = 1; g.textAlign = 'left';
      });
      if (badge > 0) {
        g.globalAlpha = badge; roundRect(g, W - 214, 64, 186, 40, 20); g.fillStyle = 'rgba(94,224,160,0.16)'; g.fill(); g.strokeStyle = '#5ee0a0'; g.lineWidth = 1.5; g.stroke();
        g.font = font(600, 18, 'cn'); g.fillStyle = '#9dffd0'; g.textAlign = 'center'; g.fillText('净利率 18%', W - 121, 91); g.textAlign = 'left'; g.globalAlpha = 1;
      }
    });
  }

  drawCard(t, ft) {
    const vis = STATS.map((s) => smoothstep(s.at - 0.02, s.at + 0.1, t));
    const out = 1 - smoothstep(3.62, 3.8, t);
    this.card.opacity = vis[0] * out;
    if (this.card.opacity <= 0.001) return;
    const rows = vis.reduce((a, b) => a + b, 0);
    this.card.draw((g, W) => {
      roundRect(g, 2, 2, W - 4, 56 + 76 * rows, 18); g.fillStyle = 'rgba(8,14,28,0.74)'; g.fill(); g.strokeStyle = 'rgba(110,160,255,0.45)'; g.lineWidth = 1.5; g.stroke();
      g.textBaseline = 'alphabetic';
      g.font = font(600, 14, 'sans'); g.fillStyle = 'rgba(150,185,240,0.85)'; g.letterSpacing = '3px'; g.fillText('KIMI K3.1 PRO  ·  ▲ 较 KIMI K3', 26, 36); g.letterSpacing = '0px';
      STATS.forEach((s, i) => {
        if (vis[i] <= 0) return;
        const y = 56 + i * 76, dx = 40 * (1 - ease.outCubic(clamp((t - s.at) / 0.35)));
        const fl = pulse(t, s.at, 0.18);
        g.save(); g.globalAlpha = vis[i]; g.translate(dx, 0);
        if (fl > 0.01) { g.fillStyle = `rgba(110,170,255,${0.3 * fl})`; g.fillRect(8, y + 4, W - 16, 68); }
        g.fillStyle = 'rgba(120,160,230,0.18)'; g.fillRect(26, y + 2, W - 52, 1);
        g.font = font(500, 26, 'cn'); g.fillStyle = '#e4ebf7'; g.fillText(s.label, 26, y + 48);
        const qv = ease.outExpo(clamp((ft - s.at) / 0.4));
        g.font = font(800, 50, 'sans'); g.fillStyle = '#ffffff'; g.textAlign = 'right'; g.fillText((s.v * qv).toFixed(1), s.d ? 450 : W - 26, y + 56); g.textAlign = 'left';
        if (s.d) {
          roundRect(g, 466, y + 22, 108, 38, 19); g.fillStyle = 'rgba(94,224,160,0.15)'; g.fill(); g.strokeStyle = 'rgba(94,224,160,0.8)'; g.lineWidth = 1.5; g.stroke();
          g.font = font(700, 20, 'sans'); g.fillStyle = '#7dffbf'; g.textAlign = 'center'; g.fillText(s.d, 520, y + 48); g.textAlign = 'left';
        }
        g.restore();
      });
    });
  }

  update(t, ctx) {
    const ft = ctx ? ctx.ft : t;
    const cam = this.camera, pz = this.pose(t);
    cam.position.set(...pz.p);
    cam.up.set(...(pz.up || [0, 1, 0]));
    cam.lookAt(...pz.l);
    if (pz.roll) cam.rotateZ(pz.roll);
    cam.fov = pz.fov * (1 - 0.07 * pulse(t, pz.cut, 0.22)); cam.updateProjectionMatrix();
    applyShake(cam, shake(t, 0.5, 1.0, 71));
    cam.updateMatrixWorld();

    // bars surge in a wave, rejected ones sink once the screener has run
    for (let k = 0; k < this.bars.length; k++) {
      const b = this.bars[k];
      let h = b.h * Math.max(0.001, ease.outBack(clamp((t - b.delay) / 0.55), 1.3));
      if (!b.sel) h *= lerp(1, 0.22, ease.inOutCubic(clamp((t - 3.05 - b.i * 0.012) / 0.4)));
      this.m4.makeScale(0.64, h, 0.64).setPosition(b.x, 0, b.z);
      this.barMesh.setMatrixAt(k, this.m4); this.mirror.setMatrixAt(k, this.m4);
    }
    this.barMesh.instanceMatrix.needsUpdate = this.mirror.instanceMatrix.needsUpdate = true;
    const scanX = t > 1 && t < 2 ? lerp(-10, 10, ease.inOutQuad(clamp((t - 1.08) / 0.8))) : -100;
    for (const m of [this.barMesh.material, this.mirror.material]) { m.uniforms.uScreen.value = smoothstep(3.0, 3.35, t); m.uniforms.uScanX.value = scanX; }
    this.scan.position.set(scanX, 0.03, 0); this.scan.rotation.set(0, 0, 0); this.scan.setOpacity(scanX > -50 ? 1 : 0);

    // profit curve grows left to right
    const q = ease.inOutQuad(clamp((t + 0.1) / 2.6));
    const seg = Math.floor(q * this.SEG);
    this.tube.geometry.setDrawRange(0, seg * 8 * 6);
    this.fill.geometry.setDrawRange(0, seg * 6);
    this.head.position.copy(this.curve.getPointAt(Math.max(0.001, q)));
    this.head.setOpacity(q > 0.002 && q < 0.999 ? 1 : 0.35);
    for (const p of this.points) {
      const a = smoothstep(p.f - 0.01, p.f + 0.02, q);
      p.dot.setOpacity(a); p.dot.setSize(0.9 * (1 + 1.5 * pulse(q, p.f, 0.03)));
      p.drop.material.opacity = 0.6 * a; p.drop.visible = a > 0.01;
    }
    this.dust.material.uniforms.time.value = t;

    this.drawP1(t); this.drawP2(t);
    this.headline.animate(t, { in: { start: 0.2, dur: 0.6, stagger: 0.035, style: 'rise' }, out: { start: 1.8, dur: 0.18, stagger: 0.008, style: 'fade' } });
    this.kicker.animate(t, { in: { start: 0.5, dur: 0.5, stagger: 0.01, style: 'track' }, out: { start: 1.8, dur: 0.18, stagger: 0, style: 'fade' }, opacity: 0.85 });
    this.drawCard(t, ft);
  }

  post(t) {
    let p = 0, f = 0;
    for (const c of CUTS) { p += pulse(t, c, 0.14); f += pulse(t, c, 0.05); }
    return { bloom: 0.6, bloomThreshold: 1.0, streak: 0.28, vignette: 0.42, grain: 0.045, ca: 0.0025 + 0.006 * p, punch: 0.045 * p, zoomBlur: 0.05 * p, flash: 0.3 * f, temperature: -0.05 };
  }

  samples(t) { return CUTS.some((c) => t >= c && t < c + 0.15) ? 12 : 8; }
}
