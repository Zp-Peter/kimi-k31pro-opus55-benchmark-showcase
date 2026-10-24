import * as THREE from 'three';
import { NOISE } from '../glsl/noise.js';
import { U, LAYER_REFLECT } from '../shared.js';

// Overcast North-Atlantic sky: gradient, veiled sun, a domain-warped stratocumulus deck
// lit with a one-tap march toward the sun, and a horizon haze that matches the fog.
// The same material renders the visible dome and the environment cube used for IBL.

export const SKY_GLSL = /* glsl */`
#ifndef RF_UTIME
#define RF_UTIME
uniform float uTime;
#endif
uniform vec3 uSunDir;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform vec3 uCloudLit;
uniform vec3 uCloudDark;
uniform vec3 uSunGlow;
uniform vec3 uFogColorA;
uniform vec3 uFogColorB;
uniform vec4 uCloud; // x: cover, y: optical density, z: scale, w: unused
uniform vec2 uCloudWind;
uniform float uSunDisc;
uniform float uEnvGround; // 1 while capturing the environment: below the horizon lies dark sand and sea
uniform vec3 uGroundColor;

vec3 renderSky( vec3 d ) {
	float mu = dot( d, uSunDir );
	float mup = max( mu, 0.0 );
	float h = d.y;
	float hp = max( h, 0.0 );

	vec3 sky = mix( uSkyHorizon, uSkyZenith, pow( hp, 0.5 ) );
	sky += uSunGlow * ( pow( mup, 5.0 ) * 0.35 + pow( mup, 48.0 ) * 0.8 );

	float cloudA = 0.0;
	vec3 cloudC = vec3( 0.0 );
	if ( h > 0.0 ) {
		vec2 uv = d.xz / ( hp + 0.12 ) * uCloud.z * 0.85;
		vec2 drift = uCloudWind * uTime;
		vec2 p = uv + drift;
		vec2 q = vec2( fbm2( p * 0.5 + vec2( 1.7, 9.2 ) + drift * 0.15, 3 ), fbm2( p * 0.5 + vec2( 8.3, 2.8 ) - drift * 0.1, 3 ) );
		float n = fbm2( p + q * 1.3, 6 ) * 0.5 + 0.5;
		float cov = uCloud.x;
		float lo = 1.0 - cov - 0.22, hi = 1.0 - cov + 0.32;
		// thickness keeps growing past full cover, so an overcast deck still shows its rolls and thin spots
		float thick = clamp( ( n - lo ) / ( hi - lo ), 0.0, 1.7 );
		vec2 sdir = normalize( uSunDir.xz + vec2( 1e-5 ) );
		float n2 = fbm2( p + q * 1.3 + sdir * 0.12, 4 ) * 0.5 + 0.5;
		float thick2 = clamp( ( n2 - lo ) / ( hi - lo ), 0.0, 1.7 );
		float shade = exp( - uCloud.y * 0.78 * ( thick2 * 0.8 + thick * 0.4 ) );
		cloudC = mix( uCloudDark, uCloudLit, shade );
		// thin spots in the deck glow where more of the sunlight above leaks through
		cloudC += uCloudLit * 0.22 * ( 1.0 - smoothstep( 0.35, 0.95, thick ) );
		cloudC += uSunGlow * pow( mup, 8.0 ) * ( 1.0 - min( thick, 1.0 ) * 0.6 ) * 1.2;
		cloudA = smoothstep( 0.0, 0.45, thick ) * smoothstep( 0.0, 0.2, h );
	}

	float disc = smoothstep( 0.99985, 0.99994, mu );
	sky += uSunGlow * 60.0 * uSunDisc * disc * ( 1.0 - cloudA * 0.97 );
	sky = mix( sky, cloudC, cloudA );

	vec3 haze = mix( uFogColorA, uFogColorB, pow( mup, 5.0 ) * 0.9 );
	sky = mix( sky, haze, exp( - hp * 10.0 ) * 0.9 );
	if ( h < 0.0 ) sky = haze;
	sky = mix( sky, uGroundColor, uEnvGround * smoothstep( 0.0, - 0.1, h ) );
	return sky;
}
`;

const vertexShader = /* glsl */`
varying vec3 vDir;
void main() {
	vDir = position;
	vec4 p = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	gl_Position = p.xyww;
}
`;

const fragmentShader = /* glsl */`
${NOISE}
${SKY_GLSL}
varying vec3 vDir;
void main() {
	gl_FragColor = vec4( renderSky( normalize( vDir ) ), 1.0 );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}
`;

export class Sky {

	constructor( renderer ) {

		this.uniforms = {
			uTime: U.uTime,
			uSunDir: U.uSunDir,
			uFogColorA: U.uFogColorA,
			uFogColorB: U.uFogColorB,
			uSkyZenith: { value: new THREE.Color() },
			uSkyHorizon: { value: new THREE.Color() },
			uCloudLit: { value: new THREE.Color() },
			uCloudDark: { value: new THREE.Color() },
			uSunGlow: { value: new THREE.Color() },
			uCloud: { value: new THREE.Vector4( 0.8, 1.7, 1.15, 0 ) },
			uCloudWind: { value: new THREE.Vector2( 0.0035, - 0.0012 ) },
			uSunDisc: { value: 0 },
			uEnvGround: { value: 0 },
			uGroundColor: { value: new THREE.Color() }
		};

		this.material = new THREE.ShaderMaterial( {
			name: 'Sky',
			uniforms: this.uniforms,
			vertexShader,
			fragmentShader,
			side: THREE.BackSide,
			depthWrite: false
		} );

		const geo = new THREE.SphereGeometry( 1, 96, 48 );
		this.mesh = new THREE.Mesh( geo, this.material );
		this.mesh.scale.setScalar( 9000 );
		this.mesh.renderOrder = 1000; // after opaque geometry so only visible pixels pay for the clouds
		this.mesh.frustumCulled = false;
		this.mesh.layers.enable( LAYER_REFLECT );

		this.envScene = new THREE.Scene();
		const envMesh = new THREE.Mesh( geo, this.material );
		envMesh.scale.setScalar( 100 );
		envMesh.frustumCulled = false;
		this.envScene.add( envMesh );

		this.cubeRT = new THREE.WebGLCubeRenderTarget( 256, {
			type: THREE.HalfFloatType,
			generateMipmaps: true,
			minFilter: THREE.LinearMipmapLinearFilter
		} );
		this.cubeCamera = new THREE.CubeCamera( 1, 1000, this.cubeRT );
		this.pmrem = new THREE.PMREMGenerator( renderer );
		this.envRT = null;

	}

	applyMood( m ) {

		const u = this.uniforms;
		u.uSkyZenith.value.setRGB( ...m.zenith );
		u.uSkyHorizon.value.setRGB( ...m.horizon );
		u.uCloudLit.value.setRGB( ...m.cloudLit );
		u.uCloudDark.value.setRGB( ...m.cloudDark );
		u.uSunGlow.value.setRGB( ...m.sunGlow );
		u.uCloud.value.set( m.cloudCover, m.cloudDensity, m.cloudScale, 0 );
		u.uSunDisc.value = m.sunDisc;
		// black sand and grey sea: a few percent of the horizon radiance
		u.uGroundColor.value.setRGB( ...m.horizon ).multiplyScalar( 0.07 );
		const w = 0.0016 + 0.0032 * m.wind;
		u.uCloudWind.value.set( w, - w * 0.35 );

	}

	// Re-render the environment cube (water reflections) and its PMREM (PBR lighting).
	updateEnvironment( renderer ) {

		this.uniforms.uEnvGround.value = 1;
		this.cubeCamera.update( renderer, this.envScene );
		this.uniforms.uEnvGround.value = 0;
		this.envRT = this.pmrem.fromCubemap( this.cubeRT.texture, this.envRT );
		U.uEnvCube.value = this.cubeRT.texture;
		return this.envRT.texture;

	}

}
