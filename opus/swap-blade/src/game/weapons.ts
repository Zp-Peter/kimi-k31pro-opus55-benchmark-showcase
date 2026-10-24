// 近战武器：四把手感差异明显的刀具 + 统一的挥砍关键帧。
// 关键帧定义在“眼睛坐标系”（x 右、y 上、-z 前），第一人称与第三人称共用，
// 因此 AI 的可见动作与真实判定时间轴完全一致。

import * as THREE from 'three';
import { clamp, ease } from '../util';

export type WeaponId = 'tanto' | 'katana' | 'naginata' | 'axe';
export type SwingId = 'r2l' | 'l2r' | 'overhead' | 'thrust' | 'sweep' | 'stab';

export interface AttackDef {
  swing: SwingId;
  windup: number;
  active: number;
  recovery: number;
  damage: number;
  reach: number;
  arc: number;
  guardDmg: number;
  chip: number;
  knock: number;
  lunge: number;
  chainAt: number;
  hyper?: boolean;
  guardBreak?: boolean;
  minRange?: number;
  closeMult?: number;
  weight: 'light' | 'mid' | 'heavy';
}

export interface WeaponDef {
  id: WeaponId;
  name: string;
  short: string;
  price: number;
  tier: number;
  desc: string;
  traits: string[];
  moveMult: number;
  killReward: number;
  parryWindow: number;
  guardMult: number;
  attacks: AttackDef[];
  stats: { dmg: number; speed: number; reach: number; arc: number; guard: number };
  idle: PoseDef;
  block: PoseDef;
}

export interface PoseDef {
  p: [number, number, number];
  b: [number, number, number];
  e: [number, number, number];
}

export interface Pose {
  pos: THREE.Vector3;
  quat: THREE.Quaternion;
}

export const WEAPONS: Record<WeaponId, WeaponDef> = {
  tanto: {
    id: 'tanto',
    name: '短刀',
    short: '短刀',
    price: 0,
    tier: 0,
    desc: '基础免费武器。出手极快、三连击收尾突刺，移动更灵活；距离最短，必须贴身。',
    traits: ['三连击', '移速 +10%', '击杀奖励 $500'],
    moveMult: 1.1,
    killReward: 500,
    parryWindow: 0.2,
    guardMult: 1.25,
    attacks: [
      { swing: 'r2l', windup: 0.11, active: 0.08, recovery: 0.22, damage: 18, reach: 1.95, arc: 80, guardDmg: 16, chip: 0.25, knock: 1.2, lunge: 2.4, chainAt: 0.12, weight: 'light' },
      { swing: 'l2r', windup: 0.1, active: 0.08, recovery: 0.22, damage: 18, reach: 1.95, arc: 80, guardDmg: 16, chip: 0.25, knock: 1.2, lunge: 2.4, chainAt: 0.12, weight: 'light' },
      { swing: 'stab', windup: 0.16, active: 0.09, recovery: 0.4, damage: 30, reach: 2.15, arc: 40, guardDmg: 26, chip: 0.25, knock: 3.0, lunge: 4.2, chainAt: 2, weight: 'mid' },
    ],
    stats: { dmg: 1, speed: 5, reach: 1, arc: 2, guard: 2 },
    idle: { p: [0.3, -0.29, -0.5], b: [-0.3, 0.78, -0.55], e: [-0.2, -0.55, -0.8] },
    block: { p: [0.14, -0.12, -0.42], b: [-0.94, 0.3, -0.12], e: [0, -0.1, -1] },
  },
  katana: {
    id: 'katana',
    name: '打刀',
    short: '打刀',
    price: 600,
    tier: 1,
    desc: '攻防均衡的主力武器。横斩范围宽，两段连斩，格挡稳定。',
    traits: ['两段横斩', '格挡稳定', '击杀奖励 $350'],
    moveMult: 1.0,
    killReward: 350,
    parryWindow: 0.18,
    guardMult: 1.0,
    attacks: [
      { swing: 'r2l', windup: 0.2, active: 0.1, recovery: 0.3, damage: 34, reach: 2.5, arc: 100, guardDmg: 28, chip: 0.12, knock: 1.8, lunge: 2.6, chainAt: 0.18, weight: 'mid' },
      { swing: 'l2r', windup: 0.18, active: 0.1, recovery: 0.38, damage: 38, reach: 2.5, arc: 100, guardDmg: 30, chip: 0.12, knock: 2.2, lunge: 2.6, chainAt: 2, weight: 'mid' },
    ],
    stats: { dmg: 3, speed: 3, reach: 3, arc: 4, guard: 4 },
    idle: { p: [0.3, -0.31, -0.55], b: [-0.28, 0.8, -0.52], e: [-0.15, -0.5, -0.85] },
    block: { p: [0.27, -0.06, -0.52], b: [-0.97, 0.24, -0.05], e: [0, -0.15, -1] },
  },
  naginata: {
    id: 'naginata',
    name: '薙刀',
    short: '薙刀',
    price: 1000,
    tier: 2,
    desc: '长柄武器。突刺距离全场最远，第二段宽幅横扫；贴身时只能用柄打（伤害减半），收招慢。',
    traits: ['最长突刺', '宽幅横扫', '贴身伤害减半'],
    moveMult: 0.93,
    killReward: 300,
    parryWindow: 0.16,
    guardMult: 1.0,
    attacks: [
      { swing: 'thrust', windup: 0.3, active: 0.11, recovery: 0.42, damage: 40, reach: 3.45, arc: 28, minRange: 1.45, closeMult: 0.5, guardDmg: 32, chip: 0.15, knock: 2.8, lunge: 1.6, chainAt: 0.25, weight: 'mid' },
      { swing: 'sweep', windup: 0.36, active: 0.13, recovery: 0.52, damage: 30, reach: 2.95, arc: 150, guardDmg: 30, chip: 0.15, knock: 2.4, lunge: 1.0, chainAt: 2, weight: 'mid' },
    ],
    stats: { dmg: 3, speed: 2, reach: 5, arc: 3, guard: 3 },
    idle: { p: [0.26, -0.33, -0.38], b: [-0.14, 0.4, -0.9], e: [0, -0.9, -0.4] },
    block: { p: [0.22, -0.1, -0.42], b: [-0.95, 0.3, -0.08], e: [0, -0.1, -1] },
  },
  axe: {
    id: 'axe',
    name: '鬼斧',
    short: '鬼斧',
    price: 1500,
    tier: 3,
    desc: '一击重创（75）。蓄力期间霸体不被打断，劈中格挡必定破防；出手慢、落空后破绽极大，怕弹反与闪避。',
    traits: ['霸体蓄力', '必定破防', '移速 -12%'],
    moveMult: 0.88,
    killReward: 200,
    parryWindow: 0.15,
    guardMult: 0.8,
    attacks: [
      { swing: 'overhead', windup: 0.58, active: 0.13, recovery: 0.72, damage: 75, reach: 2.6, arc: 80, hyper: true, guardBreak: true, guardDmg: 100, chip: 0.5, knock: 4.5, lunge: 3.2, chainAt: 2, weight: 'heavy' },
    ],
    stats: { dmg: 5, speed: 1, reach: 3, arc: 3, guard: 2 },
    idle: { p: [0.32, -0.36, -0.46], b: [-0.22, 0.85, -0.45], e: [-0.1, -0.45, -0.88] },
    block: { p: [0.26, -0.1, -0.46], b: [-0.85, 0.52, -0.08], e: [0, -0.1, -1] },
  },
};

export const WEAPON_ORDER: WeaponId[] = ['tanto', 'katana', 'naginata', 'axe'];

// ---------- 挥砍关键帧 ----------

interface SwingKeys {
  windup: PoseDef;
  active: PoseDef[];
}

function mirror(p: PoseDef): PoseDef {
  return { p: [-p.p[0], p.p[1], p.p[2]], b: [-p.b[0], p.b[1], p.b[2]], e: [-p.e[0], p.e[1], p.e[2]] };
}

const R2L: SwingKeys = {
  windup: { p: [0.42, -0.08, -0.28], b: [0.92, 0.14, 0.38], e: [0.3, 0, -1] },
  active: [
    { p: [0.4, -0.12, -0.42], b: [0.85, 0.05, -0.52], e: [-0.52, 0, -0.85] },
    { p: [0.06, -0.16, -0.56], b: [0.05, 0.0, -1], e: [-1, 0, 0] },
    { p: [-0.32, -0.2, -0.42], b: [-0.88, -0.08, -0.45], e: [-0.45, 0, 0.88] },
    { p: [-0.42, -0.24, -0.28], b: [-0.9, -0.14, 0.35], e: [0.35, 0, 0.95] },
  ],
};

const OVERHEAD: SwingKeys = (() => {
  const key = (a: number, p: [number, number, number]): PoseDef => ({ p, b: [0.06, Math.cos(a), -Math.sin(a)], e: [0, -Math.sin(a), -Math.cos(a)] });
  return {
    windup: key(-0.45, [0.12, 0.17, -0.18]),
    active: [key(0.25, [0.11, 0.12, -0.36]), key(0.9, [0.1, 0.03, -0.5]), key(1.5, [0.08, -0.13, -0.58]), key(2.15, [0.06, -0.32, -0.48])],
  };
})();

const THRUST: SwingKeys = {
  windup: { p: [0.25, -0.22, -0.1], b: [-0.06, 0.1, -1], e: [0, -1, -0.1] },
  active: [
    { p: [0.2, -0.19, -0.35], b: [-0.05, 0.08, -1], e: [0, -1, -0.08] },
    { p: [0.12, -0.16, -0.7], b: [-0.03, 0.05, -1], e: [0, -1, -0.05] },
    { p: [0.07, -0.14, -0.92], b: [-0.02, 0.04, -1], e: [0, -1, -0.04] },
  ],
};

const SWEEP: SwingKeys = {
  windup: { p: [0.48, -0.26, -0.16], b: [0.95, 0.04, 0.3], e: [0.3, 0, -0.95] },
  active: [
    { p: [0.46, -0.28, -0.36], b: [0.8, 0.02, -0.6], e: [-0.6, 0, -0.8] },
    { p: [0.05, -0.3, -0.56], b: [0, 0, -1], e: [-1, 0, 0] },
    { p: [-0.4, -0.3, -0.36], b: [-0.85, 0, -0.52], e: [-0.52, 0, 0.85] },
    { p: [-0.5, -0.3, -0.18], b: [-0.95, 0, 0.3], e: [0.3, 0, 0.95] },
  ],
};

const STAB: SwingKeys = {
  windup: { p: [0.3, -0.2, -0.2], b: [-0.05, 0.25, -1], e: [0, -1, -0.25] },
  active: [
    { p: [0.22, -0.17, -0.4], b: [-0.05, 0.2, -1], e: [0, -1, -0.2] },
    { p: [0.12, -0.14, -0.66], b: [-0.04, 0.15, -1], e: [0, -1, -0.15] },
    { p: [0.08, -0.13, -0.78], b: [-0.03, 0.12, -1], e: [0, -1, -0.12] },
  ],
};

const SWINGS: Record<SwingId, SwingKeys> = {
  r2l: R2L,
  l2r: { windup: mirror(R2L.windup), active: R2L.active.map(mirror) },
  overhead: OVERHEAD,
  thrust: THRUST,
  sweep: SWEEP,
  stab: STAB,
};

const STAGGER_POSE: PoseDef = { p: [0.36, -0.46, -0.4], b: [0.3, 0.6, -0.4], e: [0, -0.4, -0.9] };

// ---------- 姿态求值 ----------

const _x = new THREE.Vector3();
const _y = new THREE.Vector3();
const _z = new THREE.Vector3();
const _mat = new THREE.Matrix4();

export function poseFromDef(d: PoseDef, out?: Pose): Pose {
  const o = out ?? { pos: new THREE.Vector3(), quat: new THREE.Quaternion() };
  o.pos.set(d.p[0], d.p[1], d.p[2]);
  _y.set(d.b[0], d.b[1], d.b[2]).normalize();
  _z.set(-d.e[0], -d.e[1], -d.e[2]);
  _z.addScaledVector(_y, -_z.dot(_y));
  if (_z.lengthSq() < 1e-6) _z.set(0, 0, 1);
  _z.normalize();
  _x.crossVectors(_y, _z).normalize();
  _mat.makeBasis(_x, _y, _z);
  o.quat.setFromRotationMatrix(_mat);
  return o;
}

const cachePose = new Map<PoseDef, Pose>();
function P(d: PoseDef): Pose {
  let p = cachePose.get(d);
  if (!p) {
    p = poseFromDef(d);
    cachePose.set(d, p);
  }
  return p;
}

export function copyPose(src: Pose, dst: Pose) {
  dst.pos.copy(src.pos);
  dst.quat.copy(src.quat);
}

export function blendPose(a: Pose, b: Pose, t: number, out: Pose) {
  out.pos.lerpVectors(a.pos, b.pos, t);
  out.quat.slerpQuaternions(a.quat, b.quat, t);
}

/** 沿主动段关键帧插值（t ∈ [0,1]） */
export function activePose(swing: SwingId, t: number, out: Pose) {
  const keys = SWINGS[swing].active;
  const n = keys.length - 1;
  const f = clamp(t, 0, 1) * n;
  const i = Math.min(n - 1, Math.floor(f));
  blendPose(P(keys[i]), P(keys[i + 1]), f - i, out);
}

export function windupPose(swing: SwingId): Pose {
  return P(SWINGS[swing].windup);
}

export function lastActivePose(swing: SwingId): Pose {
  const k = SWINGS[swing].active;
  return P(k[k.length - 1]);
}

export function idlePose(w: WeaponDef): Pose {
  return P(w.idle);
}

export function blockPose(w: WeaponDef): Pose {
  return P(w.block);
}

export function staggerPose(): Pose {
  return P(STAGGER_POSE);
}

/** 角色状态 → 武器姿态的跟踪器（每个视图一份），处理状态切换时的平滑过渡 */
export interface PoseSource {
  state: string;
  stateT: number;
  stateDur: number;
  attackSeq: number;
  attack: AttackDef | null;
  weapon: WeaponId;
}

export class PoseTracker {
  cur: Pose = { pos: new THREE.Vector3(), quat: new THREE.Quaternion() };
  from: Pose = { pos: new THREE.Vector3(), quat: new THREE.Quaternion() };
  private tmp: Pose = { pos: new THREE.Vector3(), quat: new THREE.Quaternion() };
  private lastState = '';
  private lastSeq = -1;
  private lastWeapon: WeaponId | '' = '';
  private settle = 0;

  update(src: PoseSource, dt: number): Pose {
    const w = WEAPONS[src.weapon];
    if (src.weapon !== this.lastWeapon) {
      copyPose(idlePose(w), this.cur);
      copyPose(this.cur, this.from);
      this.lastWeapon = src.weapon;
      // 换武器时从下方抬起
      this.cur.pos.y -= 0.35;
      copyPose(this.cur, this.from);
      this.settle = 0;
    }
    if (src.state !== this.lastState || src.attackSeq !== this.lastSeq) {
      copyPose(this.cur, this.from);
      this.lastState = src.state;
      this.lastSeq = src.attackSeq;
      this.settle = 0;
    }
    this.settle += dt;
    const t = src.stateDur > 0 ? clamp(src.stateT / src.stateDur, 0, 1) : 1;
    const a = src.attack;
    switch (src.state) {
      case 'windup':
        if (a) blendPose(this.from, windupPose(a.swing), ease.outCubic(t), this.cur);
        break;
      case 'active':
        if (a) activePose(a.swing, ease.inOutQuad(t), this.cur);
        break;
      case 'recovery':
        if (a) {
          blendPose(lastActivePose(a.swing), idlePose(w), ease.inOutQuad(t), this.tmp);
          copyPose(this.tmp, this.cur);
        }
        break;
      case 'block':
        blendPose(this.from, blockPose(w), ease.outCubic(clamp(this.settle / 0.09, 0, 1)), this.cur);
        break;
      case 'flinch':
      case 'stagger':
        blendPose(this.from, staggerPose(), ease.outCubic(clamp(this.settle / 0.1, 0, 1)), this.cur);
        break;
      case 'dead':
        blendPose(this.from, staggerPose(), clamp(this.settle / 0.3, 0, 1), this.cur);
        break;
      default:
        blendPose(this.from, idlePose(w), ease.outCubic(clamp(this.settle / 0.18, 0, 1)), this.cur);
    }
    return this.cur;
  }
}
