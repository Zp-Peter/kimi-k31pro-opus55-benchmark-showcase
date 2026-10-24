import * as THREE from 'three';
import { NOISE } from '../glsl/noise.js';
import { patchMaterial, inject } from '../shared.js';

// One basalt shader for columns, cliffs, sea stacks and boulders: triplanar detail at two
// scales, weathered upper faces, moss and lichen, the wet splash zone with seaweed,
// guano streaks, columnar jointing (procedural where the geometry is too coarse) and
// per-vertex ambient occlusion.

const KINDS = {
	columns: { tile: 1 / 2.6, moss: 0.55, lichen: 0.6, guano: 0.0, weed: 0.0, columnar: false, joints: true, splash: false },
	cliff: { tile: 1 / 3.6, moss: 1.0, lichen: 0.8, guano: 0.55, weed: 1.0, columnar: true, joints: false, splash: true },
	stack: { tile: 1 / 3.4, moss: 0.75, lichen: 0.6, guano: 1.0, weed: 1.0, columnar: true, joints: false, splash: true },
	boulder: { tile: 1 / 1.8, moss: 0.25, lichen: 0.4, guano: 0.0, weed: 0.0, columnar: false, joints: false, splash: false, contact: true },
	mountain: { tile: 1 / 4.5, moss: 1.35, lichen: 0.5, guano: 0.0, weed: 0.0, columnar: false, joints: false, splash: false },
	// wave-polished beach pebbles: smooth, faintly glossy, a few grey and brown strays
	pebble: { tile: 1 / 0.7, moss: 0.0, lichen: 0.0, guano: 0.0, weed: 0.0, columnar: false, joints: false, splash: false, contact: true, smooth: true, normal: 0.3 }
};

const f = ( v ) => v.toFixed( 4 );

function surfaceGLSL( k ) {

	return /* glsl */`
	vec3 rP = vWPos;
	vec3 rN = normalize( vWNrm );
	float rDist = length( cameraPosition - rP );
	vec3 bw = pow( abs( rN ), vec3( 4.0 ) );
	bw /= ( bw.x + bw.y + bw.z );

	float ts = ${f( k.tile )};
	vec4 tX = texture2D( uRockTex, rP.zy * ts );
	vec4 tY = texture2D( uRockTex, rP.xz * ts );
	vec4 tZ = texture2D( uRockTex, rP.xy * ts );
	float ts2 = ts * 0.23;
	vec4 uX = texture2D( uRockTex, rP.zy * ts2 + 0.37 );
	vec4 uY = texture2D( uRockTex, rP.xz * ts2 + 0.37 );
	vec4 uZ = texture2D( uRockTex, rP.xy * ts2 + 0.37 );
	vec4 rMac = texture2D( uMacroTex, rP.zy / 23.0 ) * bw.x + texture2D( uMacroTex, rP.xz / 23.0 ) * bw.y + texture2D( uMacroTex, rP.xy / 23.0 ) * bw.z;

	float rCav = dot( vec3( tX.b, tY.b, tZ.b ), bw ) * 0.65 + dot( vec3( uX.b, uY.b, uZ.b ), bw ) * 0.35;
	float rAv = dot( vec3( tX.a, tY.a, tZ.a ), bw ) * 0.5 + dot( vec3( uX.a, uY.a, uZ.a ), bw ) * 0.5;

	// whiteout-blended triplanar normal
	float nS = ${f( k.normal ?? 1 )} * mix( 1.0, 0.55, smoothstep( 30.0, 220.0, rDist ) );
	vec3 nX = vec3( ( tX.xy * 2.0 - 1.0 ) * 0.7 + ( uX.xy * 2.0 - 1.0 ) * 0.5, 1.0 ) ;
	vec3 nY = vec3( ( tY.xy * 2.0 - 1.0 ) * 0.7 + ( uY.xy * 2.0 - 1.0 ) * 0.5, 1.0 );
	vec3 nZ = vec3( ( tZ.xy * 2.0 - 1.0 ) * 0.7 + ( uZ.xy * 2.0 - 1.0 ) * 0.5, 1.0 );
	nX.xy *= nS; nY.xy *= nS; nZ.xy *= nS;
	nX = vec3( nX.xy + rN.zy, nX.z * rN.x );
	nY = vec3( nY.xy + rN.xz, nY.z * rN.y );
	nZ = vec3( nZ.xy + rN.xy, nZ.z * rN.z );
	vec3 rNd = normalize( nX.zyx * bw.x + nY.xzy * bw.y + nZ.xyz * bw.z );

	float rUp = smoothstep( 0.45, 0.92, rN.y );
	float rVert = 1.0 - rUp;
	vec3 rAlb = vec3( 0.056, 0.057, 0.061 ) * ( 0.6 + 0.65 * rAv ) * mix( 0.45, 1.0, rCav );
	float rRough = mix( 0.9, 0.74, rAv );
	rAlb = mix( rAlb, rAlb * vec3( 1.5, 1.44, 1.34 ), rUp * 0.65 );
	float rGround = vRock.w;
	float rAbove = rP.y - rGround;

	${k.smooth ? /* glsl */`
	{
		float pv = fract( vRock.y * 13.1 );
		rAlb = vec3( 0.043, 0.044, 0.048 ) * ( 0.7 + 0.6 * pv ) * mix( 0.75, 1.0, rCav );
		rAlb = mix( rAlb, vec3( 0.085, 0.078, 0.07 ), step( 0.9, fract( vRock.y * 7.7 ) ) * 0.85 );
		rRough = mix( 0.36, 0.6, rAv * 0.7 + pv * 0.3 );
	}
	` : ''}

	${k.joints ? /* glsl */`
	{
		float cSeed = vRock.y;
		float sp = mix( 1.0, 2.7, fract( cSeed * 7.31 ) );
		float fj = fract( ( rP.y + cSeed * 13.7 + 0.07 * sin( rP.x * 2.3 + rP.z * 1.7 ) ) / sp );
		float jd = min( fj, 1.0 - fj ) * sp;
		float joint = ( 1.0 - smoothstep( 0.004, 0.022, jd ) ) * rVert * step( 0.3, fract( cSeed * 5.3 + floor( ( rP.y + cSeed * 13.7 ) / sp ) * 0.37 ) );
		rAlb *= ( 1.0 - 0.45 * joint ) * ( 0.84 + 0.32 * fract( cSeed * 3.17 ) );
		rNd = normalize( rNd + vec3( 0.0, ( fj < 0.5 ? 0.5 : - 0.5 ) * joint, 0.0 ) );
		rRough = mix( rRough, 0.95, joint );
		// polished, darker lower steps; dusty tops of the tall columns
		rAlb *= mix( 0.8, 1.0, smoothstep( 0.5, 3.5, rAbove ) );
	}
	` : ''}

	${k.columnar ? /* glsl */`
	{
		vec2 p2 = rP.xz / 0.9;
		vec2 ci = floor( p2 ); vec2 cf = fract( p2 );
		float F1 = 9.0, F2 = 9.0, cid = 0.0; vec2 cr = vec2( 0.0 );
		for ( int y = - 1; y <= 1; y ++ ) for ( int x = - 1; x <= 1; x ++ ) {
			vec2 g = vec2( float( x ), float( y ) );
			vec2 o = hash22( ci + g + 31.0 ) * 0.8 + 0.1;
			vec2 r = g + o - cf; float dd = dot( r, r );
			if ( dd < F1 ) { F2 = F1; F1 = dd; cid = hash12( ci + g + 7.0 ); cr = r; } else if ( dd < F2 ) { F2 = dd; }
		}
		F1 = sqrt( F1 ); F2 = sqrt( F2 );
		float colMask = smoothstep( 0.25, 0.6, rMac.b + 0.25 ) * ( 1.0 - smoothstep( 40.0, 90.0, rP.y + rMac.r * 40.0 ) );
		float seam = ( 1.0 - smoothstep( 0.0, 0.07, F2 - F1 ) ) * colMask;
		rAlb *= 1.0 - 0.55 * seam * rVert;
		vec2 bulge = - normalize( cr + 1e-4 ) * smoothstep( 0.18, 0.5, F1 ) * colMask * rVert;
		rNd = normalize( rNd + vec3( bulge.x, 0.0, bulge.y ) * 0.55 );
		float sp = mix( 0.5, 1.2, cid );
		float fj = fract( rP.y / sp + cid * 9.0 );
		float joint = ( 1.0 - smoothstep( 0.008, 0.04, min( fj, 1.0 - fj ) * sp ) ) * colMask * rVert;
		rAlb *= 1.0 - 0.4 * joint;
		// reddish scoria / tuff horizons between the lava flows
		float band = smoothstep( 0.62, 0.8, fbm2( vec2( rP.y * 0.09, ( rP.x + rP.z ) * 0.004 ), 3 ) * 0.5 + 0.5 );
		rAlb = mix( rAlb, vec3( 0.085, 0.06, 0.048 ), band * 0.55 * rVert );
	}
	` : ''}

	// moss and pale lichen crusts on ledges and tops
	float rMoss = smoothstep( 0.52, 0.82, rN.y + ( rMac.r - 0.5 ) * 0.9 ) * ${f( k.moss )};
	${k.joints ? 'rMoss *= smoothstep( 3.0, 9.0, rAbove );' : 'rMoss *= smoothstep( 4.0, 14.0, rAbove + rMac.a * 6.0 );'}
	vec3 mossCol = mix( vec3( 0.032, 0.058, 0.016 ), vec3( 0.08, 0.088, 0.03 ), rMac.a );
	rAlb = mix( rAlb, mossCol, rMoss );
	rRough = mix( rRough, 0.96, rMoss );
	float rLichen = smoothstep( 0.6, 0.76, rMac.g + rAv * 0.22 ) * ${f( k.lichen )} * ( 1.0 - rMoss );
	rAlb = mix( rAlb, vec3( 0.12, 0.122, 0.1 ), rLichen * 0.6 );

	${k.guano > 0 ? /* glsl */`
	{
		float streak = vnoise( vec2( ( rP.x + rP.z ) * 0.42, rP.y * 0.045 ) ) * 0.65 + vnoise( vec2( ( rP.x - rP.z ) * 1.3, rP.y * 0.11 ) ) * 0.35;
		float guano = smoothstep( 0.62, 0.86, streak ) * smoothstep( 10.0, 32.0, rP.y ) * rVert * ${f( k.guano )};
		rAlb = mix( rAlb, vec3( 0.36, 0.35, 0.31 ), guano * 0.55 );
	}
	` : ''}

	${k.splash ? /* glsl */`
	{
		// sea-washed rock (ground below sea level) vs. cliff foot standing on the beach
		float onBeach = smoothstep( - 0.5, 1.5, rGround );
		float wetN = ( rMac.b - 0.5 ) * 2.5;
		float rWet = mix( 1.0 - smoothstep( 1.0, 7.0, rP.y + wetN ), 1.0 - smoothstep( 0.0, 1.3, rAbove ), onBeach );
		float rWeed = ( 1.0 - smoothstep( - 0.6, 1.5, rP.y + ( rMac.r - 0.5 ) * 1.4 ) ) * ${f( k.weed )} * ( 1.0 - onBeach );
		rAlb = mix( rAlb, vec3( 0.032, 0.027, 0.012 ), rWeed * 0.85 );
		rAlb *= mix( 1.0, 0.55, rWet );
		rRough = mix( rRough, 0.28, rWet * ( 1.0 - rWeed * 0.4 ) );
	}
	` : k.smooth ? '' : /* glsl */`
	{
		float rWet = 1.0 - smoothstep( 0.0, 1.3, rAbove );
		rAlb *= mix( 1.0, 0.65, rWet );
		rRough = mix( rRough, 0.5, rWet );
	}
	`}

	diffuseColor.rgb = rAlb;
	roughnessFactor = rRough;
`;

}

const NORMAL = /* glsl */`
	normal = normalize( ( viewMatrix * vec4( rNd, 0.0 ) ).xyz );
`;

const AO = ( k ) => /* glsl */`
	float rAO = vRock.x;
	${k.contact ? 'rAO *= mix( 0.3, 1.0, smoothstep( 0.0, vRock.z > 0.0 ? vRock.z : 0.35, rAbove ) );' : ''}
	float ambientOcclusion = rAO * mix( 0.5, 1.0, rCav );
	float rDirOcc = smoothstep( 0.02, 0.45, rAO ) * mix( 0.55, 1.0, rCav );
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	reflectedLight.directDiffuse *= rDirOcc;
	reflectedLight.directSpecular *= rDirOcc;
	{
		float dotNVao = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNVao, ambientOcclusion, material.roughness );
	}
`;

// aRock: x = ambient occlusion, y = seed, z = contact-shadow height (0: default), w = ground height under the vertex.
// Instanced meshes may supply it as an InstancedBufferAttribute (one value per instance).
export function createRockMaterial( tex, kind ) {

	const k = KINDS[ kind ];
	const material = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.85, metalness: 0 } );

	return patchMaterial( material, 'rf-rock-' + kind, ( shader ) => {

		shader.uniforms.uRockTex = { value: tex.rock };
		shader.uniforms.uMacroTex = { value: tex.macro };

		let vs = shader.vertexShader;
		vs = inject( vs, 'common', /* glsl */`
			attribute vec4 aRock;
			varying vec3 vWPos;
			varying vec3 vWNrm;
			varying vec4 vRock;
		` );
		vs = inject( vs, 'fog_vertex', /* glsl */`
			{
				vec4 rwp = vec4( transformed, 1.0 );
				vec3 rwn = objectNormal;
				#ifdef USE_INSTANCING
					rwp = instanceMatrix * rwp;
					rwn = mat3( instanceMatrix ) * rwn;
				#endif
				vWPos = ( modelMatrix * rwp ).xyz;
				vWNrm = normalize( mat3( modelMatrix ) * rwn );
				vRock = aRock;
			}
		` );
		shader.vertexShader = vs;

		let fs = shader.fragmentShader;
		fs = inject( fs, 'common', /* glsl */`
			${NOISE}
			uniform sampler2D uRockTex;
			uniform sampler2D uMacroTex;
			varying vec3 vWPos;
			varying vec3 vWNrm;
			varying vec4 vRock;
		` );
		fs = inject( fs, 'metalnessmap_fragment', surfaceGLSL( k ) );
		fs = inject( fs, 'normal_fragment_maps', NORMAL );
		fs = inject( fs, 'aomap_fragment', AO( k ), 'replace' );
		shader.fragmentShader = fs;

	} );

}

// Fill aRock for geometry that has no baked data: full visibility, random seed, ground 0
export function defaultRockAttribute( geo, ground = - 5 ) {

	const n = geo.attributes.position.count;
	const arr = new Float32Array( n * 4 );
	for ( let i = 0; i < n; i ++ ) { arr[ i * 4 ] = 1; arr[ i * 4 + 1 ] = 0.5; arr[ i * 4 + 3 ] = ground; }
	geo.setAttribute( 'aRock', new THREE.BufferAttribute( arr, 4 ) );

}
