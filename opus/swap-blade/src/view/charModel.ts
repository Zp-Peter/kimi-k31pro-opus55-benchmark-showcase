// 第三人称角色外观与程序化动画。武器姿态与第一人称共用同一套关键帧（PoseTracker），
// 所以 AI 的起手、出刀、收招在画面上与真实判定同步，玩家可以据此格挡或闪避。

import * as THREE from 'three';
import { PHYS, TEAMS } from '../config';
import { clamp, damp } from '../util';
import { canvasTexture, setLayerFX, textTexture, toon, toonUnique } from '../render/toon';
import { PoseTracker, type WeaponId } from '../game/weapons';
import { buildWeapon, type WeaponModel } from './weaponModel';
import { Trail } from './fx';
import type { Character } from '../game/character';
import type { Game } from '../game';

const SKIN = 0xffdcc4;
const HAIR = [0x2b2230, 0x3a2a22, 0x1d2233, 0x4a2f2a, 0x26262e, 0x5b3b2b, 0x22202a, 0x3b2f3f];

const EYE_ANCHOR = new THREE.Vector3(0, 1.56, -0.04);
const POSE_SCALE = 1.12;
const SHOULDER_R = new THREE.Vector3(0.22, 1.36, -0.01);
const SHOULDER_L = new THREE.Vector3(-0.22, 1.36, -0.01);

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

function markerTexture(color: string, label: string, friend: boolean) {
  return canvasTexture(
    128,
    128,
    (c) => {
      c.translate(64, 58);
      c.fillStyle = '#1b1622';
      c.beginPath();
      c.moveTo(0, -44);
      c.lineTo(36, 0);
      c.lineTo(0, 44);
      c.lineTo(-36, 0);
      c.closePath();
      c.fill();
      c.fillStyle = color;
      c.beginPath();
      c.moveTo(0, -36);
      c.lineTo(28, 0);
      c.lineTo(0, 36);
      c.lineTo(-28, 0);
      c.closePath();
      c.fill();
      c.fillStyle = '#fff';
      c.font = '900 34px "PingFang SC","Microsoft YaHei",sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(label, 0, 2);
      if (friend) {
        c.strokeStyle = '#fff';
        c.lineWidth = 4;
        c.beginPath();
        c.moveTo(0, -50);
        c.lineTo(42, 0);
        c.lineTo(0, 50);
        c.lineTo(-42, 0);
        c.closePath();
        c.stroke();
      }
    },
    { mip: false },
  );
}

export class CharModel {
  root = new THREE.Group();
  private fall = new THREE.Group();
  private body = new THREE.Group();
  private torso = new THREE.Group();
  private head = new THREE.Group();
  private legL = new THREE.Group();
  private legR = new THREE.Group();
  private armR: THREE.Mesh;
  private armL: THREE.Mesh;
  private handR: THREE.Mesh;
  private handL: THREE.Mesh;
  private tails: THREE.Group;
  private weaponHolder = new THREE.Group();
  private weapon: WeaponModel | null = null;
  private weaponId: WeaponId | '' = '';
  private tracker = new PoseTracker();
  private trail: Trail;
  private marker: THREE.Sprite;
  private nameTag: THREE.Sprite;
  private hpBg: THREE.Sprite;
  private hpFill: THREE.Sprite;
  private mats: THREE.MeshToonMaterial[] = [];
  private walkPhase = 0;
  private lastSeq = -1;
  private lastState = '';
  private deadShown = false;
  private petalsDone = false;
  private lean = 0;
  private side = 0;
  private aura: THREE.Sprite;
  friendTo: number;

  constructor(private ch: Character, private g: Game, viewerTeam: number) {
    this.friendTo = viewerTeam;
    const team = TEAMS[ch.team];
    const haori = toonUnique(team.color, { rim: 0xffffff, rimStrength: 0.4 });
    const hakama = toonUnique(0x2c2b3a, { rim: team.color, rimStrength: 0.6 });
    const skin = toonUnique(SKIN, { rim: 0xffffff, rimStrength: 0.25 });
    const hair = toonUnique(HAIR[ch.id % HAIR.length], { rim: team.color, rimStrength: 0.5 });
    const white = toon(0xf4f1ea);
    const dark = toon(0x1b1622);
    const bandMat = toon(team.color);
    this.mats.push(haori, hakama, skin, hair);

    this.root.add(this.fall);
    this.fall.add(this.body);

    // 腿（宽大的袴）
    for (const [leg, sx] of [
      [this.legL, -1],
      [this.legR, 1],
    ] as [THREE.Group, number][]) {
      leg.position.set(0.11 * sx, 0.86, 0);
      const pant = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 0.78, 8).translate(0, -0.39, 0), hakama);
      leg.add(pant);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.24).translate(0, -0.82, -0.04), dark);
      leg.add(foot);
      this.body.add(leg);
    }

    // 躯干
    this.torso.position.set(0, 0.86, 0);
    this.body.add(this.torso);
    const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.19, 0.12, 10).translate(0, 0.06, 0), dark);
    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.44, 0.26).translate(0, 0.36, 0), haori);
    const shoulders = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.28).translate(0, 0.52, 0), haori);
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.32, 0.02).translate(0, 0.38, -0.131), white);
    const collar2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.02).translate(0, 0.54, -0.141), white);
    const crest = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.02, 12).rotateX(Math.PI / 2).translate(0, 0.38, 0.135), white);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.06, 0.1, 8).translate(0, 0.62, 0), skin);
    this.torso.add(belt, chest, shoulders, collar, collar2, crest, neck);

    // 头
    this.head.position.set(0, 0.73, 0);
    this.torso.add(this.head);
    const headM = new THREE.Mesh(new THREE.SphereGeometry(0.145, 14, 10), skin);
    headM.scale.set(1, 1.05, 1);
    const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.158, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
    hairCap.position.set(0, 0.02, 0.012);
    hairCap.rotation.x = -0.25;
    const spikes = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const sp = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.16, 5), hair);
      const a = -0.9 + i * 0.45;
      sp.position.set(Math.sin(a) * 0.1, 0.1, 0.09 + Math.cos(a) * 0.02);
      sp.rotation.set(0.9, 0, -a * 0.6);
      spikes.add(sp);
    }
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.28, 6).translate(0, -0.14, 0), hair);
    tail.position.set(0, 0.05, 0.15);
    tail.rotation.x = -0.5;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.153, 0.153, 0.045, 14, 1, true), bandMat);
    band.position.y = 0.045;
    band.rotation.x = -0.12;
    this.tails = new THREE.Group();
    this.tails.position.set(0, 0.05, 0.15);
    for (const s of [-1, 1]) {
      const t = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.02, 0.26).translate(0, 0, 0.13), bandMat);
      t.rotation.y = s * 0.35;
      this.tails.add(t);
    }
    const eyeGeo = new THREE.BoxGeometry(0.026, 0.05, 0.012);
    const eyeL = new THREE.Mesh(eyeGeo, dark);
    eyeL.position.set(-0.05, 0.0, -0.138);
    const eyeR = new THREE.Mesh(eyeGeo, dark);
    eyeR.position.set(0.05, 0.0, -0.138);
    this.head.add(headM, hairCap, spikes, tail, band, this.tails, eyeL, eyeR);

    // 手臂：单段袖子，按手的位置实时朝向
    const sleeveGeo = new THREE.CylinderGeometry(0.06, 0.1, 1, 8).translate(0, 0.5, 0);
    this.armR = new THREE.Mesh(sleeveGeo, haori);
    this.armL = new THREE.Mesh(sleeveGeo, haori);
    const handGeo = new THREE.SphereGeometry(0.055, 8, 6);
    this.handR = new THREE.Mesh(handGeo, skin);
    this.handL = new THREE.Mesh(handGeo, skin);
    this.body.add(this.armR, this.armL, this.handR, this.handL, this.weaponHolder);

    this.root.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });

    this.trail = new Trail(team.color);
    g.scene.add(this.trail.mesh);

    // 头顶标记
    const friend = ch.team === viewerTeam;
    this.marker = new THREE.Sprite(new THREE.SpriteMaterial({ map: markerTexture(team.css, friend ? '友' : team.short, friend), depthTest: !friend, depthWrite: false, transparent: true }));
    this.marker.scale.set(0.42, 0.42, 1);
    this.marker.position.y = 2.18;
    this.marker.renderOrder = 10;
    const tagTex = textTexture(`${team.short}·${ch.name}`, { size: 44, w: 256, h: 64, color: '#fff', stroke: '#1b1622', strokeW: 9 });
    this.nameTag = new THREE.Sprite(new THREE.SpriteMaterial({ map: tagTex, depthTest: !friend, depthWrite: false, transparent: true }));
    this.nameTag.scale.set(0.9, 0.225, 1);
    this.nameTag.position.y = 2.46;
    this.nameTag.renderOrder = 10;
    this.hpBg = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0x1b1622, depthTest: !friend, depthWrite: false, transparent: true, opacity: 0.85 }));
    this.hpBg.scale.set(0.62, 0.07, 1);
    this.hpBg.position.y = 1.98;
    this.hpFill = new THREE.Sprite(new THREE.SpriteMaterial({ color: team.color, depthTest: !friend, depthWrite: false, transparent: true }));
    this.hpFill.scale.set(0.58, 0.045, 1);
    this.hpFill.position.y = 1.98;
    this.hpFill.renderOrder = 11;
    this.hpBg.renderOrder = 10;
    this.aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: auraTex, color: 0xff5a1f, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
    this.aura.scale.set(1.8, 2.4, 1);
    this.aura.position.y = 1.1;
    const overlay = new THREE.Group();
    overlay.add(this.marker, this.nameTag, this.hpBg, this.hpFill, this.aura);
    setLayerFX(overlay);
    this.root.add(overlay);

    g.scene.add(this.root);
  }

  private setWeapon(id: WeaponId) {
    if (this.weapon) {
      this.weaponHolder.remove(this.weapon.group);
      this.weapon.group.traverse((o) => (o as THREE.Mesh).geometry?.dispose());
    }
    this.weapon = buildWeapon(id, TEAMS[this.ch.team].color);
    this.weapon.group.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) o.castShadow = true;
    });
    this.weaponHolder.add(this.weapon.group);
    this.weaponId = id;
  }

  private orientArm(arm: THREE.Mesh, from: THREE.Vector3, to: THREE.Vector3) {
    _v.subVectors(to, from);
    const len = Math.max(0.05, _v.length());
    _v.divideScalar(len);
    arm.position.copy(from);
    arm.quaternion.setFromUnitVectors(_up, _v);
    arm.scale.set(1, len, 1);
  }

  update(dt: number, camera: THREE.Camera) {
    const ch = this.ch;
    const now = this.g.time;
    if (ch.weapon !== this.weaponId) this.setWeapon(ch.weapon);
    this.root.position.copy(ch.pos);
    this.root.rotation.y = ch.yaw;

    // 死亡：仰倒 → 化作花瓣散去
    if (!ch.alive) {
      const t = now - ch.deathTime;
      if (!this.deadShown) {
        this.deadShown = true;
        this.petalsDone = false;
        this.trail.clear();
      }
      this.fall.rotation.x = Math.min(1, t / 0.45) * 1.45;
      this.fall.position.y = Math.min(1, t / 0.45) * 0.1;
      const fade = clamp((t - 1.3) / 0.4, 0, 1);
      this.body.scale.setScalar(1 - fade * 0.98);
      this.body.visible = fade < 1;
      if (t > 1.3 && !this.petalsDone) {
        this.petalsDone = true;
        this.g.fx.kill(ch.pos.x, ch.pos.y + 0.5, ch.pos.z, TEAMS[ch.team].color);
      }
      this.marker.visible = this.nameTag.visible = this.hpBg.visible = this.hpFill.visible = false;
      this.aura.material.opacity = 0;
      for (const m of this.mats) m.emissive.setRGB(0, 0, 0);
      return;
    }
    if (this.deadShown) {
      this.deadShown = false;
      this.fall.rotation.x = 0;
      this.fall.position.y = 0;
      this.body.scale.setScalar(1);
      this.body.visible = true;
    }

    // 走路
    const sp = ch.speed2D;
    const k = clamp(sp / 5.5, 0, 1.3);
    this.walkPhase += sp * dt * 2.6;
    const swing = Math.sin(this.walkPhase) * 0.62 * Math.min(1, k);
    this.legL.rotation.x = swing;
    this.legR.rotation.x = -swing;
    this.body.position.y = Math.abs(Math.cos(this.walkPhase)) * 0.045 * Math.min(1, k);
    // 前倾 / 侧倾（按本地速度方向）
    const lv = ch.vx * ch.fwdX + ch.vz * ch.fwdZ;
    const rv = ch.vx * Math.cos(ch.yaw) - ch.vz * Math.sin(ch.yaw);
    let leanT = -clamp(lv / 6, -1, 1) * 0.14;
    let sideT = clamp(rv / 6, -1, 1) * 0.12;
    if (ch.state === 'flinch') leanT = 0.28;
    if (ch.state === 'stagger') leanT = 0.42;
    if (ch.state === 'dodge') {
      leanT = -0.25;
      sideT *= 2;
    }
    this.lean = damp(this.lean, leanT, 14, dt);
    this.side = damp(this.side, sideT, 14, dt);
    this.body.rotation.x = this.lean;
    this.body.rotation.z = -this.side;
    this.tails.rotation.x = 0.25 + Math.sin(now * 9 + ch.id) * 0.12 + k * 0.5;

    // 武器姿态
    const pose = this.tracker.update(ch, dt);
    _v2.copy(pose.pos).multiplyScalar(POSE_SCALE).add(EYE_ANCHOR);
    // 躯干随挥砍扭转
    const twist = clamp(-pose.pos.x * 1.2, -0.55, 0.55);
    this.torso.rotation.y = damp(this.torso.rotation.y, twist, 18, dt);
    this.weaponHolder.position.copy(_v2);
    this.weaponHolder.quaternion.copy(pose.quat);
    this.handR.position.copy(_v2);
    const sr = _v.copy(SHOULDER_R).applyAxisAngle(_up, this.torso.rotation.y).clone();
    this.orientArm(this.armR, sr, _v2);
    const sl = _v.copy(SHOULDER_L).applyAxisAngle(_up, this.torso.rotation.y).clone();
    let lh: THREE.Vector3;
    if (this.weapon?.leftGrip) {
      lh = this.weapon.leftGrip.clone().applyQuaternion(pose.quat).add(_v2);
    } else {
      lh = new THREE.Vector3(-0.26, 1.12 + Math.sin(this.walkPhase) * 0.03, -0.22);
      if (ch.state === 'block') lh.set(-0.2, 1.42, -0.32);
    }
    this.handL.position.copy(lh);
    this.orientArm(this.armL, sl, lh);

    // 刀光：主动段按子步长采样
    if (this.weapon) {
      if (ch.state === 'active') {
        this.root.updateMatrixWorld(true);
        const wm = this.weaponHolder.matrixWorld;
        this.trail.push(_v.copy(this.weapon.trailBase).applyMatrix4(wm), _v2.copy(this.weapon.trailTip).applyMatrix4(wm), now);
      }
      this.trail.update(now);
    }

    // 起手提示：闪光星芒；重武器蓄力时有红色气焰
    if (ch.attackSeq !== this.lastSeq && ch.state === 'windup') {
      this.lastSeq = ch.attackSeq;
      if (this.weapon) {
        this.root.updateMatrixWorld(true);
        _v.copy(this.weapon.trailTip).applyMatrix4(this.weaponHolder.matrixWorld);
        this.g.fx.glint(_v.x, _v.y, _v.z, ch.attack?.weight === 'heavy' ? 0xff6a2a : 0xffffff, ch.attack?.weight === 'heavy');
      }
    }
    const heavyWind = ch.state === 'windup' && ch.attack?.hyper;
    const auraT = heavyWind ? clamp(ch.stateT / ch.stateDur, 0, 1) * 0.55 : 0;
    this.aura.material.opacity = damp(this.aura.material.opacity, auraT, 20, dt);
    this.lastState = ch.state;

    // 受击闪白
    const flash = ch.flashT > 0 ? 1 : 0;
    const parryGlow = ch.state === 'stagger' ? 0.25 + 0.25 * Math.sin(now * 40) : 0;
    for (const m of this.mats) m.emissive.setRGB(flash + parryGlow, flash + parryGlow * 0.6, flash);

    // 头顶信息
    const dist = camera.position.distanceTo(this.root.position);
    const friend = ch.team === this.friendTo;
    const isSelf = ch.isPlayer && this.g.player.firstPerson;
    this.marker.visible = !isSelf;
    // 全员显形后：敌人头顶标记穿墙可见（与 AI 获得的信息对等）
    const seeThrough = friend || (this.g.match.revealed && this.g.match.phase === 'combat');
    const mm = this.marker.material;
    if (mm.depthTest === seeThrough) {
      mm.depthTest = !seeThrough;
      mm.needsUpdate = true;
    }
    this.nameTag.visible = !isSelf && (friend || dist < 14);
    const recentHurt = now - ch.lastHurtTime < 4;
    const showHp = !isSelf && (friend || recentHurt || dist < 7);
    this.hpBg.visible = this.hpFill.visible = showHp;
    // 远处放大保证可读；贴脸时缩小，避免血条挡住对手动作
    const far = Math.max(1, dist / 14);
    const near = 0.55 + 0.45 * clamp((dist - 1.2) / 3.5, 0, 1);
    const s = far * near;
    this.marker.scale.set(0.42 * s, 0.42 * s, 1);
    this.marker.position.y = 2.18 + (far - 1) * 0.2;
    this.nameTag.scale.set(0.9 * near, 0.225 * near, 1);
    this.hpBg.scale.set(0.62 * near, 0.07 * near, 1);
    if (showHp) {
      const f = clamp(ch.hp / PHYS.maxHp, 0.02, 1);
      this.hpFill.scale.set(0.58 * f * near, 0.045 * near, 1);
      // 通过 center 让血条左对齐：左边缘 = pos - center.x * 宽度
      this.hpFill.center.set(0.5 / f, 0.5);
    }
  }

  setVisible(v: boolean) {
    this.root.visible = v;
    this.trail.mesh.visible = v && this.trail.mesh.visible;
  }

  dispose() {
    this.g.scene.remove(this.root);
    this.g.scene.remove(this.trail.mesh);
  }
}

const auraTex = canvasTexture(
  128,
  128,
  (c) => {
    const g = c.createRadialGradient(64, 70, 4, 64, 64, 62);
    g.addColorStop(0, 'rgba(255,255,255,0.9)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.35)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g;
    c.fillRect(0, 0, 128, 128);
  },
  { mip: false },
);
