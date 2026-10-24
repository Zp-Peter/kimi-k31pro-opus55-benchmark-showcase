// Procedural lunar surface: multi-scale craters + regolith fbm, analytic finite-difference
// normals with footprint-based LOD, soft height-field shadows for grazing dawn light.
import * as THREE from 'three';
import { GLSL_NOISE } from '../engine/util.js';

const vert = /* glsl */ `
varying vec3 vWorld; varying vec3 vN;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

const frag = /* glsl */ `
uniform vec3 center; uniform float R; uniform vec3 camPos;
uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 glowDir; uniform vec3 glowCol; uniform vec3 fillCol;
uniform float exposureBoost; uniform float shadowOn; uniform vec3 rimCol; uniform float transport;
varying vec3 vWorld; varying vec3 vN;
${GLSL_NOISE}
vec3 hash32(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yzz) * p3.zyx); }
float vnoise2(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y); }

float craterLayer(vec2 p, float s, float prob, float seed){
  vec2 q = p * s; vec2 i = floor(q); vec2 f = fract(q);
  float h = 0.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y)); vec2 cell = i + g;
    vec3 r = hash32(cell + seed);
    if (r.z > prob) continue;
    float rad = 0.14 + 0.32 * hash12(cell * 1.71 + seed * 0.37);
    vec2 o = g + 0.2 + 0.6 * r.xy - f;
    // slightly elliptical, irregular rims
    float ang = atan(o.y, o.x);
    float wob = 1.0 + 0.06 * sin(ang * 3.0 + r.x * 6.28) + 0.04 * sin(ang * 7.0 + r.y * 6.28);
    float d = length(o) / (rad * wob);
    float bowl = -0.62 * pow(max(0.0, 1.0 - d * d), 0.55);
    float peak = rad > 0.34 ? 0.22 * exp(-pow(d / 0.16, 2.0)) : 0.0;
    float rim = 0.24 * exp(-pow((d - 1.0) / 0.13, 2.0));
    float ej = d > 1.0 ? 0.05 * exp(-(d - 1.0) * 2.5) : 0.0;
    h += (bowl + peak + rim + ej) * rad / s;
  }
  return h;
}

// fp: world-space pixel footprint, used to fade features smaller than a few pixels.
float heightAt(vec2 p, float fp, bool coarse){
  float h = 0.0;
  float scales[6] = float[6](0.09, 0.22, 0.55, 1.4, 3.4, 8.0);
  float probs[6] = float[6](0.45, 0.5, 0.55, 0.6, 0.62, 0.6);
  float depth[6] = float[6](0.07, 0.24, 0.5, 0.7, 0.8, 0.85);
  for (int k = 0; k < 6; k++) {
    float cell = 1.0 / scales[k];
    float w = smoothstep(fp * 3.0, fp * 9.0, cell * 0.25);
    if (w <= 0.0) break;
    if (coarse && k > 3) break;
    if (coarse && k < 2) continue;   // big basins shade via normals only, no huge cast shadows
    h += w * depth[k] * craterLayer(p, scales[k], probs[k], float(k) * 13.7);
  }
  if (!coarse) {
    float a = 0.06, fq = 2.2;
    for (int k = 0; k < 7; k++) {
      float w = smoothstep(fp * 3.0, fp * 8.0, 1.0 / fq);
      if (w <= 0.0) break;
      h += w * a * (vnoise2(p * fq + float(k) * 7.1) - 0.5);
      a *= 0.52; fq *= 2.1;
    }
  }
  // broad undulation (kept gentle so grazing light does not throw giant shadows)
  if (!coarse) h += 0.10 * (vnoise2(p * 0.05) - 0.5) + 0.06 * (vnoise2(p * 0.13 + 5.0) - 0.5);
  return h;
}

void main(){
  vec3 N0 = normalize(vWorld - center);
  vec2 p = vWorld.xz;
  float dist = length(vWorld - camPos);
  float fp = max(length(fwidth(vWorld)), 1e-4);
  float e = max(fp * 0.8, 0.0012);
  float h0 = heightAt(p, fp, false);
  float hx = heightAt(p + vec2(e, 0.0), fp, false);
  float hz = heightAt(p + vec2(0.0, e), fp, false);
  vec3 T = normalize(vec3(1, 0, 0) - N0 * N0.x);
  vec3 B = normalize(vec3(0, 0, 1) - N0 * N0.z);
  vec3 N = normalize(N0 - T * (hx - h0) / e - B * (hz - h0) / e);
  vec3 V = normalize(camPos - vWorld);

  // albedo: maria + fine mottling + brighter crater walls
  float maria = smoothstep(0.35, 0.7, vnoise2(p * 0.03 + 3.0) * 0.7 + vnoise2(p * 0.11) * 0.3);
  float grit = vnoise2(p * 9.0) * 0.6 + vnoise2(p * 31.0) * 0.4;
  float alb = mix(0.135, 0.08, maria) * (0.7 + 0.6 * grit) * (0.88 + 0.24 * vnoise2(p * 1.3 + 9.0));

  // key light is parallel-transported with the curvature so the raking angle holds everywhere
  // (avoids a terminator line running right beside the camera on this small sphere)
  vec3 L = sunDir;
  if (transport > 0.5) {
    vec3 ax = cross(vec3(0.0, 1.0, 0.0), N0); float sa = length(ax);
    if (sa > 1e-5) { ax /= sa; float ca = N0.y; L = L * ca + cross(ax, L) * sa + ax * dot(ax, L) * (1.0 - ca); }
  }
  // lunar-lambert (mix of Lambert and Lommel-Seeliger)
  float nl = dot(N, L), nv = max(dot(N, V), 0.05);
  float ls = max(nl, 0.0) / (max(nl, 0.0) + nv);
  float diff = mix(max(nl, 0.0), ls * 2.0, 0.45);
  // terminator from the smooth sphere normal (night side)
  float day = smoothstep(-0.02, 0.06, dot(N0, L));
  // soft height-field shadow toward the sun (grazing light)
  float sh = 1.0;
  if (shadowOn > 0.5 && day > 0.0 && nl > 0.0) {
    vec3 Lt = L - N0 * dot(N0, L); float lt = length(Lt);
    if (lt > 1e-4) {
      vec2 dir2 = normalize(vec2(dot(Lt, vec3(1,0,0)), dot(Lt, vec3(0,0,1))));
      float slope = dot(N0, L) / lt;
      float hb = heightAt(p, fp, true);
      float stepL = 0.04;
      for (int k = 1; k <= 14; k++) {
        float s = stepL * float(k) * float(k) * 0.35 + stepL * float(k);
        float hs = heightAt(p + dir2 * s, fp, true);
        float clear = (hb + s * slope) - hs;
        sh = min(sh, clamp(clear / (s * 0.08) + 0.5, 0.0, 1.0));
      }
    }
  }
  vec3 col = alb * sunCol * diff * day * sh;
  // pre-dawn glow skimming the rims, and blue earthshine fill
  float gl = max(dot(N, glowDir), 0.0);
  col += alb * glowCol * pow(gl, 2.0);
  col += alb * fillCol * (0.55 + 0.45 * N.y);
  // grazing rim highlight toward the viewer (regolith back-scatter)
  float rimv = pow(1.0 - nv, 4.0);
  col += rimCol * rimv * 0.25 * max(dot(N0, glowDir) + 0.3, 0.0);
  // distance haze toward the horizon (stylised), helps depth
  float horizon = pow(1.0 - max(dot(N0, V), 0.0), 6.0);
  col += rimCol * horizon * 0.12;
  gl_FragColor = vec4(col * exposureBoost, 1.0);
}`;

export function moonMaterial(R, center) {
  return new THREE.ShaderMaterial({
    vertexShader: vert, fragmentShader: frag,
    uniforms: {
      center: { value: center.clone() }, R: { value: R }, camPos: { value: new THREE.Vector3() },
      sunDir: { value: new THREE.Vector3(0, 0, -1) }, sunCol: { value: new THREE.Vector3(5.0, 4.7, 4.3) },
      glowDir: { value: new THREE.Vector3(0, 0.3, -1).normalize() }, glowCol: { value: new THREE.Vector3(0.035, 0.05, 0.085) },
      fillCol: { value: new THREE.Vector3(0.022, 0.03, 0.05) }, rimCol: { value: new THREE.Vector3(0.10, 0.22, 0.55) },
      exposureBoost: { value: 1 }, shadowOn: { value: 1 }, transport: { value: 1 },
    },
  });
}

// Thin additive shell that paints a stylised blue limb glow.
export function limbShell(R, center, color = [0.25, 0.55, 1.0]) {
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending,
    uniforms: { camPos: { value: new THREE.Vector3() }, center: { value: center.clone() }, R: { value: R }, col: { value: new THREE.Vector3(...color) }, sunDir: { value: new THREE.Vector3(0, 0, -1) }, strength: { value: 1 }, width: { value: 0.02 } },
    vertexShader: /* glsl */ `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      uniform vec3 camPos; uniform vec3 center; uniform float R; uniform vec3 col; uniform vec3 sunDir; uniform float strength; uniform float width; varying vec3 vW;
      void main(){
        vec3 V = normalize(vW - camPos);
        vec3 oc = camPos - center; float dc = length(oc); vec3 up = oc / dc;
        float elev = asin(clamp(dot(V, up), -1.0, 1.0));
        float dip = acos(clamp(R / dc, -1.0, 1.0));
        float a = elev + dip;                      // angle above the visible horizon
        float g = a > 0.0 ? exp(-a / width) : 0.0;
        vec3 vh = V - up * dot(V, up); vec3 sh = sunDir - up * dot(sunDir, up);
        float sunSide = pow(max(dot(normalize(vh), normalize(sh)), 0.0), 6.0);
        gl_FragColor = vec4(col * g * (0.15 + 2.2 * sunSide) * strength, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(R * 1.06, 128, 64), m);
  mesh.position.copy(center);
  mesh.renderOrder = 2;
  return mesh;
}
