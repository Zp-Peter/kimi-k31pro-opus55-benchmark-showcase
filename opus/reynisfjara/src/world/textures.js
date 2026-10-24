import * as THREE from 'three';
import { NOISE } from '../glsl/noise.js';

// Procedural, seamlessly tiling material textures baked once on the GPU.
// Height passes run in half float, then a Sobel pass writes normal.xy + extras into RGBA8.

const VERT = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }
`;

const tri = new THREE.BufferGeometry();
tri.setAttribute( 'position', new THREE.Float32BufferAttribute( [ - 1, - 1, 0, 3, - 1, 0, - 1, 3, 0 ], 3 ) );
tri.setAttribute( 'uv', new THREE.Float32BufferAttribute( [ 0, 0, 2, 0, 0, 2 ], 2 ) );
const cam = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

function target( size, type, mips ) {

	const rt = new THREE.WebGLRenderTarget( size, size, {
		type,
		format: THREE.RGBAFormat,
		wrapS: THREE.RepeatWrapping,
		wrapT: THREE.RepeatWrapping,
		magFilter: THREE.LinearFilter,
		minFilter: mips ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter,
		generateMipmaps: mips,
		depthBuffer: false
	} );
	rt.texture.anisotropy = 8;
	return rt;

}

function run( renderer, rt, fragmentShader, uniforms = {} ) {

	const mat = new THREE.ShaderMaterial( { vertexShader: VERT, fragmentShader, uniforms, depthTest: false, depthWrite: false } );
	const mesh = new THREE.Mesh( tri, mat );
	mesh.frustumCulled = false;
	const scene = new THREE.Scene();
	scene.add( mesh );
	const prev = renderer.getRenderTarget();
	renderer.setRenderTarget( rt );
	renderer.render( scene, cam );
	renderer.setRenderTarget( prev );
	mat.dispose();

}

// heightGLSL must define: vec4 heightPass( vec2 uv ) -> (height, extraA, extraB, extraC)
function bakeNormalTexture( renderer, size, heightGLSL, strength ) {

	const hRT = target( size, THREE.HalfFloatType, false );
	run( renderer, hRT, /* glsl */`
		varying vec2 vUv;
		${NOISE}
		${heightGLSL}
		void main() { gl_FragColor = heightPass( vUv ); }
	` );

	const out = target( size, THREE.UnsignedByteType, true );
	run( renderer, out, /* glsl */`
		varying vec2 vUv;
		uniform sampler2D tH;
		uniform float uTexel;
		uniform float uStrength;
		float H( vec2 o ) { return texture2D( tH, vUv + o * uTexel ).r; }
		void main() {
			float tl = H( vec2( - 1.0, 1.0 ) ), t = H( vec2( 0.0, 1.0 ) ), tr = H( vec2( 1.0, 1.0 ) );
			float l = H( vec2( - 1.0, 0.0 ) ), r = H( vec2( 1.0, 0.0 ) );
			float bl = H( vec2( - 1.0, - 1.0 ) ), b = H( vec2( 0.0, - 1.0 ) ), br = H( vec2( 1.0, - 1.0 ) );
			float dx = ( tr + 2.0 * r + br ) - ( tl + 2.0 * l + bl );
			float dy = ( tl + 2.0 * t + tr ) - ( bl + 2.0 * b + br );
			vec3 n = normalize( vec3( - dx * uStrength, - dy * uStrength, 1.0 ) );
			vec4 src = texture2D( tH, vUv );
			gl_FragColor = vec4( n.xy * 0.5 + 0.5, clamp( src.g, 0.0, 1.0 ), clamp( src.b, 0.0, 1.0 ) );
		}
	`, { tH: { value: hRT.texture }, uTexel: { value: 1 / size }, uStrength: { value: strength } } );

	hRT.dispose();
	return out.texture;

}

// Black basalt sand, 1.6 m tile: grains, coarse granules, a few small pebbles.
// B = cavity (0 deep .. 1 proud), A = grain albedo variation
const SAND = /* glsl */`
vec4 heightPass( vec2 uv ) {
	float g = 0.5 * vnoiseP( uv * 320.0, vec2( 320.0 ) ) + 0.3 * vnoiseP( uv * 640.0, vec2( 640.0 ) ) + 0.2 * vnoiseP( uv * 160.0, vec2( 160.0 ) );
	vec3 w = worleyP( uv * 70.0, vec2( 70.0 ) );
	float gran = smoothstep( 0.45, 0.05, w.x ) * step( 0.4, w.z ) * ( 0.5 + 0.5 * w.z );
	vec3 w2 = worleyP( uv * 16.0 + 0.37, vec2( 16.0 ) );
	float peb = smoothstep( 0.34, 0.06, w2.x ) * step( 0.86, w2.z );
	float m = fbmP( uv * 6.0, vec2( 6.0 ), 5 );
	float h = g * 0.16 + gran * 0.3 + peb * 1.1 + m * 0.35;
	float cav = clamp( 0.55 + ( gran * 0.5 + peb + g * 0.4 - 0.3 ) * 0.6 + m * 0.3, 0.0, 1.0 );
	float alb = 0.62 + 0.3 * vnoiseP( uv * 640.0 + 3.1, vec2( 640.0 ) ) + 0.25 * gran * ( w.z - 0.6 ) + 0.2 * peb;
	return vec4( h, cav, clamp( alb, 0.0, 1.0 ), 1.0 );
}
`;

// Basalt rock, 4 m tile: rough flow surface, a fracture network and vesicles.
// B = cavity / crack mask (low in cracks), A = albedo variation
const ROCK = /* glsl */`
vec4 heightPass( vec2 uv ) {
	float base = fbmP( uv * 5.0, vec2( 5.0 ), 7 );
	vec3 c = worleyP( uv * 7.0, vec2( 7.0 ) );
	float crack = 1.0 - smoothstep( 0.0, 0.05, c.y - c.x );
	vec3 c2 = worleyP( uv * 19.0 + 0.5, vec2( 19.0 ) );
	float crack2 = 1.0 - smoothstep( 0.0, 0.04, c2.y - c2.x );
	vec3 v = worleyP( uv * 90.0, vec2( 90.0 ) );
	float ves = smoothstep( 0.32, 0.06, v.x ) * step( 0.55, v.z );
	float fine = vnoiseP( uv * 380.0, vec2( 380.0 ) );
	float h = base * 0.7 - crack * 0.32 - crack2 * 0.12 - ves * 0.22 + fine * 0.05;
	float cav = clamp( 0.8 - crack * 0.7 - crack2 * 0.35 - ves * 0.55 + base * 0.25, 0.0, 1.0 );
	float alb = clamp( 0.62 + 0.45 * fbmP( uv * 3.0 + 7.7, vec2( 3.0 ), 4 ) + 0.12 * fine, 0.0, 1.0 );
	return vec4( h, cav, alb, 1.0 );
}
`;

// Wind-roughened water, 16 m tile, anisotropic octaves along the swell direction.
const WATER = /* glsl */`
vec4 heightPass( vec2 uv ) {
	float h = 0.0, a = 0.5;
	vec2 f = vec2( 4.0, 6.0 );
	for ( int i = 0; i < 6; i ++ ) {
		h += a * gnoiseP( uv * f + float( i ) * 7.31, f );
		f *= 2.0; a *= 0.52;
	}
	float cap = smoothstep( 0.25, 0.6, h );
	return vec4( h, h * 0.5 + 0.5, cap, 1.0 );
}
`;

// Foam lace, 6 m tile. R: bubble-wall lace, G: blotchy coverage, B: small bubbles, A: streaks
function bakeFoam( renderer, size ) {

	const rt = target( size, THREE.UnsignedByteType, true );
	run( renderer, rt, /* glsl */`
		varying vec2 vUv;
		${NOISE}
		void main() {
			vec2 uv = vUv;
			vec2 warp = vec2( fbmP( uv * 4.0, vec2( 4.0 ), 4 ), fbmP( uv * 4.0 + 5.2, vec2( 4.0 ), 4 ) ) * 0.06;
			vec3 a = worleyP( ( uv + warp ) * 18.0, vec2( 18.0 ) );
			vec3 b = worleyP( ( uv - warp ) * 47.0 + 0.3, vec2( 47.0 ) );
			vec3 c = worleyP( uv * 130.0 + 0.7, vec2( 130.0 ) );
			float e1 = clamp( ( a.y - a.x ) * 2.2, 0.0, 1.0 );
			float e2 = clamp( ( b.y - b.x ) * 2.6, 0.0, 1.0 );
			float blot = fbmP( uv * 3.0 + 2.1, vec2( 3.0 ), 5 ) * 0.5 + 0.5;
			float lace = clamp( 1.0 - e1 * 0.75 - e2 * 0.45 + ( blot - 0.5 ) * 0.5, 0.0, 1.0 );
			float bub = smoothstep( 0.32, 0.12, c.x ) * step( 0.45, c.z );
			float streak = fbmP( vec2( uv.x * 2.0, uv.y * 12.0 ), vec2( 2.0, 12.0 ), 4 ) * 0.5 + 0.5;
			gl_FragColor = vec4( lace, blot, bub, streak );
		}
	` );
	return rt.texture;

}

// Large-scale variation, 48 m tile. R: albedo, G: gravel patches, B: damp patches, A: lyme-grass / debris
function bakeMacro( renderer, size ) {

	const rt = target( size, THREE.UnsignedByteType, true );
	run( renderer, rt, /* glsl */`
		varying vec2 vUv;
		${NOISE}
		void main() {
			vec2 uv = vUv;
			float alb = fbmP( uv * 3.0, vec2( 3.0 ), 6 ) * 0.5 + 0.5;
			float grav = smoothstep( 0.55, 0.75, fbmP( uv * 5.0 + 3.3, vec2( 5.0 ), 5 ) * 0.5 + 0.5 );
			float damp = fbmP( uv * 8.0 + 1.1, vec2( 8.0 ), 4 ) * 0.5 + 0.5;
			float misc = fbmP( uv * 12.0 + 7.4, vec2( 12.0 ), 4 ) * 0.5 + 0.5;
			gl_FragColor = vec4( alb, grav, damp, misc );
		}
	` );
	return rt.texture;

}

export function bakeTextures( renderer ) {

	return {
		sand: bakeNormalTexture( renderer, 1024, SAND, 3.0 ),
		rock: bakeNormalTexture( renderer, 1024, ROCK, 5.0 ),
		water: bakeNormalTexture( renderer, 512, WATER, 2.2 ),
		foam: bakeFoam( renderer, 1024 ),
		macro: bakeMacro( renderer, 512 )
	};

}
