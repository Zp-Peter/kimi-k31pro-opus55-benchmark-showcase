// 三渲二后期：法线/深度描边（墨线）+ 空气透视 + 调色 + 受击红边 + 闪光，最后 FXAA。
// 第一人称武器在独立场景渲染，但同样写入颜色与法线缓冲，因此和世界共用一套描边。

import * as THREE from 'three';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { LAYER_FX } from './toon';

const COMP_VS = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`;

const COMP_FS = `
#include <packing>
uniform sampler2D tColor;
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform vec2 uRes;
uniform float uNear;
uniform float uFar;
uniform float uLine;
uniform vec3 uInk;
uniform vec3 uHaze;
uniform float uFlash;
uniform vec3 uFlashColor;
uniform float uHurt;
uniform float uDesat;
uniform float uTone;
varying vec2 vUv;

float viewZ(vec2 uv) {
  float d = texture2D(tDepth, uv).x;
  return -perspectiveDepthToViewZ(d, uNear, uFar);
}

vec3 toSRGB(vec3 c) {
  c = max(c, 0.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 px = uLine / uRes;
  float raw0 = texture2D(tDepth, vUv).x;
  float d0 = viewZ(vUv);
  vec3 n0 = texture2D(tNormal, vUv).xyz * 2.0 - 1.0;
  float sky0 = step(0.999999, raw0);
  float grazing = 1.0 + 7.0 * (1.0 - clamp(abs(n0.z), 0.0, 1.0));
  float thr = (0.03 * d0 + 0.04) * grazing;
  float eD = 0.0;
  float eN = 0.0;
  for (int i = 0; i < 4; i++) {
    vec2 o = i == 0 ? vec2(px.x, 0.0) : i == 1 ? vec2(-px.x, 0.0) : i == 2 ? vec2(0.0, px.y) : vec2(0.0, -px.y);
    vec2 uv = vUv + o;
    float d = viewZ(uv);
    float diff = d0 - d;
    eD = max(eD, smoothstep(thr, thr * 1.7, diff));
    if (i == 0 || i == 2) {
      vec3 n = texture2D(tNormal, uv).xyz * 2.0 - 1.0;
      float nd = 1.0 - dot(n0, n);
      eN = max(eN, smoothstep(0.2, 0.38, nd));
    }
  }
  eN *= (1.0 - sky0) * (1.0 - smoothstep(28.0, 75.0, d0));
  float edge = max(eD, eN);
  edge *= 1.0 - smoothstep(110.0, 420.0, min(d0, 900.0)) * 0.75;

  vec3 col = texture2D(tColor, vUv).rgb;
  float haze = smoothstep(32.0, 460.0, d0) * (1.0 - sky0);
  col = mix(col, uHaze, haze * 0.6);
  col = mix(col, uInk, clamp(edge, 0.0, 1.0) * 0.92);

  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(l), col, 1.1 - uDesat);
  col = mix(col, col * vec3(1.03, 1.0, 0.95), uTone);

  vec2 q = vUv - 0.5;
  float vig = smoothstep(0.9, 0.28, length(q * vec2(1.05, 1.0)));
  col *= mix(0.8, 1.0, vig);
  col = mix(col, vec3(0.7, 0.03, 0.04), uHurt * (1.0 - vig) * 0.9);
  col = mix(col, uFlashColor, uFlash);
  gl_FragColor = vec4(toSRGB(col), 1.0);
}`;

export class PostFX {
  private rtColor: THREE.WebGLRenderTarget;
  private rtNormal: THREE.WebGLRenderTarget;
  private rtComp: THREE.WebGLRenderTarget;
  private normalMat = new THREE.MeshNormalMaterial();
  compMat: THREE.ShaderMaterial;
  private fxaaMat: THREE.ShaderMaterial;
  private quad: THREE.Mesh;
  private quadScene = new THREE.Scene();
  private quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  fxaa = true;
  w = 1;
  h = 1;

  constructor(private renderer: THREE.WebGLRenderer) {
    this.rtColor = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4, depthBuffer: true });
    this.rtNormal = new THREE.WebGLRenderTarget(1, 1, { type: THREE.UnsignedByteType, depthBuffer: true });
    this.rtNormal.depthTexture = new THREE.DepthTexture(1, 1, THREE.FloatType);
    this.rtComp = new THREE.WebGLRenderTarget(1, 1, { type: THREE.UnsignedByteType, depthBuffer: false });
    this.compMat = new THREE.ShaderMaterial({
      uniforms: {
        tColor: { value: this.rtColor.texture },
        tNormal: { value: this.rtNormal.texture },
        tDepth: { value: this.rtNormal.depthTexture },
        uRes: { value: new THREE.Vector2(1, 1) },
        uNear: { value: 0.05 },
        uFar: { value: 900 },
        uLine: { value: 1 },
        uInk: { value: new THREE.Color(0x231a26) },
        uHaze: { value: new THREE.Color(0xbcd3f0) },
        uFlash: { value: 0 },
        uFlashColor: { value: new THREE.Color(1, 1, 1) },
        uHurt: { value: 0 },
        uDesat: { value: 0 },
        uTone: { value: 1 },
      },
      vertexShader: COMP_VS,
      fragmentShader: COMP_FS,
      depthTest: false,
      depthWrite: false,
    });
    this.fxaaMat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(FXAAShader.uniforms),
      vertexShader: FXAAShader.vertexShader,
      fragmentShader: FXAAShader.fragmentShader,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.compMat);
    this.quad.frustumCulled = false;
    this.quadScene.add(this.quad);
  }

  setSize(w: number, h: number) {
    this.w = w;
    this.h = h;
    this.rtColor.setSize(w, h);
    this.rtNormal.setSize(w, h);
    this.rtComp.setSize(w, h);
    this.compMat.uniforms.uRes.value.set(w, h);
    this.compMat.uniforms.uLine.value = Math.max(1, Math.round(h / 900));
    (this.fxaaMat.uniforms.resolution.value as THREE.Vector2).set(1 / w, 1 / h);
  }

  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera, vmScene: THREE.Scene | null, vmCamera: THREE.PerspectiveCamera | null) {
    const r = this.renderer;
    r.autoClear = false;
    this.compMat.uniforms.uNear.value = camera.near;
    this.compMat.uniforms.uFar.value = camera.far;

    // 1) 法线 + 深度（只渲染第 0 层：参与描边的实体）
    r.setRenderTarget(this.rtNormal);
    r.setClearColor(0x8080ff, 1);
    r.clear(true, true, true);
    camera.layers.set(0);
    scene.overrideMaterial = this.normalMat;
    const bg = scene.background;
    scene.background = null;
    r.render(scene, camera);
    scene.overrideMaterial = null;
    if (vmScene && vmCamera) {
      r.clearDepth();
      vmCamera.layers.set(0);
      vmScene.overrideMaterial = this.normalMat;
      r.render(vmScene, vmCamera);
      vmScene.overrideMaterial = null;
    }
    scene.background = bg;

    // 2) 颜色
    r.setRenderTarget(this.rtColor);
    r.setClearColor(0x9fc8f0, 1);
    r.clear(true, true, true);
    camera.layers.set(0);
    camera.layers.enable(LAYER_FX);
    r.shadowMap.needsUpdate = true;
    r.render(scene, camera);
    if (vmScene && vmCamera) {
      r.clearDepth();
      vmCamera.layers.set(0);
      vmCamera.layers.enable(LAYER_FX);
      r.render(vmScene, vmCamera);
    }

    // 3) 合成
    this.quad.material = this.compMat;
    r.setRenderTarget(this.fxaa ? this.rtComp : null);
    r.clear(true, false, false);
    r.render(this.quadScene, this.quadCam);

    // 4) FXAA
    if (this.fxaa) {
      this.fxaaMat.uniforms.tDiffuse.value = this.rtComp.texture;
      this.quad.material = this.fxaaMat;
      r.setRenderTarget(null);
      r.clear(true, false, false);
      r.render(this.quadScene, this.quadCam);
    }
  }
}
