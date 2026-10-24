// 角色：真人与 AI 共用同一套移动、碰撞、攻击状态机与冷却规则。

import * as THREE from 'three';
import { ECON, PHYS } from '../config';
import { clamp, type Rect } from '../util';
import { groundHeight } from '../world/layout';
import { WEAPONS, type AttackDef, type WeaponId } from './weapons';
import type { Game } from '../game';
import type { AIBrain } from './ai';

export type CState = 'idle' | 'windup' | 'active' | 'recovery' | 'block' | 'flinch' | 'stagger' | 'dodge' | 'dead';

export interface CharInput {
  fwd: number;
  right: number;
  sprint: boolean;
  block: boolean;
  attack: boolean;
  dodge: boolean;
}

export class Character {
  id: number;
  name: string;
  team: number;
  slot: number;
  isPlayer: boolean;

  pos = new THREE.Vector3();
  vx = 0;
  vz = 0;
  kbx = 0;
  kbz = 0;
  yaw = 0;
  pitch = 0;
  speed2D = 0;

  hp = PHYS.maxHp;
  armor = 0;
  alive = true;
  money = ECON.start;
  weapon: WeaponId = 'tanto';
  boughtThisPhase: WeaponId | null = null;
  armorPaidThisPhase = 0;
  diedThisRound = false;
  kills = 0;
  deaths = 0;
  dmgDealt = 0;
  roundKills = 0;
  killedBy: Character | null = null;

  input: CharInput = { fwd: 0, right: 0, sprint: false, block: false, attack: false, dodge: false };

  state: CState = 'idle';
  stateT = 0;
  stateDur = 0;
  combo = 0;
  attack: AttackDef | null = null;
  attackSeq = 0;
  hitSet = new Set<Character>();
  attackBuffer = 0;
  dodgeBuffer = 0;
  blockT = 0;
  parryArmed = false;
  lastBlockEnd = -10;
  guard = 100;
  guardDelay = 0;
  dodgeCd = 0;
  dodgeX = 0;
  dodgeZ = 0;
  iframe = 0;
  hitstop = 0;
  flashT = 0;
  lastHurtTime = -10;
  lastHurtBy: Character | null = null;
  deathTime = -10;

  confine: Rect | null = null;
  canFight = false;
  stepAccum = 0;
  brain: AIBrain | null = null;
  // 视图对象（CharModel），由 Game 设置
  model: { dispose(): void } | null = null;

  constructor(id: number, name: string, team: number, slot: number, isPlayer: boolean) {
    this.id = id;
    this.name = name;
    this.team = team;
    this.slot = slot;
    this.isPlayer = isPlayer;
  }

  get w() {
    return WEAPONS[this.weapon];
  }

  get fwdX() {
    return -Math.sin(this.yaw);
  }
  get fwdZ() {
    return -Math.cos(this.yaw);
  }

  /** 新回合 / 新阶段的完整复位（不含金钱与武器） */
  resetForRound() {
    this.hp = PHYS.maxHp;
    this.alive = true;
    this.state = 'idle';
    this.stateT = 0;
    this.stateDur = 0;
    this.attack = null;
    this.combo = 0;
    this.hitSet.clear();
    this.attackBuffer = 0;
    this.dodgeBuffer = 0;
    this.blockT = 0;
    this.parryArmed = false;
    this.guard = 100;
    this.guardDelay = 0;
    this.dodgeCd = 0;
    this.iframe = 0;
    this.hitstop = 0;
    this.vx = this.vz = this.kbx = this.kbz = 0;
    this.roundKills = 0;
    this.killedBy = null;
    this.lastHurtBy = null;
    this.input.attack = this.input.dodge = this.input.block = false;
  }

  place(x: number, z: number, yaw: number) {
    this.pos.set(x, groundHeight(x, z), z);
    this.yaw = yaw;
    this.pitch = 0;
    this.vx = this.vz = this.kbx = this.kbz = 0;
  }

  private setState(s: CState, dur = 0) {
    if (this.state === 'block' && s !== 'block') this.lastBlockEnd = this.now;
    this.state = s;
    this.stateT = 0;
    this.stateDur = dur;
  }

  now = 0;

  startAttack(i: number, g: Game) {
    const a = this.w.attacks[i];
    if (!a) return;
    this.combo = i;
    this.attack = a;
    this.attackSeq++;
    this.hitSet.clear();
    this.attackBuffer = 0;
    this.setState('windup', a.windup);
    g.events.windup(this, a);
  }

  private startBlock() {
    this.setState('block');
    this.blockT = 0;
    // 连续快速举盾不给弹反窗口，避免无脑连点
    this.parryArmed = this.now - this.lastBlockEnd > 0.35;
  }

  private startDodge(g: Game) {
    let dx = 0;
    let dz = 0;
    const f = this.input.fwd;
    const r = this.input.right;
    if (Math.abs(f) + Math.abs(r) > 0.1) {
      dx = this.fwdX * f + Math.cos(this.yaw) * r;
      dz = this.fwdZ * f - Math.sin(this.yaw) * r;
    } else {
      dx = -this.fwdX;
      dz = -this.fwdZ;
    }
    const l = Math.hypot(dx, dz) || 1;
    this.dodgeX = dx / l;
    this.dodgeZ = dz / l;
    this.dodgeCd = 1.0;
    this.dodgeBuffer = 0;
    this.iframe = 0.18;
    this.attack = null;
    this.setState('dodge', 0.24);
    g.events.dodge(this);
  }

  /** 受击硬直；霸体蓄力中不会被打断 */
  flinch(dur: number) {
    if (!this.alive) return;
    if (this.state === 'windup' && this.attack?.hyper) return;
    if (this.state === 'dodge') return;
    this.attackBuffer = 0;
    this.attack = null;
    this.setState('flinch', dur);
  }

  stagger(dur: number) {
    if (!this.alive) return;
    this.attackBuffer = 0;
    this.attack = null;
    this.setState('stagger', dur);
  }

  die(time: number) {
    this.alive = false;
    this.hp = 0;
    this.state = 'dead';
    this.stateT = 0;
    this.deathTime = time;
    this.diedThisRound = true;
    this.deaths++;
    this.vx = this.vz = this.kbx = this.kbz = 0;
    this.attack = null;
  }

  update(dt: number, g: Game) {
    this.now = g.time;
    if (this.flashT > 0) this.flashT -= dt;
    if (!this.alive) {
      this.stateT += dt;
      this.input.attack = this.input.dodge = false;
      return;
    }
    if (this.input.attack) this.attackBuffer = 0.28;
    if (this.input.dodge) this.dodgeBuffer = 0.16;
    this.input.attack = false;
    this.input.dodge = false;

    if (this.hitstop > 0) {
      this.hitstop -= dt;
      return;
    }

    this.attackBuffer -= dt;
    this.dodgeBuffer -= dt;
    this.dodgeCd -= dt;
    this.iframe -= dt;
    this.guardDelay -= dt;
    if (this.guardDelay <= 0 && this.state !== 'block') this.guard = Math.min(100, this.guard + 40 * dt);

    if (!this.canFight) {
      this.attackBuffer = 0;
      this.dodgeBuffer = 0;
      if (this.state !== 'idle') {
        this.attack = null;
        this.setState('idle');
      }
    }

    this.stateT += dt;
    const a = this.attack;
    switch (this.state) {
      case 'idle':
        if (!this.canFight) break;
        if (this.dodgeBuffer > 0 && this.dodgeCd <= 0) this.startDodge(g);
        else if (this.attackBuffer > 0) this.startAttack(0, g);
        else if (this.input.block) this.startBlock();
        break;
      case 'block':
        this.blockT += dt;
        if (this.dodgeBuffer > 0 && this.dodgeCd <= 0) this.startDodge(g);
        else if (this.attackBuffer > 0) this.startAttack(0, g);
        else if (!this.input.block) this.setState('idle');
        break;
      case 'windup':
        if (!a) {
          this.setState('idle');
          break;
        }
        // 假动作：蓄力早段按格挡可取消（重武器霸体蓄力不可取消）
        if (this.input.block && !a.hyper && this.stateT < this.stateDur * 0.75) {
          this.attack = null;
          this.startBlock();
          break;
        }
        if (this.stateT >= this.stateDur) {
          this.setState('active', a.active);
          this.kbx += this.fwdX * a.lunge;
          this.kbz += this.fwdZ * a.lunge;
          g.events.swing(this, a);
        }
        break;
      case 'active':
        if (!a) {
          this.setState('idle');
          break;
        }
        if (this.stateT >= this.stateDur) this.setState('recovery', a.recovery);
        break;
      case 'recovery':
        if (!a) {
          this.setState('idle');
          break;
        }
        if (this.attackBuffer > 0 && this.combo + 1 < this.w.attacks.length && this.stateT >= a.chainAt) {
          this.startAttack(this.combo + 1, g);
        } else if (this.dodgeBuffer > 0 && this.dodgeCd <= 0 && this.stateT >= this.stateDur * 0.45) {
          this.startDodge(g);
        } else if (this.stateT >= this.stateDur) {
          this.combo = 0;
          this.attack = null;
          this.setState('idle');
        }
        break;
      case 'flinch':
      case 'stagger':
      case 'dodge':
        if (this.stateT >= this.stateDur) this.setState('idle');
        break;
    }

    this.move(dt, g);
  }

  private move(dt: number, g: Game) {
    const w = this.w;
    let mult = 1;
    switch (this.state) {
      case 'windup':
        mult = this.attack?.hyper ? 0.35 : 0.6;
        break;
      case 'active':
        mult = 0.35;
        break;
      case 'recovery':
        mult = 0.6;
        break;
      case 'block':
        mult = 0.5;
        break;
      case 'flinch':
        mult = 0.3;
        break;
      case 'stagger':
        mult = 0.12;
        break;
    }
    let f = clamp(this.input.fwd, -1, 1);
    let r = clamp(this.input.right, -1, 1);
    const l = Math.hypot(f, r);
    if (l > 1) {
      f /= l;
      r /= l;
    }
    if (this.input.sprint && this.state === 'idle' && f > 0.3) mult *= PHYS.sprintMult;
    // 后退稍慢
    if (f < 0) f *= 0.85;
    const speed = PHYS.speed * w.moveMult * mult;
    const cy = Math.cos(this.yaw);
    const sy = Math.sin(this.yaw);
    const dvx = (-sy * f + cy * r) * speed;
    const dvz = (-cy * f - sy * r) * speed;

    if (this.state === 'dodge') {
      const t = clamp(this.stateT / this.stateDur, 0, 1);
      const sp = 17 * (1 - t) + 5 * t;
      this.vx = this.dodgeX * sp;
      this.vz = this.dodgeZ * sp;
    } else {
      const ax = dvx - this.vx;
      const az = dvz - this.vz;
      const al = Math.hypot(ax, az);
      const maxD = PHYS.accel * dt;
      if (al > maxD) {
        this.vx += (ax / al) * maxD;
        this.vz += (az / al) * maxD;
      } else {
        this.vx = dvx;
        this.vz = dvz;
      }
    }

    const ox = this.pos.x;
    const oz = this.pos.z;
    this.pos.x += (this.vx + this.kbx) * dt;
    this.pos.z += (this.vz + this.kbz) * dt;
    const kd = Math.exp(-10 * dt);
    this.kbx *= kd;
    this.kbz *= kd;

    const res = g.world.resolveCircle(this.pos, PHYS.radius, this.pos.y, this.pos.y + PHYS.height, PHYS.step);
    if (res.hit) {
      const vn = this.vx * res.nx + this.vz * res.nz;
      if (vn < 0) {
        this.vx -= vn * res.nx;
        this.vz -= vn * res.nz;
      }
      const kn = this.kbx * res.nx + this.kbz * res.nz;
      if (kn < 0) {
        this.kbx -= kn * res.nx;
        this.kbz -= kn * res.nz;
      }
    }
    if (this.confine) {
      const c = this.confine;
      const R = PHYS.radius + 0.05;
      this.pos.x = clamp(this.pos.x, c.minX + R, c.maxX - R);
      this.pos.z = clamp(this.pos.z, c.minZ + R, c.maxZ - R);
    }
    this.pos.y = groundHeight(this.pos.x, this.pos.z);
    const moved = Math.hypot(this.pos.x - ox, this.pos.z - oz);
    this.speed2D = moved / Math.max(dt, 1e-4);
    this.stepAccum += moved;
    const stride = this.speed2D > 5.5 ? 2.3 : 1.9;
    if (this.stepAccum > stride) {
      this.stepAccum = 0;
      if (this.state !== 'dodge') g.events.footstep(this);
    }
  }
}
