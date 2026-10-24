// buffalo.js — the water buffalo and its cowherd rider: modelling and procedural animation.
import * as THREE from 'three';
import { TAU, clamp, lerp, smoothstep, damp, GeoBuilder, taperedTube, makeMat, col } from './util.js';

export const RIDERS = [
  { name: '阿牛', ox: '大黑', hide: 0x3a3e42, jacket: 0xc0392b, trim: 0xe9c46a, sash: 0xe9c46a, cloth: 0xb8322a, clothTrim: 0xe7c063, hat: 'straw', socks: false, color: '#c0392b' },
  { name: '小青', ox: '青云', hide: 0x4a5053, jacket: 0x2a8c82, trim: 0xf1ead8, sash: 0xd8434a, cloth: 0x23766e, clothTrim: 0xe8e2cf, hat: 'buns', socks: true, color: '#2a8c82' },
  { name: '石头', ox: '铁角', hide: 0x2f3236, jacket: 0x2c5d8a, trim: 0xe9c46a, sash: 0xc0392b, cloth: 0x234d74, clothTrim: 0xe9c46a, hat: 'straw', socks: false, color: '#2c5d8a' },
  { name: '杏儿', ox: '旋风', hide: 0x4b4541, jacket: 0xe08a2e, trim: 0x2f6b4a, sash: 0x2f6b4a, cloth: 0xd27a25, clothTrim: 0x2f6b4a, hat: 'buns', socks: true, color: '#e08a2e' },
  { name: '竹生', ox: '雷公', hide: 0x363a3c, jacket: 0x4f8a3a, trim: 0xf2d26a, sash: 0xf2d26a, cloth: 0x467d34, clothTrim: 0xf2d26a, hat: 'straw', socks: false, color: '#4f8a3a' },
  { name: '墨墨', ox: '白玉', hide: 0xa18f88, jacket: 0x7b4a8a, trim: 0xe9c46a, sash: 0xe9c46a, cloth: 0x6c3f7a, clothTrim: 0xe9c46a, hat: 'buns', socks: false, color: '#7b4a8a' },
];

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const _c = new THREE.Color();

// Surface lofted through elliptical cross-sections placed along +z. bellyK stretches the lower half.
function loft(sections, radial = 16, bellyK = 1) {
  const pos = [], idx = [];
  for (const S of sections) {
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * TAU, s = Math.sin(a), c = Math.cos(a);
      pos.push((S.x || 0) + c * S.rx, S.y + s * S.ry * (s < 0 ? (S.k ?? bellyK) : 1), S.z);
    }
  }
  for (let i = 0; i < sections.length - 1; i++) for (let j = 0; j < radial; j++) {
    const a = i * (radial + 1) + j, b = a + radial + 1;
    idx.push(a, a + 1, b, a + 1, b + 1, b);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const N = g.attributes.normal;
  for (let i = 0; i < sections.length; i++) { // weld the seam normals
    const a = i * (radial + 1), b = a + radial;
    const nx = N.getX(a) + N.getX(b), ny = N.getY(a) + N.getY(b), nz = N.getZ(a) + N.getZ(b), l = Math.hypot(nx, ny, nz) || 1;
    N.setXYZ(a, nx / l, ny / l, nz / l); N.setXYZ(b, nx / l, ny / l, nz / l);
  }
  return g;
}

function mesh(builder, mat) {
  const m = new THREE.Mesh(builder.build(), mat);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
function group(parent, x, y, z) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }

// Rope rebuilt every frame between two world points with a little sag.
class Rope {
  constructor(color, n = 12, r = 0.02) {
    this.n = n; this.rad = 4; this.r = r;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array((n + 1) * (this.rad + 1) * 3), 3));
    const idx = [];
    for (let i = 0; i < n; i++) for (let j = 0; j < this.rad; j++) { const a = i * (this.rad + 1) + j, b = a + this.rad + 1; idx.push(a, b, a + 1, a + 1, b, b + 1); }
    g.setIndex(idx);
    this.mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color, roughness: 0.8, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false;
    this.p = new THREE.Vector3(); this.t = new THREE.Vector3(); this.u = new THREE.Vector3(); this.w = new THREE.Vector3();
  }
  update(a, b, sag) {
    const P = this.mesh.geometry.attributes.position, n = this.n;
    this.t.subVectors(b, a).normalize();
    this.u.set(0, 1, 0).cross(this.t).normalize();
    this.w.crossVectors(this.t, this.u);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      this.p.lerpVectors(a, b, t); this.p.y -= Math.sin(t * Math.PI) * sag;
      for (let j = 0; j <= this.rad; j++) {
        const ang = (j / this.rad) * TAU, c = Math.cos(ang) * this.r, s = Math.sin(ang) * this.r;
        P.setXYZ(i * (this.rad + 1) + j, this.p.x + this.u.x * c + this.w.x * s, this.p.y + this.u.y * c + this.w.y * s, this.p.z + this.u.z * c + this.w.z * s);
      }
    }
    P.needsUpdate = true;
    this.mesh.geometry.computeVertexNormals();
  }
}

export function createRacerModel(preset) {
  const hideMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.58, metalness: 0.02 });
  const clothMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, side: THREE.DoubleSide });
  const hide = col(preset.hide), belly = col(preset.hide).lerp(col(0x9a948c), 0.22), back = col(preset.hide).multiplyScalar(0.82);
  const sock = col(0x9b968e), mud = col(0x6a5844), hoofC = 0x26211e;

  const root = new THREE.Group();
  const tilt = group(root, 0, 0, 0);
  const body = group(tilt, 0, 0, 0);

  // ---------------------------------------------------------------- barrel
  const bb = new GeoBuilder();
  const sections = [
    { z: -1.27, y: 1.06, rx: 0.04, ry: 0.04 }, { z: -1.22, y: 1.08, rx: 0.3, ry: 0.3 }, { z: -1.1, y: 1.1, rx: 0.48, ry: 0.45 },
    { z: -0.8, y: 1.1, rx: 0.57, ry: 0.5 }, { z: -0.35, y: 1.08, rx: 0.61, ry: 0.54 }, { z: 0.1, y: 1.1, rx: 0.6, ry: 0.56 },
    { z: 0.42, y: 1.17, rx: 0.56, ry: 0.6 }, { z: 0.7, y: 1.14, rx: 0.47, ry: 0.53 }, { z: 0.9, y: 1.07, rx: 0.32, ry: 0.4 },
    { z: 0.98, y: 1.04, rx: 0.06, ry: 0.07 },
  ];
  bb.add(loft(sections, 18, 1.12), (x, y, z) => _c.copy(hide).lerp(belly, smoothstep(0.85, 0.55, y) * 0.8).lerp(back, smoothstep(1.45, 1.66, y) * 0.6));
  // saddle cloth draped over the back, with a gilt border and tassels
  const cloth = col(preset.cloth), trim = col(preset.clothTrim);
  const cs = [];
  for (let k = 0; k <= 6; k++) {
    const z = lerp(-0.42, 0.38, k / 6);
    const S = sections.reduce((p, s) => (Math.abs(s.z - z) < Math.abs(p.z - z) ? s : p));
    cs.push({ z, y: S.y + 0.015, rx: S.rx + 0.035, ry: S.ry + 0.035 });
  }
  const pos = [], idx = [], ra = 12, a0 = 0.12 * Math.PI, a1 = 0.88 * Math.PI;
  for (const S of cs) for (let j = 0; j <= ra; j++) { const a = lerp(a0, a1, j / ra); pos.push(Math.cos(a) * S.rx, S.y + Math.sin(a) * S.ry, S.z); }
  for (let i = 0; i < cs.length - 1; i++) for (let j = 0; j < ra; j++) { const a = i * (ra + 1) + j, b = a + ra + 1; idx.push(a, a + 1, b, a + 1, b + 1, b); }
  const cg = new THREE.BufferGeometry();
  cg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); cg.setIndex(idx); cg.computeVertexNormals();
  const cb = new GeoBuilder();
  cb.add(cg, (x, y, z) => {
    const edgeZ = Math.min(z + 0.42, 0.38 - z), edgeY = y - 1.15;
    return _c.copy(cloth).lerp(trim, edgeZ < 0.07 || edgeY < 0.12 ? 1 : 0);
  });
  for (const sx of [-1, 1]) for (let k = 0; k < 5; k++) {
    const z = lerp(-0.36, 0.32, k / 4);
    const S = sections.reduce((p, s) => (Math.abs(s.z - z) < Math.abs(p.z - z) ? s : p));
    const ang = sx > 0 ? a0 : a1;
    cb.add(new THREE.ConeGeometry(0.035, 0.16, 5), preset.clothTrim, [Math.cos(ang) * (S.rx + 0.04), S.y + Math.sin(ang) * (S.ry + 0.04) - 0.08, z], [Math.PI, 0, 0]);
  }
  body.add(mesh(bb, hideMat), mesh(cb, clothMat));

  // ---------------------------------------------------------------- neck + head
  const neck = group(body, 0, 1.3, 0.72);
  neck.rotation.x = 0.28;
  const nb = new GeoBuilder();
  const throat = col(0xd9d4ca);
  nb.add(loft([
    { z: -0.15, y: 0.0, rx: 0.36, ry: 0.4 }, { z: 0.1, y: 0.0, rx: 0.33, ry: 0.37 }, { z: 0.3, y: -0.01, rx: 0.28, ry: 0.32 }, { z: 0.48, y: -0.02, rx: 0.24, ry: 0.27 },
  ], 14, 1.15), (x, y, z) => {
    const chevron = Math.abs(z - 0.12 - Math.abs(x) * 0.5) < 0.05 && y < -0.2;
    return chevron ? throat : _c.copy(hide).lerp(back, smoothstep(0.15, 0.35, y) * 0.5);
  });
  nb.add(new THREE.TorusGeometry(0.33, 0.035, 6, 18), preset.sash, [0, -0.02, 0.22], [0, 0, 0]);
  nb.add(new THREE.SphereGeometry(0.075, 10, 8), 0xd9a63e, [0, -0.42, 0.24]);
  nb.add(new THREE.CylinderGeometry(0.05, 0.085, 0.1, 10), 0xd9a63e, [0, -0.37, 0.24]);
  neck.add(mesh(nb, hideMat));

  const head = group(neck, 0, 0.0, 0.46);
  head.rotation.x = 0.22;
  const hb = new GeoBuilder();
  const muzzle = col(0x6e6560);
  hb.add(loft([
    { z: -0.08, y: 0.02, rx: 0.2, ry: 0.22 }, { z: 0.08, y: 0.0, rx: 0.235, ry: 0.22 }, { z: 0.28, y: -0.07, rx: 0.2, ry: 0.17 },
    { z: 0.46, y: -0.13, rx: 0.18, ry: 0.14 }, { z: 0.6, y: -0.16, rx: 0.17, ry: 0.12 }, { z: 0.67, y: -0.17, rx: 0.12, ry: 0.09 }, { z: 0.69, y: -0.17, rx: 0.03, ry: 0.03 },
  ], 14, 1.0), (x, y, z) => _c.copy(hide).lerp(muzzle, smoothstep(0.42, 0.58, z)));
  for (const sx of [-1, 1]) {
    hb.add(new THREE.SphereGeometry(0.028, 6, 5), 0x141010, [sx * 0.07, -0.16, 0.685]);
    hb.add(new THREE.SphereGeometry(0.045, 10, 8), 0x0e0c0b, [sx * 0.205, 0.05, 0.1]);
    hb.add(new THREE.SphereGeometry(0.014, 6, 4), 0xffffff, [sx * 0.235, 0.07, 0.125]);
    hb.add(new THREE.SphereGeometry(0.1, 10, 8).scale(0.45, 0.8, 1.6), preset.hide, [sx * 0.29, -0.02, -0.02], [0.2, sx * 0.9, sx * 0.5]);
    // crescent horns sweeping out and back, ridged
    const pts = [V(sx * 0.1, 0.17, 0.0), V(sx * 0.36, 0.25, -0.03), V(sx * 0.6, 0.29, -0.24), V(sx * 0.64, 0.33, -0.54), V(sx * 0.48, 0.41, -0.79), V(sx * 0.3, 0.47, -0.88)];
    const horn = taperedTube(pts, 22, 8, (t) => lerp(0.095, 0.016, Math.pow(t, 0.9)), 1, 0.75);
    const hc0 = col(0x463f3a), hc1 = col(0xa59a8a);
    const P = horn.attributes.position, hc = new Float32Array(P.count * 3);
    for (let i = 0; i < P.count; i++) {
      const t = Math.floor(i / 9) / 22, ring = (Math.floor(t * 22) % 3 === 0) ? 0.82 : 1;
      _c.copy(hc0).lerp(hc1, smoothstep(0.55, 1, t)).multiplyScalar(ring);
      hc[i * 3] = _c.r; hc[i * 3 + 1] = _c.g; hc[i * 3 + 2] = _c.b;
    }
    horn.setAttribute('color', new THREE.BufferAttribute(hc, 3));
    hb.add(horn, null);
  }
  // festival red silk flower on the forehead, ribbons, and the brass nose ring
  hb.add(new THREE.SphereGeometry(0.11, 10, 8), 0xd42a2a, [0, 0.24, 0.1]);
  for (let k = 0; k < 7; k++) {
    const a = (k / 7) * TAU;
    hb.add(new THREE.SphereGeometry(0.075, 8, 6).scale(1, 0.5, 1.4), 0xe8433a, [Math.cos(a) * 0.1, 0.22, 0.1 + Math.sin(a) * 0.1], [0.3, -a, 0]);
  }
  for (const sx of [-1, 1]) hb.add(new THREE.BoxGeometry(0.05, 0.32, 0.012), 0xd42a2a, [sx * 0.12, 0.08, 0.2], [0.2, 0, sx * 0.25]);
  hb.add(new THREE.TorusGeometry(0.05, 0.012, 6, 14), 0xd8a842, [0, -0.205, 0.66], [0.3, 0, 0]);
  hb.add(new THREE.SphereGeometry(0.06, 8, 6), preset.hide, [0, 0.21, -0.03]);
  head.add(mesh(hb, hideMat));
  const noseAnchor = group(head, 0, -0.25, 0.68);

  // ---------------------------------------------------------------- legs
  const legs = [];
  const legDefs = [
    { x: -0.31, y: 0.98, z: 0.55, up: 0.5, lo: 0.36, r0: 0.16, front: true, ph: 0.5 },
    { x: 0.31, y: 0.98, z: 0.55, up: 0.5, lo: 0.36, r0: 0.16, front: true, ph: 0.62 },
    { x: -0.33, y: 1.0, z: -0.86, up: 0.52, lo: 0.36, r0: 0.21, front: false, ph: 0.0 },
    { x: 0.33, y: 1.0, z: -0.86, up: 0.52, lo: 0.36, r0: 0.21, front: false, ph: 0.12 },
  ];
  for (const d of legDefs) {
    const hip = group(body, d.x, d.y, d.z);
    const ub = new GeoBuilder();
    ub.add(new THREE.CylinderGeometry(d.r0, 0.1, d.up + 0.12, 9).translate(0, -d.up / 2 + 0.06, 0), (x, y) => _c.copy(hide).lerp(belly, smoothstep(-0.1, -0.45, y) * 0.3));
    hip.add(mesh(ub, hideMat));
    const knee = group(hip, 0, -d.up, 0);
    const lb = new GeoBuilder();
    const low = preset.socks ? sock : _c.clone().copy(hide).lerp(sock, 0.25);
    lb.add(new THREE.CylinderGeometry(0.095, 0.075, d.lo, 8).translate(0, -d.lo / 2, 0), (x, y) => _c.copy(hide).lerp(low, smoothstep(-0.04, -0.2, y)).lerp(mud, smoothstep(-0.22, -0.36, y) * 0.7));
    lb.add(new THREE.SphereGeometry(0.1, 8, 6), preset.hide, [0, 0, 0]);
    lb.add(new THREE.CylinderGeometry(0.085, 0.1, 0.12, 8), hoofC, [0, -d.lo - 0.06, 0.01]);
    lb.add(new THREE.BoxGeometry(0.012, 0.1, 0.1), 0x0d0b0a, [0, -d.lo - 0.06, 0.07]);
    knee.add(mesh(lb, hideMat));
    legs.push({ hip, knee, d });
  }

  // ---------------------------------------------------------------- tail
  const tailSegs = [];
  let parent = group(body, 0, 1.36, -1.2);
  const tailRoot = parent;
  for (let k = 0; k < 4; k++) {
    const tb = new GeoBuilder();
    const len = 0.2;
    tb.add(new THREE.CylinderGeometry(0.045 - k * 0.007, 0.04 - k * 0.007, len, 6).translate(0, -len / 2, 0), preset.hide);
    if (k === 3) tb.add(new THREE.SphereGeometry(0.065, 7, 6).scale(1, 2.6, 0.8).translate(0, -len - 0.1, 0), 0x1c1918);
    const seg = mesh(tb, hideMat);
    const g = new THREE.Group();
    g.add(seg);
    parent.add(g);
    if (k > 0) g.position.y = -len;
    tailSegs.push(g);
    parent = g;
  }
  tailRoot.rotation.x = 0.15;

  // ---------------------------------------------------------------- rider (牧童)
  const skin = 0xf0c69c, cheek = 0xf3958a, hair = 0x1a1513;
  const rider = group(body, 0, 1.64, -0.04);
  const torso = group(rider, 0, 0.06, 0);
  const tb = new GeoBuilder();
  tb.add(new THREE.CylinderGeometry(0.15, 0.2, 0.46, 12).translate(0, 0.25, 0), preset.jacket);
  tb.add(new THREE.CylinderGeometry(0.205, 0.205, 0.08, 12), preset.sash, [0, 0.07, 0]);
  tb.add(new THREE.BoxGeometry(0.04, 0.38, 0.02), preset.trim, [0.05, 0.27, 0.165], [0, 0.3, 0.12]);
  tb.add(new THREE.CylinderGeometry(0.1, 0.12, 0.06, 10), preset.trim, [0, 0.49, 0]);
  tb.add(new THREE.CylinderGeometry(0.014, 0.014, 0.44, 5), 0x9a8f4a, [-0.17, 0.12, -0.05], [0.2, 0, 0.9]);
  const torsoMesh = mesh(tb, clothMat);
  torso.add(torsoMesh);
  // head with rosy cheeks and either a straw hat or two hair buns (总角)
  const headR = group(torso, 0, 0.66, 0.02);
  const hr = new GeoBuilder();
  hr.add(new THREE.SphereGeometry(0.16, 14, 12), skin);
  hr.add(new THREE.SphereGeometry(0.163, 14, 10, 0, TAU, 0, Math.PI * 0.55), hair, [0, 0.01, -0.012], [-0.35, 0, 0]);
  for (const sx of [-1, 1]) {
    hr.add(new THREE.SphereGeometry(0.019, 6, 5), 0x15110f, [sx * 0.058, 0.01, 0.145]);
    hr.add(new THREE.SphereGeometry(0.032, 8, 6).scale(1, 0.6, 0.4), cheek, [sx * 0.085, -0.045, 0.13]);
    hr.add(new THREE.SphereGeometry(0.035, 8, 6), skin, [sx * 0.158, -0.005, 0.0]);
  }
  hr.add(new THREE.SphereGeometry(0.02, 6, 5), 0xe08a6a, [0, -0.025, 0.16]);
  if (preset.hat === 'straw') {
    hr.add(new THREE.ConeGeometry(0.42, 0.2, 18, 1, true), 0xd2ad62, [0, 0.19, 0]);
    hr.add(new THREE.ConeGeometry(0.43, 0.2, 18, 1, true).scale(1, 1, 1), 0xb48c48, [0, 0.188, 0], [0, 0.15, 0]);
    hr.add(new THREE.TorusGeometry(0.17, 0.016, 5, 16), 0x6b4a2a, [0, 0.13, 0], [Math.PI / 2, 0, 0]);
    hr.add(new THREE.SphereGeometry(0.03, 6, 5), 0x6b4a2a, [0, 0.29, 0]);
  } else {
    for (const sx of [-1, 1]) {
      hr.add(new THREE.SphereGeometry(0.07, 10, 8), hair, [sx * 0.11, 0.15, -0.02]);
      hr.add(new THREE.TorusGeometry(0.05, 0.012, 5, 12), preset.sash, [sx * 0.11, 0.12, -0.02], [Math.PI / 2, 0, 0]);
    }
    hr.add(new THREE.SphereGeometry(0.012, 6, 4), 0xd42a2a, [0, 0.07, 0.155]);
  }
  headR.add(mesh(hr, clothMat));
  // arms: both hands on the nose rope; the right arm also swings a willow switch
  const arms = [];
  for (const sx of [-1, 1]) {
    const sh = group(torso, sx * 0.2, 0.44, 0.02);
    const ab = new GeoBuilder();
    ab.add(new THREE.CylinderGeometry(0.055, 0.05, 0.28, 7).translate(0, -0.14, 0), preset.jacket);
    sh.add(mesh(ab, clothMat));
    const el = group(sh, 0, -0.28, 0);
    const fb = new GeoBuilder();
    fb.add(new THREE.CylinderGeometry(0.048, 0.04, 0.24, 7).translate(0, -0.12, 0), preset.jacket);
    fb.add(new THREE.CylinderGeometry(0.052, 0.052, 0.04, 7), preset.trim, [0, -0.22, 0]);
    fb.add(new THREE.SphereGeometry(0.042, 8, 6), skin, [0, -0.27, 0]);
    if (sx > 0) {
      fb.add(new THREE.CylinderGeometry(0.008, 0.012, 0.85, 4).translate(0, 0.38, 0), 0x6b5a32, [0, -0.27, 0.02], [0.6, 0, 0]);
      for (let k = 0; k < 4; k++) fb.add(new THREE.SphereGeometry(0.03, 5, 4).scale(0.5, 1.6, 0.5), 0x7fa64a, [0, -0.27 + 0.4 + k * 0.1, 0.02 + 0.25 + k * 0.06], [0.6, 0, k % 2 ? 0.6 : -0.6]);
    }
    el.add(mesh(fb, clothMat));
    sh.rotation.set(-0.9, 0, -sx * 0.15);
    el.rotation.set(-0.7, 0, 0);
    arms.push({ sh, el });
  }
  // legs straddling the barrel, bare feet, rolled trousers
  for (const sx of [-1, 1]) {
    const lg = new GeoBuilder();
    lg.add(taperedTube([V(sx * 0.12, 0.08, 0.02), V(sx * 0.42, -0.02, 0.12), V(sx * 0.58, -0.25, 0.14)], 6, 7, (t) => lerp(0.085, 0.07, t)), 0x2f3e5c);
    lg.add(taperedTube([V(sx * 0.58, -0.25, 0.14), V(sx * 0.62, -0.45, 0.1), V(sx * 0.62, -0.62, 0.02)], 5, 7, (t) => lerp(0.062, 0.05, t)), skin);
    lg.add(new THREE.CylinderGeometry(0.075, 0.075, 0.07, 8), 0x2f3e5c, [sx * 0.585, -0.27, 0.135], [0, 0, sx * 0.2]);
    lg.add(new THREE.BoxGeometry(0.08, 0.06, 0.17), skin, [sx * 0.62, -0.66, 0.06]);
    rider.add(mesh(lg, clothMat));
  }

  const rope = new Rope(0xb02a22, 12, 0.018);
  const handR = group(arms[1].el, 0, -0.27, 0), handL = group(arms[0].el, 0, -0.27, 0);

  // ---------------------------------------------------------------- animation
  const st = { phase: Math.random(), bob: 0, lean: 0, whip: 0, whipT: 0, tailT: Math.random() * 10, headNod: 0, cheer: 0, earT: 0 };
  const a = new THREE.Vector3(), b = new THREE.Vector3(), hm = new THREE.Vector3();

  function update(dt, s) {
    const spd = Math.abs(s.speed), amp = clamp(spd / 26, 0, 1);
    const rate = spd < 0.5 ? 0 : 0.9 + spd * 0.075;
    st.phase = (st.phase + dt * rate * Math.sign(s.speed || 1)) % 1;
    if (st.phase < 0) st.phase += 1;
    const P = st.phase * TAU;
    for (const L of legs) {
      const ph = P + L.d.ph * TAU;
      const sw = Math.sin(ph), lift = Math.max(0, Math.cos(ph));
      const A = lerp(0.12, 0.62, amp) * (spd < 0.5 ? 0 : 1);
      L.hip.rotation.x = damp(L.hip.rotation.x, -sw * A, 18, dt);
      const kneeBend = (L.d.front ? 1 : -1) * lift * lerp(0.25, 1.1, amp) * (spd < 0.5 ? 0 : 1);
      L.knee.rotation.x = damp(L.knee.rotation.x, L.d.front ? kneeBend : kneeBend * 0.9, 18, dt);
    }
    const gait = Math.sin(P * 2);
    const breathe = Math.sin(performance.now() * 0.002) * 0.01;
    body.position.y = Math.abs(Math.sin(P)) * 0.11 * amp + breathe;
    body.rotation.x = Math.sin(P) * 0.07 * amp;
    st.lean = damp(st.lean, -s.steer * amp * 0.1, 6, dt);
    tilt.rotation.z = st.lean;
    tilt.rotation.x = s.pitch || 0;
    tilt.rotation.z += s.roll || 0;
    // head nods with the stride, lifts proudly when boosting
    neck.rotation.x = 0.28 + Math.sin(P + 1.2) * 0.08 * amp - (s.boosting ? 0.12 : 0) - st.cheer * 0.25;
    neck.rotation.y = damp(neck.rotation.y, s.steer * 0.18, 5, dt);
    head.rotation.x = 0.22 + Math.sin(P + 2.2) * 0.06 * amp;
    // tail swish
    st.tailT += dt * (1.5 + amp * 4);
    tailRoot.rotation.x = 0.15 + amp * 0.5;
    tailRoot.rotation.z = Math.sin(st.tailT) * (0.25 + amp * 0.3);
    for (let k = 1; k < tailSegs.length; k++) tailSegs[k].rotation.z = Math.sin(st.tailT - k * 0.7) * 0.25;
    // rider bounces a beat behind, leans into turns, whips when boosting
    rider.position.y = 1.64 - Math.abs(Math.sin(P - 0.6)) * 0.05 * amp;
    torso.rotation.x = lerp(0.05, 0.32, amp) + Math.sin(P * 2 - 1) * 0.04 * amp - st.cheer * 0.3;
    torso.rotation.z = damp(torso.rotation.z, -s.steer * 0.28 * amp, 6, dt);
    headR.rotation.x = -torso.rotation.x * 0.7;
    if (s.boosting && st.whipT <= 0) st.whipT = 0.55;
    if (st.whipT > 0) st.whipT -= dt;
    const w = st.whipT > 0 ? st.whipT / 0.55 : 0;
    const whipAng = w > 0.5 ? lerp(-0.9, -2.9, (1 - w) * 2) : lerp(-2.9, -0.6, (0.5 - w) * 2);
    st.cheer = damp(st.cheer, s.cheer ? 1 : 0, 3, dt);
    const ch = st.cheer;
    arms[1].sh.rotation.x = damp(arms[1].sh.rotation.x, ch > 0.1 ? -2.9 + Math.sin(performance.now() * 0.012) * 0.3 : (w > 0 ? whipAng : -0.9), 25, dt);
    arms[1].el.rotation.x = w > 0 || ch > 0.1 ? -0.2 : -0.7;
    arms[0].sh.rotation.x = damp(arms[0].sh.rotation.x, ch > 0.1 ? -2.7 + Math.cos(performance.now() * 0.012) * 0.3 : -0.9, 25, dt);
    arms[0].el.rotation.x = ch > 0.1 ? -0.2 : -0.7;
    root.updateMatrixWorld(true);
    noseAnchor.getWorldPosition(a);
    if (ch > 0.1 || w > 0) handL.getWorldPosition(b); else { handL.getWorldPosition(b); handR.getWorldPosition(hm); b.lerp(hm, 0.5); }
    rope.update(a, b, 0.12 + 0.05 * (1 - amp));
  }

  return { root, rope: rope.mesh, update, preset, height: 2.6, riderHead: headR, riderBody: torsoMesh };
}
