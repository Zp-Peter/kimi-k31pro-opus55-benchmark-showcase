// 程序化武器模型。局部坐标：握点在原点，刀身沿 +y，刃口朝 -z。

import * as THREE from 'three';
import { MeshBuilder } from '../render/builder';
import { toon } from '../render/toon';
import type { WeaponId } from '../game/weapons';

export interface WeaponModel {
  group: THREE.Group;
  /** 刀光拖尾采样点（局部坐标） */
  trailBase: THREE.Vector3;
  trailTip: THREE.Vector3;
  /** 双手武器左手握点（局部坐标），null 表示单手 */
  leftGrip: THREE.Vector3 | null;
}

const STEEL = () => toon(0xdfe6ee, { rim: 0xffffff, rimStrength: 0.35 });
const IRON = () => toon(0x3a3d46);
const GOLD = () => toon(0xd9a74a);
const WRAP = () => toon(0x231c22);

/** 刀身轮廓：x 方向为宽度（+x = 刃口），y 为长度；可带弧度（反り） */
function bladeGeo(len: number, width: number, curve: number, thick: number, y0: number, tipLen = 0.12): THREE.BufferGeometry {
  const s = new THREE.Shape();
  const n = 10;
  const off = (t: number) => -curve * t * t;
  const edge: [number, number][] = [];
  const spine: [number, number][] = [];
  const bodyEnd = 1 - tipLen;
  for (let i = 0; i <= n; i++) {
    const t = (i / n) * bodyEnd;
    const w = width * (1 - t * 0.25);
    edge.push([off(t) + w / 2, y0 + t * len]);
    spine.push([off(t) - w / 2, y0 + t * len]);
  }
  // 切先：刃口一侧弧线收向尖端
  const tip: [number, number] = [off(1) - width * 0.3, y0 + len];
  s.moveTo(spine[0][0], spine[0][1]);
  for (const p of edge) s.lineTo(p[0], p[1]);
  const e = edge[edge.length - 1];
  s.quadraticCurveTo(e[0], (e[1] + tip[1]) / 2 + len * 0.02, tip[0], tip[1]);
  for (let i = spine.length - 1; i >= 0; i--) s.lineTo(spine[i][0], spine[i][1]);
  const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: false, curveSegments: 6 });
  g.translate(0, 0, -thick / 2);
  g.rotateY(Math.PI / 2);
  return g;
}

function axeHeadGeo(): THREE.BufferGeometry {
  const s = new THREE.Shape();
  // 新月形大刃（+x 为刃口方向，旋转后朝 -z）
  s.moveTo(0.03, 0.8);
  s.lineTo(0.12, 0.74);
  s.quadraticCurveTo(0.22, 0.62, 0.34, 0.6);
  s.quadraticCurveTo(0.42, 0.82, 0.34, 1.06);
  s.quadraticCurveTo(0.22, 1.02, 0.12, 0.94);
  s.lineTo(0.03, 0.92);
  s.lineTo(0.03, 0.8);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.035, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.006, bevelSegments: 1, curveSegments: 8 });
  g.translate(0, 0, -0.0175);
  g.rotateY(Math.PI / 2);
  return g;
}

function spikeGeo(): THREE.BufferGeometry {
  const s = new THREE.Shape();
  s.moveTo(-0.03, 0.82);
  s.lineTo(-0.16, 0.86);
  s.lineTo(-0.03, 0.9);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.03, bevelEnabled: false });
  g.translate(0, 0, -0.015);
  g.rotateY(Math.PI / 2);
  return g;
}

export function buildWeapon(id: WeaponId, teamColor: number): WeaponModel {
  const b = new MeshBuilder();
  const team = toon(teamColor);
  let trailBase = new THREE.Vector3();
  let trailTip = new THREE.Vector3();
  let leftGrip: THREE.Vector3 | null = null;
  switch (id) {
    case 'tanto': {
      b.cyl(WRAP(), 0.017, 0.019, 0.13, 0, -0.11, 0, 8);
      b.cyl(team, 0.0195, 0.0195, 0.022, 0, -0.06, 0, 8);
      b.cyl(IRON(), 0.016, 0.016, 0.02, 0, -0.125, 0, 8);
      b.add(new THREE.CylinderGeometry(0.034, 0.034, 0.011, 12), IRON(), 0, 0.024, 0, 0, 0, 0, 1, 1, 0.75);
      b.add(new THREE.BoxGeometry(0.012, 0.02, 0.026), GOLD(), 0, 0.04, 0);
      b.addMatrix(bladeGeo(0.3, 0.027, 0.006, 0.007, 0.03, 0.18), STEEL(), new THREE.Matrix4());
      trailBase = new THREE.Vector3(0, 0.07, 0);
      trailTip = new THREE.Vector3(0, 0.33, 0);
      break;
    }
    case 'katana': {
      b.cyl(WRAP(), 0.019, 0.021, 0.27, 0, -0.25, 0, 8);
      for (let i = 0; i < 4; i++) b.cyl(team, 0.0215, 0.0215, 0.014, 0, -0.22 + i * 0.06, 0, 8);
      b.cyl(IRON(), 0.018, 0.018, 0.02, 0, -0.265, 0, 8);
      b.add(new THREE.CylinderGeometry(0.044, 0.044, 0.011, 14), IRON(), 0, 0.024, 0, 0, 0, 0, 1, 1, 0.8);
      b.add(new THREE.BoxGeometry(0.013, 0.026, 0.032), GOLD(), 0, 0.044, 0);
      b.addMatrix(bladeGeo(0.78, 0.033, 0.035, 0.008, 0.03), STEEL(), new THREE.Matrix4());
      trailBase = new THREE.Vector3(0, 0.12, 0);
      trailTip = new THREE.Vector3(0, 0.8, 0.02);
      leftGrip = new THREE.Vector3(0, -0.17, 0);
      break;
    }
    case 'naginata': {
      const shaft = toon(0x5c2a24);
      b.cyl(shaft, 0.019, 0.021, 1.82, 0, -0.66, 0, 8);
      b.cyl(IRON(), 0.022, 0.018, 0.08, 0, -0.72, 0, 8);
      for (let i = 0; i < 3; i++) b.cyl(team, 0.0225, 0.0225, 0.03, 0, -0.42 + i * 0.4, 0, 8);
      b.cyl(GOLD(), 0.024, 0.024, 0.05, 0, 1.12, 0, 8);
      b.add(new THREE.CylinderGeometry(0.04, 0.04, 0.012, 12), IRON(), 0, 1.175, 0);
      b.addMatrix(bladeGeo(0.56, 0.05, 0.07, 0.009, 1.18, 0.16), STEEL(), new THREE.Matrix4());
      trailBase = new THREE.Vector3(0, 1.25, 0);
      trailTip = new THREE.Vector3(0, 1.74, 0.07);
      leftGrip = new THREE.Vector3(0, -0.42, 0);
      break;
    }
    case 'axe': {
      const wood = toon(0x6e4b33);
      b.cyl(wood, 0.024, 0.028, 1.2, 0, -0.2, 0, 8);
      b.cyl(team, 0.03, 0.03, 0.16, 0, -0.1, 0, 8);
      b.cyl(team, 0.03, 0.03, 0.05, 0, 0.42, 0, 8);
      b.add(new THREE.BoxGeometry(0.07, 0.2, 0.08), IRON(), 0, 0.86, 0);
      b.addMatrix(axeHeadGeo(), IRON(), new THREE.Matrix4());
      // 刃口亮边
      const edge = new THREE.Shape();
      edge.moveTo(0.33, 0.61);
      edge.quadraticCurveTo(0.41, 0.82, 0.33, 1.05);
      edge.lineTo(0.3, 1.0);
      edge.quadraticCurveTo(0.36, 0.82, 0.3, 0.66);
      const eg = new THREE.ExtrudeGeometry(edge, { depth: 0.05, bevelEnabled: false });
      eg.translate(0, 0, -0.025);
      eg.rotateY(Math.PI / 2);
      b.addMatrix(eg, STEEL(), new THREE.Matrix4());
      b.addMatrix(spikeGeo(), IRON(), new THREE.Matrix4());
      b.add(new THREE.ConeGeometry(0.026, 0.14, 6), IRON(), 0, 1.03, 0);
      trailBase = new THREE.Vector3(0, 0.66, -0.3);
      trailTip = new THREE.Vector3(0, 1.02, -0.36);
      leftGrip = new THREE.Vector3(0, -0.12, 0);
      break;
    }
  }
  const group = b.build({ cast: true, receive: false });
  return { group, trailBase, trailTip, leftGrip };
}
