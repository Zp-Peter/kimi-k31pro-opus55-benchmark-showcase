// Math, easing, noise and deterministic randomness shared by every shot.
// Everything is a pure function of time so any frame can be rendered in isolation.

export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, x) => clamp((x - a) / (b - a));
export const remap = (x, a, b, c, d) => lerp(c, d, invLerp(a, b, x));
export const smoothstep = (a, b, x) => { const t = invLerp(a, b, x); return t * t * (3 - 2 * t); };
export const smootherstep = (a, b, x) => { const t = invLerp(a, b, x); return t * t * t * (t * (t * 6 - 15) + 10); };
export const fract = (x) => x - Math.floor(x);
export const TAU = Math.PI * 2;
export const DEG = Math.PI / 180;

export const ease = {
  linear: (t) => t,
  inQuad: (t) => t * t,
  outQuad: (t) => 1 - (1 - t) * (1 - t),
  inOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  inCubic: (t) => t * t * t,
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  inQuart: (t) => t * t * t * t,
  outQuart: (t) => 1 - Math.pow(1 - t, 4),
  inOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
  outQuint: (t) => 1 - Math.pow(1 - t, 5),
  inOutQuint: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2),
  inExpo: (t) => (t <= 0 ? 0 : Math.pow(2, 10 * t - 10)),
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inOutExpo: (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2),
  outBack: (t, s = 1.70158) => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2),
  inBack: (t, s = 1.70158) => (s + 1) * t * t * t - s * t * t,
  outElastic: (t) => (t <= 0 ? 0 : t >= 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (TAU / 3)) + 1),
  // Camera-friendly "sigmoid" with adjustable steepness
  sigmoid: (t, k = 8) => { const f = (x) => 1 / (1 + Math.exp(-k * (x - 0.5))); return (f(t) - f(0)) / (f(1) - f(0)); },
};

// Evaluate an eased segment: value goes from a to b between t0 and t1.
export function tween(t, t0, t1, a, b, fn = ease.inOutCubic) {
  return lerp(a, b, fn(invLerp(t0, t1, t)));
}

// Piecewise keyframes: [[t, value, easeFn?], ...]; easeFn applies to the segment that ENDS at that key.
export function keys(t, k) {
  if (t <= k[0][0]) return k[0][1];
  for (let i = 1; i < k.length; i++) {
    if (t <= k[i][0]) {
      const [t0, v0] = k[i - 1];
      const [t1, v1, fn] = k[i];
      const u = (fn || ease.inOutCubic)(invLerp(t0, t1, t));
      if (Array.isArray(v0)) return v0.map((x, j) => lerp(x, v1[j], u));
      return lerp(v0, v1, u);
    }
  }
  return k[k.length - 1][1];
}

// Exponential decay pulse that starts at t0.
export const pulse = (t, t0, decay = 0.15) => (t < t0 ? 0 : Math.exp(-(t - t0) / decay));

// Deterministic PRNG
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const hash1 = (n) => fract(Math.sin(n * 127.1 + 311.7) * 43758.5453123);

// 1D value noise with smooth interpolation, good enough for camera shake.
export function noise1(x) {
  const i = Math.floor(x), f = x - i;
  const u = f * f * (3 - 2 * f);
  return lerp(hash1(i), hash1(i + 1), u) * 2 - 1;
}
export function fbm1(x, oct = 3) {
  let v = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { v += a * noise1(x * f + i * 17.3); a *= 0.5; f *= 2.03; }
  return v;
}

// Handheld camera shake: returns small rotation offsets (radians) and position offsets.
export function shake(t, amp = 1, freq = 1, seed = 0) {
  return {
    rx: fbm1(t * 1.3 * freq + seed) * 0.006 * amp,
    ry: fbm1(t * 1.1 * freq + seed + 40) * 0.008 * amp,
    rz: fbm1(t * 0.9 * freq + seed + 80) * 0.004 * amp,
    x: fbm1(t * 0.7 * freq + seed + 120) * 0.02 * amp,
    y: fbm1(t * 0.8 * freq + seed + 160) * 0.02 * amp,
  };
}

// Point camera at target with optional roll (radians).
export function aim(camera, pos, target, roll = 0) {
  camera.position.set(pos[0], pos[1], pos[2]);
  camera.up.set(Math.sin(roll), Math.cos(roll), 0);
  camera.lookAt(target[0], target[1], target[2]);
}

// Apply shake on top of an already-aimed camera.
export function applyShake(camera, s) {
  camera.rotateX(s.rx); camera.rotateY(s.ry); camera.rotateZ(s.rz);
  camera.translateX(s.x); camera.translateY(s.y);
}

// Format numbers with thousands separators.
export const fmtInt = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// GLSL snippets reused across shaders.
export const GLSL_NOISE = /* glsl */ `
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3){ p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3){ p3 = fract(p3 * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }
float vnoise3(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); vec3 u = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i), n100 = hash13(i + vec3(1,0,0)), n010 = hash13(i + vec3(0,1,0)), n110 = hash13(i + vec3(1,1,0));
  float n001 = hash13(i + vec3(0,0,1)), n101 = hash13(i + vec3(1,0,1)), n011 = hash13(i + vec3(0,1,1)), n111 = hash13(i + vec3(1,1,1));
  return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y), mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y), u.z);
}
float fbm3(vec3 p, int oct){ float v = 0.0, a = 0.5; for (int i = 0; i < 10; i++) { if (i >= oct) break; v += a * vnoise3(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return v; }
`;
