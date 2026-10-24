// sky.js — painted sky dome, sun & fill lights, layered karst mountains and drifting mist.
import * as THREE from 'three';
import { Rand, TAU, clamp, lerp, noise2, smoothstep, SHARED } from './util.js';
import { cloudTexture } from './textures.js';

export const PAL = {
  fog: 0xd9d4c3,
  horizon: 0xf1e3c7,
  zenith: 0x88a9bf,
  sun: 0xffd9a8,
};
export const SUN_DIR = new THREE.Vector3(-0.62, 0.43, 0.66).normalize();

const skyVert = /* glsl */`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const skyFrag = /* glsl */`
uniform vec3 uHorizon, uZenith, uSunCol, uSunDir, uFog;
uniform float uTime;
varying vec3 vDir;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.6));
  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunCol * (pow(sd, 5.0) * 0.22 + pow(sd, 48.0) * 0.45);
  // long ink-wash cloud streaks
  vec2 uv = d.xz / (h + 0.22);
  float c = fbm(uv * vec2(0.9, 2.8) + vec2(uTime * 0.006, 0.0));
  float c2 = fbm(uv * vec2(2.2, 5.0) - vec2(uTime * 0.004, 3.0));
  float cl = smoothstep(0.5, 0.78, c * 0.75 + c2 * 0.35) * smoothstep(0.03, 0.22, h) * (1.0 - smoothstep(0.5, 0.95, h));
  vec3 cloudCol = mix(vec3(0.97, 0.95, 0.91), uSunCol * 1.1, pow(sd, 4.0) * 0.7);
  col = mix(col, cloudCol, cl * 0.6);
  col = mix(col, vec3(1.0, 0.97, 0.9), smoothstep(0.99935, 0.99965, sd));
  // haze band hugging the horizon and fog colour below it
  col = mix(col, uFog, (1.0 - smoothstep(0.0, 0.16, h)) * 0.75);
  col = mix(col, uFog, 1.0 - smoothstep(-0.05, 0.0, h));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

// One karst tower (Guilin style): steep sides, domed top, vertical "texture strokes".
function karstGeometry(rnd, H, R, tones, sunDir) {
  const radial = 20, rings = 13, seed = rnd.range(0, 100);
  const lean = rnd.range(-0.18, 0.18), leanDir = rnd.range(0, TAU);
  const pos = [], idx = [];
  for (let k = 0; k <= rings; k++) {
    const t = k / rings;
    const base = Math.pow(1 - Math.pow(t, 2.4), 0.5) + 0.45 * Math.pow(1 - t, 3);
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * TAU;
      const n = noise2(Math.cos(a) * 1.4 + seed, Math.sin(a) * 1.4 + t * 2.2) * 0.22 + noise2(a * 3 + seed, t * 6) * 0.07;
      const r = R * base * (1 + n) + (k === rings ? 0 : 0);
      const off = lean * H * t * t;
      pos.push(Math.cos(a) * r + Math.cos(leanDir) * off, H * t * (1 + n * 0.15 * t), Math.sin(a) * r + Math.sin(leanDir) * off);
    }
  }
  for (let k = 0; k < rings; k++) for (let j = 0; j < radial; j++) {
    const a = k * (radial + 1) + j, up = a + radial + 1;
    idx.push(a, up, a + 1, a + 1, up, up + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const N = g.attributes.normal, P = g.attributes.position;
  const colors = new Float32Array(P.count * 3), c = new THREE.Color();
  for (let i = 0; i < P.count; i++) {
    const t = clamp(P.getY(i) / H, 0, 1);
    const a = Math.atan2(P.getZ(i), P.getX(i));
    const stroke = noise2(a * 9 + seed, t * 2.5) * 0.5 + 0.5;
    const lit = clamp(N.getX(i) * sunDir.x + N.getY(i) * sunDir.y + N.getZ(i) * sunDir.z, 0, 1);
    c.copy(tones[0]).lerp(tones[1], smoothstep(0.0, 0.55, t)).lerp(tones[2], smoothstep(0.55, 1.0, t) * 0.8);
    c.multiplyScalar(0.78 + lit * 0.32 - stroke * 0.12);
    c.lerp(tones[3], 1 - smoothstep(0.0, 0.35, t)); // mist at the foot
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return g;
}

export function buildSky(scene, heightAt) {
  scene.fog = new THREE.FogExp2(PAL.fog, 0.0009);
  scene.background = new THREE.Color(PAL.fog);

  const skyMat = new THREE.ShaderMaterial({
    vertexShader: skyVert, fragmentShader: skyFrag,
    uniforms: {
      uHorizon: { value: new THREE.Color(PAL.horizon) }, uZenith: { value: new THREE.Color(PAL.zenith) },
      uSunCol: { value: new THREE.Color(PAL.sun) }, uSunDir: { value: SUN_DIR.clone() },
      uFog: { value: new THREE.Color(PAL.fog) }, uTime: SHARED.uTime,
    },
    side: THREE.BackSide, depthWrite: false, fog: false, toneMapped: false,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(3000, 48, 24), skyMat);
  dome.renderOrder = -10;
  dome.frustumCulled = false;
  scene.add(dome);

  // Lights: warm low sun, cool sky fill, a touch of ambient for soft shadows.
  const hemi = new THREE.HemisphereLight(0xe2ebee, 0x6f774f, 1.15);
  scene.add(hemi);
  const amb = new THREE.AmbientLight(0xfff1dd, 0.18);
  scene.add(amb);
  const sun = new THREE.DirectionalLight(0xffe2b8, 3.3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = -75; sc.right = 75; sc.top = 75; sc.bottom = -75; sc.near = 10; sc.far = 800;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.04;
  scene.add(sun); scene.add(sun.target);

  // Three rings of mountains, each paler (further into the mist).
  const rnd = new Rand(77);
  const layers = [
    { n: 30, r0: 720, r1: 960, h0: 80, h1: 210, R0: 40, R1: 90, tones: [0x5a6e5f, 0x3e5248, 0x2f4039, 0xa8b2a2] },
    { n: 34, r0: 1060, r1: 1380, h0: 150, h1: 320, R0: 70, R1: 130, tones: [0x7d8f86, 0x5e7268, 0x4d6058, 0xb8beb1] },
    { n: 36, r0: 1500, r1: 1900, h0: 230, h1: 430, R0: 90, R1: 170, tones: [0x9aa6a0, 0x7f8d87, 0x6d7c76, 0xc6c8bc] },
  ];
  const mtnMat = new THREE.MeshBasicMaterial({ vertexColors: true, fog: true, toneMapped: false });
  const group = new THREE.Group();
  for (const L of layers) {
    const tones = L.tones.map((h) => new THREE.Color(h));
    const geos = [];
    for (let i = 0; i < L.n; i++) {
      const a = (i / L.n) * TAU + rnd.range(-0.06, 0.06);
      const r = rnd.range(L.r0, L.r1);
      const H = rnd.range(L.h0, L.h1), R = rnd.range(L.R0, L.R1);
      const g = karstGeometry(rnd, H, R, tones, SUN_DIR);
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      g.translate(x, heightAt(x, z) - 14, z);
      geos.push(g);
      // a few smaller companion peaks huddled at the feet of big ones
      if (rnd.chance(0.6)) {
        const g2 = karstGeometry(rnd, H * rnd.range(0.35, 0.6), R * rnd.range(0.5, 0.8), tones, SUN_DIR);
        const x2 = x + rnd.range(-1, 1) * R * 1.6, z2 = z + rnd.range(-1, 1) * R * 1.6;
        g2.translate(x2, heightAt(x2, z2) - 10, z2);
        geos.push(g2);
      }
    }
    const merged = mergeIndexed(geos);
    group.add(new THREE.Mesh(merged, mtnMat));
  }
  scene.add(group);

  // Drifting mist banks between the mountain ridges.
  const mistTex = cloudTexture();
  const mists = [];
  for (let i = 0; i < 46; i++) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({
      map: mistTex, color: 0xf6f1e6, transparent: true, opacity: rnd.range(0.35, 0.7), depthWrite: false, fog: true,
    }));
    const a = rnd.range(0, TAU), r = rnd.range(560, 1500);
    m.position.set(Math.cos(a) * r, rnd.range(25, 90) + r * 0.02, Math.sin(a) * r);
    const s = rnd.range(260, 520);
    m.scale.set(s, s * 0.32, 1);
    m.userData = { a, r, speed: rnd.range(0.004, 0.012) * (rnd.chance(0.5) ? 1 : -1) };
    scene.add(m); mists.push(m);
  }

  return {
    sun, hemi,
    update(camPos, target, dt) {
      dome.position.copy(camPos);
      sun.target.position.copy(target);
      sun.position.copy(target).addScaledVector(SUN_DIR, 400);
      for (const m of mists) {
        m.userData.a += m.userData.speed * dt * 0.05;
        m.position.x = Math.cos(m.userData.a) * m.userData.r;
        m.position.z = Math.sin(m.userData.a) * m.userData.r;
      }
    },
  };
}

// Merge indexed geometries that share the same attribute layout.
export function mergeIndexed(geos) {
  let vCount = 0, iCount = 0;
  const names = Object.keys(geos[0].attributes);
  for (const g of geos) { vCount += g.attributes.position.count; iCount += g.index.count; }
  const out = new THREE.BufferGeometry();
  const arrays = {};
  for (const n of names) arrays[n] = new Float32Array(vCount * geos[0].attributes[n].itemSize);
  const index = new Uint32Array(iCount);
  let vo = 0, io = 0;
  for (const g of geos) {
    for (const n of names) arrays[n].set(g.attributes[n].array, vo * g.attributes[n].itemSize);
    const idx = g.index.array;
    for (let i = 0; i < idx.length; i++) index[io + i] = idx[i] + vo;
    vo += g.attributes.position.count; io += idx.length;
    g.dispose();
  }
  for (const n of names) out.setAttribute(n, new THREE.BufferAttribute(arrays[n], geos[0].attributes[n].itemSize));
  out.setIndex(new THREE.BufferAttribute(index, 1));
  out.computeBoundingSphere();
  return out;
}
