import * as THREE from 'three';

export function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(x, y) {
  let h = Math.imul(x, 374761393) + Math.imul(y, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

const fade = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;

export function noise2(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = fade(x - ix);
  const fy = fade(y - iy);
  const a = hash(ix, iy);
  const b = hash(ix + 1, iy);
  const c = hash(ix, iy + 1);
  const d = hash(ix + 1, iy + 1);
  return lerp(lerp(a, b, fx), lerp(c, d, fx), fy);
}

export function fbm(x, y, octaves = 5) {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1;
  let total = 0;
  for (let i = 0; i < octaves; i += 1) {
    value += noise2(x * frequency, y * frequency) * amplitude;
    total += amplitude;
    amplitude *= 0.5;
    frequency *= 2.03;
  }
  return value / total;
}

function canvasTexture(canvas, color = false) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  if (color) texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createSandTextures(size = 512) {
  const colorCanvas = document.createElement('canvas');
  const heightCanvas = document.createElement('canvas');
  colorCanvas.width = colorCanvas.height = heightCanvas.width = heightCanvas.height = size;
  const colorContext = colorCanvas.getContext('2d');
  const heightContext = heightCanvas.getContext('2d');
  const colorImage = colorContext.createImageData(size, size);
  const heightImage = heightContext.createImageData(size, size);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = (y * size + x) * 4;
      const broad = fbm(x * 0.018, y * 0.018, 4);
      const medium = noise2(x * 0.12, y * 0.12);
      const grain = hash(x, y);
      const sparkle = grain > 0.986 ? 23 : 0;
      const value = 35 + broad * 24 + medium * 8 + grain * 9 + sparkle;
      colorImage.data[index] = value * 0.94;
      colorImage.data[index + 1] = value;
      colorImage.data[index + 2] = value * 0.98;
      colorImage.data[index + 3] = 255;
      const height = 74 + medium * 62 + grain * 95;
      heightImage.data[index] = heightImage.data[index + 1] = heightImage.data[index + 2] = height;
      heightImage.data[index + 3] = 255;
    }
  }
  colorContext.putImageData(colorImage, 0, 0);
  heightContext.putImageData(heightImage, 0, 0);
  const map = canvasTexture(colorCanvas, true);
  const bumpMap = canvasTexture(heightCanvas);
  map.repeat.set(38, 26);
  bumpMap.repeat.copy(map.repeat);
  return { map, bumpMap };
}

export function createBasaltTextures(size = 512) {
  const colorCanvas = document.createElement('canvas');
  const heightCanvas = document.createElement('canvas');
  colorCanvas.width = colorCanvas.height = heightCanvas.width = heightCanvas.height = size;
  const colorContext = colorCanvas.getContext('2d');
  const heightContext = heightCanvas.getContext('2d');
  const colorImage = colorContext.createImageData(size, size);
  const heightImage = heightContext.createImageData(size, size);

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = (y * size + x) * 4;
      const coarse = fbm(x * 0.022, y * 0.015, 5);
      const vertical = noise2(x * 0.11, y * 0.012);
      const pores = hash(x, y);
      const fissure = Math.abs(noise2(x * 0.028, y * 0.007) - 0.5) < 0.016 ? -22 : 0;
      const value = 42 + coarse * 42 + vertical * 11 + pores * 7 + fissure;
      colorImage.data[index] = value * 0.9;
      colorImage.data[index + 1] = value * 0.98;
      colorImage.data[index + 2] = value;
      colorImage.data[index + 3] = 255;
      const height = 55 + coarse * 105 + vertical * 35 + pores * 45 + fissure * 2;
      heightImage.data[index] = heightImage.data[index + 1] = heightImage.data[index + 2] = height;
      heightImage.data[index + 3] = 255;
    }
  }
  colorContext.putImageData(colorImage, 0, 0);
  heightContext.putImageData(heightImage, 0, 0);
  const map = canvasTexture(colorCanvas, true);
  const bumpMap = canvasTexture(heightCanvas);
  map.repeat.set(2, 5);
  bumpMap.repeat.copy(map.repeat);
  return { map, bumpMap };
}

export function createWaterNormals(size = 256) {
  const data = new Uint8Array(size * size * 4);
  const heights = new Float32Array(size * size);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      heights[y * size + x] = fbm(x * 0.045, y * 0.045, 5);
    }
  }
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const left = heights[y * size + ((x - 1 + size) % size)];
      const right = heights[y * size + ((x + 1) % size)];
      const down = heights[((y - 1 + size) % size) * size + x];
      const up = heights[((y + 1) % size) * size + x];
      const normal = new THREE.Vector3((left - right) * 5.5, (down - up) * 5.5, 1).normalize();
      const index = (y * size + x) * 4;
      data[index] = (normal.x * 0.5 + 0.5) * 255;
      data[index + 1] = (normal.y * 0.5 + 0.5) * 255;
      data[index + 2] = normal.z * 255;
      data[index + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

export function createSoftTexture(size = 128) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const context = canvas.getContext('2d');
  const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(255,255,255,.8)');
  gradient.addColorStop(0.55, 'rgba(255,255,255,.22)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  return canvasTexture(canvas);
}

export function createMistTexture(width = 512, height = 128) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  const image = context.createImageData(width, height);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const nx = x / width;
      const ny = y / height;
      const envelope = Math.sin(nx * Math.PI) * Math.sin(ny * Math.PI);
      const cloud = fbm(x * 0.018, y * 0.035, 4);
      image.data[index] = image.data[index + 1] = image.data[index + 2] = 235;
      image.data[index + 3] = Math.max(0, envelope * (cloud - 0.26)) * 190;
    }
  }
  context.putImageData(image, 0, 0);
  return canvasTexture(canvas);
}

export function setTextureAnisotropy(root, renderer) {
  const maximum = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  root.traverse((object) => {
    if (!object.material) return;
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach((material) => {
      ['map', 'bumpMap', 'normalMap', 'roughnessMap'].forEach((key) => {
        if (material[key]) material[key].anisotropy = maximum;
      });
    });
  });
}
