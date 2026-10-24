// architecture.js — Huizhou village, paifang start gate, pagoda, pavilions, bridges, water wheel.
import * as THREE from 'three';
import { Rand, TAU, clamp, lerp, smoothstep, GeoBuilder, taperedTube, makeMat, col } from './util.js';
import { plaqueTexture } from './textures.js';
import { Kit, addRoof, addGableRoof, gridGeo } from './roofs.js';
import { WATER_LEVEL as WL, LAKE, ISLAND, RIVER, riverHalfWidth } from './track.js';

const RED = 0xa02d24, STONE = 0x8f8d85, DARK_STONE = 0x6c6e68, WOOD = 0x5b3b28, GOLD = 0xd4a94a;
const BLUE = 0x2b5b78, GREEN = 0x3d7458;
const _c = new THREE.Color();

// Bakes a colour gradient from local positions into the geometry (kept through the kit transform).
function paint(geo, fn) {
  const P = geo.attributes.position, arr = new Float32Array(P.count * 3);
  for (let i = 0; i < P.count; i++) {
    const c = fn(P.getX(i), P.getY(i), P.getZ(i));
    arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

// ------------------------------------------------------------------ Huizhou house (徽派民居)
// Local frame: the front (door) faces +z, length along x. y = 0 is the plinth base level.
function huizhou(kit, rnd, L, D, H, withLanterns) {
  const white = col(0xeee9de), stain = col(0xa9a69c), dirt = col(0x9b968a);
  kit.S(new THREE.BoxGeometry(L + 0.3, 2.6, D + 0.3), DARK_STONE, [0, -0.7, 0]);
  const wall = paint(new THREE.BoxGeometry(L, H - 0.6, D, 1, 5, 1), (x, y) =>
    _c.copy(white).lerp(stain, smoothstep((H - 0.6) / 2 - 1.8, (H - 0.6) / 2, y) * 0.32).lerp(dirt, smoothstep(-(H - 0.6) / 2 + 1.2, -(H - 0.6) / 2, y) * 0.35));
  kit.S(wall, null, [0, (H + 0.6) / 2, 0]);
  const roofH = D * 0.27;
  addGableRoof(kit, L - 0.3, D, roofH, [0, H, 0]);
  // stepped horse-head gable walls (马头墙)
  const steps = rnd.chance(0.5) ? 3 : 2;
  for (const sx of [-1, 1]) {
    for (let i = 0; i < steps; i++) {
      const w = (D / 2 + 0.5) * (1 - (i / steps) * 0.85), top = H + (roofH + 1.0) * (i + 1) / steps;
      const x = sx * (L / 2 + 0.02);
      const g = paint(new THREE.BoxGeometry(0.5, top - H + 0.4, w * 2, 1, 2, 1), (xx, y) => _c.copy(white).lerp(stain, smoothstep(0, (top - H) / 2, y) * 0.3));
      kit.S(g, null, [x, (top + H - 0.4) / 2, 0]);
      kit.S(new THREE.BoxGeometry(0.9, 0.22, w * 2 + 0.35), 0x2f3033, [x, top + 0.1, 0]);
      kit.S(new THREE.BoxGeometry(0.7, 0.08, w * 2 + 0.2), 0xd8d4c8, [x, top - 0.06, 0]);
      for (const sz of [-1, 1]) kit.S(new THREE.BoxGeometry(0.85, 0.2, 0.55), 0x2f3033, [x, top + 0.24, sz * (w + 0.25)], [sz * -0.55, 0, 0]);
    }
  }
  // door with stone frame and a little tiled canopy (门罩)
  const dx = rnd.range(-L * 0.15, L * 0.15);
  kit.S(new THREE.BoxGeometry(2.1, 3.0, 0.16), 0x9e9b91, [dx, 2.1, D / 2 + 0.06]);
  kit.S(new THREE.BoxGeometry(1.5, 2.5, 0.12), 0x3b281d, [dx, 1.85, D / 2 + 0.12]);
  kit.S(new THREE.BoxGeometry(0.06, 2.5, 0.14), 0x22170f, [dx, 1.85, D / 2 + 0.14]);
  for (const s of [-1, 1]) kit.S(new THREE.SphereGeometry(0.06, 6, 4), GOLD, [dx + s * 0.18, 1.9, D / 2 + 0.2]);
  kit.S(new THREE.BoxGeometry(1.3, 0.42, 0.08), 0x1f2b39, [dx, 3.35, D / 2 + 0.16]);
  addRoof(kit, { rx: 1.7, rz: 0.55, ridge: 1.1, h: 0.45, curl: 0.22, rings: 4, per: 4, thick: 0.12, ridgeR: 0.06 }, [dx, 3.75, D / 2 + 0.45]);
  // small lattice windows
  const nw = Math.max(1, Math.floor(L / 4.5));
  for (let k = 0; k < nw; k++) {
    const wx = -L / 2 + (L / nw) * (k + 0.5);
    if (Math.abs(wx - dx) < 1.5) continue;
    kit.W(new THREE.PlaneGeometry(0.95, 1.1), [wx, H - 1.7, D / 2 + 0.03]);
    kit.S(new THREE.BoxGeometry(1.25, 0.12, 0.35), 0x2f3033, [wx, H - 1.08, D / 2 + 0.15]);
  }
  for (const sx of [-1, 1]) if (rnd.chance(0.6)) kit.W(new THREE.PlaneGeometry(0.8, 0.9), [sx * (L / 2 + 0.28), H - 2, 0], [0, sx * Math.PI / 2, 0]);
  if (withLanterns) for (const s of [-1, 1]) kit.lanterns.push(kit.world(dx + s * 1.45, 3.0, D / 2 + 0.55));
}

function placeHouse(kit, terrain, rnd, x, z, yaw, L, D, H, lanterns) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  let y = Infinity;
  for (const [a, b] of [[-L / 2, -D / 2], [L / 2, -D / 2], [-L / 2, D / 2], [L / 2, D / 2], [0, 0]]) {
    y = Math.min(y, terrain.heightAt(x + a * c + b * s, z - a * s + b * c));
  }
  kit.at(makeMat([x, y + 0.02, z], [0, yaw, 0]));
  huizhou(kit, rnd, L, D, H, lanterns);
  terrain.reserve(x, z, Math.hypot(L, D) / 2 + 1.2);
}

function village(kit, track, terrain, rnd) {
  const Ltot = track.length;
  for (const side of [-1, 1]) for (let row = 0; row < 2; row++) {
    let s = Ltot - 182 + rnd.range(0, 6);
    while (s < Ltot + 132) {
      const L = rnd.range(8, 13), D = rnd.range(7, 9), H = rnd.range(5.4, 7.2);
      const sc = (s + L / 2) % Ltot, i = track.idx(sc);
      const lat = side * (track.wall[i] + 9.5 + D / 2 + row * (D + 7) + rnd.range(-0.6, 0.6));
      const x = track.px[i] + track.rx[i] * lat, z = track.pz[i] + track.rz[i] * lat;
      const dirx = -track.rx[i] * side, dirz = -track.rz[i] * side;
      if (terrain.heightAt(x, z) > WL + 1.5 && !terrain.blocked(x, z, Math.hypot(L, D) / 2) && rnd.chance(0.9)) {
        placeHouse(kit, terrain, rnd, x, z, Math.atan2(dirx, dirz), L, D, H, row === 0);
      }
      s += L + rnd.range(2.5, 6);
    }
  }
}

function hamlet(kit, track, terrain, rnd, cx, cz, r, n) {
  let placed = 0;
  for (let a = 0; a < 80 && placed < n; a++) {
    const x = cx + rnd.range(-r, r), z = cz + rnd.range(-r, r);
    const L = rnd.range(8, 12), D = rnd.range(7, 8.5), H = rnd.range(5, 6.6);
    const i = track.nearestIndex(x, z);
    if (i >= 0 && track.distance(x, z) < track.wall[i] + 12 + L / 2) continue;
    if (terrain.heightAt(x, z) < WL + 1.5 || terrain.blocked(x, z, Math.hypot(L, D) / 2 + 2) || terrain.paddyAt(x, z)) continue;
    placeHouse(kit, terrain, rnd, x, z, rnd.int(0, 3) * Math.PI / 2 + rnd.range(-0.15, 0.15), L, D, H, false);
    placed++;
  }
}

// ------------------------------------------------------------------ paifang start gate (牌坊)
function paifang(kit, track, scene) {
  const yaw = track.headingAt(0);
  const P = [track.px[0], track.py[0], track.pz[0]];
  kit.at(makeMat(P, [0, yaw, 0]));
  const pillars = [[-11.6, 12.4], [11.6, 12.4], [-19.2, 9.4], [19.2, 9.4]];
  for (const [x, h] of pillars) {
    kit.S(new THREE.CylinderGeometry(0.62, 0.66, h, 14), RED, [x, h / 2, 0]);
    kit.S(new THREE.CylinderGeometry(1.0, 1.1, 1.1, 14), STONE, [x, 0.4, 0]);
    for (const sz of [-1, 1]) {
      kit.S(new THREE.BoxGeometry(0.9, 1.6, 1.3), STONE, [x, 0.6, sz * 1.15]);
      kit.S(new THREE.CylinderGeometry(0.75, 0.75, 0.8, 16), STONE, [x, 1.75, sz * 1.15], [0, 0, Math.PI / 2]);
    }
    const w = kit.world(x, 0, 0);
    track.obstacles.push({ x: w.x, z: w.z, r: 1.15 });
  }
  const beam = (x0, x1, y, hgt, c) => {
    kit.S(new THREE.BoxGeometry(x1 - x0, hgt, 0.8), c, [(x0 + x1) / 2, y, 0]);
    for (const dy of [-1, 1]) kit.S(new THREE.BoxGeometry(x1 - x0, 0.08, 0.84), GOLD, [(x0 + x1) / 2, y + dy * hgt / 2, 0]);
  };
  beam(-12.2, 12.2, 8.4, 0.9, BLUE);
  beam(-12.2, 12.2, 11.3, 0.75, GREEN);
  for (const s of [-1, 1]) { beam(s > 0 ? 11.6 : -19.8, s > 0 ? 19.8 : -11.6, 6.4, 0.75, GREEN); beam(s > 0 ? 11.6 : -19.8, s > 0 ? 19.8 : -11.6, 8.2, 0.6, BLUE); }
  for (let x = -11.4; x <= 11.4; x += 1.2) kit.S(new THREE.BoxGeometry(0.55, 0.45, 1.0), (Math.round(x / 1.2) & 1) ? RED : GREEN, [x, 11.9, 0]);
  for (const s of [-1, 1]) for (let x = 12.2; x <= 19; x += 1.2) kit.S(new THREE.BoxGeometry(0.5, 0.4, 0.9), (Math.round(x / 1.2) & 1) ? RED : GREEN, [s * x, 8.7, 0]);
  addRoof(kit, { rx: 13.8, rz: 2.2, ridge: 10.5, h: 2.3, curl: 1.0, flare: 0.05, rings: 7, per: 10, thick: 0.3, ridgeR: 0.2 }, [0, 12.2, 0], [0, 0, 0], { pearl: true, under: 0x2f5f73 });
  for (const s of [-1, 1]) addRoof(kit, { rx: 4.8, rz: 1.8, ridge: 3.1, h: 1.6, curl: 0.75, flare: 0.06, rings: 6, per: 8, thick: 0.25, ridgeR: 0.16 }, [s * 15.4, 9.0, 0], [0, 0, 0], { under: 0x2f5f73 });
  // plaques facing both approaches
  const mk = (text, rotY, z) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(7.2, 2.25), new THREE.MeshStandardMaterial({ map: plaqueTexture(text), roughness: 0.55, metalness: 0.1 }));
    m.matrixAutoUpdate = false;
    m.matrix.copy(kit.M([0, 9.85, z], [0, rotY, 0]));
    scene.add(m);
  };
  mk('牧童赛牛', Math.PI, -0.45);
  mk('牛气冲天', 0, 0.45);
  kit.S(new THREE.BoxGeometry(7.6, 2.6, 0.7), 0x7a1f17, [0, 9.85, 0]);
  // festival drums on stands beside the gate
  for (const s of [-1, 1]) {
    const x = s * 24.5;
    kit.S(new THREE.CylinderGeometry(1.25, 1.25, 1.4, 20), 0xa8322a, [x, 2.4, -3], [Math.PI / 2, 0, 0]);
    for (const dz of [-0.72, 0.72]) kit.S(new THREE.CylinderGeometry(1.18, 1.18, 0.05, 20), 0xe6d5b0, [x, 2.4, -3 + dz], [Math.PI / 2, 0, 0]);
    for (const dx of [-0.9, 0.9]) kit.S(new THREE.BoxGeometry(0.16, 2.0, 0.16), WOOD, [x + dx, 0.9, -3]);
    const w = kit.world(x, 0, -3);
    track.obstacles.push({ x: w.x, z: w.z, r: 1.6 });
  }
}

// ------------------------------------------------------------------ pagoda (宝塔)
function pagoda(kit, x, z, y0) {
  kit.at(makeMat([x, y0, z], [0, 0.35, 0]));
  kit.S(new THREE.CylinderGeometry(7.6, 8.2, 3, 8), STONE, [0, -0.6, 0]);
  kit.S(new THREE.CylinderGeometry(6.3, 6.7, 1.0, 8), STONE, [0, 1.4, 0]);
  const cream = col(0xece2cb), shade = col(0xc9bda4);
  let y = 1.9, r = 4.7;
  for (let f = 0; f < 7; f++) {
    const hgt = f === 0 ? 4.4 : 3.3 - f * 0.12;
    const body = paint(new THREE.CylinderGeometry(r * 0.96, r, hgt, 8, 2), (xx, yy) => _c.copy(cream).lerp(shade, smoothstep(hgt / 2 - 0.8, hgt / 2, yy) * 0.5));
    kit.S(body, null, [0, y + hgt / 2, 0]);
    for (let j = 0; j < 8; j++) {
      const th = (j / 8) * TAU;
      kit.S(new THREE.CylinderGeometry(0.17, 0.17, hgt, 6), RED, [Math.sin(th) * r * 0.99, y + hgt / 2, Math.cos(th) * r * 0.99]);
      const tf = th + TAU / 16, ap = r * Math.cos(Math.PI / 8);
      if ((j + f) % 2 === 0) {
        kit.S(new THREE.BoxGeometry(1.15, 1.9, 0.3), 0x2b1d16, [Math.sin(tf) * ap, y + 1.25, Math.cos(tf) * ap], [0, tf, 0]);
        kit.S(new THREE.BoxGeometry(1.45, 0.16, 0.36), RED, [Math.sin(tf) * ap, y + 2.25, Math.cos(tf) * ap], [0, tf, 0]);
      } else {
        kit.W(new THREE.PlaneGeometry(0.9, 0.9), [Math.sin(tf) * (ap + 0.05), y + hgt * 0.55, Math.cos(tf) * (ap + 0.05)], [0, tf, 0]);
      }
    }
    kit.S(new THREE.CylinderGeometry(r * 1.02, r * 1.02, 0.3, 8), RED, [0, y + hgt - 0.15, 0]);
    const top = f === 6;
    addRoof(kit, { sides: 8, regular: true, rx: r + 1.7, h: top ? 3.2 : 1.6, curl: 0.62, flare: 0.07, sag: top ? 1.5 : 1.9, rings: 6, per: 4, thick: 0.28, ridgeR: 0.12, noFinial: !top }, [0, y + hgt, 0], [0, 0, 0], { tile: 0x404846, under: 0x7a3b2c });
    y += hgt + 1.0;
    r *= 0.9;
  }
  // gilded spire (塔刹)
  let sy = y + 2.0;
  kit.S(new THREE.CylinderGeometry(0.08, 0.1, 6.5, 6), GOLD, [0, sy + 3.0, 0]);
  for (let k = 0; k < 6; k++) kit.S(new THREE.TorusGeometry(0.55 - k * 0.06, 0.09, 6, 16), GOLD, [0, sy + 0.8 + k * 0.6, 0], [Math.PI / 2, 0, 0]);
  kit.S(new THREE.SphereGeometry(0.5, 12, 10), GOLD, [0, sy + 4.9, 0]);
  kit.S(new THREE.SphereGeometry(0.3, 10, 8), GOLD, [0, sy + 5.8, 0]);
  return y;
}

// ------------------------------------------------------------------ hexagonal pavilion (六角亭)
function pavilion(kit, x, z, y0, yaw) {
  kit.at(makeMat([x, y0, z], [0, yaw, 0]));
  kit.S(new THREE.CylinderGeometry(3.6, 3.9, 2.4, 6), STONE, [0, -0.5, 0], [0, Math.PI / 6, 0]);
  kit.S(new THREE.BoxGeometry(2.2, 0.35, 1.0), STONE, [0, 0.18, 3.9]);
  const pr = 3.05;
  const corners = [];
  for (let j = 0; j < 6; j++) { const th = (j / 6) * TAU + Math.PI / 6; corners.push([Math.sin(th) * pr, Math.cos(th) * pr]); }
  for (const [px, pz] of corners) {
    kit.S(new THREE.CylinderGeometry(0.17, 0.19, 3.5, 8), RED, [px, 0.7 + 1.75, pz]);
    kit.S(new THREE.CylinderGeometry(0.3, 0.3, 0.25, 8), STONE, [px, 0.82, pz]);
  }
  for (let j = 0; j < 6; j++) {
    const [ax, az] = corners[j], [bx, bz] = corners[(j + 1) % 6];
    const mx = (ax + bx) / 2, mz = (az + bz) / 2, len = Math.hypot(bx - ax, bz - az), rot = Math.atan2(bx - ax, bz - az) + Math.PI / 2;
    kit.S(new THREE.BoxGeometry(len, 0.42, 0.24), j % 2 ? BLUE : GREEN, [mx, 3.95, mz], [0, rot, 0]);
    kit.S(new THREE.BoxGeometry(len, 0.06, 0.28), GOLD, [mx, 4.18, mz], [0, rot, 0]);
    if (Math.abs(mz - pr) > 1) { // benches everywhere except the entrance
      kit.S(new THREE.BoxGeometry(len - 0.3, 0.12, 0.55), WOOD, [mx * 0.92, 1.2, mz * 0.92], [0, rot, 0]);
      kit.S(new THREE.BoxGeometry(len - 0.3, 0.55, 0.08), RED, [mx * 1.0, 1.55, mz * 1.0], [0, rot, 0]);
    }
  }
  addRoof(kit, { sides: 6, regular: true, rx: 4.5, h: 2.9, curl: 0.95, flare: 0.1, sag: 1.8, rings: 7, per: 6, thick: 0.25, ridgeR: 0.12, rot: 0 }, [0, 4.2, 0], [0, 0, 0], { under: 0x7a3b2c });
}

// ------------------------------------------------------------------ zigzag bridge to the island (九曲桥)
function zigzag(kit, pts, y) {
  kit.at(new THREE.Matrix4());
  for (let k = 0; k < pts.length - 1; k++) {
    const [ax, az] = pts[k], [bx, bz] = pts[k + 1];
    const len = Math.hypot(bx - ax, bz - az), rot = Math.atan2(bx - ax, bz - az);
    const mx = (ax + bx) / 2, mz = (az + bz) / 2;
    kit.S(new THREE.BoxGeometry(2.4, 0.35, len + 2.4), 0xa6a398, [mx, y, mz], [0, rot, 0]);
    for (let t = 0; t <= 1.001; t += 1 / Math.max(1, Math.round(len / 3))) {
      const x = lerp(ax, bx, t), z = lerp(az, bz, t);
      kit.S(new THREE.CylinderGeometry(0.22, 0.26, 3.5, 6), STONE, [x, y - 1.9, z]);
      for (const s of [-1, 1]) {
        const ox = Math.cos(rot) * 1.1 * s, oz = -Math.sin(rot) * 1.1 * s;
        kit.S(new THREE.BoxGeometry(0.18, 0.8, 0.18), STONE, [x + ox, y + 0.55, z + oz]);
      }
    }
    for (const s of [-1, 1]) {
      const ox = Math.cos(rot) * 1.1 * s, oz = -Math.sin(rot) * 1.1 * s;
      kit.S(new THREE.BoxGeometry(0.12, 0.1, len), 0xb5b2a7, [mx + ox, y + 0.85, mz + oz], [0, rot, 0]);
      kit.S(new THREE.BoxGeometry(0.1, 0.08, len), 0xb5b2a7, [mx + ox, y + 0.45, mz + oz], [0, rot, 0]);
    }
  }
}

// ------------------------------------------------------------------ stone arch bridge (石拱桥)
function archBridge(kit, track) {
  const bi = track.bridgeIndex, yaw = track.headingAt(bi);
  kit.at(makeMat([track.px[bi], 0, track.pz[bi]], [0, yaw, 0]));
  const half = 17, hw = track.halfW[bi], s0 = bi * track.ds;
  const topAt = (z) => track.py[track.idx(s0 + z)] - 0.06;
  const shape = new THREE.Shape();
  shape.moveTo(-half, WL - 3.2);
  for (let z = -half; z <= half + 0.01; z += 2) shape.lineTo(z, topAt(z));
  shape.lineTo(half, WL - 3.2);
  shape.closePath();
  const ax = 7.6, ay = 5.0, cy = WL - 0.4;
  const hole = new THREE.Path();
  hole.moveTo(-ax, WL - 2.6);
  hole.lineTo(-ax, cy);
  hole.absellipse(0, cy, ax, ay, Math.PI, 0, true);
  hole.lineTo(ax, WL - 2.6);
  hole.closePath();
  shape.holes.push(hole);
  const stone = col(0x9a9d98), moss = col(0x5f6d4f), lite = col(0xb4b5ad);
  const shade = (x, y, z) => _c.copy(stone).lerp(lite, smoothstep(2, 6, y) * 0.4).lerp(moss, smoothstep(WL + 1.4, WL - 0.6, y) * 0.75);
  for (const side of [-1, 1]) {
    const g = new THREE.ExtrudeGeometry(shape, { depth: 1.0, bevelEnabled: false, curveSegments: 18 });
    g.rotateY(-Math.PI / 2);
    g.translate(side > 0 ? hw + 1.3 : -(hw + 0.3), 0, 0);
    kit.S(paint(g, shade), null, [0, 0, 0]);
  }
  // arch barrel seen from below
  const W = hw + 1.3, cols = 6, rows = 16, pos = [];
  for (let k = 0; k <= rows; k++) {
    const a = Math.PI * (1 - k / rows);
    for (let m = 0; m <= cols; m++) pos.push(-W + (2 * W * m) / cols, cy + Math.sin(a) * ay, Math.cos(a) * ax);
  }
  kit.S(paint(gridGeo(pos, null, cols, rows, true), shade), null, [0, 0, 0]);
  // parapet posts & panels following the deck curve
  for (const side of [-1, 1]) {
    const x = side * (hw + 0.8);
    let prev = null;
    for (let z = -half + 0.5; z <= half - 0.4; z += 2.4) {
      const y = topAt(z);
      kit.S(new THREE.BoxGeometry(0.42, 1.45, 0.42), 0xa9aaa2, [x, y + 0.72, z]);
      kit.S(new THREE.SphereGeometry(0.26, 8, 6), 0xb8b8b0, [x, y + 1.6, z]);
      if (prev) {
        const len = z - prev[0], pitch = Math.atan2(y - prev[1], len);
        kit.S(new THREE.BoxGeometry(0.2, 0.8, len - 0.4), 0xb3b3ab, [x, (y + prev[1]) / 2 + 0.6, (z + prev[0]) / 2], [-pitch, 0, 0]);
      }
      prev = [z, y];
    }
  }
}

// ------------------------------------------------------------------ water wheel (筒车)
function waterWheel(scene, kit, terrain) {
  let best = 0, bd = Infinity;
  RIVER.forEach(([x, z], i) => { const d = Math.hypot(x + 405, z - 6); if (d < bd) { bd = d; best = i; } });
  const [x0, z0] = RIVER[best], [x1, z1] = RIVER[best + 1];
  const fx = (x1 - x0), fz = (z1 - z0), fl = Math.hypot(fx, fz);
  const nx = -fz / fl, nz = fx / fl, hw = riverHalfWidth(best / (RIVER.length - 1));
  const cx = x0 + nx * (hw - 2.2), cz = z0 + nz * (hw - 2.2), cy = WL + 2.5;
  const yaw = Math.atan2(nx, nz); // axle along the bank normal
  const R = 4.3;
  const wheel = new GeoBuilder();
  for (const s of [-0.45, 0.45]) wheel.add(new THREE.TorusGeometry(R, 0.1, 5, 36), WOOD, [0, 0, s], [0, 0, 0]);
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * TAU;
    for (const s of [-0.45, 0.45]) wheel.add(new THREE.BoxGeometry(0.12, R * 2, 0.12), WOOD, [0, 0, s], [0, 0, a]);
  }
  for (let k = 0; k < 18; k++) {
    const a = (k / 18) * TAU;
    wheel.add(new THREE.BoxGeometry(0.9, 0.08, 1.2), 0x7a5a3c, [Math.cos(a) * R, Math.sin(a) * R, 0], [0, 0, a]);
    wheel.add(new THREE.CylinderGeometry(0.16, 0.16, 0.7, 6), 0x9aa85a, [Math.cos(a) * (R + 0.25), Math.sin(a) * (R + 0.25), 0.55], [0, 0, a + 0.4]);
  }
  wheel.add(new THREE.CylinderGeometry(0.22, 0.22, 2.2, 8), 0x4a3324, [0, 0, 0], [Math.PI / 2, 0, 0]);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
  const wm = new THREE.Mesh(wheel.build(), mat);
  wm.castShadow = true;
  const g = new THREE.Group();
  g.position.set(cx, cy, cz);
  g.rotation.y = yaw;
  g.add(wm);
  scene.add(g);
  kit.at(makeMat([cx, cy, cz], [0, yaw, 0]));
  for (const s of [-1.2, 1.2]) {
    kit.S(new THREE.BoxGeometry(0.25, 6.5, 0.25), WOOD, [-1.4, -1.2, s], [0, 0, -0.32]);
    kit.S(new THREE.BoxGeometry(0.25, 6.5, 0.25), WOOD, [1.4, -1.2, s], [0, 0, 0.32]);
    kit.S(new THREE.BoxGeometry(3.6, 0.22, 0.22), WOOD, [0, -2.6, s]);
  }
  kit.S(new THREE.BoxGeometry(0.7, 0.4, 7), 0x6e4e34, [0, R + 0.9, 2.8]);
  terrain.reserve(cx, cz, 6);
  return wm;
}

// ------------------------------------------------------------------ assembly
export function buildArchitecture(scene, track, terrain) {
  const rnd = new Rand(88);
  const kit = new Kit();
  paifang(kit, track, scene);
  terrain.reserve(track.px[0], track.pz[0], 4);
  archBridge(kit, track);
  village(kit, track, terrain, rnd);
  hamlet(kit, track, terrain, rnd, 430, 40, 50, 6);
  hamlet(kit, track, terrain, rnd, -440, 105, 45, 5);
  hamlet(kit, track, terrain, rnd, -80, -405, 55, 5);
  hamlet(kit, track, terrain, rnd, 470, -230, 45, 4);

  const iy = terrain.heightAt(ISLAND.x, ISLAND.z);
  pagoda(kit, ISLAND.x, ISLAND.z, iy);
  terrain.reserve(ISLAND.x, ISLAND.z, 10);

  const pav = [[-42, 127], [95, -205], [-150, -60]];
  for (const [x, z] of pav) {
    let px = x, pz = z;
    if (x === -42) { // lakeside: nudge until the platform stands at the water's edge
      for (let k = 0; k < 30 && terrain.heightAt(px, pz) > WL + 1.5; k++) { pz -= 1.5; }
    }
    const y = Math.max(terrain.heightAt(px, pz), WL + 0.6);
    pavilion(kit, px, pz, y, Math.atan2(LAKE.x - px, LAKE.z - pz) + Math.PI);
    terrain.reserve(px, pz, 6);
  }
  // zig-zag causeway from the north shore to the island
  const zz = [];
  const start = [ISLAND.x - 4, LAKE.z - LAKE.r - 2];
  const end = [ISLAND.x - 2, ISLAND.z - ISLAND.r + 6];
  for (let k = 0; k <= 6; k++) zz.push([lerp(start[0], end[0], k / 6) + (k % 2 ? 6 : -6) * (k > 0 && k < 6 ? 1 : 0), lerp(start[1], end[1], k / 6)]);
  zigzag(kit, zz, WL + 0.9);
  for (const [x, z] of zz) terrain.reserve(x, z, 3);

  const wheel = waterWheel(scene, kit, terrain);
  kit.build(scene);
  return {
    lanterns: kit.lanterns,
    update(dt) { wheel.rotation.z -= dt * 0.45; },
  };
}
