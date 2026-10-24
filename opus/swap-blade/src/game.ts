// 游戏总装：渲染器 / 场景 / 系统 / 事件总线 / 主循环 / 调试接口。

import * as THREE from 'three';
import { CHAR_NAMES, PHYS, PLAYER_TEAM, SETTINGS_KEY, TEAMS, TIMING, type Difficulty, type ModeId } from './config';
import { clamp, damp, setSeed, smoothstep } from './util';
import { CollisionWorld } from './world/collision';
import { NavGrid } from './world/nav';
import { buildPOIs, buildStaticShapes, buildZones, type Zone } from './world/layout';
import { buildMapVisuals, type MapVisuals } from './world/mapMesh';
import { buildSky } from './render/sky';
import { PostFX } from './render/post';
import { LAYER_FX } from './render/toon';
import { Character } from './game/character';
import { AIBrain } from './game/ai';
import { BuildSystem, type PieceInst } from './game/build';
import { Combat, type HitInfo } from './game/combat';
import { Shop } from './game/shop';
import { Match, type RoundResult } from './game/match';
import { Player } from './game/player';
import { WEAPONS, type AttackDef } from './game/weapons';
import { FX } from './view/fx';
import { CharModel } from './view/charModel';
import { Viewmodel } from './view/viewmodel';
import { Audio } from './audio/audio';
import { UI } from './ui/ui';

export interface Settings {
  sens: number;
  fov: number;
  master: number;
  music: number;
  shake: boolean;
  dmgNums: boolean;
}

export interface GameEvents {
  windup(ch: Character, a: AttackDef): void;
  swing(ch: Character, a: AttackDef): void;
  dodge(ch: Character): void;
  footstep(ch: Character): void;
  hit(info: HitInfo): void;
  kill(att: Character | null, tgt: Character, atk: AttackDef | null): void;
  piecePlaced(p: PieceInst): void;
  pieceRemoved(p: PieceInst): void;
  purchase(ch: Character, text: string, ok: boolean): void;
  phase(p: string, data: Record<string, unknown>): void;
  reveal(): void;
  ringStart(): void;
  roundEnd(res: RoundResult): void;
  matchEnd(winner: number): void;
}

const DEFAULT_SETTINGS: Settings = { sens: 1, fov: 74, master: 0.8, music: 0.5, shake: true, dmgNums: true };

export class Game {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  post: PostFX;
  viewmodel: Viewmodel;
  sunDir = new THREE.Vector3(-0.42, 0.72, 0.36).normalize();
  sun: THREE.DirectionalLight;

  world = new CollisionWorld();
  nav: NavGrid;
  zones: Zone[];
  pois: { x: number; z: number; tag: string }[];
  chars: Character[] = [];
  brains: AIBrain[] = [];
  models: CharModel[] = [];
  build: BuildSystem;
  combat: Combat;
  shop: Shop;
  match: Match;
  player: Player;
  fx: FX;
  audio = new Audio();
  ui: UI;
  map: MapVisuals;
  ring: THREE.Mesh;
  ringMat: THREE.ShaderMaterial;

  time = 0;
  timeScale = 1;
  paused = false;
  headless = false;
  settings: Settings;
  events: GameEvents;
  private last = performance.now();
  private hurtT = 0;
  private flashT = 0;
  private flashColor = new THREE.Color(1, 1, 1);
  private lastHp = PHYS.maxHp;
  private menuT = 0;
  private lastTick = -1;
  private autoFilled = false;

  constructor(container: HTMLElement) {
    this.settings = this.loadSettings();

    // 渲染器
    const r = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    r.setSize(window.innerWidth, window.innerHeight);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.shadowMap.autoUpdate = false;
    container.appendChild(r.domElement);
    this.renderer = r;
    this.camera = new THREE.PerspectiveCamera(this.settings.fov, window.innerWidth / window.innerHeight, 0.05, 900);
    this.camera.layers.enable(LAYER_FX);

    // 灯光
    const hemi = new THREE.HemisphereLight(0xcfe2ff, 0xd8c09a, 1.25);
    this.scene.add(hemi);
    this.sun = new THREE.DirectionalLight(0xfff1d6, 2.35);
    this.sun.position.copy(this.sunDir).multiplyScalar(70);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -38;
    sc.right = 38;
    sc.top = 38;
    sc.bottom = -38;
    sc.near = 5;
    sc.far = 160;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.03;
    this.scene.add(this.sun, this.sun.target);
    buildSky(this.scene, this.sunDir);

    // 事件总线（各系统只通过这里通知表现层）
    this.events = this.makeEvents();

    // 世界
    this.zones = buildZones();
    this.pois = buildPOIs();
    for (const s of buildStaticShapes()) this.world.add(s);
    this.nav = new NavGrid(this.world);
    this.nav.rebuildAll();
    this.map = buildMapVisuals(this.scene, this.zones);
    this.fx = new FX(this.scene);

    // 系统
    this.match = new Match(this);
    this.build = new BuildSystem(this);
    this.combat = new Combat(this);
    this.shop = new Shop(this);

    // 角色：4 队 × 2 人，0 号是真人
    for (let id = 0; id < 8; id++) {
      const team = Math.floor(id / 2);
      const slot = id % 2;
      const ch = new Character(id, CHAR_NAMES[team][slot], team, slot, id === 0);
      this.chars.push(ch);
      if (id !== 0) {
        const b = new AIBrain(ch, this);
        ch.brain = b;
        this.brains.push(b);
      }
    }
    this.player = new Player(this, this.chars[0]);
    this.match.initTeams();
    for (const ch of this.chars) {
      const m = new CharModel(ch, this, PLAYER_TEAM);
      ch.model = m;
      this.models.push(m);
    }
    this.viewmodel = new Viewmodel(PLAYER_TEAM);
    this.post = new PostFX(r);

    // 结界
    this.ringMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0xb04dff) } },
      vertexShader: `varying vec2 vUv; varying float vY; void main(){ vUv = uv; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform float uTime; uniform vec3 uColor; varying vec2 vUv;
        void main(){
          float s = step(0.5, fract(vUv.x * 120.0 + vUv.y * 3.0 - uTime * 0.8));
          float fade = (1.0 - vUv.y);
          float a = (0.18 + 0.22 * s) * fade + smoothstep(0.0, 0.05, vUv.y) * (1.0 - smoothstep(0.05, 0.12, vUv.y)) * 0.6;
          gl_FragColor = vec4(uColor * (1.0 + s * 0.5), a);
        }`,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.ring = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 7, 96, 1, true).translate(0, 3.5, 0), this.ringMat);
    this.ring.layers.set(LAYER_FX);
    this.ring.visible = false;
    this.ring.frustumCulled = false;
    this.scene.add(this.ring);

    this.ui = new UI(this);
    this.player.attach(r.domElement);
    this.applySettings();
    this.placeMenuChars();
    this.ui.showMenu(true);

    window.addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.inGame() && !this.ui.modal) this.ui.openPause();
    });
    this.resize();
    requestAnimationFrame(this.frame);
  }

  // ---------------- 设置 ----------------

  private loadSettings(): Settings {
    try {
      const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? '{}');
      return { ...DEFAULT_SETTINGS, ...s };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }

  saveSettings() {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    } catch {
      /* 忽略 */
    }
    this.applySettings();
  }

  applySettings() {
    this.audio.setVolume(this.settings.master, this.settings.music);
  }

  // ---------------- 流程 ----------------

  inGame(): boolean {
    return this.match.phase !== 'menu';
  }

  setPaused(p: boolean) {
    this.paused = p;
    if (p) this.player.releaseAll();
  }

  startMatch(mode: ModeId) {
    this.audio.init();
    this.ui.closeAll();
    this.ui.showMenu(false);
    this.ui.resetMatchUI();
    this.fx.clear();
    this.setDifficulty(this.ui.diff);
    this.player.specTarget = null;
    this.autoFilled = false;
    this.match.newMatch(mode);
    this.lastHp = this.player.ch.hp;
    if (!this.headless && !this.ui.maybeTutorial()) this.player.lock();
  }

  quitToMenu() {
    this.player.unlock();
    this.match.phase = 'menu';
    this.build.clearAll();
    this.fx.clear();
    this.ui.resetMatchUI();
    this.ui.showMenu(true);
    this.placeMenuChars();
    this.audio.setMusic('calm');
  }

  setDifficulty(d: Difficulty) {
    for (const b of this.brains) b.setDifficulty(d);
  }

  onLockLost() {
    if (this.inGame() && this.match.phase !== 'matchEnd' && !this.ui.modal) this.ui.openPause();
  }

  /** 菜单背景：8 人在高台两两对峙 */
  private placeMenuChars() {
    this.chars.forEach((c, i) => {
      c.resetForRound();
      c.canFight = false;
      c.confine = null;
      const a = (Math.floor(i / 2) / 4) * Math.PI * 2 + Math.PI / 4;
      const side = i % 2 ? 1 : -1;
      const cx = Math.cos(a) * 2.4;
      const cz = Math.sin(a) * 2.4;
      const tx = -Math.sin(a) * side * 0.9;
      const tz = Math.cos(a) * side * 0.9;
      c.place(cx + tx, cz + tz, Math.atan2(tx, tz));
    });
  }

  // ---------------- 事件 ----------------

  private hearing(src: Character, radius: number) {
    for (const b of this.brains) if (b.ch.team !== src.team) b.hear(src, radius);
  }

  private makeEvents(): GameEvents {
    return {
      windup: (ch, a) => {
        if (!this.headless) this.audio.windup(!!a.hyper, ch.pos.x, ch.pos.z);
        this.hearing(ch, 7);
      },
      swing: (ch, a) => {
        if (!this.headless) this.audio.swing(a.weight, ch.pos.x, ch.pos.z, ch.isPlayer && this.player.firstPerson);
        this.hearing(ch, 11);
      },
      dodge: (ch) => {
        if (this.headless) return;
        this.audio.dodge(ch.pos.x, ch.pos.z, ch.isPlayer);
        this.fx.dust(ch.pos.x, ch.pos.y, ch.pos.z, 6, 0.3);
      },
      footstep: (ch) => {
        const sprint = ch.speed2D > 5.5;
        this.hearing(ch, sprint ? 9 : 5.5);
        if (!this.headless) this.audio.footstep(ch.pos.x, ch.pos.z, ch === this.player.ch, sprint);
      },
      hit: (info) => this.onHit(info),
      kill: (att, tgt, atk) => this.onKill(att, tgt, atk),
      piecePlaced: (p) => {
        if (this.headless) return;
        this.audio.place(p.cx, p.cz);
        this.fx.dust(p.cx, 0, p.cz, 12, 1.1);
      },
      pieceRemoved: (p) => {
        if (this.headless) return;
        this.audio.remove(p.cx, p.cz);
        this.fx.dust(p.cx, 0, p.cz, 8, 0.9, 0xfff3d8);
      },
      purchase: (ch, text, ok) => {
        if (this.headless || ch !== this.player.ch) return;
        this.audio.buy(ok);
        this.ui.onPurchase(text, ok);
      },
      phase: (p, data) => this.onPhase(p, data),
      reveal: () => {
        if (this.headless) return;
        this.audio.phase('reveal');
        this.ui.onReveal();
      },
      ringStart: () => {
        if (this.headless) return;
        this.audio.phase('ring');
        this.ui.onRing();
      },
      roundEnd: (res) => {
        if (this.headless) return;
        this.audio.phase(res.winner === null ? 'draw' : res.winner === PLAYER_TEAM ? 'win' : 'lose');
        this.audio.setMusic('calm');
        this.ui.onRoundEnd(res);
      },
      matchEnd: (w) => {
        if (this.headless) return;
        this.audio.phase('match');
        this.player.unlock();
        this.ui.onMatchEnd(w);
      },
    };
  }

  private onHit(info: HitInfo) {
    const { att, tgt, kind } = info;
    // 队友支援：一方交战时通知双方队友大致位置
    if (att) {
      for (const m of this.match.teams[tgt.team].members) if (m !== tgt) m.brain?.hear(att, 40);
      for (const m of this.match.teams[att.team].members) if (m !== att) m.brain?.hear(tgt, 40);
    }
    if (this.headless) return;
    const heavy = info.atk?.weight === 'heavy';
    const me = this.player.ch;
    const mine = att === me || tgt === me;
    switch (kind) {
      case 'hit':
        this.fx.hit(info.x, info.y, info.z, TEAMS[att?.team ?? tgt.team].color, heavy);
        this.fx.slashMark(info.x, info.y, info.z, 0xffffff);
        this.audio.hit(heavy, info.x, info.z, mine);
        break;
      case 'blocked':
        this.fx.blocked(info.x, info.y, info.z);
        this.audio.blocked(info.x, info.z);
        break;
      case 'parry':
        this.fx.parry(info.x, info.y, info.z);
        this.audio.parry(info.x, info.z);
        break;
      case 'guardbreak':
        this.fx.guardBreak(info.x, info.y, info.z);
        this.audio.guardBreak(info.x, info.z);
        break;
      case 'dodged':
        this.fx.dodged(tgt.pos.x, tgt.pos.y + 1, tgt.pos.z);
        this.audio.dodge(tgt.pos.x, tgt.pos.z, tgt === me);
        break;
    }
    const hud = this.ui.hud;
    const fy = tgt.pos.y + 2.05;
    if (att === me) {
      hud.hitMarker(kind, info.killed);
      if (kind === 'parry') {
        this.flashT = 0.12;
        this.flashColor.set(0x9fe6ff);
      }
    }
    if (tgt === me && (kind === 'hit' || kind === 'guardbreak') && att) {
      hud.damageFrom(att.pos.x, att.pos.z);
      this.audio.hurt();
      this.hurtT = Math.min(1, this.hurtT + 0.45 + info.damage / 120);
    }
    if (tgt === me && kind === 'parry' && att) {
      this.flashT = 0.1;
      this.flashColor.set(0x9fe6ff);
    }
    if (mine) {
      this.player.onHit(info);
      if (kind === 'hit') hud.floater(`${info.damage}${info.back ? ' 背刺' : ''}`, tgt.pos.x, fy, tgt.pos.z, tgt === me ? '#ff8a80' : info.back ? '#ffcf4a' : '#ffffff', info.damage >= 50 ? 'big' : '');
      else if (kind === 'blocked') hud.floater('格挡', tgt.pos.x, fy, tgt.pos.z, '#ffd27a', 'word');
      else if (kind === 'parry') hud.floater('弹反！', tgt.pos.x, fy, tgt.pos.z, '#9fe6ff', 'word big');
      else if (kind === 'guardbreak') hud.floater(`破防 ${info.damage}`, tgt.pos.x, fy, tgt.pos.z, '#ff8a3d', 'word big');
      else if (kind === 'dodged') hud.floater('闪避', tgt.pos.x, fy, tgt.pos.z, '#dde6ff', 'word');
    }
  }

  private onKill(att: Character | null, tgt: Character, atk: AttackDef | null) {
    this.match.onKill(att, tgt, atk);
    if (this.headless) return;
    const me = this.player.ch;
    this.ui.hud.killFeed(att, tgt, atk);
    this.audio.kill(tgt.pos.x, tgt.pos.z, att === me);
    if (att === me) {
      this.flashT = 0.16;
      this.flashColor.set(0xffffff);
      this.ui.hud.banner('斩！', `击败 <span style="color:${TEAMS[tgt.team].css}">${TEAMS[tgt.team].short}·${tgt.name}</span> · +$${WEAPONS[att.weapon].killReward}`, TEAMS[tgt.team].css, 1.6);
    }
    if (tgt === me) {
      this.audio.death();
      const by = att ? `被 <span style="color:${TEAMS[att.team].css}">${TEAMS[att.team].short}·${att.name}</span> 击败` : '被结界吞没';
      this.ui.hud.banner('阵亡', `${by} · 本回合不复活，切换为观战`, '#1b1622', 2.6);
      this.player.specTarget = null;
    }
  }

  private onPhase(p: string, data: Record<string, unknown>) {
    if (p === 'build') {
      for (const t of this.match.teams) this.map.setZoneBuilder(t.buildZone, t.id);
      this.autoFilled = false;
    }
    if (this.headless) return;
    switch (p) {
      case 'build':
        this.audio.phase(data.isRebuild ? 'midgame' : 'build');
        this.audio.setMusic('calm');
        this.fx.clear();
        break;
      case 'lock':
        this.audio.phase('lock');
        break;
      case 'swap':
        this.audio.phase('swap');
        break;
      case 'buy':
        this.audio.phase('buy');
        this.audio.setMusic('calm');
        break;
      case 'combat':
        this.audio.phase('combat');
        this.audio.setMusic('combat');
        break;
    }
    this.ui.onPhase(p, data);
  }

  // ---------------- 主循环 ----------------

  private frame = (now: number) => {
    requestAnimationFrame(this.frame);
    const raw = clamp((now - this.last) / 1000, 0, 0.05);
    this.last = now;
    const dt = this.paused ? 0 : raw * this.timeScale;
    if (dt > 0) this.tick(dt);
    this.render(raw, dt);
  };

  private tick(dt: number) {
    this.player.update(dt);
    const n = Math.max(1, Math.ceil(dt / (1 / 60) - 1e-6));
    const h = dt / n;
    for (let i = 0; i < n; i++) this.step(h);
  }

  /** 一个固定子步：输入 → AI → 角色 → 分离 → 判定 → 流程 */
  step(h: number) {
    this.time += h;
    const m = this.match;
    if (m.phase === 'menu') return;
    if (m.phase === 'build' && !m.playerReadyBuild) {
      const zoneEmpty = () => this.build.piecesInZone(m.teams[PLAYER_TEAM].buildZone).length === 0;
      if (this.player.autopilot && m.phaseTime > 1.5) {
        this.build.autoFill(PLAYER_TEAM);
        m.confirmPlayerBuildReady();
      } else if (m.timer <= h * 2 && !this.autoFilled && zoneEmpty()) {
        // 时间到但玩家一个构件都没放：由队友按模板布置，避免空区
        this.autoFilled = true;
        const n = this.build.autoFill(PLAYER_TEAM);
        if (!this.headless && n > 0) this.ui.toast(`时间到：队友替你布置了 ${n} 个构件`, 'info');
      }
    }
    if (this.player.autopilot && m.phase === 'buy' && !m.playerReadyBuy && m.phaseTime > 4) m.confirmPlayerBuyReady();
    for (const b of this.brains) b.update(h);
    for (const c of this.chars) c.update(h, this);
    this.separate();
    this.combat.step();
    m.update(h);
    this.build.animate(this.time);
  }

  /** 角色之间互相推开（同一高度层） */
  private separate() {
    const cs = this.chars;
    const R = PHYS.radius * 2;
    for (let i = 0; i < cs.length; i++) {
      const a = cs[i];
      if (!a.alive) continue;
      for (let j = i + 1; j < cs.length; j++) {
        const b = cs[j];
        if (!b.alive || Math.abs(a.pos.y - b.pos.y) > 1.2) continue;
        const dx = b.pos.x - a.pos.x;
        const dz = b.pos.z - a.pos.z;
        const d2 = dx * dx + dz * dz;
        if (d2 >= R * R) continue;
        const d = Math.sqrt(d2) || 0.001;
        const push = (R - d) / 2;
        const nx = d2 > 1e-8 ? dx / d : 1;
        const nz = d2 > 1e-8 ? dz / d : 0;
        a.pos.x -= nx * push;
        a.pos.z -= nz * push;
        b.pos.x += nx * push;
        b.pos.z += nz * push;
        for (const c of [a, b]) {
          this.world.resolveCircle(c.pos, PHYS.radius, c.pos.y, c.pos.y + PHYS.height, PHYS.step);
          if (c.confine) {
            const k = c.confine;
            const rr = PHYS.radius + 0.05;
            c.pos.x = clamp(c.pos.x, k.minX + rr, k.maxX - rr);
            c.pos.z = clamp(c.pos.z, k.minZ + rr, k.maxZ - rr);
          }
        }
      }
    }
  }

  private render(raw: number, dt: number) {
    const m = this.match;
    const me = this.player.ch;
    const cam = this.camera;
    const phase = m.phase;

    // 镜头
    if (phase === 'menu') {
      this.menuT += raw;
      const a = this.menuT * 0.06 + 0.6;
      cam.position.set(Math.cos(a) * 15, 5.2, Math.sin(a) * 15);
      cam.lookAt(0, 2.0, 0);
      if (cam.fov !== 60) {
        cam.fov = 60;
        cam.updateProjectionMatrix();
      }
    } else this.player.updateCamera(raw, cam);
    cam.updateMatrixWorld();
    const camYaw = Math.atan2(-cam.matrixWorld.elements[8], -cam.matrixWorld.elements[10]);
    this.audio.setListener(cam.position.x, cam.position.z, camYaw);

    // 角色模型
    for (const md of this.models) md.update(dt, cam);
    this.models[0].setVisible(phase === 'menu' || !this.player.firstPerson);

    // 地图状态
    const myBuild = m.teams[PLAYER_TEAM]?.buildZone ?? 0;
    const building = phase === 'build';
    this.map.overlays.forEach((o, i) => (o.visible = building && i === myBuild));
    this.map.zoneLabels.forEach((l) => (l.visible = building || phase === 'swap' || phase === 'lock'));
    this.map.beacon.visible = building;
    if (building) {
      const z = this.zones[myBuild];
      this.map.beacon.position.x = z.center.x;
      this.map.beacon.position.z = z.center.z;
      const bu = (this.map.beacon.material as THREE.ShaderMaterial).uniforms;
      bu.uTime.value = this.time;
      const bd = Math.hypot(cam.position.x - z.center.x, cam.position.z - z.center.z);
      bu.uFade.value = 0.12 + 0.88 * smoothstep(4, 14, bd);
    }
    this.map.barriers.forEach((b, i) => {
      const show = (phase === 'swap' || phase === 'buy') && m.teams.length > 0;
      b.visible = show;
      if (show) {
        const t = m.teams.find((x) => x.spawnZone === i);
        const mat = (b as unknown as THREE.Object3D).userData.mat as THREE.ShaderMaterial;
        mat.uniforms.uTime.value = this.time;
        if (t) (mat.uniforms.uColor.value as THREE.Color).set(TEAMS[t.id].color);
      }
    });
    this.ring.visible = phase === 'combat' && m.ring.active;
    if (this.ring.visible) {
      this.ring.scale.set(m.ring.r, 1, m.ring.r);
      this.ringMat.uniforms.uTime.value = this.time;
    }

    // 特效
    this.fx.setScale(this.post.h, cam.fov, cam.position);
    this.fx.update(dt);

    // 第一人称武器
    const vmVisible = phase !== 'menu' && this.player.firstPerson && me.alive && !(phase === 'swap' && m.phaseTime < TIMING.swap - 0.35);
    this.viewmodel.update(dt, me, this.time, {
      build: phase === 'build',
      lookDX: this.player.lookDX,
      lookDY: this.player.lookDY,
      sunDir: this.sunDir,
      camQuat: cam.quaternion,
      visible: vmVisible,
    });
    this.player.lookDX = 0;
    this.player.lookDY = 0;

    // 受击红边 / 低血量 / 阵亡去饱和 / 闪光
    if (me.hp < this.lastHp && me.alive) this.hurtT = Math.max(this.hurtT, 0.5);
    this.lastHp = me.hp;
    this.hurtT = damp(this.hurtT, 0, 2.8, raw);
    const low = me.alive && me.hp < 35 && phase === 'combat' ? 0.25 + 0.12 * Math.sin(this.time * 6) : 0;
    const u = this.post.compMat.uniforms;
    u.uHurt.value = Math.min(1, Math.max(this.hurtT, low));
    u.uDesat.value = damp(u.uDesat.value as number, !me.alive && phase !== 'menu' ? 0.55 : 0, 4, raw);
    this.flashT = Math.max(0, this.flashT - raw);
    u.uFlash.value = this.flashT > 0 ? (this.flashT / 0.16) * 0.35 : 0;
    (u.uFlashColor.value as THREE.Color).copy(this.flashColor);

    // 倒计时提示音
    if (!this.headless && (phase === 'buy' || phase === 'combat' || phase === 'build')) {
      const s = Math.ceil(m.timer);
      if (s !== this.lastTick && s <= 5 && s >= 1 && !this.paused) this.audio.tick(s <= 3);
      this.lastTick = s;
    }

    this.post.render(this.scene, cam, vmVisible ? this.viewmodel.scene : null, this.viewmodel.camera);
    this.ui.update(raw);
  }

  private resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.viewmodel.setAspect(w / h);
    const pr = this.renderer.getPixelRatio();
    this.post.setSize(Math.floor(w * pr), Math.floor(h * pr));
  }

  // ---------------- 调试 ----------------

  setAutopilot(on: boolean) {
    const ch = this.player.ch;
    if (on && !this.player.autopilot) {
      const b = new AIBrain(ch, this);
      b.autopilot = true;
      b.setDifficulty(this.ui.diff);
      this.player.autopilot = b;
      ch.brain = b;
      this.brains.push(b);
    } else if (!on && this.player.autopilot) {
      this.brains = this.brains.filter((b) => b !== this.player.autopilot);
      this.player.autopilot = null;
      ch.brain = null;
    }
  }

  /** 无渲染快进：用于自动化验证整局流程 */
  simulate(seconds: number, h = 1 / 60) {
    const steps = Math.round(seconds / h);
    for (let i = 0; i < steps; i++) {
      this.step(h);
      if (this.match.phase === 'matchEnd' || this.match.phase === 'menu') break;
    }
  }

  /** 自动打完一整局并返回记录 */
  runMatch(mode: ModeId, opts: { seed?: number; maxSeconds?: number } = {}) {
    if (opts.seed !== undefined) setSeed(opts.seed);
    const prevHeadless = this.headless;
    this.headless = true;
    this.setAutopilot(true);
    this.ui.closeAll();
    this.ui.showMenu(false);
    this.setDifficulty(this.ui.diff);
    this.match.newMatch(mode);
    const builds: { at: number; zones: number[]; pieces: number[] }[] = [];
    let lastPhase = '';
    let simT = 0;
    const max = opts.maxSeconds ?? 4000;
    const h = 1 / 60;
    const moneyCheck: string[] = [];
    while (simT < max && this.match.phase !== 'matchEnd') {
      this.step(h);
      simT += h;
      const p = this.match.phase;
      if (p !== lastPhase) {
        if (p === 'lock') builds.push({ at: this.match.round, zones: this.match.teams.map((t) => t.buildZone), pieces: this.zones.map((z) => this.build.piecesInZone(z.idx).length) });
        lastPhase = p;
      }
      for (const c of this.chars) if (c.money < 0) moneyCheck.push(`${c.name} money<0`);
    }
    const res = {
      mode,
      finished: this.match.phase === 'matchEnd',
      simSeconds: Math.round(simT),
      rounds: this.match.round,
      winner: this.match.winner,
      scores: this.match.teams.map((t) => t.score),
      history: this.match.history.slice(),
      swapLog: this.match.swapLog.slice(),
      midgameDone: this.match.midgameDone,
      builds,
      money: this.chars.map((c) => c.money),
      moneyErrors: moneyCheck.slice(0, 5),
      kills: this.chars.map((c) => c.kills),
    };
    this.setAutopilot(false);
    this.headless = prevHeadless;
    return res;
  }
}
