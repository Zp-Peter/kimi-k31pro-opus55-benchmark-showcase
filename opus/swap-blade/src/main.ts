import { Game } from './game';
import type { ModeId } from './config';

const view = document.getElementById('view')!;
const loading = document.getElementById('loading')!;

try {
  const game = new Game(view);
  loading.remove();
  // 调试接口（不影响正常计分）：在控制台用 __game.runMatch('quick') 自动打完一整局
  (window as unknown as { __game: unknown }).__game = {
    game,
    runMatch: (mode: ModeId = 'quick', seed?: number) => game.runMatch(mode, { seed }),
    simulate: (s: number) => game.simulate(s),
    autopilot: (on = true) => game.setAutopilot(on),
    skip: () => {
      game.match.timer = 0.01;
    },
    timeScale: (s: number) => {
      game.timeScale = s;
    },
    // 测试辅助：按住按键 / 设置视角 / 模拟鼠标按键
    hold: (code: string, sec = 0.5) => {
      game.player.keys.add(code);
      setTimeout(() => game.player.keys.delete(code), sec * 1000);
    },
    look: (yaw: number, pitch = 0) => {
      game.player.ch.yaw = yaw;
      game.player.ch.pitch = pitch;
    },
    mouse: (button = 0) => game.player.mouseAction(button),
    blockHold: (on: boolean) => {
      game.player.mouseR = on;
    },
    state: () => ({
      phase: game.match.phase,
      round: game.match.round,
      timer: +game.match.timer.toFixed(1),
      scores: game.match.teams.map((t) => t.score),
      build: game.match.teams.map((t) => t.buildZone),
      spawn: game.match.teams.map((t) => t.spawnZone),
      alive: game.chars.map((c) => c.alive),
      money: game.chars.map((c) => c.money),
      weapons: game.chars.map((c) => c.weapon),
      midgameDone: game.match.midgameDone,
    }),
  };
} catch (e) {
  loading.textContent = '启动失败：' + (e instanceof Error ? e.message : String(e));
  console.error(e);
}
