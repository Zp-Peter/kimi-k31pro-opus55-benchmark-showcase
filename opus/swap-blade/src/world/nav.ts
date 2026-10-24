// 导航网格：0.5 m 一格、格心对齐 0.5 m 整数倍（与 1 m 建造网格对齐）。
// 一格可走 ⇔ 以格心为圆心、半径 NAV.clearance 的圆不与任何阻挡碰撞体相交。
// 这让“建造网格上相隔 1 格的缝隙”总是可走、“相邻无空格”总是不可走，
// 导航结论与真实碰撞保持一致（详见 README）。

import { NAV } from '../config';
import type { CollisionWorld, Collider } from './collision';

export interface P2 {
  x: number;
  z: number;
}

const N = NAV.n;

export class NavGrid {
  walk = new Uint8Array(N * N);
  private g = new Float32Array(N * N);
  private f = new Float32Array(N * N);
  private came = new Int32Array(N * N);
  private stamp = new Uint32Array(N * N);
  private closed = new Uint32Array(N * N);
  private gen = 1;
  private heap = new Int32Array(N * N);
  private heapSize = 0;
  version = 0;

  constructor(private world: CollisionWorld) {}

  static cx(i: number): number {
    return NAV.origin + i * NAV.step;
  }

  static ix(x: number): number {
    return Math.round((x - NAV.origin) / NAV.step);
  }

  idx(i: number, j: number): number {
    return j * N + i;
  }

  inside(i: number, j: number): boolean {
    return i >= 0 && j >= 0 && i < N && j < N;
  }

  isWalkXZ(x: number, z: number): boolean {
    const i = NavGrid.ix(x);
    const j = NavGrid.ix(z);
    if (!this.inside(i, j)) return false;
    return this.walk[this.idx(i, j)] === 1;
  }

  rebuildAll() {
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        this.walk[this.idx(i, j)] = this.cellFree(NavGrid.cx(i), NavGrid.cx(j)) ? 1 : 0;
      }
    }
    this.version++;
  }

  /** 只重算某个范围（构件增删后调用） */
  updateRegion(minX: number, maxX: number, minZ: number, maxZ: number) {
    const pad = NAV.clearance + NAV.step;
    const i0 = Math.max(0, Math.floor((minX - pad - NAV.origin) / NAV.step));
    const i1 = Math.min(N - 1, Math.ceil((maxX + pad - NAV.origin) / NAV.step));
    const j0 = Math.max(0, Math.floor((minZ - pad - NAV.origin) / NAV.step));
    const j1 = Math.min(N - 1, Math.ceil((maxZ + pad - NAV.origin) / NAV.step));
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        this.walk[this.idx(i, j)] = this.cellFree(NavGrid.cx(i), NavGrid.cx(j)) ? 1 : 0;
      }
    }
    this.version++;
  }

  cellFree(x: number, z: number, extra?: Collider[] | null): boolean {
    const r = NAV.clearance;
    for (const c of this.world.list) {
      if (!c.move) continue;
      if (x < c.minX - r || x > c.maxX + r || z < c.minZ - r || z > c.maxZ + r) continue;
      if (c.dist2D(x, z) < r) return false;
    }
    if (extra) {
      for (const c of extra) if (c.dist2D(x, z) < r) return false;
    }
    return true;
  }

  /** 离 (x,z) 最近的可走格（螺旋搜索） */
  nearestWalkable(x: number, z: number, maxR = 6): P2 | null {
    const ci = NavGrid.ix(x);
    const cj = NavGrid.ix(z);
    let best: P2 | null = null;
    let bestD = Infinity;
    for (let r = 0; r <= maxR; r++) {
      for (let j = cj - r; j <= cj + r; j++) {
        for (let i = ci - r; i <= ci + r; i++) {
          if (Math.max(Math.abs(i - ci), Math.abs(j - cj)) !== r) continue;
          if (!this.inside(i, j) || !this.walk[this.idx(i, j)]) continue;
          const px = NavGrid.cx(i);
          const pz = NavGrid.cx(j);
          const d = (px - x) ** 2 + (pz - z) ** 2;
          if (d < bestD) {
            bestD = d;
            best = { x: px, z: pz };
          }
        }
      }
      if (best) return best;
    }
    return null;
  }

  /** 两点之间的直线是否全程落在可走格上（检查采样点周围 4 个格心） */
  lineWalkable(ax: number, az: number, bx: number, bz: number): boolean {
    const d = Math.hypot(bx - ax, bz - az);
    const steps = Math.max(1, Math.ceil(d / 0.2));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = ax + (bx - ax) * t;
      const z = az + (bz - az) * t;
      const fx = (x - NAV.origin) / NAV.step;
      const fz = (z - NAV.origin) / NAV.step;
      const i0 = Math.floor(fx);
      const j0 = Math.floor(fz);
      const ox = fx - i0;
      const oz = fz - j0;
      // 只检查真正“相邻”的格心，避免对正好落在格心上的点过度保守
      const is = ox < 0.15 ? [i0] : ox > 0.85 ? [i0 + 1] : [i0, i0 + 1];
      const js = oz < 0.15 ? [j0] : oz > 0.85 ? [j0 + 1] : [j0, j0 + 1];
      for (const i of is) {
        for (const j of js) {
          if (!this.inside(i, j) || !this.walk[this.idx(i, j)]) return false;
        }
      }
    }
    return true;
  }

  private heapPush(n: number) {
    const h = this.heap;
    const f = this.f;
    let i = this.heapSize++;
    h[i] = n;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (f[h[p]] <= f[h[i]]) break;
      const t = h[p];
      h[p] = h[i];
      h[i] = t;
      i = p;
    }
  }

  private heapPop(): number {
    const h = this.heap;
    const f = this.f;
    const top = h[0];
    const last = h[--this.heapSize];
    if (this.heapSize > 0) {
      h[0] = last;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1;
        const r = l + 1;
        let m = i;
        if (l < this.heapSize && f[h[l]] < f[h[m]]) m = l;
        if (r < this.heapSize && f[h[r]] < f[h[m]]) m = r;
        if (m === i) break;
        const t = h[m];
        h[m] = h[i];
        h[i] = t;
        i = m;
      }
    }
    return top;
  }

  /** A*（8 邻接、禁止切角）+ 拉直。返回世界坐标路径点（不含起点），失败返回 null */
  findPath(sx: number, sz: number, tx: number, tz: number, maxIter = 9000): P2[] | null {
    let si = NavGrid.ix(sx);
    let sj = NavGrid.ix(sz);
    if (!this.inside(si, sj) || !this.walk[this.idx(si, sj)]) {
      const p = this.nearestWalkable(sx, sz, 3);
      if (!p) return null;
      si = NavGrid.ix(p.x);
      sj = NavGrid.ix(p.z);
    }
    let ti = NavGrid.ix(tx);
    let tj = NavGrid.ix(tz);
    let goalX = tx;
    let goalZ = tz;
    if (!this.inside(ti, tj) || !this.walk[this.idx(ti, tj)]) {
      const p = this.nearestWalkable(tx, tz, 6);
      if (!p) return null;
      ti = NavGrid.ix(p.x);
      tj = NavGrid.ix(p.z);
      goalX = p.x;
      goalZ = p.z;
    }
    const start = this.idx(si, sj);
    const goal = this.idx(ti, tj);
    if (start === goal) return [{ x: goalX, z: goalZ }];

    const gen = ++this.gen;
    this.heapSize = 0;
    this.g[start] = 0;
    this.f[start] = this.h(si, sj, ti, tj);
    this.came[start] = -1;
    this.stamp[start] = gen;
    this.heapPush(start);
    let found = false;
    let iter = 0;
    while (this.heapSize > 0 && iter++ < maxIter) {
      const cur = this.heapPop();
      if (cur === goal) {
        found = true;
        break;
      }
      if (this.closed[cur] === gen) continue;
      this.closed[cur] = gen;
      const ci = cur % N;
      const cj = (cur / N) | 0;
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          if (!di && !dj) continue;
          const ni = ci + di;
          const nj = cj + dj;
          if (!this.inside(ni, nj)) continue;
          const nIdx = nj * N + ni;
          if (!this.walk[nIdx]) continue;
          if (di && dj) {
            if (!this.walk[cj * N + ni] || !this.walk[nj * N + ci]) continue;
          }
          if (this.closed[nIdx] === gen) continue;
          const cost = this.g[cur] + (di && dj ? 1.41421 : 1);
          if (this.stamp[nIdx] !== gen || cost < this.g[nIdx]) {
            this.stamp[nIdx] = gen;
            this.g[nIdx] = cost;
            this.f[nIdx] = cost + this.h(ni, nj, ti, tj);
            this.came[nIdx] = cur;
            this.heapPush(nIdx);
          }
        }
      }
    }
    if (!found) return null;
    const cells: P2[] = [];
    let c = goal;
    while (c !== -1) {
      cells.push({ x: NavGrid.cx(c % N), z: NavGrid.cx((c / N) | 0) });
      c = this.came[c];
    }
    cells.reverse();
    cells[cells.length - 1] = { x: goalX, z: goalZ };
    return this.smooth(sx, sz, cells);
  }

  private h(i: number, j: number, ti: number, tj: number): number {
    const dx = Math.abs(i - ti);
    const dz = Math.abs(j - tj);
    return dx + dz + (1.41421 - 2) * Math.min(dx, dz);
  }

  private smooth(sx: number, sz: number, cells: P2[]): P2[] {
    const out: P2[] = [];
    let ax = sx;
    let az = sz;
    let i = 0;
    while (i < cells.length) {
      let far = i;
      for (let j = cells.length - 1; j > i; j--) {
        if (this.lineWalkable(ax, az, cells[j].x, cells[j].z)) {
          far = j;
          break;
        }
      }
      out.push(cells[far]);
      ax = cells[far].x;
      az = cells[far].z;
      i = far + 1;
    }
    return out;
  }

  /**
   * 局部可达性：在 region 内做 BFS，seeds/targets 用世界坐标给出。
   * extra 为假设新增的碰撞体；返回每个 target 是否可达。
   */
  regionReach(region: { minX: number; maxX: number; minZ: number; maxZ: number }, isSeed: (x: number, z: number) => boolean, targets: P2[], extra: Collider[] | null): boolean[] {
    const i0 = Math.max(0, NavGrid.ix(region.minX));
    const i1 = Math.min(N - 1, NavGrid.ix(region.maxX));
    const j0 = Math.max(0, NavGrid.ix(region.minZ));
    const j1 = Math.min(N - 1, NavGrid.ix(region.maxZ));
    const w = i1 - i0 + 1;
    const h = j1 - j0 + 1;
    const ok = new Uint8Array(w * h);
    const seen = new Uint8Array(w * h);
    const queue = new Int32Array(w * h);
    let qh = 0;
    let qt = 0;
    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        const gi = i0 + i;
        const gj = j0 + j;
        let free = this.walk[this.idx(gi, gj)] === 1;
        const x = NavGrid.cx(gi);
        const z = NavGrid.cx(gj);
        if (free && extra) {
          for (const c of extra) {
            if (c.dist2D(x, z) < NAV.clearance) {
              free = false;
              break;
            }
          }
        }
        ok[j * w + i] = free ? 1 : 0;
        if (free && isSeed(x, z)) {
          seen[j * w + i] = 1;
          queue[qt++] = j * w + i;
        }
      }
    }
    while (qh < qt) {
      const c = queue[qh++];
      const ci = c % w;
      const cj = (c / w) | 0;
      const nb = [c - 1, c + 1, c - w, c + w];
      const valid = [ci > 0, ci < w - 1, cj > 0, cj < h - 1];
      for (let k = 0; k < 4; k++) {
        if (!valid[k]) continue;
        const n = nb[k];
        if (seen[n] || !ok[n]) continue;
        seen[n] = 1;
        queue[qt++] = n;
      }
    }
    return targets.map((t) => {
      // 目标所在格及其 3×3 邻域中只要有一个被访问即可
      const ti = NavGrid.ix(t.x) - i0;
      const tj = NavGrid.ix(t.z) - j0;
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          const a = ti + di;
          const b = tj + dj;
          if (a < 0 || b < 0 || a >= w || b >= h) continue;
          if (seen[b * w + a]) return true;
        }
      }
      return false;
    });
  }
}
