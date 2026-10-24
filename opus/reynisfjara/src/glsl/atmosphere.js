import * as THREE from 'three';

// Exponential height fog with direction-dependent in-scattering. It replaces three's fog
// chunks globally so every built-in and custom material shares one aerial perspective.
// uFogMirror is raised while rendering the planar reflection (camera below the water).

export const FOG_GLSL = /* glsl */`
#ifndef RF_FOG
#define RF_FOG
uniform vec4 uFogParams;  // x: density at sea level (1/m), y: height falloff (1/m), z: uniform haze (1/m)
uniform vec3 uFogColorA;  // in-scatter away from the sun
uniform vec3 uFogColorB;  // in-scatter toward the sun
uniform vec3 uFogSunDir;
uniform float uFogMirror;

vec3 rfFogColor( vec3 dir ) {
	float mu = max( dot( dir, uFogSunDir ), 0.0 );
	return mix( uFogColorA, uFogColorB, pow( mu, 5.0 ) * 0.9 );
}

float rfFogAmount( vec3 camPos, vec3 offset ) {
	float dist = length( offset );
	vec3 dir = offset / max( dist, 1e-4 );
	float b = uFogParams.y;
	float k = dir.y * b * dist;
	float shape = abs( k ) > 1e-4 ? ( 1.0 - exp( - k ) ) / k : 1.0;
	float od = uFogParams.x * exp( - b * max( camPos.y, 0.0 ) ) * dist * shape + uFogParams.z * dist;
	return 1.0 - exp( - od );
}

vec3 rfApplyFog( vec3 col, vec3 viewPos ) {
	vec3 offset = ( vec4( viewPos, 0.0 ) * viewMatrix ).xyz;
	vec3 camP = cameraPosition;
	if ( uFogMirror > 0.5 ) camP.y = abs( camP.y );
	float f = rfFogAmount( camP, offset );
	return mix( col, rfFogColor( normalize( offset ) ), f );
}
#endif
`;

export function installFogChunks() {

	THREE.ShaderChunk.fog_pars_vertex = /* glsl */`
#ifdef USE_FOG
	varying float vFogDepth;
	varying vec3 vFogViewPos;
#endif
`;

	THREE.ShaderChunk.fog_vertex = /* glsl */`
#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
	vFogViewPos = mvPosition.xyz;
#endif
`;

	THREE.ShaderChunk.fog_pars_fragment = /* glsl */`
#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	varying vec3 vFogViewPos;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
	${FOG_GLSL}
#endif
`;

	THREE.ShaderChunk.fog_fragment = /* glsl */`
#ifdef USE_FOG
	gl_FragColor.rgb = rfApplyFog( gl_FragColor.rgb, vFogViewPos );
#endif
`;

}
