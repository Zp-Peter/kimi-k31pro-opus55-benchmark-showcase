import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createWorld } from './world.js';
import { createOcean } from './ocean.js';
import { createAtmosphere } from './atmosphere.js';
import { setTextureAnisotropy } from './materials.js';

const root = document.documentElement;
const container = document.querySelector('#landscape');
const loading = document.querySelector('#loading');
const loadingProgress = document.querySelector('#loading-progress');
const loadingPercent = document.querySelector('#loading-percent');
const loadingStatus = document.querySelector('#loading-status');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nextPaint = () => new Promise((resolve) => {
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(fallback);
    resolve();
  };
  const fallback = setTimeout(finish, 48);
  requestAnimationFrame(() => requestAnimationFrame(finish));
});

async function loadingStage(percent, text) {
  loadingProgress.style.width = `${percent}%`;
  loadingPercent.textContent = String(percent).padStart(2, '0');
  loadingStatus.textContent = text;
  await nextPaint();
}

const views = [
  {
    position: new THREE.Vector3(27, 9.5, 44),
    target: new THREE.Vector3(-9, 4.8, -49),
    title: '海岸全景',
    description: '黑沙、玄武岩与无尽的北大西洋',
  },
  {
    position: new THREE.Vector3(26, 12.5, -17),
    target: new THREE.Vector3(47, 12, -61),
    title: '玄武岩柱',
    description: '熔岩冷却，凝固成规则的自然几何',
  },
  {
    position: new THREE.Vector3(6, 3.6, 12),
    target: new THREE.Vector3(-16, 1.2, -24),
    title: '海浪之息',
    description: '白色浪花，一遍遍改写黑色的海岸',
  },
];

let renderer;
let composer;
let scene;
let camera;
let controls;
let ocean;
let atmosphere;
let filmPass;
let simulationTime = 0;
let paused = false;
let activeView = 0;
let cameraTransition = null;
let toastTimer;

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2300);
}

function createPostprocessing() {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  filmPass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform sampler2D tDiffuse;
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;
      float random(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      void main() {
        vec4 source = texture2D(tDiffuse, vUv);
        vec2 centered = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
        float vignette = 1.0 - smoothstep(0.22, 0.92, length(centered)) * 0.26;
        float grain = random(vUv * uResolution + fract(uTime) * 91.7) - 0.5;
        source.rgb *= vignette;
        source.rgb *= mix(vec3(1.0), vec3(0.94, 1.0, 1.035), 0.18);
        source.rgb += grain * 0.009;
        gl_FragColor = source;
      }
    `,
  });
  composer.addPass(filmPass);
  composer.addPass(new OutputPass());
}

function resize() {
  if (!renderer || !camera) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelRatio = Math.min(window.devicePixelRatio, width < 720 ? 1.35 : 1.65);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(width, height);
  if (composer) {
    composer.setPixelRatio(pixelRatio);
    composer.setSize(width, height);
  }
  filmPass?.uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
}

function setView(index, immediate = false) {
  if (!camera || !controls) return;
  activeView = index;
  const view = views[index];
  document.querySelectorAll('[data-view]').forEach((button) => {
    const selected = Number(button.dataset.view) === index;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-current', selected ? 'true' : 'false');
  });
  document.querySelector('#view-number').textContent = `0${index + 1} / 03`;
  document.querySelector('#view-title').textContent = view.title;
  document.querySelector('#view-description').textContent = view.description;
  root.classList.toggle('detail-view', index !== 0);

  if (immediate || reduceMotion) {
    camera.position.copy(view.position);
    controls.target.copy(view.target);
    controls.update();
    cameraTransition = null;
    controls.enabled = true;
    return;
  }
  cameraTransition = {
    started: performance.now(),
    duration: 2100,
    fromPosition: camera.position.clone(),
    fromTarget: controls.target.clone(),
    toPosition: view.position,
    toTarget: view.target,
  };
  controls.enabled = false;
}

function updateCameraTransition(now) {
  if (!cameraTransition) return;
  const transition = cameraTransition;
  const progress = Math.min(1, (now - transition.started) / transition.duration);
  const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - ((-2 * progress + 2) ** 3) / 2;
  camera.position.lerpVectors(transition.fromPosition, transition.toPosition, eased);
  controls.target.lerpVectors(transition.fromTarget, transition.toTarget, eased);
  camera.lookAt(controls.target);
  if (progress >= 1) {
    cameraTransition = null;
    controls.enabled = true;
    controls.update();
  }
}

function togglePause() {
  paused = !paused;
  root.classList.toggle('is-paused', paused);
  const button = document.querySelector('#pause-button');
  button.setAttribute('aria-label', paused ? '继续场景动画' : '暂停场景动画');
  showToast(paused ? '时间已静止，仍可拖动探索' : '海浪与云雾继续流动');
}

let audioContext;
let audioMaster;
let soundEnabled = false;

function createAmbientSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) throw new Error('Web Audio is not supported');
  audioContext = new AudioContext();
  const sampleRate = audioContext.sampleRate;
  const buffer = audioContext.createBuffer(2, sampleRate * 6, sampleRate);
  for (let channel = 0; channel < 2; channel += 1) {
    const samples = buffer.getChannelData(channel);
    let previous = 0;
    for (let i = 0; i < samples.length; i += 1) {
      const white = Math.random() * 2 - 1;
      previous = previous * 0.985 + white * 0.015;
      samples[i] = previous * 3.8 + white * 0.055;
    }
  }
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  const filter = audioContext.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1250;
  filter.Q.value = 0.35;
  const waveGain = audioContext.createGain();
  waveGain.gain.value = 0.62;
  const lfo = audioContext.createOscillator();
  const lfoDepth = audioContext.createGain();
  lfo.frequency.value = 0.115;
  lfoDepth.gain.value = 0.27;
  lfo.connect(lfoDepth).connect(waveGain.gain);
  audioMaster = audioContext.createGain();
  audioMaster.gain.value = 0;
  source.connect(filter).connect(waveGain).connect(audioMaster).connect(audioContext.destination);
  source.start();
  lfo.start();
}

async function toggleSound() {
  const button = document.querySelector('#sound-button');
  try {
    if (!audioContext) createAmbientSound();
    await audioContext.resume();
    soundEnabled = !soundEnabled;
    audioMaster.gain.setTargetAtTime(soundEnabled ? 0.34 : 0, audioContext.currentTime, 0.45);
    button.classList.toggle('sound-enabled', soundEnabled);
    button.setAttribute('aria-label', soundEnabled ? '关闭海浪环境音' : '开启海浪环境音');
    showToast(soundEnabled ? '北大西洋环境音已开启' : '环境音已关闭');
  } catch {
    showToast('当前浏览器无法播放环境音');
  }
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch {
    showToast('当前浏览器不支持全屏模式');
  }
}

function captureScene() {
  if (!renderer) return;
  composer.render();
  renderer.domElement.toBlob((blob) => {
    if (!blob) {
      showToast('照片保存失败，请重试');
      return;
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Reynisfjara-${new Date().toISOString().slice(0, 10)}.png`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('已保存这一刻的黑沙海岸');
  }, 'image/png');
}

function setNotes(open) {
  const notes = document.querySelector('#field-notes');
  const wasOpen = notes.classList.contains('is-open');
  notes.classList.toggle('is-open', open);
  notes.setAttribute('aria-hidden', String(!open));
  if (open) document.querySelector('#close-notes').focus();
  else if (wasOpen) document.querySelector('#about-button').focus();
}

function toggleInterface(force) {
  const hidden = typeof force === 'boolean' ? force : !root.classList.contains('ui-hidden');
  root.classList.toggle('ui-hidden', hidden);
}

function bindInterface() {
  document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => setView(Number(button.dataset.view)));
  });
  document.querySelector('#explore-button').addEventListener('click', () => setView(2));
  document.querySelector('#pause-button').addEventListener('click', togglePause);
  document.querySelector('#reset-button').addEventListener('click', () => {
    setView(0);
    showToast('已返回海岸全景');
  });
  document.querySelector('#capture-button').addEventListener('click', captureScene);
  document.querySelector('#sound-button').addEventListener('click', toggleSound);
  document.querySelector('#fullscreen-button').addEventListener('click', toggleFullscreen);
  document.querySelector('#hide-button').addEventListener('click', () => toggleInterface(true));
  document.querySelector('#show-button').addEventListener('click', () => toggleInterface(false));
  document.querySelector('#about-button').addEventListener('click', () => setNotes(true));
  document.querySelector('#close-notes').addEventListener('click', () => setNotes(false));
  document.addEventListener('fullscreenchange', () => {
    document.querySelector('#fullscreen-button').setAttribute('aria-label', document.fullscreenElement ? '退出全屏' : '进入全屏');
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setNotes(false);
      toggleInterface(false);
    }
    if (event.key.toLowerCase() === 'h') toggleInterface();
    if (event.key.toLowerCase() === 'r') setView(0);
    if (['1', '2', '3'].includes(event.key)) setView(Number(event.key) - 1);
    if (event.code === 'Space' && !event.target.closest('button')) {
      event.preventDefault();
      togglePause();
    }
  });
  window.addEventListener('resize', resize);
}

async function init() {
  await loadingStage(8, '正在抵达北大西洋');
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x879599);
  renderer.domElement.setAttribute('aria-label', '可拖动环视的冰岛黑沙滩三维场景');
  renderer.domElement.tabIndex = 0;
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.15, 1400);
  camera.position.copy(views[0].position);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(views[0].target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.enablePan = false;
  controls.rotateSpeed = 0.34;
  controls.zoomSpeed = 0.6;
  controls.minDistance = 10;
  controls.maxDistance = 175;
  controls.minPolarAngle = 0.24;
  controls.maxPolarAngle = Math.PI * 0.487;
  controls.addEventListener('start', () => {
    if (cameraTransition) {
      cameraTransition = null;
      controls.enabled = true;
    }
  });
  controls.update();
  resize();

  await loadingStage(24, '凝聚低云与极地天光');
  atmosphere = createAtmosphere(scene, renderer);
  await loadingStage(46, '雕琢玄武岩与火山黑沙');
  createWorld(scene);
  await loadingStage(72, '唤醒北大西洋的潮汐');
  ocean = createOcean(scene, atmosphere.sunDirection);
  setTextureAnisotropy(scene, renderer);
  await loadingStage(89, '调和海风、浪花与光影');
  createPostprocessing();
  resize();
  bindInterface();
  setView(0, true);

  const clock = new THREE.Clock();
  function animate(now) {
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.05);
    if (!paused && !document.hidden) simulationTime += delta * (reduceMotion ? 0.18 : 1);
    updateCameraTransition(now);
    if (!cameraTransition) controls.update();
    ocean.update(simulationTime);
    atmosphere.update(simulationTime);
    filmPass.uniforms.uTime.value = simulationTime;
    composer.render();
  }

  ocean.update(0);
  atmosphere.update(0);
  composer.render();
  await loadingStage(100, '已抵达 · 雷尼斯黑沙滩');
  root.classList.add('is-ready');
  root.dataset.scene = 'ready';
  loading.classList.add('is-loaded');
  setTimeout(() => loading.remove(), 1200);
  requestAnimationFrame(animate);
}

init().catch((error) => {
  console.error('Unable to create Reynisfjara scene:', error);
  loadingStatus.textContent = '场景初始化失败，请确认浏览器已开启 WebGL 后刷新';
  loadingPercent.textContent = '!';
  loadingProgress.style.width = '100%';
  loadingProgress.style.background = '#b98170';
});
