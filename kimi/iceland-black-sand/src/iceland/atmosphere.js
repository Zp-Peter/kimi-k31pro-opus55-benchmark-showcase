import * as THREE from 'three';
import { createMistTexture, createSoftTexture, mulberry32 } from './materials.js';
import { shoreline } from './world.js';

const skyVertex = /* glsl */`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const skyFragment = /* glsl */`
  uniform float uTime;
  uniform vec3 uSunDirection;
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uCloudDark;
  uniform vec3 uCloudLight;
  varying vec3 vDirection;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5 * noise(p); p = p * 2.02 + 13.1;
    f += 0.25 * noise(p); p = p * 2.03 + 7.7;
    f += 0.125 * noise(p); p = p * 2.01 + 3.4;
    f += 0.0625 * noise(p); p = p * 2.04 + 1.2;
    f += 0.03125 * noise(p);
    return f / 0.96875;
  }
  void main() {
    vec3 direction = normalize(vDirection);
    float elevation = max(direction.y, 0.0);
    vec3 color = mix(uHorizon, uZenith, pow(elevation, 0.48));
    vec2 cloudUv = direction.xz / (abs(direction.y) + 0.24);
    cloudUv = cloudUv * 0.72 + vec2(uTime * 0.0035, uTime * 0.0012);
    float broad = fbm(cloudUv * 0.65);
    float detail = fbm(cloudUv * 2.4 + 11.0);
    float density = broad * 0.77 + detail * 0.23;
    float coverage = smoothstep(0.31, 0.68, density);
    float light = clamp(0.26 + elevation * 0.72 + (broad - detail) * 0.6, 0.0, 1.0);
    vec3 cloud = mix(uCloudDark, uCloudLight, light);
    color = mix(color, cloud, coverage * 0.9);
    float sun = max(dot(direction, normalize(uSunDirection)), 0.0);
    float glow = pow(sun, 16.0) * 0.19 + pow(sun, 160.0) * 0.5;
    color += vec3(0.68, 0.64, 0.52) * glow * (1.0 - coverage * 0.68);
    float haze = pow(1.0 - elevation, 9.0) * 0.38;
    color = mix(color, uHorizon, haze);
    gl_FragColor = vec4(color, 1.0);
  }
`;

function createEnvironment(renderer, sunDirection) {
  const environmentScene = new THREE.Scene();
  const sky = createSky(sunDirection);
  environmentScene.add(sky);
  const generator = new THREE.PMREMGenerator(renderer);
  generator.compileCubemapShader();
  const target = generator.fromScene(environmentScene, 0.035, 0.1, 1000);
  generator.dispose();
  sky.geometry.dispose();
  sky.material.dispose();
  return target.texture;
}

function createSky(sunDirection) {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSunDirection: { value: sunDirection },
      uZenith: { value: new THREE.Color(0x3f505b) },
      uHorizon: { value: new THREE.Color(0xa3adae) },
      uCloudDark: { value: new THREE.Color(0x4c595e) },
      uCloudLight: { value: new THREE.Color(0xc0c5c0) },
    },
    vertexShader: skyVertex,
    fragmentShader: skyFragment,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(620, 48, 28), material);
  mesh.name = 'Low North Atlantic cloud ceiling';
  mesh.renderOrder = -100;
  return mesh;
}

function createMist() {
  const group = new THREE.Group();
  const texture = createMistTexture();
  const banks = [
    [-70, 6, -85, 115, 17, 0.16],
    [15, 11, -145, 170, 22, 0.2],
    [95, 15, -118, 130, 24, 0.17],
    [-135, 9, -190, 190, 25, 0.2],
    [35, 3.5, -62, 85, 10, 0.08],
  ];
  banks.forEach(([x, y, z, width, height, opacity], index) => {
    const material = new THREE.SpriteMaterial({
      map: texture,
      color: 0xc4ccca,
      transparent: true,
      opacity,
      depthWrite: false,
      fog: true,
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(x, y, z);
    sprite.scale.set(width, height, 1);
    sprite.userData.baseX = x;
    sprite.userData.speed = 0.16 + index * 0.035;
    group.add(sprite);
  });
  group.name = 'Drifting sea mist';
  return group;
}

function createSpray() {
  const random = mulberry32(8871);
  const count = 230;
  const positions = new Float32Array(count * 3);
  const data = [];
  for (let i = 0; i < count; i += 1) {
    const x = (random() - 0.5) * 190;
    const z = shoreline(x) - 3 + random() * 7;
    const phase = random();
    const speed = 0.09 + random() * 0.13;
    data.push({ x, z, phase, speed });
    positions[i * 3] = x;
    positions[i * 3 + 1] = phase * 1.7;
    positions[i * 3 + 2] = z;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0xe3e8e2,
    size: 0.13,
    map: createSoftTexture(64),
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    sizeAttenuation: true,
    fog: true,
  });
  const points = new THREE.Points(geometry, material);
  points.name = 'Wind-blown sea spray';
  return { points, data };
}

function createBirds() {
  const group = new THREE.Group();
  const random = mulberry32(731);
  const material = new THREE.LineBasicMaterial({ color: 0x20292b, transparent: true, opacity: 0.72, fog: true });
  for (let i = 0; i < 7; i += 1) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute([
      -0.85, 0, 0, 0, 0.22, 0,
      0, 0.22, 0, 0.85, 0, 0,
    ], 3));
    const bird = new THREE.LineSegments(geometry, material);
    bird.position.set(-65 + random() * 100, 18 + random() * 22, -75 - random() * 75);
    const scale = 0.55 + random() * 0.85;
    bird.scale.setScalar(scale);
    bird.userData.origin = bird.position.clone();
    bird.userData.phase = random() * Math.PI * 2;
    group.add(bird);
  }
  group.name = 'Distant fulmars';
  return group;
}

export function createAtmosphere(scene, renderer) {
  const sunDirection = new THREE.Vector3(-0.68, 0.24, -0.69).normalize();
  scene.fog = new THREE.FogExp2(0x8e9b9e, 0.0039);
  scene.environment = createEnvironment(renderer, sunDirection);
  scene.environmentIntensity = 0.85;

  const sky = createSky(sunDirection);
  scene.add(sky);

  const hemisphere = new THREE.HemisphereLight(0xc4d1d5, 0x282a27, 1.55);
  scene.add(hemisphere);

  const sunlight = new THREE.DirectionalLight(0xfff3db, 1.65);
  sunlight.position.copy(sunDirection).multiplyScalar(170);
  sunlight.target.position.set(15, 0, -35);
  sunlight.position.add(sunlight.target.position);
  sunlight.castShadow = true;
  const shadowSize = window.innerWidth < 720 ? 1024 : 2048;
  sunlight.shadow.mapSize.set(shadowSize, shadowSize);
  sunlight.shadow.camera.left = -105;
  sunlight.shadow.camera.right = 105;
  sunlight.shadow.camera.top = 95;
  sunlight.shadow.camera.bottom = -95;
  sunlight.shadow.camera.near = 10;
  sunlight.shadow.camera.far = 390;
  sunlight.shadow.bias = -0.00025;
  sunlight.shadow.normalBias = 0.055;
  sunlight.shadow.radius = 3;
  scene.add(sunlight, sunlight.target);

  const fill = new THREE.DirectionalLight(0x9db8c3, 0.55);
  fill.position.set(60, 45, 70);
  scene.add(fill);

  const mist = createMist();
  const spray = createSpray();
  const birds = createBirds();
  scene.add(mist, spray.points, birds);

  return {
    sunDirection,
    sunlight,
    update(time) {
      sky.material.uniforms.uTime.value = time;
      mist.children.forEach((sprite) => {
        sprite.position.x = sprite.userData.baseX + Math.sin(time * 0.025 * sprite.userData.speed) * 22;
      });
      const positions = spray.points.geometry.attributes.position;
      spray.data.forEach((particle, i) => {
        const cycle = (particle.phase + time * particle.speed) % 1;
        positions.setXYZ(
          i,
          particle.x + cycle * 2.4,
          0.18 + Math.sin(cycle * Math.PI) * (0.5 + particle.speed * 5),
          particle.z + cycle * 1.2,
        );
      });
      positions.needsUpdate = true;
      birds.children.forEach((bird) => {
        const phase = bird.userData.phase;
        bird.position.x = bird.userData.origin.x + Math.sin(time * 0.035 + phase) * 24;
        bird.position.y = bird.userData.origin.y + Math.sin(time * 0.22 + phase) * 1.2;
        bird.rotation.z = Math.sin(time * 0.4 + phase) * 0.12;
        const position = bird.geometry.attributes.position;
        const flap = Math.sin(time * 2.1 + phase) * 0.23;
        position.setY(0, flap);
        position.setY(3, flap);
        position.needsUpdate = true;
      });
    },
  };
}
