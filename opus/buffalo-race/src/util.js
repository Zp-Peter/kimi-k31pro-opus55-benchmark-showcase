// util.js — math, noise and geometry-building helpers shared by every module.
import * as THREE from 'three';

export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => clamp((v - a) / (b - a), 0, 1);
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export function wrapAngle(a) { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; }
export function dampAngle(a, b, lambda, dt) { return a + wrapAngle(b - a) * (1 - Math.exp(-lambda * dt)); }

// Uniforms shared by animated shaders (wind sway, water, banners).
export const SHARED = { uTime: { value: 0 } };

// ---------------------------------------------------------------- random
function mulberry32(seed) {
  return function () {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export class Rand {
  constructor(seed = 1) { this.f = mulberry32(seed); }
  next() { return this.f(); }
  range(a, b) { return a + (b - a) * this.f(); }
  int(a, b) { return Math.floor(a + (b - a + 1) * this.f()); }
  pick(arr) { return arr[Math.floor(this.f() * arr.length)]; }
  chance(p) { return this.f() < p; }
  sign() { return this.f() < 0.5 ? -1 : 1; }
}

// ---------------------------------------------------------------- noise
function hash2i(ix, iy) {
  let h = (Math.imul(ix | 0, 374761393) + Math.imul(iy | 0, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
export const hash1 = (n) => hash2i(n, 7919);
function grad(cx, cy, dx, dy) { const a = hash2i(cx, cy) * TAU; return Math.cos(a) * dx + Math.sin(a) * dy; }
// 2D gradient noise, roughly in [-1, 1]
export function noise2(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const ux = fx * fx * fx * (fx * (fx * 6 - 15) + 10);
  const uy = fy * fy * fy * (fy * (fy * 6 - 15) + 10);
  const n00 = grad(ix, iy, fx, fy), n10 = grad(ix + 1, iy, fx - 1, fy);
  const n01 = grad(ix, iy + 1, fx, fy - 1), n11 = grad(ix + 1, iy + 1, fx - 1, fy - 1);
  return (n00 + (n10 - n00) * ux + (n01 - n00) * uy + (n00 - n10 - n01 + n11) * ux * uy) * 1.41;
}
export function fbm(x, y, oct = 4) {
  let s = 0, a = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) { s += a * noise2(x * f + i * 17.1, y * f - i * 9.3); n += a; a *= 0.5; f *= 2.03; }
  return s / n;
}

// ---------------------------------------------------------------- transforms
const _e = new THREE.Euler(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3();
const _c = new THREE.Color();
// Matrix from position, rotation (yaw applied last: order YXZ) and scale (number or array).
export function makeMat(p, r, s) {
  _e.set(r ? r[0] : 0, r ? r[1] : 0, r ? r[2] : 0, 'YXZ');
  _q.setFromEuler(_e);
  _p.set(p ? p[0] : 0, p ? p[1] : 0, p ? p[2] : 0);
  if (s === undefined || s === null) _s.set(1, 1, 1);
  else if (typeof s === 'number') _s.set(s, s, s);
  else _s.set(s[0], s[1], s[2]);
  return new THREE.Matrix4().compose(_p, _q, _s);
}
export const col = (hex) => new THREE.Color(hex);
export function mixCol(a, b, t) { return new THREE.Color().copy(a).lerp(b, clamp(t, 0, 1)); }

// Merges many primitives into one vertex-coloured, non-indexed geometry (one draw call).
export class GeoBuilder {
  constructor(withUV = false) { this.p = []; this.n = []; this.c = []; this.uv = withUV ? [] : null; }
  add(geo, color, p, r, s) { return this.addM(geo, color, (p || r || s !== undefined) ? makeMat(p, r, s) : null); }
  addM(geo, color, m) {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    if (m) g.applyMatrix4(m);
    if (!g.attributes.normal) g.computeVertexNormals();
    const P = g.attributes.position, N = g.attributes.normal, UV = g.attributes.uv, C = g.attributes.color;
    const isFn = typeof color === 'function';
    const useAttr = !isFn && (color === undefined || color === null) && C;
    if (!isFn && !useAttr) _c.set(color === undefined || color === null ? 0xffffff : color);
    for (let i = 0; i < P.count; i++) {
      const x = P.getX(i), y = P.getY(i), z = P.getZ(i);
      this.p.push(x, y, z);
      this.n.push(N.getX(i), N.getY(i), N.getZ(i));
      if (isFn) { const cc = color(x, y, z, i); this.c.push(cc.r, cc.g, cc.b); }
      else if (useAttr) this.c.push(C.getX(i), C.getY(i), C.getZ(i));
      else this.c.push(_c.r, _c.g, _c.b);
      if (this.uv) { if (UV) this.uv.push(UV.getX(i), UV.getY(i)); else this.uv.push(0, 0); }
    }
    g.dispose();
    return this;
  }
  get count() { return this.p.length / 3; }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    if (this.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

// Tube along a smooth path whose radius follows rFn(t), t in [0,1]. Optional elliptic
// cross-section via sx/sy multipliers on the normal/binormal axes.
export function taperedTube(points, segs, radial, rFn, sx = 1, sy = 1) {
  const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
  const fr = curve.computeFrenetFrames(segs, false);
  const pos = [], idx = [];
  const P = new THREE.Vector3();
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    curve.getPointAt(t, P);
    const N = fr.normals[i], B = fr.binormals[i], r = rFn(t);
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * TAU, c = Math.cos(a) * r * sx, s = Math.sin(a) * r * sy;
      pos.push(P.x + c * N.x + s * B.x, P.y + c * N.y + s * B.y, P.z + c * N.z + s * B.z);
    }
  }
  for (let i = 0; i < segs; i++) {
    for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j, b = a + radial + 1;
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Jitters vertex positions (useful for rocks / foliage blobs). Works on indexed geometry
// by moving shared vertices together so the surface stays closed.
export function jitter(geo, amt, rnd, scaleY = 1) {
  const P = geo.attributes.position;
  const key = (x, y, z) => `${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
  const memo = new Map();
  for (let i = 0; i < P.count; i++) {
    const k = key(P.getX(i), P.getY(i), P.getZ(i));
    let d = memo.get(k);
    if (!d) { d = [rnd.range(-amt, amt), rnd.range(-amt, amt) * scaleY, rnd.range(-amt, amt)]; memo.set(k, d); }
    P.setXYZ(i, P.getX(i) + d[0], P.getY(i) + d[1], P.getZ(i) + d[2]);
  }
  geo.computeVertexNormals();
  return geo;
}

// ---------------------------------------------------------------- chunked instancing
// Collects transforms of one geometry/material and builds one InstancedMesh per spatial
// chunk, so frustum culling (camera and shadow camera) and distance culling both work.
export const SCATTERS = [];
export class Scatter {
  constructor(geometry, material, opts = {}) {
    this.geo = geometry; this.mat = material;
    this.chunk = opts.chunk || 160;
    this.cast = !!opts.castShadow; this.recv = !!opts.receiveShadow;
    this.maxDist = opts.maxDist || Infinity;
    this.lodGeo = opts.lod || null; this.lodDist = opts.lodDist || 110;
    this.useColor = !!opts.colors;
    this.buckets = new Map();
    this.meshes = [];
    SCATTERS.push(this);
  }
  add(m, color) {
    const e = m.elements;
    const k = Math.floor(e[12] / this.chunk) + ',' + Math.floor(e[14] / this.chunk);
    let b = this.buckets.get(k);
    if (!b) { b = { m: [], c: [] }; this.buckets.set(k, b); }
    for (let i = 0; i < 16; i++) b.m.push(e[i]);
    if (this.useColor) { const cc = color || _c.set(0xffffff); b.c.push(cc.r, cc.g, cc.b); }
  }
  get size() { let n = 0; for (const b of this.buckets.values()) n += b.m.length / 16; return n; }
  build(parent) {
    for (const b of this.buckets.values()) {
      const n = b.m.length / 16;
      const make = (geo) => {
        const im = new THREE.InstancedMesh(geo, this.mat, n);
        im.instanceMatrix.array.set(b.m);
        if (this.useColor) im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(b.c), 3);
        im.computeBoundingSphere();
        im.castShadow = this.cast; im.receiveShadow = this.recv;
        parent.add(im);
        return im;
      };
      const hi = make(this.geo), lo = this.lodGeo ? make(this.lodGeo) : null;
      const entry = { mesh: hi, lo, center: hi.boundingSphere.center.clone(), radius: hi.boundingSphere.radius, n, mode: 'hi', px: 0, pz: 0 };
      if (lo) {
        entry.mats = Float32Array.from(b.m);
        entry.cols = this.useColor ? Float32Array.from(b.c) : null;
        lo.count = 0; lo.visible = false;
      }
      this.meshes.push(entry);
    }
    this.buckets.clear();
    return this;
  }
}

// Per-instance level of detail inside a chunk: near instances use the full geometry.
function lodFill(e, toHi) {
  const dst = toHi ? e.mesh : e.lo, other = toHi ? e.lo : e.mesh;
  dst.instanceMatrix.array.set(e.mats); dst.instanceMatrix.needsUpdate = true; dst.count = e.n;
  if (e.cols) { dst.instanceColor.array.set(e.cols); dst.instanceColor.needsUpdate = true; }
  other.count = 0;
  e.mode = toHi ? 'hi' : 'lo';
}
function lodSplit(e, cam, L) {
  const hm = e.mesh.instanceMatrix.array, lm = e.lo.instanceMatrix.array, M = e.mats, C = e.cols;
  const hc = C && e.mesh.instanceColor.array, lc = C && e.lo.instanceColor.array;
  let nh = 0, nl = 0;
  const L2 = L * L;
  for (let i = 0; i < e.n; i++) {
    const o = i * 16, dx = M[o + 12] - cam.x, dz = M[o + 14] - cam.z;
    if (dx * dx + dz * dz < L2) { hm.set(M.subarray(o, o + 16), nh * 16); if (C) hc.set(C.subarray(i * 3, i * 3 + 3), nh * 3); nh++; }
    else { lm.set(M.subarray(o, o + 16), nl * 16); if (C) lc.set(C.subarray(i * 3, i * 3 + 3), nl * 3); nl++; }
  }
  e.mesh.count = nh; e.lo.count = nl;
  e.mesh.instanceMatrix.needsUpdate = e.lo.instanceMatrix.needsUpdate = true;
  if (C) e.mesh.instanceColor.needsUpdate = e.lo.instanceColor.needsUpdate = true;
  e.mode = 'mix'; e.px = cam.x; e.pz = cam.z;
}
export function updateScatters(camPos) {
  for (const s of SCATTERS) {
    if (s.maxDist === Infinity && !s.lodGeo) continue;
    for (const e of s.meshes) {
      const d = e.center.distanceTo(camPos);
      const vis = d < s.maxDist + e.radius;
      if (!e.lo) { e.mesh.visible = vis; continue; }
      if (vis) {
        const L = s.lodDist;
        if (d + e.radius < L) { if (e.mode !== 'hi') lodFill(e, true); }
        else if (d - e.radius > L) { if (e.mode !== 'lo') lodFill(e, false); }
        else if (e.mode !== 'mix' || Math.abs(camPos.x - e.px) + Math.abs(camPos.z - e.pz) > 6) lodSplit(e, camPos, L);
      }
      e.mesh.visible = vis && e.mesh.count > 0;
      e.lo.visible = vis && e.lo.count > 0;
    }
  }
}

// ---------------------------------------------------------------- shader tweaks
// Adds a gentle wind sway to a standard material. Displacement grows with local height.
export function addWind(material, strength = 0.25, freq = 1.3, heightRef = 6) {
  const prev = material.onBeforeCompile;
  material.onBeforeCompile = (shader, r) => {
    if (prev) prev(shader, r);
    shader.uniforms.uTime = SHARED.uTime;
    shader.vertexShader = 'uniform float uTime;\n' + shader.vertexShader.replace('#include <begin_vertex>', `
      #include <begin_vertex>
      {
        vec3 wp = vec3(0.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix[3].xyz;
        #endif
        float hh = max(position.y, 0.0) / ${heightRef.toFixed(2)};
        float ph = wp.x * 0.045 + wp.z * 0.063;
        float sw = sin(uTime * ${freq.toFixed(3)} + ph) * 0.65 + sin(uTime * ${(freq * 2.37).toFixed(3)} + ph * 1.7) * 0.25;
        transformed.x += sw * hh * hh * ${strength.toFixed(3)};
        transformed.z += cos(uTime * ${(freq * 0.83).toFixed(3)} + ph * 1.3) * hh * hh * ${(strength * 0.55).toFixed(3)};
      }`);
  };
  material.customProgramCacheKey = () => `wind_${strength}_${freq}_${heightRef}`;
  return material;
}
