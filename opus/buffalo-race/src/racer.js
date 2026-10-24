// racer.js — arcade buffalo physics, lap/position tracking and the rival AI.
import * as THREE from 'three';
import { clamp, lerp, damp, wrapAngle, Rand } from './util.js';
import { WATER_LEVEL } from './track.js';

export const PHYS = {
  vmax: 33, accel: 15, brake: 32, reverseMax: 9, drag: 0.05, roll: 2.2,
  grassMul: 0.6, waterMul: 0.42, yaw: 1.9, grip: 9, driftGrip: 2.0,
  boostMul: 1.33, boostAccel: 28, meterUse: 0.36, meterRegen: 0.03,
};
const rnd = new Rand(99);

export class Racer {
  constructor({ id, preset, model, isPlayer, track, terrain, skill = 1, stats = { spd: 1, acc: 1, hdl: 1 } }) {
    Object.assign(this, { id, preset, model, isPlayer, track, terrain, skill, stats });
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector2();
    this.heading = 0; this.vF = 0; this.y = 0; this.pitch = 0; this.roll = 0;
    this.idx = 0; this.s = 0; this.lat = 0; this.raceDist = 0; this.completed = -1;
    this.finished = false; this.finishTime = 0; this.lapStart = 0; this.lapTimes = []; this.bestLap = Infinity;
    this.boost = 0.35; this.boostTime = 0; this.boosting = false; this.padCool = 0; this.bumpCool = 0;
    this.drifting = false; this.driftDir = 0; this.driftCharge = 0;
    this.surface = 'road'; this.wrongWay = 0; this.stuck = 0; this.skillMul = skill;
    this.input = { throttle: 0, brake: 0, steer: 0, drift: false, boost: false };
    this.proj = {};
    this.ai = { lane: rnd.range(-3, 3), laneT: rnd.range(1, 4), boostCool: rnd.range(3, 8), boostHold: 0, lineK: rnd.range(0.65, 1.0), cornerK: rnd.range(0.95, 1.05), wander: rnd.range(0.6, 1.2) };
  }

  get speed() { return this.vel.length(); }
  get boostActive() { return this.boosting || this.boostTime > 0; }
  get lapDisplay() { return this.completed + 1; }

  placeOnGrid(slot) {
    const tr = this.track, row = Math.floor(slot / 2), col = slot % 2;
    const back = 7 + row * 7.5 + col * 2.5;
    const s = tr.length - back, i = tr.idx(s), lat = (col ? 3.6 : -3.6);
    this.pos.set(tr.px[i] + tr.rx[i] * lat, tr.py[i], tr.pz[i] + tr.rz[i] * lat);
    this.heading = tr.headingAt(i);
    this.vel.set(0, 0); this.vF = 0;
    this.idx = i; this.s = s; this.lat = lat; this.raceDist = -back; this.completed = -1; this.y = tr.py[i];
    this.finished = false; this.lapTimes = []; this.lapStart = 0; this.bestLap = Infinity;
    this.boost = 0.35; this.boostTime = 0; this.boosting = false; this.drifting = false; this.wrongWay = 0; this.stuck = 0;
  }

  respawn() {
    const tr = this.track, i = tr.idx(this.s - 4);
    const lat = clamp(this.lat, -4, 4);
    this.pos.set(tr.px[i] + tr.rx[i] * lat, tr.py[i], tr.pz[i] + tr.rz[i] * lat);
    this.heading = tr.headingAt(i); this.vel.set(0, 0); this.vF = 0; this.drifting = false; this.stuck = 0; this.wrongWay = 0;
  }

  onBoostPad(events) {
    if (this.padCool > 0) return;
    this.boostTime = Math.max(this.boostTime, 1.4); this.padCool = 0.8;
    if (events) events.push({ type: 'pad', racer: this });
  }
  onPickup() { this.boost = Math.min(1, this.boost + 0.34); }

  // ------------------------------------------------------------ AI driver
  think(dt, race) {
    const tr = this.track, ai = this.ai, inp = this.input;
    const spd = this.speed;
    const look = 9 + spd * 0.55;
    const ti = tr.idx(this.s + look);
    ai.laneT -= dt;
    if (ai.laneT <= 0) { ai.lane = rnd.range(-3.5, 3.5) * ai.wander; ai.laneT = rnd.range(3, 7); }
    let lat = tr.line[ti] * ai.lineK + ai.lane;
    for (const o of race.racers) {
      if (o === this) continue;
      const dS = tr.sDist(o.idx, this.idx);
      if (dS > 0 && dS < 15) {
        const dl = o.lat - lat;
        if (Math.abs(dl) < 3) lat += (dl > 0 ? -1 : 1) * (3 - Math.abs(dl)) * 1.3;
      }
    }
    lat = clamp(lat, -(tr.halfW[ti] - 1.6), tr.halfW[ti] - 1.6);
    const tx = tr.px[ti] + tr.rx[ti] * lat, tz = tr.pz[ti] + tr.rz[ti] * lat;
    const err = wrapAngle(Math.atan2(tx - this.pos.x, tz - this.pos.z) - this.heading);
    inp.steer = clamp(err * 2.6, -1, 1);
    let vt = Infinity;
    for (let d = 0; d <= 66; d += 6) vt = Math.min(vt, tr.vmax[tr.idx(this.s + d)] * ai.cornerK + d * 0.18);
    if (this.finished) vt = Math.min(vt, 16);
    inp.throttle = spd < vt ? 1 : 0;
    inp.brake = spd > vt + 5 ? 0.7 : 0;
    inp.drift = false;
    ai.boostCool -= dt;
    if (this.boost > 0.45 && ai.boostCool <= 0 && race.started && !this.finished) {
      let straight = true;
      for (let d = 10; d <= 90; d += 10) if (Math.abs(tr.curv[tr.idx(this.s + d)]) > 0.011) { straight = false; break; }
      if (straight && rnd.next() < dt * 0.9) { ai.boostHold = rnd.range(1.2, 2.4); ai.boostCool = rnd.range(5, 10); }
    }
    if (ai.boostHold > 0) ai.boostHold -= dt;
    inp.boost = ai.boostHold > 0;
  }

  // ------------------------------------------------------------ physics step
  update(dt, race, events) {
    const P = PHYS, tr = this.track, inp = this.input, pr = this.proj;
    if (!this.isPlayer || this.finished) this.think(dt, race);
    if (!race.started) { inp.throttle = 0; inp.brake = 1; inp.steer = 0; inp.boost = false; inp.drift = false; }
    this.padCool -= dt; this.bumpCool -= dt;

    tr.project(this.pos.x, this.pos.z, this.idx, pr);
    const onRoad = Math.abs(pr.lat) <= pr.halfW + 0.6;
    let surf = onRoad ? 'road' : this.terrain.surfaceAt(this.pos.x, this.pos.z);
    if (surf === 'ground') surf = 'grass';
    this.surface = surf;
    const mul = surf === 'road' ? 1 : surf === 'grass' ? P.grassMul : P.waterMul;

    // whip boost uses the 牛劲 meter; pads and mini-turbos use boostTime
    const wasBoosting = this.boosting;
    this.boosting = inp.boost && this.boost > 0.02 && race.started;
    if (this.boosting) this.boost = Math.max(0, this.boost - P.meterUse * dt);
    else this.boost = Math.min(1, this.boost + P.meterRegen * dt);
    if (this.boosting && !wasBoosting && events) events.push({ type: 'whip', racer: this });
    this.boostTime = Math.max(0, this.boostTime - dt);
    const boosted = this.boostActive;

    const fx = Math.sin(this.heading), fz = Math.cos(this.heading), rx = -fz, rz = fx;
    let vF = this.vel.x * fx + this.vel.y * fz, vR = this.vel.x * rx + this.vel.y * rz;
    const st = this.stats;
    const vmax = P.vmax * mul * this.skillMul * st.spd * (boosted ? P.boostMul : 1);
    if (inp.throttle > 0 && vF < vmax) vF += inp.throttle * (boosted ? P.boostAccel : P.accel * st.acc) * Math.max(0.12, 1 - vF / vmax) * dt * (vF < 0 ? 2.2 : 1);
    if (boosted && vF < vmax) vF += 6 * dt;
    if (inp.brake > 0) {
      if (vF > 0.5) vF -= P.brake * inp.brake * dt;
      else if (race.started) vF = Math.max(-P.reverseMax, vF - P.accel * 0.6 * inp.brake * dt);
      else vF = damp(vF, 0, 8, dt);
    }
    if (!inp.throttle && !inp.brake) vF -= Math.sign(vF) * Math.min(Math.abs(vF), P.roll * dt);
    vF -= vF * P.drag * dt;
    if (vF > vmax) vF = damp(vF, vmax, surf === 'road' ? 1.2 : 2.6, dt);

    // steering and drifting
    const spd = Math.abs(vF);
    // a buffalo can pivot on the spot, so some steering remains even when standing still
    const sf = Math.max(clamp(spd / 6, 0, 1), 0.42) * (1 - 0.3 * clamp(spd / P.vmax, 0, 1.3));
    const yawK = P.yaw * st.hdl;
    let yawRate = inp.steer * yawK * sf * (vF < -0.3 ? -1 : 1);
    if (inp.drift && !this.drifting && spd > 12 && Math.abs(inp.steer) > 0.3) {
      this.drifting = true; this.driftDir = Math.sign(inp.steer); this.driftCharge = 0;
      if (events) events.push({ type: 'driftStart', racer: this });
    }
    if (this.drifting) {
      if (!inp.drift || spd < 8) {
        if (this.driftCharge > 0.7) {
          this.boostTime = Math.max(this.boostTime, this.driftCharge > 1.6 ? 1.3 : 0.7);
          if (events) events.push({ type: 'miniturbo', racer: this, level: this.driftCharge > 1.6 ? 2 : 1 });
        }
        this.drifting = false;
      } else {
        yawRate = this.driftDir * yawK * sf * (0.7 + 0.5 * inp.steer * this.driftDir);
        this.driftCharge += dt * (0.6 + 0.5 * Math.abs(inp.steer));
      }
    }
    this.heading += yawRate * dt;
    const vx = fx * vF + rx * vR, vz = fz * vF + rz * vR;
    const nfx = Math.sin(this.heading), nfz = Math.cos(this.heading), nrx = -nfz, nrz = nfx;
    let nF = vx * nfx + vz * nfz, nR = vx * nrx + vz * nrz;
    nR *= Math.exp(-(this.drifting ? P.driftGrip : surf === 'road' ? P.grip : P.grip * 0.75) * dt);
    if (this.drifting) nF += Math.abs(nR) * 0.4 * dt * 8;
    this.vel.set(nfx * nF + nrx * nR, nfz * nF + nrz * nR);
    this.vF = nF;

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.y * dt;

    // invisible walls just inside the bamboo fences
    tr.project(this.pos.x, this.pos.z, this.idx, pr);
    if (Math.abs(pr.lat) > pr.wall) {
      const i = pr.i, sg = Math.sign(pr.lat), over = Math.abs(pr.lat) - pr.wall;
      this.pos.x -= tr.rx[i] * sg * over; this.pos.z -= tr.rz[i] * sg * over;
      const vn = (this.vel.x * tr.rx[i] + this.vel.y * tr.rz[i]) * sg;
      if (vn > 0) {
        this.vel.x -= tr.rx[i] * sg * vn * 1.35; this.vel.y -= tr.rz[i] * sg * vn * 1.35;
        this.vel.multiplyScalar((1 - Math.min(0.45, vn * 0.02)) * Math.exp(-1.5 * dt));
        if (vn > 4 && this.bumpCool <= 0 && events) { events.push({ type: 'bump', racer: this, strength: vn }); this.bumpCool = 0.4; }
      }
      pr.lat -= sg * over;
    }
    for (const o of tr.obstacles) {
      const dx = this.pos.x - o.x, dz = this.pos.z - o.z, d = Math.hypot(dx, dz), min = o.r + 1.2;
      if (d < min && d > 1e-4) {
        const nx = dx / d, nz = dz / d;
        this.pos.x = o.x + nx * min; this.pos.z = o.z + nz * min;
        const vn = this.vel.x * nx + this.vel.y * nz;
        if (vn < 0) {
          this.vel.x -= nx * vn * 1.4; this.vel.y -= nz * vn * 1.4; this.vel.multiplyScalar((1 + Math.max(-0.5, vn * 0.025)) * Math.exp(-2 * dt));
          if (-vn > 4 && this.bumpCool <= 0 && events) { events.push({ type: 'bump', racer: this, strength: -vn }); this.bumpCool = 0.4; }
        }
      }
    }
    this.idx = pr.i; this.lat = pr.lat;

    // height, pitch and roll from the ground under the hooves
    const ground = (x, z) => this.terrain.heightAt(x, z);
    let gy = Math.abs(pr.lat) <= pr.halfW + 0.8 ? pr.y + 0.06 : Math.max(ground(this.pos.x, this.pos.z), pr.y - 30);
    if (surf === 'water') gy = Math.max(gy, WATER_LEVEL - 0.9);
    this.y = damp(this.y, gy, 20, dt);
    const hF = ground(this.pos.x + nfx * 1.4, this.pos.z + nfz * 1.4), hB = ground(this.pos.x - nfx * 1.4, this.pos.z - nfz * 1.4);
    const hL = ground(this.pos.x - nrx * 0.8, this.pos.z - nrz * 0.8), hR = ground(this.pos.x + nrx * 0.8, this.pos.z + nrz * 0.8);
    this.pitch = damp(this.pitch, clamp(Math.atan2(hB - hF, 2.8), -0.35, 0.35), 8, dt);
    this.roll = damp(this.roll, clamp(Math.atan2(hL - hR, 1.6), -0.3, 0.3), 8, dt);
    this.pos.y = this.y;

    // progress along the circuit
    let d = pr.s - this.s;
    if (d > tr.length / 2) d -= tr.length; else if (d < -tr.length / 2) d += tr.length;
    this.raceDist += d; this.s = pr.s;
    const comp = Math.floor(this.raceDist / tr.length);
    if (comp > this.completed && race.started) {
      if (comp >= 1 && !this.finished) {
        const lt = race.time - this.lapStart;
        this.lapTimes.push(lt); this.bestLap = Math.min(this.bestLap, lt); this.lapStart = race.time;
        if (events) events.push({ type: 'lap', racer: this, lap: comp, time: lt });
        if (comp >= race.laps) { this.finished = true; this.finishTime = race.time; if (events) events.push({ type: 'finish', racer: this }); }
      }
      this.completed = comp;
    }
    const tdot = this.vel.x * tr.tx[pr.i] + this.vel.y * tr.tz[pr.i];
    this.wrongWay = tdot < -3 ? this.wrongWay + dt : Math.max(0, this.wrongWay - dt * 2);
    if (race.started && !this.finished && inp.throttle > 0 && spd < 2) this.stuck += dt; else this.stuck = Math.max(0, this.stuck - dt);
    if (this.stuck > 3.5 || (!this.isPlayer && this.wrongWay > 2.5)) this.respawn();
  }

  updateModel(dt) {
    const m = this.model;
    m.root.position.copy(this.pos);
    m.root.rotation.y = this.heading;
    m.update(dt, { speed: this.vF, steer: this.drifting ? this.driftDir * 0.8 : this.input.steer, boosting: this.boostActive, pitch: this.pitch, roll: this.roll, cheer: this.finished });
  }
}

// Push overlapping buffaloes apart and trade momentum.
export function collideRacers(racers, events) {
  const R = 2.7;
  for (let a = 0; a < racers.length; a++) for (let b = a + 1; b < racers.length; b++) {
    const A = racers[a], B = racers[b];
    const dx = B.pos.x - A.pos.x, dz = B.pos.z - A.pos.z, d = Math.hypot(dx, dz);
    if (d >= R || d < 1e-4) continue;
    const nx = dx / d, nz = dz / d, push = (R - d) / 2;
    A.pos.x -= nx * push; A.pos.z -= nz * push; B.pos.x += nx * push; B.pos.z += nz * push;
    const rv = (B.vel.x - A.vel.x) * nx + (B.vel.y - A.vel.y) * nz;
    if (rv < 0) {
      const j = -rv * 0.6;
      A.vel.x -= nx * j; A.vel.y -= nz * j; B.vel.x += nx * j; B.vel.y += nz * j;
      if (-rv > 3 && events) events.push({ type: 'bump', racer: A.isPlayer ? A : B, other: A.isPlayer ? B : A, strength: -rv });
    }
  }
}
