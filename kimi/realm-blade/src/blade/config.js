export const GAME_NAME = '界刃';

export const MATCH = {
  quickTarget: 5,
  longTarget: 10,
  midMatchTrigger: 5,
  initialMoney: 900,
  maxMoney: 6000,
  baseIncome: 1100,
  winIncome: 500,
  killIncome: 200,
  buildBudget: 100,
  buildSeconds: 120,
  buySeconds: 18,
  swapSeconds: 4.2,
  roundEndSeconds: 5,
  roundSeconds: 75,
  revealSeconds: 35,
  arenaLimit: 18.55,
};

export const TEAM_DEFS = [
  { id: 0, name: '朱队', short: '朱', title: '朱鸟', color: '#f05b4f', dark: '#7e2928', names: ['你 · 阿烬', '队友 · 小满'] },
  { id: 1, name: '青队', short: '青', title: '青龙', color: '#29aeb0', dark: '#175d66', names: ['青 · 岚', '青 · 淼'] },
  { id: 2, name: '金队', short: '金', title: '金虎', color: '#e8ad38', dark: '#79571d', names: ['金 · 岳', '金 · 铃'] },
  { id: 3, name: '紫队', short: '紫', title: '紫鼬', color: '#9a78d1', dark: '#4c386d', names: ['紫 · 朔', '紫 · 苓'] },
];

// 四块面积完全相同的象限。中央十字道路宽 6 米。
export const ZONES = [
  { id: 0, label: 'A', name: '墨庭', cx: -10.5, cz: -10.5, sx: -1, sz: -1, color: '#b85248' },
  { id: 1, label: 'B', name: '竹庭', cx: 10.5, cz: -10.5, sx: 1, sz: -1, color: '#318d83' },
  { id: 2, label: 'C', name: '砂庭', cx: -10.5, cz: 10.5, sx: -1, sz: 1, color: '#b58a38' },
  { id: 3, label: 'D', name: '霞庭', cx: 10.5, cz: 10.5, sx: 1, sz: 1, color: '#78619e' },
].map((zone) => ({
  ...zone,
  minX: zone.sx < 0 ? -18 : 3,
  maxX: zone.sx < 0 ? -3 : 18,
  minZ: zone.sz < 0 ? -18 : 3,
  maxZ: zone.sz < 0 ? -3 : 18,
}));

export const BUILD_TYPES = [
  {
    id: 'low', name: '切羽矮墙', icon: '▱', cost: 20,
    description: '遮挡下半身，可越过墙顶观察。适合制造接近节奏。',
    size: [3, 1.05, 0.55], tag: '视线 / 绕行',
  },
  {
    id: 'high', name: '墨染高墙', icon: '▥', cost: 35,
    description: '完全遮挡视线，改写直线冲锋路线。',
    size: [3, 2.65, 0.55], tag: '强遮挡',
  },
  {
    id: 'crate', name: '榫卯箱', icon: '◇', cost: 15,
    description: '紧凑掩体，适合封堵缺口与制造转角。',
    size: [1.3, 1.3, 1.3], tag: '灵活',
  },
  {
    id: 'corner', name: '回锋转角', icon: '⌐', cost: 40,
    description: '双面 L 形掩体，保护侧翼并切割交战空间。',
    size: [2.8, 1.85, 2.8], tag: '组合掩体',
  },
];

export const WEAPONS = [
  {
    id: 'free', name: '无名短刃', subtitle: '基础武器', price: 0,
    damage: 22, range: 2.0, minRange: 0, arc: 72,
    windup: 0.17, active: 0.1, recovery: 0.25,
    blockDamage: 20, color: '#d9d2bd', trail: '#f3e6c5',
    description: '永不缺失的可靠短刃。速度均衡，距离较短。',
    stats: { speed: 76, damage: 30, range: 28 },
  },
  {
    id: 'dagger', name: '蜂刺', subtitle: '疾速短刀', price: 400,
    damage: 18, range: 2.05, minRange: 0, arc: 66,
    windup: 0.1, active: 0.08, recovery: 0.18,
    blockDamage: 16, color: '#bfe4d8', trail: '#79f0cf',
    description: '极快连击与贴身追击。单发伤害低，需持续黏住对手。',
    stats: { speed: 100, damage: 24, range: 30 },
  },
  {
    id: 'sword', name: '游隼', subtitle: '均衡打刀', price: 800,
    damage: 34, range: 2.65, minRange: 0, arc: 82,
    windup: 0.23, active: 0.12, recovery: 0.34,
    blockDamage: 28, color: '#d7e6ed', trail: '#88d9ff',
    description: '距离、伤害与速度均衡，挥砍较宽，适合稳定正面交战。',
    stats: { speed: 62, damage: 52, range: 58 },
  },
  {
    id: 'axe', name: '断岳', subtitle: '重型刀斧', price: 1400,
    damage: 68, range: 2.8, minRange: 0, arc: 88,
    windup: 0.55, active: 0.14, recovery: 0.66,
    blockDamage: 48, color: '#e1c0a0', trail: '#ff9b69',
    description: '缓慢而致命，大幅消耗格挡体力。落空后收招代价极高。',
    stats: { speed: 25, damage: 100, range: 64 },
  },
  {
    id: 'spear', name: '长虹', subtitle: '长柄薙刀', price: 1100,
    damage: 43, range: 3.7, minRange: 1.05, arc: 36,
    windup: 0.36, active: 0.11, recovery: 0.5,
    blockDamage: 32, color: '#e8e0c9', trail: '#f7d66b',
    description: '最长攻击距离与窄突刺判定。贴身过近时难以有效命中。',
    stats: { speed: 42, damage: 66, range: 100 },
  },
];

export const AI_BUILD_TEMPLATES = [
  [
    { type: 'high', u: -4.5, v: -4.5, r: 0 },
    { type: 'low', u: 4.5, v: -4.2, r: Math.PI / 2 },
    { type: 'crate', u: -4.2, v: 4.5, r: 0 },
    { type: 'low', u: 4.5, v: 4.5, r: 0 },
  ],
  [
    { type: 'corner', u: -3.7, v: -3.7, r: 0 },
    { type: 'corner', u: 3.7, v: 3.7, r: Math.PI },
    { type: 'crate', u: 4.6, v: -4.6, r: 0 },
  ],
  [
    { type: 'high', u: -4.4, v: -4.5, r: Math.PI / 2 },
    { type: 'high', u: 4.4, v: 4.5, r: Math.PI / 2 },
    { type: 'crate', u: 4.3, v: -4.3, r: 0 },
    { type: 'crate', u: -4.3, v: 4.3, r: 0 },
  ],
  [
    { type: 'low', u: -4.5, v: -4.5, r: 0 },
    { type: 'low', u: 4.5, v: -4.5, r: Math.PI / 2 },
    { type: 'corner', u: -3.7, v: 3.7, r: Math.PI / 2 },
    { type: 'crate', u: 4.5, v: 4.5, r: 0 },
  ],
  [
    { type: 'high', u: -4.5, v: 4.4, r: 0 },
    { type: 'low', u: 4.4, v: -4.5, r: 0 },
    { type: 'low', u: 4.5, v: 4.4, r: Math.PI / 2 },
    { type: 'crate', u: -4.4, v: -4.5, r: 0 },
  ],
];

export function weaponById(id) {
  return WEAPONS.find((weapon) => weapon.id === id) || WEAPONS[0];
}

export function buildTypeById(id) {
  return BUILD_TYPES.find((type) => type.id === id) || BUILD_TYPES[0];
}

export function zoneAt(x, z) {
  return ZONES.find((zone) => x >= zone.minX && x <= zone.maxX && z >= zone.minZ && z <= zone.maxZ) || null;
}

export function spawnPoints(zone) {
  return [
    { x: zone.cx - 0.85, z: zone.cz + zone.sz * 5.1 },
    { x: zone.cx + 0.85, z: zone.cz + zone.sz * 5.1 },
  ];
}
