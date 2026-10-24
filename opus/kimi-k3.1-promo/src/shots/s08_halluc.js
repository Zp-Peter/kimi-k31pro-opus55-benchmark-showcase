// S08 · 更少幻觉 — a wall of claims tumbles in glitchy chaos (6 of 24 false ≈ K3's 23.4%); a scanner
// blade sweeps left to right, snapping each card into a verified grid (2 of 24 still false ≈ 8.3%),
// the glitch drains away and the big rate counts down 23.4% → 8.3%.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { GlyphText, CanvasPlane, roundRect, font } from '../engine/text.js';
import { ease, clamp, smoothstep, pulse, lerp, mulberry32, hash1, shake, applyShake, GLSL_NOISE } from '../engine/util.js';

const CLAIMS = [
  '营收同比增长 18%', '函数复杂度 O(n log n)', '样本量为 12,480 条', '该接口支持流式输出',
  '第 3 章引用了 7 篇文献', '峰值内存 2.1 GB', '毛利率提升 2.4 个百分点', '测试覆盖率 87%',
  '数据截至 2026 年 6 月', '共发现 3 处依赖冲突', '平均延迟 120 ms', '汇率按季度均值折算',
  '表 2 第 4 行数值有误', '5 次运行结果一致', '该字段可以为空', '经营现金流为正',
  '结论基于对照实验', '构建产物 4.7 MB', '用户留存率 61%', '该配置项已弃用',
  '误差范围 ±1.5%', '调用方需处理超时', '报告共 42 页', '迁移脚本可回滚',
];
const FALSE_BEFORE = new Set([1, 5, 9, 12, 17, 22]); // 6 / 24 = 25%
const FALSE_AFTER = new Set([9, 17]);                // 2 / 24 = 8.3%
const SCAN = [1.7, 2.2];

const bgFrag = /* glsl */ `
uniform float uChaos, uTime; varying vec2 vUv;
${GLSL_NOISE}
void main(){
  vec2 p = vUv;
  vec3 col = mix(vec3(0.004, 0.007, 0.018), vec3(0.012, 0.02, 0.05), p.y);
  float lines = step(0.982, fract(p.y * 90.0 + uTime * 3.0));
  float n = hash12(floor(p * vec2(160.0, 90.0)) + floor(uTime * 24.0));
  float band = step(0.93, hash12(vec2(floor(p.y * 30.0), floor(uTime * 12.0))));
  col += vec3(0.10, 0.008, 0.03) * (n * 0.5 + lines * 0.8 + band * 0.9) * uChaos;
  vec2 g = fract(p * vec2(64.0, 36.0)) - 0.5;
  col += vec3(0.035, 0.08, 0.16) * exp(-dot(g, g) * 300.0) * (1.0 - uChaos);
  gl_FragColor = vec4(col, 1.0);
}`;

export class HallucShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.fov = 40; this.camera.near = 0.1; this.camera.far = 200;
    const rnd = mulberry32(808);
    this.bg = new THREE.Mesh(new THREE.PlaneGeometry(64, 36), new THREE.ShaderMaterial({
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: bgFrag, depthWrite: false, uniforms: { uChaos: { value: 1 }, uTime: { value: 0 } },
    }));
    this.bg.position.z = -20; this.scene.add(this.bg);

    this.wall = new THREE.Group(); this.wall.position.set(-5.3, 0, 0); this.wall.rotation.y = 0.12;
    this.scene.add(this.wall);
    this.cards = CLAIMS.map((text, i) => {
      const c = i % 3, r = Math.floor(i / 3);
      const p = new CanvasPlane(420, 120, { worldW: 3.0, res: 1.5 });
      p.userData = {
        i, text, key: '',
        grid: new THREE.Vector3((c - 1) * 3.2, (3.5 - r) * 1.02, 0),
        chaos: new THREE.Vector3(-6 + rnd() * 15, -5 + rnd() * 10, -6 + rnd() * 11),
        rot: new THREE.Euler((rnd() - 0.5) * 1.0, (rnd() - 0.5) * 1.2, (rnd() - 0.5) * 0.9),
        spin: (rnd() - 0.5) * 0.6, seed: rnd() * 100,
      };
      this.wall.add(p);
      return p;
    });
    // scanner blade: hard core + soft halo
    this.blade = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 18), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 2.6, 4.0).multiplyScalar(2), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
    this.halo = glowSprite('soft', '#7fc8ff', 1, { intensity: 1.1 });
    this.halo.setSize(3.2, 20);
    this.scene.add(this.blade, this.halo);

    // overlay: right column
    this.label = new CanvasPlane(744, 60, { res: 1.5 });
    this.label.position.set(120 + 372, 205, 0);
    this.num = new CanvasPlane(744, 240, { res: 1.5 });
    this.num.position.set(120 + 372, 60, 0);
    this.numScratch = document.createElement('canvas'); this.numScratch.width = 744 * 1.5; this.numScratch.height = 240 * 1.5;
    this.bars = new CanvasPlane(744, 150, { res: 1.5 });
    this.bars.position.set(120 + 372, -150, 0);
    this.headline = new GlyphText('更少幻觉，更可信', { family: 'cn', weight: 600, size: 70, tracking: 0.06, color: '#ffffff', align: 'left' });
    this.headline.position.set(120, 330, 0);
    this.foot = new GlyphText('Kimi Hallu Bench Hard · 声明级幻觉率 · 使用工具 · 高难度压力测试', { family: 'cn', weight: 400, size: 18, tracking: 0.04, color: '#8a9bbd', align: 'right' });
    this.foot.position.set(864, -460, 0);
    this.overlay.add(this.label, this.num, this.bars, this.headline, this.foot);
    this.numKey = this.labelKey = this.barsKey = '';
  }

  drawCard(p, state) {
    if (p.userData.key === state) return;
    p.userData.key = state;
    const bad = state.endsWith('False'), clean = state.startsWith('clean');
    p.draw((g, W, H) => {
      roundRect(g, 2, 2, W - 4, H - 4, 14); g.fillStyle = 'rgba(14,20,36,0.92)'; g.fill();
      g.lineWidth = 2; g.strokeStyle = bad ? 'rgba(255,77,109,0.85)' : clean ? 'rgba(94,224,160,0.6)' : 'rgba(140,150,180,0.35)'; g.stroke();
      g.beginPath(); g.arc(46, H / 2, 22, 0, 7); g.fillStyle = bad ? '#ff4d6d' : clean ? '#38c98a' : '#3a4560'; g.fill();
      g.font = font(800, 24, 'sans'); g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(bad ? '✗' : clean ? '✓' : '?', 46, H / 2 + 1);
      g.textAlign = 'left'; g.textBaseline = 'alphabetic';
      const txt = p.userData.text;
      g.font = font(500, 25, 'cn');
      if (bad && !clean) {
        g.globalCompositeOperation = 'lighter';
        g.fillStyle = 'rgba(255,40,80,0.9)'; g.fillText(txt, 86 - 3, 58);
        g.fillStyle = 'rgba(40,220,255,0.7)'; g.fillText(txt, 86 + 3, 58);
        g.globalCompositeOperation = 'source-over';
      } else { g.fillStyle = bad ? '#ffb3c0' : clean ? '#eaf2ff' : '#c9d3e6'; g.fillText(txt, 86, 58); }
      g.font = font(400, 16, 'cn');
      g.fillStyle = bad ? '#ff7b93' : clean ? '#7fd9ae' : '#7d8aa8';
      g.fillText(bad ? '与来源不符' : clean ? `已核实 · 来源 [${p.userData.i + 1}]` : '未核实', 86, 90);
    });
  }

  drawNumber(t, ft) {
    const chaos = t < SCAN[1] + 0.05;
    const v = chaos ? 23.4 : lerp(23.4, 8.3, ease.outExpo(clamp((ft - 2.25) / 0.7)));
    const glitchSeed = chaos ? Math.floor(ft * 15) : -1;
    const key = `${v.toFixed(1)}|${glitchSeed}`;
    if (key === this.numKey) return;
    this.numKey = key;
    const txt = v.toFixed(1) + '%';
    const S = this.numScratch, sg = S.getContext('2d');
    sg.setTransform(1.5, 0, 0, 1.5, 0, 0); sg.clearRect(0, 0, 744, 240);
    sg.font = font(800, 200, 'sans'); sg.textBaseline = 'alphabetic';
    if (chaos) {
      sg.globalCompositeOperation = 'lighter';
      sg.fillStyle = '#ff2050'; sg.fillText(txt, -6, 200);
      sg.fillStyle = '#00d8ff'; sg.fillText(txt, 6, 200);
      sg.fillStyle = 'rgba(255,120,150,0.9)'; sg.fillText(txt, 0, 200);
      sg.globalCompositeOperation = 'source-over';
    } else {
      const gr = sg.createLinearGradient(0, 40, 0, 200); gr.addColorStop(0, '#ffffff'); gr.addColorStop(1, '#8ff5c8');
      sg.fillStyle = gr; sg.fillText(txt, 0, 200);
    }
    const rnd = mulberry32(glitchSeed * 31 + 7);
    this.num.draw((g, W, H) => {
      if (!chaos) { g.drawImage(S, 0, 0, W, H); return; }
      // slice-and-shift glitch: horizontal strips displaced per frame
      let y = 0;
      while (y < H) {
        const h = 6 + rnd() * 34, dx = rnd() < 0.35 ? (rnd() - 0.5) * 60 : 0;
        g.drawImage(S, 0, y * 1.5, S.width, h * 1.5, dx, y, W, h);
        y += h;
      }
    });
  }

  drawLabel(t) {
    const after = t >= SCAN[1] + 0.05;
    if (this.labelKey === String(after)) return;
    this.labelKey = String(after);
    this.label.draw((g, W, H) => {
      g.textBaseline = 'middle';
      const chip = after ? 'K3.1 Pro' : 'K3';
      g.font = font(700, 20, 'sans'); const cw = g.measureText(chip).width + 32;
      roundRect(g, 2, 12, cw, 36, 18); g.fillStyle = after ? 'rgba(94,224,160,0.18)' : 'rgba(255,77,109,0.2)'; g.fill();
      g.strokeStyle = after ? '#5ee0a0' : '#ff4d6d'; g.lineWidth = 1.5; g.stroke();
      g.fillStyle = after ? '#9dffd0' : '#ff9db0'; g.textAlign = 'center'; g.fillText(chip, 2 + cw / 2, 31); g.textAlign = 'left';
      g.font = font(500, 24, 'cn'); g.fillStyle = '#dfe8fa'; g.fillText('声明级幻觉率', cw + 20, 31);
      const x2 = cw + 20 + g.measureText('声明级幻觉率').width + 14;
      g.font = font(600, 13, 'sans'); g.fillStyle = 'rgba(150,175,225,0.8)'; g.letterSpacing = '2px'; g.fillText('CLAIM-LEVEL HALLUCINATION RATE', x2, 32); g.letterSpacing = '0px';
    });
  }

  drawBars(t) {
    const q1 = ease.outCubic(clamp((t - 2.6) / 0.45)), q2 = ease.outCubic(clamp((t - 2.75) / 0.45));
    const key = q1.toFixed(3) + q2.toFixed(3);
    if (key === this.barsKey) return;
    this.barsKey = key;
    this.bars.draw((g, W) => {
      const row = (y, name, v, q, col, valCol) => {
        g.globalAlpha = Math.min(1, q * 3);
        g.textBaseline = 'middle'; g.font = font(600, 20, 'sans'); g.fillStyle = '#c6d3ee'; g.fillText(name, 0, y);
        g.fillStyle = 'rgba(255,255,255,0.07)'; roundRect(g, 130, y - 13, 470, 26, 13); g.fill();
        g.fillStyle = col; roundRect(g, 130, y - 13, Math.max(26, 470 * (v / 25) * q), 26, 13); g.fill();
        g.font = font(700, 24, 'sans'); g.fillStyle = valCol; g.textAlign = 'right'; g.fillText(v.toFixed(1) + '%', W - 4, y + 1); g.textAlign = 'left';
        g.globalAlpha = 1;
      };
      const gr = g.createLinearGradient(130, 0, 600, 0); gr.addColorStop(0, '#2fbf86'); gr.addColorStop(1, '#8ff5c8');
      row(40, 'K3', 23.4, q1, 'rgba(255,77,109,0.75)', '#ff9db0');
      row(100, 'K3.1 Pro', 8.3, q2, gr, '#9dffd0');
    });
  }

  update(t, ctx) {
    const ft = ctx ? ctx.ft : t;
    const chaos = 1 - smoothstep(SCAN[0] + 0.05, SCAN[1], t);
    const spike = chaos > 0.01 && hash1(Math.floor(ft * 12) * 7.13) > 0.72 ? 1 : 0;
    const cam = this.camera;
    cam.position.set(-0.8 + spike * (hash1(ft * 91) - 0.5) * 0.4, 0.2, lerp(16, 14.8, ease.outCubic(clamp(t / 4))));
    cam.up.set(0, 1, 0); cam.lookAt(-0.8, 0, 0);
    cam.rotateZ(chaos * 0.035 * Math.sin(t * 2.3));
    applyShake(cam, shake(t, 0.35 + 3.2 * chaos, 1.6, 13));
    cam.updateProjectionMatrix(); cam.updateMatrixWorld();
    this.bg.material.uniforms.uChaos.value = chaos;
    this.bg.material.uniforms.uTime.value = ft;

    // scanner blade sweeps the wall; each card snaps home as it passes its column
    const bq = clamp((t - SCAN[0]) / (SCAN[1] - SCAN[0]));
    const bx = lerp(-11.8, 1.6, ease.inOutQuad(bq));
    const on = bq > 0 && bq < 1 ? 1 : 0;
    this.blade.position.set(bx, 0, 0.6); this.blade.visible = !!on;
    this.halo.position.set(bx, 0, 0.5); this.halo.setOpacity(on * Math.sin(bq * Math.PI) * 1.2);
    for (const p of this.cards) {
      const u = p.userData;
      const wx = this.wall.position.x + u.grid.x - 1.5;
      const tSnap = SCAN[0] + (SCAN[1] - SCAN[0]) * clamp((wx + 11.8) / 13.4);
      const k = ease.outBack(clamp((t - tSnap) / 0.28), 1.2);
      const jit = t < tSnap && hash1(u.seed + Math.floor(ft * 15) * 3.1) > 0.82 ? (hash1(u.seed * 3 + ft) - 0.5) * 0.9 : 0;
      p.position.set(lerp(u.chaos.x + jit, u.grid.x, k), lerp(u.chaos.y + Math.sin(t * 1.3 + u.seed) * 0.25, u.grid.y, k), lerp(u.chaos.z, u.grid.z, k));
      p.rotation.set(lerp(u.rot.x, 0, k), lerp(u.rot.y + u.spin * t, 0, k), lerp(u.rot.z, 0, k));
      const after = t >= tSnap;
      const bad = after ? FALSE_AFTER.has(u.i) : FALSE_BEFORE.has(u.i);
      this.drawCard(p, (after ? 'clean' : 'chaos') + (bad ? 'False' : 'Ok'));
      p.opacity = (after ? 1 : bad && hash1(u.seed + Math.floor(ft * 20)) > 0.75 ? 0.35 : 0.9) * smoothstep(-0.3, -0.1, t);
      p.intensity = after ? 1 + 1.6 * pulse(t, tSnap, 0.12) : 1;
    }

    // overlay
    const out = 1 - smoothstep(3.6, 3.78, t);
    this.num.opacity = smoothstep(-0.1, 0.1, t) * out;
    this.label.opacity = this.num.opacity;
    this.drawNumber(t, ft); this.drawLabel(t);
    this.num.intensity = 1 + 1.2 * pulse(t, SCAN[1] + 0.05, 0.15);
    this.bars.opacity = out; this.drawBars(t);
    this.headline.animate(t, { in: { start: 2.3, dur: 0.55, stagger: 0.04, style: 'blur' }, out: { start: 3.6, dur: 0.18, stagger: 0.01, style: 'fade' } });
    this.foot.animate(t, { in: { start: 2.8, dur: 0.4, stagger: 0.004, style: 'fade' }, out: { start: 3.6, dur: 0.18, stagger: 0, style: 'fade' }, opacity: 0.9 });
  }

  post(t, ctx) {
    const ft = ctx ? ctx.ft : t;
    const chaos = 1 - smoothstep(SCAN[0] + 0.05, SCAN[1], t);
    const spike = hash1(Math.floor(ft * 12) * 7.13) > 0.72 ? 1 : 0;
    const beam = Math.sin(clamp((t - SCAN[0]) / (SCAN[1] - SCAN[0])) * Math.PI);
    return {
      glitch: chaos * (0.15 + 0.55 * spike), ca: 0.0025 + chaos * 0.01, grain: 0.045 + chaos * 0.04,
      bloom: 0.55, streak: 0.3 + 0.5 * beam, vignette: 0.45, contrast: 1.06, temperature: -0.04,
      flash: 0.45 * pulse(t, SCAN[1], 0.1), flashColor: [0.6, 0.95, 0.85],
    };
  }

  samples(t) { return t > SCAN[0] - 0.05 && t < SCAN[1] + 0.3 ? 12 : 8; }
}
