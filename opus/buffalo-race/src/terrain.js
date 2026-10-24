// terrain.js — heightfield shaped around the circuit, lake & river, rice terraces and water.
import * as THREE from 'three';
import { clamp, lerp, smoothstep, fbm, noise2, Rand, Scatter, makeMat, addWind, SHARED, col } from './util.js';
import { grassDetail } from './textures.js';
import { WATER_LEVEL, LAKE, ISLAND, RIVER, polyDist, riverHalfWidth } from './track.js';
import { PAL, SUN_DIR } from './sky.js';

export const SIZE = 1500, RES = 300, HALF = SIZE / 2, CELL = SIZE / RES;
// Rapeseed (油菜花) fields: [cx, cz, rx, rz]
const RAPE = [[385, 120, 118, 96], [178, 92, 62, 64], [90, 312, 100, 50], [-440, 175, 98, 78], [-120, -425, 125, 62], [480, -300, 90, 70]];
const PADDY = { x0: 304, z0: -182, cw: 28, ch: 20, cols: 6, rows: 10 };

export class Terrain {
  constructor(track) {
    this.track = track;
    this.paddies = [];
    this.paddyGrid = new Array(PADDY.cols * PADDY.rows).fill(null);
    for (let r = 0; r < PADDY.rows; r++) for (let c = 0; c < PADDY.cols; c++) {
      const x0 = PADDY.x0 + c * PADDY.cw, z0 = PADDY.z0 + r * PADDY.ch;
      const cx = x0 + PADDY.cw / 2, cz = z0 + PADDY.ch / 2;
      if (track.distance(cx, cz) < 40) continue;
      const level = Math.round(this.paddyBase(cx, cz) / 0.7) * 0.7 + 0.25;
      const p = { x0, z0, x1: x0 + PADDY.cw, z1: z0 + PADDY.ch, cx, cz, level, c, r };
      this.paddies.push(p); this.paddyGrid[r * PADDY.cols + c] = p;
    }
    const n = RES + 1;
    this.H = new Float32Array(n * n);
    this.D = new Float32Array(n * n);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const k = j * n + i;
      this.H[k] = this.compute(-HALF + i * CELL, -HALF + j * CELL);
      this.D[k] = this._d;
    }
  }

  // Footprints claimed by buildings so vegetation and props keep clear of them.
  reserve(x, z, r) {
    if (!this.reserved) this.reserved = new Map();
    const c = 40, x0 = Math.floor((x - r) / c), x1 = Math.floor((x + r) / c), z0 = Math.floor((z - r) / c), z1 = Math.floor((z + r) / c);
    for (let i = x0; i <= x1; i++) for (let j = z0; j <= z1; j++) {
      const k = i * 4096 + j;
      let a = this.reserved.get(k); if (!a) this.reserved.set(k, (a = [])); a.push([x, z, r]);
    }
  }
  blocked(x, z, m = 0) {
    if (!this.reserved) return false;
    const a = this.reserved.get(Math.floor(x / 40) * 4096 + Math.floor(z / 40));
    if (!a) return false;
    for (const [cx, cz, r] of a) if (Math.hypot(x - cx, z - cz) < r + m) return true;
    return false;
  }

  paddyBase(x, z) { return 2.4 - z * 0.03 + (x - 300) * 0.016; }
  paddyAt(x, z) {
    const c = Math.floor((x - PADDY.x0) / PADDY.cw), r = Math.floor((z - PADDY.z0) / PADDY.ch);
    if (c < 0 || r < 0 || c >= PADDY.cols || r >= PADDY.rows) return null;
    return this.paddyGrid[r * PADDY.cols + c];
  }
  paddyMask(x, z, margin) {
    const dx = Math.max(PADDY.x0 - x, 0, x - (PADDY.x0 + PADDY.cw * PADDY.cols));
    const dz = Math.max(PADDY.z0 - z, 0, z - (PADDY.z0 + PADDY.ch * PADDY.rows));
    return smoothstep(margin, 0, Math.hypot(dx, dz));
  }

  // Undisturbed landscape; amp scales the rolling noise (kept low beside the road).
  natural(x, z, amp = 1) {
    const r = Math.hypot(x, z);
    let h = 6 - z * 0.026;
    h += amp * (fbm(x * 0.0055, z * 0.0055, 4) * 10 + fbm(x * 0.021 + 5, z * 0.021, 3) * 2.2);
    h += smoothstep(380, 900, r) * (34 + fbm(x * 0.0035 + 3, z * 0.0035 - 2, 3) * 46);
    const pm = this.paddyMask(x, z, 28);
    if (pm > 0) h = lerp(h, this.paddyBase(x, z), pm);
    return h;
  }

  compute(x, z) {
    const tr = this.track;
    const i = tr.nearestIndex(x, z);
    let d = 999, h;
    if (i >= 0) {
      const dx = x - tr.px[i], dz = z - tr.pz[i];
      const lat = Math.abs(dx * tr.rx[i] + dz * tr.rz[i]);
      const al = Math.abs(dx * tr.tx[i] + dz * tr.tz[i]);
      d = Math.hypot(lat, Math.max(0, al - tr.ds));
      h = this.natural(x, z, lerp(0.3, 1, smoothstep(12, 64, d)));
      h = lerp(tr.py[i] - 0.1, h, smoothstep(tr.halfW[i] + 1.2, tr.halfW[i] + 36, d));
    } else h = this.natural(x, z, 1);
    this._d = d;
    // lake with an island for the pagoda
    const lx = x - LAKE.x, lz = z - LAKE.z, ld = Math.hypot(lx, lz);
    if (ld < LAKE.r * 1.5) {
      const la = Math.atan2(lz, lx);
      const LR = LAKE.r * (1 + 0.11 * noise2(Math.cos(la) * 1.6 + 4.2, Math.sin(la) * 1.6 + 1.3));
      h = lerp(h, WATER_LEVEL - 3.8, smoothstep(LR + 16, LR - 14, ld));
      const id = Math.hypot(x - ISLAND.x, z - ISLAND.z);
      if (id < ISLAND.r + 8) h = Math.max(h, lerp(WATER_LEVEL - 3, 7.2, smoothstep(ISLAND.r + 6, ISLAND.r * 0.38, id)));
    }
    // river valley feeding the lake
    if (x < -40 && x > -800 && z > -150 && z < 90) {
      const rv = polyDist(x, z, RIVER);
      const rw = riverHalfWidth(rv.t);
      if (rv.d < rw + 12) {
        const bed = lerp(h + 0.5, WATER_LEVEL - 3, smoothstep(0.0, 0.07, rv.t));
        h = lerp(h, Math.min(h, bed), smoothstep(rw + 10, rw - 1.5, rv.d));
      }
    }
    const p = this.paddyAt(x, z);
    if (p) h = p.level - 0.35;
    return h;
  }

  heightAt(x, z) {
    const fx = (x + HALF) / CELL, fz = (z + HALF) / CELL;
    if (fx < 0 || fz < 0 || fx >= RES || fz >= RES) return this.natural(x, z, 1);
    const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, n = RES + 1;
    const k = j * n + i, H = this.H;
    return (H[k] * (1 - u) + H[k + 1] * u) * (1 - v) + (H[k + n] * (1 - u) + H[k + n + 1] * u) * v;
  }
  // 'water' | 'paddy' | 'ground'
  surfaceAt(x, z) {
    if (this.paddyAt(x, z)) return 'paddy';
    return this.heightAt(x, z) < WATER_LEVEL - 0.2 ? 'water' : 'ground';
  }

  rapeMask(x, z) {
    let m = 0;
    for (const [cx, cz, rx, rz] of RAPE) {
      const e = Math.hypot((x - cx) / rx, (z - cz) / rz) + noise2(x * 0.02, z * 0.02) * 0.18;
      if (e < 1.05) m = Math.max(m, smoothstep(1.0, 0.86, e));
    }
    if (m <= 0) return 0;
    const s = (x * 0.55 + z * 0.83) / 22 + noise2(x * 0.01, z * 0.01) * 0.8;
    const f = s - Math.floor(s);
    const strip = smoothstep(0.06, 0.13, f) * smoothstep(0.94, 0.87, f);
    return m * (0.12 + 0.88 * strip) * smoothstep(20, 30, this.track.distance(x, z));
  }

  // ------------------------------------------------------------------ meshes
  colorAt(x, z, h, d, ny, out) {
    const C = this.C;
    const n1 = fbm(x * 0.012, z * 0.012, 3), n2 = noise2(x * 0.05, z * 0.05);
    out.copy(C.grassA).lerp(C.grassB, smoothstep(-0.3, 0.4, n1)).lerp(C.grassC, smoothstep(0.2, 0.7, n2) * 0.45);
    const r = Math.hypot(x, z);
    out.lerp(C.forest, clamp(smoothstep(30, 80, h) * 0.55 + smoothstep(420, 800, r) * 0.35, 0, 0.8));
    const rm = this.rapeMask(x, z);
    if (rm > 0) out.lerp(noise2(x * 0.3, z * 0.3) > 0.55 ? C.rapeG : C.rape, rm);
    out.lerp(C.rock, smoothstep(0.86, 0.62, ny));
    out.lerp(C.dirt, smoothstep(14.5, 9.6, d) * 0.85);
    out.lerp(C.sand, smoothstep(WATER_LEVEL + 1.7, WATER_LEVEL + 0.2, h) * 0.85);
    out.lerp(C.mud, smoothstep(WATER_LEVEL, WATER_LEVEL - 1.6, h));
    if (this.paddyAt(x, z)) out.copy(C.paddy);
    return out;
  }

  build(scene) {
    this.C = {
      grassA: col(0x86a055), grassB: col(0x5f7f3c), grassC: col(0xa3ad62), forest: col(0x4a6440),
      dirt: col(0xa08a62), mud: col(0x6d6548), sand: col(0xb8aa86), rock: col(0x8d8573),
      rape: col(0xe8cb2c), rapeG: col(0x93a845), paddy: col(0x5f6a3d),
    };
    const detail = grassDetail();
    detail.repeat.set(SIZE / 9, SIZE / 9);
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, map: detail, roughness: 0.95, metalness: 0 });
    this.material = mat;

    const g = new THREE.PlaneGeometry(SIZE, SIZE, RES, RES);
    g.rotateX(-Math.PI / 2);
    const P = g.attributes.position;
    for (let k = 0; k < P.count; k++) P.setY(k, this.H[k]);
    g.computeVertexNormals();
    const N = g.attributes.normal;
    const colors = new Float32Array(P.count * 3), c = new THREE.Color();
    for (let k = 0; k < P.count; k++) {
      this.colorAt(P.getX(k), P.getZ(k), this.H[k], this.D[k], N.getY(k), c);
      colors[k * 3] = c.r; colors[k * 3 + 1] = c.g; colors[k * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const mesh = new THREE.Mesh(g, mat);
    mesh.receiveShadow = true;
    scene.add(mesh);

    // Far ground running out to the mountains (hidden under the main terrain near the middle).
    const S = 7000, R = 140;
    const og = new THREE.PlaneGeometry(S, S, R, R);
    og.rotateX(-Math.PI / 2);
    const OP = og.attributes.position;
    const oc = new Float32Array(OP.count * 3);
    for (let k = 0; k < OP.count; k++) {
      const x = OP.getX(k), z = OP.getZ(k);
      const inside = Math.abs(x) < HALF - 60 && Math.abs(z) < HALF - 60;
      const h = inside ? -60 : this.natural(x, z, 1) - 0.4;
      OP.setY(k, h);
      this.colorAt(x, z, h, 999, 1, c);
      oc[k * 3] = c.r; oc[k * 3 + 1] = c.g; oc[k * 3 + 2] = c.b;
    }
    og.setAttribute('color', new THREE.BufferAttribute(oc, 3));
    og.computeVertexNormals();
    scene.add(new THREE.Mesh(og, mat));

    this.buildWater(scene);
    this.buildPaddies(scene);
    return mesh;
  }

  buildWater(scene) {
    const n = RES + 1, data = new Uint8Array(n * n * 4);
    for (let k = 0; k < n * n; k++) {
      data[k * 4] = Math.round(clamp((WATER_LEVEL - this.H[k]) / 4, 0, 1) * 255);
      data[k * 4 + 3] = 255;
    }
    const tex = new THREE.DataTexture(data, n, n, THREE.RGBAFormat);
    tex.magFilter = tex.minFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    const g = new THREE.PlaneGeometry(SIZE, SIZE, 1, 1);
    g.rotateX(-Math.PI / 2);
    const water = new THREE.Mesh(g, makeWaterMaterial({ depthTex: tex }));
    water.position.y = WATER_LEVEL;
    water.renderOrder = 1;
    scene.add(water);
  }

  buildPaddies(scene) {
    const rnd = new Rand(404);
    const pos = [];
    for (const p of this.paddies) {
      const x0 = p.x0 + 0.5, x1 = p.x1 - 0.5, z0 = p.z0 + 0.5, z1 = p.z1 - 0.5, y = p.level;
      pos.push(x0, y, z0, x0, y, z1, x1, y, z0, x1, y, z0, x0, y, z1, x1, y, z1);
    }
    const wg = new THREE.BufferGeometry();
    wg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const water = new THREE.Mesh(wg, makeWaterMaterial({ paddy: true }));
    water.renderOrder = 1;
    scene.add(water);

    // earth dikes between the paddies
    const dikeGeo = new THREE.BoxGeometry(1, 1, 1);
    dikeGeo.translate(0, 0.5, 0);
    const dikes = new Scatter(dikeGeo, new THREE.MeshStandardMaterial({ color: 0x7c7a4c, roughness: 1 }), { receiveShadow: true, castShadow: false });
    const lvl = (c, r) => { const q = (c >= 0 && r >= 0 && c < PADDY.cols && r < PADDY.rows) ? this.paddyGrid[r * PADDY.cols + c] : null; return q ? q.level : null; };
    for (const p of this.paddies) {
      // west edge and north edge of every cell, plus east/south where no neighbour exists
      const edges = [
        [p.x0, p.cz, PADDY.ch, 0, lvl(p.c - 1, p.r)], [p.cx, p.z0, PADDY.cw, Math.PI / 2, lvl(p.c, p.r - 1)],
      ];
      if (lvl(p.c + 1, p.r) === null) edges.push([p.x1, p.cz, PADDY.ch, 0, null]);
      if (lvl(p.c, p.r + 1) === null) edges.push([p.cx, p.z1, PADDY.cw, Math.PI / 2, null]);
      for (const [x, z, len, rot, other] of edges) {
        const top = Math.max(p.level, other ?? p.level) + 0.35;
        const bottom = Math.min(p.level, other ?? this.heightAt(x, z)) - 1.2;
        dikes.add(makeMat([x, bottom, z], [0, rot, 0], [1.4, top - bottom, len + 1.4]));
      }
    }
    dikes.build(scene);

    // rice seedlings in neat rows
    const blade = new THREE.BufferGeometry();
    const bp = [];
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI, ca = Math.cos(a) * 0.09, sa = Math.sin(a) * 0.09, lean = 0.12;
      bp.push(-ca, 0, -sa, ca, 0, sa, Math.cos(a + 1.57) * lean, 0.85, Math.sin(a + 1.57) * lean);
    }
    blade.setAttribute('position', new THREE.Float32BufferAttribute(bp, 3));
    blade.computeVertexNormals();
    const riceMat = addWind(new THREE.MeshStandardMaterial({ color: 0x79a33f, side: THREE.DoubleSide, roughness: 0.8 }), 0.18, 2.2, 0.9);
    const rice = new Scatter(blade, riceMat, { maxDist: 300, chunk: 120 });
    for (const p of this.paddies) {
      for (let x = p.x0 + 1.6; x < p.x1 - 1.2; x += 1.15) for (let z = p.z0 + 1.6; z < p.z1 - 1.2; z += 0.95) {
        rice.add(makeMat([x + rnd.range(-0.12, 0.12), p.level - 0.3, z + rnd.range(-0.12, 0.12)], [0, rnd.range(0, 6.3), 0], rnd.range(0.8, 1.25)));
      }
    }
    rice.build(scene);
  }
}

// ------------------------------------------------------------------ water shader
const waterVert = /* glsl */`
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;
const waterFrag = /* glsl */`
uniform vec3 uDeep, uShallow, uSky, uHorizon, uSunDir, uSunCol;
uniform float uTime, uAlpha;
uniform sampler2D uDepth;
varying vec3 vWorld;
#include <fog_pars_fragment>
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
}
float waves(vec2 p, float t) {
  return vnoise(p * 0.2 + vec2(t * 0.16, t * 0.1)) + 0.5 * vnoise(p * 0.55 - vec2(t * 0.24, -t * 0.18)) + 0.25 * vnoise(p * 1.3 + vec2(-t * 0.3, t * 0.35));
}
void main() {
  vec2 p = vWorld.xz;
  float t = uTime, e = 0.12;
  float n0 = waves(p, t);
  vec3 n = normalize(vec3((n0 - waves(p + vec2(e, 0.0), t)) * 1.4, 1.0, (n0 - waves(p + vec2(0.0, e), t)) * 1.4));
  vec3 V = normalize(cameraPosition - vWorld);
  float fres = 0.08 + 0.92 * pow(1.0 - max(dot(n, V), 0.0), 4.0);
  vec3 R = reflect(-V, n);
  vec3 sky = mix(uHorizon, uSky, clamp(R.y * 1.8, 0.0, 1.0));
  float depth = 3.0;
  #ifdef USE_DEPTH
    vec2 duv = ((p + ${HALF.toFixed(1)}) / ${CELL.toFixed(3)} + 0.5) / ${(RES + 1).toFixed(1)};
    depth = texture2D(uDepth, duv).r * 4.0;
  #endif
  vec3 body = mix(uShallow, uDeep, smoothstep(0.0, 2.6, depth));
  vec3 col = mix(body, sky, fres * 0.85);
  float sd = max(dot(R, uSunDir), 0.0);
  col += uSunCol * (pow(sd, 220.0) * 3.0 + pow(sd, 20.0) * 0.12);
  float band = sin(p.y * 0.9 + vnoise(p * 0.05 + t * 0.03) * 6.0 + t * 0.5);
  col = mix(col, uHorizon, smoothstep(0.95, 1.0, band) * 0.14);
  float alpha = uAlpha;
  #ifdef USE_DEPTH
    float foam = smoothstep(0.35, 0.0, depth) * (0.55 + 0.45 * sin(t * 1.5 + p.x * 0.4 + p.y * 0.3));
    col = mix(col, vec3(0.95, 0.94, 0.9), foam * 0.5);
    alpha = mix(0.3, uAlpha, smoothstep(0.0, 1.2, depth));
  #endif
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

export function makeWaterMaterial({ depthTex = null, paddy = false } = {}) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
    uDeep: { value: new THREE.Color(paddy ? 0x666846 : 0x3d675f) },
    uShallow: { value: new THREE.Color(paddy ? 0x8d8c66 : 0x86a48a) },
    uSky: { value: new THREE.Color(PAL.zenith) },
    uHorizon: { value: new THREE.Color(PAL.horizon) },
    uSunDir: { value: SUN_DIR.clone() },
    uSunCol: { value: new THREE.Color(PAL.sun) },
    uAlpha: { value: paddy ? 0.86 : 0.93 },
  }]);
  uniforms.uTime = SHARED.uTime;
  uniforms.uDepth = { value: depthTex };
  return new THREE.ShaderMaterial({
    uniforms, vertexShader: waterVert, fragmentShader: waterFrag,
    transparent: true, fog: true, depthWrite: false,
    defines: depthTex ? { USE_DEPTH: '' } : {},
  });
}
