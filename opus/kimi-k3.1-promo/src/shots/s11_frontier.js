// S11 + S12 · 开放权重 → 汇聚 — the Moon as a thin crescent seen from space; across its earthshine-lit
// night side a network of light spreads node by node from a seed point (open weights reaching
// everyone). Slow cinematic pull-back with a hint of roll, letterboxed, god rays off the lit limb.
// Then, in one continuous move, the nodes peel off and spiral into a vortex that collapses to a
// single point of light, held in silence for the logo hit.
import * as THREE from 'three';
import { Shot } from './base.js';
import { starField, glowSprite } from './lens.js';
import { GlyphText } from '../engine/text.js';
import { ease, clamp, smoothstep, lerp, mulberry32, shake, applyShake, keys, pulse, GLSL_NOISE } from '../engine/util.js';

const R = 10;
const SUN = new THREE.Vector3(0.86, 0.18, -0.48).normalize();
const SEED = new THREE.Vector3(0.25, 0.1, 1).normalize();
const P1 = new THREE.Vector3(-12.5, 3.6, 31.5), T1 = new THREE.Vector3(-4.9, 0.6, 0);
const VC = T1.clone().lerp(P1, 0.35), AXIS = P1.clone().sub(VC).normalize(); // vortex centre / axis

// one-off bake: equirect height (r) + albedo (g) with layered crater fields
const bakeFrag = /* glsl */ `
varying vec2 vUv;
${GLSL_NOISE}
float craters(vec3 p, float scale, float prob, float seed){
  vec3 q = p * scale, i = floor(q), f = fract(q);
  float h = 0.0;
  for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) for (int z = -1; z <= 1; z++) {
    vec3 c = vec3(float(x), float(y), float(z));
    vec3 r = hash33(i + c + seed);
    if (r.x > prob) continue;
    vec3 ctr = c + 0.15 + 0.7 * hash33(i + c + seed + 17.0);
    float rad = 0.16 + 0.32 * r.y;
    float d = length(f - ctr) / rad;
    if (d < 2.0) {
      float bowl = d < 1.0 ? (d * d - 1.0) : 0.0;
      float rim = exp(-pow((d - 1.0) / 0.2, 2.0)) * 0.32;
      float ej = d > 1.0 ? exp(-(d - 1.0) * 3.0) * 0.07 : 0.0;
      h += (bowl * 0.65 + rim + ej) * (0.55 + 0.45 * r.z);
    }
  }
  return h;
}
void main(){
  float lon = (vUv.x - 0.5) * 6.2831853, lat = (vUv.y - 0.5) * 3.1415927;
  vec3 p = vec3(cos(lat) * cos(lon), sin(lat), cos(lat) * sin(lon));
  float maria = smoothstep(0.44, 0.62, fbm3(p * 1.4 + 4.0, 4));
  float h = (fbm3(p * 7.0, 6) - 0.5) * 0.3;
  h += craters(p, 3.5, 0.3, 1.0) * 0.9 + craters(p, 8.0, 0.42, 7.0) * 0.45 + craters(p, 19.0, 0.5, 13.0) * 0.2 + craters(p, 43.0, 0.55, 29.0) * 0.08;
  h -= maria * 0.12;
  float alb = mix(0.6, 0.27, maria) * (0.82 + 0.32 * fbm3(p * 26.0, 3));
  gl_FragColor = vec4(h, alb, 0.0, 1.0);
}`;

const moonVert = /* glsl */ `
varying vec3 vObj; varying vec3 vW;
void main(){ vObj = position; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
const moonFrag = /* glsl */ `
uniform sampler2D hmap; uniform vec3 uSun; uniform vec3 uEarth; uniform float uBump; uniform mat3 uRot; uniform float uFade;
varying vec3 vObj; varying vec3 vW;
vec2 sphUV(vec3 p){ p = normalize(p); return vec2(atan(p.z, p.x) / 6.2831853 + 0.5, asin(clamp(p.y, -1.0, 1.0)) / 3.1415927 + 0.5); }
float H(vec3 p){ return texture2D(hmap, sphUV(p)).r; }
void main(){
  vec3 p = normalize(vObj);
  vec3 t1 = normalize(cross(abs(p.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0), p)), t2 = cross(p, t1);
  float e = 0.0016;
  float h0 = H(p), h1 = H(p + t1 * e), h2 = H(p + t2 * e);
  vec3 nO = normalize(p - uBump * ((h1 - h0) / e * t1 + (h2 - h0) / e * t2));
  vec3 n = normalize(uRot * nO), g = normalize(uRot * p);
  float alb = texture2D(hmap, sphUV(p)).g;
  vec3 V = normalize(cameraPosition - vW);
  float mu = max(dot(n, uSun), 0.0), mv = max(dot(n, V), 0.0);
  float term = smoothstep(-0.03, 0.06, dot(g, uSun));
  float lit = mix(mu, 2.0 * mu / (mu + mv + 1e-3), 0.55) * term;
  vec3 col = vec3(1.0, 0.96, 0.9) * alb * lit * 2.4;
  col += vec3(0.30, 0.42, 0.62) * alb * 0.045 * (0.35 + 0.65 * max(dot(n, uEarth), 0.0));
  col += vec3(0.08, 0.17, 0.4) * pow(1.0 - max(dot(g, V), 0.0), 5.0) * 0.35;
  gl_FragColor = vec4(col * uFade, 1.0);
}`;

const nodeVert = /* glsl */ `
attribute float aT; attribute float aR; attribute float aS;
uniform float uTime; uniform vec3 uC; uniform vec3 uAxis; uniform mat4 uInvModel;
varying float vA; varying float vHot; varying float vCore;
void main(){
  vec3 p0 = (modelMatrix * vec4(position, 1.0)).xyz;
  float s = uTime - 4.0 - aS * 0.9;
  float k = smoothstep(0.0, 1.0, s / 0.8);
  float c = smoothstep(0.0, 1.0, (uTime - 4.4) / 3.0);
  vec3 lift = p0 + normalize(p0) * 2.5 * smoothstep(0.0, 0.6, max(s, 0.0));
  vec3 rel = lift - uC; float h = dot(rel, uAxis); vec3 rad = rel - h * uAxis; float r0 = length(rad);
  vec3 e1 = rad / max(r0, 1e-4), e2 = cross(uAxis, e1);
  float ss = max(s, 0.0), ang = (2.0 * ss + 1.1 * ss * ss) * (0.75 + 0.5 * aR);
  vec3 vort = uC + uAxis * h * (1.0 - c) + (e1 * cos(ang) + e2 * sin(ang)) * r0 * pow(1.0 - c, 1.5);
  vec3 p = mix(p0, vort, k);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float dt = uTime - aT;
  vA = clamp(dt / 0.2, 0.0, 1.0); vHot = dt > 0.0 ? exp(-dt / 0.2) : 0.0; vCore = k * c;
  gl_PointSize = (1.6 + 3.0 * aR + 7.0 * vHot + 3.0 * k) * (30.0 / -mv.z);
}`;
const nodeFrag = /* glsl */ `
varying float vA; varying float vHot; varying float vCore;
void main(){ vec2 d = gl_PointCoord - 0.5; float a = exp(-dot(d, d) * 14.0); gl_FragColor = vec4(mix(mix(vec3(0.5, 0.85, 1.7), vec3(2.6, 2.9, 3.3), vHot), vec3(2.2, 2.5, 3.2), vCore) * a * vA, 1.0); }`;
const edgeVert = /* glsl */ `
attribute vec3 aOther; attribute float aT0; attribute float aT1; attribute float aEnd; uniform float uTime; varying float vA;
void main(){
  float g = clamp((uTime - aT0) / max(aT1 - aT0, 0.05), 0.0, 1.0);
  vec3 p = aEnd > 0.5 ? mix(aOther, position, g) : position;
  vA = step(0.001, g);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`;
const edgeFrag = 'uniform float uEdge; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.22, 0.5, 1.05) * vA * uEdge, 1.0); }';

export class FrontierShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.fov = 40; this.camera.near = 0.1; this.camera.far = 2000;
    const r = engine.renderer, rnd = mulberry32(1111);

    // bake the surface once
    const rt = new THREE.WebGLRenderTarget(4096, 2048, { type: THREE.HalfFloatType, depthBuffer: false, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter, wrapS: THREE.RepeatWrapping });
    const bs = new THREE.Scene(), bc = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    bs.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }', fragmentShader: bakeFrag, depthTest: false })));
    r.setRenderTarget(rt); r.clear(); r.render(bs, bc); r.setRenderTarget(null);

    this.group = new THREE.Group(); this.scene.add(this.group);
    this.moonU = { hmap: { value: rt.texture }, uSun: { value: SUN.clone() }, uEarth: { value: new THREE.Vector3(0, 0, 1) }, uBump: { value: 0.022 }, uRot: { value: new THREE.Matrix3() }, uFade: { value: 1 } };
    this.moon = new THREE.Mesh(new THREE.SphereGeometry(R, 256, 128), new THREE.ShaderMaterial({ vertexShader: moonVert, fragmentShader: moonFrag, uniforms: this.moonU }));
    this.moon.rotation.y = Math.PI; // texture seam (object -x) faces away
    this.group.add(this.moon);
    this.stars = starField(5000, 900, 21); this.scene.add(this.stars);

    // network on the night side (object space = world here; the group spins very slowly)
    const pts = [];
    const NF = 9000;
    for (let i = 0; i < NF; i++) {
      const y = 1 - (i + 0.5) / NF * 2, rr = Math.sqrt(1 - y * y), th = i * 2.399963;
      const p = new THREE.Vector3(Math.cos(th) * rr, y, Math.sin(th) * rr);
      p.x += (rnd() - 0.5) * 0.012; p.y += (rnd() - 0.5) * 0.012; p.z += (rnd() - 0.5) * 0.012; p.normalize();
      if (p.dot(SUN) > 0.0 || p.z < -0.25) continue;
      const dens = 0.5 + 0.5 * Math.sin(p.x * 7.1 + 1.3) * Math.sin(p.y * 6.3 - 0.7) * Math.sin(p.z * 5.7 + 2.1);
      if (rnd() > 0.06 + 0.6 * dens * dens * dens) continue;
      pts.push(p);
    }
    const n = pts.length;
    const tA = pts.map((p) => 0.1 + Math.acos(clamp(p.dot(SEED), -1, 1)) * 1.45 + rnd() * 0.12);
    const pos = new Float32Array(n * 3), aT = new Float32Array(n), aR = new Float32Array(n), aS = new Float32Array(n);
    const tMax = Math.max(...tA);
    pts.forEach((p, i) => { pos.set([p.x * (R + 0.03), p.y * (R + 0.03), p.z * (R + 0.03)], i * 3); aT[i] = tA[i]; aR[i] = Math.pow(rnd(), 3); aS[i] = tA[i] / tMax * 0.8 + rnd() * 0.2; });
    const ng = new THREE.BufferGeometry();
    ng.setAttribute('position', new THREE.BufferAttribute(pos, 3)); ng.setAttribute('aT', new THREE.BufferAttribute(aT, 1)); ng.setAttribute('aR', new THREE.BufferAttribute(aR, 1)); ng.setAttribute('aS', new THREE.BufferAttribute(aS, 1));
    this.nodeU = { uTime: { value: 0 }, uC: { value: VC.clone() }, uAxis: { value: AXIS.clone() }, uEdge: { value: 1 } };
    this.nodes = new THREE.Points(ng, new THREE.ShaderMaterial({ vertexShader: nodeVert, fragmentShader: nodeFrag, uniforms: this.nodeU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.group.add(this.nodes);
    // edges: up to 3 nearest neighbours within ~6.5°, grown from the earlier node to the later one
    const maxCos = Math.cos(8 * Math.PI / 180), seen = new Set(), E = [];
    for (let i = 0; i < n; i++) {
      const cand = [];
      for (let j = 0; j < n; j++) if (j !== i) { const c = pts[i].dot(pts[j]); if (c > maxCos) cand.push([c, j]); }
      cand.sort((a, b) => b[0] - a[0]);
      for (const [, j] of cand.slice(0, 3)) { const k = i < j ? `${i}_${j}` : `${j}_${i}`; if (!seen.has(k)) { seen.add(k); E.push(tA[i] <= tA[j] ? [i, j] : [j, i]); } }
    }
    const ep = new Float32Array(E.length * 6), eo = new Float32Array(E.length * 6), e0 = new Float32Array(E.length * 2), e1 = new Float32Array(E.length * 2), ee = new Float32Array(E.length * 2);
    E.forEach(([a, b], k) => {
      const A = pts[a].clone().multiplyScalar(R + 0.03), B = pts[b].clone().multiplyScalar(R + 0.03);
      ep.set([A.x, A.y, A.z, B.x, B.y, B.z], k * 6); eo.set([B.x, B.y, B.z, A.x, A.y, A.z], k * 6);
      e0.set([tA[a], tA[a]], k * 2); e1.set([tA[b], tA[b]], k * 2); ee.set([0, 1], k * 2);
    });
    const eg = new THREE.BufferGeometry();
    eg.setAttribute('position', new THREE.BufferAttribute(ep, 3)); eg.setAttribute('aOther', new THREE.BufferAttribute(eo, 3));
    eg.setAttribute('aT0', new THREE.BufferAttribute(e0, 1)); eg.setAttribute('aT1', new THREE.BufferAttribute(e1, 1)); eg.setAttribute('aEnd', new THREE.BufferAttribute(ee, 1));
    this.edges = new THREE.LineSegments(eg, new THREE.ShaderMaterial({ vertexShader: edgeVert, fragmentShader: edgeFrag, uniforms: this.nodeU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.group.add(this.edges);

    // copy (left column)
    const L = -960 + 110;
    this.kicker = new GlyphText('OPEN WEIGHTS  ·  BY NOV 4', { family: 'sans', weight: 600, size: 20, tracking: 0.36, color: '#8fb4ff', align: 'left' });
    this.kicker.position.set(L + 2, 175, 0);
    this.head = new GlyphText('开放权重', { family: 'cn', weight: 600, size: 100, tracking: 0.1, color: '#ffffff', align: 'left' });
    this.head.position.set(L, 85, 0);
    this.sub = new GlyphText('将于 11 月 4 日前发布', { family: 'cn', weight: 300, size: 38, tracking: 0.06, color: '#c8d6f2', align: 'left' });
    this.sub.position.set(L + 4, -15, 0);
    this.tag = new GlyphText('把前沿，交到每个人手里', { family: 'cn', weight: 500, size: 46, tracking: 0.08, color: '#ffffff', colorBottom: '#a9c8ff', align: 'left' });
    this.tag.position.set(L + 2, -150, 0);
    this.overlay.add(this.kicker, this.head, this.sub, this.tag);
    this.dot = glowSprite('glow', '#ffffff', 1.3, { intensity: 5 });
    this.dotStar = glowSprite('star', '#cfe2ff', 5, { intensity: 1.0 });
    this.dot.position.copy(VC); this.dotStar.position.copy(VC);
    this.scene.add(this.dot, this.dotStar);
    this.nodes.frustumCulled = false;
  }

  update(t) {
    const u = ease.inOutCubic(clamp((t + 0.25) / 4.65));
    const P = new THREE.Vector3(lerp(-2.6, P1.x, u), lerp(1.2, P1.y, u), lerp(20.5, P1.z, u));
    const T = new THREE.Vector3(lerp(-4.0, T1.x, u), lerp(1.4, T1.y, u), 0);
    const a = ease.inOutCubic(clamp((t - 3.9) / 3.8));
    P.lerp(VC.clone().add(P1.clone().sub(VC).multiplyScalar(0.62)), a);
    T.lerp(VC, smoothstep(3.9, 5.2, t));
    const cam = this.camera;
    cam.position.copy(P); cam.up.set(0, 1, 0); cam.lookAt(T);
    cam.rotateZ(keys(t, [[-0.25, -0.05], [4.0, 0.03], [7.6, 0.75]]));
    applyShake(cam, shake(t, 0.25, 0.5, 61));
    cam.updateMatrixWorld();
    this.group.rotation.y = 0.03 * t;
    this.group.updateMatrixWorld();
    this.moonU.uRot.value.setFromMatrix4(this.moon.matrixWorld);
    this.moonU.uSun.value.copy(SUN);
    this.nodeU.uTime.value = t;
    this.nodeU.uEdge.value = 1 - smoothstep(4.0, 4.7, t);
    this.moonU.uFade.value = 1 - 0.97 * smoothstep(4.3, 6.2, t);
    this.stars.material.uniforms.time.value = t;
    this.stars.visible = t < 7.4;
    const core = smoothstep(6.6, 7.35, t);
    this.dot.setOpacity(core * (1 + 0.15 * Math.sin(t * 9))); this.dot.setSize(1.3 * (0.6 + 0.4 * core));
    this.dotStar.setOpacity(core * 0.9);

    const fin = 1 - smoothstep(3.45, 3.75, t);
    this.kicker.animate(t, { in: { start: 0.55, dur: 0.6, stagger: 0.012, style: 'track' }, opacity: 0.9 * fin });
    this.head.animate(t, { in: { start: 0.3, dur: 0.9, stagger: 0.09, style: 'blur' }, opacity: fin });
    this.sub.animate(t, { in: { start: 0.85, dur: 0.7, stagger: 0.03, style: 'blur' }, opacity: 0.95 * fin });
    this.tag.animate(t, { in: { start: 2.05, dur: 0.8, stagger: 0.05, style: 'rise' }, opacity: fin });
  }

  post(t) {
    // god rays from the brightest point of the lit limb
    const c = new THREE.Vector3(0, 0, 0), v = this.camera.position.clone().sub(c).normalize();
    const limb = SUN.clone().sub(v.clone().multiplyScalar(SUN.dot(v))).normalize().multiplyScalar(R).add(c);
    limb.project(this.camera);
    return {
      letterbox: 0.118, bloom: 0.6, bloomThreshold: 0.95, streak: 0.3, vignette: 0.5, grain: 0.05,
      rays: 0.22 * (1 - smoothstep(4.3, 5.8, t)), raysPos: [limb.x * 0.5 + 0.5, limb.y * 0.5 + 0.5], raysDecay: 0.968,
      flash: 0.25 * pulse(t, 7.35, 0.08),
      temperature: -0.08, saturation: 0.95,
    };
  }

  samples(t) { return t > 4.6 && t < 7.5 ? 20 : 8; }
}
