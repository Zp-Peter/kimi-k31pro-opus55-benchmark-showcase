import * as THREE from 'three';
import { NOISE } from '../glsl/noise.js';
import { SHORE } from '../glsl/shore.js';
import { U } from '../shared.js';
import { axisCoords, gridGeometry } from './beach.js';

// North Atlantic surface: eight Gerstner swells offshore, depth-limited breakers and bores
// in the surf zone (shared phase model with the swash on the sand), murky shallow water,
// planar reflections of the cliffs and stacks, whitewater and lace foam.

// angle from shore-normal (rad), wavelength (m), amplitude (m), Q, phase, wind-driven (0..1)
const WAVES = [
	[ - 0.12, 118, 0.62, 1.0, 0.0, 0.0 ],
	[ 0.24, 77, 0.38, 1.0, 1.3, 0.1 ],
	[ - 0.37, 52, 0.24, 1.0, 2.1, 0.25 ],
	[ 0.48, 33, 0.14, 1.0, 4.0, 0.5 ],
	[ - 0.62, 21, 0.08, 1.0, 0.7, 0.8 ],
	[ 0.8, 13.5, 0.048, 0.9, 2.9, 1.0 ],
	[ - 1.0, 8.7, 0.029, 0.8, 5.1, 1.0 ],
	[ 1.25, 5.6, 0.018, 0.7, 3.3, 1.0 ]
];

const vertexShader = /* glsl */`
#include <common>
#include <fog_pars_vertex>
${NOISE}
${SHORE}
uniform vec4 uWaveA[ 8 ]; // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[ 8 ]; // omega, phase, Q, wind factor
uniform sampler2D uHeightTex;
uniform vec4 uHeightBounds;
uniform float uWind;
varying vec3 vWorld;
varying vec3 vNrm;
varying vec4 vInfo; // x: jacobian, y: surf foam, z: crest, w: offshore distance
varying float vGround;

void main() {
	vec3 p0 = position;
	float s = p0.z - shoreZ( p0.x );
	float camD = length( cameraPosition.xz - p0.xz );
	float lod = 1.0 - smoothstep( 900.0, 3500.0, camD );
	float gFade = mix( 0.1, 1.0, smoothstep( 6.0, 150.0, s ) ) * lod * uSurf.w;

	vec3 disp = vec3( 0.0 );
	vec3 nrm = vec3( 0.0, 1.0, 0.0 );
	float jxx = 1.0, jzz = 1.0, jxz = 0.0;
	for ( int i = 0; i < 8; i ++ ) {
		vec4 a = uWaveA[ i ];
		vec4 b = uWaveB[ i ];
		float A = a.w * gFade * mix( 1.0, uWind, b.w );
		float th = a.z * dot( a.xy, p0.xz ) - b.x * uTime + b.y;
		float c = cos( th ), sn = sin( th );
		float Q = b.z;
		disp.x += Q * A * a.x * c;
		disp.z += Q * A * a.y * c;
		disp.y += A * sn;
		float WA = a.z * A;
		nrm.x -= a.x * WA * c;
		nrm.z -= a.y * WA * c;
		nrm.y -= Q * WA * sn;
		jxx -= Q * WA * a.x * a.x * sn;
		jzz -= Q * WA * a.y * a.y * sn;
		jxz -= Q * WA * a.x * a.y * sn;
	}

	float sFade = smoothstep( - 7.0, - 1.0, s ) * ( 1.0 - smoothstep( 170.0, 280.0, s ) ) * lod;
	float sf, cr, f1, c1, f2, c2;
	float eta = surfEta( p0.x, s, sf, cr ) * sFade;
	float e = 0.6;
	float etaP = surfEta( p0.x, s + e, f1, c1 ) * sFade;
	float etaM = surfEta( p0.x, s - e, f2, c2 ) * sFade;
	float dEds = ( etaP - etaM ) / ( 2.0 * e );
	nrm.x += shoreZp( p0.x ) * dEds;
	nrm.z -= dEds;

	vec3 wp = vec3( p0.x + disp.x, disp.y + eta, p0.z + disp.z );
	float ground = texture2D( uHeightTex, ( wp.xz - uHeightBounds.xy ) / uHeightBounds.zw ).r;
	if ( s < 0.0 ) wp.y = min( wp.y, ground - 0.04 );

	vWorld = wp;
	vNrm = nrm;
	vInfo = vec4( jxx * jzz - jxz * jxz, sf * sFade, cr * sFade, s );
	vGround = ground;

	vec4 mvPosition = viewMatrix * vec4( wp, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	#include <fog_vertex>
}
`;

const fragmentShader = /* glsl */`
#include <common>
#include <fog_pars_fragment>
${NOISE}
${SHORE}
uniform sampler2D uWaterTex;
uniform sampler2D uFoamTex;
uniform sampler2D uHeightTex;
uniform vec4 uHeightBounds;
uniform samplerCube uEnvCube;
uniform sampler2D uReflTex;
uniform mat4 uReflMatrix;
uniform float uReflOn;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uWind;
uniform vec3 uDeepColor;
uniform vec3 uShallowColor;
uniform vec3 uSssColor;
uniform vec3 uFoamColor;
varying vec3 vWorld;
varying vec3 vNrm;
varying vec4 vInfo;
varying float vGround;

void main() {
	vec3 P = vWorld;
	vec3 toCam = cameraPosition - P;
	float dist = length( toCam );
	vec3 V = toCam / dist;
	float s = vInfo.w;
	float t = uTime;

	// small-scale roughness: three scrolling octaves, faded with distance against shimmer
	float near = 1.0 - smoothstep( 20.0, 140.0, dist );
	float dfade = 1.0 - smoothstep( 60.0, 1100.0, dist ) * 0.85;
	vec2 n1 = texture2D( uWaterTex, P.xz / 16.0 + vec2( 0.011, - 0.024 ) * t ).xy * 2.0 - 1.0;
	vec2 n2 = texture2D( uWaterTex, mat2( 0.6, 0.8, - 0.8, 0.6 ) * P.xz / 6.3 + vec2( - 0.021, - 0.017 ) * t ).xy * 2.0 - 1.0;
	vec2 n3 = texture2D( uWaterTex, mat2( 0.8, - 0.6, 0.6, 0.8 ) * P.xz / 2.1 + vec2( 0.035, - 0.05 ) * t ).xy * 2.0 - 1.0;
	n2 = mat2( 0.6, - 0.8, 0.8, 0.6 ) * n2;
	n3 = mat2( 0.8, 0.6, - 0.6, 0.8 ) * n3;
	vec2 nd = ( n1 * 0.5 + n2 * 0.35 + n3 * 0.28 * near ) * dfade * ( 0.4 + 0.6 * uWind );
	vec3 N = normalize( normalize( vNrm ) + vec3( nd.x, 0.0, nd.y ) );
	N = normalize( N + V * max( 0.0, 0.02 - dot( N, V ) ) );

	float NdV = max( dot( N, V ), 0.0 );
	// slopes finer than a pixel tilt facets toward the viewer and hide the grazing mirror:
	// Bruneton's mean Fresnel over the unresolved slope variance, which grows with the footprint
	vec2 fp = fwidth( P.xz );
	float sig = mix( 0.06, 0.22, smoothstep( 0.02, 0.5, max( fp.x, fp.y ) ) ) * ( 0.6 + 0.5 * uWind );
	float F = 0.02 + 0.98 * pow( 1.0 - NdV, 5.0 * exp( - 2.69 * sig ) ) / ( 1.0 + 22.7 * pow( sig, 1.5 ) );

	vec3 R = reflect( - V, N );
	R.y = max( R.y, 0.003 );
	float rough = mix( 0.02, 0.14, smoothstep( 40.0, 2200.0, dist ) );
	vec3 refl = textureLod( uEnvCube, R, rough * 7.0 ).rgb;
	if ( uReflOn > 0.5 ) {
		vec4 rp = uReflMatrix * vec4( P + R * 180.0, 1.0 );
		vec2 ruv = rp.xy / rp.w;
		vec2 edge = smoothstep( vec2( 0.0 ), vec2( 0.03 ), ruv ) * smoothstep( vec2( 1.0 ), vec2( 0.97 ), ruv );
		float inside = edge.x * edge.y * step( 0.0, rp.w );
		refl = mix( refl, textureLod( uReflTex, ruv, rough * 6.0 ).rgb, inside );
	}

	vec3 skyAmb = textureLod( uEnvCube, vec3( 0.0, 1.0, 0.0 ), 5.5 ).rgb; // upper-sky average
	float depth = max( P.y - vGround, 0.0 );
	vec3 body = mix( uDeepColor, uShallowColor, 1.0 - smoothstep( 0.0, 5.0, depth ) ) * skyAmb;

	// light scattered through thin, steep crests
	vec3 Lh = normalize( vec3( uSunDir.x, 0.0, uSunDir.z ) + 1e-5 );
	float toward = pow( max( dot( - V, Lh ), 0.0 ), 2.0 );
	float crest = clamp( vInfo.z * 0.9 + max( P.y, 0.0 ) * 0.3, 0.0, 1.5 );
	vec3 water = body + uSssColor * crest * ( skyAmb * 0.45 + uSunColor * toward * 0.55 );

	vec3 H = normalize( uSunDir + V );
	float shin = mix( 1200.0, 140.0, smoothstep( 30.0, 1500.0, dist ) );
	vec3 sunSpec = uSunColor * pow( max( dot( N, H ), 0.0 ), shin ) * ( shin + 8.0 ) / 25.13 * F * 0.8;

	// whitewater: folding crests offshore, broken bores, the swash edge, impacts on rock
	float jFoam = smoothstep( 0.6, 0.12, vInfo.x );
	float shore = smoothstep( 0.7, 0.05, depth ) * smoothstep( - 6.0, 0.0, s );
	float rockD = texture2D( uHeightTex, ( P.xz - uHeightBounds.xy ) / uHeightBounds.zw ).g;
	float rockFoam = exp( - rockD / 4.5 ) * ( 0.5 + 0.5 * smoothstep( - 0.4, 0.7, P.y ) );
	vec2 fuv = P.xz / 6.0 + vec2( 0.0, - 0.03 ) * t;
	vec4 ft = texture2D( uFoamTex, fuv );
	vec4 ft2 = texture2D( uFoamTex, fuv * 2.7 + vec2( 0.31, 0.17 ) );
	// wind whitecaps on the open sea, more and bigger as the wind rises
	float wcN = gnoise( P.xz * 0.05 + vec2( 0.013, - 0.021 ) * t ) * 0.5 + 0.5;
	float whitecap = smoothstep( 0.9 - 0.13 * uWind, 1.02, wcN + 0.22 * ft2.g ) * smoothstep( 35.0, 110.0, s ) * smoothstep( 0.2, 0.8, uWind );
	float cov = clamp( max( max( max( jFoam * 0.75, vInfo.y ), max( shore * 0.8, rockFoam ) ), whitecap ), 0.0, 1.0 );
	float pat = ft.r * 0.65 + ft2.r * 0.35;
	float foam = smoothstep( 1.0 - cov, 1.0 - cov + 0.18, pat ) * step( 0.002, cov );
	// once the lace is far below a pixel, show the fraction it would cover instead of a hard threshold
	foam = mix( foam, cov * 0.9, smoothstep( 0.08, 0.6, max( fp.x, fp.y ) ) );
	float streaks = smoothstep( 0.72, 0.95, ft2.a * ft.g + ft.b * 0.3 ) * 0.35 * smoothstep( 260.0, 40.0, s ) * smoothstep( 0.0, 10.0, s );
	foam = max( foam, streaks * ( 1.0 - near * 0.3 ) );
	// thick whitewater is bright and lumpy; thin lace lets the dark water show through
	float thick = smoothstep( 0.35, 1.0, cov );
	vec3 foamCol = uFoamColor * ( skyAmb * 1.05 + uSunColor * max( dot( N, uSunDir ), 0.0 ) * 0.35 );
	foamCol *= mix( 0.74, 1.0, thick ) * ( 0.8 + 0.2 * pat ) * ( 1.0 - 0.25 * ft.b * ( 1.0 - thick ) );
	foam *= mix( 0.75, 1.0, thick );

	float turb = 1.0 - exp( - depth * 2.2 );
	float a = F + ( 1.0 - F ) * turb;
	vec3 col = refl * F + ( 1.0 - F ) * turb * water + sunSpec;
	col = mix( col, foamCol, foam );
	a = mix( a, 1.0, foam );
	float edgeFade = smoothstep( 0.0, 0.035, depth );
	col *= edgeFade;
	a *= edgeFade;

	#ifdef USE_FOG
	{
		vec3 off = P - cameraPosition;
		vec3 camP = cameraPosition;
		if ( uFogMirror > 0.5 ) camP.y = abs( camP.y );
		float fa = rfFogAmount( camP, off );
		col = col * ( 1.0 - fa ) + rfFogColor( normalize( off ) ) * fa * a;
	}
	#endif

	gl_FragColor = vec4( col, a );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}
`;

export class Ocean {

	constructor( terrain, tex ) {

		const waveA = [], waveB = [];
		for ( const [ ang, len, amp, q, ph, wind ] of WAVES ) {
			const k = 2 * Math.PI / len;
			waveA.push( new THREE.Vector4( Math.sin( ang ), - Math.cos( ang ), k, amp ) );
			waveB.push( new THREE.Vector4( Math.sqrt( 9.81 * k ), ph, q, wind ) );
		}

		this.uniforms = THREE.UniformsUtils.merge( [ THREE.UniformsLib.fog ] );
		for ( const k in U ) this.uniforms[ k ] = U[ k ];
		Object.assign( this.uniforms, {
			uWaveA: { value: waveA },
			uWaveB: { value: waveB },
			uWaterTex: { value: tex.water },
			uFoamTex: { value: tex.foam },
			uDeepColor: { value: new THREE.Color( 0.006, 0.019, 0.025 ) },
			uShallowColor: { value: new THREE.Color( 0.016, 0.025, 0.024 ) },
			uSssColor: { value: new THREE.Color( 0.03, 0.12, 0.1 ) },
			uFoamColor: { value: new THREE.Color( 0.86, 0.89, 0.91 ) }
		} );

		this.material = new THREE.ShaderMaterial( {
			name: 'Ocean',
			uniforms: this.uniforms,
			vertexShader,
			fragmentShader,
			transparent: true,
			premultipliedAlpha: true,
			depthWrite: true,
			fog: true
		} );

		const xs = axisCoords( - 6000, 6000, - 80, 300, 1.0, 260, 60 );
		const zs = axisCoords( - 130, 9000, - 14, 72, 0.5, 260, 45 );
		const geo = gridGeometry( xs, zs, null );
		this.mesh = new THREE.Mesh( geo, this.material );
		this.mesh.frustumCulled = false;
		this.mesh.name = 'ocean';
		this.mesh.userData.stats = `${xs.length}×${zs.length}`;

	}

}
