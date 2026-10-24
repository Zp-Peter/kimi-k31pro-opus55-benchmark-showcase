// Final render: drives index.html?render frame by frame in headless Chrome (parallel workers, each on its
// own contiguous frame range), pipes PNG frames into lossless RGB segments, then concatenates them and
// encodes H.264 (BT.709, yuv420p) + AAC with out/soundtrack.wav.
// usage: node tools/render.mjs [--workers 3] [--from 0] [--to 1920] [--out out/kimi_k3.1_promo.mp4] [--crf 19] [--maxrate 24M] [--keep]
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { startServer, CHROME, CHROME_ARGS, ROOT } from './common.mjs';

const FFMPEG = process.env.FFMPEG || 'ffmpeg';
const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, arr) => (x.startsWith('--') ? [...a, [x.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : true]] : a), []));
const WORKERS = +(args.workers || 3), F0 = +(args.from || 0), F1 = +(args.to || 1920);
const OUTFILE = path.resolve(ROOT, args.out || 'out/kimi_k3.1_promo.mp4');
const SEGDIR = path.join(ROOT, 'out', 'segments');
fs.mkdirSync(SEGDIR, { recursive: true });

function ffmpeg(argv) {
  const p = spawn(FFMPEG, argv, { stdio: ['pipe', 'ignore', 'pipe'] });
  let err = '';
  p.stderr.on('data', (d) => { err = (err + d).slice(-8000); });
  const done = new Promise((res, rej) => p.on('close', (c) => (c === 0 ? res() : rej(new Error(`ffmpeg exited ${c}\n${err}`)))));
  return { p, done };
}

async function worker(id, f0, f1, port) {
  const seg = path.join(SEGDIR, `seg${String(id).padStart(2, '0')}.mkv`);
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: CHROME_ARGS });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('pageerror', (e) => console.log(`[w${id}] pageerror`, e.message));
  await page.goto(`http://127.0.0.1:${port}/index.html?render=1`);
  await page.waitForFunction(() => window.ready === true, null, { timeout: 180000 });
  const enc = ffmpeg(['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '30', '-c:v', 'png', '-i', '-',
    '-c:v', 'libx264rgb', '-preset', 'ultrafast', '-crf', '0', seg]);
  const t0 = Date.now();
  for (let f = f0; f < f1; f++) {
    await page.evaluate((fr) => window.renderFrame(fr), f);
    const png = await page.screenshot({ type: 'png' });
    if (!enc.p.stdin.write(png)) await new Promise((r) => enc.p.stdin.once('drain', r));
    const k = f - f0 + 1;
    if (k % 60 === 0 || f === f1 - 1) console.log(`[w${id}] ${k}/${f1 - f0} frames · ${((Date.now() - t0) / 1000 / k).toFixed(2)} s/frame`);
  }
  enc.p.stdin.end();
  await enc.done;
  await browser.close();
  return seg;
}

const t0 = Date.now();
const { port, close } = await startServer();
const per = Math.ceil((F1 - F0) / WORKERS);
const ranges = Array.from({ length: WORKERS }, (_, i) => [F0 + i * per, Math.min(F1, F0 + (i + 1) * per)]).filter(([a, b]) => b > a);
const segs = await Promise.all(ranges.map(([a, b], i) => worker(i, a, b, port)));
close();
console.log(`frames done in ${((Date.now() - t0) / 60000).toFixed(1)} min`);

const list = path.join(SEGDIR, 'list.txt');
fs.writeFileSync(list, segs.map((s) => `file '${s.replace(/'/g, "'\\''")}'`).join('\n') + '\n');
const audio = path.join(ROOT, 'out', 'soundtrack.wav');
const startSec = F0 / 30;
const enc = ffmpeg(['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list,
  '-ss', String(startSec), '-t', String((F1 - F0) / 30), '-i', audio,
  '-map', '0:v', '-map', '1:a',
  '-vf', 'scale=in_range=pc:out_range=tv:out_color_matrix=bt709:flags=lanczos+accurate_rnd+full_chroma_int,format=yuv420p',
  '-c:v', 'libx264', '-preset', 'slow', '-crf', String(args.crf || 19), '-maxrate', args.maxrate || '24M', '-bufsize', '48M',
  '-profile:v', 'high', '-level', '4.2',
  '-x264-params', 'colorprim=bt709:transfer=bt709:colormatrix=bt709:range=tv',
  '-color_primaries', 'bt709', '-color_trc', 'bt709', '-colorspace', 'bt709', '-color_range', 'tv',
  '-c:a', 'aac', '-b:a', '320k', '-ar', '48000',
  '-movflags', '+faststart', '-shortest', OUTFILE]);
await enc.done;
if (!args.keep) { for (const s of segs) fs.rmSync(s); fs.rmSync(list); }
console.log(`wrote ${OUTFILE} in ${((Date.now() - t0) / 60000).toFixed(1)} min total`);
