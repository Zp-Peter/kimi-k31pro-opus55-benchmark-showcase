// decor.js — festival dressing: lanterns, banners, bamboo fences, cheering villagers, kites,
// egrets, corner boards, boost pads and grass-bundle pickups.
import * as THREE from 'three';
import { Rand, TAU, clamp, lerp, GeoBuilder, makeMat, Scatter, SHARED, col } from './util.js';
import { canvasTex, glowTexture, bannerTexture, boostPadTexture, kiteTexture } from './textures.js';
import { WATER_LEVEL as WL, LAKE } from './track.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _v = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1);
const UP = new THREE.Vector3(0, 1, 0);

function waveMaterial(map) {
  const m = new THREE.MeshStandardMaterial({ map, side: THREE.DoubleSide, roughness: 0.8, alphaTest: 0.3 });
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = SHARED.uTime;
    shader.vertexShader = 'uniform float uTime;\n' + shader.vertexShader.replace('#include <begin_vertex>', `
      #include <begin_vertex>
      {
        vec3 wp = vec3(0.0);
        #ifdef USE_INSTANCING
          wp = instanceMatrix[3].xyz;
        #endif
        float ph = wp.x * 0.13 + wp.z * 0.11;
        float w = 1.0 - uv.y;
        transformed.z += (sin(uTime * 2.6 + uv.y * 5.0 + ph) * 0.32 + sin(uTime * 4.1 + uv.x * 3.0 + uv.y * 2.0 + ph) * 0.08) * w;
        transformed.x += sin(uTime * 1.7 + ph) * 0.15 * w * w;
      }`);
  };
  m.customProgramCacheKey = () => 'bannerWave';
  return m;
}

function chevronTexture(dir) {
  return canvasTex(128, 64, (g, w, h) => {
    g.fillStyle = '#a8322a'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#e6c066'; g.lineWidth = 4; g.strokeRect(3, 3, w - 6, h - 6);
    g.fillStyle = '#f2d27a';
    for (const cx of [44, 84]) {
      g.beginPath();
      g.moveTo(cx - 12 * dir, 14); g.lineTo(cx + 10 * dir, 32); g.lineTo(cx - 12 * dir, 50);
      g.lineTo(cx - 2 * dir, 50); g.lineTo(cx + 20 * dir, 32); g.lineTo(cx - 2 * dir, 14); g.closePath(); g.fill();
    }
  });
}

export function buildDecor(scene, track, terrain, extraLanterns = []) {
  const rnd = new Rand(31337);
  const L = track.length;
  const groundY = (x, z) => {
    const i = track.nearestIndex(x, z);
    if (i >= 0 && track.distance(x, z) < track.halfW[i] + 0.5) return track.py[i];
    return terrain.heightAt(x, z);
  };
  const sidePoint = (i, lat) => [track.px[i] + track.rx[i] * lat, track.pz[i] + track.rz[i] * lat];
  const bridgeZone = (i) => track.wall[i] < track.halfW[i] + 2.5;

  // ------------------------------------------------------------ lanterns
  const lanterns = [...extraLanterns.map((p) => ({ p: p.clone(), ph: rnd.range(0, TAU), s: 0.8 }))];
  const poles = new GeoBuilder();
  for (let s = 12; s < L; s += 30) {
    const i = track.idx(s);
    if (bridgeZone(i)) continue;
    const side = (Math.round(s / 30) & 1) ? 1 : -1, lat = side * (track.wall[i] + 1.4);
    const [x, z] = sidePoint(i, lat), y = terrain.heightAt(x, z);
    if (y < WL + 0.3) continue;
    const yaw = Math.atan2(-track.rx[i] * side, -track.rz[i] * side);
    const m = makeMat([x, y, z], [0, yaw, 0]);
    poles.addM(new THREE.CylinderGeometry(0.09, 0.12, 4.9, 6).translate(0, 2.45, 0), 0x4d3424, m);
    poles.addM(new THREE.BoxGeometry(0.09, 0.09, 1.45).translate(0, 4.7, 0.6), 0x4d3424, m);
    poles.addM(new THREE.BoxGeometry(0.05, 0.4, 0.05).translate(0, 4.5, 0.15).rotateX(0.7), 0x4d3424, m);
    lanterns.push({ p: new THREE.Vector3(0, 4.62, 1.2).applyMatrix4(m), ph: rnd.range(0, TAU), s: 1 });
  }
  // strings of lanterns and bunting across the course
  const ropes = new GeoBuilder();
  const bunting = new GeoBuilder();
  const buntCols = [0xc0392b, 0xe2b53e, 0x2f7d5b, 0x2c5d8a, 0xd8743a];
  for (const s of [L - 34, 26, 70, 330, 760, 1060, 1350, 1700]) {
    const i = track.idx(s);
    if (bridgeZone(i)) continue;
    const ends = [-1, 1].map((sd) => { const [x, z] = sidePoint(i, sd * (track.wall[i] + 1.0)); return new THREE.Vector3(x, terrain.heightAt(x, z), z); });
    for (const e of ends) poles.add(new THREE.CylinderGeometry(0.13, 0.17, 7.6, 6), 0x5a3a26, [e.x, e.y + 3.8, e.z]);
    const a = ends[0].clone().setY(ends[0].y + 7.3), b = ends[1].clone().setY(ends[1].y + 7.3);
    const pts = [];
    for (let k = 0; k <= 16; k++) { const t = k / 16; pts.push(new THREE.Vector3().lerpVectors(a, b, t).add(new THREE.Vector3(0, -Math.sin(t * Math.PI) * 1.4, 0))); }
    ropes.add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.035, 4), 0x2a1d14);
    for (let k = 1; k < 10; k++) {
      const t = k / 10, p = new THREE.Vector3().lerpVectors(a, b, t); p.y -= Math.sin(t * Math.PI) * 1.4;
      lanterns.push({ p, ph: rnd.range(0, TAU), s: 0.9 });
    }
    for (let k = 0; k < 28; k++) {
      const t = (k + 0.5) / 28, p = new THREE.Vector3().lerpVectors(a, b, t); p.y -= Math.sin(t * Math.PI) * 1.4 + 0.05;
      const g = new THREE.BufferGeometry();
      const d = new THREE.Vector3().subVectors(b, a).normalize().multiplyScalar(0.28);
      g.setAttribute('position', new THREE.Float32BufferAttribute([p.x - d.x, p.y, p.z - d.z, p.x + d.x, p.y, p.z + d.z, p.x, p.y - 0.75, p.z], 3));
      g.computeVertexNormals();
      bunting.add(g, buntCols[k % buntCols.length]);
    }
  }
  const poleMesh = new THREE.Mesh(poles.build(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }));
  poleMesh.castShadow = true;
  scene.add(poleMesh);
  scene.add(new THREE.Mesh(ropes.build(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 })));
  scene.add(new THREE.Mesh(bunting.build(), new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.8 })));

  const lanternBody = new THREE.SphereGeometry(0.46, 14, 10);
  lanternBody.scale(1, 0.86, 1); lanternBody.translate(0, -0.78, 0);
  const lb = new GeoBuilder();
  lb.add(new THREE.CylinderGeometry(0.24, 0.26, 0.13, 10), 0xd9a63e, [0, -0.36, 0]);
  lb.add(new THREE.CylinderGeometry(0.26, 0.24, 0.13, 10), 0xd9a63e, [0, -1.19, 0]);
  lb.add(new THREE.CylinderGeometry(0.02, 0.02, 0.32, 4), 0x2a1d14, [0, -0.16, 0]);
  lb.add(new THREE.CylinderGeometry(0.07, 0.02, 0.55, 6), 0xc0392b, [0, -1.5, 0]);
  lb.add(new THREE.SphereGeometry(0.06, 6, 4), 0xe2b53e, [0, -1.24, 0]);
  const nL = lanterns.length;
  const lanternMesh = new THREE.InstancedMesh(lanternBody, new THREE.MeshStandardMaterial({ color: 0xd8402c, emissive: 0xd23a1c, emissiveIntensity: 0.85, roughness: 0.6 }), nL);
  const lanternTrim = new THREE.InstancedMesh(lb.build(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.3 }), nL);
  lanternMesh.frustumCulled = lanternTrim.frustumCulled = false;
  scene.add(lanternMesh, lanternTrim);
  const glowPos = new Float32Array(nL * 3);
  lanterns.forEach((l, k) => { glowPos[k * 3] = l.p.x; glowPos[k * 3 + 1] = l.p.y - 0.78 * l.s; glowPos[k * 3 + 2] = l.p.z; });
  const glowGeo = new THREE.BufferGeometry();
  glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPos, 3));
  const glow = new THREE.Points(glowGeo, new THREE.PointsMaterial({ map: glowTexture(), color: 0xff9a52, size: 3.4, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
  scene.add(glow);

  // ------------------------------------------------------------ banners
  const bannerDefs = [['牛', '#a8241c', '#f3d27a'], ['福', '#d9a425', '#9e1f16'], ['春', '#2f6b4a', '#f4ead2'], ['胜', '#1f4e79', '#f3d27a'], ['勇', '#26201c', '#e9c46a'], ['赛', '#b8322a', '#fff1d0']];
  const bannerGeo = new THREE.PlaneGeometry(2.0, 6.0, 3, 10);
  bannerGeo.translate(0, -3.0, 0);
  const banners = bannerDefs.map(([t, bg, fg]) => new Scatter(bannerGeo, waveMaterial(bannerTexture(t, bg, fg)), { castShadow: true }));
  const bpoles = new GeoBuilder();
  const addBanner = (i, side, kind) => {
    if (bridgeZone(i)) return;
    const lat = side * (track.wall[i] + 3.2);
    const [x, z] = sidePoint(i, lat), y = terrain.heightAt(x, z);
    if (y < WL + 0.3 || terrain.blocked(x, z, 0.5)) return;
    const face = Math.atan2(-track.tx[i], -track.tz[i]) - side * 0.6;
    // the banner hangs beside the pole, on the side nearer the course
    let ox = Math.cos(face), oz = -Math.sin(face);
    if (ox * -track.rx[i] * side + oz * -track.rz[i] * side < 0) { ox = -ox; oz = -oz; }
    bpoles.add(new THREE.CylinderGeometry(0.08, 0.11, 9.4, 6), 0x8e8a4e, [x, y + 4.7, z]);
    bpoles.add(new THREE.CylinderGeometry(0.05, 0.05, 2.5, 5), 0x8e8a4e, [x + ox * 1.15, y + 8.9, z + oz * 1.15], [0, face, Math.PI / 2]);
    bpoles.add(new THREE.SphereGeometry(0.16, 8, 6), 0xd4a94a, [x, y + 9.5, z]);
    banners[kind].add(makeMat([x + ox * 1.2, y + 8.85, z + oz * 1.2], [0, face, 0]));
  };
  let kind = 0;
  for (let s = 0; s < L; s += 52) addBanner(track.idx(s + 20), (Math.round(s / 52) & 1) ? -1 : 1, kind++ % banners.length);
  for (let s = -84; s <= 84; s += 14) for (const side of [-1, 1]) if (Math.abs(s) > 9) addBanner(track.idx((s + L) % L), side, kind++ % banners.length);
  for (const b of banners) b.build(scene);
  const bpMesh = new THREE.Mesh(bpoles.build(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }));
  bpMesh.castShadow = true;
  scene.add(bpMesh);

  // ------------------------------------------------------------ bamboo fences along the walls
  const postGeo = new THREE.CylinderGeometry(0.075, 0.09, 1.25, 5); postGeo.translate(0, 0.62, 0);
  const railGeo = new THREE.CylinderGeometry(0.05, 0.05, 1, 5); railGeo.translate(0, 0.5, 0);
  const fenceMat = new THREE.MeshStandardMaterial({ color: 0xa9a35c, roughness: 0.8 });
  const posts = new Scatter(postGeo, fenceMat, { maxDist: 420, receiveShadow: true });
  const rails = new Scatter(railGeo, fenceMat, { maxDist: 420, receiveShadow: true });
  for (const side of [-1, 1]) {
    let prev = null;
    for (let i = 0; i < track.N; i += 2) {
      if (bridgeZone(i)) { prev = null; continue; }
      const lat = side * (track.wall[i] + 0.45);
      const [x, z] = sidePoint(i, lat), y = terrain.heightAt(x, z);
      if (y < WL + 0.2) { prev = null; continue; }
      const cur = new THREE.Vector3(x, y, z);
      posts.add(makeMat([x, y - 0.1, z], [0, rnd.range(0, TAU), 0], [1, rnd.range(0.9, 1.1), 1]));
      if (prev && prev.distanceTo(cur) < 6) {
        for (const h of [0.45, 0.95]) {
          const a = prev.clone().setY(prev.y + h), b = cur.clone().setY(cur.y + h);
          const d = new THREE.Vector3().subVectors(b, a), len = d.length();
          _q.setFromUnitVectors(UP, d.normalize());
          rails.add(new THREE.Matrix4().compose(a, _q, _v.set(1, len, 1)));
        }
      }
      prev = cur;
    }
  }
  posts.build(scene); rails.build(scene);

  // corner warning boards on the outside of tight bends
  const chevL = chevronTexture(-1), chevR = chevronTexture(1);
  const boardGeo = new THREE.PlaneGeometry(1.8, 0.9);
  const boardsL = new Scatter(boardGeo, new THREE.MeshStandardMaterial({ map: chevL, side: THREE.DoubleSide, roughness: 0.7 }), {});
  const boardsR = new Scatter(boardGeo, new THREE.MeshStandardMaterial({ map: chevR, side: THREE.DoubleSide, roughness: 0.7 }), {});
  const boardPosts = new GeoBuilder();
  for (let i = 0; i < track.N; i += 7) {
    const k = track.curv[i];
    if (Math.abs(k) < 0.02 || bridgeZone(i)) continue;
    const side = k > 0 ? 1 : -1; // outside of the bend
    const [x, z] = sidePoint(i, side * (track.wall[i] + 0.15)), y = terrain.heightAt(x, z);
    if (y < WL + 0.2) continue;
    const yaw = Math.atan2(-track.tx[i], -track.tz[i]) - side * 0.35;
    (k > 0 ? boardsL : boardsR).add(makeMat([x, y + 1.75, z], [0, yaw, 0]));
    boardPosts.add(new THREE.BoxGeometry(0.1, 1.4, 0.1), 0x4d3424, [x, y + 0.7, z]);
  }
  boardsL.build(scene); boardsR.build(scene);
  scene.add(new THREE.Mesh(boardPosts.build(), new THREE.MeshStandardMaterial({ vertexColors: true })));

  // ------------------------------------------------------------ villagers cheering at the start
  const body = new GeoBuilder();
  body.add(new THREE.CylinderGeometry(0.26, 0.46, 1.15, 8), 0xffffff, [0, 0.58, 0]);
  body.add(new THREE.CylinderGeometry(0.24, 0.28, 0.6, 8), 0xffffff, [0, 1.42, 0]);
  for (const s of [-1, 1]) body.add(new THREE.CylinderGeometry(0.065, 0.075, 0.7, 5), 0xffffff, [s * 0.38, 1.85, 0], [0, 0, -s * 0.55]);
  const skin = new GeoBuilder();
  skin.add(new THREE.SphereGeometry(0.21, 10, 8), 0xe2b48c, [0, 1.92, 0]);
  for (const s of [-1, 1]) skin.add(new THREE.SphereGeometry(0.08, 6, 4), 0xe2b48c, [s * 0.58, 2.16, 0]);
  const hat = new GeoBuilder();
  hat.add(new THREE.ConeGeometry(0.46, 0.26, 14), 0xffffff, [0, 2.12, 0]);
  const crowdMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
  const crowd = [];
  const clothes = [0x2f4a6d, 0x3c6e99, 0xa23a2e, 0x4c7a52, 0x6d7f8c, 0xd9d2c3, 0xc4703a, 0x7b4a8a];
  for (const side of [-1, 1]) for (let s = -70; s <= 70; s += rnd.range(1.4, 2.6)) {
    const i = track.idx((s + L) % L);
    const lat = side * (track.wall[i] + rnd.range(1.6, 6.5));
    const [x, z] = sidePoint(i, lat);
    if (terrain.blocked(x, z, 0.4) || Math.abs(s) < 3) continue;
    const yaw = Math.atan2(-track.rx[i] * side, -track.rz[i] * side) + rnd.range(-0.5, 0.5);
    crowd.push({ x, y: terrain.heightAt(x, z), z, yaw, ph: rnd.range(0, TAU), sp: rnd.range(5, 9), sc: rnd.range(0.85, 1.12), cloth: col(rnd.pick(clothes)), hat: rnd.chance(0.65) ? col(0xc9a65a) : col(0x2b2b2b) });
  }
  const nC = crowd.length;
  const crowdBody = new THREE.InstancedMesh(body.build(), crowdMat, nC);
  const crowdSkin = new THREE.InstancedMesh(skin.build(), crowdMat, nC);
  const crowdHat = new THREE.InstancedMesh(hat.build(), crowdMat, nC);
  crowd.forEach((c, k) => { crowdBody.setColorAt(k, c.cloth); crowdHat.setColorAt(k, c.hat); crowdSkin.setColorAt(k, col(0xffffff)); });
  for (const m of [crowdBody, crowdSkin, crowdHat]) { m.castShadow = true; m.frustumCulled = false; scene.add(m); }

  // ------------------------------------------------------------ kites & egrets
  const kites = [];
  const kiteLines = new THREE.LineBasicMaterial({ color: 0x3a3a3a, transparent: true, opacity: 0.35 });
  for (const [x, z, h, acc] of [[-20, 300, 70, '#c0392b'], [60, 280, 58, '#2c5d7c'], [-120, 140, 64, '#2f7d5b'], [150, 120, 80, '#c0392b'], [-60, -150, 76, '#d58a2a']]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshStandardMaterial({ map: kiteTexture(acc), side: THREE.DoubleSide, alphaTest: 0.4, roughness: 0.7 }));
    m.position.set(x, h, z);
    const anchor = new THREE.Vector3(x - 40, terrain.heightAt(x - 40, z + 30) + 1, z + 30);
    const lg = new THREE.BufferGeometry().setFromPoints([anchor, m.position.clone()]);
    const line = new THREE.Line(lg, kiteLines);
    scene.add(m, line);
    kites.push({ m, line, base: m.position.clone(), anchor, ph: rnd.range(0, TAU) });
  }
  const birds = [];
  const birdBody = new GeoBuilder();
  birdBody.add(new THREE.SphereGeometry(0.35, 8, 6).scale(0.7, 0.7, 1.6), 0xf4f2ec);
  birdBody.add(new THREE.CylinderGeometry(0.07, 0.1, 0.9, 5), 0xf4f2ec, [0, 0.25, 0.75], [0.9, 0, 0]);
  birdBody.add(new THREE.ConeGeometry(0.05, 0.5, 5), 0xd8b23a, [0, 0.42, 1.3], [1.57, 0, 0]);
  const wingGeo = new THREE.BufferGeometry();
  wingGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.35, 0, 0, -0.35, 1.9, 0, -0.55, 0, 0, 0.35, 1.9, 0, -0.55, 1.6, 0, 0.1], 3));
  wingGeo.computeVertexNormals();
  const birdMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide });
  const wingMat = new THREE.MeshStandardMaterial({ color: 0xf6f4ee, roughness: 0.8, side: THREE.DoubleSide });
  const bodyGeo = birdBody.build();
  for (let k = 0; k < 12; k++) {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(bodyGeo, birdMat));
    const wl = new THREE.Mesh(wingGeo, wingMat), wr = new THREE.Mesh(wingGeo, wingMat);
    wr.scale.x = -1;
    g.add(wl, wr);
    scene.add(g);
    birds.push({ g, wl, wr, cx: k < 6 ? 380 : LAKE.x, cz: k < 6 ? -80 : LAKE.z, r: rnd.range(30, 70), h: rnd.range(18, 34), a: rnd.range(0, TAU), sp: rnd.range(0.08, 0.14) * (k % 2 ? 1 : -1), ph: rnd.range(0, TAU) });
  }

  // ------------------------------------------------------------ boost pads
  const padTex = boostPadTexture();
  padTex.wrapT = THREE.RepeatWrapping;
  const padMat = new THREE.MeshBasicMaterial({ map: padTex, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false });
  const padGeo = new THREE.PlaneGeometry(4.2, 7.2);
  padGeo.rotateX(-Math.PI / 2); padGeo.rotateY(Math.PI);
  const pads = [];
  for (const [f, lat] of [[0.075, -3.5], [0.2, 3.5], [0.34, 0], [0.47, -3], [0.6, 3.2], [0.71, -2.5], [0.83, 3], [0.93, 0]]) {
    // nudge each pad onto the straightest stretch nearby
    let bi = track.idx(f * L), bk = Infinity;
    for (let d = -40; d <= 40; d += 4) { const i = track.idx(f * L + d * track.ds); const k = Math.abs(track.curv[i]); if (k < bk && !bridgeZone(i)) { bk = k; bi = i; } }
    const x = track.px[bi] + track.rx[bi] * lat, z = track.pz[bi] + track.rz[bi] * lat;
    const m = new THREE.Mesh(padGeo, padMat);
    m.position.set(x, track.py[bi] + 0.14, z);
    m.rotation.y = track.headingAt(bi);
    m.renderOrder = 2;
    scene.add(m);
    pads.push({ i: bi, lat, m });
  }

  // ------------------------------------------------------------ grass bundle pickups (牛劲)
  const bundle = new GeoBuilder();
  for (let k = 0; k < 14; k++) {
    const a = (k / 14) * TAU, r = 0.32;
    bundle.add(new THREE.ConeGeometry(0.12, 1.5, 4), k % 3 ? 0x7fae3e : 0xa5c45a, [Math.cos(a) * r, 0.1, Math.sin(a) * r], [Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25]);
  }
  bundle.add(new THREE.CylinderGeometry(0.4, 0.4, 0.95, 10), 0x86b043, [0, -0.1, 0]);
  bundle.add(new THREE.TorusGeometry(0.42, 0.07, 6, 16), 0xc0392b, [0, 0.0, 0], [Math.PI / 2, 0, 0]);
  const pickups = [];
  for (const f of [0.15, 0.4, 0.55, 0.78, 0.97]) {
    const i = track.idx(f * L);
    if (bridgeZone(i)) continue;
    for (const lat of [-6, -2, 2, 6]) {
      const x = track.px[i] + track.rx[i] * lat, z = track.pz[i] + track.rz[i] * lat;
      pickups.push({ x, y: track.py[i] + 1.3, z, active: true, timer: 0, ph: rnd.range(0, TAU) });
    }
  }
  const pickupMesh = new THREE.InstancedMesh(bundle.build(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, emissive: 0x2a4a10, emissiveIntensity: 0.6 }), pickups.length);
  pickupMesh.castShadow = true; pickupMesh.frustumCulled = false;
  scene.add(pickupMesh);
  const pgPos = new Float32Array(pickups.length * 3);
  const pgGeo = new THREE.BufferGeometry(); pgGeo.setAttribute('position', new THREE.BufferAttribute(pgPos, 3));
  const pickupGlow = new THREE.Points(pgGeo, new THREE.PointsMaterial({ map: glowTexture(), color: 0xe8f08a, size: 4.2, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
  pickupGlow.frustumCulled = false;
  scene.add(pickupGlow);

  // ------------------------------------------------------------ animation & interactions
  return {
    pads, pickups,
    update(dt, t, racers, events) {
      for (let k = 0; k < nL; k++) {
        const l = lanterns[k];
        _e.set(Math.sin(t * 1.3 + l.ph) * 0.08, 0, Math.cos(t * 1.1 + l.ph * 1.7) * 0.08);
        _q.setFromEuler(_e);
        _m.compose(l.p, _q, _s.setScalar(l.s));
        lanternMesh.setMatrixAt(k, _m); lanternTrim.setMatrixAt(k, _m);
      }
      lanternMesh.instanceMatrix.needsUpdate = lanternTrim.instanceMatrix.needsUpdate = true;

      for (let k = 0; k < nC; k++) {
        const c = crowd[k];
        const jump = Math.max(0, Math.sin(t * c.sp + c.ph)) * 0.35 * c.sc;
        _e.set(0, c.yaw + Math.sin(t * 2 + c.ph) * 0.25, Math.sin(t * c.sp * 0.5 + c.ph) * 0.08);
        _q.setFromEuler(_e);
        _m.compose(_v.set(c.x, c.y + jump, c.z), _q, _s.setScalar(c.sc));
        crowdBody.setMatrixAt(k, _m); crowdSkin.setMatrixAt(k, _m); crowdHat.setMatrixAt(k, _m);
      }
      crowdBody.instanceMatrix.needsUpdate = crowdSkin.instanceMatrix.needsUpdate = crowdHat.instanceMatrix.needsUpdate = true;

      for (const k of kites) {
        k.m.position.set(k.base.x + Math.sin(t * 0.4 + k.ph) * 4, k.base.y + Math.sin(t * 0.7 + k.ph) * 2.5, k.base.z + Math.cos(t * 0.3 + k.ph) * 3);
        k.m.lookAt(k.anchor.x, k.m.position.y - 30, k.anchor.z);
        k.m.rotateZ(Math.sin(t * 0.9 + k.ph) * 0.25);
        const p = k.line.geometry.attributes.position;
        p.setXYZ(1, k.m.position.x, k.m.position.y - 2.5, k.m.position.z); p.needsUpdate = true;
      }
      for (const b of birds) {
        b.a += b.sp * dt;
        const x = b.cx + Math.cos(b.a) * b.r, z = b.cz + Math.sin(b.a) * b.r;
        b.g.position.set(x, b.h + Math.sin(t * 0.5 + b.ph) * 2, z);
        b.g.lookAt(b.cx + Math.cos(b.a + b.sp) * b.r, b.g.position.y, b.cz + Math.sin(b.a + b.sp) * b.r);
        const flap = Math.sin(t * 5 + b.ph) * 0.55;
        b.wl.rotation.z = flap; b.wr.rotation.z = -flap;
      }
      padTex.offset.y = -(t * 1.4) % 1;
      padMat.opacity = 0.7 + Math.sin(t * 6) * 0.2;

      for (let k = 0; k < pickups.length; k++) {
        const p = pickups[k];
        if (!p.active) { p.timer -= dt; if (p.timer <= 0) p.active = true; }
        const sc = p.active ? 1 : 0.0001;
        _e.set(0.25, t * 1.8 + p.ph, 0);
        _q.setFromEuler(_e);
        _m.compose(_v.set(p.x, p.y + Math.sin(t * 2.5 + p.ph) * 0.25, p.z), _q, _s.setScalar(sc));
        pickupMesh.setMatrixAt(k, _m);
        pgPos[k * 3] = p.x; pgPos[k * 3 + 1] = p.active ? p.y : -999; pgPos[k * 3 + 2] = p.z;
      }
      pickupMesh.instanceMatrix.needsUpdate = true;
      pgGeo.attributes.position.needsUpdate = true;

      if (racers) for (const r of racers) {
        for (const pd of pads) {
          if (Math.abs(track.sDist(r.idx, pd.i)) < 3.8 && Math.abs(r.lat - pd.lat) < 2.4) r.onBoostPad(events);
        }
        for (const p of pickups) {
          if (!p.active) continue;
          const dx = r.pos.x - p.x, dz = r.pos.z - p.z;
          if (dx * dx + dz * dz < 2.4 * 2.4) {
            p.active = false; p.timer = 6;
            r.onPickup(events);
            if (events) events.push({ type: 'pickup', racer: r, x: p.x, y: p.y, z: p.z });
          }
        }
      }
    },
  };
}
