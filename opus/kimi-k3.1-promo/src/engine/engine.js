// Timeline-driven renderer: resolves which shot(s) are on screen at time t, renders them into
// HDR targets, blends transitions, integrates sub-frames for real motion blur, then runs post.
import * as THREE from 'three';
import { Post, DEFAULT_POST, mixPost } from './post.js';
import { clamp, smoothstep } from './util.js';

export class Engine {
  constructor(canvas, timeline, shotClasses, opts = {}) {
    this.tl = timeline;
    this.W = timeline.width; this.H = timeline.height; this.fps = timeline.fps;
    this.classes = shotClasses;
    this.only = opts.only || null;
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, preserveDrawingBuffer: true, powerPreference: 'high-performance', stencil: false });
    r.setPixelRatio(1);
    r.setSize(this.W, this.H, false);
    r.autoClear = false;
    r.outputColorSpace = THREE.LinearSRGBColorSpace;
    r.toneMapping = THREE.NoToneMapping;
    const hdr = { type: THREE.HalfFloatType, format: THREE.RGBAFormat, depthBuffer: true, samples: 4, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false };
    this.rtA = new THREE.WebGLRenderTarget(this.W, this.H, hdr);
    this.rtB = new THREE.WebGLRenderTarget(this.W, this.H, hdr);
    this.accum = new THREE.WebGLRenderTarget(this.W, this.H, { type: THREE.FloatType, format: THREE.RGBAFormat, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: false });
    this.post = new Post(r, this.W, this.H);
    this.shots = {};
    this.buildEdit();
  }

  buildEdit() {
    const ed = this.tl.edit;
    const end = this.tl.duration;
    this.entries = [];
    for (let i = 0; i < ed.length; i++) {
      const e = Object.assign({ offset: 0, in: { type: 'cut', dur: 0 } }, ed[i]);
      e.in = Object.assign({ dur: 0 }, e.in);
      const next = ed[i + 1];
      const nextAt = next ? next.at : end;
      const nextDur = next && next.in ? (next.in.dur || 0) : 0;
      e.next = nextAt;
      e.visStart = e.at - e.in.dur / 2;
      e.visEnd = nextAt + nextDur / 2;
      e.index = i;
      this.entries.push(e);
    }
  }

  async init() {
    const ids = [...new Set(this.entries.map((e) => e.shot))];
    for (const id of ids) {
      if (this.only && !this.only.includes(id)) { this.shots[id] = new this.classes.__placeholder(this, id); continue; }
      const C = this.classes[id] || this.classes.__placeholder;
      const s = new C(this, id);
      if (s.init) await s.init();
      this.shots[id] = s;
    }
    // compile everything up front so the first rendered frame is not a stall
    for (const s of Object.values(this.shots)) { this.renderer.compile(s.scene, s.camera); if (s.overlay) this.renderer.compile(s.overlay, s.ocam); }
  }

  active(t) {
    return this.entries.filter((e) => t >= e.visStart && t < e.visEnd);
  }

  localTime(e, t) {
    let dt = t - e.at;
    if (e.fx === 'tapestop') { const D = 0.62; const x = clamp(dt, 0, D); dt = x - (x * x) / (2 * D) + Math.max(0, dt - D) * 0; }
    return dt + e.offset;
  }

  ctxFor(e, t) {
    const fps = this.tl.fps;
    return { t, entry: e, engine: this, beat: 60 / this.tl.bpm, ft: this.localTime(e, Math.floor(t * fps + 1e-6) / fps) };
  }

  renderEntry(e, t, target) {
    const s = this.shots[e.shot];
    const lt = this.localTime(e, t);
    s.update(lt, this.ctxFor(e, t));
    s.render(this.renderer, target);
  }

  transitionP(b, t) { return clamp((t - (b.at - b.in.dur / 2)) / Math.max(1e-6, b.in.dur)); }

  compositeAt(t, weight) {
    const act = this.active(t);
    if (!act.length) return;
    if (act.length === 1) {
      this.renderEntry(act[0], t, this.rtA);
      this.post.composite(this.rtA.texture, null, 'copy', 0, {}, this.accum, weight);
      return;
    }
    const [a, b] = act;
    this.renderEntry(a, t, this.rtA);
    this.renderEntry(b, t, this.rtB);
    this.post.composite(this.rtA.texture, this.rtB.texture, b.in.type, this.transitionP(b, t), b.in, this.accum, weight);
  }

  fxPost(e, t) {
    const dt = t - e.at;
    if (e.fx === 'punch') {
      return { punch: 0.11 * Math.exp(-dt / 0.09), flash: (e.flash ?? 1) * 1.4 * Math.exp(-dt / 0.035), ca: 0.0025 + 0.012 * Math.exp(-dt / 0.08), zoomBlur: 0.08 * Math.exp(-dt / 0.07) };
    }
    if (e.fx === 'tapestop') {
      const k = smoothstep(0.0, 0.55, dt);
      return { saturation: 1 - 0.75 * k, exposure: 1 - 0.45 * k, punch: 0.04 * k, ca: 0.0025 + 0.01 * k };
    }
    return {};
  }

  postFor(e, t) {
    const s = this.shots[e.shot];
    const lt = this.localTime(e, t);
    const P = Object.assign({}, DEFAULT_POST, s.post ? s.post(lt, this.ctxFor(e, t)) : {});
    const fx = this.fxPost(e, t);
    for (const [k, v] of Object.entries(fx)) P[k] = (k === 'punch' || k === 'flash' || k === 'zoomBlur') ? (P[k] + v) : v;
    return P;
  }

  postAt(t) {
    const act = this.active(t);
    if (!act.length) return Object.assign({}, DEFAULT_POST, { fade: 1 });
    if (act.length === 1) return this.postFor(act[0], t);
    const [a, b] = act;
    const p = this.transitionP(b, t);
    return mixPost(this.postFor(a, t), this.postFor(b, t), smoothstep(0.3, 0.7, p));
  }

  // Render time t0 with S sub-frames spread over `shutter` seconds (forward shutter).
  renderTime(t0, S = 1, shutter = 0) {
    const r = this.renderer;
    r.setRenderTarget(this.accum);
    r.setClearColor(0x000000, 0);
    r.clear(true, false, false);
    for (let i = 0; i < S; i++) {
      const t = t0 + (S > 1 ? ((i + 0.5) / S) * shutter : 0);
      this.compositeAt(t, 1 / S);
    }
    const P = this.postAt(t0 + shutter * 0.5);
    this.post.render(this.accum.texture, P, t0, null);
  }

  samplesAt(t) {
    const act = this.active(t);
    let s = 8;
    for (const e of act) {
      const shot = this.shots[e.shot];
      if (shot.samples) s = Math.max(s, shot.samples(this.localTime(e, t)));
    }
    if (act.length === 2) s = Math.max(s, 12);
    return s;
  }

  renderFrame(f, samples = null) {
    const t0 = f / this.fps;
    const S = samples ?? this.samplesAt(t0);
    this.renderTime(t0, S, S > 1 ? 0.5 / this.fps : 0);
  }
}
