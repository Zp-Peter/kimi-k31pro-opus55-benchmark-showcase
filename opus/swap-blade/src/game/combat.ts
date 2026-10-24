// 近战判定与结算。
// 同一帧内先“收集”所有命中（以帧初的存活状态为准），再统一“结算”，
// 所以最后两队互相砍中会同时阵亡并判为平局，而不是由处理顺序决定胜负。

import { PHYS } from '../config';
import { DEG, clamp } from '../util';
import { WEAPONS, type AttackDef } from './weapons';
import type { Character } from './character';
import type { Game } from '../game';

export type HitKind = 'hit' | 'blocked' | 'parry' | 'guardbreak' | 'dodged';

export interface HitInfo {
  att: Character | null;
  tgt: Character;
  kind: HitKind;
  damage: number;
  atk: AttackDef | null;
  back: boolean;
  x: number;
  y: number;
  z: number;
  killed: boolean;
}

interface Pending {
  att: Character;
  tgt: Character;
  atk: AttackDef;
  dist: number;
}

export class Combat {
  private pending: Pending[] = [];

  constructor(private g: Game) {}

  /** 命中检测：距离、扇形方向、高度差与遮挡（胸口连线不能穿过墙体/矮墙） */
  testHit(att: Character, tgt: Character, atk: AttackDef): number {
    const dx = tgt.pos.x - att.pos.x;
    const dz = tgt.pos.z - att.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist - PHYS.radius > atk.reach) return -1;
    if (Math.abs(tgt.pos.y - att.pos.y) > 1.3) return -1;
    if (dist > 0.35) {
      const cos = (dx * att.fwdX + dz * att.fwdZ) / dist;
      const ang = Math.acos(clamp(cos, -1, 1));
      const half = (atk.arc / 2) * DEG + Math.atan2(PHYS.radius, dist);
      if (ang > half) return -1;
    }
    const ay = att.pos.y + PHYS.chest;
    const ty = tgt.pos.y + PHYS.chest;
    if (this.g.world.segmentBlocked(att.pos.x, ay, att.pos.z, tgt.pos.x, ty, tgt.pos.z)) return -1;
    return dist;
  }

  step() {
    const chars = this.g.chars;
    for (const a of chars) {
      if (!a.alive || a.state !== 'active' || !a.attack || !a.canFight) continue;
      for (const t of chars) {
        if (t === a || !t.alive || t.team === a.team || !t.canFight || a.hitSet.has(t)) continue;
        const d = this.testHit(a, t, a.attack);
        if (d >= 0) {
          a.hitSet.add(t);
          this.pending.push({ att: a, tgt: t, atk: a.attack, dist: d });
        }
      }
    }
    if (!this.pending.length) return;
    const list = this.pending;
    this.pending = [];
    for (const p of list) this.resolve(p);
  }

  private resolve(p: Pending) {
    const { att, tgt, atk } = p;
    if (!tgt.alive) return;
    const tw = WEAPONS[tgt.weapon];
    const hx = (att.pos.x + tgt.pos.x) / 2;
    const hz = (att.pos.z + tgt.pos.z) / 2;
    const hy = tgt.pos.y + PHYS.chest + 0.1;
    const info: HitInfo = { att, tgt, kind: 'hit', damage: 0, atk, back: false, x: hx, y: hy, z: hz, killed: false };

    if (tgt.iframe > 0) {
      info.kind = 'dodged';
      this.g.events.hit(info);
      return;
    }

    // 目标朝向与攻击者方向的夹角
    const tx = att.pos.x - tgt.pos.x;
    const tz = att.pos.z - tgt.pos.z;
    const tl = Math.hypot(tx, tz) || 1;
    const facing = Math.acos(clamp((tx * tgt.fwdX + tz * tgt.fwdZ) / tl, -1, 1));
    const frontal = facing <= 78 * DEG;
    info.back = facing >= 115 * DEG;
    const kx = -tx / tl;
    const kz = -tz / tl;

    let damage = 0;
    if (tgt.state === 'block' && frontal) {
      if (tgt.parryArmed && tgt.blockT <= tw.parryWindow) {
        info.kind = 'parry';
        att.stagger(atk.weight === 'heavy' ? 1.15 : 0.85);
        att.hitstop = 0.12;
        tgt.hitstop = 0.08;
        tgt.guard = 100;
        att.kbx -= kx * 2.5;
        att.kbz -= kz * 2.5;
        this.g.events.hit(info);
        return;
      }
      tgt.guard -= atk.guardDmg * tw.guardMult;
      tgt.guardDelay = 0.9;
      if (atk.guardBreak || tgt.guard <= 0) {
        info.kind = 'guardbreak';
        damage = atk.damage * 0.5;
        tgt.guard = 0;
        tgt.stagger(0.7);
        tgt.kbx += kx * atk.knock;
        tgt.kbz += kz * atk.knock;
      } else {
        info.kind = 'blocked';
        damage = atk.damage * atk.chip;
        tgt.kbx += kx * atk.knock * 0.6;
        tgt.kbz += kz * atk.knock * 0.6;
        att.hitstop = 0.05;
        tgt.hitstop = 0.05;
      }
    } else {
      info.kind = 'hit';
      damage = atk.damage;
      if (atk.minRange && p.dist < atk.minRange) damage *= atk.closeMult ?? 0.5;
      if (info.back) damage *= 1.25;
      tgt.flinch(atk.weight === 'heavy' ? 0.4 : 0.24);
      tgt.kbx += kx * atk.knock;
      tgt.kbz += kz * atk.knock;
      const stop = atk.weight === 'heavy' ? 0.12 : atk.weight === 'mid' ? 0.075 : 0.05;
      att.hitstop = Math.max(att.hitstop, stop);
      tgt.hitstop = Math.max(tgt.hitstop, stop);
    }
    info.damage = Math.round(damage);
    this.dealDamage(att, tgt, info.damage, info);
  }

  /** 统一扣血入口（攻击与结界伤害都走这里）。护甲优先抵消。 */
  dealDamage(att: Character | null, tgt: Character, dmg: number, info?: HitInfo) {
    if (!tgt.alive || dmg <= 0) {
      if (info) this.g.events.hit(info);
      return;
    }
    let left = dmg;
    if (tgt.armor > 0) {
      const a = Math.min(tgt.armor, left);
      tgt.armor -= a;
      left -= a;
    }
    tgt.hp -= left;
    tgt.flashT = 0.12;
    tgt.lastHurtTime = this.g.time;
    if (att) {
      tgt.lastHurtBy = att;
      att.dmgDealt += dmg;
    }
    const killed = tgt.hp <= 0;
    if (info) {
      info.killed = killed;
      this.g.events.hit(info);
    }
    if (killed) {
      tgt.die(this.g.time);
      tgt.killedBy = att;
      this.g.events.kill(att, tgt, info?.atk ?? null);
    }
  }
}
