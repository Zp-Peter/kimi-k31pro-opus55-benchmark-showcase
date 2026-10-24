import * as THREE from 'three';
import { NOISE } from '../glsl/noise.js';
import { SHORE } from '../glsl/shore.js';
import { U, patchMaterial, inject } from '../shared.js';

// Non-uniform grid coordinates: fine spacing s0 inside [d0, d1], growing smoothly
// (length scale g) up to s1 outside, so one mesh covers kilometres without seams.
export function axisCoords( a, b, d0, d1, s0, s1, g ) {

	const step = ( dist ) => Math.min( s1, s0 * ( 1 + Math.pow( dist / g, 1.6 ) ) );
	const fwd = [];
	let x = d0;
	while ( x < b ) { fwd.push( x ); x += step( Math.max( 0, x - d1 ) ); }
	fwd.push( b );
	const bwd = [];
	x = d0 - step( 0 );
	while ( x > a ) { bwd.push( x ); x -= step( d0 - x ); }
	bwd.push( a );
	return bwd.reverse().concat( fwd );

}

export function gridGeometry( xs, zs, heightFn ) {

	const nx = xs.length, nz = zs.length;
	const pos = new Float32Array( nx * nz * 3 );
	for ( let j = 0; j < nz; j ++ ) {
		for ( let i = 0; i < nx; i ++ ) {
			const k = ( j * nx + i ) * 3;
			pos[ k ] = xs[ i ];
			pos[ k + 1 ] = heightFn ? heightFn( xs[ i ], zs[ j ] ) : 0;
			pos[ k + 2 ] = zs[ j ];
		}
	}
	const idx = new Uint32Array( ( nx - 1 ) * ( nz - 1 ) * 6 );
	let o = 0;
	for ( let j = 0; j < nz - 1; j ++ ) {
		for ( let i = 0; i < nx - 1; i ++ ) {
			const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
			idx[ o ++ ] = a; idx[ o ++ ] = c; idx[ o ++ ] = b;
			idx[ o ++ ] = b; idx[ o ++ ] = c; idx[ o ++ ] = d;
		}
	}
	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	geo.setIndex( new THREE.BufferAttribute( idx, 1 ) );
	return geo;

}

// Ambient-occlusion splat map for contact shadows of pebbles and columns on the sand
const white = new THREE.DataTexture( new Uint8Array( [ 255, 255, 255, 255 ] ), 1, 1 );
white.needsUpdate = true;
export const sandAO = {
	uAOTex: { value: white },
	uAOBounds: { value: new THREE.Vector4( 0, 0, 1, 1 ) }
};

const SAND_PARS = /* glsl */`
${NOISE}
${SHORE}
uniform sampler2D uSandTex;
uniform sampler2D uMacroTex;
uniform sampler2D uFoamTex;
uniform sampler2D uWaterTex;
uniform sampler2D uAOTex;
uniform vec4 uAOBounds;
uniform sampler2D uReflTex;
uniform mat4 uReflMatrix;
uniform float uReflOn;
uniform vec3 uSunDir;
varying vec3 vWPos;
`;

const SAND_SURFACE = /* glsl */`
	vec3 sP = vWPos;
	float sDist = length( cameraPosition - sP );
	float sD = shoreZ( sP.x ) - sP.z;
	float swDepth, swFoam, swDamp, swSheen, swAdv;
	swashAt( sP.x, sD, swDepth, swFoam, swDamp, swSheen, swAdv );

	vec4 sMac = texture2D( uMacroTex, sP.xz / 48.0 );
	vec4 sTA = texture2D( uSandTex, sP.xz / 1.6 );
	vec4 sTB = texture2D( uSandTex, mat2( 0.8, - 0.6, 0.6, 0.8 ) * sP.xz / 4.7 + 0.37 );
	vec2 sNA = sTA.xy * 2.0 - 1.0;
	vec2 sNB = mat2( 0.8, 0.6, - 0.6, 0.8 ) * ( sTB.xy * 2.0 - 1.0 );
	float sCav = mix( sTA.b, sTB.b, 0.35 );

	// thin ridges of heavy minerals left at old run-up limits
	float sMarks = 0.0, sMarkSlope = 0.0;
	for ( int i = 0; i < 3; i ++ ) {
		float fi = float( i );
		float m = 6.5 + 4.2 * fi + 1.3 * sin( sP.x * 0.047 + fi * 2.1 ) + 0.5 * sin( sP.x * 0.13 + fi * 4.0 );
		float t = ( sD - m ) / 0.16;
		float g = exp( - t * t ) * ( 0.55 + 0.45 * sin( sP.x * 0.31 + fi * 1.7 ) );
		sMarks += g;
		sMarkSlope += - 2.0 * t * g;
	}

	float sGrav = sMac.g * smoothstep( 6.0, 24.0, sD );
	float sGrass = smoothstep( 90.0, 150.0, sD + 40.0 * ( sMac.a - 0.5 ) );

	vec3 sAlb = vec3( 0.05, 0.051, 0.055 ) * ( 0.8 + 0.42 * sMac.r ) * ( 0.74 + 0.5 * sTA.a );
	sAlb *= 1.0 + 0.28 * sGrav;
	vec3 sGrassCol = mix( vec3( 0.04, 0.052, 0.022 ), vec3( 0.08, 0.072, 0.035 ), sMac.r );
	sAlb = mix( sAlb, sGrassCol, sGrass );
	float sRough = mix( mix( 0.94, 0.84, sGrav ), 0.9, sGrass );

	float sDamp = clamp( swDamp * ( 0.85 + 0.3 * sMac.b ), 0.0, 1.0 ) * ( 1.0 - sGrass );
	sAlb *= mix( 1.0, 0.5, sDamp );
	sRough = mix( sRough, 0.4, sDamp );
	sAlb *= 1.0 - 0.14 * clamp( sMarks, 0.0, 1.0 );
	sAlb *= mix( 1.0, 0.82, smoothstep( 0.02, 0.2, swDepth ) );

	// foam carried by the swash sheet
	vec2 sFoamUV = vec2( sP.x, sD - swAdv * 0.65 ) / 5.5;
	float sFoamPat = texture2D( uFoamTex, sFoamUV ).r * 0.7 + texture2D( uFoamTex, sFoamUV * 2.3 + 0.41 ).r * 0.3;
	float sFoam = smoothstep( 1.0 - swFoam, 1.0 - swFoam + 0.16, sFoamPat ) * step( 0.001, swFoam );
	sAlb = mix( sAlb, vec3( 0.6, 0.63, 0.645 ), sFoam );
	sRough = mix( sRough, 0.6, sFoam );

	float sFilm = max( smoothstep( 0.0, 0.006, swDepth ), swSheen * 0.85 ) * ( 1.0 - sFoam * 0.8 ) * ( 1.0 - sGrass );

	vec2 sDetail = ( sNA * 0.6 + sNB * 0.4 ) * mix( 1.0, 0.5, sDamp ) * ( 1.0 - 0.6 * smoothstep( 30.0, 180.0, sDist ) );
	sDetail *= 1.0 - sFoam * 0.7;
	sDetail += vec2( shoreZp( sP.x ), - 1.0 ) * sMarkSlope * 0.06;

	// wind ripples on the dry upper beach: gentle stoss, steep lee, darker heavy minerals in the troughs
	{
		float dry = smoothstep( 14.0, 26.0, sD ) * ( 1.0 - sGrass ) * ( 1.0 - sDamp );
		vec2 rdir = normalize( vec2( 0.35, 1.0 ) + 0.3 * vec2( sin( sP.x * 0.13 + sP.z * 0.07 ), cos( sP.z * 0.11 - sP.x * 0.05 ) ) );
		float ph = dot( sP.xz, rdir ) * 52.0 + 2.5 * sin( dot( sP.xz, vec2( 0.9, - 0.4 ) ) * 3.1 ) + gnoise( sP.xz * 1.7 ) * 3.0;
		float aa = 1.0 - smoothstep( 0.25, 0.7, fwidth( ph ) / 6.2831853 );
		float amp = dry * aa * ( 0.35 + 0.65 * smoothstep( 0.3, 0.7, sMac.b ) );
		float fr = fract( ph / 6.2831853 );
		float stoss = step( fr, 0.75 );
		sDetail -= rdir * mix( - 0.42, 0.14, stoss ) * amp;
		float crest = stoss > 0.5 ? fr / 0.75 : ( 1.0 - fr ) / 0.25;
		sAlb *= 1.0 - 0.16 * ( 1.0 - crest ) * amp;
	}

	// glints from glassy grains, only where a grain is larger than a pixel
	float sGlint = 0.0;
	{
		vec2 gc = sP.xz * 230.0;
		vec3 gr = hash32( floor( gc ) );
		vec2 gf = fract( gc ) - 0.5 - ( gr.xy - 0.5 ) * 0.5;
		vec3 gn = normalize( vec3( gr.x * 2.0 - 1.0, 1.6, gr.y * 2.0 - 1.0 ) );
		vec3 gv = normalize( cameraPosition - sP );
		vec3 gh = normalize( uSunDir + gv );
		float spot = smoothstep( 0.32, 0.08, length( gf ) ) * step( 0.86, gr.z );
		sGlint = pow( max( dot( gn, gh ), 0.0 ), 700.0 ) * spot * 6.0 * ( 1.0 - smoothstep( 3.0, 11.0, sDist ) ) * ( 1.0 - sFoam ) * ( 1.0 - sGrass );
	}

	diffuseColor.rgb = sAlb;
	roughnessFactor = sRough;
`;

const SAND_NORMAL = /* glsl */`
	{
		vec3 nW = inverseTransformDirection( normal, viewMatrix );
		nW = normalize( nW + vec3( sDetail.x, 0.0, sDetail.y ) * 0.85 );
		normal = normalize( ( viewMatrix * vec4( nW, 0.0 ) ).xyz );
	}
`;

const FILM_NORMAL = /* glsl */`
#ifdef USE_CLEARCOAT
	{
		vec2 wuv = sP.xz / 3.0;
		vec2 rr = ( texture2D( uWaterTex, wuv + vec2( 0.0, - uTime * 0.11 ) ).xy * 2.0 - 1.0 ) * 0.6
			+ ( texture2D( uWaterTex, wuv * 2.7 + vec2( uTime * 0.05, uTime * 0.09 ) ).xy * 2.0 - 1.0 ) * 0.4;
		float rip = smoothstep( 0.0, 0.08, swDepth ) * 0.14 + 0.012;
		vec3 ccW = inverseTransformDirection( clearcoatNormal, viewMatrix );
		ccW = normalize( ccW + vec3( rr.x, 0.0, rr.y ) * rip );
		clearcoatNormal = normalize( ( viewMatrix * vec4( ccW, 0.0 ) ).xyz );
	}
#endif
`;

const SAND_LAYERS = /* glsl */`
#ifdef USE_CLEARCOAT
	material.clearcoat = saturate( sFilm );
	material.clearcoatRoughness = min( mix( 0.075, 0.035, smoothstep( 0.0, 0.05, swDepth ) ) + geometryRoughness, 1.0 );
	material.clearcoatF0 = vec3( 0.02 );
#endif
`;

const SAND_REFLECT = /* glsl */`
#ifdef USE_CLEARCOAT
	if ( uReflOn > 0.5 && sFilm > 0.001 ) {
		vec3 ccW = inverseTransformDirection( clearcoatNormal, viewMatrix );
		vec3 rW = reflect( normalize( sP - cameraPosition ), ccW );
		rW.y = max( rW.y, 0.002 );
		vec4 rp = uReflMatrix * vec4( sP + rW * 160.0, 1.0 );
		vec2 ruv = rp.xy / rp.w;
		vec2 edge = smoothstep( vec2( 0.0 ), vec2( 0.03 ), ruv ) * smoothstep( vec2( 1.0 ), vec2( 0.97 ), ruv );
		float inside = edge.x * edge.y * step( 0.0, rp.w );
		vec3 planar = textureLod( uReflTex, ruv, 0.5 ).rgb;
		clearcoatRadiance = mix( clearcoatRadiance, planar, inside );
	}
#endif
`;

const SAND_GLINT = /* glsl */`
#if NUM_DIR_LIGHTS > 0
	totalEmissiveRadiance += sGlint * directLight.color;
#endif
`;

const SAND_AO = /* glsl */`
	float sAOv = 1.0;
	{
		vec2 aouv = ( sP.xz - uAOBounds.xy ) / uAOBounds.zw;
		if ( aouv.x > 0.0 && aouv.y > 0.0 && aouv.x < 1.0 && aouv.y < 1.0 ) sAOv = texture2D( uAOTex, aouv ).r;
	}
	float ambientOcclusion = sAOv * mix( 0.7, 1.0, sCav );
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	reflectedLight.directDiffuse *= mix( 0.65, 1.0, sCav ) * mix( 0.55, 1.0, sAOv );
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= mix( 1.0, sAOv, 0.7 );
	#endif
	{
		float dotNVao = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNVao, ambientOcclusion, material.roughness );
	}
`;

export function createSandMaterial( tex ) {

	const material = new THREE.MeshPhysicalMaterial( {
		color: 0xffffff,
		roughness: 0.9,
		metalness: 0,
		specularIntensity: 0.5, // loose grains shadow each other: weak grazing sheen on dry sand
		clearcoat: 1,
		clearcoatRoughness: 0.05
	} );

	return patchMaterial( material, 'rf-sand', ( shader ) => {

		Object.assign( shader.uniforms, sandAO, {
			uSandTex: { value: tex.sand },
			uMacroTex: { value: tex.macro },
			uFoamTex: { value: tex.foam },
			uWaterTex: { value: tex.water }
		} );

		let vs = shader.vertexShader;
		vs = inject( vs, 'common', 'varying vec3 vWPos;' );
		vs = inject( vs, 'fog_vertex', 'vWPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;' );
		shader.vertexShader = vs;

		let fs = shader.fragmentShader;
		fs = inject( fs, 'common', SAND_PARS );
		fs = inject( fs, 'metalnessmap_fragment', SAND_SURFACE );
		fs = inject( fs, 'normal_fragment_maps', SAND_NORMAL );
		fs = inject( fs, 'clearcoat_normal_fragment_maps', FILM_NORMAL );
		fs = inject( fs, 'lights_physical_fragment', SAND_LAYERS );
		fs = inject( fs, 'lights_fragment_begin', SAND_GLINT );
		fs = inject( fs, 'lights_fragment_maps', SAND_REFLECT );
		fs = inject( fs, 'aomap_fragment', SAND_AO, 'replace' );
		shader.fragmentShader = fs;

	} );

}

export function buildBeach( terrain, tex ) {

	const x1 = terrain.x0 + terrain.W * terrain.cell, z1 = terrain.z0 + terrain.H * terrain.cell;
	const xs = axisCoords( terrain.x0 + 1, x1 - 1, - 30, 235, 0.75, 14, 45 );
	const zs = axisCoords( terrain.z0 + 1, z1 - 1, - 95, 26, 0.5, 14, 35 );
	const geo = gridGeometry( xs, zs, ( x, z ) => terrain.heightAt( x, z, terrain.distAt( x, z ) ) );
	geo.computeVertexNormals();
	geo.computeBoundingSphere();

	const mesh = new THREE.Mesh( geo, createSandMaterial( tex ) );
	mesh.receiveShadow = true;
	mesh.name = 'beach';
	mesh.userData.stats = `${xs.length}×${zs.length}`;
	return mesh;

}
