// textures.js — every texture is painted on a canvas at startup (no image files).
import * as THREE from 'three';
import { Rand, TAU } from './util.js';

export const BRUSH_FONT = '"Ma Shan Zheng", "STKaiti", "KaiTi", "Kaiti SC", serif';
let maxAniso = 4;
export function setAniso(a) { maxAniso = a; }

export function canvasTex(w, h, draw, o = {}) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const g = cv.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(cv);
  if (o.srgb !== false) t.colorSpace = THREE.SRGBColorSpace;
  if (o.repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = o.aniso ?? maxAniso;
  return t;
}

// Calls fn for (x,y) and its wrapped copies so the painted canvas tiles seamlessly.
function wrapped(w, h, x, y, r, fn) {
  for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
    const X = x + dx * w, Y = y + dy * h;
    if (X + r < 0 || X - r > w || Y + r < 0 || Y - r > h) continue;
    fn(X, Y);
  }
}
function blob(g, x, y, r, rgb, a) {
  const gr = g.createRadialGradient(x, y, 0, x, y, r);
  gr.addColorStop(0, `rgba(${rgb},${a})`); gr.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
}

export async function loadFonts(chars) {
  if (!document.fonts || !document.fonts.load) return;
  const timeout = new Promise((res) => setTimeout(res, 4000));
  try {
    await Promise.race([Promise.all([
      document.fonts.load('64px "Ma Shan Zheng"', chars),
      document.fonts.load('32px "Noto Serif SC"', chars),
    ]), timeout]);
  } catch (e) { /* fall back to system kai fonts */ }
}

// ------------------------------------------------------------------ ground
export function roadTexture() {
  return canvasTex(512, 512, (g, w, h) => {
    const r = new Rand(11);
    g.fillStyle = '#a98a60'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      const x = r.range(0, w), y = r.range(0, h), rad = r.range(20, 70);
      const c = r.pick(['118,88,56', '196,166,122', '140,108,70']);
      wrapped(w, h, x, y, rad, (X, Y) => blob(g, X, Y, rad, c, 0.22));
    }
    for (const u0 of [0.32, 0.68]) {
      for (let y = 0; y < h; y += 2) {
        const x = u0 * w + Math.sin((y / h) * TAU * 2 + u0 * 9) * 7;
        const gr = g.createLinearGradient(x - 30, 0, x + 30, 0);
        gr.addColorStop(0, 'rgba(104,78,48,0)'); gr.addColorStop(0.5, 'rgba(104,78,48,0.3)'); gr.addColorStop(1, 'rgba(104,78,48,0)');
        g.fillStyle = gr; g.fillRect(x - 30, y, 60, 2);
      }
    }
    for (let i = 0; i < 9000; i++) {
      g.fillStyle = r.pick(['#8a6b46', '#7a5e3d', '#b9996d', '#c7ab80', '#94754d', '#6e5436']);
      g.globalAlpha = r.range(0.25, 0.7);
      const s = r.range(0.8, 2.6);
      g.fillRect(r.range(0, w), r.range(0, h), s, s);
    }
    g.globalAlpha = 1;
    for (let i = 0; i < 90; i++) {
      const x = (r.pick([0.32, 0.68]) + r.range(-0.08, 0.08)) * w, y = r.range(0, h), rot = r.range(-0.4, 0.4);
      wrapped(w, h, x, y, 8, (X, Y) => {
        g.save(); g.translate(X, Y); g.rotate(rot); g.fillStyle = 'rgba(88,64,40,0.42)';
        g.beginPath(); g.ellipse(-2.6, 0, 2.1, 3.8, 0.15, 0, TAU); g.fill();
        g.beginPath(); g.ellipse(2.6, 0, 2.1, 3.8, -0.15, 0, TAU); g.fill(); g.restore();
      });
    }
    for (let i = 0; i < 150; i++) {
      const x = r.range(0, w), y = r.range(0, h), rx = r.range(1.2, 3.6), ry = rx * r.range(0.6, 0.9);
      const c = r.pick(['#b9ac95', '#a99d87', '#988d7a', '#c4b69c']);
      wrapped(w, h, x, y, 6, (X, Y) => {
        g.fillStyle = 'rgba(70,52,36,0.3)'; g.beginPath(); g.ellipse(X + 1, Y + 1.2, rx, ry, 0, 0, TAU); g.fill();
        g.fillStyle = c; g.beginPath(); g.ellipse(X, Y, rx, ry, 0, 0, TAU); g.fill();
      });
    }
    const eg = g.createLinearGradient(0, 0, w, 0);
    eg.addColorStop(0, 'rgba(80,60,38,0.55)'); eg.addColorStop(0.07, 'rgba(80,60,38,0)');
    eg.addColorStop(0.93, 'rgba(80,60,38,0)'); eg.addColorStop(1, 'rgba(80,60,38,0.55)');
    g.fillStyle = eg; g.fillRect(0, 0, w, h);
  }, { repeat: true });
}

// Blue-grey flagstone paving for the village stretch.
export function slabTexture() {
  return canvasTex(512, 512, (g, w, h) => {
    const r = new Rand(23);
    g.fillStyle = '#4b5150'; g.fillRect(0, 0, w, h);
    const rows = []; let y = 0;
    while (y < h) { const rh = Math.min(r.range(46, 72), h - y); rows.push([y, rh]); y += rh; }
    if (rows.length > 1 && rows[rows.length - 1][1] < 30) { const last = rows.pop(); rows[rows.length - 1][1] += last[1]; }
    for (const [y0, rh] of rows) {
      let x = -r.range(0, 60);
      while (x < w) {
        const sw = r.range(90, 190);
        const base = r.range(118, 158) | 0, tint = r.range(-6, 8) | 0;
        g.fillStyle = `rgb(${base - 6},${base + tint},${base + 4 + tint})`;
        const x0 = x + 2.5, yy = y0 + 2.5, ww = sw - 5, hh = rh - 5;
        g.beginPath(); g.roundRect ? g.roundRect(x0, yy, ww, hh, 5) : g.rect(x0, yy, ww, hh); g.fill();
        const gr = g.createLinearGradient(0, yy, 0, yy + hh);
        gr.addColorStop(0, 'rgba(255,255,255,0.10)'); gr.addColorStop(1, 'rgba(0,0,0,0.12)');
        g.fillStyle = gr; g.fill();
        for (let i = 0; i < 60; i++) {
          g.fillStyle = r.chance(0.5) ? 'rgba(40,44,44,0.25)' : 'rgba(220,224,220,0.18)';
          g.fillRect(x0 + r.range(0, ww), yy + r.range(0, hh), r.range(1, 3), r.range(1, 3));
        }
        if (r.chance(0.3)) {
          g.strokeStyle = 'rgba(40,42,40,0.5)'; g.lineWidth = 1; g.beginPath();
          let cx = x0 + r.range(10, ww - 10), cy = yy; g.moveTo(cx, cy);
          for (let k = 0; k < 5; k++) { cx += r.range(-10, 10); cy += hh / 5; g.lineTo(cx, cy); }
          g.stroke();
        }
        for (let i = 0; i < 14; i++) {
          g.fillStyle = `rgba(${r.int(70, 100)},${r.int(110, 135)},${r.int(60, 75)},0.55)`;
          const ex = r.chance(0.5) ? x0 + r.range(0, ww) : (r.chance(0.5) ? x0 : x0 + ww);
          const ey = r.chance(0.5) ? (r.chance(0.5) ? yy : yy + hh) : yy + r.range(0, hh);
          g.beginPath(); g.arc(ex, ey, r.range(1, 2.6), 0, TAU); g.fill();
        }
        x += sw;
      }
    }
  }, { repeat: true });
}

// Granite kerb stones lining the road.
export function curbTexture() {
  return canvasTex(64, 256, (g, w, h) => {
    const r = new Rand(5);
    g.fillStyle = '#3f4446'; g.fillRect(0, 0, w, h);
    let y = 0;
    while (y < h) {
      let len = r.range(28, 54); if (h - y - len < 24) len = h - y;
      const b = r.int(120, 165);
      g.fillStyle = `rgb(${b - 4},${b},${b + 6})`;
      g.fillRect(3, y + 2, w - 6, len - 4);
      const gr = g.createLinearGradient(0, 0, w, 0);
      gr.addColorStop(0, 'rgba(255,255,255,0.18)'); gr.addColorStop(0.5, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(0,0,0,0.25)');
      g.fillStyle = gr; g.fillRect(3, y + 2, w - 6, len - 4);
      for (let i = 0; i < 40; i++) {
        g.fillStyle = r.chance(0.6) ? 'rgba(30,30,30,0.25)' : 'rgba(100,130,70,0.45)';
        g.fillRect(3 + r.range(0, w - 8), y + 2 + r.range(0, len - 6), 2, 2);
      }
      y += len;
    }
  }, { repeat: true });
}

// Multiplicative detail for terrain (linear, values around 1).
export function grassDetail() {
  return canvasTex(256, 256, (g, w, h) => {
    const r = new Rand(3);
    g.fillStyle = 'rgb(232,232,232)'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) {
      const x = r.range(0, w), y = r.range(0, h), rad = r.range(14, 46), light = r.chance(0.5);
      wrapped(w, h, x, y, rad, (X, Y) => blob(g, X, Y, rad, light ? '255,255,255' : '170,170,170', 0.35));
    }
    for (let i = 0; i < 5000; i++) {
      const x = r.range(0, w), y = r.range(0, h), v = r.int(175, 255), len = r.range(2, 6), a = r.range(-0.5, 0.5);
      g.strokeStyle = `rgba(${v},${v},${v},0.6)`; g.lineWidth = 1;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.sin(a) * len, y - Math.cos(a) * len); g.stroke();
    }
  }, { repeat: true, srgb: false });
}

// Rows of curved clay tiles (multiplier) for roofs; tiles run along v (down the slope).
export function tileTexture() {
  return canvasTex(128, 128, (g, w, h) => {
    const cols = 8, cw = w / cols;
    for (let c = 0; c < cols; c++) {
      const gr = g.createLinearGradient(c * cw, 0, (c + 1) * cw, 0);
      gr.addColorStop(0, 'rgb(90,90,90)'); gr.addColorStop(0.25, 'rgb(205,205,205)'); gr.addColorStop(0.45, 'rgb(255,255,255)');
      gr.addColorStop(0.75, 'rgb(170,170,170)'); gr.addColorStop(1, 'rgb(80,80,80)');
      g.fillStyle = gr; g.fillRect(c * cw, 0, cw, h);
    }
    for (let y = 0; y < h; y += 16) {
      g.fillStyle = 'rgba(40,40,40,0.55)'; g.fillRect(0, y + 13, w, 3);
      g.fillStyle = 'rgba(255,255,255,0.25)'; g.fillRect(0, y, w, 2);
    }
  }, { repeat: true, srgb: false });
}

// Wooden lattice window (窗棂) on paper.
export function latticeTexture() {
  return canvasTex(128, 128, (g, w, h) => {
    g.fillStyle = '#e9d9b6'; g.fillRect(0, 0, w, h);
    const inner = g.createRadialGradient(64, 64, 10, 64, 64, 90);
    inner.addColorStop(0, 'rgba(255,214,140,0.35)'); inner.addColorStop(1, 'rgba(120,80,40,0.25)');
    g.fillStyle = inner; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#3a2618'; g.lineWidth = 10; g.strokeRect(5, 5, w - 10, h - 10);
    g.lineWidth = 4;
    for (let i = 1; i < 5; i++) {
      g.beginPath(); g.moveTo(i * w / 5, 8); g.lineTo(i * w / 5, h - 8); g.stroke();
      g.beginPath(); g.moveTo(8, i * h / 5); g.lineTo(w - 8, i * h / 5); g.stroke();
    }
    g.lineWidth = 3; g.beginPath();
    g.moveTo(w / 2, 20); g.lineTo(w - 20, h / 2); g.lineTo(w / 2, h - 20); g.lineTo(20, h / 2); g.closePath(); g.stroke();
  });
}

// ------------------------------------------------------------------ sprites
export function glowTexture() {
  return canvasTex(64, 64, (g) => {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.2, 'rgba(255,255,255,0.55)');
    gr.addColorStop(0.5, 'rgba(255,255,255,0.14)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  });
}
export function softDotTexture() {
  return canvasTex(64, 64, (g) => {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.6, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  });
}
export function petalTexture() {
  return canvasTex(64, 64, (g) => {
    g.translate(32, 34);
    const gr = g.createRadialGradient(0, 4, 2, 0, 0, 26);
    gr.addColorStop(0, '#fff3f5'); gr.addColorStop(0.6, '#f7c3cf'); gr.addColorStop(1, '#ec98ad');
    g.fillStyle = gr; g.beginPath();
    g.moveTo(0, 26);
    g.bezierCurveTo(-26, 10, -20, -22, -5, -24);
    g.quadraticCurveTo(0, -17, 5, -24);
    g.bezierCurveTo(20, -22, 26, 10, 0, 26);
    g.fill();
  });
}
export function cloudTexture() {
  return canvasTex(256, 128, (g, w, h) => {
    const r = new Rand(9);
    for (let i = 0; i < 26; i++) {
      const x = r.range(50, w - 50), y = r.range(48, h - 34), rad = r.range(22, 48);
      blob(g, x, y, rad, '255,255,255', 0.28);
    }
    g.globalCompositeOperation = 'destination-in';
    const fade = g.createLinearGradient(0, 0, w, 0);
    fade.addColorStop(0, 'rgba(0,0,0,0)'); fade.addColorStop(0.25, 'rgba(0,0,0,1)'); fade.addColorStop(0.75, 'rgba(0,0,0,1)'); fade.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = fade; g.fillRect(0, 0, w, h);
  });
}

// Spray of bamboo leaves for alpha-tested foliage cards.
export function bambooLeafTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    const r = new Rand(31);
    const leaf = (x, y, ang, len, wid, c) => {
      g.save(); g.translate(x, y); g.rotate(ang); g.fillStyle = c; g.beginPath();
      g.moveTo(0, 0); g.quadraticCurveTo(wid, len * 0.35, 0, len); g.quadraticCurveTo(-wid, len * 0.35, 0, 0); g.fill();
      g.strokeStyle = 'rgba(30,50,25,0.35)'; g.lineWidth = 0.8; g.beginPath(); g.moveTo(0, 2); g.lineTo(0, len * 0.9); g.stroke();
      g.restore();
    };
    for (let k = 0; k < 9; k++) {
      const x0 = r.range(30, w - 30), y0 = r.range(20, h * 0.6), dir = r.range(-0.8, 0.8);
      g.strokeStyle = '#5b6b3a'; g.lineWidth = 1.6; g.beginPath(); g.moveTo(x0, y0);
      const x1 = x0 + Math.sin(dir) * 60, y1 = y0 + 40; g.lineTo(x1, y1); g.stroke();
      for (let i = 0; i < 7; i++) {
        const t = i / 6, px = x0 + (x1 - x0) * t, py = y0 + (y1 - y0) * t;
        const c = r.pick(['#3f6b36', '#4f7d3c', '#365e30', '#5f8c45', '#6f9a4e']);
        leaf(px, py, dir + r.range(-1.1, 1.1), r.range(38, 62), r.range(5, 8), c);
      }
    }
  });
}

// Hanging willow strands, fading to transparent at the tips.
export function willowTexture() {
  return canvasTex(128, 256, (g, w, h) => {
    const r = new Rand(17);
    for (let s = 0; s < 14; s++) {
      let x = r.range(6, w - 6); const sway = r.range(-10, 10);
      const c = r.pick(['#86ab5b', '#9cbd68', '#6f9a4c', '#a9c873', '#7ba553']);
      for (let y = 0; y < h - 6; y += 5) {
        const t = y / h, xx = x + Math.sin(t * 2.4) * sway;
        g.globalAlpha = 1 - Math.pow(t, 3) * 0.7;
        g.strokeStyle = '#6d7e45'; g.lineWidth = 1; g.beginPath(); g.moveTo(xx, y); g.lineTo(xx, y + 5); g.stroke();
        g.fillStyle = c;
        g.beginPath(); g.ellipse(xx - 2.5, y + 2, 1.5, 4.2, 0.6, 0, TAU); g.fill();
        g.beginPath(); g.ellipse(xx + 2.5, y + 4, 1.5, 4.2, -0.6, 0, TAU); g.fill();
      }
    }
    g.globalAlpha = 1;
  });
}

// ------------------------------------------------------------------ calligraphy boards
function meander(g, x, y, w, size, color) {
  g.strokeStyle = color; g.lineWidth = Math.max(1.5, size / 6);
  for (let px = x; px < x + w - size; px += size) {
    const s = size * 0.8;
    g.beginPath();
    g.moveTo(px, y + s); g.lineTo(px, y); g.lineTo(px + s, y); g.lineTo(px + s, y + s * 0.75);
    g.lineTo(px + s * 0.3, y + s * 0.75); g.lineTo(px + s * 0.3, y + s * 0.3); g.lineTo(px + s * 0.6, y + s * 0.3);
    g.stroke();
  }
}

// Tall festival banner (幡) with one to three stacked characters.
export function bannerTexture(text, bg, fg, trim = '#e8c46a') {
  return canvasTex(128, 512, (g, w, h) => {
    g.fillStyle = bg; g.fillRect(0, 0, w, h - 40);
    g.beginPath(); g.moveTo(0, h - 40); g.lineTo(w / 2, h - 8); g.lineTo(w, h - 40); g.fill();
    const sh = g.createLinearGradient(0, 0, w, 0);
    sh.addColorStop(0, 'rgba(0,0,0,0.25)'); sh.addColorStop(0.3, 'rgba(255,255,255,0.06)'); sh.addColorStop(1, 'rgba(0,0,0,0.3)');
    g.fillStyle = sh; g.fillRect(0, 0, w, h);
    g.strokeStyle = trim; g.lineWidth = 3; g.strokeRect(8, 8, w - 16, h - 60);
    meander(g, 14, 16, w - 20, 14, trim);
    meander(g, 14, h - 82, w - 20, 14, trim);
    g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
    const chars = [...text], n = chars.length;
    const size = n === 1 ? 104 : n === 2 ? 92 : 78;
    g.font = `${size}px ${BRUSH_FONT}`;
    const span = h - 140, step = span / n;
    chars.forEach((ch, i) => {
      g.shadowColor = 'rgba(0,0,0,0.35)'; g.shadowBlur = 4;
      g.fillText(ch, w / 2, 60 + step * (i + 0.5));
    });
    g.shadowBlur = 0;
    g.strokeStyle = trim; g.lineWidth = 2;
    for (let i = 0; i < 9; i++) { const x = 20 + i * 11; g.beginPath(); g.moveTo(x, h - 40 + Math.abs(x - w / 2) * -0.5 + 34); g.lineTo(x, h - 2); g.stroke(); }
  });
}

// Horizontal lacquered plaque (匾额) with gilt characters.
export function plaqueTexture(text, bg = '#1c2b3d') {
  return canvasTex(512, 160, (g, w, h) => {
    g.fillStyle = '#7a1f17'; g.fillRect(0, 0, w, h);
    g.fillStyle = bg; g.fillRect(14, 14, w - 28, h - 28);
    g.strokeStyle = '#d9b25c'; g.lineWidth = 5; g.strokeRect(10, 10, w - 20, h - 20);
    g.lineWidth = 2; g.strokeRect(22, 22, w - 44, h - 44);
    for (const [x, y] of [[22, 22], [w - 22, 22], [22, h - 22], [w - 22, h - 22]]) {
      g.fillStyle = '#d9b25c'; g.beginPath(); g.arc(x, y, 6, 0, TAU); g.fill();
    }
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = `92px ${BRUSH_FONT}`;
    const chars = [...text], step = (w - 90) / chars.length;
    chars.forEach((ch, i) => {
      const x = 45 + step * (i + 0.5);
      g.fillStyle = '#5a3d10'; g.fillText(ch, x + 2, h / 2 + 5);
      const gr = g.createLinearGradient(0, 30, 0, h - 30);
      gr.addColorStop(0, '#fbe7a1'); gr.addColorStop(0.5, '#e2b54f'); gr.addColorStop(1, '#b8862d');
      g.fillStyle = gr; g.fillText(ch, x, h / 2 + 2);
    });
  });
}

// Floating name tag above a rival.
export function nameTagTexture(name, color) {
  return canvasTex(256, 64, (g, w, h) => {
    g.font = `40px ${BRUSH_FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    const tw = g.measureText(name).width;
    g.fillStyle = 'rgba(28,24,20,0.55)';
    g.beginPath(); g.roundRect ? g.roundRect(w / 2 - tw / 2 - 30, 8, tw + 60, 48, 24) : g.rect(w / 2 - tw / 2 - 30, 8, tw + 60, 48); g.fill();
    g.fillStyle = color; g.beginPath(); g.arc(w / 2 - tw / 2 - 12, 32, 8, 0, TAU); g.fill();
    g.fillStyle = '#f6efe0'; g.fillText(name, w / 2 + 8, 34);
  });
}

// Golden chevrons for boost pads (pointing toward +v).
export function boostPadTexture() {
  return canvasTex(128, 256, (g, w, h) => {
    for (let i = 0; i < 3; i++) {
      const y = 30 + i * 78;
      const gr = g.createLinearGradient(0, y, 0, y + 70);
      gr.addColorStop(0, 'rgba(255,250,210,1)'); gr.addColorStop(1, 'rgba(255,170,40,0.85)');
      g.fillStyle = gr; g.beginPath();
      g.moveTo(w / 2, y); g.lineTo(w - 12, y + 46); g.lineTo(w - 12, y + 70); g.lineTo(w / 2, y + 26);
      g.lineTo(12, y + 70); g.lineTo(12, y + 46); g.closePath(); g.fill();
    }
    g.strokeStyle = 'rgba(255,214,120,0.9)'; g.lineWidth = 4; g.strokeRect(4, 4, w - 8, h - 8);
  });
}

// Red-and-gold cloth strip painted across the road at the start/finish line.
export function startLineTexture() {
  return canvasTex(512, 64, (g, w, h) => {
    g.fillStyle = '#a3241c'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#e5b850';
    g.fillRect(0, 4, w, 4); g.fillRect(0, h - 8, w, 4);
    for (let x = 0; x < w; x += 32) {
      g.beginPath(); g.moveTo(x + 16, 14); g.lineTo(x + 30, 32); g.lineTo(x + 16, 50); g.lineTo(x + 2, 32); g.closePath(); g.fill();
      g.fillStyle = '#a3241c'; g.beginPath(); g.arc(x + 16, 32, 5, 0, TAU); g.fill(); g.fillStyle = '#e5b850';
    }
  });
}

// Swallow kite (沙燕风筝).
export function kiteTexture(accent = '#c0392b') {
  return canvasTex(256, 256, (g, w, h) => {
    g.translate(w / 2, 0);
    const wing = (s) => {
      g.beginPath(); g.moveTo(0, 70);
      g.bezierCurveTo(s * 40, 40, s * 100, 46, s * 124, 84);
      g.bezierCurveTo(s * 100, 100, s * 60, 104, s * 22, 132);
      g.closePath();
    };
    g.lineWidth = 5; g.strokeStyle = '#1d1a17';
    for (const s of [-1, 1]) { wing(s); g.fillStyle = '#f5efe2'; g.fill(); g.stroke(); }
    g.beginPath(); g.moveTo(-16, 120); g.lineTo(-44, 236); g.lineTo(-6, 196); g.lineTo(0, 150);
    g.lineTo(6, 196); g.lineTo(44, 236); g.lineTo(16, 120); g.closePath(); g.fillStyle = '#f5efe2'; g.fill(); g.stroke();
    g.beginPath(); g.ellipse(0, 96, 24, 50, 0, 0, TAU); g.fillStyle = '#f5efe2'; g.fill(); g.stroke();
    g.beginPath(); g.arc(0, 52, 26, 0, TAU); g.fillStyle = '#f5efe2'; g.fill(); g.stroke();
    g.fillStyle = '#1d1a17';
    for (const s of [-1, 1]) {
      g.beginPath(); g.arc(s * 10, 48, 6, 0, TAU); g.fill();
      g.beginPath(); g.moveTo(s * 34, 74); g.quadraticCurveTo(s * 80, 62, s * 112, 84); g.lineTo(s * 96, 92); g.quadraticCurveTo(s * 66, 78, s * 34, 86); g.fill();
    }
    g.fillStyle = accent;
    for (const s of [-1, 1]) {
      g.beginPath(); g.arc(s * 15, 62, 5, 0, TAU); g.fill();
      g.beginPath(); g.ellipse(s * 62, 104, 16, 8, s * -0.4, 0, TAU); g.fill();
    }
    g.beginPath(); g.ellipse(0, 100, 10, 26, 0, 0, TAU); g.fill();
    g.fillStyle = '#2c5d7c';
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(s * 8, 180); g.lineTo(s * 30, 222); g.lineTo(s * 8, 204); g.fill(); }
  });
}
