// 动画风天空：渐变天穹 + 太阳 + 卡通积云 + 远山剪影 + 远处五重塔。

import * as THREE from 'three';
import { MeshBuilder } from './builder';
import { LAYER_FX, toon, GRADIENT_2 } from './toon';
import { rand, randRange } from '../util';

const SKY_VS = `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;

const SKY_FS = `
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.2, 1.0);
  vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.22, h));
  col = mix(col, uTop, smoothstep(0.2, 0.85, h));
  float s = max(dot(d, normalize(uSunDir)), 0.0);
  col += uSunColor * smoothstep(0.9985, 0.9992, s) * 1.6;
  col += uSunColor * pow(s, 24.0) * 0.35;
  // 地平线下方稍暗
  col = mix(col, uHorizon * 0.85, smoothstep(0.0, -0.15, d.y));
  gl_FragColor = vec4(col, 1.0);
}`;

export function buildSky(scene: THREE.Scene, sunDir: THREE.Vector3) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTop: { value: new THREE.Color(0x2f7fd8) },
      uMid: { value: new THREE.Color(0x7cc0f2) },
      uHorizon: { value: new THREE.Color(0xffe2bc) },
      uSunDir: { value: sunDir.clone() },
      uSunColor: { value: new THREE.Color(0xfff2c6) },
    },
    vertexShader: SKY_VS,
    fragmentShader: SKY_FS,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(800, 32, 16), mat);
  sky.layers.set(LAYER_FX);
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  scene.add(sky);

  // 卡通积云：一团团白色球体，背光面带一点紫灰
  const cloudMat = toon(0xffffff, { gradient: GRADIENT_2, emissive: 0x3a3f66, emissiveIntensity: 0.35 });
  const cb = new MeshBuilder();
  const sph = new THREE.IcosahedronGeometry(1, 2);
  for (let c = 0; c < 14; c++) {
    const a = (c / 14) * Math.PI * 2 + randRange(-0.15, 0.15);
    const dist = randRange(330, 470);
    const cx = Math.cos(a) * dist;
    const cz = Math.sin(a) * dist;
    const cy = randRange(70, 150);
    const n = 6 + Math.floor(rand() * 6);
    const scale = randRange(16, 30);
    for (let i = 0; i < n; i++) {
      const ox = randRange(-2.2, 2.2) * scale;
      const oy = Math.abs(randRange(-0.4, 1.0)) * scale * 0.6;
      const oz = randRange(-0.8, 0.8) * scale;
      const s = scale * randRange(0.6, 1.15) * (1 - Math.abs(ox) / (3.2 * scale));
      cb.add(sph, cloudMat, cx + ox, cy + oy, cz + oz, 0, 0, 0, s, s * 0.78, s);
    }
  }
  const clouds = cb.build({ cast: false, receive: false });
  scene.add(clouds);

  // 远山：三层不同色相的山脊，越远越淡
  const layers = [
    { r: 230, h: [40, 80], color: 0x7d9cc4, n: 20 },
    { r: 320, h: [70, 130], color: 0x9db4d8, n: 16 },
    { r: 430, h: [100, 180], color: 0xb8cae6, n: 12 },
  ];
  const mb = new MeshBuilder();
  for (const L of layers) {
    const m = toon(L.color, { gradient: GRADIENT_2 });
    for (let i = 0; i < L.n; i++) {
      const a = (i / L.n) * Math.PI * 2 + randRange(-0.1, 0.1);
      const h = randRange(L.h[0], L.h[1]);
      const w = randRange(70, 120);
      const cone = new THREE.ConeGeometry(w, h, 6, 1);
      mb.add(cone, m, Math.cos(a) * L.r, h / 2 - 6, Math.sin(a) * L.r, 0, rand() * 3, 0);
    }
  }
  // 一座带雪顶的主峰
  const fujiA = -2.2;
  const fx = Math.cos(fujiA) * 520;
  const fz = Math.sin(fujiA) * 520;
  mb.add(new THREE.ConeGeometry(190, 210, 24, 1), toon(0x8aa4cf, { gradient: GRADIENT_2 }), fx, 99, fz);
  mb.add(new THREE.ConeGeometry(62, 70, 24, 1), toon(0xf6f8ff, { gradient: GRADIENT_2 }), fx, 172, fz);
  scene.add(mb.build({ cast: false, receive: false }));

  // 远处五重塔
  const pagoda = new MeshBuilder();
  const red = toon(0xa8443a);
  const roof = toon(0x3c4458);
  const px = 95;
  const pz = -120;
  let y = 0;
  for (let i = 0; i < 5; i++) {
    const s = 1 - i * 0.12;
    pagoda.box(red, 9 * s, 5, 9 * s, px, y, pz);
    y += 5;
    pagoda.add(new THREE.ConeGeometry(10 * s, 3, 4), roof, px, y + 1.2, pz, 0, Math.PI / 4, 0);
    y += 1.5;
  }
  pagoda.cyl(toon(0xd9a74a), 0.5, 0.5, 12, px, y, pz, 6);
  scene.add(pagoda.build({ cast: false, receive: false }));
  return { sky, mat };
}
