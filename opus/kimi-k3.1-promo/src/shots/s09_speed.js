// S09 · Highspeed — hyperspace light-flow with a full barrel roll; a giant "2–3×" rushes in from the
// vanishing point, splits apart and the camera punches straight through it (flash, FOV kick, shock),
// then the copy lands over a calmer cruise.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { GlyphText } from '../engine/text.js';
import { keys, ease, clamp, smoothstep, pulse, mulberry32, shake, applyShake, TAU } from '../engine/util.js';

const SPEED = [[-0.4, 40], [0.3, 55], [1.5, 120, ease.inQuad], [1.98, 300, ease.inQuad], [2.3, 45, ease.outCubic], [4.3, 30]];
const PASS = 2.0;
const DT = 1 / 240, T0 = -0.4, TABLE = [0];
for (let i = 1; i <= Math.ceil((4.6 - T0) / DT); i++) TABLE.push(TABLE[i - 1] + keys(T0 + (i - 0.5) * DT, SPEED) * DT);
function travel(t) {
  const x = (t - T0) / DT, i = clamp(Math.floor(x), 0, TABLE.length - 2);
  return TABLE[i] + (TABLE[i + 1] - TABLE[i]) * (x - i);
}

const lineVert = /* glsl */ `
attribute vec4 aGeo; attribute vec4 aCol; attribute float aW;
uniform float camZ; uniform float L; uniform float stretch;
varying vec2 vUv; varying vec4 vCol; varying float vFade;
void main(){
  float th = aGeo.x, r = aGeo.y;
  float rel = mod(aGeo.z - camZ, L) - L + 4.0;
  vec3 radial = vec3(cos(th), sin(th), 0.0), tangent = vec3(-sin(th), cos(th), 0.0);
  vec3 pos = radial * r + vec3(0.0, 0.0, camZ + rel) + vec3(0.0, 0.0, position.x * aGeo.w * stretch) + tangent * (position.y * aW);
  vUv = uv; vCol = aCol;
  vFade = smoothstep(-L + 4.0, -L * 0.6, rel) * smoothstep(4.0, 0.5, rel);
  gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
}`;
const lineFrag = /* glsl */ `
varying vec2 vUv; varying vec4 vCol; varying float vFade;
void main(){
  float a = exp(-pow((vUv.y - 0.5) * 4.0, 2.0)) * smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
  gl_FragColor = vec4(vCol.rgb * vCol.a * a * vFade, 1.0);
}`;

export class SpeedShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.near = 0.05; this.camera.far = 700;
    this.clearColor.set('#010208');
    const rnd = mulberry32(909);
    const N = 2200, L = this.L = 260;
    const quad = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = quad.index; geo.attributes.position = quad.attributes.position; geo.attributes.uv = quad.attributes.uv;
    const aGeo = new Float32Array(N * 4), aCol = new Float32Array(N * 4), aW = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const near = i < 500;
      aGeo.set([rnd() * TAU, near ? 2.2 + rnd() * 4 : 5 + Math.pow(rnd(), 0.7) * 24, rnd() * L, near ? 1 + rnd() * 3 : 2 + rnd() * 9], i * 4);
      const k = rnd();
      const col = k < 0.55 ? [0.28, 0.55, 1.0, 1.2 + rnd() * 2.6] : k < 0.8 ? [0.85, 0.92, 1.0, 1.5 + rnd() * 2.5] : k < 0.94 ? [0.62, 0.42, 1.0, 1.2 + rnd() * 1.8] : [1.0, 0.62, 0.25, 1.6 + rnd() * 2];
      aCol.set(col, i * 4);
      aW[i] = near ? 0.02 + rnd() * 0.03 : 0.04 + rnd() * 0.08;
    }
    geo.setAttribute('aGeo', new THREE.InstancedBufferAttribute(aGeo, 4));
    geo.setAttribute('aCol', new THREE.InstancedBufferAttribute(aCol, 4));
    geo.setAttribute('aW', new THREE.InstancedBufferAttribute(aW, 1));
    geo.instanceCount = N;
    this.uni = { camZ: { value: 0 }, L: { value: L }, stretch: { value: 1 } };
    this.lines = new THREE.Mesh(geo, new THREE.ShaderMaterial({ vertexShader: lineVert, fragmentShader: lineFrag, uniforms: this.uni, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
    this.lines.frustumCulled = false; this.scene.add(this.lines);
    this.core = glowSprite('soft', '#5fa8ff', 40, { intensity: 1.2 });
    this.star = glowSprite('star', '#cfe6ff', 70, { intensity: 0.5 });
    this.scene.add(this.core, this.star);

    // the "2–3×" that the camera flies through
    this.big = new GlyphText('2–3×', { size: 300, weight: 800, family: 'sans', color: '#ffffff', colorBottom: '#7fd0ff', intensity: 2.4, renderOrder: 50 });
    this.big.scale.setScalar(0.02);
    this.zText = -travel(PASS);
    this.big.position.set(0, 0, this.zText);
    this.scene.add(this.big);

    this.kicker = new GlyphText('K3.1 PRO HIGHSPEED', { family: 'sans', weight: 700, size: 22, tracking: 0.42, color: '#8fd4ff', intensity: 1.3 });
    this.kicker.position.set(0, 150, 0);
    this.main = new GlyphText('快，也是一种智能', { family: 'cn', weight: 600, size: 92, tracking: 0.08, color: '#ffffff' });
    this.main.position.set(0, 50, 0);
    this.sub = new GlyphText('Kimi K3.1 Pro Highspeed  ·  2–3 倍速度', { family: 'cn', weight: 400, size: 30, tracking: 0.04, color: '#c4d4f0' });
    this.sub.position.set(0, -52, 0);
    this.overlay.add(this.kicker, this.main, this.sub);
  }

  update(t) {
    const cam = this.camera;
    const camZ = -travel(t), v = keys(t, SPEED);
    cam.position.set(0, 0, camZ);
    cam.up.set(0, 1, 0); cam.lookAt(0, 0, camZ - 10);
    cam.rotateZ(TAU * (1 - Math.cos(Math.PI * clamp((t - 0.25) / 1.4))) / 2);
    cam.fov = keys(t, [[1.6, 64], [1.98, 86, ease.inQuad], [2.6, 56, ease.outCubic]]);
    cam.updateProjectionMatrix();
    applyShake(cam, shake(t, 0.6 + v * 0.008, 2.0, 29));
    cam.updateMatrixWorld();
    this.uni.camZ.value = camZ;
    this.uni.stretch.value = 0.25 + v * 0.012;
    const calm = 1 - 0.75 * smoothstep(2.3, 2.6, t);
    this.core.position.set(0, 0, camZ - 220); this.core.setOpacity((0.6 + v * 0.003) * calm);
    this.star.position.set(0, 0, camZ - 220); this.star.setOpacity((0.5 + v * 0.002) * calm);

    // big type: rushes in, splits outward just before the camera reaches it
    const dist = camZ - this.zText;
    const split = smoothstep(14, 1.5, dist);
    const vis = smoothstep(0.1, 0.5, t) * (dist > 0.3 ? 1 : 0);
    this.big.visible = vis > 0.001;
    for (const g of this.big.glyphs) {
      const u = g.userData;
      g.position.set(u.bx * (1 + 2.6 * split), u.by + (u.r2 - 0.5) * 520 * split, (u.r3 - 0.3) * 600 * split);
      g.rotation.set(0, 0, (u.r4 - 0.5) * 1.2 * split);
      g.material.uniforms.opacity.value = vis;
      g.visible = vis > 0.001 && !u.blank;
    }

    this.kicker.animate(t, { in: { start: 2.35, dur: 0.5, stagger: 0.012, style: 'track' }, out: { start: 3.68, dur: 0.16, stagger: 0, style: 'fade' }, opacity: 0.9 });
    this.main.animate(t, { in: { start: 2.42, dur: 0.32, stagger: 0.045, style: 'slam', ease: ease.outQuart }, out: { start: 3.68, dur: 0.16, stagger: 0.008, style: 'fade' } });
    this.sub.animate(t, { in: { start: 2.75, dur: 0.45, stagger: 0.01, style: 'blur' }, out: { start: 3.68, dur: 0.16, stagger: 0, style: 'fade' }, opacity: 0.92 });
  }

  post(t) {
    const v = keys(t, SPEED);
    const hit = pulse(t, PASS, 0.08), u = clamp((t - PASS) / 0.4);
    return {
      bloom: 0.7, bloomThreshold: 0.9, streak: 0.42, vignette: 0.5, grain: 0.045,
      zoomBlur: 0.012 + v * 0.00012 + 0.1 * hit, ca: 0.003 + v * 0.00003 + 0.01 * hit,
      flash: 0.9 * pulse(t, PASS, 0.05), punch: 0.05 * pulse(t, 2.42, 0.1),
      shock: t >= PASS ? [0.05 + 1.5 * ease.outCubic(u), 0.07, 0, 0.035 * (1 - u)] : [0, 0.05, 0, 0],
    };
  }

  samples(t) { return t > 0.4 && t < 1.55 ? 32 : t > 1.7 && t < 2.3 ? 16 : 10; }
}
