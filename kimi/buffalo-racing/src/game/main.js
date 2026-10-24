import * as THREE from 'three';
import { createWorld } from './world.js';
import { createBuffalo } from './buffalo.js';
import { GameAudio } from './audio.js';

const $ = (id) => document.getElementById(id);
const clamp = THREE.MathUtils.clamp;
const damp = THREE.MathUtils.damp;
const TAU = Math.PI * 2;
const LAPS = 2;
const audio = new GameAudio();
const keys = Object.create(null);
const touch = { left: false, right: false, gas: false, brake: false, boost: false };
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let scene, camera, renderer, world, player;
let state = 'loading';
let resumeState = 'racing';
let difficulty = 'normal';
let racers = [];
let raceTime = 0;
let visualTime = 0;
let countdownTime = 0;
let lastCountdown = -1;
let goMessageTime = 0;
let finishDelay = 0;
let finalPosition = 6;
let finalStandings = [];
let cameraMode = 0;
let soundEnabled = false;
let toastTimer = 0;
let messageTimer = 0;
let minimapTimer = 0;
let lastFrame = performance.now();
let dust;
const raceDistance = () => world.trackLength * LAPS;
const tempA = new THREE.Vector3();
const tempB = new THREE.Vector3();
const tempC = new THREE.Vector3();
const cameraTarget = new THREE.Vector3();
const cameraDesired = new THREE.Vector3();
const lookDesired = new THREE.Vector3();

const riderConfigs = [
  { name: '阿禾', buffalo: '青嶂', village: '青溪村', bodyColor: '#353a37', clothColor: '#a33e2c', accentColor: '#d6b36d', skill: 1, player: true },
  { name: '林小满', buffalo: '墨岩', village: '竹林村', bodyColor: '#303432', clothColor: '#315f68', accentColor: '#c5a256', topSpeed: 28.5 },
  { name: '石阿宝', buffalo: '大山', village: '石潭村', bodyColor: '#48443c', clothColor: '#a55432', accentColor: '#dbc27f', topSpeed: 27.8 },
  { name: '沈青青', buffalo: '乌澜', village: '枕水村', bodyColor: '#292f31', clothColor: '#486647', accentColor: '#cdb578', topSpeed: 29.1 },
  { name: '陆阿远', buffalo: '沉霄', village: '云岭村', bodyColor: '#3b3936', clothColor: '#564c78', accentColor: '#d0ad63', topSpeed: 28.7 },
  { name: '白荞', buffalo: '铁柱', village: '稻香村', bodyColor: '#494b45', clothColor: '#b08a3f', accentColor: '#e1c98c', topSpeed: 27.4 },
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '--:--.---';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const millis = Math.floor((seconds % 1) * 1000);
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(millis).padStart(3, '0')}`;
}

function toast(message) {
  const element = $('toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('show'), 1900);
}

function showRaceMessage(kicker, message, duration = 2.1) {
  const element = $('race-message');
  element.querySelector('small').textContent = kicker;
  element.querySelector('strong').textContent = message;
  element.classList.add('show');
  messageTimer = duration;
}

function createAtmosphere() {
  scene.background = new THREE.Color('#b8cdc2');
  scene.fog = new THREE.Fog('#b7c9b9', 105, 325);
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(440, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `varying vec3 vWorld; void main(){ vec4 world = modelMatrix * vec4(position,1.0); vWorld = world.xyz; gl_Position = projectionMatrix * viewMatrix * world; }`,
      fragmentShader: `
        varying vec3 vWorld;
        void main(){
          vec3 dir = normalize(vWorld - cameraPosition);
          float h = smoothstep(-0.12, 0.72, dir.y);
          vec3 horizon = vec3(0.82, 0.82, 0.69);
          vec3 zenith = vec3(0.35, 0.59, 0.64);
          vec3 color = mix(horizon, zenith, h);
          float sun = pow(max(dot(dir, normalize(vec3(-0.55,0.48,-0.35))), 0.0), 180.0);
          color += vec3(1.0,0.72,0.38) * sun * 0.85;
          gl_FragColor = vec4(color,1.0);
        }`,
    }),
  );
  sky.frustumCulled = false;
  scene.add(sky);

  const hemisphere = new THREE.HemisphereLight('#fff0cf', '#465e4b', 2.0);
  scene.add(hemisphere);
  const sun = new THREE.DirectionalLight('#ffe0aa', 3.25);
  sun.position.set(-65, 95, 35);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -62;
  sun.shadow.camera.right = 62;
  sun.shadow.camera.top = 62;
  sun.shadow.camera.bottom = -62;
  sun.shadow.camera.near = 15;
  sun.shadow.camera.far = 240;
  sun.shadow.bias = -0.0003;
  sun.shadow.normalBias = 0.025;
  sun.shadow.radius = 3;
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight('#b9d8d2', 0.75);
  fill.position.set(65, 35, -70);
  scene.add(fill);
  return sun;
}

function createDust() {
  const count = 260;
  const positions = new Float32Array(count * 3);
  positions.fill(-100);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ color: '#dbc392', size: 0.32, transparent: true, opacity: 0.42, depthWrite: false, sizeAttenuation: true });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  scene.add(points);
  return {
    points, positions, cursor: 0, emission: 0,
    particles: Array.from({ length: count }, () => ({ life: 0, velocity: new THREE.Vector3() })),
  };
}

function emitDust(racer, dt) {
  if (!dust || racer.speed < 5) return;
  const offroad = Math.abs(racer.lane) > world.trackWidth * 0.5 - 0.6;
  dust.emission += dt * racer.speed * (offroad ? 1.8 : 0.65);
  while (dust.emission >= 1) {
    dust.emission--;
    const index = dust.cursor++ % dust.particles.length;
    const particle = dust.particles[index];
    const p = index * 3;
    const side = (Math.random() - 0.5) * 1.35;
    tempA.set(racer.tangent.z, 0, -racer.tangent.x);
    dust.positions[p] = racer.point.x - racer.tangent.x * 1.45 + tempA.x * side;
    dust.positions[p + 1] = racer.point.y + 0.2 + Math.random() * 0.15;
    dust.positions[p + 2] = racer.point.z - racer.tangent.z * 1.45 + tempA.z * side;
    particle.velocity.set(-racer.tangent.x * (0.7 + Math.random()) + (Math.random() - 0.5), 0.3 + Math.random() * 0.5, -racer.tangent.z * (0.7 + Math.random()) + (Math.random() - 0.5));
    particle.life = 0.65 + Math.random() * 0.55;
  }
}

function updateDust(dt) {
  if (!dust) return;
  for (let i = 0; i < dust.particles.length; i++) {
    const particle = dust.particles[i];
    if (particle.life <= 0) continue;
    particle.life -= dt;
    const p = i * 3;
    if (particle.life <= 0) {
      dust.positions[p + 1] = -100;
      continue;
    }
    dust.positions[p] += particle.velocity.x * dt;
    dust.positions[p + 1] += particle.velocity.y * dt;
    dust.positions[p + 2] += particle.velocity.z * dt;
    particle.velocity.multiplyScalar(Math.max(0, 1 - dt * 1.4));
  }
  dust.points.geometry.attributes.position.needsUpdate = true;
}

function createRacers() {
  const grid = [
    { distance: -13, lane: 2.05 },
    { distance: -2.8, lane: -2.05 },
    { distance: -2.8, lane: 2.05 },
    { distance: -7.8, lane: -2.05 },
    { distance: -7.8, lane: 2.05 },
    { distance: -12.8, lane: -2.05 },
  ];
  racers = riderConfigs.map((config, index) => {
    const model = createBuffalo({ ...config, number: index + 1 });
    scene.add(model.group);
    const racer = {
      ...config, index, model, group: model.group,
      point: new THREE.Vector3(), tangent: new THREE.Vector3(0, 0, 1),
      initialDistance: grid[index].distance, initialLane: grid[index].lane,
      distance: grid[index].distance, lane: grid[index].lane,
      speed: 0, steering: 0, targetLane: grid[index].lane,
      boost: 100, boosting: false, finished: false, finishTime: null,
      currentLap: 1, nextLapDistance: world.trackLength,
      lapStart: 0, lapTimes: [], bestLap: Infinity,
      phase: index * 1.73, reaction: index * 0.11,
    };
    return racer;
  });
  player = racers[0];
}

function resetRacers() {
  raceTime = 0;
  finishDelay = 0;
  finalStandings = [];
  for (const racer of racers) {
    racer.distance = racer.initialDistance;
    racer.lane = racer.initialLane;
    racer.targetLane = racer.initialLane;
    racer.speed = 0;
    racer.steering = 0;
    racer.boost = 100;
    racer.boosting = false;
    racer.finished = false;
    racer.finishTime = null;
    racer.currentLap = 1;
    racer.nextLapDistance = world.trackLength;
    racer.lapStart = 0;
    racer.lapTimes = [];
    racer.bestLap = Infinity;
    racer.section = -1;
    placeRacer(racer, 0);
  }
  $('timer').textContent = '00:00.000';
  $('best-lap').textContent = '最佳 --:--.---';
  $('lap').textContent = '1';
  $('speed').textContent = '0';
  $('boost-fill').style.width = '100%';
  $('lap-progress').style.width = '0%';
  $('result-screen').classList.remove('is-visible');
  $('pause-screen').classList.remove('is-visible');
  $('race-message').classList.remove('show');
  clearInputs();
}

function placeRacer(racer, dt) {
  const t = ((racer.distance % world.trackLength) + world.trackLength) % world.trackLength / world.trackLength;
  world.curve.getPointAt(t, racer.point);
  world.curve.getTangentAt(t, racer.tangent).normalize();
  tempA.set(racer.tangent.z, 0, -racer.tangent.x).normalize();
  racer.group.position.copy(racer.point).addScaledVector(tempA, racer.lane);
  racer.group.position.y += 0.16;
  const yaw = Math.atan2(racer.tangent.x, racer.tangent.z);
  racer.group.rotation.set(0, yaw + racer.steering * 0.105, -racer.steering * 0.025);
  racer.model.update(visualTime + racer.phase, racer.speed, racer.steering, dt);
}

function clearInputs() {
  Object.keys(keys).forEach((key) => { keys[key] = false; });
  Object.keys(touch).forEach((key) => { touch[key] = false; });
  document.querySelectorAll('[data-control]').forEach((button) => button.classList.remove('pressed'));
}

function startRace() {
  if (!player) return;
  resetRacers();
  state = 'countdown';
  countdownTime = 3;
  lastCountdown = -1;
  goMessageTime = 0;
  $('start-screen').classList.remove('is-visible');
  $('pause-screen').classList.remove('is-visible');
  $('result-screen').classList.remove('is-visible');
  $('game').classList.add('is-racing');
  $('countdown').classList.add('show');
  cameraMode = 0;
  $('camera-label').textContent = '追逐视角';
  $('camera-button').disabled = false;
  $('pause-button').disabled = false;
  $('pause-button').setAttribute('aria-label', '暂停比赛');
  $('pause-button').title = '暂停（Esc）';
  snapChaseCamera();
}

function returnToMenu() {
  state = 'menu';
  resetRacers();
  $('game').classList.remove('is-racing');
  $('result-screen').classList.remove('is-visible');
  $('pause-screen').classList.remove('is-visible');
  $('countdown').classList.remove('show');
  $('start-screen').classList.add('is-visible');
}

function pauseGame() {
  if (!['racing', 'countdown'].includes(state)) return;
  resumeState = state;
  state = 'paused';
  clearInputs();
  $('camera-button').disabled = true;
  $('pause-button').setAttribute('aria-label', '继续比赛');
  $('pause-button').title = '继续（Esc）';
  $('pause-screen').classList.add('is-visible');
}

function resumeGame() {
  if (state !== 'paused') return;
  state = resumeState;
  $('camera-button').disabled = false;
  $('pause-button').setAttribute('aria-label', '暂停比赛');
  $('pause-button').title = '暂停（Esc）';
  $('pause-screen').classList.remove('is-visible');
  lastFrame = performance.now();
}

function updateCountdown(dt) {
  countdownTime -= dt;
  const number = Math.max(0, Math.ceil(countdownTime));
  if (number !== lastCountdown) {
    lastCountdown = number;
    const element = $('countdown');
    element.querySelector('span').textContent = number > 0 ? number : '逐风';
    element.querySelector('small').textContent = number > 0 ? ['', '备 鞍', '握 缰', '凝 神'][number] : '百 牛 争 先';
    element.classList.remove('pop');
    void element.offsetWidth;
    element.classList.add('pop');
    audio.countdown(number);
  }
  if (countdownTime <= 0) {
    state = 'racing';
    raceTime = 0;
    goMessageTime = 0.85;
  }
}

function cornerFactor(racer) {
  const t = ((racer.distance % world.trackLength) + world.trackLength) % world.trackLength / world.trackLength;
  world.curve.getTangentAt((t + 0.009) % 1, tempB);
  const angle = Math.acos(clamp(racer.tangent.dot(tempB), -1, 1));
  return clamp(1 - angle * 1.8, 0.7, 1);
}

function updatePlayer(dt) {
  const gas = keys.KeyW || keys.ArrowUp || touch.gas;
  const brake = keys.KeyS || keys.ArrowDown || touch.brake;
  const left = keys.KeyA || keys.ArrowLeft || touch.left;
  const right = keys.KeyD || keys.ArrowRight || touch.right;
  const boostInput = keys.Space || keys.ShiftLeft || keys.ShiftRight || touch.boost;
  const steeringInput = (right ? 1 : 0) - (left ? 1 : 0);
  player.steering = damp(player.steering, steeringInput, 8.5, dt);
  const offroad = Math.abs(player.lane) > world.trackWidth * 0.5 - 0.75;
  const wasBoosting = player.boosting;
  player.boosting = Boolean(boostInput && player.boost > 1 && player.speed > 4 && !brake);
  if (player.boosting && !wasBoosting) audio.boost();

  let maximum = player.boosting ? 42 : 33;
  if (offroad) maximum = Math.min(maximum, 17);
  let acceleration = gas ? 11.8 : -2.4;
  if (brake) acceleration = -20;
  if (player.boosting) {
    acceleration += 14;
    player.boost = Math.max(0, player.boost - 25 * dt);
  } else {
    player.boost = Math.min(100, player.boost + (gas ? 6.5 : 10) * dt);
  }
  if (offroad) acceleration -= 5.5;
  if (player.speed > maximum) acceleration = Math.min(acceleration, offroad ? -9 : -4);
  player.speed = clamp(player.speed + acceleration * dt, 0, 42);
  const steerRate = 1.25 + player.speed * 0.15;
  player.lane = clamp(player.lane + player.steering * steerRate * dt, -world.trackWidth * 0.5 - 3.6, world.trackWidth * 0.5 + 3.6);
  const previousDistance = player.distance;
  player.distance += player.speed * dt;
  checkRaceProgress(player, previousDistance, dt);
  emitDust(player, dt);
}

function updateAI(racer, dt) {
  if (raceTime < racer.reaction) return;
  const aheadDistance = player.distance - racer.distance;
  const difficultyBoost = difficulty === 'hard' ? 2.25 : 0;
  let maximum = racer.topSpeed + difficultyBoost;
  maximum *= cornerFactor(racer);
  if (aheadDistance > 35) maximum += 1.5;
  if (aheadDistance < -45) maximum -= 1.1;
  if (racer.finished) maximum = 17;

  // Gentle, distinct racing lines, with a small avoidance move for close traffic.
  racer.targetLane = Math.sin(visualTime * 0.18 + racer.phase) * 2.65 + Math.sin(racer.phase * 2.1) * 0.65;
  for (const other of racers) {
    if (other === racer) continue;
    const gap = other.distance - racer.distance;
    if (gap > 0 && gap < 6 && Math.abs(other.lane - racer.lane) < 1.6) {
      racer.targetLane += other.lane > 0 ? -2.2 : 2.2;
    }
  }
  racer.targetLane = clamp(racer.targetLane, -4.4, 4.4);
  racer.steering = damp(racer.steering, clamp((racer.targetLane - racer.lane) * 0.55, -1, 1), 3.5, dt);
  racer.lane += racer.steering * (2 + racer.speed * 0.08) * dt;
  const acceleration = racer.speed < maximum ? 8.2 : -5;
  racer.speed = clamp(racer.speed + acceleration * dt, 0, 36);
  const previousDistance = racer.distance;
  racer.distance += racer.speed * dt;
  checkRaceProgress(racer, previousDistance, dt);
}

function checkRaceProgress(racer, previousDistance, dt) {
  while (!racer.finished && racer.distance >= racer.nextLapDistance) {
    const travelled = Math.max(0.0001, racer.distance - previousDistance);
    const crossingFraction = clamp((racer.nextLapDistance - previousDistance) / travelled, 0, 1);
    const crossingTime = raceTime - dt + crossingFraction * dt;
    const lapTime = crossingTime - racer.lapStart;
    racer.lapTimes.push(lapTime);
    racer.bestLap = Math.min(racer.bestLap, lapTime);
    racer.lapStart = crossingTime;
    racer.nextLapDistance += world.trackLength;
    racer.currentLap++;
    if (racer.distance >= raceDistance()) {
      racer.finished = true;
      racer.finishTime = crossingTime;
    } else if (racer.player) {
      showRaceMessage('青溪古道', '最终圈', 2.4);
      $('best-lap').textContent = `最佳 ${formatTime(racer.bestLap)}`;
      audio.tone(523.25, 0.35, 0.09, 'triangle');
    }
  }
}

function resolveCollisions() {
  for (let i = 0; i < racers.length; i++) {
    for (let j = i + 1; j < racers.length; j++) {
      const a = racers[i];
      const b = racers[j];
      const longitudinal = Math.abs(a.distance - b.distance);
      const lateral = a.lane - b.lane;
      if (longitudinal < 3.25 && Math.abs(lateral) < 1.45) {
        const trailing = a.distance < b.distance ? a : b;
        const leading = trailing === a ? b : a;
        trailing.speed = Math.min(trailing.speed, leading.speed * 0.93);
        const push = (1.45 - Math.abs(lateral)) * 0.035;
        a.lane += (lateral >= 0 ? push : -push);
        b.lane -= (lateral >= 0 ? push : -push);
        if (a.player || b.player) player.speed *= 0.998;
      }
    }
  }
}

function updateRace(dt) {
  raceTime += dt;
  updatePlayer(dt);
  for (let i = 1; i < racers.length; i++) updateAI(racers[i], dt);
  resolveCollisions();
  // Decide the result only after every rider has moved, so same-frame finishes
  // are ordered by their interpolated line-crossing times rather than update order.
  if (player.finished && state === 'racing') finishPlayer();
  for (const racer of racers) placeRacer(racer, dt);
  if (goMessageTime > 0) {
    goMessageTime -= dt;
    if (goMessageTime <= 0) $('countdown').classList.remove('show');
  }
}

function updateFinished(dt) {
  player.boosting = false;
  player.speed = damp(player.speed, 10, 1.4, dt);
  player.distance += player.speed * dt;
  for (let i = 1; i < racers.length; i++) {
    const racer = racers[i];
    racer.distance += racer.speed * dt;
  }
  for (const racer of racers) placeRacer(racer, dt);
  finishDelay -= dt;
  if (finishDelay <= 0) showResults();
}

function standings() {
  return [...racers].sort((a, b) => {
    if (a.finishTime !== null && b.finishTime !== null) return a.finishTime - b.finishTime;
    if (a.finishTime !== null) return -1;
    if (b.finishTime !== null) return 1;
    return b.distance - a.distance;
  });
}

function currentPosition() {
  return standings().indexOf(player) + 1;
}

function finishPlayer() {
  finalPosition = currentPosition();
  finalStandings = standings().map((racer) => ({
    name: racer.name,
    buffalo: racer.buffalo,
    clothColor: racer.clothColor,
    player: racer.player,
    finishTime: racer.finishTime,
    gap: racer.finishTime !== null ? formatTime(racer.finishTime) : `+${Math.max(0, raceDistance() - racer.distance).toFixed(0)}m`,
  }));
  state = 'finished';
  finishDelay = 1.7;
  clearInputs();
  showRaceMessage('青溪古道 · 完赛', finalPosition === 1 ? '一骑绝尘' : '逐风而归', 2.2);
  $('best-lap').textContent = `最佳 ${formatTime(player.bestLap)}`;
  audio.finish();
}

function showResults() {
  state = 'result';
  $('camera-button').disabled = true;
  $('pause-button').disabled = true;
  $('result-position').textContent = finalPosition;
  $('result-time').textContent = formatTime(player.finishTime);
  $('result-best').textContent = formatTime(player.bestLap);
  $('result-title').textContent = finalPosition === 1 ? '一骑绝尘' : finalPosition <= 3 ? '逐风而归' : '来日争先';
  $('result-seal').textContent = finalPosition === 1 ? '胜' : '归';
  $('result-subtitle').textContent = finalPosition === 1 ? '青溪古道 · 魁首' : `青溪古道 · 第 ${finalPosition} 名`;
  const list = $('result-standings');
  list.replaceChildren();
  finalStandings.forEach((racer, index) => {
    const item = document.createElement('li');
    if (racer.player) item.classList.add('player');
    item.innerHTML = `<b>${index + 1}</b><i style="background:${racer.clothColor}"></i><span>${racer.name} · ${racer.buffalo}</span><small>${racer.gap}</small>`;
    list.appendChild(item);
  });
  $('result-screen').classList.add('is-visible');
}

function updateHUD(dt) {
  $('position').textContent = currentPosition();
  const lap = clamp(player.currentLap, 1, LAPS);
  $('lap').textContent = lap;
  const progress = player.finished ? 1 : clamp(Math.max(0, player.distance) / world.trackLength % 1, 0, 1);
  $('lap-progress').style.width = `${progress * 100}%`;
  $('timer').textContent = formatTime(raceTime);
  $('speed').textContent = Math.round(player.speed * 3.6);
  $('boost-fill').style.width = `${player.boost}%`;
  const arc = $('speed-arc');
  const length = arc.dataset.length || arc.getTotalLength();
  arc.dataset.length = length;
  arc.style.strokeDasharray = length;
  arc.style.strokeDashoffset = length * (1 - clamp(player.speed / 42, 0, 1));
  minimapTimer -= dt;
  if (minimapTimer <= 0) {
    minimapTimer = 0.075;
    drawMinimap();
  }
}

let mapBounds;
function drawMinimap() {
  const canvas = $('minimap');
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  if (!mapBounds) {
    const points = world.curve.getPoints(160);
    const xs = points.map((p) => p.x), zs = points.map((p) => p.z);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minZ = Math.min(...zs), maxZ = Math.max(...zs);
    const scale = Math.min((w - 34) / (maxX - minX), (h - 26) / (maxZ - minZ));
    mapBounds = { cx: (minX + maxX) / 2, cz: (minZ + maxZ) / 2, scale };
  }
  const project = (p) => [w / 2 + (p.x - mapBounds.cx) * mapBounds.scale, h / 2 + (p.z - mapBounds.cz) * mapBounds.scale];
  const drawTrack = (width, color) => {
    ctx.beginPath();
    for (let i = 0; i <= 160; i++) {
      const [x, y] = project(world.curve.getPointAt((i % 160) / 160, tempC));
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineJoin = 'round';
    ctx.stroke();
  };
  drawTrack(8, 'rgba(9,25,20,.38)');
  drawTrack(2, 'rgba(229,219,188,.55)');
  const start = project(world.curve.getPointAt(0, tempC));
  ctx.fillStyle = '#e7d8b5';
  ctx.fillRect(start[0] - 3, start[1] - 3, 6, 6);
  for (const racer of racers) {
    const [x, y] = project(racer.point);
    ctx.beginPath();
    ctx.arc(x, y, racer.player ? 4.2 : 2.6, 0, TAU);
    ctx.fillStyle = racer.player ? '#f0c578' : racer.clothColor;
    ctx.fill();
    if (racer.player) { ctx.lineWidth = 1.4; ctx.strokeStyle = '#fff2cf'; ctx.stroke(); }
  }
}

function snapChaseCamera() {
  updateChaseCamera(1, true);
}

function updateChaseCamera(dt, snap = false) {
  if (!player) return;
  const speedRatio = player.speed / 42;
  const distances = [10.5, 15.5, 6.4];
  const heights = [5.4, 13.5, 3.25];
  const lookAhead = [7.5, 10, 6];
  const distance = distances[cameraMode] + speedRatio * 1.4;
  cameraDesired.copy(player.group.position).addScaledVector(player.tangent, -distance);
  cameraDesired.y += heights[cameraMode];
  tempA.set(player.tangent.z, 0, -player.tangent.x);
  if (cameraMode === 2) cameraDesired.addScaledVector(tempA, 0.35);
  if ((player.boosting || Math.abs(player.lane) > 6) && !reduceMotion) {
    cameraDesired.x += Math.sin(visualTime * 31) * 0.025 * speedRatio;
    cameraDesired.y += Math.sin(visualTime * 37) * 0.025 * speedRatio;
  }
  lookDesired.copy(player.group.position).addScaledVector(player.tangent, lookAhead[cameraMode] + player.speed * 0.055);
  lookDesired.y += cameraMode === 1 ? 0.5 : 1.65;
  const positionAlpha = snap ? 1 : 1 - Math.exp(-dt * (cameraMode === 1 ? 3.2 : 5.2));
  camera.position.lerp(cameraDesired, positionAlpha);
  cameraTarget.lerp(lookDesired, snap ? 1 : 1 - Math.exp(-dt * 7));
  camera.lookAt(cameraTarget);
  const targetFov = (cameraMode === 1 ? 53 : 57) + (player.boosting ? 7 : 0) + speedRatio * 2;
  camera.fov = damp(camera.fov, targetFov, 4, dt);
  camera.updateProjectionMatrix();
}

function updateMenuCamera(dt) {
  const focus = tempA.copy(player.group.position).addScaledVector(player.tangent, 7);
  tempB.set(player.tangent.z, 0, -player.tangent.x);
  cameraDesired.copy(focus).addScaledVector(player.tangent, -22).addScaledVector(tempB, 16 + Math.sin(visualTime * 0.12) * 3);
  cameraDesired.y += 8.5 + Math.sin(visualTime * 0.17) * 0.5;
  lookDesired.copy(focus).addScaledVector(player.tangent, 4);
  lookDesired.y = 2;
  camera.position.lerp(cameraDesired, 1 - Math.exp(-dt * 1.7));
  cameraTarget.lerp(lookDesired, 1 - Math.exp(-dt * 2));
  camera.lookAt(cameraTarget);
  camera.fov = damp(camera.fov, 52, 3, dt);
  camera.updateProjectionMatrix();
}

function updateLocationMessage() {
  if (!player || state !== 'racing') return;
  const t = ((player.distance % world.trackLength) + world.trackLength) % world.trackLength / world.trackLength;
  const section = Math.floor(t * 4);
  if (player.section === -1) { player.section = section; return; }
  if (section !== player.section) {
    player.section = section;
    const names = ['青溪牌坊', '稻香田', '枕水人家', '竹林坡'];
    toast(`途经 · ${names[section]}`);
  }
}

function cycleCamera() {
  if (!['racing', 'countdown', 'finished'].includes(state)) return;
  cameraMode = (cameraMode + 1) % 3;
  const labels = ['追逐视角', '俯瞰视角', '近景视角'];
  $('camera-label').textContent = labels[cameraMode];
  toast(`已切换 · ${labels[cameraMode]}`);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  audio.setEnabled(soundEnabled);
  $('sound-button').classList.toggle('sound-enabled', soundEnabled);
  $('sound-button').setAttribute('aria-label', soundEnabled ? '关闭声音' : '开启声音');
  toast(soundEnabled ? '山水有声 · 声音已开启' : '声音已关闭');
}

function recoverPlayer() {
  if (state !== 'racing') return;
  player.lane = 0;
  player.steering = 0;
  player.speed = Math.min(player.speed, 8);
  toast('青嶂已回到赛道中央');
}

function bindInterface() {
  $('start-button').addEventListener('click', () => {
    if (!soundEnabled) {
      soundEnabled = true;
      audio.setEnabled(true);
      $('sound-button').classList.add('sound-enabled');
      $('sound-button').setAttribute('aria-label', '关闭声音');
    }
    startRace();
  });
  $('resume-button').addEventListener('click', resumeGame);
  $('pause-button').addEventListener('click', () => state === 'paused' ? resumeGame() : pauseGame());
  $('restart-button').addEventListener('click', startRace);
  $('restart-button-pause').addEventListener('click', startRace);
  $('menu-button').addEventListener('click', returnToMenu);
  $('camera-button').addEventListener('click', cycleCamera);
  $('sound-button').addEventListener('click', toggleSound);
  $('fullscreen-button').addEventListener('click', async () => {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      else await document.exitFullscreen();
    } catch { toast('当前浏览器暂不支持全屏'); }
  });
  document.querySelectorAll('[data-difficulty]').forEach((button) => {
    button.addEventListener('click', () => {
      difficulty = button.dataset.difficulty;
      document.querySelectorAll('[data-difficulty]').forEach((item) => item.classList.toggle('active', item === button));
      toast(difficulty === 'hard' ? '争先模式 · 对手将更加迅捷' : '标准模式 · 尽享田园竞速');
    });
  });
  document.querySelectorAll('[data-control]').forEach((button) => {
    const control = button.dataset.control;
    const release = () => { touch[control] = false; button.classList.remove('pressed'); };
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      touch[control] = true;
      button.classList.add('pressed');
    });
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    button.addEventListener('lostpointercapture', release);
  });

  window.addEventListener('keydown', (event) => {
    const interactive = event.target instanceof Element && Boolean(event.target.closest('button,a,input,select,textarea,[role="button"]'));
    // Preserve native Enter/Space activation for focused interface controls.
    if (interactive && (event.code === 'Enter' || event.code === 'Space')) return;
    if (!interactive && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(event.code) && state !== 'menu') event.preventDefault();
    if (event.repeat && ['Escape', 'KeyC', 'KeyR', 'KeyM', 'Enter'].includes(event.code)) return;
    keys[event.code] = true;
    if (event.code === 'Escape') {
      if (state === 'paused') resumeGame(); else pauseGame();
    } else if (event.code === 'KeyC') cycleCamera();
    else if (event.code === 'KeyR') recoverPlayer();
    else if (event.code === 'KeyM') toggleSound();
    else if (event.code === 'Enter' && state === 'menu' && !interactive) $('start-button').click();
  });
  window.addEventListener('keyup', (event) => { keys[event.code] = false; });
  window.addEventListener('blur', clearInputs);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && ['racing', 'countdown'].includes(state)) pauseGame();
  });
}

function resize() {
  if (!renderer || !camera) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 760 ? 1.35 : 1.8));
}

function animate(now) {
  const dt = Math.min(0.05, Math.max(0.001, (now - lastFrame) / 1000));
  lastFrame = now;
  if (state !== 'paused') visualTime += dt;

  if (state === 'countdown') {
    updateCountdown(dt);
    for (const racer of racers) placeRacer(racer, dt);
  } else if (state === 'racing') {
    updateRace(dt);
    updateLocationMessage();
  } else if (state === 'finished') {
    updateFinished(dt);
  } else if (state === 'menu') {
    for (const racer of racers) placeRacer(racer, dt);
  }

  if (state !== 'loading' && state !== 'paused') {
    world.update(visualTime, dt, player.group.position);
    updateDust(dt);
    if (state === 'menu') updateMenuCamera(dt); else updateChaseCamera(dt);
    audio.update(player.speed, state === 'racing');
  }
  if (['racing', 'countdown', 'finished'].includes(state)) updateHUD(dt);
  if (messageTimer > 0 && state !== 'paused') {
    messageTimer -= dt;
    if (messageTimer <= 0) $('race-message').classList.remove('show');
  }
  renderer.render(scene, camera);
}

async function init() {
  const progress = $('loading-progress');
  const loadingText = $('loading-text');
  progress.style.width = '12%';
  await new Promise((resolve) => setTimeout(resolve, 32));
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 700);
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 760 ? 1.35 : 1.8));
  $('scene').appendChild(renderer.domElement);
  const sun = createAtmosphere();

  loadingText.textContent = '正在营造稻田、村落与青山';
  progress.style.width = '34%';
  await new Promise((resolve) => setTimeout(resolve, 32));
  world = createWorld(scene);
  loadingText.textContent = '正在召集牧童与水牛';
  progress.style.width = '70%';
  await new Promise((resolve) => setTimeout(resolve, 32));
  createRacers();
  dust = createDust();
  resetRacers();
  bindInterface();
  window.addEventListener('resize', resize);

  // Keep the high-quality shadow volume centred on the player rather than the whole map.
  const originalShadowUpdate = () => {
    if (!player) return;
    sun.target.position.copy(player.group.position);
    sun.position.copy(player.group.position).add(tempC.set(-65, 95, 35));
    sun.target.updateMatrixWorld();
  };
  setInterval(originalShadowUpdate, 120);

  const firstPoint = world.curve.getPointAt(0.97);
  camera.position.copy(firstPoint).add(new THREE.Vector3(-10, 9, 20));
  cameraTarget.copy(player.group.position);
  camera.lookAt(cameraTarget);
  renderer.render(scene, camera);
  progress.style.width = '100%';
  loadingText.textContent = '青溪山水已就绪';
  state = 'menu';
  lastFrame = performance.now();
  renderer.setAnimationLoop(animate);
  setTimeout(() => $('loading').classList.remove('is-visible'), 450);
}

init().catch((error) => {
  console.error(error);
  $('loading-text').textContent = '场景未能载入，请确认浏览器支持 WebGL 后刷新';
  $('loading-progress').style.background = '#b44b36';
});
