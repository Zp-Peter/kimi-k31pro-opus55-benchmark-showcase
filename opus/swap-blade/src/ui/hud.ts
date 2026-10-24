// 局内 HUD：比分条、计时、存活人数、血量/护甲/架势、武器、金钱、队友状态、击杀信息、
// 准星与命中反馈、受击方向、伤害数字、建造栏、区域导航、观战提示、计分板、横幅与提示条。

import * as THREE from 'three';
import { BUILD, MODES, PHYS, PLAYER_TEAM, TEAMS, TIMING } from '../config';
import { $, clamp, el, fmtTime } from '../util';
import { WEAPONS, type AttackDef } from '../game/weapons';
import { PIECES, PIECE_ORDER, type PieceType } from '../world/pieces';
import type { HitKind } from '../game/combat';
import type { Character } from '../game/character';
import type { Game } from '../game';

interface Floater {
  el: HTMLElement;
  x: number;
  y: number;
  z: number;
  t: number;
  life: number;
}

interface DmgDir {
  el: HTMLElement;
  x: number;
  z: number;
  t: number;
}

const _v = new THREE.Vector3();

export const PIECE_ICONS: Record<PieceType, string> = {
  low: '<svg viewBox="0 0 44 34"><rect x="4" y="20" width="36" height="9" fill="#b8afa2" stroke="#1b1622" stroke-width="2"/><rect x="2" y="17" width="40" height="4" fill="#46506a" stroke="#1b1622" stroke-width="2"/></svg>',
  high: '<svg viewBox="0 0 44 34"><rect x="5" y="7" width="34" height="23" fill="#f6f0e4" stroke="#1b1622" stroke-width="2"/><rect x="2" y="3" width="40" height="5" fill="#46506a" stroke="#1b1622" stroke-width="2"/><rect x="20" y="8" width="3" height="22" fill="#4a3125"/></svg>',
  crate: '<svg viewBox="0 0 44 34"><rect x="9" y="8" width="26" height="22" fill="#c89a66" stroke="#1b1622" stroke-width="2"/><path d="M9 8 L35 30 M35 8 L9 30" stroke="#7d5137" stroke-width="2"/></svg>',
  pillar: '<svg viewBox="0 0 44 34"><rect x="17" y="4" width="10" height="27" fill="#bdb4a7" stroke="#1b1622" stroke-width="2"/><rect x="15" y="3" width="14" height="4" fill="#8e8578" stroke="#1b1622" stroke-width="1.5"/></svg>',
  corner: '<svg viewBox="0 0 44 34"><path d="M6 4 H38 V11 H13 V31 H6 Z" fill="#f7ecd4" stroke="#1b1622" stroke-width="2"/></svg>',
};

export class HUD {
  root = $('hud');
  private scores = $('scores');
  private phaseName = $('phaseName');
  private timer = $('timer');
  private roundInfo = $('roundInfo');
  private targetInfo = $('targetInfo');
  private ticker = $('ticker');
  private killfeed = $('killfeed');
  private mate = $('mate');
  private vitals = $('vitals');
  private hpNum = $('hpNum');
  private hpFill = $('hpFill');
  private hpGhost = $('hpGhost');
  private armorRow = $('armorRow');
  private armorFill = $('armorFill');
  private armorNum = $('armorNum');
  private guardRow = $('guardRow');
  private guardFill = $('guardFill');
  private weaponName = $('weaponName');
  private weaponTraits = $('weaponTraits');
  private ctrlHint = $('ctrlHint');
  private moneyBox = $('moneyBox');
  private money = $('money');
  private moneyDelta = $('moneyDelta');
  private crosshair = $('crosshair');
  private guardRing = $('guardRing');
  private hitmarker = $('hitmarker');
  private dmgdir = $('dmgdir');
  private floaterLayer = $('floaters');
  private waypoint = $('waypoint');
  private buildHud = $('buildHud');
  private buildStatus = $('buildStatus');
  private buildMsg = $('buildMsg');
  private buildBar = $('buildBar');
  private buildInfo = $('buildInfo');
  private buildKeys = $('buildKeys');
  private spectate = $('spectate');
  private toasts = $('toasts');
  private bannerEl = $('banner');
  private scoreboard = $('scoreboard');
  private resume = $('resume');

  private floaters: Floater[] = [];
  private dmgDirs: DmgDir[] = [];
  private hitT = 9;
  private hitLife = 0.25;
  private bannerT = 0;
  private moneyShown = -1;
  private moneyDeltaT = 0;
  private keys: Record<string, string> = {};
  private pieceEls: HTMLElement[] = [];
  private panelTimers = new Map<string, number>();
  private sbOpen = false;

  constructor(private g: Game) {
    PIECE_ORDER.forEach((t, i) => {
      const d = PIECES[t];
      const e = el('div', 'pc', `<kbd>${i + 1}</kbd><span class="pcost">${d.cost}</span>${PIECE_ICONS[t]}<div class="pn">${d.name}</div>`);
      this.buildBar.appendChild(e);
      this.pieceEls.push(e);
    });
    this.buildKeys.innerHTML =
      '<kbd>左键</kbd> 放置 · <kbd>R</kbd> 旋转 · <kbd>1-5</kbd>/滚轮 选择 · <kbd>右键</kbd>/<kbd>X</kbd> 删除并退还 · <kbd>Z</kbd> 撤销 · <kbd>F</kbd> 队友补全 · <kbd>Enter</kbd> 准备';
  }

  show(on: boolean) {
    this.root.classList.toggle('hidden', !on);
  }

  reset() {
    this.killfeed.innerHTML = '';
    this.floaterLayer.innerHTML = '';
    this.floaters = [];
    this.dmgDirs.forEach((d) => d.el.remove());
    this.dmgDirs = [];
    this.toasts.innerHTML = '';
    this.keys = {};
    this.moneyShown = -1;
    for (const id of ['swapPanel', 'roundPanel', 'midPanel']) this.hidePanel(id);
    this.bannerEl.classList.remove('show');
    this.bannerEl.style.opacity = '0';
  }

  /** 内容变化时才写 DOM */
  private setHTML(e: HTMLElement, key: string, html: string) {
    if (this.keys[key] === html) return;
    this.keys[key] = html;
    e.innerHTML = html;
  }

  // ---------------- 每帧 ----------------

  update(dt: number) {
    const g = this.g;
    const m = g.match;
    const me = g.player.ch;
    const phase = m.phase;

    // 比分条
    const top = Math.max(...m.teams.map((t) => t.score));
    const sk = m.teams.map((t) => `${t.score}:${t.members.map((c) => (c.alive ? 1 : 0)).join('')}`).join('|') + m.target;
    if (this.keys.scores !== sk) {
      this.keys.scores = sk;
      this.scores.innerHTML = m.teams
        .map((t) => {
          const c = TEAMS[t.id];
          const dots = t.members.map((x) => `<i class="${x.alive ? '' : 'dead'}"></i>`).join('');
          const lead = t.score > 0 && t.score === top ? `<span class="lead" style="width:${(t.score / m.target) * 100}%"></span>` : `<span class="lead" style="width:${(t.score / m.target) * 100}%;opacity:.45"></span>`;
          return `<div class="sc ${t.id === PLAYER_TEAM ? 'me' : ''}" style="--c:${c.css}"><span class="tn">${c.short}</span><span class="pts">${t.score}</span><span class="dots">${dots}</span>${t.id === PLAYER_TEAM ? '<span class="meTag">你</span>' : ''}${lead}</div>`;
        })
        .join('');
    }

    // 计时
    const names: Record<string, string> = {
      build: m.buildIndex > 0 ? '中场重建' : '建造阶段',
      lock: '锁定检查',
      swap: '随机换区',
      buy: '准备阶段',
      combat: '战斗',
      roundEnd: '回合结束',
      matchEnd: '比赛结束',
      menu: '',
    };
    this.phaseName.textContent = names[phase] ?? '';
    const showT = phase === 'build' || phase === 'buy' || phase === 'combat' || phase === 'roundEnd';
    this.timer.textContent = showT ? fmtTime(m.timer) : phase === 'swap' ? '换区' : phase === 'lock' ? '锁定' : '—';
    this.timer.classList.toggle('warn', phase === 'combat' && m.timer <= TIMING.revealAt && m.timer > TIMING.ringAt);
    this.timer.classList.toggle('danger', (phase === 'combat' && m.timer <= TIMING.ringAt) || (phase !== 'combat' && showT && m.timer <= 5 && phase !== 'roundEnd'));
    this.roundInfo.textContent = m.round > 0 ? `第 ${m.round} 回合 · ${m.mode.name}` : m.mode.name;
    const mid = m.mode.midgameAt > 0 ? (m.midgameDone ? '<br>已中场重建' : `<br>${m.mode.midgameAt} 分时中场重建`) : '<br>只建造一次';
    this.setHTML(this.targetInfo, 'target', `先到 <b>${m.target}</b> 分${mid}`);

    // 规则提示条
    let tick = '';
    let alert = false;
    if (phase === 'combat') {
      if (m.ring.active) {
        const out = me.alive && Math.hypot(me.pos.x, me.pos.z) > m.ring.r;
        tick = `结界收缩中 · 半径 ${m.ring.r.toFixed(0)} m · 圈外每秒 -${TIMING.ringDps} HP${out ? ' · 你在圈外！快回中央' : ''}`;
        alert = true;
      } else if (m.revealed) tick = `全员位置已暴露 · 剩 ${TIMING.ringAt} 秒时结界向中央高台收缩`;
      else tick = `防躲藏：剩 ${TIMING.revealAt} 秒全员显形 · 剩 ${TIMING.ringAt} 秒结界收缩 · 超时仍有多队存活判平局（不加分）`;
    } else if (phase === 'buy') tick = '按 B 打开军械架购买 · Enter 准备就绪 · 开战前出生台结界不会解除';
    else if (phase === 'build') tick = `只能在本队区域建造 · 红色斜线为保留区 · 不能封死出生点通路 · 预算 ${BUILD.budget} 点各队相同`;
    this.ticker.textContent = tick;
    this.ticker.classList.toggle('alert', alert);

    // 队友
    const mateCh = m.teams[PLAYER_TEAM].members.find((c) => c !== me);
    if (mateCh) {
      const d = Math.hypot(mateCh.pos.x - me.pos.x, mateCh.pos.z - me.pos.z);
      const hp = Math.max(0, Math.round(mateCh.hp));
      const status = !mateCh.alive ? '阵亡' : phase === 'build' ? '跟随你 · 不会改动你的构件' : `${WEAPONS[mateCh.weapon].name}${mateCh.armor > 0 ? ' · 甲' + Math.round(mateCh.armor) : ''} · ${d.toFixed(0)} m`;
      this.setHTML(
        this.mate,
        'mate',
        `<div class="mn">队友 ${mateCh.name}</div><div class="ms">${status}</div><div class="bar small"><div style="width:${mateCh.alive ? hp : 0}%;background:${TEAMS[PLAYER_TEAM].css}"></div></div>`,
      );
      this.mate.classList.toggle('dead', !mateCh.alive);
    }

    // 血量 / 护甲 / 架势 / 武器
    const alive = me.alive;
    this.vitals.style.display = alive && phase !== 'build' ? '' : 'none';
    if (alive) {
      const hp = Math.max(0, Math.ceil(me.hp));
      this.hpNum.textContent = String(hp);
      this.hpFill.style.width = `${(hp / PHYS.maxHp) * 100}%`;
      this.hpGhost.style.width = `${(hp / PHYS.maxHp) * 100}%`;
      this.hpFill.classList.toggle('low', hp <= 35);
      this.armorRow.style.display = me.armor > 0 ? '' : 'none';
      this.armorFill.style.width = `${(me.armor / 40) * 100}%`;
      this.armorNum.textContent = String(Math.ceil(me.armor));
      this.guardRow.style.display = me.guard < 99.5 ? '' : 'none';
      this.guardFill.style.width = `${me.guard}%`;
      const w = WEAPONS[me.weapon];
      this.setHTML(this.weaponName, 'wn', w.name);
      this.setHTML(this.weaponTraits, 'wt', w.traits.join(' · '));
      const hint =
        phase === 'build'
          ? '建造中：手持木槌，不能攻击'
          : phase === 'combat'
            ? '<kbd>左键</kbd> 攻击/连击 · <kbd>右键</kbd> 格挡（刚举起=弹反） · <kbd>空格</kbd> 闪避 · <kbd>Shift</kbd> 疾跑'
            : phase === 'buy'
              ? '<kbd>B</kbd> 军械架 · <kbd>Enter</kbd> 准备 · <kbd>Tab</kbd> 计分板'
              : '';
      this.setHTML(this.ctrlHint, 'hint', hint);
    }

    // 金钱
    if (this.moneyShown < 0) this.moneyShown = me.money;
    if (me.money !== this.moneyShown) {
      const d = me.money - this.moneyShown;
      this.moneyDelta.textContent = (d > 0 ? '+$' : '-$') + Math.abs(d);
      this.moneyDelta.style.color = d > 0 ? 'var(--ok)' : 'var(--bad)';
      this.moneyDeltaT = 2;
      this.moneyShown = me.money;
    }
    this.money.textContent = `$${me.money}`;
    this.moneyDeltaT -= dt;
    this.moneyDelta.style.opacity = this.moneyDeltaT > 0 ? String(Math.min(1, this.moneyDeltaT)) : '0';
    this.moneyBox.style.display = phase === 'build' ? 'none' : '';

    // 准星
    const fp = g.player.firstPerson && alive;
    this.crosshair.style.display = fp && phase !== 'swap' ? '' : 'none';
    this.crosshair.classList.toggle('build', phase === 'build');
    this.crosshair.classList.toggle('wide', me.state === 'windup' || me.state === 'active');
    const blocking = me.state === 'block';
    this.guardRing.classList.toggle('on', blocking);
    this.guardRing.classList.toggle('parry', blocking && me.parryArmed && me.blockT <= WEAPONS[me.weapon].parryWindow);
    this.hitT += dt;
    const ha = clamp(1 - this.hitT / this.hitLife, 0, 1);
    this.hitmarker.style.opacity = String(ha);
    this.hitmarker.style.transform = `scale(${1 + (1 - ha) * 0.4})`;

    // 受击方向
    const cam = g.camera;
    const yaw = Math.atan2(-cam.matrixWorld.elements[8], -cam.matrixWorld.elements[10]);
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    const rx = Math.cos(yaw);
    const rz = -Math.sin(yaw);
    for (let i = this.dmgDirs.length - 1; i >= 0; i--) {
      const d = this.dmgDirs[i];
      d.t += dt;
      if (d.t > 1.1) {
        d.el.remove();
        this.dmgDirs.splice(i, 1);
        continue;
      }
      const dx = d.x - cam.position.x;
      const dz = d.z - cam.position.z;
      const ang = Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz);
      d.el.style.transform = `rotate(${ang}rad)`;
      d.el.style.opacity = String(1 - d.t / 1.1);
    }

    // 伤害数字
    const W = window.innerWidth;
    const H = window.innerHeight;
    for (let i = this.floaters.length - 1; i >= 0; i--) {
      const f = this.floaters[i];
      f.t += dt;
      if (f.t > f.life) {
        f.el.remove();
        this.floaters.splice(i, 1);
        continue;
      }
      _v.set(f.x, f.y + f.t * 0.7, f.z).project(cam);
      if (_v.z > 1 || _v.z < -1) {
        f.el.style.display = 'none';
        continue;
      }
      f.el.style.display = '';
      f.el.style.left = `${((_v.x + 1) / 2) * W}px`;
      f.el.style.top = `${((1 - _v.y) / 2) * H}px`;
      const k = f.t / f.life;
      f.el.style.opacity = String(k < 0.7 ? 1 : 1 - (k - 0.7) / 0.3);
    }

    // 建造 HUD
    const building = phase === 'build' && alive && g.player.firstPerson;
    this.buildHud.classList.toggle('on', building);
    if (building) this.updateBuild();

    // 区域导航
    this.updateWaypoint(W, H);

    // 观战
    const spec = !alive && g.inGame() && phase !== 'matchEnd';
    this.spectate.classList.toggle('on', spec && !this.sbOpen);
    if (spec) {
      const t = g.player.specTarget;
      const html = t
        ? `<b style="color:${TEAMS[t.team].css}">观战：${TEAMS[t.team].short}·${t.name}${t.team === PLAYER_TEAM ? '（队友）' : ''}</b><div class="s2">你已阵亡，本回合不复活 · <kbd>左键</kbd>/<kbd>右键</kbd> 切换观战对象 · <kbd>Tab</kbd> 计分板</div>`
        : '<b>你已阵亡</b><div class="s2">等待回合结束…</div>';
      this.setHTML(this.spectate, 'spec', html);
    }

    // 计分板
    if (this.sbOpen) this.updateScoreboard();

    // 横幅
    if (this.bannerT > 0) {
      this.bannerT -= dt;
      if (this.bannerT <= 0) {
        this.bannerEl.classList.remove('show');
        this.bannerEl.style.opacity = '0';
      } else if (this.bannerT < 0.4) this.bannerEl.style.opacity = String(this.bannerT / 0.4);
    }

    // 面板计时
    for (const [id, t] of this.panelTimers) {
      const nt = t - dt;
      if (nt <= 0) {
        this.panelTimers.delete(id);
        this.hidePanel(id);
      } else this.panelTimers.set(id, nt);
    }
  }

  private updateBuild() {
    const g = this.g;
    const m = g.match;
    const p = g.player;
    const budget = g.build.budget[PLAYER_TEAM];
    const type = PIECE_ORDER[p.pieceIdx];
    const def = PIECES[type];
    this.pieceEls.forEach((e, i) => {
      e.classList.toggle('sel', i === p.pieceIdx);
      e.classList.toggle('poor', PIECES[PIECE_ORDER[i]].cost > budget);
    });
    const zone = g.zones[m.teams[PLAYER_TEAM].buildZone];
    let segs = '';
    for (let i = 0; i < BUILD.budget; i++) {
      const on = i < budget;
      const cost = on && i >= budget - def.cost && !p.targetPiece;
      segs += `<i class="${cost ? 'cost' : on ? 'on' : ''}"></i>`;
    }
    const others = m.teams
      .filter((t) => t.id !== PLAYER_TEAM)
      .map((t) => `<span class="bs" style="--c:${TEAMS[t.id].css}">${TEAMS[t.id].short} ${g.zones[t.buildZone].letter}区 ${t.ready ? '✓ 完成' : '建造中'}</span>`)
      .join('');
    this.setHTML(
      this.buildStatus,
      'bstat',
      `<span class="budget">${zone.letter} ${zone.name} · 预算 ${budget}/${BUILD.budget}<span class="segs">${segs}</span></span>${others}${m.playerReadyBuild ? '<span class="bs" style="--c:#7dff9a">你已准备</span>' : ''}`,
    );
    this.buildMsg.textContent = p.buildMsg;
    this.buildMsg.className = p.buildOk ? 'ok' : 'bad';
    this.setHTML(this.buildInfo, 'binfo', `<b>${def.name}</b>（${def.size} · 高 ${def.height} m · ${def.cost} 点）${def.desc} ${def.tags.map((t) => `<span class="tag">${t}</span>`).join(' ')}`);
  }

  private updateWaypoint(W: number, H: number) {
    const g = this.g;
    const m = g.match;
    const me = g.player.ch;
    let tx = 0;
    let tz = 0;
    let label = '';
    if (m.phase === 'build' && me.alive && g.player.firstPerson) {
      const zone = g.zones[m.teams[PLAYER_TEAM].buildZone];
      const r = zone.rect;
      const inside = me.pos.x > r.minX && me.pos.x < r.maxX && me.pos.z > r.minZ && me.pos.z < r.maxZ;
      if (!inside) {
        tx = zone.center.x;
        tz = zone.center.z;
        label = `前往本队建造区 ${zone.letter} ${zone.name} · ${Math.hypot(tx - me.pos.x, tz - me.pos.z).toFixed(0)} m`;
      }
    }
    if (!label) {
      this.waypoint.style.display = 'none';
      return;
    }
    this.waypoint.style.display = 'block';
    const cam = g.camera;
    _v.set(tx, 2.5, tz).project(cam);
    const behind = _v.z > 1;
    let x = _v.x;
    let y = _v.y;
    if (behind) {
      x = -x;
      y = -y;
    }
    const on = !behind && Math.abs(x) < 0.85 && Math.abs(y) < 0.8;
    let rot = 180;
    if (!on) {
      const a = Math.atan2(y, x);
      x = Math.cos(a) * 0.82;
      y = Math.sin(a) * 0.72;
      rot = 90 - (a * 180) / Math.PI;
    }
    this.waypoint.style.left = `${((x + 1) / 2) * W}px`;
    this.waypoint.style.top = `${((1 - y) / 2) * H}px`;
    (this.waypoint.firstElementChild as HTMLElement).style.transform = `rotate(${rot}deg)`;
    this.setHTML(this.waypoint.lastElementChild as HTMLElement, 'wp', label);
  }

  // ---------------- 事件 ----------------

  toast(text: string, kind: 'ok' | 'bad' | 'warn' | 'info' = 'info') {
    const t = el('div', `toast ${kind}`, text);
    this.toasts.appendChild(t);
    while (this.toasts.children.length > 4) this.toasts.firstElementChild?.remove();
    setTimeout(() => (t.style.opacity = '0'), 2400);
    setTimeout(() => t.remove(), 2900);
  }

  banner(main: string, sub = '', color = '#ff3b30', dur = 2.4) {
    const b = this.bannerEl;
    (b.querySelector('.main') as HTMLElement).textContent = main;
    (b.querySelector('.sub') as HTMLElement).innerHTML = sub;
    b.style.setProperty('--bc', color);
    b.classList.remove('show');
    void b.offsetWidth;
    b.style.opacity = '';
    b.classList.add('show');
    this.bannerT = dur;
  }

  killFeed(att: Character | null, tgt: Character, atk: AttackDef | null) {
    const me = this.g.player.ch;
    const name = (c: Character) => `<span style="color:${TEAMS[c.team].css}">${TEAMS[c.team].short}·${c.name}</span>`;
    const how = att ? WEAPONS[att.weapon].name + (atk?.swing === 'thrust' || atk?.swing === 'stab' ? '·刺' : '·斩') : '结界';
    const e = el('div', `kf ${att === me || tgt === me ? 'mine' : ''}`, `${att ? name(att) : ''}<span class="w">${how}</span>${name(tgt)}`);
    this.killfeed.appendChild(e);
    while (this.killfeed.children.length > 6) this.killfeed.firstElementChild?.remove();
    setTimeout(() => e.remove(), 7000);
  }

  hitMarker(kind: HitKind, killed: boolean) {
    const colors: Record<HitKind, string> = { hit: '#ffffff', blocked: '#ffb347', parry: '#9fe6ff', guardbreak: '#ff8a3d', dodged: '#8f8f9f' };
    this.hitmarker.style.setProperty('--hm', killed ? '#ff3b30' : colors[kind]);
    this.hitT = 0;
    this.hitLife = killed ? 0.5 : 0.25;
  }

  damageFrom(x: number, z: number) {
    const e = el('div', 'dd');
    this.dmgdir.appendChild(e);
    this.dmgDirs.push({ el: e, x, z, t: 0 });
    while (this.dmgDirs.length > 4) this.dmgDirs.shift()?.el.remove();
  }

  floater(text: string, x: number, y: number, z: number, color: string, cls = '') {
    if (!this.g.settings.dmgNums && cls !== 'word') return;
    const e = el('div', `fl ${cls}`, text);
    e.style.color = color;
    this.floaterLayer.appendChild(e);
    this.floaters.push({ el: e, x: x + (Math.random() - 0.5) * 0.3, y, z: z + (Math.random() - 0.5) * 0.3, t: 0, life: cls === 'big' ? 1.1 : 0.85 });
    while (this.floaters.length > 24) this.floaters.shift()?.el.remove();
  }

  setResume(on: boolean) {
    this.resume.classList.toggle('on', on);
  }

  showScoreboard(on: boolean) {
    this.sbOpen = on;
    this.scoreboard.classList.toggle('on', on);
    if (on) this.updateScoreboard();
  }

  private updateScoreboard() {
    const g = this.g;
    const m = g.match;
    const rows = m.teams
      .map((t) => {
        const c = TEAMS[t.id];
        const spawnKnown = m.round > 0 && m.phase !== 'build' && m.phase !== 'lock';
        const head = `<tr><td class="th" colspan="6" style="--c:${c.css};color:${c.css}">${c.name} · ${t.score} 分 · 建造 ${g.zones[t.buildZone].letter} 区${spawnKnown ? ` · 本回合出生 ${g.zones[t.spawnZone].letter} 区` : ''}</td></tr>`;
        const mem = t.members
          .map((ch) => {
            const money = t.id === PLAYER_TEAM ? `$${ch.money}` : '—';
            return `<tr class="${ch.alive ? '' : 'dead'} ${ch.isPlayer ? 'me' : ''}"><td>${ch.name}</td><td>${ch.alive ? Math.ceil(ch.hp) + ' HP' : '阵亡'}</td><td>${WEAPONS[ch.weapon].name}</td><td>${ch.kills} / ${ch.deaths}</td><td>${Math.round(ch.dmgDealt)}</td><td>${money}</td></tr>`;
          })
          .join('');
        return head + mem;
      })
      .join('');
    this.setHTML(
      this.scoreboard,
      'sb',
      `<table><tr><th>角色</th><th>状态</th><th>武器</th><th>击杀/阵亡</th><th>伤害</th><th>金钱</th></tr>${rows}</table><div style="font-size:12px;opacity:.7;margin-top:8px">${MODES[m.mode.id].desc} · 第 ${m.round} 回合</div>`,
    );
  }

  showPanel(id: string, html: string, dur = 0) {
    const p = $(id);
    p.innerHTML = html;
    p.classList.add('on');
    if (dur > 0) this.panelTimers.set(id, dur);
    else this.panelTimers.delete(id);
  }

  hidePanel(id: string) {
    $(id).classList.remove('on');
    this.panelTimers.delete(id);
  }
}
