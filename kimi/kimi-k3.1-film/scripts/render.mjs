import {bundle} from '@remotion/bundler';
import {openBrowser, renderMedia, selectComposition} from '@remotion/renderer';
import {existsSync} from 'node:fs';
import {mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';

const draft = process.argv.includes('--draft');
const root = process.cwd();
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browserExecutable = existsSync(chrome) ? chrome : undefined;
const output = resolve(root, draft ? 'dist/Kimi-K3.1-Pro-Launch-Film-Draft.mp4' : 'dist/Kimi-K3.1-Pro-Launch-Film.mp4');
await mkdir(resolve(root, 'dist'), {recursive: true});

console.log('Bundling Kimi K3.1 launch film…');
const serveUrl = await bundle({entryPoint: resolve(root, 'src/index.js')});
const browser = await openBrowser('chrome', {
  browserExecutable,
  chromiumOptions: {headless: true, gl: 'angle'},
});
let lastProgress = -10;

try {
  const composition = await selectComposition({serveUrl, id: 'KimiFilm', puppeteerInstance: browser});
  console.log(`Rendering ${composition.width}×${composition.height}, ${composition.durationInFrames / composition.fps}s${draft ? ' (draft)' : ''} → ${output}`);
  const result = await renderMedia({
    composition,
    serveUrl,
    outputLocation: output,
    codec: 'h264',
    audioCodec: 'aac',
    audioBitrate: '320k',
    pixelFormat: 'yuv420p',
    colorSpace: 'bt709',
    crf: draft ? 20 : 16,
    x264Preset: draft ? 'veryfast' : 'slow',
    videoBitrate: null,
    scale: draft ? 0.5 : 1,
    jpegQuality: 95,
    concurrency: 4,
    puppeteerInstance: browser,
    enforceAudioTrack: true,
    overwrite: true,
    metadata: {
      title: 'Kimi K3.1 Pro — 复杂，交给 Kimi。',
      artist: 'Moonshot AI concept launch film',
      comment: 'Original procedural score. Official Kimi K3.1 Pro demonstration footage.',
    },
    onProgress: ({progress}) => {
      const percent = Math.floor(progress * 100);
      if (percent >= lastProgress + 5 || percent === 100) {
        lastProgress = percent;
        console.log(`Render progress: ${percent}%`);
      }
    },
    onBrowserLog: ({text}) => console.log(`[browser] ${text}`),
  });
  if (result.slowestFrames.length > 0) {
    console.log(`Slowest frame: #${result.slowestFrames[0].frame} (${result.slowestFrames[0].time.toFixed(1)}ms)`);
  }
  console.log(`Finished: ${output}`);
} finally {
  await browser.close({silent: false});
}
