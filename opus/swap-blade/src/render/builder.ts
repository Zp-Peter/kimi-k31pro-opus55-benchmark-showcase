// 几何体合并工具：把同材质的零件合成一次绘制，保证 8 人混战时帧率稳定。

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

export class MeshBuilder {
  private groups = new Map<THREE.Material, THREE.BufferGeometry[]>();

  add(geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1): this {
    _e.set(rx, ry, rz);
    _q.setFromEuler(_e);
    _p.set(x, y, z);
    _s.set(sx, sy, sz);
    _m.compose(_p, _q, _s);
    return this.addMatrix(geo, mat, _m);
  }

  addMatrix(geo: THREE.BufferGeometry, mat: THREE.Material, m: THREE.Matrix4): this {
    let g = geo.index ? geo.toNonIndexed() : geo.clone();
    // 统一属性集合，保证可以合并
    if (!g.getAttribute('uv')) {
      const n = g.getAttribute('position').count;
      g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(n * 2), 2));
    }
    for (const name of Object.keys(g.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
    }
    if (!g.getAttribute('normal')) g.computeVertexNormals();
    g.applyMatrix4(m);
    let arr = this.groups.get(mat);
    if (!arr) {
      arr = [];
      this.groups.set(mat, arr);
    }
    arr.push(g);
    return this;
  }

  /** 盒子：以底面中心为原点更直观 */
  box(mat: THREE.Material, w: number, h: number, d: number, x: number, y0: number, z: number, ry = 0, rx = 0, rz = 0): this {
    const g = new THREE.BoxGeometry(w, h, d);
    return this.add(g, mat, x, y0 + h / 2, z, rx, ry, rz);
  }

  /** 以 min/max 定义的盒子 */
  boxMinMax(mat: THREE.Material, x0: number, x1: number, y0: number, y1: number, z0: number, z1: number): this {
    const g = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0);
    return this.add(g, mat, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  }

  cyl(mat: THREE.Material, rTop: number, rBot: number, h: number, x: number, y0: number, z: number, seg = 10, rx = 0, rz = 0): this {
    const g = new THREE.CylinderGeometry(rTop, rBot, h, seg);
    return this.add(g, mat, x, y0 + h / 2, z, rx, 0, rz);
  }

  build(opts: { cast?: boolean; receive?: boolean } = {}): THREE.Group {
    const group = new THREE.Group();
    for (const [mat, list] of this.groups) {
      const merged = mergeGeometries(list, false);
      if (!merged) continue;
      merged.computeBoundingSphere();
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = opts.cast ?? true;
      mesh.receiveShadow = opts.receive ?? true;
      group.add(mesh);
      for (const g of list) g.dispose();
    }
    this.groups.clear();
    return group;
  }
}

export function disposeObject(obj: THREE.Object3D) {
  obj.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.geometry) m.geometry.dispose();
  });
}
