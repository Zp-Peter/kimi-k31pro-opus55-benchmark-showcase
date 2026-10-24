const EPSILON = 1e-5;

export function toLocal(x, z, obstacle) {
  const dx = x - obstacle.x;
  const dz = z - obstacle.z;
  const c = Math.cos(obstacle.rot || 0);
  const s = Math.sin(obstacle.rot || 0);
  return { x: dx * c - dz * s, z: dx * s + dz * c };
}

export function circleHitsObstacle(x, z, radius, obstacle) {
  const local = toLocal(x, z, obstacle);
  const closestX = Math.max(-obstacle.hx, Math.min(obstacle.hx, local.x));
  const closestZ = Math.max(-obstacle.hz, Math.min(obstacle.hz, local.z));
  const dx = local.x - closestX;
  const dz = local.z - closestZ;
  return dx * dx + dz * dz < radius * radius - EPSILON;
}

export function canStand(x, z, radius, colliders, limit = 18.55) {
  if (x - radius < -limit || x + radius > limit || z - radius < -limit || z + radius > limit) return false;
  return !colliders.some((obstacle) => (obstacle.height || 3) > 0.35 && circleHitsObstacle(x, z, radius, obstacle));
}

export function moveCircle(position, dx, dz, radius, colliders, limit = 18.55) {
  let x = position.x;
  let z = position.z;
  if (canStand(x + dx, z, radius, colliders, limit)) x += dx;
  if (canStand(x, z + dz, radius, colliders, limit)) z += dz;
  // Small diagonal fallback prevents sticky corners without crossing a solid collider.
  if (x === position.x && z === position.z && dx !== 0 && dz !== 0) {
    if (canStand(x + dx * 0.35, z + dz * 0.35, radius, colliders, limit)) {
      x += dx * 0.35;
      z += dz * 0.35;
    }
  }
  return { x, z };
}

/** Tests a 2D segment against an oriented box using the slab method. */
export function segmentHitsObstacle(a, b, obstacle) {
  const p = toLocal(a.x, a.z, obstacle);
  const q = toLocal(b.x, b.z, obstacle);
  const dx = q.x - p.x;
  const dz = q.z - p.z;
  let tMin = 0;
  let tMax = 1;
  for (const [origin, delta, half] of [[p.x, dx, obstacle.hx], [p.z, dz, obstacle.hz]]) {
    if (Math.abs(delta) < EPSILON) {
      if (origin < -half || origin > half) return false;
    } else {
      let t1 = (-half - origin) / delta;
      let t2 = (half - origin) / delta;
      if (t1 > t2) [t1, t2] = [t2, t1];
      tMin = Math.max(tMin, t1);
      tMax = Math.min(tMax, t2);
      if (tMin > tMax) return false;
    }
  }
  return tMax >= 0 && tMin <= 1;
}

export function hasLineOfSight(a, b, colliders, blockingHeight = 1.35) {
  return !colliders.some((obstacle) => (obstacle.height || 3) >= blockingHeight && segmentHitsObstacle(a, b, obstacle));
}

function obbCorners(obstacle, padding = 0) {
  const c = Math.cos(obstacle.rot || 0);
  const s = Math.sin(obstacle.rot || 0);
  const hx = obstacle.hx + padding;
  const hz = obstacle.hz + padding;
  return [[-hx, -hz], [hx, -hz], [hx, hz], [-hx, hz]].map(([x, z]) => ({
    x: obstacle.x + c * x + s * z,
    z: obstacle.z - s * x + c * z,
  }));
}

/** Separating-axis test used by construction to prevent intersecting solids. */
export function obbIntersects(a, b, padding = 0.03) {
  const cornersA = obbCorners(a, padding);
  const cornersB = obbCorners(b, padding);
  const axes = [a.rot || 0, (a.rot || 0) + Math.PI / 2, b.rot || 0, (b.rot || 0) + Math.PI / 2]
    .map((angle) => ({ x: Math.cos(angle), z: -Math.sin(angle) }));
  for (const axis of axes) {
    const project = (corners) => corners.map((point) => point.x * axis.x + point.z * axis.z);
    const pa = project(cornersA);
    const pb = project(cornersB);
    if (Math.max(...pa) <= Math.min(...pb) + EPSILON || Math.max(...pb) <= Math.min(...pa) + EPSILON) return false;
  }
  return true;
}

class MinHeap {
  constructor() { this.items = []; }
  push(node) {
    const items = this.items;
    items.push(node);
    let index = items.length - 1;
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (items[parent].f <= node.f) break;
      items[index] = items[parent];
      index = parent;
    }
    items[index] = node;
  }
  pop() {
    const items = this.items;
    if (!items.length) return null;
    const root = items[0];
    const tail = items.pop();
    if (items.length) {
      let index = 0;
      while (true) {
        const left = index * 2 + 1;
        const right = left + 1;
        if (left >= items.length) break;
        let child = left;
        if (right < items.length && items[right].f < items[left].f) child = right;
        if (items[child].f >= tail.f) break;
        items[index] = items[child];
        index = child;
      }
      items[index] = tail;
    }
    return root;
  }
  get length() { return this.items.length; }
}

export class NavGrid {
  constructor({ min = -18, max = 18, cell = 1, radius = 0.48 } = {}) {
    this.min = min;
    this.max = max;
    this.cell = cell;
    this.radius = radius;
    this.size = Math.round((max - min) / cell);
    this.blocked = new Uint8Array(this.size * this.size);
  }

  rebuild(colliders, limit = 18.55) {
    for (let z = 0; z < this.size; z += 1) {
      for (let x = 0; x < this.size; x += 1) {
        const world = this.toWorld(x, z);
        this.blocked[this.index(x, z)] = canStand(world.x, world.z, this.radius, colliders, limit) ? 0 : 1;
      }
    }
  }

  index(x, z) { return z * this.size + x; }
  valid(x, z) { return x >= 0 && z >= 0 && x < this.size && z < this.size; }
  toCell(x, z) {
    return {
      x: Math.max(0, Math.min(this.size - 1, Math.floor((x - this.min) / this.cell))),
      z: Math.max(0, Math.min(this.size - 1, Math.floor((z - this.min) / this.cell))),
    };
  }
  toWorld(x, z) { return { x: this.min + (x + 0.5) * this.cell, z: this.min + (z + 0.5) * this.cell }; }

  nearestOpen(cell) {
    if (!this.blocked[this.index(cell.x, cell.z)]) return cell;
    for (let radius = 1; radius <= 5; radius += 1) {
      let best = null;
      let bestDistance = Infinity;
      for (let z = cell.z - radius; z <= cell.z + radius; z += 1) {
        for (let x = cell.x - radius; x <= cell.x + radius; x += 1) {
          if (!this.valid(x, z) || this.blocked[this.index(x, z)]) continue;
          const distance = (x - cell.x) ** 2 + (z - cell.z) ** 2;
          if (distance < bestDistance) { best = { x, z }; bestDistance = distance; }
        }
      }
      if (best) return best;
    }
    return null;
  }

  findPath(start, end) {
    const startCell = this.nearestOpen(this.toCell(start.x, start.z));
    const endCell = this.nearestOpen(this.toCell(end.x, end.z));
    if (!startCell || !endCell) return [];
    const startIndex = this.index(startCell.x, startCell.z);
    const endIndex = this.index(endCell.x, endCell.z);
    if (startIndex === endIndex) return [{ x: end.x, z: end.z }];

    const total = this.size * this.size;
    const g = new Float32Array(total);
    g.fill(Infinity);
    const cameFrom = new Int32Array(total);
    cameFrom.fill(-1);
    const closed = new Uint8Array(total);
    const heap = new MinHeap();
    g[startIndex] = 0;
    heap.push({ index: startIndex, x: startCell.x, z: startCell.z, f: 0 });
    const directions = [
      [1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1],
      [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2],
    ];

    while (heap.length) {
      const current = heap.pop();
      if (closed[current.index]) continue;
      if (current.index === endIndex) {
        const path = [];
        let cursor = endIndex;
        while (cursor !== startIndex && cursor >= 0) {
          const x = cursor % this.size;
          const z = Math.floor(cursor / this.size);
          path.push(this.toWorld(x, z));
          cursor = cameFrom[cursor];
        }
        path.reverse();
        if (!this.blocked[this.index(this.toCell(end.x, end.z).x, this.toCell(end.x, end.z).z)]) {
          path[path.length - 1] = { x: end.x, z: end.z };
        }
        return this.smooth(start, path);
      }
      closed[current.index] = 1;
      for (const [dx, dz, cost] of directions) {
        const x = current.x + dx;
        const z = current.z + dz;
        if (!this.valid(x, z)) continue;
        const index = this.index(x, z);
        if (this.blocked[index] || closed[index]) continue;
        if (dx && dz) {
          if (this.blocked[this.index(current.x + dx, current.z)] || this.blocked[this.index(current.x, current.z + dz)]) continue;
        }
        const tentative = g[current.index] + cost;
        if (tentative >= g[index]) continue;
        g[index] = tentative;
        cameFrom[index] = current.index;
        const heuristic = Math.hypot(endCell.x - x, endCell.z - z);
        heap.push({ index, x, z, f: tentative + heuristic });
      }
    }
    return [];
  }

  smooth(start, path) {
    if (path.length < 3) return path;
    const result = [];
    let anchor = start;
    let index = 0;
    while (index < path.length) {
      let farthest = index;
      for (let candidate = path.length - 1; candidate > index; candidate -= 1) {
        if (this.walkableLine(anchor, path[candidate])) { farthest = candidate; break; }
      }
      result.push(path[farthest]);
      anchor = path[farthest];
      index = farthest + 1;
    }
    return result;
  }

  walkableLine(a, b) {
    const distance = Math.hypot(b.x - a.x, b.z - a.z);
    const steps = Math.max(1, Math.ceil(distance / 0.35));
    for (let i = 1; i <= steps; i += 1) {
      const t = i / steps;
      const x = a.x + (b.x - a.x) * t;
      const z = a.z + (b.z - a.z) * t;
      const cell = this.toCell(x, z);
      if (this.blocked[this.index(cell.x, cell.z)]) return false;
    }
    return true;
  }
}
