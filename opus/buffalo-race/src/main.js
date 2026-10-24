// main.js — builds the valley, runs the race state machine, cameras and the frame loop.
import * as THREE from 'three';
import { SHARED, updateScatters, clamp, lerp, damp, dampAngle, smoothstep, wrapAngle } from './util.js';
import { loadFonts, setAniso, nameTagTexture } from './textures.js';
import { Track } from './track.js';
import { Terrain } from './terrain.js';
import { buildSky } from './sky.js';
import { buildArchitecture } from './architecture.js';
import { buildNature } from './nature.js';
import { buildDecor } from './decor.js';
import { RIDERS, createRacerModel } from './buffalo.js';
import { FX } from './fx.js';
import { Audio } from './audio.js';
import { Racer, collideRacers } from './racer.js';
import { HUD, STATS, CN, fmtTime } from './hud.js';
import { Input } from './input.js';

const CHARS = '__CJK__'; // filled in by build.py with every CJK character used in the sources
const DIFF = { easy: [0.85, 0.91], normal: [0.92, 0.98], hard: [0.98, 1.03] };
const CAMS = [
  { dist: 7.0, h: 2.9, look: 1.7, ahead: 4.5, name: '远 景' },
  { dist: 4.9, h: 2.3, look: 1.6, ahead: 6.5, name: '近 景' },
  { fp: true, name: '牧童视角' },
];
const STORE = 'mutong-sainiu-v1';
const loadStore = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } };
const saveStore = (d) => { try { localStorage.setItem(STORE, JSON.stringify(d)); } catch (e) { /* storage unavailable */ } };
const wait = (ms = 30) => new Promise((r) => setTimeout(r, ms));

async function boot(saved = {}) {
  const loadEl = document.getElementById('loading');
  const barEl = loadEl.querySelector('.load-bar i'), txtEl = loadEl.querySelector('.load-text');
  const step = async (p, t) => { barEl.style.width = `${p}%`; txtEl.textContent = t + '……'; await wait(); };

  await step(4, '研墨铺纸');
  await loadFonts(CHARS);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  } catch (e) {
    txtEl.textContent = '此浏览器无法启用 WebGL，请换用新版 Chrome / Edge / Safari。';
    return;
  }
  const maxPR = Math.min(devicePixelRatio || 1, 2);
  let pr = maxPR;
  renderer.setPixelRatio(pr);
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById('stage').appendChild(renderer.domElement);
  setAniso(Math.min(8, renderer.capabilities.getMaxAnisotropy()));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.3, 4000);
  camera.position.set(0, 40, 300);

  await step(10, '勾勒赛道');
  const track = new Track();
  await step(18, '开垦田畴');
  const terrain = new Terrain(track);
  terrain.build(scene);
  await step(38, '晕染天色');
  const sky = buildSky(scene, (x, z) => terrain.heightAt(x, z));
  track.buildMeshes(scene);
  await step(48, '营造村落');
  const arch = buildArchitecture(scene, track, terrain);
  await step(62, '栽柳种桃');
  buildNature(scene, track, terrain);
  await step(78, '张灯结彩');
  const decor = buildDecor(scene, track, terrain, arch.lanterns);
  const fx = new FX(scene);
  await step(88, '牵牛入场');

  const racers = RIDERS.map((preset, i) => {
    const model = createRacerModel(preset);
    scene.add(model.root, model.rope);
    const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: nameTagTexture(preset.name, preset.color), transparent: true, depthWrite: false }));
    tag.scale.set(2.3, 0.575, 1); tag.position.y = 3.5; tag.renderOrder = 4;
    model.root.add(tag); model.tag = tag;
    return new Racer({ id: i, preset, model, isPlayer: false, track, terrain, stats: STATS[i] });
  });

  const audio = new Audio();
  const input = new Input();
  const store = loadStore();
  const settings = Object.assign({ rider: 0, laps: 3, diff: 'normal', muted: false, cam: 0 }, store.settings || {}, saved.settings || {});
  const persist = () => { store.settings = { ...settings }; saveStore(store); };
  window.claude?.hot?.snapshot?.(() => ({ settings: { ...settings } }));

  const race = { started: false, time: 0, laps: settings.laps, racers, order: [...racers], finishOrder: [] };
  const events = [];
  let state = 'menu', paused = false, player = null;
  let countT = 0, countN = 0, introT = 0, finishT = 0, shake = 0, newRecord = null;
  let touchMode = matchMedia('(pointer: coarse)').matches;

  const uiTick = () => { if (audio.ctx) audio.woodblock(audio.ctx.currentTime, 0.22, 1150); };
  const hud = new HUD(document.getElementById('ui'), track, RIDERS, {
    onStart: (sel) => startRace(sel),
    onRestart: () => startRace({}),
    onMenu: () => { uiTick(); setupAttract(); },
    onPause: () => setPaused(!paused),
    onResume: () => setPaused(false),
    onMute: () => toggleMute(),
    onUiSound: () => { wakeAudio(); uiTick(); },
    getBest: (laps) => store.best && store.best[laps],
  });
  hud.setMuted(settings.muted);
  hud.el.touch.querySelectorAll('button[data-k]').forEach((b) => input.bindTouch(b, b.dataset.k));

  // ------------------------------------------------------------ audio wake-up on the first gesture
  function wakeAudio() {
    audio.init(); audio.setMuted(settings.muted);
    if (state === 'menu') audio.startMusic('title');
  }
  const firstGesture = () => { wakeAudio(); removeEventListener('pointerdown', firstGesture); removeEventListener('keydown', firstGesture); };
  addEventListener('pointerdown', firstGesture);
  addEventListener('keydown', firstGesture);
  addEventListener('touchstart', () => { if (!touchMode) { touchMode = true; if (player && state !== 'menu') hud.showTouch(true); } }, { passive: true });

  function toggleMute() {
    settings.muted = !settings.muted;
    audio.init(); audio.setMuted(settings.muted); hud.setMuted(settings.muted); persist();
  }
  function setPaused(v) {
    if (!player || state === 'menu' || state === 'results') return;
    paused = v; hud.showPause(v);
    if (audio.ctx) v ? audio.ctx.suspend() : audio.ctx.resume();
  }
  document.addEventListener('visibilitychange', () => { if (document.hidden && (state === 'race' || state === 'countdown')) setPaused(true); });

  // ------------------------------------------------------------ race setup
  function setupAttract() {
    state = 'menu'; paused = false; player = null;
    race.started = true; race.time = 0; race.laps = 99; race.finishOrder = [];
    racers.forEach((r, i) => { r.isPlayer = false; r.skill = r.skillMul = 0.9 + i * 0.015; r.placeOnGrid(i); r.model.tag.visible = true; r.model.riderHead.visible = r.model.riderBody.visible = true; });
    shot.t = 0;
    hud.showMenu(settings);
    hud.showTouch(false);
    if (audio.ctx) { audio.ctx.resume(); audio.startMusic('title'); }
  }

  function startRace(sel) {
    Object.assign(settings, sel); persist();
    audio.init(); audio.setMuted(settings.muted); audio.stopMusic();
    if (audio.ctx) audio.ctx.resume();
    paused = false;
    race.laps = settings.laps; race.time = 0; race.started = false; race.finishOrder = [];
    const [lo, hi] = DIFF[settings.diff] || DIFF.normal;
    const others = racers.filter((r) => r.id !== settings.rider);
    others.forEach((r, k) => { r.isPlayer = false; r.skill = r.skillMul = lerp(hi, lo, k / (others.length - 1)); r.placeOnGrid(k); r.model.tag.visible = true; });
    player = racers[settings.rider];
    player.isPlayer = true; player.skill = player.skillMul = 1; player.placeOnGrid(racers.length - 1);
    player.model.tag.visible = false;
    player.input.steer = 0; input.steer = 0;
    hud.hideMenu(); hud.startRace(racers, player, race.laps); hud.showTouch(touchMode); hud.showPause(false);
    state = 'countdown'; countT = 4; countN = 5; introT = 0; finishT = 0; newRecord = null;
    chase.yaw = player.heading;
  }

  function onLap(e) {
    const best = player.lapTimes.length > 1 && e.time <= Math.min(...player.lapTimes);
    hud.addLapTime(e.lap, e.time, best);
    if (e.lap === race.laps - 1) { hud.message('最后一圈', 'final', 1.8); if (audio.ctx) audio.gong(audio.ctx.currentTime, false, 0.5); }
    else if (e.lap < race.laps) { hud.message(`第${CN[e.lap + 1]}圈`, 'lap', 1.3); if (audio.ctx) audio.woodblock(audio.ctx.currentTime, 0.4, 760); }
  }

  function onFinish() {
    state = 'finish'; finishT = 0;
    const place = race.finishOrder.indexOf(player) + 1;
    hud.message(place === 1 ? '夺 魁' : `第${CN[place]}名`, place === 1 ? 'win' : 'done', 3.2);
    audio.stopMusic(); audio.finishFanfare(place === 1); audio.moo(0.7);
    store.best = store.best || {};
    const rec = store.best[race.laps] || { race: Infinity, lap: Infinity };
    newRecord = { race: player.finishTime < (rec.race ?? Infinity), lap: player.bestLap < (rec.lap ?? Infinity) };
    store.best[race.laps] = { race: Math.min(rec.race ?? Infinity, player.finishTime), lap: Math.min(rec.lap ?? Infinity, player.bestLap) };
    saveStore(store);
  }

  function showResults() {
    state = 'results';
    const total = race.laps * track.length;
    const rows = race.order.map((r) => {
      if (r.finished) return { racer: r, time: r.finishTime, best: r.bestLap, est: false };
      const avg = Math.max(r.raceDist / Math.max(race.time, 1), 8);
      return { racer: r, time: race.time + Math.max(0, total - r.raceDist) / avg, best: r.bestLap, est: true };
    });
    rows.sort((a, b) => a.time - b.time);
    const place = rows.findIndex((x) => x.racer === player) + 1;
    const head = place === 1 ? '独占鳌头，牛气冲天！' : place <= 3 ? `位列第${CN[place]}，再接再厉！` : `第${CN[place]}名，来日方长。`;
    const rec = [newRecord?.race && '新纪录 · 总用时', newRecord?.lap && '新纪录 · 最快一圈'].filter(Boolean).join('　');
    hud.showResults(rows, player, `${head}${rec ? `<br><em>${rec}</em>` : ''}`);
    audio.startMusic('title');
  }

  // ------------------------------------------------------------ events from the simulation
  function handleEvents() {
    for (const e of events) {
      const r = e.racer, me = r === player;
      switch (e.type) {
        case 'whip': if (me) { audio.whip(); if (Math.random() < 0.3) audio.moo(0.45); } break;
        case 'pad':
          fx.sparks(r.pos.x, r.pos.y + 0.5, r.pos.z, fx.c.gold, 12, 7);
          if (me) { audio.boostPad(); hud.toast('疾 风', 'gold'); shake = Math.max(shake, 0.25); }
          break;
        case 'pickup':
          fx.burst(e.x, e.y + 0.6, e.z, fx.c.green);
          if (me) { audio.pickup(); hud.toast('牛劲 +', 'green'); }
          break;
        case 'miniturbo':
          fx.sparks(r.pos.x, r.pos.y + 0.4, r.pos.z, e.level > 1 ? redSpark : fx.c.gold, 16, 6);
          if (me) { audio.boostPad(); hud.toast(e.level > 1 ? '神 漂' : '漂 移', e.level > 1 ? 'red' : 'gold'); }
          break;
        case 'bump':
          if (me || e.other === player) { audio.bump(); shake = Math.max(shake, clamp(e.strength / 14, 0.12, 0.6)); }
          break;
        case 'lap': if (me && state === 'race') onLap(e); break;
        case 'finish':
          race.finishOrder.push(r);
          if (me && state === 'race') onFinish();
          break;
      }
    }
    events.length = 0;
  }
  const redSpark = new THREE.Color(0xff5a3c);

  function sortOrder() {
    const fo = race.finishOrder;
    race.order.sort((a, b) => {
      const fa = fo.indexOf(a), fb = fo.indexOf(b);
      if (fa >= 0 || fb >= 0) return (fa < 0 ? 99 : fa) - (fb < 0 ? 99 : fb);
      return b.raceDist - a.raceDist;
    });
  }

  // Dust, splashes, drift sparks and boost glitter at the hooves.
  function hoofFx(dt) {
    for (const r of racers) {
      const spd = r.speed;
      if (r.pos.distanceToSquared(camera.position) > 110 * 110) continue;
      const fx0 = Math.sin(r.heading), fz0 = Math.cos(r.heading);
      if (spd > 2.5) {
        r.fxAcc = (r.fxAcc || 0) + dt * (3 + spd * 0.45);
        while (r.fxAcc >= 1) {
          r.fxAcc -= 1;
          const side = (Math.random() < 0.5 ? -1 : 1) * 0.45, back = Math.random() < 0.5 ? 0.9 : -0.7;
          fx.hoof(r.pos.x - fx0 * back - fz0 * side, r.pos.y, r.pos.z - fz0 * back + fx0 * side, r.vel.x, r.vel.y, r.surface === 'road' ? 'road' : r.surface, spd);
        }
      }
      if (r.drifting && r.driftCharge > 0.7) {
        const c = r.driftCharge > 1.6 ? redSpark : fx.c.gold;
        for (const side of [-1, 1]) fx.sparks(r.pos.x - fx0 * 1.0 - fz0 * side * 0.5, r.pos.y + 0.15, r.pos.z - fz0 * 1.0 + fx0 * side * 0.5, c, 1, 3);
      }
      if (r.boostActive && Math.random() < 0.6) fx.sparks(r.pos.x - fx0 * 1.4, r.pos.y + 1.0, r.pos.z - fz0 * 1.4, fx.c.gold, 1, 2);
    }
  }

  // ------------------------------------------------------------ cameras
  const chase = { yaw: 0, pos: new THREE.Vector3(), fov: 60 };
  const camPos = new THREE.Vector3().copy(camera.position), camLook = new THREE.Vector3(), want = new THREE.Vector3(), look = new THREE.Vector3();
  const shot = { i: -1, t: 0, target: null, fixed: new THREE.Vector3() };
  let camMode = clamp(settings.cam | 0, 0, CAMS.length - 1);

  function place(cut) {
    if (cut) { camPos.copy(want); camLook.copy(look); }
    camera.position.copy(camPos);
    if (shake > 0.001) camera.position.add(new THREE.Vector3((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake));
    camera.lookAt(camLook);
  }

  function menuCam(dt) {
    shot.t -= dt;
    let cut = false;
    if (shot.t <= 0 || !shot.target) {
      shot.i = (shot.i + 1) % 4; shot.t = shot.i === 2 ? 9 : 7; cut = true;
      shot.target = race.order[Math.floor(Math.random() * 3)];
      const r = shot.target;
      if (shot.i === 1 || shot.i === 2) {
        const i = track.idx(r.s + (shot.i === 1 ? 60 : 110)), side = shot.i === 2 ? -Math.sign(track.curv[i] || 1) : Math.random() < 0.5 ? -1 : 1;
        const lat = side * (track.halfW[i] + (shot.i === 1 ? 4.5 : 42));
        shot.fixed.set(track.px[i] + track.rx[i] * lat, 0, track.pz[i] + track.rz[i] * lat);
        shot.fixed.y = Math.max(terrain.heightAt(shot.fixed.x, shot.fixed.z), track.py[i]) + (shot.i === 1 ? 1.8 : 15);
      }
    }
    const r = shot.target, f = Math.sin(r.heading), g = Math.cos(r.heading), t = SHARED.uTime.value;
    if (shot.i === 0) {
      const a = t * 0.22;
      want.set(r.pos.x + Math.sin(a) * 11, r.pos.y + 3.2, r.pos.z + Math.cos(a) * 11);
      look.set(r.pos.x, r.pos.y + 1.5, r.pos.z);
      camPos.copy(want);
    } else if (shot.i === 3) {
      want.set(r.pos.x + f * 8.5 - g * 2.2, r.pos.y + 1.4, r.pos.z + g * 8.5 + f * 2.2);
      look.set(r.pos.x, r.pos.y + 1.4, r.pos.z);
      camPos.copy(want);
    } else {
      want.copy(shot.fixed);
      look.set(r.pos.x, r.pos.y + 1.4, r.pos.z);
      camPos.copy(want);
    }
    want.y = Math.max(want.y, terrain.heightAt(want.x, want.z) + 1);
    camPos.y = Math.max(camPos.y, want.y);
    if (!cut) camLook.lerp(look, 1 - Math.exp(-6 * dt));
    camera.fov = damp(camera.fov, 50, 3, dt);
    place(cut);
    return r.pos;
  }

  function chaseCam(dt, r, snap) {
    const m = CAMS[camMode];
    const slip = r.speed > 4 ? wrapAngle(Math.atan2(r.vel.x, r.vel.y) - r.heading) : 0;
    const tYaw = r.heading + (r.vF < -1 ? 0 : clamp(slip, -0.7, 0.7) * 0.55);
    chase.yaw = snap ? tYaw : dampAngle(chase.yaw, tYaw, m.fp ? 12 : 4.2, dt);
    const fx0 = Math.sin(chase.yaw), fz0 = Math.cos(chase.yaw);
    if (m.fp) {
      const hx = Math.sin(r.heading), hz = Math.cos(r.heading);
      want.set(r.pos.x + hx * 0.2, r.pos.y + 2.38 + Math.sin(t2 * 9) * Math.min(r.speed, 30) * 0.0012, r.pos.z + hz * 0.2);
      look.set(r.pos.x + fx0 * 14, r.pos.y, r.pos.z + fz0 * 14);
      camPos.copy(want);
      camLook.copy(look);
    } else {
      want.set(r.pos.x - fx0 * m.dist, r.pos.y + m.h, r.pos.z - fz0 * m.dist);
      const gy = Math.max(terrain.heightAt(want.x, want.z), r.pos.y - 1.5) + 1.0;
      if (want.y < gy) want.y = gy;
      look.set(r.pos.x + fx0 * m.ahead, r.pos.y + m.look, r.pos.z + fz0 * m.ahead);
      if (snap) { camPos.copy(want); camLook.copy(look); }
      else {
        camPos.x = damp(camPos.x, want.x, 12, dt); camPos.z = damp(camPos.z, want.z, 12, dt); camPos.y = damp(camPos.y, want.y, 7, dt);
        camLook.lerp(look, 1 - Math.exp(-18 * dt));
      }
    }
    const tf = 60 + clamp(r.speed / 33, 0, 1.4) * 8 + (r.boostActive ? 6 : 0) + (m.fp ? 6 : 0);
    camera.fov = damp(camera.fov, tf * aspectFov(), 3, dt);
    place(false);
    return r.pos;
  }

  // Swing from in front of the buffalo round to the chase position during the countdown.
  function introCam(dt, r) {
    const m = CAMS[camMode].fp ? CAMS[0] : CAMS[camMode];
    const k = smoothstep(0, 3.0, introT), ang = r.heading + Math.PI * (1 - k) * 0.85;
    want.set(r.pos.x - Math.sin(ang) * lerp(13, m.dist, k), r.pos.y + lerp(5.5, m.h, k), r.pos.z - Math.cos(ang) * lerp(13, m.dist, k));
    look.set(r.pos.x + Math.sin(r.heading) * m.ahead * k, r.pos.y + lerp(1.6, m.look, k), r.pos.z + Math.cos(r.heading) * m.ahead * k);
    camera.fov = 60 * aspectFov();
    place(true);
    return r.pos;
  }

  function finishCam(dt, r) {
    const a = r.heading + Math.PI * 0.75 + finishT * 0.25;
    want.set(r.pos.x + Math.sin(a) * 9, r.pos.y + 3, r.pos.z + Math.cos(a) * 9);
    look.set(r.pos.x, r.pos.y + 1.6, r.pos.z);
    camPos.lerp(want, 1 - Math.exp(-3 * dt));
    camPos.y = Math.max(camPos.y, terrain.heightAt(camPos.x, camPos.z) + 1);
    camLook.lerp(look, 1 - Math.exp(-6 * dt));
    camera.fov = damp(camera.fov, 55 * aspectFov(), 2, dt);
    place(false);
    return r.pos;
  }

  const aspectFov = () => { const a = innerWidth / innerHeight; return a < 1.3 ? clamp(Math.pow(1.3 / a, 0.55), 1, 1.45) : 1; };

  // ------------------------------------------------------------ keys
  function handleKeys() {
    if (state === 'menu') {
      for (const code of input.pressed) { if (hud.menuKey(code)) uiTick(); }
      if (input.hit('Enter', 'NumpadEnter')) startRace({ ...hud.sel });
      return;
    }
    if (input.hit('KeyM')) toggleMute();
    if (state === 'results') { if (input.hit('Enter', 'Space', 'NumpadEnter')) startRace({}); if (input.hit('Escape')) setupAttract(); return; }
    if (input.hit('Escape', 'KeyP')) setPaused(!paused);
    if (paused) return;
    if (input.hit('KeyC')) { camMode = (camMode + 1) % CAMS.length; settings.cam = camMode; persist(); hud.toast(CAMS[camMode].name); }
    if (input.hit('KeyR') && state === 'race' && player && !player.finished) player.respawn();
  }

  // ------------------------------------------------------------ frame loop
  function resize() {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize);

  const perf = { acc: 0, n: 0, t: 0 };
  function adaptResolution(rawDt) {
    perf.acc += rawDt; perf.n++; perf.t += rawDt;
    if (perf.t < 2.5) return;
    const avg = perf.acc / perf.n;
    perf.acc = perf.n = perf.t = 0;
    let np = pr;
    if (avg > 0.024 && pr > 0.75) np = Math.max(0.75, pr - 0.25);
    else if (avg < 0.0135 && pr < maxPR) np = Math.min(maxPR, pr + 0.25);
    if (np !== pr) { pr = np; renderer.setPixelRatio(pr); renderer.setSize(innerWidth, innerHeight); }
  }

  const drawSize = new THREE.Vector2();
  let last = performance.now(), t2 = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    const raw = Math.max(0, (now - last) / 1000);
    last = now;
    if (!document.hidden) adaptResolution(raw);
    tick(Math.min(raw, 1 / 20));
    renderer.render(scene, camera);
  }

  function tick(dt) {
    handleKeys();
    let focus;
    if (!paused) {
      t2 += dt;
      SHARED.uTime.value = t2;
      if (state === 'countdown') {
        introT += dt; countT -= dt;
        const n = Math.ceil(countT);
        if (n !== countN) {
          countN = n;
          if (n >= 1 && n <= 3) { hud.message(CN[n], 'count', 0.9); audio.countdown(n); }
          else if (n <= 0) { hud.message('驾！', 'go', 1.1); audio.countdown(0); audio.moo(0.6); race.started = true; state = 'race'; audio.startMusic('race'); }
        }
      }
      if (race.started) race.time += dt;
      if (player && !player.finished) input.read(player.input, dt);
      if (player) for (const r of racers) {
        if (r.isPlayer) continue;
        const gap = r.raceDist - player.raceDist;
        r.skillMul = r.skill * (1 + clamp(-gap / 520, -0.08, 0.06));
      }
      const n = Math.max(1, Math.ceil(dt * 90)), h = dt / n;
      for (let k = 0; k < n; k++) { for (const r of racers) r.update(h, race, events); collideRacers(racers, events); }
      decor.update(dt, t2, racers, events);
      handleEvents();
      sortOrder();
      for (const r of racers) r.updateModel(dt);
      arch.update(dt);
      hoofFx(dt);
      shake = Math.max(0, shake - dt * 1.6);
      if (state === 'finish') { finishT += dt; if (finishT > 4.2) showResults(); }
      if (state === 'results') finishT += dt;
    }

    if (state === 'menu') focus = menuCam(dt);
    else if (state === 'countdown' && introT < 3.0) { focus = introCam(dt, player); chase.yaw = player.heading; }
    else if (state === 'finish' || state === 'results') focus = finishCam(dt, player);
    else focus = chaseCam(paused ? 0 : dt, player, false);
    camera.updateProjectionMatrix();
    for (const r of racers) r.model.tag.visible = r !== player && r.pos.distanceToSquared(camera.position) > 64;
    if (player) player.model.riderHead.visible = player.model.riderBody.visible = !(CAMS[camMode].fp && (state === 'race' || (state === 'countdown' && introT >= 3)));

    if (player) {
      audio.updateMotion(paused ? 0 : dt, state === 'menu' ? 0 : player.speed, player.surface, player.boostActive);
      if (state !== 'menu') hud.update(dt, { place: race.order.indexOf(player) + 1, laps: race.laps, time: player.finished ? player.finishTime : race.time, order: race.order });
    }
    renderer.getDrawingBufferSize(drawSize);
    fx.update(paused ? 0 : dt, camera.position, t2, camera.projectionMatrix.elements[5] * drawSize.y * 0.5);
    sky.update(camera.position, focus, dt);
    updateScatters(camera.position);
    input.endFrame();
  }

  await step(100, '鸣锣开赛');
  setupAttract();
  hud.sel = { rider: settings.rider, laps: settings.laps, diff: settings.diff };
  hud.showMenu(hud.sel);
  loadEl.classList.add('done');
  setTimeout(() => loadEl.remove(), 1200);
  requestAnimationFrame((t) => { last = t; frame(t); });

  // Debug hook: advance the simulation without requestAnimationFrame (works in background tabs).
  const advance = (sec, fps = 60) => { for (let k = 0; k < sec * fps; k++) tick(1 / fps); renderer.render(scene, camera); };
  window.__game = { scene, camera, renderer, track, terrain, racers, race, input, hud, get state() { return state; }, get player() { return player; }, startRace, setupAttract, advance };
}

function start(data) {
  boot(data || {}).catch((e) => {
    console.error(e);
    const t = document.querySelector('#loading .load-text');
    if (t) t.textContent = '出错了：' + (e && e.message ? e.message : e);
  });
}
window.claude?.hot?.ready ? window.claude.hot.ready(start) : start(window.claude?.hot?.data ?? {});
