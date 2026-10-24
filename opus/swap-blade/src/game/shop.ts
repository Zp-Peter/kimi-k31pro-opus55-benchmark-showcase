// 武器商店：只在准备阶段开放；真人与 AI 走同一套价格与扣款逻辑。

import { ECON } from '../config';
import { WEAPONS, type WeaponId } from './weapons';
import type { Character } from './character';
import type { Game } from '../game';

export interface ShopResult {
  ok: boolean;
  msg: string;
}

export class Shop {
  constructor(private g: Game) {}

  isOpen(): boolean {
    return this.g.match.phase === 'buy';
  }

  armorCost(ch: Character): number {
    const missing = ECON.armorPoints - ch.armor;
    if (missing <= 0) return 0;
    return Math.ceil(((missing / ECON.armorPoints) * ECON.armorPrice) / 10) * 10;
  }

  buyWeapon(ch: Character, id: WeaponId): ShopResult {
    if (!this.isOpen()) return { ok: false, msg: '商店只在准备阶段开放' };
    if (!ch.alive) return { ok: false, msg: '阵亡中无法购买' };
    const w = WEAPONS[id];
    if (ch.weapon === id) return { ok: false, msg: `已装备 ${w.name}` };
    // 本阶段刚买的武器可原价退回，再换别的
    const refund = ch.boughtThisPhase === ch.weapon ? WEAPONS[ch.weapon].price : 0;
    if (id === 'tanto') {
      if (!refund) return { ok: false, msg: '当前武器为上回合保留，无需换回短刀' };
      ch.money += refund;
      ch.weapon = 'tanto';
      ch.boughtThisPhase = null;
      this.g.events.purchase(ch, `退回武器 +$${refund}`, true);
      return { ok: true, msg: `已退回，返还 $${refund}` };
    }
    if (ch.money + refund < w.price) {
      return { ok: false, msg: `资金不足：还差 $${w.price - ch.money - refund}` };
    }
    ch.money = ch.money + refund - w.price;
    ch.weapon = id;
    ch.boughtThisPhase = id;
    this.g.events.purchase(ch, `购买 ${w.name} -$${w.price}`, true);
    return { ok: true, msg: `已装备 ${w.name}` + (refund ? `（退回旧武器 +$${refund}）` : '') };
  }

  buyArmor(ch: Character): ShopResult {
    if (!this.isOpen()) return { ok: false, msg: '商店只在准备阶段开放' };
    if (!ch.alive) return { ok: false, msg: '阵亡中无法购买' };
    const cost = this.armorCost(ch);
    if (cost <= 0) return { ok: false, msg: '护甲已满' };
    if (ch.money < cost) return { ok: false, msg: `资金不足：还差 $${cost - ch.money}` };
    ch.money -= cost;
    ch.armor = ECON.armorPoints;
    ch.armorPaidThisPhase += cost;
    this.g.events.purchase(ch, `购买护甲 -$${cost}`, true);
    return { ok: true, msg: '护甲已补满' };
  }
}
