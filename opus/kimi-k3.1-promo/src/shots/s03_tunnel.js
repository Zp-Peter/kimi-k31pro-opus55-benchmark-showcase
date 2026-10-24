// S03 · 百万上下文 — an endless tunnel of tokens; speed ramps up as the counter races to 1,000,000,
// hangs for half a beat, then the drop: "1M" slams in, the tunnel bursts outward, dolly-zoom.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { GlyphText, CanvasPlane, font, FAMILIES } from '../engine/text.js';
import { keys, ease, clamp, smoothstep, mulberry32, pulse, fmtInt, shake, applyShake } from '../engine/util.js';

const CODE = ['function', 'return', 'const', 'import', 'class', 'async', 'await', '=>', '{ }', '[ ]', '0x7f3a', 'if', 'else', 'for', 'while', 'def', 'self', 'struct', 'impl', 'fn', 'let', 'yield', 'lambda', 'public', 'void', 'float', 'string', 'null', 'true', 'new', 'this', 'try', 'catch', 'export', 'module', 'package', 'template', 'Vector3', 'Update()', 'Start()', 'transform', 'render()', 'shader', 'mesh', 'physics', 'collider', 'README.md', 'main.py', 'index.ts', 'Cargo.toml', 'Dockerfile', 'git commit', 'TODO', '#include', '<div>', 'SELECT *', 'JOIN', 'WHERE', 'tokenizer', 'attention', 'softmax', 'embedding', 'layer[47]', 'expert_12', 'router', 'kv_cache', 'chunk_0931', 'player.gd', 'World.cpp', 'level_03', 'spawn()', 'onCollide', 'navmesh', 'Quaternion', 'lerp()', 'deltaTime', '@export', 'extends', 'signal', 'emit()', 'API', 'JSON', 'schema', 'query', 'commit 7e1c', 'merge', 'diff', 'patch', 'test_ok', 'assert', 'logger', 'config', 'yaml', 'docs/', 'src/', 'assets/', 'build/', 'scene.tscn'];
const CJK = ['上下文', '推理', '代码库', '文档', '需求', '设计', '测试', '日志', '数据', '模型', '函数', '接口', '用户', '场景', '物理', '渲染', '角色', '关卡', '资源', '配置', '注释', '版本', '提交', '合并', '部署', '思考', '规划', '工具', '调用', '检索', '记忆', '目标', '约束', '架构', '性能', '交互', '地图', '剧情', '音效', '存档'];
const MISC = ['token', '1M', '0.95', '128K', '256', '#3F7BFF', 'π', 'Σ', 'λ', 'Δ', '∞', '→', '</>', '∂x', '≈', '1e-4', 'fp8', '2.8T', '104B', '42'];

function buildAtlas() {
  const C = 4096, cw = 512, ch = 64, cols = C / cw;
  const c = document.createElement('canvas'); c.width = C; c.height = C;
  const g = c.getContext('2d'); g.fillStyle = '#fff'; g.textBaseline = 'middle';
  const words = [];
  for (const w of CODE) words.push([w, 'mono']);
  for (const w of CJK) words.push([w, 'cn']);
  for (const w of MISC) words.push([w, 'mono']);
  const cells = [];
  words.forEach(([w, fam], i) => {
    const x = (i % cols) * cw, y = Math.floor(i / cols) * ch;
    g.font = fam === 'cn' ? font(500, 42, 'cn') : font(500, 40, 'mono');
    const wd = Math.min(cw - 16, g.measureText(w).width);
    g.fillText(w, x + 8, y + ch / 2 + 2);
    cells.push({ u0: x / C, v0: 1 - (y + ch) / C, du: (wd + 16) / C, dv: ch / C, asp: (wd + 16) / ch });
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.NoColorSpace; tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.anisotropy = 16;
  return { tex, cells };
}

const tokVert = /* glsl */ `
attribute vec4 aUV; attribute vec4 aGeo; attribute float aAsp; attribute vec4 aCol; attribute float aSeed;
uniform float camZ; uniform float L; uniform float burst; uniform float spin;
varying vec2 vUv; varying vec4 vCol; varying float vFade;
void main(){
  float th = aGeo.x + spin * (0.6 + 0.8 * fract(aSeed * 7.0));
  float r = aGeo.y * (1.0 + burst * (0.8 + 2.2 * fract(aSeed * 13.1)));
  float rel = mod(aGeo.z - camZ, L) - L + 6.0;
  float z = camZ + rel;
  float h = aGeo.w; float w = h * aAsp;
  vec3 radial = vec3(cos(th), sin(th), 0.0);
  vec3 tangent = vec3(-sin(th), cos(th), 0.0);
  vec3 along = vec3(0.0, 0.0, 1.0);
  vec3 c = radial * r + vec3(0.0, 0.0, z);
  vec3 pos = c + along * (position.x * w) + tangent * (position.y * h);
  vUv = aUV.xy + uv * aUV.zw;
  vCol = aCol;
  vFade = smoothstep(-L + 6.0, -L * 0.55, rel) * smoothstep(6.0, 1.0, rel);
  gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
}`;
const tokFrag = /* glsl */ `
uniform sampler2D atlas; uniform float gain; varying vec2 vUv; varying vec4 vCol; varying float vFade;
void main(){ float a = texture2D(atlas, vUv).a; gl_FragColor = vec4(vCol.rgb * vCol.a * gain * a * vFade, 1.0); }`;

const lineVert = /* glsl */ `
attribute vec4 aGeo; attribute vec4 aCol; attribute float aSeed;
uniform float camZ; uniform float L; uniform float burst; uniform float spin; uniform float stretch;
varying vec2 vUv; varying vec4 vCol; varying float vFade;
void main(){
  float th = aGeo.x + spin * (0.6 + 0.8 * fract(aSeed * 7.0));
  float r = aGeo.y * (1.0 + burst * (0.8 + 2.2 * fract(aSeed * 13.1)));
  float rel = mod(aGeo.z - camZ, L) - L + 6.0;
  vec3 radial = vec3(cos(th), sin(th), 0.0); vec3 tangent = vec3(-sin(th), cos(th), 0.0);
  float len = aGeo.w * stretch;
  vec3 pos = radial * r + vec3(0.0, 0.0, camZ + rel) + vec3(0.0, 0.0, 1.0) * (position.x * len) + tangent * (position.y * 0.035);
  vUv = uv; vCol = aCol;
  vFade = smoothstep(-L + 6.0, -L * 0.5, rel) * smoothstep(6.0, 1.0, rel);
  gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
}`;
const lineFrag = /* glsl */ `
varying vec2 vUv; varying vec4 vCol; varying float vFade;
void main(){ float a = exp(-pow((vUv.y - 0.5) * 4.0, 2.0)) * smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.6, vUv.x); gl_FragColor = vec4(vCol.rgb * vCol.a * a * vFade, 1.0); }`;

const SPEED = [[-0.4, 4], [0, 5], [1.5, 16, ease.inQuad], [3.0, 80, ease.inQuad], [3.48, 170, ease.inQuad], [3.62, 9, ease.outCubic], [3.98, 2.5], [4.03, 80], [4.7, 26, ease.outCubic], [6.3, 10]];
const DT = 1 / 240;
function travel(t) {
  const t0 = -0.4;
  const n = Math.max(0, Math.floor((t - t0) / DT));
  let d = 0;
  for (let i = 0; i < n; i++) d += keys(t0 + (i + 0.5) * DT, SPEED) * DT;
  return d + keys(t, SPEED) * (t - t0 - n * DT);
}
const D_FULL = travel(3.5);

export class TunnelShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.near = 0.05; this.camera.far = 600; this.camera.fov = 72;
    const { tex, cells } = buildAtlas();
    const rnd = mulberry32(7);
    const N = 7000, L = 320;
    this.L = L;
    const quad = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = quad.index; geo.attributes.position = quad.attributes.position; geo.attributes.uv = quad.attributes.uv;
    const aUV = new Float32Array(N * 4), aGeo = new Float32Array(N * 4), aAsp = new Float32Array(N), aCol = new Float32Array(N * 4), aSeed = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const c = cells[Math.floor(rnd() * cells.length)];
      aUV.set([c.u0, c.v0, c.du, c.dv], i * 4); aAsp[i] = c.asp;
      const inner = rnd() < 0.12;
      aGeo.set([rnd() * Math.PI * 2, inner ? 2.2 + rnd() * 2 : 5.2 + rnd() * 3.2, rnd() * L, inner ? 0.12 + rnd() * 0.1 : 0.22 + rnd() * 0.3], i * 4);
      const k = rnd();
      const col = k < 0.16 ? [0.32, 0.56, 1.0, 1.4 + rnd() * 1.6] : k < 0.2 ? [1, 1, 1, 3.5] : k < 0.28 ? [0.6, 0.45, 1.0, 1.0] : [0.75, 0.82, 0.95, 0.22 + rnd() * 0.45];
      aCol.set(col, i * 4); aSeed[i] = rnd();
    }
    geo.setAttribute('aUV', new THREE.InstancedBufferAttribute(aUV, 4));
    geo.setAttribute('aGeo', new THREE.InstancedBufferAttribute(aGeo, 4));
    geo.setAttribute('aAsp', new THREE.InstancedBufferAttribute(aAsp, 1));
    geo.setAttribute('aCol', new THREE.InstancedBufferAttribute(aCol, 4));
    geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(aSeed, 1));
    geo.instanceCount = N;
    this.uni = { atlas: { value: tex }, camZ: { value: 0 }, L: { value: L }, burst: { value: 0 }, spin: { value: 0 }, gain: { value: 1 }, stretch: { value: 1 } };
    const tokMat = new THREE.ShaderMaterial({ vertexShader: tokVert, fragmentShader: tokFrag, uniforms: this.uni, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    this.tokens = new THREE.Mesh(geo, tokMat); this.tokens.frustumCulled = false; this.scene.add(this.tokens);

    // light streaks
    const M = 520;
    const lg = new THREE.InstancedBufferGeometry();
    const lq = new THREE.PlaneGeometry(1, 1);
    lg.index = lq.index; lg.attributes.position = lq.attributes.position; lg.attributes.uv = lq.attributes.uv;
    const lGeo = new Float32Array(M * 4), lCol = new Float32Array(M * 4), lSeed = new Float32Array(M);
    for (let i = 0; i < M; i++) {
      lGeo.set([rnd() * Math.PI * 2, 4.6 + rnd() * 4.5, rnd() * L, 2 + rnd() * 10], i * 4);
      lCol.set(rnd() < 0.7 ? [0.3, 0.55, 1.0, 1.5 + rnd() * 3] : [0.85, 0.9, 1.0, 2 + rnd() * 2], i * 4); lSeed[i] = rnd();
    }
    lg.setAttribute('aGeo', new THREE.InstancedBufferAttribute(lGeo, 4));
    lg.setAttribute('aCol', new THREE.InstancedBufferAttribute(lCol, 4));
    lg.setAttribute('aSeed', new THREE.InstancedBufferAttribute(lSeed, 1));
    lg.instanceCount = M;
    const lineMat = new THREE.ShaderMaterial({ vertexShader: lineVert, fragmentShader: lineFrag, uniforms: this.uni, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    this.lines = new THREE.Mesh(lg, lineMat); this.lines.frustumCulled = false; this.scene.add(this.lines);

    this.core = glowSprite('glow', '#7fb4ff', 60, { intensity: 2.5 });
    this.scene.add(this.core);

    // HUD
    this.hud = new CanvasPlane(760, 170, { res: 1.5 });
    this.hud.position.set(-960 + 90 + 380, -540 + 90 + 85, 0);
    this.overlay.add(this.hud);
    this.hudTR = new GlyphText('CONTEXT WINDOW · 1,000,000', { family: 'mono', weight: 500, size: 17, tracking: 0.12, color: '#8fb3ea', align: 'right' });
    this.hudTR.position.set(960 - 90, 540 - 80, 0);
    this.overlay.add(this.hudTR);
    // hero type
    this.big = new GlyphText('1M', { family: 'sans', weight: 800, size: 330, tracking: -0.02, res: 1.5, color: '#ffffff', colorBottom: '#9cc4ff', intensity: 1.25 });
    this.big.position.set(0, 70, 0);
    this.sub = new GlyphText('百万 token 上下文', { family: 'cn', weight: 500, size: 58, tracking: 0.08, color: '#f2f6ff' });
    this.sub.position.set(0, -150, 0);
    this.en = new GlyphText('1M-TOKEN CONTEXT  ·  一次读完整个项目', { family: 'sans', weight: 500, size: 21, tracking: 0.3, color: '#8fb6f5' });
    this.en.position.set(0, -228, 0);
    this.overlay.add(this.big, this.sub, this.en);
  }

  drawHud(t, count, a) {
    this.hud.opacity = a;
    if (a <= 0.001) return;
    this.hud.draw((g, W, H) => {
      g.fillStyle = 'rgba(143,179,234,0.9)'; g.font = font(600, 17, 'sans'); g.textBaseline = 'alphabetic';
      g.letterSpacing = '4px'; g.fillText('TOKENS READ  ·  已读取', 0, 26); g.letterSpacing = '0px';
      g.fillStyle = '#f4f8ff'; g.font = font(700, 78, 'sans');
      g.fillText(fmtInt(count), 0, 112);
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(0, 138, 600, 4);
      const f = count / 1e6;
      const gr = g.createLinearGradient(0, 0, 600, 0); gr.addColorStop(0, '#3d7bff'); gr.addColorStop(1, '#6fe0ff');
      g.fillStyle = gr; g.fillRect(0, 138, 600 * f, 4);
      g.fillStyle = 'rgba(160,190,235,0.7)'; g.font = font(500, 15, 'mono'); g.fillText(`${(f * 100).toFixed(1)}%`, 612, 145);
    });
  }

  update(t, ctx) {
    const cam = this.camera;
    const d = travel(t);
    const camZ = -d;
    const yawWhip = keys(t, [[5.82, 0], [6.25, 1.25, ease.inCubic]]);
    const roll = keys(t, [[-0.4, 0], [3.5, 0.9, ease.inQuad], [4.0, 0.95], [6.3, 1.2]]);
    cam.fov = keys(t, [[-0.4, 70], [3.45, 82, ease.inQuad], [3.9, 74], [4.02, 100], [5.3, 60, ease.outCubic], [6.3, 56]]);
    cam.updateProjectionMatrix();
    cam.position.set(0, 0, camZ);
    cam.up.set(Math.sin(roll), Math.cos(roll), 0);
    cam.lookAt(Math.sin(yawWhip) * 10, 0, camZ - Math.cos(yawWhip) * 10);
    const sh = shake(t * 2.5, 0.4 + 2.5 * smoothstep(2.5, 3.45, t) * (t < 3.6 ? 1 : 0) + 3.0 * pulse(t, 4.0, 0.25), 1.8, 5);
    applyShake(cam, sh);
    cam.updateMatrixWorld();
    const u = this.uni;
    u.camZ.value = camZ;
    u.burst.value = keys(t, [[4.0, 0], [5.0, 1.0, ease.outCubic], [6.3, 1.25]]);
    u.spin.value = t * 0.18 + keys(t, [[0, 0], [3.5, 0.6, ease.inQuad]]);
    const v = keys(t, SPEED);
    u.stretch.value = 1 + v * 0.03;
    u.gain.value = keys(t, [[-0.3, 0.6], [1, 1], [3.5, 1.3], [3.65, 0.5], [3.98, 0.4], [4.02, 1.6], [5.0, 0.7]]);
    this.core.position.set(0, 0, camZ - 220);
    this.core.setOpacity(keys(t, [[0, 0.6], [3.5, 1.4], [3.7, 0.3], [4.0, 0.2], [4.05, 2.0], [4.6, 0.3]]));
    this.core.setSize(60 + v * 0.6);

    const count = Math.min(1e6, (travel(ctx ? ctx.ft : t) / D_FULL) * 1e6);
    this.drawHud(t, count, keys(t, [[0.1, 0], [0.5, 1], [3.75, 1], [3.95, 0]]));
    this.hudTR.animate(t, { in: { start: 0.4, dur: 0.5, stagger: 0.01, style: 'fade' }, out: { start: 3.75, dur: 0.2, stagger: 0, style: 'fade' }, opacity: 0.8 });
    this.big.animate(t, { in: { start: 4.0, dur: 0.32, stagger: 0.05, style: 'slam', ease: ease.outQuart } });
    this.sub.animate(t, { in: { start: 4.2, dur: 0.6, stagger: 0.03, style: 'rise' } });
    this.en.animate(t, { in: { start: 4.45, dur: 0.7, stagger: 0.012, style: 'track' }, opacity: 0.9 });
    // the hero type drifts toward camera for life
    const push = 1 + 0.06 * smoothstep(4.0, 6.2, t);
    this.big.scale.setScalar(push); this.sub.scale.setScalar(push * 0.995); this.en.scale.setScalar(push * 0.99);
  }

  post(t) {
    const v = keys(t, SPEED);
    const sp = clamp(v / 170);
    const hang = smoothstep(3.5, 3.6, t) * (1 - smoothstep(3.98, 4.0, t));
    return {
      exposure: 1.0 - 0.35 * hang,
      saturation: 1.0 - 0.4 * hang,
      bloom: 0.7, bloomThreshold: 0.9, streak: 0.28 + 0.3 * pulse(t, 4.0, 0.4),
      ca: 0.002 + 0.012 * sp + 0.02 * pulse(t, 4.0, 0.15),
      zoomBlur: 0.05 * sp + 0.25 * pulse(t, 4.0, 0.12),
      flash: 2.2 * pulse(t, 4.0, 0.04), // short hit: the 1M lands on deep blacks within ~4 frames
      shock: [keys(t, [[4.0, 0], [4.7, 1.3, ease.outCubic]]), 0.05, 0, t >= 4.0 ? 0.035 * (1 - smoothstep(4.0, 4.7, t)) : 0],
      vignette: 0.5, grain: 0.05, temperature: -0.15,
    };
  }

  samples(t) { return t > 2.6 && t < 3.6 ? 14 : 10; }
}
