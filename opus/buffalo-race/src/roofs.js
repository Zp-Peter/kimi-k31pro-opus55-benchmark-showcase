// roofs.js — Chinese roofs with concave slopes and upturned flying eaves, plus a builder kit.
import * as THREE from 'three';
import { TAU, lerp, GeoBuilder, taperedTube, makeMat } from './util.js';
import { tileTexture, latticeTexture } from './textures.js';

// A set of merge-builders sharing a base transform: solid (vertex colour), tiles (textured), windows.
export class Kit {
  constructor() {
    this.solid = new GeoBuilder(); this.tile = new GeoBuilder(true); this.win = new GeoBuilder(true);
    this.base = new THREE.Matrix4();
    this.lanterns = [];
  }
  at(m) { this.base = m; return this; }
  M(p, r, s) { return p instanceof THREE.Matrix4 ? this.base.clone().multiply(p) : this.base.clone().multiply(makeMat(p, r, s)); }
  S(geo, color, p, r, s) { this.solid.addM(geo, color, this.M(p, r, s)); }
  T(geo, color, p, r, s) { this.tile.addM(geo, color, this.M(p, r, s)); }
  W(geo, p, r, s) { this.win.addM(geo, 0xffffff, this.M(p, r, s)); }
  world(x, y, z) { return new THREE.Vector3(x, y, z).applyMatrix4(this.base); }
  build(parent) {
    const out = [];
    if (this.solid.count) out.push(new THREE.Mesh(this.solid.build(), Kit.mats().solid));
    if (this.tile.count) out.push(new THREE.Mesh(this.tile.build(), Kit.mats().tile));
    if (this.win.count) out.push(new THREE.Mesh(this.win.build(), Kit.mats().win));
    for (const m of out) { m.castShadow = true; m.receiveShadow = true; parent.add(m); }
    return out;
  }
  static mats() {
    if (!Kit._m) {
      const tt = tileTexture();
      Kit._m = {
        solid: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82, metalness: 0 }),
        tile: new THREE.MeshStandardMaterial({ vertexColors: true, map: tt, roughness: 0.7, metalness: 0.05 }),
        win: new THREE.MeshStandardMaterial({ map: latticeTexture(), roughness: 0.9, emissive: 0xffa04a, emissiveIntensity: 0.18 }),
      };
      Kit._m.win.emissiveMap = Kit._m.win.map;
    }
    return Kit._m;
  }
}

// Reverse triangle winding (and normals) — for surfaces seen from inside, e.g. arch barrels.
export function flipGeo(g) {
  const n = g.index ? g.toNonIndexed() : g.clone();
  if (!n.attributes.normal) n.computeVertexNormals();
  const swap = (arr, stride) => {
    for (let i = 0; i < arr.length; i += stride * 3) for (let c = 0; c < stride; c++) {
      const t = arr[i + stride + c]; arr[i + stride + c] = arr[i + 2 * stride + c]; arr[i + 2 * stride + c] = t;
    }
  };
  swap(n.attributes.position.array, 3);
  swap(n.attributes.normal.array, 3);
  if (n.attributes.uv) swap(n.attributes.uv.array, 2);
  const N = n.attributes.normal.array;
  for (let i = 0; i < N.length; i++) N[i] = -N[i];
  return n;
}

export function gridGeo(pos, uv, cols, rows, reverse) {
  const idx = [];
  for (let k = 0; k < rows; k++) for (let m = 0; m < cols; m++) {
    const a = k * (cols + 1) + m, b = a + 1, up = a + cols + 1, ub = up + 1;
    if (reverse) idx.push(a, b, up, b, ub, up); else idx.push(a, up, b, b, up, ub);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  if (uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Hipped roof over a rectangle (rx, rz half extents, optional ridge half-length) or a regular polygon.
export function roofGeo(o) {
  const { sides = 4, rx, rz = rx, ridge = 0, h, curl = 0.8, sag = 1.7, rings = 8, per = 8, thick = 0.25, flare = 0.08, regular = false, rot = 0 } = o;
  const nC = regular ? sides : 4, Pn = nC * per;
  const ringsPts = [];
  for (let k = 0; k <= rings; k++) {
    const t = k / rings;
    let corners;
    if (regular) {
      corners = [];
      const R = rx * (1 - t);
      for (let j = 0; j < sides; j++) { const a = rot + (j / sides) * TAU; corners.push([Math.cos(a) * R, Math.sin(a) * R]); }
    } else {
      const a = lerp(rx, ridge, t), b = rz * (1 - t);
      corners = [[a, b], [-a, b], [-a, -b], [a, -b]];
    }
    const ring = [];
    for (let j = 0; j < nC; j++) {
      const c0 = corners[j], c1 = corners[(j + 1) % nC];
      for (let m = 0; m < per; m++) {
        const s = m / per;
        let x = lerp(c0[0], c1[0], s), z = lerp(c0[1], c1[1], s);
        const cw = Math.pow(Math.abs(2 * s - 1), 2.4), e = Math.pow(1 - t, 2);
        const len = Math.hypot(x, z) || 1, f = flare * cw * e * Math.max(rx, rz);
        x += (x / len) * f; z += (z / len) * f;
        ring.push([x, h * Math.pow(t, sag) + curl * cw * e, z]);
      }
    }
    ring.push(ring[0]);
    ringsPts.push(ring);
  }
  // perimeter distance for u
  const r0 = ringsPts[0], us = [0];
  for (let m = 1; m <= Pn; m++) us.push(us[m - 1] + Math.hypot(r0[m][0] - r0[m - 1][0], r0[m][2] - r0[m - 1][2]));
  const slope = Math.hypot(h, Math.max(rx, rz));
  const tp = [], tu = [], up = [], fp = [];
  for (let k = 0; k <= rings; k++) {
    const t = k / rings, sh = thick * (1 - t * 0.5);
    for (let m = 0; m <= Pn; m++) {
      const [x, y, z] = ringsPts[k][m];
      tp.push(x, y, z); tu.push(us[m] / 3.2, (t * slope) / 3.2);
      up.push(x * 0.985, y - sh, z * 0.985);
    }
  }
  for (let m = 0; m <= Pn; m++) { const [x, y, z] = r0[m]; fp.push(x, y, z); }
  for (let m = 0; m <= Pn; m++) { const [x, y, z] = r0[m]; fp.push(x * 0.985, y - thick, z * 0.985); }
  const fidx = [];
  for (let m = 0; m < Pn; m++) { const T = m, B = m + Pn + 1; fidx.push(T, T + 1, B, T + 1, B + 1, B); }
  const fascia = new THREE.BufferGeometry();
  fascia.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3));
  fascia.setIndex(fidx); fascia.computeVertexNormals();

  const hips = [];
  for (let j = 0; j < nC; j++) {
    const line = [];
    for (let k = 0; k <= rings; k++) { const [x, y, z] = ringsPts[k][j * per]; line.push(new THREE.Vector3(x, y + 0.08, z)); }
    hips.push(line);
  }
  return {
    top: gridGeo(tp, tu, Pn, rings, false),
    under: gridGeo(up, null, Pn, rings, true),
    fascia, hips,
    corners: Array.from({ length: nC }, (_, j) => new THREE.Vector3(...r0[j * per])),
    apex: new THREE.Vector3(ridge, h, 0),
  };
}

// Adds a full roof (tiles, painted underside, fascia, hip ridges, corner tails, ridge/finial).
export function addRoof(kit, o, p, r = [0, 0, 0], colors = {}) {
  const R = roofGeo(o);
  const m = makeMat(p, r);
  const tile = colors.tile ?? 0x4a4c50, under = colors.under ?? 0x7a3b2c, edge = colors.edge ?? 0x2b2c2e, rc = colors.ridge ?? 0x2e2f31;
  const rr = o.ridgeR ?? 0.13;
  kit.T(R.top, tile, m);
  kit.S(R.under, under, m);
  kit.S(R.fascia, edge, m);
  for (const hip of R.hips) kit.S(taperedTube(hip, hip.length * 2, 5, (t) => rr * lerp(1.15, 0.9, t)), rc, m);
  for (const c of R.corners) {
    const out = new THREE.Vector3(c.x, 0, c.z).normalize();
    const pts = [c.clone().add(new THREE.Vector3(0, 0.05, 0)), c.clone().addScaledVector(out, rr * 3).add(new THREE.Vector3(0, rr * 2.5, 0)), c.clone().addScaledVector(out, rr * 4).add(new THREE.Vector3(0, rr * 6, 0))];
    kit.S(taperedTube(pts, 5, 5, (t) => rr * lerp(1.1, 0.3, t)), rc, m);
  }
  const gold = colors.gold ?? 0xcf9f45;
  if (!o.regular && o.ridge > 0) {
    kit.S(new THREE.BoxGeometry(o.ridge * 2 + rr * 2, rr * 3.2, rr * 2.6), rc, m.clone().multiply(makeMat([0, o.h + rr * 0.9, 0])));
    for (const s of [-1, 1]) {
      const b = new THREE.Vector3(s * o.ridge, o.h + rr, 0);
      const pts = [b, b.clone().add(new THREE.Vector3(s * rr * 2, rr * 3, 0)), b.clone().add(new THREE.Vector3(s * rr * 0.5, rr * 7, 0)), b.clone().add(new THREE.Vector3(-s * rr * 1.5, rr * 8, 0))];
      kit.S(taperedTube(pts, 8, 6, (t) => rr * lerp(1.6, 0.5, t)), rc, m);
    }
    if (colors.pearl) kit.S(new THREE.SphereGeometry(rr * 2.2, 10, 8), gold, m.clone().multiply(makeMat([0, o.h + rr * 4.5, 0])));
  } else if (o.regular && !o.noFinial) {
    const a = R.apex;
    kit.S(new THREE.CylinderGeometry(rr * 1.6, rr * 2.4, rr * 4, 8), rc, m.clone().multiply(makeMat([0, a.y + rr * 1.5, 0])));
    kit.S(new THREE.SphereGeometry(rr * 2.6, 10, 8), gold, m.clone().multiply(makeMat([0, a.y + rr * 5, 0])));
    kit.S(new THREE.SphereGeometry(rr * 1.6, 10, 8), gold, m.clone().multiply(makeMat([0, a.y + rr * 8.2, 0])));
    kit.S(new THREE.ConeGeometry(rr * 0.9, rr * 4, 8), gold, m.clone().multiply(makeMat([0, a.y + rr * 11, 0])));
  }
  return R;
}

// Simple double-pitched (gable) roof along x with a slight sag; L, D = full length/depth.
export function addGableRoof(kit, L, D, h, p, colors = {}) {
  const over = 0.55, cols = 10, rows = 6;
  const tile = colors.tile ?? 0x45474b, under = colors.under ?? 0x3a3330;
  for (const side of [1, -1]) {
    const pos = [], uv = [], upos = [];
    for (let k = 0; k <= rows; k++) {
      const t = k / rows;
      const z = side * (D / 2 + over) * (1 - t), y = h * Math.pow(t, 1.25) - over * 0.35 * (1 - t);
      for (let m = 0; m <= cols; m++) {
        const x = lerp(-L / 2 - over * 0.4, L / 2 + over * 0.4, m / cols);
        pos.push(x, y, z); uv.push(x / 3.2, (t * D * 0.6) / 3.2);
        upos.push(x, y - 0.18, z);
      }
    }
    // rows run from the eave up to the ridge, so the winding flips between the two slopes
    kit.T(gridGeo(pos, uv, cols, rows, side > 0), tile, p);
    kit.S(gridGeo(upos, null, cols, rows, side < 0), under, p);
  }
  kit.S(new THREE.BoxGeometry(L + 0.6, 0.32, 0.42), 0x2d2e30, [p[0], p[1] + h + 0.08, p[2]]);
}
