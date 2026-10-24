// Glass code-editor panels with syntax highlighting and a typing reveal.
import { CanvasPlane, roundRect, font } from '../engine/text.js';

export const PAL = { kw: '#b69cff', type: '#6aa8ff', fn: '#7fd8ff', str: '#9ff0c8', num: '#ffc46b', com: '#5f7290', def: '#e4ebf7', pun: '#8ea0bd', ok: '#5ee0a0', dim: '#7d8fb0' };
const KW = new Set(['using', 'public', 'class', 'void', 'var', 'new', 'float', 'int', 'return', 'for', 'if', 'else', 'const', 'func', 'extends', 'export', 'import', 'from', 'def', 'in', 'let', 'await', 'async', 'static', 'struct', 'auto', 'true', 'false', 'null', 'self', 'and', 'or', 'not', 'while']);

export const SNIPPETS = [
  { file: 'PlayerController.cs', tag: 'Unity', code: `using UnityEngine;

public class PlayerController : MonoBehaviour {
    public float speed = 6.0f;
    public float jumpForce = 8.5f;

    void Update() {
        var move = new Vector3(Input.GetAxis("Horizontal"), 0,
                               Input.GetAxis("Vertical"));
        body.MovePosition(body.position + move * speed * Time.deltaTime);
        if (Input.GetButtonDown("Jump") && grounded)
            body.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
    }
}` },
  { file: 'TerrainGen.cpp', tag: 'Unreal Engine', code: `#include "TerrainGen.h"

void ATerrainGen::BuildChunk(FIntPoint Coord)
{
    for (int32 Y = 0; Y < Size; ++Y)
    for (int32 X = 0; X < Size; ++X)
    {
        const float H = Noise.FBM(X + Coord.X * Size, Y + Coord.Y * Size);
        Verts.Add(FVector(X * Cell, Y * Cell, H * Amplitude));
    }
    Mesh->CreateMeshSection(0, Verts, Tris, Normals, UVs, {}, {}, true);
}` },
  { file: 'world.gd', tag: 'Godot', code: `extends Node3D

@export var island_radius := 48.0
@export var tree_count := 320

func _ready() -> void:
    var terrain := TerrainBuilder.new(island_radius)
    add_child(terrain.build())
    add_child(Ocean.new(terrain.sea_level))
    spawn_forest(terrain, tree_count)
    $Player.position = terrain.spawn_point()
    $Sun.rotation_degrees.x = -12.0` },
  { file: 'scene.js', tag: 'Three.js', code: `import * as THREE from 'three';

const world = new THREE.Scene();
world.fog = new THREE.Fog(0x1a2b4f, 30, 140);

const island = buildIsland({ seed: 42, radius: 48 });
const ocean = new Ocean({ color: 0x1d4f8a });
world.add(island, ocean, sky);

renderer.setAnimationLoop((t) => {
  player.update(t);
  renderer.render(world, camera);
});` },
  { file: 'build.log', tag: 'Terminal', term: true, code: `› 读取代码库        982,144 tokens
› 拆解任务          14 项 · 并行执行
✓ terrain/          地形 · 水体 · 植被
✓ gameplay/         角色控制 · 碰撞 · 相机
✓ ui/               菜单 · 设置 · 存档
✓ audio/            环境音 · 脚步声
✓ tests             142 passed
› 导出 island.pck    0 errors` },
];

export function tokenize(line, term) {
  if (term) {
    if (line.startsWith('✓')) return [{ s: '✓', c: PAL.ok }, { s: line.slice(1), c: PAL.def }];
    return [{ s: line.slice(0, 1), c: PAL.type }, { s: line.slice(1), c: PAL.def }];
  }
  const out = [];
  const re = /(\/\/.*|#include.*|"[^"]*"|'[^']*'|\b\d+(?:\.\d+)?f?\b|0x[0-9a-fA-F]+|[A-Za-z_@$][\w]*|\s+|.)/g;
  let m;
  while ((m = re.exec(line))) {
    const s = m[0];
    let c = PAL.def;
    if (s.startsWith('//') || s.startsWith('#include')) c = PAL.com;
    else if (s[0] === '"' || s[0] === "'") c = PAL.str;
    else if (/^(\d|0x)/.test(s)) c = PAL.num;
    else if (KW.has(s) || s.startsWith('@')) c = PAL.kw;
    else if (/^[A-Z]/.test(s)) c = PAL.type;
    else if (/^[a-z_]\w*$/.test(s) && line[m.index + s.length] === '(') c = PAL.fn;
    else if (/^[^\w\s]$/.test(s)) c = PAL.pun;
    out.push({ s, c });
  }
  return out;
}

export class CodePanel extends CanvasPlane {
  constructor(snip, worldW = 6.6) {
    super(1100, 640, { worldW, res: 1.35, depthTest: true });
    this.snip = snip;
    this.lines = snip.code.split('\n').map((l) => tokenize(l, snip.term));
    this.total = snip.code.length;
    this.lastN = -1;
    this.glow = 0;
  }
  // n = number of revealed characters
  render(n, glow = 0) {
    n = Math.min(this.total, Math.max(0, Math.floor(n)));
    if (n === this.lastN && Math.abs(glow - this.glow) < 0.01) return;
    this.lastN = n; this.glow = glow;
    const snip = this.snip;
    this.draw((g, W, H) => {
      roundRect(g, 3, 3, W - 6, H - 6, 22);
      const bg = g.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, 'rgba(22,30,50,0.90)'); bg.addColorStop(1, 'rgba(10,14,26,0.93)');
      g.fillStyle = bg; g.fill();
      g.lineWidth = 2; g.strokeStyle = `rgba(100,150,255,${0.35 + glow * 0.6})`; g.stroke();
      // title bar
      g.fillStyle = 'rgba(255,255,255,0.04)'; g.fillRect(4, 4, W - 8, 46);
      ['#ff5f57', '#febc2e', '#28c840'].forEach((c, i) => { g.beginPath(); g.arc(30 + i * 22, 27, 7, 0, 7); g.fillStyle = c; g.fill(); });
      g.font = font(500, 18, 'mono'); g.fillStyle = '#9fb3d6'; g.textBaseline = 'middle'; g.textAlign = 'center';
      g.fillText(snip.file, W / 2, 28);
      g.textAlign = 'right'; g.font = font(600, 14, 'sans'); g.fillStyle = 'rgba(120,170,255,0.85)'; g.fillText(snip.tag.toUpperCase(), W - 24, 28);
      g.textAlign = 'left';
      // code
      const lh = 33, x0 = 76, y0 = 92;
      g.font = font(400, 21, 'mono');
      let shown = 0, cx = x0, cy = y0, done = false;
      for (let li = 0; li < this.lines.length && !done; li++) {
        g.fillStyle = '#3d4a63'; g.textAlign = 'right'; g.fillText(String(li + 1), 52, y0 + li * lh); g.textAlign = 'left';
        cx = x0; cy = y0 + li * lh;
        for (const tk of this.lines[li]) {
          const remain = n - shown;
          if (remain <= 0) { done = true; break; }
          const s = tk.s.length > remain ? tk.s.slice(0, remain) : tk.s;
          g.fillStyle = tk.c; g.fillText(s, cx, cy);
          cx += g.measureText(s).width; shown += s.length;
          if (s.length < tk.s.length) { done = true; break; }
        }
        shown += 1; // newline
      }
      if (n < this.total || true) { g.fillStyle = 'rgba(120,200,255,0.9)'; g.fillRect(cx + 2, cy - 12, 11, 24); }
    });
    this.intensity = 1 + glow * 0.8;
  }
}
