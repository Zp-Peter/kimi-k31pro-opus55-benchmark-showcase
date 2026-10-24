// 全部音效与 BGM 都用 WebAudio 实时合成，不依赖外部素材文件。
// 音效带简单的 3D 定位（距离衰减 + 左右声像），BGM 是五声音阶的筝 + 太鼓循环。

type Weight = 'light' | 'mid' | 'heavy';

const YO = [0, 2, 5, 7, 9]; // 阳音阶：明快
const IN = [0, 1, 5, 7, 8]; // 阴音阶：紧张

function midiHz(m: number) {
  return 440 * Math.pow(2, (m - 69) / 12);
}

export class Audio {
  ctx: AudioContext | null = null;
  private master!: GainNode;
  private sfx!: GainNode;
  private music!: GainNode;
  private noiseBuf!: AudioBuffer;
  private listener = { x: 0, z: 0, yaw: 0 };
  private vol = { master: 0.8, music: 0.5 };
  private musicMode: 'off' | 'calm' | 'combat' = 'off';
  private nextNoteT = 0;
  private step = 0;
  private bar = 0;
  private timerId = 0;
  private lastFoot = 0;
  private recent = new Map<string, number>();

  /** 必须在用户手势（点击）里调用 */
  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    this.ctx = ctx;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 10;
    comp.ratio.value = 4;
    comp.attack.value = 0.003;
    comp.release.value = 0.2;
    comp.connect(ctx.destination);
    this.master = ctx.createGain();
    this.master.connect(comp);
    this.sfx = ctx.createGain();
    this.sfx.connect(this.master);
    this.music = ctx.createGain();
    this.music.connect(this.master);
    this.applyVolume();
    const len = ctx.sampleRate * 2;
    this.noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.timerId = window.setInterval(() => this.schedule(), 30);
  }

  setVolume(master: number, music: number) {
    this.vol.master = master;
    this.vol.music = music;
    this.applyVolume();
  }

  private applyVolume() {
    if (!this.ctx) return;
    this.master.gain.value = this.vol.master;
    this.music.gain.value = this.vol.music * 0.55;
  }

  setListener(x: number, z: number, yaw: number) {
    this.listener.x = x;
    this.listener.z = z;
    this.listener.yaw = yaw;
  }

  /** 同一类声音短时间内不重复叠加 */
  private throttle(key: string, gap: number): boolean {
    if (!this.ctx) return false;
    const t = this.ctx.currentTime;
    const last = this.recent.get(key) ?? -1;
    if (t - last < gap) return false;
    this.recent.set(key, t);
    return true;
  }

  /** 生成一个带距离衰减与声像的输出节点 */
  private out(x?: number, z?: number, vol = 1, maxDist = 42): AudioNode | null {
    const ctx = this.ctx;
    if (!ctx) return null;
    const g = ctx.createGain();
    let gain = vol;
    let pan = 0;
    if (x !== undefined && z !== undefined) {
      const dx = x - this.listener.x;
      const dz = z - this.listener.z;
      const d = Math.hypot(dx, dz);
      if (d > maxDist) return null;
      gain *= 1 / (1 + d * 0.16) * (1 - d / maxDist);
      if (d > 0.5) {
        // 听者右方向 (cos yaw, -sin yaw)
        const rx = Math.cos(this.listener.yaw);
        const rz = -Math.sin(this.listener.yaw);
        pan = Math.max(-1, Math.min(1, ((dx * rx + dz * rz) / d) * 0.85));
      }
    }
    g.gain.value = gain;
    if (pan !== 0 && ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      g.connect(p);
      p.connect(this.sfx);
    } else g.connect(this.sfx);
    return g;
  }

  private noise(dest: AudioNode, t: number, dur: number, o: { type?: BiquadFilterType; f0: number; f1?: number; q?: number; gain: number; attack?: number; rate?: number }) {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = o.rate ?? 1;
    const f = ctx.createBiquadFilter();
    f.type = o.type ?? 'bandpass';
    f.Q.value = o.q ?? 1;
    f.frequency.setValueAtTime(o.f0, t);
    if (o.f1 !== undefined) f.frequency.exponentialRampToValueAtTime(Math.max(20, o.f1), t + dur);
    const g = ctx.createGain();
    const a = o.attack ?? 0.004;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.gain, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(dest);
    src.start(t, Math.random() * 1.5);
    src.stop(t + dur + 0.05);
  }

  private tone(dest: AudioNode, t: number, o: { type?: OscillatorType; f0: number; f1?: number; dur: number; gain: number; attack?: number; detune?: number; bendT?: number }) {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    osc.type = o.type ?? 'sine';
    osc.frequency.setValueAtTime(o.f0, t);
    if (o.f1 !== undefined) osc.frequency.exponentialRampToValueAtTime(Math.max(20, o.f1), t + (o.bendT ?? o.dur));
    if (o.detune) osc.detune.value = o.detune;
    const g = ctx.createGain();
    const a = o.attack ?? 0.004;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.gain, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + o.dur);
    osc.connect(g);
    g.connect(dest);
    osc.start(t);
    osc.stop(t + o.dur + 0.05);
  }

  private get now() {
    return this.ctx ? this.ctx.currentTime : 0;
  }

  // ---------------- 战斗音效 ----------------

  windup(heavy: boolean, x: number, z: number) {
    const o = this.out(x, z, heavy ? 0.9 : 0.35, 26);
    if (!o) return;
    const t = this.now;
    if (heavy) {
      this.noise(o, t, 0.5, { type: 'lowpass', f0: 300, f1: 1400, q: 2, gain: 0.5, attack: 0.3 });
      this.tone(o, t, { type: 'sawtooth', f0: 70, f1: 120, dur: 0.55, gain: 0.08, attack: 0.3 });
    } else {
      this.noise(o, t, 0.08, { type: 'highpass', f0: 5000, gain: 0.12 });
    }
  }

  swing(weight: Weight, x: number, z: number, mine: boolean) {
    const o = this.out(x, z, mine ? 0.75 : 1, 30);
    if (!o) return;
    const t = this.now;
    const d = weight === 'heavy' ? 0.32 : weight === 'mid' ? 0.2 : 0.13;
    const f0 = weight === 'heavy' ? 500 : weight === 'mid' ? 900 : 1400;
    this.noise(o, t, d, { type: 'bandpass', f0, f1: f0 * 3.2, q: 1.6, gain: weight === 'heavy' ? 0.9 : 0.6, attack: d * 0.35 });
    this.noise(o, t + d * 0.25, d * 0.8, { type: 'bandpass', f0: f0 * 3, f1: f0 * 1.2, q: 3, gain: 0.25, attack: 0.02 });
  }

  hit(heavy: boolean, x: number, z: number, mine: boolean) {
    const o = this.out(x, z, mine ? 1.1 : 0.85, 40);
    if (!o) return;
    const t = this.now;
    this.tone(o, t, { f0: heavy ? 150 : 210, f1: 45, dur: heavy ? 0.32 : 0.2, gain: heavy ? 1.0 : 0.75 });
    this.noise(o, t, heavy ? 0.22 : 0.12, { type: 'bandpass', f0: 2600, f1: 700, q: 0.9, gain: heavy ? 0.9 : 0.7 });
    this.noise(o, t, 0.05, { type: 'highpass', f0: 6000, gain: 0.35 });
    if (mine) this.tone(o, t + 0.01, { type: 'triangle', f0: 1760, f1: 1500, dur: 0.12, gain: 0.12 });
  }

  blocked(x: number, z: number) {
    const o = this.out(x, z, 0.9, 40);
    if (!o) return;
    const t = this.now;
    for (const [f, g] of [
      [1180, 0.18],
      [1715, 0.14],
      [2630, 0.1],
      [3900, 0.06],
    ] as [number, number][]) {
      this.tone(o, t, { type: 'square', f0: f, f1: f * 0.98, dur: 0.22, gain: g * 0.5 });
    }
    this.noise(o, t, 0.08, { type: 'highpass', f0: 3000, gain: 0.5 });
  }

  parry(x: number, z: number) {
    const o = this.out(x, z, 1.1, 46);
    if (!o) return;
    const t = this.now;
    for (const [f, g, d] of [
      [1568, 0.3, 0.9],
      [2349, 0.22, 0.75],
      [3136, 0.14, 0.6],
      [4699, 0.08, 0.45],
    ] as [number, number, number][]) {
      this.tone(o, t, { f0: f, dur: d, gain: g });
    }
    this.noise(o, t, 0.1, { type: 'highpass', f0: 4000, gain: 0.6 });
    this.noise(o, t + 0.02, 0.35, { type: 'bandpass', f0: 3000, f1: 800, q: 2, gain: 0.25 });
  }

  guardBreak(x: number, z: number) {
    const o = this.out(x, z, 1, 40);
    if (!o) return;
    const t = this.now;
    this.tone(o, t, { type: 'sawtooth', f0: 220, f1: 60, dur: 0.35, gain: 0.35 });
    this.noise(o, t, 0.3, { type: 'lowpass', f0: 2400, f1: 300, q: 1, gain: 0.9 });
    this.blocked(x, z);
  }

  dodge(x: number, z: number, mine: boolean) {
    const o = this.out(x, z, mine ? 0.5 : 0.6, 22);
    if (!o) return;
    this.noise(o, this.now, 0.18, { type: 'bandpass', f0: 700, f1: 2400, q: 1.2, gain: 0.5, attack: 0.05 });
  }

  hurt() {
    const o = this.out(undefined, undefined, 0.9);
    if (!o) return;
    const t = this.now;
    this.tone(o, t, { f0: 95, f1: 40, dur: 0.35, gain: 0.9 });
    this.noise(o, t, 0.25, { type: 'lowpass', f0: 900, f1: 200, gain: 0.6 });
  }

  kill(x: number, z: number, mine: boolean) {
    const o = this.out(x, z, mine ? 1.2 : 0.8, 50);
    if (!o) return;
    const t = this.now;
    this.taiko(o, t, 1.2, 62);
    this.noise(o, t, 0.5, { type: 'bandpass', f0: 3500, f1: 600, q: 1.5, gain: 0.5, attack: 0.01 });
    if (mine) {
      // 击杀确认：清脆的铃声
      this.tone(o, t + 0.05, { f0: 2093, dur: 0.6, gain: 0.18 });
      this.tone(o, t + 0.05, { f0: 3136, dur: 0.45, gain: 0.1 });
    }
  }

  death() {
    const o = this.out(undefined, undefined, 1);
    if (!o) return;
    const t = this.now;
    this.taiko(o, t, 1.4, 52);
    this.tone(o, t + 0.1, { type: 'triangle', f0: 392, f1: 196, dur: 1.4, gain: 0.2, bendT: 1.2 });
  }

  footstep(x: number, z: number, mine: boolean, sprint: boolean) {
    if (mine) {
      const t = this.now;
      if (t - this.lastFoot < 0.12) return;
      this.lastFoot = t;
    }
    const o = this.out(x, z, mine ? 0.22 : sprint ? 0.5 : 0.32, 20);
    if (!o) return;
    const t = this.now;
    this.noise(o, t, 0.07, { type: 'bandpass', f0: 900 + Math.random() * 500, q: 0.8, gain: 0.5, rate: 0.7 });
    this.tone(o, t, { f0: 90, f1: 60, dur: 0.06, gain: 0.2 });
  }

  // ---------------- 建造 / 商店 / 界面 ----------------

  place(x: number, z: number) {
    const o = this.out(x, z, 0.9, 40);
    if (!o) return;
    const t = this.now;
    this.tone(o, t, { f0: 180, f1: 90, dur: 0.18, gain: 0.7 });
    this.noise(o, t, 0.1, { type: 'bandpass', f0: 1200, q: 1.5, gain: 0.6 });
    this.tone(o, t + 0.1, { type: 'triangle', f0: 523, dur: 0.12, gain: 0.08 });
  }

  remove(x: number, z: number) {
    const o = this.out(x, z, 0.8, 40);
    if (!o) return;
    const t = this.now;
    this.noise(o, t, 0.22, { type: 'bandpass', f0: 400, f1: 2000, q: 1, gain: 0.5, attack: 0.08 });
    this.tone(o, t, { type: 'triangle', f0: 330, f1: 660, dur: 0.15, gain: 0.1 });
  }

  denied() {
    if (!this.throttle('deny', 0.12)) return;
    const o = this.out(undefined, undefined, 0.5);
    if (!o) return;
    const t = this.now;
    this.tone(o, t, { type: 'square', f0: 180, dur: 0.09, gain: 0.12 });
    this.tone(o, t + 0.1, { type: 'square', f0: 140, dur: 0.12, gain: 0.12 });
  }

  buy(ok: boolean) {
    if (!ok) return this.denied();
    const o = this.out(undefined, undefined, 0.7);
    if (!o) return;
    const t = this.now;
    this.tone(o, t, { type: 'triangle', f0: 1318, dur: 0.12, gain: 0.25 });
    this.tone(o, t + 0.07, { type: 'triangle', f0: 1976, dur: 0.3, gain: 0.25 });
    this.noise(o, t, 0.05, { type: 'highpass', f0: 6000, gain: 0.2 });
  }

  ui() {
    if (!this.throttle('ui', 0.03)) return;
    const o = this.out(undefined, undefined, 0.35);
    if (!o) return;
    this.tone(o, this.now, { type: 'triangle', f0: 880, f1: 1100, dur: 0.05, gain: 0.2 });
  }

  tick(urgent: boolean) {
    const o = this.out(undefined, undefined, urgent ? 0.6 : 0.35);
    if (!o) return;
    this.tone(o, this.now, { type: 'sine', f0: urgent ? 1200 : 900, dur: 0.08, gain: 0.3 });
  }

  /** 阶段切换：锣 / 太鼓 / 笛 */
  phase(kind: 'build' | 'lock' | 'swap' | 'buy' | 'combat' | 'reveal' | 'ring' | 'win' | 'lose' | 'draw' | 'match' | 'midgame') {
    const o = this.out(undefined, undefined, 0.9);
    if (!o) return;
    const t = this.now;
    switch (kind) {
      case 'combat':
        this.taiko(o, t, 1.2, 70);
        this.taiko(o, t + 0.22, 1.0, 66);
        this.taiko(o, t + 0.44, 1.4, 58);
        this.flute(o, t + 0.45, 74, 0.7, 0.25);
        break;
      case 'build':
      case 'midgame':
        this.gong(o, t, 0.5);
        this.koto(o, t + 0.1, 62, 0.4);
        this.koto(o, t + 0.25, 67, 0.4);
        this.koto(o, t + 0.4, 69, 0.4);
        break;
      case 'lock':
        this.ka(o, t, 0.6);
        this.ka(o, t + 0.12, 0.6);
        break;
      case 'swap':
        this.gong(o, t, 0.6);
        this.noise(o, t, 1.6, { type: 'bandpass', f0: 300, f1: 3000, q: 1, gain: 0.25, attack: 1.2 });
        break;
      case 'buy':
        this.koto(o, t, 69, 0.35);
        this.koto(o, t + 0.12, 74, 0.35);
        break;
      case 'reveal':
        this.gong(o, t, 0.45);
        this.flute(o, t, 81, 0.6, 0.2);
        break;
      case 'ring':
        this.taiko(o, t, 1.2, 55);
        this.tone(o, t, { type: 'sawtooth', f0: 110, f1: 55, dur: 1.2, gain: 0.08 });
        break;
      case 'win':
        [62, 66, 69, 74].forEach((m, i) => this.koto(o, t + i * 0.1, m, 0.45));
        this.taiko(o, t + 0.4, 1.1, 66);
        break;
      case 'lose':
        [69, 65, 62].forEach((m, i) => this.koto(o, t + i * 0.16, m, 0.4));
        break;
      case 'draw':
        [67, 67].forEach((m, i) => this.koto(o, t + i * 0.2, m, 0.35));
        break;
      case 'match':
        this.gong(o, t, 0.8);
        [62, 66, 69, 74, 78].forEach((m, i) => this.koto(o, t + 0.1 + i * 0.09, m, 0.45));
        this.taiko(o, t + 0.6, 1.3, 60);
        break;
    }
  }

  // ---------------- 乐器 ----------------

  private koto(dest: AudioNode, t: number, midi: number, gain: number) {
    const f = midiHz(midi);
    this.tone(dest, t, { type: 'triangle', f0: f * 1.01, f1: f, dur: 1.3, gain: gain * 0.5, bendT: 0.04 });
    this.tone(dest, t, { type: 'sine', f0: f * 2, dur: 0.6, gain: gain * 0.25 });
    this.tone(dest, t, { type: 'sine', f0: f * 3.01, dur: 0.25, gain: gain * 0.12 });
    this.noise(dest, t, 0.03, { type: 'highpass', f0: 3000, gain: gain * 0.15 });
  }

  private taiko(dest: AudioNode, t: number, gain: number, base = 64) {
    this.tone(dest, t, { f0: base * 1.9, f1: base, dur: 0.5, gain: gain * 0.8, bendT: 0.12 });
    this.noise(dest, t, 0.16, { type: 'lowpass', f0: 700, f1: 120, gain: gain * 0.6 });
  }

  private ka(dest: AudioNode, t: number, gain: number) {
    this.noise(dest, t, 0.04, { type: 'bandpass', f0: 2500, q: 3, gain: gain * 0.5 });
    this.tone(dest, t, { type: 'square', f0: 900, dur: 0.03, gain: gain * 0.05 });
  }

  private gong(dest: AudioNode, t: number, gain: number) {
    for (const [f, g, d] of [
      [98, 0.5, 2.4],
      [147, 0.3, 2.0],
      [196.5, 0.22, 1.6],
      [262, 0.12, 1.2],
      [393, 0.06, 0.9],
    ] as [number, number, number][]) {
      this.tone(dest, t, { f0: f * 1.02, f1: f, dur: d, gain: gain * g, attack: 0.01, bendT: 0.5 });
    }
  }

  private flute(dest: AudioNode, t: number, midi: number, dur: number, gain: number) {
    const ctx = this.ctx!;
    const f = midiHz(midi);
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f * 0.97, t);
    osc.frequency.exponentialRampToValueAtTime(f, t + 0.12);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 5.2;
    const lg = ctx.createGain();
    lg.gain.value = f * 0.012;
    lfo.connect(lg);
    lg.connect(osc.frequency);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.1);
    g.gain.setValueAtTime(gain, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g);
    g.connect(dest);
    osc.start(t);
    lfo.start(t);
    osc.stop(t + dur + 0.05);
    lfo.stop(t + dur + 0.05);
    this.noise(dest, t, dur, { type: 'bandpass', f0: f * 2, q: 2, gain: gain * 0.15, attack: 0.08 });
  }

  // ---------------- BGM ----------------

  setMusic(mode: 'off' | 'calm' | 'combat') {
    if (mode === this.musicMode) return;
    this.musicMode = mode;
    this.step = 0;
    if (this.ctx) this.nextNoteT = this.ctx.currentTime + 0.1;
  }

  private schedule() {
    const ctx = this.ctx;
    if (!ctx || this.musicMode === 'off' || ctx.state !== 'running') return;
    const combat = this.musicMode === 'combat';
    const bpm = combat ? 118 : 84;
    const sixteenth = 60 / bpm / 4;
    if (this.nextNoteT < ctx.currentTime - 0.2) this.nextNoteT = ctx.currentTime + 0.05;
    while (this.nextNoteT < ctx.currentTime + 0.12) {
      this.playStep(this.nextNoteT, combat);
      this.nextNoteT += sixteenth;
      this.step = (this.step + 1) % 16;
      if (this.step === 0) this.bar++;
    }
  }

  private playStep(t: number, combat: boolean) {
    const m = this.music;
    const s = this.step;
    const scale = combat ? IN : YO;
    const roots = combat ? [50, 50, 48, 53] : [62, 57, 59, 55];
    const root = roots[this.bar % 4];
    const note = (deg: number) => root + scale[((deg % 5) + 5) % 5] + 12 * Math.floor(deg / 5);
    if (combat) {
      // 太鼓：咚 . . 咚 | . 咔 咚 .
      if (s === 0 || s === 6 || s === 10) this.taiko(m, t, s === 0 ? 0.55 : 0.4, 62);
      if (s === 4 || s === 12) this.ka(m, t, 0.5);
      if (s === 14 && this.bar % 2 === 1) this.taiko(m, t, 0.35, 70);
      // 三味线式拨弦
      if (s % 2 === 0 && Math.random() < 0.55) this.koto(m, t, note(5 + Math.floor(Math.random() * 6)), 0.18);
      if (s === 0) this.koto(m, t, note(0) - 12, 0.25);
      if (s === 8 && this.bar % 4 === 3) this.flute(m, t, note(10), 0.9, 0.08);
    } else {
      // 筝的分解和弦 + 偶尔的尺八长音
      const pat = [0, 2, 4, 5, 7, 5, 4, 2];
      if (s % 2 === 0) {
        const deg = pat[(s / 2 + this.bar) % pat.length];
        if (Math.random() < 0.85) this.koto(m, t, note(deg) - 12, 0.2);
      }
      if (s === 0) this.koto(m, t, root - 24, 0.22);
      if (s === 0 && this.bar % 4 === 2) this.flute(m, t, note(7), 2.2, 0.07);
      if (s === 12 && this.bar % 2 === 0) this.ka(m, t, 0.12);
    }
  }

  dispose() {
    if (this.timerId) clearInterval(this.timerId);
  }
}
