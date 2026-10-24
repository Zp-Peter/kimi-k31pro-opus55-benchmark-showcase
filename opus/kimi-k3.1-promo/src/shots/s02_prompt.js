// S02 · 提问 — a floating glass prompt box; the question types itself, Enter sends it into depth.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { GlyphText, CanvasPlane, roundRect, font } from '../engine/text.js';
import { keys, ease, clamp, smoothstep, shake, applyShake, mulberry32, pulse, fmtInt } from '../engine/util.js';

export const PROMPT = '读完整个代码库，把它做成一款能玩的游戏。';
export const TYPE_START = 0.55;
export const ENTER_AT = 3.3;
// Keystroke times (local). The soundtrack generator mirrors this formula.
export function keyTimes() {
  const out = []; let t = TYPE_START;
  for (let i = 0; i < Array.from(PROMPT).length; i++) {
    out.push(t);
    t += 0.104 + 0.014 * Math.sin(i * 2.3) + (i === 7 ? 0.16 : 0);
  }
  return out;
}

const bgFrag = /* glsl */ `
uniform float time; varying vec2 vUv;
void main(){
  vec2 p = vUv - vec2(0.5, 0.55); p.x *= 1.7;
  float r = length(p);
  vec3 c = mix(vec3(0.030, 0.055, 0.120), vec3(0.0), smoothstep(0.0, 0.75, r));
  c += vec3(0.06, 0.03, 0.12) * exp(-pow((vUv.x - 0.8) * 3.0, 2.0) - pow((vUv.y - 0.75) * 4.0, 2.0));
  gl_FragColor = vec4(c, 1.0);
}`;
const gridFrag = /* glsl */ `
varying vec3 vW; uniform vec3 camPos;
void main(){
  vec2 g = abs(fract(vW.xz * 0.5) - 0.5) / fwidth(vW.xz * 0.5);
  float line = 1.0 - min(min(g.x, g.y), 1.0);
  float fade = exp(-length(vW.xz - camPos.xz) * 0.06);
  gl_FragColor = vec4(vec3(0.20, 0.42, 1.0) * line * fade * 0.22, 1.0);
}`;

export class PromptShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.fov = 38; this.camera.near = 0.05; this.camera.far = 400;
    // backdrop
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(160, 90), new THREE.ShaderMaterial({ vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }', fragmentShader: bgFrag, uniforms: { time: { value: 0 } }, depthWrite: false }));
    bg.position.z = -40; this.scene.add(bg);
    this.gridMat = new THREE.ShaderMaterial({
      vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: gridFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { camPos: { value: new THREE.Vector3() } },
    });
    const grid = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), this.gridMat);
    grid.rotation.x = -Math.PI / 2; grid.position.y = -4.2; this.scene.add(grid);

    // bokeh
    const rnd = mulberry32(42);
    this.bokeh = [];
    const cols = ['#4f8dff', '#6fd0ff', '#a98bff', '#ffffff', '#3a6bff'];
    for (let i = 0; i < 80; i++) {
      const fg = i < 10;
      const z = fg ? 3 + rnd() * 5 : -30 + rnd() * 26;
      const s = glowSprite('bokeh', cols[i % cols.length], fg ? 1.2 + rnd() * 1.8 : 0.4 + rnd() * 1.6, { intensity: fg ? 0.05 : 0.08 + rnd() * 0.25 });
      s.position.set((rnd() - 0.5) * (fg ? 16 : 70), (rnd() - 0.5) * (fg ? 9 : 36), z);
      s.userData = { base: s.position.clone(), sp: 0.1 + rnd() * 0.3, ph: rnd() * 6.28 };
      this.scene.add(s); this.bokeh.push(s);
    }

    // panel (1600 x 340 px, 0.01 world units per px)
    this.panel = new CanvasPlane(1600, 340, { worldW: 16, res: 1.5, intensity: 1 });
    this.panel.renderOrder = 20;
    this.scene.add(this.panel);
    this.glow = glowSprite('soft', '#3d7bff', 22, { intensity: 0.22 });
    this.glow.position.set(0, 0, -0.6); this.glow.setSize(26, 9); this.scene.add(this.glow);

    this.prompt = new GlyphText(PROMPT, { family: 'cn', weight: 500, size: 46, align: 'left', res: 3, color: '#f4f7ff', depthTest: false, renderOrder: 30 });
    this.prompt.scale.setScalar(0.01);
    this.prompt.position.set(-7.42, 0.22, 0.02);
    this.scene.add(this.prompt);
    this.keys = keyTimes();
    this.cursor = new THREE.Mesh(new THREE.PlaneGeometry(3, 56), new THREE.MeshBasicMaterial({ color: new THREE.Color('#58c8ff').multiplyScalar(2.2), transparent: true, depthTest: false }));
    this.cursor.renderOrder = 31;
    this.prompt.add(this.cursor);
  }

  drawPanel(t) {
    const send = pulse(t, ENTER_AT, 0.25);
    const press = ENTER_AT <= t && t < ENTER_AT + 0.12 ? 1 : 0;
    this.panel.draw((g, W, H) => {
      // glass body
      roundRect(g, 4, 4, W - 8, H - 8, 44);
      const body = g.createLinearGradient(0, 0, 0, H);
      body.addColorStop(0, 'rgba(34,44,70,0.80)'); body.addColorStop(1, 'rgba(12,16,30,0.86)');
      g.fillStyle = body; g.fill();
      const edge = g.createLinearGradient(0, 0, W, 0);
      edge.addColorStop(0, `rgba(90,150,255,${0.75 + 0.25 * send})`); edge.addColorStop(0.55, 'rgba(120,110,255,0.55)'); edge.addColorStop(1, `rgba(80,200,255,${0.7 + 0.3 * send})`);
      g.lineWidth = 2.5; g.strokeStyle = edge; g.stroke();
      g.beginPath(); g.moveTo(60, 7); g.lineTo(W - 60, 7); g.strokeStyle = 'rgba(255,255,255,0.22)'; g.lineWidth = 1.2; g.stroke();
      // model chip
      const chip = (x, y, w, label, dot) => {
        roundRect(g, x, y, w, 46, 23); g.fillStyle = 'rgba(79,141,255,0.14)'; g.fill();
        g.strokeStyle = 'rgba(110,160,255,0.55)'; g.lineWidth = 1.5; g.stroke();
        if (dot) { g.beginPath(); g.arc(x + 24, y + 23, 6, 0, 7); g.fillStyle = dot; g.fill(); }
        g.fillStyle = '#d6e4ff'; g.font = font(600, 21, 'sans'); g.textBaseline = 'middle'; g.fillText(label, x + (dot ? 40 : 20), y + 24);
      };
      chip(40, 30, 196, 'Kimi K3.1 Pro', '#4fd1ff');
      chip(250, 30, 150, '思考 · max', '#a98bff');
      g.font = font(500, 20, 'mono'); g.fillStyle = 'rgba(160,180,215,0.7)'; g.textBaseline = 'middle';
      g.fillText('▾', 210, 54);
      // attachment chip
      roundRect(g, 40, 262, 380, 44, 12); g.fillStyle = 'rgba(255,255,255,0.05)'; g.fill(); g.strokeStyle = 'rgba(255,255,255,0.12)'; g.lineWidth = 1.2; g.stroke();
      g.fillStyle = '#7fb0ff'; roundRect(g, 56, 274, 26, 20, 4); g.fill();
      g.fillStyle = '#a8bbd9'; g.font = font(500, 19, 'mono'); g.fillText('monorepo/  ·  982,144 tokens', 96, 285);
      // send button
      const bx = W - 92, by = 256, r = 44 * (1 - press * 0.12);
      const bg = g.createLinearGradient(bx - r, by - r, bx + r, by + r);
      bg.addColorStop(0, '#5ea0ff'); bg.addColorStop(1, '#2e5bff');
      g.beginPath(); g.arc(bx, by, r, 0, 7); g.fillStyle = bg; g.fill();
      if (send > 0.01) { g.beginPath(); g.arc(bx, by, r + 10 + (1 - send) * 40, 0, 7); g.strokeStyle = `rgba(120,190,255,${send})`; g.lineWidth = 3; g.stroke(); }
      g.strokeStyle = '#fff'; g.lineWidth = 4.5; g.lineCap = 'round'; g.lineJoin = 'round';
      g.beginPath(); g.moveTo(bx, by + 17); g.lineTo(bx, by - 17); g.moveTo(bx - 14, by - 3); g.lineTo(bx, by - 17); g.lineTo(bx + 14, by - 3); g.stroke();
    });
    this.panel.intensity = 1 + send * 0.6;
  }

  update(t) {
    // camera: low arc to the front, then a hard push into the box
    const cam = this.camera;
    const p = keys(t, [[-0.4, [-6.2, -2.4, 21.5]], [3.25, [-1.3, -0.5, 16.2], ease.outCubic], [4.3, [0.15, 0.05, 1.2], ease.inCubic]]);
    const look = keys(t, [[-0.4, [0.2, 0.05, 0]], [3.25, [0.0, 0.0, 0]], [4.3, [0.15, 0.05, -2]]]);
    cam.position.set(...p);
    cam.up.set(Math.sin(keys(t, [[-0.4, 0.05], [3.3, 0.0]])), 1, 0).normalize();
    cam.lookAt(...look);
    cam.fov = keys(t, [[-0.4, 36], [3.3, 34], [4.3, 48, ease.inQuad]]);
    cam.updateProjectionMatrix();
    applyShake(cam, shake(t, 0.5, 0.7, 11));
    this.gridMat.uniforms.camPos.value.copy(cam.position);

    for (const b of this.bokeh) {
      const u = b.userData;
      b.position.set(u.base.x + Math.sin(t * u.sp + u.ph) * 0.4, u.base.y + Math.cos(t * u.sp * 0.8 + u.ph) * 0.25 + t * 0.05, u.base.z);
    }
    this.drawPanel(t);
    this.glow.setOpacity(0.7 + 0.6 * pulse(t, ENTER_AT, 0.3));

    // typing
    const g = this.prompt.glyphs;
    let last = -1;
    for (let i = 0; i < g.length; i++) {
      const k = this.keys[i];
      const on = t >= k;
      const m = g[i];
      m.position.set(m.userData.bx, m.userData.by, 0); m.rotation.set(0, 0, 0);
      const pop = on ? 1 + 0.18 * Math.exp(-(t - k) / 0.05) : 1;
      m.scale.set(pop, pop, 1);
      m.material.uniforms.opacity.value = on ? 1 : 0;
      m.material.uniforms.blur.value = 0;
      m.visible = on;
      if (on) last = i;
    }
    // send: glyphs lift off toward the lens
    if (t >= ENTER_AT) {
      this.prompt.animate(t, { out: { start: ENTER_AT + 0.05, dur: 0.75, stagger: 0.018, style: 'scatter', amount: 1.6, order: 'ltr' } });
      for (const m of g) m.material.uniforms.colorTop.value.set(1.2, 1.6, 2.6), m.material.uniforms.colorBottom.value.set(1.2, 1.6, 2.6);
    } else {
      for (const m of g) m.material.uniforms.colorTop.value.set(0.9, 0.93, 1.0), m.material.uniforms.colorBottom.value.set(0.9, 0.93, 1.0);
    }
    const lg = last >= 0 ? g[last].userData : null;
    this.cursor.position.set(lg ? lg.ox + lg.adv + 6 : 2, 0, 0);
    const typing = t < this.keys[this.keys.length - 1] + 0.25;
    this.cursor.visible = t < ENTER_AT && (typing || (t % 0.9) < 0.5) && t > 0.1;
  }

  post(t) {
    return {
      bloom: 0.6, bloomThreshold: 0.95, streak: 0.22, vignette: 0.42, grain: 0.045, ca: 0.0025 + 0.01 * smoothstep(3.6, 4.3, t),
      flash: 0.6 * pulse(t, ENTER_AT, 0.08), zoomBlur: 0.12 * smoothstep(3.5, 4.3, t), temperature: -0.1,
    };
  }
}
