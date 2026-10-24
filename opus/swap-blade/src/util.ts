export const DEG = Math.PI / 180;

export function clamp(v: number, a: number, b: number): number {
  return v < a ? a : v > b ? b : v;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function smoothstep(e0: number, e1: number, x: number): number {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
}

/** 帧率无关的指数平滑 */
export function damp(a: number, b: number, lambda: number, dt: number): number {
  return lerp(a, b, 1 - Math.exp(-lambda * dt));
}

export function wrapPi(a: number): number {
  a = (a + Math.PI) % (Math.PI * 2);
  if (a < 0) a += Math.PI * 2;
  return a - Math.PI;
}

export function angleDiff(a: number, b: number): number {
  return wrapPi(b - a);
}

export function dampAngle(a: number, b: number, lambda: number, dt: number): number {
  return a + angleDiff(a, b) * (1 - Math.exp(-lambda * dt));
}

/** 朝向角 → 前向向量（yaw = 0 朝 -z） */
export function yawDirX(yaw: number): number {
  return -Math.sin(yaw);
}
export function yawDirZ(yaw: number): number {
  return -Math.cos(yaw);
}
export function dirToYaw(dx: number, dz: number): number {
  return Math.atan2(-dx, -dz);
}

export const ease = {
  outCubic: (t: number) => 1 - Math.pow(1 - t, 3),
  inCubic: (t: number) => t * t * t,
  inOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  outQuad: (t: number) => 1 - (1 - t) * (1 - t),
  inQuad: (t: number) => t * t,
  outBack: (t: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  outElastic: (t: number) => {
    if (t === 0 || t === 1) return t;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
  },
};

// 可复现的伪随机数（调试时可固定种子）
let seed = (Math.random() * 2 ** 31) | 0;
export function setSeed(s: number) {
  seed = s | 0;
}
export function rand(): number {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
export function randRange(a: number, b: number): number {
  return a + (b - a) * rand();
}
export function randInt(a: number, b: number): number {
  return Math.floor(randRange(a, b + 1));
}
export function pick<T>(arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}
export function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

export interface Rect {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export function rectContains(r: Rect, x: number, z: number, pad = 0): boolean {
  return x >= r.minX - pad && x <= r.maxX + pad && z >= r.minZ - pad && z <= r.maxZ + pad;
}

/** 绕原点旋转 k 个 90°：(x,z) → (−z, x)，与 Object3D.rotation.y = −k·π/2 一致 */
export function rotXZ(x: number, z: number, k: number): [number, number] {
  k = ((k % 4) + 4) % 4;
  for (let i = 0; i < k; i++) {
    const t = x;
    x = -z;
    z = t;
  }
  return [x, z];
}

export function rotRect(r: Rect, k: number): Rect {
  const a = rotXZ(r.minX, r.minZ, k);
  const b = rotXZ(r.maxX, r.maxZ, k);
  return {
    minX: Math.min(a[0], b[0]),
    maxX: Math.max(a[0], b[0]),
    minZ: Math.min(a[1], b[1]),
    maxZ: Math.max(a[1], b[1]),
  };
}

export function fmtTime(s: number): string {
  s = Math.max(0, Math.ceil(s));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r < 10 ? '0' : ''}${r}`;
}

export function $(id: string): HTMLElement {
  const el = document.getElementById(id);
  if (!el) throw new Error('missing element #' + id);
  return el;
}

export function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, html?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
