// fx.js — particle effects: hoof dust, splashes, sparks and drifting peach petals.
import * as THREE from 'three';
import { Rand, TAU } from './util.js';
import { softDotTexture, glowTexture, petalTexture } from './textures.js';

const vert = /* glsl */`
attribute float aSize; attribute float aAlpha; attribute vec3 aColor; attribute float aRot;
varying float vAlpha; varying vec3 vColor; varying float vRot;
uniform float uScale;
#include <fog_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / max(-mvPosition.z, 0.1);
  gl_Position = projectionMatrix * mvPosition;
  vAlpha = aAlpha * smoothstep(1.2, 5.0, -mvPosition.z); vColor = aColor; vRot = aRot;
  #include <fog_vertex>
}`;
const frag = /* glsl */`
uniform sampler2D uMap;
varying float vAlpha; varying vec3 vColor; varying float vRot;
#include <fog_pars_fragment>
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float c = cos(vRot), s = sin(vRot);
  uv = mat2(c, -s, s, c) * uv + 0.5;
  vec4 t = texture2D(uMap, uv);
  gl_FragColor = vec4(vColor * t.rgb, t.a * vAlpha);
  if (gl_FragColor.a < 0.01) discard;
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

function pointsMaterial(map, blending) {
  return new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uScale: { value: 500 } }]),
    vertexShader: vert, fragmentShader: frag,
    transparent: true, depthWrite: false, blending, fog: true,
  });
}

export class ParticlePool {
  constructor(scene, count, map, blending = THREE.NormalBlending) {
    this.n = count; this.cursor = 0;
    const f = (k) => new Float32Array(count * k);
    this.pos = f(3); this.col = f(3); this.size = f(1); this.alpha = f(1); this.rot = f(1);
    this.vel = f(3); this.life = f(1); this.max = f(1); this.size0 = f(1); this.grow = f(1); this.drag = f(1); this.grav = f(1); this.spin = f(1); this.a0 = f(1);
    const g = (this.geo = new THREE.BufferGeometry());
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aRot', new THREE.BufferAttribute(this.rot, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = pointsMaterial(map, blending);
    this.mat.uniforms.uMap = { value: map };
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 3;
    scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, size, life, color, o = {}) {
    const i = this.cursor; this.cursor = (i + 1) % this.n;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.col[i * 3] = color.r; this.col[i * 3 + 1] = color.g; this.col[i * 3 + 2] = color.b;
    this.size0[i] = size; this.size[i] = size; this.life[i] = life; this.max[i] = life;
    this.grow[i] = o.grow ?? 1.5; this.drag[i] = o.drag ?? 1.5; this.grav[i] = o.grav ?? 0;
    this.spin[i] = o.spin ?? 0; this.rot[i] = o.rot ?? Math.random() * TAU; this.a0[i] = o.alpha ?? 0.6;
  }
  update(dt, scale) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.size[i] = 0; this.alpha[i] = 0; continue; }
      this.life[i] -= dt;
      const t = 1 - Math.max(this.life[i], 0) / this.max[i];
      const k = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= k; this.vel[i * 3 + 2] *= k;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * k - this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.size[i] = this.size0[i] * (1 + this.grow[i] * t);
      this.alpha[i] = this.a0[i] * Math.pow(1 - t, 1.4) * Math.min(1, t * 10);
      this.rot[i] += this.spin[i] * dt;
    }
    const a = this.geo.attributes;
    a.position.needsUpdate = a.aColor.needsUpdate = a.aSize.needsUpdate = a.aAlpha.needsUpdate = a.aRot.needsUpdate = true;
    this.mat.uniforms.uScale.value = scale;
  }
}

// Peach petals drifting through the air in a box that follows the camera.
export class Petals {
  constructor(scene, count = 420) {
    const rnd = new Rand(5);
    this.n = count; this.box = 110;
    this.pos = new Float32Array(count * 3); this.rot = new Float32Array(count); this.size = new Float32Array(count);
    this.alpha = new Float32Array(count); this.col = new Float32Array(count * 3);
    this.vel = []; this.spin = [];
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      this.pos[i * 3] = rnd.range(-55, 55); this.pos[i * 3 + 1] = rnd.range(-5, 30); this.pos[i * 3 + 2] = rnd.range(-55, 55);
      this.vel.push([rnd.range(0.6, 1.8), -rnd.range(0.6, 1.3), rnd.range(-0.6, 0.9)]);
      this.spin.push(rnd.range(-2.5, 2.5));
      this.size[i] = rnd.range(0.22, 0.4); this.alpha[i] = rnd.range(0.65, 0.95); this.rot[i] = rnd.range(0, TAU);
      c.setHex(rnd.chance(0.25) ? 0xffffff : 0xffd8e2);
      this.col[i * 3] = c.r; this.col[i * 3 + 1] = c.g; this.col[i * 3 + 2] = c.b;
    }
    const g = (this.geo = new THREE.BufferGeometry());
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1));
    g.setAttribute('aRot', new THREE.BufferAttribute(this.rot, 1));
    const map = petalTexture();
    this.mat = pointsMaterial(map, THREE.NormalBlending);
    this.mat.uniforms.uMap = { value: map };
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }
  update(dt, cam, t, scale) {
    const B = this.box, H = B / 2;
    for (let i = 0; i < this.n; i++) {
      const v = this.vel[i];
      let x = this.pos[i * 3] + (v[0] + Math.sin(t * 0.9 + i) * 0.6) * dt;
      let y = this.pos[i * 3 + 1] + v[1] * dt;
      let z = this.pos[i * 3 + 2] + (v[2] + Math.cos(t * 0.7 + i * 1.3) * 0.5) * dt;
      if (x - cam.x > H) x -= B; else if (x - cam.x < -H) x += B;
      if (z - cam.z > H) z -= B; else if (z - cam.z < -H) z += B;
      if (y < cam.y - 8) y += 36; else if (y > cam.y + 30) y -= 36;
      this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
      this.rot[i] += this.spin[i] * dt;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aRot.needsUpdate = true;
    this.mat.uniforms.uScale.value = scale;
  }
}

export class FX {
  constructor(scene) {
    this.dust = new ParticlePool(scene, 1800, softDotTexture(), THREE.NormalBlending);
    this.splash = new ParticlePool(scene, 900, softDotTexture(), THREE.NormalBlending);
    this.spark = new ParticlePool(scene, 900, glowTexture(), THREE.AdditiveBlending);
    this.petals = new Petals(scene);
    this.c = { dust: new THREE.Color(0xb59a72), grass: new THREE.Color(0x8d9a5e), water: new THREE.Color(0xe9f1f0), gold: new THREE.Color(0xffc861), green: new THREE.Color(0xc8f07a) };
    this.tmp = new THREE.Color();
  }
  hoof(x, y, z, vx, vz, surface, speed) {
    const r = Math.random;
    if (surface === 'water' || surface === 'paddy') {
      for (let k = 0; k < 3; k++) this.splash.emit(x + (r() - 0.5), y + 0.1, z + (r() - 0.5), vx * 0.2 + (r() - 0.5) * 3, 2.5 + r() * 3.5, vz * 0.2 + (r() - 0.5) * 3, 0.35 + r() * 0.3, 0.7 + r() * 0.3, this.c.water, { grav: 12, drag: 0.5, grow: 0.6, alpha: 0.85 });
      return;
    }
    const col = surface === 'grass' ? this.c.grass : this.c.dust;
    this.dust.emit(x + (r() - 0.5) * 0.6, y + 0.15, z + (r() - 0.5) * 0.6, vx * 0.15 + (r() - 0.5) * 1.5, 0.6 + r() * 1.2, vz * 0.15 + (r() - 0.5) * 1.5, 0.7 + r() * 0.6 + speed * 0.02, 1.0 + r() * 0.8, col, { grow: 3.2, drag: 1.8, alpha: surface === 'grass' ? 0.28 : 0.45, spin: (r() - 0.5) });
  }
  sparks(x, y, z, color, n = 4, spd = 4) {
    const r = Math.random;
    for (let k = 0; k < n; k++) this.spark.emit(x, y, z, (r() - 0.5) * spd, r() * spd * 0.8, (r() - 0.5) * spd, 0.35 + r() * 0.35, 0.35 + r() * 0.35, color, { grav: 6, drag: 1, grow: -0.6, alpha: 1 });
  }
  burst(x, y, z, color) {
    const r = Math.random;
    for (let k = 0; k < 26; k++) {
      const a = r() * TAU, s = 3 + r() * 5;
      this.spark.emit(x, y, z, Math.cos(a) * s, 1 + r() * 5, Math.sin(a) * s, 0.5 + r() * 0.5, 0.6 + r() * 0.4, color, { grav: 5, drag: 1.5, grow: -0.5, alpha: 1 });
    }
  }
  update(dt, cam, t, scale) {
    this.dust.update(dt, scale); this.splash.update(dt, scale); this.spark.update(dt, scale);
    this.petals.update(dt, cam, t, scale);
  }
}
