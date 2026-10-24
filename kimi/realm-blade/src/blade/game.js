import * as THREE from 'three';
import {
  MATCH, TEAM_DEFS, ZONES, BUILD_TYPES, WEAPONS, AI_BUILD_TEMPLATES,
  weaponById, buildTypeById, zoneAt, spawnPoints,
} from './config.js';
import { derangement, shuffle, resolveRoundTeams, roundIncome, shouldTriggerMidMatch, clampTarget, formatTime, lerpAngle } from './rules.js';
import { NavGrid, moveCircle, canStand, circleHitsObstacle, hasLineOfSight, obbIntersects } from './navigation.js';
import { ArenaWorld } from './world.js';
import { Soundscape } from './audio.js';

const $ = (id) => document.getElementById(id);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const yawTo = (a, b) => Math.atan2(-(b.x - a.x), -(b.z - a.z));
const forward = (actor) => ({ x: -Math.sin(actor.yaw), z: -Math.cos(actor.yaw) });
const ACTIVE_PHASES = new Set(['build', 'swap', 'buy', 'combat', 'roundEnd']);
const MODAL_IDS = ['build-menu', 'shop-screen', 'round-screen', 'match-screen', 'pause-screen', 'help-screen'];

function rotatedOffset(x, z, rotation) {
  const c = Math.cos(rotation);
  const s = Math.sin(rotation);
  return { x: c * x + s * z, z: -s * x + c * z };
}

function collidersForBuild(typeId, x, z, rotation) {
  const type = buildTypeById(typeId);
  const parts = typeId === 'corner'
    ? [
        { x: 0, z: -1.125, hx: 1.4, hz: 0.275, height: 1.85 },
        { x: -1.125, z: 0.275, hx: 0.275, hz: 1.125, height: 1.85 },
      ]
    : [{ x: 0, z: 0, hx: type.size[0] / 2, hz: type.size[2] / 2, height: type.size[1] }];
  return parts.map((part) => {
    const offset = rotatedOffset(part.x, part.z, rotation);
    return { x: x + offset.x, z: z + offset.z, hx: part.hx, hz: part.hz, rot: rotation, height: part.height };
  });
}

function worldBounds(collider) {
  const c = Math.abs(Math.cos(collider.rot || 0));
  const s = Math.abs(Math.sin(collider.rot || 0));
  const ex = c * collider.hx + s * collider.hz;
  const ez = s * collider.hx + c * collider.hz;
  return { minX: collider.x - ex, maxX: collider.x + ex, minZ: collider.z - ez, maxZ: collider.z + ez };
}

export class BladeGame {
  constructor() {
    this.ui = {};
    document.querySelectorAll('[id]').forEach((element) => { this.ui[element.id] = element; });
    this.world = new ArenaWorld($('scene'));
    this.audio = new Soundscape();
    this.nav = new NavGrid();
    this.colliders = [...this.world.staticColliders];
    this.nav.rebuild(this.colliders);
    this.raycaster = new THREE.Raycaster();
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.phase = 'menu';
    this.mode = 'quick';
    this.targetScore = MATCH.quickTarget;
    this.paused = false;
    this.modal = null;
    this.helpReturn = null;
    this.helpWasPaused = false;
    this.pointerLocked = false;
    this.controlGate = false;
    this.keys = new Set();
    this.actors = [];
    this.teams = [];
    this.builds = [];
    this.player = null;
    this.pitch = 0;
    this.round = 0;
    this.midTriggered = false;
    this.buildSerial = 0;
    this.attackSerial = 0;
    this.selectedBuild = null;
    this.buildRotation = 0;
    this.buildVisited = false;
    this.pendingHits = [];
    this.killFeed = [];
    this.revealed = false;
    this.spectatorTarget = null;
    this.cameraShake = 0;
    this.toastUntil = 0;
    this.bannerUntil = 0;
    this.hudClock = 0;
    this.mapClock = 0;
    this.lastTime = performance.now();
    this.elapsed = 0;
    this.ghostValidity = null;
    this.bindEvents();
    this.renderBuildMenu();
    this.updateModeCards();
    requestAnimationFrame((time) => this.loop(time));
    setTimeout(() => this.ui.loading.classList.remove('is-visible'), 500);
  }

  bindEvents() {
    document.querySelectorAll('.mode-card').forEach((card) => {
      card.addEventListener('click', () => {
        this.mode = card.dataset.mode;
        this.updateModeCards();
      });
    });
    ['quick-target', 'long-target'].forEach((id) => {
      this.ui[id].addEventListener('click', (event) => event.stopPropagation());
      this.ui[id].addEventListener('change', () => {
        const fallback = id === 'quick-target' ? MATCH.quickTarget : MATCH.longTarget;
        this.ui[id].value = clampTarget(this.ui[id].value, fallback);
      });
    });
    this.ui['start-button'].addEventListener('click', () => {
      this.audio.ensure();
      const target = clampTarget(this.ui[this.mode === 'quick' ? 'quick-target' : 'long-target'].value, this.mode === 'quick' ? 5 : 10);
      this.newMatch(this.mode, target);
      this.requestLock();
    });
    this.ui['sound-button'].addEventListener('click', () => {
      const enabled = this.audio.toggle();
      this.ui['sound-button'].classList.toggle('muted', !enabled);
      this.toast(enabled ? '声音已开启' : '声音已静音');
    });
    this.ui['fullscreen-button'].addEventListener('click', () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen?.();
    });
    this.ui['pause-button'].addEventListener('click', () => this.pause());
    this.ui['help-button'].addEventListener('click', () => this.openHelp());
    this.ui['pause-help-button'].addEventListener('click', () => this.openHelp());
    this.ui['close-help-button'].addEventListener('click', () => this.closeHelp());
    this.ui['resume-button'].addEventListener('click', () => this.resume());
    this.ui['restart-button'].addEventListener('click', () => { this.newMatch(this.mode, this.targetScore); this.requestLock(); });
    this.ui['restart-pause-button'].addEventListener('click', () => { this.newMatch(this.mode, this.targetScore); this.requestLock(); });
    this.ui['menu-button'].addEventListener('click', () => this.returnToMenu());
    this.ui['open-build-button'].addEventListener('click', () => this.openBuildMenu());
    this.ui['close-build-button'].addEventListener('click', () => this.closeModal());
    this.ui['ready-build-button'].addEventListener('click', () => this.finishBuild());
    this.ui['close-shop-button'].addEventListener('click', () => this.closeModal());
    this.ui['ready-shop-button'].addEventListener('click', () => this.readyBuy());
    this.ui['continue-round-button'].addEventListener('click', () => this.continueAfterRound());
    this.ui['control-button'].addEventListener('click', () => { this.audio.ensure(); this.requestLock(); });

    const canvas = this.world.renderer.domElement;
    canvas.addEventListener('click', () => {
      if (ACTIVE_PHASES.has(this.phase) && !this.modal && !this.paused && !this.pointerLocked) this.requestLock();
    });
    canvas.addEventListener('mousedown', (event) => this.onMouseDown(event));
    canvas.addEventListener('contextmenu', (event) => event.preventDefault());
    document.addEventListener('contextmenu', (event) => { if (this.pointerLocked) event.preventDefault(); });
    document.addEventListener('mouseup', (event) => {
      if (event.button === 2 && this.player) this.player.blocking = false;
    });
    document.addEventListener('mousemove', (event) => {
      if (!this.pointerLocked || this.paused || this.modal || !this.player || !this.player.alive) return;
      if (!['build', 'buy', 'combat'].includes(this.phase)) return;
      this.player.yaw -= event.movementX * 0.00215;
      this.pitch = clamp(this.pitch - event.movementY * 0.00195, -1.3, 1.3);
    });
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === canvas;
      if (this.pointerLocked && ['build', 'combat'].includes(this.phase) && this.controlGate) {
        this.controlGate = false;
        this.ui['control-gate'].classList.remove('is-visible');
        if (this.phase === 'combat') {
          this.showBanner('拔刀', '最后存活的队伍获胜', 'COMBAT START');
          this.audio.play('go');
        }
      } else if (!this.pointerLocked && ['build', 'buy', 'combat'].includes(this.phase) && !this.modal && !this.paused && !this.controlGate) {
        this.pause();
      }
    });
    document.addEventListener('keydown', (event) => this.onKeyDown(event));
    document.addEventListener('keyup', (event) => this.keys.delete(event.code));
    window.addEventListener('blur', () => {
      this.keys.clear();
      if (this.player) this.player.blocking = false;
    });
  }

  onKeyDown(event) {
    if (['Space', 'ArrowUp', 'ArrowDown'].includes(event.code) && this.phase !== 'menu') event.preventDefault();
    if (event.repeat && !['KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) return;
    if (event.code === 'KeyM') {
      this.ui['sound-button'].click();
      return;
    }
    if (event.code === 'KeyH') {
      if (this.modal === 'help-screen') this.closeHelp(); else this.openHelp();
      return;
    }
    if (event.code === 'Escape') {
      if (this.modal === 'help-screen') this.closeHelp();
      else if (this.modal === 'pause-screen') this.resume();
      else if (this.modal === 'build-menu' || this.modal === 'shop-screen') { this.closeModal(false); this.pause(); }
      return;
    }
    if (event.code === 'KeyP') {
      if (this.paused) this.resume(); else this.pause();
      return;
    }
    if (this.controlGate) return;
    if (event.code === 'KeyB' && !this.paused) {
      if (this.modal === 'build-menu' || this.modal === 'shop-screen') this.closeModal();
      else if (!this.modal && this.phase === 'build') this.openBuildMenu();
      else if (!this.modal && this.phase === 'buy') this.openShop();
      else if (!this.modal && this.phase === 'combat') this.toast('商店仅在回合准备阶段开放');
      return;
    }
    if (event.code === 'KeyF' && !this.paused && (this.modal === 'build-menu' || this.modal === 'shop-screen')) {
      if (this.modal === 'build-menu') this.finishBuild(); else this.readyBuy();
      return;
    }
    if (this.paused || this.modal || this.phase === 'menu') return;
    this.keys.add(event.code);
    if (this.phase === 'build') {
      if (/^Digit[1-4]$/.test(event.code)) this.selectBuild(BUILD_TYPES[Number(event.code.slice(-1)) - 1].id);
      if (event.code === 'KeyR' && this.selectedBuild) {
        this.buildRotation = (this.buildRotation + Math.PI / 2) % (Math.PI * 2);
        this.audio.play('place');
      }
      if (event.code === 'KeyX') this.deleteTargetedBuild();
      if (event.code === 'KeyF') this.finishBuild();
    } else if (this.phase === 'buy' && event.code === 'KeyF') {
      this.readyBuy();
    } else if (this.phase === 'combat') {
      if (event.code === 'Space') {
        if (this.player.alive) this.startDodge(this.player);
        else this.cycleSpectator();
      }
    }
  }

  onMouseDown(event) {
    if (!this.pointerLocked || this.paused || this.modal || !this.player) return;
    if (this.phase === 'build') {
      if (event.button === 0) this.placePlayerBuild();
      if (event.button === 2) this.deleteTargetedBuild();
    } else if (this.phase === 'combat' && this.player.alive && !this.controlGate) {
      if (event.button === 0) this.startAttack(this.player);
      if (event.button === 2 && !this.player.attack && this.player.stamina > 0) this.player.blocking = true;
    }
  }

  syncControlGate() {
    const needsControl = ['build', 'combat'].includes(this.phase) && document.pointerLockElement !== this.world.renderer.domElement;
    this.controlGate = needsControl;
    const combat = this.phase === 'combat';
    this.ui['gate-kicker'].textContent = combat ? 'ROUND' : 'CONSTRUCTION';
    this.ui['gate-round'].textContent = combat ? String(this.round).padStart(2, '0') : '';
    this.ui['gate-title'].textContent = combat ? '点击拔刀开战' : '点击返回营造';
    this.ui['gate-subtitle'].textContent = combat ? '锁定鼠标 · 进入第一人称战斗' : '锁定鼠标后才继续计时 · 第一人称移动与布置';
    this.ui['control-gate'].classList.toggle('is-visible', needsControl);
    return needsControl;
  }

  requestLock() {
    if (!ACTIVE_PHASES.has(this.phase) || this.modal || this.paused) return;
    try {
      const result = this.world.renderer.domElement.requestPointerLock?.();
      if (result?.catch) result.catch(() => {
        if (['build', 'combat'].includes(this.phase)) this.syncControlGate();
      });
    } catch {
      // The explicit combat gate provides a user-gesture fallback.
    }
  }

  updateModeCards() {
    document.querySelectorAll('.mode-card').forEach((card) => card.classList.toggle('active', card.dataset.mode === this.mode));
  }

  openModal(id) {
    for (const modalId of MODAL_IDS) this.ui[modalId].classList.toggle('is-visible', modalId === id);
    this.modal = id;
    this.keys.clear();
    if (this.player) this.player.blocking = false;
    if (document.pointerLockElement) document.exitPointerLock();
  }

  closeModal(lock = true) {
    if (!this.modal) return;
    this.ui[this.modal].classList.remove('is-visible');
    this.modal = null;
    if (lock) this.requestLock();
  }

  hideAllOverlays() {
    for (const id of [...MODAL_IDS, 'swap-screen', 'control-gate']) this.ui[id].classList.remove('is-visible');
    this.modal = null;
    this.controlGate = false;
  }

  pause() {
    if (!ACTIVE_PHASES.has(this.phase) || this.paused || ['swap', 'roundEnd'].includes(this.phase)) return;
    if (this.modal && this.modal !== 'pause-screen') this.closeModal(false);
    this.paused = true;
    this.openModal('pause-screen');
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    if (this.modal === 'pause-screen') this.closeModal(false);
    this.requestLock();
  }

  openHelp() {
    if (this.modal === 'help-screen') return;
    this.helpReturn = this.modal;
    this.helpWasPaused = this.paused;
    if (ACTIVE_PHASES.has(this.phase)) this.paused = true;
    this.openModal('help-screen');
  }

  closeHelp() {
    if (this.modal !== 'help-screen') return;
    this.ui['help-screen'].classList.remove('is-visible');
    this.modal = null;
    this.paused = this.helpWasPaused;
    if (this.helpReturn) {
      this.ui[this.helpReturn].classList.add('is-visible');
      this.modal = this.helpReturn;
    } else if (!this.paused) {
      this.requestLock();
    }
    this.helpReturn = null;
  }

  newMatch(mode = 'quick', targetScore = 5) {
    this.hideAllOverlays();
    this.paused = false;
    this.mode = mode;
    this.targetScore = clampTarget(targetScore, mode === 'quick' ? 5 : 10);
    this.round = 0;
    this.midTriggered = false;
    this.pendingMatchEnd = false;
    this.pendingMidMatch = false;
    this.buildSerial = 0;
    this.killFeed = [];
    this.revealed = false;
    this.spectatorTarget = null;
    this.world.clearDynamic();
    this.builds = [];
    this.colliders = [...this.world.staticColliders];
    this.teams = TEAM_DEFS.map((definition) => ({ id: definition.id, score: 0, buildZone: definition.id, spawnZone: null }));
    const buildAssignment = shuffle([0, 1, 2, 3]);
    this.teams.forEach((team) => { team.buildZone = buildAssignment[team.id]; });
    this.actors = [];
    for (const team of TEAM_DEFS) {
      for (let slot = 0; slot < 2; slot += 1) {
        const id = team.id * 2 + slot;
        const actor = {
          id, teamId: team.id, slot, isPlayer: id === 0, name: team.names[slot],
          x: 0, z: 0, yaw: 0, radius: 0.42,
          health: 100, stamina: 100, alive: true, moving: false,
          money: MATCH.initialMoney, weaponId: 'free', lostWeapon: false,
          attack: null, attackSerial: 0, blocking: false, cooldown: 0,
          dodgeTime: 0, dodgeCooldown: 0, dodgeDirection: { x: 0, z: -1 },
          roundKills: 0, totalKills: 0, deaths: 0, lastIncome: 0,
          footstepClock: 0,
          ai: {
            think: Math.random() * 0.2, repath: 0, path: [], pathIndex: 0,
            targetId: null, lastSeen: null, acquiredAt: 0, reaction: 0.25 + Math.random() * 0.35,
            skill: 0.45 + Math.random() * 0.35, aggression: 0.75 + Math.random() * 0.35,
            destination: null, stuck: 0, avoidTimer: 0, avoidSign: Math.random() > 0.5 ? 1 : -1,
            blockUntil: 0, seenAttacks: new Set(), boughtRound: -1,
          },
        };
        this.actors.push(actor);
        this.world.createActor(actor);
      }
    }
    this.player = this.actors[0];
    this.world.rebuildViewWeapon(this.player.weaponId);
    document.body.classList.add('in-match');
    this.ui['start-screen'].classList.remove('is-visible');
    this.ui.hud.classList.add('is-visible');
    this.ui['quick-target'].value = this.mode === 'quick' ? this.targetScore : this.ui['quick-target'].value;
    this.renderScoreboard();
    this.startBuild(false);
  }

  returnToMenu() {
    this.phase = 'menu';
    this.paused = false;
    this.hideAllOverlays();
    this.world.clearDynamic();
    this.actors = [];
    this.teams = [];
    this.builds = [];
    this.player = null;
    this.colliders = [...this.world.staticColliders];
    this.nav.rebuild(this.colliders);
    document.body.classList.remove('in-match');
    this.ui.hud.classList.remove('is-visible');
    this.ui['start-screen'].classList.add('is-visible');
    if (document.pointerLockElement) document.exitPointerLock();
  }

  startBuild(isMidMatch) {
    this.phase = 'build';
    this.hideAllOverlays();
    this.paused = false;
    this.clearBuilds();
    this.buildBudgets = [MATCH.buildBudget, MATCH.buildBudget, MATCH.buildBudget, MATCH.buildBudget];
    this.buildTimer = MATCH.buildSeconds;
    this.buildVisited = false;
    this.selectedBuild = null;
    this.buildRotation = 0;
    this.pendingHits = [];
    if (isMidMatch) {
      const assignment = shuffle([0, 1, 2, 3]);
      this.teams.forEach((team) => { team.buildZone = assignment[team.id]; team.spawnZone = null; });
    }
    this.world.setZoneOwners(this.teams);
    for (const actor of this.actors) {
      const zone = ZONES[this.teams[actor.teamId].buildZone];
      const point = spawnPoints(zone)[actor.slot];
      actor.x = point.x;
      actor.z = point.z;
      actor.yaw = yawTo(actor, { x: 0, z: 0 });
      actor.health = 100;
      actor.stamina = 100;
      actor.alive = true;
      actor.moving = false;
      actor.attack = null;
      actor.blocking = false;
      actor.cooldown = 0;
      actor.ai.path = [];
      actor.ai.targetId = null;
    }
    this.player.x = 0;
    this.player.z = 7.5;
    const ownZone = ZONES[this.teams[0].buildZone];
    this.player.yaw = yawTo(this.player, { x: ownZone.cx, z: ownZone.cz });
    this.pitch = -0.08;
    for (const team of this.teams) {
      if (team.id !== 0) this.generateAIBuild(team);
    }
    this.refreshColliders();
    this.renderBuildMenu();
    this.ui['build-zone-name'].textContent = `${ownZone.label} · ${ownZone.name}`;
    this.ui['map-mode-label'].textContent = isMidMatch ? '中场重建' : '营造归属';
    this.showBanner(isMidMatch ? '中场重建' : '营造阶段', `前往 ${ownZone.label} 区 · ${ownZone.name}，布置本队掩体`, isMidMatch ? '比分与资金保留 / 仅重建一次' : 'BUILD / 120 秒');
    this.toast(isMidMatch ? '旧构件已清理，四队获得全新区域与 100 预算' : '先跟随标记走到本队区域，再按 B 选择构件');
    this.audio.play('stage');
    this.syncControlGate();
    this.updateHUD(true);
  }

  clearBuilds() {
    for (const build of this.builds) this.world.dynamicGroup.remove(build.mesh);
    this.builds = [];
    this.world.removeGhost();
    this.refreshColliders();
  }

  refreshColliders() {
    this.colliders = [...this.world.staticColliders, ...this.builds.flatMap((build) => build.colliders)];
    this.nav.rebuild(this.colliders);
  }

  generateAIBuild(team) {
    const zone = ZONES[team.buildZone];
    const template = AI_BUILD_TEMPLATES[Math.floor(Math.random() * AI_BUILD_TEMPLATES.length)];
    const rotation = Math.floor(Math.random() * 4) * Math.PI / 2;
    for (const item of template) {
      const offset = rotatedOffset(item.u, item.v, rotation);
      const x = zone.cx + offset.x * zone.sx;
      const z = zone.cz + offset.z * zone.sz;
      this.tryPlaceBuild(team.id, zone.id, item.type, x, z, item.r + rotation, true, true);
    }
  }

  openBuildMenu() {
    if (this.phase !== 'build') return;
    const ownZone = this.teams[0].buildZone;
    if (zoneAt(this.player.x, this.player.z)?.id !== ownZone) {
      this.toast(`请先进入 ${ZONES[ownZone].label} 区，再编辑本队构件`);
      this.audio.play('error');
      return;
    }
    this.renderBuildMenu();
    this.openModal('build-menu');
  }

  renderBuildMenu() {
    const budget = this.buildBudgets?.[0] ?? MATCH.buildBudget;
    this.ui['build-menu-budget'].textContent = budget;
    this.ui['build-options'].innerHTML = BUILD_TYPES.map((type, index) => `
      <button class="build-option" data-build="${type.id}" type="button" ${budget < type.cost ? 'disabled' : ''}>
        <span class="option-number">0${index + 1}</span><span class="build-icon">${type.icon}</span>
        <strong>${type.name}</strong><p>${type.description}</p>
        <footer><span>${type.tag}</span><b>${type.cost}</b></footer>
      </button>`).join('');
    this.ui['build-options'].querySelectorAll('[data-build]').forEach((button) => {
      button.addEventListener('click', () => {
        this.selectBuild(button.dataset.build);
        this.closeModal();
      });
    });
  }

  selectBuild(typeId) {
    if (this.phase !== 'build') return;
    const ownZone = this.teams[0].buildZone;
    if (zoneAt(this.player.x, this.player.z)?.id !== ownZone) {
      this.toast('构件编辑仅限你当前所在的本队区域');
      return;
    }
    if (this.buildBudgets[0] < buildTypeById(typeId).cost) {
      this.toast('剩余营造预算不足');
      this.audio.play('error');
      return;
    }
    this.selectedBuild = typeId;
    this.world.setGhost(typeId, 0);
    this.ghostValidity = null;
    this.toast(`${buildTypeById(typeId).name}：左键放置 · R 旋转 90° · X 删除`);
  }

  validateBuild(teamId, zoneId, typeId, x, z, rotation, isAI = false) {
    const type = buildTypeById(typeId);
    const zone = ZONES[zoneId];
    if (this.buildBudgets[teamId] < type.cost) return { ok: false, reason: '预算不足' };
    if (!isAI && (this.teams[teamId].buildZone !== zoneId || zoneAt(this.player.x, this.player.z)?.id !== zoneId)) {
      return { ok: false, reason: '只能在本队区域内编辑' };
    }
    const colliders = collidersForBuild(typeId, x, z, rotation);
    for (const collider of colliders) {
      const bounds = worldBounds(collider);
      if (bounds.minX < zone.minX + 0.12 || bounds.maxX > zone.maxX - 0.12 || bounds.minZ < zone.minZ + 0.12 || bounds.maxZ > zone.maxZ - 0.12) {
        return { ok: false, reason: '构件必须完整位于区域边界内' };
      }
      // These two connected strips meet the public roads. They guarantee at least two routes out.
      if (bounds.minX < zone.cx + 1.65 && bounds.maxX > zone.cx - 1.65) return { ok: false, reason: '中央纵向安全通道不可占用' };
      if (bounds.minZ < zone.cz + 1.65 && bounds.maxZ > zone.cz - 1.65) return { ok: false, reason: '中央横向安全通道不可占用' };
      for (const spawn of spawnPoints(zone)) {
        if (circleHitsObstacle(spawn.x, spawn.z, 1.4, collider)) return { ok: false, reason: '双人出生安全区不可占用' };
      }
      if (this.colliders.some((other) => obbIntersects(collider, other, 0.06))) return { ok: false, reason: '不能与墙体或已有构件重叠' };
      for (const actor of this.actors) {
        if (actor.alive && circleHitsObstacle(actor.x, actor.z, actor.radius + 0.18, collider)) return { ok: false, reason: '落点内有角色，请移开后再放置' };
      }
    }
    return { ok: true, colliders };
  }

  tryPlaceBuild(teamId, zoneId, typeId, x, z, rotation, charge = true, isAI = false) {
    const validation = this.validateBuild(teamId, zoneId, typeId, x, z, rotation, isAI);
    if (!validation.ok) return validation;
    const type = buildTypeById(typeId);
    const mesh = this.world.createBuildMesh(typeId, teamId);
    mesh.position.set(x, 0, z);
    mesh.rotation.y = rotation;
    const id = ++this.buildSerial;
    mesh.traverse((child) => { child.userData.buildId = id; });
    this.world.dynamicGroup.add(mesh);
    const build = { id, teamId, zoneId, typeId, x, z, rotation, cost: type.cost, mesh, colliders: validation.colliders };
    this.builds.push(build);
    if (charge) this.buildBudgets[teamId] -= type.cost;
    this.refreshColliders();
    if (!this.validateZoneRoutes(zoneId)) {
      this.world.dynamicGroup.remove(mesh);
      this.builds.pop();
      if (charge) this.buildBudgets[teamId] += type.cost;
      this.refreshColliders();
      return { ok: false, reason: '该摆放会切断有效通路，已阻止' };
    }
    return { ok: true, build };
  }

  validateZoneRoutes(zoneId) {
    const zone = ZONES[zoneId];
    for (const spawn of spawnPoints(zone)) {
      const path = this.nav.findPath(spawn, { x: 0, z: 0 });
      if (!path.length) return false;
    }
    return true;
  }

  validateAllRoutes() {
    return ZONES.every((zone) => this.validateZoneRoutes(zone.id));
  }

  placePlayerBuild() {
    if (!this.selectedBuild || !this.ghostPlacement?.valid) {
      this.toast(this.selectedBuild ? this.ghostPlacement?.reason || '当前位置不可放置' : '先按 B 或数字 1—4 选择构件');
      this.audio.play('error');
      return;
    }
    const { x, z } = this.ghostPlacement;
    const result = this.tryPlaceBuild(0, this.teams[0].buildZone, this.selectedBuild, x, z, this.buildRotation);
    if (!result.ok) {
      this.toast(result.reason);
      this.audio.play('error');
      return;
    }
    this.audio.play('place');
    this.world.burst({ x, y: 0.25, z }, TEAM_DEFS[0].color, 5, 0.45);
    this.renderBuildMenu();
    this.updateGhost();
  }

  deleteTargetedBuild() {
    if (this.phase !== 'build') return;
    const ownZone = this.teams[0].buildZone;
    if (zoneAt(this.player.x, this.player.z)?.id !== ownZone) {
      this.toast('只能在本队区域内删除构件');
      return;
    }
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.world.camera);
    this.raycaster.far = 7.5;
    const candidates = this.builds.filter((build) => build.teamId === 0).map((build) => build.mesh);
    for (const candidate of candidates) candidate.updateMatrixWorld(true);
    const hits = this.raycaster.intersectObjects(candidates, true).filter((hit) => hit.object.isMesh);
    if (!hits.length) {
      this.toast('看向 7.5 米内的本队构件再删除');
      return;
    }
    const id = hits[0].object.userData.buildId;
    const index = this.builds.findIndex((build) => build.id === id && build.teamId === 0);
    if (index < 0) return;
    const [build] = this.builds.splice(index, 1);
    this.world.dynamicGroup.remove(build.mesh);
    this.buildBudgets[0] += build.cost;
    this.refreshColliders();
    this.renderBuildMenu();
    this.audio.play('delete');
    this.toast(`已回收 ${buildTypeById(build.typeId).name} · 退还 ${build.cost} 预算`);
  }

  updateGhost() {
    this.ghostPlacement = null;
    if (!this.world.ghost) return;
    this.world.ghost.visible = false;
    if (this.phase !== 'build' || !this.selectedBuild || this.modal || this.paused) return;
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.world.camera);
    this.raycaster.far = 100;
    const point = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(this.groundPlane, point)) {
      this.ui['interaction-tip'].textContent = '看向地面以选择落点';
      return;
    }
    if (this.world.camera.position.distanceTo(point) > 7.5) {
      this.ui['interaction-tip'].textContent = '落点过远 · 靠近并看向 7.5 米内地面';
      return;
    }
    const x = Math.round(point.x * 2) / 2;
    const z = Math.round(point.z * 2) / 2;
    const zone = ZONES[this.teams[0].buildZone];
    const validation = this.validateBuild(0, zone.id, this.selectedBuild, x, z, this.buildRotation);
    this.world.ghost.visible = true;
    this.world.ghost.position.set(x, 0.025, z);
    this.world.ghost.rotation.y = this.buildRotation;
    if (this.ghostValidity !== validation.ok) {
      this.world.setGhostValidity(validation.ok);
      this.ghostValidity = validation.ok;
    }
    this.ghostPlacement = { x, z, valid: validation.ok, reason: validation.reason };
    this.ui['interaction-tip'].textContent = validation.ok ? `左键放置 ${buildTypeById(this.selectedBuild).name} · R 旋转` : validation.reason;
  }

  finishBuild() {
    if (this.phase !== 'build') return;
    const ownZone = this.teams[0].buildZone;
    if (!this.buildVisited && this.buildTimer > 0) {
      this.toast(`请先亲自前往 ${ZONES[ownZone].label} 区查看布局，再确认准备`);
      this.audio.play('error');
      return;
    }
    if (!this.validateAllRoutes()) {
      this.toast('通路检查未通过，请删除阻塞构件');
      this.audio.play('error');
      return;
    }
    this.selectedBuild = null;
    this.world.removeGhost();
    this.ui['interaction-tip'].textContent = '';
    this.startSwap();
  }

  startSwap() {
    this.phase = 'swap';
    this.hideAllOverlays();
    this.swapTimer = MATCH.swapSeconds;
    // Index by the zone each team built, not by team colour/identity.
    const spawnByBuildZone = derangement(4);
    for (const team of this.teams) team.spawnZone = spawnByBuildZone[team.buildZone];
    this.resetActorsForRound();
    this.renderSwap();
    this.openModallessSwap();
    this.audio.play('stage');
    this.updateHUD(true);
  }

  openModallessSwap() {
    this.ui['swap-screen'].classList.add('is-visible');
    this.modal = null;
    if (document.pointerLockElement) document.exitPointerLock();
  }

  resetActorsForRound() {
    for (const actor of this.actors) {
      const zone = ZONES[this.teams[actor.teamId].spawnZone];
      const spawn = spawnPoints(zone)[actor.slot];
      actor.x = spawn.x;
      actor.z = spawn.z;
      actor.yaw = yawTo(actor, { x: 0, z: 0 });
      if (actor.lostWeapon) {
        actor.weaponId = 'free';
        actor.lostWeapon = false;
      }
      actor.health = 100;
      actor.stamina = 100;
      actor.alive = true;
      actor.moving = false;
      actor.attack = null;
      actor.blocking = false;
      actor.cooldown = 0;
      actor.dodgeTime = 0;
      actor.dodgeCooldown = 0;
      actor.roundKills = 0;
      actor.ai.path = [];
      actor.ai.pathIndex = 0;
      actor.ai.targetId = null;
      actor.ai.lastSeen = null;
      actor.ai.seenAttacks.clear();
      actor.ai.blockUntil = 0;
      actor.ai.repath = Math.random() * 0.3;
    }
    this.spectatorTarget = null;
    this.world.rebuildViewWeapon(this.player.weaponId);
    this.pitch = 0;
  }

  renderSwap() {
    this.ui['swap-map'].innerHTML = ZONES.map((zone) => {
      const builder = this.teams.find((team) => team.buildZone === zone.id);
      const occupant = this.teams.find((team) => team.spawnZone === zone.id);
      return `<div class="swap-zone ${builder.id === 0 ? 'player-build' : ''} ${occupant.id === 0 ? 'player-spawn' : ''}" style="--zone:${TEAM_DEFS[occupant.id].color}"><span>${zone.name}</span><strong>${zone.label}</strong><small>${TEAM_DEFS[occupant.id].name}出生</small></div>`;
    }).join('');
    this.ui['swap-list'].innerHTML = this.teams.map((team) => {
      const build = ZONES[team.buildZone];
      const spawn = ZONES[team.spawnZone];
      return `<div class="swap-row ${team.id === 0 ? 'player' : ''}" style="--team:${TEAM_DEFS[team.id].color}"><b>${TEAM_DEFS[team.id].name}</b><span>营造 ${build.label} 区</span><i>→</i><strong>出生 ${spawn.label} 区</strong></div>`;
    }).join('');
    const build = ZONES[this.teams[0].buildZone];
    const spawn = ZONES[this.teams[0].spawnZone];
    this.ui['swap-player-result'].textContent = `你营造 ${build.label} 区 · ${build.name}　→　本回合出生 ${spawn.label} 区 · ${spawn.name}`;
  }

  beginBuy() {
    if (this.phase !== 'swap') return;
    this.phase = 'buy';
    this.round += 1;
    this.buyTimer = MATCH.buySeconds;
    this.ui['swap-screen'].classList.remove('is-visible');
    this.aiPurchases();
    this.renderShop();
    this.openModal('shop-screen');
    this.showBanner('购买与准备', `${this.round} 回合 · 出生 ${ZONES[this.teams[0].spawnZone].label} 区`, 'PREPARATION / 18 秒');
    this.audio.play('stage');
    this.updateHUD(true);
  }

  aiPurchases() {
    const preferences = [
      ['sword', 'dagger'],
      ['sword', 'dagger', 'spear', 'axe'],
      ['dagger', 'sword', 'axe'],
      ['axe', 'spear', 'sword', 'dagger'],
      ['spear', 'sword', 'dagger'],
      ['sword', 'axe', 'dagger'],
      ['dagger', 'sword', 'spear'],
      ['axe', 'sword', 'dagger'],
    ];
    for (const actor of this.actors) {
      if (actor.isPlayer || actor.ai.boughtRound === this.round) continue;
      const choice = preferences[actor.id].find((id) => weaponById(id).price <= actor.money) || 'free';
      const weapon = weaponById(choice);
      if (actor.weaponId !== choice && actor.money >= weapon.price) {
        actor.money -= weapon.price;
        actor.weaponId = choice;
      }
      actor.ai.boughtRound = this.round;
    }
  }

  openShop() {
    if (this.phase !== 'buy') {
      this.toast('商店仅在准备阶段开放');
      return;
    }
    this.renderShop();
    this.openModal('shop-screen');
  }

  renderShop(feedback = null, error = false) {
    const player = this.player;
    this.ui['shop-money'].textContent = `$ ${player.money}`;
    this.ui['shop-options'].innerHTML = WEAPONS.map((weapon) => {
      const equipped = player.weaponId === weapon.id;
      const affordable = player.money >= weapon.price;
      return `<article class="weapon-option ${equipped ? 'equipped' : ''} ${!affordable && !equipped ? 'unaffordable' : ''}" style="--weapon:${weapon.trail}">
        <span class="weapon-class">${weapon.subtitle}</span><h3>${weapon.name}</h3><span class="weapon-price">${weapon.price ? `$ ${weapon.price}` : '免费'}</span>
        <div class="weapon-silhouette"></div><p>${weapon.description}</p>
        <div class="weapon-stats"><div class="weapon-stat"><span>速度</span><div><i style="width:${weapon.stats.speed}%"></i></div></div><div class="weapon-stat"><span>伤害</span><div><i style="width:${weapon.stats.damage}%"></i></div></div><div class="weapon-stat"><span>距离</span><div><i style="width:${weapon.stats.range}%"></i></div></div></div>
        <button class="weapon-buy" data-weapon="${weapon.id}" type="button" ${equipped ? 'disabled' : ''}>${equipped ? '当前已装备' : affordable ? '购买并装备' : '资金不足'}</button>
      </article>`;
    }).join('');
    this.ui['shop-options'].querySelectorAll('[data-weapon]').forEach((button) => button.addEventListener('click', () => this.buyWeapon(button.dataset.weapon)));
    if (feedback) {
      this.ui['shop-feedback'].textContent = feedback;
      this.ui['shop-feedback'].classList.toggle('error', error);
    } else {
      this.ui['shop-feedback'].textContent = '选择适合你的交战距离。购买不会退款，存活者下回合保留武器。';
      this.ui['shop-feedback'].classList.remove('error');
    }
  }

  buyWeapon(weaponId) {
    if (this.phase !== 'buy') {
      this.renderShop('战斗已经开始，商店关闭。', true);
      this.audio.play('error');
      return;
    }
    const weapon = weaponById(weaponId);
    if (this.player.weaponId === weaponId) {
      this.renderShop(`${weapon.name} 已在手中，无需重复购买。`);
      return;
    }
    if (this.player.money < weapon.price) {
      this.renderShop(`资金不足：${weapon.name} 需要 $ ${weapon.price}，当前只有 $ ${this.player.money}。`, true);
      this.audio.play('error');
      return;
    }
    this.player.money -= weapon.price;
    this.player.weaponId = weaponId;
    this.world.rebuildViewWeapon(weaponId);
    this.audio.play('buy');
    this.renderShop(`已装备 ${weapon.name} · 伤害 ${weapon.damage} / 距离 ${weapon.range.toFixed(1)}m。`);
    this.updateHUD(true);
  }

  readyBuy() {
    if (this.phase !== 'buy') return;
    this.buyTimer = Math.min(this.buyTimer, 2.2);
    this.closeModal();
    this.toast('已准备 · 倒计时结束后开战');
  }

  beginCombat() {
    if (this.phase !== 'buy') return;
    if (this.modal) this.closeModal(false);
    this.phase = 'combat';
    this.combatTimer = MATCH.roundSeconds;
    this.combatElapsed = 0;
    this.revealed = false;
    this.pendingHits = [];
    for (const actor of this.actors) {
      actor.attack = null;
      actor.blocking = false;
      actor.moving = false;
      actor.ai.acquiredAt = 0;
    }
    this.syncControlGate();
    if (!this.controlGate) {
      this.showBanner('拔刀', '最后存活的队伍获得 1 分', `ROUND ${String(this.round).padStart(2, '0')}`);
      this.audio.play('go');
    }
    this.updateHUD(true);
  }

  updateBuild(dt) {
    if (this.controlGate) return;
    this.buildTimer -= dt;
    this.updatePlayerMovement(dt, true);
    const ownZone = this.teams[0].buildZone;
    if (zoneAt(this.player.x, this.player.z)?.id === ownZone) this.buildVisited = true;
    this.updateGhost();
    if (this.buildTimer <= 0) this.finishBuild();
  }

  updateSwap(dt) {
    this.swapTimer -= dt;
    if (this.swapTimer <= 0) this.beginBuy();
  }

  updateBuy(dt) {
    this.buyTimer -= dt;
    this.ui['shop-countdown'].textContent = `${Math.max(0, Math.ceil(this.buyTimer))} 秒后开战`;
    if (this.buyTimer <= 0) this.beginCombat();
  }

  updateCombat(dt) {
    if (this.controlGate) return;
    this.combatElapsed += dt;
    this.combatTimer -= dt;
    if (!this.revealed && this.combatElapsed >= MATCH.revealSeconds) {
      this.revealed = true;
      this.showBanner('终局揭示', '所有敌人位置公开 · AI 将主动追击', 'ANTI-STALL / 35 秒');
      this.audio.play('stage');
    }
    this.updatePlayerMovement(dt, false);
    for (const actor of this.actors) {
      if (!actor.isPlayer && actor.alive) this.updateAI(actor, dt);
    }
    this.resolveActorCollisions();
    this.pendingHits = [];
    for (const actor of this.actors) this.updateActorCombat(actor, dt);
    this.applyPendingHits();
    if (!this.player.alive && !this.spectatorTarget) this.startSpectate();
    const aliveTeams = [...new Set(this.actors.filter((actor) => actor.alive).map((actor) => actor.teamId))];
    if (aliveTeams.length <= 1) this.finishRound(resolveRoundTeams(aliveTeams));
    else if (this.combatTimer <= 0) this.finishRound(null);
  }

  updatePlayerMovement(dt, building) {
    const actor = this.player;
    if (!actor?.alive || (!building && (this.phase !== 'combat' || this.controlGate))) return;
    actor.cooldown = Math.max(0, actor.cooldown - dt);
    actor.dodgeCooldown = Math.max(0, actor.dodgeCooldown - dt);
    if (!actor.blocking) actor.stamina = Math.min(100, actor.stamina + dt * 20);
    if (actor.stamina <= 0) actor.blocking = false;
    let inputX = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    let inputZ = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    const magnitude = Math.hypot(inputX, inputZ);
    if (magnitude > 0) { inputX /= magnitude; inputZ /= magnitude; }
    const f = forward(actor);
    const right = { x: Math.cos(actor.yaw), z: -Math.sin(actor.yaw) };
    let dx = right.x * inputX + f.x * inputZ;
    let dz = right.z * inputX + f.z * inputZ;
    let speed = building ? 5.6 : 5.15;
    if (!building && this.keys.has('ShiftLeft') && !actor.attack && !actor.blocking && magnitude > 0) speed = 7.15;
    if (actor.attack) speed *= 0.36;
    if (actor.blocking) speed *= 0.5;
    if (!building && actor.dodgeTime > 0) {
      actor.dodgeTime = Math.max(0, actor.dodgeTime - dt);
      dx = actor.dodgeDirection.x;
      dz = actor.dodgeDirection.z;
      speed = 13.5;
    }
    const before = { x: actor.x, z: actor.z };
    const result = moveCircle(actor, dx * speed * dt, dz * speed * dt, actor.radius, this.colliders);
    actor.x = result.x;
    actor.z = result.z;
    actor.moving = distance(before, actor) > 0.0005;
    if (actor.moving) {
      actor.footstepClock -= dt;
      if (actor.footstepClock <= 0) {
        this.audio.play('step');
        actor.footstepClock = speed > 6 ? 0.28 : 0.39;
      }
    } else actor.footstepClock = 0;
  }

  startDodge(actor) {
    if (!actor.alive || actor.attack || actor.dodgeCooldown > 0 || actor.stamina < 30) return;
    let inputX = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    let inputZ = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    const f = forward(actor);
    const right = { x: Math.cos(actor.yaw), z: -Math.sin(actor.yaw) };
    let x = right.x * inputX + f.x * inputZ;
    let z = right.z * inputX + f.z * inputZ;
    const length = Math.hypot(x, z) || 1;
    actor.dodgeDirection = { x: x / length, z: z / length };
    actor.dodgeTime = 0.2;
    actor.dodgeCooldown = 1.5;
    actor.stamina -= 30;
    actor.blocking = false;
    this.audio.play('swing');
  }

  updateAI(actor, dt) {
    const ai = actor.ai;
    actor.cooldown = Math.max(0, actor.cooldown - dt);
    actor.dodgeCooldown = Math.max(0, actor.dodgeCooldown - dt);
    actor.stamina = Math.min(100, actor.stamina + (actor.blocking ? 4 : 18) * dt);
    ai.think -= dt;
    ai.repath -= dt;
    ai.avoidTimer -= dt;
    ai.blockUntil -= dt;
    actor.blocking = ai.blockUntil > 0 && !actor.attack && actor.stamina > 0;

    if (ai.think <= 0) {
      ai.think = 0.16 + Math.random() * 0.16;
      this.thinkAI(actor);
    }
    let target = this.actors[ai.targetId];
    if (!target?.alive) { target = null; ai.targetId = null; }
    let destination = null;
    let visibleTarget = false;
    if (target) {
      const targetDistance = distance(actor, target);
      visibleTarget = this.revealed || (targetDistance < 17 && hasLineOfSight(actor, target, this.colliders, 1.35));
      if (visibleTarget) {
        destination = target;
        ai.lastSeen = { x: target.x, z: target.z, time: this.combatElapsed };
      } else if (ai.lastSeen && this.combatElapsed - ai.lastSeen.time < 4) destination = ai.lastSeen;
      else { ai.targetId = null; target = null; }
    }
    if (!destination) {
      if (actor.id === 1 && this.player.alive) {
        const side = forward(this.player);
        destination = { x: this.player.x - side.x * 1.7 + Math.cos(this.player.yaw) * 1.2, z: this.player.z - side.z * 1.7 - Math.sin(this.player.yaw) * 1.2 };
      } else {
        const angle = actor.teamId * Math.PI / 2 + this.round * 0.35;
        destination = { x: Math.sin(angle) * 2.1, z: Math.cos(angle) * 2.1 };
      }
    }

    const weapon = weaponById(actor.weaponId);
    const targetDistance = target ? distance(actor, target) : Infinity;
    let moveDestination = destination;
    let wantsMove = true;
    // Vision/reveal supplies knowledge, but never permission to attack through a solid.
    // If a low wall is visible yet blocks melee, keep following the navigation path around it.
    const meleePathClear = target ? hasLineOfSight(actor, target, this.colliders, 0.8) : false;
    if (target && visibleTarget && meleePathClear && targetDistance <= weapon.range * 0.92) {
      wantsMove = false;
      if (weapon.minRange && targetDistance < weapon.minRange + 0.35) {
        const away = { x: actor.x - target.x, z: actor.z - target.z };
        const length = Math.hypot(away.x, away.z) || 1;
        moveDestination = { x: actor.x + away.x / length * 2, z: actor.z + away.z / length * 2 };
        wantsMove = true;
      } else if (!actor.attack && !actor.blocking && actor.cooldown <= 0 && this.combatElapsed - ai.acquiredAt >= ai.reaction) {
        const facing = forward(actor);
        const dx = (target.x - actor.x) / Math.max(0.01, targetDistance);
        const dz = (target.z - actor.z) / Math.max(0.01, targetDistance);
        if (facing.x * dx + facing.z * dz > 0.45 && Math.random() < 0.78 * ai.aggression) this.startAttack(actor);
      }
    } else if (target && visibleTarget && targetDistance < weapon.range + 1.2 && !actor.attack && Math.random() < dt * 1.4) {
      // Small side steps make approaching less mechanical without granting evasion invulnerability.
      ai.avoidTimer = 0.35;
      ai.avoidSign = Math.random() > 0.5 ? 1 : -1;
    }

    let desiredYaw = target && visibleTarget ? yawTo(actor, target) : destination ? yawTo(actor, destination) : actor.yaw;
    actor.yaw = lerpAngle(actor.yaw, desiredYaw, dt * (actor.attack ? 2.2 : 7.5));
    let moveX = 0;
    let moveZ = 0;
    if (wantsMove && moveDestination && !actor.blocking) {
      if (ai.repath <= 0 || !ai.destination || distance(ai.destination, moveDestination) > 1.4) {
        ai.path = this.nav.findPath(actor, moveDestination);
        ai.pathIndex = 0;
        ai.destination = { x: moveDestination.x, z: moveDestination.z };
        ai.repath = 0.65 + Math.random() * 0.4;
      }
      let waypoint = ai.path[ai.pathIndex] || moveDestination;
      if (waypoint && distance(actor, waypoint) < 0.5 && ai.pathIndex < ai.path.length - 1) waypoint = ai.path[++ai.pathIndex];
      if (waypoint) {
        const dx = waypoint.x - actor.x;
        const dz = waypoint.z - actor.z;
        const length = Math.hypot(dx, dz) || 1;
        moveX = dx / length;
        moveZ = dz / length;
      }
      if (ai.avoidTimer > 0) {
        const originalX = moveX;
        moveX = -moveZ * ai.avoidSign;
        moveZ = originalX * ai.avoidSign;
      }
    }
    if (actor.attack) { moveX *= 0.25; moveZ *= 0.25; }
    const speed = 4.15 + actor.ai.skill * 0.8;
    const before = { x: actor.x, z: actor.z };
    const result = moveCircle(actor, moveX * speed * dt, moveZ * speed * dt, actor.radius, this.colliders);
    actor.x = result.x;
    actor.z = result.z;
    actor.moving = distance(before, actor) > 0.0005;
    const intended = Math.hypot(moveX, moveZ) > 0.1;
    if (intended && !actor.moving) ai.stuck += dt; else ai.stuck = Math.max(0, ai.stuck - dt * 2);
    if (ai.stuck > 0.8) {
      ai.repath = 0;
      ai.path = [];
      ai.avoidTimer = 0.55;
      ai.avoidSign *= -1;
      ai.stuck = 0;
    }
    if (actor.moving && distance(actor, this.player) < 10) {
      actor.footstepClock -= dt;
      if (actor.footstepClock <= 0) {
        this.audio.play('step', distance(actor, this.player));
        actor.footstepClock = 0.46;
      }
    }
  }

  thinkAI(actor) {
    const ai = actor.ai;
    const enemies = this.actors.filter((other) => other.alive && other.teamId !== actor.teamId);
    const visible = enemies.filter((other) => {
      const d = distance(actor, other);
      if (!this.revealed && d > 16) return false;
      return this.revealed || hasLineOfSight(actor, other, this.colliders, 1.35);
    });
    if (visible.length) {
      visible.sort((a, b) => {
        const mateTargetA = this.actors[1]?.ai.targetId === a.id && actor.teamId === 0 ? -1.2 : 0;
        const mateTargetB = this.actors[1]?.ai.targetId === b.id && actor.teamId === 0 ? -1.2 : 0;
        return distance(actor, a) + mateTargetA - (distance(actor, b) + mateTargetB);
      });
      const chosen = visible[0];
      if (ai.targetId !== chosen.id) {
        ai.targetId = chosen.id;
        ai.acquiredAt = this.combatElapsed;
        ai.reaction = 0.22 + (1 - ai.skill) * 0.45 + Math.random() * 0.18;
      }
      ai.lastSeen = { x: chosen.x, z: chosen.z, time: this.combatElapsed };
    }
    const threat = enemies.find((other) => other.attack && other.attack.elapsed < other.attack.weapon.windup && distance(actor, other) < 3.7);
    if (threat && !actor.attack) {
      const key = `${threat.id}:${threat.attackSerial}`;
      if (!ai.seenAttacks.has(key)) {
        ai.seenAttacks.add(key);
        if (Math.random() < ai.skill * 0.72) ai.blockUntil = 0.28 + Math.random() * 0.4;
      }
    }
  }

  resolveActorCollisions() {
    const alive = this.actors.filter((actor) => actor.alive);
    for (let iteration = 0; iteration < 2; iteration += 1) {
      for (let i = 0; i < alive.length; i += 1) {
        for (let j = i + 1; j < alive.length; j += 1) {
          const a = alive[i];
          const b = alive[j];
          let dx = b.x - a.x;
          let dz = b.z - a.z;
          let d = Math.hypot(dx, dz);
          const minimum = a.radius + b.radius;
          if (d >= minimum) continue;
          if (d < 0.001) { dx = 0.01 * (i + 1); dz = 0.01 * (j + 1); d = Math.hypot(dx, dz); }
          const push = (minimum - d) * 0.5;
          const nx = dx / d;
          const nz = dz / d;
          if (canStand(a.x - nx * push, a.z - nz * push, a.radius, this.colliders)) { a.x -= nx * push; a.z -= nz * push; }
          if (canStand(b.x + nx * push, b.z + nz * push, b.radius, this.colliders)) { b.x += nx * push; b.z += nz * push; }
        }
      }
    }
  }

  startAttack(actor) {
    if (this.phase !== 'combat' || this.controlGate || !actor.alive || actor.attack || actor.blocking || actor.dodgeTime > 0 || actor.cooldown > 0) return false;
    const weapon = weaponById(actor.weaponId);
    actor.attackSerial = ++this.attackSerial;
    actor.attack = { weapon, elapsed: 0, hitIds: new Set(), effectPlayed: false };
    actor.blocking = false;
    return true;
  }

  updateActorCombat(actor, dt) {
    if (!actor.alive) return;
    if (!actor.isPlayer) {
      // AI cooldown/stamina are advanced in updateAI; this keeps attack simulation common.
    } else if (!actor.blocking && !actor.attack) {
      actor.stamina = Math.min(100, actor.stamina + dt * 6);
    }
    if (!actor.attack) return;
    const attack = actor.attack;
    const { weapon } = attack;
    const previous = attack.elapsed;
    attack.elapsed += dt;
    if (!attack.effectPlayed && previous < weapon.windup && attack.elapsed >= weapon.windup) {
      attack.effectPlayed = true;
      this.audio.play(weapon.id === 'axe' ? 'heavySwing' : 'swing', actor.isPlayer ? 0 : distance(actor, this.player));
      this.world.slash(actor, weapon);
    }
    if (attack.elapsed >= weapon.windup && attack.elapsed <= weapon.windup + weapon.active) this.performMeleeHit(actor, attack);
    if (attack.elapsed >= weapon.windup + weapon.active + weapon.recovery) {
      actor.attack = null;
      actor.cooldown = actor.isPlayer ? 0 : 0.12 + Math.random() * 0.28;
    }
  }

  performMeleeHit(actor, attack) {
    const { weapon } = attack;
    const f = forward(actor);
    const minimumDot = Math.cos((weapon.arc * Math.PI / 180) / 2);
    for (const target of this.actors) {
      if (!target.alive || target.teamId === actor.teamId || attack.hitIds.has(target.id)) continue;
      const dx = target.x - actor.x;
      const dz = target.z - actor.z;
      const d = Math.hypot(dx, dz);
      if (d > weapon.range + target.radius || d < weapon.minRange) continue;
      const angularAllowance = Math.atan2(target.radius * 0.65, Math.max(0.3, d));
      const dot = (f.x * dx + f.z * dz) / Math.max(0.001, d);
      if (dot < Math.cos(Math.acos(minimumDot) + angularAllowance)) continue;
      if (!hasLineOfSight(actor, target, this.colliders, 0.8)) continue;
      attack.hitIds.add(target.id);
      this.pendingHits.push({ source: actor, target, weapon, damage: weapon.damage });
    }
  }

  applyPendingHits() {
    const hits = this.pendingHits;
    this.pendingHits = [];
    if (!hits.length) return;
    const totals = new Map();
    const credits = new Map();
    for (const hit of hits) {
      const { source, target, weapon } = hit;
      if (!target.alive) continue;
      let damage = hit.damage;
      if (target.dodgeTime > 0) {
        if (target.isPlayer) this.toast('闪避成功');
        continue;
      }
      const toSourceX = source.x - target.x;
      const toSourceZ = source.z - target.z;
      const length = Math.hypot(toSourceX, toSourceZ) || 1;
      const f = forward(target);
      const frontal = (f.x * toSourceX + f.z * toSourceZ) / length > Math.cos(Math.PI / 3);
      let blocked = false;
      if (target.blocking && frontal && target.stamina > 0) {
        if (target.stamina >= weapon.blockDamage) {
          target.stamina -= weapon.blockDamage;
          damage = 0;
          blocked = true;
        } else {
          target.stamina = 0;
          target.blocking = false;
          damage *= 0.65;
          if (target.isPlayer) this.toast('架势被击破！');
        }
      }
      const impact = { x: target.x, y: 1.15, z: target.z };
      if (blocked) {
        this.world.burst(impact, '#75e1d2', 8, 0.8);
        this.audio.play('block', target.isPlayer || source.isPlayer ? 0 : distance(target, this.player));
        if (target.isPlayer) this.flash('block-flash');
        if (source.isPlayer) this.toast('对手格挡了攻击');
        continue;
      }
      totals.set(target.id, (totals.get(target.id) || 0) + damage);
      credits.set(target.id, source);
      this.world.burst(impact, TEAM_DEFS[target.teamId].color, weapon.id === 'axe' ? 15 : 8, weapon.id === 'axe' ? 1.25 : 0.8);
      this.audio.play('hit', target.isPlayer || source.isPlayer ? 0 : distance(target, this.player));
      if (source.isPlayer) this.flash('hit-marker');
      if (target.isPlayer) {
        this.flash('damage-flash');
        this.audio.play('hurt');
        this.cameraShake = Math.min(0.09, this.cameraShake + damage * 0.0008);
      }
    }
    const deaths = [];
    for (const [targetId, damage] of totals) {
      const target = this.actors[targetId];
      target.health = Math.max(0, target.health - damage);
      if (target.health <= 0 && target.alive) deaths.push({ target, source: credits.get(targetId) });
    }
    // All hits in a simulation tick are applied before deaths and round evaluation, allowing fair trades.
    for (const { target, source } of deaths) this.killActor(target, source);
  }

  killActor(target, source) {
    target.alive = false;
    target.health = 0;
    target.attack = null;
    target.blocking = false;
    target.moving = false;
    target.deaths += 1;
    target.lostWeapon = true;
    if (source && source !== target) {
      source.roundKills += 1;
      source.totalKills += 1;
    }
    this.world.burst({ x: target.x, y: 1.25, z: target.z }, '#e9dfc4', 20, 1.35);
    this.audio.play('kill', target.isPlayer || source?.isPlayer ? 0 : distance(target, this.player));
    this.addKillFeed(source, target);
    if (target === this.spectatorTarget) this.spectatorTarget = null;
    if (target.isPlayer) this.startSpectate();
  }

  addKillFeed(source, target) {
    this.killFeed.unshift({ source: source?.name || '演武场', sourceTeam: source?.teamId ?? 0, target: target.name, targetTeam: target.teamId, time: this.elapsed });
    this.killFeed = this.killFeed.slice(0, 5);
    this.renderKillFeed();
  }

  renderKillFeed() {
    this.ui['kill-feed'].innerHTML = this.killFeed.filter((item) => this.elapsed - item.time < 6).map((item) => `<div class="kill-item"><span style="color:${TEAM_DEFS[item.sourceTeam].color}">${item.source}</span><i>刃</i><b style="color:${TEAM_DEFS[item.targetTeam].color}">${item.target}</b></div>`).join('');
  }

  finishRound(winnerId) {
    if (this.phase !== 'combat') return;
    this.phase = 'roundEnd';
    this.controlGate = false;
    this.ui['control-gate'].classList.remove('is-visible');
    this.roundEndTimer = MATCH.roundEndSeconds;
    this.roundWinner = winnerId;
    for (const actor of this.actors) {
      actor.attack = null;
      actor.blocking = false;
      actor.moving = false;
      actor.lostWeapon = !actor.alive;
      const income = roundIncome({ won: actor.teamId === winnerId, kills: actor.roundKills, base: MATCH.baseIncome, winBonus: MATCH.winIncome, killBonus: MATCH.killIncome });
      actor.lastIncome = income;
      actor.money = Math.min(MATCH.maxMoney, actor.money + income);
    }
    if (winnerId !== null) {
      this.teams[winnerId].score += 1;
      if (winnerId === 0) this.audio.play('win'); else this.audio.play('stage');
    } else this.audio.play('stage');
    this.pendingMatchEnd = winnerId !== null && this.teams[winnerId].score >= this.targetScore;
    this.pendingMidMatch = !this.pendingMatchEnd && shouldTriggerMidMatch({ mode: this.mode, scores: this.teams.map((team) => team.score), trigger: Math.min(MATCH.midMatchTrigger, this.targetScore - 1), alreadyTriggered: this.midTriggered });
    this.renderRoundResult();
    this.openModal('round-screen');
    this.updateHUD(true);
  }

  renderRoundResult() {
    const won = this.roundWinner === 0;
    this.ui['round-title'].textContent = this.roundWinner === null ? '本回合平局' : won ? '本队幸存' : `${TEAM_DEFS[this.roundWinner].name}获胜`;
    this.ui['round-summary'].textContent = this.roundWinner === null ? '无队伍得分 · 所有角色获得基础收入' : `${TEAM_DEFS[this.roundWinner].name}获得 1 分 · 最后存活队伍胜利`;
    this.ui['income-summary'].textContent = `你的回合收入 +$ ${this.player.lastIncome}　（基础 ${MATCH.baseIncome}${won ? ` + 胜利 ${MATCH.winIncome}` : ''} + 击败 ${this.player.roundKills * MATCH.killIncome}）`;
    this.ui['round-standings'].innerHTML = this.standingsHTML(false);
    this.ui['continue-round-button'].querySelector('span').textContent = this.pendingMatchEnd ? '查看整场结果' : this.pendingMidMatch ? '进入中场重建' : '下一回合';
  }

  continueAfterRound() {
    if (this.phase !== 'roundEnd') return;
    this.ui['round-screen'].classList.remove('is-visible');
    this.modal = null;
    if (this.pendingMatchEnd) this.showMatchEnd();
    else if (this.pendingMidMatch) {
      this.midTriggered = true;
      this.startBuild(true);
      this.requestLock();
    } else this.startSwap();
  }

  showMatchEnd() {
    this.phase = 'matchEnd';
    const winner = [...this.teams].sort((a, b) => b.score - a.score)[0];
    const playerWon = winner.id === 0;
    this.ui['match-seal'].textContent = playerWon ? '胜' : '终';
    this.ui['match-seal'].style.borderColor = playerWon ? TEAM_DEFS[0].color : TEAM_DEFS[winner.id].color;
    this.ui['match-title'].textContent = playerWon ? '本队主宰四象' : `${TEAM_DEFS[winner.id].name}赢得演武`;
    this.ui['match-summary'].textContent = `${this.mode === 'quick' ? '快速模式' : '长局模式'} · 目标 ${this.targetScore} 分 · 共完成 ${this.round} 回合${this.midTriggered ? ' · 已完成中场重建' : ''}`;
    this.ui['match-stats'].innerHTML = `<div><strong>${this.player.totalKills}</strong><small>你的总击败</small></div><div><strong>${this.player.deaths}</strong><small>你的阵亡</small></div><div><strong>${this.teams[0].score}</strong><small>本队回合分</small></div>`;
    this.ui['match-standings'].innerHTML = this.standingsHTML(true);
    this.openModal('match-screen');
    if (playerWon) this.audio.play('win');
  }

  standingsHTML(includeKills) {
    return [...this.teams].sort((a, b) => b.score - a.score || a.id - b.id).map((team) => {
      const members = this.actors.filter((actor) => actor.teamId === team.id);
      const alive = members.filter((actor) => actor.alive).length;
      const kills = members.reduce((sum, actor) => sum + actor.totalKills, 0);
      return `<div class="standing-row" style="--team:${TEAM_DEFS[team.id].color}"><b>${String(team.id + 1).padStart(2, '0')}</b><span class="standing-name">${TEAM_DEFS[team.id].name} · ${TEAM_DEFS[team.id].title}</span><span class="standing-score">${team.score} / ${this.targetScore}</span><small>${includeKills ? `${kills} 击败` : `${alive} 人生还`}</small></div>`;
    }).join('');
  }

  startSpectate() {
    if (this.player.alive) { this.spectatorTarget = null; return; }
    const teammate = this.actors.find((actor) => actor.teamId === 0 && !actor.isPlayer && actor.alive);
    this.spectatorTarget = teammate || this.actors.find((actor) => actor.alive && actor !== this.player) || null;
  }

  cycleSpectator() {
    const alive = this.actors.filter((actor) => actor.alive && actor !== this.player);
    if (!alive.length) return;
    const sorted = alive.sort((a, b) => (a.teamId === 0 ? -1 : 1) - (b.teamId === 0 ? -1 : 1) || a.id - b.id);
    const index = sorted.indexOf(this.spectatorTarget);
    this.spectatorTarget = sorted[(index + 1) % sorted.length];
  }

  showBanner(title, subtitle = '', kicker = '') {
    const banner = this.ui['phase-banner'];
    banner.querySelector('strong').textContent = title;
    banner.querySelector('p').textContent = subtitle;
    banner.querySelector('small').textContent = kicker;
    banner.classList.add('is-visible');
    this.bannerUntil = this.elapsed + 3.1;
  }

  toast(message, duration = 2.5) {
    this.ui.toast.textContent = message;
    this.ui.toast.classList.add('is-visible');
    this.toastUntil = this.elapsed + duration;
  }

  flash(id) {
    const element = this.ui[id];
    element.classList.remove('show');
    void element.offsetWidth;
    element.classList.add('show');
  }

  renderScoreboard() {
    this.ui['team-scores'].innerHTML = this.teams.map((team) => `<div class="team-score" data-team="${team.id}" style="--team:${TEAM_DEFS[team.id].color}"><span class="team-glyph">${TEAM_DEFS[team.id].short}</span><small>${TEAM_DEFS[team.id].name}</small><span class="team-alive"><i></i><i></i></span><strong class="team-points">0</strong></div>`).join('');
  }

  updateHUD(force = false) {
    if (!this.player || this.phase === 'menu') return;
    if (!force && this.hudClock > 0) return;
    this.hudClock = 0.08;
    const player = this.player;
    const teammate = this.actors[1];
    const weapon = weaponById(player.weaponId);
    const phaseData = {
      build: ['营造阶段', this.buildTimer, `BUILD / ${this.mode === 'long' && this.midTriggered ? 'MID MATCH' : 'PREPARATION'}`, this.buildVisited ? '布置完成后按 F 准备' : '跟随标记前往本队区域'],
      swap: ['随机换区', this.swapTimer, 'SPAWN ROTATION', '队伍、资金与装备保持原身份'],
      buy: ['购买与准备', this.buyTimer, `ROUND ${String(this.round).padStart(2, '0')} / 目标 ${this.targetScore} 分`, 'B 商店 · F 提前准备'],
      combat: ['近战演武', this.combatTimer, `ROUND ${String(this.round).padStart(2, '0')} / 目标 ${this.targetScore} 分`, this.revealed ? '终局揭示 · 全图追击' : `${MATCH.revealSeconds} 秒后揭示 / 75 秒超时平局`],
      roundEnd: ['回合结算', this.roundEndTimer, 'ROUND COMPLETE', '收入已发放'],
      matchEnd: ['整场结束', 0, 'MATCH COMPLETE', '可立即开始新比赛'],
    }[this.phase] || ['', 0, '', ''];
    this.ui['phase-label'].textContent = phaseData[0];
    this.ui['phase-timer'].textContent = formatTime(phaseData[1] || 0);
    this.ui['phase-kicker'].textContent = phaseData[2];
    this.ui['phase-subtitle'].textContent = phaseData[3];
    this.ui['health-number'].textContent = Math.ceil(player.health);
    this.ui['health-fill'].style.width = `${player.health}%`;
    this.ui['health-fill'].style.background = player.health <= 30 ? '#ff3f38' : '';
    this.ui['stamina-fill'].style.width = `${player.stamina}%`;
    this.ui['dodge-label'].textContent = player.dodgeCooldown > 0 ? `闪避 ${player.dodgeCooldown.toFixed(1)}s` : 'SPACE 闪避';
    this.ui['teammate-name'].textContent = teammate.name.replace('队友 · ', '');
    this.ui['teammate-health'].style.width = `${teammate.health}%`;
    this.ui['teammate-state'].textContent = teammate.alive ? '存活' : '阵亡';
    this.ui['teammate-state'].style.color = teammate.alive ? '' : '#ed6651';
    this.ui['money-label'].textContent = `$ ${player.money}`;
    this.ui['weapon-name'].textContent = weapon.name;
    this.ui['weapon-type'].textContent = weapon.subtitle;
    this.ui['weapon-damage'].textContent = `伤害 ${weapon.damage}`;
    this.ui['weapon-range'].textContent = `距离 ${weapon.range.toFixed(1)}m`;
    this.ui['build-budget'].textContent = this.buildBudgets?.[0] ?? 0;
    this.ui['build-budget-fill'].style.width = `${this.buildBudgets?.[0] ?? 0}%`;
    const ownZone = ZONES[this.teams[0].buildZone];
    const insideOwn = zoneAt(player.x, player.z)?.id === ownZone.id;
    this.ui['build-status'].textContent = insideOwn ? '可编辑 · 通道保护中' : this.buildVisited ? '返回本队区域可继续编辑' : '先前往区域';
    this.ui['build-hud'].classList.toggle('is-visible', this.phase === 'build');
    this.ui['build-toolbar'].classList.toggle('is-visible', this.phase === 'build' && Boolean(this.selectedBuild));
    this.ui.crosshair.classList.toggle('build', this.phase === 'build');
    this.ui.crosshair.classList.toggle('invalid', this.phase === 'build' && this.selectedBuild && this.ghostPlacement && !this.ghostPlacement.valid);
    this.ui.crosshair.style.display = player.alive && ['build', 'buy', 'combat'].includes(this.phase) ? '' : 'none';
    this.ui['reveal-banner'].classList.toggle('is-visible', this.phase === 'combat' && this.revealed);
    this.ui['spectator-panel'].classList.toggle('is-visible', this.phase === 'combat' && !player.alive);
    if (this.spectatorTarget) this.ui['spectator-name'].textContent = this.spectatorTarget.name;
    this.ui['combat-hint'].innerHTML = this.phase === 'buy' ? '<kbd>B</kbd> 打开商店 <kbd>F</kbd> 准备' : '<kbd>左键</kbd> 挥刃 <kbd>右键</kbd> 格挡 <kbd>Space</kbd> 闪避';
    this.ui['map-mode-label'].textContent = this.phase === 'build' ? '营造归属' : this.revealed ? '全图揭示' : `出生 ${ZONES[this.teams[0].spawnZone]?.label || '-'} 区`;
    for (const team of this.teams) {
      const row = this.ui['team-scores'].querySelector(`[data-team="${team.id}"]`);
      if (!row) continue;
      row.querySelector('.team-points').textContent = team.score;
      const members = this.actors.filter((actor) => actor.teamId === team.id);
      row.querySelectorAll('.team-alive i').forEach((icon, index) => icon.classList.toggle('dead', !members[index].alive));
    }
    if (this.phase !== 'build') this.ui['interaction-tip'].textContent = '';
    this.updateZoneMarker(ownZone);
    this.drawMinimap();
    this.renderKillFeed();
  }

  updateZoneMarker(zone) {
    const marker = this.ui['zone-marker'];
    if (this.phase !== 'build') { marker.classList.remove('is-visible'); return; }
    marker.classList.add('is-visible');
    const projected = this.world.project(zone.cx, 2.4, zone.cz);
    let x = projected.x;
    let y = projected.y;
    if (projected.behind) { x = window.innerWidth - x; y = window.innerHeight * 0.75; }
    x = clamp(x, 90, window.innerWidth - 90);
    y = clamp(y, 180, window.innerHeight - 190);
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    marker.querySelector('strong').textContent = `${zone.label} 区 · ${zone.name}`;
    marker.querySelector('span').textContent = `${Math.round(Math.hypot(this.player.x - zone.cx, this.player.z - zone.cz))}m`;
  }

  drawMinimap() {
    const canvas = this.ui.minimap;
    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const scale = size / 40;
    const px = (x) => (x + 20) * scale;
    const pz = (z) => (z + 20) * scale;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#cfc6ad';
    ctx.fillRect(0, 0, size, size);
    for (const zone of ZONES) {
      const builder = this.teams.find((team) => team.buildZone === zone.id);
      ctx.fillStyle = `${TEAM_DEFS[builder.id].color}35`;
      ctx.fillRect(px(zone.minX), pz(zone.minZ), 15 * scale, 15 * scale);
      ctx.strokeStyle = TEAM_DEFS[builder.id].color;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(px(zone.minX), pz(zone.minZ), 15 * scale, 15 * scale);
      ctx.fillStyle = '#263a3c';
      ctx.font = '800 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(zone.label, px(zone.cx), pz(zone.cz) + 6);
    }
    for (const build of this.builds) {
      ctx.save();
      ctx.translate(px(build.x), pz(build.z));
      ctx.rotate(-build.rotation);
      ctx.fillStyle = TEAM_DEFS[build.teamId].dark;
      const type = buildTypeById(build.typeId);
      ctx.fillRect(-type.size[0] / 2 * scale, -type.size[2] / 2 * scale, type.size[0] * scale, type.size[2] * scale);
      ctx.restore();
    }
    const drawActor = (actor, color, radius, direction = false) => {
      ctx.fillStyle = color;
      ctx.strokeStyle = '#17282c';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(px(actor.x), pz(actor.z), radius, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      if (direction) {
        const f = forward(actor);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(px(actor.x), pz(actor.z)); ctx.lineTo(px(actor.x + f.x * 1.4), pz(actor.z + f.z * 1.4)); ctx.stroke();
      }
    };
    if (this.phase === 'combat' || this.phase === 'buy' || this.phase === 'roundEnd') {
      for (const actor of this.actors) {
        if (!actor.alive || actor.isPlayer) continue;
        const friendly = actor.teamId === 0;
        const visible = friendly || !this.player.alive || this.revealed || (distance(actor, this.player) < 14 && hasLineOfSight(this.player, actor, this.colliders, 1.35));
        if (visible) drawActor(actor, TEAM_DEFS[actor.teamId].color, friendly ? 4 : 3);
      }
    }
    drawActor(this.player, '#ffffff', 4.5, true);
    if (this.phase === 'build') {
      const zone = ZONES[this.teams[0].buildZone];
      ctx.strokeStyle = '#fff1ba';
      ctx.lineWidth = 3;
      ctx.strokeRect(px(zone.minX) + 2, pz(zone.minZ) + 2, 15 * scale - 4, 15 * scale - 4);
    }
  }

  updateCamera(dt) {
    if (this.phase === 'menu') return;
    this.cameraShake = Math.max(0, this.cameraShake - dt * 0.24);
    if (this.player?.alive || this.phase !== 'combat') this.world.setPlayerCamera(this.player, this.pitch, (Math.random() - 0.5) * this.cameraShake);
    else {
      if (!this.spectatorTarget?.alive) this.startSpectate();
      this.world.setSpectatorCamera(this.spectatorTarget, dt, this.elapsed, this.colliders);
    }
  }

  loop(time) {
    const dt = Math.min(0.04, Math.max(0.001, (time - this.lastTime) / 1000));
    this.lastTime = time;
    this.elapsed += dt;
    this.hudClock -= dt;
    if (this.phase === 'menu') this.world.setMenuCamera(dt);
    if (!this.paused) {
      if (this.phase === 'build') this.updateBuild(dt);
      else if (this.phase === 'swap') this.updateSwap(dt);
      else if (this.phase === 'buy') this.updateBuy(dt);
      else if (this.phase === 'combat') this.updateCombat(dt);
      else if (this.phase === 'roundEnd') {
        this.roundEndTimer -= dt;
        this.ui['round-auto-label'].textContent = `${Math.max(0, Math.ceil(this.roundEndTimer))} 秒后自动继续`;
        if (this.roundEndTimer <= 0) this.continueAfterRound();
      }
      this.world.updateEffects(dt);
      for (const actor of this.actors) this.world.updateActor(actor, dt, this.elapsed);
      this.updateCamera(dt);
      this.world.updateViewModel(this.player || { alive: false }, dt, this.elapsed, ['buy', 'combat'].includes(this.phase) && !this.modal);
      if (ACTIVE_PHASES.has(this.phase) || this.phase === 'matchEnd') this.updateHUD();
    }
    if (this.toastUntil && this.elapsed > this.toastUntil) this.ui.toast.classList.remove('is-visible');
    if (this.bannerUntil && this.elapsed > this.bannerUntil) this.ui['phase-banner'].classList.remove('is-visible');
    const zoneMarkersVisible = ['menu', 'build', 'swap'].includes(this.phase);
    for (const marker of this.world.zoneMarkers) marker.visible = zoneMarkersVisible;
    this.world.render();
    requestAnimationFrame((next) => this.loop(next));
  }

  // Small deterministic inspection API used by the included smoke checks and future maintainers.
  getDebugState() {
    return {
      phase: this.phase, mode: this.mode, targetScore: this.targetScore, round: this.round,
      midTriggered: this.midTriggered, teams: this.teams.map((team) => ({ ...team })),
      actors: this.actors.map((actor) => ({ id: actor.id, teamId: actor.teamId, isPlayer: actor.isPlayer, alive: actor.alive, health: actor.health, money: actor.money, weaponId: actor.weaponId, x: actor.x, z: actor.z })),
      builds: this.builds.map((build) => ({ id: build.id, teamId: build.teamId, zoneId: build.zoneId, typeId: build.typeId })),
      routesValid: this.teams.length ? this.validateAllRoutes() : true,
    };
  }
}
