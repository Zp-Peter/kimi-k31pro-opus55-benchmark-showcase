// Text primitives rendered from Canvas2D into WebGL textures so they live inside the
// HDR pipeline (bloom, motion blur, lens effects all apply to type as well).
import * as THREE from 'three';
import { clamp, ease, mulberry32, lerp } from './util.js';

export const FAMILIES = {
  sans: 'Inter, "PingFang SC", sans-serif',
  cn: '"PingFang SC", Inter, sans-serif',
  mono: 'JBM, "PingFang SC", monospace',
};
export const font = (weight, px, family = 'sans') => `${weight} ${px}px ${FAMILIES[family] || family}`;

export async function loadFonts() {
  const specs = [
    ['300', 'sans'], ['400', 'sans'], ['500', 'sans'], ['600', 'sans'], ['700', 'sans'], ['800', 'sans'], ['900', 'sans'],
    ['400', 'mono'], ['500', 'mono'], ['700', 'mono'],
    ['200', 'cn'], ['300', 'cn'], ['400', 'cn'], ['500', 'cn'], ['600', 'cn'],
  ];
  await Promise.all(specs.map(([w, f]) => document.fonts.load(font(w, 40, f), 'Kimi 月之暗面 0123')));
}

// ---------------------------------------------------------------------------------------------
// GlyphText: one quad per character, so every glyph can be animated independently.
// Texture stores coverage only; colour/gradient comes from uniforms (keeps HDR control).
// ---------------------------------------------------------------------------------------------
const glyphVert = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const glyphFrag = /* glsl */ `
uniform sampler2D map; uniform vec4 uvRect; uniform vec3 colorTop; uniform vec3 colorBottom;
uniform float opacity; uniform float blur; uniform vec2 texel;
uniform vec4 shine; uniform vec4 cell; // shine: x (layout px), width, strength, slant · cell: glyph rect in layout px
varying vec2 vUv;
void main(){
  vec2 uv = uvRect.xy + vUv * uvRect.zw;
  float a;
  if (blur < 0.01) { a = texture2D(map, uv).a; }
  else {
    a = 0.0;
    for (int i = 0; i < 20; i++) {
      float fi = float(i);
      float ang = fi * 2.39996323;
      float rr = sqrt((fi + 0.5) / 20.0) * blur;
      a += texture2D(map, uv + vec2(cos(ang), sin(ang)) * rr * texel, log2(max(1.0, rr * 0.35))).a;
    }
    a /= 20.0;
  }
  vec3 col = mix(colorBottom, colorTop, vUv.y);
  if (shine.z > 0.0) {
    vec2 lp = cell.xy + vUv * cell.zw;
    float s = exp(-pow((lp.x + lp.y * shine.w - shine.x) / shine.y, 2.0)) * shine.z;
    col = col * (1.0 + s) + vec3(s * 0.6);
  }
  gl_FragColor = vec4(col, a * opacity);
}`;

function srgbToLinearColor(c, intensity = 1) {
  const col = new THREE.Color(c); // three converts sRGB hex to linear working space
  return new THREE.Vector3(col.r * intensity, col.g * intensity, col.b * intensity);
}

export class GlyphText extends THREE.Group {
  constructor(text, opts = {}) {
    super();
    const o = this.opts = Object.assign({
      size: 64, weight: 600, family: 'sans', color: '#ffffff', colorBottom: null, intensity: 1,
      tracking: 0, align: 'center', res: 2, additive: false, seed: 7, depthTest: false,
    }, opts);
    this.text = text;
    const chars = Array.from(text);
    const px = o.size * o.res;
    const pad = Math.ceil(px * 0.35);
    const meas = document.createElement('canvas').getContext('2d');
    meas.font = font(o.weight, px, o.family);
    const fm = meas.measureText('国Mg');
    const ascent = Math.ceil(Math.max(fm.fontBoundingBoxAscent || px * 0.9, fm.actualBoundingBoxAscent));
    const descent = Math.ceil(Math.max(fm.fontBoundingBoxDescent || px * 0.25, fm.actualBoundingBoxDescent));
    const trackPx = o.tracking * px;
    // Advance positions from prefix widths (keeps kerning) plus tracking.
    const xs = [];
    for (let i = 0; i < chars.length; i++) xs.push(meas.measureText(chars.slice(0, i).join('')).width + i * trackPx);
    const total = meas.measureText(text).width + Math.max(0, chars.length - 1) * trackPx;
    const cells = chars.map((ch) => {
      const m = meas.measureText(ch);
      const left = Math.min(0, -Math.ceil(m.actualBoundingBoxLeft || 0));
      const right = Math.max(m.width, Math.ceil(m.actualBoundingBoxRight || m.width));
      return { ch, w: Math.ceil(right - left) + pad * 2, left, adv: m.width };
    });
    const cellH = ascent + descent + pad * 2;
    const atlasW = Math.min(16384, cells.reduce((s, c) => s + c.w, 0));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(4, atlasW); canvas.height = Math.max(4, cellH);
    const ctx = canvas.getContext('2d');
    ctx.font = meas.font; ctx.fillStyle = '#fff'; ctx.textBaseline = 'alphabetic';
    let cx = 0;
    for (const c of cells) { c.x0 = cx; ctx.fillText(c.ch, cx + pad - c.left, pad + ascent); cx += c.w; }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.NoColorSpace; tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter; tex.anisotropy = 8;
    this.texture = tex;
    const k = 1 / o.res; // atlas px -> layout px
    this.width = total * k; this.height = (ascent + descent) * k; this.ascent = ascent * k; this.descent = descent * k;
    const alignOff = o.align === 'center' ? -this.width / 2 : o.align === 'right' ? -this.width : 0;
    const yOff = -(ascent - descent) / 2 * k; // vertically centre the em box
    const top = srgbToLinearColor(o.color, o.intensity);
    const bottom = srgbToLinearColor(o.colorBottom || o.color, o.intensity);
    const rnd = mulberry32(o.seed);
    this.glyphs = cells.map((c, i) => {
      const mat = new THREE.ShaderMaterial({
        vertexShader: glyphVert, fragmentShader: glyphFrag, transparent: true, depthWrite: false, depthTest: o.depthTest,
        blending: o.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
        uniforms: {
          map: { value: tex }, uvRect: { value: new THREE.Vector4(c.x0 / canvas.width, 0, c.w / canvas.width, 1) },
          colorTop: { value: top.clone() }, colorBottom: { value: bottom.clone() },
          opacity: { value: 1 }, blur: { value: 0 }, texel: { value: new THREE.Vector2(1 / canvas.width, 1 / canvas.height) },
          shine: { value: new THREE.Vector4(0, 1, 0, 0) }, cell: { value: new THREE.Vector4() },
        },
      });
      const w = c.w * k, h = cellH * k;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      const bx = alignOff + xs[i] * k + (c.left * k) - pad * k + w / 2;
      // cell spans baseline-(descent+pad) .. baseline+(ascent+pad), so its centre sits at (ascent-descent)/2
      const centreY = ((ascent - descent) / 2) * k + yOff;
      mesh.position.set(bx, centreY, 0);
      mat.uniforms.cell.value.set(bx - w / 2, centreY - h / 2, w, h);
      mesh.userData = { bx, by: centreY, i, r1: rnd(), r2: rnd(), r3: rnd(), r4: rnd(), blank: c.ch.trim() === '', ox: alignOff + xs[i] * k, adv: c.adv * k };
      mesh.renderOrder = o.renderOrder || 10;
      this.add(mesh);
      return mesh;
    });
    this.order = this.glyphs.map((_, i) => i);
    this.reset();
  }

  setColor(top, bottom = top, intensity = this.opts.intensity) {
    const a = srgbToLinearColor(top, intensity), b = srgbToLinearColor(bottom, intensity);
    for (const g of this.glyphs) { g.material.uniforms.colorTop.value.copy(a); g.material.uniforms.colorBottom.value.copy(b); }
  }

  // Specular sweep across the glyphs (x in this text's layout px); strength 0 switches it off.
  setShine(x, width = 60, strength = 0, slant = 0.3) {
    for (const g of this.glyphs) g.material.uniforms.shine.value.set(x, width, strength, slant);
  }

  reset() {
    for (const g of this.glyphs) {
      g.position.set(g.userData.bx, g.userData.by, 0); g.rotation.set(0, 0, 0); g.scale.set(1, 1, 1);
      g.material.uniforms.opacity.value = 1; g.material.uniforms.blur.value = 0;
    }
  }

  // Rank of glyph i under a stagger order.
  rank(i, order) {
    const n = this.glyphs.length;
    if (order === 'rtl') return n - 1 - i;
    if (order === 'center') return Math.abs(i - (n - 1) / 2);
    if (order === 'random') return this.glyphs[i].userData.r1 * n;
    return i;
  }

  // spec = { in: {start, dur, stagger, style, order, ease}, out: {...}, opacity }
  animate(t, spec) {
    const em = this.opts.size;
    const n = this.glyphs.length;
    for (let i = 0; i < n; i++) {
      const g = this.glyphs[i], u = g.userData;
      let px = u.bx, py = u.by, pz = 0, rx = 0, ry = 0, rz = 0, sc = 1, op = spec.opacity ?? 1, bl = 0;
      const apply = (phase, q, isOut) => {
        const s = phase.style || 'blur';
        const amt = phase.amount ?? 1;
        const iq = 1 - q;
        const sx = isOut ? 1 : -1;
        switch (s) {
          case 'fade': op *= q; break;
          case 'blur': op *= q; bl += iq * 26 * amt; py += sx * -iq * 0.18 * em * amt; sc *= 1 + iq * 0.12 * amt; break;
          case 'rise': op *= Math.min(1, q * 1.6); py += (isOut ? 1 : -1) * iq * 0.55 * em * amt; bl += iq * 8; break;
          case 'drop': op *= q; pz += iq * 6 * em * amt; bl += iq * 30; rx += iq * -0.6; break;
          case 'flip': op *= q; rx += iq * (isOut ? -1.4 : 1.4); py += iq * 0.2 * em * sx; break;
          case 'slam': op *= Math.min(1, q * 3); sc *= 1 + iq * 2.2 * amt; bl += iq * 40; break;
          case 'track': op *= q; px = u.bx * (1 + iq * 0.45 * amt); bl += iq * 14; break;
          case 'scatter': {
            op *= q; bl += iq * 40;
            px += (u.r1 - 0.5) * 2 * iq * 2.0 * em * amt; py += (u.r2 - 0.3) * 2 * iq * 1.6 * em * amt; pz += (u.r3) * iq * 5 * em * amt;
            rz += (u.r4 - 0.5) * iq * 2.5; break;
          }
          case 'spin': op *= q; ry += iq * Math.PI * 0.9 * sx; bl += iq * 18; break;
          case 'scramble': op *= q > 0.02 ? 1 : 0; bl += iq * 6; break;
          default: op *= q;
        }
      };
      for (const key of ['in', 'out']) {
        const ph = spec[key];
        if (!ph) continue;
        const r = this.rank(i, ph.order || 'ltr');
        const st = ph.stagger ?? 0.035;
        const t0 = ph.start + r * st;
        let q = clamp((t - t0) / (ph.dur ?? 0.6));
        q = (ph.ease || (key === 'in' ? ease.outCubic : ease.inCubic))(q);
        if (key === 'out') q = 1 - q;
        apply(ph, q, key === 'out');
      }
      g.position.set(px, py, pz); g.rotation.set(rx, ry, rz); g.scale.set(sc, sc, 1);
      g.material.uniforms.opacity.value = clamp(op, 0, 1);
      g.material.uniforms.blur.value = bl * this.opts.res;
      g.visible = op > 0.002 && !u.blank;
    }
  }
}

// ---------------------------------------------------------------------------------------------
// CanvasPlane: a quad whose texture is redrawn with Canvas2D (counters, UI, code, charts...).
// Uploaded premultiplied for clean edges; `intensity` lets UI glow in HDR.
// ---------------------------------------------------------------------------------------------
const planeFrag = /* glsl */ `
uniform sampler2D map; uniform float opacity; uniform float intensity; uniform vec3 tint;
varying vec2 vUv;
void main(){ vec4 c = texture2D(map, vUv); gl_FragColor = c * vec4(tint * intensity, 1.0) * opacity; }`;

export class CanvasPlane extends THREE.Mesh {
  constructor(pxW, pxH, opts = {}) {
    const o = Object.assign({ worldW: pxW, res: 1, intensity: 1, additive: false, depthTest: true, depthWrite: false, mipmaps: true, side: THREE.FrontSide }, opts);
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(pxW * o.res); canvas.height = Math.round(pxH * o.res);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace; tex.premultiplyAlpha = true;
    tex.generateMipmaps = o.mipmaps; tex.minFilter = o.mipmaps ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter; tex.anisotropy = 8;
    const mat = new THREE.ShaderMaterial({
      vertexShader: glyphVert, fragmentShader: planeFrag, transparent: true, depthWrite: o.depthWrite, depthTest: o.depthTest, side: o.side,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: o.additive ? THREE.OneFactor : THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
      uniforms: { map: { value: tex }, opacity: { value: 1 }, intensity: { value: o.intensity }, tint: { value: new THREE.Vector3(1, 1, 1) } },
    });
    const worldH = o.worldW * pxH / pxW;
    super(new THREE.PlaneGeometry(o.worldW, worldH), mat);
    this.canvas = canvas; this.ctx = canvas.getContext('2d'); this.pxW = pxW; this.pxH = pxH; this.res = o.res; this.tex = tex;
    this.worldW = o.worldW; this.worldH = worldH;
  }
  draw(fn) {
    const c = this.ctx;
    c.setTransform(this.res, 0, 0, this.res, 0, 0);
    c.clearRect(0, 0, this.pxW, this.pxH);
    fn(c, this.pxW, this.pxH);
    this.tex.needsUpdate = true;
  }
  set opacity(v) { this.material.uniforms.opacity.value = v; this.visible = v > 0.001; }
  get opacity() { return this.material.uniforms.opacity.value; }
  set intensity(v) { this.material.uniforms.intensity.value = v; }
}

// Canvas helpers ------------------------------------------------------------------------------
export function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

// Scramble a string toward its target: chars resolve left-to-right as q goes 0 -> 1.
const SCRAMBLE = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&*+=<>/';
export function scramble(target, q, seed = 1) {
  const rnd = mulberry32(seed + Math.floor(q * 40) * 131);
  let out = '';
  const n = target.length;
  for (let i = 0; i < n; i++) {
    const ch = target[i];
    const lim = (i + 1) / n;
    if (q >= lim || ch === ' ' || ch === '.' || ch === ',') out += ch;
    else if (q > lim - 0.35) out += SCRAMBLE[Math.floor(rnd() * SCRAMBLE.length)];
    else out += ' ';
  }
  return out;
}

export { lerp };
