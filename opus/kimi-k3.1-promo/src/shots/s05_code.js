// S05 · 从一行代码，到一整个世界 — a slider move past live-typing editor panels, push through the
// Godot panel, then an FPV dive onto an island that a scan-plane builds from wireframe to solid.
import * as THREE from 'three';
import { Shot } from './base.js';
import { glowSprite } from './lens.js';
import { CodePanel, SNIPPETS } from './codepanels.js';
import { GlyphText, CanvasPlane, roundRect, font } from '../engine/text.js';
import { keys, ease, clamp, smoothstep, mulberry32, pulse, shake, applyShake, lerp } from '../engine/util.js';

const ISL = new THREE.Vector3(0, -34, -70); // island centre
const SEA = 0.0;

function vnoise(x, y, seed) {
  const h = (i, j) => { const s = Math.sin(i * 127.1 + j * 311.7 + seed * 74.7) * 43758.5453; return s - Math.floor(s); };
  const i = Math.floor(x), j = Math.floor(y), fx = x - i, fy = y - j;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  return lerp(lerp(h(i, j), h(i + 1, j), ux), lerp(h(i, j + 1), h(i + 1, j + 1), ux), uy);
}
function islandHeight(x, z) {
  const r = Math.sqrt(x * x + z * z) / 44;
  const mask = Math.max(0, 1 - r * r) ** 1.4;
  let n = 0, a = 1, f = 0.045;
  for (let o = 0; o < 5; o++) { n += a * vnoise(x * f, z * f, o + 3); a *= 0.5; f *= 2.05; }
  const ridge = 1 - Math.abs(vnoise(x * 0.03 + 9, z * 0.03, 11) * 2 - 1);
  return mask * (n * 10 + ridge * 7) - 3.2 + mask * 1.5;
}

// Inject scan-build behaviour into a standard material: beyond the sweep only glowing edges remain.
function scanify(mat, uni, edges = true) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.sweep = uni.sweep; sh.uniforms.scanCol = uni.scanCol;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 bary;\nvarying vec3 vBary;\nvarying vec3 vWorldP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBary = bary;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvec4 wpp = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\nwpp = instanceMatrix * wpp;\n#endif\nwpp = modelMatrix * wpp; vWorldP = wpp.xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float sweep; uniform vec3 scanCol;\nvarying vec3 vBary;\nvarying vec3 vWorldP;')
      .replace('#include <dithering_fragment>', `#include <dithering_fragment>
        float sx = vWorldP.x - sweep;
        vec3 bw = fwidth(vBary); vec3 e3 = smoothstep(vec3(0.0), bw * 1.4, vBary);
        float edge = 1.0 - min(min(e3.x, e3.y), e3.z);
        if (sx > 0.0) {
          if (${edges ? 'edge < 0.5 || sx > 34.0' : 'true'}) discard;
          gl_FragColor = vec4(scanCol * edge * (0.25 + 1.2 * exp(-sx * 0.12)), 1.0);
        } else {
          float band = exp(sx * 0.9);
          gl_FragColor.rgb += scanCol * (band * 1.6 + edge * band * 2.0);
        }`);
  };
  mat.customProgramCacheKey = () => 'scan' + (edges ? 1 : 0);
}
function addBary(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = g.attributes.position.count, b = new Float32Array(n * 3);
  for (let i = 0; i < n; i += 3) { b.set([1, 0, 0], i * 3); b.set([0, 1, 0], i * 3 + 3); b.set([0, 0, 1], i * 3 + 6); }
  g.setAttribute('bary', new THREE.BufferAttribute(b, 3));
  return g;
}

export class CodeShot extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.camera.near = 0.05; this.camera.far = 2000; this.camera.fov = 40;
    this.clearColor = new THREE.Color(0x04060c);
    // ---- panels
    const layout = [[-12.5, 0.4, -3.0, 0.32], [-6.6, -0.9, 0.8, 0.18], [0, -0.5, 0, 0], [6.6, 0.0, -1.6, -0.18], [12.6, -1.1, 1.2, -0.3]];
    const order = [0, 1, 2, 3, 4];
    this.panels = order.map((k, i) => {
      const p = new CodePanel(SNIPPETS[k]);
      const [x, y, z, ry] = layout[i];
      p.position.set(x, y, z); p.rotation.y = ry;
      p.userData = { start: [0.0, 0.25, 0.1, 0.4, 0.55][i], cps: [95, 110, 80, 100, 70][i] };
      this.scene.add(p); return p;
    });
    this.center = this.panels[2];
    // backdrop glow and particles for phase A
    const back = glowSprite('soft', '#2a4a9a', 70, { intensity: 0.35 }); back.position.set(0, 0, -30); this.scene.add(back);
    this.backGlow = back;

    // ---- island world
    const rnd = mulberry32(5);
    const tg = new THREE.PlaneGeometry(100, 100, 150, 150); tg.rotateX(-Math.PI / 2);
    const pos = tg.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setY(i, islandHeight(pos.getX(i), pos.getZ(i)));
    let geo = addBary(tg);
    geo.computeVertexNormals();
    const cols = new Float32Array(geo.attributes.position.count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < geo.attributes.position.count; i += 3) {
      const y = (geo.attributes.position.getY(i) + geo.attributes.position.getY(i + 1) + geo.attributes.position.getY(i + 2)) / 3;
      const ny = (geo.attributes.normal.getY(i));
      if (y < 0.6) c.set('#d8c48e'); else if (y < 6 && ny > 0.8) c.set(rnd() < 0.5 ? '#4f9a4a' : '#468c43'); else if (y < 9) c.set(ny > 0.75 ? '#3e7a3c' : '#77736b'); else c.set(y > 11.5 ? '#e9eef6' : '#8a8c93');
      for (let k = 0; k < 3; k++) cols.set([c.r, c.g, c.b], (i + k) * 3);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    this.scanU = { sweep: { value: -60 }, scanCol: { value: new THREE.Color('#4f9dff').multiplyScalar(1.6) } };
    const terrMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.92, metalness: 0 });
    scanify(terrMat, this.scanU, true);
    this.terrain = new THREE.Mesh(geo, terrMat);
    this.world = new THREE.Group(); this.world.position.copy(ISL); this.scene.add(this.world);
    this.world.add(this.terrain);
    // water
    const wg = new THREE.PlaneGeometry(1800, 1800, 1, 1).rotateX(-Math.PI / 2);
    const waterMat = new THREE.MeshStandardMaterial({ color: '#0b2a55', roughness: 0.32, metalness: 0.05, transparent: true, opacity: 0.94, emissive: '#04122a', emissiveIntensity: 0.5 });
    this.water = new THREE.Mesh(wg, waterMat); this.water.position.y = SEA; this.world.add(this.water);
    // trees
    const treeGeo = addBary(new THREE.ConeGeometry(0.75, 2.6, 6).translate(0, 1.3, 0));
    const treeMat = new THREE.MeshStandardMaterial({ color: '#3f8a46', flatShading: true, roughness: 0.85, emissive: '#0c2410', emissiveIntensity: 0.6 });
    scanify(treeMat, this.scanU, true);
    this.trees = new THREE.InstancedMesh(treeGeo, treeMat, 260);
    this.treeData = [];
    let placed = 0, guard = 0;
    while (placed < 260 && guard++ < 20000) {
      const x = (rnd() - 0.5) * 80, z = (rnd() - 0.5) * 80;
      const y = islandHeight(x, z);
      if (y < 1.2 || y > 8.5) continue;
      this.treeData.push({ x, y, z, s: 0.7 + rnd() * 0.8, r: rnd() * 6.28 });
      placed++;
    }
    this.trees.count = this.treeData.length;
    this.world.add(this.trees);
    // scan plane visual
    this.scanPlane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { col: { value: new THREE.Color('#4f9dff') }, a: { value: 1 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 col; uniform float a; varying vec2 vUv; void main(){ float f = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.6, vUv.y); gl_FragColor = vec4(col * f * a * 0.35, 1.0); }',
    }));
    this.scanPlane.scale.set(110, 26, 1); this.scanPlane.rotation.y = Math.PI / 2; this.world.add(this.scanPlane);
    // lights + sky
    const sun = new THREE.DirectionalLight('#ffd2a0', 2.0); sun.position.set(-40, 30, -20); this.world.add(sun); this.world.add(sun.target);
    const key = new THREE.DirectionalLight('#dfe9ff', 1.7); key.position.set(30, 50, 45); this.world.add(key); this.world.add(key.target);
    this.scene.add(new THREE.HemisphereLight('#6f93e0', '#141a26', 0.55));
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(1200, 32, 16), new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, uniforms: { a: { value: 0 } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: `uniform float a; varying vec3 vP; void main(){
        float y = vP.y; vec3 top = vec3(0.015, 0.03, 0.08); vec3 hor = vec3(0.08, 0.15, 0.32); vec3 warm = vec3(0.9, 0.55, 0.32);
        vec3 c = mix(hor, top, smoothstep(-0.05, 0.5, y));
        float sunGlow = pow(max(dot(vP, normalize(vec3(-0.8, 0.12, -0.4))), 0.0), 12.0);
        c += warm * sunGlow * 0.7 + warm * 0.08 * exp(-abs(y) * 14.0);
        gl_FragColor = vec4(c * a, 1.0); }`,
    }));
    this.sky.position.copy(ISL); this.scene.add(this.sky);
    this.scene.fog = new THREE.Fog('#0c1730', 80, 700);

    // ---- overlay
    this.head = new GlyphText('从一行代码，到一整个世界', { family: 'cn', weight: 600, size: 66, tracking: 0.06, color: '#ffffff' });
    this.head.position.set(0, 400, 0);
    this.chips = new CanvasPlane(900, 56, { res: 1.5 });
    this.chips.position.set(0, 322, 0);
    this.overlay.add(this.head, this.chips);
    this.card = new CanvasPlane(520, 210, { res: 1.5 });
    this.card.position.set(960 - 70 - 260, -540 + 70 + 105, 0);
    this.overlay.add(this.card);
    this.label = new GlyphText('全项目级编程 · FULL-PROJECT CODING', { family: 'cn', weight: 500, size: 22, tracking: 0.22, color: '#bcd2f7', align: 'left' });
    this.label.position.set(-960 + 80, 540 - 80, 0);
    this.overlay.add(this.label);
  }

  drawChips(t) {
    const a = smoothstep(0.55, 0.9, t) * (1 - smoothstep(2.45, 2.7, t));
    this.chips.opacity = a;
    if (a < 0.001) return;
    const items = ['Unity', 'Unreal Engine', 'Godot', 'Three.js'];
    this.chips.draw((g, W, H) => {
      g.font = font(600, 20, 'sans');
      const ws = items.map((s) => g.measureText(s).width + 44);
      const total = ws.reduce((a, b) => a + b, 0) + (items.length - 1) * 14;
      let x = (W - total) / 2;
      items.forEach((s, i) => {
        const k = clamp((t - 0.6 - i * 0.08) / 0.3);
        if (k <= 0) { x += ws[i] + 14; return; }
        g.globalAlpha = k;
        roundRect(g, x, 6 + (1 - k) * 10, ws[i], 44, 22); g.fillStyle = 'rgba(79,141,255,0.13)'; g.fill();
        g.strokeStyle = 'rgba(120,170,255,0.6)'; g.lineWidth = 1.5; g.stroke();
        g.fillStyle = '#dce8ff'; g.textBaseline = 'middle'; g.fillText(s, x + 22, 29 + (1 - k) * 10);
        x += ws[i] + 14;
      });
      g.globalAlpha = 1;
    });
  }

  drawCard(t, ft = t) {
    const a = smoothstep(3.55, 3.85, t) * (1 - smoothstep(5.55, 5.8, t));
    this.card.opacity = a;
    if (a < 0.001) return;
    const q1 = ease.outExpo(clamp((ft - 3.6) / 0.8)), q2 = ease.outExpo(clamp((ft - 3.85) / 0.8));
    this.card.draw((g, W, H) => {
      roundRect(g, 2, 2, W - 4, H - 4, 18); g.fillStyle = 'rgba(8,14,28,0.72)'; g.fill(); g.strokeStyle = 'rgba(110,160,255,0.45)'; g.lineWidth = 1.5; g.stroke();
      const row = (y, name, v, q, max) => {
        g.textBaseline = 'alphabetic'; g.font = font(500, 18, 'sans'); g.fillStyle = '#9fb6dd'; g.fillText(name, 28, y);
        g.font = font(800, 40, 'sans'); g.fillStyle = '#ffffff'; g.textAlign = 'right'; g.fillText((v * q).toFixed(1) + '%', W - 28, y + 6); g.textAlign = 'left';
        g.fillStyle = 'rgba(255,255,255,0.1)'; g.fillRect(28, y + 18, W - 56, 5);
        const gr = g.createLinearGradient(28, 0, W - 28, 0); gr.addColorStop(0, '#3d7bff'); gr.addColorStop(1, '#6fe0ff');
        g.fillStyle = gr; g.fillRect(28, y + 18, (W - 56) * (v / max) * q, 5);
      };
      row(66, 'Terminal-Bench 4.0', 65.7, q1, 100);
      row(150, 'Kimi Code Bench 3.0 · 长程任务', 61.2, q2, 100);
    });
  }

  update(t, ctx) {
    const cam = this.camera;
    // camera path: slider past panels -> push through Godot panel -> FPV dive -> orbit
    let pos, look, fov = 40;
    if (t < 3.05) {
      pos = keys(t, [[-0.4, [-12.0, 1.4, 10.2]], [2.25, [-0.9, 0.35, 8.2], ease.inOutCubic], [3.05, [0.0, 0.0, -0.6], ease.inCubic]]);
      look = keys(t, [[-0.4, [-8.5, 0.2, 0]], [2.25, [0, 0.05, 0]], [3.05, [0, -0.6, -10], ease.inQuad]]);
      fov = keys(t, [[-0.4, 40], [2.25, 38], [3.05, 52, ease.inQuad]]);
    } else {
      const ang = keys(t, [[3.05, -0.2], [6.4, 0.95, ease.inOutQuad]]);
      const rad = keys(t, [[3.05, 60], [4.1, 56, ease.outCubic], [6.4, 46]]);
      const hgt = keys(t, [[3.05, 34], [4.1, 31, ease.outCubic], [6.4, 24]]);
      const p0 = [0, 0, -0.6];
      const orbit = [ISL.x + Math.sin(ang) * rad, ISL.y + hgt, ISL.z + Math.cos(ang) * rad];
      const k = ease.outCubic(clamp((t - 3.05) / 0.9));
      pos = p0.map((v, i) => lerp(v, orbit[i], k));
      const lk = [ISL.x, ISL.y + 1, ISL.z];
      look = keys(t, [[3.05, [0, -2.0, -30]], [4.0, lk, ease.outCubic]]);
      fov = keys(t, [[3.05, 58], [4.2, 44, ease.outCubic], [6.4, 42]]);
    }
    cam.position.set(...pos); cam.up.set(0, 1, 0); cam.lookAt(...look);
    cam.fov = fov; cam.updateProjectionMatrix();
    applyShake(cam, shake(t, t > 3 ? 1.0 : 0.5, 0.9, 31));
    cam.updateMatrixWorld();

    // panels typing
    this.panels.forEach((p, i) => {
      const u = p.userData;
      const glow = i === 2 ? smoothstep(2.3, 2.95, t) : 0;
      p.render((t - u.start) * u.cps, glow);
      p.opacity = i === 2 ? 1 - smoothstep(2.88, 3.0, t) : 1 - smoothstep(2.9, 3.1, t);
    });
    this.backGlow.setOpacity(1 - smoothstep(2.8, 3.2, t));

    // world build
    const sweep = keys(t, [[2.9, -62], [5.3, 58, ease.inOutQuad]]);
    this.scanU.sweep.value = sweep;
    this.scanPlane.position.x = sweep; this.scanPlane.position.y = 6;
    this.scanPlane.material.uniforms.a.value = smoothstep(2.95, 3.2, t) * (1 - smoothstep(5.1, 5.4, t));
    this.sky.material.uniforms.a.value = smoothstep(2.95, 3.6, t);
    this.world.visible = t > 2.7;
    this.water.material.opacity = 0.94 * smoothstep(2.85, 3.3, t);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p3 = new THREE.Vector3();
    this.treeData.forEach((d, i) => {
      const grow = ease.outBack(clamp((sweep - d.x - 1) / 7));
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), d.r);
      s.setScalar(Math.max(0.001, d.s * grow)); p3.set(d.x, d.y - 0.2, d.z);
      m.compose(p3, q, s); this.trees.setMatrixAt(i, m);
    });
    this.trees.instanceMatrix.needsUpdate = true;

    // overlay
    this.head.animate(t, { in: { start: 0.2, dur: 0.8, stagger: 0.045, style: 'blur' }, out: { start: 2.5, dur: 0.35, stagger: 0.012, style: 'blur' } });
    this.drawChips(t);
    this.drawCard(t, ctx ? ctx.ft : t);
    this.label.animate(t, { in: { start: 3.5, dur: 0.6, stagger: 0.012, style: 'track' }, out: { start: 5.55, dur: 0.3, stagger: 0.005, style: 'fade' }, opacity: 0.9 });
  }

  post(t) {
    return {
      bloom: 0.6, bloomThreshold: 1.0, streak: 0.2, vignette: 0.42, grain: 0.045,
      flash: 1.4 * pulse(t, 2.97, 0.09), zoomBlur: 0.1 * smoothstep(2.6, 3.0, t) * (1 - smoothstep(3.0, 3.25, t)),
      ca: 0.0025 + 0.008 * smoothstep(2.6, 3.0, t) * (1 - smoothstep(3.0, 3.3, t)), temperature: t > 3 ? 0.05 : -0.1,
    };
  }

  samples(t) { return t > 2.6 && t < 3.6 ? 12 : 8; }
}
