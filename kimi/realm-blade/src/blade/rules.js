export function shuffle(values, rng = Math.random) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Return a bijection with no fixed points: team i never spawns in zone i. */
export function derangement(count, rng = Math.random) {
  if (count < 2) throw new Error('A derangement needs at least two elements');
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const candidate = shuffle(Array.from({ length: count }, (_, i) => i), rng);
    if (candidate.every((zone, team) => zone !== team)) return candidate;
  }
  // Deterministic fallback is still a valid bijection if an adversarial RNG is supplied.
  const offset = 1 + Math.floor(rng() * (count - 1));
  return Array.from({ length: count }, (_, i) => (i + offset) % count);
}

export function resolveRoundTeams(aliveTeamIds) {
  const unique = [...new Set(aliveTeamIds)];
  return unique.length === 1 ? unique[0] : null;
}

export function roundIncome({ won = false, kills = 0, base = 1100, winBonus = 500, killBonus = 200 } = {}) {
  return base + (won ? winBonus : 0) + Math.max(0, kills) * killBonus;
}

export function shouldTriggerMidMatch({ mode, scores, trigger = 5, alreadyTriggered = false }) {
  return mode === 'long' && !alreadyTriggered && Math.max(...scores) >= trigger;
}

export function clampTarget(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(20, Math.max(1, parsed));
}

export function formatTime(seconds) {
  const safe = Math.max(0, Math.ceil(seconds));
  return `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(safe % 60).padStart(2, '0')}`;
}

export function lerpAngle(current, target, amount) {
  let delta = (target - current + Math.PI) % (Math.PI * 2) - Math.PI;
  if (delta < -Math.PI) delta += Math.PI * 2;
  return current + delta * Math.min(1, amount);
}
