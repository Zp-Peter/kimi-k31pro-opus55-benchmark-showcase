// Shared light/lens helpers: soft sprites, sun disc, flare ghosts, star fields.
import * as THREE from 'three';
import { mulberry32 } from '../engine/util.js';

const texCache = {};
// Procedural sprite textures (premultiplied white on transparent).
export function spriteTex(kind) {
  if (texCache[kind]) return texCache[kind];
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  const cx = S / 2;
  if (kind === 'soft') {
    const gr = g.createRadialGradient(cx, cx, 0, cx, cx, cx);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.2, 'rgba(255,255,255,0.55)');
    gr.addColorStop(0.5, 'rgba(255,255,255,0.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  } else if (kind === 'glow') {
    const gr = g.createRadialGradient(cx, cx, 0, cx, cx, cx);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.05, 'rgba(255,255,255,0.6)');
    gr.addColorStop(0.25, 'rgba(255,255,255,0.12)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  } else if (kind === 'disc') {
    const gr = g.createRadialGradient(cx, cx, 0, cx, cx, cx);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.82, 'rgba(255,255,255,0.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  } else if (kind === 'ring') {
    const gr = g.createRadialGradient(cx, cx, 0, cx, cx, cx);
    gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.72, 'rgba(255,255,255,0.0)'); gr.addColorStop(0.86, 'rgba(255,255,255,0.7)');
    gr.addColorStop(0.92, 'rgba(255,255,255,0.25)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  } else if (kind === 'hex') {
    g.translate(cx, cx); g.beginPath();
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + Math.PI / 6; g.lineTo(Math.cos(a) * cx * 0.92, Math.sin(a) * cx * 0.92); }
    g.closePath(); g.fillStyle = 'rgba(255,255,255,0.55)'; g.filter = 'blur(6px)'; g.fill();
  } else if (kind === 'star') { // diffraction starburst
    g.translate(cx, cx);
    for (let i = 0; i < 3; i++) {
      g.rotate(Math.PI / 3);
      const gr = g.createLinearGradient(-cx, 0, cx, 0);
      gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.42, 'rgba(255,255,255,0.35)'); gr.addColorStop(0.5, 'rgba(255,255,255,1)');
      gr.addColorStop(0.58, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.fillRect(-cx, -0.8, S, 1.6);
    }
  } else if (kind === 'bokeh') {
    const gr = g.createRadialGradient(cx, cx, 0, cx, cx, cx);
    gr.addColorStop(0, 'rgba(255,255,255,0.75)'); gr.addColorStop(0.78, 'rgba(255,255,255,0.85)'); gr.addColorStop(0.9, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace; t.premultiplyAlpha = false;
  texCache[kind] = t;
  return t;
}

// Additive billboard quad with HDR colour (always faces camera).
const spriteVert = /* glsl */ `
uniform vec2 size; uniform float rot; varying vec2 vUv;
void main(){
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float c = cos(rot), s = sin(rot);
  vec2 p = position.xy * size; p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  mv.xy += p;
  gl_Position = projectionMatrix * mv;
}`;
const spriteFrag = /* glsl */ `
uniform sampler2D map; uniform vec3 color; uniform float opacity; varying vec2 vUv;
void main(){ float a = texture2D(map, vUv).a; gl_FragColor = vec4(color * a * opacity, 1.0); }`;

export function glowSprite(kind, color, size, opts = {}) {
  const m = new THREE.ShaderMaterial({
    vertexShader: spriteVert, fragmentShader: spriteFrag, transparent: true, depthWrite: false, depthTest: opts.depthTest ?? true,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    uniforms: { map: { value: spriteTex(kind) }, color: { value: new THREE.Color(color).multiplyScalar(opts.intensity ?? 1) }, opacity: { value: 1 }, size: { value: new THREE.Vector2(size, size) }, rot: { value: 0 } },
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), m);
  mesh.frustumCulled = false;
  mesh.renderOrder = opts.renderOrder ?? 5;
  mesh.setOpacity = (v) => { m.uniforms.opacity.value = v; mesh.visible = v > 0.0005; };
  mesh.setSize = (w, h = w) => m.uniforms.size.value.set(w, h);
  mesh.setColor = (c, k = 1) => m.uniforms.color.value.set(c).multiplyScalar(k);
  return mesh;
}

// Lens flare ghost chain in overlay pixel space.
export class FlareGhosts extends THREE.Group {
  constructor(seed = 3) {
    super();
    const rnd = mulberry32(seed);
    const kinds = ['hex', 'disc', 'ring', 'hex', 'disc', 'hex', 'ring', 'soft'];
    const tints = ['#5f8fd8', '#8fb4e8', '#e0b080', '#6cc0e0', '#8a86d0', '#5f8fd8', '#c0dcf0', '#f0d0a0'];
    this.ghosts = kinds.map((k, i) => {
      const s = glowSprite(k, tints[i], 30 + rnd() * 90, { depthTest: false, intensity: 0.08 + rnd() * 0.12 });
      s.userData.f = [-0.35, 0.25, 0.55, 0.8, 1.15, 1.45, 1.8, -0.7][i];
      this.add(s); return s;
    });
  }
  // sx, sy: light position in overlay px; strength 0..1
  place(sx, sy, strength) {
    for (const g of this.ghosts) {
      const f = g.userData.f;
      g.position.set(sx - sx * (1 + f), sy - sy * (1 + f), 0);
      g.setOpacity(strength);
    }
  }
}

// Star field on a large sphere; twinkle in shader.
const starVert = /* glsl */ `
attribute float aMag; attribute vec3 aCol; uniform float time; uniform float pxScale; varying vec3 vCol; varying float vA;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 0.75 + 0.25 * sin(time * (1.5 + aMag * 3.0) + aMag * 91.0);
  vA = tw;
  vCol = aCol * (0.25 + aMag * aMag * 3.0);
  gl_PointSize = (1.2 + aMag * 2.6) * pxScale;
}`;
const starFrag = /* glsl */ `
varying vec3 vCol; varying float vA;
void main(){ vec2 d = gl_PointCoord - 0.5; float a = exp(-dot(d, d) * 18.0); gl_FragColor = vec4(vCol * a * vA, 1.0); }`;

export function starField(n = 4000, radius = 1500, seed = 11) {
  const rnd = mulberry32(seed);
  const pos = new Float32Array(n * 3), mag = new Float32Array(n), col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = rnd() * 2 - 1, th = rnd() * Math.PI * 2, s = Math.sqrt(1 - u * u);
    pos.set([s * Math.cos(th) * radius, u * radius, s * Math.sin(th) * radius], i * 3);
    mag[i] = Math.pow(rnd(), 3.2);
    const w = rnd();
    const c = w < 0.15 ? [1.0, 0.85, 0.7] : w < 0.4 ? [0.75, 0.85, 1.0] : [1, 1, 1];
    col.set(c, i * 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aMag', new THREE.BufferAttribute(mag, 1));
  g.setAttribute('aCol', new THREE.BufferAttribute(col, 3));
  const m = new THREE.ShaderMaterial({
    vertexShader: starVert, fragmentShader: starFrag, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, uniforms: { time: { value: 0 }, pxScale: { value: 1 } },
  });
  const p = new THREE.Points(g, m); p.frustumCulled = false; p.renderOrder = -10;
  return p;
}
