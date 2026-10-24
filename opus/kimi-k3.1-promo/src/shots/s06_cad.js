// S06 · 参数化 3D 建模 — a blueprint sketch draws itself with dimensions while a script types, the
// profiles extrude into two meshing metal gears; top-down spin-in, arcing crane to a low hero orbit,
// then rise and push onto the hub so the iris opens from frame centre.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { tokenize } from './codepanels.js';
import { GlyphText, CanvasPlane, roundRect, font } from '../engine/text.js';
import { keys, ease, clamp, smoothstep, shake, applyShake, lerp, DEG } from '../engine/util.js';

// Spur gear profile (trapezoidal teeth — reads as involute at this scale).
function gearShape(z, m, holes) {
  const r = (m * z) / 2, ra = r + m, rf = r - 1.25 * m, pitch = (Math.PI * 2) / z;
  const half = (rr) => { const k = (rr - rf) / (ra - rf); return (pitch / 4) * lerp(1.3, 0.55, k * k * 0.6 + k * 0.4); };
  const pts = [];
  for (let i = 0; i < z; i++) {
    const a = i * pitch;
    pts.push([a - pitch / 2, rf]);
    for (let s = 0; s <= 5; s++) { const rr = lerp(rf, ra, s / 5); pts.push([a - half(rr), rr]); }
    for (let s = 5; s >= 0; s--) { const rr = lerp(rf, ra, s / 5); pts.push([a + half(rr), rr]); }
  }
  const shape = new THREE.Shape();
  pts.forEach(([a, rr], i) => { const x = Math.cos(a) * rr, y = Math.sin(a) * rr; i ? shape.lineTo(x, y) : shape.moveTo(x, y); });
  shape.closePath();
  const hole = (x, y, hr) => { const h = new THREE.Path(); h.absarc(x, y, hr, 0, Math.PI * 2, true); shape.holes.push(h); };
  hole(0, 0, r * 0.2);
  for (let i = 0; i < holes; i++) { const a = (i / holes) * Math.PI * 2 + 0.3; hole(Math.cos(a) * r * 0.58, Math.sin(a) * r * 0.58, r * 0.13); }
  // shape (x, y) lands on world (x, 0, -y) after rotateX(-90°)
  const outline = pts.map(([a, rr]) => new THREE.Vector3(Math.cos(a) * rr, 0, -Math.sin(a) * rr));
  outline.push(outline[0].clone());
  return { shape, r, ra, rf, outline };
}

const SCRIPT = `import cad
a = cad.spur_gear(z=24, m=0.25, width=0.7)
a.bore(d=1.2).holes(n=6, d=0.78)
b = cad.spur_gear(z=12, m=0.25, width=0.7)
cad.mesh(a, b, center_distance=4.5)`;

const gridVert = 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }';
const gridFrag = /* glsl */ `
varying vec3 vW; uniform float a;
float grid(vec2 p, float s, float w){
  vec2 q = p / s, fw = fwidth(q);
  vec2 g = abs(fract(q - 0.5) - 0.5) / fw;
  return (1.0 - min(min(g.x, g.y) / w, 1.0)) * (1.0 - smoothstep(0.08, 0.35, max(fw.x, fw.y)));
}
void main(){
  float d = length(vW.xz - vec2(1.6, 0.0));
  vec3 base = mix(vec3(0.020, 0.045, 0.10), vec3(0.006, 0.012, 0.03), smoothstep(4.0, 26.0, d));
  float g = grid(vW.xz, 0.25, 1.0) * 0.16 + grid(vW.xz, 1.0, 1.2) * 0.42;
  vec3 col = base + vec3(0.12, 0.28, 0.62) * g * exp(-d * 0.07) * a;
  gl_FragColor = vec4(col * (1.0 - smoothstep(28.0, 58.0, d)), 1.0);
}`;

// Dark studio for the metal: navy dome, long light strips for edge glints, a soft top box.
function studioEnv(renderer) {
  const s = new THREE.Scene();
  s.add(new THREE.Mesh(new THREE.SphereGeometry(40, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `varying vec3 vP; void main(){
      float y = normalize(vP).y;
      vec3 c = mix(vec3(0.05, 0.10, 0.22), vec3(0.012, 0.02, 0.045), smoothstep(0.0, 0.7, y));
      gl_FragColor = vec4(mix(c, vec3(0.004, 0.006, 0.012), smoothstep(0.0, -0.4, y)), 1.0); }`,
  })));
  const box = (w, h, pos, k, color = '#ffffff') => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(...pos); m.lookAt(0, 0, 0); s.add(m);
  };
  box(26, 3.2, [0, 9, -24], 4);
  box(3.2, 22, [-26, 6, 4], 4, '#a8c8ff');
  box(3.2, 22, [24, 6, -8], 3.5);
  box(12, 12, [6, 30, 10], 1.2);
  box(30, 2, [0, 2, 26], 2.2, '#7fb0ff');
  const pm = new THREE.PMREMGenerator(renderer);
  const tex = pm.fromScene(s, 0.02).texture;
  pm.dispose();
  return tex;
}

const V = (x, z, y = 0.012) => new THREE.Vector3(x, y, z);
const sph = (c, az, el, d) => [c[0] + Math.sin(az) * Math.cos(el) * d, c[1] + Math.sin(el) * d, c[2] + Math.cos(az) * Math.cos(el) * d];

export class CadShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.near = 0.05; this.camera.far = 400;
    this.scene.environment = studioEnv(engine.renderer);

    this.grid = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.ShaderMaterial({ vertexShader: gridVert, fragmentShader: gridFrag, uniforms: { a: { value: 1 } } }));
    this.grid.rotation.x = -Math.PI / 2; this.scene.add(this.grid);
    const haze = glowSprite('soft', '#1d3f8a', 46, { intensity: 0.5 });
    haze.position.set(2.5, 2, -24); this.scene.add(haze);

    // gears ------------------------------------------------------------------------------------
    this.A = gearShape(24, 0.25, 6);
    this.B = gearShape(12, 0.25, 4);
    this.dist = this.A.r + this.B.r;
    const ext = (g) => { const geo = new THREE.ExtrudeGeometry(g.shape, { depth: 0.7, bevelEnabled: true, bevelThickness: 0.035, bevelSize: 0.03, bevelSegments: 2, curveSegments: 32 }); geo.rotateX(-Math.PI / 2); return geo; };
    const edgeMat = () => new THREE.LineBasicMaterial({ color: new THREE.Color('#58a6ff').multiplyScalar(1.5), transparent: true, depthWrite: false });
    const layerMat = () => new THREE.LineBasicMaterial({ color: new THREE.Color('#8fdcff').multiplyScalar(4.5), transparent: true, depthWrite: false });
    const sketchMat = () => new THREE.LineBasicMaterial({ color: new THREE.Color('#6fc0ff').multiplyScalar(2.0), transparent: true, depthWrite: false });
    const build = (g, color, x) => {
      const piv = new THREE.Group(); piv.position.x = x; this.scene.add(piv);
      const mesh = new THREE.Mesh(ext(g), new THREE.MeshStandardMaterial({ color, metalness: 1.0, roughness: 0.3 }));
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry, 25), edgeMat());
      mesh.add(edges);
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(g.r * 0.196, g.r * 0.196, 1.4, 48), new THREE.MeshStandardMaterial({ color: '#56627a', metalness: 1, roughness: 0.4 }));
      shaft.position.y = 0.35;
      const sketch = new THREE.Line(new THREE.BufferGeometry().setFromPoints(g.outline), sketchMat());
      sketch.position.y = 0.012;
      const layer = new THREE.Line(sketch.geometry, layerMat());
      piv.add(mesh, shaft, sketch, layer);
      return { piv, mesh, edges, shaft, sketch, layer };
    };
    this.gA = build(this.A, '#c7d0de', 0);
    this.gB = build(this.B, '#8fa8d8', this.dist);

    // blueprint annotations: centre lines, pitch circles, dimensions, leaders ----------------------
    this.lines = [];
    const line = (pts, t0, d, opts = {}) => {
      const col = new THREE.Color(opts.color || '#6fc0ff').multiplyScalar(opts.k ?? 1.5);
      const mat = opts.dash ? new THREE.LineDashedMaterial({ color: col, dashSize: opts.dash[0], gapSize: opts.dash[1], transparent: true, depthWrite: false })
        : new THREE.LineBasicMaterial({ color: col, transparent: true, depthWrite: false });
      const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat);
      if (opts.dash) l.computeLineDistances();
      this.scene.add(l); this.lines.push({ l, t0, d }); return l;
    };
    const circle = (cx, r, n = 160) => Array.from({ length: n + 1 }, (_, i) => V(cx + Math.cos(i / n * Math.PI * 2) * r, Math.sin(i / n * Math.PI * 2) * r));
    const axis = { color: '#3b6fb8', k: 1.6, dash: [0.3, 0.1] };
    line([V(-4.4, 0), V(this.dist + 2.6, 0)], -0.25, 0.5, axis);
    line([V(0, -4.4), V(0, 4.4)], -0.15, 0.5, axis);
    line([V(this.dist, -2.4), V(this.dist, 4.4)], 0.0, 0.5, axis);
    line(circle(0, this.A.r), 0.0, 0.8, { color: '#9a8cff', k: 1.6, dash: [0.12, 0.08] });
    line(circle(this.dist, this.B.r, 96), 0.75, 0.5, { color: '#9a8cff', k: 1.6, dash: [0.12, 0.08] });
    const ra = this.A.ra, dim = { k: 1.3 };
    line([V(-ra, -0.3), V(-ra, -4.15)], 0.3, 0.25, dim); line([V(ra, -0.3), V(ra, -4.15)], 0.3, 0.25, dim);
    line([V(-ra + 0.25, -3.82), V(-ra, -3.9), V(-ra + 0.25, -3.98)], 0.5, 0.1, dim);
    line([V(ra - 0.25, -3.82), V(ra, -3.9), V(ra - 0.25, -3.98)], 0.5, 0.1, dim);
    line([V(-ra, -3.9), V(ra, -3.9)], 0.4, 0.35, dim);
    line([V(0.25, 4.02), V(0, 4.1), V(0.25, 4.18)], 0.75, 0.1, dim);
    line([V(this.dist - 0.25, 4.02), V(this.dist, 4.1), V(this.dist - 0.25, 4.18)], 0.75, 0.1, dim);
    line([V(0, 4.1), V(this.dist, 4.1)], 0.6, 0.35, dim);
    const pa = 215 * DEG, pb = -55 * DEG;
    line([V(Math.cos(pa) * this.A.r, -Math.sin(pa) * this.A.r), V(-3.9, 2.75), V(-6.9, 2.75)], 0.55, 0.35, dim);
    line([V(this.dist + Math.cos(pb) * this.B.r, -Math.sin(pb) * this.B.r), V(6.1, 2.25), V(7.6, 2.25)], 0.9, 0.3, dim);
    const label = (txt, x, z, w, align, t0) => {
      const p = new CanvasPlane(w, 60, { worldW: w / 120, res: 2, intensity: 1.5 });
      p.draw((g, W, H) => { g.font = font(500, 32, 'mono'); g.fillStyle = '#9ad6ff'; g.textBaseline = 'middle'; g.textAlign = align; g.fillText(txt, align === 'center' ? W / 2 : 4, H / 2); });
      p.rotation.x = -Math.PI / 2; p.position.set(x, 0.02, z); p.userData.t0 = t0; this.scene.add(p); return p;
    };
    this.labels = [
      label('Ø 6.50', 0, -4.25, 200, 'center', 0.55),
      label('a = 4.50', this.dist / 2, 3.78, 240, 'center', 0.8),
      label('z = 24 · m = 0.25', -6.85 + 360 / 240, 2.5, 360, 'left', 0.75),
      label('z = 12', 6.15 + 160 / 240, 2.0, 160, 'left', 1.05),
    ];
    this.spark = glowSprite('glow', '#9fd8ff', 0.55, { intensity: 6 });
    this.scene.add(this.spark);

    const key = new THREE.DirectionalLight('#ffffff', 2.2); key.position.set(6, 10, 8); this.scene.add(key);
    const rim = new THREE.DirectionalLight('#4f8dff', 3.0); rim.position.set(-8, 4, -6); this.scene.add(rim);

    // overlay ----------------------------------------------------------------------------------
    this.head = new GlyphText('参数化 3D 建模', { family: 'cn', weight: 600, size: 62, tracking: 0.06, color: '#ffffff', align: 'left' });
    this.head.position.set(-960 + 96, 540 - 130, 0);
    this.sub = new GlyphText('Blender · CAD　用代码驱动参数化建模', { family: 'cn', weight: 300, size: 28, tracking: 0.08, color: '#b9cdf0', align: 'left' });
    this.sub.position.set(-960 + 98, 540 - 200, 0);
    this.script = new CanvasPlane(540, 196, { res: 1.5 });
    this.script.position.set(960 - 96 - 270, 540 - 96 - 98, 0);
    this.scriptLines = SCRIPT.split('\n').map((l) => tokenize(l, false));
    this.scriptLen = SCRIPT.length; this.lastN = -1;
    this.card = new CanvasPlane(470, 150, { res: 1.5 });
    this.card.position.set(-960 + 96 + 235, -540 + 80 + 75, 0);
    this.tag = new CanvasPlane(380, 50, { res: 1.5 });
    this.tag.position.set(960 - 96 - 190, -540 + 104, 0);
    this.overlay.add(this.head, this.sub, this.script, this.card, this.tag);
    this.tag.draw((g, W, H) => {
      roundRect(g, 2, 2, W - 4, H - 4, 23); g.fillStyle = 'rgba(79,141,255,0.15)'; g.fill(); g.strokeStyle = 'rgba(120,170,255,0.6)'; g.lineWidth = 1.5; g.stroke();
      g.font = font(500, 19, 'cn'); g.fillStyle = '#dce8ff'; g.textBaseline = 'middle'; g.textAlign = 'center'; g.fillText('3D Make 现已上线 kimi.ai', W / 2, H / 2 + 1);
    });
  }

  drawScript(n) {
    n = Math.floor(clamp(n, 0, this.scriptLen));
    if (n === this.lastN) return;
    this.lastN = n;
    this.script.draw((g, W, H) => {
      roundRect(g, 2, 2, W - 4, H - 4, 14);
      g.fillStyle = 'rgba(8,16,34,0.72)'; g.fill(); g.strokeStyle = 'rgba(100,160,255,0.45)'; g.lineWidth = 1.5; g.stroke();
      g.font = font(600, 13, 'sans'); g.fillStyle = 'rgba(130,175,255,0.9)'; g.letterSpacing = '2px'; g.textBaseline = 'middle';
      g.fillText('PYTHON  ·  BLENDER / CAD', 20, 24); g.letterSpacing = '0px';
      g.font = font(400, 18, 'mono');
      let shown = 0, cx = 20, cy = 60;
      outer: for (let li = 0; li < this.scriptLines.length; li++) {
        cx = 20; cy = 60 + li * 28;
        for (const tk of this.scriptLines[li]) {
          const s = tk.s.slice(0, Math.max(0, n - shown));
          if (!s.length) break outer;
          g.fillStyle = tk.c; g.fillText(s, cx, cy); cx += g.measureText(s).width; shown += s.length;
          if (s.length < tk.s.length) break outer;
        }
        shown += 1;
      }
      g.fillStyle = 'rgba(120,200,255,0.9)'; g.fillRect(cx + 2, cy - 10, 10, 20);
    });
  }

  drawCard(t, ft) {
    const out = 1 - smoothstep(3.35, 3.65, t);
    this.card.opacity = smoothstep(1.9, 2.2, t) * out;
    this.tag.opacity = smoothstep(2.3, 2.6, t) * out;
    if (this.card.opacity <= 0.001) return;
    const q = ease.outExpo(clamp((ft - 1.95) / 0.9));
    this.card.draw((g) => {
      g.textBaseline = 'alphabetic';
      g.font = font(600, 17, 'sans'); g.fillStyle = 'rgba(150,185,240,0.9)'; g.letterSpacing = '3px'; g.fillText('BENCHCAD  ·  使用工具', 2, 26); g.letterSpacing = '0px';
      g.font = font(800, 92, 'sans'); g.fillStyle = '#ffffff'; g.fillText((92.7 * q).toFixed(1) + '%', 0, 122);
    });
  }

  update(t, ctx) {
    const cam = this.camera;
    // top-down (roll settles out of the spin transition) → arcing crane to a low hero orbit → rise
    // and push onto the big gear's hub.
    const az = keys(t, [[0.95, 0], [4.3, 0.5, ease.inOutQuad]]);
    const el = keys(t, [[0.95, 88.5 * DEG], [2.25, 19 * DEG], [3.4, 15 * DEG]]);
    const dist = keys(t, [[-0.3, 16.8], [0.95, 15.6, ease.outQuad], [2.25, 12.2], [3.4, 11.2]]);
    const C = keys(t, [[0.95, [0.4, 0, -0.35]], [2.25, [1.7, 0.3, 0]]]);
    const hub = [0, 1.05, 0], q = ease.inOutCubic(smoothstep(3.35, 4.3, t));
    const near = sph(hub, az, 52 * DEG, 2.6);
    const P = sph(C, az, el, dist).map((v, i) => lerp(v, near[i], q));
    const T = C.map((v, i) => lerp(v, hub[i], q));
    cam.position.set(...P); cam.up.set(0, 1, 0); cam.lookAt(...T);
    cam.rotateZ(keys(t, [[-0.3, -0.7], [0.5, 0, ease.outCubic]]));
    cam.fov = keys(t, [[0, 38], [2.25, 33], [4.3, 42]]); cam.updateProjectionMatrix();
    applyShake(cam, shake(t, 0.45, 0.7, 41));
    cam.updateMatrixWorld();

    // sketch & annotations draw on, then clear away as the camera cranes down
    const draw = (l, t0, d) => { const n = l.geometry.attributes.position.count; l.geometry.setDrawRange(0, Math.floor(n * clamp((t - t0) / d))); };
    const clear = 1 - smoothstep(1.7, 2.3, t);
    for (const { l, t0, d } of this.lines) { draw(l, t0, d); l.material.opacity = clear; }
    for (const p of this.labels) p.opacity = smoothstep(p.userData.t0, p.userData.t0 + 0.2, t) * clear;
    const gA = this.gA, gB = this.gB;
    draw(gA.sketch, -0.3, 1.0); draw(gB.sketch, 0.75, 0.45);
    gA.sketch.material.opacity = gB.sketch.material.opacity = clear;
    const outl = this.A.outline, sp = outl[Math.min(outl.length - 1, Math.floor(outl.length * clamp((t + 0.3) / 1.0)))];
    this.spark.position.set(sp.x, 0.05, sp.z); this.spark.setOpacity(t < 0.7 ? 1 : 0);

    // extrusion: the profile layer rises like a print head, wireframe edges fade to bare metal
    const extrude = (g, e, t0) => {
      g.mesh.scale.y = g.shaft.scale.y = Math.max(0.001, e);
      g.mesh.visible = g.shaft.visible = e > 0.001;
      g.layer.position.y = 0.735 * e + 0.012;
      g.layer.material.opacity = smoothstep(0, 0.08, e) * (1 - smoothstep(0.85, 1, e));
      g.layer.visible = g.layer.material.opacity > 0.001;
      g.edges.material.opacity = 1 - smoothstep(t0 + 0.5, t0 + 1.2, t);
    };
    extrude(gA, ease.outCubic(clamp((t - 0.95) / 0.7)), 0.95);
    extrude(gB, ease.outCubic(clamp((t - 1.3) / 0.6)), 1.3);
    const spin = 1.9 * ease.inQuad(clamp((t - 1.6) / 2.7));
    gA.piv.rotation.y = spin;
    gB.piv.rotation.y = -spin * 2 + Math.PI / 12; // half-pitch offset so teeth mesh
    this.grid.material.uniforms.a.value = 1 - 0.4 * smoothstep(2.0, 3.0, t);

    this.head.animate(t, { in: { start: 0.35, dur: 0.7, stagger: 0.05, style: 'blur' }, out: { start: 3.35, dur: 0.3, stagger: 0.02, style: 'blur' } });
    this.sub.animate(t, { in: { start: 0.65, dur: 0.7, stagger: 0.015, style: 'blur' }, out: { start: 3.4, dur: 0.3, stagger: 0.01, style: 'fade' }, opacity: 0.9 });
    this.script.opacity = smoothstep(0.1, 0.3, t) * (1 - smoothstep(2.0, 2.3, t));
    if (this.script.opacity > 0.001) this.drawScript((t - 0.2) * 150);
    this.drawCard(t, ctx ? ctx.ft : t);
  }

  post() {
    return { bloom: 0.55, bloomThreshold: 1.0, streak: 0.25, vignette: 0.45, grain: 0.045, ca: 0.0025, temperature: -0.12 };
  }

  samples(t) { return t < 0.5 ? 12 : 8; }
}
