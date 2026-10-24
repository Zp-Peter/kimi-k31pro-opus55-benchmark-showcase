// 特效：火花、樱花瓣/尘土、冲击星芒、环形冲击波、刀光拖尾、漫画拟声字。

import * as THREE from 'three';
import { canvasTexture, setLayerFX, textTexture } from '../render/toon';
import { rand, randRange } from '../util';

// ---------- 贴图 ----------

const starTex = canvasTexture(
  64,
  64,
  (c) => {
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,255,255,0.9)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g;
    c.beginPath();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const r = i % 2 ? 9 : 32;
      c.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r);
    }
    c.fill();
  },
  { mip: false },
);

const softTex = canvasTexture(
  64,
  64,
  (c) => {
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 30);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.6, 'rgba(255,255,255,0.85)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g;
    c.beginPath();
    c.arc(32, 32, 30, 0, Math.PI * 2);
    c.fill();
  },
  { mip: false },
);

const petalTex = canvasTexture(
  64,
  64,
  (c) => {
    c.fillStyle = '#fff';
    c.beginPath();
    c.moveTo(32, 6);
    c.bezierCurveTo(58, 18, 52, 50, 32, 58);
    c.bezierCurveTo(12, 50, 6, 18, 32, 6);
    c.fill();
    c.fillStyle = 'rgba(0,0,0,0.12)';
    c.beginPath();
    c.moveTo(32, 12);
    c.lineTo(33, 54);
    c.lineTo(31, 54);
    c.fill();
  },
  { mip: false },
);

const burstTex = canvasTexture(
  256,
  256,
  (c) => {
    c.translate(128, 128);
    c.fillStyle = '#fff';
    c.beginPath();
    const n = 14;
    for (let i = 0; i < n * 2; i++) {
      const a = (i / (n * 2)) * Math.PI * 2;
      const r = i % 2 ? 40 + Math.random() * 14 : 100 + Math.random() * 26;
      c.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    c.closePath();
    c.fill();
    c.globalCompositeOperation = 'destination-out';
    c.beginPath();
    c.arc(0, 0, 26, 0, Math.PI * 2);
    c.fill();
  },
  { mip: false },
);

const ringTex = canvasTexture(
  256,
  256,
  (c) => {
    c.strokeStyle = '#fff';
    c.lineWidth = 14;
    c.beginPath();
    c.arc(128, 128, 110, 0, Math.PI * 2);
    c.stroke();
    c.lineWidth = 4;
    c.beginPath();
    c.arc(128, 128, 92, 0, Math.PI * 2);
    c.stroke();
  },
  { mip: false },
);

const slashTex = canvasTexture(
  256,
  64,
  (c) => {
    const g = c.createLinearGradient(0, 0, 256, 0);
    g.addColorStop(0, 'rgba(255,255,255,0)');
    g.addColorStop(0.5, 'rgba(255,255,255,1)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g;
    c.beginPath();
    c.moveTo(0, 32);
    c.quadraticCurveTo(128, 0, 256, 32);
    c.quadraticCurveTo(128, 22, 0, 32);
    c.fill();
  },
  { mip: false },
);

// ---------- 粒子 ----------

const POINT_VS = `
attribute float aSize;
attribute vec4 aColor;
attribute float aRot;
uniform float uScale;
varying vec4 vColor;
varying float vRot;
void main() {
  vColor = aColor;
  vRot = aRot;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // 贴近镜头的粒子限制在画面高度的约 12%，避免糊满屏幕
  gl_PointSize = min(aSize * uScale / max(0.1, -mv.z), uScale * 0.18);
  gl_Position = projectionMatrix * mv;
}`;

const POINT_FS = `
uniform sampler2D map;
varying vec4 vColor;
varying float vRot;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float c = cos(vRot), s = sin(vRot);
  uv = mat2(c, -s, s, c) * uv + 0.5;
  vec4 t = texture2D(map, uv);
  gl_FragColor = vec4(vColor.rgb * t.rgb, vColor.a * t.a);
  if (gl_FragColor.a < 0.01) discard;
}`;

class PointSystem {
  points: THREE.Points;
  private pos: Float32Array;
  private col: Float32Array;
  private size: Float32Array;
  private rot: Float32Array;
  private vel: Float32Array;
  private life: Float32Array;
  private maxLife: Float32Array;
  private baseSize: Float32Array;
  private grav: Float32Array;
  private drag: Float32Array;
  private spin: Float32Array;
  private rgb: Float32Array;
  private n = 0;
  mat: THREE.ShaderMaterial;

  constructor(private cap: number, map: THREE.Texture, additive: boolean) {
    this.pos = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 4);
    this.size = new Float32Array(cap);
    this.rot = new Float32Array(cap);
    this.vel = new Float32Array(cap * 3);
    this.life = new Float32Array(cap);
    this.maxLife = new Float32Array(cap);
    this.baseSize = new Float32Array(cap);
    this.grav = new Float32Array(cap);
    this.drag = new Float32Array(cap);
    this.spin = new Float32Array(cap);
    this.rgb = new Float32Array(cap * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aRot', new THREE.BufferAttribute(this.rot, 1).setUsage(THREE.DynamicDrawUsage));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: map }, uScale: { value: 600 } },
      vertexShader: POINT_VS,
      fragmentShader: POINT_FS,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    setLayerFX(this.points);
  }

  emit(x: number, y: number, z: number, vx: number, vy: number, vz: number, color: THREE.Color, size: number, life: number, grav = 0, drag = 2) {
    let i: number;
    if (this.n < this.cap) i = this.n++;
    else i = Math.floor(rand() * this.cap);
    this.pos[i * 3] = x;
    this.pos[i * 3 + 1] = y;
    this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx;
    this.vel[i * 3 + 1] = vy;
    this.vel[i * 3 + 2] = vz;
    this.rgb[i * 3] = color.r;
    this.rgb[i * 3 + 1] = color.g;
    this.rgb[i * 3 + 2] = color.b;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.baseSize[i] = size;
    this.grav[i] = grav;
    this.drag[i] = drag;
    this.rot[i] = rand() * 6.28;
    this.spin[i] = randRange(-6, 6);
  }

  update(dt: number) {
    let i = 0;
    while (i < this.n) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        // 用最后一个覆盖
        const j = --this.n;
        if (i !== j) this.copy(j, i);
        continue;
      }
      const d = Math.exp(-this.drag[i] * dt);
      this.vel[i * 3] *= d;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt;
      this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.pos[i * 3 + 1] < 0.02) {
        this.pos[i * 3 + 1] = 0.02;
        this.vel[i * 3 + 1] *= -0.2;
      }
      const t = this.life[i] / this.maxLife[i];
      this.rot[i] += this.spin[i] * dt;
      this.size[i] = this.baseSize[i] * (0.4 + 0.6 * t);
      this.col[i * 4] = this.rgb[i * 3];
      this.col[i * 4 + 1] = this.rgb[i * 3 + 1];
      this.col[i * 4 + 2] = this.rgb[i * 3 + 2];
      this.col[i * 4 + 3] = Math.min(1, t * 1.6);
      i++;
    }
    const g = this.points.geometry;
    g.setDrawRange(0, this.n);
    (g.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('aColor') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('aSize') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('aRot') as THREE.BufferAttribute).needsUpdate = true;
  }

  private copy(from: number, to: number) {
    for (let k = 0; k < 3; k++) {
      this.pos[to * 3 + k] = this.pos[from * 3 + k];
      this.vel[to * 3 + k] = this.vel[from * 3 + k];
      this.rgb[to * 3 + k] = this.rgb[from * 3 + k];
    }
    this.life[to] = this.life[from];
    this.maxLife[to] = this.maxLife[from];
    this.baseSize[to] = this.baseSize[from];
    this.grav[to] = this.grav[from];
    this.drag[to] = this.drag[from];
    this.rot[to] = this.rot[from];
    this.spin[to] = this.spin[from];
  }

  clear() {
    this.n = 0;
  }
}

// ---------- 精灵冲击 ----------

interface SpriteFx {
  sprite: THREE.Sprite;
  t: number;
  life: number;
  s0: number;
  s1: number;
  a0: number;
  vy: number;
  active: boolean;
}

/** 相机位置与"每米距离允许的最大尺寸"：贴脸的特效按屏占比封顶 */
interface FxView {
  pos: THREE.Vector3;
  k: number;
}

class SpritePool {
  private list: SpriteFx[] = [];
  constructor(
    private scene: THREE.Object3D,
    private map: THREE.Texture,
    private additive: boolean,
    private view: FxView,
  ) {}

  spawn(x: number, y: number, z: number, color: THREE.Color | number, s0: number, s1: number, life: number, opts: { rot?: number; alpha?: number; vy?: number; map?: THREE.Texture; depthTest?: boolean } = {}) {
    let fx = this.list.find((f) => !f.active);
    if (!fx) {
      const mat = new THREE.SpriteMaterial({ map: this.map, transparent: true, depthWrite: false, blending: this.additive ? THREE.AdditiveBlending : THREE.NormalBlending });
      const sprite = new THREE.Sprite(mat);
      sprite.renderOrder = 6;
      setLayerFX(sprite);
      this.scene.add(sprite);
      fx = { sprite, t: 0, life: 1, s0: 1, s1: 1, a0: 1, vy: 0, active: false };
      this.list.push(fx);
    }
    const m = fx.sprite.material;
    m.map = opts.map ?? this.map;
    m.color.set(color as THREE.ColorRepresentation);
    m.rotation = opts.rot ?? rand() * Math.PI * 2;
    m.depthTest = opts.depthTest ?? true;
    m.needsUpdate = true;
    fx.sprite.position.set(x, y, z);
    fx.sprite.visible = true;
    const cap = Math.max(0.12, fx.sprite.position.distanceTo(this.view.pos) * this.view.k);
    s1 = Math.min(s1, cap);
    s0 = Math.min(s0, s1);
    fx.t = 0;
    fx.life = life;
    fx.s0 = s0;
    fx.s1 = s1;
    fx.a0 = opts.alpha ?? 1;
    fx.vy = opts.vy ?? 0;
    fx.active = true;
    fx.sprite.scale.setScalar(s0);
    m.opacity = fx.a0;
  }

  update(dt: number) {
    for (const f of this.list) {
      if (!f.active) continue;
      f.t += dt;
      const k = f.t / f.life;
      if (k >= 1) {
        f.active = false;
        f.sprite.visible = false;
        continue;
      }
      const e = 1 - Math.pow(1 - k, 3);
      f.sprite.scale.setScalar(f.s0 + (f.s1 - f.s0) * e);
      f.sprite.position.y += f.vy * dt;
      f.sprite.material.opacity = f.a0 * (k < 0.6 ? 1 : 1 - (k - 0.6) / 0.4);
    }
  }

  clear() {
    for (const f of this.list) {
      f.active = false;
      f.sprite.visible = false;
    }
  }
}

// ---------- 刀光拖尾 ----------

const TRAIL_VS = `
attribute float aAlpha;
attribute float aT;
varying float vAlpha;
varying float vT;
void main() {
  vAlpha = aAlpha;
  vT = aT;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const TRAIL_FS = `
uniform vec3 uColor;
uniform float uOpacity;
varying float vAlpha;
varying float vT;
void main() {
  vec3 c = mix(uColor, vec3(1.0), smoothstep(0.35, 1.0, vT) * 0.85);
  float a = vAlpha * uOpacity * smoothstep(0.0, 0.25, vT);
  gl_FragColor = vec4(c * a, a);
}`;

export class Trail {
  mesh: THREE.Mesh;
  private samples: { b: THREE.Vector3; t: THREE.Vector3; time: number }[] = [];
  private posArr: Float32Array;
  private alphaArr: Float32Array;
  private tArr: Float32Array;
  private max = 40;
  life = 0.16;
  mat: THREE.ShaderMaterial;

  constructor(color: number, additive = true) {
    const geo = new THREE.BufferGeometry();
    this.posArr = new Float32Array(this.max * 2 * 3);
    this.alphaArr = new Float32Array(this.max * 2);
    this.tArr = new Float32Array(this.max * 2);
    for (let i = 0; i < this.max; i++) {
      this.tArr[i * 2] = 0;
      this.tArr[i * 2 + 1] = 1;
    }
    const idx: number[] = [];
    for (let i = 0; i < this.max - 1; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    geo.setIndex(idx);
    geo.setAttribute('position', new THREE.BufferAttribute(this.posArr, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphaArr, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aT', new THREE.BufferAttribute(this.tArr, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: 0.9 } },
      vertexShader: TRAIL_VS,
      fragmentShader: TRAIL_FS,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 4;
    setLayerFX(this.mesh);
  }

  push(base: THREE.Vector3, tip: THREE.Vector3, time: number) {
    this.samples.push({ b: base.clone(), t: tip.clone(), time });
    if (this.samples.length > this.max) this.samples.shift();
  }

  update(time: number) {
    while (this.samples.length && time - this.samples[0].time > this.life) this.samples.shift();
    const n = this.samples.length;
    for (let i = 0; i < n; i++) {
      const s = this.samples[i];
      const age = (time - s.time) / this.life;
      const a = Math.max(0, 1 - age);
      this.posArr.set([s.b.x, s.b.y, s.b.z], i * 6);
      this.posArr.set([s.t.x, s.t.y, s.t.z], i * 6 + 3);
      this.alphaArr[i * 2] = a * a;
      this.alphaArr[i * 2 + 1] = a;
    }
    const g = this.mesh.geometry;
    g.setDrawRange(0, Math.max(0, (n - 1) * 6));
    (g.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    (g.getAttribute('aAlpha') as THREE.BufferAttribute).needsUpdate = true;
    this.mesh.visible = n > 1;
  }

  clear() {
    this.samples.length = 0;
    this.mesh.visible = false;
  }
}

// ---------- 总控 ----------

const _c = new THREE.Color();

export class FX {
  sparks: PointSystem;
  soft: PointSystem;
  petals: PointSystem;
  bursts: SpritePool;
  flat: SpritePool;
  words = new Map<string, THREE.Texture>();
  private view: FxView = { pos: new THREE.Vector3(), k: 1 };

  constructor(private scene: THREE.Scene) {
    this.sparks = new PointSystem(800, starTex, true);
    this.soft = new PointSystem(600, softTex, false);
    this.petals = new PointSystem(700, petalTex, false);
    scene.add(this.sparks.points, this.soft.points, this.petals.points);
    this.bursts = new SpritePool(scene, burstTex, true, this.view);
    this.flat = new SpritePool(scene, ringTex, false, this.view);
  }

  setScale(viewportH: number, fov: number, camPos: THREE.Vector3) {
    const tan = Math.tan((fov * Math.PI) / 360);
    const s = viewportH / (2 * tan);
    this.view.pos.copy(camPos);
    this.view.k = 2 * tan * 0.4;
    this.sparks.mat.uniforms.uScale.value = s;
    this.soft.mat.uniforms.uScale.value = s;
    this.petals.mat.uniforms.uScale.value = s;
  }

  update(dt: number) {
    this.sparks.update(dt);
    this.soft.update(dt);
    this.petals.update(dt);
    this.bursts.update(dt);
    this.flat.update(dt);
  }

  clear() {
    this.sparks.clear();
    this.soft.clear();
    this.petals.clear();
    this.bursts.clear();
    this.flat.clear();
  }

  private sparkBurst(x: number, y: number, z: number, n: number, color: number, speed: number, size: number, life: number, grav = 6) {
    _c.set(color);
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      const u = randRange(-0.6, 1);
      const s = speed * randRange(0.4, 1);
      this.sparks.emit(x, y, z, Math.cos(a) * s * Math.sqrt(1 - u * u), u * s, Math.sin(a) * s * Math.sqrt(1 - u * u), _c, size * randRange(0.6, 1.2), life * randRange(0.6, 1.1), grav, 3.5);
    }
  }

  hit(x: number, y: number, z: number, teamColor: number, heavy: boolean) {
    this.sparkBurst(x, y, z, heavy ? 22 : 12, 0xfff3c8, heavy ? 9 : 6.5, 0.16, 0.35);
    this.bursts.spawn(x, y, z, 0xffffff, 0.2, heavy ? 1.9 : 1.2, 0.16, { alpha: 1 });
    this.bursts.spawn(x, y, z, teamColor, 0.3, heavy ? 2.4 : 1.6, 0.22, { alpha: 0.75 });
    _c.set(teamColor);
    for (let i = 0; i < (heavy ? 10 : 5); i++) {
      this.soft.emit(x, y, z, randRange(-2, 2), randRange(0, 2.5), randRange(-2, 2), _c, randRange(0.1, 0.2), randRange(0.25, 0.45), 5, 4);
    }
  }

  blocked(x: number, y: number, z: number) {
    this.sparkBurst(x, y, z, 16, 0xffb347, 7, 0.13, 0.4, 9);
    this.bursts.spawn(x, y, z, 0xffd27a, 0.15, 0.8, 0.12);
  }

  parry(x: number, y: number, z: number) {
    this.sparkBurst(x, y, z, 30, 0xbfe8ff, 10, 0.18, 0.5, 4);
    this.bursts.spawn(x, y, z, 0xffffff, 0.3, 2.6, 0.2);
    this.flat.spawn(x, y, z, 0xffffff, 0.2, 3.2, 0.32, { alpha: 0.95 });
    this.flat.spawn(x, y, z, 0x7fd4ff, 0.2, 2.2, 0.28, { alpha: 0.8 });
  }

  guardBreak(x: number, y: number, z: number) {
    this.sparkBurst(x, y, z, 26, 0xff7a2f, 8, 0.16, 0.5, 9);
    this.bursts.spawn(x, y, z, 0xff8a3d, 0.3, 2.2, 0.2);
    this.flat.spawn(x, y, z, 0xff6a2a, 0.2, 2.4, 0.3, { alpha: 0.85 });
  }

  dodged(x: number, y: number, z: number) {
    _c.set(0xdde6ff);
    for (let i = 0; i < 8; i++) this.soft.emit(x + randRange(-0.3, 0.3), y + randRange(-0.4, 0.4), z + randRange(-0.3, 0.3), randRange(-1, 1), randRange(0, 1), randRange(-1, 1), _c, 0.25, 0.35, 0, 3);
  }

  kill(x: number, y: number, z: number, teamColor: number) {
    _c.set(teamColor);
    const white = new THREE.Color(0xffffff);
    for (let i = 0; i < 46; i++) {
      const a = rand() * Math.PI * 2;
      const s = randRange(1.5, 5.5);
      this.petals.emit(x + randRange(-0.3, 0.3), y + randRange(-0.6, 0.6), z + randRange(-0.3, 0.3), Math.cos(a) * s, randRange(1, 4.5), Math.sin(a) * s, i % 3 ? _c : white, randRange(0.14, 0.24), randRange(1.2, 2.2), 2.2, 1.6);
    }
    this.flat.spawn(x, y, z, teamColor, 0.3, 3.6, 0.45, { alpha: 0.9 });
    this.bursts.spawn(x, y, z, 0xffffff, 0.5, 3.2, 0.22);
    this.word('斬', x, y + 0.9, z, '#1b1622', '#fff');
  }

  dust(x: number, y: number, z: number, n = 8, radius = 0.6, color = 0xd9ccb4) {
    _c.set(color);
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      this.soft.emit(x + Math.cos(a) * radius, y + 0.1, z + Math.sin(a) * radius, Math.cos(a) * randRange(0.6, 2), randRange(0.4, 1.4), Math.sin(a) * randRange(0.6, 2), _c, randRange(0.35, 0.6), randRange(0.5, 0.9), -0.3, 2.5);
    }
  }

  glint(x: number, y: number, z: number, color: number, heavy: boolean) {
    this.bursts.spawn(x, y, z, color, 0.05, heavy ? 1.1 : 0.6, heavy ? 0.35 : 0.22, { map: starTex, rot: 0 });
  }

  word(text: string, x: number, y: number, z: number, color: string, stroke: string) {
    const key = text + color + stroke;
    let tex = this.words.get(key);
    if (!tex) {
      tex = textTexture(text, { size: 200, w: 256, h: 256, color, stroke, strokeW: 26, font: '900 200px "Hiragino Mincho ProN","Songti SC","STSong","SimSun",serif' });
      this.words.set(key, tex);
    }
    this.flat.spawn(x, y, z, 0xffffff, 0.4, 1.3, 0.7, { map: tex, rot: randRange(-0.25, 0.25), vy: 0.6, depthTest: false });
  }

  slashMark(x: number, y: number, z: number, color: number) {
    this.bursts.spawn(x, y, z, color, 0.6, 1.6, 0.14, { map: slashTex });
  }
}
