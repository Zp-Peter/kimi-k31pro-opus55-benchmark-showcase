// 三渲二材质：分阶明暗（toon gradient）+ 可选边缘光（rim），配合后期描边形成统一的动画质感。

import * as THREE from 'three';

function makeGradient(values: number[]): THREE.DataTexture {
  const data = new Uint8Array(values.map((v) => Math.round(v * 255)));
  const tex = new THREE.DataTexture(data, values.length, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

// 背光 / 过渡 / 受光 三阶
export const GRADIENT_3 = makeGradient([0.42, 0.42, 0.42, 0.78, 1.0, 1.0]);
export const GRADIENT_2 = makeGradient([0.5, 0.5, 1.0, 1.0]);

export interface ToonOpts {
  rim?: number;
  rimStrength?: number;
  emissive?: number;
  emissiveIntensity?: number;
  map?: THREE.Texture | null;
  transparent?: boolean;
  opacity?: number;
  side?: THREE.Side;
  gradient?: THREE.Texture;
  flat?: boolean;
}

const cache = new Map<string, THREE.MeshToonMaterial>();

export function toon(color: number | string, opts: ToonOpts = {}): THREE.MeshToonMaterial {
  const key = JSON.stringify([color, opts.rim, opts.rimStrength, opts.emissive, opts.emissiveIntensity, opts.map?.uuid, opts.transparent, opts.opacity, opts.side, opts.gradient?.uuid, opts.flat]);
  const hit = cache.get(key);
  if (hit) return hit;
  const m = new THREE.MeshToonMaterial({
    color: new THREE.Color(color as THREE.ColorRepresentation),
    gradientMap: opts.gradient ?? GRADIENT_3,
    map: opts.map ?? null,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
  });
  if (opts.emissive !== undefined) {
    m.emissive = new THREE.Color(opts.emissive);
    m.emissiveIntensity = opts.emissiveIntensity ?? 1;
  }
  if (opts.rim !== undefined) addRim(m, opts.rim, opts.rimStrength ?? 0.55);
  cache.set(key, m);
  return m;
}

/** 不走缓存的独立材质（需要单独改颜色/闪白的对象用） */
export function toonUnique(color: number, opts: ToonOpts = {}): THREE.MeshToonMaterial {
  const m = new THREE.MeshToonMaterial({
    color: new THREE.Color(color),
    gradientMap: opts.gradient ?? GRADIENT_3,
    map: opts.map ?? null,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
  });
  m.emissive = new THREE.Color(opts.emissive ?? 0x000000);
  m.emissiveIntensity = opts.emissiveIntensity ?? 1;
  if (opts.rim !== undefined) addRim(m, opts.rim, opts.rimStrength ?? 0.55);
  return m;
}

export function addRim(m: THREE.MeshToonMaterial, color: number, strength: number) {
  const rimColor = { value: new THREE.Color(color) };
  const rimStrength = { value: strength };
  m.userData.rimColor = rimColor;
  m.userData.rimStrength = rimStrength;
  m.onBeforeCompile = (shader) => {
    shader.uniforms.rimColor = rimColor;
    shader.uniforms.rimStrength = rimStrength;
    shader.fragmentShader = 'uniform vec3 rimColor;\nuniform float rimStrength;\n' + shader.fragmentShader.replace(
      '#include <opaque_fragment>',
      `
      {
        vec3 rimV = normalize( vViewPosition );
        float rimF = 1.0 - clamp( dot( normal, rimV ), 0.0, 1.0 );
        outgoingLight += rimColor * smoothstep( 0.62, 0.7, rimF ) * rimStrength;
      }
      #include <opaque_fragment>
      `,
    );
  };
  m.customProgramCacheKey = () => 'rim';
}

export function basic(color: number, opts: { transparent?: boolean; opacity?: number; additive?: boolean; depthWrite?: boolean; side?: THREE.Side; depthTest?: boolean } = {}) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    depthWrite: opts.depthWrite ?? !opts.transparent,
    depthTest: opts.depthTest ?? true,
    side: opts.side ?? THREE.FrontSide,
  });
}

export function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void, opts: { repeat?: boolean; srgb?: boolean; mip?: boolean } = {}): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(c);
  if (opts.srgb !== false) tex.colorSpace = THREE.SRGBColorSpace;
  if (opts.repeat) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
  }
  tex.anisotropy = 8;
  if (opts.mip === false) {
    tex.generateMipmaps = false;
    tex.minFilter = THREE.LinearFilter;
  }
  return tex;
}

/** 漫画风文字贴图（带描边） */
export function textTexture(text: string, opts: { size?: number; color?: string; stroke?: string; strokeW?: number; font?: string; w?: number; h?: number; bg?: string } = {}): THREE.CanvasTexture {
  const size = opts.size ?? 96;
  const w = opts.w ?? 256;
  const h = opts.h ?? 128;
  return canvasTexture(
    w,
    h,
    (ctx) => {
      if (opts.bg) {
        ctx.fillStyle = opts.bg;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.font = opts.font ?? `900 ${size}px "PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.lineJoin = 'round';
      if (opts.stroke) {
        ctx.strokeStyle = opts.stroke;
        ctx.lineWidth = opts.strokeW ?? size * 0.16;
        ctx.strokeText(text, w / 2, h / 2 + size * 0.04);
      }
      ctx.fillStyle = opts.color ?? '#fff';
      ctx.fillText(text, w / 2, h / 2 + size * 0.04);
    },
    { mip: false },
  );
}

export const LAYER_FX = 1; // 不参与描边的层（特效、半透明预览、精灵）

export function setLayerFX(obj: THREE.Object3D) {
  obj.traverse((o) => {
    o.layers.set(LAYER_FX);
  });
}

export function shadowAll(obj: THREE.Object3D, cast = true, receive = true) {
  obj.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) {
      o.castShadow = cast;
      o.receiveShadow = receive;
    }
  });
}
