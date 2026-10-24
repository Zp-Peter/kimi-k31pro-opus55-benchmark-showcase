import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { createSandTextures, createBasaltTextures, fbm, mulberry32, noise2 } from './materials.js';

export function shoreline(x) {
  return -8 + Math.sin(x * 0.034) * 4.2 + Math.sin(x * 0.105 + 1.7) * 1.35;
}

export function terrainHeight(x, z) {
  const distance = z - shoreline(x);
  const land = THREE.MathUtils.smoothstep(distance, -1, 17);
  const broad = (fbm(x * 0.032 + 18, z * 0.032 + 7, 4) - 0.5) * 1.55 * land;
  const dune = Math.max(0, distance - 22) * 0.013 * land;
  const ripples = (Math.sin(x * 0.63 + z * 0.24) * 0.026 + Math.sin(x * 1.7 - z * 0.31) * 0.012) * land;
  return 0.045 + distance * 0.026 + broad + dune + ripples;
}

function createSandMaterial() {
  const textures = createSandTextures();
  const material = new THREE.MeshStandardMaterial({
    ...textures,
    color: 0xd7d9d4,
    roughness: 0.91,
    metalness: 0.03,
    bumpScale: 0.13,
    envMapIntensity: 0.72,
  });
  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vSandPosition;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSandPosition = position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vSandPosition;
        float sandWetness(vec3 p) {
          float coast = -8.0 + sin(p.x * 0.034) * 4.2 + sin(p.x * 0.105 + 1.7) * 1.35;
          return 1.0 - smoothstep(0.5, 16.0, p.z - coast);
        }
      `)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float wetSand = sandWetness(vSandPosition);
        diffuseColor.rgb *= mix(1.0, 0.48, wetSand);
      `)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.34, sandWetness(vSandPosition));
      `)
      .replace('vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;', `
        float wetSpecular = sandWetness(vSandPosition);
        reflectedLight.indirectSpecular *= mix(1.0, 0.2, wetSpecular);
        reflectedLight.directSpecular *= mix(1.0, 0.42, wetSpecular);
        vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
      `);
  };
  material.customProgramCacheKey = () => 'reynisfjara-wet-sand-v1';
  return material;
}

function createTerrain() {
  const geometry = new THREE.PlaneGeometry(300, 190, 220, 150);
  geometry.rotateX(-Math.PI / 2);
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i += 1) {
    const x = positions.getX(i);
    const z = positions.getZ(i) + 40;
    positions.setZ(i, z);
    positions.setY(i, terrainHeight(x, z));
  }
  positions.needsUpdate = true;
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, createSandMaterial());
  mesh.receiveShadow = true;
  mesh.name = 'Volcanic black sand';
  return mesh;
}

function createBasaltMaterial() {
  const textures = createBasaltTextures();
  return new THREE.MeshStandardMaterial({
    ...textures,
    color: 0xc3c7c5,
    roughness: 0.76,
    metalness: 0.04,
    bumpScale: 0.34,
    envMapIntensity: 0.68,
  });
}

function createPebbles(material) {
  const random = mulberry32(91827);
  const count = 1550;
  const geometry = new THREE.DodecahedronGeometry(1, 0);
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  for (let i = 0; i < count; i += 1) {
    const close = i < 1100;
    const x = (random() - 0.5) * (close ? 140 : 270);
    let z = close ? random() * 92 - 7 : random() * 145 - 15;
    if (z < shoreline(x) + 0.4) z = shoreline(x) + 0.4 + random() * 4;
    const large = random() > 0.94;
    const size = large ? 0.24 + random() * 0.55 : 0.035 + Math.pow(random(), 2) * 0.21;
    dummy.position.set(x, terrainHeight(x, z) + size * 0.28, z);
    dummy.rotation.set(random() * Math.PI, random() * Math.PI, random() * Math.PI);
    dummy.scale.set(size * (0.8 + random() * 1.25), size * (0.35 + random() * 0.5), size * (0.75 + random() * 0.8));
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    const shade = 0.6 + random() * 0.55;
    color.setRGB(shade * 0.92, shade * 0.98, shade);
    mesh.setColorAt(i, color);
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.instanceColor.needsUpdate = true;
  mesh.receiveShadow = true;
  mesh.name = 'Wave-worn volcanic pebbles';
  return mesh;
}

function distortRock(geometry, seed = 0, strength = 0.18) {
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i += 1) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);
    const factor = 1 + (noise2(x * 2.7 + seed, z * 2.7 + y * 1.9) - 0.5) * strength;
    positions.setXYZ(i, x * factor, y * (1 + (noise2(y + seed, x - z) - 0.5) * strength), z * factor);
  }
  positions.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function createBoulders(material) {
  const random = mulberry32(66309);
  const rawGeometry = distortRock(new THREE.IcosahedronGeometry(1, 3), 14, 0.34);
  rawGeometry.deleteAttribute('normal');
  const geometry = mergeVertices(rawGeometry, 0.001);
  geometry.computeVertexNormals();
  rawGeometry.dispose();
  const count = 42;
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const fixed = [
    [17, 11, 1.9], [21, 8, 1.15], [-20, 4, 0.85], [26, -7, 1.35],
    [29, -12, 1.7], [-32, -3, 0.65], [12, 24, 0.7], [33, 18, 1.1],
  ];
  for (let i = 0; i < count; i += 1) {
    let x;
    let z;
    let size;
    if (i < fixed.length) {
      [x, z, size] = fixed[i];
    } else {
      x = 18 + random() * 83;
      z = -72 + random() * 35;
      size = 0.25 + Math.pow(random(), 1.5) * 1.25;
    }
    dummy.position.set(x, Math.max(-0.5, terrainHeight(x, z)) + size * 0.4, z);
    dummy.rotation.set(random() * 2, random() * Math.PI, random() * 2);
    dummy.scale.set(size * (0.8 + random() * 0.6), size * (0.65 + random() * 0.7), size * (0.85 + random() * 0.5));
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    const shade = 0.57 + random() * 0.38;
    color.setRGB(shade * 0.94, shade, shade * 1.02);
    mesh.setColorAt(i, color);
  }
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = 'Basalt boulders and cliff scree';
  return mesh;
}

function createCliff(material) {
  const group = new THREE.Group();
  group.name = 'Reynisfjara basalt escarpment';
  const random = mulberry32(10993);

  const wallGeometry = new THREE.PlaneGeometry(110, 42, 55, 22);
  const wallPositions = wallGeometry.attributes.position;
  const colors = [];
  const rockColor = new THREE.Color(0x7a807e);
  const mossColor = new THREE.Color(0x737d5c);
  for (let i = 0; i < wallPositions.count; i += 1) {
    const x = wallPositions.getX(i);
    const y = wallPositions.getY(i);
    const topFactor = THREE.MathUtils.smoothstep(y, -4, 21);
    const ridge = (fbm(x * 0.065 + 4, 2, 4) - 0.5) * 16 + x * 0.11;
    wallPositions.setY(i, y + ridge * topFactor);
    wallPositions.setZ(i, (fbm(x * 0.1, y * 0.08, 4) - 0.5) * 5.5);
    const moss = THREE.MathUtils.smoothstep(y + ridge * topFactor, 10, 20) * (0.35 + noise2(x * 0.2, y) * 0.5);
    const vertexColor = rockColor.clone().lerp(mossColor, moss);
    colors.push(vertexColor.r, vertexColor.g, vertexColor.b);
  }
  wallGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  wallGeometry.computeVertexNormals();
  const wallMaterial = material.clone();
  wallMaterial.vertexColors = true;
  wallMaterial.color.set(0xb5bab6);
  const wall = new THREE.Mesh(wallGeometry, wallMaterial);
  wall.position.set(75, 15, -80);
  wall.rotation.y = -0.08;
  wall.castShadow = wall.receiveShadow = true;
  group.add(wall);

  const rows = 6;
  const columns = 23;
  const count = rows * columns;
  const geometry = new THREE.CylinderGeometry(1, 1.04, 1, 6, 2, false);
  geometry.rotateY(Math.PI / 6);
  const columnsMesh = new THREE.InstancedMesh(geometry, material, count);
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  let index = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const x = 23 + column * 2.55 + (row % 2) * 1.26;
      const z = -55.5 - row * 2.22 + Math.sin(column * 0.46) * 2.1;
      const radius = 1.25 + random() * 0.22;
      const height = 8.5 + row * 2.5 + random() * 8 + Math.sin(column * 0.37 + 1) * 3.2 + column * 0.18;
      const base = -1.8 + random() * 0.5;
      dummy.position.set(x, base + height / 2, z);
      dummy.rotation.set(0, (random() - 0.5) * 0.1, (random() - 0.5) * 0.015);
      dummy.scale.set(radius, height, radius);
      dummy.updateMatrix();
      columnsMesh.setMatrixAt(index, dummy.matrix);
      const shade = 0.64 + random() * 0.42;
      color.setRGB(shade * 0.91, shade * 0.98, shade);
      columnsMesh.setColorAt(index, color);
      index += 1;
    }
  }
  columnsMesh.castShadow = columnsMesh.receiveShadow = true;
  group.add(columnsMesh);

  const capGeometry = new THREE.PlaneGeometry(110, 35, 55, 12);
  capGeometry.rotateX(-Math.PI / 2);
  const capPositions = capGeometry.attributes.position;
  for (let i = 0; i < capPositions.count; i += 1) {
    const x = capPositions.getX(i);
    const z = capPositions.getZ(i) - 17.5;
    const back = -z / 35;
    const ridge = (fbm(x * 0.065 + 4, 2, 4) - 0.5) * 16 + x * 0.11;
    const weathering = (fbm(x * 0.08, z * 0.1, 3) - 0.5) * 1.5;
    capPositions.setXYZ(i, x, 21 + ridge + back * 4 + weathering, z);
  }
  capGeometry.computeVertexNormals();
  const capMaterial = new THREE.MeshStandardMaterial({ color: 0x46503b, roughness: 1, side: THREE.DoubleSide });
  const cap = new THREE.Mesh(capGeometry, capMaterial);
  cap.position.copy(wall.position);
  cap.rotation.copy(wall.rotation);
  cap.castShadow = cap.receiveShadow = true;
  group.add(cap);
  return group;
}

function createStackGeometry(height, radius, seed) {
  const geometry = new THREE.CylinderGeometry(radius * 0.34, radius, height, 8, 14, false);
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i += 1) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);
    const angle = Math.atan2(z, x);
    const level = y / height + 0.5;
    const ridges = Math.sin(angle * 3 + seed) * 0.12 + Math.sin(angle * 7 - seed * 0.4) * 0.065;
    const erosion = (noise2(angle * 2.3 + seed, level * 8.5) - 0.5) * 0.2;
    const taper = 1 + ridges + erosion + Math.sin(level * 16 + seed) * 0.035;
    const topJitter = Math.pow(level, 8) * (Math.sin(angle * 3 + seed) * height * 0.055 + Math.sin(angle * 5) * height * 0.025);
    positions.setXYZ(i, x * taper + Math.sin(level * 3 + seed) * radius * 0.13, y + topJitter, z * taper);
  }
  geometry.translate(0, height / 2 - 2.2, 0);
  const faceted = geometry.toNonIndexed();
  faceted.computeVertexNormals();
  geometry.dispose();
  return faceted;
}

function createSeaStacks(material) {
  const group = new THREE.Group();
  group.name = 'Reynisdrangar sea stacks';
  const stacks = [
    { x: -38, z: -105, h: 22, r: 5.7, seed: 4 },
    { x: -53, z: -117, h: 31, r: 6.1, seed: 12 },
    { x: -65, z: -126, h: 18, r: 4.7, seed: 22 },
    { x: -47, z: -113, h: 13, r: 4.5, seed: 31 },
    { x: -70, z: -128, h: 10, r: 4.2, seed: 19 },
  ];
  stacks.forEach((data, index) => {
    const rock = new THREE.Mesh(createStackGeometry(data.h, data.r, data.seed), material);
    rock.position.set(data.x, -0.5, data.z);
    rock.rotation.y = index * 0.73;
    rock.rotation.z = (index - 2) * 0.014;
    rock.castShadow = rock.receiveShadow = true;
    group.add(rock);
  });
  return group;
}

function createTideLines() {
  const group = new THREE.Group();
  const material = new THREE.MeshBasicMaterial({ color: 0x0a1011, transparent: true, opacity: 0.12, depthWrite: false });
  const random = mulberry32(5541);
  for (let i = 0; i < 95; i += 1) {
    const x = (random() - 0.5) * 145;
    const z = shoreline(x) + 5 + random() * 8;
    const geometry = new THREE.CircleGeometry(0.15 + random() * 0.5, 12);
    const piece = new THREE.Mesh(geometry, material);
    piece.rotation.x = -Math.PI / 2;
    piece.rotation.z = random() * Math.PI;
    piece.scale.y = 0.12 + random() * 0.25;
    piece.position.set(x, terrainHeight(x, z) + 0.025, z);
    group.add(piece);
  }
  group.name = 'Organic tide deposits';
  return group;
}

export function createWorld(scene) {
  const basaltMaterial = createBasaltMaterial();
  const pebbleMaterial = basaltMaterial.clone();
  pebbleMaterial.roughness = 0.6;
  pebbleMaterial.bumpScale = 0.18;
  pebbleMaterial.color.set(0xaeb3b0);

  const terrain = createTerrain();
  scene.add(terrain);
  scene.add(createPebbles(pebbleMaterial));
  scene.add(createBoulders(basaltMaterial));
  scene.add(createCliff(basaltMaterial));
  scene.add(createSeaStacks(basaltMaterial));
  scene.add(createTideLines());

  return { terrain, basaltMaterial };
}
