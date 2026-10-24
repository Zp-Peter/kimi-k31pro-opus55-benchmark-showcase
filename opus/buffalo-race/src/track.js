// track.js — the circuit: spline sampling, fast nearest-point queries, racing line, road meshes.
import * as THREE from 'three';
import { clamp, lerp, smoothstep, wrapAngle } from './util.js';
import { roadTexture, slabTexture, curbTexture, startLineTexture } from './textures.js';

// Control points [x, y, z]. s = 0 is the start/finish line in the middle of the village straight.
export const CONTROL = [
  [0, 0, 216], [135, 0, 210], [222, 1, 178], [272, 2, 108], [276, 3, 25],
  [240, 4, -50], [252, 6, -125], [298, 9, -190], [275, 12, -262], [192, 14, -288],
  [102, 13, -250], [30, 12, -272], [-50, 13, -310], [-140, 12, -300], [-200, 10, -246],
  [-194, 8, -166], [-232, 5, -96], [-305, 3, -50], [-330, 3, 40], [-298, 1, 132],
  [-238, 0, 192], [-150, 0, 215],
];
export const WATER_LEVEL = -1.2;
export const LAKE = { x: 10, z: 20, r: 105 };
export const ISLAND = { x: 62, z: -8, r: 30 };
const RIVER_RAW = [[-760, -80], [-640, -40], [-540, -18], [-450, 8], [-385, 6], [-330, 0], [-262, -10], [-190, 2], [-130, 16], [-80, 20]];

// Smooth a 2D polyline with a Catmull-Rom curve and resample it every `step` units.
function smoothPolyline(raw, step) {
  const c = new THREE.CatmullRomCurve3(raw.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'centripetal');
  const n = Math.ceil(c.getLength() / step);
  return c.getSpacedPoints(n).map((p) => [p.x, p.z]);
}
export const RIVER = smoothPolyline(RIVER_RAW, 6);

// Distance from a point to a polyline; t is the normalised position along it.
export function polyDist(x, z, poly) {
  let best = Infinity, bt = 0;
  const n = poly.length - 1;
  for (let i = 0; i < n; i++) {
    const ax = poly[i][0], az = poly[i][1], bx = poly[i + 1][0], bz = poly[i + 1][1];
    const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz;
    const u = clamp(((x - ax) * dx + (z - az) * dz) / l2, 0, 1);
    const ex = ax + dx * u - x, ez = az + dz * u - z, d = ex * ex + ez * ez;
    if (d < best) { best = d; bt = (i + u) / n; }
  }
  return { d: Math.sqrt(best), t: bt };
}
export const riverHalfWidth = (t) => lerp(6.5, 10, smoothstep(0.55, 1, t));

export class Track {
  constructor() {
    const curve = new THREE.CatmullRomCurve3(CONTROL.map(([x, y, z]) => new THREE.Vector3(x, y, z)), true, 'centripetal');
    curve.arcLengthDivisions = 6000;
    this.curve = curve;
    this.length = curve.getLength();
    const N = (this.N = 1600);
    this.ds = this.length / N;
    const A = () => new Float32Array(N);
    this.px = A(); this.py = A(); this.pz = A();
    this.tx = A(); this.tz = A(); this.rx = A(); this.rz = A();
    this.curv = A(); this.halfW = A(); this.wall = A(); this.line = A(); this.vmax = A();
    this.obstacles = [];
    const p = new THREE.Vector3();
    for (let i = 0; i < N; i++) {
      curve.getPointAt(i / N, p);
      this.px[i] = p.x; this.py[i] = p.y; this.pz[i] = p.z;
    }
    for (let i = 0; i < N; i++) {
      const a = (i + N - 1) % N, b = (i + 1) % N;
      let dx = this.px[b] - this.px[a], dz = this.pz[b] - this.pz[a];
      const l = Math.hypot(dx, dz); dx /= l; dz /= l;
      this.tx[i] = dx; this.tz[i] = dz; this.rx[i] = -dz; this.rz[i] = dx;
    }
    // signed curvature: positive = left-hand bend
    const raw = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (i + N - 2) % N, b = (i + 2) % N;
      const ha = Math.atan2(this.tx[a], this.tz[a]), hb = Math.atan2(this.tx[b], this.tz[b]);
      raw[i] = wrapAngle(hb - ha) / (4 * this.ds);
    }
    this.curv.set(this.smooth(raw, 6));

    this.grid = new Map(); this.cell = 32;
    for (let i = 0; i < N; i++) {
      const k = this.key(Math.floor(this.px[i] / this.cell), Math.floor(this.pz[i] / this.cell));
      let arr = this.grid.get(k); if (!arr) this.grid.set(k, (arr = [])); arr.push(i);
    }

    // Bridge where the river crosses the circuit: raise a gentle hump and pull the walls in.
    let bi = 0, bd = Infinity;
    for (let i = 0; i < N; i++) { const d = polyDist(this.px[i], this.pz[i], RIVER).d; if (d < bd) { bd = d; bi = i; } }
    this.bridgeIndex = bi;
    const bridgeY = this.py[bi];
    for (let i = 0; i < N; i++) {
      const d = this.sDist(i, bi);
      if (Math.abs(d) < 48) {
        const level = smoothstep(48, 20, Math.abs(d));
        const hump = Math.cos(clamp(d / 26, -1, 1) * Math.PI / 2) ** 2 * 2.4;
        this.py[i] = lerp(this.py[i], bridgeY, level) + hump;
      }
    }

    for (let i = 0; i < N; i++) {
      const s = i * this.ds, sw = Math.min(s, this.length - s);
      this.halfW[i] = lerp(10.5, 9, smoothstep(120, 220, sw));
      const db = Math.abs(this.sDist(i, bi));
      this.wall[i] = db < 17 ? this.halfW[i] + 0.6 : this.halfW[i] + lerp(1.5, 10.5, smoothstep(17, 30, db));
    }

    // Racing line: drift toward the inside of bends, smoothed so it anticipates them.
    const tgt = new Float32Array(N);
    for (let i = 0; i < N; i++) tgt[i] = clamp(-this.curv[i] * 260, -(this.halfW[i] - 2.6), this.halfW[i] - 2.6);
    this.line.set(this.smooth(this.smooth(tgt, 34), 20));
    // Safe cornering speed with a backwards braking pass.
    for (let i = 0; i < N; i++) this.vmax[i] = Math.min(60, Math.sqrt(28 / Math.max(Math.abs(this.curv[i]), 1e-4)));
    for (let pass = 0; pass < 2; pass++) {
      for (let i = N - 1; i >= 0; i--) {
        const nx = this.vmax[(i + 1) % N];
        this.vmax[i] = Math.min(this.vmax[i], Math.sqrt(nx * nx + 2 * 16 * this.ds));
      }
    }
  }

  key(cx, cz) { return cx * 4096 + cz; }
  smooth(arr, rad) {
    const N = arr.length, out = new Float32Array(N);
    let acc = 0;
    for (let k = -rad; k <= rad; k++) acc += arr[(k + N) % N];
    for (let i = 0; i < N; i++) {
      out[i] = acc / (2 * rad + 1);
      acc += arr[(i + rad + 1) % N] - arr[(i - rad + N) % N];
    }
    return out;
  }
  // signed sample distance (in world units) from index b to index a, wrapped
  sDist(a, b) { let d = a - b; const N = this.N; if (d > N / 2) d -= N; if (d < -N / 2) d += N; return d * this.ds; }
  idx(s) { const N = this.N; return ((Math.round(s / this.ds) % N) + N) % N; }

  // Nearest sample to (x,z) via the spatial grid. Returns -1 when farther than ~64 units.
  nearestIndex(x, z) {
    const cx = Math.floor(x / this.cell), cz = Math.floor(z / this.cell);
    let best = -1, bd = Infinity;
    for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) {
      const arr = this.grid.get(this.key(cx + a, cz + b));
      if (!arr) continue;
      for (const i of arr) {
        const dx = this.px[i] - x, dz = this.pz[i] - z, d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
    }
    return best;
  }
  // Distance to the centreline (Infinity when far away).
  distance(x, z) {
    const i = this.nearestIndex(x, z);
    if (i < 0) return Infinity;
    return Math.abs((x - this.px[i]) * this.rx[i] + (z - this.pz[i]) * this.rz[i]) +
      Math.max(0, Math.abs((x - this.px[i]) * this.tx[i] + (z - this.pz[i]) * this.tz[i]) - this.ds);
  }

  // Project a world position onto the track. `hint` (previous index) keeps the search local.
  project(x, z, hint, out) {
    const N = this.N;
    let best = -1, bd = Infinity;
    if (hint >= 0) {
      for (let k = -50; k <= 50; k++) {
        const i = (hint + k + N) % N;
        const dx = this.px[i] - x, dz = this.pz[i] - z, d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
      if (bd > 60 * 60) best = -1;
    }
    if (best < 0) best = this.nearestIndex(x, z);
    if (best < 0) { // very far: brute force
      for (let i = 0; i < N; i++) { const dx = this.px[i] - x, dz = this.pz[i] - z, d = dx * dx + dz * dz; if (d < bd) { bd = d; best = i; } }
    }
    const i = best, dx = x - this.px[i], dz = z - this.pz[i];
    const along = dx * this.tx[i] + dz * this.tz[i];
    const frac = clamp(along / this.ds, -1, 1);
    const j = (i + (frac >= 0 ? 1 : N - 1)) % N;
    out.i = i;
    out.s = (((i + frac) * this.ds) % this.length + this.length) % this.length;
    out.lat = dx * this.rx[i] + dz * this.rz[i];
    out.y = lerp(this.py[i], this.py[j], Math.abs(frac));
    out.halfW = this.halfW[i]; out.wall = this.wall[i];
    return out;
  }

  // World position at arc length s with a lateral offset.
  pointAt(s, lat, out = new THREE.Vector3()) {
    const i = this.idx(s);
    return out.set(this.px[i] + this.rx[i] * lat, this.py[i], this.pz[i] + this.rz[i] * lat);
  }
  headingAt(i) { return Math.atan2(this.tx[i], this.tz[i]); }

  // ------------------------------------------------------------------ meshes
  // Builds a strip along the whole loop from a cross-section profile [[lat, dy, u], ...].
  strip(profile, repLen, filter, widthScaled = true) {
    const N = this.N, cols = profile.length;
    const reps = Math.max(1, Math.round(this.length / repLen));
    const pos = [], uv = [], idx = [];
    for (let i = 0; i <= N; i++) {
      const k = i % N, hw = this.halfW[k] / 9;
      const v = (i / N) * reps;
      for (const [lat0, dy, u] of profile) {
        const lat = widthScaled ? (Math.abs(lat0) <= 9.001 ? lat0 * hw : Math.sign(lat0) * (9 * hw + Math.abs(lat0) - 9)) : lat0;
        pos.push(this.px[k] + this.rx[k] * lat, this.py[k] + dy, this.pz[k] + this.rz[k] * lat);
        uv.push(u, v);
      }
    }
    for (let i = 0; i < N; i++) {
      if (filter && !filter(i)) continue;
      for (let j = 0; j < cols - 1; j++) {
        const a = i * cols + j, b = a + 1, c = a + cols, d = c + 1;
        idx.push(a, b, c, b, d, c);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  isVillage(i) { const s = i * this.ds; return s < 120 || s > this.length - 175; }

  buildMeshes(scene) {
    const roadProfile = [[-9, 0.02, 0], [-4.5, 0.07, 0.25], [0, 0.09, 0.5], [4.5, 0.07, 0.75], [9, 0.02, 1]];
    const dirt = new THREE.MeshStandardMaterial({ map: roadTexture(), roughness: 0.96, metalness: 0 });
    const slabMap = slabTexture(); slabMap.repeat.set(3, 1);
    const slab = new THREE.MeshStandardMaterial({ map: slabMap, roughness: 0.82, metalness: 0 });
    const curb = new THREE.MeshStandardMaterial({ map: curbTexture(), roughness: 0.9, metalness: 0 });
    const meshes = [
      new THREE.Mesh(this.strip(roadProfile, 18, (i) => !this.isVillage(i)), dirt),
      new THREE.Mesh(this.strip(roadProfile, 7, (i) => this.isVillage(i)), slab),
      new THREE.Mesh(this.strip([[-10.05, -0.6, 0], [-9.95, 0.16, 0.12], [-9.05, 0.16, 0.88], [-9, 0.02, 1]], 4), curb),
      new THREE.Mesh(this.strip([[9, 0.02, 0], [9.05, 0.16, 0.12], [9.95, 0.16, 0.88], [10.05, -0.6, 1]], 4), curb),
    ];
    for (const m of meshes) { m.receiveShadow = true; scene.add(m); }

    // Start / finish cloth across the road.
    const sl = startLineTexture(); sl.wrapS = THREE.RepeatWrapping; sl.repeat.set(3, 1);
    const hw = this.halfW[0];
    const g = new THREE.PlaneGeometry(hw * 2, 2.6);
    g.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: sl, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2 }));
    m.position.set(this.px[0], this.py[0] + 0.1, this.pz[0]);
    m.rotation.y = this.headingAt(0);
    m.receiveShadow = true;
    scene.add(m);
    return meshes;
  }
}
