// 真人玩家：键鼠输入、第一人称镜头、建造模式（预览/旋转/放置/删除/撤销）、观战镜头与换区运镜。
// 任何菜单打开时都不处理视角与攻击输入；指针锁定由这里统一管理。

import * as THREE from 'three';
import { BUILD, PHYS, PLAYER_TEAM, TIMING } from '../config';
import { clamp, damp, ease, lerp } from '../util';
import { LAYER_FX, setLayerFX } from '../render/toon';
import { PIECES, PIECE_ORDER, buildPieceMesh, footprint, snapPiece, type PieceType } from '../world/pieces';
import { AIBrain } from './ai';
import type { Character } from './character';
import type { PieceInst, Validation } from './build';
import type { HitInfo } from './combat';
import type { Game } from '../game';

const _e = new THREE.Euler(0, 0, 0, 'YXZ');
const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _m = new THREE.Matrix4();

export class Player {
  ch: Character;
  firstPerson = true;
  /** 建造预览点（AI 队友据此避让） */
  ghostPos: { x: number; z: number } | null = null;
  autopilot: AIBrain | null = null;

  keys = new Set<string>();
  mouseL = false;
  mouseR = false;
  locked = false;
  /** 指针锁定不可用时的兼容模式：不锁定也能用鼠标移动/方向键转视角 */
  fallback = false;
  private lockAt = 0;
  private wantLock = false;
  lookDX = 0;
  lookDY = 0;

  // 建造
  pieceIdx = 0;
  rot = 0;
  private ghost: THREE.Group | null = null;
  private ghostType: PieceType | null = null;
  private ghostValid = false;
  private vKey = '';
  private vTime = 0;
  private lastV: Validation = { ok: false, reason: '' };
  buildMsg = '';
  buildOk = false;
  targetPiece: PieceInst | null = null;
  private cells: THREE.Mesh[] = [];
  private hl: THREE.Mesh;
  private matOk = new THREE.MeshBasicMaterial({ color: 0x8dffb0, transparent: true, opacity: 0.42, depthWrite: false });
  private matBad = new THREE.MeshBasicMaterial({ color: 0xff5d5d, transparent: true, opacity: 0.42, depthWrite: false });
  private cellOk = new THREE.MeshBasicMaterial({ color: 0x8dffb0, transparent: true, opacity: 0.55, depthWrite: false });
  private cellBad = new THREE.MeshBasicMaterial({ color: 0xff5d5d, transparent: true, opacity: 0.55, depthWrite: false });

  // 观战
  specTarget: Character | null = null;
  private specYaw = 0;
  private specPitch = -0.28;
  private specOrbit = 0;
  private specOrbitT = 0;
  private camPos = new THREE.Vector3();
  private camLook = new THREE.Vector3();
  private eyeY = 0;

  // 镜头效果
  private shake = 0;
  private kick = 0;
  private roll = 0;
  fovKick = 0;
  private swapFromPos = new THREE.Vector3();
  private swapFromQuat = new THREE.Quaternion();

  constructor(private g: Game, ch: Character) {
    this.ch = ch;
    const cellGeo = new THREE.PlaneGeometry(0.94, 0.94).rotateX(-Math.PI / 2);
    for (let i = 0; i < 6; i++) {
      const m = new THREE.Mesh(cellGeo, this.cellOk);
      m.visible = false;
      m.renderOrder = 5;
      m.layers.set(LAYER_FX);
      g.scene.add(m);
      this.cells.push(m);
    }
    this.hl = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.35, depthWrite: false }));
    this.hl.visible = false;
    this.hl.renderOrder = 6;
    this.hl.layers.set(LAYER_FX);
    g.scene.add(this.hl);
  }

  // ---------------- 输入 ----------------

  attach(canvas: HTMLCanvasElement) {
    window.addEventListener('keydown', (e) => this.onKey(e, true));
    window.addEventListener('keyup', (e) => this.onKey(e, false));
    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouseL = false;
      if (e.button === 2) this.mouseR = false;
    });
    window.addEventListener('wheel', (e) => this.onWheel(e), { passive: true });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('blur', () => this.releaseAll());
    document.addEventListener('pointerlockchange', () => {
      const was = this.locked;
      this.locked = document.pointerLockElement === canvas;
      if (this.locked) {
        this.lockAt = performance.now();
        this.fallback = false;
        this.g.ui.setResumePrompt(false);
      } else {
        this.releaseAll();
        if (was && !this.g.ui.modal) this.g.onLockLost();
      }
    });
    document.addEventListener('pointerlockerror', () => {
      this.locked = false;
      this.lockFailed();
    });
    canvas.addEventListener('click', () => {
      if (!this.locked && !this.fallback && !this.g.ui.modal && this.g.inGame()) this.lock();
    });
  }

  lock() {
    this.wantLock = true;
    const c = this.g.renderer.domElement;
    try {
      const r = c.requestPointerLock() as unknown as Promise<void> | undefined;
      if (r && typeof r.catch === 'function') r.catch(() => this.lockFailed());
    } catch {
      this.lockFailed();
    }
  }

  private lockFailed() {
    if (!this.wantLock || this.locked || this.g.ui.modal || !this.g.inGame()) return;
    if (!this.fallback) {
      this.fallback = true;
      this.g.ui.toast('当前环境无法锁定鼠标：已切换兼容模式（移动鼠标或方向键转视角）', 'warn');
    }
    this.g.ui.setResumePrompt(false);
  }

  unlock() {
    this.wantLock = false;
    if (document.pointerLockElement) document.exitPointerLock();
  }

  releaseAll() {
    this.keys.clear();
    this.mouseL = this.mouseR = false;
    this.ch.input.block = false;
    this.ch.input.fwd = this.ch.input.right = 0;
    this.ch.input.sprint = false;
  }

  /** 是否允许游戏内操作（无菜单且已锁定鼠标） */
  get active(): boolean {
    return (this.locked || this.fallback) && !this.g.ui.modal && this.g.inGame();
  }

  private onKey(e: KeyboardEvent, down: boolean) {
    const code = e.code;
    if (code === 'Tab') {
      e.preventDefault();
      if (this.g.inGame()) this.g.ui.showScoreboard(down);
      return;
    }
    if (!down) {
      this.keys.delete(code);
      return;
    }
    if (e.repeat) return;
    // 菜单打开时，键盘交给 UI（UI 自己处理 Esc / B / 数字键）
    if (this.g.ui.modal) {
      this.g.ui.onModalKey(e);
      return;
    }
    if (!this.g.inGame()) return;
    if (code === 'Escape') {
      this.g.ui.openPause();
      return;
    }
    if (!this.locked && !this.fallback) {
      // 未锁定时只响应少数按键
      if (code === 'Enter') this.lock();
      return;
    }
    if (code.startsWith('Arrow')) e.preventDefault();
    this.keys.add(code);
    const phase = this.g.match.phase;
    if (code === 'KeyB' && phase === 'buy') {
      this.g.ui.openShop();
      return;
    }
    if (code === 'KeyH' || code === 'F1') {
      e.preventDefault();
      this.g.ui.openHelp();
      return;
    }
    if (this.autopilot) return;
    if (phase === 'build' && this.ch.alive) {
      if (code.startsWith('Digit')) {
        const n = parseInt(code.slice(5), 10) - 1;
        if (n >= 0 && n < PIECE_ORDER.length) this.selectPiece(n);
      } else if (code === 'KeyR') {
        this.rot = (this.rot + 1) % 4;
        this.vKey = '';
        this.g.audio.ui();
      } else if (code === 'KeyZ') {
        this.g.ui.toast(this.g.build.undo(PLAYER_TEAM), 'info');
        this.vKey = '';
      } else if (code === 'KeyF') {
        this.teammateFill();
      } else if (code === 'KeyX' || code === 'Delete' || code === 'Backspace') {
        this.deleteTarget();
      } else if (code === 'Enter' || code === 'KeyG') {
        this.readyBuild();
      }
      return;
    }
    if (phase === 'buy' && (code === 'Enter' || code === 'KeyG')) {
      this.g.match.confirmPlayerBuyReady();
      this.g.ui.toast('已准备就绪，即将开战', 'ok');
      return;
    }
    if (code === 'Space' && this.ch.alive) {
      e.preventDefault();
      this.ch.input.dodge = true;
    }
  }

  private onMouseMove(e: MouseEvent) {
    if (!this.active) return;
    const s = 0.0022 * this.g.settings.sens;
    const dx = clamp(e.movementX, -250, 250);
    const dy = clamp(e.movementY, -250, 250);
    this.lookDX += dx;
    this.lookDY += dy;
    if (this.ch.alive && this.firstPerson && !this.autopilot) {
      if (this.g.match.phase === 'swap' && this.g.match.phaseTime < TIMING.swap - 1.2) return;
      this.ch.yaw -= dx * s;
      this.ch.pitch = clamp(this.ch.pitch - dy * s, -1.45, 1.45);
    } else {
      this.specOrbit -= dx * s;
      this.specPitch = clamp(this.specPitch - dy * s, -1.0, 0.45);
      this.specOrbitT = 2.5;
    }
  }

  private onMouseDown(e: MouseEvent) {
    if (!this.active) return;
    // 刚锁定鼠标的那次点击不算攻击
    if (performance.now() - this.lockAt < 180) return;
    if (e.button === 0) this.mouseL = true;
    if (e.button === 2) this.mouseR = true;
    this.mouseAction(e.button);
  }

  /** 鼠标按下的游戏行为（调试接口也会直接调用） */
  mouseAction(button: number) {
    if (this.autopilot) return;
    const ch = this.ch;
    const phase = this.g.match.phase;
    if (!ch.alive) {
      if (button === 0) this.cycleSpec(1);
      if (button === 2) this.cycleSpec(-1);
      return;
    }
    if (phase === 'build') {
      if (button === 0) this.placeGhost();
      if (button === 2) this.deleteTarget();
      return;
    }
    if (button === 0 && ch.canFight) ch.input.attack = true;
  }

  private onWheel(e: WheelEvent) {
    if (!this.active || this.g.match.phase !== 'build') return;
    const n = PIECE_ORDER.length;
    this.selectPiece((this.pieceIdx + (e.deltaY > 0 ? 1 : n - 1)) % n);
  }

  selectPiece(n: number) {
    this.pieceIdx = n;
    this.vKey = '';
    this.g.audio.ui();
  }

  /** 每帧：把按键状态写入角色输入 */
  update(dt: number) {
    const ch = this.ch;
    if (this.autopilot) {
      this.ghostPos = null;
      this.hideBuild();
      return;
    }
    const act = this.active && ch.alive;
    const k = this.keys;
    if (act && this.firstPerson) {
      // 方向键转视角（无障碍 / 兼容模式）
      const yr = (k.has('ArrowRight') ? 1 : 0) - (k.has('ArrowLeft') ? 1 : 0);
      const pr = (k.has('ArrowUp') ? 1 : 0) - (k.has('ArrowDown') ? 1 : 0);
      if (yr || pr) {
        ch.yaw -= yr * 2.4 * dt * this.g.settings.sens;
        ch.pitch = clamp(ch.pitch + pr * 1.6 * dt * this.g.settings.sens, -1.45, 1.45);
        this.lookDX += yr * 6;
      }
    }
    ch.input.fwd = act ? (k.has('KeyW') ? 1 : 0) - (k.has('KeyS') ? 1 : 0) : 0;
    ch.input.right = act ? (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0) : 0;
    ch.input.sprint = act && (k.has('ShiftLeft') || k.has('ShiftRight'));
    const phase = this.g.match.phase;
    ch.input.block = act && this.mouseR && phase !== 'build';
    if (phase === 'swap' && this.g.match.phaseTime < TIMING.swap - 1.2) {
      ch.input.fwd = ch.input.right = 0;
    }
    if (phase === 'build' && ch.alive) this.updateBuild(dt);
    else {
      this.ghostPos = null;
      this.hideBuild();
    }
    if (this.specOrbitT > 0) this.specOrbitT -= dt;
  }

  // ---------------- 建造 ----------------

  private hideBuild() {
    if (this.ghost) this.ghost.visible = false;
    for (const c of this.cells) c.visible = false;
    this.hl.visible = false;
    this.targetPiece = null;
  }

  private ensureGhost(type: PieceType) {
    if (this.ghostType === type && this.ghost) return;
    if (this.ghost) {
      this.g.scene.remove(this.ghost);
      this.ghost.traverse((o) => (o as THREE.Mesh).geometry?.dispose());
    }
    this.ghost = buildPieceMesh(type, 0xffffff, this.matOk);
    this.ghost.traverse((o) => {
      o.renderOrder = 7;
      (o as THREE.Mesh).castShadow = false;
    });
    setLayerFX(this.ghost);
    this.g.scene.add(this.ghost);
    this.ghostType = type;
    this.ghostValid = true;
  }

  private updateBuild(dt: number) {
    void dt;
    const g = this.g;
    const ch = this.ch;
    const type = PIECE_ORDER[this.pieceIdx];
    const R = BUILD.reach;
    const ex = ch.pos.x;
    const ey = ch.pos.y + PHYS.eye;
    const ez = ch.pos.z;
    const cp = Math.cos(ch.pitch);
    const dx = ch.fwdX * cp;
    const dy = Math.sin(ch.pitch);
    const dz = ch.fwdZ * cp;
    const bx = ex + dx * R;
    const by = ey + dy * R;
    const bz = ez + dz * R;
    const tP = g.world.raycast(ex, ey, ez, bx, by, bz, (c) => c.tag === 'piece');
    const hitPiece = tP < 1 ? (g.world.lastHit?.owner as PieceInst | null) : null;
    const tS = g.world.raycast(ex, ey, ez, bx, by, bz, (c) => c.tag !== 'piece' && c.move);
    const tG = dy < -0.02 ? ey / -dy / R : 2;
    this.targetPiece = null;
    this.hl.visible = false;

    if (hitPiece && tP <= Math.min(tS, tG)) {
      // 瞄准已有构件：高亮，右键删除
      this.targetPiece = hitPiece;
      if (this.ghost) this.ghost.visible = false;
      for (const c of this.cells) c.visible = false;
      this.ghostPos = null;
      let minX = Infinity;
      let maxX = -Infinity;
      let minZ = Infinity;
      let maxZ = -Infinity;
      let maxY = 0;
      for (const c of hitPiece.colliders) {
        minX = Math.min(minX, c.minX);
        maxX = Math.max(maxX, c.maxX);
        minZ = Math.min(minZ, c.minZ);
        maxZ = Math.max(maxZ, c.maxZ);
        maxY = Math.max(maxY, c.maxY);
      }
      const mine = hitPiece.team === PLAYER_TEAM;
      (this.hl.material as THREE.MeshBasicMaterial).color.set(mine ? 0xffd23f : 0xff5d5d);
      this.hl.position.set((minX + maxX) / 2, maxY / 2, (minZ + maxZ) / 2);
      this.hl.scale.set(maxX - minX + 0.12, maxY + 0.12, maxZ - minZ + 0.12);
      this.hl.visible = true;
      const def = PIECES[hitPiece.type];
      this.buildOk = mine;
      this.buildMsg = mine ? `右键删除「${def.name}」· 退还 ${def.cost} 预算` : '不能删除其他队伍的构件';
      return;
    }

    let hx: number;
    let hz: number;
    if (tG <= 1 && tG <= tS) {
      hx = ex + dx * R * tG;
      hz = ez + dz * R * tG;
    } else {
      const dist = tS < 1 ? Math.max(0.5, R * tS * cp - 0.7) : Math.min(R - 1, 5.5);
      hx = ex + ch.fwdX * dist;
      hz = ez + ch.fwdZ * dist;
    }
    const [cx, cz] = snapPiece(type, hx, hz);
    this.ghostPos = { x: cx, z: cz };
    const key = `${type},${cx},${cz},${this.rot},${g.nav.version}`;
    if (key !== this.vKey || g.time - this.vTime > 0.25) {
      this.vKey = key;
      this.vTime = g.time;
      let v = g.build.validate(PLAYER_TEAM, type, cx, cz, this.rot);
      if (v.ok && Math.hypot(cx - ex, cz - ez) > R + 0.5) v = { ok: false, reason: '超出建造距离（靠近一些）' };
      this.lastV = v;
    }
    const v = this.lastV;
    this.ensureGhost(type);
    const gh = this.ghost!;
    gh.visible = true;
    gh.position.set(cx, 0.02, cz);
    gh.rotation.y = (-this.rot * Math.PI) / 2;
    if (v.ok !== this.ghostValid) {
      this.ghostValid = v.ok;
      const m = v.ok ? this.matOk : this.matBad;
      gh.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).material = m;
      });
    }
    const fp = footprint(type, cx, cz, this.rot);
    this.cells.forEach((c, i) => {
      const cell = fp.cells[i];
      c.visible = !!cell;
      if (cell) {
        c.position.set(cell[0] + 0.5, 0.035, cell[1] + 0.5);
        c.material = v.ok ? this.cellOk : this.cellBad;
      }
    });
    const def = PIECES[type];
    this.buildOk = v.ok;
    this.buildMsg = v.ok ? `左键放置「${def.name}」· 消耗 ${def.cost}` : v.reason;
  }

  private placeGhost() {
    const g = this.g;
    if (this.targetPiece) {
      g.ui.toast('这里已有构件：右键可删除', 'warn');
      g.audio.denied();
      return;
    }
    if (!this.ghostPos) return;
    const type = PIECE_ORDER[this.pieceIdx];
    const v = g.build.validate(PLAYER_TEAM, type, this.ghostPos.x, this.ghostPos.z, this.rot);
    if (!v.ok || !this.lastV.ok) {
      g.ui.toast(v.ok ? this.lastV.reason : v.reason, 'bad');
      g.audio.denied();
      return;
    }
    const p = g.build.place(PLAYER_TEAM, type, this.ghostPos.x, this.ghostPos.z, this.rot, { record: true });
    if (p) {
      g.viewmodel.tap();
      this.vKey = '';
    }
  }

  private deleteTarget() {
    const g = this.g;
    const p = this.targetPiece;
    if (!p) {
      g.ui.toast('准星对准本队构件后再删除', 'info');
      return;
    }
    if (p.team !== PLAYER_TEAM) {
      g.ui.toast('不能删除其他队伍的构件', 'bad');
      g.audio.denied();
      return;
    }
    g.build.remove(p, { refund: true, record: true });
    g.viewmodel.tap();
    this.targetPiece = null;
    this.vKey = '';
  }

  teammateFill() {
    const g = this.g;
    const mate = g.match.teams[PLAYER_TEAM].members.find((m) => m !== this.ch);
    const n = g.build.autoFill(PLAYER_TEAM);
    this.vKey = '';
    if (n > 0) g.ui.toast(`${mate?.name ?? '队友'} 按模板补全了 ${n} 个构件（不会改动你放的）`, 'ok');
    else g.ui.toast(g.build.budget[PLAYER_TEAM] < 1 ? '预算已用完' : '没有找到合适的空位', 'info');
  }

  readyBuild() {
    const g = this.g;
    if (g.match.playerReadyBuild) return;
    if (g.build.piecesInZone(g.match.teams[PLAYER_TEAM].buildZone).length === 0) {
      const n = g.build.autoFill(PLAYER_TEAM);
      if (n > 0) g.ui.toast(`你还没放构件，队友按模板布置了 ${n} 个`, 'info');
    }
    g.match.confirmPlayerBuildReady();
    g.ui.toast('已准备！等待所有队伍完成建造…', 'ok');
  }

  // ---------------- 观战 ----------------

  private candidates(): Character[] {
    const mates = this.g.chars.filter((c) => c.alive && c.team === PLAYER_TEAM && c !== this.ch);
    const others = this.g.chars.filter((c) => c.alive && c.team !== PLAYER_TEAM);
    return [...mates, ...others];
  }

  cycleSpec(dir: number) {
    const list = this.candidates();
    if (!list.length) return;
    const i = this.specTarget ? list.indexOf(this.specTarget) : -1;
    const n = list.length;
    this.specTarget = list[(((i < 0 ? 0 : i + dir) % n) + n) % n];
    this.specOrbit = 0;
    this.g.audio.ui();
  }

  private ensureSpecTarget() {
    const t = this.specTarget;
    if (t && (t.alive || this.g.time - t.deathTime < 1.6)) return;
    const list = this.candidates();
    this.specTarget = list[0] ?? null;
    this.specOrbit = 0;
  }

  // ---------------- 受击反馈 ----------------

  onHit(info: HitInfo) {
    const shakeK = this.g.settings.shake ? 1 : 0.35;
    if (info.att === this.ch) {
      if (info.kind === 'hit' || info.kind === 'guardbreak') {
        this.kick = Math.max(this.kick, info.atk?.weight === 'heavy' ? 0.03 : 0.015);
        this.shake = Math.max(this.shake, (info.atk?.weight === 'heavy' ? 0.06 : 0.03) * shakeK);
        this.g.viewmodel.hitKick(info.atk?.weight === 'heavy' ? 1 : 0.6);
      } else if (info.kind === 'blocked') {
        this.g.viewmodel.hitKick(0.8);
        this.shake = Math.max(this.shake, 0.02 * shakeK);
      } else if (info.kind === 'parry') {
        this.g.viewmodel.hitKick(1.2);
        this.shake = Math.max(this.shake, 0.05 * shakeK);
      }
    }
    if (info.tgt === this.ch) {
      if (info.kind === 'hit' || info.kind === 'guardbreak') {
        this.shake = Math.max(this.shake, (info.damage > 50 ? 0.12 : 0.07) * shakeK);
        this.kick = Math.max(this.kick, -0.04);
        this.roll = (Math.random() < 0.5 ? -1 : 1) * 0.05 * shakeK;
      } else if (info.kind === 'blocked' || info.kind === 'parry') {
        this.shake = Math.max(this.shake, 0.03 * shakeK);
        this.g.viewmodel.hitKick(0.5);
      }
    }
  }

  // ---------------- 镜头 ----------------

  updateCamera(dt: number, cam: THREE.PerspectiveCamera) {
    const g = this.g;
    const ch = this.ch;
    const m = g.match;
    this.shake = damp(this.shake, 0, 9, dt);
    this.kick = damp(this.kick, 0, 12, dt);
    this.roll = damp(this.roll, 0, 8, dt);
    const sprinting = ch.alive && ch.input.sprint && ch.speed2D > 5.5;
    this.fovKick = damp(this.fovKick, sprinting ? 4 : ch.state === 'dodge' ? 6 : 0, 8, dt);
    const fov = g.settings.fov + this.fovKick;
    if (Math.abs(cam.fov - fov) > 0.01) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }

    // 换区运镜：俯瞰全图 → 落到新的出生点
    if (m.phase === 'swap') {
      this.firstPerson = true;
      const t = m.phaseTime;
      const T = TIMING.swap;
      const eye = _v.set(ch.pos.x, ch.pos.y + PHYS.eye, ch.pos.z);
      _e.set(ch.pitch, ch.yaw, 0, 'YXZ');
      const eyeQ = _q.setFromEuler(_e);
      if (t < 0.05) {
        // 换区面板在屏幕右侧（约 430px 宽）：镜头向东平移，让整张地图落在左侧空白处
        const w = window.innerWidth;
        const panel = w > 900 ? Math.min(430, w * 0.36) + 26 : 0;
        const tanH = Math.tan((cam.fov * Math.PI) / 360) * cam.aspect;
        const sx = clamp((panel / w) * 73 * tanH, 0, 30);
        this.swapFromPos.set(sx, 68, 30);
        _m.lookAt(this.swapFromPos, new THREE.Vector3(sx, 0, 3), new THREE.Vector3(0, 1, 0));
        this.swapFromQuat.setFromRotationMatrix(_m);
      }
      const k = clamp((t - (T - 1.6)) / 1.5, 0, 1);
      const e = ease.inOutQuad(k);
      cam.position.lerpVectors(this.swapFromPos, eye, e);
      cam.position.y += Math.sin(e * Math.PI) * 6;
      cam.quaternion.slerpQuaternions(this.swapFromQuat, eyeQ, ease.inQuad(k));
      this.eyeY = eye.y;
      return;
    }

    if (ch.alive && !this.autopilot) {
      this.firstPerson = true;
      this.specTarget = null;
      const ey = ch.pos.y + PHYS.eye;
      this.eyeY = Math.abs(this.eyeY - ey) > 0.8 ? ey : damp(this.eyeY, ey, 20, dt);
      cam.position.set(ch.pos.x, this.eyeY, ch.pos.z);
      const dodgeRoll = ch.state === 'dodge' ? (ch.input.right > 0 ? -0.06 : ch.input.right < 0 ? 0.06 : 0) : 0;
      _e.set(ch.pitch + this.kick, ch.yaw, this.roll + dodgeRoll, 'YXZ');
      cam.quaternion.setFromEuler(_e);
      if (this.shake > 0.002) {
        cam.position.x += (Math.random() - 0.5) * this.shake;
        cam.position.y += (Math.random() - 0.5) * this.shake;
        cam.position.z += (Math.random() - 0.5) * this.shake;
      }
      return;
    }

    // 自动驾驶（调试）或阵亡：第三人称跟随
    this.firstPerson = false;
    let target: Character | null;
    if (this.autopilot && ch.alive) target = ch;
    else {
      const since = g.time - ch.deathTime;
      if (since < 1.8 && !this.autopilot) {
        // 阵亡镜头：从倒下处缓缓升起，看向击杀者
        const k = ease.outCubic(clamp(since / 1.8, 0, 1));
        const kil = ch.killedBy;
        this.camPos.set(ch.pos.x, ch.pos.y + lerp(PHYS.eye, 3.2, k), ch.pos.z);
        cam.position.copy(this.camPos);
        if (kil) this.camLook.lerp(_v.set(kil.pos.x, kil.pos.y + 1.3, kil.pos.z), 1 - Math.exp(-6 * dt));
        else this.camLook.set(ch.pos.x + ch.fwdX * 3, ch.pos.y, ch.pos.z + ch.fwdZ * 3);
        cam.lookAt(this.camLook);
        this.specYaw = ch.yaw;
        return;
      }
      this.ensureSpecTarget();
      target = this.specTarget;
    }
    if (!target) {
      // 无人可看：俯瞰广场
      this.camPos.lerp(_v.set(0, 26, 22), 1 - Math.exp(-2 * dt));
      cam.position.copy(this.camPos);
      cam.lookAt(0, 0, 0);
      return;
    }
    if (this.specOrbitT <= 0) this.specOrbit = damp(this.specOrbit, 0, 1.5, dt);
    this.specYaw = this.specYaw + Math.atan2(Math.sin(target.yaw - this.specYaw), Math.cos(target.yaw - this.specYaw)) * (1 - Math.exp(-4 * dt));
    const yaw = this.specYaw + this.specOrbit;
    const pitch = this.specPitch;
    const hx = target.pos.x;
    const hy = target.pos.y + 1.55;
    const hz = target.pos.z;
    const back = 3.4;
    const fx = -Math.sin(yaw) * Math.cos(pitch);
    const fy = Math.sin(pitch);
    const fz = -Math.cos(yaw) * Math.cos(pitch);
    const rx = Math.cos(yaw);
    const rz = -Math.sin(yaw);
    let px = hx - fx * back + rx * 0.55;
    let py = hy - fy * back + 0.25;
    let pz = hz - fz * back + rz * 0.55;
    const t = g.world.raycast(hx, hy, hz, px, py, pz);
    if (t < 1) {
      const k = Math.max(0.15, t - 0.12);
      px = hx + (px - hx) * k;
      py = hy + (py - hy) * k;
      pz = hz + (pz - hz) * k;
    }
    this.camPos.set(px, py, pz);
    cam.position.copy(this.camPos);
    this.camLook.set(hx + fx * 4, hy + fy * 4, hz + fz * 4);
    cam.lookAt(this.camLook);
  }
}
