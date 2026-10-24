// audio.js — everything is synthesised: guzheng (Karplus-Strong), dizi flute, festival drums and
// gongs, hoofbeats, wind, whip cracks and the buffalo's moo. Music is pentatonic (1 = D).

const TUNES = {
  title: { bpm: 76, mel: '3 5 6 1\' | 6 - 5 3 | 5 - - 6 | 3 2 1 - | 2 3 5 3 | 2 1 6, 1 | 2 - - - | - - 0 0 | 6, 1 2 3 | 5 3 2 1 | 6, - 5, 6, | 1 - - - | 3 5 3 2 | 1 2 6, 5, | 6, - - - | - - 0 0', roots: [1, 6, 5, 1, 2, 6, 2, 2, 6, 1, 6, 1, 3, 1, 6, 6] },
  race: { bpm: 132, mel: '5 5 6 5 | 3 2 1 2 | 3 5 6 1\' | 6 5 3 5 | 6 1\' 6 5 | 3 5 2 3 | 1 2 3 5 | 2 - - - | 3 3 5 6 | 1\' 6 5 6 | 5 3 2 3 | 5 6 5 3 | 2 3 5 6 | 5 3 2 1 | 2 3 2 6, | 1 - - -', roots: [1, 5, 6, 3, 6, 5, 1, 2, 3, 6, 2, 5, 2, 5, 2, 1] },
};
const DEG = { 1: 0, 2: 2, 3: 4, 5: 7, 6: 9 };
const BASE = 62; // D4

function parseTune(str) {
  const out = [];
  for (const tok of str.replace(/\|/g, ' ').split(/\s+/).filter(Boolean)) {
    if (tok === '-') { out.push({ hold: true }); continue; }
    if (tok === '0') { out.push({ rest: true }); continue; }
    const d = parseInt(tok[0], 10);
    let oct = 0;
    for (const ch of tok.slice(1)) oct += ch === "'" ? 1 : ch === ',' ? -1 : 0;
    out.push({ midi: BASE + DEG[d] + oct * 12 });
  }
  // fold holds into durations
  const notes = [];
  out.forEach((n, i) => {
    if (n.midi !== undefined) { let len = 1; while (out[i + len] && out[i + len].hold) len++; notes[i] = { midi: n.midi, len }; }
  });
  return { steps: out.length, notes };
}
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

export class Audio {
  constructor() { this.ctx = null; this.muted = false; this.mode = null; this.hoofAcc = 0; this.mooCool = 0; }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    comp.connect(ctx.destination);
    this.master = ctx.createGain(); this.master.gain.value = this.muted ? 0 : 0.85; this.master.connect(comp);
    this.music = ctx.createGain(); this.music.gain.value = 0.36; this.music.connect(this.master);
    this.sfx = ctx.createGain(); this.sfx.gain.value = 0.9; this.sfx.connect(this.master);
    // hall reverb
    this.verb = ctx.createConvolver();
    const len = ctx.sampleRate * 2.4, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    this.verb.buffer = ir;
    this.verbGain = ctx.createGain(); this.verbGain.gain.value = 0.32;
    this.verb.connect(this.verbGain); this.verbGain.connect(this.master);
    this.noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const nd = this.noise.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    // looping wind that swells with speed
    const w = ctx.createBufferSource(); w.buffer = this.noise; w.loop = true;
    this.windF = ctx.createBiquadFilter(); this.windF.type = 'bandpass'; this.windF.frequency.value = 700; this.windF.Q.value = 0.7;
    this.windG = ctx.createGain(); this.windG.gain.value = 0;
    w.connect(this.windF); this.windF.connect(this.windG); this.windG.connect(this.sfx); w.start();
    this.plucks = new Map();
    this.tunes = { title: parseTune(TUNES.title.mel), race: parseTune(TUNES.race.mel) };
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.85, this.ctx.currentTime, 0.05);
  }

  // ------------------------------------------------------------ instruments
  pluckBuffer(midi) {
    if (this.plucks.has(midi)) return this.plucks.get(midi);
    const ctx = this.ctx, sr = ctx.sampleRate, f = mtof(midi), dur = 2.4;
    const n = Math.floor(sr * dur), buf = ctx.createBuffer(1, n, sr), d = buf.getChannelData(0);
    const N = Math.max(2, Math.round(sr / f)), ring = new Float32Array(N);
    for (let i = 0; i < N; i++) ring[i] = Math.random() * 2 - 1;
    for (let i = 1; i < N; i++) ring[i] = ring[i] * 0.7 + ring[i - 1] * 0.3;
    const decay = Math.pow(0.004, 1 / (dur * f));
    let p = 0, peak = 0;
    for (let i = 0; i < n; i++) {
      const cur = ring[p];
      ring[p] = (cur + ring[(p + 1) % N]) * 0.5 * decay;
      d[i] = cur; peak = Math.max(peak, Math.abs(cur));
      p = (p + 1) % N;
    }
    for (let i = 0; i < n; i++) d[i] /= peak || 1;
    const entry = { buf, rate: f / (sr / (N + 0.5)) };
    this.plucks.set(midi, entry);
    return entry;
  }
  pluck(t, midi, vol = 0.5, slide = false) {
    const ctx = this.ctx, e = this.pluckBuffer(midi);
    const s = ctx.createBufferSource(); s.buffer = e.buf;
    s.playbackRate.setValueAtTime(e.rate * (slide ? 0.94 : 1), t);
    if (slide) s.playbackRate.linearRampToValueAtTime(e.rate, t + 0.07);
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 2.2);
    const f = ctx.createBiquadFilter(); f.type = 'peaking'; f.frequency.value = 2400; f.gain.value = 5;
    s.connect(f); f.connect(g); g.connect(this.music); g.connect(this.verb);
    s.start(t); s.stop(t + 2.3);
  }
  flute(t, midi, dur, vol = 0.22) {
    const ctx = this.ctx, f = mtof(midi + 12);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(f * 0.95, t); o.frequency.exponentialRampToValueAtTime(f, t + 0.05);
    const o2 = ctx.createOscillator(); o2.type = 'triangle'; o2.frequency.value = f * 2;
    const g2 = ctx.createGain(); g2.gain.value = 0.12;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 5.6;
    const lg = ctx.createGain(); lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * 0.014, t + Math.min(dur, 0.5));
    lfo.connect(lg); lg.connect(o.frequency);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.05);
    g.gain.setValueAtTime(vol * 0.85, t + Math.max(0.06, dur - 0.05)); g.gain.linearRampToValueAtTime(0, t + dur + 0.12);
    const nz = ctx.createBufferSource(); nz.buffer = this.noise;
    const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = f * 2; nf.Q.value = 1.5;
    const ng = ctx.createGain(); ng.gain.value = 0.18;
    nz.connect(nf); nf.connect(ng); ng.connect(g);
    o.connect(g); o2.connect(g2); g2.connect(g);
    g.connect(this.music); g.connect(this.verb);
    const end = t + dur + 0.2;
    for (const x of [o, o2, lfo, nz]) { x.start(t); x.stop(end); }
  }
  drum(t, vol = 0.7, f0 = 150) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 0.42, t + 0.22);
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
    o.connect(g); g.connect(this.music); g.connect(this.verb); o.start(t); o.stop(t + 0.5);
    this.noiseHit(t, vol * 0.35, 'lowpass', 1400, 0.04, this.music);
  }
  noiseHit(t, vol, type, freq, dur, dest = this.sfx, q = 0.8) {
    const ctx = this.ctx, s = ctx.createBufferSource(); s.buffer = this.noise;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(dest);
    s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
    return g;
  }
  woodblock(t, vol = 0.3, f = 880) {
    const ctx = this.ctx, o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 0.8, t + 0.06);
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
    o.connect(g); g.connect(this.music); o.start(t); o.stop(t + 0.1);
  }
  gong(t, big = true, vol = 0.5) {
    const ctx = this.ctx, f0 = big ? 105 : 430, dur = big ? 3.6 : 1.1;
    for (const [k, a] of [[1, 1], [1.48, 0.6], [2.02, 0.45], [2.63, 0.3], [3.1, 0.22], [4.2, 0.12]]) {
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(f0 * k, t);
      o.frequency.exponentialRampToValueAtTime(f0 * k * (big ? 0.93 : 1.12), t + dur * 0.6);
      const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol * a, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur / Math.sqrt(k));
      o.connect(g); g.connect(this.sfx); g.connect(this.verb); o.start(t); o.stop(t + dur);
    }
    this.noiseHit(t, vol * 0.6, 'bandpass', big ? 900 : 3000, 0.25, this.sfx, 1.2);
  }

  // ------------------------------------------------------------ effects
  hoof(vol, surface) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (surface === 'water' || surface === 'paddy') { this.noiseHit(t, vol * 0.6, 'bandpass', 1400 + Math.random() * 600, 0.18, this.sfx, 1.2); return; }
    const o = this.ctx.createOscillator(); o.type = 'sine';
    const f = surface === 'road' ? 95 : 75;
    o.frequency.setValueAtTime(f * (0.9 + Math.random() * 0.2), t); o.frequency.exponentialRampToValueAtTime(f * 0.5, t + 0.1);
    const g = this.ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
    o.connect(g); g.connect(this.sfx); o.start(t); o.stop(t + 0.16);
    this.noiseHit(t, vol * (surface === 'road' ? 0.5 : 0.25), 'lowpass', surface === 'road' ? 1800 : 700, 0.05);
  }
  updateMotion(dt, speed, surface, boosting) {
    if (!this.ctx) return;
    const sp = Math.abs(speed);
    this.windG.gain.setTargetAtTime(Math.min(0.2, sp * 0.0045) + (boosting ? 0.08 : 0), this.ctx.currentTime, 0.2);
    this.windF.frequency.setTargetAtTime(500 + sp * 30, this.ctx.currentTime, 0.2);
    if (sp > 1) {
      this.hoofAcc += dt * (1.6 + sp * 0.2);
      if (this.hoofAcc >= 1) { this.hoofAcc -= 1; this.hoof(Math.min(0.5, 0.12 + sp * 0.01), surface); }
    }
    this.mooCool -= dt;
  }
  moo(vol = 0.5) {
    if (!this.ctx || this.mooCool > 0) return;
    this.mooCool = 4;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(112, t); o.frequency.linearRampToValueAtTime(134, t + 0.28); o.frequency.exponentialRampToValueAtTime(92, t + 1.25);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.16); g.gain.setValueAtTime(vol, t + 0.8); g.gain.exponentialRampToValueAtTime(0.001, t + 1.4);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(500, t); lp.frequency.linearRampToValueAtTime(1300, t + 0.3); lp.frequency.linearRampToValueAtTime(600, t + 1.2);
    const f1 = ctx.createBiquadFilter(); f1.type = 'peaking'; f1.frequency.value = 650; f1.Q.value = 3; f1.gain.value = 9;
    o.connect(lp); lp.connect(f1); f1.connect(g); g.connect(this.sfx); g.connect(this.verb);
    o.start(t); o.stop(t + 1.5);
  }
  whip() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const g = this.noiseHit(t, 0.12, 'bandpass', 900, 0.14, this.sfx, 0.7);
    this.noiseHit(t + 0.12, 0.55, 'highpass', 2600, 0.05);
    return g;
  }
  bump() { if (this.ctx) { const t = this.ctx.currentTime; this.noiseHit(t, 0.5, 'lowpass', 400, 0.18); this.drum(t, 0.25, 90); } }
  boostPad() { if (this.ctx) { const t = this.ctx.currentTime; const g = this.noiseHit(t, 0.35, 'bandpass', 600, 0.5, this.sfx, 2); this.pluck(t, BASE + 19, 0.25); this.pluck(t + 0.06, BASE + 24, 0.25); return g; } }
  pickup() { if (!this.ctx) return; const t = this.ctx.currentTime; [0, 4, 7, 12].forEach((d, i) => this.pluck(t + i * 0.05, BASE + 12 + d, 0.35)); }
  countdown(n) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (n > 0) { this.gong(t, false, 0.45); this.woodblock(t, 0.4, 700); }
    else { this.gong(t, true, 0.7); for (let k = 0; k < 6; k++) this.drum(t + k * 0.07, 0.5, 160); }
  }
  finishFanfare(win) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.gong(t, true, 0.7);
    const seq = win ? [0, 4, 7, 9, 12, 16, 19, 24] : [0, 2, 4, 7, 9, 12];
    seq.forEach((d, i) => this.pluck(t + 0.2 + i * 0.09, BASE + d, 0.45, i % 3 === 0));
    for (let k = 0; k < 8; k++) this.drum(t + 0.2 + k * 0.11, 0.45, 150);
  }

  // ------------------------------------------------------------ music sequencer
  startMusic(mode) {
    if (!this.ctx) return;
    if (this.mode === mode) return;
    this.mode = mode; this.step = 0; this.nextT = this.ctx.currentTime + 0.12;
    if (!this.timer) this.timer = setInterval(() => this.schedule(), 25);
  }
  stopMusic() { this.mode = null; }
  schedule() {
    if (!this.mode || !this.ctx) return;
    const T = TUNES[this.mode], tune = this.tunes[this.mode], spb = 60 / T.bpm / 2;
    while (this.nextT < this.ctx.currentTime + 0.15) {
      const i = this.step % tune.steps, t = this.nextT, bar = Math.floor(i / 4), beat = i % 4;
      const n = tune.notes[i];
      if (n) this.flute(t, n.midi, n.len * spb * 0.95, this.mode === 'race' ? 0.16 : 0.2);
      const root = BASE - 12 + DEG[T.roots[bar % T.roots.length]];
      if (this.mode === 'race') {
        this.pluck(t, root + [0, 7, 12, 7][beat], beat === 0 ? 0.42 : 0.28);
        if (beat === 0) this.drum(t, 0.55, 140);
        if (beat === 2) { this.drum(t, 0.3, 160); this.noiseHit(t, 0.08, 'highpass', 6000, 0.18, this.music); }
        if (beat % 2 === 1) this.woodblock(t, 0.12, bar % 2 ? 980 : 820);
        if (bar % 4 === 3 && beat >= 2) this.drum(t + spb / 2, 0.3, 170);
      } else {
        if (beat === 0) this.pluck(t, root, 0.3, true);
        if (beat === 2) this.pluck(t, root + 7, 0.2);
        if (bar % 4 === 3 && beat === 3) this.pluck(t, root + 12, 0.18);
      }
      this.step++; this.nextT += spb;
    }
  }
}
