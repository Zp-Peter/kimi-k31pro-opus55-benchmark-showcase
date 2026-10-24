// hud.js — ink-and-paper DOM overlay: race HUD, minimap, title menu, pause and results scroll.
import { clamp } from './util.js';
import { LAKE, ISLAND, RIVER, riverHalfWidth } from './track.js';

export const CN = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
export const fmtTime = (t) => {
  if (!isFinite(t)) return '--:--.--';
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${String(m).padStart(2, '0')}:${s.toFixed(2).padStart(5, '0')}`;
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const STATS = [
  { spd: 1.0, acc: 1.0, hdl: 1.0, tag: '均衡' },
  { spd: 0.98, acc: 1.0, hdl: 1.08, tag: '灵巧' },
  { spd: 1.03, acc: 0.94, hdl: 0.96, tag: '力大' },
  { spd: 0.98, acc: 1.1, hdl: 1.0, tag: '起步快' },
  { spd: 1.04, acc: 0.97, hdl: 0.94, tag: '脚程远' },
  { spd: 1.0, acc: 1.04, hdl: 1.03, tag: '温顺' },
];
const DIFFS = [['easy', '悠闲'], ['normal', '寻常'], ['hard', '激烈']];
const LAPS = [1, 2, 3, 5];

const ICON = {
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none"/></svg>',
  mute: '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 9.5l5 5M21.5 9.5l-5 5" fill="none"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>',
};

export class HUD {
  constructor(root, track, riders, cb) {
    this.root = root; this.track = track; this.riders = riders; this.cb = cb;
    this.sel = { rider: 0, laps: 3, diff: 'normal' };
    root.innerHTML = `
<div class="hud hidden">
  <div class="pos-panel paper"><div class="pos"><span class="pos-n">一</span><span class="pos-of">/六</span></div>
    <div class="lap">第 <b class="lap-n">1</b> / <span class="lap-t">3</span> 圈</div></div>
  <ol class="board"></ol>
  <div class="timer-panel"><div class="time paper">00:00.00</div><div class="laptimes"></div></div>
  <div class="top-btns"><button class="btn-ico b-mute" aria-label="静音">${ICON.sound}</button><button class="btn-ico b-pause" aria-label="暂停">${ICON.pause}</button></div>
  <div class="minimap"><canvas width="360" height="360"></canvas></div>
  <div class="speed-panel paper">
    <svg class="gauge" viewBox="0 0 120 68"><path class="g-bg" d="M10 62 A50 50 0 0 1 110 62" pathLength="100"/><path class="g-fg" d="M10 62 A50 50 0 0 1 110 62" pathLength="100"/></svg>
    <div class="spd"><b>0</b><small>公里/时</small></div>
    <div class="meter"><span class="meter-label">牛劲</span><div class="meter-bar"><i></i></div></div>
  </div>
  <div class="wrong hidden">逆 行</div>
  <div class="center-msg"></div>
  <div class="toast"></div>
  <div class="touch hidden">
    <div class="t-left"><button data-k="left" aria-label="左转">◀</button><button data-k="right" aria-label="右转">▶</button></div>
    <div class="t-right"><button data-k="brake" class="t-sm">刹</button><button data-k="drift" class="t-sm">漂</button><button data-k="boost" class="t-big">鞭</button></div>
  </div>
</div>
<div class="menu hidden">
  <div class="menu-card">
    <div class="title-wrap"><h1 class="title">牧童赛牛</h1><span class="seal">杏花<br>村赛</span></div>
    <p class="poem">借问酒家何处有 · 牧童遥指杏花村</p>
    <div class="pick"><div class="sec-label">择 牧 童</div><div class="riders"></div></div>
    <div class="opts">
      <div class="opt"><span class="sec-label">圈数</span><div class="seg seg-laps">${LAPS.map((l) => `<button data-v="${l}">${CN[l]}</button>`).join('')}</div></div>
      <div class="opt"><span class="sec-label">对手</span><div class="seg seg-diff">${DIFFS.map(([v, t]) => `<button data-v="${v}">${t}</button>`).join('')}</div></div>
    </div>
    <button class="start">开 赛</button>
    <div class="best"></div>
    <div class="help"><span><kbd>W</kbd><kbd>↑</kbd> 驱牛</span><span><kbd>S</kbd><kbd>↓</kbd> 勒停</span><span><kbd>A</kbd><kbd>D</kbd> 转向</span><span><kbd>空格</kbd> 漂移蓄力</span><span><kbd>Shift</kbd> 扬鞭·牛劲</span><span><kbd>C</kbd> 视角</span><span><kbd>P</kbd> 暂停</span><span><kbd>M</kbd> 静音</span></div>
  </div>
</div>
<div class="pause-menu hidden"><div class="scroll small"><h2>暂 停</h2>
  <button class="p-resume">继续</button><button class="p-restart">重赛</button><button class="p-menu">回村口</button></div></div>
<div class="results hidden"><div class="scroll"><h2>赛 果</h2><div class="res-sub"></div>
  <table><thead><tr><th>名次</th><th>牧童 · 水牛</th><th>总用时</th><th>最快一圈</th></tr></thead><tbody></tbody></table>
  <div class="res-btns"><button class="r-again">再赛一场</button><button class="r-menu">回村口</button></div></div></div>`;
    const $ = (s) => root.querySelector(s);
    this.el = {
      hud: $('.hud'), posN: $('.pos-n'), posOf: $('.pos-of'), lapN: $('.lap-n'), lapT: $('.lap-t'), board: $('.board'),
      time: $('.time'), laptimes: $('.laptimes'), mute: $('.b-mute'), pause: $('.b-pause'), mini: $('.minimap canvas'),
      gauge: $('.g-fg'), spd: $('.spd b'), meter: $('.meter-bar i'), meterBox: $('.meter'), wrong: $('.wrong'), msg: $('.center-msg'),
      toast: $('.toast'), touch: $('.touch'), menu: $('.menu'), riders: $('.riders'), best: $('.best'), start: $('.start'),
      pauseMenu: $('.pause-menu'), results: $('.results'), resSub: $('.res-sub'), resBody: $('.results tbody'),
    };
    this.ctx = this.el.mini.getContext('2d');
    this.buildMinimap();
    this.buildMenu();
    const on = (sel, fn) => $(sel).addEventListener('click', (e) => { e.preventDefault(); fn(); });
    on('.b-mute', () => cb.onMute());
    on('.b-pause', () => cb.onPause());
    on('.p-resume', () => cb.onResume());
    on('.p-restart', () => cb.onRestart());
    on('.p-menu', () => cb.onMenu());
    on('.r-again', () => cb.onRestart());
    on('.r-menu', () => cb.onMenu());
    on('.start', () => cb.onStart({ ...this.sel }));
    this.msgTimer = 0; this.toastTimer = 0; this.boardKey = '';
  }

  // ------------------------------------------------------------ title menu
  buildMenu() {
    const R = this.riders;
    this.el.riders.innerHTML = R.map((r, i) => {
      const st = STATS[i];
      const bar = (v) => `<i style="width:${clamp((v - 0.9) / 0.2, 0.1, 1) * 100}%"></i>`;
      return `<button class="rider" data-i="${i}" style="--c:${r.color}" aria-label="${esc(r.name)}，水牛${esc(r.ox)}，${st.tag}" aria-pressed="false">
        <span class="r-dot"></span><span class="r-name">${esc(r.name)}</span><span class="r-ox">${esc(r.ox)} · ${st.tag}</span>
        <span class="r-stats"><em>速</em><span>${bar(st.spd)}</span><em>力</em><span>${bar(st.acc)}</span><em>巧</em><span>${bar(st.hdl)}</span></span></button>`;
    }).join('');
    this.el.riders.querySelectorAll('.rider').forEach((b) => b.addEventListener('click', () => { this.sel.rider = +b.dataset.i; this.cb.onUiSound?.(); this.syncMenu(); }));
    this.root.querySelectorAll('.seg-laps button').forEach((b) => b.addEventListener('click', () => { this.sel.laps = +b.dataset.v; this.cb.onUiSound?.(); this.syncMenu(); }));
    this.root.querySelectorAll('.seg-diff button').forEach((b) => b.addEventListener('click', () => { this.sel.diff = b.dataset.v; this.cb.onUiSound?.(); this.syncMenu(); }));
  }
  syncMenu() {
    const mark = (b, on) => { b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); };
    this.el.riders.querySelectorAll('.rider').forEach((b) => mark(b, +b.dataset.i === this.sel.rider));
    this.root.querySelectorAll('.seg-laps button').forEach((b) => mark(b, +b.dataset.v === this.sel.laps));
    this.root.querySelectorAll('.seg-diff button').forEach((b) => mark(b, b.dataset.v === this.sel.diff));
    const best = this.cb.getBest?.(this.sel.laps);
    this.el.best.innerHTML = best && isFinite(best.race)
      ? `${CN[this.sel.laps]}圈最佳 <b>${fmtTime(best.race)}</b>${isFinite(best.lap) ? ` · 最快一圈 <b>${fmtTime(best.lap)}</b>` : ''}`
      : '杏花村头，柳下待发';
  }
  showMenu(sel) {
    if (sel) Object.assign(this.sel, sel);
    this.syncMenu();
    this.el.menu.classList.remove('hidden');
    this.el.hud.classList.add('hidden');
    this.el.results.classList.add('hidden');
    this.el.pauseMenu.classList.add('hidden');
  }
  menuKey(code) {
    const n = this.riders.length;
    if (code === 'ArrowLeft' || code === 'KeyA') this.sel.rider = (this.sel.rider + n - 1) % n;
    else if (code === 'ArrowRight' || code === 'KeyD') this.sel.rider = (this.sel.rider + 1) % n;
    else if (code === 'ArrowUp' || code === 'KeyW') this.sel.laps = LAPS[(LAPS.indexOf(this.sel.laps) + 1) % LAPS.length];
    else if (code === 'ArrowDown' || code === 'KeyS') { const k = DIFFS.findIndex((d) => d[0] === this.sel.diff); this.sel.diff = DIFFS[(k + 1) % DIFFS.length][0]; }
    else return false;
    this.syncMenu();
    return true;
  }
  hideMenu() { this.el.menu.classList.add('hidden'); }

  // ------------------------------------------------------------ race HUD
  startRace(racers, player, laps) {
    this.racers = racers; this.player = player;
    this.el.hud.classList.remove('hidden');
    this.el.results.classList.add('hidden');
    this.el.pauseMenu.classList.add('hidden');
    this.el.lapT.textContent = laps;
    this.el.posOf.textContent = '/' + CN[racers.length];
    this.el.laptimes.innerHTML = '';
    this.el.msg.className = 'center-msg'; this.el.msg.textContent = '';
    this.boardKey = '';
  }
  setMuted(m) { this.el.mute.innerHTML = m ? ICON.mute : ICON.sound; this.el.mute.setAttribute('aria-label', m ? '开声' : '静音'); }
  showTouch(v) { this.el.touch.classList.toggle('hidden', !v); this.el.hud.classList.toggle('touch-mode', !!v); }
  showPause(v) { this.el.pauseMenu.classList.toggle('hidden', !v); }

  update(dt, s) {
    const e = this.el, p = this.player;
    e.posN.textContent = CN[s.place] || s.place;
    e.lapN.textContent = clamp(p.lapDisplay, 1, s.laps);
    e.time.textContent = fmtTime(s.time);
    const kmh = Math.round(Math.abs(p.vF) * 3.6);
    e.spd.textContent = kmh;
    e.gauge.style.strokeDasharray = `${clamp(kmh / 160, 0, 1) * 100} 100`;
    e.meter.style.width = `${(p.boost * 100).toFixed(1)}%`;
    e.meterBox.classList.toggle('active', p.boosting);
    e.meterBox.classList.toggle('ready', p.boost > 0.3);
    e.wrong.classList.toggle('hidden', !(p.wrongWay > 1.2 && !p.finished));
    const key = s.order.map((r) => r.id).join(',');
    if (key !== this.boardKey) {
      this.boardKey = key;
      e.board.innerHTML = s.order.map((r, i) => `<li class="${r === p ? 'me' : ''}" style="--c:${r.preset.color}"><b>${i + 1}</b><i></i>${esc(r.preset.name)}</li>`).join('');
    }
    if (this.msgTimer > 0) { this.msgTimer -= dt; if (this.msgTimer <= 0) e.msg.classList.add('out'); }
    if (this.toastTimer > 0) { this.toastTimer -= dt; if (this.toastTimer <= 0) e.toast.classList.remove('show'); }
    this.drawMinimap(s.order);
  }
  addLapTime(lap, t, best) {
    const d = document.createElement('div');
    d.innerHTML = `第${CN[lap] || lap}圈 ${fmtTime(t)}${best ? ' <em>最快</em>' : ''}`;
    this.el.laptimes.appendChild(d);
    while (this.el.laptimes.children.length > 3) this.el.laptimes.firstChild.remove();
  }
  // Big brush characters in the middle of the screen (countdown, lap calls, finish).
  message(text, cls = '', dur = 1.4) {
    const m = this.el.msg;
    m.className = 'center-msg';
    void m.offsetWidth;
    m.textContent = text;
    m.className = `center-msg show ${cls}`;
    this.msgTimer = dur;
  }
  toast(text, cls = '') {
    const t = this.el.toast;
    t.textContent = text;
    t.className = `toast ${cls}`;
    void t.offsetWidth;
    t.classList.add('show');
    this.toastTimer = 1.3;
  }

  // ------------------------------------------------------------ minimap
  buildMinimap() {
    const tr = this.track;
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (let i = 0; i < tr.N; i++) { x0 = Math.min(x0, tr.px[i]); x1 = Math.max(x1, tr.px[i]); z0 = Math.min(z0, tr.pz[i]); z1 = Math.max(z1, tr.pz[i]); }
    const W = 360, pad = 34, sc = (W - pad * 2) / Math.max(x1 - x0, z1 - z0);
    const ox = W / 2 - ((x0 + x1) / 2) * sc, oz = W / 2 - ((z0 + z1) / 2) * sc;
    this.map = (x, z) => [ox + x * sc, oz + z * sc];
    const c = document.createElement('canvas'); c.width = c.height = W;
    const g = c.getContext('2d');
    // rice-paper disc
    const grd = g.createRadialGradient(W / 2, W / 2, W * 0.1, W / 2, W / 2, W * 0.5);
    grd.addColorStop(0, 'rgba(246,238,220,0.92)'); grd.addColorStop(0.85, 'rgba(236,224,198,0.88)'); grd.addColorStop(1, 'rgba(236,224,198,0)');
    g.fillStyle = grd; g.beginPath(); g.arc(W / 2, W / 2, W / 2, 0, Math.PI * 2); g.fill();
    // lake, island, river in pale ink-blue
    g.fillStyle = 'rgba(120,150,160,0.35)';
    let [lx, lz] = this.map(LAKE.x, LAKE.z);
    g.beginPath(); g.arc(lx, lz, LAKE.r * sc, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(120,140,90,0.45)';
    [lx, lz] = this.map(ISLAND.x, ISLAND.z);
    g.beginPath(); g.arc(lx, lz, ISLAND.r * sc, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#6b2a20'; g.beginPath(); g.moveTo(lx, lz - 9); g.lineTo(lx - 4, lz + 3); g.lineTo(lx + 4, lz + 3); g.fill();
    g.strokeStyle = 'rgba(120,150,160,0.4)'; g.lineCap = 'round';
    for (let k = 1; k < RIVER.length; k++) {
      const [ax, az] = this.map(...RIVER[k - 1]), [bx, bz] = this.map(...RIVER[k]);
      g.lineWidth = riverHalfWidth(k / (RIVER.length - 1)) * 2 * sc;
      g.beginPath(); g.moveTo(ax, az); g.lineTo(bx, bz); g.stroke();
    }
    // the course as a dry-brush ink loop
    const path = () => { g.beginPath(); for (let i = 0; i <= tr.N; i += 4) { const k = i % tr.N; const [x, z] = this.map(tr.px[k], tr.pz[k]); i ? g.lineTo(x, z) : g.moveTo(x, z); } g.closePath(); };
    g.lineJoin = 'round';
    g.strokeStyle = 'rgba(30,26,22,0.85)'; g.lineWidth = 11; path(); g.stroke();
    g.strokeStyle = 'rgba(214,196,160,0.95)'; g.lineWidth = 5; path(); g.stroke();
    // start line
    const [sx, sz] = this.map(tr.px[0], tr.pz[0]);
    g.save(); g.translate(sx, sz); g.rotate(Math.atan2(tr.tz[0], tr.tx[0]));
    g.fillStyle = '#b8322a'; g.fillRect(-3, -11, 6, 22); g.restore();
    this.mapBase = c;
  }
  drawMinimap(order) {
    const g = this.ctx, W = 360;
    g.clearRect(0, 0, W, W);
    g.drawImage(this.mapBase, 0, 0);
    for (let k = order.length - 1; k >= 0; k--) {
      const r = order[k], [x, z] = this.map(r.pos.x, r.pos.z), me = r === this.player;
      g.beginPath(); g.arc(x, z, me ? 11 : 8, 0, Math.PI * 2);
      g.fillStyle = r.preset.color; g.fill();
      g.lineWidth = me ? 4 : 2.5; g.strokeStyle = me ? '#fff6dc' : 'rgba(30,26,22,0.8)'; g.stroke();
      if (me) {
        const h = r.heading;
        g.beginPath(); g.moveTo(x + Math.sin(h) * 22, z + Math.cos(h) * 22); g.lineTo(x + Math.sin(h + 2.5) * 12, z + Math.cos(h + 2.5) * 12); g.lineTo(x + Math.sin(h - 2.5) * 12, z + Math.cos(h - 2.5) * 12);
        g.closePath(); g.fillStyle = '#fff6dc'; g.fill();
      }
    }
  }

  // ------------------------------------------------------------ results scroll
  showResults(rows, player, sub) {
    this.el.resSub.innerHTML = sub;
    this.el.resBody.innerHTML = rows.map((r, i) => `<tr class="${r.racer === player ? 'me' : ''}" style="--c:${r.racer.preset.color}">
      <td class="rk">${CN[i + 1]}</td><td><i></i>${esc(r.racer.preset.name)} · <small>${esc(r.racer.preset.ox)}</small></td>
      <td>${r.est ? '约 ' : ''}${fmtTime(r.time)}</td><td>${fmtTime(r.best)}</td></tr>`).join('');
    this.el.results.classList.remove('hidden');
  }
  hideResults() { this.el.results.classList.add('hidden'); }
}
