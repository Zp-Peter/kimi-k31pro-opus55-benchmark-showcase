// 建造系统：预算、放置校验（区域/保留区/重叠/卡人/连通性）、删除退款、撤销，
// 以及 AI 队伍“模板 + 随机抖动 + 随机补全”的合法布局生成。

import * as THREE from 'three';
import { BUILD, PHYS, TEAMS } from '../config';
import { pick, rand, randRange, rotXZ, shuffle, type Rect } from '../util';
import { Collider } from '../world/collision';
import type { Zone } from '../world/layout';
import { PIECES, PIECE_ORDER, buildPieceMesh, footprint, mirrorRot, type PieceType } from '../world/pieces';
import type { Game } from '../game';

export interface PieceInst {
  id: number;
  type: PieceType;
  team: number;
  zone: number;
  cx: number;
  cz: number;
  rot: number;
  cells: [number, number][];
  colliders: Collider[];
  mesh: THREE.Group;
  bornT: number;
}

export interface Validation {
  ok: boolean;
  reason: string;
}

interface UndoEntry {
  kind: 'place' | 'remove';
  type: PieceType;
  cx: number;
  cz: number;
  rot: number;
  id: number;
}

interface Placement {
  type: PieceType;
  u: number;
  v: number;
  rot: number;
}

interface AIBuild {
  team: number;
  plan: { type: PieceType; cx: number; cz: number; rot: number }[];
  idx: number;
  timer: number;
  done: boolean;
  fails: number;
  started: boolean;
  elapsed: number;
}

// A 区本地坐标模板：u,v ∈ [0,20]，(0,0) 为出生角，(20,20) 为通往广场的角门。
const TEMPLATES: { name: string; pieces: Placement[] }[] = [
  {
    name: '回廊',
    pieces: [
      { type: 'high', u: 10.5, v: 4.5, rot: 1 },
      { type: 'high', u: 4.5, v: 10.5, rot: 0 },
      { type: 'corner', u: 14.5, v: 14.5, rot: 2 },
      { type: 'crate', u: 9, v: 9, rot: 0 },
      { type: 'low', u: 14.5, v: 6.5, rot: 1 },
      { type: 'low', u: 6.5, v: 14.5, rot: 0 },
      { type: 'pillar', u: 16.5, v: 3.5, rot: 0 },
      { type: 'pillar', u: 3.5, v: 16.5, rot: 0 },
      { type: 'pillar', u: 12.5, v: 12.5, rot: 0 },
      { type: 'crate', u: 15, v: 10, rot: 0 },
    ],
  },
  {
    name: '中堡',
    pieces: [
      { type: 'high', u: 10.5, v: 7.5, rot: 0 },
      { type: 'high', u: 10.5, v: 13.5, rot: 0 },
      { type: 'low', u: 7.5, v: 10.5, rot: 1 },
      { type: 'low', u: 13.5, v: 10.5, rot: 1 },
      { type: 'pillar', u: 10.5, v: 10.5, rot: 0 },
      { type: 'corner', u: 16.5, v: 4.5, rot: 1 },
      { type: 'corner', u: 4.5, v: 16.5, rot: 3 },
      { type: 'crate', u: 15, v: 15, rot: 0 },
      { type: 'pillar', u: 6.5, v: 6.5, rot: 0 },
    ],
  },
  {
    name: '柱林',
    pieces: [
      { type: 'pillar', u: 5.5, v: 9.5, rot: 0 },
      { type: 'pillar', u: 9.5, v: 5.5, rot: 0 },
      { type: 'pillar', u: 8.5, v: 12.5, rot: 0 },
      { type: 'pillar', u: 12.5, v: 8.5, rot: 0 },
      { type: 'pillar', u: 12.5, v: 15.5, rot: 0 },
      { type: 'pillar', u: 15.5, v: 12.5, rot: 0 },
      { type: 'high', u: 10.5, v: 16.5, rot: 0 },
      { type: 'high', u: 16.5, v: 10.5, rot: 1 },
      { type: 'crate', u: 9, v: 9, rot: 0 },
      { type: 'crate', u: 14, v: 14, rot: 0 },
      { type: 'pillar', u: 4.5, v: 13.5, rot: 0 },
      { type: 'pillar', u: 13.5, v: 4.5, rot: 0 },
    ],
  },
  {
    name: '箱阵',
    pieces: [
      { type: 'crate', u: 9, v: 9, rot: 0 },
      { type: 'crate', u: 13, v: 5, rot: 0 },
      { type: 'crate', u: 5, v: 13, rot: 0 },
      { type: 'crate', u: 14, v: 14, rot: 0 },
      { type: 'high', u: 12.5, v: 10.5, rot: 1 },
      { type: 'low', u: 9.5, v: 15.5, rot: 0 },
      { type: 'low', u: 16.5, v: 8.5, rot: 1 },
      { type: 'pillar', u: 3.5, v: 9.5, rot: 0 },
      { type: 'pillar', u: 9.5, v: 3.5, rot: 0 },
      { type: 'crate', u: 16, v: 4, rot: 0 },
    ],
  },
  {
    name: '双L伏击',
    pieces: [
      { type: 'corner', u: 12.5, v: 7.5, rot: 3 },
      { type: 'corner', u: 7.5, v: 12.5, rot: 1 },
      { type: 'corner', u: 15.5, v: 15.5, rot: 2 },
      { type: 'high', u: 10.5, v: 10.5, rot: 0 },
      { type: 'pillar', u: 4.5, v: 8.5, rot: 0 },
      { type: 'pillar', u: 8.5, v: 4.5, rot: 0 },
      { type: 'crate', u: 16, v: 4, rot: 0 },
      { type: 'low', u: 3.5, v: 12.5, rot: 1 },
      { type: 'pillar', u: 11.5, v: 16.5, rot: 0 },
    ],
  },
  {
    name: '斜墙',
    pieces: [
      { type: 'high', u: 6.5, v: 13.5, rot: 0 },
      { type: 'high', u: 13.5, v: 6.5, rot: 1 },
      { type: 'high', u: 10.5, v: 10.5, rot: 1 },
      { type: 'low', u: 14.5, v: 12.5, rot: 0 },
      { type: 'low', u: 12.5, v: 15.5, rot: 1 },
      { type: 'crate', u: 7, v: 8, rot: 0 },
      { type: 'pillar', u: 16.5, v: 16.5, rot: 0 },
      { type: 'pillar', u: 3.5, v: 8.5, rot: 0 },
      { type: 'pillar', u: 8.5, v: 3.5, rot: 0 },
    ],
  },
];

const JITTER: [number, number][] = [
  [0, 0],
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, -1],
  [2, 0],
  [0, 2],
  [-2, 0],
  [0, -2],
  [1, -1],
  [-1, 1],
];

let pieceIdSeq = 1;

export class BuildSystem {
  pieces: PieceInst[] = [];
  budget = [BUILD.budget, BUILD.budget, BUILD.budget, BUILD.budget];
  private occ = new Map<string, PieceInst>();
  undoStack: UndoEntry[] = [];
  private ai: AIBuild[] = [];
  group = new THREE.Group();

  constructor(private g: Game) {
    g.scene.add(this.group);
  }

  zoneOfTeam(team: number): Zone {
    return this.g.zones[this.g.match.teams[team].buildZone];
  }

  clearAll() {
    for (const p of [...this.pieces]) this.remove(p, { refund: false, record: false, silent: true });
    this.pieces = [];
    this.occ.clear();
    this.undoStack = [];
    this.g.nav.rebuildAll();
  }

  resetBudgets() {
    this.budget = [BUILD.budget, BUILD.budget, BUILD.budget, BUILD.budget];
  }

  pieceById(id: number): PieceInst | undefined {
    return this.pieces.find((p) => p.id === id);
  }

  validate(team: number, type: PieceType, cx: number, cz: number, rot: number): Validation {
    const zone = this.zoneOfTeam(team);
    const def = PIECES[type];
    const fp = footprint(type, cx, cz, rot);
    const r = zone.rect;
    for (const [i, j] of fp.cells) {
      if (i < r.minX || i + 1 > r.maxX || j < r.minZ || j + 1 > r.maxZ) return { ok: false, reason: `超出本队建造区（${zone.letter} 区）` };
    }
    for (const [i, j] of fp.cells) {
      const x = i + 0.5;
      const z = j + 0.5;
      for (const nb of zone.noBuild) {
        if (x > nb.minX && x < nb.maxX && z > nb.minZ && z < nb.maxZ) return { ok: false, reason: '出生台 / 门口保留区不可建造' };
      }
      if (this.occ.has(i + ',' + j)) return { ok: false, reason: '与已有构件重叠（不可叠放）' };
    }
    if (this.budget[team] < def.cost) return { ok: false, reason: `预算不足（需要 ${def.cost}）` };
    const colliders = fp.boxes.map((b) => new Collider(b));
    for (const ch of this.g.chars) {
      if (!ch.alive) continue;
      for (const c of colliders) {
        if (c.dist2D(ch.pos.x, ch.pos.z) < PHYS.radius + 0.08) {
          return { ok: false, reason: ch.isPlayer ? '你正站在这里' : `会卡住角色（${ch.name}）` };
        }
      }
    }
    if (!this.connectivityOK(zone, colliders)) return { ok: false, reason: '会封死出生点通往外部的最后通路' };
    return { ok: true, reason: '' };
  }

  /** 出生点（以及区域内所有角色）必须能走到区域外的公共空间 */
  connectivityOK(zone: Zone, extra: Collider[] | null): boolean {
    const r = zone.rect;
    const region = { minX: r.minX - 2.5, maxX: r.maxX + 2.5, minZ: r.minZ - 2.5, maxZ: r.maxZ + 2.5 };
    const isSeed = (x: number, z: number) => x < r.minX - 0.3 || x > r.maxX + 0.3 || z < r.minZ - 0.3 || z > r.maxZ + 0.3;
    const targets: { x: number; z: number }[] = zone.spawns.map((s) => ({ x: s.x, z: s.z }));
    for (const ch of this.g.chars) {
      if (!ch.alive) continue;
      if (ch.pos.x > r.minX && ch.pos.x < r.maxX && ch.pos.z > r.minZ && ch.pos.z < r.maxZ) targets.push({ x: ch.pos.x, z: ch.pos.z });
    }
    const res = this.g.nav.regionReach(region, isSeed, targets, extra);
    return res.every(Boolean);
  }

  /** 仅检查出生点（锁定阶段用） */
  spawnReachable(zone: Zone): boolean {
    const r = zone.rect;
    const region = { minX: r.minX - 2.5, maxX: r.maxX + 2.5, minZ: r.minZ - 2.5, maxZ: r.maxZ + 2.5 };
    const isSeed = (x: number, z: number) => x < r.minX - 0.3 || x > r.maxX + 0.3 || z < r.minZ - 0.3 || z > r.maxZ + 0.3;
    return this.g.nav.regionReach(region, isSeed, zone.spawns, null).every(Boolean);
  }

  place(team: number, type: PieceType, cx: number, cz: number, rot: number, opts: { record?: boolean; silent?: boolean; skipValidate?: boolean } = {}): PieceInst | null {
    if (!opts.skipValidate) {
      const v = this.validate(team, type, cx, cz, rot);
      if (!v.ok) return null;
    }
    const fp = footprint(type, cx, cz, rot);
    const zone = this.zoneOfTeam(team);
    const p: PieceInst = {
      id: pieceIdSeq++,
      type,
      team,
      zone: zone.idx,
      cx,
      cz,
      rot,
      cells: fp.cells,
      colliders: [],
      mesh: buildPieceMesh(type, TEAMS[team].color),
      bornT: this.g.time,
    };
    for (const b of fp.boxes) p.colliders.push(this.g.world.add(b, p));
    for (const [i, j] of fp.cells) this.occ.set(i + ',' + j, p);
    this.budget[team] -= PIECES[type].cost;
    p.mesh.position.set(cx, 0, cz);
    p.mesh.rotation.y = (-rot * Math.PI) / 2;
    p.mesh.scale.set(1, 0.01, 1);
    p.mesh.userData.piece = p;
    this.group.add(p.mesh);
    this.pieces.push(p);
    this.updateNavFor(fp.boxes);
    if (opts.record) this.undoStack.push({ kind: 'place', type, cx, cz, rot, id: p.id });
    if (!opts.silent) this.g.events.piecePlaced(p);
    return p;
  }

  remove(p: PieceInst, opts: { refund?: boolean; record?: boolean; silent?: boolean } = {}) {
    const i = this.pieces.indexOf(p);
    if (i < 0) return;
    this.pieces.splice(i, 1);
    for (const c of p.colliders) this.g.world.remove(c);
    for (const [a, b] of p.cells) {
      const k = a + ',' + b;
      if (this.occ.get(k) === p) this.occ.delete(k);
    }
    if (opts.refund !== false) this.budget[p.team] += PIECES[p.type].cost;
    this.group.remove(p.mesh);
    p.mesh.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
    });
    const minX = Math.min(...p.colliders.map((c) => c.minX));
    const maxX = Math.max(...p.colliders.map((c) => c.maxX));
    const minZ = Math.min(...p.colliders.map((c) => c.minZ));
    const maxZ = Math.max(...p.colliders.map((c) => c.maxZ));
    this.g.nav.updateRegion(minX, maxX, minZ, maxZ);
    if (opts.record) this.undoStack.push({ kind: 'remove', type: p.type, cx: p.cx, cz: p.cz, rot: p.rot, id: p.id });
    if (!opts.silent) this.g.events.pieceRemoved(p);
  }

  private updateNavFor(boxes: { minX: number; maxX: number; minZ: number; maxZ: number }[]) {
    const minX = Math.min(...boxes.map((b) => b.minX));
    const maxX = Math.max(...boxes.map((b) => b.maxX));
    const minZ = Math.min(...boxes.map((b) => b.minZ));
    const maxZ = Math.max(...boxes.map((b) => b.maxZ));
    this.g.nav.updateRegion(minX, maxX, minZ, maxZ);
  }

  /** 撤销玩家队伍上一步操作，返回提示文字 */
  undo(team: number): string {
    const e = this.undoStack.pop();
    if (!e) return '没有可撤销的操作';
    if (e.kind === 'place') {
      const p = this.pieceById(e.id);
      if (p) this.remove(p, { refund: true, record: false });
      return `已撤销放置：${PIECES[e.type].name}`;
    }
    const v = this.validate(team, e.type, e.cx, e.cz, e.rot);
    if (!v.ok) return `无法恢复：${v.reason}`;
    const p = this.place(team, e.type, e.cx, e.cz, e.rot, { record: false });
    return p ? `已恢复：${PIECES[e.type].name}` : '无法恢复';
  }

  piecesInZone(zoneIdx: number): PieceInst[] {
    return this.pieces.filter((p) => p.zone === zoneIdx);
  }

  /** 锁定阶段：再次检查每个区域的出生点通路，异常时从最后放置的构件开始移除 */
  lockCheck(): { zone: number; ok: boolean; removed: number }[] {
    this.g.nav.rebuildAll();
    const out: { zone: number; ok: boolean; removed: number }[] = [];
    for (const z of this.g.zones) {
      let removed = 0;
      while (!this.spawnReachable(z)) {
        const list = this.piecesInZone(z.idx);
        if (!list.length) break;
        this.remove(list[list.length - 1], { refund: true, silent: true });
        removed++;
      }
      out.push({ zone: z.idx, ok: this.spawnReachable(z), removed });
    }
    return out;
  }

  animate(time: number) {
    for (const p of this.pieces) {
      const t = Math.min(1, (time - p.bornT) / 0.35);
      if (t >= 1) {
        if (p.mesh.scale.y !== 1) p.mesh.scale.set(1, 1, 1);
        continue;
      }
      const s = t < 1 ? 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2) : 1;
      p.mesh.scale.set(1, Math.max(0.01, s), 1);
    }
  }

  // ---------------- AI 建造 ----------------

  private planFor(team: number): AIBuild['plan'] {
    const zone = this.zoneOfTeam(team);
    const tpl = pick(TEMPLATES);
    const mirrorIt = rand() < 0.5;
    const plan: AIBuild['plan'] = [];
    for (const pc of tpl.pieces) {
      let u = pc.u;
      let v = pc.v;
      let rot = pc.rot;
      if (mirrorIt) {
        const t = u;
        u = v;
        v = t;
        rot = mirrorRot(pc.type, rot);
      }
      // A 区本地坐标 → 世界坐标（再旋转到目标区域）
      const ax = -29 + u;
      const az = -29 + v;
      const [wx, wz] = rotXZ(ax, az, zone.k);
      plan.push({ type: pc.type, cx: wx, cz: wz, rot: (rot + zone.k) % 4 });
    }
    // 随机去掉 0~2 个，制造差异
    shuffle(plan);
    const drop = Math.floor(rand() * 3);
    plan.splice(0, drop);
    return plan;
  }

  startAI(team: number) {
    this.ai = this.ai.filter((a) => a.team !== team);
    this.ai.push({ team, plan: this.planFor(team), idx: 0, timer: randRange(0.4, 1.2), done: false, fails: 0, started: false, elapsed: 0 });
  }

  aiDone(team: number): boolean {
    const a = this.ai.find((x) => x.team === team);
    return !a || a.done;
  }

  /** 让 AI 在场上逐个“建起”构件，营造存在感 */
  updateAI(dt: number) {
    for (const a of this.ai) {
      if (a.done) continue;
      a.elapsed += dt;
      if (!a.started) {
        const zone = this.zoneOfTeam(a.team);
        const arrived = this.g.match.teams[a.team].members.some((m) => m.alive && m.pos.x > zone.rect.minX && m.pos.x < zone.rect.maxX && m.pos.z > zone.rect.minZ && m.pos.z < zone.rect.maxZ);
        if (arrived || a.elapsed > 12) a.started = true;
        else continue;
      }
      a.timer -= dt;
      if (a.timer > 0) continue;
      a.timer = randRange(0.7, 1.3);
      this.aiStep(a);
    }
  }

  private aiStep(a: AIBuild): boolean {
    while (a.idx < a.plan.length) {
      const pc = a.plan[a.idx++];
      if (this.budget[a.team] < PIECES[pc.type].cost) continue;
      if (this.tryPlaceJitter(a.team, pc.type, pc.cx, pc.cz, pc.rot)) return true;
    }
    // 模板用完：随机补全剩余预算
    if (this.budget[a.team] >= 1 && a.fails < 6) {
      if (this.randomFill(a.team)) return true;
      a.fails++;
      return false;
    }
    a.done = true;
    return false;
  }

  private tryPlaceJitter(team: number, type: PieceType, cx: number, cz: number, rot: number): boolean {
    const rots = [rot, (rot + 2) % 4, (rot + 1) % 4];
    for (const [dx, dz] of JITTER) {
      for (const r of rots) {
        if (this.validate(team, type, cx + dx, cz + dz, r).ok) {
          return !!this.place(team, type, cx + dx, cz + dz, r);
        }
      }
    }
    return false;
  }

  /** 随机补全：保持与已有构件至少 1 格间距，避免生成过窄的缝 */
  randomFill(team: number, record = false): boolean {
    const zone = this.zoneOfTeam(team);
    const left = this.budget[team];
    const weights: [PieceType, number][] = [
      ['pillar', 2],
      ['crate', 3],
      ['low', 2],
      ['high', 2.2],
      ['corner', 1.4],
    ];
    const options = weights.filter(([t]) => PIECES[t].cost <= left);
    if (!options.length) return false;
    for (let tries = 0; tries < 40; tries++) {
      const total = options.reduce((s, o) => s + o[1], 0);
      let k = rand() * total;
      let type: PieceType = options[0][0];
      for (const [t, w] of options) {
        k -= w;
        if (k <= 0) {
          type = t;
          break;
        }
      }
      const r: Rect = zone.rect;
      const x = randRange(r.minX + 1, r.maxX - 1);
      const z = randRange(r.minZ + 1, r.maxZ - 1);
      const cx = PIECES[type].even ? Math.round(x) : Math.floor(x) + 0.5;
      const cz = PIECES[type].even ? Math.round(z) : Math.floor(z) + 0.5;
      const rot = Math.floor(rand() * 4);
      if (!this.hasMargin(type, cx, cz, rot)) continue;
      if (this.validate(team, type, cx, cz, rot).ok) {
        return !!this.place(team, type, cx, cz, rot, { record });
      }
    }
    return false;
  }

  private hasMargin(type: PieceType, cx: number, cz: number, rot: number): boolean {
    const fp = footprint(type, cx, cz, rot);
    for (const [i, j] of fp.cells) {
      for (let dj = -1; dj <= 1; dj++)
        for (let di = -1; di <= 1; di++) {
          if (this.occ.has(i + di + ',' + (j + dj))) return false;
        }
    }
    return true;
  }

  /** 瞬间完成所有未完成的 AI 布置（玩家提前准备 / 计时结束时） */
  finishAll() {
    for (const a of this.ai) {
      a.started = true;
      let guard = 0;
      while (!a.done && guard++ < 80) this.aiStep(a);
      a.done = true;
    }
  }

  /** 玩家队伍的“队友建议布置”：只追加构件，不删除或移动玩家已放的构件 */
  autoFill(team: number): number {
    const zone = this.zoneOfTeam(team);
    const before = this.piecesInZone(zone.idx).length;
    const tpl = this.planFor(team);
    for (const pc of tpl) {
      if (this.budget[team] < PIECES[pc.type].cost) continue;
      const fp = footprint(pc.type, pc.cx, pc.cz, pc.rot);
      if (fp.cells.some(([i, j]) => this.occ.has(i + ',' + j))) continue;
      if (!this.hasMargin(pc.type, pc.cx, pc.cz, pc.rot)) continue;
      const v = this.validate(team, pc.type, pc.cx, pc.cz, pc.rot);
      if (v.ok) this.place(team, pc.type, pc.cx, pc.cz, pc.rot, { record: true });
    }
    let guard = 0;
    while (this.budget[team] >= 1 && guard++ < 12) {
      if (!this.randomFill(team, true)) break;
    }
    return this.piecesInZone(zone.idx).length - before;
  }

  pieceTypesAffordable(team: number): PieceType[] {
    return PIECE_ORDER.filter((t) => PIECES[t].cost <= this.budget[team]);
  }
}
