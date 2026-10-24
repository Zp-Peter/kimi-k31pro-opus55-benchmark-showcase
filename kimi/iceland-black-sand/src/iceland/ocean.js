import * as THREE from 'three';
import { Water } from 'three/addons/objects/Water.js';
import { createWaterNormals } from './materials.js';
import { shoreline } from './world.js';

const foamVertex = /* glsl */`
  uniform float uTime;
  uniform float uPhase;
  varying vec2 vUv;
  varying float vLife;
  varying float vDepth;
  varying float vCycle;
  void main() {
    vUv = uv;
    float cycle = mod(uTime * 0.82 + uPhase, 16.0);
    vCycle = cycle;
    vLife = smoothstep(0.0, 2.2, cycle) * (1.0 - smoothstep(12.5, 16.0, cycle));
    vec3 transformed = position;
    transformed.z += cycle - 13.0;
    transformed.y += 0.13 + sin(position.x * 0.19 + uTime * 1.4) * 0.025;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    vDepth = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const foamFragment = /* glsl */`
  uniform float uTime;
  varying vec2 vUv;
  varying float vLife;
  varying float vDepth;
  varying float vCycle;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float value = 0.0;
    value += noise(p) * 0.5333;
    value += noise(p * 2.03) * 0.2667;
    value += noise(p * 4.01) * 0.1333;
    value += noise(p * 8.02) * 0.0667;
    return value;
  }
  void main() {
    float center = max(0.0, 1.0 - abs(vUv.y - 0.5) * 2.0);
    float band = pow(center, 0.55) * smoothstep(0.0, 0.12, center);
    vec2 flowUv = vec2(vUv.x * 210.0, vUv.y * 10.0 - uTime * 0.16);
    float foam = fbm(flowUv) * 0.72 + fbm(flowUv * 2.7 + 9.0) * 0.28;
    float cells = smoothstep(0.4, 0.7, foam + center * 0.15);
    float feather = 0.62 + sin(vUv.x * 97.0 + uTime) * 0.12;
    float distanceFade = 1.0 - smoothstep(150.0, 340.0, vDepth);
    float alpha = band * (0.08 + cells * 0.92) * vLife * distanceFade * feather * 0.68;
    if (alpha < 0.015) discard;
    vec3 color = mix(vec3(0.46, 0.53, 0.54), vec3(0.9, 0.93, 0.89), cells * 0.82 + center * 0.18);
    gl_FragColor = vec4(color, alpha);
  }
`;

function createFoam() {
  const group = new THREE.Group();
  group.name = 'Advancing Atlantic foam';
  const geometry = new THREE.PlaneGeometry(280, 3.1, 220, 6);
  geometry.rotateX(-Math.PI / 2);
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i += 1) {
    const x = positions.getX(i);
    const z = positions.getZ(i);
    const irregularity = Math.sin(x * 0.43 + z * 0.8) * 0.42 + Math.sin(x * 1.17 - z) * 0.13;
    positions.setZ(i, z + shoreline(x) + irregularity);
  }
  const materials = [];
  for (let i = 0; i < 6; i += 1) {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPhase: { value: i * 2.67 },
      },
      vertexShader: foamVertex,
      fragmentShader: foamFragment,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const wave = new THREE.Mesh(geometry, material);
    wave.renderOrder = 4;
    group.add(wave);
    materials.push(material);
  }
  return { group, materials };
}

export function createOcean(scene, sunDirection) {
  const waterNormals = createWaterNormals();
  const geometry = new THREE.PlaneGeometry(850, 850, 140, 140);
  const reflectionSize = window.innerWidth < 720 ? 256 : 512;
  const water = new Water(geometry, {
    textureWidth: reflectionSize,
    textureHeight: reflectionSize,
    waterNormals,
    sunDirection,
    sunColor: 0xdde2dc,
    waterColor: 0x20383e,
    distortionScale: 2.7,
    fog: true,
    clipBias: 0.002,
  });
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, 0.015, -310);
  water.material.uniforms.size.value = 3.4;
  water.name = 'North Atlantic water';

  water.material.vertexShader = water.material.vertexShader
    .replace(
      'mirrorCoord = modelMatrix * vec4( position, 1.0 );',
      `vec3 wavePosition = position;
       wavePosition.z += sin(position.x * 0.047 + time * 0.8) * 0.11;
       wavePosition.z += sin(position.y * 0.071 - time * 0.57) * 0.065;
       mirrorCoord = modelMatrix * vec4( wavePosition, 1.0 );`,
    )
    .replace(
      'vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );',
      'vec4 mvPosition = modelViewMatrix * vec4( wavePosition, 1.0 );',
    );
  water.material.fragmentShader = water.material.fragmentShader
    .replace('float rf0 = 0.3;', 'float rf0 = 0.2;')
    .replace('vec3( 0.1 ) + reflectionSample', 'vec3( 0.035 ) + reflectionSample');
  scene.add(water);

  const foam = createFoam();
  scene.add(foam.group);

  return {
    water,
    update(time) {
      water.material.uniforms.time.value = time * 0.62;
      foam.materials.forEach((material) => { material.uniforms.uTime.value = time; });
    },
  };
}
