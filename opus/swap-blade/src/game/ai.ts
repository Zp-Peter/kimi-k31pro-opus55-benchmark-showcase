// AI：感知（视野锥 + 遮挡 + 听觉）、目标选择、A* 寻路、接近/周旋/出手/格挡/闪避、卡住恢复、购买与建造期行为。
// 每个 AI 只把“非本队”角色当敌人：六名敌方 AI 互相之间同样会厮杀，不会集体追杀玩家。

import { DIFFICULTY, ECON, PHYS, PLAYER_TEAM, TIMING, type Difficulty } from '../config';
import { angleDiff, clamp, dirToYaw, pick, rand, randRange, wrapPi, DEG } from '../util';
import { WEAPONS, type WeaponId } from './weapons';
import type { Character } from './character';
import type { Game } from '../game';
import type { P2 } from '../world/nav';

interface Known {
  x: number;
  z: number;
  t: number;
  vis: boolean;
}

interface DefensePlan {
  kind: 'block' | 'dodge';
  start: number;
  until: number;
  from: Character;
}

const PERSONALITIES: { name: string; pref: WeaponId[]; aggr: number; armor: number }[] = [
  { name: '斗士', pref: ['axe', 'katana'], aggr: 1.0, armor: 0.6 },
  { name: '剑客', pref: ['katana', 'naginata'], aggr: 0.9, armor: 0.8 },
  { name: '枪手', pref: ['naginata', 'katana'], aggr: 0.75, armor: 0.7 },
  { name: '刺客', pref: ['tanto'], aggr: 1.15, armor: 0.9 },
  { name: '稳健', pref: ['katana'], aggr: 0.7, armor: 1.0 },
];

export class AIBrain {
  diff = DIFFICULTY.normal;
  pers = PERSONALITIES[1];
  known = new Map<Character, Known>();
  target: Character | null = null;
  reactUntil = 0;
  private perceiveT = rand() * 0.2;
  private targetT = 0;

  private path: P2[] | null = null;
  private pathI = 0;
  private pathGX = 0;
  private pathGZ = 0;
  private repathT = 0;
  private navVersion = -1;

  private strafeDir = 1;
  private strafeT = 0;
  private nextAttackT = 0;
  private aimErr = 0;
  private aimErrT = 0;
  private defense: DefensePlan | null = null;
  private reacted = new Map<Character, number>();

  private stuckT = 0;
  private stuckCheckT = 0;
  private lastX = 0;
  private lastZ = 0;
  private unstuckT = 0;
  private unstuckX = 0;
  private unstuckZ = 0;
  private stuckCount = 0;

  private roamGoal: P2 | null = null;
  private roamT = 0;
  private buyT = -1;
  private idleGoal: P2 | null = null;
  private idleT = 0;

  /** 本帧期望移动方向（世界坐标）与朝向 */
  private mx = 0;
  private mz = 0;
  private sprint = false;
  private wantYaw: number | null = null;

  /** 调试：玩家自动驾驶时也会用到 */
  autopilot = false;

  constructor(public ch: Character, private g: Game) {}

  newMatch() {
    this.pers = pick(PERSONALITIES);
    this.known.clear();
    this.target = null;
    this.defense = null;
  }

  setDifficulty(d: Difficulty) {
    this.diff = DIFFICULTY[d];
  }

  onBuyPhase() {
    this.buyT = randRange(0.6, 3.5);
    this.known.clear();
    this.target = null;
    this.path = null;
    this.defense = null;
    this.reacted.clear();
    this.roamGoal = null;
    this.stuckCount = 0;
  }

  /** 听到附近的挥刀/脚步：获得大致位置 */
  hear(src: Character, radius: number) {
    if (!this.ch.alive || src.team === this.ch.team || !src.alive) return;
    const d = Math.hypot(src.pos.x - this.ch.pos.x, src.pos.z - this.ch.pos.z);
    if (d > radius) return;
    const k = this.known.get(src);
    if (!k || !k.vis) this.known.set(src, { x: src.pos.x + randRange(-1, 1), z: src.pos.z + randRange(-1, 1), t: this.g.time, vis: false });
  }

  update(dt: number) {
    const ch = this.ch;
    const inp = ch.input;
    inp.fwd = 0;
    inp.right = 0;
    inp.sprint = false;
    inp.block = false;
    this.mx = 0;
    this.mz = 0;
    this.sprint = false;
    this.wantYaw = null;
    if (!ch.alive) return;
    const phase = this.g.match.phase;
    switch (phase) {
      case 'build':
        this.buildPhase(dt);
        break;
      case 'buy':
        this.buyPhase(dt);
        break;
      case 'combat':
        this.combat(dt);
        break;
      default:
        break;
    }
    this.applyMovement(dt);
  }

  // ---------------- 建造期 ----------------

  private buildPhase(dt: number) {
    const ch = this.ch;
    const m = this.g.match;
    const player = this.g.player.ch;
    if (ch.team === PLAYER_TEAM && !this.autopilot && player.alive) {
      // 玩家队友：跟在玩家身后，避开玩家正在瞄准的放置点，不动玩家的构件
      const gx = player.pos.x - player.fwdX * 3.2 + Math.cos(player.yaw) * 1.2;
      const gz = player.pos.z - player.fwdZ * 3.2 - Math.sin(player.yaw) * 1.2;
      const d = Math.hypot(gx - ch.pos.x, gz - ch.pos.z);
      const ghost = this.g.player.ghostPos;
      if (ghost && Math.hypot(ghost.x - ch.pos.x, ghost.z - ch.pos.z) < 2.6) {
        const ax = ch.pos.x - ghost.x;
        const az = ch.pos.z - ghost.z;
        const l = Math.hypot(ax, az) || 1;
        this.mx = ax / l;
        this.mz = az / l;
      } else if (d > 1.5) this.goTo(gx, gz, dt, d > 6);
      this.wantYaw = dirToYaw(player.pos.x - ch.pos.x, player.pos.z - ch.pos.z);
      return;
    }
    const zone = this.g.zones[m.teams[ch.team].buildZone];
    const inside = ch.pos.x > zone.rect.minX + 0.5 && ch.pos.x < zone.rect.maxX - 0.5 && ch.pos.z > zone.rect.minZ + 0.5 && ch.pos.z < zone.rect.maxZ - 0.5;
    if (!inside) {
      this.goTo(zone.center.x, zone.center.z, dt, true);
      return;
    }
    // 进入区域后在出生台附近“监工”，偶尔换位置，始终面向区域中心
    this.idleT -= dt;
    if (!this.idleGoal || this.idleT <= 0) {
      const p = zone.pad;
      this.idleGoal = { x: randRange(p.minX + 1, p.maxX - 1), z: randRange(p.minZ + 1, p.maxZ - 1) };
      this.idleT = randRange(3, 6);
    }
    const d = Math.hypot(this.idleGoal.x - ch.pos.x, this.idleGoal.z - ch.pos.z);
    if (d > 0.6) this.goTo(this.idleGoal.x, this.idleGoal.z, dt, false);
    this.wantYaw = dirToYaw(zone.center.x - ch.pos.x, zone.center.z - ch.pos.z);
  }

  // ---------------- 准备期 ----------------

  private buyPhase(dt: number) {
    const ch = this.ch;
    if (this.buyT > 0) {
      this.buyT -= dt;
      if (this.buyT <= 0) this.doBuy();
    }
    const zone = this.g.zones[this.g.match.teams[ch.team].spawnZone];
    this.idleT -= dt;
    if (!this.idleGoal || this.idleT <= 0) {
      const p = zone.pad;
      this.idleGoal = { x: randRange(p.minX + 0.8, p.maxX - 0.8), z: randRange(p.minZ + 0.8, p.maxZ - 0.8) };
      this.idleT = randRange(2, 5);
    }
    const d = Math.hypot(this.idleGoal.x - ch.pos.x, this.idleGoal.z - ch.pos.z);
    if (d > 0.5) {
      this.mx = (this.idleGoal.x - ch.pos.x) / d * 0.5;
      this.mz = (this.idleGoal.z - ch.pos.z) / d * 0.5;
    }
    this.wantYaw = dirToYaw(zone.inward.x, zone.inward.z);
  }

  doBuy() {
    const ch = this.ch;
    const shop = this.g.shop;
    const cur = WEAPONS[ch.weapon];
    const prefs = this.pers.pref;
    if (prefs[0] === 'tanto') {
      // 刺客：短刀 + 护甲，钱多时偶尔换打刀
      if (ch.money > 2600 && rand() < 0.3 && ch.weapon === 'tanto') shop.buyWeapon(ch, 'katana');
    } else if (ch.weapon === 'tanto' || cur.tier < WEAPONS[prefs[0]].tier) {
      let bought = false;
      for (const id of prefs) {
        const w = WEAPONS[id];
        if (w.tier <= cur.tier && ch.weapon !== 'tanto') break;
        if (ch.money >= w.price) {
          // 偶尔“存钱局”：钱不够心仪武器时不乱花
          if (id !== prefs[0] && ch.money < WEAPONS[prefs[0]].price && rand() < 0.25) break;
          bought = shop.buyWeapon(ch, id).ok;
          if (bought) break;
        }
      }
      if (!bought && ch.weapon === 'tanto' && ch.money >= WEAPONS.katana.price && rand() < 0.7) shop.buyWeapon(ch, 'katana');
    }
    // 存款很多时偶尔换更高级的武器（同样按原价付款），避免钱一直堆到上限
    if (ch.money >= 2400 && rand() < 0.45) {
      const better = (['naginata', 'axe'] as WeaponId[]).filter((id) => WEAPONS[id].tier > WEAPONS[ch.weapon].tier && ch.money >= WEAPONS[id].price);
      if (better.length) shop.buyWeapon(ch, pick(better));
    }
    if (ch.armor < ECON.armorPoints && ch.money >= shop.armorCost(ch) && rand() < this.pers.armor) shop.buyArmor(ch);
  }

  // ---------------- 战斗 ----------------

  private perceive() {
    const ch = this.ch;
    const now = this.g.time;
    const revealed = this.g.match.revealed;
    const ex = ch.pos.x;
    const ez = ch.pos.z;
    const ey = ch.pos.y + PHYS.eye;
    for (const e of this.g.chars) {
      if (e.team === ch.team) continue;
      if (!e.alive) {
        this.known.delete(e);
        continue;
      }
      const dx = e.pos.x - ex;
      const dz = e.pos.z - ez;
      const d = Math.hypot(dx, dz);
      let vis = false;
      if (d < 36) {
        const ang = Math.abs(angleDiff(ch.yaw, dirToYaw(dx, dz)));
        const inFov = ang < 72 * DEG || d < 3.5 || now - ch.lastHurtTime < 0.6;
        if (inFov) {
          const w = this.g.world;
          vis = !w.segmentBlocked(ex, ey, ez, e.pos.x, e.pos.y + 1.45, e.pos.z) || !w.segmentBlocked(ex, ey, ez, e.pos.x, e.pos.y + 0.9, e.pos.z);
        }
      }
      if (vis) {
        const k = this.known.get(e);
        this.known.set(e, { x: e.pos.x, z: e.pos.z, t: now, vis: true });
        if (!k || !k.vis) {
          // 新发现：需要反应时间才会出手
          if (this.target === null || this.target === e) this.reactUntil = Math.max(this.reactUntil, now + this.diff.react * randRange(0.8, 1.3));
        }
      } else {
        const k = this.known.get(e);
        if (k) k.vis = false;
        if (revealed) this.known.set(e, { x: e.pos.x, z: e.pos.z, t: now, vis: false });
      }
    }
    // 队友共享情报（报点）
    for (const mate of this.g.match.teams[ch.team].members) {
      if (mate === ch || !mate.alive || !mate.brain) continue;
      for (const [e, k] of mate.brain.known) {
        if (!k.vis || !e.alive) continue;
        const mine = this.known.get(e);
        if (!mine || (!mine.vis && mine.t < k.t)) this.known.set(e, { x: k.x, z: k.z, t: k.t, vis: false });
      }
    }
    // 玩家队友也能“听到”玩家看到的东西：玩家自身没有 brain，跳过
    for (const [e, k] of this.known) if (now - k.t > 12 && !k.vis) this.known.delete(e);
  }

  private chooseTarget() {
    const ch = this.ch;
    const now = this.g.time;
    let best: Character | null = null;
    let bestS = Infinity;
    for (const [e, k] of this.known) {
      if (!e.alive) continue;
      const d = Math.hypot(k.x - ch.pos.x, k.z - ch.pos.z);
      let s = d + (k.vis ? 0 : 7) + (now - k.t) * 0.5;
      if (e === this.target) s -= 3;
      if (e.hp < 45) s -= 2;
      if (ch.lastHurtBy === e && now - ch.lastHurtTime < 3) s -= 4;
      // 避免多队围攻同一人（玩家也一样）：已被 2 名以上其他队伍 AI 盯上的目标降低优先级
      let hunters = 0;
      for (const b of this.g.brains) if (b !== this && b.target === e && b.ch.alive && b.ch.team !== ch.team) hunters++;
      if (hunters >= 2) s += 6;
      if (s < bestS) {
        bestS = s;
        best = e;
      }
    }
    if (best !== this.target) {
      this.target = best;
      const k = best ? this.known.get(best) : null;
      if (k?.vis) this.reactUntil = Math.max(this.reactUntil, now + this.diff.react * randRange(0.7, 1.2));
    }
  }

  private combat(dt: number) {
    const ch = this.ch;
    const now = this.g.time;
    this.perceiveT -= dt;
    if (this.perceiveT <= 0) {
      this.perceiveT = 0.12 + rand() * 0.06;
      this.perceive();
    }
    this.targetT -= dt;
    if (this.targetT <= 0 || (this.target && !this.target.alive)) {
      this.targetT = 0.3;
      this.chooseTarget();
    }
    this.updateDefense();

    // 结界：在圈外或即将被圈到时优先回中心
    const ring = this.g.match.ring;
    const dc = Math.hypot(ch.pos.x, ch.pos.z);
    if (ring.active && dc > ring.r - 3) {
      this.goTo(0, 0, dt, true);
      if (this.target && this.known.get(this.target)?.vis) this.engageFacing(this.target);
      return;
    }

    const t = this.target;
    const k = t ? this.known.get(t) : undefined;
    if (t && k && k.vis) {
      this.engage(t, dt);
      return;
    }
    if (t && k) {
      const d = Math.hypot(k.x - ch.pos.x, k.z - ch.pos.z);
      if (d < 1.6 && !k.vis) {
        this.known.delete(t);
        this.target = null;
      } else {
        this.goTo(k.x, k.z, dt, d > 8);
        return;
      }
    }
    // 没有目标：玩家队友跟随玩家，其余队伍两人结伴巡游
    const player = this.g.player.ch;
    if (ch.team === PLAYER_TEAM && !this.autopilot && player.alive) {
      const gx = player.pos.x - player.fwdX * 2.5 + Math.cos(player.yaw) * 1.4;
      const gz = player.pos.z - player.fwdZ * 2.5 - Math.sin(player.yaw) * 1.4;
      const d = Math.hypot(gx - ch.pos.x, gz - ch.pos.z);
      if (d > 1.8) this.goTo(gx, gz, dt, d > 6);
      return;
    }
    const mates = this.g.match.teams[ch.team].members;
    const leader = mates.find((m) => m.alive) ?? ch;
    if (leader !== ch && leader.alive) {
      const gx = leader.pos.x - leader.fwdX * 2.2 + Math.cos(leader.yaw) * (ch.slot ? 1.3 : -1.3);
      const gz = leader.pos.z - leader.fwdZ * 2.2 - Math.sin(leader.yaw) * (ch.slot ? 1.3 : -1.3);
      const d = Math.hypot(gx - ch.pos.x, gz - ch.pos.z);
      if (d > 2.0) this.goTo(gx, gz, dt, d > 6);
      return;
    }
    this.roam(dt);
  }

  private roam(dt: number) {
    const ch = this.ch;
    this.roamT -= dt;
    const reached = this.roamGoal && Math.hypot(this.roamGoal.x - ch.pos.x, this.roamGoal.z - ch.pos.z) < 2;
    if (!this.roamGoal || reached || this.roamT <= 0) {
      const pois = this.g.pois;
      // 越到后期越倾向中央
      const late = 1 - clamp(this.g.match.timer / TIMING.round, 0, 1);
      const cand = pois.filter((p) => {
        const d = Math.hypot(p.x - ch.pos.x, p.z - ch.pos.z);
        return d > 6 && (late < 0.4 || Math.hypot(p.x, p.z) < 22 - late * 10);
      });
      const p = cand.length ? pick(cand) : pick(pois);
      this.roamGoal = { x: p.x, z: p.z };
      this.roamT = randRange(10, 18);
    }
    this.goTo(this.roamGoal.x, this.roamGoal.z, dt, false);
  }

  private updateDefense() {
    const ch = this.ch;
    const now = this.g.time;
    if (this.defense && now > this.defense.until) this.defense = null;
    if (this.defense) return;
    for (const e of this.g.chars) {
      if (!e.alive || e.team === ch.team || e.state !== 'windup' || !e.attack) continue;
      if (this.reacted.get(e) === e.attackSeq) continue;
      const k = this.known.get(e);
      if (!k || !k.vis) continue;
      const dx = ch.pos.x - e.pos.x;
      const dz = ch.pos.z - e.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > e.attack.reach + 1.2) continue;
      const aim = Math.abs(angleDiff(e.yaw, dirToYaw(dx, dz)));
      if (aim > 40 * DEG) continue;
      this.reacted.set(e, e.attackSeq);
      const windLeft = e.stateDur - e.stateT;
      const react = this.diff.react * randRange(0.55, 0.95);
      const activeAt = now + windLeft;
      const r = rand();
      const heavy = e.attack.weight === 'heavy';
      if (r < this.diff.parry * (heavy ? 1.4 : 1)) {
        // 卡准弹反时机
        const start = Math.max(now + react, activeAt - 0.07);
        if (start < activeAt + 0.02) this.defense = { kind: 'block', start, until: activeAt + e.attack.active + 0.08, from: e };
      } else if (heavy && r < this.diff.parry + this.diff.dodge * 2 && ch.dodgeCd <= 0) {
        this.defense = { kind: 'dodge', start: Math.max(now + react, activeAt - 0.12), until: activeAt + 0.25, from: e };
      } else if (r < this.diff.parry + this.diff.block) {
        const start = now + react;
        if (start < activeAt + 0.03) this.defense = { kind: 'block', start, until: activeAt + e.attack.active + randRange(0.08, 0.3), from: e };
      } else if (r < this.diff.parry + this.diff.block + this.diff.dodge && ch.dodgeCd <= 0) {
        this.defense = { kind: 'dodge', start: now + react, until: now + react + 0.3, from: e };
      }
      break;
    }
  }

  private engageFacing(t: Character) {
    const ch = this.ch;
    this.wantYaw = dirToYaw(t.pos.x - ch.pos.x, t.pos.z - ch.pos.z) + this.aimErr;
  }

  private engage(t: Character, dt: number) {
    const ch = this.ch;
    const now = this.g.time;
    const w = WEAPONS[ch.weapon];
    const next = ch.state === 'recovery' && ch.combo + 1 < w.attacks.length ? w.attacks[ch.combo + 1] : w.attacks[0];
    const dx = t.pos.x - ch.pos.x;
    const dz = t.pos.z - ch.pos.z;
    const d = Math.hypot(dx, dz);
    this.aimErrT -= dt;
    if (this.aimErrT <= 0) {
      this.aimErrT = randRange(0.3, 0.7);
      this.aimErr = randRange(-4, 4) * DEG;
    }
    this.engageFacing(t);

    // 防守计划优先
    const def = this.defense;
    if (def && now >= def.start) {
      if (def.kind === 'block') {
        ch.input.block = true;
        this.mx = -dx / (d || 1) * 0.3;
        this.mz = -dz / (d || 1) * 0.3;
        return;
      }
      if (def.kind === 'dodge' && ch.dodgeCd <= 0 && ch.state !== 'dodge') {
        // 向后或侧后方闪避（世界方向，由 applyMovement 转成本地输入）
        const side = rand() < 0.5 ? 1 : -1;
        const ux = dx / (d || 1);
        const uz = dz / (d || 1);
        this.mx = -ux * 0.8 + -uz * side * 0.6;
        this.mz = -uz * 0.8 + ux * side * 0.6;
        ch.input.dodge = true;
        this.defense = null;
        return;
      }
    }

    let ideal = next.reach * 0.78;
    if (ch.weapon === 'tanto') ideal = 1.35;
    if (ch.weapon === 'naginata') ideal = 2.8;
    if (ch.weapon === 'axe') ideal = 2.0;
    const lowHp = ch.hp < 28 && rand() < 0.02;
    const direct = d < 9 && this.g.nav.lineWalkable(ch.pos.x, ch.pos.z, t.pos.x, t.pos.z);
    if (d > ideal + 0.9 || !direct) {
      if (direct) {
        this.mx = dx / d;
        this.mz = dz / d;
        this.sprint = d > 6;
      } else this.goTo(t.pos.x, t.pos.z, dt, d > 6);
    } else {
      // 周旋：侧移 + 前后调整距离
      this.strafeT -= dt;
      if (this.strafeT <= 0) {
        this.strafeT = randRange(0.6, 1.4);
        this.strafeDir = rand() < 0.5 ? -1 : 1;
      }
      const ux = dx / d;
      const uz = dz / d;
      const radial = clamp((d - ideal) * 1.6, -1, 1);
      const side = this.strafeDir * 0.55;
      this.mx = ux * radial + -uz * side;
      this.mz = uz * radial + ux * side;
      if (lowHp) {
        this.mx = -ux;
        this.mz = -uz;
      }
    }

    // 出手判断
    if (now < this.reactUntil) return;
    if (ch.state !== 'idle' && !(ch.state === 'recovery' && ch.stateT >= (ch.attack?.chainAt ?? 9))) return;
    if (ch.state === 'idle' && now < this.nextAttackT) return;
    const reachOK = d - PHYS.radius <= next.reach - 0.15 + (next.lunge > 2 ? 0.25 : 0);
    if (!reachOK) return;
    const yawErr = Math.abs(angleDiff(ch.yaw, dirToYaw(dx, dz)));
    if (yawErr > Math.max(18 * DEG, (next.arc / 2) * DEG * 0.6)) return;
    if (this.g.world.segmentBlocked(ch.pos.x, ch.pos.y + PHYS.chest, ch.pos.z, t.pos.x, t.pos.y + PHYS.chest, t.pos.z)) return;
    // 对手在格挡时，重武器更积极、轻武器偶尔绕开
    const aggr = this.diff.aggr * this.pers.aggr;
    if (ch.state === 'recovery') {
      if (rand() < 0.55 * aggr) ch.input.attack = true;
      return;
    }
    if (t.state === 'block' && ch.weapon !== 'axe' && rand() < 0.5) {
      this.nextAttackT = now + randRange(0.3, 0.6);
      this.strafeDir = -this.strafeDir;
      return;
    }
    ch.input.attack = true;
    this.nextAttackT = now + randRange(0.35, 0.95) / Math.max(0.3, aggr);
  }

  // ---------------- 移动执行 ----------------

  private goTo(x: number, z: number, dt: number, sprint: boolean) {
    const ch = this.ch;
    const d = Math.hypot(x - ch.pos.x, z - ch.pos.z);
    if (d < 0.3) return;
    this.sprint = sprint;
    // 能直线走就直接走
    if (d < 12 && this.g.nav.lineWalkable(ch.pos.x, ch.pos.z, x, z)) {
      this.mx = (x - ch.pos.x) / d;
      this.mz = (z - ch.pos.z) / d;
      this.path = null;
      return;
    }
    this.repathT -= dt;
    const goalMoved = Math.hypot(x - this.pathGX, z - this.pathGZ) > 1.5;
    if (!this.path || this.repathT <= 0 || goalMoved || this.navVersion !== this.g.nav.version) {
      this.path = this.g.nav.findPath(ch.pos.x, ch.pos.z, x, z);
      this.pathI = 0;
      this.pathGX = x;
      this.pathGZ = z;
      this.repathT = randRange(0.5, 0.9);
      this.navVersion = this.g.nav.version;
    }
    if (!this.path || !this.path.length) {
      // 寻路失败：朝目标方向挪动，卡住检测会接管
      this.mx = (x - ch.pos.x) / d;
      this.mz = (z - ch.pos.z) / d;
      return;
    }
    let wp = this.path[this.pathI];
    while (wp && Math.hypot(wp.x - ch.pos.x, wp.z - ch.pos.z) < 0.45 && this.pathI < this.path.length - 1) {
      this.pathI++;
      wp = this.path[this.pathI];
    }
    // 能看到下一个点就跳过当前点
    if (this.pathI < this.path.length - 1) {
      const n = this.path[this.pathI + 1];
      if (this.g.nav.lineWalkable(ch.pos.x, ch.pos.z, n.x, n.z)) {
        this.pathI++;
        wp = n;
      }
    }
    const wd = Math.hypot(wp.x - ch.pos.x, wp.z - ch.pos.z) || 1;
    this.mx = (wp.x - ch.pos.x) / wd;
    this.mz = (wp.z - ch.pos.z) / wd;
  }

  private applyMovement(dt: number) {
    const ch = this.ch;
    const inp = ch.input;
    // 与同队角色保持一点距离，避免挤成一团
    for (const o of this.g.chars) {
      if (o === ch || !o.alive || o.team !== ch.team) continue;
      const dx = ch.pos.x - o.pos.x;
      const dz = ch.pos.z - o.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.2 && d > 0.01) {
        this.mx += (dx / d) * (1.2 - d) * 0.8;
        this.mz += (dz / d) * (1.2 - d) * 0.8;
      }
    }

    // 卡住检测与恢复
    this.stuckCheckT -= dt;
    const want = Math.hypot(this.mx, this.mz);
    if (this.stuckCheckT <= 0) {
      this.stuckCheckT = 0.5;
      const moved = Math.hypot(ch.pos.x - this.lastX, ch.pos.z - this.lastZ);
      this.lastX = ch.pos.x;
      this.lastZ = ch.pos.z;
      const busy = ch.state === 'block' || ch.state === 'windup' || ch.state === 'active' || ch.state === 'recovery' || ch.state === 'stagger';
      if (want > 0.4 && moved < 0.3 && !busy && !ch.confine) {
        this.stuckT += 0.5;
        if (this.stuckT >= 1.0) {
          this.stuckT = 0;
          this.stuckCount++;
          this.path = null;
          const a = rand() * Math.PI * 2;
          this.unstuckX = Math.cos(a);
          this.unstuckZ = Math.sin(a);
          this.unstuckT = 0.6;
          if (this.stuckCount >= 3) {
            this.roamGoal = null;
            this.target = null;
            this.stuckCount = 0;
          }
        }
      } else {
        this.stuckT = 0;
        if (moved > 1) this.stuckCount = 0;
      }
    }
    if (this.unstuckT > 0) {
      this.unstuckT -= dt;
      this.mx = this.unstuckX;
      this.mz = this.unstuckZ;
    }

    // 朝向：转身速度受限
    const ml = Math.hypot(this.mx, this.mz);
    let yawGoal = this.wantYaw;
    if (yawGoal === null && ml > 0.2) yawGoal = dirToYaw(this.mx, this.mz);
    if (yawGoal !== null) {
      const diff = angleDiff(ch.yaw, yawGoal);
      const maxTurn = this.diff.turn * dt * (ch.state === 'windup' ? 0.5 : ch.state === 'active' ? 0.25 : 1);
      ch.yaw = wrapPi(ch.yaw + clamp(diff, -maxTurn, maxTurn));
    }
    // 世界方向 → 角色本地输入
    if (ml > 0.01) {
      const s = Math.min(1, ml);
      const mx = (this.mx / ml) * s;
      const mz = (this.mz / ml) * s;
      const fx = ch.fwdX;
      const fz = ch.fwdZ;
      inp.fwd = mx * fx + mz * fz;
      inp.right = mx * Math.cos(ch.yaw) + mz * -Math.sin(ch.yaw);
    }
    inp.sprint = this.sprint;
  }
}
