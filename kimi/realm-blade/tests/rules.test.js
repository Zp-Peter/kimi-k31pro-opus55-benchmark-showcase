import test from 'node:test';
import assert from 'node:assert/strict';
import { derangement, resolveRoundTeams, roundIncome, shouldTriggerMidMatch, clampTarget } from '../src/blade/rules.js';
import { NavGrid, canStand, hasLineOfSight, obbIntersects } from '../src/blade/navigation.js';

test('spawn rotation is a bijection and never uses the team build zone', () => {
  for (let seed = 0; seed < 500; seed += 1) {
    let value = seed + 1;
    const rng = () => { value = (value * 16807) % 2147483647; return value / 2147483647; };
    const assignment = derangement(4, rng);
    assert.equal(new Set(assignment).size, 4);
    assignment.forEach((zone, team) => assert.notEqual(zone, team));
  }
});

test('round resolution handles a winner, contested teams and simultaneous extinction', () => {
  assert.equal(resolveRoundTeams([2]), 2);
  assert.equal(resolveRoundTeams([0, 0]), 0);
  assert.equal(resolveRoundTeams([0, 1]), null);
  assert.equal(resolveRoundTeams([]), null);
});

test('economy cannot lose money and includes only earned bonuses', () => {
  assert.equal(roundIncome({ base: 1100, winBonus: 500, killBonus: 200 }), 1100);
  assert.equal(roundIncome({ won: true, kills: 2, base: 1100, winBonus: 500, killBonus: 200 }), 2000);
  assert.equal(roundIncome({ kills: -4 }), 1100);
});

test('long match rebuild triggers exactly once at the leader threshold', () => {
  assert.equal(shouldTriggerMidMatch({ mode: 'long', scores: [5, 2, 1, 0], trigger: 5 }), true);
  assert.equal(shouldTriggerMidMatch({ mode: 'long', scores: [5, 2, 1, 0], trigger: 5, alreadyTriggered: true }), false);
  assert.equal(shouldTriggerMidMatch({ mode: 'quick', scores: [5, 2, 1, 0], trigger: 5 }), false);
  assert.equal(shouldTriggerMidMatch({ mode: 'long', scores: [4, 3, 2, 1], trigger: 5 }), false);
});

test('configurable target scores are bounded', () => {
  assert.equal(clampTarget('7', 5), 7);
  assert.equal(clampTarget('-2', 5), 1);
  assert.equal(clampTarget('100', 5), 20);
  assert.equal(clampTarget('nope', 5), 5);
});

test('melee line of sight respects high walls but can see over low cover', () => {
  const high = [{ x: 0, z: 0, hx: 1, hz: 0.2, rot: 0, height: 2.6 }];
  const low = [{ x: 0, z: 0, hx: 1, hz: 0.2, rot: 0, height: 1.05 }];
  assert.equal(hasLineOfSight({ x: 0, z: -2 }, { x: 0, z: 2 }, high, 1.35), false);
  assert.equal(hasLineOfSight({ x: 0, z: -2 }, { x: 0, z: 2 }, low, 1.35), true);
  assert.equal(hasLineOfSight({ x: 0, z: -2 }, { x: 0, z: 2 }, low, 0.8), false);
});

test('rotated solid overlap checks prevent intersecting construction', () => {
  const a = { x: 0, z: 0, hx: 1.5, hz: 0.25, rot: Math.PI / 4 };
  const b = { x: 0.2, z: 0, hx: 0.5, hz: 0.5, rot: 0 };
  const c = { x: 4, z: 0, hx: 0.5, hz: 0.5, rot: 0 };
  assert.equal(obbIntersects(a, b), true);
  assert.equal(obbIntersects(a, c), false);
});

test('navigation paths remain inside legal space and route around a wall', () => {
  const wall = { x: 0, z: 0, hx: 0.3, hz: 3, rot: 0, height: 2.6 };
  const nav = new NavGrid({ min: -5, max: 5, cell: 1, radius: 0.4 });
  nav.rebuild([wall], 4.8);
  const path = nav.findPath({ x: -3, z: 0 }, { x: 3, z: 0 });
  assert.ok(path.length > 0);
  assert.equal(canStand(0, 0, 0.4, [wall], 4.8), false);
  assert.ok(path.some((point) => Math.abs(point.z) > 2));
});
