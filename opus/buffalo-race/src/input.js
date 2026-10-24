// input.js — keyboard, gamepad and touch controls folded into one racer input.
import { clamp, damp } from './util.js';

const GAME_KEYS = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'ShiftLeft', 'ShiftRight']);

export class Input {
  constructor() {
    this.keys = new Set();
    this.pressed = new Set();
    this.touch = { left: 0, right: 0, brake: 0, drift: 0, boost: 0, used: false };
    this.steer = 0;
    this.padPrev = [];
    this.usingPad = false;
    addEventListener('keydown', (e) => {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (GAME_KEYS.has(e.code)) e.preventDefault();
      if (!e.repeat) this.pressed.add(e.code);
      this.keys.add(e.code);
      this.touch.used = false; this.usingPad = false;
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => { this.keys.clear(); for (const k of ['left', 'right', 'brake', 'drift', 'boost']) this.touch[k] = 0; });
  }

  // Hold-to-press buttons for the on-screen touch pad.
  bindTouch(el, name) {
    const on = (e) => { e.preventDefault(); this.touch[name] = 1; this.touch.used = true; el.classList.add('on'); };
    const off = (e) => { e.preventDefault(); this.touch[name] = 0; el.classList.remove('on'); };
    el.addEventListener('pointerdown', on);
    el.addEventListener('pointerup', off);
    el.addEventListener('pointercancel', off);
    el.addEventListener('pointerleave', off);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  // Edge-triggered key/button press, cleared each frame.
  hit(...codes) { return codes.some((c) => this.pressed.has(c)); }
  endFrame() { this.pressed.clear(); }

  pollPad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = pads && [...pads].find((p) => p && p.connected);
    if (!gp) return null;
    const b = (i) => (gp.buttons[i] ? gp.buttons[i].value || (gp.buttons[i].pressed ? 1 : 0) : 0);
    const now = gp.buttons.map((x) => x.pressed);
    // map a few buttons onto keyboard codes so menus work with a pad too
    const edge = (i, code) => { if (now[i] && !this.padPrev[i]) { this.pressed.add(code); this.usingPad = true; } };
    edge(0, 'Enter'); edge(9, 'Escape'); edge(3, 'KeyC'); edge(8, 'KeyR'); edge(14, 'ArrowLeft'); edge(15, 'ArrowRight'); edge(12, 'ArrowUp'); edge(13, 'ArrowDown');
    this.padPrev = now;
    const ax = Math.abs(gp.axes[0]) > 0.12 ? gp.axes[0] : 0;
    const st = { steer: -ax, throttle: Math.max(b(7), b(0)), brake: Math.max(b(6), b(2) * 0.8), drift: b(5) > 0.5 || b(4) > 0.5, boost: b(1) > 0.5 || b(3) > 0.5 };
    if (ax || st.throttle || st.brake || st.drift || st.boost) this.usingPad = true;
    return st;
  }

  // Fill a racer's input from whichever device is active.
  read(out, dt) {
    const k = this.keys, any = (...c) => c.some((x) => k.has(x));
    const pad = this.pollPad();
    let target = (any('KeyA', 'ArrowLeft') ? 1 : 0) - (any('KeyD', 'ArrowRight') ? 1 : 0);
    let throttle = any('KeyW', 'ArrowUp') ? 1 : 0;
    let brake = any('KeyS', 'ArrowDown') ? 1 : 0;
    let drift = any('Space');
    let boost = any('ShiftLeft', 'ShiftRight', 'KeyJ');
    const t = this.touch;
    if (t.used) {
      target = t.left - t.right;
      brake = t.brake; throttle = brake ? 0 : 1;
      drift = !!t.drift; boost = !!t.boost;
    }
    if (pad && this.usingPad) {
      if (Math.abs(pad.steer) > Math.abs(target)) target = pad.steer;
      throttle = Math.max(throttle, pad.throttle); brake = Math.max(brake, pad.brake);
      drift = drift || pad.drift; boost = boost || pad.boost;
      this.steer = target;
    } else {
      // keyboard steering eases in and snaps back quickly
      const rate = target === 0 ? 10 : Math.sign(target) !== Math.sign(this.steer) ? 12 : 5;
      this.steer = damp(this.steer, target, rate, dt);
      if (Math.abs(this.steer) < 0.01 && target === 0) this.steer = 0;
    }
    out.steer = clamp(this.steer, -1, 1);
    out.throttle = throttle; out.brake = brake; out.drift = drift; out.boost = boost;
    return out;
  }
}
