// 碰撞世界：所有碰撞体都是轴对齐盒或竖直圆柱（构件只做 90° 旋转，所以都是 AABB）。
// 角色是竖直胶囊（XZ 平面上的圆），只与和自身高度区间重叠的碰撞体相互作用。

import type { ShapeDef } from './layout';

let nextId = 1;

export class Collider {
  id = nextId++;
  kind: 'box' | 'cyl';
  minX = 0;
  maxX = 0;
  minY = 0;
  maxY = 0;
  minZ = 0;
  maxZ = 0;
  cx = 0;
  cz = 0;
  r = 0;
  move = true;
  sight = true;
  tag = '';
  owner: unknown = null;

  constructor(def: ShapeDef) {
    this.kind = def.kind;
    this.move = def.move;
    this.sight = def.sight;
    this.tag = def.tag;
    this.minY = def.minY;
    this.maxY = def.maxY;
    if (def.kind === 'box') {
      this.minX = def.minX;
      this.maxX = def.maxX;
      this.minZ = def.minZ;
      this.maxZ = def.maxZ;
      this.cx = (def.minX + def.maxX) / 2;
      this.cz = (def.minZ + def.maxZ) / 2;
    } else {
      this.cx = def.x;
      this.cz = def.z;
      this.r = def.r;
      this.minX = def.x - def.r;
      this.maxX = def.x + def.r;
      this.minZ = def.z - def.r;
      this.maxZ = def.z + def.r;
    }
  }

  /** XZ 平面上点到碰撞体的距离（在内部为 0） */
  dist2D(x: number, z: number): number {
    if (this.kind === 'box') {
      const dx = x < this.minX ? this.minX - x : x > this.maxX ? x - this.maxX : 0;
      const dz = z < this.minZ ? this.minZ - z : z > this.maxZ ? z - this.maxZ : 0;
      return Math.sqrt(dx * dx + dz * dz);
    }
    const d = Math.hypot(x - this.cx, z - this.cz) - this.r;
    return d > 0 ? d : 0;
  }
}

export interface PushResult {
  hit: boolean;
  nx: number;
  nz: number;
}

const _res: PushResult = { hit: false, nx: 0, nz: 0 };

export class CollisionWorld {
  list: Collider[] = [];
  /** 最近一次 raycast 命中的碰撞体 */
  lastHit: Collider | null = null;

  add(def: ShapeDef, owner: unknown = null): Collider {
    const c = new Collider(def);
    c.owner = owner;
    this.list.push(c);
    return c;
  }

  remove(c: Collider) {
    const i = this.list.indexOf(c);
    if (i >= 0) this.list.splice(i, 1);
  }

  /** 把半径 r 的圆推出所有阻挡移动的碰撞体。返回最后一次推出的法线（用于削减速度） */
  resolveCircle(p: { x: number; z: number }, r: number, feetY: number, headY: number, step: number): PushResult {
    _res.hit = false;
    _res.nx = 0;
    _res.nz = 0;
    for (let iter = 0; iter < 4; iter++) {
      let moved = false;
      for (let i = 0; i < this.list.length; i++) {
        const c = this.list[i];
        if (!c.move) continue;
        if (c.maxY <= feetY + step || c.minY >= headY) continue;
        if (p.x < c.minX - r || p.x > c.maxX + r || p.z < c.minZ - r || p.z > c.maxZ + r) continue;
        if (c.kind === 'box') {
          const qx = p.x < c.minX ? c.minX : p.x > c.maxX ? c.maxX : p.x;
          const qz = p.z < c.minZ ? c.minZ : p.z > c.maxZ ? c.maxZ : p.z;
          const dx = p.x - qx;
          const dz = p.z - qz;
          const d2 = dx * dx + dz * dz;
          if (d2 >= r * r) continue;
          if (d2 > 1e-10) {
            const d = Math.sqrt(d2);
            const push = r - d;
            const nx = dx / d;
            const nz = dz / d;
            p.x += nx * push;
            p.z += nz * push;
            _res.nx = nx;
            _res.nz = nz;
          } else {
            // 圆心在盒内：沿最短轴推出
            const l = p.x - c.minX;
            const rr = c.maxX - p.x;
            const t = p.z - c.minZ;
            const b = c.maxZ - p.z;
            const m = Math.min(l, rr, t, b);
            if (m === l) {
              p.x = c.minX - r;
              _res.nx = -1;
              _res.nz = 0;
            } else if (m === rr) {
              p.x = c.maxX + r;
              _res.nx = 1;
              _res.nz = 0;
            } else if (m === t) {
              p.z = c.minZ - r;
              _res.nx = 0;
              _res.nz = -1;
            } else {
              p.z = c.maxZ + r;
              _res.nx = 0;
              _res.nz = 1;
            }
          }
          moved = true;
          _res.hit = true;
        } else {
          const dx = p.x - c.cx;
          const dz = p.z - c.cz;
          const rr = r + c.r;
          const d2 = dx * dx + dz * dz;
          if (d2 >= rr * rr) continue;
          const d = Math.sqrt(d2) || 1e-5;
          const nx = d2 > 1e-10 ? dx / d : 1;
          const nz = d2 > 1e-10 ? dz / d : 0;
          p.x = c.cx + nx * rr;
          p.z = c.cz + nz * rr;
          _res.nx = nx;
          _res.nz = nz;
          moved = true;
          _res.hit = true;
        }
      }
      if (!moved) break;
    }
    return _res;
  }

  /** 圆是否与任意阻挡移动的碰撞体重叠 */
  circleBlocked(x: number, z: number, r: number): boolean {
    for (const c of this.list) {
      if (!c.move) continue;
      if (c.dist2D(x, z) < r) return true;
    }
    return false;
  }

  /**
   * 线段与阻挡视线/攻击的碰撞体求交，返回 0..1 的首个命中参数，未命中返回 1。
   * ignore 可排除某个碰撞体（例如正在预览的构件）。
   */
  raycast(ax: number, ay: number, az: number, bx: number, by: number, bz: number, filter?: (c: Collider) => boolean): number {
    const dx = bx - ax;
    const dy = by - ay;
    const dz = bz - az;
    let best = 1;
    let bestC: Collider | null = null;
    for (let i = 0; i < this.list.length; i++) {
      const c = this.list[i];
      if (filter ? !filter(c) : !c.sight) continue;
      // 包围盒快速排除
      const sMinX = Math.min(ax, bx);
      const sMaxX = Math.max(ax, bx);
      const sMinZ = Math.min(az, bz);
      const sMaxZ = Math.max(az, bz);
      if (sMaxX < c.minX || sMinX > c.maxX || sMaxZ < c.minZ || sMinZ > c.maxZ) continue;
      let t: number;
      if (c.kind === 'box') t = segBox(ax, ay, az, dx, dy, dz, c);
      else t = segCyl(ax, ay, az, dx, dy, dz, c);
      if (t < best) {
        best = t;
        bestC = c;
      }
    }
    this.lastHit = bestC;
    return best;
  }

  segmentBlocked(ax: number, ay: number, az: number, bx: number, by: number, bz: number): boolean {
    return this.raycast(ax, ay, az, bx, by, bz) < 0.999;
  }
}

function segBox(ax: number, ay: number, az: number, dx: number, dy: number, dz: number, c: Collider): number {
  let t0 = 0;
  let t1 = 1;
  // X
  if (Math.abs(dx) < 1e-9) {
    if (ax < c.minX || ax > c.maxX) return 1;
  } else {
    let ta = (c.minX - ax) / dx;
    let tb = (c.maxX - ax) / dx;
    if (ta > tb) {
      const t = ta;
      ta = tb;
      tb = t;
    }
    if (ta > t0) t0 = ta;
    if (tb < t1) t1 = tb;
    if (t0 > t1) return 1;
  }
  // Y
  if (Math.abs(dy) < 1e-9) {
    if (ay < c.minY || ay > c.maxY) return 1;
  } else {
    let ta = (c.minY - ay) / dy;
    let tb = (c.maxY - ay) / dy;
    if (ta > tb) {
      const t = ta;
      ta = tb;
      tb = t;
    }
    if (ta > t0) t0 = ta;
    if (tb < t1) t1 = tb;
    if (t0 > t1) return 1;
  }
  // Z
  if (Math.abs(dz) < 1e-9) {
    if (az < c.minZ || az > c.maxZ) return 1;
  } else {
    let ta = (c.minZ - az) / dz;
    let tb = (c.maxZ - az) / dz;
    if (ta > tb) {
      const t = ta;
      ta = tb;
      tb = t;
    }
    if (ta > t0) t0 = ta;
    if (tb < t1) t1 = tb;
    if (t0 > t1) return 1;
  }
  return t0;
}

function segCyl(ax: number, ay: number, az: number, dx: number, dy: number, dz: number, c: Collider): number {
  const fx = ax - c.cx;
  const fz = az - c.cz;
  const a = dx * dx + dz * dz;
  const b = 2 * (fx * dx + fz * dz);
  const cc = fx * fx + fz * fz - c.r * c.r;
  let tEnter: number;
  let tExit: number;
  if (a < 1e-9) {
    if (cc > 0) return 1;
    tEnter = 0;
    tExit = 1;
  } else {
    const disc = b * b - 4 * a * cc;
    if (disc < 0) return 1;
    const sq = Math.sqrt(disc);
    tEnter = (-b - sq) / (2 * a);
    tExit = (-b + sq) / (2 * a);
    if (tExit < 0 || tEnter > 1) return 1;
    if (tEnter < 0) tEnter = 0;
    if (tExit > 1) tExit = 1;
  }
  // Y 区间
  let y0 = ay + dy * tEnter;
  let y1 = ay + dy * tExit;
  if ((y0 < c.minY && y1 < c.minY) || (y0 > c.maxY && y1 > c.maxY)) return 1;
  if (y0 >= c.minY && y0 <= c.maxY) return tEnter;
  // 从顶/底面进入
  if (Math.abs(dy) < 1e-9) return 1;
  const ty = y0 > c.maxY ? (c.maxY - ay) / dy : (c.minY - ay) / dy;
  if (ty >= tEnter && ty <= tExit) return ty;
  void y1;
  return 1;
}
