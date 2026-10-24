import * as THREE from 'three';
import { LAYOUT } from '../config.js';
import { axisCoords } from './beach.js';
import { makeSimplex2, fbm, smoothstep, clamp, lerp } from './jsnoise.js';
import { createRockMaterial } from './rock.js';
import { LAYER_REFLECT } from '../shared.js';

const noise = makeSimplex2( 101 );
const noiseB = makeSimplex2( 202 );

// Rock face of Reynisfjall lofted along the base line: buttresses, lava-flow ledges, a talus
// lean at the foot, a recess behind the basalt columns and the Hálsanefshellir cave.
// Its top rows curl back under the edge of the grassy mountain surface.
function buildFace( terrain ) {

	const L = terrain.curveLength;
	const C = LAYOUT.columns;
	const us = axisCoords( 0, L, 380, 820, 0.9, 6, 60 );
	const ROWS = 84;
	// rows that curl back over the edge, just under the mountain surface (see buildTop)
	const LIP = [ [ 0.6, 0.42 ], [ 1.8, 1.72 ], [ 4.0, 3.45 ] ];
	const nv = ROWS + 1 + LIP.length;
	const nu = us.length;

	const pos = new Float32Array( nu * nv * 3 );
	const rock = new Float32Array( nu * nv * 4 );

	for ( let i = 0; i < nu; i ++ ) {

		const u = us[ i ];
		const { p, n } = terrain.frameAt( u );
		const ground = terrain.groundAt( p.x, p.z );
		const yBase = ground - 4;
		const Hc = terrain.cliffTop( u );
		const inCols = smoothstep( C.from - 6, C.from + 4, u ) * ( 1 - smoothstep( C.to - 4, C.to + 6, u ) );
		const cu = ( u - C.caveAt ) / ( C.caveWidth * 0.5 );
		const seed = noise( u * 0.37, 9.1 ) * 0.5 + 0.5;

		for ( let r = 0; r <= ROWS; r ++ ) {

			const t = r / ROWS;
			const y = yBase + ( Hc - yBase ) * t;
			const above = y - ground;

			// buttresses and narrow gullies (ridged noise stretched vertically), bulges, flow ledges, detail
			const rid = 1 - Math.abs( noise( u * 0.021, y * 0.0045 + 1.7 ) );
			const gul = Math.pow( 1 - Math.abs( noiseB( u * 0.047 + 3.3, y * 0.006 ) ), 8 );
			let out = 1.4 + 6.5 * rid * rid * rid - 3.4 * gul;
			out += 2.4 * fbm( noise, u * 0.03, y * 0.03, 3 ) + 0.9 * fbm( noiseB, u * 0.11, y * 0.09, 2 );
			const layer = y / 8.5 + 0.35 * noise( u * 0.01, 3.3 );
			out += 0.9 * smoothstep( 0.72, 0.94, layer - Math.floor( layer ) );
			out += Math.max( 0, 7 - above ) * 0.3;
			out = Math.max( out, 0 ) * ( 1 - smoothstep( 0.84, 1.0, t ) );

			let ao = ( 1 - 0.25 * smoothstep( 3, 0, above ) ) * ( 1 - 0.4 * gul ) * ( 0.8 + 0.2 * rid );
			const recess = inCols * ( 1 - smoothstep( 22, 27, above ) );
			out = lerp( out, - 1.6, recess );
			ao *= 1 - 0.35 * recess;

			if ( Math.abs( cu ) < 1.35 ) {
				const arch = C.caveHeight * Math.sqrt( Math.max( 0, 1 - cu * cu ) );
				const cave = smoothstep( arch + 0.6, arch - 1.6, above ) * smoothstep( 1.35, 0.85, Math.abs( cu ) );
				const back = Math.pow( cave, 0.7 );
				out = lerp( out, - C.caveDepth * ( 0.75 + 0.25 * Math.cos( cu * 1.4 ) ), back );
				ao *= 1 - 0.9 * back;
			}

			const k = ( r * nu + i );
			pos[ k * 3 ] = p.x + n.x * out;
			pos[ k * 3 + 1 ] = y;
			pos[ k * 3 + 2 ] = p.z + n.z * out;
			rock[ k * 4 ] = clamp( ao, 0.04, 1 );
			rock[ k * 4 + 1 ] = seed;
			rock[ k * 4 + 3 ] = ground;

		}

		for ( let l = 0; l < LIP.length; l ++ ) {
			const [ inset, dh ] = LIP[ l ];
			const k = ( ( ROWS + 1 + l ) * nu + i );
			pos[ k * 3 ] = p.x - n.x * inset;
			pos[ k * 3 + 1 ] = Hc + dh;
			pos[ k * 3 + 2 ] = p.z - n.z * inset;
			rock[ k * 4 ] = 1;
			rock[ k * 4 + 1 ] = seed;
			rock[ k * 4 + 3 ] = ground;
		}

	}

	const idx = [];
	for ( let r = 0; r < nv - 1; r ++ ) {
		for ( let i = 0; i < nu - 1; i ++ ) {
			const a = r * nu + i, b = a + 1, c = a + nu, d = c + 1;
			idx.push( a, b, c, b, d, c );
		}
	}

	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	geo.setAttribute( 'aRock', new THREE.BufferAttribute( rock, 4 ) );
	geo.setIndex( idx );
	geo.computeVertexNormals();
	geo.computeBoundingSphere();
	return geo;

}

// Grassy slopes and plateau: a height field over the mountain mask, dense near the beach
function buildTop( terrain ) {

	const x1 = terrain.x0 + terrain.W * terrain.cell;
	const xs = axisCoords( - 140, x1 - 1, 70, 340, 2.0, 18, 70 );
	const zs = axisCoords( terrain.z0 + 1, 130, - 160, 110, 2.0, 18, 70 );
	const nx = xs.length, nz = zs.length;
	const pos = new Float32Array( nx * nz * 3 );
	const rock = new Float32Array( nx * nz * 4 );
	const usable = new Uint8Array( nx * nz );
	const core = new Uint8Array( nx * nz );
	const EDGE = 0.6; // the surface starts this far inside the base line, where the face's lip tucks under it

	for ( let j = 0; j < nz; j ++ ) {
		for ( let i = 0; i < nx; i ++ ) {
			let x = xs[ i ], z = zs[ j ];
			const k = j * nx + i;
			let di = terrain.insideAt( x, z );
			core[ k ] = di >= EDGE ? 1 : 0;
			if ( di < EDGE && di > - 24 ) {
				// slide grid points near the edge onto the inset line, so the surface meets the lip smoothly
				for ( let it = 0; it < 4; it ++ ) {
					const e = 0.75;
					const gx = ( terrain.insideAt( x + e, z ) - terrain.insideAt( x - e, z ) ) / ( 2 * e );
					const gz = ( terrain.insideAt( x, z + e ) - terrain.insideAt( x, z - e ) ) / ( 2 * e );
					const g2 = gx * gx + gz * gz;
					if ( g2 < 0.2 ) break;
					const s = ( EDGE - di ) / g2;
					x += gx * s; z += gz * s;
					di = terrain.insideAt( x, z );
					if ( Math.abs( di - EDGE ) < 0.05 ) break;
				}
			}
			usable[ k ] = di > EDGE - 0.35 ? 1 : 0;
			const h = usable[ k ] ? terrain.mountainHeight( x, z ) : 0;
			pos[ k * 3 ] = x; pos[ k * 3 + 1 ] = h; pos[ k * 3 + 2 ] = z;
			rock[ k * 4 ] = 1; rock[ k * 4 + 1 ] = 0.5; rock[ k * 4 + 3 ] = - 100;
		}
	}

	const idx = [];
	for ( let j = 0; j < nz - 1; j ++ ) {
		for ( let i = 0; i < nx - 1; i ++ ) {
			const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
			if ( usable[ a ] && usable[ b ] && usable[ c ] && usable[ d ] && ( core[ a ] || core[ b ] || core[ c ] || core[ d ] ) ) idx.push( a, c, b, b, c, d );
		}
	}

	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	geo.setAttribute( 'aRock', new THREE.BufferAttribute( rock, 4 ) );
	geo.setIndex( idx );
	geo.computeVertexNormals();
	geo.computeBoundingSphere();
	return geo;

}

export function buildCliff( terrain, tex ) {

	const group = new THREE.Group();
	group.name = 'reynisfjall';

	const face = new THREE.Mesh( buildFace( terrain ), createRockMaterial( tex, 'cliff' ) );
	const top = new THREE.Mesh( buildTop( terrain ), createRockMaterial( tex, 'mountain' ) );
	for ( const m of [ face, top ] ) {
		m.castShadow = true;
		m.receiveShadow = true;
		m.layers.enable( LAYER_REFLECT );
		group.add( m );
	}
	return group;

}
