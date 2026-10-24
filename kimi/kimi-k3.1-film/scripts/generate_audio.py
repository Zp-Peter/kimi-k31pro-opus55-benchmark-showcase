#!/usr/bin/env python3
"""Generate the original, fully synthesized Kimi film score and film grain.

No samples or external media are used. Musical timing is based on 120 BPM
(0.5 s per beat), and every section/edit boundary lies on that beat grid.
"""

from pathlib import Path
import wave

import numpy as np
from PIL import Image
from scipy.signal import butter, fftconvolve, sosfilt


ROOT = Path(__file__).resolve().parents[1]
AUDIO_PATH = ROOT / "public" / "audio" / "kimi-original-score.wav"
GRAIN_PATH = ROOT / "public" / "assets" / "grain.png"

SR = 48_000
DURATION = 42.0
N = int(SR * DURATION)
BPM = 120
BEAT = 60.0 / BPM  # 0.5 seconds
SEED = 31_012_026
TARGET_PEAK = 10.0 ** (-1.0 / 20.0)
rng = np.random.default_rng(SEED)


def midi(note):
    return 440.0 * 2.0 ** ((note - 69.0) / 12.0)


def pan_gains(pan):
    angle = (np.clip(pan, -1.0, 1.0) + 1.0) * np.pi / 4.0
    return np.cos(angle), np.sin(angle)


def add(bus, signal, start, gain=1.0, pan=0.0):
    """Add mono/stereo audio at a time in seconds, trimming at file bounds."""
    signal = np.asarray(signal)
    start_index = int(round(start * SR))
    source_start = max(0, -start_index)
    dest_start = max(0, start_index)
    available = len(signal) - source_start
    if available <= 0 or dest_start >= N:
        return
    length = min(available, N - dest_start)
    source = signal[source_start:source_start + length]
    if source.ndim == 1:
        left, right = pan_gains(pan)
        bus[dest_start:dest_start + length, 0] += source * gain * left
        bus[dest_start:dest_start + length, 1] += source * gain * right
    else:
        bus[dest_start:dest_start + length] += source * gain


def envelope(length, attack, release):
    env = np.ones(length)
    attack_n = min(length, int(round(attack * SR)))
    release_n = min(length, int(round(release * SR)))
    if attack_n:
        env[:attack_n] = np.sin(np.linspace(0.0, np.pi / 2.0, attack_n)) ** 2
    if release_n:
        env[-release_n:] = np.cos(np.linspace(0.0, np.pi / 2.0, release_n)) ** 2
    return env


def grid(start, end, step):
    for index in range(int(round((end - start) / step))):
        yield start + index * step


HP_22 = butter(2, 22.0, btype="highpass", fs=SR, output="sos")
HP_HAT = butter(2, 6_500.0, btype="highpass", fs=SR, output="sos")
BP_SNARE = butter(2, [650.0, 12_000.0], btype="bandpass", fs=SR, output="sos")
BP_AIR = butter(2, [180.0, 8_000.0], btype="bandpass", fs=SR, output="sos")
LP_REVERB = butter(2, 7_200.0, btype="lowpass", fs=SR, output="sos")

music = np.zeros((N, 2), dtype=np.float64)
drums = np.zeros((N, 2), dtype=np.float64)
fx = np.zeros((N, 2), dtype=np.float64)
kick_times = []


def pad_chord(start, duration, notes, gain, brightness=0.5, attack=0.7, release=0.8):
    length = int(round(duration * SR))
    t = np.arange(length) / SR
    env = envelope(length, min(attack, duration * 0.45), min(release, duration * 0.45))
    stereo = np.zeros((length, 2))
    pans = np.linspace(-0.62, 0.62, len(notes))
    for voice, (note, pan) in enumerate(zip(notes, pans)):
        frequency = midi(note)
        left, right = pan_gains(pan)
        for channel, detune in enumerate((-0.0027, 0.0027)):
            phase = (
                2.0 * np.pi * frequency * (1.0 + detune) * t
                + 0.12 * np.sin(2.0 * np.pi * (0.11 + voice * 0.013) * t + voice)
            )
            tone = (
                np.sin(phase)
                + 0.30 * np.sin(2.0 * phase)
                + (0.10 + 0.07 * brightness) * np.sin(3.0 * phase)
                + (0.035 + 0.065 * brightness) * np.sin(4.0 * phase)
                + 0.035 * brightness * np.sin(5.0 * phase)
            ) / 1.55
            stereo[:, channel] += tone * (left if channel == 0 else right)
    stereo *= env[:, None] * gain / max(1, len(notes))
    add(music, stereo, start)


def pluck_tone(note, duration=0.62, brightness=0.6):
    length = int(round(duration * SR))
    t = np.arange(length) / SR
    frequency = midi(note)
    mod = np.sin(2.0 * np.pi * frequency * 2.005 * t) * np.exp(-t / 0.12)
    carrier = np.sin(2.0 * np.pi * frequency * t + (0.30 + brightness * 0.45) * mod)
    glass = 0.24 * np.sin(2.0 * np.pi * frequency * 2.0 * t) * np.exp(-t / 0.16)
    glass += 0.09 * brightness * np.sin(2.0 * np.pi * frequency * 3.0 * t) * np.exp(-t / 0.10)
    env = (1.0 - np.exp(-t / 0.004)) * np.exp(-t / (0.19 + duration * 0.18))
    env *= envelope(length, 0.003, 0.055)
    return (carrier + glass) * env


def add_pluck(start, note, gain=0.09, pan=0.0, brightness=0.6, duration=0.62, echoes=True):
    tone = pluck_tone(note, duration, brightness)
    add(music, tone, start, gain, pan)
    if echoes:
        add(music, tone, start + BEAT, gain * 0.22, -pan * 0.85)
        add(music, tone, start + 2.0 * BEAT, gain * 0.075, pan * 0.45)


def bass_tone(frequency, duration, warm=False):
    length = int(round(duration * SR))
    t = np.arange(length) / SR
    phase = 2.0 * np.pi * frequency * t
    tone = np.sin(phase) + 0.19 * np.sin(2.0 * phase) + 0.055 * np.sin(3.0 * phase)
    if warm:
        tone += 0.055 * np.sin(4.0 * phase)
    env = envelope(length, 0.012, min(0.15, duration * 0.4))
    env *= np.minimum(1.0, 0.78 + 0.35 * (1.0 - np.exp(-t / 0.06)))
    return np.tanh(tone * 1.12) * env


def add_bass(start, frequency, duration=0.44, gain=0.23, warm=False):
    add(music, bass_tone(frequency, duration, warm), start, gain, 0.0)


def kick_tone():
    duration = 0.46
    t = np.arange(int(duration * SR)) / SR
    frequency = 45.0 + 105.0 * np.exp(-t / 0.025)
    phase = 2.0 * np.pi * np.cumsum(frequency) / SR
    body = np.sin(phase) * np.exp(-t / 0.17)
    body += 0.20 * np.sin(2.0 * np.pi * 45.0 * t) * np.exp(-t / 0.25)
    click = rng.standard_normal(len(t)) * np.exp(-t / 0.0035) * 0.055
    return np.tanh((body + click) * 1.45) * envelope(len(t), 0.001, 0.055)


def snare_tone():
    duration = 0.30
    t = np.arange(int(duration * SR)) / SR
    noise = sosfilt(BP_SNARE, rng.standard_normal(len(t)))
    noise /= max(1e-9, np.std(noise))
    body = np.sin(2.0 * np.pi * 178.0 * t) * np.exp(-t / 0.050)
    snap = noise * np.exp(-t / 0.072) * 0.44 + body * 0.36
    return np.tanh(snap) * envelope(len(t), 0.001, 0.045)


def hat_tone(open_hat=False):
    duration = 0.20 if open_hat else 0.065
    t = np.arange(int(duration * SR)) / SR
    noise = sosfilt(HP_HAT, rng.standard_normal(len(t)))
    noise /= max(1e-9, np.std(noise))
    decay = 0.072 if open_hat else 0.018
    env = (1.0 - np.exp(-t / 0.001)) * np.exp(-t / decay)
    env *= envelope(len(t), 0.001, 0.012 if open_hat else 0.008)
    metallic = 0.08 * np.sin(2.0 * np.pi * 8_317.0 * t) * np.exp(-t / decay)
    return (noise * 0.33 + metallic) * env


def add_kick(start, gain=0.36):
    add(drums, kick_tone(), start, gain)
    kick_times.append(start)


def add_snare(start, gain=0.13, pan=0.0):
    add(drums, snare_tone(), start, gain, pan)


def add_hat(start, gain=0.035, pan=0.0, open_hat=False):
    add(drums, hat_tone(open_hat), start, gain, pan)


def add_drone():
    duration = 5.0
    t = np.arange(int(duration * SR)) / SR
    env = envelope(len(t), 1.8, 0.8)
    stereo = np.zeros((len(t), 2))
    for channel, detune in enumerate((-0.002, 0.002)):
        signal = np.zeros(len(t))
        for index, (frequency, level) in enumerate(((36.71, 0.55), (73.42, 0.30), (110.0, 0.13))):
            phase = 2.0 * np.pi * frequency * (1.0 + detune * (index + 1)) * t
            phase += 0.16 * np.sin(2.0 * np.pi * (0.07 + index * 0.025) * t + channel)
            signal += level * (np.sin(phase) + 0.16 * np.sin(2.0 * phase))
        stereo[:, channel] = signal
    stereo *= env[:, None] * (0.80 + 0.20 * np.sin(2.0 * np.pi * 0.10 * t))[:, None]
    add(music, stereo, 0.0, 0.12)


def add_riser(end, duration=2.0, gain=0.10, bright=False):
    length = int(round(duration * SR))
    t = np.arange(length) / SR
    progress = t / duration
    start_frequency = 240.0 if bright else 150.0
    end_frequency = 3_200.0 if bright else 1_650.0
    frequency = start_frequency * (end_frequency / start_frequency) ** progress
    phase = 2.0 * np.pi * np.cumsum(frequency) / SR
    noise = sosfilt(BP_AIR, rng.standard_normal(length))
    noise /= max(1e-9, np.std(noise))
    tonal = np.sin(phase) + 0.25 * np.sin(2.003 * phase)
    env = np.sin(np.linspace(0.0, np.pi / 2.0, length)) ** 2
    env *= envelope(length, 0.08, 0.035)
    mono = (0.20 * tonal + 0.19 * noise) * env
    stereo = np.column_stack((
        mono * (0.82 + 0.18 * np.sin(2.0 * np.pi * 0.7 * t)),
        mono * (0.82 + 0.18 * np.cos(2.0 * np.pi * 0.7 * t)),
    ))
    add(fx, stereo, end - duration, gain)


def add_whoosh(center, gain=0.11):
    duration = 2.0
    length = int(duration * SR)
    t = np.arange(length) / SR
    noise = sosfilt(BP_AIR, rng.standard_normal(length))
    noise /= max(1e-9, np.std(noise))
    env = np.exp(-((t - duration / 2.0) / 0.38) ** 2)
    env *= envelope(length, 0.05, 0.08)
    sweep = np.sin(2.0 * np.pi * (190.0 * t + 170.0 * t ** 2)) * 0.12
    mono = (noise * 0.30 + sweep) * env
    pan = np.linspace(-0.75, 0.75, length)
    stereo = np.column_stack((mono * np.cos((pan + 1.0) * np.pi / 4.0),
                              mono * np.sin((pan + 1.0) * np.pi / 4.0)))
    add(fx, stereo, center - 1.0, gain)


def add_impact(start, gain=0.24, warm=False):
    duration = 1.8
    t = np.arange(int(duration * SR)) / SR
    base = 36.71 if warm else 32.0
    frequency = base + (62.0 if warm else 92.0) * np.exp(-t / 0.075)
    phase = 2.0 * np.pi * np.cumsum(frequency) / SR
    boom = np.sin(phase) * np.exp(-t / (0.72 if warm else 0.48))
    noise = sosfilt(BP_SNARE, rng.standard_normal(len(t)))
    noise /= max(1e-9, np.std(noise))
    noise *= np.exp(-t / 0.055) * (0.09 if warm else 0.17)
    body = np.tanh((boom + noise) * 1.35) * envelope(len(t), 0.002, 0.24)
    stereo = np.column_stack((body, body))
    stereo[:, 1] *= 0.97
    add(fx, stereo, start, gain)


def add_ui_blip(start, frequency, pan):
    duration = 0.13
    t = np.arange(int(duration * SR)) / SR
    phase = 2.0 * np.pi * (frequency * t + 950.0 * t ** 2)
    tone = np.sin(phase) + 0.18 * np.sin(2.01 * phase)
    env = envelope(len(t), 0.003, 0.055) * np.exp(-t / 0.055)
    tone *= env
    add(fx, tone, start, 0.038, pan)
    add(fx, tone, start + BEAT, 0.010, -pan)


def add_logo_note(start, note, duration, gain, pan):
    length = int(round(duration * SR))
    t = np.arange(length) / SR
    frequency = midi(note)
    phase = 2.0 * np.pi * frequency * t
    tone = np.sin(phase + 0.10 * np.sin(2.0 * np.pi * frequency * 2.0 * t) * np.exp(-t / 0.35))
    tone += 0.24 * np.sin(2.0 * phase) * np.exp(-t / 0.55)
    tone += 0.09 * np.sin(3.0 * phase) * np.exp(-t / 0.30)
    env = (1.0 - np.exp(-t / 0.018)) * np.exp(-t / 0.95)
    env *= envelope(length, 0.012, 0.38)
    tone *= env
    add(music, tone, start, gain, pan)
    add(music, tone, start + BEAT, gain * 0.18, -pan)


# Harmonic map: all segment boundaries are on the 0.5 s edit grid.
CHORDS = {
    "Dm9": ([50, 57, 60, 64, 65], [62, 65, 69, 72, 76], 36.71),
    "Bbmaj9": ([46, 53, 57, 60, 62], [58, 62, 65, 69, 72], 29.14),
    "Fadd9": ([48, 53, 57, 60, 67], [60, 65, 67, 69, 72], 43.65),
    "Cadd9": ([48, 52, 55, 62, 67], [60, 62, 67, 72, 76], 32.70),
    "Dsus": ([50, 57, 62, 64, 67], [62, 64, 67, 69, 74], 36.71),
    "Dadd9": ([50, 54, 57, 62, 64], [62, 66, 69, 74, 76], 36.71),
}
SEGMENTS = [
    (0.0, 5.0, "Dm9"), (5.0, 10.0, "Dm9"),
    (10.0, 12.0, "Dm9"), (12.0, 14.0, "Bbmaj9"), (14.0, 16.0, "Fadd9"),
    (16.0, 18.0, "Dm9"), (18.0, 20.0, "Bbmaj9"),
    (20.0, 22.0, "Fadd9"), (22.0, 24.0, "Cadd9"), (24.0, 25.0, "Dsus"),
    (25.0, 27.0, "Fadd9"), (27.0, 29.0, "Cadd9"),
    (29.0, 31.0, "Dm9"), (31.0, 32.0, "Bbmaj9"),
    (32.0, 33.0, "Dm9"), (33.0, 34.0, "Bbmaj9"),
    (34.0, 35.0, "Fadd9"), (35.0, 36.0, "Cadd9"), (36.0, 37.0, "Dm9"),
    (37.0, 42.0, "Dadd9"),
]


def chord_at(time):
    for start, end, name in SEGMENTS:
        if start <= time < end:
            return name
    return "Dadd9"


add_drone()
for start, end, name in SEGMENTS:
    notes = CHORDS[name][0]
    duration = end - start
    if start == 0.0:
        pad_chord(start, duration, notes, 0.095, 0.25, 1.8, 0.8)
    elif start == 37.0:
        pad_chord(start, duration, notes, 0.255, 0.42, 1.1, 1.5)
    elif 25.0 <= start < 32.0:
        pad_chord(start, duration, notes, 0.205, 0.95)
    elif start >= 32.0:
        pad_chord(start, duration, notes, 0.155, 0.65, 0.30, 0.35)
    elif start >= 16.0:
        pad_chord(start, duration, notes, 0.175, 0.60)
    else:
        pad_chord(start, duration, notes, 0.155 if start >= 10.0 else 0.185, 0.48)

# Opening pulse and the restrained brand-reveal motif.
for index, start in enumerate(grid(0.5, 5.0, 1.0)):
    add_bass(start, 36.71, 0.34, 0.115)
for start, note, pan in ((5.0, 74, -0.25), (5.5, 77, 0.20), (6.0, 81, -0.10), (6.5, 76, 0.28)):
    add_pluck(start, note, 0.095, pan, 0.52, 1.1)
for index, start in enumerate(grid(7.0, 10.0, 0.5)):
    add_pluck(start, CHORDS["Dm9"][1][(index * 2) % 5], 0.065, (-1) ** index * 0.32)
for start in grid(5.0, 10.0, 1.0):
    add_bass(start, 36.71, 0.72, 0.16)

# Arpeggios: sparse after 10, full motion from 16, brighter from 25.
pattern = [0, 2, 1, 3, 2, 4, 3, 1]
for start, end, step in ((10.0, 16.0, 0.5), (16.0, 25.0, 0.25),
                         (25.0, 32.0, 0.25), (32.0, 37.0, 0.25)):
    for index, start_time in enumerate(grid(start, end, step)):
        name = chord_at(start_time)
        arp = CHORDS[name][1]
        note = arp[pattern[index % len(pattern)] % len(arp)]
        if 25.0 <= start_time < 32.0 and index % 4 in (2, 3):
            note += 12
        if 32.0 <= start_time < 37.0 and index % 4 == 3:
            note += 12
        gain = 0.068 if start < 16.0 else 0.074
        if 25.0 <= start_time < 32.0:
            gain = 0.079
        if start_time >= 32.0:
            gain = 0.070
        pan = 0.56 * np.sin(index * 1.73 + start)
        add_pluck(start_time, note, gain, pan, 0.92 if start_time >= 25.0 else 0.65,
                  0.48 if step == 0.25 else 0.62)

# Sub-bass enters with rhythm at 10 and drives the full groove from 16.
for start in grid(10.0, 14.0, 1.0):
    add_bass(start, CHORDS[chord_at(start)][2], 0.76, 0.205)
for start in grid(14.0, 16.0, 0.5):
    add_bass(start, CHORDS[chord_at(start)][2], 0.42, 0.215)
ratios = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 1.0]
for index, start in enumerate(grid(16.0, 32.0, 0.5)):
    root = CHORDS[chord_at(start)][2]
    add_bass(start, root * ratios[index % len(ratios)], 0.41, 0.225)
for index, start in enumerate(grid(32.0, 37.0, 0.25)):
    root = CHORDS[chord_at(start)][2]
    offbeat = index % 2 == 1
    add_bass(start, root * (2.0 if offbeat else 1.0), 0.18 if offbeat else 0.40,
             0.105 if offbeat else 0.22)
add_bass(37.0, 36.71, 2.2, 0.185, warm=True)
add_bass(39.0, 36.71, 2.7, 0.16, warm=True)

# Rhythm enters at 10, opens fully at 16, and intensifies for the montage.
for beat_index, start in enumerate(grid(10.0, 16.0, 0.5)):
    if start >= 14.0 or beat_index % 2 == 0:
        add_kick(start, 0.30 if start < 14.0 else 0.33)
    if start >= 12.0 and beat_index % 4 in (1, 3):
        add_snare(start, 0.105)
for index, start in enumerate(grid(10.0, 16.0, 0.25)):
    if start < 12.0 and index % 2:
        continue
    add_hat(start, 0.025 if index % 2 else 0.034, 0.20 * np.sin(index * 1.9))

for beat_index, start in enumerate(grid(16.0, 32.0, 0.5)):
    add_kick(start, 0.345 if beat_index % 4 == 0 else 0.315)
    if beat_index % 4 in (1, 3):
        add_snare(start, 0.125)
for index, start in enumerate(grid(16.0, 32.0, 0.25)):
    accent = [1.0, 0.46, 0.72, 0.50, 0.88, 0.46, 0.70, 0.56][index % 8]
    add_hat(start, 0.036 * accent, 0.28 * np.sin(index * 2.2))
for start in grid(17.75, 32.0, 2.0):
    add_hat(start, 0.033, -0.18, open_hat=True)

for beat_index, start in enumerate(grid(32.0, 37.0, 0.5)):
    add_kick(start, 0.35 if beat_index % 4 == 0 else 0.32)
    if beat_index % 4 in (1, 3):
        add_snare(start, 0.135)
for start in (33.75, 35.75, 36.75):
    add_kick(start, 0.19)
for index, start in enumerate(grid(32.0, 37.0, 0.125)):
    accent = 1.0 if index % 4 == 0 else (0.62 if index % 2 == 0 else 0.38)
    add_hat(start, 0.035 * accent, 0.38 * np.sin(index * 1.37))
for index, start in enumerate((33.75, 34.75, 35.75, 36.25, 36.75)):
    add_snare(start, 0.038 + index * 0.009, (-1) ** index * 0.12)

# Designed transitions, always centered or ending on exact section boundaries.
add_riser(5.0, 2.0, 0.085)
add_impact(5.0, 0.235)
add_riser(10.0, 2.0, 0.070)
add_whoosh(10.0, 0.075)
add_riser(16.0, 2.0, 0.095)
add_impact(16.0, 0.225)
add_whoosh(20.0, 0.115)
add_riser(25.0, 2.0, 0.085, bright=True)
add_whoosh(25.0, 0.090)
add_riser(32.0, 2.0, 0.115, bright=True)
add_impact(32.0, 0.245)
add_riser(37.0, 2.0, 0.065)
add_whoosh(37.0, 0.080)
add_impact(37.0, 0.18, warm=True)

for index, (start, frequency) in enumerate(((11.5, 1_250.0), (15.0, 1_520.0),
                                            (18.5, 1_380.0), (23.5, 1_660.0),
                                            (27.0, 1_840.0), (30.5, 1_580.0),
                                            (34.5, 1_920.0))):
    add_ui_blip(start, frequency, (-1) ** index * 0.55)

# Warm final chord and the distinct four-note D-major sonic identity.
for start, note, duration, gain, pan in (
    (37.0, 74, 1.8, 0.145, -0.30),
    (37.5, 78, 1.8, 0.140, 0.24),
    (38.0, 81, 2.0, 0.145, -0.12),
    (38.5, 88, 3.1, 0.155, 0.20),
):
    add_logo_note(start, note, duration, gain, pan)

# A quiet, synthesized air texture ties the chapters together.
texture_rng = np.random.default_rng(SEED + 10)
texture = sosfilt(BP_AIR, texture_rng.standard_normal((N, 2)), axis=0)
texture /= max(1e-9, float(np.std(texture)))
texture_gain = np.zeros(N)
control_times = np.array([0.0, 5.0, 10.0, 16.0, 20.0, 25.0, 32.0, 37.0, 42.0])
control_levels = np.array([0.010, 0.006, 0.004, 0.003, 0.006, 0.005, 0.004, 0.005, 0.002])
for start, end, level_a, level_b in zip(control_times[:-1], control_times[1:],
                                        control_levels[:-1], control_levels[1:]):
    first = int(start * SR)
    last = int(end * SR)
    texture_gain[first:last] = np.linspace(level_a, level_b, last - first, endpoint=False)
fx += texture * texture_gain[:, None]

# Synthetic stereo room on melodic material only; drums remain controlled.
reverb_rng = np.random.default_rng(SEED + 20)
ir_length = int(1.65 * SR)
ir_t = np.arange(ir_length) / SR
ir = reverb_rng.standard_normal((ir_length, 2))
ir *= np.exp(-ir_t[:, None] / 0.52)
ir[:int(0.028 * SR)] = 0.0
ir = sosfilt(LP_REVERB, ir, axis=0)
for tap, level in ((0.061, 0.32), (0.097, 0.23), (0.149, 0.16), (0.227, 0.11)):
    ir[int(tap * SR), 0] += level
    ir[int((tap + 0.013) * SR), 1] += level
ir /= np.maximum(1e-9, np.sqrt(np.sum(ir ** 2, axis=0)))
wet = np.zeros_like(music)
for channel in range(2):
    wet[:, channel] = fftconvolve(music[:, channel], ir[:, channel], mode="full")[:N]
music += wet * 0.16

# Kick-linked ducking adds polish without flattening the cinematic dynamics.
duck = np.ones(N)
for start in kick_times:
    first = int(round(start * SR))
    length = min(int(0.32 * SR), N - first)
    if length <= 0:
        continue
    t = np.arange(length) / SR
    curve = 1.0 - 0.20 * np.minimum(1.0, t / 0.006) * np.exp(-t / 0.105)
    duck[first:first + length] = np.minimum(duck[first:first + length], curve)
music *= duck[:, None]

mix = music + drums + fx
mix = sosfilt(HP_22, mix, axis=0)
mix = np.tanh(mix * 1.16)

# Exact-duration fades; the final 1.5 s resolves smoothly to digital silence.
fade_in_n = int(0.5 * SR)
fade_out_n = int(1.5 * SR)
mix[:fade_in_n] *= np.sin(np.linspace(0.0, np.pi / 2.0, fade_in_n))[:, None] ** 2
mix[-fade_out_n:] *= np.cos(np.linspace(0.0, np.pi / 2.0, fade_out_n))[:, None] ** 2
mix[0] = 0.0
mix[-1] = 0.0

float_peak = float(np.max(np.abs(mix)))
if float_peak == 0.0:
    raise RuntimeError("Generated audio is silent")
mix *= TARGET_PEAK / float_peak
pcm = np.rint(np.clip(mix, -1.0, 1.0) * 32767.0).astype("<i2")

AUDIO_PATH.parent.mkdir(parents=True, exist_ok=True)
with wave.open(str(AUDIO_PATH), "wb") as output:
    output.setnchannels(2)
    output.setsampwidth(2)
    output.setframerate(SR)
    output.writeframes(pcm.tobytes())

grain_rng = np.random.default_rng(SEED + 30)
grain = grain_rng.normal(128.0, 34.0, (512, 512))
grain += grain_rng.integers(-16, 17, (512, 512)) * 0.35
grain = np.clip(np.rint(grain), 0, 255).astype(np.uint8)
GRAIN_PATH.parent.mkdir(parents=True, exist_ok=True)
Image.fromarray(grain, mode="L").save(GRAIN_PATH, optimize=True)

rms = 20.0 * np.log10(max(1e-12, float(np.sqrt(np.mean(mix ** 2)))))
print(f"Wrote {AUDIO_PATH.relative_to(ROOT)}")
print(f"42.000 s | {SR} Hz | stereo | 16-bit | peak -1.00 dBFS | RMS {rms:.2f} dBFS")
print(f"Wrote {GRAIN_PATH.relative_to(ROOT)} (512x512, 8-bit grayscale, seed {SEED + 30})")
