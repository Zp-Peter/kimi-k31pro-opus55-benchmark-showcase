export class Soundscape {
  constructor() {
    this.context = null;
    this.master = null;
    this.enabled = true;
    this.musicTimer = null;
    this.musicStep = 0;
  }

  ensure() {
    if (!this.context) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;
      this.context = new AudioContext();
      this.master = this.context.createGain();
      this.master.gain.value = this.enabled ? 0.36 : 0;
      this.master.connect(this.context.destination);
    }
    if (this.context.state === 'suspended') this.context.resume();
    return true;
  }

  toggle() {
    this.enabled = !this.enabled;
    this.ensure();
    if (this.master) this.master.gain.setTargetAtTime(this.enabled ? 0.36 : 0, this.context.currentTime, 0.02);
    return this.enabled;
  }

  tone(frequency, duration, { type = 'sine', volume = 0.12, slide = 0, delay = 0 } = {}) {
    if (!this.enabled || !this.ensure()) return;
    const now = this.context.currentTime + delay;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(30, frequency + slide), now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + Math.min(0.012, duration * 0.2));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gain).connect(this.master);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }

  noise(duration, { volume = 0.1, filter = 900, delay = 0 } = {}) {
    if (!this.enabled || !this.ensure()) return;
    const sampleRate = this.context.sampleRate;
    const buffer = this.context.createBuffer(1, Math.ceil(sampleRate * duration), sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const source = this.context.createBufferSource();
    const lowpass = this.context.createBiquadFilter();
    const gain = this.context.createGain();
    lowpass.type = 'bandpass';
    lowpass.frequency.value = filter;
    lowpass.Q.value = 0.7;
    gain.gain.value = volume;
    source.buffer = buffer;
    source.connect(lowpass).connect(gain).connect(this.master);
    source.start(this.context.currentTime + delay);
  }

  play(name, distance = 0) {
    if (!this.enabled) return;
    const scale = Math.max(0.08, 1 - distance / 30);
    switch (name) {
      case 'swing':
        this.noise(0.13, { volume: 0.1 * scale, filter: 1300 });
        this.tone(260, 0.1, { type: 'triangle', volume: 0.04 * scale, slide: -140 });
        break;
      case 'heavySwing':
        this.noise(0.22, { volume: 0.15 * scale, filter: 650 });
        this.tone(150, 0.18, { type: 'sawtooth', volume: 0.06 * scale, slide: -80 });
        break;
      case 'hit':
        this.noise(0.09, { volume: 0.18 * scale, filter: 2100 });
        this.tone(180, 0.12, { type: 'square', volume: 0.08 * scale, slide: -100 });
        break;
      case 'hurt':
        this.tone(95, 0.18, { type: 'sawtooth', volume: 0.09, slide: -45 });
        break;
      case 'block':
        this.tone(760, 0.2, { type: 'triangle', volume: 0.12 * scale, slide: -260 });
        this.tone(1140, 0.1, { type: 'sine', volume: 0.06 * scale, slide: -500 });
        break;
      case 'kill':
        this.tone(190, 0.14, { type: 'square', volume: 0.09, slide: 100 });
        this.tone(380, 0.28, { type: 'triangle', volume: 0.08, slide: 180, delay: 0.09 });
        break;
      case 'buy':
        this.tone(660, 0.08, { type: 'sine', volume: 0.09 });
        this.tone(990, 0.16, { type: 'sine', volume: 0.08, delay: 0.07 });
        break;
      case 'error':
        this.tone(130, 0.16, { type: 'square', volume: 0.07, slide: -30 });
        break;
      case 'place':
        this.noise(0.08, { volume: 0.08, filter: 450 });
        this.tone(210, 0.1, { type: 'triangle', volume: 0.07, slide: -60 });
        break;
      case 'delete':
        this.tone(310, 0.12, { type: 'triangle', volume: 0.06, slide: -170 });
        break;
      case 'step':
        this.noise(0.045, { volume: 0.026 * scale, filter: 260 });
        break;
      case 'stage':
        this.tone(220, 0.35, { type: 'triangle', volume: 0.07 });
        this.tone(440, 0.42, { type: 'triangle', volume: 0.065, delay: 0.12 });
        break;
      case 'count':
        this.tone(440, 0.09, { type: 'square', volume: 0.055 });
        break;
      case 'go':
        this.tone(330, 0.12, { type: 'square', volume: 0.08 });
        this.tone(660, 0.3, { type: 'triangle', volume: 0.09, delay: 0.08 });
        break;
      case 'win':
        [262, 330, 392, 523].forEach((frequency, index) => this.tone(frequency, 0.4, { type: 'triangle', volume: 0.07, delay: index * 0.1 }));
        break;
      default:
        break;
    }
  }
}
