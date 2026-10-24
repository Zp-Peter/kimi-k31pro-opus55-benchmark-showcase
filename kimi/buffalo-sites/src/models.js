import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const mat = (color, roughness = .65, metalness = .02) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
const dark = mat('#20251f', .82);
const black = mat('#151916', .7);
const metal = mat('#4c524c', .3, .7);

function mesh(geometry, material, parent, position = [0, 0, 0], rotation = [0, 0, 0]) {
  const item = new THREE.Mesh(geometry, material);
  item.position.set(...position);
  item.rotation.set(...rotation);
  item.castShadow = true;
  item.receiveShadow = true;
  parent.add(item);
  return item;
}
function box(parent, size, position, material, radius = .08, rotation = [0, 0, 0]) {
  return mesh(new RoundedBoxGeometry(...size, 4, radius), material, parent, position, rotation);
}
function rod(parent, start, end, radius, material) {
  const a = new THREE.Vector3(...start), b = new THREE.Vector3(...end);
  const direction = b.clone().sub(a);
  const item = mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), 12), material, parent);
  item.position.copy(a.add(b).multiplyScalar(.5));
  item.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return item;
}
function strap(parent, points, color = '#222820', width = .07) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  return mesh(new THREE.TubeGeometry(curve, 32, width, 8, false), mat(color, .9), parent);
}

function backpack(color) {
  const g = new THREE.Group();
  const fabric = mat(color, .92), side = mat(new THREE.Color(color).multiplyScalar(.73), .9);
  box(g, [2.55, 3.45, 1.25], [0, 0, 0], fabric, .27);
  box(g, [2.32, .65, 1.36], [0, 1.48, .02], side, .18);
  box(g, [2.05, 1.18, .48], [0, -.72, .78], side, .18);
  box(g, [1.8, .09, .05], [0, -.14, 1.04], dark, .02);
  box(g, [.16, .2, .08], [.68, -.14, 1.09], metal, .025);
  box(g, [.13, 2.55, .08], [-.85, .12, .68], dark, .025);
  box(g, [.13, 2.55, .08], [.85, .12, .68], dark, .025);
  box(g, [.48, 1.4, .75], [-1.37, -.65, 0], side, .14);
  box(g, [.48, 1.4, .75], [1.37, -.65, 0], side, .14);
  box(g, [2.15, .18, 1.32], [0, -1.65, 0], dark, .04);
  strap(g, [[-.65, 1.6, -.35], [-.73, 2.02, -.2], [.65, 2.02, -.2], [.65, 1.6, -.35]], '#31382e', .085);
  strap(g, [[-.75, 1.35, -.6], [-1.22, .4, -.92], [-.95, -.8, -.7], [-.72, -1.35, -.5]], '#252c25', .14);
  strap(g, [[.75, 1.35, -.6], [1.22, .4, -.92], [.95, -.8, -.7], [.72, -1.35, -.5]], '#252c25', .14);
  for (let i = 0; i < 5; i++) box(g, [1.4, .055, .04], [0, .35 + i * .18, .66], side, .01);
  box(g, [.56, .25, .06], [0, .92, .7], dark, .03);
  const label = box(g, [.34, .16, .025], [0, .92, .745], mat('#d9e7a4', .6), .01);
  label.rotation.z = -.03;
  g.rotation.set(-.06, -.38, -.06);
  return g;
}

function trianglePrism(material, parent) {
  const vertices = new Float32Array([
    -2.1,0,1.5, 2.1,0,1.5, 0,3,1.5,
    2.1,0,-1.5, -2.1,0,-1.5, 0,3,-1.5,
    -2.1,0,-1.5, -2.1,0,1.5, 0,3,1.5,
    -2.1,0,-1.5, 0,3,1.5, 0,3,-1.5,
    2.1,0,1.5, 2.1,0,-1.5, 0,3,-1.5,
    2.1,0,1.5, 0,3,-1.5, 0,3,1.5,
    -2.1,0,-1.5, 2.1,0,-1.5, 2.1,0,1.5,
    -2.1,0,-1.5, 2.1,0,1.5, -2.1,0,1.5
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geo.computeVertexNormals();
  material.side = THREE.DoubleSide;
  return mesh(geo, material, parent);
}
function tent(color) {
  const g = new THREE.Group();
  const fabric = mat(color, .82), trim = mat('#b52f12', .8);
  trianglePrism(fabric, g);
  const entranceGeo = new THREE.BufferGeometry();
  entranceGeo.setAttribute('position', new THREE.Float32BufferAttribute([-1.6,.05,1.515, 1.6,.05,1.515, 0,2.68,1.515],3));
  entranceGeo.computeVertexNormals();
  const entrance = mat('#24241e', .95); entrance.side = THREE.DoubleSide;
  mesh(entranceGeo, entrance, g);
  rod(g, [-2.17,0,1.56], [0,3.08,1.56], .045, metal);
  rod(g, [2.17,0,1.56], [0,3.08,1.56], .045, metal);
  rod(g, [0,3.08,1.58], [0,3.08,-1.62], .045, metal);
  rod(g, [0,.02,1.56], [0,2.72,1.56], .022, trim);
  rod(g, [-2.15,.02,-1.55], [-3.1,-.02,-2.4], .012, mat('#a9aa91'));
  rod(g, [2.15,.02,-1.55], [3.1,-.02,-2.4], .012, mat('#a9aa91'));
  rod(g, [-2.15,.02,1.55], [-3.05,-.02,2.35], .012, mat('#a9aa91'));
  rod(g, [2.15,.02,1.55], [3.05,-.02,2.35], .012, mat('#a9aa91'));
  [[-3.1,0,-2.4],[3.1,0,-2.4],[-3.05,0,2.35],[3.05,0,2.35]].forEach(p => rod(g,p,[p[0]+.08,-.25,p[2]+.06],.025,metal));
  box(g, [4.55,.09,3.35], [0,-.04,0], trim, .02);
  g.rotation.set(.04,-.58,0);
  g.position.y = -1.1;
  return g;
}

function chair(color) {
  const g = new THREE.Group();
  const fabric = mat(color, .88), frame = mat('#c6b99d', .28, .65), foot = mat('#333b32', .7);
  box(g, [2.8,.16,2.15], [0,.15,0], fabric, .12, [-.12,0,0]);
  box(g, [2.8,2.35,.16], [0,1.42,-.92], fabric, .14, [-.18,0,0]);
  for (const x of [-1.48,1.48]) {
    rod(g,[x,-1.55,1.08],[x,2.55,-1.25],.065,frame);
    rod(g,[x,-1.55,-1.15],[x,.25,1.1],.065,frame);
    rod(g,[x,.55,-.78],[x,.9,1.0],.06,frame);
    box(g,[.28,.13,1.65],[x,.94,.02],foot,.06,[-.04,0,0]);
    box(g,[.22,.15,.22],[x,-1.55,1.08],foot,.04);
    box(g,[.22,.15,.22],[x,-1.55,-1.15],foot,.04);
  }
  rod(g,[-1.48,-1.15,.82],[1.48,-1.15,.82],.045,frame);
  rod(g,[-1.48,-1.15,-.85],[1.48,-1.15,-.85],.045,frame);
  box(g,[1.5,.05,.035],[0,2.24,-1.15],mat('#f2d8a2'),.01,[-.18,0,0]);
  g.rotation.set(.03,-.5,-.03);
  g.position.y = -.35;
  return g;
}

export function initModel(container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
  camera.position.set(0, .45, 9);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  container.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-label', '可拖动旋转的水牛牌产品 3D 模型');
  scene.add(new THREE.HemisphereLight('#fff7dc', '#384134', 2.4));
  const key = new THREE.DirectionalLight('#ffffff', 4); key.position.set(4,7,6); scene.add(key);
  const rim = new THREE.DirectionalLight(container.dataset.model === 'tent' ? '#ffb097' : '#dfffab', 2.5); rim.position.set(-5,3,-3); scene.add(rim);
  const fill = new THREE.DirectionalLight('#d8e7ff', 1.4); fill.position.set(1,-2,4); scene.add(fill);
  const type = container.dataset.model;
  const model = type === 'tent' ? tent(container.dataset.color) : type === 'chair' ? chair(container.dataset.color) : backpack(container.dataset.color);
  scene.add(model);
  let targetX = model.rotation.x, targetY = model.rotation.y, dragging = false, lastX = 0, lastY = 0;
  const baseY = model.position.y;
  const pointerDown = e => { dragging = true; lastX = e.clientX; lastY = e.clientY; renderer.domElement.setPointerCapture(e.pointerId); };
  const pointerMove = e => {
    if (!dragging) return;
    targetY += (e.clientX - lastX) * .009;
    targetX = THREE.MathUtils.clamp(targetX + (e.clientY - lastY) * .005, -.45, .45);
    lastX = e.clientX; lastY = e.clientY;
  };
  const pointerUp = () => dragging = false;
  renderer.domElement.addEventListener('pointerdown', pointerDown);
  renderer.domElement.addEventListener('pointermove', pointerMove);
  renderer.domElement.addEventListener('pointerup', pointerUp);
  renderer.domElement.addEventListener('pointercancel', pointerUp);
  const resize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.position.z = type === 'tent' ? 10 : type === 'chair' ? 9 : 8.2;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(container); resize();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const t = clock.getElapsedTime();
    if (!dragging && !reduceMotion) targetY += .0007;
    model.rotation.y += (targetY - model.rotation.y) * .07;
    model.rotation.x += (targetX - model.rotation.x) * .07;
    if (!reduceMotion) model.position.y = baseY + Math.sin(t * 1.15) * .07;
    renderer.render(scene,camera);
  });
}
