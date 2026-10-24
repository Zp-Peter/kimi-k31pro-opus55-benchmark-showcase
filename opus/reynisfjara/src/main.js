import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { installFogChunks } from './glsl/atmosphere.js';
import { shoreZ } from './glsl/shore.js';
import { U, LAYER_REFLECT } from './shared.js';
import { MOODS, CAMERA_PRESETS } from './config.js';
import { TerrainData } from './world/terrainData.js';
import { bakeTextures } from './world/textures.js';
import { Sky } from './world/sky.js';
import { buildBeach } from './world/beach.js';
import { Ocean } from './world/ocean.js';
import { buildCliff } from './world/cliff.js';
import { buildColumns } from './world/basalt.js';
import { buildStacks } from './world/stacks.js';
import { buildRocks } from './world/pebbles.js';
import { Birds } from './world/birds.js';
import { PlanarReflection } from './fx/reflection.js';
import { createPost } from './fx/post.js';
import { SurfAudio } from './audio.js';
import { setupUI } from './ui.js';

installFogChunks(); // before any material compiles

const loaderEl = document.getElementById( 'loader' );
const stepEl = document.getElementById( 'ld-step' );
const barEl = document.querySelector( '#loader .ld-bar i' );
const STEPS = 12;
let stepIndex = 0;

// let the loader repaint between build steps (with a timer fallback for background tabs)
const nextFrame = () => new Promise( ( resolve ) => {
	let done = false;
	const go = () => { if ( ! done ) { done = true; resolve(); } };
	requestAnimationFrame( () => setTimeout( go, 0 ) );
	setTimeout( go, 120 );
} );

async function step( label, fn ) {
	stepEl.textContent = label;
	barEl.style.width = `${Math.round( stepIndex / STEPS * 100 )}%`;
	await nextFrame();
	const t0 = performance.now();
	const out = await fn();
	console.info( `[reynisfjara] ${label} ${( performance.now() - t0 ).toFixed( 0 )} ms` );
	stepIndex ++;
	return out;
}

const easeInOut = ( t ) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow( - 2 * t + 2, 3 ) / 2;

// Region whose shadows matter (beach below the cliffs, the columns, the headland and the stacks)
const SHADOW_BOX = new THREE.Box3( new THREE.Vector3( - 90, - 6, - 150 ), new THREE.Vector3( 460, 80, 235 ) );

class App {

	constructor() {

		this.params = structuredClone( MOODS.overcast );
		this.moodName = 'overcast';
		this.view = { timeScale: 1, reflections: true, bloom: 0.22, vignette: 0.32, grain: 0.03, pixelRatio: Math.min( window.devicePixelRatio, 1.5 ) };
		this.time = 0;
		this.paused = false;
		this.tween = null;
		this.envTimer = 0;
		this.audio = new SurfAudio();
		this.clock = new THREE.Clock();
		this.fps = { frames: 0, time: 0, value: 0 };

	}

	async init() {

		const renderer = this.renderer = new THREE.WebGLRenderer( { antialias: false, powerPreference: 'high-performance', stencil: false } );
		renderer.setPixelRatio( this.view.pixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.toneMapping = THREE.AgXToneMapping;
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.shadowMap.autoUpdate = false;
		renderer.info.autoReset = false;
		document.getElementById( 'app' ).appendChild( renderer.domElement );

		const scene = this.scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2( 0xb4bcc4, 0.001 ); // switches fog on; colours and density come from U
		const camera = this.camera = new THREE.PerspectiveCamera( 46, window.innerWidth / window.innerHeight, 0.2, 20000 );

		const terrain = this.terrain = await step( '计算地形与距离场', () => {
			const t = new TerrainData();
			t.build();
			return t;
		} );
		U.uHeightTex.value = terrain.texture;
		U.uHeightBounds.value.copy( terrain.bounds );

		const tex = await step( '烘焙程序化纹理', () => bakeTextures( renderer ) );
		this.sky = await step( '天空与云层', () => new Sky( renderer ) );
		scene.add( this.sky.mesh );
		this.beach = await step( '黑沙滩', () => buildBeach( terrain, tex ) );
		scene.add( this.beach );
		this.ocean = await step( '北大西洋', () => new Ocean( terrain, tex ) );
		scene.add( this.ocean.mesh );
		this.cliff = await step( '雷尼斯山崖壁', () => buildCliff( terrain, tex ) );
		scene.add( this.cliff );
		this.columns = await step( '玄武岩柱群', () => buildColumns( terrain, tex ) );
		scene.add( this.columns );
		this.stacks = await step( '雷尼斯海蚀柱', () => buildStacks( terrain, tex ) );
		scene.add( this.stacks );
		this.rocks = await step( '卵石与落石', () => buildRocks( terrain, tex, this.columns.userData.footprints ) );
		scene.add( this.rocks );
		this.birds = await step( '海鸟', () => new Birds() );
		scene.add( this.birds.mesh );
		console.info( '[reynisfjara]', this.columns.userData.stats, '|', this.rocks.userData.stats );

		const sun = this.sun = new THREE.DirectionalLight( 0xffffff, 1 );
		sun.layers.enable( LAYER_REFLECT );
		sun.castShadow = true;
		sun.shadow.mapSize.set( 4096, 4096 );
		sun.shadow.bias = - 0.0003;
		sun.shadow.normalBias = 0.05;
		sun.shadow.radius = 2;
		scene.add( sun, sun.target );

		this.reflection = new PlanarReflection( renderer, { scale: 0.5 } );
		this.post = createPost( renderer, scene, camera );

		const controls = this.controls = new OrbitControls( camera, renderer.domElement );
		controls.enableDamping = true;
		controls.dampingFactor = 0.075;
		controls.rotateSpeed = 0.55;
		controls.zoomSpeed = 0.9;
		controls.panSpeed = 0.9;
		controls.screenSpacePanning = false;
		controls.minDistance = 0.8;
		controls.maxDistance = 1800;
		controls.maxPolarAngle = Math.PI * 0.96;

		this.applyParams( { environment: true } );
		this.goTo( 'beach', true );
		this.onResize();
		window.addEventListener( 'resize', () => this.onResize() );

		await step( '编译着色器', async () => {
			this.camera.updateMatrixWorld();
			if ( renderer.compileAsync ) await renderer.compileAsync( scene, camera );
			this.reflection.update( scene, camera );
			this.post.render( 0 );
		} );

		this.ui = setupUI( this );
		this.ui.syncMood( this.moodName );
		this.ui.syncPreset( 'beach' );
		barEl.style.width = '100%';
		loaderEl.classList.add( 'done' );
		setTimeout( () => loaderEl.remove(), 1600 );
		document.body.classList.add( 'ready' );
		this.statsEl = document.getElementById( 'stats' );
		this.clock.start();
		renderer.setAnimationLoop( () => this.frame() );

	}

	// ---- moods and parameters ----

	setMood( name ) {

		if ( ! MOODS[ name ] ) return;
		this.moodName = name;
		Object.assign( this.params, structuredClone( MOODS[ name ] ) );
		this.applyParams( { environment: true } );
		this.ui?.syncMood( name );

	}

	applyParams( { environment = true } = {} ) {

		const p = this.params;
		const el = THREE.MathUtils.degToRad( p.sunElevation ), az = THREE.MathUtils.degToRad( p.sunAzimuth );
		const dir = new THREE.Vector3( Math.sin( az ) * Math.cos( el ), Math.sin( el ), - Math.cos( az ) * Math.cos( el ) );
		U.uSunDir.value.copy( dir );
		U.uFogSunDir.value.copy( dir );
		U.uSunColor.value.setRGB( ...p.sunColor ).multiplyScalar( p.sunIntensity );
		// the sun fades out as it sets behind the horizon haze
		const vis = THREE.MathUtils.smoothstep( p.sunElevation, - 2.5, 1.5 );
		this.sun.color.setRGB( ...p.sunColor );
		this.sun.intensity = p.sunIntensity * vis;
		U.uSunColor.value.multiplyScalar( vis );
		U.uFogParams.value.set( p.fogDensity, p.fogFalloff, p.haze, 0 );
		U.uFogColorA.value.setRGB( ...p.fogTint );
		U.uFogColorB.value.setRGB( ...p.fogSunTint );
		U.uSurf.value.set( p.wavePeriod, p.waveHeight, p.runup, p.swell );
		U.uWind.value = p.wind;
		this.sky.applyMood( p );
		this.renderer.toneMappingExposure = p.exposure;
		this.fitShadow( dir );
		this.renderer.shadowMap.needsUpdate = true;
		if ( environment ) this.updateEnvironment();

	}

	updateEnvironment() {

		this.scene.environment = this.sky.updateEnvironment( this.renderer );
		this.scene.environmentIntensity = this.params.envIntensity;

	}

	applyView( resize = false ) {

		const v = this.view;
		this.reflection.enabled = v.reflections;
		this.post.bloom.strength = v.bloom;
		this.post.final.uniforms.uVignette.value = v.vignette;
		this.post.final.uniforms.uGrain.value = v.grain;
		if ( resize ) this.onResize();

	}

	// Orthographic shadow frustum fitted around SHADOW_BOX as seen from the sun
	fitShadow( dir ) {

		const sun = this.sun, cam = sun.shadow.camera;
		const center = SHADOW_BOX.getCenter( new THREE.Vector3() );
		sun.target.position.copy( center );
		sun.position.copy( center ).addScaledVector( dir, 2000 );
		sun.updateMatrixWorld();
		sun.target.updateMatrixWorld();
		// same view the shadow camera builds (cameras look down -z)
		const view = new THREE.Matrix4().lookAt( sun.position, center, new THREE.Vector3( 0, 1, 0 ) ).setPosition( sun.position ).invert();
		let x0 = Infinity, x1 = - Infinity, y0 = Infinity, y1 = - Infinity, z0 = Infinity, z1 = - Infinity;
		const p = new THREE.Vector3();
		for ( let i = 0; i < 8; i ++ ) {
			p.set( i & 1 ? SHADOW_BOX.max.x : SHADOW_BOX.min.x, i & 2 ? SHADOW_BOX.max.y : SHADOW_BOX.min.y, i & 4 ? SHADOW_BOX.max.z : SHADOW_BOX.min.z ).applyMatrix4( view );
			x0 = Math.min( x0, p.x ); x1 = Math.max( x1, p.x );
			y0 = Math.min( y0, p.y ); y1 = Math.max( y1, p.y );
			z0 = Math.min( z0, p.z ); z1 = Math.max( z1, p.z );
		}
		cam.left = x0; cam.right = x1; cam.bottom = y0; cam.top = y1;
		cam.near = Math.max( 1, - z1 - 200 ); cam.far = - z0 + 50;
		cam.updateProjectionMatrix();

	}

	// ---- camera ----

	surfaceAt( x, z, withMountain = true ) {

		const t = this.terrain;
		let h = t.groundAt( x, z );
		if ( withMountain && t.insideAt( x, z ) > 0.3 ) h = Math.max( h, t.mountainHeight( x, z ) );
		const s = z - shoreZ( x );
		if ( s > - 2 ) h = Math.max( h, 1.1 * THREE.MathUtils.smoothstep( s, - 2, 30 ) );
		return h;

	}

	goTo( name, instant = false ) {

		const p = CAMERA_PRESETS[ name ];
		if ( ! p ) return;
		const pos = new THREE.Vector3( p.pos[ 0 ], 0, p.pos[ 2 ] );
		pos.y = this.surfaceAt( pos.x, pos.z ) + p.pos[ 1 ];
		const target = new THREE.Vector3( p.target[ 0 ], 0, p.target[ 2 ] );
		target.y = Math.max( this.terrain.groundAt( target.x, target.z ), 0 ) + p.target[ 1 ];
		this.ui?.syncPreset( name );
		if ( instant ) {
			this.camera.position.copy( pos );
			this.camera.fov = p.fov;
			this.camera.updateProjectionMatrix();
			this.controls.target.copy( target );
			this.controls.update();
			this.tween = null;
			return;
		}
		this.tween = {
			t: 0, dur: 2.8,
			fromPos: this.camera.position.clone(), fromTarget: this.controls.target.clone(), fromFov: this.camera.fov,
			toPos: pos, toTarget: target, toFov: p.fov
		};
		this.controls.enabled = false;

	}

	updateCamera( dt ) {

		const cam = this.camera, controls = this.controls;
		if ( this.tween ) {
			const tw = this.tween;
			tw.t = Math.min( 1, tw.t + dt / tw.dur );
			const k = easeInOut( tw.t );
			cam.position.lerpVectors( tw.fromPos, tw.toPos, k );
			// lift the path a little so it does not scrape the ground
			cam.position.y += Math.sin( Math.PI * k ) * Math.min( 25, tw.fromPos.distanceTo( tw.toPos ) * 0.12 );
			controls.target.lerpVectors( tw.fromTarget, tw.toTarget, k );
			cam.fov = THREE.MathUtils.lerp( tw.fromFov, tw.toFov, k );
			cam.updateProjectionMatrix();
			cam.lookAt( controls.target );
			if ( tw.t >= 1 ) { this.tween = null; controls.enabled = true; controls.update(); }
		} else {
			controls.update();
		}
		const floor = this.surfaceAt( cam.position.x, cam.position.z ) + 0.35;
		if ( cam.position.y < floor ) cam.position.y = floor;
		cam.updateMatrixWorld();

	}

	toggleSound() {

		if ( this.audio.on ) this.audio.stop(); else this.audio.start();
		return this.audio.on;

	}

	onResize() {

		const w = window.innerWidth, h = window.innerHeight;
		this.camera.aspect = w / h;
		this.camera.updateProjectionMatrix();
		this.renderer.setPixelRatio( this.view.pixelRatio );
		this.renderer.setSize( w, h );
		this.post.setSize( w, h );
		const db = this.renderer.getDrawingBufferSize( new THREE.Vector2() );
		this.reflection.setSize( db.x, db.y );

	}

	frame() {

		const dt = Math.min( this.clock.getDelta(), 0.1 );
		const ts = this.paused ? 0 : this.view.timeScale;
		this.time += dt * ts;
		U.uTime.value = this.time;

		this.updateCamera( dt );
		this.sky.mesh.position.copy( this.camera.position );
		this.birds.update( this.time, dt * ts );

		this.envTimer += dt * ts;
		if ( this.envTimer > 10 ) { this.envTimer = 0; this.updateEnvironment(); }

		this.renderer.info.reset();
		this.reflection.update( this.scene, this.camera );
		this.post.render( this.time );
		this.audio.update( this.time, ts, this.camera, U.uSurf.value, U.uWind.value );

		const f = this.fps;
		f.frames ++; f.time += dt;
		if ( f.time > 0.5 ) {
			f.value = f.frames / f.time; f.frames = 0; f.time = 0;
			const info = this.renderer.info.render;
			this.statsEl.textContent = `${f.value.toFixed( 0 )} fps · ${( info.triangles / 1e6 ).toFixed( 2 )}M tris · ${info.calls} draws`;
		}

	}

}

const app = new App();
window.reynisfjara = app;
app.init().catch( ( err ) => {
	console.error( err );
	stepEl.textContent = '出错了：' + ( err && err.message ? err.message : err );
	loaderEl.classList.add( 'error' );
} );
