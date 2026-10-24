import {bundle} from '@remotion/bundler';
import {openBrowser, renderStill, selectComposition} from '@remotion/renderer';
import {existsSync} from 'node:fs';
import {mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';

const root = process.cwd();
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browserExecutable = existsSync(chrome) ? chrome : undefined;
const full = process.argv.includes('--full');
const frames = [45, 110, 190, 255, 345, 435, 510, 585, 645, 720, 790, 860, 930, 980, 1030, 1065, 1104, 1140, 1210];
const outDir = resolve(root, full ? 'previews/full' : 'previews/film');
await mkdir(outDir, {recursive: true});

const serveUrl = await bundle({entryPoint: resolve(root, 'src/index.js')});
const browser = await openBrowser('chrome', {browserExecutable, chromiumOptions: {headless: true, gl: 'angle'}});
try {
  const composition = await selectComposition({serveUrl, id: 'KimiFilm', puppeteerInstance: browser});
  for (const frame of frames) {
    const output = resolve(outDir, `${String(frame).padStart(4, '0')}.jpg`);
    await renderStill({
      composition,
      serveUrl,
      frame,
      output,
      imageFormat: 'jpeg',
      jpegQuality: 92,
      scale: full ? 1 : 0.5,
      puppeteerInstance: browser,
      overwrite: true,
      onBrowserLog: ({text}) => console.log(`[browser] ${text}`),
    });
    console.log(`Still ${frame} (${(frame / 30).toFixed(2)}s) → ${output}`);
  }
} finally {
  await browser.close({silent: false});
}
