// Small, asset-free soundscape: wind, hoof beats and a sparse pentatonic melody.
export class GameAudio {
  constructor() {
    this.context = null;
    this.master = null;
    this.enabled = false;
    this.nextNote = 0;
    this.nextHoof = 0;
    this.noteIndex = 0;
  }

  ensure() {
    if (this.context) {
      if (this.context.state === 'suspended') this.context.resume();
      return;
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = this.context = new AudioContext();
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(ctx.destination);

    const length = ctx.sampleRate * 3;
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      last = last * 0.985 + (Math.random() * 2 - 1) * 0.015;
      data[i] = last * 2.4;
    }
    const wind = ctx.createBufferSource();
    wind.buffer = buffer;
    wind.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 720;
    const gain = ctx.createGain();
    gain.gain.value = 0.12;
    wind.connect(filter).connect(gain).connect(this.master);
    wind.start();
  }

  setEnabled(value) {
    this.enabled = value;
    if (value) this.ensure();
    if (!this.context || !this.master) return;
    if (this.context.state === 'suspended') this.context.resume();
    this.master.gain.cancelScheduledValues(this.context.currentTime);
    this.master.gain.setTargetAtTime(value ? 0.34 : 0, this.context.currentTime, 0.08);
  }

  tone(frequency, duration = 0.18, volume = 0.12, type = 'sine', delay = 0) {
    if (!this.enabled || !this.context) return;
    const ctx = this.context;
    const at = ctx.currentTime + delay;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, at);
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(volume, at + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
    oscillator.connect(gain).connect(this.master);
    oscillator.start(at);
    oscillator.stop(at + duration + 0.03);
  }

  countdown(number) {
    this.tone(number > 0 ? 392 : 587.33, number > 0 ? 0.2 : 0.5, 0.18, 'triangle');
    if (number === 0) this.tone(880, 0.55, 0.08, 'sine', 0.04);
  }

  boost() {
    this.tone(164.81, 0.28, 0.07, 'sawtooth');
    this.tone(329.63, 0.35, 0.05, 'triangle', 0.04);
  }

  finish() {
    [293.66, 369.99, 440, 587.33].forEach((note, i) => this.tone(note, 1.2, 0.08, 'sine', i * 0.12));
  }

  update(speed, racing) {
    if (!this.enabled || !this.context) return;
    const now = this.context.currentTime;
    if (racing && speed > 3 && now >= this.nextHoof) {
      const pace = Math.max(0.12, 0.46 - speed * 0.008);
      this.nextHoof = now + pace;
      this.tone(72 + Math.random() * 18, 0.075, 0.055, 'triangle');
      this.tone(135 + Math.random() * 25, 0.045, 0.025, 'sine', 0.02);
    }
    if (now >= this.nextNote) {
      const notes = [293.66, 329.63, 369.99, 440, 493.88, 587.33];
      const melody = [0, 2, 4, 3, 1, 3, 5, 4, 2, 1, 0, 3];
      const note = notes[melody[this.noteIndex++ % melody.length]];
      this.tone(note, 1.5, 0.025, 'sine');
      this.tone(note * 2.005, 0.85, 0.008, 'triangle', 0.02);
      this.nextNote = now + (racing ? 1.45 : 2.1) + Math.random() * 0.8;
    }
  }
}
