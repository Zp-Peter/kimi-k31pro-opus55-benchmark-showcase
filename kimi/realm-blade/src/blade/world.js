import * as THREE from 'three';
import { TEAM_DEFS, ZONES, buildTypeById, weaponById } from './config.js';
import { circleHitsObstacle, hasLineOfSight } from './navigation.js';

const INK = '#17252b';
const PAPER = '#ddd4bb';

function canvasTexture(canvas) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export class ArenaWorld {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#91aaa5');
    this.scene.fog = new THREE.Fog('#91aaa5', 42, 105);
    this.camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.045, 160);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.id = 'arena-canvas';
    this.renderer.domElement.tabIndex = 0;
    container.appendChild(this.renderer.domElement);

    this.gradientMap = new THREE.DataTexture(new Uint8Array([
      32, 32, 32, 255, 122, 122, 122, 255,
      205, 205, 205, 255, 255, 255, 255, 255,
    ]), 4, 1, THREE.RGBAFormat);
    this.gradientMap.minFilter = THREE.NearestFilter;
    this.gradientMap.magFilter = THREE.NearestFilter;
    this.gradientMap.needsUpdate = true;
    this.materials = new Map();
    this.staticColliders = [];
    this.actorVisuals = new Map();
    this.effects = [];
    this.zoneMarkers = [];
    this.menuTime = 0;

    this.staticGroup = new THREE.Group();
    this.dynamicGroup = new THREE.Group();
    this.actorGroup = new THREE.Group();
    this.effectGroup = new THREE.Group();
    this.scene.add(this.staticGroup, this.dynamicGroup, this.actorGroup, this.effectGroup);

    this.createLighting();
    this.createArena();
    this.createBackdrop();
    this.createZoneMarkers();
    this.viewModel = new THREE.Group();
    this.camera.add(this.viewModel);
    this.viewWeapon = null;
    this.slashView = null;
    this.ghost = null;
    this.resizeHandler = () => this.resize();
    window.addEventListener('resize', this.resizeHandler);
    this.setMenuCamera(0);
  }

  toon(color, options = {}) {
    const key = `${color}-${options.transparent ? 't' : 'o'}-${options.opacity ?? 1}`;
    if (!options.transparent && this.materials.has(key)) return this.materials.get(key);
    const material = new THREE.MeshToonMaterial({
      color,
      gradientMap: this.gradientMap,
      transparent: Boolean(options.transparent),
      opacity: options.opacity ?? 1,
      depthWrite: options.depthWrite ?? !options.transparent,
      side: options.side ?? THREE.FrontSide,
    });
    if (!options.transparent) this.materials.set(key, material);
    return material;
  }

  basic(color, options = {}) {
    return new THREE.MeshBasicMaterial({ color, transparent: Boolean(options.transparent), opacity: options.opacity ?? 1, side: options.side ?? THREE.FrontSide, depthWrite: options.depthWrite ?? !options.transparent });
  }

  box(width, height, depth, color, outline = true) {
    const group = new THREE.Group();
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const mesh = new THREE.Mesh(geometry, this.toon(color));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    if (outline) {
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 25), new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.9 }));
      edges.renderOrder = 2;
      group.add(edges);
    }
    return group;
  }

  createLighting() {
    const hemisphere = new THREE.HemisphereLight('#e6f3e8', '#4e5354', 1.4);
    this.scene.add(hemisphere);
    const sun = new THREE.DirectionalLight('#ffe1b0', 2.35);
    sun.position.set(-24, 38, 18);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -30;
    sun.shadow.camera.right = 30;
    sun.shadow.camera.top = 30;
    sun.shadow.camera.bottom = -30;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 90;
    sun.shadow.bias = -0.00035;
    this.scene.add(sun);
    const rim = new THREE.DirectionalLight('#7ed5d0', 0.85);
    rim.position.set(24, 12, -30);
    this.scene.add(rim);
  }

  createArenaTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1200;
    const ctx = canvas.getContext('2d');
    const scale = canvas.width / 40;
    const px = (x) => (x + 20) * scale;
    const pz = (z) => (z + 20) * scale;
    ctx.fillStyle = '#c9c0a8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Deterministic paper flecks; no network textures are required.
    let seed = 7429;
    const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let i = 0; i < 9000; i += 1) {
      ctx.fillStyle = random() > 0.5 ? 'rgba(29,42,43,.035)' : 'rgba(255,249,221,.05)';
      ctx.fillRect(random() * 1200, random() * 1200, 1 + random() * 2, 1 + random() * 2);
    }

    ctx.fillStyle = '#ddd5bd';
    ctx.fillRect(px(-3), 0, 6 * scale, 1200);
    ctx.fillRect(0, pz(-3), 1200, 6 * scale);
    for (const zone of ZONES) {
      ctx.fillStyle = `${zone.color}28`;
      ctx.fillRect(px(zone.minX), pz(zone.minZ), 15 * scale, 15 * scale);
      ctx.strokeStyle = `${zone.color}bb`;
      ctx.lineWidth = 8;
      ctx.strokeRect(px(zone.minX), pz(zone.minZ), 15 * scale, 15 * scale);

      // Guaranteed connected cross lanes. Construction validation uses the same dimensions.
      ctx.fillStyle = 'rgba(229,220,192,.88)';
      ctx.fillRect(px(zone.cx - 1.65), pz(zone.minZ), 3.3 * scale, 15 * scale);
      ctx.fillRect(px(zone.minX), pz(zone.cz - 1.65), 15 * scale, 3.3 * scale);
      ctx.strokeStyle = 'rgba(45,55,52,.18)';
      ctx.lineWidth = 2;
      ctx.setLineDash([12, 12]);
      ctx.strokeRect(px(zone.cx - 1.65), pz(zone.minZ), 3.3 * scale, 15 * scale);
      ctx.strokeRect(px(zone.minX), pz(zone.cz - 1.65), 15 * scale, 3.3 * scale);
      ctx.setLineDash([]);

      ctx.fillStyle = 'rgba(23,37,43,.18)';
      ctx.font = '900 164px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(zone.label, px(zone.cx), pz(zone.cz));
      ctx.font = '700 25px sans-serif';
      ctx.fillText(`${zone.name} / BUILD ${zone.label}`, px(zone.cx), pz(zone.cz + 1.6));
    }

    ctx.strokeStyle = 'rgba(28,45,47,.11)';
    ctx.lineWidth = 1;
    for (let i = -18; i <= 18; i += 1) {
      ctx.beginPath(); ctx.moveTo(px(i), pz(-18)); ctx.lineTo(px(i), pz(18)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(px(-18), pz(i)); ctx.lineTo(px(18), pz(i)); ctx.stroke();
    }
    ctx.strokeStyle = '#253c3e';
    ctx.lineWidth = 7;
    ctx.beginPath(); ctx.arc(px(0), pz(0), 3.15 * scale, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = '#b34f40';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(px(0), pz(0), 2.45 * scale, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = 'rgba(30,49,50,.78)';
    ctx.font = '900 66px serif';
    ctx.fillText('界', px(0), pz(0) + 3);
    return canvasTexture(canvas);
  }

  createArena() {
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshToonMaterial({ map: this.createArenaTexture(), gradientMap: this.gradientMap }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.staticGroup.add(ground);

    const under = this.box(42, 1.2, 42, '#4f6662', false);
    under.position.y = -0.65;
    this.staticGroup.add(under);

    const walls = [
      { x: 0, z: -19.4, w: 40, d: 0.8 },
      { x: 0, z: 19.4, w: 40, d: 0.8 },
      { x: -19.4, z: 0, w: 0.8, d: 40 },
      { x: 19.4, z: 0, w: 0.8, d: 40 },
    ];
    for (const wall of walls) {
      const mesh = this.box(wall.w, 3.2, wall.d, '#d5cbb2');
      mesh.position.set(wall.x, 1.6, wall.z);
      this.staticGroup.add(mesh);
      const cap = this.box(wall.w + 0.18, 0.22, wall.d + 0.18, INK, false);
      cap.position.set(wall.x, 3.25, wall.z);
      this.staticGroup.add(cap);
      this.staticColliders.push({ x: wall.x, z: wall.z, hx: wall.w / 2, hz: wall.d / 2, rot: 0, height: 3.2 });
    }

    // Four symmetrical torii-like gateways. Their posts are real navigation obstacles.
    this.createGate(0, -13.6, 0, '#a64b3f');
    this.createGate(0, 13.6, Math.PI, '#a64b3f');
    this.createGate(-13.6, 0, Math.PI / 2, '#386f6b');
    this.createGate(13.6, 0, -Math.PI / 2, '#386f6b');

    for (const [x, z] of [[-4.6, -4.6], [4.6, -4.6], [-4.6, 4.6], [4.6, 4.6]]) {
      const base = this.box(0.85, 0.35, 0.85, '#596663');
      base.position.set(x, 0.175, z);
      this.staticGroup.add(base);
      const post = this.box(0.38, 2.4, 0.38, '#263b3d');
      post.position.set(x, 1.45, z);
      this.staticGroup.add(post);
      const lamp = this.box(0.72, 0.65, 0.72, '#e7b963');
      lamp.position.set(x, 2.25, z);
      this.staticGroup.add(lamp);
      this.staticColliders.push({ x, z, hx: 0.44, hz: 0.44, rot: 0, height: 2.7 });
    }

    for (const zone of ZONES) {
      const points = [
        { x: zone.cx - 0.85, z: zone.cz + zone.sz * 5.1 },
        { x: zone.cx + 0.85, z: zone.cz + zone.sz * 5.1 },
      ];
      for (const point of points) {
        const ring = new THREE.Mesh(new THREE.RingGeometry(0.58, 0.68, 24), this.basic(zone.color, { transparent: true, opacity: 0.75, side: THREE.DoubleSide }));
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(point.x, 0.018, point.z);
        this.staticGroup.add(ring);
      }
    }
  }

  createGate(x, z, rotation, color) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.rotation.y = rotation;
    for (const side of [-1, 1]) {
      const post = this.box(0.5, 4.3, 0.5, color);
      post.position.set(side * 2.45, 2.15, 0);
      group.add(post);
      const worldX = x + Math.cos(rotation) * side * 2.45;
      const worldZ = z - Math.sin(rotation) * side * 2.45;
      this.staticColliders.push({ x: worldX, z: worldZ, hx: 0.32, hz: 0.32, rot: 0, height: 4.3 });
    }
    const beam = this.box(6.2, 0.45, 0.55, color);
    beam.position.y = 4.15;
    group.add(beam);
    const top = this.box(6.8, 0.22, 0.72, INK);
    top.position.y = 4.55;
    group.add(top);
    const plaque = this.box(1.15, 0.85, 0.18, '#d9cba9');
    plaque.position.set(0, 3.75, -0.32);
    group.add(plaque);
    this.staticGroup.add(group);
  }

  createBackdrop() {
    const distantGround = new THREE.Mesh(new THREE.CircleGeometry(110, 48), this.toon('#69847d'));
    distantGround.rotation.x = -Math.PI / 2;
    distantGround.position.y = -1.28;
    this.staticGroup.add(distantGround);
    const mountainMaterial = this.toon('#526f6d');
    for (let i = 0; i < 18; i += 1) {
      const angle = (i / 18) * Math.PI * 2;
      const radius = 58 + (i % 3) * 8;
      const mountain = new THREE.Mesh(new THREE.ConeGeometry(9 + (i % 4) * 2, 18 + (i % 5) * 4, 5), mountainMaterial);
      mountain.position.set(Math.cos(angle) * radius, 5, Math.sin(angle) * radius);
      mountain.rotation.y = angle;
      this.staticGroup.add(mountain);
    }
    const sun = new THREE.Mesh(new THREE.CircleGeometry(9, 48), this.basic('#eac885', { side: THREE.DoubleSide }));
    sun.position.set(-35, 28, -65);
    sun.lookAt(0, 10, 0);
    this.staticGroup.add(sun);

    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * Math.PI * 2;
      const banner = this.box(1.4, 3.6, 0.07, i % 2 ? '#b34f42' : '#d8cfb6');
      banner.position.set(Math.cos(angle) * 23, 5 + (i % 3), Math.sin(angle) * 23);
      banner.rotation.y = -angle + Math.PI / 2;
      this.staticGroup.add(banner);
    }
  }

  createTextSprite(text, { color = '#ffffff', background = 'rgba(19,32,36,.88)', width = 512, height = 144, fontSize = 50 } = {}) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = background;
    ctx.beginPath();
    ctx.roundRect(4, 4, width - 8, height - 8, 20);
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.font = `800 ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2 + 2);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTexture(canvas), transparent: true, depthWrite: false }));
    sprite.userData.textureCanvas = canvas;
    return sprite;
  }

  createZoneMarkers() {
    for (const zone of ZONES) {
      const marker = this.createTextSprite(`${zone.label} · ${zone.name}`, { color: zone.color, fontSize: 54 });
      marker.position.set(zone.cx, 4.2, zone.cz);
      marker.scale.set(4.4, 1.24, 1);
      this.staticGroup.add(marker);
      this.zoneMarkers.push(marker);
    }
  }

  setZoneOwners(teams) {
    for (const zone of ZONES) {
      const team = teams.find((entry) => entry.buildZone === zone.id);
      const marker = this.zoneMarkers[zone.id];
      const old = marker.material.map;
      const replacement = this.createTextSprite(`${zone.label} · ${team?.name || ''}营造`, { color: team ? TEAM_DEFS[team.id].color : zone.color, fontSize: 48 });
      marker.material.map = replacement.material.map;
      marker.material.needsUpdate = true;
      old?.dispose();
    }
  }

  clearDynamic() {
    for (const visual of this.actorVisuals.values()) this.actorGroup.remove(visual.root);
    this.actorVisuals.clear();
    this.dynamicGroup.clear();
    this.effectGroup.clear();
    this.effects = [];
    this.ghost = null;
    this.viewModel.clear();
    this.viewWeapon = null;
  }

  createBuildMesh(typeId, teamId = 0, ghost = false) {
    const type = buildTypeById(typeId);
    const group = new THREE.Group();
    const teamColor = TEAM_DEFS[teamId]?.color || '#8da19a';
    const bodyColor = typeId === 'crate' ? '#a8926b' : typeId === 'high' ? '#64716d' : '#b7aa8c';
    const add = (mesh, x, y, z) => { mesh.position.set(x, y, z); group.add(mesh); return mesh; };
    if (typeId === 'corner') {
      add(this.box(2.8, 1.85, 0.55, bodyColor), 0, 0.925, -1.125);
      add(this.box(0.55, 1.85, 2.25, bodyColor), -1.125, 0.925, 0.275);
      add(this.box(2.86, 0.13, 0.61, teamColor, false), 0, 1.78, -1.125);
      add(this.box(0.61, 0.13, 2.3, teamColor, false), -1.125, 1.78, 0.275);
    } else {
      const [width, height, depth] = type.size;
      add(this.box(width, height, depth, bodyColor), 0, height / 2, 0);
      add(this.box(width + 0.04, 0.12, depth + 0.04, teamColor, false), 0, height - 0.08, 0);
      if (typeId === 'crate') {
        const strapA = this.box(0.12, height + 0.02, depth + 0.035, INK, false);
        add(strapA, 0, height / 2, 0);
      }
    }
    if (ghost) {
      group.traverse((child) => {
        if (child.isMesh) {
          child.material = this.toon('#62d6a0', { transparent: true, opacity: 0.42, depthWrite: false });
          child.castShadow = false;
          child.receiveShadow = false;
        }
        if (child.isLineSegments) child.material = new THREE.LineBasicMaterial({ color: '#b8ffe1', transparent: true, opacity: 0.9 });
      });
    }
    return group;
  }

  setGhost(typeId, teamId) {
    if (this.ghost) this.dynamicGroup.remove(this.ghost);
    this.ghost = this.createBuildMesh(typeId, teamId, true);
    this.dynamicGroup.add(this.ghost);
    return this.ghost;
  }

  removeGhost() {
    if (this.ghost) this.dynamicGroup.remove(this.ghost);
    this.ghost = null;
  }

  setGhostValidity(valid) {
    if (!this.ghost) return;
    const color = valid ? '#62d6a0' : '#ef625b';
    this.ghost.traverse((child) => {
      if (child.isMesh) child.material.color.set(color);
      if (child.isLineSegments) child.material.color.set(valid ? '#b8ffe1' : '#ffb0a9');
    });
  }

  createWeaponMesh(weaponId, firstPerson = false) {
    const weapon = weaponById(weaponId);
    const group = new THREE.Group();
    const length = weaponId === 'spear' ? 2.25 : weaponId === 'axe' ? 1.35 : weaponId === 'dagger' || weaponId === 'free' ? 0.82 : 1.25;
    const handleLength = weaponId === 'spear' ? 1.7 : weaponId === 'axe' ? 0.95 : 0.32;
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(firstPerson ? 0.035 : 0.045, firstPerson ? 0.04 : 0.05, handleLength, 8), this.toon('#293b3d'));
    handle.rotation.x = Math.PI / 2;
    handle.position.z = -handleLength / 2 + 0.12;
    group.add(handle);
    const guard = this.box(weaponId === 'spear' ? 0.12 : 0.38, 0.08, 0.1, weaponId === 'axe' ? '#9d593d' : '#c5a257', false);
    guard.position.z = -handleLength + 0.12;
    group.add(guard);
    if (weaponId === 'axe') {
      const blade = this.box(0.72, 0.52, 0.12, weapon.color);
      blade.position.set(0.22, 0, -1.18);
      blade.rotation.z = -0.2;
      group.add(blade);
      const edge = this.box(0.12, 0.6, 0.14, '#e9e1c9', false);
      edge.position.set(0.57, 0, -1.18);
      group.add(edge);
    } else {
      const bladeLength = Math.max(0.45, length - handleLength);
      const blade = this.box(weaponId === 'dagger' || weaponId === 'free' ? 0.09 : 0.13, firstPerson ? 0.035 : 0.055, bladeLength, weapon.color);
      blade.position.z = -handleLength - bladeLength / 2 + 0.12;
      if (weaponId === 'spear') blade.scale.x = 2.1;
      group.add(blade);
      const tip = new THREE.Mesh(new THREE.ConeGeometry(weaponId === 'spear' ? 0.15 : 0.075, 0.25, 4), this.toon(weapon.color));
      tip.rotation.x = -Math.PI / 2;
      tip.rotation.y = Math.PI / 4;
      tip.position.z = -length + 0.02;
      group.add(tip);
    }
    group.userData.weaponId = weaponId;
    return group;
  }

  createActor(actor) {
    const team = TEAM_DEFS[actor.teamId];
    const root = new THREE.Group();
    const visual = new THREE.Group();
    root.add(visual);
    const body = this.box(0.74, 0.82, 0.42, team.color);
    body.position.y = 1.17;
    visual.add(body);
    const belt = this.box(0.79, 0.15, 0.46, INK, false);
    belt.position.y = 0.88;
    visual.add(belt);
    const chest = this.box(0.44, 0.25, 0.06, '#e2d8bd', false);
    chest.position.set(0, 1.28, -0.24);
    visual.add(chest);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.29, 8, 6), this.toon('#c99d7b'));
    head.position.y = 1.79;
    head.castShadow = true;
    visual.add(head);
    const mask = this.box(0.4, 0.22, 0.07, '#e6dcc5');
    mask.position.set(0, 1.76, -0.255);
    visual.add(mask);
    const eyes = this.box(0.27, 0.045, 0.075, INK, false);
    eyes.position.set(0, 1.8, -0.296);
    visual.add(eyes);
    const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.5, 0.24, 6), this.toon('#263b3d'));
    hat.position.y = 2.06;
    hat.castShadow = true;
    visual.add(hat);
    const hatBand = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 0.07, 6), this.toon(team.color));
    hatBand.position.y = 1.96;
    visual.add(hatBand);

    const leftArm = new THREE.Group();
    const rightArm = new THREE.Group();
    leftArm.position.set(-0.49, 1.48, 0);
    rightArm.position.set(0.49, 1.48, 0);
    for (const arm of [leftArm, rightArm]) {
      const sleeve = this.box(0.25, 0.64, 0.28, team.color);
      sleeve.position.y = -0.27;
      arm.add(sleeve);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.13, 6, 5), this.toon('#c99d7b'));
      hand.position.y = -0.62;
      arm.add(hand);
      visual.add(arm);
    }
    const weaponHolder = new THREE.Group();
    weaponHolder.position.set(0, -0.62, -0.05);
    rightArm.add(weaponHolder);
    const weaponMesh = this.createWeaponMesh(actor.weaponId);
    weaponHolder.add(weaponMesh);

    const leftLeg = new THREE.Group();
    const rightLeg = new THREE.Group();
    leftLeg.position.set(-0.2, 0.8, 0);
    rightLeg.position.set(0.2, 0.8, 0);
    for (const leg of [leftLeg, rightLeg]) {
      const limb = this.box(0.28, 0.72, 0.31, '#293a3d');
      limb.position.y = -0.35;
      leg.add(limb);
      const foot = this.box(0.3, 0.16, 0.48, INK);
      foot.position.set(0, -0.72, -0.08);
      leg.add(foot);
      visual.add(leg);
    }
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.48, 0.6, 28), this.basic(team.color, { transparent: true, opacity: 0.82, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.025;
    root.add(ring);
    const label = this.createActorLabel(actor);
    label.position.set(0, 2.63, 0);
    root.add(label);
    const telegraph = this.createTextSprite('!', { color: '#fff4d5', background: 'rgba(211,69,53,.94)', width: 128, height: 128, fontSize: 90 });
    telegraph.scale.set(0.52, 0.52, 1);
    telegraph.position.set(0, 3.05, 0);
    telegraph.visible = false;
    root.add(telegraph);
    root.position.set(actor.x, 0, actor.z);
    this.actorGroup.add(root);
    const entry = { root, visual, body, leftArm, rightArm, leftLeg, rightLeg, weaponHolder, weaponMesh, weaponId: actor.weaponId, ring, label, telegraph, walkPhase: Math.random() * 10, deathProgress: 0, lastHealth: actor.health };
    this.actorVisuals.set(actor.id, entry);
    return entry;
  }

  createActorLabel(actor) {
    const team = TEAM_DEFS[actor.teamId];
    const canvas = document.createElement('canvas');
    canvas.width = 384;
    canvas.height = 96;
    const texture = canvasTexture(canvas);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
    sprite.scale.set(2.15, 0.54, 1);
    sprite.userData.labelCanvas = canvas;
    sprite.userData.labelTexture = texture;
    this.drawActorLabel(sprite, actor, team);
    return sprite;
  }

  drawActorLabel(sprite, actor, team = TEAM_DEFS[actor.teamId]) {
    const canvas = sprite.userData.labelCanvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(16,28,31,.82)';
    ctx.beginPath(); ctx.roundRect(18, 4, 348, 78, 14); ctx.fill();
    ctx.fillStyle = team.color;
    ctx.fillRect(18, 4, 8, 78);
    ctx.font = '700 29px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#f3ecd9';
    ctx.fillText(actor.name, 39, 38);
    ctx.fillStyle = 'rgba(255,255,255,.17)';
    ctx.fillRect(39, 56, 300, 10);
    ctx.fillStyle = actor.health > 35 ? team.color : '#f05b4f';
    ctx.fillRect(39, 56, 300 * Math.max(0, actor.health) / 100, 10);
    sprite.userData.labelTexture.needsUpdate = true;
  }

  updateActor(actor, dt, time) {
    const visual = this.actorVisuals.get(actor.id);
    if (!visual) return;
    if (visual.weaponId !== actor.weaponId) {
      visual.weaponHolder.clear();
      visual.weaponMesh = this.createWeaponMesh(actor.weaponId);
      visual.weaponHolder.add(visual.weaponMesh);
      visual.weaponId = actor.weaponId;
    }
    visual.root.position.set(actor.x, 0, actor.z);
    visual.root.rotation.y = actor.yaw;
    visual.root.visible = !(actor.isPlayer && actor.alive && !actor.forceVisible);
    visual.label.visible = actor.alive && !actor.isPlayer;
    visual.ring.visible = actor.alive;
    visual.telegraph.visible = Boolean(actor.alive && !actor.isPlayer && actor.attack && actor.attack.elapsed < actor.attack.weapon.windup);
    if (visual.lastHealth !== actor.health) {
      this.drawActorLabel(visual.label, actor);
      visual.lastHealth = actor.health;
    }
    if (!actor.alive) {
      visual.deathProgress = Math.min(1, visual.deathProgress + dt * 2.5);
      const eased = 1 - (1 - visual.deathProgress) ** 3;
      visual.visual.rotation.z = eased * 1.42;
      visual.visual.position.y = -eased * 0.25;
      visual.ring.material.opacity = 0.18;
      return;
    }
    visual.deathProgress = 0;
    visual.visual.rotation.z = 0;
    visual.ring.material.opacity = 0.82;
    visual.walkPhase += dt * (actor.moving ? 10 : 2);
    const stride = actor.moving ? Math.sin(visual.walkPhase) * 0.58 : 0;
    visual.leftLeg.rotation.x = stride;
    visual.rightLeg.rotation.x = -stride;
    visual.leftArm.rotation.x = -stride * 0.45;
    visual.visual.position.y = actor.moving ? Math.abs(Math.sin(visual.walkPhase)) * 0.045 : Math.sin(time * 2 + actor.id) * 0.012;
    visual.rightArm.rotation.set(-stride * 0.3, 0, 0);
    visual.rightArm.position.z = 0;
    if (actor.blocking) {
      visual.rightArm.rotation.x = -1.4;
      visual.rightArm.rotation.z = 0.8;
      visual.leftArm.rotation.x = -1.05;
    }
    if (actor.attack) {
      const { weapon, elapsed } = actor.attack;
      const activeStart = weapon.windup;
      const activeEnd = weapon.windup + weapon.active;
      if (elapsed < activeStart) {
        const p = elapsed / activeStart;
        visual.rightArm.rotation.x = -1.65 * p;
        visual.rightArm.rotation.z = -0.65 * p;
        visual.rightArm.position.z = 0.18 * p;
      } else if (elapsed < activeEnd) {
        const p = (elapsed - activeStart) / weapon.active;
        visual.rightArm.rotation.x = -1.4 + p * 1.7;
        visual.rightArm.rotation.y = -1.1 + p * 2.2;
        visual.rightArm.rotation.z = -0.5 + p;
      } else {
        const p = Math.min(1, (elapsed - activeEnd) / weapon.recovery);
        visual.rightArm.rotation.x = 0.3 * (1 - p);
        visual.rightArm.rotation.y = 1.1 * (1 - p);
      }
    }
  }

  rebuildViewWeapon(weaponId) {
    this.viewModel.clear();
    const sleeve = this.box(0.18, 0.18, 0.62, '#b84e43');
    sleeve.position.set(0.09, -0.1, 0.2);
    sleeve.rotation.x = -0.25;
    this.viewModel.add(sleeve);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.105, 8, 6), this.toon('#c99d7b'));
    hand.position.set(0, 0, -0.08);
    this.viewModel.add(hand);
    this.viewWeapon = this.createWeaponMesh(weaponId, true);
    this.viewWeapon.position.set(0, 0, -0.1);
    this.viewModel.add(this.viewWeapon);
    this.viewModel.position.set(0.43, -0.42, -0.56);
    this.viewModel.rotation.set(-0.12, -0.08, -0.08);
    this.viewModel.scale.setScalar(0.88);
  }

  updateViewModel(actor, dt, time, visible = true) {
    this.viewModel.visible = visible && actor.alive;
    if (!this.viewModel.visible || !this.viewWeapon) return;
    const bob = actor.moving ? Math.sin(time * 10) * 0.018 : Math.sin(time * 2) * 0.006;
    const targetPosition = new THREE.Vector3(0.43, -0.42 + bob, -0.56);
    const targetRotation = new THREE.Euler(-0.12, -0.08, -0.08);
    if (actor.blocking) {
      targetPosition.set(0.08, -0.27, -0.48);
      targetRotation.set(0.18, 0.2, 1.18);
    }
    if (actor.attack) {
      const { weapon, elapsed } = actor.attack;
      if (elapsed < weapon.windup) {
        const p = elapsed / weapon.windup;
        targetPosition.set(0.5 + p * 0.12, -0.35 + p * 0.16, -0.42 + p * 0.12);
        targetRotation.set(-0.3 - p * 0.7, -0.2 - p * 0.65, -0.2 - p * 0.55);
      } else if (elapsed < weapon.windup + weapon.active) {
        const p = (elapsed - weapon.windup) / weapon.active;
        targetPosition.set(0.55 - p * 0.85, -0.2 - Math.sin(p * Math.PI) * 0.1, -0.48 - Math.sin(p * Math.PI) * 0.26);
        targetRotation.set(-0.9 + p * 1.5, -0.9 + p * 1.9, -0.8 + p * 1.65);
      } else {
        const p = Math.min(1, (elapsed - weapon.windup - weapon.active) / weapon.recovery);
        targetPosition.set(-0.3 + p * 0.73, -0.25 - p * 0.17, -0.5 - (1 - p) * 0.1);
        targetRotation.set(0.5 - p * 0.62, 1.0 - p * 1.08, 0.85 - p * 0.93);
      }
    }
    const smoothing = 1 - Math.exp(-dt * 28);
    this.viewModel.position.lerp(targetPosition, smoothing);
    this.viewModel.rotation.x += (targetRotation.x - this.viewModel.rotation.x) * smoothing;
    this.viewModel.rotation.y += (targetRotation.y - this.viewModel.rotation.y) * smoothing;
    this.viewModel.rotation.z += (targetRotation.z - this.viewModel.rotation.z) * smoothing;
  }

  burst(position, color, count = 9, strength = 1) {
    for (let i = 0; i < count; i += 1) {
      const mesh = new THREE.Mesh(new THREE.TetrahedronGeometry(0.055 + Math.random() * 0.075), this.basic(color, { transparent: true, opacity: 1, depthWrite: false }));
      mesh.position.set(position.x, position.y ?? 1, position.z);
      this.effectGroup.add(mesh);
      const angle = Math.random() * Math.PI * 2;
      const speed = (1.5 + Math.random() * 3) * strength;
      this.effects.push({ mesh, velocity: new THREE.Vector3(Math.cos(angle) * speed, 1.5 + Math.random() * 3, Math.sin(angle) * speed), life: 0.45 + Math.random() * 0.25, maxLife: 0.7, gravity: 8, spin: Math.random() * 8 });
    }
  }

  slash(actor, weapon) {
    const material = this.basic(weapon.trail, { transparent: true, opacity: 0.52, side: THREE.DoubleSide, depthWrite: false });
    const mesh = new THREE.Mesh(new THREE.RingGeometry(0.65, 0.83, 28, 1, -0.4, Math.PI * 1.2), material);
    mesh.position.set(actor.x - Math.sin(actor.yaw) * 0.75, 1.15, actor.z - Math.cos(actor.yaw) * 0.75);
    mesh.rotation.y = actor.yaw + Math.PI;
    mesh.rotation.z = actor.id % 2 ? 0.4 : -0.35;
    mesh.scale.setScalar(weapon.range / 2.1);
    this.effectGroup.add(mesh);
    this.effects.push({ mesh, velocity: new THREE.Vector3(), life: 0.16, maxLife: 0.16, gravity: 0, spin: 0 });
  }

  updateEffects(dt) {
    for (let i = this.effects.length - 1; i >= 0; i -= 1) {
      const effect = this.effects[i];
      effect.life -= dt;
      if (effect.life <= 0) {
        this.effectGroup.remove(effect.mesh);
        effect.mesh.geometry.dispose();
        effect.mesh.material.dispose();
        this.effects.splice(i, 1);
        continue;
      }
      effect.velocity.y -= effect.gravity * dt;
      effect.mesh.position.addScaledVector(effect.velocity, dt);
      effect.mesh.rotation.x += effect.spin * dt;
      effect.mesh.rotation.z += effect.spin * 0.7 * dt;
      effect.mesh.material.opacity = Math.max(0, effect.life / effect.maxLife);
    }
  }

  setPlayerCamera(actor, pitch = 0, shake = 0) {
    this.camera.position.set(actor.x, 1.62 + shake, actor.z);
    this.camera.rotation.set(pitch, actor.yaw, 0, 'YXZ');
  }

  setSpectatorCamera(target, dt, time, colliders = this.staticColliders) {
    if (!target) return;
    const anchor = { x: target.x, z: target.z };
    const isSafe = (position) => {
      if (Math.abs(position.x) > 18.25 || Math.abs(position.z) > 18.25) return false;
      if (!hasLineOfSight(anchor, position, colliders, 1.0)) return false;
      return !colliders.some((obstacle) => (obstacle.height || 3) > 1 && circleHitsObstacle(position.x, position.z, 0.16, obstacle));
    };
    let desired = new THREE.Vector3(target.x, 1.65, target.z);
    for (const boom of [4.2, 3.2, 2.3, 1.5, 0.85]) {
      const candidate = new THREE.Vector3(
        target.x + Math.sin(target.yaw) * boom + Math.sin(time * 0.12) * 0.35 * (boom / 4.2),
        1.55 + boom * 0.36,
        target.z + Math.cos(target.yaw) * boom,
      );
      if (isSafe(candidate)) { desired = candidate; break; }
    }
    const next = this.camera.position.clone().lerp(desired, 1 - Math.exp(-dt * 5));
    if (isSafe(next)) this.camera.position.copy(next);
    else this.camera.position.copy(desired);
    this.camera.lookAt(target.x, 1.25, target.z);
  }

  setMenuCamera(dt) {
    this.menuTime += dt;
    const angle = 0.65 + Math.sin(this.menuTime * 0.08) * 0.12;
    this.camera.position.set(Math.sin(angle) * 35, 22, Math.cos(angle) * 35);
    this.camera.lookAt(0, 0.5, 0);
  }

  project(x, y, z) {
    const vector = new THREE.Vector3(x, y, z).project(this.camera);
    return { x: (vector.x * 0.5 + 0.5) * window.innerWidth, y: (-vector.y * 0.5 + 0.5) * window.innerHeight, behind: vector.z > 1, visible: vector.z < 1 && vector.x >= -1 && vector.x <= 1 && vector.y >= -1 && vector.y <= 1 };
  }

  render() { this.renderer.render(this.scene, this.camera); }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
  }
}
