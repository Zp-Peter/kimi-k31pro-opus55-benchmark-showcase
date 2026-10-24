// 界面总控：主菜单、暂停、操作说明、设置、首次提示、军械架（商店）、换区揭晓、回合/中场/整场结算。
// 打开任何“模态”界面时释放鼠标锁定并停止视角/攻击输入；关闭时恢复锁定（失败则提示点击画面）。

import { BUILD, DIFFICULTY, ECON, MODES, PLAYER_TEAM, TEAMS, TIMING, ZONE_META, type Difficulty, type ModeId } from '../config';
import { $, el, fmtTime } from '../util';
import { WEAPONS, WEAPON_ORDER, type WeaponId } from '../game/weapons';
import type { RoundResult } from '../game/match';
import type { Game } from '../game';
import { HUD } from './hud';

export type ModalName = 'pause' | 'help' | 'settings' | 'shop' | 'tutorial' | 'matchEnd';

const TUTORIAL_KEY = 'swapblade.tutorialSeen.v1';

const WEAPON_ICONS: Record<WeaponId | 'armor', string> = {
  tanto:
    '<svg viewBox="0 0 120 40"><rect x="14" y="17" width="28" height="7" rx="2" fill="#2b2230" stroke="#f6efe2" stroke-width="1.5"/><rect x="42" y="13" width="4" height="15" fill="#d9a74a"/><path d="M46 16.5 L86 18 L98 20.5 L86 23 L46 24 Z" fill="#dfe6ee" stroke="#1b1622" stroke-width="1.5"/></svg>',
  katana:
    '<svg viewBox="0 0 120 40"><rect x="4" y="19" width="28" height="6" rx="2" fill="#2b2230" stroke="#f6efe2" stroke-width="1.5"/><ellipse cx="34" cy="22" rx="3" ry="8" fill="#d9a74a"/><path d="M37 19 Q80 13 117 7 Q84 21 37 25 Z" fill="#dfe6ee" stroke="#1b1622" stroke-width="1.5"/></svg>',
  naginata:
    '<svg viewBox="0 0 120 40"><rect x="2" y="20" width="80" height="4" fill="#7a4e35" stroke="#1b1622" stroke-width="1"/><rect x="82" y="18" width="4" height="8" fill="#d9a74a"/><path d="M86 19 Q104 17 118 7 Q111 23 86 25 Z" fill="#dfe6ee" stroke="#1b1622" stroke-width="1.5"/></svg>',
  axe: '<svg viewBox="0 0 120 40"><rect x="8" y="18" width="84" height="5" fill="#5c2a24" stroke="#1b1622" stroke-width="1"/><path d="M80 5 Q100 1 113 10 Q104 20 113 31 Q100 39 80 35 Z" fill="#3a3d46" stroke="#1b1622" stroke-width="1.5"/><path d="M107 10 Q100 20 107 30" stroke="#dfe6ee" stroke-width="3" fill="none"/></svg>',
  armor:
    '<svg viewBox="0 0 120 40"><path d="M42 5 H78 L86 13 L80 36 H40 L34 13 Z" fill="#46506a" stroke="#1b1622" stroke-width="2"/><path d="M42 15 H78 M41 22 H79 M40 29 H80" stroke="#ff3b30" stroke-width="2"/></svg>',
};

export class UI {
  hud: HUD;
  modal: ModalName | null = null;
  private stack: ModalName[] = [];
  private openedAt = 0;
  mode: ModeId = 'quick';
  diff: Difficulty = 'normal';
  private shopMsg = { text: '', ok: true, t: 0 };
  private shopKey = '';
  private firstBuyShown = false;

  constructor(private g: Game) {
    this.hud = new HUD(g);
    this.buildMenu();
    this.buildHelp();
    this.buildSettings();
    this.wireModal('pause', {
      resume: () => this.close(),
      help: () => this.open('help'),
      settings: () => this.open('settings'),
      restart: () => {
        this.closeAll();
        this.g.startMatch(this.g.match.mode.id);
      },
      quit: () => {
        this.closeAll();
        this.g.quitToMenu();
      },
    });
    this.wireModal('help', { back: () => this.close() });
    this.wireModal('settings', { back: () => this.close() });
    this.wireModal('tutorial', {
      ok: () => {
        try {
          localStorage.setItem(TUTORIAL_KEY, '1');
        } catch {
          /* 隐私模式下忽略 */
        }
        this.close();
      },
    });
    this.wireModal('shop', {
      close: () => this.close(),
      ready: () => {
        this.g.match.confirmPlayerBuyReady();
        this.close();
        this.toast('已准备就绪，即将开战', 'ok');
      },
    });
    this.wireModal('matchEnd', {
      again: () => {
        this.closeAll();
        this.g.startMatch(this.g.match.mode.id);
      },
      menu: () => {
        this.closeAll();
        this.g.quitToMenu();
      },
    });
    $('shopItems').addEventListener('click', (e) => {
      const it = (e.target as HTMLElement).closest('.item') as HTMLElement | null;
      if (it?.dataset.id) this.buy(it.dataset.id as WeaponId | 'armor');
    });
  }

  // ---------------- 模态管理 ----------------

  private wireModal(id: ModalName, acts: Record<string, () => void>) {
    $(id).addEventListener('click', (e) => {
      const b = (e.target as HTMLElement).closest('[data-act]') as HTMLElement | null;
      if (!b) return;
      const f = acts[b.dataset.act!];
      if (f) {
        this.g.audio.ui();
        f();
      }
    });
  }

  open(name: ModalName) {
    if (this.modal === name) return;
    if (this.modal) {
      this.stack.push(this.modal);
      $(this.modal).classList.add('hidden');
    }
    this.modal = name;
    this.openedAt = performance.now();
    $(name).classList.remove('hidden');
    this.g.player.releaseAll();
    this.g.player.unlock();
    this.hud.showScoreboard(false);
    if (name === 'pause' || name === 'tutorial') this.g.setPaused(true);
    if (name === 'shop') {
      this.shopKey = '';
      this.renderShop();
    }
    if (name === 'settings') this.syncSettings();
  }

  close() {
    if (!this.modal) return;
    const cur = this.modal;
    $(cur).classList.add('hidden');
    if (cur === 'pause' || cur === 'tutorial') this.g.setPaused(false);
    const prev = this.stack.pop() ?? null;
    this.modal = prev;
    if (prev) {
      $(prev).classList.remove('hidden');
      if (prev === 'pause') this.g.setPaused(true);
      return;
    }
    if (this.g.inGame() && this.g.match.phase !== 'matchEnd') this.g.player.lock();
  }

  closeAll() {
    while (this.modal) {
      const cur = this.modal;
      $(cur).classList.add('hidden');
      this.modal = this.stack.pop() ?? null;
    }
    this.stack = [];
    this.g.setPaused(false);
  }

  openPause() {
    if (!this.g.inGame() || this.g.match.phase === 'matchEnd') return;
    if (this.modal) return;
    this.open('pause');
  }

  openShop() {
    if (this.g.match.phase !== 'buy' || !this.g.player.ch.alive) return;
    this.open('shop');
  }

  openHelp() {
    this.open('help');
  }

  onModalKey(e: KeyboardEvent) {
    const m = this.modal;
    if (!m) return;
    const since = performance.now() - this.openedAt;
    if (e.code === 'Escape') {
      if (since < 350) return;
      if (m === 'matchEnd' || m === 'tutorial') return;
      this.close();
      return;
    }
    if (m === 'shop') {
      if (e.code === 'KeyB') this.close();
      else if (e.code === 'Enter') {
        this.g.match.confirmPlayerBuyReady();
        this.close();
        this.toast('已准备就绪，即将开战', 'ok');
      } else if (e.code.startsWith('Digit')) {
        const n = parseInt(e.code.slice(5), 10);
        if (n >= 1 && n <= 4) this.buy(WEAPON_ORDER[n - 1]);
        if (n === 5) this.buy('armor');
      }
    } else if (m === 'tutorial' && (e.code === 'Enter' || e.code === 'Space')) {
      $('tutorial').querySelector<HTMLElement>('[data-act="ok"]')?.click();
    } else if (m === 'pause' && e.code === 'Enter') this.close();
  }

  setResumePrompt(on: boolean) {
    this.hud.setResume(on && this.g.inGame() && !this.modal);
  }

  showScoreboard(on: boolean) {
    if (this.modal && on) return;
    this.hud.showScoreboard(on);
  }

  toast(text: string, kind: 'ok' | 'bad' | 'warn' | 'info' = 'info') {
    this.hud.toast(text, kind);
  }

  // ---------------- 主菜单 ----------------

  private buildMenu() {
    const cards = $('modeCards');
    const render = () => {
      cards.innerHTML = (['quick', 'long'] as ModeId[])
        .map((id) => {
          const m = MODES[id];
          const extra = m.midgameAt > 0 ? `领先队首次达到 ${m.midgameAt} 分后，下一回合前全员中场重建一次` : '开局建造一次，之后每回合重新随机换区';
          return `<div class="modeCard ${this.mode === id ? 'sel' : ''}" data-mode="${id}"><span class="big3">${m.target}</span><b>${m.name}</b><span>先到 ${m.target} 分获胜<br>${extra}</span></div>`;
        })
        .join('');
      $('diffBtns').innerHTML = (Object.keys(DIFFICULTY) as Difficulty[]).map((d) => `<button class="${this.diff === d ? 'sel' : ''}" data-diff="${d}">${DIFFICULTY[d].name}</button>`).join('');
    };
    render();
    cards.addEventListener('click', (e) => {
      const c = (e.target as HTMLElement).closest('[data-mode]') as HTMLElement | null;
      if (!c) return;
      this.mode = c.dataset.mode as ModeId;
      this.g.audio.init();
      this.g.audio.ui();
      render();
    });
    $('diffBtns').addEventListener('click', (e) => {
      const b = (e.target as HTMLElement).closest('[data-diff]') as HTMLElement | null;
      if (!b) return;
      this.diff = b.dataset.diff as Difficulty;
      this.g.audio.init();
      this.g.audio.ui();
      render();
    });
    $('btnStart').addEventListener('click', () => {
      this.g.audio.init();
      this.g.startMatch(this.mode);
    });
    $('btnHelp').addEventListener('click', () => {
      this.g.audio.init();
      this.open('help');
    });
    $('btnSettings').addEventListener('click', () => {
      this.g.audio.init();
      this.open('settings');
    });
  }

  showMenu(on: boolean) {
    $('menu').classList.toggle('hidden', !on);
    this.hud.show(!on);
  }

  private buildHelp() {
    const w = WEAPON_ORDER.map((id) => {
      const x = WEAPONS[id];
      return `<tr><td>${x.name} ${x.price ? '$' + x.price : '免费'}</td><td>${x.desc}</td></tr>`;
    }).join('');
    $('helpBody').innerHTML = `
      <div>
        <h3>基本操作</h3>
        <table>
          <tr><td><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></td><td>移动 · <kbd>Shift</kbd> 疾跑 · 鼠标 视角</td></tr>
          <tr><td><kbd>左键</kbd></td><td>攻击；在收招时再按接连击</td></tr>
          <tr><td><kbd>右键</kbd></td><td>按住格挡。<b>刚举起的一瞬间</b>挡住 = 弹反，对手大硬直</td></tr>
          <tr><td>蓄力中按<kbd>右键</kbd></td><td>取消攻击转为格挡（假动作）；鬼斧的霸体蓄力不能取消</td></tr>
          <tr><td><kbd>空格</kbd></td><td>闪避（短暂无敌，冷却 1 秒）；朝移动方向，不按方向则后撤</td></tr>
          <tr><td><kbd>B</kbd> / <kbd>Enter</kbd></td><td>准备阶段打开军械架 / 准备就绪</td></tr>
          <tr><td><kbd>Tab</kbd> <kbd>Esc</kbd> <kbd>H</kbd></td><td>计分板 · 暂停 · 本说明</td></tr>
        </table>
        <h3>建造操作（建造阶段）</h3>
        <table>
          <tr><td><kbd>1</kbd>-<kbd>5</kbd> / 滚轮</td><td>选择构件：矮墙 2 · 高墙 3 · 货箱 2 · 石柱 1 · 转角屏风 3</td></tr>
          <tr><td><kbd>R</kbd></td><td>旋转 90°（绿色 = 可放置，红色 = 不可放置并显示原因）</td></tr>
          <tr><td><kbd>左键</kbd></td><td>放置（准星 ${BUILD.reach} m 内，只能放在本队区域）</td></tr>
          <tr><td><kbd>右键</kbd> / <kbd>X</kbd></td><td>删除准星对准的本队构件，全额退还预算</td></tr>
          <tr><td><kbd>Z</kbd> · <kbd>F</kbd> · <kbd>Enter</kbd></td><td>撤销 · 让 AI 队友按模板补全剩余预算（只追加，不动你的） · 准备</td></tr>
        </table>
        <h3>武器</h3>
        <table>${w}<tr><td>护甲 $${ECON.armorPrice}</td><td>${ECON.armorPoints} 点，优先抵消伤害；回合存活可保留剩余护甲</td></tr></table>
      </div>
      <div>
        <h3>流程</h3>
        <ul>
          <li>建造（各队 ${BUILD.budget} 点相同预算）→ 锁定检查 → <b>随机换区</b> → 准备购买 → 战斗 → 结算</li>
          <li><b>换区</b>：四队与四个区一一对应，且<b>不会在自己建造的区出生</b>；每回合重新抽取。只交换出生位置，队伍、颜色、分数、金钱、装备都不变。</li>
          <li><b>得分</b>：回合中阵亡不复活；最后仍有成员存活的队伍得 1 分；最后几队同时阵亡算平局。</li>
        </ul>
        <h3>防躲藏与超时</h3>
        <ul>
          <li>剩 ${TIMING.revealAt} 秒：全员显形——所有人的头顶标记穿墙可见，AI 同样知道每个人的位置。</li>
          <li>剩 ${TIMING.ringAt} 秒：结界从地图边缘向中央高台收缩（半径 ${TIMING.ringStartRadius} → ${TIMING.ringEndRadius} m），圈外每秒 -${TIMING.ringDps} HP。</li>
          <li>时间到仍有多队存活：<b>平局，不加分</b>，所有人照常获得基础收入。</li>
        </ul>
        <h3>经济</h3>
        <ul>
          <li>初始 $${ECON.start}；每回合结束所有人 +$${ECON.base}（平局也有）；胜队每人再 +$${ECON.win}。</li>
          <li>连续未胜补偿：每回合 +$${ECON.lossStep}，最多 +$${ECON.lossMax}；击杀奖励按所持武器 $200~$500；上限 $${ECON.max}。</li>
          <li>装备规则：<b>存活者保留武器与剩余护甲，阵亡者下回合恢复为免费短刀</b>。本阶段买的武器可原价退回。</li>
        </ul>
        <h3>中场重建（长局模式）</h3>
        <ul>
          <li>领先队<b>首次达到 ${MODES.long.midgameAt} 分</b>后、下一回合开始前触发，只触发一次。</li>
          <li>保留分数、金钱和按装备规则保留的武器；所有 8 人（含阵亡者）参与；期间不能战斗。</li>
          <li>清空全部旧构件，重新分配建造区并重置相同预算；完成后按新的建造关系重新换区。不额外插入战斗回合，也不重复发奖励。</li>
        </ul>
        <h3>建造限制</h3>
        <ul>
          <li>不可叠放；出生台与三个门口为保留区；不能卡住角色；不能封死出生点通往外部的最后一条通路。</li>
          <li>矮墙挡路挡刀但不挡视线；高墙、货箱、石柱、屏风同时挡视线。</li>
        </ul>
      </div>`;
  }

  private buildSettings() {
    const s = this.g.settings;
    $('settingsBody').innerHTML = `
      <div class="setRow"><label>鼠标灵敏度</label><input type="range" id="setSens" min="0.2" max="3" step="0.05"><span class="val" id="vSens"></span></div>
      <div class="setRow"><label>视野 FOV</label><input type="range" id="setFov" min="60" max="95" step="1"><span class="val" id="vFov"></span></div>
      <div class="setRow"><label>主音量</label><input type="range" id="setVol" min="0" max="1" step="0.05"><span class="val" id="vVol"></span></div>
      <div class="setRow"><label>音乐</label><input type="range" id="setMus" min="0" max="1" step="0.05"><span class="val" id="vMus"></span></div>
      <div class="setRow"><label>镜头震动</label><input type="checkbox" id="setShake"></div>
      <div class="setRow"><label>伤害数字</label><input type="checkbox" id="setDmg"></div>`;
    const bind = (id: string, vid: string, apply: (v: number) => void, fmt: (v: number) => string) => {
      const inp = $(id) as HTMLInputElement;
      inp.addEventListener('input', () => {
        const v = parseFloat(inp.value);
        apply(v);
        $(vid).textContent = fmt(v);
        this.g.saveSettings();
      });
    };
    bind('setSens', 'vSens', (v) => (s.sens = v), (v) => v.toFixed(2));
    bind('setFov', 'vFov', (v) => (s.fov = v), (v) => v.toFixed(0));
    bind('setVol', 'vVol', (v) => (s.master = v), (v) => Math.round(v * 100) + '%');
    bind('setMus', 'vMus', (v) => (s.music = v), (v) => Math.round(v * 100) + '%');
    ($('setShake') as HTMLInputElement).addEventListener('change', (e) => {
      s.shake = (e.target as HTMLInputElement).checked;
      this.g.saveSettings();
    });
    ($('setDmg') as HTMLInputElement).addEventListener('change', (e) => {
      s.dmgNums = (e.target as HTMLInputElement).checked;
      this.g.saveSettings();
    });
  }

  private syncSettings() {
    const s = this.g.settings;
    const set = (id: string, vid: string, v: number, f: string) => {
      ($(id) as HTMLInputElement).value = String(v);
      $(vid).textContent = f;
    };
    set('setSens', 'vSens', s.sens, s.sens.toFixed(2));
    set('setFov', 'vFov', s.fov, s.fov.toFixed(0));
    set('setVol', 'vVol', s.master, Math.round(s.master * 100) + '%');
    set('setMus', 'vMus', s.music, Math.round(s.music * 100) + '%');
    ($('setShake') as HTMLInputElement).checked = s.shake;
    ($('setDmg') as HTMLInputElement).checked = s.dmgNums;
  }

  /** 首次进入比赛时展示三条关键提示 */
  maybeTutorial(): boolean {
    let seen = false;
    try {
      seen = localStorage.getItem(TUTORIAL_KEY) === '1';
    } catch {
      seen = false;
    }
    if (seen) return false;
    this.open('tutorial');
    return true;
  }

  // ---------------- 军械架 ----------------

  private buy(id: WeaponId | 'armor') {
    const g = this.g;
    const ch = g.player.ch;
    const r = id === 'armor' ? g.shop.buyArmor(ch) : g.shop.buyWeapon(ch, id);
    this.shopMsg = { text: r.msg, ok: r.ok, t: performance.now() };
    if (!r.ok) g.audio.buy(false);
    this.shopKey = '';
    this.renderShop();
  }

  private swapLine(): string {
    const g = this.g;
    const t = g.match.teams[PLAYER_TEAM];
    const z = g.zones[t.spawnZone];
    const builder = TEAMS[g.match.teams.find((x) => x.buildZone === t.spawnZone)!.id];
    const guest = TEAMS[g.match.teams.find((x) => x.spawnZone === t.buildZone)!.id];
    return `本回合出生：<b>${z.letter} ${z.name}</b>（由 <span class="chip" style="--c:${builder.css}">${builder.name}</span> 建造） · 你们建造的 ${g.zones[t.buildZone].letter} 区由 <span class="chip" style="--c:${guest.css}">${guest.name}</span> 出生`;
  }

  renderShop() {
    if (this.modal !== 'shop') return;
    const g = this.g;
    const ch = g.player.ch;
    const shop = g.shop;
    $('shopTimer').textContent = fmtTime(g.match.timer);
    const key = [ch.money, ch.weapon, ch.boughtThisPhase, ch.armor, this.shopMsg.t].join('|');
    if (key === this.shopKey) return;
    this.shopKey = key;
    $('shopMoney').textContent = `$${ch.money}`;
    $('shopSwap').innerHTML = this.swapLine();
    const cur = WEAPONS[ch.weapon];
    const kept = ch.weapon !== 'tanto' && ch.boughtThisPhase !== ch.weapon;
    const mate = g.match.teams[PLAYER_TEAM].members.find((m) => m !== ch);
    $('shopCur').innerHTML = `当前装备：<b>${cur.name}</b>${kept ? '（上回合存活保留）' : ch.boughtThisPhase ? '（本阶段购买，可退回）' : ''} · 护甲 ${Math.ceil(ch.armor)}/${ECON.armorPoints}${mate ? ` · 队友 ${mate.name}：${WEAPONS[mate.weapon].name}${mate.armor > 0 ? ' + 护甲' : ''}（$${mate.money}）` : ''}`;
    const refund = ch.boughtThisPhase === ch.weapon ? WEAPONS[ch.weapon].price : 0;
    const items = WEAPON_ORDER.map((id, i) => {
      const w = WEAPONS[id];
      let state = '';
      let cls = '';
      if (ch.weapon === id) {
        state = refund && id !== 'tanto' ? '已装备 · 点短刀可退回' : '已装备';
        cls = 'equipped';
      } else if (id === 'tanto') {
        state = refund ? `换回短刀（退 $${refund}）` : '已持有其他武器';
        if (!refund) cls = 'poor';
      } else if (ch.money + refund >= w.price) {
        state = `购买 $${w.price}` + (refund ? `（先退 +$${refund}）` : kept ? `（替换${cur.name}）` : '');
      } else {
        state = `资金不足 · 差 $${w.price - ch.money - refund}`;
        cls = 'poor';
      }
      const st = w.stats;
      const pips = (n: number) => `<span class="pips">${[1, 2, 3, 4, 5].map((k) => `<i class="${k <= n ? 'on' : ''}"></i>`).join('')}</span>`;
      return `<div class="item ${cls}" data-id="${id}"><kbd class="key">${i + 1}</kbd><div class="wicon">${WEAPON_ICONS[id]}</div><div class="nm">${w.name}</div><div class="price">${w.price ? '$' + w.price : '免费'}</div>
        <div class="traits">${w.traits.map((t) => `<span>${t}</span>`).join('')}</div>
        <div class="desc">${w.desc}</div>
        <div class="stats"><span>伤害</span>${pips(st.dmg)}<span>速度</span>${pips(st.speed)}<span>距离</span>${pips(st.reach)}<span>范围</span>${pips(st.arc)}<span>防御</span>${pips(st.guard)}</div>
        <div class="state">${state}</div></div>`;
    }).join('');
    const ac = shop.armorCost(ch);
    const aState = ac <= 0 ? '护甲已满' : ch.money >= ac ? `购买 $${ac}` : `资金不足 · 差 $${ac - ch.money}`;
    const armor = `<div class="item ${ac <= 0 ? 'equipped' : ch.money < ac ? 'poor' : ''}" data-id="armor"><kbd class="key">5</kbd><div class="wicon">${WEAPON_ICONS.armor}</div><div class="nm">胴甲</div><div class="price">$${ECON.armorPrice}</div>
      <div class="traits"><span>+${ECON.armorPoints} 护甲</span><span>优先抵消伤害</span></div>
      <div class="desc">护甲先于血量承受伤害。回合存活可保留剩余护甲；补满只按缺失比例收费。</div>
      <div class="stats"><span>当前</span><span>${Math.ceil(ch.armor)} / ${ECON.armorPoints}</span></div>
      <div class="state">${aState}</div></div>`;
    $('shopItems').innerHTML = items + armor;
    const res = $('shopResult');
    const fresh = performance.now() - this.shopMsg.t < 4000;
    res.textContent = fresh ? this.shopMsg.text : '';
    res.className = this.shopMsg.ok ? 'ok' : 'bad';
  }

  onPurchase(text: string, ok: boolean) {
    if (this.modal !== 'shop') this.toast(text, ok ? 'ok' : 'bad');
  }

  // ---------------- 阶段面板 ----------------

  private swapGrid(): string {
    const g = this.g;
    const m = g.match;
    // 地图方位：A 西北、B 东北、D 西南、C 东南
    const order = [0, 1, 3, 2];
    const cells = order
      .map((zi) => {
        const z = g.zones[zi];
        const builder = m.teams.find((t) => t.buildZone === zi)!;
        const spawner = m.teams.find((t) => t.spawnZone === zi)!;
        const mine = spawner.id === PLAYER_TEAM;
        return `<div class="zcell ${mine ? 'mine' : ''}" style="--bc:${TEAMS[spawner.id].css}"><div class="zl">${z.letter}</div><div class="zn">${z.name} · ${ZONE_META[zi].flavor === 'pine' ? '松' : ZONE_META[zi].flavor === 'bamboo' ? '竹' : ZONE_META[zi].flavor === 'maple' ? '枫' : '樱'}</div>
          <div class="who">建造 <span class="chip" style="--c:${TEAMS[builder.id].css}">${TEAMS[builder.id].short}</span><b style="color:${TEAMS[spawner.id].css}">${TEAMS[spawner.id].name} 出生${mine ? '（你）' : ''}</b></div></div>`;
      })
      .join('');
    return `<div class="swapGrid">${cells}</div>`;
  }

  showSwap(dur: number) {
    const g = this.g;
    const t = g.match.teams[PLAYER_TEAM];
    const z = g.zones[t.spawnZone];
    const builder = g.match.teams.find((x) => x.buildZone === t.spawnZone)!;
    this.hud.showPanel(
      'swapPanel',
      `<h3>随机换区 · 你们将在 <span style="color:${TEAMS[builder.id].css}">${z.letter} ${z.name}</span> 出生</h3>
       <div class="sub">这是 ${TEAMS[builder.id].name} 建造的庭院。每队都不会在自己建的区出生，每回合重新抽取。</div>
       ${this.swapGrid()}
       <div class="swapNote">边框颜色 = 本回合在该区出生的队伍 · 「建造」= 该区的建造者 · 区域旗帜颜色也表示建造者</div>`,
      dur,
    );
  }

  onPhase(p: string, data: Record<string, unknown>) {
    const g = this.g;
    const m = g.match;
    const hud = this.hud;
    const myTeam = m.teams[PLAYER_TEAM];
    if (p !== 'buy' && this.modal === 'shop') this.close();
    switch (p) {
      case 'build': {
        const z = g.zones[myTeam.buildZone];
        hud.hidePanel('roundPanel');
        hud.hidePanel('swapPanel');
        if (data.isRebuild) {
          hud.banner('中场重建', `领先队已达 ${m.mode.midgameAt} 分 · 前往 <b>${z.letter} ${z.name}</b> 重新建造`, '#ff3b30', 4);
          hud.showPanel(
            'midPanel',
            `<h3>中场重建</h3><ul>
              <li>领先队首次达到 ${m.mode.midgameAt} 分，触发唯一一次中场重建。</li>
              <li><b>保留</b>：分数、金钱、存活者的武器与护甲（阵亡者按规则恢复短刀）。</li>
              <li><b>清空</b>：全部旧构件；各队<b>重新抽取建造区</b>并获得相同的新预算 ${BUILD.budget} 点。</li>
              <li>所有 8 人都已回到中央集合，期间不能战斗；建完后按新的建造关系<b>重新随机换区</b>。</li>
              <li>你们这次负责 <b>${z.letter} ${z.name}</b>（跟随黄色光柱）。</li></ul>`,
            10,
          );
        } else {
          hud.banner('建造阶段', `跟随黄色光柱前往 <b>${z.letter} ${z.name}</b> · ${BUILD.budget} 点预算 · 完成后按 Enter 准备`, '#e2b04a', 4.5);
        }
        break;
      }
      case 'lock': {
        const lock = (data.lock ?? []) as { zone: number; ok: boolean; removed: number }[];
        const fixed = lock.filter((l) => l.removed > 0);
        const sub = fixed.length ? fixed.map((l) => `${g.zones[l.zone].letter} 区有构件封死通路，已自动移除 ${l.removed} 个`).join(' · ') : '所有出生点通路检查通过';
        hud.banner('建造锁定', sub, '#e2b04a', 2.6);
        break;
      }
      case 'swap': {
        this.showSwap(TIMING.swap + 0.3);
        const t = myTeam;
        const z = g.zones[t.spawnZone];
        hud.banner('随机换区', `你们将在 <b>${z.letter} ${z.name}</b> 出生`, '#2f7bff', 2.6);
        break;
      }
      case 'buy': {
        hud.hidePanel('roundPanel');
        if (data.showSwap) this.showSwap(5.5);
        const z = g.zones[myTeam.spawnZone];
        hud.banner(`第 ${m.round} 回合 · 准备`, `出生于 <b>${z.letter} ${z.name}</b> · 按 <kbd>B</kbd> 打开军械架`, '#19c27a', 2.6);
        if (!this.firstBuyShown && g.player.ch.alive && !this.modal) {
          this.firstBuyShown = true;
          this.open('shop');
        }
        break;
      }
      case 'combat':
        hud.hidePanel('swapPanel');
        hud.banner('开战！', '最后存活的队伍得 1 分 · 回合中阵亡不复活', '#ff3b30', 2.2);
        break;
    }
  }

  onReveal() {
    this.hud.banner('全员显形', `剩余 ${TIMING.revealAt} 秒 · 敌人标记穿墙可见`, '#ffb300', 2.2);
  }

  onRing() {
    this.hud.banner('结界收缩', `向中央高台靠拢 · 圈外每秒 -${TIMING.ringDps} HP`, '#a12bff', 2.6);
  }

  onRoundEnd(res: RoundResult) {
    const g = this.g;
    const m = g.match;
    const me = g.player.ch;
    const inc = res.income.get(me);
    let title = '平局';
    let color = '#e2b04a';
    let reason = res.reason === 'mutual' ? '最后的队伍同时阵亡 · 不加分' : '时间耗尽仍有多队存活 · 不加分';
    if (res.winner !== null) {
      title = `${TEAMS[res.winner].name} 胜`;
      color = TEAMS[res.winner].css;
      reason = res.winner === PLAYER_TEAM ? '你的队伍坚持到了最后！+1 分' : '最后存活的队伍得 1 分';
    }
    const scores = m.teams.map((t) => `<span class="s ${t.id === res.winner ? 'win' : ''}" style="--c:${TEAMS[t.id].css}">${TEAMS[t.id].short} ${t.score}</span>`).join('');
    let income = '';
    if (inc) {
      const total = inc.base + inc.win + inc.loss;
      income = `<div class="income"><span>基础收入</span><span>+$${inc.base}</span>${inc.win ? `<span>胜利奖励</span><span>+$${inc.win}</span>` : ''}${inc.loss ? `<span>连续未胜补偿</span><span>+$${inc.loss}</span>` : ''}${inc.kills ? `<span>本回合击杀奖励（已到账）</span><span>+$${inc.kills}</span>` : ''}<span class="tot">回合结算</span><span class="tot">+$${total} → $${me.money}</span></div>`;
    }
    const top = Math.max(...m.teams.map((t) => t.score));
    let next = '下一回合：重新随机换区 → 准备购买';
    if (top >= m.target) next = '比赛结束！';
    else if (m.mode.midgameAt > 0 && !m.midgameDone && top >= m.mode.midgameAt) next = '领先队已达中场分数 → 即将中场重建';
    const keep = me.alive ? `你存活：保留 ${me.weapon === 'tanto' ? '短刀' : '武器'}与剩余护甲` : '你已阵亡：下回合恢复为短刀';
    this.hud.showPanel(
      'roundPanel',
      `<h3 style="text-shadow:3px 3px 0 ${color}">第 ${res.round} 回合 · ${title}</h3><div class="reason">${reason}</div><div class="scoreRow">${scores}</div>${income}<div class="reason">${keep}</div><div class="next">${next}</div>`,
      TIMING.roundEnd + 0.2,
    );
  }

  onMatchEnd(winner: number) {
    const g = this.g;
    const m = g.match;
    const c = TEAMS[winner];
    const won = winner === PLAYER_TEAM;
    const rows = [...g.chars]
      .sort((a, b) => b.kills - a.kills || b.dmgDealt - a.dmgDealt)
      .map((ch) => `<tr class="${ch.isPlayer ? 'me' : ''}"><td><span class="chip" style="--c:${TEAMS[ch.team].css}">${TEAMS[ch.team].short}</span> ${ch.name}</td><td>${ch.kills}</td><td>${ch.deaths}</td><td>${Math.round(ch.dmgDealt)}</td><td>$${ch.money}</td></tr>`)
      .join('');
    const scores = m.teams.map((t) => `<span class="s ${t.id === winner ? 'win' : ''}" style="--c:${TEAMS[t.id].css}">${TEAMS[t.id].name} ${t.score}</span>`).join('');
    const draws = m.history.filter((h) => h.winner === null).length;
    $('matchEndBody').innerHTML = `<div class="meHead" style="--c:${c.css}"><div class="w">${won ? '胜利！' : c.name + ' 获胜'}</div><div class="s">${m.mode.name} · 共 ${m.round} 回合（平局 ${draws}）· ${m.mode.midgameAt > 0 ? (m.midgameDone ? '已进行中场重建' : '未触发中场重建') : '开局建造一次'}</div></div>
      <div class="scoreRow">${scores}</div>
      <table class="meStats"><tr><th>角色</th><th>击杀</th><th>阵亡</th><th>伤害</th><th>金钱</th></tr>${rows}</table>`;
    this.open('matchEnd');
  }

  update(dt: number) {
    this.hud.update(dt);
    if (this.modal === 'shop') {
      if (this.g.match.phase !== 'buy' || !this.g.player.ch.alive) this.close();
      else this.renderShop();
    }
  }

  resetMatchUI() {
    this.firstBuyShown = false;
    this.hud.reset();
  }
}
