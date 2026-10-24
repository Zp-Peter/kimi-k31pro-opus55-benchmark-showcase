import { chromium } from 'playwright-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); res.end(); return; }
    const ext = path.extname(p); res.writeHead(200, {'Content-Type': ext==='.js'||ext==='.mjs'?'text/javascript':ext==='.html'?'text/html':'application/octet-stream'}); res.end(d); });
}).listen(0);
const port = server.address().port;
fs.writeFileSync(path.join(ROOT,'tools/gputest.html'), `<!doctype html><html><body style="margin:0;background:#000">
<canvas id=c width=1920 height=1080></canvas>
<script type=importmap>{"imports":{"three":"/node_modules/three/build/three.module.js"}}</script>
<script type=module>
import * as THREE from 'three';
const c=document.getElementById('c');
const r=new THREE.WebGLRenderer({canvas:c,antialias:true,preserveDrawingBuffer:true});
r.setSize(1920,1080,false);
const gl=r.getContext(); const ext=gl.getExtension('WEBGL_debug_renderer_info');
window.info={renderer: ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER), vendor: ext?gl.getParameter(ext.UNMASKED_VENDOR_WEBGL):'', webgl2: r.capabilities.isWebGL2, floatRT: !!gl.getExtension('EXT_color_buffer_float')};
const s=new THREE.Scene(); const cam=new THREE.PerspectiveCamera(50,16/9,0.1,100); cam.position.z=5;
const g=new THREE.BufferGeometry(); const N=200000; const a=new Float32Array(N*3); for(let i=0;i<N*3;i++)a[i]=(Math.random()-.5)*10; g.setAttribute('position',new THREE.BufferAttribute(a,3));
s.add(new THREE.Points(g,new THREE.PointsMaterial({size:0.02,color:0x66aaff})));
const k=new THREE.Mesh(new THREE.TorusKnotGeometry(1,0.3,400,64),new THREE.MeshStandardMaterial({color:0xffffff,metalness:.5,roughness:.3})); s.add(k); s.add(new THREE.PointLight(0xffffff,50)); s.add(new THREE.AmbientLight(0x404040));
window.renderAt=(t)=>{ k.rotation.set(t,t*0.7,0); const t0=performance.now(); for(let i=0;i<8;i++) r.render(s,cam); gl.finish(); return performance.now()-t0; };
window.ready=true;
</script></body></html>`);
const exe = process.argv[2];
const browser = await chromium.launch({ executablePath: exe, headless: true, args: (process.argv[3]||'').split(' ').filter(Boolean) });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
page.on('console', m => console.log('console:', m.text()));
await page.goto(`http://127.0.0.1:${port}/tools/gputest.html`);
await page.waitForFunction(() => window.ready);
console.log(await page.evaluate(() => window.info));
let tr=0, tj=0, tp=0;
for (let i = 0; i < 5; i++) {
  tr += await page.evaluate((t) => window.renderAt(t), i * 0.1);
  let t0 = Date.now(); await page.screenshot({ type: 'jpeg', quality: 95 }); tj += Date.now() - t0;
  t0 = Date.now(); await page.screenshot({ type: 'png' }); tp += Date.now() - t0;
}
console.log('render 8x (ms):', (tr/5).toFixed(1), ' jpeg shot:', tj/5, ' png shot:', tp/5);
await browser.close(); server.close();
