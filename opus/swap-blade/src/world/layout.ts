// 地图布局数据：一张 58×58 m 的“庭院竞技场”。
// 3×3 宏观格：四角是可建造的四个庭院（A 松庭 / B 竹庭 / C 枫庭 / D 樱庭），
// 四边是连接相邻庭院的“廊道”，中央是带高台与战鼓的广场。
// 整张图 4 重旋转对称，因此四个区域的面积、出入口与周边环境完全等价。

import { MAP, ZONE_META } from '../config';
import { rotRect, rotXZ, type Rect } from '../util';

export interface BoxDef {
  kind: 'box';
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
  move: boolean;
  sight: boolean;
  tag: string;
}

export interface CylDef {
  kind: 'cyl';
  x: number;
  z: number;
  r: number;
  minY: number;
  maxY: number;
  move: boolean;
  sight: boolean;
  tag: string;
}

export type ShapeDef = BoxDef | CylDef;

export interface SpawnPoint {
  x: number;
  z: number;
  yaw: number;
}

export interface Gate {
  x: number;
  z: number;
  ox: number;
  oz: number;
  kind: 'side' | 'corner';
}

export interface Zone {
  idx: number;
  letter: string;
  name: string;
  k: number;
  rect: Rect;
  pad: Rect;
  padCenter: { x: number; z: number };
  spawns: SpawnPoint[];
  noBuild: Rect[];
  gates: Gate[];
  center: { x: number; z: number };
  rack: { x: number; z: number; yaw: number };
  /** 庭院内部方向：从出生角指向广场的单位向量 */
  inward: { x: number; z: number };
}

function box(minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number, tag: string, move = true, sight = true): BoxDef {
  return { kind: 'box', minX, maxX, minY, maxY, minZ, maxZ, move, sight, tag };
}

function cyl(x: number, z: number, r: number, minY: number, maxY: number, tag: string, move = true, sight = true): CylDef {
  return { kind: 'cyl', x, z, r, minY, maxY, move, sight, tag };
}

export function rotShape(s: ShapeDef, k: number): ShapeDef {
  if (s.kind === 'box') {
    const r = rotRect({ minX: s.minX, maxX: s.maxX, minZ: s.minZ, maxZ: s.maxZ }, k);
    return { ...s, minX: r.minX, maxX: r.maxX, minZ: r.minZ, maxZ: r.maxZ };
  }
  const [x, z] = rotXZ(s.x, s.z, k);
  return { ...s, x, z };
}

// ---------- A 区（西北角，k = 0）的定义，其余区域由旋转得到 ----------

const H = MAP.wallH;

const ZONE_A_WALLS: BoxDef[] = [
  // 东墙（朝北廊）：门洞 z ∈ [-22,-18]
  box(-9, -8, 0, H, -29, -22, 'zwall'),
  box(-9, -8, 0, H, -18, -12, 'zwall'),
  // 南墙（朝西廊）：门洞 x ∈ [-22,-18]
  box(-29, -22, 0, H, -9, -8, 'zwall'),
  box(-18, -12, 0, H, -9, -8, 'zwall'),
];

const ZONE_A_PROPS: ShapeDef[] = [
  // 角门鸟居柱
  cyl(-8.5, -11.7, 0.24, 0, 3.6, 'torii'),
  cyl(-11.7, -8.5, 0.24, 0, 3.6, 'torii'),
  // 出生台旁的武器架（商店交互点）
  box(-27.1, -24.9, 0, 1.7, -29, -28.55, 'rack'),
];

const ZONE_A: Omit<Zone, 'idx' | 'letter' | 'name' | 'k'> = {
  rect: { minX: -29, maxX: -9, minZ: -29, maxZ: -9 },
  pad: { minX: -29, maxX: -23, minZ: -29, maxZ: -23 },
  padCenter: { x: -26, z: -26 },
  spawns: [
    { x: -27.2, z: -24.8, yaw: -Math.PI * 0.75 },
    { x: -24.8, z: -27.2, yaw: -Math.PI * 0.75 },
  ],
  noBuild: [
    { minX: -29, maxX: -23, minZ: -29, maxZ: -23 }, // 出生台
    { minX: -11, maxX: -9, minZ: -22, maxZ: -18 }, // 东门内侧
    { minX: -22, maxX: -18, minZ: -11, maxZ: -9 }, // 南门内侧
    { minX: -12, maxX: -9, minZ: -12, maxZ: -9 }, // 角门内侧
  ],
  gates: [
    { x: -8.5, z: -20, ox: -6.5, oz: -20, kind: 'side' },
    { x: -20, z: -8.5, ox: -20, oz: -6.5, kind: 'side' },
    { x: -10.2, z: -10.2, ox: -7.6, oz: -7.6, kind: 'corner' },
  ],
  center: { x: -19, z: -19 },
  rack: { x: -26, z: -28.75, yaw: Math.PI },
  inward: { x: Math.SQRT1_2, z: Math.SQRT1_2 },
};

// 北廊（A 与 B 之间），旋转得到东/南/西廊
const LANE_N: ShapeDef[] = [
  cyl(-2.2, -21.2, 0.22, 0, 3.0, 'pav_post'),
  cyl(2.2, -21.2, 0.22, 0, 3.0, 'pav_post'),
  cyl(-2.2, -16.8, 0.22, 0, 3.0, 'pav_post'),
  cyl(2.2, -16.8, 0.22, 0, 3.0, 'pav_post'),
  cyl(0, -19, 0.55, 0, 0.85, 'basin', true, false),
  cyl(-5, -26.3, 1.1, 0, 6.5, 'bamboo'),
  cyl(5, -26.3, 1.1, 0, 6.5, 'bamboo'),
  cyl(-5.5, -15.5, 0.9, 0, 1.6, 'rock'),
  cyl(5.5, -22.5, 0.9, 0, 1.6, 'rock'),
  cyl(-4.6, -11.4, 0.4, 0, 2.1, 'lantern'),
  cyl(4.6, -11.4, 0.4, 0, 2.1, 'lantern'),
];

// 中央高台北侧（旋转得到四面）
const S = MAP.stageHalf;
const SW = MAP.stairHalfW;
const SL = MAP.stairLen;
const STAGE_N: ShapeDef[] = [
  box(-S, -SW, 0, 2.0, -S, -S + 0.3, 'parapet'),
  box(SW, S, 0, 2.0, -S, -S + 0.3, 'parapet'),
  box(-SW - 0.3, -SW, 0, 2.0, -S - SL, -S, 'stairwall'),
  box(SW, SW + 0.3, 0, 2.0, -S - SL, -S, 'stairwall'),
];

const PLAZA: ShapeDef[] = [
  box(-S, S, 0, MAP.stageH, -S, S, 'stageblock', false, true),
  cyl(0, 0, 0.85, MAP.stageH, 3.1, 'drum'),
];
const PLAZA_TREE = cyl(-6.3, -6.3, 0.32, 0, 3.2, 'tree');

const OUTER: BoxDef[] = [
  box(-30, 30, 0, MAP.outerH, -30, -29, 'outer'),
  box(-30, 30, 0, MAP.outerH, 29, 30, 'outer'),
  box(-30, -29, 0, MAP.outerH, -30, 30, 'outer'),
  box(29, 30, 0, MAP.outerH, -30, 30, 'outer'),
];

export function buildZones(): Zone[] {
  const zones: Zone[] = [];
  for (let k = 0; k < 4; k++) {
    const rp = (p: { x: number; z: number }) => {
      const [x, z] = rotXZ(p.x, p.z, k);
      return { x, z };
    };
    const z: Zone = {
      idx: k,
      letter: ZONE_META[k].letter,
      name: ZONE_META[k].name,
      k,
      rect: rotRect(ZONE_A.rect, k),
      pad: rotRect(ZONE_A.pad, k),
      padCenter: rp(ZONE_A.padCenter),
      spawns: ZONE_A.spawns.map((s) => {
        const p = rp(s);
        return { x: p.x, z: p.z, yaw: s.yaw - (k * Math.PI) / 2 };
      }),
      noBuild: ZONE_A.noBuild.map((r) => rotRect(r, k)),
      gates: ZONE_A.gates.map((g) => {
        const p = rp(g);
        const o = rp({ x: g.ox, z: g.oz });
        return { x: p.x, z: p.z, ox: o.x, oz: o.z, kind: g.kind };
      }),
      center: rp(ZONE_A.center),
      rack: { ...rp(ZONE_A.rack), yaw: ZONE_A.rack.yaw - (k * Math.PI) / 2 },
      inward: rp(ZONE_A.inward),
    };
    zones.push(z);
  }
  return zones;
}

export function buildStaticShapes(): ShapeDef[] {
  const out: ShapeDef[] = [...OUTER, ...PLAZA];
  for (let k = 0; k < 4; k++) {
    for (const s of ZONE_A_WALLS) out.push(rotShape(s, k));
    for (const s of ZONE_A_PROPS) out.push(rotShape(s, k));
    for (const s of LANE_N) out.push(rotShape(s, k));
    for (const s of STAGE_N) out.push(rotShape(s, k));
    out.push(rotShape(PLAZA_TREE, k));
  }
  return out;
}

/** 地面高度：只有中央高台与四面台阶有高差，其余为 0 */
export function groundHeight(x: number, z: number): number {
  const ax = Math.abs(x);
  const az = Math.abs(z);
  if (ax <= S && az <= S) return MAP.stageH;
  if (ax <= SW && az > S && az < S + SL) return (MAP.stageH * (S + SL - az)) / SL;
  if (az <= SW && ax > S && ax < S + SL) return (MAP.stageH * (S + SL - ax)) / SL;
  return 0;
}

/** AI 巡游兴趣点 */
export function buildPOIs(): { x: number; z: number; tag: string }[] {
  const out: { x: number; z: number; tag: string }[] = [];
  for (let k = 0; k < 4; k++) {
    const add = (x: number, z: number, tag: string) => {
      const [rx, rz] = rotXZ(x, z, k);
      out.push({ x: rx, z: rz, tag });
    };
    add(-19, -19, 'zone');
    add(-15, -15, 'zone');
    add(-10, -10, 'junction');
    add(0, -13.5, 'lane');
    add(-3.5, -24, 'lane');
    add(2.4, -2.4, 'stage');
    add(0, -7.2, 'plaza');
  }
  return out;
}

export function zoneAt(zones: Zone[], x: number, z: number): Zone | null {
  for (const zn of zones) {
    if (x >= zn.rect.minX && x <= zn.rect.maxX && z >= zn.rect.minZ && z <= zn.rect.maxZ) return zn;
  }
  return null;
}
