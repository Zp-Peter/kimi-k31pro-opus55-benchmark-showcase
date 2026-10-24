import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '..');
const artifacts = resolve(root, 'artifacts');
await mkdir(artifacts, { recursive: true });
const chromeCandidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const chromePath = chromeCandidates.find((path) => existsSync(path));
if (!chromePath) throw new Error('Set CHROME_PATH to a Chrome/Chromium executable');
const port = 9333 + Math.floor(Math.random() * 300);
const approvedTemp = '/private/var/folders/f7/5k3rxd5n4gzbqj7_nvg49bb80000gn/T/opencode';
const tempBase = existsSync(approvedTemp) ? approvedTemp : artifacts;
const profile = await mkdtemp(resolve(tempBase, 'realm-blade-'));
const chrome = spawn(chromePath, [
  '--headless=new', '--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
  '--hide-scrollbars', '--no-first-run', `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`, '--window-size=1440,900', 'about:blank',
], { stdio: 'ignore' });
const delay = (ms) => new Promise((resolveDelay) => setTimeout(resolveDelay, ms));
let socket;
const errors = [];
try {
  let version;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try { version = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json(); break; } catch { await delay(100); }
  }
  assert.ok(version, 'Chrome DevTools endpoint did not start');
  const pages = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const page = pages.find((entry) => entry.type === 'page');
  socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolveOpen, rejectOpen) => { socket.onopen = resolveOpen; socket.onerror = rejectOpen; });
  let serial = 0;
  const pending = new Map();
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const callbacks = pending.get(message.id);
      if (callbacks) {
        pending.delete(message.id);
        if (message.error) callbacks.reject(new Error(message.error.message)); else callbacks.resolve(message.result);
      }
    } else if (message.method === 'Runtime.exceptionThrown') {
      errors.push(message.params.exceptionDetails.text);
    }
  };
  const send = (method, params = {}) => new Promise((resolveSend, rejectSend) => {
    const id = ++serial;
    pending.set(id, { resolve: resolveSend, reject: rejectSend });
    socket.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async (expression) => {
    const response = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(response.exceptionDetails.text);
    return response.result.value;
  };
  const capture = async (name) => {
    await delay(250);
    const screenshot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
    await writeFile(resolve(artifacts, `${name}.png`), Buffer.from(screenshot.data, 'base64'));
  };
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: process.env.GAME_URL || 'http://localhost:5173' });
  let ready = false;
  for (let attempt = 0; attempt < 60 && !ready; attempt += 1) {
    await delay(250);
    ready = await evaluate('!!window.__REALM_BLADE__');
  }
  assert.equal(ready, true, 'Game module did not initialize');
  await capture('menu');

  const build = await evaluate(`(()=>{
    const g=window.__REALM_BLADE__;g.newMatch('quick',5);g.paused=true;g.controlGate=false;g.ui['control-gate'].classList.remove('is-visible');
    const initialYaw=g.player.yaw;const aiBudgets=g.buildBudgets.slice(1);const moveStart={x:g.player.x,z:g.player.z};g.keys.add('KeyW');for(let i=0;i<30;i++)g.updatePlayerMovement(1/60,true);g.keys.clear();const movement=Math.hypot(g.player.x-moveStart.x,g.player.z-moveStart.z);
    const centers=[[-10.5,-10.5],[10.5,-10.5],[-10.5,10.5],[10.5,10.5]][g.teams[0].buildZone];
    g.player.x=centers[0];g.player.z=centers[1];g.buildVisited=true;
    const a=g.tryPlaceBuild(0,g.teams[0].buildZone,'high',centers[0]+4.5,centers[1]-4.5,0);
    const b=g.tryPlaceBuild(0,g.teams[0].buildZone,'low',centers[0]-4.5,centers[1]+4.5,Math.PI/2);
    g.paused=false;g.selectBuild('crate');const target={x:centers[0]-4.5,z:centers[1]-4.5};g.world.camera.position.set(g.player.x,1.62,g.player.z);g.world.camera.lookAt(target.x,0,target.z);g.world.camera.updateMatrixWorld(true);g.updateGhost();const ghostValid=!!g.ghostPlacement?.valid;g.placePlayerBuild();const placed=g.builds.filter(item=>item.teamId===0).length===3;g.world.camera.lookAt(target.x,.65,target.z);g.world.camera.updateMatrixWorld(true);g.deleteTargetedBuild();const refunded=g.buildBudgets[0]===45&&g.builds.filter(item=>item.teamId===0).length===2;g.paused=true;g.selectedBuild=null;g.world.removeGhost();
    g.player.yaw=Math.atan2(-(centers[0]+1-g.player.x),-(centers[1]-1-g.player.z));g.pitch=-0.12;
    g.world.setPlayerCamera(g.player,g.pitch);g.updateHUD(true);g.ui['phase-banner'].classList.remove('is-visible');g.ui.toast.classList.remove('is-visible');
    return {a:a.ok,b:b.ok,aReason:a.reason,bReason:b.reason,initialYaw,aiBudgets,movement,ghostValid,ghostReason:g.ghostPlacement?.reason,ghostPoint:g.ghostPlacement?{x:g.ghostPlacement.x,z:g.ghostPlacement.z}:null,placed,refunded,marker:g.ui['zone-marker'].querySelector('span').textContent,state:g.getDebugState()};
  })()`);
  assert.equal(Number.isFinite(build.initialYaw), true);
  assert.ok(build.movement > 1, `Expected forward movement, got ${build.movement}`);
  assert.equal(build.aiBudgets.every((budget) => budget >= 0 && budget < 100), true);
  assert.equal(build.marker.includes('NaN'), false);
  assert.equal(build.a && build.b, true, JSON.stringify({a:build.aReason,b:build.bReason,zone:build.state.teams[0].buildZone}));
  assert.equal(build.ghostValid && build.placed && build.refunded, true, JSON.stringify({ghost:build.ghostValid,reason:build.ghostReason,point:build.ghostPoint,placed:build.placed,refunded:build.refunded}));
  assert.equal(build.state.actors.length, 8);
  assert.equal(build.state.routesValid, true);
  await capture('build');
  const buildToggle = await evaluate(`(()=>{const g=window.__REALM_BLADE__;g.paused=false;g.openBuildMenu();const opened=g.modal==='build-menu';g.onKeyDown({code:'KeyB'});const closed=g.modal===null;g.onKeyDown({code:'KeyB'});const reopened=g.modal==='build-menu';g.onKeyDown({code:'KeyB'});g.paused=true;return {opened,closed,reopened,finalClosed:g.modal===null};})()`);
  assert.deepEqual(buildToggle, { opened: true, closed: true, reopened: true, finalClosed: true });

  const swap = await evaluate(`(()=>{const g=window.__REALM_BLADE__;g.finishBuild();return {state:g.getDebugState(),valid:g.teams.every(t=>t.spawnZone!==t.buildZone)&&new Set(g.teams.map(t=>t.spawnZone)).size===4};})()`);
  assert.equal(swap.valid, true);
  await capture('swap');

  const shop = await evaluate(`(()=>{const g=window.__REALM_BLADE__;g.beginBuy();g.buyWeapon('sword');g.ui['phase-banner'].classList.remove('is-visible');return {weapon:g.player.weaponId,money:g.player.money,phase:g.phase};})()`);
  assert.deepEqual(shop, { weapon: 'sword', money: 100, phase: 'buy' });
  const shopToggle = await evaluate(`(()=>{const g=window.__REALM_BLADE__;g.paused=false;g.onKeyDown({code:'KeyB'});const closed=g.modal===null;g.onKeyDown({code:'KeyB'});const reopened=g.modal==='shop-screen';g.paused=true;return {closed,reopened};})()`);
  assert.deepEqual(shopToggle, { closed: true, reopened: true });
  await capture('shop');

  const combat = await evaluate(`(()=>{
    const g=window.__REALM_BLADE__;g.beginCombat();g.controlGate=false;g.ui['control-gate'].classList.remove('is-visible');
    for(let i=0;i<210&&g.phase==='combat';i++){g.updateCombat(1/60);g.world.updateEffects(1/60);}
    g.paused=true;g.ui['phase-banner'].classList.remove('is-visible');g.ui.toast.classList.remove('is-visible');
    for(const a of g.actors)g.world.updateActor(a,0,g.elapsed);g.updateCamera(0);g.world.updateViewModel(g.player,0,g.elapsed,true);g.updateHUD(true);
    return {phase:g.phase,alive:g.actors.filter(a=>a.alive).length,weapon:g.player.weaponId};
  })()`);
  assert.equal(combat.phase, 'combat');
  assert.equal(combat.weapon, 'sword');
  await capture('combat');

  const mechanics = await evaluate(`(()=>{
    const g=window.__REALM_BLADE__;
    const setup=()=>{g.newMatch('quick',5);g.paused=true;g.buildVisited=true;g.finishBuild();g.beginBuy();g.beginCombat();g.controlGate=false;for(const a of g.actors)a.alive=a.id===0||a.id===2;Object.assign(g.player,{x:0,z:0,yaw:0,weaponId:'sword',attack:null,cooldown:0,blocking:false,dodgeTime:0});Object.assign(g.actors[2],{x:0,z:-2.4,yaw:Math.PI,health:100,stamina:100,attack:null,blocking:false,dodgeTime:0});g.pendingHits=[];};
    const strike=()=>{g.player.attack=null;g.player.cooldown=0;g.startAttack(g.player);g.updateActorCombat(g.player,.24);g.applyPendingHits();};
    setup();strike();const firstHit=g.actors[2].health;g.updateActorCombat(g.player,.01);g.applyPendingHits();const noRepeat=g.actors[2].health;
    g.actors[2].z=-5;strike();const noFarDamage=g.actors[2].health;
    g.actors[2].z=2;strike();const noBackDamage=g.actors[2].health;
    g.actors[2].z=-2.4;const wall={x:0,z:-1.2,hx:1,hz:.2,rot:0,height:2.6};g.colliders.push(wall);strike();const noWallDamage=g.actors[2].health;g.colliders.pop();
    g.actors[2].blocking=true;g.actors[2].stamina=100;strike();const block={health:g.actors[2].health,stamina:g.actors[2].stamina};g.actors[2].blocking=false;
    g.actors[1].alive=true;Object.assign(g.actors[1],{x:0,z:-2.1,health:100});g.actors[2].z=5;strike();const friendlyHealth=g.actors[1].health;g.actors[1].alive=false;
    setup();for(const a of g.actors)a.alive=a.id===0||a.id===2;g.player.health=10;g.actors[2].health=10;const axe={id:'axe',blockDamage:48,trail:'#fff'};g.pendingHits=[{source:g.player,target:g.actors[2],weapon:axe,damage:68},{source:g.actors[2],target:g.player,weapon:axe,damage:68}];g.applyPendingHits();const trade={player:g.player.alive,enemy:g.actors[2].alive};g.finishRound(null);const drawScores=g.teams.map(t=>t.score);
    setup();g.combatTimer=0;g.updateCombat(0);const timeout={phase:g.phase,winner:g.roundWinner,scores:g.teams.map(t=>t.score)};
    return {firstHit,noRepeat,noFarDamage,noBackDamage,noWallDamage,block,friendlyHealth,trade,drawScores,timeout};
  })()`);
  assert.equal(mechanics.firstHit, 66);
  assert.equal(mechanics.noRepeat, 66);
  assert.equal(mechanics.noFarDamage, 66);
  assert.equal(mechanics.noBackDamage, 66);
  assert.equal(mechanics.noWallDamage, 66);
  assert.deepEqual(mechanics.block, { health: 66, stamina: 72 });
  assert.equal(mechanics.friendlyHealth, 100);
  assert.deepEqual(mechanics.trade, { player: false, enemy: false });
  assert.deepEqual(mechanics.drawScores, [0, 0, 0, 0]);
  assert.equal(mechanics.timeout.phase, 'roundEnd');
  assert.equal(mechanics.timeout.winner, null);
  assert.deepEqual(mechanics.timeout.scores, [0, 0, 0, 0]);

  const coverNavigation = await evaluate(`(()=>{
    const g=window.__REALM_BLADE__;
    const run=(height,revealed)=>{
      g.newMatch('quick',5);g.paused=true;g.buildVisited=true;g.finishBuild();g.beginBuy();g.beginCombat();g.controlGate=false;g.ui['control-gate'].classList.remove('is-visible');
      for(const a of g.actors)a.alive=a.id===0||a.id===2;
      Object.assign(g.player,{x:0,z:-2.2,yaw:Math.PI,health:100,attack:null,blocking:false,dodgeTime:0});
      const ai=g.actors[2];Object.assign(ai,{x:0,z:0,yaw:0,health:100,weaponId:'sword',attack:null,cooldown:0,blocking:false});ai.ai.think=0;ai.ai.targetId=null;ai.ai.path=[];ai.ai.repath=0;ai.ai.lastSeen=null;
      const wall={x:0,z:-1.1,hx:1.5,hz:.2,rot:0,height};g.colliders=[wall];g.nav.rebuild(g.colliders);g.revealed=revealed;g.combatElapsed=revealed?40:0;g.combatTimer=75;
      const start={x:ai.x,z:ai.z};let frames=0;while(g.phase==='combat'&&frames++<600){g.updateCombat(1/60);g.world.updateEffects(1/60);}
      return {height,revealed,moved:Math.hypot(ai.x-start.x,ai.z-start.z),targetHealth:g.player.health,attacks:ai.attackSerial,phase:g.phase};
    };
    return {low:run(1.05,false),revealedHigh:run(2.6,true)};
  })()`);
  for (const result of [coverNavigation.low, coverNavigation.revealedHigh]) {
    assert.ok(result.moved > 0.5, `AI did not route around cover: ${JSON.stringify(result)}`);
    assert.ok(result.targetHealth < 100, `AI never landed a hit around cover: ${JSON.stringify(result)}`);
  }

  const spectatorCamera = await evaluate(`(()=>{
    const g=window.__REALM_BLADE__;const target={x:0,z:-17,yaw:Math.PI};g.world.camera.position.set(0,3.1,-25);g.world.setSpectatorCamera(target,1,0,g.world.staticColliders);const p=g.world.camera.position;return {x:p.x,y:p.y,z:p.z};
  })()`);
  assert.ok(spectatorCamera.z >= -18.25 && spectatorCamera.z < -17, `Spectator camera crossed outer wall: ${JSON.stringify(spectatorCamera)}`);

  const runMatch = async (mode, target) => {
    const report = await evaluate(`(()=>{
      const g=window.__REALM_BLADE__;g.newMatch('${mode}',${target});g.paused=true;
      let guard=0,midCount=0,spawnChecks=true,routeChecks=true,layoutStable=true,midGateChecks=true,previousLayout='',roundCount=0;
      while(g.phase!=='matchEnd'&&guard++<45){
        if(g.phase==='build'){
          const layout=g.builds.map(b=>b.id).sort((a,b)=>a-b).join(',');
          if(g.round===0)previousLayout=layout;
          else {
            midCount++;const oldIds=previousLayout.split(',').filter(Boolean).map(Number);if(g.builds.some(b=>oldIds.includes(b.id))||g.builds.length<9)layoutStable=false;
            g.syncControlGate();const frozenTimer=g.buildTimer;g.updateBuild(1);midGateChecks=midGateChecks&&g.controlGate&&g.buildTimer===frozenTimer&&g.ui['control-gate'].classList.contains('is-visible')&&g.ui['gate-title'].textContent==='点击返回营造';g.controlGate=false;g.ui['control-gate'].classList.remove('is-visible');
          }
          routeChecks=routeChecks&&g.validateAllRoutes();g.buildVisited=true;g.finishBuild();
        }
        if(g.phase==='swap'){
          spawnChecks=spawnChecks&&g.teams.every(t=>t.spawnZone!==t.buildZone)&&new Set(g.teams.map(t=>t.spawnZone)).size===4;g.beginBuy();
        }
        if(g.phase==='buy'){
          if('${mode}'==='quick'&&g.builds.map(b=>b.id).sort((a,b)=>a-b).join(',')!==previousLayout)layoutStable=false;
          g.beginCombat();g.controlGate=false;
        }
        let steps=0;while(g.phase==='combat'&&steps++<6000){g.updateCombat(1/60);g.world.updateEffects(1/60);}
        if(g.phase==='roundEnd'){roundCount=g.round;g.continueAfterRound();}
        if(steps>=6000)break;
      }
      return {mode:'${mode}',target:${target},phase:g.phase,roundCount,scores:g.teams.map(t=>t.score),midCount,midTriggered:g.midTriggered,spawnChecks,routeChecks,layoutStable,midGateChecks,actors:g.actors.length,moneyNonnegative:g.actors.every(a=>a.money>=0)};
    })()`);
    assert.equal(report.phase, 'matchEnd');
    assert.equal(Math.max(...report.scores), target);
    assert.equal(report.midCount, mode === 'long' ? 1 : 0);
    assert.equal(report.spawnChecks && report.routeChecks && report.layoutStable && report.midGateChecks && report.moneyNonnegative, true, JSON.stringify(report));
    assert.equal(report.actors, 8);
    return report;
  };
  const quickMatch = await runMatch('quick', 5);
  const longMatch = await runMatch('long', 10);
  assert.deepEqual(errors, []);
  await writeFile(resolve(artifacts, 'browser-smoke.json'), JSON.stringify({ ok: true, build: build.state, buildToggle, swapValid: swap.valid, shop, shopToggle, combat, mechanics, coverNavigation, spectatorCamera, quickMatch, longMatch, errors }, null, 2));
  console.log('Browser smoke passed, including complete quick and long matches. Screenshots and report are in artifacts/.');
} finally {
  if (socket) socket.close();
  chrome.kill('SIGTERM');
  await delay(150);
  await rm(profile, { recursive: true, force: true });
}
