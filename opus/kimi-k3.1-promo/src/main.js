import { Engine } from './engine/engine.js';
import { loadFonts } from './engine/text.js';
import { SHOTS } from './shots/index.js';
import timeline from './timeline.json' with { type: 'json' };

const params = new URLSearchParams(location.search);
const only = params.get('only') ? params.get('only').split(',') : null;

await loadFonts();
const canvas = document.getElementById('c');
const engine = new Engine(canvas, timeline, SHOTS, { only });
await engine.init();
window.engine = engine;
window.renderFrame = (f, samples) => { engine.renderFrame(f, samples ?? undefined); return true; };
window.renderTime = (t, samples = 1) => { engine.renderTime(t, samples, samples > 1 ? 0.5 / engine.fps : 0); return true; };
window.ready = true;

if (!params.has('render')) startPreview();

function startPreview() {
  const bar = document.getElementById('ui');
  bar.style.display = 'flex';
  const audio = document.getElementById('audio');
  const scrub = document.getElementById('scrub');
  const label = document.getElementById('time');
  scrub.max = timeline.duration;
  let playing = false, t = parseFloat(params.get('t') || '0'), last = performance.now();
  const fmt = (x) => `${Math.floor(x / 60)}:${(x % 60).toFixed(2).padStart(5, '0')}`;
  const toggle = () => {
    playing = !playing;
    if (playing) { audio.currentTime = t; audio.play().catch(() => {}); } else audio.pause();
  };
  const seek = (x) => { t = Math.max(0, Math.min(timeline.duration - 1e-3, x)); audio.currentTime = t; };
  document.getElementById('play').onclick = toggle;
  scrub.oninput = () => seek(parseFloat(scrub.value));
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') { e.preventDefault(); toggle(); }
    if (e.code === 'ArrowRight') seek(t + (e.shiftKey ? 0.1 : 1));
    if (e.code === 'ArrowLeft') seek(t - (e.shiftKey ? 0.1 : 1));
  });
  const loop = (now) => {
    const dt = (now - last) / 1000; last = now;
    if (playing) {
      t = audio.paused || !audio.duration ? t + dt : audio.currentTime;
      if (t >= timeline.duration) { t = 0; audio.currentTime = 0; }
    }
    engine.renderTime(t, 1, 0);
    scrub.value = t; label.textContent = fmt(t);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
