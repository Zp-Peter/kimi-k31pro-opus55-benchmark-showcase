// nature.js — willows, peach blossom, Huangshan pines, bamboo groves, rapeseed, reeds, lotus.
import * as THREE from 'three';
import { Rand, TAU, clamp, lerp, noise2, GeoBuilder, taperedTube, makeMat, Scatter, addWind, SHARED, col } from './util.js';
import { willowTexture, bambooLeafTexture } from './textures.js';
import { WATER_LEVEL, LAKE, ISLAND, RIVER, riverHalfWidth } from './track.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// Icosahedron blob with jittered radius and ellipsoid normals (soft painterly volume).
function blob(r, rnd, detail = 1, amt = 0.18, sy = 1) {
  const g = new THREE.IcosahedronGeometry(r, detail);
  const P = g.attributes.position, N = g.attributes.normal, seed = rnd.next() * 1000;
  const q = (v) => Math.round((v / r) * 1e4) / 1e4;
  for (let i = 0; i < P.count; i++) {
    const h = Math.sin(q(P.getX(i)) * 127.1 + q(P.getY(i)) * 311.7 + q(P.getZ(i)) * 74.7 + seed) * 43758.5453;
    const f = 1 + amt * ((h - Math.floor(h)) * 2 - 1);
    P.setXYZ(i, P.getX(i) * f, P.getY(i) * f * sy, P.getZ(i) * f);
  }
  const n = new THREE.Vector3();
  for (let i = 0; i < P.count; i++) {
    n.set(P.getX(i), P.getY(i) / (sy * sy), P.getZ(i)).normalize();
    N.setXYZ(i, n.x, n.y, n.z);
  }
  return g;
}

// Wind for hanging strands/leaf cards: the free end (uv.y = 0) moves most.
function cardWind(mat, amp = 0.55) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = SHARED.uTime;
    shader.vertexShader = 'uniform float uTime;\n' + shader.vertexShader.replace('#include <begin_vertex>', `
      #include <begin_vertex>
      {
        vec3 wp = vec3(0.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix[3].xyz;
        #endif
        float w = 1.0 - uv.y; w *= w;
        float ph = wp.x * 0.07 + wp.z * 0.05 + position.x * 0.35 + position.z * 0.3;
        transformed.x += sin(uTime * 1.5 + ph) * w * ${amp.toFixed(2)};
        transformed.z += cos(uTime * 1.2 + ph * 1.3) * w * ${(amp * 0.7).toFixed(2)};
      }`);
  };
  mat.customProgramCacheKey = () => 'cardWind' + amp;
  return mat;
}
function cardMaterial(tex, amp) {
  const m = cardWind(new THREE.MeshStandardMaterial({ map: tex, alphaTest: 0.42, side: THREE.DoubleSide, roughness: 0.85 }), amp);
  return m;
}
function cardDepth(tex) {
  return new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: tex, alphaTest: 0.42 });
}

// ------------------------------------------------------------------ species
const BARK = [0x4f3d31, 0x5a463a, 0x463629];

function willow(rnd, lo = false) {
  const wood = new GeoBuilder(), fol = new GeoBuilder(true);
  const lx = rnd.range(-0.7, 0.7), lz = rnd.range(-0.7, 0.7), bark = rnd.pick(BARK);
  wood.add(taperedTube([V(0, -0.5, 0), V(lx * 0.3, 1.4, lz * 0.2), V(lx * 0.8, 3, lz * 0.9), V(lx, 4.4, lz)], lo ? 4 : 8, lo ? 4 : 7, (t) => lerp(0.62, 0.3, t)), bark);
  const top = V(lx, 4.2, lz);
  const limbs = rnd.int(3, 5);
  for (let k = 0; k < limbs; k++) {
    const a = (k / limbs) * TAU + rnd.range(-0.4, 0.4), r = rnd.range(1.6, 2.6);
    wood.add(taperedTube([top, V(lx + Math.cos(a) * r * 0.5, 5.6, lz + Math.sin(a) * r * 0.5), V(lx + Math.cos(a) * r, 6.6 + rnd.range(0, 0.8), lz + Math.sin(a) * r)], lo ? 3 : 5, lo ? 3 : 5, (t) => lerp(0.24, 0.06, t)), bark);
  }
  for (let k = 0; k < 30; k++) {
    const a = rnd.range(0, TAU), rr = Math.sqrt(rnd.next()) * 3.4;
    const L = rnd.range(3.6, 5.8), y = 7.4 + rnd.range(-0.3, 0.6) - rr * rr * 0.12;
    const g = new THREE.PlaneGeometry(1.5, L);
    g.translate(0, -L / 2, 0);
    fol.add(g, 0xffffff, [lx + Math.cos(a) * rr, y, lz + Math.sin(a) * rr], [rnd.range(-0.12, 0.12), -a + Math.PI / 2 + rnd.range(-0.5, 0.5), 0]);
  }
  return [wood.build(), fol.build()];
}

function peach(rnd, lo = false) {
  const b = new GeoBuilder();
  const bark = rnd.pick(BARK);
  const pinks = [col(0xf5b3c6), col(0xf9cfdb), col(0xee9db6), col(0xfbe3ea), col(0xe98aa8)];
  b.add(taperedTube([V(0, -0.4, 0), V(0.25, 1.0, 0.1), V(0.05, 1.9, -0.1)], lo ? 3 : 5, lo ? 4 : 6, (t) => lerp(0.34, 0.22, t)), bark);
  const n = rnd.int(4, 6), base = V(0.05, 1.8, -0.1);
  for (let k = 0; k < n; k++) {
    const a = (k / n) * TAU + rnd.range(-0.5, 0.5), r = rnd.range(1.4, 2.5), h = rnd.range(3.0, 4.3);
    const mid = V(Math.cos(a) * r * 0.45, (1.8 + h) / 2 + 0.3, Math.sin(a) * r * 0.45);
    const end = V(Math.cos(a) * r, h, Math.sin(a) * r);
    b.add(taperedTube([base, mid, end], lo ? 2 : 4, lo ? 3 : 5, (t) => lerp(0.17, 0.05, t)), bark);
    for (const [p, s] of [[end, 1], [mid, 0.7]]) {
      const c = rnd.pick(pinks);
      b.add(blob(rnd.range(0.75, 1.15) * s, rnd, lo ? 0 : 1, 0.22, 0.8), c, [p.x + rnd.range(-0.3, 0.3), p.y + 0.25, p.z + rnd.range(-0.3, 0.3)], [rnd.range(0, 3), rnd.range(0, 3), 0]);
    }
  }
  for (let k = 0; k < 4; k++) {
    const a = rnd.range(0, TAU), r = rnd.range(0.3, 1.2);
    b.add(blob(rnd.range(0.8, 1.2), rnd, lo ? 0 : 1, 0.2, 0.75), rnd.pick(pinks), [Math.cos(a) * r, rnd.range(3.6, 4.6), Math.sin(a) * r]);
  }
  for (let k = 0; k < 3; k++) {
    const a = rnd.range(0, TAU), r = rnd.range(1, 2);
    b.add(blob(rnd.range(0.35, 0.5), rnd, 0, 0.2, 0.7), 0x7c9a4e, [Math.cos(a) * r, rnd.range(2.6, 3.4), Math.sin(a) * r]);
  }
  return b.build();
}

function pine(rnd, lo = false) {
  const b = new GeoBuilder();
  const bark = 0x584638, greens = [col(0x35513a), col(0x3f5e3f), col(0x2e4834), col(0x48663f)];
  const pts = [V(0, -0.5, 0), V(rnd.range(-0.6, 0.6), 2.2, rnd.range(-0.6, 0.6)), V(rnd.range(-0.9, 0.9), 4.6, rnd.range(-0.9, 0.9)), V(rnd.range(-0.6, 0.6), 7, rnd.range(-0.6, 0.6)), V(rnd.range(-0.4, 0.4), 9.2, rnd.range(-0.4, 0.4))];
  b.add(taperedTube(pts, lo ? 5 : 10, lo ? 4 : 7, (t) => lerp(0.5, 0.14, t)), bark);
  const curve = new THREE.CatmullRomCurve3(pts);
  const tiers = rnd.int(4, 6);
  for (let k = 0; k < tiers; k++) {
    const t = lerp(0.45, 0.92, k / (tiers - 1));
    const p = curve.getPointAt(t);
    const a = rnd.range(0, TAU), len = lerp(3.4, 1.6, k / tiers) * rnd.range(0.8, 1.15);
    const end = V(p.x + Math.cos(a) * len, p.y + rnd.range(-0.4, 0.3), p.z + Math.sin(a) * len);
    b.add(taperedTube([p, V((p.x + end.x) / 2, p.y + 0.25, (p.z + end.z) / 2), end], lo ? 2 : 4, lo ? 3 : 5, (u) => lerp(0.16, 0.05, u)), bark);
    const r = lerp(2.3, 1.4, k / tiers) * rnd.range(0.85, 1.15);
    b.add(blob(r, rnd, lo ? 0 : 1, 0.16, 0.34), rnd.pick(greens), [end.x, end.y + 0.25, end.z], [0, rnd.range(0, 3), 0]);
    b.add(blob(r * 0.7, rnd, lo ? 0 : 1, 0.16, 0.34), rnd.pick(greens), [(p.x + end.x) / 2, p.y + 0.35, (p.z + end.z) / 2]);
  }
  const tp = pts[4];
  b.add(blob(1.7, rnd, lo ? 0 : 1, 0.15, 0.38), rnd.pick(greens), [tp.x, tp.y + 0.2, tp.z]);
  return b.build();
}

function bambooClump(rnd, lo = false) {
  const stalks = new GeoBuilder(), leaves = new GeoBuilder(true);
  const n = rnd.int(5, 8);
  const greens = [0x87a447, 0x7a9a3c, 0x9bb257, 0x6f8f38, 0xa2b45e];
  for (let k = 0; k < n; k++) {
    const bx = rnd.range(-1.3, 1.3), bz = rnd.range(-1.3, 1.3), H = rnd.range(9, 14.5);
    const lx = rnd.range(-0.07, 0.07) + bx * 0.03, lz = rnd.range(-0.07, 0.07) + bz * 0.03;
    const c = rnd.pick(greens), rot = [Math.atan(lz), 0, -Math.atan(lx)];
    stalks.add(new THREE.CylinderGeometry(0.1, 0.13, H, lo ? 3 : 5, 1, true), c, [bx + lx * H / 2, H / 2 - 0.3, bz + lz * H / 2], rot);
    for (let y = 1.1; y < H - 0.5; y += rnd.range(1.0, 1.4)) {
      if (!lo) stalks.add(new THREE.CylinderGeometry(0.145, 0.145, 0.07, 5, 1, true), 0x5c7230, [bx + lx * y, y, bz + lz * y], rot);
    }
    for (let j = 0; j < 9; j++) {
      const y = H * rnd.range(0.48, 1.0), s = rnd.range(2.4, 3.6);
      const g = new THREE.PlaneGeometry(s, s);
      g.translate(0, -s * 0.3, 0);
      leaves.add(g, 0xffffff, [bx + lx * y, y, bz + lz * y], [rnd.range(-0.3, 0.3), rnd.range(0, TAU), rnd.range(-0.3, 0.3)]);
    }
  }
  return [stalks.build(), leaves.build()];
}

function camphor(rnd) {
  const b = new GeoBuilder();
  const greens = [col(0x46693c), col(0x53773f), col(0x3c5c36), col(0x5f8445)];
  b.add(taperedTube([V(0, -1, 0), V(0.4, 3, 0.2), V(0.1, 6, -0.2)], 8, 9, (t) => lerp(1.4, 0.7, t)), 0x4a3a2e);
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * TAU + rnd.range(-0.3, 0.3), r = rnd.range(4, 6);
    b.add(taperedTube([V(0.1, 5.2, -0.2), V(Math.cos(a) * r * 0.5, 8, Math.sin(a) * r * 0.5), V(Math.cos(a) * r, 10.5, Math.sin(a) * r)], 6, 6, (t) => lerp(0.55, 0.15, t)), 0x4a3a2e);
  }
  for (let k = 0; k < 22; k++) {
    const a = rnd.range(0, TAU), r = Math.sqrt(rnd.next()) * 6.5;
    b.add(blob(rnd.range(2.2, 3.3), rnd, 1, 0.2, 0.75), rnd.pick(greens), [Math.cos(a) * r, 11 + rnd.range(-1, 2.5) - r * 0.25, Math.sin(a) * r]);
  }
  // red prayer ribbons tied around the trunk
  for (let k = 0; k < 3; k++) b.add(new THREE.TorusGeometry(1.25 - k * 0.05, 0.08, 4, 18), 0xb8322a, [0.2, 2.2 + k * 0.5, 0.1], [Math.PI / 2, 0, 0]);
  return b.build();
}

function bush(rnd, lo = false) {
  const b = new GeoBuilder();
  const greens = [col(0x5c7d3d), col(0x6a8a44), col(0x4f6e38), col(0x7a9450)];
  for (let k = 0; k < rnd.int(2, 4); k++) {
    b.add(blob(rnd.range(0.7, 1.2), rnd, lo ? 0 : 1, 0.2, 0.75), rnd.pick(greens), [rnd.range(-0.8, 0.8), rnd.range(0.4, 0.7), rnd.range(-0.8, 0.8)]);
  }
  return b.build();
}

function rock(rnd) {
  const g = new THREE.DodecahedronGeometry(1, 0);
  const P = g.attributes.position, memo = new Map();
  for (let i = 0; i < P.count; i++) {
    const k = `${P.getX(i).toFixed(3)},${P.getY(i).toFixed(3)},${P.getZ(i).toFixed(3)}`;
    let f = memo.get(k); if (!f) { f = [rnd.range(0.7, 1.25), rnd.range(0.55, 0.95), rnd.range(0.7, 1.25)]; memo.set(k, f); }
    P.setXYZ(i, P.getX(i) * f[0], P.getY(i) * f[1], P.getZ(i) * f[2]);
  }
  g.computeVertexNormals();
  const grey = col(0x8b897e), moss = col(0x6f8248), c = new THREE.Color();
  return new GeoBuilder().add(g, (x, y) => c.copy(grey).lerp(moss, clamp(y * 1.4, 0, 0.7))).build();
}

function grassTuft(rnd) {
  const pos = [], colr = [], dark = col(0x4e6b2f), light = col(0xa4b866);
  for (let k = 0; k < 5; k++) {
    const a = rnd.range(0, TAU), h = rnd.range(0.45, 0.9), lean = rnd.range(0.1, 0.35);
    const ca = Math.cos(a), sa = Math.sin(a), w = 0.06;
    pos.push(-sa * w, 0, ca * w, sa * w, 0, -ca * w, ca * lean, h, sa * lean);
    colr.push(dark.r, dark.g, dark.b, dark.r, dark.g, dark.b, light.r, light.g, light.b);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  g.computeVertexNormals();
  return g;
}

function rapePlant(rnd, lo = false) {
  const b = new GeoBuilder();
  const yellows = [0xf3d22b, 0xf6dc4a, 0xe9c41f];
  for (let k = 0; k < 3; k++) {
    const x = rnd.range(-0.25, 0.25), z = rnd.range(-0.25, 0.25), h = rnd.range(0.8, 1.25);
    b.add(new THREE.CylinderGeometry(0.02, 0.03, h, 3, 1, true), 0x6f9440, [x, h / 2, z]);
    for (let j = 0; j < 4; j++) {
      const r = rnd.range(0.1, 0.15), c = rnd.pick(yellows), dx = rnd.range(-0.12, 0.12), dy = rnd.range(-0.12, 0.12), dz = rnd.range(-0.12, 0.12);
      if (!lo) b.add(new THREE.OctahedronGeometry(r, 0), c, [x + dx, h + dy, z + dz]);
    }
    if (lo) b.add(new THREE.OctahedronGeometry(0.22, 0), yellows[k], [x, h, z]);
    else b.add(new THREE.OctahedronGeometry(0.15, 0), 0x7da04a, [x, h * 0.45, z]);
  }
  return b.build();
}

function reed(rnd) {
  const b = new GeoBuilder();
  for (let k = 0; k < 6; k++) {
    const x = rnd.range(-0.4, 0.4), z = rnd.range(-0.4, 0.4), h = rnd.range(1.6, 2.6);
    b.add(new THREE.CylinderGeometry(0.015, 0.03, h, 3, 1), 0x8a9a52, [x, h / 2, z], [rnd.range(-0.12, 0.12), 0, rnd.range(-0.12, 0.12)]);
    b.add(new THREE.CylinderGeometry(0.05, 0.03, 0.35, 4, 1), 0x8b6a45, [x, h, z]);
  }
  return b.build();
}

function lotusPad(rnd) {
  const g = new THREE.CircleGeometry(1, 14, 0.25, TAU - 0.5);
  g.rotateX(-Math.PI / 2);
  const c1 = col(0x5d8a45), c2 = col(0x86ad5a), c = new THREE.Color();
  return new GeoBuilder().add(g, (x, y, z) => c.copy(c2).lerp(c1, Math.hypot(x, z))).build();
}
function lotusFlower(rnd) {
  const b = new GeoBuilder();
  const pink = col(0xf2a7bf), white = col(0xfbe6ee), c = new THREE.Color();
  for (const [n, r, tilt, y] of [[6, 0.42, 0.75, 0.15], [5, 0.3, 0.35, 0.25]]) {
    for (let k = 0; k < n; k++) {
      const a = (k / n) * TAU;
      const g = new THREE.SphereGeometry(0.22, 6, 5);
      g.scale(0.55, 1.25, 0.25);
      g.translate(0, 0.22, 0);
      b.add(g, (x, yy) => c.copy(white).lerp(pink, clamp(yy * 2.2, 0, 1)), [Math.cos(a) * r * 0.5, y, Math.sin(a) * r * 0.5], [tilt, -a + Math.PI / 2, 0]);
    }
  }
  b.add(new THREE.CylinderGeometry(0.12, 0.09, 0.1, 8), 0xe8c33a, [0, 0.3, 0]);
  b.add(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 4), 0x5d8a45, [0, -0.2, 0]);
  return b.build();
}

// ------------------------------------------------------------------ placement
export function buildNature(scene, track, terrain) {
  const rnd = new Rand(2024);
  const trunkMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
  const leafyMat = addWind(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 }), 0.16, 1.1, 9);
  const willowTex = willowTexture(), bambooTex = bambooLeafTexture();
  const willowMat = cardMaterial(willowTex, 0.6), bambooMat = cardMaterial(bambooTex, 0.25);

  const groundOk = (x, z, margin = 2) => {
    const h = terrain.heightAt(x, z);
    return h > WATER_LEVEL + 0.4 && !terrain.paddyAt(x, z) && !terrain.blocked(x, z, margin);
  };
  const clear = (x, z, extra) => {
    const i = track.nearestIndex(x, z);
    return i < 0 || track.distance(x, z) > track.wall[i] + extra;
  };
  const place = (x, z, scale, yaw, sink = 0) => makeMat([x, terrain.heightAt(x, z) - sink, z], [0, yaw, 0], scale);
  const tint = (lo, hi) => new THREE.Color().setScalar(rnd.range(lo, hi));

  // Variant pools -> scatters
  const pool = (n, fn) => Array.from({ length: n }, () => fn(rnd));
  const lodPool = (n, fn) => Array.from({ length: n }, () => { const seed = rnd.int(1, 2147483646); return [fn(new Rand(seed), false), fn(new Rand(seed), true)]; });
  const mk = (geo, mat, opts, depth) => {
    const s = new Scatter(geo, mat, opts);
    if (depth) s.depth = depth;
    return s;
  };
  const W = lodPool(3, willow).map(([[w, f], [wl]]) => [mk(w, trunkMat, { castShadow: true, lod: wl, lodDist: 90 }), mk(f, willowMat, { castShadow: true }, cardDepth(willowTex))]);
  const P = lodPool(4, peach).map(([g, gl]) => mk(g, leafyMat, { castShadow: true, colors: true, lod: gl }));
  const PI = lodPool(3, pine).map(([g, gl]) => mk(g, leafyMat, { castShadow: true, colors: true, lod: gl }));
  const B = lodPool(4, bambooClump).map(([[s, l], [sl]]) => [mk(s, leafyMat, { castShadow: true, lod: sl, lodDist: 80 }), mk(l, bambooMat, { castShadow: true }, cardDepth(bambooTex))]);
  const BU = lodPool(3, bush).map(([g, gl]) => mk(g, leafyMat, { colors: true, maxDist: 420, lod: gl, lodDist: 80 }));
  const R = pool(3, rock).map((g) => mk(g, trunkMat, { maxDist: 500, colors: true }));
  const G = mk(grassTuft(rnd), addWind(new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9 }), 0.12, 2, 0.8), { maxDist: 150, chunk: 100, colors: true });
  const rapeSeed = rnd.int(1, 2147483646);
  const RP = mk(rapePlant(new Rand(rapeSeed)), addWind(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }), 0.12, 1.8, 1.2), { maxDist: 240, chunk: 100, lod: rapePlant(new Rand(rapeSeed), true), lodDist: 55 });
  const RE = mk(reed(rnd), addWind(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }), 0.25, 1.6, 2.2), { maxDist: 260 });
  const LP = mk(lotusPad(rnd), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, side: THREE.DoubleSide }), { maxDist: 400 });
  const LF = mk(lotusFlower(rnd), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }), { maxDist: 400 });

  // Bamboo sea along the northern hills.
  for (let a = 0; a < 5200; a++) {
    const x = rnd.range(-300, 360), z = rnd.range(-470, -150);
    const zone = z < -205 || (x < -150 && z < -150);
    if (!zone || noise2(x * 0.018, z * 0.018) < -0.25) continue;
    if (!clear(x, z, 1.2) || !groundOk(x, z, 2)) continue;
    if (track.distance(x, z) > 150 && rnd.chance(0.6)) continue;
    const v = rnd.int(0, B.length - 1), m = place(x, z, rnd.range(0.85, 1.2), rnd.range(0, TAU));
    B[v][0].add(m); B[v][1].add(m);
  }
  // Pines on the outer hills, the north-west ridge and the island.
  for (let a = 0; a < 2600; a++) {
    const ang = rnd.range(0, TAU), r = rnd.range(330, 720);
    const x = Math.cos(ang) * r, z = Math.sin(ang) * r;
    if (z > -100 && r < 430 && rnd.chance(0.7)) continue;
    if (!clear(x, z, 4) || !groundOk(x, z, 3)) continue;
    if (noise2(x * 0.012 + 9, z * 0.012) < -0.1) continue;
    PI[rnd.int(0, PI.length - 1)].add(place(x, z, rnd.range(0.9, 1.5), rnd.range(0, TAU), 0.3), tint(0.85, 1.1));
  }
  for (let k = 0; k < 4; k++) {
    const a = rnd.range(0, TAU), r = rnd.range(12, 19), x = ISLAND.x + Math.cos(a) * r, z = ISLAND.z + Math.sin(a) * r;
    if (groundOk(x, z, 2)) PI[k % PI.length].add(place(x, z, rnd.range(0.8, 1.05), rnd.range(0, TAU), 0.2), tint(0.9, 1.05));
  }
  // Willows lining the river and the lake shore.
  const shore = (x, z) => { const h = terrain.heightAt(x, z); return h > WATER_LEVEL + 0.3 && h < WATER_LEVEL + 4.5; };
  const addWillow = (x, z) => {
    if (!shore(x, z) || !clear(x, z, 3) || terrain.blocked(x, z, 3)) return;
    const v = rnd.int(0, W.length - 1), m = place(x, z, rnd.range(0.9, 1.25), rnd.range(0, TAU), 0.2);
    W[v][0].add(m); W[v][1].add(m);
  };
  for (let i = 4; i < RIVER.length - 1; i += 2) {
    const [x0, z0] = RIVER[i], [x1, z1] = RIVER[i + 1];
    const dx = x1 - x0, dz = z1 - z0, l = Math.hypot(dx, dz), nx = -dz / l, nz = dx / l;
    const hw = riverHalfWidth(i / (RIVER.length - 1));
    for (const s of [-1, 1]) if (rnd.chance(0.75)) { const o = hw + rnd.range(3, 8); addWillow(x0 + nx * o * s, z0 + nz * o * s); }
  }
  for (let a = 0; a < TAU; a += rnd.range(0.07, 0.16)) {
    const r = LAKE.r + rnd.range(-4, 14);
    addWillow(LAKE.x + Math.cos(a) * r, LAKE.z + Math.sin(a) * r);
  }
  // Peach blossom around the village, the lake and the western orchard.
  const peachZone = (x, z) => (z > 90 && z < 360 && x > -380 && x < 230) || (x > -290 && x < -120 && z > 40 && z < 190) || (Math.hypot(x - LAKE.x, z - LAKE.z) < LAKE.r + 45);
  for (let a = 0; a < 4200; a++) {
    const x = rnd.range(-420, 260), z = rnd.range(-120, 380);
    if (!peachZone(x, z) || !clear(x, z, 2.5) || !groundOk(x, z, 3)) continue;
    if (terrain.rapeMask(x, z) > 0.3 || noise2(x * 0.03, z * 0.03) < -0.15) continue;
    P[rnd.int(0, P.length - 1)].add(place(x, z, rnd.range(0.85, 1.25), rnd.range(0, TAU), 0.2), tint(0.92, 1.06));
  }
  for (let a = 0; a < 500; a++) { // a few strays elsewhere along the course
    const i = rnd.int(0, track.N - 1), side = rnd.sign(), o = track.wall[i] + rnd.range(5, 40);
    const x = track.px[i] + track.rx[i] * o * side, z = track.pz[i] + track.rz[i] * o * side;
    if (rnd.chance(0.75) || !clear(x, z, 3) || !groundOk(x, z, 3) || terrain.rapeMask(x, z) > 0.3) continue;
    if (z < -205) continue;
    P[rnd.int(0, P.length - 1)].add(place(x, z, rnd.range(0.85, 1.2), rnd.range(0, TAU), 0.2), tint(0.92, 1.06));
  }
  // Old camphor trees guarding the village.
  const camGeo = camphor(rnd), cam = mk(camGeo, leafyMat, { castShadow: true });
  for (const [x, z, s] of [[-46, 176, 1], [118, 252, 0.9], [-262, 270, 1.05]]) if (!terrain.blocked(x, z, 4)) cam.add(place(x, z, s, rnd.range(0, TAU), 0.5));
  // Bushes and rocks.
  for (let a = 0; a < 4000; a++) {
    const x = rnd.range(-700, 700), z = rnd.range(-700, 700);
    if (!clear(x, z, 0.8) || !groundOk(x, z, 1.5) || terrain.rapeMask(x, z) > 0.2) continue;
    if (rnd.chance(0.55)) BU[rnd.int(0, BU.length - 1)].add(place(x, z, rnd.range(0.7, 1.4), rnd.range(0, TAU), 0.2), tint(0.85, 1.1));
    else if (rnd.chance(0.5)) R[rnd.int(0, R.length - 1)].add(place(x, z, rnd.range(0.5, 2.2), rnd.range(0, TAU), 0.3), tint(0.85, 1.1));
  }
  // Grass tufts hugging the course.
  for (let a = 0; a < 26000; a++) {
    const i = rnd.int(0, track.N - 1), side = rnd.sign(), o = track.halfW[i] + 1.3 + Math.pow(rnd.next(), 1.6) * 40;
    const x = track.px[i] + track.rx[i] * o * side, z = track.pz[i] + track.rz[i] * o * side;
    if (!groundOk(x, z, 0.5) || terrain.rapeMask(x, z) > 0.4 || (track.isVillage(i) && o < track.wall[i])) continue;
    G.add(place(x, z, rnd.range(0.7, 1.5), rnd.range(0, TAU)), new THREE.Color().setRGB(rnd.range(0.85, 1.1), rnd.range(0.9, 1.1), rnd.range(0.8, 1)));
  }
  // Rapeseed plants (only near the course, where they are seen up close).
  for (let a = 0; a < 60000 && RP.size < 14000; a++) {
    const x = rnd.range(-560, 590), z = rnd.range(-520, 380);
    if (terrain.rapeMask(x, z) < 0.5 || track.distance(x, z) > 170 || !groundOk(x, z, 1)) continue;
    RP.add(place(x, z, rnd.range(0.8, 1.2), rnd.range(0, TAU), 0.05));
  }
  // Reeds at the water line.
  for (let a = 0; a < 9000; a++) {
    const x = rnd.range(-760, 140), z = rnd.range(-110, 150);
    const h = terrain.heightAt(x, z);
    if (h < WATER_LEVEL - 0.4 || h > WATER_LEVEL + 0.7 || !clear(x, z, 2)) continue;
    RE.add(place(x, z, rnd.range(0.8, 1.3), rnd.range(0, TAU), 0.1));
  }
  // Lotus pads and flowers in the lake shallows.
  for (let a = 0; a < 5000; a++) {
    const ang = rnd.range(0, TAU), r = rnd.range(30, LAKE.r);
    const x = LAKE.x + Math.cos(ang) * r, z = LAKE.z + Math.sin(ang) * r;
    const h = terrain.heightAt(x, z);
    if (h > WATER_LEVEL - 0.5 || h < WATER_LEVEL - 3.2 || noise2(x * 0.04, z * 0.04) < 0.1) continue;
    if (Math.hypot(x - ISLAND.x, z - ISLAND.z) < ISLAND.r + 4) continue;
    LP.add(makeMat([x, WATER_LEVEL + 0.04 + rnd.range(0, 0.03), z], [rnd.range(-0.05, 0.05), rnd.range(0, TAU), 0], rnd.range(0.7, 1.5)));
    if (rnd.chance(0.12)) LF.add(makeMat([x + rnd.range(-1, 1), WATER_LEVEL + 0.15, z + rnd.range(-1, 1)], [0, rnd.range(0, TAU), 0], rnd.range(0.9, 1.4)));
  }

  const all = [...W.flat(), ...P, ...PI, ...B.flat(), ...BU, ...R, G, RP, RE, LP, LF, cam];
  for (const s of all) {
    s.build(scene);
    if (s.depth) for (const m of s.meshes) { m.mesh.customDepthMaterial = s.depth; if (m.lo) m.lo.customDepthMaterial = s.depth; }
  }
}
