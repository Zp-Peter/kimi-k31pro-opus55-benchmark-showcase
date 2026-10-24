import * as THREE from 'three';
import { LAYOUT } from '../config.js';
import { stackFootprint } from './terrainData.js';
import { makeSimplex2, mulberry32, fbm, smoothstep, clamp } from './jsnoise.js';
import { createRockMaterial } from './rock.js';
import { LAYER_REFLECT } from '../shared.js';

// Reynisdrangar: basalt sea stacks lofted from their waterline footprint. Each rises to a
// blade-like crest (two or three summits along it), leans a little, is fluted by the
// columnar jointing, carries lava-flow ledges for the seabirds and a wave-cut notch.

const TAU = Math.PI * 2;

function buildStack( st ) {

	const noise = makeSimplex2( st.seed * 31 + 5 );
	const noiseB = makeSimplex2( st.seed * 17 + 3 );
	const rand = mulberry32( st.seed * 977 );
	const N = 144;
	const yBot = - 9;
	const M = Math.ceil( ( st.h - yBot ) / 0.7 );
	const leanA = rand() * TAU, lean = ( 0.03 + 0.06 * rand() ) * st.h;

	// summits: the rock reaches highest toward these directions, giving a crest instead of a dome
	const a0 = st.rot + ( rand() - 0.5 ) * 0.6;
	const peaks = [
		{ a: a0, h: 1, w: 0.5 + 0.2 * rand() },
		{ a: a0 + Math.PI + ( rand() - 0.5 ) * 0.8, h: 0.72 + 0.18 * rand(), w: 0.4 + 0.25 * rand() }
	];
	if ( st.h > 30 ) peaks.push( { a: a0 + ( rand() < 0.5 ? 1 : - 1 ) * ( 1.3 + rand() * 0.5 ), h: 0.6 + 0.15 * rand(), w: 0.3 + 0.2 * rand() } );
	if ( st.h > 40 ) peaks.push( { a: a0 + ( rand() - 0.5 ) * 1.4, h: 0.78 + 0.12 * rand(), w: 0.18 + 0.1 * rand() } );
	const topAt = ( th ) => {
		let m = 0.42;
		for ( const p of peaks ) {
			let d = ( ( th - p.a ) % TAU + TAU ) % TAU;
			d = Math.min( d, TAU - d );
			m = Math.max( m, p.h * Math.exp( - ( ( d / p.w ) ** 2 ) ) );
		}
		// a broken skyline: columns snapped off at different heights
		const c = Math.cos( th ), s = Math.sin( th );
		const jag = 0.11 * noise( c * 2.2 + 7.7, s * 2.2 ) + 0.06 * noiseB( c * 5.5, s * 5.5 + 3.3 );
		return st.h * Math.min( 1, m * ( 1 + jag ) );
	};

	const nv = ( M + 1 ) * N + 1;
	const pos = new Float32Array( nv * 3 );
	const rock = new Float32Array( nv * 4 );
	const footprint = [], tops = [];
	for ( let i = 0; i < N; i ++ ) {
		footprint.push( stackFootprint( st, i / N * TAU ) );
		tops.push( topAt( i / N * TAU ) );
	}

	for ( let r = 0; r <= M; r ++ ) {

		const y = yBot + ( st.h - yBot ) * Math.pow( r / M, 1.06 );
		const tAxis = clamp( y / st.h, 0, 1 );
		const cx = st.x + Math.cos( leanA ) * lean * tAxis * tAxis, cz = st.z + Math.sin( leanA ) * lean * tAxis * tAxis;
		const layer = y / 6.2 + 0.4 * noise( st.seed * 0.1, y * 0.02 );
		const ledge = smoothstep( 0.72, 0.95, layer - Math.floor( layer ) );

		for ( let i = 0; i < N; i ++ ) {

			const th = i / N * TAU;
			const dx = Math.cos( th ), dz = Math.sin( th );
			const rb = footprint[ i ];
			const t = clamp( y / tops[ i ], 0, 1 );
			let prof = y < 0 ? 1 + 0.045 * - y : Math.pow( Math.max( 0, 1 - Math.pow( t, 3.2 ) ), 0.42 );
			prof *= 1 - 0.1 * Math.exp( - ( ( ( y - 1.3 ) / 1.3 ) ** 2 ) );
			prof *= 1 + 0.06 * ledge;
			const bx = dx * rb, bz = dz * rb;
			const rr = rb * prof;
			// big lumps, vertical flutes of the columnar jointing, fine roughness
			const lumps = fbm( noise, bx * 0.07 + 3.1, y * 0.025 + bz * 0.07, 3 );
			const flute = 1 - Math.abs( noiseB( ( bx - bz ) * 0.42, y * 0.028 ) );
			const fine = noise( bx * 0.6 - bz * 0.4, y * 0.45 );
			const size = Math.min( 1, rr / 6 );
			const disp = ( 2.6 * lumps + 1.1 * ( flute * flute - 0.45 ) ) * size + 0.15 * fine * Math.min( 1, rr / 1.5 );
			const R = Math.max( rr + disp, 0.03 );

			const k = r * N + i;
			pos[ k * 3 ] = cx + dx * R;
			pos[ k * 3 + 1 ] = y + 0.35 * fine * size;
			pos[ k * 3 + 2 ] = cz + dz * R;

			let ao = clamp( 0.72 + 0.5 * lumps + 0.3 * ( flute - 0.6 ), 0.22, 1 );
			ao *= 1 - 0.35 * Math.exp( - ( ( ( y - 1.3 ) / 1.1 ) ** 2 ) );
			ao *= 0.75 + 0.25 * smoothstep( - 2, 3, y );
			ao *= 1 - 0.25 * smoothstep( 0.8, 1.0, layer - Math.floor( layer ) ) * ( 1 - ledge );
			rock[ k * 4 ] = ao;
			rock[ k * 4 + 1 ] = rand();
			rock[ k * 4 + 3 ] = - 5;

		}

	}

	// apex above the main summit
	const apex = ( M + 1 ) * N;
	pos[ apex * 3 ] = st.x + Math.cos( leanA ) * lean; pos[ apex * 3 + 1 ] = st.h + 0.4; pos[ apex * 3 + 2 ] = st.z + Math.sin( leanA ) * lean;
	rock[ apex * 4 ] = 1; rock[ apex * 4 + 3 ] = - 5;

	const idx = [];
	for ( let r = 0; r < M; r ++ ) {
		for ( let i = 0; i < N; i ++ ) {
			const a = r * N + i, b = r * N + ( i + 1 ) % N, c = a + N, d = b + N;
			idx.push( a, c, b, b, c, d );
		}
	}
	for ( let i = 0; i < N; i ++ ) idx.push( M * N + i, apex, M * N + ( i + 1 ) % N );

	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	geo.setAttribute( 'aRock', new THREE.BufferAttribute( rock, 4 ) );
	geo.setIndex( idx );
	geo.computeVertexNormals();
	geo.computeBoundingSphere();
	return geo;

}

export function buildStacks( terrain, tex ) {

	const group = new THREE.Group();
	group.name = 'reynisdrangar';
	const material = createRockMaterial( tex, 'stack' );
	for ( const st of LAYOUT.stacks ) {
		const mesh = new THREE.Mesh( buildStack( st ), material );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		mesh.layers.enable( LAYER_REFLECT );
		group.add( mesh );
	}
	return group;

}
