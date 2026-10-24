// Post-processing: transitions, motion-blur accumulation, bloom, anamorphic streaks,
// god rays and the final "lens + film" composite (CA, distortion, grade, grain, letterbox).
import * as THREE from 'three';
import { GLSL_NOISE } from './util.js';

const VERT = /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

function mat(frag, uniforms, extra = {}) {
  return new THREE.ShaderMaterial(Object.assign({
    vertexShader: VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false,
  }, extra));
}

export class FSQ {
  constructor() {
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.mesh.frustumCulled = false;
    this.scene = new THREE.Scene(); this.scene.add(this.mesh);
  }
  render(renderer, material, target, clear = true) {
    this.mesh.material = material;
    renderer.setRenderTarget(target);
    if (clear) renderer.clear(true, false, false);
    renderer.render(this.scene, this.cam);
  }
}

function rt(w, h, extra = {}) {
  return new THREE.WebGLRenderTarget(w, h, Object.assign({
    type: THREE.HalfFloatType, format: THREE.RGBAFormat, depthBuffer: false,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false,
    wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping,
  }, extra));
}

// ---------------------------------------------------------------------------------------------
// Transition compositor: A (outgoing) + B (incoming) -> additive write into the accumulator.
// ---------------------------------------------------------------------------------------------
export const TRANSITIONS = { copy: -1, cut: 0, dissolve: 1, flash: 2, zoom: 3, whip: 4, defocus: 5, spin: 6, iris: 7, glitch: 8, sweep: 9, dipblack: 10, shock: 11 };

const transFrag = /* glsl */ `
uniform sampler2D tA; uniform sampler2D tB; uniform float p; uniform int ttype; uniform float weight;
uniform vec2 dir; uniform vec2 center; uniform float aspect; uniform float seed; uniform float radius;
varying vec2 vUv;
${GLSL_NOISE}
vec3 sA(vec2 uv){ return texture2D(tA, clamp(uv, 0.0005, 0.9995)).rgb; }
vec3 sB(vec2 uv){ return texture2D(tB, clamp(uv, 0.0005, 0.9995)).rgb; }
float ss(float a, float b, float x){ return smoothstep(a, b, x); }
float ease_out(float x){ return 1.0 - pow(1.0 - x, 3.0); }

vec3 dirBlurA(vec2 uv, vec2 d){ vec3 c = vec3(0.0); for (int i = 0; i < 32; i++){ float f = (float(i) / 31.0 - 0.5); c += sA(uv + d * f); } return c / 32.0; }
vec3 dirBlurB(vec2 uv, vec2 d){ vec3 c = vec3(0.0); for (int i = 0; i < 32; i++){ float f = (float(i) / 31.0 - 0.5); c += sB(uv + d * f); } return c / 32.0; }
vec3 zoomBlurA(vec2 uv, vec2 c0, float s){ vec3 c = vec3(0.0); for (int i = 0; i < 32; i++){ float f = float(i) / 31.0; c += sA(c0 + (uv - c0) * (1.0 - s * f)); } return c / 32.0; }
vec3 zoomBlurB(vec2 uv, vec2 c0, float s){ vec3 c = vec3(0.0); for (int i = 0; i < 32; i++){ float f = float(i) / 31.0; c += sB(c0 + (uv - c0) * (1.0 - s * f)); } return c / 32.0; }
vec3 discBlurA(vec2 uv, float r){ vec3 c = vec3(0.0); float wsum = 0.0; for (int i = 0; i < 48; i++){ float fi = float(i); float a = fi * 2.39996; float rr = sqrt((fi + 0.5) / 48.0) * r; vec3 s = sA(uv + vec2(cos(a) / aspect, sin(a)) * rr); float w = 1.0 + 2.0 * max(0.0, dot(s, vec3(0.33)) - 1.0); c += s * w; wsum += w; } return c / wsum; }
vec3 discBlurB(vec2 uv, float r){ vec3 c = vec3(0.0); float wsum = 0.0; for (int i = 0; i < 48; i++){ float fi = float(i); float a = fi * 2.39996; float rr = sqrt((fi + 0.5) / 48.0) * r; vec3 s = sB(uv + vec2(cos(a) / aspect, sin(a)) * rr); float w = 1.0 + 2.0 * max(0.0, dot(s, vec3(0.33)) - 1.0); c += s * w; wsum += w; } return c / wsum; }
vec2 rot(vec2 v, float a){ float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }
vec3 spinA(vec2 uv, vec2 c0, float ang, float spread){ vec3 c = vec3(0.0); for (int i = 0; i < 32; i++){ float f = float(i) / 31.0 - 0.5; vec2 d = uv - c0; d.x *= aspect; d = rot(d, ang + spread * f); d.x /= aspect; c += sA(c0 + d); } return c / 32.0; }
vec3 spinB(vec2 uv, vec2 c0, float ang, float spread){ vec3 c = vec3(0.0); for (int i = 0; i < 32; i++){ float f = float(i) / 31.0 - 0.5; vec2 d = uv - c0; d.x *= aspect; d = rot(d, ang + spread * f); d.x /= aspect; c += sB(c0 + d); } return c / 32.0; }

void main(){
  vec2 uv = vUv; vec3 col;
  if (ttype == -1) { col = sA(uv); }
  else if (ttype == 0) { col = p < 0.5 ? sA(uv) : sB(uv); }
  else if (ttype == 1) { float m = ss(0.0, 1.0, p); col = mix(sA(uv), sB(uv), m); }
  else if (ttype == 2) { // flash: blow out to HDR white, come back on B
    float m = ss(0.45, 0.55, p);
    float f = exp(-pow((p - 0.5) / 0.13, 2.0));
    col = mix(sA(uv), sB(uv), m) * (1.0 + f * 6.0) + vec3(0.85, 0.92, 1.0) * f * 7.0;
  }
  else if (ttype == 3) { // zoom-through: A punches in, B arrives from a slight zoom-out
    float m = ss(0.4, 0.6, p);
    float sa = 1.0 + 1.2 * pow(p, 2.0); float ba = 0.55 * ss(0.0, 0.5, p);
    vec2 ua = center + (uv - center) / sa;
    float sb = mix(0.6, 1.0, ease_out(p)); float bb = 0.55 * (1.0 - ss(0.5, 1.0, p));
    vec2 ub = center + (uv - center) / sb;
    vec3 a = zoomBlurA(ua, center, ba); vec3 b = zoomBlurB(ub, center, bb);
    vec2 d = (uv - center) * vec2(aspect, 1.0);
    col = mix(a, b, m) + vec3(0.6, 0.8, 1.0) * exp(-pow((p - 0.5) / 0.1, 2.0)) * (0.04 + 1.6 * exp(-dot(d, d) / 0.04)); // flash pools at the vanishing point so the frame edges keep their blacks
  }
  else if (ttype == 4) { // whip: heavy directional blur + slide
    float m = ss(0.45, 0.55, p);
    float amt = exp(-pow((p - 0.5) / 0.22, 2.0));
    vec2 d = dir * vec2(1.0, aspect) * 0.35 * amt;
    vec2 off = dir * 0.15;
    vec3 a = dirBlurA(uv + off * ss(0.0, 1.0, p), d);
    vec3 b = dirBlurB(uv - off * (1.0 - ss(0.0, 1.0, p)), d);
    col = mix(a, b, m);
  }
  else if (ttype == 5) { // defocus: A melts into bokeh, B resolves out of it
    float m = ss(0.35, 0.65, p);
    float ra = 0.045 * ss(0.0, 0.55, p); float rb = 0.045 * (1.0 - ss(0.45, 1.0, p));
    vec3 a = ra > 0.0005 ? discBlurA(uv, ra) : sA(uv);
    vec3 b = rb > 0.0005 ? discBlurB(uv, rb) : sB(uv);
    col = mix(a, b, m);
  }
  else if (ttype == 6) { // spin: rotational blur around centre
    float m = ss(0.45, 0.55, p);
    float amt = exp(-pow((p - 0.5) / 0.25, 2.0));
    float spread = 0.9 * amt;
    vec3 a = spinA(uv, center, -0.6 * ss(0.0, 1.0, p) * 1.0, spread);
    vec3 b = spinB(uv, center, 0.6 * (1.0 - ss(0.0, 1.0, p)), spread);
    col = mix(a, b, m);
  }
  else if (ttype == 7) { // iris: circular reveal from centre with a glowing rim
    vec2 d = uv - center; d.x *= aspect;
    float r = length(d);
    float R = pow(ss(0.0, 1.0, p), 1.6) * 1.35 * radius;
    float edge = 0.012;
    float m = 1.0 - ss(R - edge, R + edge, r);
    float rim = exp(-pow((r - R) / 0.012, 2.0)) * (1.0 - ss(0.8, 1.0, p));
    vec2 ub = center + (uv - center) * mix(1.25, 1.0, ss(0.0, 1.0, p));
    col = mix(sA(uv), sB(ub), m) + vec3(0.35, 0.65, 1.0) * rim * 6.0;
  }
  else if (ttype == 8) { // glitch: block-wise A/B swaps, RGB tear
    float tt = floor(p * 18.0 + seed);
    vec2 blk = floor(uv * vec2(12.0, 22.0) * (1.0 + floor(hash12(vec2(tt, 3.1)) * 3.0)));
    float r = hash12(blk + tt * 7.31);
    float useB = step(r, ss(0.15, 0.85, p));
    float tear = (hash12(vec2(floor(uv.y * 60.0), tt)) - 0.5) * 0.08 * sin(p * 3.14159);
    vec2 u2 = uv + vec2(tear, 0.0);
    float sh = 0.012 * sin(p * 3.14159);
    vec3 a = vec3(sA(u2 + vec2(sh, 0)).r, sA(u2).g, sA(u2 - vec2(sh, 0)).b);
    vec3 b = vec3(sB(u2 + vec2(sh, 0)).r, sB(u2).g, sB(u2 - vec2(sh, 0)).b);
    col = mix(a, b, useB);
    float scan = step(0.92, hash12(vec2(floor(uv.y * 240.0), tt + 1.0))) * sin(p * 3.14159);
    col += vec3(0.4, 0.7, 1.0) * scan * 0.8;
  }
  else if (ttype == 9) { // light sweep: a bright diagonal blade wipes B over A
    vec2 dd = normalize(dir);
    float x = dot((uv - 0.5) * vec2(aspect, 1.0), dd) / (aspect * 0.5 + 0.5);
    float pos = mix(-1.25, 1.25, ss(0.0, 1.0, p));
    float m = ss(pos + 0.02, pos - 0.02, x);
    float blade = exp(-pow((x - pos) / 0.035, 2.0));
    float halo = exp(-pow((x - pos) / 0.18, 2.0));
    vec2 disp = dd / vec2(aspect, 1.0) * 0.03 * halo;
    col = mix(sA(uv + disp), sB(uv - disp), m) + vec3(0.5, 0.75, 1.0) * (blade * 8.0 + halo * 0.6);
  }
  else if (ttype == 10) { // dip to black
    float a = 1.0 - ss(0.0, 0.5, p); float b = ss(0.5, 1.0, p);
    col = p < 0.5 ? sA(uv) * a : sB(uv) * b;
  }
  else if (ttype == 11) { // shock: A implodes into a white hit at the midpoint, B bursts out behind an expanding refractive ring
    vec2 d = uv - center; d.x *= aspect; float r = length(d);
    float q = ss(0.5, 1.0, p), pre = ss(0.0, 0.5, p);
    float ring = exp(-pow((r - q * 1.6) / 0.06, 2.0)) * step(0.5, p);
    vec2 n = r > 0.0 ? d / r : vec2(0.0); n.x /= aspect;
    vec2 ub = uv - n * ring * 0.05;
    vec2 ua = center + (uv - center) * (1.0 + 0.35 * pre * pre);
    float fl = p < 0.5 ? exp(-pow((p - 0.5) / 0.012, 2.0)) : exp(-(p - 0.5) / 0.04); // hard attack on the beat, quick release
    col = mix(sA(ua), sB(ub), step(0.5, p)) + vec3(0.6, 0.8, 1.0) * ring * 2.5 * (1.0 - q) + vec3(1.0) * fl * 4.0;
  }
  gl_FragColor = vec4(col * weight, weight);
}`;

// ---------------------------------------------------------------------------------------------
const downFrag = /* glsl */ `
uniform sampler2D src; uniform vec2 texel; uniform float prefilter; uniform float threshold; uniform float knee;
varying vec2 vUv;
vec3 S(vec2 o){ return texture2D(src, vUv + o * texel).rgb; }
vec3 pf(vec3 c){ float br = max(c.r, max(c.g, c.b)); float rq = clamp(br - threshold + knee, 0.0, 2.0 * knee); rq = rq * rq / (4.0 * knee + 1e-4); float k = max(rq, br - threshold) / max(br, 1e-4); return c * k; }
float kw(vec3 c){ return 1.0 / (1.0 + max(c.r, max(c.g, c.b))); }
void main(){
  vec3 a = S(vec2(-2, 2)), b = S(vec2(0, 2)), c = S(vec2(2, 2));
  vec3 d = S(vec2(-2, 0)), e = S(vec2(0, 0)), f = S(vec2(2, 0));
  vec3 g = S(vec2(-2, -2)), h = S(vec2(0, -2)), i = S(vec2(2, -2));
  vec3 j = S(vec2(-1, 1)), k = S(vec2(1, 1)), l = S(vec2(-1, -1)), m = S(vec2(1, -1));
  vec3 res;
  if (prefilter > 0.5) {
    vec3 g0 = (a + b + d + e) * 0.25, g1 = (b + c + e + f) * 0.25, g2 = (d + e + g + h) * 0.25, g3 = (e + f + h + i) * 0.25, g4 = (j + k + l + m) * 0.25;
    g0 = pf(g0); g1 = pf(g1); g2 = pf(g2); g3 = pf(g3); g4 = pf(g4);
    float w0 = kw(g0) * 0.125, w1 = kw(g1) * 0.125, w2 = kw(g2) * 0.125, w3 = kw(g3) * 0.125, w4 = kw(g4) * 0.5;
    res = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / (w0 + w1 + w2 + w3 + w4);
  } else {
    res = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  }
  gl_FragColor = vec4(max(res, 0.0), 1.0);
}`;

const upFrag = /* glsl */ `
uniform sampler2D src; uniform vec2 texel; uniform float radius; uniform float strength;
varying vec2 vUv;
vec3 S(vec2 o){ return texture2D(src, vUv + o * texel * radius).rgb; }
void main(){
  vec3 c = S(vec2(-1, -1)) + 2.0 * S(vec2(0, -1)) + S(vec2(1, -1)) + 2.0 * S(vec2(-1, 0)) + 4.0 * S(vec2(0, 0)) + 2.0 * S(vec2(1, 0)) + S(vec2(-1, 1)) + 2.0 * S(vec2(0, 1)) + S(vec2(1, 1));
  gl_FragColor = vec4(c / 16.0 * strength, 1.0);
}`;

const hDownFrag = /* glsl */ `
uniform sampler2D src; uniform vec2 texel; varying vec2 vUv;
void main(){
  vec3 c = texture2D(src, vUv + vec2(-1.5, 0) * texel).rgb * 0.18 + texture2D(src, vUv + vec2(-0.5, 0) * texel).rgb * 0.32
         + texture2D(src, vUv + vec2(0.5, 0) * texel).rgb * 0.32 + texture2D(src, vUv + vec2(1.5, 0) * texel).rgb * 0.18;
  gl_FragColor = vec4(c, 1.0);
}`;
const hUpFrag = /* glsl */ `
uniform sampler2D src; uniform sampler2D base; uniform vec2 texel; uniform float stretch; varying vec2 vUv;
void main(){
  vec3 u = texture2D(src, vUv + vec2(-1, 0) * texel).rgb * 0.25 + texture2D(src, vUv).rgb * 0.5 + texture2D(src, vUv + vec2(1, 0) * texel).rgb * 0.25;
  vec3 b = texture2D(base, vUv).rgb;
  gl_FragColor = vec4(mix(b, u, stretch) + b * 0.1, 1.0);
}`;

const raysFrag = /* glsl */ `
uniform sampler2D src; uniform vec2 lightPos; uniform float density; uniform float decay; varying vec2 vUv;
void main(){
  vec2 uv = vUv; vec2 d = (uv - lightPos) * density / 64.0; vec3 c = vec3(0.0); float ill = 1.0;
  for (int i = 0; i < 64; i++){ uv -= d; c += texture2D(src, clamp(uv, 0.0, 1.0)).rgb * ill; ill *= decay; }
  gl_FragColor = vec4(c / 64.0, 1.0);
}`;

const finalFrag = /* glsl */ `
uniform sampler2D tScene; uniform sampler2D tBloom; uniform sampler2D tStreak; uniform sampler2D tRays;
uniform float exposure, bloom, streak, ca, distortion, vignette, grain, letterbox, saturation, contrast, flash, fade, glitch, time, rays, punch, zoomBlur, temperature, aspect;
uniform vec3 streakTint, flashColor, lift, gammaV, gain, tintShadows, tintHighlights;
uniform vec4 shock; uniform vec2 shockCenter;
varying vec2 vUv;
${GLSL_NOISE}
vec3 aces(vec3 x){
  const mat3 m1 = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
  const mat3 m2 = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
  vec3 v = m1 * x; vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
  return clamp(m2 * (a / b), 0.0, 1.0);
}
vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
vec3 sceneCA(vec2 uv, float k){
  vec2 c = uv - 0.5;
  vec3 col;
  col.r = texture2D(tScene, 0.5 + c * (1.0 + k)).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, 0.5 + c * (1.0 - k)).b;
  return col;
}
void main(){
  vec2 uv = vUv;
  // punch-in zoom (beat accents)
  uv = 0.5 + (uv - 0.5) / (1.0 + punch);
  // shockwave refraction
  if (shock.w > 0.0) {
    vec2 d = uv - shockCenter; d.x *= aspect; float r = length(d);
    float ring = exp(-pow((r - shock.x) / shock.y, 2.0));
    vec2 n = r > 0.0 ? d / r : vec2(0.0); n.x /= aspect;
    uv -= n * ring * shock.w;
  }
  // glitch displacement
  float gt = floor(time * 24.0);
  if (glitch > 0.0) {
    float bs = 1.0 + floor(hash12(vec2(gt, 1.3)) * 3.0);
    vec2 blk = floor(uv * vec2(8.0, 18.0) * bs);
    float r = hash12(blk + gt * 3.7);
    if (r < glitch * 0.4) uv.x += (hash12(blk * 1.7 + gt) - 0.5) * 0.18 * glitch;
    float line = floor(uv.y * 140.0);
    uv.x += (hash12(vec2(line, gt)) - 0.5) * 0.03 * glitch * step(0.85, hash12(vec2(gt, line * 0.37)));
  }
  // barrel distortion
  vec2 c = uv - 0.5; float r2 = dot(c * vec2(aspect, 1.0), c * vec2(aspect, 1.0)) / (aspect * aspect);
  vec2 ud = 0.5 + c * (1.0 - distortion * 0.5 + distortion * r2);
  float caK = ca * (0.5 + 2.0 * r2) + glitch * 0.012;
  vec3 col = sceneCA(ud, caK);
  if (zoomBlur > 0.0) {
    vec3 acc = col;
    for (int i = 1; i < 16; i++) { float f = float(i) / 15.0; acc += texture2D(tScene, 0.5 + (ud - 0.5) * (1.0 - zoomBlur * f)).rgb; }
    col = acc / 16.0;
  }
  vec3 bl = texture2D(tBloom, ud).rgb;
  vec3 st = texture2D(tStreak, ud).rgb;
  col += bl * bloom + st * streak * streakTint;
  if (rays > 0.0) col += texture2D(tRays, ud).rgb * rays;
  col *= exposure;
  // white balance (warm > 0, cool < 0)
  col *= vec3(1.0 + temperature * 0.10, 1.0, 1.0 - temperature * 0.12);
  col += flashColor * flash;
  // split-tone in linear before tonemap
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col *= mix(tintShadows, tintHighlights, smoothstep(0.0, 1.0, lum));
  col = aces(col);
  // grade in display space
  col = toSRGB(col);
  col = pow(max(col * gain + lift * (1.0 - col), 0.0), 1.0 / gammaV);
  col = (col - 0.5) * contrast + 0.5;
  float l2 = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(l2), col, saturation);
  // vignette
  vec2 vc = (vUv - 0.5) * vec2(aspect, 1.0) / aspect * 1.6;
  col *= mix(1.0, smoothstep(1.25, 0.25, length(vc)), vignette);
  // fade
  col *= 1.0 - fade;
  // film grain (luma-weighted) + dither
  float gn = hash12(gl_FragCoord.xy + vec2(fract(time * 7.13) * 1913.0, fract(time * 3.71) * 677.0)) - 0.5;
  col += gn * grain * (0.35 + 0.65 * (1.0 - l2));
  col += (hash12(gl_FragCoord.xy * 1.37 + 11.0) - 0.5) / 255.0;
  // letterbox
  float lb = letterbox * 0.5;
  if (vUv.y < lb || vUv.y > 1.0 - lb) col = vec3(0.0);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

export const DEFAULT_POST = {
  exposure: 1.0, bloom: 0.55, bloomThreshold: 1.0, bloomKnee: 0.6, bloomRadius: 1.0,
  streak: 0.3, streakTint: [0.35, 0.62, 1.0], streakStretch: 0.92,
  ca: 0.0025, distortion: 0.04, vignette: 0.35, grain: 0.045, letterbox: 0.0,
  saturation: 1.0, contrast: 1.04, flash: 0.0, flashColor: [0.8, 0.9, 1.0], fade: 0.0, glitch: 0.0,
  rays: 0.0, raysPos: [0.5, 0.5], raysDensity: 0.9, raysDecay: 0.965,
  punch: 0.0, zoomBlur: 0.0, temperature: 0.0,
  lift: [0.0, 0.004, 0.012], gamma: [1, 1, 1], gain: [1, 1, 1],
  tintShadows: [0.96, 1.0, 1.08], tintHighlights: [1.03, 1.0, 0.97],
  shock: [0, 0.05, 0, 0], shockCenter: [0.5, 0.5],
};

export class Post {
  constructor(renderer, w, h) {
    this.r = renderer; this.w = w; this.h = h; this.fsq = new FSQ();
    this.mips = [];
    let mw = w >> 1, mh = h >> 1;
    for (let i = 0; i < 7; i++) { this.mips.push(rt(mw, mh)); mw = Math.max(2, mw >> 1); mh = Math.max(2, mh >> 1); }
    // anamorphic streak chain (horizontal only) from quarter-res source
    const sh = h >> 2;
    this.sd = []; this.su = [];
    let sw = w >> 3;
    for (let i = 0; i < 6; i++) { this.sd.push(rt(sw, sh)); this.su.push(rt(sw, sh)); sw = Math.max(2, sw >> 1); }
    this.rays = rt(w >> 2, h >> 2);
    this.black = rt(4, 4);
    this.mDown = mat(downFrag, { src: { value: null }, texel: { value: new THREE.Vector2() }, prefilter: { value: 0 }, threshold: { value: 1 }, knee: { value: 0.5 } });
    this.mUp = mat(upFrag, { src: { value: null }, texel: { value: new THREE.Vector2() }, radius: { value: 1 }, strength: { value: 1 } },
      { blending: THREE.AdditiveBlending, transparent: true });
    this.mHDown = mat(hDownFrag, { src: { value: null }, texel: { value: new THREE.Vector2() } });
    this.mHUp = mat(hUpFrag, { src: { value: null }, base: { value: null }, texel: { value: new THREE.Vector2() }, stretch: { value: 0.9 } });
    this.mRays = mat(raysFrag, { src: { value: null }, lightPos: { value: new THREE.Vector2(0.5, 0.5) }, density: { value: 0.9 }, decay: { value: 0.96 } });
    const U = {};
    for (const [k, v] of Object.entries(DEFAULT_POST)) {
      if (['bloomThreshold', 'bloomKnee', 'bloomRadius', 'streakStretch', 'raysPos', 'raysDensity', 'raysDecay'].includes(k)) continue;
      const name = k === 'gamma' ? 'gammaV' : k;
      if (Array.isArray(v)) U[name] = { value: v.length === 2 ? new THREE.Vector2(...v) : v.length === 3 ? new THREE.Vector3(...v) : new THREE.Vector4(...v) };
      else U[name] = { value: v };
    }
    Object.assign(U, { tScene: { value: null }, tBloom: { value: null }, tStreak: { value: null }, tRays: { value: null }, time: { value: 0 }, aspect: { value: w / h } });
    this.mFinal = mat(finalFrag, U);
    this.mTrans = mat(transFrag, {
      tA: { value: null }, tB: { value: null }, p: { value: 0 }, ttype: { value: -1 }, weight: { value: 1 },
      dir: { value: new THREE.Vector2(1, 0) }, center: { value: new THREE.Vector2(0.5, 0.5) }, aspect: { value: w / h }, seed: { value: 0 }, radius: { value: 1 },
    }, { blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneFactor, transparent: true });
  }

  // Composite A/B into target with additive weight (for motion-blur accumulation).
  composite(texA, texB, type, p, opts, target, weight) {
    const u = this.mTrans.uniforms;
    u.tA.value = texA; u.tB.value = texB || texA; u.p.value = p; u.ttype.value = TRANSITIONS[type] ?? -1; u.weight.value = weight;
    if (opts.dir) u.dir.value.set(opts.dir[0], opts.dir[1]); else u.dir.value.set(1, 0);
    if (opts.center) u.center.value.set(opts.center[0], opts.center[1]); else u.center.value.set(0.5, 0.5);
    u.seed.value = opts.seed || 0; u.radius.value = opts.radius || 1;
    this.fsq.render(this.r, this.mTrans, target, false);
  }

  render(sceneTex, P, time, target = null) {
    const r = this.r;
    // bloom downsample chain
    let src = sceneTex;
    let sw = this.w, sh = this.h;
    for (let i = 0; i < this.mips.length; i++) {
      const u = this.mDown.uniforms;
      u.src.value = src; u.texel.value.set(1 / sw, 1 / sh); u.prefilter.value = i === 0 ? 1 : 0;
      u.threshold.value = P.bloomThreshold; u.knee.value = P.bloomKnee;
      this.fsq.render(r, this.mDown, this.mips[i]);
      src = this.mips[i].texture; sw = this.mips[i].width; sh = this.mips[i].height;
    }
    // streak chain from mips[1]
    const useStreak = P.streak > 0.001;
    if (useStreak) {
      let s = this.mips[1].texture, w = this.mips[1].width;
      for (let i = 0; i < this.sd.length; i++) {
        const u = this.mHDown.uniforms; u.src.value = s; u.texel.value.set(1 / w, 0);
        this.fsq.render(r, this.mHDown, this.sd[i]);
        s = this.sd[i].texture; w = this.sd[i].width;
      }
      let up = this.sd[this.sd.length - 1].texture;
      for (let i = this.sd.length - 2; i >= 0; i--) {
        const u = this.mHUp.uniforms; u.src.value = up; u.base.value = this.sd[i].texture;
        u.texel.value.set(1 / this.sd[i + 1].width, 0); u.stretch.value = P.streakStretch;
        this.fsq.render(r, this.mHUp, this.su[i]);
        up = this.su[i].texture;
      }
    }
    // god rays from mips[1] (bright, quarter res)
    const useRays = P.rays > 0.001;
    if (useRays) {
      const u = this.mRays.uniforms; u.src.value = this.mips[1].texture;
      u.lightPos.value.set(P.raysPos[0], P.raysPos[1]); u.density.value = P.raysDensity; u.decay.value = P.raysDecay;
      this.fsq.render(r, this.mRays, this.rays);
    }
    // bloom upsample (additive, in place)
    for (let i = this.mips.length - 1; i > 0; i--) {
      const u = this.mUp.uniforms; u.src.value = this.mips[i].texture;
      u.texel.value.set(1 / this.mips[i].width, 1 / this.mips[i].height); u.radius.value = P.bloomRadius; u.strength.value = 1;
      this.fsq.render(r, this.mUp, this.mips[i - 1], false);
    }
    // final
    const U = this.mFinal.uniforms;
    U.tScene.value = sceneTex; U.tBloom.value = this.mips[0].texture;
    U.tStreak.value = useStreak ? this.su[0].texture : this.black.texture;
    U.tRays.value = useRays ? this.rays.texture : this.black.texture;
    U.time.value = time;
    for (const [k, v] of Object.entries(P)) {
      const name = k === 'gamma' ? 'gammaV' : k;
      if (!U[name]) continue;
      if (Array.isArray(v)) U[name].value.fromArray(v); else U[name].value = v;
    }
    U.streak.value = useStreak ? P.streak : 0;
    U.rays.value = useRays ? P.rays : 0;
    this.fsq.render(r, this.mFinal, target);
  }
}

// Linear blend of two post-parameter sets (numbers and arrays).
export function mixPost(a, b, t) {
  const out = {};
  for (const k of Object.keys(DEFAULT_POST)) {
    const x = a[k], y = b[k];
    if (Array.isArray(x)) out[k] = x.map((v, i) => v + (y[i] - v) * t);
    else out[k] = x + (y - x) * t;
  }
  return out;
}
