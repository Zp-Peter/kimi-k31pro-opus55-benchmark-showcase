// S01 · 月面黎明 — skim the night side of the moon, crane up as the sun crests the limb.
import * as THREE from 'three';
import { Shot } from './base.js';
import { moonMaterial, limbShell } from './moonmat.js';
import { glowSprite, FlareGhosts, starField } from './lens.js';
import { GlyphText } from '../engine/text.js';
import { keys, ease, clamp, smoothstep, shake, applyShake, DEG } from '../engine/util.js';

const R = 60;
const C = new THREE.Vector3(0, -R, 0);
const dirFrom = (az, el) => new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el)).normalize();
// L: the visible sun (crests the limb ~5.4s). KEY: raking light that sculpts the terrain (a lighting cheat).
const L = dirFrom(7 * DEG, -20.5 * DEG);
const KEY = dirFrom(64 * DEG, 8 * DEG);
const GLOW = dirFrom(10 * DEG, 12 * DEG);

const SPEED = [[0, 1.2], [3, 0.95], [5.5, 1.1], [7.0, 2.0], [8.7, 5.5]];
function travel(t) {
  if (t <= 0) return keys(0, SPEED) * t;
  const dt = 1 / 240; const n = Math.floor(t / dt);
  let d = 0;
  for (let i = 0; i < n; i++) d += keys((i + 0.5) * dt, SPEED) * dt;
  return d + keys(t, SPEED) * (t - n * dt);
}

function pose(t) {
  const d = travel(t);
  const th = d / R;
  const h = keys(t, [[0, 0.2], [2.4, 0.28], [6.3, 2.3, ease.inOutCubic], [8.7, 2.9, ease.outCubic]]);
  const up = new THREE.Vector3(0, Math.cos(th), -Math.sin(th));
  const pos = C.clone().addScaledVector(up, R + h);
  const fwd0 = new THREE.Vector3(0, -Math.sin(th), -Math.cos(th));
  const yaw = keys(t, [[0, -6], [4, -2], [8.7, 3.5]]) * DEG;
  const pitch = keys(t, [[0, -9], [2.6, -4.5], [5.8, 0.2], [8.7, 1.2]]) * DEG;
  const f = fwd0.clone().applyAxisAngle(up, -yaw);
  const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(up, -yaw);
  f.applyAxisAngle(right, pitch);
  const roll = keys(t, [[0, -3.5], [4.5, 1.0], [8.7, 0]]) * DEG;
  const fov = keys(t, [[0, 54], [6, 47], [8.7, 34]]);
  return { pos, f, up, roll, fov, h, th };
}

function sunVisibility(P) {
  const elev = Math.asin(clamp(L.dot(P.up), -1, 1));
  const dip = Math.acos(R / (R + P.h));
  return smoothstep(-0.35 * DEG, 0.45 * DEG, elev + dip);
}

export class MoonShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.near = 0.03; this.camera.far = 4000;
    this.mat = moonMaterial(R, C);
    this.mat.uniforms.sunDir.value.copy(KEY);
    this.mat.uniforms.glowDir.value.copy(GLOW);
    const geo = new THREE.SphereGeometry(R, 720, 260, 0, Math.PI * 2, 0, 0.95);
    this.moon = new THREE.Mesh(geo, this.mat);
    this.moon.position.copy(C);
    this.scene.add(this.moon);
    this.limb = limbShell(R, C, [0.22, 0.5, 1.0]);
    this.limb.material.uniforms.sunDir.value.copy(L);
    this.scene.add(this.limb);
    this.stars = starField(5000, 1500, 21);
    this.scene.add(this.stars);
    const sp = L.clone().multiplyScalar(1400);
    this.sunCore = glowSprite('disc', '#fff4e6', 20, { intensity: 90 });
    this.sunGlow = glowSprite('glow', '#ffe2c0', 380, { intensity: 1.2 });
    this.sunHalo = glowSprite('soft', '#5d8fff', 1500, { intensity: 0.3 });
    this.sunStar = glowSprite('star', '#ffffff', 520, { intensity: 0.45 });
    for (const s of [this.sunHalo, this.sunGlow, this.sunCore, this.sunStar]) { s.position.copy(sp); this.scene.add(s); }

    // overlay: flare ghosts + type
    this.ghosts = new FlareGhosts(5);
    this.overlay.add(this.ghosts);
    this.l1 = new GlyphText('每一次登月，', { family: 'cn', weight: 300, size: 64, tracking: 0.2, color: '#f2f6ff' });
    this.l2 = new GlyphText('都始于一个问题。', { family: 'cn', weight: 300, size: 64, tracking: 0.2, color: '#f2f6ff' });
    this.en = new GlyphText('EVERY MOONSHOT BEGINS WITH A QUESTION', { family: 'sans', weight: 500, size: 17, tracking: 0.42, color: '#a9c2ea' });
    this.l1.position.set(-150, 250, 0);
    this.l2.position.set(120, 158, 0);
    this.en.position.set(0, 78, 0);
    this.overlay.add(this.l1, this.l2, this.en);
  }

  update(t) {
    const P = pose(t);
    const cam = this.camera;
    cam.fov = P.fov; cam.updateProjectionMatrix();
    cam.position.copy(P.pos);
    const up = P.up.clone().applyAxisAngle(P.f, P.roll);
    cam.up.copy(up);
    cam.lookAt(P.pos.clone().add(P.f));
    applyShake(cam, shake(t, 0.6, 0.8, 3));
    cam.updateMatrixWorld();

    const u = this.mat.uniforms;
    u.camPos.value.copy(cam.position);
    const k = keys(t, [[0, 0.32], [3.5, 0.45], [6.2, 1.0, ease.inOutQuad]]);
    u.sunCol.value.set(3.5 * k, 3.3 * k, 3.0 * k);
    this.limb.material.uniforms.camPos.value.copy(cam.position);
    this.limb.material.uniforms.strength.value = 0.55 + 0.8 * smoothstep(3.5, 6.5, t);
    this.stars.material.uniforms.time.value = t;

    const vis = sunVisibility(P);
    this.vis = vis;
    this.sunCore.setOpacity(vis);
    this.sunStar.setOpacity(vis * 0.9);
    this.sunStar.material.uniforms.rot.value = t * 0.05;
    this.sunGlow.setOpacity(0.25 + 0.75 * smoothstep(2, 5.5, t));
    this.sunHalo.setOpacity(0.3 + 0.7 * smoothstep(2, 6, t));

    // flare ghosts follow the projected sun
    const sp = this.sunCore.position.clone().project(cam);
    const sx = sp.x * 960, sy = sp.y * 540;
    this.ghosts.place(sx, sy, sp.z < 1 ? vis * 0.45 : 0);
    this.sunScreen = [sp.x * 0.5 + 0.5, sp.y * 0.5 + 0.5];

    // type
    this.l1.animate(t, { in: { start: 1.1, dur: 1.1, stagger: 0.07, style: 'blur' }, out: { start: 6.3, dur: 0.7, stagger: 0.03, style: 'blur' } });
    this.l2.animate(t, { in: { start: 2.7, dur: 1.1, stagger: 0.07, style: 'blur' }, out: { start: 6.4, dur: 0.7, stagger: 0.03, style: 'blur' } });
    this.en.animate(t, { in: { start: 3.6, dur: 1.0, stagger: 0.012, style: 'track' }, out: { start: 6.5, dur: 0.6, stagger: 0.006, style: 'fade' }, opacity: 0.75 });
  }

  post(t) {
    const P = pose(t);
    const vis = sunVisibility(P);
    // sun screen position (approximate with the same camera math, no shake)
    const cam = this._pc || (this._pc = new THREE.PerspectiveCamera(45, 16 / 9, 0.03, 4000));
    cam.fov = P.fov; cam.updateProjectionMatrix(); cam.position.copy(P.pos);
    cam.up.copy(P.up.clone().applyAxisAngle(P.f, P.roll)); cam.lookAt(P.pos.clone().add(P.f)); cam.updateMatrixWorld();
    const sp = L.clone().multiplyScalar(1400).project(cam);
    const glow = smoothstep(2, 6, t);
    return {
      fade: keys(t, [[0, 1], [1.5, 0, ease.inOutQuad]]),
      letterbox: 0.118,
      exposure: 1.15,
      bloom: 0.55 + 0.25 * vis, bloomThreshold: 1.1,
      streak: 0.12 + 0.55 * vis, streakTint: [0.45, 0.66, 1.0],
      rays: (0.15 * glow + 0.55 * vis) * (sp.z < 1 ? 1 : 0), raysPos: [sp.x * 0.5 + 0.5, sp.y * 0.5 + 0.5], raysDensity: 0.95, raysDecay: 0.972,
      vignette: 0.5, grain: 0.06, ca: 0.0025, temperature: -0.25,
    };
  }
}
