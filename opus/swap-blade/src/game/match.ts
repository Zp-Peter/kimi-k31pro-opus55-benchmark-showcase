// 比赛流程状态机：建造 → 锁定检查 → 随机换区 → 购买准备 → 战斗 → 结算 →（中场重建）→ … → 整场结算

import { ECON, MODES, PLAYER_TEAM, TIMING, type ModeDef, type ModeId } from '../config';
import { lerp, shuffle } from '../util';
import { WEAPONS } from './weapons';
import type { Character } from './character';
import type { Game } from '../game';
import type { AttackDef } from './weapons';

export type Phase = 'menu' | 'build' | 'lock' | 'swap' | 'buy' | 'combat' | 'roundEnd' | 'matchEnd';

export interface TeamState {
  id: number;
  score: number;
  buildZone: number;
  spawnZone: number;
  ready: boolean;
  lossStreak: number;
  members: Character[];
}

export interface IncomeLine {
  base: number;
  win: number;
  loss: number;
  kills: number;
}

export interface RoundResult {
  round: number;
  winner: number | null;
  reason: 'elim' | 'time' | 'mutual';
  income: Map<Character, IncomeLine>;
  scores: number[];
}

export class Match {
  mode: ModeDef = MODES.quick;
  phase: Phase = 'menu';
  timer = 0;
  phaseTime = 0;
  round = 0;
  buildIndex = 0;
  midgameDone = false;
  teams: TeamState[] = [];
  lastResult: RoundResult | null = null;
  revealed = false;
  ring = { active: false, r: TIMING.ringStartRadius, tick: 0 };
  playerReadyBuild = false;
  playerReadyBuy = false;
  winner: number | null = null;
  firstBuyAfterBuild = false;
  roundKillMoney = new Map<Character, number>();
  history: { round: number; winner: number | null }[] = [];
  /** 每次换区的记录（便于调试与验收） */
  swapLog: { round: number; build: number[]; spawn: number[] }[] = [];

  constructor(private g: Game) {}

  initTeams() {
    this.teams = [0, 1, 2, 3].map((id) => ({
      id,
      score: 0,
      buildZone: id,
      spawnZone: (id + 1) % 4,
      ready: false,
      lossStreak: 0,
      members: this.g.chars.filter((c) => c.team === id),
    }));
  }

  get target() {
    return this.mode.target;
  }

  newMatch(modeId: ModeId) {
    this.mode = MODES[modeId];
    this.round = 0;
    this.buildIndex = 0;
    this.midgameDone = false;
    this.winner = null;
    this.lastResult = null;
    this.history = [];
    this.swapLog = [];
    for (const t of this.teams) {
      t.score = 0;
      t.lossStreak = 0;
      t.ready = false;
    }
    for (const c of this.g.chars) {
      c.money = ECON.start;
      c.weapon = 'tanto';
      c.armor = 0;
      c.kills = 0;
      c.deaths = 0;
      c.dmgDealt = 0;
      c.diedThisRound = false;
      c.boughtThisPhase = null;
      c.resetForRound();
    }
    for (const b of this.g.brains) b.newMatch();
    this.g.build.clearAll();
    this.enterBuild(false);
  }

  private setPhase(p: Phase, t: number) {
    this.phase = p;
    this.timer = t;
    this.phaseTime = 0;
  }

  // ---------------- 建造 ----------------

  enterBuild(isRebuild: boolean) {
    if (isRebuild) this.g.build.clearAll();
    this.buildIndex = isRebuild ? 1 : 0;
    // 重新分配建造区域；中场重建时尽量让每队拿到不同于上次的区域
    const prev = this.teams.map((t) => t.buildZone);
    let perm = shuffle([0, 1, 2, 3]);
    if (isRebuild) {
      for (let i = 0; i < 50 && perm.some((z, t) => z === prev[t]); i++) perm = shuffle([0, 1, 2, 3]);
    }
    this.teams.forEach((t, i) => {
      t.buildZone = perm[i];
      t.ready = false;
    });
    this.g.build.resetBudgets();
    this.g.build.undoStack = [];
    this.playerReadyBuild = false;
    // 所有 8 人（含上回合阵亡者）都回到中央高台集合，再各自走去负责的区域
    const n = this.g.chars.length;
    this.g.chars.forEach((c, i) => {
      c.resetForRound();
      c.confine = null;
      c.canFight = false;
      const a = (i / n) * Math.PI * 2 + Math.PI / 8;
      const x = Math.cos(a) * 2.7;
      const z = Math.sin(a) * 2.7;
      const zone = this.g.zones[this.teams[c.team].buildZone];
      c.place(x, z, Math.atan2(-(zone.center.x - x), -(zone.center.z - z)));
    });
    for (const t of this.teams) if (t.id !== PLAYER_TEAM) this.g.build.startAI(t.id);
    this.setPhase('build', isRebuild ? TIMING.rebuild : TIMING.build);
    this.g.events.phase('build', { isRebuild });
  }

  confirmPlayerBuildReady() {
    if (this.phase !== 'build') return;
    this.playerReadyBuild = true;
    this.teams[PLAYER_TEAM].ready = true;
    this.g.build.finishAll();
  }

  private enterLock() {
    this.g.build.finishAll();
    for (const t of this.teams) t.ready = true;
    const res = this.g.build.lockCheck();
    for (const c of this.g.chars) c.canFight = false;
    this.setPhase('lock', TIMING.lock);
    this.g.events.phase('lock', { lock: res });
  }

  // ---------------- 换区 ----------------

  /** 一一分配且任何队伍都不出生在自己本批次建造的区域（错位排列） */
  assignSpawns() {
    const build = this.teams.map((t) => t.buildZone);
    let perm: number[] = [];
    for (let guard = 0; guard < 200; guard++) {
      perm = shuffle([0, 1, 2, 3]);
      if (perm.every((z, t) => z !== build[t])) break;
    }
    this.teams.forEach((t, i) => (t.spawnZone = perm[i]));
    this.swapLog.push({ round: this.round + 1, build, spawn: perm.slice() });
    // 自检
    const set = new Set(perm);
    if (set.size !== 4 || perm.some((z, t) => z === build[t])) console.error('[swap] invalid assignment', build, perm);
  }

  private placeAtSpawns() {
    for (const t of this.teams) {
      const zone = this.g.zones[t.spawnZone];
      t.members.forEach((m, i) => {
        const s = zone.spawns[i];
        m.place(s.x, s.z, s.yaw);
        m.confine = zone.pad;
      });
    }
  }

  private enterSwap() {
    this.assignSpawns();
    this.round++;
    this.prepareRoundCharacters();
    this.placeAtSpawns();
    this.firstBuyAfterBuild = true;
    this.setPhase('swap', TIMING.swap);
    this.g.events.phase('swap', {});
  }

  // ---------------- 购买 / 准备 ----------------

  private prepareRoundCharacters() {
    for (const c of this.g.chars) {
      if (c.diedThisRound) {
        // 阵亡者恢复基础武器、失去护甲；存活者保留所持武器与剩余护甲
        c.weapon = 'tanto';
        c.armor = 0;
      }
      c.diedThisRound = false;
      c.boughtThisPhase = null;
      c.armorPaidThisPhase = 0;
      c.resetForRound();
      c.canFight = false;
    }
  }

  private enterBuy(newRound: boolean) {
    if (newRound) {
      this.assignSpawns();
      this.round++;
      this.prepareRoundCharacters();
      this.placeAtSpawns();
    }
    this.playerReadyBuy = false;
    this.roundKillMoney.clear();
    const t = this.firstBuyAfterBuild ? TIMING.buyAfterBuild : TIMING.buy;
    this.firstBuyAfterBuild = false;
    this.setPhase('buy', t);
    for (const b of this.g.brains) b.onBuyPhase();
    this.g.events.phase('buy', { showSwap: newRound });
  }

  confirmPlayerBuyReady() {
    if (this.phase !== 'buy' || this.playerReadyBuy) return;
    this.playerReadyBuy = true;
    this.timer = Math.min(this.timer, TIMING.readyShortcut);
  }

  // ---------------- 战斗 ----------------

  private enterCombat() {
    for (const c of this.g.chars) {
      c.confine = null;
      c.canFight = c.alive;
    }
    this.revealed = false;
    this.ring.active = false;
    this.ring.r = TIMING.ringStartRadius;
    this.ring.tick = 0;
    this.setPhase('combat', TIMING.round);
    this.g.events.phase('combat', {});
  }

  onKill(att: Character | null, tgt: Character, atk: AttackDef | null) {
    void atk;
    if (att && att.team !== tgt.team) {
      att.kills++;
      att.roundKills++;
      const reward = WEAPONS[att.weapon].killReward;
      att.money = Math.min(ECON.max, att.money + reward);
      this.roundKillMoney.set(att, (this.roundKillMoney.get(att) ?? 0) + reward);
    }
  }

  aliveTeams(): TeamState[] {
    return this.teams.filter((t) => t.members.some((m) => m.alive));
  }

  private endRound(winner: number | null, reason: RoundResult['reason']) {
    for (const c of this.g.chars) c.canFight = false;
    const income = new Map<Character, IncomeLine>();
    if (winner !== null) this.teams[winner].score++;
    for (const t of this.teams) {
      let lossBonus = 0;
      if (winner !== null) {
        if (t.id === winner) t.lossStreak = 0;
        else {
          t.lossStreak++;
          lossBonus = Math.min(ECON.lossMax, t.lossStreak * ECON.lossStep);
        }
      }
      for (const m of t.members) {
        const line: IncomeLine = { base: ECON.base, win: t.id === winner ? ECON.win : 0, loss: lossBonus, kills: this.roundKillMoney.get(m) ?? 0 };
        m.money = Math.min(ECON.max, m.money + line.base + line.win + line.loss);
        income.set(m, line);
      }
    }
    this.lastResult = { round: this.round, winner, reason, income, scores: this.teams.map((t) => t.score) };
    this.history.push({ round: this.round, winner });
    this.ring.active = false;
    this.setPhase('roundEnd', TIMING.roundEnd);
    this.g.events.roundEnd(this.lastResult);
  }

  private afterRound() {
    const top = Math.max(...this.teams.map((t) => t.score));
    if (top >= this.mode.target) {
      this.winner = this.teams.find((t) => t.score >= this.mode.target)!.id;
      this.setPhase('matchEnd', 0);
      this.g.events.matchEnd(this.winner);
      return;
    }
    if (this.mode.midgameAt > 0 && !this.midgameDone && top >= this.mode.midgameAt) {
      this.midgameDone = true;
      this.enterBuild(true);
      return;
    }
    this.enterBuy(true);
  }

  update(dt: number) {
    if (this.phase === 'menu' || this.phase === 'matchEnd') return;
    this.phaseTime += dt;
    this.timer -= dt;
    switch (this.phase) {
      case 'build': {
        this.g.build.updateAI(dt);
        for (const t of this.teams) if (t.id !== PLAYER_TEAM) t.ready = this.g.build.aiDone(t.id);
        if (this.playerReadyBuild && this.teams.every((t) => t.ready)) this.enterLock();
        else if (this.timer <= 0) this.enterLock();
        break;
      }
      case 'lock':
        if (this.timer <= 0) this.enterSwap();
        break;
      case 'swap':
        if (this.timer <= 0) this.enterBuy(false);
        break;
      case 'buy':
        if (this.timer <= 0) this.enterCombat();
        break;
      case 'combat': {
        if (this.timer <= TIMING.revealAt && !this.revealed) {
          this.revealed = true;
          this.g.events.reveal();
        }
        if (this.timer <= TIMING.ringAt) {
          if (!this.ring.active) this.g.events.ringStart();
          this.ring.active = true;
          const k = 1 - Math.max(0, this.timer) / TIMING.ringAt;
          this.ring.r = lerp(TIMING.ringStartRadius, TIMING.ringEndRadius, k);
          this.ring.tick += dt;
          if (this.ring.tick >= 0.5) {
            this.ring.tick -= 0.5;
            for (const c of this.g.chars) {
              if (!c.alive) continue;
              if (Math.hypot(c.pos.x, c.pos.z) > this.ring.r) this.g.combat.dealDamage(null, c, TIMING.ringDps * 0.5);
            }
          }
        }
        const alive = this.aliveTeams();
        if (alive.length <= 1) this.endRound(alive.length ? alive[0].id : null, alive.length ? 'elim' : 'mutual');
        else if (this.timer <= 0) this.endRound(null, 'time');
        break;
      }
      case 'roundEnd':
        if (this.timer <= 0) this.afterRound();
        break;
    }
  }
}
