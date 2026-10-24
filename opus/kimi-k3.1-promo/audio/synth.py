#!/usr/bin/env python3
"""Procedural soundtrack for the Kimi K3.1 promo: 64 s, 120 BPM, D minor, 48 kHz stereo.

Every cue sits on the picture's timeline (src/timeline.json, storyboard.md).
    python3 audio/synth.py      ->  out/soundtrack.wav  (-14 LUFS integrated, <= -1 dBTP)
"""
import os
import numpy as np
from scipy import signal
from scipy.io import wavfile
from scipy.ndimage import minimum_filter1d, uniform_filter1d

SR = 48000
DUR = 64.0
N = int(SR * DUR)
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'out')
rng = np.random.default_rng(2026)

# ------------------------------------------------------------------------------------------------
# basics
# ------------------------------------------------------------------------------------------------
NAMES = {'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5, 'F#': 6, 'Gb': 6,
         'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11}


def hz(note):
    return 440.0 * 2 ** ((NAMES[note[:-1]] + 12 * (int(note[-1]) + 1) - 69) / 12)


def ns(sec):
    return int(round(sec * SR))


def T(n):
    return np.arange(n) / SR


def _f(f, n):
    return np.broadcast_to(np.asarray(f, dtype=float), (n,))


def phase(f, n, ph0=0.0):
    return (ph0 + np.cumsum(_f(f, n)) / SR) % 1.0


def _blep(p, dt):
    y = np.zeros_like(p)
    m = p < dt
    x = p[m] / dt[m]
    y[m] = 2 * x - x * x - 1
    m = p > 1 - dt
    x = (p[m] - 1) / dt[m]
    y[m] = x * x + 2 * x + 1
    return y


def saw(f, n, ph0=0.0):
    f = _f(f, n)
    p = phase(f, n, ph0)
    return 2 * p - 1 - _blep(p, f / SR)


def sqr(f, n, ph0=0.0):
    f = _f(f, n)
    p = phase(f, n, ph0)
    dt = f / SR
    return np.where(p < 0.5, 1.0, -1.0) + _blep(p, dt) - _blep((p + 0.5) % 1.0, dt)


def sine(f, n, ph0=0.0):
    return np.sin(2 * np.pi * phase(f, n, ph0))


def noise(n):
    return rng.standard_normal(n)


def layer(*sigs):
    """Sum signals of different lengths (zero-padded to the longest)."""
    out = np.zeros((max(len(s) for s in sigs),) + sigs[0].shape[1:])
    for s in sigs:
        out[:len(s)] += s
    return out


def ar(n, a=0.005, r=0.05):
    """Linear attack, raised-cosine release over the last r seconds."""
    e = np.ones(n)
    na, nr = min(n, ns(a)), min(n, ns(r))
    if na:
        e[:na] = np.linspace(0, 1, na, endpoint=False)
    if nr:
        e[n - nr:] *= 0.5 + 0.5 * np.cos(np.linspace(0, np.pi, nr))
    return e


def _sos(kind, f, order):
    return signal.butter(order, f, kind, fs=SR, output='sos')


def lp(x, f, order=2):
    return signal.sosfilt(_sos('lowpass', f, order), x, axis=0)


def hp(x, f, order=2):
    return signal.sosfilt(_sos('highpass', f, order), x, axis=0)


def bp(x, lo, hi, order=2):
    return signal.sosfilt(_sos('bandpass', [lo, hi], order), x, axis=0)


def svf(x, fc, q=0.707, mode='lp'):
    """Zavalishin TPT state-variable filter with a per-sample cutoff (sweeps)."""
    n = len(x)
    g = np.tan(np.pi * np.clip(_f(fc, n), 20, SR * 0.45) / SR)
    k = 1.0 / q
    a1 = 1 / (1 + g * (g + k))
    a2 = g * a1
    a3 = g * a2
    xs, A1, A2, A3 = x.tolist(), a1.tolist(), a2.tolist(), a3.tolist()
    lo, bd = [0.0] * n, [0.0] * n
    s1 = s2 = 0.0
    for i in range(n):
        v3 = xs[i] - s2
        v1 = A1[i] * s1 + A2[i] * v3
        v2 = s2 + A2[i] * s1 + A3[i] * v3
        s1 = 2 * v1 - s1
        s2 = 2 * v2 - s2
        lo[i] = v2
        bd[i] = v1
    lo, bd = np.array(lo), np.array(bd)
    if mode == 'lp':
        return lo
    if mode == 'bp':
        return bd * k
    return x - k * bd - lo


def pan2(x, pan=0.0):
    th = (np.clip(pan, -1, 1) + 1) * np.pi / 4
    return np.stack([x * np.cos(th), x * np.sin(th)], 1) * np.sqrt(2)


# ------------------------------------------------------------------------------------------------
# buses
# ------------------------------------------------------------------------------------------------
MUSIC = ['drums', 'bass', 'pads', 'keys']
bus = {b: np.zeros((N, 2)) for b in MUSIC + ['fx', 'foley', 'send']}
KICKS = []      # sidechain triggers


def put(name, sig, t0, gain=1.0, pan=0.0, send=0.0):
    if sig.ndim == 1:
        sig = pan2(sig, pan)
    i0 = ns(t0)
    if i0 < 0:
        sig, i0 = sig[-i0:], 0
    i1 = min(N, i0 + len(sig))
    if i1 > i0:
        bus[name][i0:i1] += sig[:i1 - i0] * gain
        if send:
            bus['send'][i0:i1] += sig[:i1 - i0] * gain * send


# ------------------------------------------------------------------------------------------------
# instruments
# ------------------------------------------------------------------------------------------------
HAT_F = [205.3, 304.4, 369.6, 522.7, 540.0, 800.0]


def kick(tail=0.3, punch=1.0, f0=48.0, sweep=150.0):
    n = ns(0.9)
    t = T(n)
    f = f0 + sweep * np.exp(-t / 0.03) + 400 * np.exp(-t / 0.0025)
    body = np.tanh(2.2 * sine(f, n) * np.exp(-t / tail)) / np.tanh(2.2)
    click = hp(noise(n), 2500) * np.exp(-t / 0.003) * 0.25 * punch
    return (body + click) * ar(n, 0.0005, 0.05)


def snare(tone=190.0, tail=0.13):
    n = ns(0.5)
    t = T(n)
    nz = bp(noise(n), 1200, 9000) * np.exp(-t / tail)
    body = sine(tone * (1 + 0.5 * np.exp(-t / 0.01)), n) * np.exp(-t / 0.05) * 0.6 + sine(tone * 1.72, n) * np.exp(-t / 0.03) * 0.25
    return (nz * 0.9 + body) * ar(n, 0.0005, 0.05)


def clap():
    n = ns(0.5)
    t = T(n)
    env = np.zeros(n)
    for k, d in enumerate([0.0, 0.010, 0.021, 0.033]):
        i = ns(d)
        env[i:] += np.exp(-t[:n - i] / (0.0045 if k < 3 else 0.16)) * (0.8 if k < 3 else 1.0)
    return bp(noise(n), 900, 3800) * env * 0.9


def hat(open_=False):
    n = ns(0.6 if open_ else 0.12)
    t = T(n)
    metal = sum(sqr(f * 1.7, n, rng.random()) for f in HAT_F) / 6
    src = bp(metal, 7000, 15000) + 0.3 * hp(noise(n), 9000)
    return src * np.exp(-t / (0.22 if open_ else 0.03)) * ar(n, 0.0005, 0.01)


def crash(tail=1.8):
    n = ns(tail * 3.2)
    t = T(n)
    metal = sum(sqr(f * 3.1, n, rng.random()) for f in HAT_F) / 6
    src = hp(noise(n), 3000) * 0.7 + bp(metal, 4000, 16000) * 0.5
    return src * np.exp(-t / tail) * ar(n, 0.001, 0.2)


def boom(f0=70.0, f1=28.0, tail=1.4, dur=4.0):
    n = ns(dur)
    t = T(n)
    f = f1 + (f0 - f1) * np.exp(-t / 0.35)
    sub = np.tanh(1.8 * sine(f, n) * np.exp(-t / tail)) / np.tanh(1.8)
    thud = lp(noise(n), 220, 4) * np.exp(-t / 0.18) * 4.0
    return (sub + thud) * ar(n, 0.001, 0.4)


def tom(f0=110.0, tail=0.35):
    n = ns(1.0)
    t = T(n)
    f = f0 * (1 + 0.8 * np.exp(-t / 0.04))
    body = np.tanh(1.5 * sine(f, n) * np.exp(-t / tail)) / np.tanh(1.5)
    return (body + bp(noise(n), 200, 2000) * np.exp(-t / 0.03) * 0.3) * ar(n, 0.0005, 0.05)


def supersaw(f, n, voices=5, cents=14.0):
    out = np.zeros(n)
    for v in range(voices):
        c = (v - (voices - 1) / 2) / ((voices - 1) / 2) * cents if voices > 1 else 0.0
        out += saw(f * 2 ** (c / 1200), n, rng.random())
    return out / np.sqrt(voices)


def pad(notes, dur, a=0.6, r=1.0, cutoff=2400.0, voices=5, cents=16.0):
    n = ns(dur + r)
    L, R = np.zeros(n), np.zeros(n)
    for nt in notes:
        f = hz(nt)
        L += supersaw(f, n, voices, cents)
        R += supersaw(f, n, voices, cents)
    st = np.stack([L, R], 1) * (ar(n, a, r) / np.sqrt(len(notes)))[:, None]
    return lp(st, cutoff, 2)


def pluck(f, dur=0.6, bright=1.0, H=12, decay=0.45):
    n = ns(dur)
    t = T(n)
    y = np.zeros(n)
    for k in range(1, H + 1):
        if f * k > SR * 0.45:
            break
        y += np.sin(2 * np.pi * f * k * t + rng.random() * 0.3) / k ** 1.15 * np.exp(-t * (1 + 0.55 * (k - 1) * bright) / decay)
    return y * ar(n, 0.002, 0.03) * 0.6


def bell(f, dur=2.5, index=2.4, ratio=3.5, tau=0.9):
    n = ns(dur)
    t = T(n)
    y = np.sin(2 * np.pi * f * t + index * np.exp(-t / (tau * 0.4)) * np.sin(2 * np.pi * f * ratio * t))
    y += 0.35 * np.sin(2 * np.pi * f * 2.0 * t) * np.exp(-t / (tau * 0.5))
    return y * np.exp(-t / tau) * ar(n, 0.001, 0.1) * 0.5


def bass_note(f, dur, cutoff=700.0, drive=1.4):
    n = ns(dur + 0.03)
    t = T(n)
    y = lp(saw(f, n, rng.random()) * 0.6 + sine(f, n) * 0.8, cutoff, 2)
    env = ar(n, 0.004, 0.03) * (0.75 + 0.25 * np.exp(-t / 0.08))
    return np.tanh(drive * y * env) / np.tanh(drive)


def stab(notes, dur=0.22, cutoff=3500.0):
    n = ns(dur + 0.25)
    t = T(n)
    y = sum(supersaw(hz(nt), n, 5, 20) for nt in notes) / np.sqrt(len(notes))
    y = lp(y, cutoff, 2) * np.exp(-t / dur) * ar(n, 0.001, 0.1)
    return y + bp(noise(n), 800, 6000) * np.exp(-t / 0.02) * 0.4


def riser(dur, f0=300.0, f1=7000.0, curve=2.5, q=1.6, tone=None):
    n = ns(dur)
    u = np.linspace(0, 1, n)
    y = svf(noise(n), f0 * (f1 / f0) ** u, q, 'bp') * u ** curve
    if tone:
        a, b, amt = tone
        y += amt * lp(saw(a * (b / a) ** u, n), 4000) * u ** curve
    return y * ar(n, 0.01, 0.01)


def whoosh(dur, peak=0.55, f_lo=250.0, f_hi=2600.0, q=1.1, pan=(-0.7, 0.7)):
    n = ns(dur)
    u = np.linspace(0, 1, n)
    shape = np.where(u < peak, (u / peak) ** 2.2, np.exp(-(u - peak) / (1 - peak) * 4.0))
    fc = np.where(u < peak, f_lo * (f_hi / f_lo) ** (u / peak), f_hi * (f_lo * 1.6 / f_hi) ** ((u - peak) / (1 - peak)))
    y = svf(noise(n), fc, q, 'bp') * shape
    return pan2(y, np.linspace(pan[0], pan[1], n))


def swell(dur, f=2500.0, curve=4.0):
    n = ns(dur)
    u = np.linspace(0, 1, n)
    return pan2(hp(noise(n), f) * u ** curve * ar(n, 0, 0.004), 0) * 0.7 + pan2(hp(noise(n), f) * u ** curve, 0) * np.array([0.3, -0.3])


def key_click(strength=1.0):
    n = ns(0.08)
    t = T(n)
    c = bp(noise(n), 1500 + 1500 * rng.random(), 7000) * np.exp(-t / (0.004 + 0.002 * rng.random()))
    th = sine(140 + 60 * rng.random(), n) * np.exp(-t / 0.02) * 0.5
    return (c + th) * strength


def tick(f=3200.0, tau=0.012):
    n = ns(0.06)
    t = T(n)
    return (sine(f, n) * 0.6 + hp(noise(n), 4000) * 0.4) * np.exp(-t / tau) * ar(n, 0.0005, 0.005)


def bleep(f, dur):
    n = ns(dur)
    return sqr(f, n, 0) * ar(n, 0.001, 0.004) * 0.35


# ------------------------------------------------------------------------------------------------
# harmony
# ------------------------------------------------------------------------------------------------
VOICING = {
    'Dm': ['D3', 'A3', 'D4', 'E4', 'F4'], 'Bb': ['Bb2', 'F3', 'A3', 'D4', 'F4'], 'F': ['F2', 'C3', 'A3', 'C4', 'E4'],
    'C': ['C3', 'G3', 'C4', 'D4', 'E4'], 'Gm': ['G2', 'D3', 'Bb3', 'D4', 'F4'], 'A': ['A2', 'E3', 'A3', 'C#4', 'E4'],
}
ROOT_NOTE = {'Dm': 'D2', 'Bb': 'Bb1', 'F': 'F2', 'C': 'C2', 'Gm': 'G1', 'A': 'A1'}
ARP = {
    'Dm': ['D4', 'F4', 'A4', 'D5', 'E5', 'A4'], 'Bb': ['Bb3', 'D4', 'F4', 'A4', 'D5', 'F4'], 'F': ['F4', 'A4', 'C5', 'E5', 'F5', 'C5'],
    'C': ['C4', 'E4', 'G4', 'C5', 'D5', 'G4'], 'Gm': ['G4', 'Bb4', 'D5', 'F5', 'G5', 'D5'], 'A': ['A4', 'C#5', 'E5', 'A5', 'E5', 'C#5'],
}
GROOVE = [(16, 'Dm'), (18, 'Bb'), (20, 'F'), (22, 'C'), (24, 'Dm'), (26, 'Bb'), (28, 'F'), (30, 'C'),
          (32, 'Dm'), (34, 'Bb'), (36, 'F'), (38, 'C'), (40, 'Gm'), (42, 'Bb'), (44, 'C'), (46, 'A')]


def chord_at(t):
    c = GROOVE[0][1]
    for s, name in GROOVE:
        if t >= s - 1e-9:
            c = name
    return c


def beats(t0, t1, step=0.5):
    return [round(t0 + i * step, 6) for i in range(int(round((t1 - t0) / step)))]


# ------------------------------------------------------------------------------------------------
# arrangement
# ------------------------------------------------------------------------------------------------
def intro():
    # 0–8 · moon dawn: drone, slowly opening pads, sunrise shimmer, swell into the flash at 8.0
    n = ns(8.6)
    t = T(n)
    drone = sine(hz('D1'), n) * 0.9 + lp(saw(hz('D2'), n), 180) * 0.6
    drone *= np.minimum(1, t / 3.5) * (1 - np.clip((t - 8.0) / 0.6, 0, 1))
    put('pads', pan2(drone, 0), 0, 0.36)
    a = pad(['D3', 'A3', 'E4', 'F4'], 4.6, a=2.2, r=1.0, cutoff=6000)
    a = np.stack([svf(a[:, c], np.linspace(350, 1700, len(a)), 0.9) for c in range(2)], 1)
    put('pads', a, 0, 0.34, send=0.3)
    b = pad(['Bb2', 'F3', 'A3', 'C4', 'D4'], 4.2, a=1.4, r=0.8, cutoff=6000)
    b = np.stack([svf(b[:, c], np.linspace(900, 2600, len(b)), 0.9) for c in range(2)], 1)
    put('pads', b, 4.0, 0.32, send=0.3)
    for k, (nt, dt) in enumerate([('D6', 0.0), ('A6', 0.18), ('E7', 0.42), ('A5', 0.7)]):
        put('keys', bell(hz(nt), 3.5, index=1.2, tau=1.6), 5.4 + dt, 0.12, pan=(-0.5, 0.5, -0.2, 0.3)[k], send=0.6)
    put('fx', swell(1.4, 3000), 6.6, 0.22, send=0.3)
    put('fx', boom(60, 30, 0.8, 2.5), 8.0, 0.35)
    put('keys', bell(hz('A5'), 3.0, index=1.0, tau=1.4), 8.0, 0.1, send=0.6)


def prompt():
    # 8–12 · prompt: hushed pad, heartbeat pulse, typed keys, Enter sends the tokens into depth
    put('pads', pad(['D3', 'A3', 'E4', 'F4'], 3.6, a=0.6, r=0.6, cutoff=1100), 8.0, 0.26, send=0.3)
    for b in beats(8.0, 11.5):
        put('drums', kick(tail=0.12, punch=0.2, f0=46, sweep=60), b, 0.28)
    keys_t, t = [], 0.55
    for i in range(20):
        keys_t.append(t)
        t += 0.104 + 0.014 * np.sin(i * 2.3) + (0.16 if i == 7 else 0)
    for i, k in enumerate(keys_t):
        put('foley', key_click(0.8 + 0.3 * rng.random()), 8.0 + k, 0.5, pan=0.15 * np.sin(i * 1.7), send=0.08)
    n = ns(0.3)
    tt = T(n)
    enter = bp(noise(n), 1200, 6000) * np.exp(-tt / 0.008) * 0.8 + sine(95 * (1 + 0.5 * np.exp(-tt / 0.02)), n) * np.exp(-tt / 0.06) * 0.9
    put('foley', enter, 11.3, 0.7, send=0.15)
    put('fx', whoosh(1.0, peak=0.72, f_lo=200, f_hi=3200, pan=(0, 0)), 11.32, 0.5, send=0.2)


def build():
    # 12–15.5 · 1M tunnel: dominant pedal, accelerating snare roll and data ticks, riser — then a hard cut
    put('pads', np.stack([svf(c, np.geomspace(700, 5000, ns(3.5 + 0.3)), 0.8) for c in pad(['A2', 'E3', 'G3', 'D4'], 3.5, a=0.4, r=0.3, cutoff=8000).T], 1), 12.0, 0.45, send=0.2)
    for b in beats(12.0, 15.5, 0.25):
        cut = 300 + 1500 * ((b - 12) / 3.5) ** 2
        put('bass', bass_note(hz('A1'), 0.2, cutoff=cut), b, 0.55)
    for b in beats(12.0, 15.5):
        put('drums', kick(punch=0.6), b, 0.55 + 0.3 * (b - 12) / 3.5)
    t, k = 12.0, 0
    while t < 15.5:
        step = 0.5 if t < 13 else 0.25 if t < 14 else 0.125 if t < 15 else 0.0625
        put('drums', snare(tail=0.09), t, 0.18 + 0.5 * ((t - 12) / 3.5) ** 1.5, pan=0.1 * (-1) ** k)
        t += step
        k += 1
    t = 12.0
    while t < 15.45:
        rate = 6 + 34 * ((t - 12) / 3.5) ** 2
        put('foley', tick(2400 + 1800 * rng.random(), 0.006), t, 0.12, pan=rng.uniform(-0.6, 0.6))
        t += 1 / rate
    put('fx', pan2(riser(3.5, 300, 8000, 2.2, tone=(hz('A2'), hz('A5'), 0.25)), 0), 12.0, 0.5, send=0.15)
    put('fx', whoosh(0.7, peak=0.5, f_lo=300, f_hi=4000, pan=(0, 0)), 11.65, 0.35)


def groove():
    # 16–48 · main groove: four-on-the-floor, rolling sidechained bass, supersaw pads, plucked arp
    for b in beats(16.0, 46.0):
        bi = int(round((b - 16) / 0.5))
        build_up = 40.0 <= b < 42.0
        calm = 42.5 <= b < 44.0
        if 36.0 <= b < 38.0 and b >= 37.7:
            continue
        if 44.0 <= b < 45.5 and b in (44.0, 44.5, 45.0):
            pass  # LOW / HIGH / MAX hits supply the downbeat
        else:
            put('drums', kick(), b, 0.9)
            KICKS.append(b)
        if bi % 2 == 1 and not build_up and b != 42.5:
            put('drums', clap(), b, 0.5, send=0.25)
            put('drums', snare(tail=0.1), b, 0.22)
        if not build_up and not calm:
            put('drums', hat(open_=b >= 24.0), b + 0.25, 0.16 if b >= 24 else 0.2, pan=0.2)
            for off in (0.125, 0.375):
                put('drums', hat(), b + off, 0.07, pan=-0.25)
        # rolling bass on the three 16ths after each kick
        ch = chord_at(b)
        f = hz(ROOT_NOTE[ch])
        for j, off in enumerate((0.125, 0.25, 0.375)):
            oct_ = 2 if (j == 2 and bi % 2 == 1) else 1
            cut = 350 + 600 * min(1, (b - 40) / 2) if build_up else 750
            put('bass', bass_note(f * oct_, 0.1, cutoff=cut), b + off, (0.85, 0.75, 0.7)[j])
    for s, ch in GROOVE:
        cut = 1700 if s < 24 else 2600
        if s == 40:
            p = pad(VOICING[ch], 2.0, a=0.08, r=0.3, cutoff=8000)
            p = np.stack([svf(c, np.geomspace(500, 4500, len(p)), 0.9) for c in p.T], 1)
        else:
            p = pad(VOICING[ch], 2.0, a=0.03, r=0.3, cutoff=cut)
        put('pads', p, s, 0.42, send=0.3)
    # arp: 16th plucks with a ping-pong echo (added at mixdown)
    for t0, t1 in ((24.0, 36.0), (38.0, 40.0), (45.0, 46.0)):
        for i, b in enumerate(beats(t0, t1, 0.125)):
            seq = ARP[chord_at(b)]
            nt = seq[i % len(seq)]
            put('keys', pluck(hz(nt), 0.35, bright=0.8, decay=0.28), b, 0.16 if i % 4 else 0.22, pan=0.25 * np.sin(i * 0.9), send=0.25)


def cues():
    # S03 drop
    put('fx', boom(75, 28, 1.3, 3.5), 16.0, 0.9)
    put('fx', crash(2.0), 16.0, 0.35, send=0.4)
    # S04 whip + one blip per awakened expert cluster
    put('fx', whoosh(0.36, peak=0.5, f_lo=500, f_hi=5000, q=0.9, pan=(-0.9, 0.9)), 17.82, 0.55)
    for k, nt in enumerate(['D5', 'F5', 'G5', 'A5', 'C6', 'D6', 'F6', 'A6']):
        put('keys', pluck(hz(nt), 0.8, bright=0.4, decay=0.5) + bell(hz(nt), 0.8, index=0.8, tau=0.4) * 0.5, 18.0 + 0.5 * k, 0.2, pan=(-0.4, 0.4)[k % 2], send=0.45)
    # S05 defocus swell, code typing, panel pass-through, FPV dive, scan hum
    put('fx', swell(0.6, 2500), 21.4, 0.25, send=0.4)
    t = 22.15
    while t < 24.8:
        put('foley', key_click(0.5), t, 0.18, pan=rng.uniform(-0.5, 0.5))
        t += rng.uniform(0.05, 0.14)
    put('fx', whoosh(0.75, peak=0.85, f_lo=300, f_hi=4500, pan=(0, 0)), 24.3, 0.45)
    put('fx', crash(0.5), 24.97, 0.2)
    put('keys', bell(hz('E6'), 1.4, index=1.6, tau=0.5), 24.97, 0.12, send=0.5)
    put('fx', whoosh(1.4, peak=0.25, f_lo=150, f_hi=900, q=0.8, pan=(0.3, -0.3)), 25.0, 0.4)
    n = ns(2.3)
    tt = T(n)
    put('fx', pan2((sine(110, n) + 0.4 * sine(220, n)) * (0.6 + 0.4 * np.sin(2 * np.pi * 7 * tt)) * ar(n, 0.3, 0.4), 0), 25.0, 0.06)
    # S06 spin whoosh, extrusion "print head" tones, meshing gear ticks
    n = ns(0.65)
    put('fx', whoosh(0.65, peak=0.5, f_lo=300, f_hi=3500, pan=(0, 0)) * pan2(np.ones(n), np.sin(np.linspace(0, 3 * np.pi, n)) * 0.8) / np.sqrt(2), 27.7, 0.5)
    for t0, d in ((28.95, 0.7), (29.3, 0.6)):
        n = ns(d)
        tt = T(n)
        f = np.geomspace(600, 1400, n)
        put('fx', (sine(f, n) + 0.3 * sine(2 * f, n)) * (0.7 + 0.3 * np.sin(2 * np.pi * 30 * tt)) * ar(n, 0.02, 0.1), t0, 0.05, pan=0.3 if t0 > 29 else -0.3)
    for b in beats(30.0, 32.0, 0.125):
        put('foley', tick(5200 + 600 * rng.random(), 0.005), b, 0.08, pan=rng.uniform(-0.3, 0.3))
    put('foley', tick(2400, 0.02), 29.9, 0.15, send=0.2)
    # S07 iris shimmer, beat-cut stabs, screener row ticks
    put('fx', swell(0.5, 3000), 31.5, 0.22, send=0.4)
    put('keys', bell(hz('A5'), 1.6, index=1.0, tau=0.6), 32.0, 0.12, send=0.5)
    for c in (33.0, 34.0, 35.0):
        put('keys', stab(VOICING[chord_at(c)][1:]), c, 0.3, send=0.25)
        put('fx', crash(0.25), c, 0.12)
    for i in range(10):
        put('foley', tick(2600 + 140 * i, 0.008), 34.05 + 0.065 * i, 0.1, pan=0.4)
    # S08 glitch burst + bleeps, scanner sweep, cards snapping home, ding, countdown ticks
    put('fx', pan2(bp(noise(ns(0.5)), 2000, 9000) * ar(ns(0.5), 0.2, 0.25), 0), 35.75, 0.25)
    t = 36.0
    while t < 37.65:
        put('fx', bleep(rng.choice([880, 1320, 1760, 2640, 3520]), rng.uniform(0.015, 0.05)), t, 0.18, pan=rng.uniform(-0.8, 0.8))
        t += rng.uniform(0.04, 0.16)
    put('fx', whoosh(0.55, peak=0.6, f_lo=600, f_hi=6000, q=1.4, pan=(-0.9, 0.9)), 37.68, 0.4)
    for i in range(24):
        put('foley', tick(1800 + 900 * rng.random(), 0.01), 37.72 + 0.48 * i / 23 + rng.uniform(-0.01, 0.01), 0.12, pan=-0.8 + 1.6 * i / 23)
    put('fx', crash(1.2), 38.0, 0.25, send=0.3)
    put('keys', layer(bell(hz('A6'), 2.4, index=1.5, tau=0.9), bell(hz('E7'), 2.0, index=1.0, tau=0.7) * 0.5), 38.25, 0.22, send=0.5)
    for i in range(12):
        put('foley', tick(3000, 0.006), 38.3 + 0.05 * i, 0.06)
    # S09 sweep whoosh, build, pass-through hit, slam
    put('fx', whoosh(0.6, peak=0.5, f_lo=400, f_hi=6000, q=1.0, pan=(-0.9, 0.9)), 39.7, 0.45)
    put('fx', pan2(riser(1.7, 400, 9000, 2.5, tone=(hz('G2'), hz('G5'), 0.3)), 0), 40.3, 0.55, send=0.15)
    t, k = 41.0, 0
    while t < 42.0:
        put('drums', snare(tail=0.08), t, 0.2 + 0.45 * (t - 41.0), pan=0.1 * (-1) ** k)
        t += 0.125 if t < 41.5 else 0.0625
        k += 1
    put('fx', whoosh(0.5, peak=0.92, f_lo=400, f_hi=7000, q=0.8, pan=(0, 0)), 41.55, 0.6)
    put('fx', boom(85, 30, 0.9, 3.0), 42.0, 0.8)
    put('fx', crash(1.6), 42.0, 0.35, send=0.4)
    put('fx', whoosh(0.5, peak=0.08, f_lo=300, f_hi=6000, q=0.8, pan=(0, 0)), 42.0, 0.45)
    put('keys', stab(VOICING['Bb'][1:], 0.3), 42.42, 0.35, send=0.3)
    put('drums', clap(), 42.42, 0.5, send=0.3)
    # S10 LOW / HIGH / MAX
    for k, (b, f0) in enumerate(((44.0, 80), (44.5, 105), (45.0, 140))):
        put('drums', tom(f0, 0.4), b, 0.8)
        put('drums', kick(punch=1.2), b, 0.9)
        KICKS.append(b)
        put('keys', stab([('C3', 'G3', 'C4'), ('E3', 'C4', 'E4'), ('G3', 'C4', 'E4', 'G4')][k], 0.3, 3000 + 1500 * k), b, 0.35, send=0.3)
    put('fx', boom(95, 32, 0.9, 3.0), 45.0, 0.7)
    put('fx', crash(1.4), 45.0, 0.35, send=0.4)
    n = ns(0.7)
    put('fx', pan2(hp(noise(n), 5000) * (rng.random(n) > 0.985) * 3.0 * np.exp(-T(n) / 0.3), 0.2), 45.0, 0.3)
    put('fx', crash(0.3), 44.0, 0.15)
    # montage: a punch every quarter beat
    for k, b in enumerate(beats(46.0, 47.5, 0.25)):
        put('drums', kick(punch=1.3), b, 0.95)
        put('drums', snare(tail=0.09), b, 0.35)
        put('fx', crash(0.18), b, 0.18)
        put('fx', boom(70 + 8 * k, 35, 0.25, 0.8), b, 0.4)
        KICKS.append(b)
    # tape stop is applied to the music buses at mixdown


def breakdown():
    # 48–55.5 · open weights → converge: pads, plucked sparkles as the network lights up, long riser
    for s, notes, d in ((48.0, ['D3', 'A3', 'E4', 'F4', 'C5'], 2.0), (50.0, ['Bb2', 'F3', 'A3', 'D4', 'C5'], 2.0),
                        (52.0, ['G2', 'D3', 'F3', 'Bb3', 'A4'], 2.0), (54.0, ['A2', 'E3', 'G3', 'D4', 'E5'], 0.75),
                        (54.75, ['A2', 'E3', 'G3', 'C#4', 'E5'], 0.75)):
        put('pads', pad(notes, d, a=0.5 if s < 54 else 0.05, r=0.5, cutoff=1900), s, 0.42, send=0.45)
    n = ns(7.5)
    sub = sine(hz('D2'), n) * ar(n, 0.6, 0.2)
    put('bass', pan2(sub, 0), 48.0, 0.3)
    penta = ['D5', 'F5', 'G5', 'A5', 'C6', 'D6', 'F6', 'G6', 'A6']
    for i in range(44):
        t = 48.1 + 4.4 * rng.beta(1.6, 2.2)
        put('keys', pluck(hz(rng.choice(penta)), 0.9, bright=0.3, decay=0.6), t, 0.1, pan=rng.uniform(-0.8, 0.8), send=0.6)
    for i, b in enumerate(beats(48.0, 52.0, 0.25)):
        nt = ['D4', 'A4', 'E5', 'F5'][i % 4]
        put('keys', pluck(hz(nt), 0.6, bright=0.5, decay=0.4), b, 0.08, pan=0.3 * (-1) ** i, send=0.4)
    r = riser(5.0, 200, 9000, 2.8, q=1.3, tone=(hz('A2'), hz('A5'), 0.22))
    n = len(r)
    u = np.linspace(0, 1, n)
    swirl = np.sin(2 * np.pi * np.cumsum(0.3 + 6 * u ** 2) / SR) * 0.85
    put('fx', pan2(r, swirl), 50.5, 0.55, send=0.2)
    t, k = 54.0, 0
    while t < 55.5:
        put('drums', snare(tail=0.08), t, 0.15 + 0.4 * (t - 54.0) / 1.5, pan=0.1 * (-1) ** k)
        t += 0.125 if t < 54.75 else 0.0625
        k += 1
    for b in beats(54.0, 55.5):
        put('drums', kick(punch=0.8), b, 0.6)


def finale():
    # 56–64 · end card: the hit, a D major resolution, emblem / wordmark / sweep / channel cues
    put('fx', boom(78, 26, 1.7, 5.0), 56.0, 1.0)
    put('fx', crash(2.6), 56.0, 0.42, send=0.6)
    put('drums', kick(punch=1.4, tail=0.5), 56.0, 1.0)
    put('drums', clap(), 56.0, 0.4, send=0.6)
    hit = pad(['D2', 'A2', 'D3', 'F#3', 'A3', 'E4', 'F#4'], 6.6, a=0.01, r=1.4, cutoff=2600)
    n = len(hit)
    hit *= (0.55 + 0.45 * np.exp(-T(n) / 1.2))[:, None]
    put('pads', hit, 56.0, 0.55, send=0.5)
    put('pads', pad(['A3', 'D4', 'E4', 'F#4', 'A4'], 5.2, a=1.6, r=1.4, cutoff=3200), 56.6, 0.3, send=0.6)
    n = ns(7.4)
    put('bass', pan2(sine(hz('D1'), n) * 0.7 + sine(hz('D2'), n) * 0.5, 0) * (np.exp(-T(n) / 3.0) * ar(n, 0.005, 1.0))[:, None], 56.0, 0.55)
    put('keys', layer(bell(hz('A5'), 3.0, index=1.6, tau=1.2), bell(hz('E6'), 2.5, index=1.2, tau=1.0) * 0.6), 56.97, 0.2, pan=-0.4, send=0.7)
    for i in range(8):
        put('foley', tick(3600 + 260 * i, 0.009), 57.222 + 0.045 * i, 0.16, pan=-0.35 + 0.1 * i, send=0.3)
    n = ns(0.75)
    u = np.linspace(0, 1, n)
    sh = svf(noise(n), np.geomspace(3500, 10000, n), 1.2, 'bp') * np.sin(np.pi * u) ** 1.5
    put('fx', pan2(sh, np.linspace(-0.8, 0.8, n)), 57.7, 0.3, send=0.5)
    put('keys', pad(['D5', 'E5', 'F#5', 'A5'], 2.0, a=0.6, r=1.5, cutoff=5000, voices=3, cents=8), 58.1, 0.12, send=0.7)
    for k, nt in enumerate(['D6', 'F#6', 'A6']):
        put('keys', bell(hz(nt), 3.0, index=1.0, tau=1.3), 60.0 + 0.07 * k, 0.11, pan=(-0.3, 0, 0.3)[k], send=0.7)
    put('keys', bell(hz('E7'), 2.5, index=0.8, tau=1.1), 62.0, 0.09, pan=-0.4, send=0.8)


# ------------------------------------------------------------------------------------------------
# bus processing
# ------------------------------------------------------------------------------------------------
def sidechain(x, depth, release=0.16, attack=0.004):
    env = np.ones(N)
    n = ns(0.6)
    t = T(n)
    shape = 1 - depth * np.minimum(1, t / attack) * np.exp(-t / release)
    for k in KICKS:
        i0 = ns(k)
        i1 = min(N, i0 + n)
        env[i0:i1] = np.minimum(env[i0:i1], shape[:i1 - i0])
    return x * env[:, None]


def glitch(x, t0, t1, seed=36):
    """Beat-repeat / bitcrush / reverse / dropout on a 1/16 grid; calmer toward the end."""
    r = np.random.default_rng(seed)
    y = x.copy()
    step = ns(0.125)
    fade = ns(0.002)
    for i0 in range(ns(t0), ns(t1), step):
        i1 = min(ns(t1), i0 + step)
        seg = x[i0:i1].copy()
        calm = (i0 / SR - t0) / (t1 - t0)
        op = r.choice(['repeat', 'crush', 'reverse', 'drop', 'pass'], p=np.array([0.32, 0.26, 0.14, 0.12, 0.16]) * [1, 1, 1, 1, 1 + 4 * calm] / (1 + 0.64 * calm))
        if op == 'repeat':
            L = ns(r.choice([0.03125, 0.0625]))
            seg = np.tile(seg[:L], (len(seg) // L + 1, 1))[:len(seg)]
        elif op == 'crush':
            hold = r.integers(6, 14)
            seg = np.repeat(seg[::hold], hold, axis=0)[:len(seg)]
            seg = np.round(seg * 12) / 12
        elif op == 'reverse':
            seg = seg[::-1]
        elif op == 'drop':
            seg *= 0.05
        if fade and len(seg) > 2 * fade:
            ramp = np.linspace(0, 1, fade)[:, None]
            seg[:fade] *= ramp
            seg[-fade:] *= ramp[::-1]
        y[i0:i1] = seg
    return y


def gate(x, t0, t1, floor=0.0, fade=0.004):
    i0, i1, f = ns(t0), ns(t1), ns(fade)
    g = np.ones(N)
    g[i0:i1] = floor
    g[max(0, i0 - f):i0] = np.linspace(1, floor, i0 - max(0, i0 - f))
    g[i1:i1 + f] = np.linspace(floor, 1, len(g[i1:i1 + f]))
    return x * g[:, None]


def chop(x, t0, t1, step=0.25, open_=0.16, floor=0.3):
    g = np.ones(N)
    for b in beats(t0, t1, step):
        i0 = ns(b)
        seg = np.full(ns(step), floor)
        seg[:ns(open_)] = 1.0
        seg[ns(open_):ns(open_) + ns(0.02)] = np.linspace(1, floor, ns(0.02))
        g[i0:i0 + len(seg)] = seg[:len(g[i0:i0 + len(seg)])]
    return x * g[:, None]


def tape_stop(x, t0=47.5, t1=48.0, D=0.62):
    """Same deceleration curve as the picture's tape-stop (engine.localTime)."""
    i0, i1 = ns(t0), ns(t1)
    e = T(i1 - i0)
    src = (t0 + e - e * e / (2 * D)) * SR
    y = x.copy()
    for c in range(2):
        y[i0:i1, c] = np.interp(src, np.arange(N), x[:, c])
    y[i0:i1] *= ((1 - e / (t1 - t0)) ** 0.6)[:, None]
    y[i0:i1] = lp(y[i0:i1], 3000, 1)
    y[i1:] = 0 if False else y[i1:]
    return y


def pingpong(x, delay=0.375, fb=0.38, taps=6):
    m = x.mean(1)
    y = np.zeros_like(x)
    d = ns(delay)
    src = m
    for k in range(1, taps + 1):
        src = lp(src, 5000 - 500 * k, 1)
        if k * d >= N:
            break
        y[k * d:, k % 2] += src[:N - k * d] * fb ** k
    return y


def make_ir(rt60=2.6, pre=0.022, dur=3.6, seed=5):
    n = ns(dur)
    t = T(n)
    ir = np.zeros((n, 2))
    for c in range(2):
        r = np.random.default_rng(seed + c)
        nz = r.standard_normal(n)
        ir[:, c] = lp(nz, 700) * np.exp(-6.91 * t / (rt60 * 1.2)) + bp(nz, 700, 4500) * np.exp(-6.91 * t / rt60) \
            + hp(nz, 4500) * np.exp(-6.91 * t / (rt60 * 0.45)) * 0.6
    ir[:ns(pre)] = 0
    for d, g in ((0.011, 0.5), (0.019, 0.35), (0.029, 0.3), (0.041, 0.22)):
        ir[ns(pre + d), 0] += g * 6
        ir[ns(pre + d * 1.13), 1] += g * 6
    ir /= np.sqrt((ir ** 2).sum(0, keepdims=True))
    return ir


def reverb(x, ir):
    m = x.mean(1)
    return np.stack([signal.fftconvolve(m, ir[:, c])[:N] for c in range(2)], 1)


# ------------------------------------------------------------------------------------------------
# mastering
# ------------------------------------------------------------------------------------------------
def lufs(x):
    """ITU-R BS.1770-4 integrated loudness (48 kHz K-weighting, gated)."""
    b1, a1 = [1.53512485958697, -2.69169618940638, 1.19839281085285], [1.0, -1.69065929318241, 0.73248077421585]
    b2, a2 = [1.0, -2.0, 1.0], [1.0, -1.99004745483398, 0.99007225036621]
    k = signal.lfilter(b2, a2, signal.lfilter(b1, a1, x, axis=0), axis=0)
    blk, hop = ns(0.4), ns(0.1)
    z = np.array([(k[i:i + blk] ** 2).mean(0).sum() for i in range(0, len(k) - blk, hop)])
    l = -0.691 + 10 * np.log10(z + 1e-12)
    z = z[l > -70]
    rel = -0.691 + 10 * np.log10(z.mean()) - 10
    z = z[-0.691 + 10 * np.log10(z) > rel]
    return -0.691 + 10 * np.log10(z.mean())


def true_peak(x):
    return np.abs(signal.resample_poly(x, 4, 1, axis=0)).max()


def compress(x, thresh_db=-16.0, ratio=2.0, attack=0.01, release=0.15):
    m = np.sqrt(signal.lfilter([1 - np.exp(-1 / (SR * 0.01))], [1, -np.exp(-1 / (SR * 0.01))], (x ** 2).mean(1)) + 1e-12)
    lvl = 20 * np.log10(m)
    gr = np.minimum(0, (thresh_db - lvl) * (1 - 1 / ratio))
    a, r = np.exp(-1 / (SR * attack)), np.exp(-1 / (SR * release))
    out = np.empty_like(gr)
    g = 0.0
    for i, v in enumerate(gr.tolist()):
        g = a * g + (1 - a) * v if v < g else r * g + (1 - r) * v
        out[i] = g
    return x * (10 ** (out / 20))[:, None]


def limit(x, ceiling=0.85, look=0.0015, release=0.08):
    peak = np.abs(x).max(1)
    g = np.minimum(1, ceiling / np.maximum(peak, 1e-9))
    La = ns(look)
    g = uniform_filter1d(minimum_filter1d(g, 2 * La + 1), La + 1)
    red = (1 - g).tolist()
    a = np.exp(-1 / (SR * release))
    out = np.empty(N)
    s = 0.0
    for i, v in enumerate(red):
        s = v if v > s else s * a
        out[i] = s
    return x * (1 - out)[:, None]


def main():
    intro()
    prompt()
    build()
    groove()
    cues()
    breakdown()
    finale()

    bus['bass'] = sidechain(bus['bass'], 0.75)
    bus['pads'] = sidechain(bus['pads'], 0.55, release=0.22)
    bus['keys'][ns(16):] = sidechain(bus['keys'], 0.25)[ns(16):]
    bus['keys'] += pingpong(bus['keys']) * 0.55
    for b in MUSIC:
        x = glitch(bus[b], 36.0, 37.7)
        x = gate(x, 37.7, 38.0, 0.0, 0.01)
        x = chop(x, 46.0, 47.5)
        bus[b] = tape_stop(x)
    gains = {'drums': 0.9, 'bass': 0.85, 'pads': 0.8, 'keys': 0.9, 'fx': 0.9, 'foley': 0.9}
    sends = {'drums': 0.1, 'bass': 0.0, 'pads': 0.3, 'keys': 0.3, 'fx': 0.2, 'foley': 0.1}
    dry = sum(bus[b] * g for b, g in gains.items())
    wet_in = sum(bus[b] * sends[b] for b in gains) + bus['send']
    mix = dry + reverb(hp(wet_in, 180), make_ir()) * 0.5
    mix = gate(mix, 15.5, 16.0, 0.0, 0.006)
    mix = gate(mix, 55.5, 56.0, 0.0, 0.006)
    # the point of light: a lone ping that rings across the silent half-beat
    n = ns(0.9)
    ping = pan2(bell(hz('A6'), 0.9, index=0.6, tau=0.3), 0) * 0.08
    mix[ns(55.35):ns(55.35) + n] += ping[:N - ns(55.35)]
    mix = hp(mix, 24, 2)
    mix = compress(mix)
    for _ in range(3):
        g = 10 ** ((-14.0 - lufs(mix)) / 20)
        mix = limit(mix * g, ceiling=0.84)
        tp = true_peak(mix)
        if tp > 0.89:
            mix *= 0.88 / tp
    n = ns(1.0)
    mix[N - n:] *= (0.5 + 0.5 * np.cos(np.linspace(0, np.pi, n)))[:, None]
    mix[:ns(0.02)] *= np.linspace(0, 1, ns(0.02))[:, None]
    print(f'integrated {lufs(mix):.2f} LUFS · true peak {20 * np.log10(true_peak(mix)):.2f} dBTP')
    os.makedirs(OUT, exist_ok=True)
    pcm = np.clip(mix + (rng.random(mix.shape) - rng.random(mix.shape)) / 32768, -1, 1)
    wavfile.write(os.path.join(OUT, 'soundtrack.wav'), SR, (pcm * 32767).astype(np.int16))


if __name__ == '__main__':
    main()
