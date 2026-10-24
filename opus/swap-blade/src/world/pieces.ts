// 可建造构件：少量但组合价值高。所有构件吸附在 1 m 网格上，只能 90° 旋转、只能放在地面（不可叠放）。

import * as THREE from 'three';
import { rotRect, rotXZ } from '../util';
import type { BoxDef } from './layout';
import { MeshBuilder } from '../render/builder';
import { toon } from '../render/toon';

export type PieceType = 'low' | 'high' | 'crate' | 'pillar' | 'corner';

export interface PieceDef {
  type: PieceType;
  name: string;
  key: string;
  cost: number;
  desc: string;
  tags: string[];
  even: boolean;
  cells: [number, number][];
  boxes: { x0: number; x1: number; z0: number; z1: number; y0: number; y1: number }[];
  height: number;
  size: string;
}

export const PIECES: Record<PieceType, PieceDef> = {
  low: {
    type: 'low',
    name: '矮墙',
    key: '1',
    cost: 2,
    desc: '挡住通行与刀锋，但挡不住视线。做“看得见、砍不到”的隔断，逼对手绕路。',
    tags: ['挡路', '挡刀', '透视线'],
    even: false,
    cells: [
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    boxes: [{ x0: -1.5, x1: 1.5, z0: -0.25, z1: 0.25, y0: 0, y1: 1.2 }],
    height: 1.2,
    size: '3×1',
  },
  high: {
    type: 'high',
    name: '高墙',
    key: '2',
    cost: 3,
    desc: '同时阻挡通行与视线。切割空间、制造盲区与伏击位。',
    tags: ['挡路', '挡视线'],
    even: false,
    cells: [
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    boxes: [{ x0: -1.5, x1: 1.5, z0: -0.25, z1: 0.25, y0: 0, y1: 3.0 }],
    height: 3.0,
    size: '3×1',
  },
  crate: {
    type: 'crate',
    name: '货箱',
    key: '3',
    cost: 2,
    desc: '2×2 的方形掩体，高过头顶。适合绕着它周旋，打断直线追击。',
    tags: ['掩体', '可绕圈'],
    even: true,
    cells: [
      [-0.5, -0.5],
      [0.5, -0.5],
      [-0.5, 0.5],
      [0.5, 0.5],
    ],
    boxes: [{ x0: -0.95, x1: 0.95, z0: -0.95, z1: 0.95, y0: 0, y1: 1.8 }],
    height: 1.8,
    size: '2×2',
  },
  pillar: {
    type: 'pillar',
    name: '石柱',
    key: '4',
    cost: 1,
    desc: '最便宜的小障碍。卡视角、绕柱拉扯，给追击制造节奏变化。',
    tags: ['便宜', '卡视角'],
    even: false,
    cells: [[0, 0]],
    boxes: [{ x0: -0.4, x1: 0.4, z0: -0.4, z1: 0.4, y0: 0, y1: 3.0 }],
    height: 3.0,
    size: '1×1',
  },
  corner: {
    type: 'corner',
    name: '转角屏风',
    key: '5',
    cost: 3,
    desc: 'L 形高屏风。制造转角盲区，守门伏击或保护侧翼。',
    tags: ['转角', '伏击'],
    even: false,
    cells: [
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [-1, 1],
    ],
    boxes: [
      { x0: -1.25, x1: 1.5, z0: -1.25, z1: -0.75, y0: 0, y1: 2.4 },
      { x0: -1.25, x1: -0.75, z0: -1.25, z1: 1.5, y0: 0, y1: 2.4 },
    ],
    height: 2.4,
    size: 'L 3×3',
  },
};

export const PIECE_ORDER: PieceType[] = ['low', 'high', 'crate', 'pillar', 'corner'];

export function snapPiece(type: PieceType, x: number, z: number): [number, number] {
  if (PIECES[type].even) return [Math.round(x), Math.round(z)];
  return [Math.floor(x) + 0.5, Math.floor(z) + 0.5];
}

export interface Footprint {
  cells: [number, number][];
  boxes: BoxDef[];
}

export function footprint(type: PieceType, cx: number, cz: number, rot: number): Footprint {
  const def = PIECES[type];
  const cells = def.cells.map(([u, v]) => {
    const [x, z] = rotXZ(u, v, rot);
    return [Math.floor(cx + x + 1e-6), Math.floor(cz + z + 1e-6)] as [number, number];
  });
  const boxes = def.boxes.map((b) => {
    const r = rotRect({ minX: b.x0, maxX: b.x1, minZ: b.z0, maxZ: b.z1 }, rot);
    const out: BoxDef = {
      kind: 'box',
      minX: cx + r.minX,
      maxX: cx + r.maxX,
      minY: b.y0,
      maxY: b.y1,
      minZ: cz + r.minZ,
      maxZ: cz + r.maxZ,
      move: true,
      sight: true,
      tag: 'piece',
    };
    return out;
  });
  return { cells, boxes };
}

/** 对角镜像（u↔v）后对应的旋转值：比较足迹格集合 */
export function mirrorRot(type: PieceType, rot: number): number {
  const key = (cells: [number, number][]) =>
    cells
      .map((c) => c.join(','))
      .sort()
      .join('|');
  const def = PIECES[type];
  const src = def.cells.map(([u, v]) => rotXZ(u, v, rot)).map(([x, z]) => [z, x] as [number, number]);
  const target = key(src);
  for (let r = 0; r < 4; r++) {
    const c = def.cells.map(([u, v]) => rotXZ(u, v, r) as [number, number]);
    if (key(c) === target) return r;
  }
  return rot;
}

// ---------------- 外观 ----------------

const M = {
  stone: () => toon(0xbdb4a7),
  stoneDark: () => toon(0x8e8578),
  plaster: () => toon(0xf6f0e4),
  wood: () => toon(0x7d5137),
  woodDark: () => toon(0x4a3125),
  woodLight: () => toon(0xc89a66),
  tile: () => toon(0x46506a),
  paper: () => toon(0xf7ecd4),
  rope: () => toon(0xead9a2),
};

export function buildPieceMesh(type: PieceType, teamColor: number, ghost: THREE.Material | null = null): THREE.Group {
  const b = new MeshBuilder();
  const mat = (m: THREE.Material) => ghost ?? m;
  const team = mat(toon(teamColor));
  switch (type) {
    case 'low': {
      const st = mat(M.stone());
      const sd = mat(M.stoneDark());
      // 两层错缝石块
      for (let i = 0; i < 3; i++) b.box(st, 0.97, 0.5, 0.5, -1 + i, 0, 0);
      b.box(sd, 0.48, 0.5, 0.48, -1.25, 0.5, 0);
      b.box(st, 0.97, 0.5, 0.5, -0.5, 0.5, 0);
      b.box(sd, 0.97, 0.5, 0.48, 0.5, 0.5, 0);
      b.box(st, 0.48, 0.5, 0.5, 1.25, 0.5, 0);
      b.box(mat(M.tile()), 3.06, 0.16, 0.6, 0, 1.0, 0);
      b.box(mat(M.tile()), 3.06, 0.05, 0.22, 0, 1.15, 0);
      b.box(team, 3.02, 0.07, 0.53, 0, 0.92, 0);
      break;
    }
    case 'high': {
      const wd = mat(M.woodDark());
      b.box(mat(M.stoneDark()), 3.0, 0.4, 0.5, 0, 0, 0);
      b.box(mat(M.plaster()), 2.76, 2.25, 0.42, 0, 0.4, 0);
      b.box(wd, 0.16, 2.35, 0.5, -1.42, 0.4, 0);
      b.box(wd, 0.16, 2.35, 0.5, 1.42, 0.4, 0);
      b.box(wd, 0.1, 2.25, 0.46, 0, 0.4, 0);
      b.box(wd, 3.0, 0.12, 0.47, 0, 1.95, 0);
      b.box(mat(M.tile()), 3.2, 0.2, 0.72, 0, 2.66, 0);
      b.box(mat(M.tile()), 3.2, 0.14, 0.3, 0, 2.86, 0);
      const mon = new THREE.CylinderGeometry(0.2, 0.2, 0.03, 16);
      b.add(mon, team, -0.7, 1.35, 0.225, Math.PI / 2);
      b.add(mon, team, 0.7, 1.35, -0.225, Math.PI / 2);
      break;
    }
    case 'crate': {
      const wl = mat(M.woodLight());
      const wd = mat(M.wood());
      b.box(wl, 1.86, 1.12, 1.86, 0, 0, 0);
      for (const sx of [-1, 1])
        for (const sz of [-1, 1]) b.box(wd, 0.14, 1.14, 0.14, sx * 0.88, 0, sz * 0.88);
      b.box(wd, 1.9, 0.12, 1.9, 0, 1.0, 0);
      b.box(wd, 1.9, 0.1, 1.9, 0, 0.02, 0);
      b.box(wl, 1.24, 0.62, 1.24, 0.08, 1.12, -0.05, 0.28);
      b.box(wd, 1.28, 0.08, 1.28, 0.08, 1.62, -0.05, 0.28);
      b.box(mat(M.rope()), 1.9, 0.06, 0.08, 0, 0.6, 0.93);
      b.box(team, 0.56, 0.38, 0.03, -0.35, 0.36, 0.945);
      b.box(team, 0.03, 0.38, 0.56, 0.945, 0.36, 0.3);
      break;
    }
    case 'pillar': {
      const sd = mat(M.stoneDark());
      b.box(sd, 0.8, 0.3, 0.8, 0, 0, 0);
      b.box(mat(M.stone()), 0.66, 2.4, 0.66, 0, 0.3, 0);
      b.box(sd, 0.8, 0.3, 0.8, 0, 2.7, 0);
      b.box(mat(M.rope()), 0.72, 0.1, 0.72, 0, 2.15, 0);
      b.box(team, 0.16, 0.52, 0.02, 0, 1.55, 0.34);
      b.box(team, 0.16, 0.52, 0.02, 0, 1.55, -0.34);
      break;
    }
    case 'corner': {
      const wd = mat(M.woodDark());
      const pp = mat(M.paper());
      const arm = (alongX: boolean) => {
        // 一条臂：X 臂从 -1.25 到 1.5，Z 臂从 -0.75 到 1.5（避免在拐角重叠），厚度中心在 -1.0
        const start = alongX ? -1.25 : -0.75;
        const len = 1.5 - start;
        const mid = (start + 1.5) / 2;
        const put = (w: number, h: number, d: number, along: number, y0: number) => {
          if (alongX) b.box(wd, w, h, d, along, y0, -1.0);
          else b.box(wd, d, h, w, -1.0, y0, along);
        };
        const putMat = (m: THREE.Material, w: number, h: number, d: number, along: number, y0: number) => {
          if (alongX) b.box(m, w, h, d, along, y0, -1.0);
          else b.box(m, d, h, w, -1.0, y0, along);
        };
        put(len, 0.16, 0.5, mid, 0);
        // 三扇纸面
        const pw = len / 3;
        for (let i = 0; i < 3; i++) {
          const c = start + pw * (i + 0.5);
          putMat(pp, pw - 0.1, 2.0, 0.3, c, 0.16);
          putMat(team, pw - 0.12, 0.1, 0.32, c, 1.55);
        }
        for (let i = alongX ? 0 : 1; i <= 3; i++) put(0.1, 2.1, 0.36, start + pw * i + (i === 0 ? 0.05 : i === 3 ? -0.05 : 0), 0.1);
        put(len, 0.12, 0.38, mid, 2.16);
        putMat(mat(M.tile()), len + 0.08, 0.12, 0.5, mid, 2.28);
      };
      arm(true);
      arm(false);
      break;
    }
  }
  const g = b.build({ cast: !ghost, receive: !ghost });
  return g;
}
