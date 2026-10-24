import * as THREE from 'three';

// Uniforms shared by reference across every material in the scene.
export const U = {
	uTime: { value: 0 },
	uSurf: { value: new THREE.Vector4( 10.5, 1.15, 1.0, 0.75 ) },
	uWind: { value: 0.6 },
	uSunDir: { value: new THREE.Vector3( 0, 1, 0 ) },
	uSunColor: { value: new THREE.Color( 1, 1, 1 ) },
	uFogParams: { value: new THREE.Vector4( 0.0011, 0.018, 0.0002, 0 ) },
	uFogColorA: { value: new THREE.Color( 0.7, 0.73, 0.76 ) },
	uFogColorB: { value: new THREE.Color( 0.9, 0.86, 0.8 ) },
	uFogSunDir: { value: new THREE.Vector3( 0, 1, 0 ) },
	uFogMirror: { value: 0 },
	uHeightTex: { value: null },
	uHeightBounds: { value: new THREE.Vector4( 0, 0, 1, 1 ) },
	uReflTex: { value: null },
	uReflMatrix: { value: new THREE.Matrix4() },
	uReflOn: { value: 1 },
	uEnvCube: { value: null }
};

// Layer used by the planar reflection camera (sky, rocks, columns, birds).
export const LAYER_REFLECT = 1;

// Attach the shared uniforms plus a shader edit to a built-in material.
export function patchMaterial( material, key, edit ) {
	material.onBeforeCompile = ( shader ) => {
		for ( const k in U ) shader.uniforms[ k ] = U[ k ];
		edit( shader );
	};
	material.customProgramCacheKey = () => key;
	return material;
}

// Replace an #include in a shader, failing loudly if three's chunk layout changed.
export function inject( src, include, code, mode = 'after' ) {
	const tag = `#include <${include}>`;
	if ( ! src.includes( tag ) ) throw new Error( `shader include not found: ${include}` );
	if ( mode === 'replace' ) return src.replace( tag, code );
	if ( mode === 'before' ) return src.replace( tag, code + '\n' + tag );
	return src.replace( tag, tag + '\n' + code );
}
