// Render selected timestamps to PNG (and optionally a contact sheet) for review.
// usage: node tools/stills.mjs --times 1,2.5,4 [--only moon,prompt] [--samples 8] [--out dir] [--sheet name.png]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import { startServer, CHROME, CHROME_ARGS, ROOT } from './common.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, arr) => (x.startsWith('--') ? [...a, [x.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : true]] : a), []));
const times = String(args.times || '0').split(',').map(Number);
const out = path.resolve(ROOT, args.out || 'out/stills');
fs.mkdirSync(out, { recursive: true });
const { port, close } = await startServer();
const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: CHROME_ARGS });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[page]', m.text().slice(0, 400)); });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
const q = new URLSearchParams({ render: '1' });
if (args.only) q.set('only', args.only);
const t0 = Date.now();
await page.goto(`http://127.0.0.1:${port}/index.html?${q}`);
await page.waitForFunction(() => window.ready === true, null, { timeout: 120000 });
console.log(`ready in ${Date.now() - t0}ms`);
if (args.eval) await page.evaluate(args.eval);
const files = [];
const tag = Date.now().toString(36).slice(-5);
for (const t of times) {
  const s = Date.now();
  const f = Math.round(t * 30);
  await page.evaluate(([f, S]) => window.renderFrame(f, S), [f, args.samples ? +args.samples : null]);
  const file = path.join(out, `${tag}_t${t.toFixed(2).padStart(6, '0')}.png`);
  await page.screenshot({ path: file });
  files.push(file);
  console.log(`t=${t} -> ${file} (${Date.now() - s}ms)`);
}
await browser.close(); close();
if (args.sheet) {
  // contact sheet via python/PIL (3 columns)
  const { execFileSync } = await import('node:child_process');
  execFileSync('python3', ['-c', `
import sys
from PIL import Image, ImageDraw
files = sys.argv[2:]; out = sys.argv[1]
cols = 3; w, h = 640, 360
rows = (len(files) + cols - 1) // cols
sheet = Image.new('RGB', (cols * w, rows * (h + 22)), (20, 20, 24))
d = ImageDraw.Draw(sheet)
for i, f in enumerate(files):
    im = Image.open(f).convert('RGB').resize((w, h), Image.BICUBIC)
    x, y = (i % cols) * w, (i // cols) * (h + 22)
    sheet.paste(im, (x, y + 22)); d.text((x + 6, y + 4), f.split('/')[-1], fill=(200, 210, 230))
sheet.save(out)
`, path.join(out, tag + '_' + args.sheet), ...files]);
  console.log('sheet:', path.join(out, tag + '_' + args.sheet));
}
