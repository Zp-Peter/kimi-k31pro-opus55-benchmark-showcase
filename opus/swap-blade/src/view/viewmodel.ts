// 第一人称手臂与武器。独立场景渲染（不会穿墙），姿态来自与 AI 相同的关键帧。
// 武器占屏控制在右下 1/4 以内；格挡时刀横在上方提示状态。

import * as THREE from 'three';
import { TEAMS } from '../config';
import { clamp, damp, ease } from '../util';
import { toon } from '../render/toon';
import { MeshBuilder } from '../render/builder';
import { PoseTracker, activePose, type Pose, type WeaponId } from '../game/weapons';
import { buildWeapon, type WeaponModel } from './weaponModel';
import { Trail } from './fx';
import type { Character } from '../game/character';

const SHOULDER_R = new THREE.Vector3(0.34, -0.66, 0.16);
const SHOULDER_L = new THREE.Vector3(-0.34, -0.66, 0.16);
const _up = new THREE.Vector3(0, 1, 0);
const _v = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _one = new THREE.Vector3(1, 1, 1);

export class Viewmodel {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, 1, 0.05, 900);
  private root = new THREE.Group();
  private holder = new THREE.Group();
  private weapon: WeaponModel | null = null;
  private weaponId: WeaponId | '' = '';
  private armR: THREE.Mesh;
  private armL: THREE.Mesh;
  private handR: THREE.Mesh;
  private handL: THREE.Mesh;
  private mallet: THREE.Group;
  private tracker = new PoseTracker();
  private trail: Trail;
  private sun: THREE.DirectionalLight;
  private bobPhase = 0;
  private swayX = 0;
  private swayY = 0;
  private buildBlend = 0;
  private tapT = 1;
  private lastActiveT = -1;
  private lastSeq = -1;
  private team = 0;
  private kick = 0;
  private tmpPose: Pose = { pos: new THREE.Vector3(), quat: new THREE.Quaternion() };

  constructor(team: number) {
    this.team = team;
    const c = TEAMS[team].color;
    this.scene.add(this.root);
    this.root.add(this.holder);
    const sleeve = toon(c, { rim: 0xffffff, rimStrength: 0.35 });
    const skin = toon(0xffdcc4);
    // 袖子：肩端粗（在画面外），腕端细
    const sleeveGeo = new THREE.CylinderGeometry(0.045, 0.095, 1, 10).translate(0, 0.5, 0);
    this.armR = new THREE.Mesh(sleeveGeo, sleeve);
    this.armL = new THREE.Mesh(sleeveGeo, sleeve);
    const handGeo = new THREE.BoxGeometry(0.064, 0.072, 0.088);
    this.handR = new THREE.Mesh(handGeo, skin);
    this.handL = new THREE.Mesh(handGeo, skin);
    const wrap = toon(0xf1ece2);
    const cuffGeo = new THREE.CylinderGeometry(0.041, 0.041, 0.045, 10);
    for (const h of [this.handR, this.handL]) {
      const cuff = new THREE.Mesh(cuffGeo, wrap);
      cuff.rotation.x = Math.PI / 2;
      cuff.position.z = 0.07;
      h.add(cuff);
    }
    this.root.add(this.armR, this.armL, this.handR, this.handL);

    // 建造用木槌
    const mb = new MeshBuilder();
    mb.cyl(toon(0x7d5137), 0.016, 0.018, 0.42, 0, -0.08, 0, 8);
    mb.add(new THREE.CylinderGeometry(0.06, 0.06, 0.2, 10), toon(0xc89a66), 0, 0.36, 0, 0, 0, Math.PI / 2);
    mb.cyl(toon(c), 0.0185, 0.0185, 0.05, 0, 0.02, 0, 8);
    this.mallet = mb.build({ cast: false, receive: false });
    this.root.add(this.mallet);

    this.trail = new Trail(c);
    this.trail.life = 0.14;
    this.root.add(this.trail.mesh);

    this.scene.add(new THREE.HemisphereLight(0xc7dcff, 0xd8b890, 1.15));
    this.sun = new THREE.DirectionalLight(0xfff1d6, 2.1);
    this.scene.add(this.sun, this.sun.target);
  }

  setAspect(a: number) {
    this.camera.aspect = a;
    this.camera.updateProjectionMatrix();
  }

  tap() {
    this.tapT = 0;
  }

  hitKick(strength: number) {
    this.kick = Math.max(this.kick, strength);
  }

  private setWeapon(id: WeaponId) {
    if (this.weapon) this.holder.remove(this.weapon.group);
    this.weapon = buildWeapon(id, TEAMS[this.team].color);
    this.holder.add(this.weapon.group);
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

  update(dt: number, ch: Character, time: number, opts: { build: boolean; lookDX: number; lookDY: number; sunDir: THREE.Vector3; camQuat: THREE.Quaternion; visible: boolean }) {
    this.root.visible = opts.visible;
    if (!opts.visible) {
      this.trail.clear();
      return;
    }
    if (ch.weapon !== this.weaponId) this.setWeapon(ch.weapon);

    // 光照方向与世界太阳一致
    this.sun.position.copy(opts.sunDir).applyQuaternion(_q.copy(opts.camQuat).invert()).multiplyScalar(5);

    this.buildBlend = damp(this.buildBlend, opts.build ? 1 : 0, 10, dt);
    const pose = this.tracker.update(ch, dt);

    // 走路晃动（只晃手不晃镜头）+ 视角惯性
    const sp = clamp(ch.speed2D / 5.5, 0, 1.3);
    this.bobPhase += ch.speed2D * dt * 2.2;
    const bx = Math.sin(this.bobPhase) * 0.012 * sp;
    const by = -Math.abs(Math.cos(this.bobPhase)) * 0.014 * sp;
    this.swayX = damp(this.swayX, clamp(-opts.lookDX * 0.0016, -0.06, 0.06), 10, dt);
    this.swayY = damp(this.swayY, clamp(opts.lookDY * 0.0016, -0.05, 0.05), 10, dt);
    this.kick = damp(this.kick, 0, 14, dt);
    this.root.position.set(bx + this.swayX * 0.6, by - this.swayY * 0.5 - this.kick * 0.03, this.kick * 0.04);
    this.root.rotation.set(this.swayY * 0.6, this.swayX * 1.2, 0);

    // 建造模式：武器下放，举起木槌
    const bb = ease.inOutQuad(this.buildBlend);
    this.holder.position.copy(pose.pos);
    this.holder.position.y -= bb * 0.7;
    this.holder.quaternion.copy(pose.quat);
    this.weapon && (this.weapon.group.visible = bb < 0.95);
    this.tapT = Math.min(1, this.tapT + dt / 0.28);
    const tap = Math.sin(this.tapT * Math.PI) * (1 - this.tapT);
    this.mallet.visible = bb > 0.05;
    this.mallet.position.set(0.3, -0.36 - (1 - bb) * 0.6 - tap * 0.06, -0.58);
    this.mallet.rotation.set(-0.35 - tap * 1.4, 0.2, -0.3);
    this.mallet.scale.setScalar(0.62);

    const handPos = bb > 0.5 ? this.mallet.position : this.holder.position;
    this.handR.position.copy(handPos);
    this.handR.quaternion.copy(bb > 0.5 ? this.mallet.quaternion : this.holder.quaternion);
    this.orientArm(this.armR, SHOULDER_R, handPos);
    let lh: THREE.Vector3;
    if (bb < 0.5 && this.weapon?.leftGrip) {
      lh = this.weapon.leftGrip.clone().applyQuaternion(pose.quat).add(this.holder.position);
    } else {
      lh = new THREE.Vector3(-0.3, -0.42 + Math.sin(this.bobPhase) * 0.01 - bb * 0.3, -0.42);
      if (ch.state === 'block' && bb < 0.5) lh.set(-0.2, -0.27, -0.5);
    }
    this.handL.position.copy(lh);
    this.handL.quaternion.copy(this.holder.quaternion);
    this.orientArm(this.armL, SHOULDER_L, lh);

    // 刀光：主动段以子步长采样关键帧，保证弧线平滑
    if (this.weapon && ch.state === 'active' && ch.attack) {
      if (this.lastSeq !== ch.attackSeq) {
        this.lastSeq = ch.attackSeq;
        this.lastActiveT = 0;
      }
      const curT = clamp(ch.stateT / ch.stateDur, 0, 1);
      const steps = 4;
      for (let s = 1; s <= steps; s++) {
        const t = this.lastActiveT + ((curT - this.lastActiveT) * s) / steps;
        activePose(ch.attack.swing, ease.inOutQuad(t), this.tmpPose);
        _m.compose(this.tmpPose.pos, this.tmpPose.quat, _one);
        const b = this.weapon.trailBase.clone().applyMatrix4(_m);
        const tp = this.weapon.trailTip.clone().applyMatrix4(_m);
        this.trail.push(b, tp, time - (dt * (steps - s)) / steps);
      }
      this.lastActiveT = curT;
    }
    this.trail.update(time);
  }
}
