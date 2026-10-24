// 全局可调参数。所有“建议默认”数值集中在这里，便于试玩调整。

export interface TeamDef {
  id: number;
  name: string;
  short: string;
  color: number;
  css: string;
  dark: number;
}

export const TEAMS: TeamDef[] = [
  { id: 0, name: '朱队', short: '朱', color: 0xff3b30, css: '#ff3b30', dark: 0x9e1d16 },
  { id: 1, name: '苍队', short: '苍', color: 0x2f7bff, css: '#2f7bff', dark: 0x173d8c },
  { id: 2, name: '金队', short: '金', color: 0xffb300, css: '#ffb300', dark: 0x9a6400 },
  { id: 3, name: '翠队', short: '翠', color: 0x19c27a, css: '#19c27a', dark: 0x0b6b42 },
];

export const PLAYER_TEAM = 0;

export const CHAR_NAMES: string[][] = [
  ['你', '阿椿'],
  ['雾隐', '苍介'],
  ['金吾', '琥珀'],
  ['翠竹', '若叶'],
];

export interface ZoneDefMeta {
  letter: string;
  name: string;
  flavor: 'pine' | 'bamboo' | 'maple' | 'sakura';
  css: string;
}

// 区域使用字母 + 庭名，颜色只用于装饰，不与队伍色混淆
export const ZONE_META: ZoneDefMeta[] = [
  { letter: 'A', name: '松庭', flavor: 'pine', css: '#6f8f6a' },
  { letter: 'B', name: '竹庭', flavor: 'bamboo', css: '#9bb85a' },
  { letter: 'C', name: '枫庭', flavor: 'maple', css: '#e0773a' },
  { letter: 'D', name: '樱庭', flavor: 'sakura', css: '#f0a0bc' },
];

export type ModeId = 'quick' | 'long';

export interface ModeDef {
  id: ModeId;
  name: string;
  target: number;
  /** 领先队首次达到该分数后，下一回合前中场重建一次；0 = 不重建 */
  midgameAt: number;
  desc: string;
}

export const MODES: Record<ModeId, ModeDef> = {
  quick: { id: 'quick', name: '快速模式', target: 5, midgameAt: 0, desc: '先到 5 分获胜 · 只在开局建造一次' },
  long: { id: 'long', name: '长局模式', target: 10, midgameAt: 5, desc: '先到 10 分获胜 · 首队到 5 分后中场重建' },
};

export const TIMING = {
  build: 150, // 开局建造时间（秒）
  rebuild: 120, // 中场重建时间
  lock: 2.8, // 检查与锁定
  swap: 5.5, // 换区揭晓（建造后）
  buy: 15, // 普通回合准备 / 购买
  buyAfterBuild: 20, // 建造后的第一次购买
  readyShortcut: 3, // 玩家点准备后剩余时间缩短到
  round: 100, // 回合时长
  revealAt: 45, // 剩余多少秒时全员显形
  ringAt: 30, // 剩余多少秒时结界开始收缩
  ringStartRadius: 44,
  ringEndRadius: 4,
  ringDps: 9,
  roundEnd: 5.5,
};

export const ECON = {
  start: 800,
  base: 500, // 每回合基础收入（所有人，平局也发）
  win: 500, // 胜利队伍每人额外
  lossStep: 150, // 连续未胜每回合额外补贴
  lossMax: 450,
  max: 5000,
  armorPrice: 400,
  armorPoints: 40,
};

export const BUILD = {
  budget: 20,
  reach: 8.5,
};

export const PHYS = {
  radius: 0.38,
  height: 1.75,
  eye: 1.6,
  chest: 1.15,
  step: 0.4,
  speed: 5.0,
  sprintMult: 1.32,
  accel: 42,
  maxHp: 100,
};

export const NAV = {
  origin: -29,
  step: 0.5,
  n: 117,
  clearance: 0.45,
};

export const MAP = {
  half: 29, // 可行走区域半宽
  plazaHalf: 8,
  stageHalf: 4,
  stageH: 1.2,
  stairLen: 2,
  stairHalfW: 1.5,
  wallH: 3.2,
  outerH: 4.2,
};

export type Difficulty = 'easy' | 'normal' | 'hard';

export const DIFFICULTY: Record<Difficulty, { name: string; react: number; block: number; parry: number; turn: number; aggr: number; dodge: number }> = {
  easy: { name: '简单', react: 0.5, block: 0.18, parry: 0.05, turn: 4.0, aggr: 0.55, dodge: 0.08 },
  normal: { name: '普通', react: 0.32, block: 0.4, parry: 0.14, turn: 5.6, aggr: 0.75, dodge: 0.18 },
  hard: { name: '困难', react: 0.2, block: 0.62, parry: 0.3, turn: 7.5, aggr: 0.95, dodge: 0.3 },
};

export const SETTINGS_KEY = 'swapblade.settings.v1';
