import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const UP = new THREE.Vector3(0, 1, 0);

// Deterministic scenery makes the track and minimap reproducible between runs.
function mulberry32(seed) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvasTexture(canvas, repeatX = 1, repeatY = 1) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.anisotropy = 4;
  return texture;
}

function createRoadTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const context = canvas.getContext('2d');
  const random = mulberry32(8021);

  context.fillStyle = '#827864';
  context.fillRect(0, 0, 512, 512);

  // Irregular blue-grey flagstones with warm, sandy mortar.
  for (let row = -1; row < 9; row += 1) {
    const y = row * 64;
    const offset = row % 2 === 0 ? -45 : -5;
    for (let column = -1; column < 6; column += 1) {
      const x = offset + column * 104;
      const shade = 92 + Math.floor(random() * 30);
      context.fillStyle = `rgb(${shade - 8}, ${shade + 4}, ${shade + 5})`;
      context.strokeStyle = 'rgba(192, 169, 128, 0.55)';
      context.lineWidth = 4;
      context.beginPath();
      context.moveTo(x + 5 + random() * 5, y + 6);
      context.lineTo(x + 96, y + 3 + random() * 7);
      context.lineTo(x + 99 - random() * 5, y + 57);
      context.lineTo(x + 7, y + 60 - random() * 5);
      context.closePath();
      context.fill();
      context.stroke();
    }
  }

  // Earth worn through the stone and small aggregate flecks.
  for (let i = 0; i < 900; i += 1) {
    const warm = random() > 0.48;
    context.fillStyle = warm
      ? `rgba(151, 119, 76, ${0.05 + random() * 0.16})`
      : `rgba(219, 213, 184, ${0.04 + random() * 0.12})`;
    const size = 0.5 + random() * 2.4;
    context.fillRect(random() * 512, random() * 512, size, size);
  }
  return canvasTexture(canvas);
}

function createGroundTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const context = canvas.getContext('2d');
  const random = mulberry32(3419);
  context.fillStyle = '#778063';
  context.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2400; i += 1) {
    const green = random() > 0.38;
    context.fillStyle = green
      ? `rgba(49, 78, 52, ${0.04 + random() * 0.13})`
      : `rgba(181, 157, 107, ${0.03 + random() * 0.11})`;
    const size = 1 + random() * 4;
    context.fillRect(random() * 256, random() * 256, size, size * 0.45);
  }
  return canvasTexture(canvas, 34, 34);
}

function createPaddyTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const context = canvas.getContext('2d');
  const random = mulberry32(977);
  context.fillStyle = '#68775a';
  context.fillRect(0, 0, 256, 256);

  for (let row = 0; row < 9; row += 1) {
    const y = row * 31 + 5;
    context.strokeStyle = 'rgba(190, 203, 164, 0.35)';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, y + 7);
    context.lineTo(256, y + 7);
    context.stroke();
    for (let x = 5; x < 256; x += 17) {
      context.strokeStyle = random() > 0.5 ? '#788c45' : '#87984e';
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(x, y + 5);
      context.lineTo(x - 3, y - 7 - random() * 5);
      context.moveTo(x, y + 5);
      context.lineTo(x + 4, y - 6 - random() * 5);
      context.stroke();
    }
  }
  return canvasTexture(canvas);
}

function createRoofTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const context = canvas.getContext('2d');
  const random = mulberry32(6401);
  context.fillStyle = '#354442';
  context.fillRect(0, 0, 256, 256);

  for (let x = 0; x < 256; x += 24) {
    context.fillStyle = 'rgba(13, 28, 29, 0.38)';
    context.fillRect(x, 0, 4, 256);
    context.fillStyle = 'rgba(132, 148, 132, 0.18)';
    context.fillRect(x + 5, 0, 2, 256);
  }
  for (let y = 0; y < 256; y += 42) {
    context.fillStyle = 'rgba(15, 27, 28, 0.4)';
    context.fillRect(0, y, 256, 3);
    context.fillStyle = 'rgba(151, 153, 127, 0.12)';
    context.fillRect(0, y + 4, 256, 2);
  }
  for (let i = 0; i < 350; i += 1) {
    context.fillStyle = `rgba(185, 184, 149, ${random() * 0.08})`;
    context.fillRect(random() * 256, random() * 256, 1 + random() * 3, 1);
  }
  return canvasTexture(canvas, 3, 2);
}

function createSignTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  context.fillStyle = '#35291f';
  context.fillRect(0, 0, 1024, 256);
  context.strokeStyle = '#b89452';
  context.lineWidth = 12;
  context.strokeRect(18, 18, 988, 220);
  context.strokeStyle = 'rgba(232, 197, 119, 0.45)';
  context.lineWidth = 2;
  context.strokeRect(34, 34, 956, 188);
  context.font = 'bold 142px "STKaiti", "KaiTi", "Songti SC", serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = '#e1bd70';
  context.fillText('江南赛牛', 512, 132);
  return canvasTexture(canvas);
}

function createFlagTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  context.fillStyle = '#a53a2c';
  context.fillRect(0, 0, 256, 128);
  context.strokeStyle = '#d2aa60';
  context.lineWidth = 6;
  context.strokeRect(8, 8, 240, 112);
  context.font = 'bold 82px "STKaiti", "KaiTi", serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = '#e3bd70';
  context.fillText('赛', 130, 67);
  return canvasTexture(canvas);
}

function createPetalTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(31, 30, 2, 32, 32, 28);
  gradient.addColorStop(0, 'rgba(255, 235, 224, 1)');
  gradient.addColorStop(0.55, 'rgba(225, 157, 157, 0.9)');
  gradient.addColorStop(1, 'rgba(205, 126, 137, 0)');
  context.fillStyle = gradient;
  context.beginPath();
  context.ellipse(32, 32, 24, 13, -0.45, 0, Math.PI * 2);
  context.fill();
  return canvasTexture(canvas);
}

// Arc-length sampled ribbon. Local +Z follows the tangent and local +X is right.
function createRibbonGeometry(curve, trackLength, width, segments, options = {}) {
  const {
    y = 0.12,
    centerOffset = 0,
    crown = 0,
    crossSegments = 4,
    uvLength = 7,
  } = options;
  const columns = crossSegments + 1;
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i <= segments; i += 1) {
    const t = i / segments;
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).setY(0).normalize();
    const right = new THREE.Vector3(tangent.z, 0, -tangent.x);
    for (let j = 0; j <= crossSegments; j += 1) {
      const across = j / crossSegments - 0.5;
      const offset = centerOffset + across * width;
      const height = y + crown * (1 - Math.pow(across * 2, 2));
      positions.push(
        point.x + right.x * offset,
        height,
        point.z + right.z * offset,
      );
      uvs.push(j / crossSegments, (t * trackLength) / uvLength);
    }
  }

  for (let i = 0; i < segments; i += 1) {
    for (let j = 0; j < crossSegments; j += 1) {
      const a = i * columns + j;
      const b = a + 1;
      const c = a + columns;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function roofHeightAt(x, f, width, height) {
  const corner = Math.pow(Math.abs(x) / (width * 0.5), 6);
  return height * (1 - f) + 0.16 * Math.pow(f, 5) + 0.34 * corner * (0.25 + 0.75 * f);
}

// A tiled gable roof with a real sloping surface and lifted eave corners.
function createRoofGeometry(width, depth, height) {
  const xSegments = 10;
  const slopeSegments = 5;
  const positions = [];
  const uvs = [];
  const indices = [];
  const row = slopeSegments + 1;

  for (let sideIndex = 0; sideIndex < 2; sideIndex += 1) {
    const side = sideIndex === 0 ? -1 : 1;
    const base = sideIndex * (xSegments + 1) * row;
    for (let ix = 0; ix <= xSegments; ix += 1) {
      const u = ix / xSegments;
      const x = (u - 0.5) * width;
      for (let iz = 0; iz <= slopeSegments; iz += 1) {
        const f = iz / slopeSegments;
        positions.push(x, roofHeightAt(x, f, width, height), side * depth * 0.5 * f);
        uvs.push(u, f);
      }
    }
    for (let ix = 0; ix < xSegments; ix += 1) {
      for (let iz = 0; iz < slopeSegments; iz += 1) {
        const a = base + ix * row + iz;
        const b = a + row;
        const c = a + 1;
        const d = b + 1;
        if (side > 0) indices.push(a, c, b, b, c, d);
        else indices.push(a, b, c, b, d, c);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

// Four genuinely sloped faces for pagoda roofs, rather than stacked boxes.
function createPyramidRoofGeometry(width, depth, height) {
  const positions = [];
  const uvs = [];
  const indices = [];
  const segments = 4;
  const row = segments + 1;
  const corners = [
    new THREE.Vector3(-width / 2, 0, -depth / 2),
    new THREE.Vector3(width / 2, 0, -depth / 2),
    new THREE.Vector3(width / 2, 0, depth / 2),
    new THREE.Vector3(-width / 2, 0, depth / 2),
  ];

  for (let face = 0; face < 4; face += 1) {
    const aCorner = corners[face];
    const bCorner = corners[(face + 1) % 4];
    const base = face * row * row;
    for (let iy = 0; iy <= segments; iy += 1) {
      const f = iy / segments;
      for (let ix = 0; ix <= segments; ix += 1) {
        const u = ix / segments;
        const edgeX = THREE.MathUtils.lerp(aCorner.x, bCorner.x, u);
        const edgeZ = THREE.MathUtils.lerp(aCorner.z, bCorner.z, u);
        const lift = 0.14 * Math.pow(f, 4)
          + 0.28 * Math.pow(Math.abs(u * 2 - 1), 6) * Math.pow(f, 3);
        positions.push(edgeX * f, height * (1 - f) + lift, edgeZ * f);
        uvs.push(u, f);
      }
    }
    for (let iy = 0; iy < segments; iy += 1) {
      for (let ix = 0; ix < segments; ix += 1) {
        const a = base + iy * row + ix;
        const b = a + 1;
        const c = a + row;
        const d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createGableGeometry(width, depth, height) {
  const positions = [];
  for (const x of [-width / 2, width / 2]) {
    positions.push(
      x, 0, -depth / 2,
      x, 0, depth / 2,
      x, height, 0,
    );
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function createMountainGeometry() {
  const radial = 9;
  const radii = [1, 0.83, 0.56, 0.29];
  const heights = [0, 0.23, 0.55, 0.8];
  const positions = [];
  const indices = [];

  for (let ring = 0; ring < radii.length; ring += 1) {
    for (let i = 0; i < radial; i += 1) {
      const angle = (i / radial) * Math.PI * 2;
      const irregular = 1 + Math.sin(i * 4.17 + ring * 1.9) * 0.12;
      positions.push(
        Math.cos(angle) * radii[ring] * irregular + ring * 0.025,
        heights[ring] * (1 + Math.sin(i * 2.3 + ring) * 0.055),
        Math.sin(angle) * radii[ring] * irregular,
      );
    }
  }
  const apex = positions.length / 3;
  positions.push(0.09, 1, -0.035);

  for (let ring = 0; ring < radii.length - 1; ring += 1) {
    for (let i = 0; i < radial; i += 1) {
      const next = (i + 1) % radial;
      const a = ring * radial + i;
      const b = ring * radial + next;
      const c = (ring + 1) * radial + i;
      const d = (ring + 1) * radial + next;
      indices.push(a, c, b, b, c, d);
    }
  }
  for (let i = 0; i < radial; i += 1) {
    const a = (radii.length - 1) * radial + i;
    const b = (radii.length - 1) * radial + ((i + 1) % radial);
    indices.push(a, apex, b);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createGrassTuftGeometry() {
  const blade = new THREE.PlaneGeometry(0.22, 1, 1, 2);
  blade.translate(0, 0.5, 0);
  const crossed = [
    blade,
    blade.clone().rotateY(Math.PI / 3),
    blade.clone().rotateY((Math.PI * 2) / 3),
  ];
  const geometry = mergeGeometries(crossed, false);
  crossed[1].dispose();
  crossed[2].dispose();
  blade.dispose();
  return geometry;
}

function createWaterMaterial() {
  return new THREE.ShaderMaterial({
    name: 'Jiangnan stylized reflective water',
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color(0x365f5c) },
        uShallow: { value: new THREE.Color(0x72958a) },
        uSky: { value: new THREE.Color(0xb9c7b7) },
      },
    ]),
    vertexShader: `
      uniform float uTime;
      varying vec3 vWorldPosition;
      #include <fog_pars_vertex>
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        float wave = sin(worldPosition.x * 0.36 + uTime * 0.75) * 0.012;
        wave += sin(worldPosition.z * 0.51 - uTime * 0.58) * 0.009;
        worldPosition.y += wave;
        vWorldPosition = worldPosition.xyz;
        vec4 mvPosition = viewMatrix * worldPosition;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSky;
      varying vec3 vWorldPosition;
      #include <fog_pars_fragment>
      void main() {
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        float fresnel = pow(1.0 - clamp(viewDirection.y, 0.0, 1.0), 2.0);
        float broad = sin(vWorldPosition.x * 0.15 + vWorldPosition.z * 0.11 + uTime * 0.32);
        float ripple = sin(vWorldPosition.x * 1.35 + uTime * 1.1)
          * sin(vWorldPosition.z * 1.12 - uTime * 0.83);
        float glint = smoothstep(0.74, 0.98, ripple * 0.5 + 0.5);
        vec3 color = mix(uDeep, uShallow, 0.48 + broad * 0.18);
        color = mix(color, uSky, fresnel * 0.62);
        color += vec3(0.15, 0.16, 0.12) * glint * 0.55;
        gl_FragColor = vec4(color, 0.91);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }
    `,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    fog: true,
  });
}

function addFlagWave(material, timeUniform) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = timeUniform;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `
        #include <begin_vertex>
        float flagPhase = 0.0;
        #ifdef USE_INSTANCING
          flagPhase = instanceMatrix[3].x * 0.17 + instanceMatrix[3].z * 0.11;
        #endif
        float freeEdge = clamp(position.x / 2.2, 0.0, 1.0);
        transformed.z += sin(position.x * 3.4 - uTime * 3.1 + flagPhase + position.y) * 0.18 * freeEdge;
        transformed.y += sin(position.x * 2.1 - uTime * 2.2 + flagPhase) * 0.035 * freeEdge;
      `);
  };
  material.customProgramCacheKey = () => 'jiangnan-flag-wave-v1';
}

function addRiceWind(material, timeUniform) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = timeUniform;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `
        #include <begin_vertex>
        float ricePhase = 0.0;
        #ifdef USE_INSTANCING
          ricePhase = instanceMatrix[3].x * 0.29 + instanceMatrix[3].z * 0.23;
        #endif
        float tip = clamp(position.y, 0.0, 1.0);
        transformed.x += sin(uTime * 1.55 + ricePhase) * 0.12 * tip * tip;
        transformed.z += cos(uTime * 1.17 + ricePhase) * 0.055 * tip * tip;
      `);
  };
  material.customProgramCacheKey = () => 'jiangnan-rice-wind-v1';
}

// Merge static pieces by material after using convenient shared-geometry helpers.
// This retains detailed roofs and vegetation with only a few dozen draw calls.
function mergeStaticMeshes(source) {
  source.updateMatrixWorld(true);
  const buckets = new Map();

  source.traverse((object) => {
    if (!object.isMesh || object.isInstancedMesh || Array.isArray(object.material)) return;
    const key = `${object.material.uuid}:${object.castShadow}:${object.receiveShadow}`;
    if (!buckets.has(key)) {
      buckets.set(key, {
        material: object.material,
        castShadow: object.castShadow,
        receiveShadow: object.receiveShadow,
        geometries: [],
      });
    }
    const geometry = object.geometry.index
      ? object.geometry.toNonIndexed()
      : object.geometry.clone();
    geometry.applyMatrix4(object.matrixWorld);
    for (const name of Object.keys(geometry.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv') {
        geometry.deleteAttribute(name);
      }
    }
    if (!geometry.attributes.normal) geometry.computeVertexNormals();
    if (!geometry.attributes.uv) {
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(
        new Float32Array((geometry.attributes.position.count) * 2),
        2,
      ));
    }
    buckets.get(key).geometries.push(geometry);
  });

  const mergedRoot = new THREE.Group();
  mergedRoot.name = 'Batched Jiangnan architecture and planting';
  for (const bucket of buckets.values()) {
    const geometry = mergeGeometries(bucket.geometries, false);
    for (const part of bucket.geometries) part.dispose();
    if (!geometry) continue;
    geometry.computeBoundingSphere();
    const mesh = new THREE.Mesh(geometry, bucket.material);
    mesh.castShadow = bucket.castShadow;
    mesh.receiveShadow = bucket.receiveShadow;
    mergedRoot.add(mesh);
  }
  source.removeFromParent();
  source.clear();
  return mergedRoot;
}

export function createWorld(scene) {
  const root = new THREE.Group();
  root.name = 'Jiangnan water-town buffalo race';
  scene.add(root);

  const random = mulberry32(20261023);
  const timeUniform = { value: 0 };
  const trackWidth = 12;
  const controlPoints = [
    [0, 0, 80], [50, 0, 78], [86, 0, 50], [95, 0, 5],
    [72, 0, -28], [82, 0, -64], [45, 0, -90], [0, 0, -75],
    [-35, 0, -95], [-80, 0, -72], [-95, 0, -30], [-70, 0, 5],
    [-90, 0, 42], [-55, 0, 78],
  ].map(([x, y, z]) => new THREE.Vector3(x, y, z));
  const curve = new THREE.CatmullRomCurve3(controlPoints, true, 'catmullrom', 0.35);
  curve.curveType = 'catmullrom';
  curve.tension = 0.35;
  curve.closed = true;
  const trackLength = curve.getLength();
  const trackSamples = Array.from({ length: 260 }, (_, i) => curve.getPointAt(i / 260));

  function distanceToTrackSquared(x, z) {
    let minimum = Infinity;
    for (const point of trackSamples) {
      const dx = x - point.x;
      const dz = z - point.z;
      minimum = Math.min(minimum, dx * dx + dz * dz);
    }
    return minimum;
  }

  const materials = {
    ground: new THREE.MeshStandardMaterial({ map: createGroundTexture(), roughness: 1 }),
    earth: new THREE.MeshStandardMaterial({ color: 0x8c7657, roughness: 1 }),
    road: new THREE.MeshStandardMaterial({ map: createRoadTexture(), roughness: 0.93 }),
    stone: new THREE.MeshStandardMaterial({ color: 0x858b80, roughness: 0.94 }),
    paleStone: new THREE.MeshStandardMaterial({ color: 0xb3b09b, roughness: 0.9 }),
    wall: new THREE.MeshStandardMaterial({ color: 0xd9d5bd, roughness: 0.96, side: THREE.DoubleSide }),
    wallWarm: new THREE.MeshStandardMaterial({ color: 0xcfc4a6, roughness: 0.96 }),
    roof: new THREE.MeshStandardMaterial({
      map: createRoofTexture(),
      color: 0xa8b2a6,
      roughness: 0.84,
      metalness: 0.04,
      side: THREE.DoubleSide,
    }),
    roofEdge: new THREE.MeshStandardMaterial({ color: 0x263735, roughness: 0.82 }),
    wood: new THREE.MeshStandardMaterial({ color: 0x624331, roughness: 0.9 }),
    darkWood: new THREE.MeshStandardMaterial({ color: 0x392d25, roughness: 0.9 }),
    redWood: new THREE.MeshStandardMaterial({ color: 0x743b30, roughness: 0.86 }),
    red: new THREE.MeshStandardMaterial({
      color: 0xb54534,
      emissive: 0x360b06,
      emissiveIntensity: 0.18,
      roughness: 0.76,
      side: THREE.DoubleSide,
    }),
    gold: new THREE.MeshStandardMaterial({ color: 0xc39a55, roughness: 0.63, metalness: 0.18 }),
    paper: new THREE.MeshStandardMaterial({ color: 0xe2cda1, roughness: 0.9 }),
    glow: new THREE.MeshStandardMaterial({
      color: 0xe2bd78,
      emissive: 0xb66b2c,
      emissiveIntensity: 0.75,
      roughness: 0.8,
    }),
    leaf: new THREE.MeshStandardMaterial({ color: 0x496b49, roughness: 0.95, side: THREE.DoubleSide }),
    leafLight: new THREE.MeshStandardMaterial({ color: 0x6f8551, roughness: 0.95, side: THREE.DoubleSide }),
    bamboo: new THREE.MeshStandardMaterial({ color: 0x56774c, roughness: 0.88 }),
    bambooNode: new THREE.MeshStandardMaterial({ color: 0x8a9760, roughness: 0.9 }),
    willow: new THREE.MeshStandardMaterial({ color: 0x728b59, roughness: 0.96, side: THREE.DoubleSide }),
    blossom: new THREE.MeshStandardMaterial({ color: 0xd7a1a0, roughness: 0.94, flatShading: true }),
    blossomPale: new THREE.MeshStandardMaterial({ color: 0xe4beb0, roughness: 0.94, flatShading: true }),
    straw: new THREE.MeshStandardMaterial({ color: 0xb99a59, roughness: 1 }),
    reed: new THREE.MeshStandardMaterial({ color: 0x718054, roughness: 1 }),
  };

  // Low, quiet ground leaves the track, paddies and water readable from a chase camera.
  const groundGeometry = new THREE.PlaneGeometry(470, 470, 28, 28);
  groundGeometry.rotateX(-Math.PI / 2);
  const groundPositions = groundGeometry.attributes.position;
  for (let i = 0; i < groundPositions.count; i += 1) {
    const x = groundPositions.getX(i);
    const z = groundPositions.getZ(i);
    const height = -0.34 + Math.sin(x * 0.035) * Math.cos(z * 0.029) * 0.045;
    groundPositions.setY(i, Math.min(-0.25, height));
  }
  groundGeometry.computeVertexNormals();
  const ground = new THREE.Mesh(groundGeometry, materials.ground);
  ground.name = 'Low Jiangnan fields terrain';
  ground.receiveShadow = true;
  root.add(ground);

  // Earth shoulder, crowned stone road and two pairs of continuous edge lines.
  const roadSegments = Math.ceil(trackLength / 1.15);
  const shoulder = new THREE.Mesh(
    createRibbonGeometry(curve, trackLength, trackWidth + 3.4, roadSegments, {
      y: 0.045,
      crown: 0.012,
      crossSegments: 2,
      uvLength: 8,
    }),
    materials.earth,
  );
  shoulder.receiveShadow = true;
  shoulder.name = 'Warm earth track shoulders';
  root.add(shoulder);

  const road = new THREE.Mesh(
    createRibbonGeometry(curve, trackLength, trackWidth, roadSegments, {
      y: 0.12,
      crown: 0.025,
      crossSegments: 4,
      uvLength: 7,
    }),
    materials.road,
  );
  road.receiveShadow = true;
  road.name = 'Blue flagstone and warm earth racing ribbon';
  root.add(road);

  for (const side of [-1, 1]) {
    const innerLine = new THREE.Mesh(
      createRibbonGeometry(curve, trackLength, 0.18, roadSegments, {
        y: 0.153,
        centerOffset: side * (trackWidth * 0.5 - 0.22),
        crossSegments: 1,
      }),
      materials.paleStone,
    );
    innerLine.receiveShadow = true;
    root.add(innerLine);
    const outerLine = new THREE.Mesh(
      createRibbonGeometry(curve, trackLength, 0.28, roadSegments, {
        y: 0.105,
        centerOffset: side * (trackWidth * 0.5 + 0.35),
        crossSegments: 1,
      }),
      materials.stone,
    );
    outerLine.receiveShadow = true;
    root.add(outerLine);
  }

  const staticRoot = new THREE.Group();
  staticRoot.name = 'Detailed static Jiangnan set dressing';
  root.add(staticRoot);

  const geometries = {
    box: new THREE.BoxGeometry(1, 1, 1),
    cylinder: new THREE.CylinderGeometry(1, 1, 1, 7),
    fineCylinder: new THREE.CylinderGeometry(1, 1, 1, 10),
    sphere: new THREE.SphereGeometry(1, 10, 7),
    lowSphere: new THREE.IcosahedronGeometry(1, 1),
    cone: new THREE.ConeGeometry(1, 1, 8),
    leaf: new THREE.PlaneGeometry(1, 1),
  };

  function put(geometry, material, parent = staticRoot) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  function box(parent, width, height, depth, material, x, y, z, rotationY = 0) {
    const mesh = put(geometries.box, material, parent);
    mesh.position.set(x, y, z);
    mesh.rotation.y = rotationY;
    mesh.scale.set(width, height, depth);
    return mesh;
  }

  function cylinder(parent, radius, height, material, x, y, z, fine = false) {
    const mesh = put(fine ? geometries.fineCylinder : geometries.cylinder, material, parent);
    mesh.position.set(x, y, z);
    mesh.scale.set(radius, height, radius);
    return mesh;
  }

  function beamBetween(parent, a, b, radius, material, square = false) {
    const direction = new THREE.Vector3().subVectors(b, a);
    const length = direction.length();
    if (length < 0.0001) return null;
    const mesh = put(square ? geometries.box : geometries.cylinder, material, parent);
    mesh.position.copy(a).add(b).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(UP, direction.normalize());
    mesh.scale.set(radius, length, radius);
    return mesh;
  }

  function groupAt(parent, x, y, z, rotationY = 0, scale = 1) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.rotation.y = rotationY;
    group.scale.setScalar(scale);
    parent.add(group);
    return group;
  }

  function addLantern(parent, x, y, z, scale = 1) {
    const body = put(geometries.sphere, materials.red, parent);
    body.position.set(x, y, z);
    body.scale.set(0.32 * scale, 0.42 * scale, 0.32 * scale);
    cylinder(parent, 0.2 * scale, 0.09 * scale, materials.gold, x, y + 0.42 * scale, z, true);
    cylinder(parent, 0.18 * scale, 0.08 * scale, materials.gold, x, y - 0.42 * scale, z, true);
    cylinder(parent, 0.035 * scale, 0.42 * scale, materials.red, x, y - 0.67 * scale, z);
  }

  function addRoof(parent, x, y, z, width, depth, height, rotationY = 0) {
    const roof = groupAt(parent, x, y, z, rotationY);
    put(createRoofGeometry(width, depth, height), materials.roof, roof);
    const columns = Math.max(8, Math.round(width / 0.7));
    for (let i = 0; i <= columns; i += 1) {
      const tileX = (i / columns - 0.5) * width * 0.94;
      for (const side of [-1, 1]) {
        const a = new THREE.Vector3(tileX, roofHeightAt(tileX, 0, width, height) + 0.035, 0);
        const b = new THREE.Vector3(
          tileX,
          roofHeightAt(tileX, 1, width, height) + 0.035,
          side * depth * 0.5,
        );
        beamBetween(roof, a, b, 0.034, materials.roofEdge);
      }
    }
    beamBetween(
      roof,
      new THREE.Vector3(-width / 2, height + 0.1, 0),
      new THREE.Vector3(width / 2, height + 0.1, 0),
      0.085,
      materials.roofEdge,
      true,
    );
    for (const side of [-1, 1]) {
      box(roof, width * 0.98, 0.12, 0.12, materials.roofEdge, 0, 0.12, side * depth / 2);
      const finial = put(geometries.cone, materials.roofEdge, roof);
      finial.position.set(side * width * 0.5, height + 0.31, 0);
      finial.scale.set(0.12, 0.42, 0.12);
    }
    return roof;
  }

  function addPyramidRoof(parent, y, width, depth, height) {
    const roof = groupAt(parent, 0, y, 0);
    put(createPyramidRoofGeometry(width, depth, height), materials.roof, roof);
    const corners = [
      new THREE.Vector3(-width / 2, 0, -depth / 2),
      new THREE.Vector3(width / 2, 0, -depth / 2),
      new THREE.Vector3(width / 2, 0, depth / 2),
      new THREE.Vector3(-width / 2, 0, depth / 2),
    ];
    for (let face = 0; face < 4; face += 1) {
      const aCorner = corners[face];
      const bCorner = corners[(face + 1) % 4];
      for (let i = 0; i <= 4; i += 1) {
        const u = i / 4;
        const lift = 0.14 + 0.28 * Math.pow(Math.abs(u * 2 - 1), 6);
        const edge = new THREE.Vector3().lerpVectors(aCorner, bCorner, u);
        edge.y = lift + 0.03;
        beamBetween(roof, new THREE.Vector3(0, height + 0.03, 0), edge, 0.038, materials.roofEdge);
      }
      const fasciaA = aCorner.clone().setY(0.12);
      const fasciaB = bCorner.clone().setY(0.12);
      beamBetween(roof, fasciaA, fasciaB, 0.075, materials.roofEdge, true);
    }
    return roof;
  }

  const houseSpecs = [
    [-5, 48, 0.08, 1.05], [13, 45, -0.12, 0.9], [-28, 48, 0.28, 0.85],
    [42, 32, -0.55, 0.85], [-47, 28, 0.65, 0.85], [48, -35, -0.4, 0.9],
    [-42, -48, 0.35, 1], [2, -48, 0, 0.9], [110, 68, -0.5, 1],
    [-112, -10, 0.4, 0.9], [50, 105, 0.1, 1], [-50, 110, -0.2, 0.9],
  ];

  function addHouse(x, z, rotationY, scale) {
    const house = groupAt(staticRoot, x, -0.14, z, rotationY, scale);
    const width = 7;
    const depth = 5.2;
    const wallHeight = 3.1;
    const baseHeight = 0.35;
    const roofBase = baseHeight + wallHeight;
    box(house, 7.25, baseHeight, 5.45, materials.stone, 0, baseHeight / 2, 0);
    box(house, width, wallHeight, depth, materials.wall, 0, baseHeight + wallHeight / 2, 0);
    box(house, 7.5, 0.13, 5.7, materials.darkWood, 0, roofBase, 0);
    put(createGableGeometry(width, depth, 1.4), materials.wall, house).position.y = roofBase;
    addRoof(house, 0, roofBase, 0, 8.5, 6.65, 1.55);

    // Recessed timber door, stone step and lattice windows on the facade.
    box(house, 1.25, 2.05, 0.12, materials.darkWood, 0, baseHeight + 1.03, depth / 2 + 0.045);
    box(house, 0.92, 1.82, 0.13, materials.wood, 0, baseHeight + 0.96, depth / 2 + 0.115);
    box(house, 1.55, 0.18, 0.65, materials.paleStone, 0, 0.18, depth / 2 + 0.3);
    for (const windowX of [-2.15, 2.15]) {
      box(house, 1.25, 1.25, 0.1, materials.darkWood, windowX, 2.05, depth / 2 + 0.06);
      box(house, 0.96, 0.96, 0.12, materials.paper, windowX, 2.05, depth / 2 + 0.12);
      box(house, 0.07, 1.02, 0.04, materials.wood, windowX, 2.05, depth / 2 + 0.2);
      box(house, 1.02, 0.07, 0.04, materials.wood, windowX, 2.05, depth / 2 + 0.2);
      box(house, 0.045, 1.02, 0.04, materials.wood, windowX - 0.27, 2.05, depth / 2 + 0.2);
      box(house, 0.045, 1.02, 0.04, materials.wood, windowX + 0.27, 2.05, depth / 2 + 0.2);
    }
    addLantern(house, -0.95, 2.45, depth / 2 + 0.35, 0.78);
    addLantern(house, 0.95, 2.45, depth / 2 + 0.35, 0.78);
    return house;
  }

  for (const spec of houseSpecs) addHouse(...spec);

  // Five-storey pagoda: balconies, columns, four-sided tiled roofs and a brass finial.
  const pagoda = groupAt(staticRoot, 32, -0.14, 52, 0.15);
  box(pagoda, 9, 0.45, 9, materials.paleStone, 0, 0.225, 0);
  for (let level = 0; level < 5; level += 1) {
    const width = 6.8 - level * 0.82;
    const baseY = 0.45 + level * 2.42;
    box(pagoda, width + 0.85, 0.16, width + 0.85, materials.darkWood, 0, baseY + 0.08, 0);
    box(pagoda, width, 1.72, width, level % 2 ? materials.wallWarm : materials.wall, 0, baseY + 0.96, 0);
    for (const x of [-1, 1]) {
      for (const z of [-1, 1]) {
        cylinder(pagoda, 0.13, 1.9, materials.redWood, x * width * 0.46, baseY + 1.02, z * width * 0.46, true);
      }
    }
    for (const side of [-1, 1]) {
      box(pagoda, width + 0.5, 0.1, 0.1, materials.redWood, 0, baseY + 0.58, side * (width / 2 + 0.28));
      box(pagoda, 0.1, 0.1, width + 0.5, materials.redWood, side * (width / 2 + 0.28), baseY + 0.58, 0);
    }
    addPyramidRoof(pagoda, baseY + 1.82, width + 2, width + 2, 0.96);
    if (level < 4) {
      for (const side of [-1, 1]) {
        addLantern(pagoda, side * (width / 2 + 0.35), baseY + 1.5, width / 2 + 0.35, 0.58);
        addLantern(pagoda, side * (width / 2 + 0.35), baseY + 1.5, -width / 2 - 0.35, 0.58);
      }
    }
  }
  const spireBase = 0.45 + 4 * 2.42 + 1.82 + 0.96;
  cylinder(pagoda, 0.11, 1.4, materials.gold, 0, spireBase + 0.65, 0, true);
  const spire = put(geometries.cone, materials.gold, pagoda);
  spire.position.set(0, spireBase + 1.55, 0);
  spire.scale.set(0.32, 0.85, 0.32);

  const flagTransforms = [];
  function addFlagPole(parent, x, z, height, angle = 0, baseY = 0, scale = 1) {
    cylinder(parent, 0.075, height, materials.darkWood, x, baseY + height / 2, z, true);
    const finial = put(geometries.sphere, materials.gold, parent);
    finial.position.set(x, baseY + height + 0.08, z);
    finial.scale.setScalar(0.13);
    parent.updateWorldMatrix(true, false);
    const position = new THREE.Vector3(x, baseY + height - 0.9, z).applyMatrix4(parent.matrixWorld);
    const quaternion = parent.getWorldQuaternion(new THREE.Quaternion());
    quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(UP, angle));
    flagTransforms.push({ position, quaternion, scale });
  }

  function trackGroup(t) {
    const wrapped = ((t % 1) + 1) % 1;
    const point = curve.getPointAt(wrapped);
    const tangent = curve.getTangentAt(wrapped).setY(0).normalize();
    return groupAt(staticRoot, point.x, 0, point.z, Math.atan2(tangent.x, tangent.z));
  }

  // Start gate straddles, but never changes, the requested racing line.
  const gate = trackGroup(0.012);
  for (const side of [-1, 1]) {
    box(gate, 1.05, 0.55, 1.05, materials.paleStone, side * 6.85, 0.275, 0);
    cylinder(gate, 0.32, 6.35, materials.redWood, side * 6.85, 3.55, 0, true);
    cylinder(gate, 0.18, 4.65, materials.redWood, side * 4.75, 2.6, 0, true);
    box(gate, 0.75, 0.38, 0.75, materials.paleStone, side * 4.75, 0.19, 0);
  }
  box(gate, 15.2, 0.42, 0.62, materials.redWood, 0, 5.15, 0);
  box(gate, 16.4, 0.36, 0.72, materials.redWood, 0, 6.03, 0);
  box(gate, 10.2, 0.28, 0.55, materials.gold, 0, 4.67, 0);
  box(gate, 5.75, 1.55, 0.74, materials.darkWood, 0, 5.55, 0);
  addRoof(gate, 0, 6.15, 0, 17.8, 3.8, 1.18);
  box(gate, 7.4, 0.75, 1.2, materials.redWood, 0, 7.35, 0);
  addRoof(gate, 0, 7.65, 0, 8.8, 4.25, 1.05);
  for (const x of [-5.65, -3.25, 3.25, 5.65]) addLantern(gate, x, 4.25, 0, 1.05);
  addFlagPole(gate, -9.1, 0, 5.1, Math.PI, 0, 1.05);
  addFlagPole(gate, 9.1, 0, 5.1, 0, 0, 1.05);

  const signMaterial = new THREE.MeshStandardMaterial({
    map: createSignTexture(),
    roughness: 0.75,
    side: THREE.DoubleSide,
  });
  const signGeometry = new THREE.PlaneGeometry(5.4, 1.35);
  const frontSign = put(signGeometry, signMaterial, gate);
  frontSign.position.set(0, 5.55, 0.381);
  const backSign = put(signGeometry, signMaterial, gate);
  backSign.position.set(0, 5.55, -0.381);
  backSign.rotation.y = Math.PI;

  // Checkered start stripe and festive bunting.
  const startLine = trackGroup(0.0015);
  const startColumns = 14;
  for (let row = 0; row < 2; row += 1) {
    for (let column = 0; column < startColumns; column += 1) {
      const material = (row + column) % 2 ? materials.paleStone : materials.darkWood;
      box(
        startLine,
        trackWidth / startColumns,
        0.018,
        0.42,
        material,
        -trackWidth / 2 + (column + 0.5) * trackWidth / startColumns,
        0.151,
        (row - 0.5) * 0.42,
      );
    }
  }
  const buntingGeometry = new THREE.BufferGeometry();
  buntingGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
    -0.3, 0, 0, 0.3, 0, 0, 0, -0.55, 0,
  ], 3));
  buntingGeometry.computeVertexNormals();
  beamBetween(gate, new THREE.Vector3(-6.2, 4.78, 0.42), new THREE.Vector3(6.2, 4.78, 0.42), 0.022, materials.darkWood);
  for (let i = 0; i < 17; i += 1) {
    const pennant = put(buntingGeometry, i % 3 === 0 ? materials.gold : materials.red, gate);
    pennant.position.set(-5.9 + i * 0.735, 4.76, 0.43);
  }

  // Additional track flags and timber safety fences only on selected sections.
  for (let i = 0; i < 12; i += 1) {
    const t = -0.028 + i * 0.007;
    const wrapped = (t + 1) % 1;
    const point = curve.getPointAt(wrapped);
    const tangent = curve.getTangentAt(wrapped).setY(0).normalize();
    const right = new THREE.Vector3(tangent.z, 0, -tangent.x);
    const side = i % 2 ? 1 : -1;
    const offset = side * (trackWidth / 2 + 2.6);
    addFlagPole(
      staticRoot,
      point.x + right.x * offset,
      point.z + right.z * offset,
      4.25 + (i % 3) * 0.25,
      Math.atan2(tangent.x, tangent.z) + (side < 0 ? Math.PI : 0),
      -0.08,
      0.82,
    );
  }

  function addTrackFence(start, end, side) {
    const sections = Math.max(2, Math.ceil(((end - start) * trackLength) / 3.2));
    let previous = null;
    for (let i = 0; i <= sections; i += 1) {
      const t = THREE.MathUtils.lerp(start, end, i / sections);
      const point = curve.getPointAt(t);
      const tangent = curve.getTangentAt(t).setY(0).normalize();
      const offset = side * (trackWidth / 2 + 1.75);
      const current = new THREE.Vector3(
        point.x + tangent.z * offset,
        0,
        point.z - tangent.x * offset,
      );
      box(staticRoot, 0.18, 1.15, 0.18, materials.wood, current.x, 0.48, current.z);
      if (previous) {
        for (const height of [0.46, 0.84]) {
          beamBetween(
            staticRoot,
            previous.clone().setY(height),
            current.clone().setY(height),
            0.09,
            materials.wood,
            true,
          );
        }
      }
      previous = current;
    }
  }
  addTrackFence(0.105, 0.17, 1);
  addTrackFence(0.29, 0.35, -1);
  addTrackFence(0.48, 0.55, 1);
  addTrackFence(0.71, 0.77, -1);

  // Individual curb blocks break up the otherwise continuous ribbon silhouette.
  const curbCount = Math.floor(trackLength / 3.4);
  for (let i = 0; i < curbCount; i += 1) {
    const t = i / curbCount;
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).setY(0).normalize();
    const angle = Math.atan2(tangent.x, tangent.z);
    for (const side of [-1, 1]) {
      const offset = side * (trackWidth / 2 + 0.45);
      box(
        staticRoot,
        0.34,
        0.18,
        1.55,
        materials.paleStone,
        point.x + tangent.z * offset,
        0.12,
        point.z - tangent.x * offset,
        angle,
      );
    }
  }

  const waterMaterial = createWaterMaterial();
  function waterMesh(geometry, x, z, scaleX = 1, scaleZ = 1) {
    const mesh = new THREE.Mesh(geometry, waterMaterial);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, -0.12, z);
    mesh.scale.set(scaleX, scaleZ, 1);
    mesh.renderOrder = 1;
    root.add(mesh);
    return mesh;
  }

  function addLake(x, z, radiusX, radiusZ) {
    const bank = new THREE.Mesh(new THREE.RingGeometry(1, 1.085, 64), materials.earth);
    bank.rotation.x = -Math.PI / 2;
    bank.position.set(x, -0.155, z);
    bank.scale.set(radiusX, radiusZ, 1);
    bank.receiveShadow = true;
    root.add(bank);
    waterMesh(new THREE.CircleGeometry(1, 64), x, z, radiusX, radiusZ);

    for (let i = 0; i < 72; i += 1) {
      const angle = random() * Math.PI * 2;
      const radial = 1.025 + random() * 0.055;
      const rx = x + Math.cos(angle) * radiusX * radial;
      const rz = z + Math.sin(angle) * radiusZ * radial;
      const height = 0.55 + random() * 0.8;
      cylinder(staticRoot, 0.025, height, materials.reed, rx, -0.12 + height / 2, rz);
      if (i % 3 === 0) {
        const head = put(geometries.cone, materials.straw, staticRoot);
        head.position.set(rx, height - 0.03, rz);
        head.scale.set(0.065, 0.28, 0.065);
      }
    }
  }
  addLake(132, 12, 28, 42);
  addLake(-130, 47, 25, 34);

  // Irrigated rice plots with raised bunds, reflective canals and instanced seedlings.
  const paddyMaterial = new THREE.MeshStandardMaterial({
    map: createPaddyTexture(),
    color: 0xc1c39d,
    roughness: 0.78,
    metalness: 0.03,
  });
  const paddySpecs = [
    [-20, 15, 24, 20], [18, 15, 24, 20],
    [-20, -17, 24, 18], [18, -17, 24, 18], [0, -38, 30, 11],
  ];
  const riceTransforms = [];
  for (const [x, z, width, depth] of paddySpecs) {
    const geometry = new THREE.PlaneGeometry(width, depth);
    const uv = geometry.attributes.uv;
    for (let i = 0; i < uv.count; i += 1) {
      uv.setXY(i, uv.getX(i) * width / 8, uv.getY(i) * depth / 8);
    }
    const field = put(geometry, paddyMaterial);
    field.rotation.x = -Math.PI / 2;
    field.position.set(x, -0.075, z);
    box(staticRoot, width + 0.5, 0.2, 0.38, materials.earth, x, -0.015, z - depth / 2);
    box(staticRoot, width + 0.5, 0.2, 0.38, materials.earth, x, -0.015, z + depth / 2);
    box(staticRoot, 0.38, 0.2, depth, materials.earth, x - width / 2, -0.015, z);
    box(staticRoot, 0.38, 0.2, depth, materials.earth, x + width / 2, -0.015, z);

    for (let rx = -width / 2 + 0.8; rx < width / 2 - 0.5; rx += 1.55) {
      for (let rz = -depth / 2 + 0.8; rz < depth / 2 - 0.5; rz += 1.55) {
        if (random() < 0.1) continue;
        riceTransforms.push({
          x: x + rx + (random() - 0.5) * 0.18,
          z: z + rz + (random() - 0.5) * 0.18,
          scale: 0.5 + random() * 0.32,
          angle: random() * Math.PI,
          shade: random(),
        });
      }
    }
  }
  waterMesh(new THREE.PlaneGeometry(2.2, 67), -1, 0);
  waterMesh(new THREE.PlaneGeometry(66, 2.2), 0, -1.5);

  // Small timber bridges over the village irrigation channels.
  for (let i = 0; i < 9; i += 1) {
    box(staticRoot, 0.43, 0.13, 2.4, materials.wood, -2.75 + i * 0.44, 0.17, 10);
  }
  for (const z of [8.95, 11.05]) {
    box(staticRoot, 4.4, 0.1, 0.1, materials.darkWood, -1, 0.78, z);
    for (const x of [-3, 1]) box(staticRoot, 0.12, 1.1, 0.12, materials.wood, x, 0.4, z);
  }

  // East-lake jetty, kept outside the track envelope.
  for (let i = 0; i < 15; i += 1) {
    box(staticRoot, 0.78, 0.14, 3.1, materials.wood, 104.5 + i * 0.79, 0.18, 23);
  }
  for (const x of [105, 110, 116]) {
    for (const z of [21.7, 24.3]) cylinder(staticRoot, 0.12, 1.65, materials.darkWood, x, -0.25, z);
  }

  const riceMaterial = new THREE.MeshStandardMaterial({
    color: 0x82954d,
    roughness: 0.95,
    side: THREE.DoubleSide,
  });
  addRiceWind(riceMaterial, timeUniform);
  const rice = new THREE.InstancedMesh(createGrassTuftGeometry(), riceMaterial, riceTransforms.length);
  const dummy = new THREE.Object3D();
  const instanceColor = new THREE.Color();
  for (let i = 0; i < riceTransforms.length; i += 1) {
    const item = riceTransforms[i];
    dummy.position.set(item.x, -0.055, item.z);
    dummy.rotation.set(0, item.angle, 0);
    dummy.scale.set(item.scale, item.scale, item.scale);
    dummy.updateMatrix();
    rice.setMatrixAt(i, dummy.matrix);
    instanceColor.setHSL(0.19 + item.shade * 0.035, 0.35, 0.37 + item.shade * 0.1);
    rice.setColorAt(i, instanceColor);
  }
  rice.instanceMatrix.needsUpdate = true;
  rice.instanceColor.needsUpdate = true;
  rice.receiveShadow = true;
  rice.name = 'Wind animated instanced rice seedlings';
  root.add(rice);

  // Hayricks and stone lanterns bring human scale to fields and village paths.
  const hayGeometry = new THREE.LatheGeometry([
    new THREE.Vector2(0, 0), new THREE.Vector2(0.88, 0),
    new THREE.Vector2(1, 0.3), new THREE.Vector2(0.84, 1.05),
    new THREE.Vector2(0.48, 1.62), new THREE.Vector2(0, 1.88),
  ], 12);
  const hayPositions = [
    [-35, 10], [-34, -25], [33, 21], [34, -23], [12, -33],
    [-12, -35], [54, 52], [-55, 58], [103, 77], [-104, -17],
  ];
  for (const [x, z] of hayPositions) {
    const hay = put(hayGeometry, materials.straw);
    hay.position.set(x, -0.12, z);
    hay.rotation.y = random() * Math.PI;
    const scale = 0.85 + random() * 0.35;
    hay.scale.setScalar(scale);
    for (const height of [0.45, 0.95]) {
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.86, 0.035, 4, 12), materials.darkWood);
      band.rotation.x = Math.PI / 2;
      band.position.set(x, height * scale - 0.12, z);
      band.scale.setScalar(scale);
      band.castShadow = true;
      staticRoot.add(band);
    }
  }

  function addStoneLantern(x, z, scale = 1) {
    const lantern = groupAt(staticRoot, x, -0.12, z, random() * 0.25, scale);
    box(lantern, 0.78, 0.22, 0.78, materials.stone, 0, 0.11, 0);
    cylinder(lantern, 0.16, 0.75, materials.stone, 0, 0.58, 0);
    box(lantern, 0.38, 0.4, 0.38, materials.glow, 0, 1.17, 0);
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        box(lantern, 0.09, 0.5, 0.09, materials.stone, sx * 0.25, 1.17, sz * 0.25);
      }
    }
    const cap = put(new THREE.ConeGeometry(0.62, 0.38, 4), materials.stone, lantern);
    cap.position.y = 1.58;
    cap.rotation.y = Math.PI / 4;
    const knob = put(geometries.sphere, materials.stone, lantern);
    knob.position.y = 1.84;
    knob.scale.setScalar(0.1);
  }
  const stoneLanternPositions = [
    [-10, 43], [7, 40], [25, 45], [39, 45], [-36, 39], [-51, 20],
    [42, -28], [-36, -43], [8, -43], [57, 96], [-44, 101], [104, 61],
  ];
  for (const [x, z] of stoneLanternPositions) addStoneLantern(x, z, 0.9 + random() * 0.25);

  // Bamboo groves use shared stalk, node and leaf geometry, later batched by material.
  function addBambooGrove(x, z, count, spread = 5) {
    for (let i = 0; i < count; i += 1) {
      const bx = x + (random() - 0.5) * spread;
      const bz = z + (random() - 0.5) * spread;
      const height = 3.8 + random() * 2.7;
      const radius = 0.055 + random() * 0.035;
      cylinder(staticRoot, radius, height, materials.bamboo, bx, -0.14 + height / 2, bz, true);
      for (let node = 1; node < 5; node += 1) {
        cylinder(staticRoot, radius * 1.35, 0.045, materials.bambooNode, bx, -0.14 + height * node / 5, bz);
      }
      for (let leaf = 0; leaf < 4; leaf += 1) {
        const foliage = put(geometries.leaf, leaf % 2 ? materials.leaf : materials.leafLight);
        foliage.position.set(
          bx + (random() - 0.5) * 0.65,
          height * (0.58 + random() * 0.35),
          bz + (random() - 0.5) * 0.65,
        );
        foliage.rotation.set((random() - 0.5) * 1.2, random() * Math.PI, (random() - 0.5) * 1.1);
        foliage.scale.set(0.75 + random() * 0.5, 0.13 + random() * 0.08, 1);
      }
    }
  }
  addBambooGrove(61, 59, 16, 7);
  addBambooGrove(-60, 61, 16, 7);
  addBambooGrove(58, -4, 14, 6);
  addBambooGrove(-59, -20, 15, 7);
  addBambooGrove(17, -60, 14, 6);
  addBambooGrove(106, -43, 14, 7);

  const willowFrond = new THREE.PlaneGeometry(0.24, 2.8, 1, 4);
  willowFrond.translate(0, -1.4, 0);
  function addWillow(x, z, scale = 1) {
    const tree = groupAt(staticRoot, x, -0.14, z, random() * Math.PI, scale);
    beamBetween(tree, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.25, 4.4, 0.1), 0.24, materials.wood);
    for (let i = 0; i < 8; i += 1) {
      const angle = i / 8 * Math.PI * 2 + random() * 0.3;
      const start = new THREE.Vector3(0.2, 3.2 + random(), 0);
      const end = new THREE.Vector3(Math.cos(angle) * 2, 4.2 + random() * 0.7, Math.sin(angle) * 2);
      beamBetween(tree, start, end, 0.075, materials.wood);
      const crown = put(geometries.lowSphere, materials.willow, tree);
      crown.position.copy(end);
      crown.scale.set(1.1, 0.55, 0.9);
      for (let strand = 0; strand < 2; strand += 1) {
        const frond = put(willowFrond, materials.willow, tree);
        frond.position.set(end.x + (random() - 0.5) * 0.7, end.y, end.z + (random() - 0.5) * 0.7);
        frond.rotation.y = angle + strand * Math.PI / 2;
        frond.scale.y = 0.75 + random() * 0.45;
      }
    }
  }
  addWillow(104, 44, 1.15);
  addWillow(111, -26, 1);
  addWillow(153, 45, 1.2);
  addWillow(-105, 66, 1.1);
  addWillow(-111, 19, 0.95);
  addWillow(-150, 72, 1.15);
  addWillow(-6, 31, 0.85);

  const floweringTreePositions = [];
  function addFloweringTree(x, z, scale = 1, pale = false) {
    const tree = groupAt(staticRoot, x, -0.14, z, random() * Math.PI, scale);
    floweringTreePositions.push({ x, z, scale });
    beamBetween(tree, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 3.25, 0), 0.2, materials.wood);
    for (let i = 0; i < 7; i += 1) {
      const angle = i / 7 * Math.PI * 2;
      const end = new THREE.Vector3(
        Math.cos(angle) * (1.2 + random() * 0.65),
        3.2 + random() * 1.25,
        Math.sin(angle) * (1.2 + random() * 0.65),
      );
      beamBetween(tree, new THREE.Vector3(0, 2.1 + random() * 0.8, 0), end, 0.065, materials.wood);
      const crown = put(geometries.lowSphere, pale ? materials.blossomPale : materials.blossom, tree);
      crown.position.copy(end);
      crown.scale.set(0.85 + random() * 0.4, 0.65 + random() * 0.3, 0.85 + random() * 0.4);
    }
  }
  addFloweringTree(-15, 59, 1.15);
  addFloweringTree(12, 61, 1.05, true);
  addFloweringTree(-40, 38, 0.95);
  addFloweringTree(50, 43, 1.05, true);
  addFloweringTree(39, -46, 1.1);
  addFloweringTree(-30, -58, 1, true);
  addFloweringTree(58, 94, 1.2);
  addFloweringTree(-62, 96, 1.1, true);
  addFloweringTree(102, 83, 1.1);
  addFloweringTree(-105, -3, 0.9);

  // Outer shelter belt: instanced trunks and two crown lobes per tree.
  const treeData = [];
  let treeAttempts = 0;
  while (treeData.length < 76 && treeAttempts < 1600) {
    treeAttempts += 1;
    const angle = random() * Math.PI * 2;
    const radius = 108 + random() * 48;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (distanceToTrackSquared(x, z) < 14 * 14) continue;
    const eastLake = Math.pow((x - 132) / 34, 2) + Math.pow((z - 12) / 49, 2);
    const westLake = Math.pow((x + 130) / 31, 2) + Math.pow((z - 47) / 41, 2);
    if (eastLake < 1 || westLake < 1) continue;
    let nearHouse = false;
    for (const [hx, hz] of houseSpecs) {
      if ((x - hx) ** 2 + (z - hz) ** 2 < 81) {
        nearHouse = true;
        break;
      }
    }
    if (nearHouse) continue;
    treeData.push({ x, z, height: 2.8 + random() * 2.5, width: 1.4 + random() * 1.25, shade: random() });
  }
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x594735, roughness: 1 });
  const crownMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.96, flatShading: true });
  const trunks = new THREE.InstancedMesh(geometries.cylinder, trunkMaterial, treeData.length);
  const crowns = new THREE.InstancedMesh(geometries.lowSphere, crownMaterial, treeData.length * 2);
  for (let i = 0; i < treeData.length; i += 1) {
    const tree = treeData[i];
    dummy.position.set(tree.x, tree.height / 2 - 0.18, tree.z);
    dummy.rotation.set(0, random() * Math.PI, 0);
    dummy.scale.set(0.18, tree.height, 0.18);
    dummy.updateMatrix();
    trunks.setMatrixAt(i, dummy.matrix);
    for (let lobe = 0; lobe < 2; lobe += 1) {
      dummy.position.set(
        tree.x + (lobe ? 0.55 : -0.3) * tree.width,
        tree.height + (lobe ? 0.15 : 0.65),
        tree.z + (lobe ? -0.2 : 0.25) * tree.width,
      );
      dummy.rotation.set(random(), random() * Math.PI, random() * 0.25);
      dummy.scale.set(tree.width, tree.width * 0.85, tree.width);
      dummy.updateMatrix();
      const index = i * 2 + lobe;
      crowns.setMatrixAt(index, dummy.matrix);
      instanceColor.setHSL(0.29 + tree.shade * 0.045, 0.26, 0.3 + tree.shade * 0.12 + lobe * 0.025);
      crowns.setColorAt(index, instanceColor);
    }
  }
  trunks.instanceMatrix.needsUpdate = true;
  crowns.instanceMatrix.needsUpdate = true;
  crowns.instanceColor.needsUpdate = true;
  trunks.castShadow = crowns.castShadow = true;
  trunks.receiveShadow = crowns.receiveShadow = true;
  root.add(trunks, crowns);

  // Spectators are simple instanced villagers, gathered on both sides of the start.
  const spectatorCount = 52;
  const bodyGeometry = new THREE.CylinderGeometry(0.22, 0.3, 0.9, 6);
  const headGeometry = new THREE.SphereGeometry(0.2, 8, 6);
  const hatGeometry = new THREE.ConeGeometry(0.38, 0.2, 12);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.94 });
  const skinMaterial = new THREE.MeshStandardMaterial({ color: 0xc99670, roughness: 0.94 });
  const hatMaterial = new THREE.MeshStandardMaterial({ color: 0xb49a65, roughness: 1 });
  const bodies = new THREE.InstancedMesh(bodyGeometry, bodyMaterial, spectatorCount);
  const heads = new THREE.InstancedMesh(headGeometry, skinMaterial, spectatorCount);
  const hats = new THREE.InstancedMesh(hatGeometry, hatMaterial, spectatorCount);
  const clothing = [0x6f8074, 0x8e5d4c, 0x596d7b, 0xb09a72, 0x747052, 0x9b7770];
  for (let i = 0; i < spectatorCount; i += 1) {
    const t = (-0.035 + (i % 26) * 0.0034 + 1) % 1;
    const side = i < 26 ? -1 : 1;
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).setY(0).normalize();
    const offset = side * (trackWidth / 2 + 3.2 + random() * 3.1);
    const x = point.x + tangent.z * offset;
    const z = point.z - tangent.x * offset;
    const scale = 0.86 + random() * 0.22;
    const facing = Math.atan2(-tangent.z * side, tangent.x * side) + (random() - 0.5) * 0.35;

    dummy.position.set(x, 0.33 * scale - 0.12, z);
    dummy.rotation.set(0, facing, 0);
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    bodies.setMatrixAt(i, dummy.matrix);
    instanceColor.set(clothing[i % clothing.length]);
    bodies.setColorAt(i, instanceColor);

    dummy.position.y = 1.0 * scale - 0.12;
    dummy.updateMatrix();
    heads.setMatrixAt(i, dummy.matrix);
    dummy.position.y = 1.25 * scale - 0.12;
    dummy.updateMatrix();
    hats.setMatrixAt(i, dummy.matrix);
  }
  bodies.instanceMatrix.needsUpdate = heads.instanceMatrix.needsUpdate = true;
  hats.instanceMatrix.needsUpdate = true;
  bodies.instanceColor.needsUpdate = true;
  bodies.castShadow = heads.castShadow = hats.castShadow = true;
  root.add(bodies, heads, hats);

  // Layered low-poly karst silhouettes: sage nearby, misty blue-green far away.
  const mountainGeometry = createMountainGeometry();
  function addMountainLayer(name, count, minRadius, maxRadius, minHeight, maxHeight, minWidth, maxWidth, colorValue) {
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 1,
      flatShading: true,
      side: THREE.DoubleSide,
    });
    const mountains = new THREE.InstancedMesh(mountainGeometry, material, count);
    const baseColor = new THREE.Color(colorValue);
    for (let i = 0; i < count; i += 1) {
      const angle = i / count * Math.PI * 2 + (random() - 0.5) * 0.14;
      const radius = minRadius + random() * (maxRadius - minRadius);
      const width = minWidth + random() * (maxWidth - minWidth);
      const height = minHeight + random() * (maxHeight - minHeight);
      dummy.position.set(Math.cos(angle) * radius, -0.38, Math.sin(angle) * radius);
      dummy.rotation.set(0, random() * Math.PI, 0);
      dummy.scale.set(width, height, width * (0.72 + random() * 0.5));
      dummy.updateMatrix();
      mountains.setMatrixAt(i, dummy.matrix);
      instanceColor.copy(baseColor).offsetHSL((random() - 0.5) * 0.018, 0, (random() - 0.5) * 0.075);
      mountains.setColorAt(i, instanceColor);
    }
    mountains.instanceMatrix.needsUpdate = true;
    mountains.instanceColor.needsUpdate = true;
    mountains.name = name;
    root.add(mountains);
    return mountains;
  }
  addMountainLayer('Near sage karst peaks', 18, 166, 194, 18, 35, 22, 38, 0x4f7163);
  addMountainLayer('Middle jade mountain layer', 22, 210, 250, 30, 55, 30, 50, 0x6f8d7d);
  addMountainLayer('Far mist blue mountain layer', 26, 270, 325, 42, 76, 38, 62, 0x91a398);

  const hillData = [];
  let hillAttempts = 0;
  while (hillData.length < 24 && hillAttempts < 600) {
    hillAttempts += 1;
    const angle = random() * Math.PI * 2;
    const radius = 126 + random() * 37;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (distanceToTrackSquared(x, z) < 23 * 23) continue;
    hillData.push({ x, z, angle: random() * Math.PI, width: 16 + random() * 15, height: 4 + random() * 7 });
  }
  const hillMaterial = new THREE.MeshStandardMaterial({ color: 0x6f805a, roughness: 1, flatShading: true });
  const hills = new THREE.InstancedMesh(mountainGeometry, hillMaterial, hillData.length);
  for (let i = 0; i < hillData.length; i += 1) {
    const hill = hillData[i];
    dummy.position.set(hill.x, -0.35, hill.z);
    dummy.rotation.set(0, hill.angle, 0);
    dummy.scale.set(hill.width, hill.height, hill.width * 0.85);
    dummy.updateMatrix();
    hills.setMatrixAt(i, dummy.matrix);
  }
  hills.instanceMatrix.needsUpdate = true;
  hills.receiveShadow = true;
  root.add(hills);

  // Static cloud puffs and a slowly wheeling flock add depth without lighting objects.
  const cloudGeometry = new THREE.IcosahedronGeometry(1, 1);
  const cloudMaterial = new THREE.MeshBasicMaterial({
    color: 0xeee8d8,
    transparent: true,
    opacity: 0.48,
    depthWrite: false,
  });
  const cloudCount = 40;
  const clouds = new THREE.InstancedMesh(cloudGeometry, cloudMaterial, cloudCount);
  for (let i = 0; i < cloudCount; i += 1) {
    const cloudIndex = Math.floor(i / 4);
    const lobe = i % 4;
    const angle = cloudIndex / 10 * Math.PI * 2 + 0.2;
    const radius = 165 + (cloudIndex % 3) * 28;
    const baseX = Math.cos(angle) * radius;
    const baseZ = Math.sin(angle) * radius;
    dummy.position.set(baseX + (lobe - 1.5) * 5.5, 49 + (cloudIndex % 4) * 5 + (lobe % 2) * 1.8, baseZ);
    dummy.rotation.set(0, random() * Math.PI, 0);
    dummy.scale.set(6 + random() * 4, 2.2 + random() * 1.5, 3.4 + random() * 2.5);
    dummy.updateMatrix();
    clouds.setMatrixAt(i, dummy.matrix);
  }
  clouds.instanceMatrix.needsUpdate = true;
  root.add(clouds);

  const birdGeometry = new THREE.BufferGeometry();
  birdGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
    0, 0, 0, -0.85, 0.18, -0.18, -0.18, 0, 0.35,
    0, 0, 0, 0.85, 0.18, -0.18, 0.18, 0, 0.35,
  ], 3));
  const birdMaterial = new THREE.MeshBasicMaterial({ color: 0x384a43, side: THREE.DoubleSide });
  const birds = new THREE.InstancedMesh(birdGeometry, birdMaterial, 18);
  for (let i = 0; i < 18; i += 1) {
    const angle = i / 18 * Math.PI * 2;
    const radius = 85 + random() * 65;
    dummy.position.set(Math.cos(angle) * radius, 30 + random() * 18, Math.sin(angle) * radius);
    dummy.rotation.set((random() - 0.5) * 0.3, random() * Math.PI, 0);
    dummy.scale.setScalar(0.65 + random() * 0.65);
    dummy.updateMatrix();
    birds.setMatrixAt(i, dummy.matrix);
  }
  birds.instanceMatrix.needsUpdate = true;
  root.add(birds);

  // Lightweight falling blossom particles; all animation writes into existing arrays.
  const petalCount = 210;
  const petalPositions = new Float32Array(petalCount * 3);
  const petalBases = new Float32Array(petalCount * 3);
  const petalPhases = new Float32Array(petalCount);
  const petalSpeeds = new Float32Array(petalCount);
  const petalColors = new Float32Array(petalCount * 3);
  for (let i = 0; i < petalCount; i += 1) {
    const tree = floweringTreePositions[i % floweringTreePositions.length];
    const index = i * 3;
    const radius = 1 + random() * 4.2 * tree.scale;
    const angle = random() * Math.PI * 2;
    petalBases[index] = tree.x + Math.cos(angle) * radius;
    petalBases[index + 1] = 0;
    petalBases[index + 2] = tree.z + Math.sin(angle) * radius;
    petalPositions[index] = petalBases[index];
    petalPositions[index + 1] = 0.15 + random() * 5.3;
    petalPositions[index + 2] = petalBases[index + 2];
    petalPhases[i] = random() * Math.PI * 2;
    petalSpeeds[i] = 0.16 + random() * 0.3;
    instanceColor.set(i % 3 ? 0xe2aaa7 : 0xf0cbbb);
    petalColors[index] = instanceColor.r;
    petalColors[index + 1] = instanceColor.g;
    petalColors[index + 2] = instanceColor.b;
  }
  const petalGeometry = new THREE.BufferGeometry();
  petalGeometry.setAttribute('position', new THREE.BufferAttribute(petalPositions, 3));
  petalGeometry.setAttribute('color', new THREE.BufferAttribute(petalColors, 3));
  const petalMaterial = new THREE.PointsMaterial({
    map: createPetalTexture(),
    size: 0.28,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.82,
    alphaTest: 0.06,
    depthWrite: false,
    vertexColors: true,
  });
  const petals = new THREE.Points(petalGeometry, petalMaterial);
  petals.frustumCulled = false;
  petals.name = 'Drifting peach and pear blossom petals';
  root.add(petals);

  // One instanced draw call for all cloth flags; deformation stays on the GPU.
  const flagGeometry = new THREE.PlaneGeometry(2.2, 1.25, 10, 3);
  flagGeometry.translate(1.1, 0, 0);
  const flagMaterial = new THREE.MeshStandardMaterial({
    map: createFlagTexture(),
    color: 0xffffff,
    roughness: 0.82,
    side: THREE.DoubleSide,
  });
  addFlagWave(flagMaterial, timeUniform);
  const flags = new THREE.InstancedMesh(flagGeometry, flagMaterial, flagTransforms.length);
  for (let i = 0; i < flagTransforms.length; i += 1) {
    const flag = flagTransforms[i];
    dummy.position.copy(flag.position);
    dummy.quaternion.copy(flag.quaternion);
    dummy.scale.setScalar(flag.scale);
    dummy.updateMatrix();
    flags.setMatrixAt(i, dummy.matrix);
  }
  flags.instanceMatrix.needsUpdate = true;
  flags.castShadow = true;
  flags.name = 'GPU waved race flags';
  root.add(flags);

  root.add(mergeStaticMeshes(staticRoot));

  // Vector2 stores world x in x and world z in y, ready for a 2D minimap.
  const minimapPoints = curve.getSpacedPoints(180).map((point) => new THREE.Vector2(point.x, point.z));

  function update(time = 0, dt = 0, playerPosition = null) {
    // playerPosition is accepted for the main-loop interface; effects remain in world space.
    void playerPosition;
    timeUniform.value = time;
    waterMaterial.uniforms.uTime.value = time;
    birds.rotation.y = time * 0.012;
    clouds.position.x = Math.sin(time * 0.018) * 3.5;

    const step = Math.min(0.05, Math.max(0, dt || 0));
    for (let i = 0; i < petalCount; i += 1) {
      const index = i * 3;
      const phase = petalPhases[i];
      let y = petalPositions[index + 1] - step * petalSpeeds[i];
      if (y < 0.08) y = 4.5 + (phase / (Math.PI * 2)) * 1.2;
      petalPositions[index] = petalBases[index]
        + Math.sin(time * 0.48 + phase) * 1.05
        + (5 - y) * 0.075;
      petalPositions[index + 1] = y;
      petalPositions[index + 2] = petalBases[index + 2]
        + Math.cos(time * 0.36 + phase * 1.3) * 0.72;
    }
    petalGeometry.attributes.position.needsUpdate = true;
  }

  return { curve, trackLength, trackWidth, update, minimapPoints };
}
