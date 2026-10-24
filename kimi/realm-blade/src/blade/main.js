import { BladeGame } from './game.js';

const game = new BladeGame();

// Read-only state plus explicit actions are intentionally available for local smoke testing.
// No network service, account, external AI, or hidden game logic is involved.
window.__REALM_BLADE__ = game;
