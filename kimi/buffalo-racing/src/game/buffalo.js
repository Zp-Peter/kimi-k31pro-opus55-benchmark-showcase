import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * A procedural Chinese water buffalo and rider, in metres.
 * Local +Z is forward; the unanimated hooves sit just above y = 0.
 * Static details are merged by material to keep the model around 50 draw calls.
 */

const clamp = THREE.MathUtils.clamp;

/** Clone and transform a primitive before merging it with other parts. */
function part(geometry, position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0]) {
  const result = geometry.clone();
  const matrix = new THREE.Matrix4();
  const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation));
  matrix.compose(new THREE.Vector3(...position), quaternion, new THREE.Vector3(...scale));
  result.applyMatrix4(matrix);
  return result;
}

/** Normalise indexing so spheres, tubes and rounded boxes can share one mesh. */
function mergeParts(parts) {
  const flattened = parts.map((geometry) => {
    if (geometry.index === null) return geometry;
    const result = geometry.toNonIndexed();
    geometry.dispose();
    return result;
  });
  const merged = mergeGeometries(flattened, false);
  flattened.forEach((geometry) => geometry.dispose());
  if (!merged) throw new Error('Unable to merge procedural buffalo geometry.');
  merged.computeBoundingBox();
  merged.computeBoundingSphere();
  return merged;
}

function addMesh(parent, geometry, material, name, castsShadow = true) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.castShadow = castsShadow;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function tube(points, radius, segments = 12, radialSegments = 6) {
  const curve = new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point)));
  return new THREE.TubeGeometry(curve, segments, radius, radialSegments, false);
}

/** Add a tapered cylinder between arbitrary points (used for limbs and sleeves). */
function addLimb(parts, startArray, endArray, startRadius, endRadius, segments = 8) {
  const start = new THREE.Vector3(...startArray);
  const end = new THREE.Vector3(...endArray);
  const direction = end.clone().sub(start);
  const length = direction.length();
  if (length < 1e-5) return;

  // Cylinder +Y is mapped to end; its top radius is therefore endRadius.
  const geometry = new THREE.CylinderGeometry(endRadius, startRadius, length, segments, 1, false);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.normalize(),
  );
  const matrix = new THREE.Matrix4().compose(
    start.clone().lerp(end, 0.5),
    quaternion,
    new THREE.Vector3(1, 1, 1),
  );
  geometry.applyMatrix4(matrix);
  parts.push(geometry);
}

/** A broad, ribbed, crescent-shaped horn with a sharply tapering tip. */
function createHornGeometry(side) {
  const points = [
    [0.24, 0.25, 0.05],
    [0.43, 0.30, -0.02],
    [0.61, 0.35, -0.16],
    [0.68, 0.47, -0.34],
    [0.61, 0.61, -0.49],
    [0.48, 0.67, -0.55],
  ].map(([x, y, z]) => new THREE.Vector3(x * side, y, z));
  const curve = new THREE.CatmullRomCurve3(points);
  const tubularSegments = 24;
  const radialSegments = 9;
  const geometry = new THREE.TubeGeometry(curve, tubularSegments, 0.085, radialSegments, false);
  const positions = geometry.attributes.position;
  const centre = new THREE.Vector3();
  const vertex = new THREE.Vector3();

  // TubeGeometry has a constant radius. Reshape its rings for a rooted,
  // subtly ridged horn instead of adding separate draw calls for each ridge.
  for (let i = 0; i <= tubularSegments; i += 1) {
    const t = i / tubularSegments;
    curve.getPointAt(t, centre);
    const taper = 0.065 + 0.935 * Math.pow(1 - t, 0.8);
    const ridge = 1 + Math.sin(t * Math.PI * 18) * 0.055 * (1 - t);
    for (let j = 0; j <= radialSegments; j += 1) {
      const index = i * (radialSegments + 1) + j;
      vertex.fromBufferAttribute(positions, index);
      vertex.sub(centre).multiplyScalar(taper * ridge).add(centre);
      positions.setXYZ(index, vertex.x, vertex.y, vertex.z);
    }
  }
  positions.needsUpdate = true;
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

/** Geometry-based seven-segment numerals: no font, canvas or image assets. */
function createNumberGeometry(label) {
  const segmentMap = {
    0: ['a', 'b', 'c', 'd', 'e', 'f'],
    1: ['b', 'c'],
    2: ['a', 'b', 'g', 'e', 'd'],
    3: ['a', 'b', 'g', 'c', 'd'],
    4: ['f', 'g', 'b', 'c'],
    5: ['a', 'f', 'g', 'c', 'd'],
    6: ['a', 'f', 'g', 'e', 'c', 'd'],
    7: ['a', 'b', 'c'],
    8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    9: ['a', 'b', 'c', 'd', 'f', 'g'],
  };
  const width = 0.12;
  const height = 0.22;
  const thickness = 0.018;
  const depth = 0.012;
  const layouts = {
    a: [[0, height / 2, 0], [width, thickness, depth]],
    g: [[0, 0, 0], [width, thickness, depth]],
    d: [[0, -height / 2, 0], [width, thickness, depth]],
    f: [[-width / 2, height / 4, 0], [thickness, height / 2, depth]],
    b: [[width / 2, height / 4, 0], [thickness, height / 2, depth]],
    e: [[-width / 2, -height / 4, 0], [thickness, height / 2, depth]],
    c: [[width / 2, -height / 4, 0], [thickness, height / 2, depth]],
  };
  const box = new THREE.BoxGeometry(1, 1, 1);
  const parts = [];
  const spacing = width + 0.045;

  [...label].forEach((digit, index) => {
    const offsetX = (index - (label.length - 1) / 2) * spacing;
    for (const segment of segmentMap[digit]) {
      const [position, scale] = layouts[segment];
      parts.push(part(
        box,
        [position[0] + offsetX, position[1], position[2]],
        scale,
      ));
    }
  });
  box.dispose();
  return mergeParts(parts);
}

/**
 * One dynamically updated tube per rein. Only a few hundred vertices are
 * touched per frame, avoiding both geometry allocations and segmented ropes.
 */
function createRein(material) {
  const tubularSegments = 18;
  const radialSegments = 6;
  const ringSize = radialSegments + 1;
  const vertexCount = (tubularSegments + 1) * ringSize;
  const positions = new Float32Array(vertexCount * 3);
  const normals = new Float32Array(vertexCount * 3);
  const uvs = new Float32Array(vertexCount * 2);
  const indices = [];

  for (let i = 0; i <= tubularSegments; i += 1) {
    for (let j = 0; j <= radialSegments; j += 1) {
      const vertex = i * ringSize + j;
      uvs[vertex * 2] = i / tubularSegments;
      uvs[vertex * 2 + 1] = j / radialSegments;
      if (i < tubularSegments && j < radialSegments) {
        const a = i * ringSize + j;
        const b = (i + 1) * ringSize + j;
        const c = (i + 1) * ringSize + j + 1;
        const d = i * ringSize + j + 1;
        // This winding faces outwards for the frame constructed below.
        indices.push(a, d, b, b, d, c);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  const positionAttribute = new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage);
  const normalAttribute = new THREE.BufferAttribute(normals, 3).setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('position', positionAttribute);
  geometry.setAttribute('normal', normalAttribute);
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'Supple leather rein';
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;

  const control = new THREE.Vector3();
  const centre = new THREE.Vector3();
  const tangent = new THREE.Vector3();
  const delta = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const binormal = new THREE.Vector3();
  const offset = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const alternateUp = new THREE.Vector3(1, 0, 0);
  const radius = 0.011;

  function update(start, end, time, runAmount, side) {
    control.copy(start).lerp(end, 0.5);
    control.y -= 0.15 - runAmount * 0.075; // Slack at rest, taut at speed.
    control.x += side * Math.sin(time * 3.1 + side) * (0.012 + runAmount * 0.018);
    control.z += Math.sin(time * (4 + runAmount * 4) + side) * 0.015 * runAmount;

    for (let i = 0; i <= tubularSegments; i += 1) {
      const u = i / tubularSegments;
      const v = 1 - u;
      centre.copy(start).multiplyScalar(v * v)
        .addScaledVector(control, 2 * v * u)
        .addScaledVector(end, u * u);
      tangent.copy(control).sub(start).multiplyScalar(2 * v);
      delta.copy(end).sub(control).multiplyScalar(2 * u);
      tangent.add(delta).normalize();

      // A small travelling ripple keeps the loose section from feeling rigid.
      const ripple = Math.sin(Math.PI * u) * Math.sin(time * (3 + runAmount * 5) - u * 5 + side);
      centre.x += side * ripple * (0.006 + runAmount * 0.012);
      centre.y += ripple * runAmount * 0.005;

      const reference = Math.abs(tangent.y) > 0.92 ? alternateUp : up;
      normal.crossVectors(tangent, reference).normalize();
      binormal.crossVectors(tangent, normal).normalize();

      for (let j = 0; j <= radialSegments; j += 1) {
        const angle = (j / radialSegments) * Math.PI * 2;
        offset.copy(normal).multiplyScalar(Math.cos(angle))
          .addScaledVector(binormal, Math.sin(angle)).normalize();
        const index = i * ringSize + j;
        positions[index * 3] = centre.x + offset.x * radius;
        positions[index * 3 + 1] = centre.y + offset.y * radius;
        positions[index * 3 + 2] = centre.z + offset.z * radius;
        normals[index * 3] = offset.x;
        normals[index * 3 + 1] = offset.y;
        normals[index * 3 + 2] = offset.z;
      }
    }
    positionAttribute.needsUpdate = true;
    normalAttribute.needsUpdate = true;
  }

  return { mesh, update };
}

/**
 * Create a Chinese water buffalo, saddle cloth and seated shepherd boy.
 *
 * @param {object} options
 * @param {THREE.ColorRepresentation} [options.bodyColor=0x343a37]
 * @param {THREE.ColorRepresentation} [options.clothColor=0x9b2938] Saddle cloth.
 * @param {THREE.ColorRepresentation} [options.accentColor=0xd3ad61] Trim, frogs and plates.
 * @param {number|string} [options.number=8] Race number, clamped to 0–99.
 * @param {THREE.ColorRepresentation} [options.skinColor=0xd6a078]
 * @returns {{group: THREE.Group, update: (time: number, speed: number, steering?: number) => void}}
 * update uses seconds, world-unit speed and steering in [-1, 1].
 */
export function createBuffalo(options = {}) {
  const opts = options && typeof options === 'object' ? options : {};
  const bodyColor = new THREE.Color(opts.bodyColor ?? 0x343a37);
  const clothColor = new THREE.Color(opts.clothColor ?? 0x9b2938);
  const accentColor = new THREE.Color(opts.accentColor ?? 0xd3ad61);
  const skinColor = new THREE.Color(opts.skinColor ?? 0xd6a078);
  const muzzleColor = bodyColor.clone().lerp(new THREE.Color(0x807b70), 0.24);
  const innerEarColor = bodyColor.clone().lerp(new THREE.Color(0x80584e), 0.48);

  const standard = (color, roughness = 0.8, extra = {}) => new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0,
    ...extra,
  });
  const materials = {
    body: standard(bodyColor, 0.86),
    muzzle: standard(muzzleColor, 0.78),
    innerEar: standard(innerEarColor, 0.9),
    horn: standard(0x24231f, 0.48, { flatShading: true }),
    hoof: standard(0x292a27, 0.67, { flatShading: true }),
    eye: standard(0x090807, 0.16),
    darkDetail: standard(0x12110f, 0.7),
    glint: standard(0xfff1dc, 0.25, { emissive: 0xffe5c2, emissiveIntensity: 0.18 }),
    cloth: standard(clothColor, 0.91),
    accent: standard(accentColor, 0.68),
    number: standard(0xfff0d2, 0.7),
    leather: standard(0x40291c, 0.76),
    rope: standard(0x68482b, 0.82),
    skin: standard(skinColor, 0.82),
    jacket: standard(0x29495d, 0.92, { flatShading: true }),
    pants: standard(0x29343a, 0.94),
    binding: standard(0xc8b994, 0.96),
    straw: standard(0xc7a361, 0.9, { flatShading: true }),
    shoe: standard(0x202729, 0.93),
  };

  const group = new THREE.Group();
  group.name = 'Chinese water buffalo and shepherd boy';
  const bodyRoot = new THREE.Group();
  bodyRoot.name = 'Animated buffalo body';
  group.add(bodyRoot);

  const sphere = new THREE.SphereGeometry(1, 18, 12);
  const detailSphere = new THREE.SphereGeometry(1, 10, 7);

  // Overlapping muscular masses are merged into one softly faceted torso.
  const torsoGeometry = mergeParts([
    part(sphere, [0, 1.43, -0.05], [0.64, 0.60, 1.02]),
    part(sphere, [0, 1.45, -0.68], [0.66, 0.64, 0.68]),
    part(sphere, [0, 1.52, 0.57], [0.65, 0.68, 0.65]),
    part(sphere, [0, 1.62, 0.99], [0.45, 0.53, 0.49]),
    part(sphere, [0, 1.19, 0.09], [0.53, 0.39, 0.83]),
    part(sphere, [0, 1.25, 0.80], [0.39, 0.39, 0.40]),
  ]);
  addMesh(bodyRoot, torsoGeometry, materials.body, 'Barrel, haunches, shoulders and dewlap');

  // Head: broad skull, heavy muzzle, small bright eyes and a bridle.
  const headPivot = new THREE.Group();
  headPivot.name = 'Head animation pivot';
  headPivot.position.set(0, 1.72, 1.08);
  bodyRoot.add(headPivot);

  const skullGeometry = mergeParts([
    part(sphere, [0, 0.02, 0.18], [0.36, 0.37, 0.40]),
    part(sphere, [-0.17, -0.11, 0.31], [0.23, 0.24, 0.29]),
    part(sphere, [0.17, -0.11, 0.31], [0.23, 0.24, 0.29]),
    part(sphere, [0, 0.09, 0.42], [0.25, 0.26, 0.25]),
  ]);
  addMesh(headPivot, skullGeometry, materials.body, 'Broad water buffalo skull');
  addMesh(
    headPivot,
    part(sphere, [0, -0.15, 0.57], [0.30, 0.22, 0.31]),
    materials.muzzle,
    'Heavy soft muzzle',
  );

  for (const side of [-1, 1]) {
    addMesh(headPivot, createHornGeometry(side), materials.horn, side < 0 ? 'Left crescent horn' : 'Right crescent horn');
  }

  const ears = [];
  for (const side of [-1, 1]) {
    const earPivot = new THREE.Group();
    earPivot.position.set(side * 0.34, 0.17, 0.08);
    headPivot.add(earPivot);
    const outer = addMesh(earPivot, sphere, materials.body, 'Leaf-shaped ear');
    outer.position.set(side * 0.12, 0, 0);
    outer.scale.set(0.22, 0.065, 0.12);
    outer.rotation.set(0.1, side * 0.18, side * 0.25);
    const inner = addMesh(earPivot, detailSphere, materials.innerEar, 'Inner ear', false);
    inner.position.set(side * 0.13, 0.047, 0.015);
    inner.scale.set(0.14, 0.018, 0.075);
    inner.rotation.copy(outer.rotation);
    ears.push({ pivot: earPivot, side });
  }

  const eyeParts = [];
  const glintParts = [];
  const nostrilParts = [];
  for (const side of [-1, 1]) {
    eyeParts.push(part(detailSphere, [side * 0.325, 0.09, 0.40], [0.043, 0.045, 0.035]));
    glintParts.push(part(detailSphere, [side * 0.340, 0.108, 0.418], [0.011, 0.011, 0.011]));
    nostrilParts.push(part(detailSphere, [side * 0.135, -0.13, 0.858], [0.052, 0.035, 0.018]));
  }
  addMesh(headPivot, mergeParts(eyeParts), materials.eye, 'Dark alert eyes', false);
  addMesh(headPivot, mergeParts(glintParts), materials.glint, 'Eye catchlights', false);
  addMesh(headPivot, mergeParts(nostrilParts), materials.darkDetail, 'Wide nostrils', false);
  addMesh(
    headPivot,
    tube([[-0.19, -0.245, 0.73], [0, -0.275, 0.82], [0.19, -0.245, 0.73]], 0.009, 10, 5),
    materials.darkDetail,
    'Curved mouth line',
    false,
  );

  const noseBand = addMesh(
    headPivot,
    new THREE.TorusGeometry(1, 0.045, 6, 24),
    materials.leather,
    'Muzzle bridle band',
  );
  noseBand.position.set(0, -0.12, 0.62);
  noseBand.scale.set(0.30, 0.22, 0.70);
  const bridleParts = [];
  for (const side of [-1, 1]) {
    bridleParts.push(tube([
      [side * 0.28, 0.26, 0.16],
      [side * 0.34, 0.05, 0.36],
      [side * 0.27, -0.10, 0.62],
    ], 0.018, 10, 5));
  }
  bridleParts.push(tube([[-0.26, 0.23, 0.22], [0, 0.30, 0.36], [0.26, 0.23, 0.22]], 0.016, 10, 5));
  addMesh(headPivot, mergeParts(bridleParts), materials.leather, 'Cheek straps and brow band');

  // Four jointed legs. Each geometry is shared, while pivots retain an
  // independent diagonal running gait and knee/hock flexion.
  const upperLegGeometry = mergeParts([
    part(sphere, [0, -0.08, 0], [0.16, 0.21, 0.17]),
    part(new THREE.CylinderGeometry(0.14, 0.095, 0.44, 9), [0, -0.25, 0]),
  ]);
  const lowerLegGeometry = mergeParts([
    part(new THREE.CylinderGeometry(0.085, 0.052, 0.50, 8), [0, -0.28, 0]),
    part(detailSphere, [0, -0.02, 0], [0.09, 0.08, 0.09]),
    part(detailSphere, [0, -0.54, 0.01], [0.072, 0.095, 0.075]),
  ]);
  const hoofGeometry = mergeParts([
    part(new RoundedBoxGeometry(0.09, 0.20, 0.24, 2, 0.024), [-0.052, 0, 0.035]),
    part(new RoundedBoxGeometry(0.09, 0.20, 0.24, 2, 0.024), [0.052, 0, 0.035]),
  ]);
  const legs = [];
  const legLayout = [
    { x: -0.46, z: 0.68, front: true, phase: 0 },
    { x: 0.46, z: 0.68, front: true, phase: Math.PI },
    { x: -0.47, z: -0.70, front: false, phase: Math.PI + 0.35 },
    { x: 0.47, z: -0.70, front: false, phase: 0.35 },
  ];
  legLayout.forEach((layout, index) => {
    const hip = new THREE.Group();
    hip.name = layout.front ? 'Front leg hip' : 'Rear leg hip';
    hip.position.set(layout.x, 1.27, layout.z);
    bodyRoot.add(hip);
    addMesh(hip, upperLegGeometry, materials.body, 'Muscular upper leg');
    const knee = new THREE.Group();
    knee.position.y = -0.45;
    hip.add(knee);
    addMesh(knee, lowerLegGeometry, materials.body, 'Tapered cannon bone and fetlock');
    const hoof = addMesh(knee, hoofGeometry, materials.hoof, 'Cloven two-toed hoof');
    hoof.position.set(0, -0.70, 0);
    legs.push({ hip, knee, hoof, phase: layout.phase, front: layout.front, index });
  });

  // A long curved tail and dark tuft, pivoting from the rump.
  const tailPivot = new THREE.Group();
  tailPivot.name = 'Tail swish pivot';
  tailPivot.position.set(0, 1.58, -1.28);
  bodyRoot.add(tailPivot);
  addMesh(
    tailPivot,
    tube([[0, 0, 0], [0, -0.08, -0.16], [0.02, -0.32, -0.29], [0, -0.57, -0.40], [0, -0.72, -0.42]], 0.032, 16, 7),
    materials.body,
    'Curved tail',
  );
  const tailTuft = addMesh(tailPivot, detailSphere, materials.horn, 'Tail switch');
  tailTuft.position.set(0, -0.73, -0.42);
  tailTuft.scale.set(0.09, 0.18, 0.09);

  // Saddle blanket: a rounded top, two hanging cloth panels and gold trim.
  const saddle = new THREE.Group();
  saddle.name = 'Chinese racing saddle cloth';
  bodyRoot.add(saddle);
  addMesh(
    saddle,
    new RoundedBoxGeometry(1.04, 0.12, 1.12, 3, 0.055),
    materials.cloth,
    'Rounded saddle blanket',
  ).position.set(0, 2.06, -0.12);

  const numericValue = Number(opts.number ?? 8);
  const raceNumber = Number.isFinite(numericValue)
    ? String(Math.trunc(clamp(numericValue, 0, 99)))
    : '8';
  const numberGeometry = createNumberGeometry(raceNumber);
  const plateGeometry = new RoundedBoxGeometry(0.50, 0.36, 0.035, 2, 0.025);
  const sideClothGeometry = new RoundedBoxGeometry(0.065, 0.55, 1.02, 2, 0.025);
  const trimGeometry = new THREE.CylinderGeometry(0.018, 0.018, 1.02, 8);
  const clothPanels = [];

  for (const side of [-1, 1]) {
    const panelPivot = new THREE.Group();
    panelPivot.position.set(side * 0.60, 2.06, -0.12);
    saddle.add(panelPivot);
    const panel = addMesh(panelPivot, sideClothGeometry, materials.cloth, 'Hanging saddle cloth');
    panel.position.set(side * 0.055, -0.27, 0);
    const trim = addMesh(panelPivot, trimGeometry, materials.accent, 'Saddle cloth lower border');
    trim.position.set(side * 0.09, -0.54, 0);
    trim.rotation.x = Math.PI / 2;

    const plate = new THREE.Group();
    plate.name = `Race number ${raceNumber}`;
    plate.position.set(side * 0.092, -0.25, 0.04);
    plate.rotation.y = side * Math.PI / 2;
    panelPivot.add(plate);
    addMesh(plate, plateGeometry, materials.accent, 'Rounded number plate');
    const numberMesh = addMesh(plate, numberGeometry, materials.number, 'Geometry race numeral', false);
    numberMesh.position.z = 0.025;
    clothPanels.push({ pivot: panelPivot, side });
  }

  // Rider pelvis and straddling legs remain planted while the upper body sways.
  const rider = new THREE.Group();
  rider.name = 'Shepherd boy rider';
  bodyRoot.add(rider);
  const pantsParts = [part(sphere, [0, 2.18, -0.18], [0.25, 0.16, 0.22])];
  const bindingParts = [];
  const shoeParts = [];
  for (const side of [-1, 1]) {
    const hip = [side * 0.14, 2.18, -0.18];
    const knee = [side * 0.61, 1.91, 0.02];
    const ankle = [side * 0.65, 1.49, 0.03];
    addLimb(pantsParts, hip, knee, 0.105, 0.083, 9);
    pantsParts.push(part(detailSphere, knee, [0.088, 0.09, 0.09]));
    addLimb(bindingParts, knee, ankle, 0.069, 0.057, 9);

    // Raised wraps are real geometry, not a texture.
    const kneeVector = new THREE.Vector3(...knee);
    const ankleVector = new THREE.Vector3(...ankle);
    const direction = ankleVector.clone().sub(kneeVector).normalize();
    for (const t of [0.20, 0.42, 0.64, 0.83]) {
      const centre = kneeVector.clone().lerp(ankleVector, t);
      const a = centre.clone().addScaledVector(direction, -0.014);
      const b = centre.clone().addScaledVector(direction, 0.014);
      addLimb(bindingParts, a.toArray(), b.toArray(), 0.073, 0.073, 9);
    }
    shoeParts.push(part(sphere, [side * 0.65, 1.43, 0.12], [0.11, 0.07, 0.17]));
  }
  addMesh(rider, mergeParts(pantsParts), materials.pants, 'Seated trousers and bent thighs');
  addMesh(rider, mergeParts(bindingParts), materials.binding, 'Traditional wrapped calf bindings');
  addMesh(rider, mergeParts(shoeParts), materials.shoe, 'Black cloth riding shoes');

  const riderUpper = new THREE.Group();
  riderUpper.name = 'Rider upper-body sway';
  riderUpper.position.set(0, 2.18, -0.18);
  rider.add(riderUpper);

  const jacketParts = [
    part(new THREE.CylinderGeometry(0.19, 0.24, 0.44, 10), [0, 0.29, 0], [1, 1, 0.78]),
    part(sphere, [0, 0.43, 0], [0.23, 0.14, 0.16]),
    part(new THREE.CylinderGeometry(0.105, 0.115, 0.08, 12), [0, 0.54, 0.015], [1, 1, 0.85]),
  ];
  const armSkinParts = [];
  const handAnchors = [];
  for (const side of [-1, 1]) {
    const shoulder = [side * 0.21, 0.43, 0];
    const elbow = [side * 0.29, 0.25, 0.20];
    const wrist = [side * 0.23, 0.14, 0.48];
    addLimb(jacketParts, shoulder, elbow, 0.078, 0.064, 9);
    jacketParts.push(part(detailSphere, shoulder, [0.08, 0.085, 0.08]));
    addLimb(armSkinParts, elbow, wrist, 0.055, 0.043, 9);
    armSkinParts.push(part(detailSphere, elbow, [0.059, 0.06, 0.06]));
    armSkinParts.push(part(detailSphere, wrist, [0.058, 0.052, 0.07]));
    const handAnchor = new THREE.Object3D();
    handAnchor.position.set(...wrist);
    riderUpper.add(handAnchor);
    handAnchors.push({ anchor: handAnchor, side });
  }
  addLimb(armSkinParts, [0, 0.50, 0.02], [0, 0.62, 0.02], 0.075, 0.07, 10);
  addMesh(riderUpper, mergeParts(jacketParts), materials.jacket, 'Indigo short jacket and sleeves');
  addMesh(riderUpper, mergeParts(armSkinParts), materials.skin, 'Forearms, gripping hands and neck');

  // Raised central placket, three horizontal frog closures and their knots.
  const frogParts = [
    part(new RoundedBoxGeometry(0.025, 0.36, 0.018, 1, 0.006), [0, 0.29, 0.165]),
  ];
  for (const y of [0.40, 0.28, 0.16]) {
    addLimb(frogParts, [-0.067, y, 0.18], [0.067, y, 0.18], 0.011, 0.011, 7);
    frogParts.push(part(detailSphere, [0, y, 0.187], [0.022, 0.018, 0.012]));
  }
  addMesh(riderUpper, mergeParts(frogParts), materials.accent, 'Chinese frog-button placket', false);

  const riderHead = new THREE.Group();
  riderHead.name = 'Rider head look pivot';
  riderHead.position.set(0, 0.66, 0.02);
  riderUpper.add(riderHead);
  const riderFaceGeometry = mergeParts([
    part(sphere, [0, 0, 0], [0.155, 0.18, 0.15]),
    part(detailSphere, [0, -0.015, 0.145], [0.035, 0.045, 0.04]),
    part(detailSphere, [-0.155, 0, 0], [0.035, 0.055, 0.025]),
    part(detailSphere, [0.155, 0, 0], [0.035, 0.055, 0.025]),
  ]);
  addMesh(riderHead, riderFaceGeometry, materials.skin, 'Boy face, nose and ears');
  const riderEyeParts = [];
  for (const side of [-1, 1]) {
    riderEyeParts.push(part(detailSphere, [side * 0.058, 0.035, 0.137], [0.014, 0.018, 0.012]));
    riderEyeParts.push(part(detailSphere, [side * 0.058, 0.070, 0.135], [0.024, 0.006, 0.008]));
  }
  addMesh(riderHead, mergeParts(riderEyeParts), materials.eye, 'Boy eyes and brows', false);

  // A single lathed-looking silhouette made from a cone and a thin brim.
  const hatCone = new THREE.ConeGeometry(0.35, 0.20, 24, 1, false);
  hatCone.translate(0, 0.25, 0);
  const hatBrim = new THREE.CylinderGeometry(0.37, 0.37, 0.025, 24);
  hatBrim.translate(0, 0.15, 0);
  addMesh(riderHead, mergeParts([hatCone, hatBrim]), materials.straw, 'Conical bamboo douli hat');

  // Reins connect actual animated head/hand anchors rather than floating in space.
  const reinHeadAnchors = [];
  for (const side of [-1, 1]) {
    const anchor = new THREE.Object3D();
    anchor.position.set(side * 0.27, -0.10, 0.64);
    headPivot.add(anchor);
    reinHeadAnchors.push({ anchor, side });
  }
  const reins = [];
  const inverseBodyMatrix = new THREE.Matrix4();
  const reinStart = new THREE.Vector3();
  const reinEnd = new THREE.Vector3();
  for (let i = 0; i < 2; i += 1) {
    const rein = createRein(materials.rope);
    bodyRoot.add(rein.mesh);
    reins.push(rein);
  }

  let previousTime;
  let gaitPhase = 0;
  let runAmount = 0;

  function updateReins(time) {
    // Convert world-space anchors back to bodyRoot space, so the model can be
    // freely positioned/rotated/scaled by its parent without breaking the ropes.
    group.updateWorldMatrix(true, true);
    inverseBodyMatrix.copy(bodyRoot.matrixWorld).invert();
    for (let i = 0; i < reins.length; i += 1) {
      reinStart.setFromMatrixPosition(reinHeadAnchors[i].anchor.matrixWorld).applyMatrix4(inverseBodyMatrix);
      reinEnd.setFromMatrixPosition(handAnchors[i].anchor.matrixWorld).applyMatrix4(inverseBodyMatrix);
      reins[i].update(reinStart, reinEnd, time, runAmount, reinHeadAnchors[i].side);
    }
  }

  function update(time, speed, steering = 0) {
    const t = Number.isFinite(time) ? time : 0;
    const numericSpeed = Number(speed);
    const pace = Number.isFinite(numericSpeed) ? Math.abs(numericSpeed) : 0;
    const steer = clamp(Number.isFinite(steering) ? steering : 0, -1, 1);
    const targetRun = clamp(pace / 6, 0, 1);
    const dt = previousTime === undefined ? 0 : clamp(t - previousTime, 0, 0.05);
    if (previousTime === undefined) runAmount = targetRun;
    else runAmount += (targetRun - runAmount) * (1 - Math.exp(-dt * 8));
    previousTime = t;

    // Integrating phase avoids gait jumps when speed changes during a race.
    gaitPhase += dt * (3 + 7 * runAmount) * Math.min(pace * 1.5, 1);
    const idleBreath = Math.sin(t * 1.7) * 0.006 * (1 - runAmount);
    bodyRoot.position.y = idleBreath + Math.sin(gaitPhase * 2) * 0.035 * runAmount;
    bodyRoot.rotation.z = -steer * (0.018 + runAmount * 0.026);
    bodyRoot.rotation.x = Math.sin(gaitPhase * 2) * 0.012 * runAmount;

    for (const leg of legs) {
      const phase = gaitPhase + leg.phase;
      const swing = Math.sin(phase);
      const flexion = Math.max(0, -swing);
      leg.hip.rotation.x = swing * 0.58 * runAmount;
      const bend = (0.08 + 0.58 * flexion) * runAmount;
      leg.knee.rotation.x = leg.front ? bend : -bend * 0.68;
      leg.hoof.rotation.x = -(leg.hip.rotation.x + leg.knee.rotation.x) * 0.42;
      leg.hoof.rotation.z = Math.sin(phase + leg.index) * 0.025 * runAmount;
    }

    headPivot.rotation.y = steer * 0.18 + Math.sin(t * 0.72) * 0.012 * (1 - runAmount);
    headPivot.rotation.x = Math.sin(gaitPhase * 2 + 0.4) * 0.027 * runAmount
      + Math.sin(t * 1.3) * 0.012 * (1 - runAmount);
    headPivot.rotation.z = -steer * 0.045;

    for (const { pivot, side } of ears) {
      const twitch = Math.pow(Math.max(0, Math.sin(t * 0.83 + side * 1.7)), 12) * Math.sin(t * 15);
      pivot.rotation.y = side * (0.04 * Math.sin(t * 1.9 + side) + twitch * 0.10);
      pivot.rotation.z = side * (0.10 + 0.035 * Math.sin(t * 1.4 + side))
        + Math.sin(gaitPhase * 2 + side) * 0.025 * runAmount;
    }

    tailPivot.rotation.z = Math.sin(t * (2.1 + runAmount * 4.5)) * (0.13 + runAmount * 0.20)
      + steer * 0.10;
    tailPivot.rotation.x = -0.06 + runAmount * 0.10 + Math.sin(t * 1.6) * 0.045;
    tailTuft.rotation.z = Math.sin(t * 3.2 + 0.7) * (0.08 + runAmount * 0.12);

    riderUpper.rotation.x = runAmount * 0.07 + Math.sin(gaitPhase * 2) * 0.014 * runAmount;
    riderUpper.rotation.z = -steer * 0.085 + Math.sin(gaitPhase) * 0.014 * runAmount;
    riderHead.rotation.y = steer * 0.11 + Math.sin(t * 0.6) * 0.01;
    riderHead.rotation.z = steer * 0.025;

    for (const { pivot, side } of clothPanels) {
      pivot.rotation.z = side * (0.012 + Math.sin(gaitPhase * 2 + side * 0.8) * 0.035 * runAmount)
        + steer * 0.012;
      pivot.rotation.x = Math.sin(gaitPhase * 2.7 + side) * 0.024 * runAmount;
    }

    updateReins(t);
  }

  // Initialise rope vertices and all pivots even if the caller renders before
  // its first animation tick. The next real tick gets a fresh time baseline.
  update(0, 0, 0);
  previousTime = undefined;
  gaitPhase = 0;
  runAmount = 0;

  return { group, update };
}
