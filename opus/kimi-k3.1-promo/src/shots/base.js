import * as THREE from 'three';
import { GlyphText } from '../engine/text.js';

// Base shot: a 3D scene + a pixel-space overlay scene (perspective, so overlay text can move in depth).
// At z = 0 the overlay camera maps 1 world unit to 1 output pixel, origin at frame centre, y up.
export class Shot {
  constructor(engine, id) {
    this.engine = engine; this.id = id;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, engine.W / engine.H, 0.1, 5000);
    this.overlay = new THREE.Scene();
    const fov = 30;
    this.ocam = new THREE.PerspectiveCamera(fov, engine.W / engine.H, 10, 20000);
    this.ocam.position.set(0, 0, (engine.H / 2) / Math.tan((fov / 2) * Math.PI / 180));
    this.ocam.lookAt(0, 0, 0);
    this.clearColor = new THREE.Color(0x000000);
  }
  update(t, ctx) {}
  post(t, ctx) { return {}; }
  render(r, target) {
    r.setRenderTarget(target);
    r.setClearColor(this.clearColor, 1);
    r.clear(true, true, false);
    r.render(this.scene, this.camera);
    if (this.overlay.children.length) { r.clearDepth(); r.render(this.overlay, this.ocam); }
  }
}

export class Placeholder extends Shot {
  constructor(engine, id) {
    super(engine, id);
    this.label = new GlyphText(`[ ${id} ]`, { size: 90, weight: 700, family: 'mono', color: '#5aa0ff', intensity: 1.2 });
    this.overlay.add(this.label);
  }
  update(t) { this.label.animate(t, { in: { start: 0, dur: 0.3, stagger: 0.01, style: 'fade' } }); }
}
