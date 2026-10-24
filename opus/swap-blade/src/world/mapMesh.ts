// 地图美术：庭院围墙（白壁 + 黑瓦 + 木柱）、门楼与暖帘、角门鸟居、出生木台与武器架、
// 中央石台与战鼓、廊道凉亭/竹丛/石灯笼、四色树林（松/竹/枫/樱）、地面手绘贴图。

import * as THREE from 'three';
import { MAP, TEAMS, ZONE_META } from '../config';
import { MeshBuilder } from '../render/builder';
import { canvasTexture, textTexture, toon, toonUnique, setLayerFX, GRADIENT_2 } from '../render/toon';
import { rand, randRange, rotXZ } from '../util';
import type { Zone } from './layout';

const C = {
  plaster: 0xf5efe3,
  stone: 0xb8afa2,
  stoneDark: 0x8d8478,
  wood: 0x7a4e35,
  woodDark: 0x48302a,
  tile: 0x3f4960,
  tileLight: 0x56617c,
  bengara: 0xa8443a,
  deck: 0xb58a5c,
  gold: 0xd9a74a,
};

export interface MapVisuals {
  root: THREE.Group;
  zoneBanners: THREE.MeshToonMaterial[];
  overlays: THREE.Mesh[];
  barriers: THREE.Mesh[];
  zoneLabels: THREE.Sprite[];
  beacon: THREE.Mesh;
  setZoneBuilder(zone: number, team: number | null): void;
}

// ---------------- 地面贴图 ----------------

function drawGround(zones: Zone[]): THREE.CanvasTexture {
  const S = 2048;
  const PX = S / 60;
  const X = (x: number) => (x + 30) * PX;
  const Z = (z: number) => (z + 30) * PX;
  return canvasTexture(
    S,
    S,
    (c) => {
      // 石板路
      c.fillStyle = '#d9cbb0';
      c.fillRect(0, 0, S, S);
      for (let i = -30; i < 30; i++) {
        for (let j = -30; j < 30; j++) {
          const v = 0.9 + ((i * 928371 + j * 1237) % 17) / 170;
          const r = Math.round(217 * v);
          const g = Math.round(203 * v);
          const b = Math.round(176 * v);
          c.fillStyle = `rgb(${r},${g},${b})`;
          c.fillRect(X(i) + 1.5, Z(j) + 1.5, PX - 3, PX - 3);
        }
      }
      c.strokeStyle = 'rgba(120,100,80,0.35)';
      c.lineWidth = 2;
      for (let i = -30; i <= 30; i++) {
        c.beginPath();
        c.moveTo(X(i), 0);
        c.lineTo(X(i), S);
        c.stroke();
        c.beginPath();
        c.moveTo(0, Z(i));
        c.lineTo(S, Z(i));
        c.stroke();
      }
      // 广场同心圆
      c.strokeStyle = 'rgba(110,90,70,0.45)';
      for (const r of [5.2, 6.4, 7.6]) {
        c.lineWidth = r === 6.4 ? 6 : 3;
        c.beginPath();
        c.arc(X(0), Z(0), r * PX, 0, Math.PI * 2);
        c.stroke();
      }
      // 各庭院：耙纹枯山水砂地
      const tints = ['#e9e8de', '#ecebd9', '#efe5d6', '#f1e6e6'];
      zones.forEach((zn, zi) => {
        const r = zn.rect;
        c.fillStyle = tints[zi];
        c.fillRect(X(r.minX), Z(r.minZ), (r.maxX - r.minX) * PX, (r.maxZ - r.minZ) * PX);
        c.save();
        c.beginPath();
        c.rect(X(r.minX), Z(r.minZ), (r.maxX - r.minX) * PX, (r.maxZ - r.minZ) * PX);
        c.clip();
        c.strokeStyle = 'rgba(150,140,120,0.32)';
        c.lineWidth = 2;
        const ox = X(zn.padCenter.x);
        const oz = Z(zn.padCenter.z);
        for (let k = 4; k < 30; k += 0.55) {
          c.beginPath();
          c.arc(ox, oz, k * PX, 0, Math.PI * 2);
          c.stroke();
        }
        c.restore();
        // 出生木台
        const p = zn.pad;
        c.fillStyle = '#b58a5c';
        c.fillRect(X(p.minX), Z(p.minZ), (p.maxX - p.minX) * PX, (p.maxZ - p.minZ) * PX);
        c.strokeStyle = 'rgba(80,50,30,0.5)';
        c.lineWidth = 3;
        const horizontal = zi % 2 === 0;
        for (let k = 0; k <= 12; k++) {
          c.beginPath();
          if (horizontal) {
            c.moveTo(X(p.minX), Z(p.minZ) + k * PX * 0.5);
            c.lineTo(X(p.maxX), Z(p.minZ) + k * PX * 0.5);
          } else {
            c.moveTo(X(p.minX) + k * PX * 0.5, Z(p.minZ));
            c.lineTo(X(p.minX) + k * PX * 0.5, Z(p.maxZ));
          }
          c.stroke();
        }
        c.strokeStyle = '#3a2a22';
        c.lineWidth = 6;
        c.strokeRect(X(p.minX) + 3, Z(p.minZ) + 3, (p.maxX - p.minX) * PX - 6, (p.maxZ - p.minZ) * PX - 6);
        // 门口石径（保留区）
        c.fillStyle = 'rgba(196,184,160,0.95)';
        for (const nb of zn.noBuild.slice(1)) {
          c.fillRect(X(nb.minX), Z(nb.minZ), (nb.maxX - nb.minX) * PX, (nb.maxZ - nb.minZ) * PX);
        }
        c.strokeStyle = 'rgba(120,100,80,0.45)';
        c.lineWidth = 2;
        for (const nb of zn.noBuild.slice(1)) {
          for (let i = nb.minX; i < nb.maxX; i++)
            for (let j = nb.minZ; j < nb.maxZ; j++) c.strokeRect(X(i) + 4, Z(j) + 4, PX - 8, PX - 8);
        }
        // 区域边界
        c.strokeStyle = '#2b2226';
        c.lineWidth = 7;
        c.strokeRect(X(r.minX) + 4, Z(r.minZ) + 4, (r.maxX - r.minX) * PX - 8, (r.maxZ - r.minZ) * PX - 8);
        c.setLineDash([22, 14]);
        c.lineWidth = 3;
        c.strokeStyle = 'rgba(43,34,38,0.6)';
        c.strokeRect(X(r.minX) + 16, Z(r.minZ) + 16, (r.maxX - r.minX) * PX - 32, (r.maxZ - r.minZ) * PX - 32);
        c.setLineDash([]);
        // 大字母（朝向区域内侧，站在出生台看过去是正的）
        c.save();
        c.translate(X(zn.center.x + zn.inward.x * 1.5), Z(zn.center.z + zn.inward.z * 1.5));
        // inward (sx, sz) → 让字母“上方”指向 inward 方向
        const ang = Math.atan2(zn.inward.z, zn.inward.x) + Math.PI / 2;
        c.rotate(ang);
        c.font = `900 ${PX * 6.5}px "PingFang SC","Microsoft YaHei",sans-serif`;
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillStyle = 'rgba(43,34,38,0.16)';
        c.fillText(zn.letter, 0, 0);
        c.font = `700 ${PX * 1.4}px "PingFang SC","Microsoft YaHei",sans-serif`;
        c.fillStyle = 'rgba(43,34,38,0.22)';
        c.fillText(ZONE_META[zi].name, 0, PX * 4.3);
        c.restore();
      });
    },
    { mip: true },
  );
}

/** 建造阶段叠加层：1m 网格 + 保留区斜线 + 发光边界 */
function overlayTexture(zone: Zone): THREE.CanvasTexture {
  const r = zone.rect;
  const W = r.maxX - r.minX;
  const H = r.maxZ - r.minZ;
  const PX = 48;
  return canvasTexture(
    W * PX,
    H * PX,
    (c) => {
      c.clearRect(0, 0, W * PX, H * PX);
      c.strokeStyle = 'rgba(255,255,255,0.55)';
      c.lineWidth = 2;
      for (let i = 0; i <= W; i++) {
        c.beginPath();
        c.moveTo(i * PX, 0);
        c.lineTo(i * PX, H * PX);
        c.stroke();
      }
      for (let j = 0; j <= H; j++) {
        c.beginPath();
        c.moveTo(0, j * PX);
        c.lineTo(W * PX, j * PX);
        c.stroke();
      }
      for (const nb of zone.noBuild) {
        const x0 = (nb.minX - r.minX) * PX;
        const z0 = (nb.minZ - r.minZ) * PX;
        const w = (nb.maxX - nb.minX) * PX;
        const h = (nb.maxZ - nb.minZ) * PX;
        c.fillStyle = 'rgba(255,60,60,0.22)';
        c.fillRect(x0, z0, w, h);
        c.save();
        c.beginPath();
        c.rect(x0, z0, w, h);
        c.clip();
        c.strokeStyle = 'rgba(255,70,70,0.75)';
        c.lineWidth = 5;
        for (let k = -h; k < w + h; k += 22) {
          c.beginPath();
          c.moveTo(x0 + k, z0);
          c.lineTo(x0 + k + h, z0 + h);
          c.stroke();
        }
        c.restore();
        c.strokeStyle = 'rgba(255,80,80,0.95)';
        c.lineWidth = 4;
        c.strokeRect(x0 + 2, z0 + 2, w - 4, h - 4);
      }
      c.strokeStyle = 'rgba(255,240,140,1)';
      c.lineWidth = 10;
      c.strokeRect(5, 5, W * PX - 10, H * PX - 10);
    },
    { mip: true },
  );
}

const nameCanvasCache = new Map<string, THREE.CanvasTexture>();
function signTexture(letter: string, name: string): THREE.CanvasTexture {
  const key = letter + name;
  const hit = nameCanvasCache.get(key);
  if (hit) return hit;
  const t = canvasTexture(
    256,
    128,
    (c) => {
      c.fillStyle = '#2a2026';
      c.fillRect(0, 0, 256, 128);
      c.strokeStyle = '#d9a74a';
      c.lineWidth = 6;
      c.strokeRect(6, 6, 244, 116);
      c.fillStyle = '#f6efe2';
      c.font = '900 84px "PingFang SC","Microsoft YaHei",sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(letter, 70, 66);
      c.font = '900 52px "Hiragino Mincho ProN","Songti SC","SimSun",serif';
      c.fillText(name, 172, 66);
    },
    { mip: false },
  );
  nameCanvasCache.set(key, t);
  return t;
}

function norenTexture(letter: string): THREE.CanvasTexture {
  return canvasTexture(
    256,
    192,
    (c) => {
      c.fillStyle = '#2d3b63';
      c.fillRect(0, 0, 256, 192);
      c.fillStyle = 'rgba(0,0,0,0.25)';
      for (let i = 1; i < 4; i++) c.fillRect((256 / 4) * i - 2, 30, 4, 162);
      c.fillStyle = '#f2ead8';
      c.beginPath();
      c.arc(128, 100, 52, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = '#2d3b63';
      c.font = '900 72px "PingFang SC","Microsoft YaHei",sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(letter, 128, 104);
    },
    { mip: false },
  );
}

const drumTex = canvasTexture(
  256,
  256,
  (c) => {
    c.fillStyle = '#efe2c4';
    c.beginPath();
    c.arc(128, 128, 126, 0, Math.PI * 2);
    c.fill();
    // 三つ巴
    c.translate(128, 128);
    for (let i = 0; i < 3; i++) {
      c.rotate((Math.PI * 2) / 3);
      c.fillStyle = '#b8372e';
      c.beginPath();
      c.arc(0, -40, 34, 0, Math.PI * 2);
      c.fill();
      c.beginPath();
      c.moveTo(34, -40);
      c.quadraticCurveTo(40, 30, -40, 52);
      c.quadraticCurveTo(20, 20, -34, -40);
      c.fill();
    }
  },
  { mip: false },
);

// ---------------- 小物件 ----------------

function addLantern(b: MeshBuilder, x: number, z: number, light: THREE.Material) {
  const s = toon(C.stone);
  const sd = toon(C.stoneDark);
  b.cyl(sd, 0.38, 0.42, 0.25, x, 0, z, 8);
  b.cyl(s, 0.13, 0.17, 0.85, x, 0.25, z, 8);
  b.cyl(sd, 0.34, 0.3, 0.14, x, 1.1, z, 6);
  b.box(light, 0.42, 0.38, 0.42, x, 1.24, z, Math.PI / 4);
  b.add(new THREE.ConeGeometry(0.48, 0.34, 6), s, x, 1.79, z);
  b.add(new THREE.SphereGeometry(0.08, 6, 4), sd, x, 2.0, z);
}

function addRock(b: MeshBuilder, x: number, z: number, r: number, h: number) {
  const g = new THREE.DodecahedronGeometry(1, 0);
  b.add(g, toon(0x9a958c), x, h * 0.45, z, rand(), rand(), rand(), r * 1.05, h * 0.62, r);
  b.add(g, toon(0x8a857c), x + r * 0.5, h * 0.2, z - r * 0.3, rand(), rand(), rand(), r * 0.55, h * 0.35, r * 0.5);
}

function addBamboo(b: MeshBuilder, x: number, z: number, r: number) {
  const stem = toon(0x8db35a);
  const node = toon(0x6e9444);
  const leaf = toon(0x7fae4c, { gradient: GRADIENT_2 });
  for (let i = 0; i < 9; i++) {
    const a = rand() * Math.PI * 2;
    const d = Math.sqrt(rand()) * r * 0.8;
    const px = x + Math.cos(a) * d;
    const pz = z + Math.sin(a) * d;
    const h = randRange(5, 7.5);
    const tilt = randRange(-0.06, 0.06);
    b.cyl(stem, 0.07, 0.08, h, px, 0, pz, 6, tilt, tilt);
    for (let y = 1; y < h; y += 1.1) b.cyl(node, 0.085, 0.085, 0.06, px, y, pz, 6);
    for (let k = 0; k < 3; k++) {
      b.add(new THREE.ConeGeometry(0.5, 1.4, 5), leaf, px + randRange(-0.5, 0.5), h - 0.3 - k * 0.9, pz + randRange(-0.5, 0.5), randRange(-0.8, 0.8), rand() * 3, randRange(-0.8, 0.8));
    }
  }
}

function addTree(b: MeshBuilder, x: number, z: number, kind: 'pine' | 'bamboo' | 'maple' | 'sakura', scale = 1) {
  if (kind === 'bamboo') {
    addBamboo(b, x, z, 1.6 * scale);
    return;
  }
  const trunk = toon(kind === 'pine' ? 0x5b4636 : 0x5e3f33);
  const h = (kind === 'pine' ? 5.5 : 3.6) * scale;
  b.cyl(trunk, 0.18 * scale, 0.32 * scale, h, x, 0, z, 7, randRange(-0.08, 0.08), randRange(-0.08, 0.08));
  const col = kind === 'pine' ? 0x3f6b4a : kind === 'maple' ? 0xe8763a : 0xffbfd3;
  const col2 = kind === 'pine' ? 0x335a3d : kind === 'maple' ? 0xd45a2c : 0xffa6c4;
  const leaf = toon(col, { gradient: GRADIENT_2 });
  const leaf2 = toon(col2, { gradient: GRADIENT_2 });
  const sph = new THREE.IcosahedronGeometry(1, 1);
  if (kind === 'pine') {
    for (let i = 0; i < 4; i++) {
      const y = h * 0.55 + i * 0.9 * scale;
      const r = (2.2 - i * 0.45) * scale;
      b.add(sph, i % 2 ? leaf2 : leaf, x + randRange(-0.4, 0.4), y, z + randRange(-0.4, 0.4), 0, rand(), 0, r, 0.55 * scale, r);
    }
  } else {
    const n = 7;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const d = randRange(0.8, 1.6) * scale;
      const s = randRange(1.1, 1.6) * scale;
      b.add(sph, i % 3 ? leaf : leaf2, x + Math.cos(a) * d, h + randRange(-0.2, 0.9) * scale, z + Math.sin(a) * d, rand(), rand(), rand(), s, s * 0.85, s);
    }
    b.add(sph, leaf, x, h + 1.0 * scale, z, 0, 0, 0, 1.7 * scale, 1.3 * scale, 1.7 * scale);
  }
}

// ---------------- 构建 ----------------

export function buildMapVisuals(scene: THREE.Scene, zones: Zone[]): MapVisuals {
  const root = new THREE.Group();
  scene.add(root);

  // 地面
  const groundTex = drawGround(zones);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), toon(0xffffff, { map: groundTex }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  root.add(ground);
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), toon(0x9cbf6e, { gradient: GRADIENT_2 }));
  grass.rotation.x = -Math.PI / 2;
  grass.position.y = -0.02;
  grass.receiveShadow = true;
  root.add(grass);

  const plaster = toon(C.plaster);
  const stone = toon(C.stone);
  const stoneDark = toon(C.stoneDark);
  const wood = toon(C.wood);
  const woodDark = toon(C.woodDark);
  const tile = toon(C.tile);
  const tileL = toon(C.tileLight);
  const beng = toon(C.bengara);
  const gold = toon(C.gold);
  const lanternLight = toon(0xfff1c0, { emissive: 0xffc56a, emissiveIntensity: 0.9 });

  // 一段墙：沿 x 或 z 方向
  const wall = (b: MeshBuilder, x0: number, x1: number, z0: number, z1: number, h: number) => {
    const alongX = x1 - x0 > z1 - z0;
    const len = alongX ? x1 - x0 : z1 - z0;
    const th = alongX ? z1 - z0 : x1 - x0;
    const cx = (x0 + x1) / 2;
    const cz = (z0 + z1) / 2;
    const put = (m: THREE.Material, l: number, hh: number, t: number, y0: number, along = 0) => {
      if (alongX) b.box(m, l, hh, t, cx + along, y0, cz);
      else b.box(m, t, hh, l, cx, y0, cz + along);
    };
    put(stoneDark, len, 0.55, th + 0.06, 0);
    put(plaster, len, h - 0.85, th - 0.1, 0.55);
    put(woodDark, len, 0.14, th - 0.02, h - 1.2);
    // 黑瓦压顶（两层出檐）
    put(tile, len + 0.1, 0.18, th + 0.5, h - 0.3);
    put(tileL, len + 0.1, 0.16, th + 0.18, h - 0.12);
    put(tile, len + 0.1, 0.1, 0.22, h + 0.04);
    const n = Math.max(1, Math.round(len / 3));
    for (let i = 0; i <= n; i++) {
      const a = -len / 2 + (len * i) / n;
      const aa = i === 0 ? a + 0.15 : i === n ? a - 0.15 : a;
      put(woodDark, 0.26, h - 0.85, th + 0.04, 0.55, aa);
    }
  };

  // 外围高墙
  {
    const b = new MeshBuilder();
    wall(b, -30, 30, -30, -29, MAP.outerH);
    wall(b, -30, 30, 29, 30, MAP.outerH);
    wall(b, -30, -29, -29, 29, MAP.outerH);
    wall(b, 29, 30, -29, 29, MAP.outerH);
    root.add(b.build());
  }

  const zoneBanners: THREE.MeshToonMaterial[] = [];
  const overlays: THREE.Mesh[] = [];
  const barriers: THREE.Mesh[] = [];
  const zoneLabels: THREE.Sprite[] = [];

  for (const zn of zones) {
    const k = zn.k;
    const g = new THREE.Group();
    g.rotation.y = (-k * Math.PI) / 2;
    root.add(g);
    const b = new MeshBuilder();
    // A 区坐标下的围墙
    wall(b, -9, -8, -29, -22, MAP.wallH);
    wall(b, -9, -8, -18, -12, MAP.wallH);
    wall(b, -29, -22, -9, -8, MAP.wallH);
    wall(b, -18, -12, -9, -8, MAP.wallH);

    // 侧门：门柱 + 门楼屋顶
    const gate = (alongZ: boolean) => {
      // alongZ：墙沿 z 方向（东墙），门洞 z ∈ [-22,-18]
      const P = (u: number, v: number): [number, number] => (alongZ ? [-8.5 + v, u] : [u, -8.5 + v]);
      for (const u of [-22.2, -17.8]) {
        const [x, z] = P(u, 0);
        b.box(woodDark, 0.45, 3.9, 0.45, x, 0, z);
        b.box(stoneDark, 0.6, 0.3, 0.6, x, 0, z);
      }
      // 横梁与屋顶
      const [cx, cz] = P(-20, 0);
      const lenX = alongZ ? 1.6 : 5.4;
      const lenZ = alongZ ? 5.4 : 1.6;
      b.box(woodDark, alongZ ? 0.5 : 4.8, 0.3, alongZ ? 4.8 : 0.5, cx, 3.25, cz);
      b.box(tile, lenX + 0.4, 0.22, lenZ + 0.4, cx, 3.85, cz);
      b.box(tileL, alongZ ? 1.2 : 5.6, 0.22, alongZ ? 5.6 : 1.2, cx, 4.07, cz);
      b.box(tile, alongZ ? 0.35 : 5.8, 0.18, alongZ ? 5.8 : 0.35, cx, 4.29, cz);
      b.box(gold, alongZ ? 0.12 : 0.9, 0.5, alongZ ? 0.9 : 0.12, cx + (alongZ ? 0.32 : 0), 3.3, cz + (alongZ ? 0 : 0.32));
    };
    gate(true);
    gate(false);

    // 角门鸟居（斜 45°）
    {
      const p1: [number, number] = [-8.5, -11.7];
      const p2: [number, number] = [-11.7, -8.5];
      for (const [x, z] of [p1, p2]) {
        b.cyl(beng, 0.2, 0.24, 3.6, x, 0, z, 10);
        b.cyl(woodDark, 0.3, 0.3, 0.4, x, 0, z, 10);
      }
      const cx = (p1[0] + p2[0]) / 2;
      const cz = (p1[1] + p2[1]) / 2;
      const len = Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
      const ang = Math.atan2(p1[1] - p2[1], p1[0] - p2[0]);
      b.add(new THREE.BoxGeometry(len + 0.6, 0.22, 0.3), beng, cx, 3.0, cz, 0, -ang, 0);
      b.add(new THREE.BoxGeometry(len + 1.6, 0.26, 0.4), woodDark, cx, 3.62, cz, 0, -ang, 0);
      b.add(new THREE.BoxGeometry(len + 1.2, 0.18, 0.34), beng, cx, 3.42, cz, 0, -ang, 0);
      b.add(new THREE.BoxGeometry(0.16, 0.42, 0.2), woodDark, cx, 3.18, cz, 0, -ang, 0);
    }

    // 出生木台边框 + 武器架
    {
      b.box(wood, 6, 0.06, 0.18, -26, 0, -23.09);
      b.box(wood, 0.18, 0.06, 6, -23.09, 0, -26);
      // 武器架（商店交互点）
      b.box(woodDark, 2.2, 0.12, 0.42, -26, 0.0, -28.78);
      b.box(woodDark, 0.12, 1.7, 0.12, -27.0, 0, -28.75);
      b.box(woodDark, 0.12, 1.7, 0.12, -25.0, 0, -28.75);
      b.box(wood, 2.2, 0.1, 0.2, -26, 1.5, -28.75);
      b.box(wood, 2.2, 0.1, 0.2, -26, 0.85, -28.75);
      b.box(beng, 2.3, 0.18, 0.12, -26, 1.62, -28.7);
      // 架上展示的刀
      b.add(new THREE.BoxGeometry(1.6, 0.05, 0.03), toon(0xdfe6ee), -26, 1.3, -28.62, 0, 0, 0.05);
      b.add(new THREE.BoxGeometry(1.8, 0.05, 0.03), toon(0x5c2a24), -26, 1.05, -28.62, 0, 0, -0.04);
      b.add(new THREE.BoxGeometry(0.3, 0.32, 0.05), toon(0x3a3d46), -25.2, 0.55, -28.62, 0, 0, 0.2);
    }

    // 区域旗（显示建造者队伍颜色）
    const banner = toonUnique(0xe8e2d6, { rim: 0xffffff, rimStrength: 0.2 });
    zoneBanners.push(banner);
    for (const [x, z] of [
      [-23.4, -28.4],
      [-28.4, -23.4],
      [-12.6, -9.6],
      [-9.6, -12.6],
    ] as [number, number][]) {
      b.cyl(woodDark, 0.05, 0.06, 4.6, x, 0, z, 6);
      b.box(banner, 0.05, 2.4, 0.62, x + 0.02, 1.9, z, (x + z) % 2 ? 0 : Math.PI / 2);
      b.box(woodDark, 0.06, 0.06, 0.72, x, 4.32, z, (x + z) % 2 ? 0 : Math.PI / 2);
    }
    g.add(b.build());

    // 门牌与暖帘（贴图件，单独网格）
    const signMat = new THREE.MeshBasicMaterial({ map: signTexture(zn.letter, zn.name) });
    const norenMat = new THREE.MeshBasicMaterial({ map: norenTexture(zn.letter), side: THREE.DoubleSide });
    const signGeo = new THREE.PlaneGeometry(1.5, 0.75);
    const norenGeo = new THREE.PlaneGeometry(3.6, 1.0);
    // 东门（朝外 +x）
    const s1 = new THREE.Mesh(signGeo, signMat);
    s1.position.set(-7.95, 3.35, -20);
    s1.rotation.y = Math.PI / 2;
    const s1b = s1.clone();
    s1b.position.x = -9.05;
    s1b.rotation.y = -Math.PI / 2;
    const n1 = new THREE.Mesh(norenGeo, norenMat);
    n1.position.set(-8.5, 2.62, -20);
    n1.rotation.y = Math.PI / 2;
    // 南门（朝外 +z）
    const s2 = new THREE.Mesh(signGeo, signMat);
    s2.position.set(-20, 3.35, -7.95);
    const s2b = s2.clone();
    s2b.position.z = -9.05;
    s2b.rotation.y = Math.PI;
    const n2 = new THREE.Mesh(norenGeo, norenMat);
    n2.position.set(-20, 2.62, -8.5);
    // 鸟居额
    const s3 = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.45), signMat);
    s3.position.set(-10.05, 3.2, -10.05);
    s3.rotation.y = Math.PI / 4;
    const s3b = s3.clone();
    s3b.position.set(-10.15, 3.2, -10.15);
    s3b.rotation.y = Math.PI / 4 + Math.PI;
    for (const m of [s1, s1b, n1, s2, s2b, n2, s3, s3b]) {
      m.castShadow = m === n1 || m === n2;
      g.add(m);
    }

    // 建造叠加层（世界坐标，不随组旋转）
    const r = zn.rect;
    const ov = new THREE.Mesh(
      new THREE.PlaneGeometry(r.maxX - r.minX, r.maxZ - r.minZ),
      new THREE.MeshBasicMaterial({ map: overlayTexture(zn), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
    );
    ov.rotation.x = -Math.PI / 2;
    ov.position.set((r.minX + r.maxX) / 2, 0.025, (r.minZ + r.maxZ) / 2);
    ov.visible = false;
    ov.renderOrder = 1;
    setLayerFX(ov);
    root.add(ov);
    overlays.push(ov);

    // 准备阶段的出生结界（两面靠外墙，另外两面是光幕）
    const p = zn.pad;
    const barMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(0xffffff) }, uTime: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uTime; varying vec2 vUv;
        void main(){
          float stripe = step(0.5, fract(vUv.x * 10.0 - uTime * 0.6 + vUv.y * 2.0));
          float edge = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.7, 1.0, vUv.y));
          float a = (0.12 + stripe * 0.16) * edge + smoothstep(0.9, 1.0, 1.0 - vUv.y) * 0.4;
          gl_FragColor = vec4(uColor, a);
        }`,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const bar = new THREE.Group() as unknown as THREE.Mesh;
    const pw = p.maxX - p.minX;
    const ph = p.maxZ - p.minZ;
    // 找出朝向内侧的两条边（不贴外墙的边）
    const sides: { x: number; z: number; ry: number; len: number }[] = [];
    if (Math.abs(p.minX) < 28.5) sides.push({ x: p.minX, z: (p.minZ + p.maxZ) / 2, ry: Math.PI / 2, len: ph });
    if (Math.abs(p.maxX) < 28.5) sides.push({ x: p.maxX, z: (p.minZ + p.maxZ) / 2, ry: Math.PI / 2, len: ph });
    if (Math.abs(p.minZ) < 28.5) sides.push({ x: (p.minX + p.maxX) / 2, z: p.minZ, ry: 0, len: pw });
    if (Math.abs(p.maxZ) < 28.5) sides.push({ x: (p.minX + p.maxX) / 2, z: p.maxZ, ry: 0, len: pw });
    const barGroup = new THREE.Group();
    for (const s of sides) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(s.len, 2.6), barMat);
      m.position.set(s.x, 1.3, s.z);
      m.rotation.y = s.ry;
      barGroup.add(m);
    }
    setLayerFX(barGroup);
    barGroup.visible = false;
    root.add(barGroup);
    void bar;
    barriers.push(barGroup as unknown as THREE.Mesh);
    (barGroup as unknown as { userData: { mat: THREE.ShaderMaterial } }).userData.mat = barMat;

    // 区域上空字母（建造阶段导航用）
    const lbl = new THREE.Sprite(new THREE.SpriteMaterial({ map: textTexture(zn.letter, { size: 110, w: 128, h: 128, color: '#fff', stroke: '#1b1622', strokeW: 16 }), depthTest: false, transparent: true }));
    lbl.position.set(zn.center.x, 7.5, zn.center.z);
    lbl.scale.set(3, 3, 1);
    lbl.renderOrder = 20;
    setLayerFX(lbl);
    root.add(lbl);
    zoneLabels.push(lbl);

    // 外墙之外的风格树林
    const tb = new MeshBuilder();
    const flavor = ZONE_META[zn.idx].flavor;
    for (let i = 0; i < 7; i++) {
      const t = i / 6;
      const [x1, z1] = [-31.5 - rand() * 2.5, -28 + t * 20];
      const [x2, z2] = [-28 + t * 20, -31.5 - rand() * 2.5];
      addTree(tb, x1, z1, flavor, randRange(0.9, 1.3));
      addTree(tb, x2, z2, flavor, randRange(0.9, 1.3));
    }
    addTree(tb, -33, -33, flavor, 1.5);
    g.add(tb.build({ cast: true, receive: false }));
  }

  // 廊道
  for (let k = 0; k < 4; k++) {
    const g = new THREE.Group();
    g.rotation.y = (-k * Math.PI) / 2;
    root.add(g);
    const b = new MeshBuilder();
    // 凉亭
    for (const [x, z] of [
      [-2.2, -21.2],
      [2.2, -21.2],
      [-2.2, -16.8],
      [2.2, -16.8],
    ] as [number, number][]) {
      b.cyl(wood, 0.18, 0.22, 3.1, x, 0, z, 8);
      b.cyl(stoneDark, 0.3, 0.32, 0.2, x, 0, z, 8);
    }
    b.box(woodDark, 5.0, 0.22, 0.3, 0, 3.0, -21.2);
    b.box(woodDark, 5.0, 0.22, 0.3, 0, 3.0, -16.8);
    b.box(woodDark, 0.3, 0.22, 5.0, -2.2, 3.0, -19);
    b.box(woodDark, 0.3, 0.22, 5.0, 2.2, 3.0, -19);
    b.add(new THREE.ConeGeometry(4.4, 1.7, 4), tile, 0, 4.05, -19, 0, Math.PI / 4, 0);
    b.add(new THREE.ConeGeometry(0.4, 0.6, 4), gold, 0, 5.05, -19, 0, Math.PI / 4, 0);
    // 手水钵
    b.cyl(stone, 0.55, 0.5, 0.75, 0, 0, -19, 12);
    b.cyl(toon(0x6fb5d9), 0.42, 0.42, 0.04, 0, 0.73, -19, 12);
    b.box(woodDark, 0.9, 0.04, 0.06, 0, 0.82, -19, 0.3);
    addBamboo(b, -5, -26.3, 1.1);
    addBamboo(b, 5, -26.3, 1.1);
    addRock(b, -5.5, -15.5, 0.9, 1.6);
    addRock(b, 5.5, -22.5, 0.9, 1.6);
    addLantern(b, -4.6, -11.4, lanternLight);
    addLantern(b, 4.6, -11.4, lanternLight);
    // 廊道边的低矮花坛（装饰，靠墙不挡路）
    for (const x of [-7.2, 7.2]) b.box(toon(0x6f9a52, { gradient: GRADIENT_2 }), 0.5, 0.35, 3, x, 0, -26.5);
    g.add(b.build());
  }

  // 中央高台与战鼓
  {
    const b = new MeshBuilder();
    const S = MAP.stageHalf;
    const SH = MAP.stageH;
    b.box(stone, S * 2, SH - 0.08, S * 2, 0, 0, 0);
    b.box(toon(0x9a6a45), S * 2 - 0.1, 0.08, S * 2 - 0.1, 0, SH - 0.08, 0);
    // 木地板纹
    for (let i = -3; i <= 3; i++) b.box(toon(0x84593a), 0.03, 0.01, S * 2 - 0.4, i, SH, 0);
    for (let k = 0; k < 4; k++) {
      const rot = (p: [number, number, number, number]): [number, number, number, number] => {
        const a = rotXZ(p[0], p[2], k);
        const c = rotXZ(p[1], p[3], k);
        return [Math.min(a[0], c[0]), Math.max(a[0], c[0]), Math.min(a[1], c[1]), Math.max(a[1], c[1])];
      };
      // 栏杆：石基 + 朱漆木栏
      for (const seg of [
        [-S, -MAP.stairHalfW, -S, -S + 0.3],
        [MAP.stairHalfW, S, -S, -S + 0.3],
      ] as [number, number, number, number][]) {
        const [x0, x1, z0, z1] = rot([seg[0], seg[1], seg[2], seg[3]]);
        b.boxMinMax(stoneDark, x0, x1, SH, SH + 0.35, z0, z1);
        b.boxMinMax(beng, x0, x1, SH + 0.62, SH + 0.8, z0 - 0.02, z1 + 0.02);
        const len = Math.max(x1 - x0, z1 - z0);
        const n = Math.round(len / 0.8);
        for (let i = 0; i <= n; i++) {
          const t = i / n;
          const px = x1 - x0 > z1 - z0 ? x0 + (x1 - x0) * t : (x0 + x1) / 2;
          const pz = x1 - x0 > z1 - z0 ? (z0 + z1) / 2 : z0 + (z1 - z0) * t;
          b.box(beng, 0.12, 0.45, 0.12, px, SH + 0.35, pz);
        }
      }
      // 台阶
      for (let s = 0; s < 6; s++) {
        const z0 = -S - MAP.stairLen + (s * MAP.stairLen) / 6;
        const z1 = -S - MAP.stairLen + ((s + 1) * MAP.stairLen) / 6;
        const top = (SH * (s + 1)) / 6;
        const [x0, x1, zz0, zz1] = rot([-MAP.stairHalfW, MAP.stairHalfW, z0, -S]);
        void z1;
        b.boxMinMax(s % 2 ? stone : toon(0xc4bbae), x0, x1, 0, top, zz0, zz1);
      }
      // 台阶两侧墙
      for (const sx of [-1, 1]) {
        const xa = sx < 0 ? -MAP.stairHalfW - 0.3 : MAP.stairHalfW;
        const xb = sx < 0 ? -MAP.stairHalfW : MAP.stairHalfW + 0.3;
        const [x0, x1, z0, z1] = rot([xa, xb, -S - MAP.stairLen, -S]);
        b.boxMinMax(stoneDark, x0, x1, 0, SH + 0.35, z0, z1);
        b.boxMinMax(beng, x0, x1, SH + 0.62, SH + 0.8, z0, z1);
        const [px0, , pz0] = rot([xa, xb, -S - MAP.stairLen, -S]);
        void px0;
        void pz0;
      }
      // 台阶口的门柱
      for (const sx of [-1, 1]) {
        const [x0, x1, z0, z1] = rot([sx * MAP.stairHalfW - 0.2 + (sx > 0 ? 0.15 : -0.15), sx * MAP.stairHalfW + 0.2 + (sx > 0 ? 0.15 : -0.15), -S - MAP.stairLen - 0.15, -S - MAP.stairLen + 0.25]);
        b.boxMinMax(woodDark, x0, x1, 0, 2.05, z0, z1);
        b.boxMinMax(gold, x0 - 0.02, x1 + 0.02, 2.05, 2.15, z0 - 0.02, z1 + 0.02);
      }
    }
    // 战鼓
    b.add(new THREE.CylinderGeometry(0.82, 0.82, 1.1, 20), toon(0x8a2f26), 0, SH + 1.55, 0, Math.PI / 2, 0, 0);
    b.add(new THREE.CylinderGeometry(0.9, 0.9, 0.06, 20), toon(0x2a2026), 0, SH + 1.55, 0.55, Math.PI / 2, 0, 0);
    b.add(new THREE.CylinderGeometry(0.9, 0.9, 0.06, 20), toon(0x2a2026), 0, SH + 1.55, -0.55, Math.PI / 2, 0, 0);
    for (const sx of [-0.6, 0.6]) {
      b.box(woodDark, 0.14, 1.2, 0.14, sx, SH, 0.3);
      b.box(woodDark, 0.14, 1.2, 0.14, sx, SH, -0.3);
    }
    b.box(woodDark, 1.5, 0.12, 0.9, 0, SH + 0.9, 0);
    // 台上四角灯笼
    for (const [x, z] of [
      [3.2, 3.2],
      [-3.2, 3.2],
      [3.2, -3.2],
      [-3.2, -3.2],
    ] as [number, number][]) {
      b.cyl(woodDark, 0.05, 0.05, 1.6, x, SH, z, 6);
      b.add(new THREE.SphereGeometry(0.26, 10, 8), lanternLight, x, SH + 1.85, z, 0, 0, 0, 1, 1.3, 1);
    }
    root.add(b.build());
    // 鼓面贴图
    const headMat = new THREE.MeshBasicMaterial({ map: drumTex });
    for (const z of [0.56, -0.56]) {
      const h = new THREE.Mesh(new THREE.CircleGeometry(0.8, 24), headMat);
      h.position.set(0, SH + 1.55, z);
      h.rotation.y = z > 0 ? 0 : Math.PI;
      root.add(h);
    }

    // 四棵樱花
    const tb = new MeshBuilder();
    for (let k = 0; k < 4; k++) {
      const [x, z] = rotXZ(-6.3, -6.3, k);
      addTree(tb, x, z, 'sakura', 0.95);
    }
    root.add(tb.build({ cast: true, receive: false }));
  }

  // 远景树圈
  {
    const tb = new MeshBuilder();
    for (let i = 0; i < 46; i++) {
      const a = (i / 46) * Math.PI * 2;
      const r = randRange(44, 70);
      const kinds = ['pine', 'sakura', 'maple', 'pine'] as const;
      addTree(tb, Math.cos(a) * r, Math.sin(a) * r, kinds[i % 4], randRange(1.4, 2.2));
    }
    root.add(tb.build({ cast: false, receive: false }));
  }

  // 自己区域的导航光柱
  const beacon = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.6, 40, 20, 1, true),
    new THREE.ShaderMaterial({
      // uFade：玩家走近光柱时淡出，避免站在区域中心时整屏发黄
      uniforms: { uColor: { value: new THREE.Color(0xfff07a) }, uTime: { value: 0 }, uFade: { value: 1 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uTime; uniform float uFade; varying vec2 vUv;
        void main(){ float a = (1.0 - vUv.y) * (0.35 + 0.15 * sin(uTime * 4.0 + vUv.y * 20.0)) * uFade; gl_FragColor = vec4(uColor, a); }`,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    }),
  );
  beacon.position.y = 20;
  setLayerFX(beacon);
  beacon.visible = false;
  root.add(beacon);

  return {
    root,
    zoneBanners,
    overlays,
    barriers,
    zoneLabels,
    beacon,
    setZoneBuilder(zone: number, team: number | null) {
      const m = zoneBanners[zone];
      m.color.set(team === null ? 0xe8e2d6 : TEAMS[team].color);
    },
  };
}
