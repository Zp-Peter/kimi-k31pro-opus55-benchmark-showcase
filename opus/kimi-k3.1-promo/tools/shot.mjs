// Generic: open a page from the project via local server, wait for window.ready, screenshot.
import { chromium } from 'playwright-core';
import { startServer, CHROME, CHROME_ARGS } from './common.mjs';
const [,, url, out, w = 1920, h = 1080] = process.argv;
const { port, close } = await startServer();
const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: CHROME_ARGS });
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
page.on('console', m => console.log('[page]', m.text()));
page.on('pageerror', e => console.log('[pageerror]', e.message));
await page.goto(`http://127.0.0.1:${port}/${url}`);
await page.waitForFunction(() => window.ready === true, null, { timeout: 60000 });
await page.screenshot({ path: out });
await browser.close(); close();
