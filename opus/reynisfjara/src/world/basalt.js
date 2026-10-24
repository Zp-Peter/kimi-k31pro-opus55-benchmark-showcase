import * as THREE from 'three';
import { LAYOUT } from '../config.js';
import { makeSimplex2, mulberry32, smoothstep } from './jsnoise.js';
import { createRockMaterial } from './rock.js';
import { LAYER_REFLECT } from '../shared.js';

// Gardar: the stepped formation of hexagonal basalt columns at the foot of Reynisfjall.
// Sites on a jittered hex lattice are turned into Voronoi cells (mostly 5-7 sided, like
// real cooling joints), shrunk to leave narrow joints, chamfered, bevelled and extruded.
// Side faces are split at neighbour heights so per-vertex AO darkens the deep joints.

const noise = makeSimplex2( 303 );

function columnHeight( u, b, r ) {

	const C = LAYOUT.columns;
	const uc = ( C.from + C.to ) / 2, hw = ( C.to - C.from ) / 2;
	const x = ( u - uc ) / hw;
	if ( Math.abs( x ) > 1.18 ) return 0;
	const wallH = 18 + 5 * noise( u * 0.05, 1.3 ) + 3 * noise( u * 0.17, 2.1 );
	const sideFall = smoothstep( 1.18, 0.82, Math.abs( x ) );
	if ( b < 1.2 ) return wallH * ( 0.45 + 0.55 * sideFall ) * ( 0.9 + 0.18 * r );
	const bmax = 2.5 + 11.5 * Math.pow( Math.max( 0, 1 - x * x ), 0.6 );
	const t = ( b - 1.2 ) / ( bmax - 1.2 );
	if ( t >= 1 ) return ( r < 0.22 && t < 1.6 ) ? 0.12 + r * 1.6 : 0;
	let h = wallH * 0.72 * Math.pow( 1 - t, 1.3 ) * sideFall + 0.5 * noise( u * 0.35, b * 0.35 );
	// irregular staircase: quantised steps, each column a little off its step
	const step = 1.15;
	const r2 = ( r * 7.13 ) % 1;
	h = Math.floor( h / step + r * 0.8 ) * step + 0.2 + ( r2 - 0.5 ) * 0.55;
	return Math.max( h, 0.15 );

}

// Sutherland–Hodgman clip of a convex polygon against the half plane dot(p - m, d) <= 0
function clipPoly( poly, mx, my, dx, dy ) {

	const out = [];
	const n = poly.length;
	for ( let k = 0; k < n; k ++ ) {
		const A = poly[ k ], B = poly[ ( k + 1 ) % n ];
		const da = ( A[ 0 ] - mx ) * dx + ( A[ 1 ] - my ) * dy;
		const db = ( B[ 0 ] - mx ) * dx + ( B[ 1 ] - my ) * dy;
		if ( da <= 0 ) out.push( A );
		if ( ( da <= 0 ) !== ( db <= 0 ) ) {
			const t = da / ( da - db );
			out.push( [ A[ 0 ] + ( B[ 0 ] - A[ 0 ] ) * t, A[ 1 ] + ( B[ 1 ] - A[ 1 ] ) * t ] );
		}
	}
	return out;

}

class Builder {

	constructor() { this.pos = []; this.nrm = []; this.rock = []; this.idx = []; this.count = 0; }

	vert( x, y, z, nx, ny, nz, ao, seed, ground ) {
		this.pos.push( x, y, z ); this.nrm.push( nx, ny, nz ); this.rock.push( ao, seed, 0, ground );
		return this.count ++;
	}

	tri( a, b, c ) { this.idx.push( a, b, c ); }

	geometry() {
		const g = new THREE.BufferGeometry();
		g.setAttribute( 'position', new THREE.Float32BufferAttribute( this.pos, 3 ) );
		g.setAttribute( 'normal', new THREE.Float32BufferAttribute( this.nrm, 3 ) );
		g.setAttribute( 'aRock', new THREE.Float32BufferAttribute( this.rock, 4 ) );
		g.setIndex( this.idx );
		g.computeBoundingSphere();
		return g;
	}

}

export function buildColumns( terrain, tex ) {

	const C = LAYOUT.columns;
	const rand = mulberry32( 4242 );
	const a = 0.82;
	const u0 = C.from - 5, u1 = C.to + 5, b0 = - 2.3, b1 = 15.5;

	// frame lookup along the cliff
	const frames = [];
	const fStep = 0.25;
	for ( let u = u0 - 2; u <= u1 + 2; u += fStep ) frames.push( terrain.frameAt( u ) );
	const toWorld = ( u, b ) => {
		const f = ( u - ( u0 - 2 ) ) / fStep;
		const i = Math.max( 0, Math.min( frames.length - 2, Math.floor( f ) ) );
		const t = f - i;
		const A = frames[ i ], B = frames[ i + 1 ];
		const px = A.p.x + ( B.p.x - A.p.x ) * t, pz = A.p.z + ( B.p.z - A.p.z ) * t;
		const nx = A.n.x + ( B.n.x - A.n.x ) * t, nz = A.n.z + ( B.n.z - A.n.z ) * t;
		return [ px + nx * b, pz + nz * b ];
	};

	// jittered hex lattice in (u, b)
	const sites = [];
	const rowH = a * Math.sqrt( 3 ) / 2;
	for ( let r = 0, b = b0; b <= b1; r ++, b += rowH ) {
		for ( let u = u0 + ( r % 2 ) * a * 0.5; u <= u1; u += a ) {
			const su = u + ( rand() - 0.5 ) * a * 0.56;
			const sb = b + ( rand() - 0.5 ) * a * 0.56;
			sites.push( { u: su, b: sb, r: rand(), h: 0 } );
		}
	}

	// spatial hash for neighbour queries
	const cs = a * 1.2;
	const grid = new Map();
	const key = ( i, j ) => i * 73856093 ^ j * 19349663;
	sites.forEach( ( s, i ) => {
		const k = key( Math.floor( s.u / cs ), Math.floor( s.b / cs ) );
		if ( ! grid.has( k ) ) grid.set( k, [] );
		grid.get( k ).push( i );
	} );

	for ( const s of sites ) s.h = columnHeight( s.u, s.b, s.r );

	const cells = [];
	for ( let i = 0; i < sites.length; i ++ ) {
		const s = sites[ i ];
		if ( s.h <= 0 ) continue;
		const R = a * 1.6;
		let poly = [ [ s.u - R, s.b - R ], [ s.u + R, s.b - R ], [ s.u + R, s.b + R ], [ s.u - R, s.b + R ] ];
		const nbs = [];
		const ci = Math.floor( s.u / cs ), cj = Math.floor( s.b / cs );
		for ( let dj = - 2; dj <= 2; dj ++ ) for ( let di = - 2; di <= 2; di ++ ) {
			const list = grid.get( key( ci + di, cj + dj ) );
			if ( ! list ) continue;
			for ( const j of list ) {
				if ( j === i ) continue;
				const o = sites[ j ];
				const dx = o.u - s.u, db = o.b - s.b;
				if ( dx * dx + db * db > ( a * 2.4 ) ** 2 ) continue;
				poly = clipPoly( poly, ( s.u + o.u ) / 2, ( s.b + o.b ) / 2, dx, db );
				nbs.push( j );
			}
		}
		if ( poly.length < 3 ) continue;
		// label each edge with the neighbour whose bisector it lies on
		const labels = poly.map( ( A, k ) => {
			const B = poly[ ( k + 1 ) % poly.length ];
			const mx = ( A[ 0 ] + B[ 0 ] ) / 2, my = ( A[ 1 ] + B[ 1 ] ) / 2;
			let best = - 1, bd = 1e-3;
			for ( const j of nbs ) {
				const o = sites[ j ];
				const dx = o.u - s.u, db = o.b - s.b, L = Math.hypot( dx, db );
				const dist = Math.abs( ( mx - ( s.u + o.u ) / 2 ) * dx + ( my - ( s.b + o.b ) / 2 ) * db ) / L;
				if ( dist < bd ) { bd = dist; best = j; }
			}
			return best;
		} );
		cells.push( { i, poly, labels } );
	}

	const geoB = new Builder();
	const footprints = [];

	for ( const cell of cells ) {

		const s = sites[ cell.i ];
		const world = cell.poly.map( ( [ u, b ] ) => toWorld( u, b ) );
		let cx = 0, cz = 0;
		for ( const w of world ) { cx += w[ 0 ]; cz += w[ 1 ]; }
		cx /= world.length; cz /= world.length;
		const ground = terrain.groundAt( cx, cz );
		const top = ground + s.h;
		const base = ground - 1.4;
		const seed = s.r;
		footprints.push( { x: cx, z: cz, r: a * 0.55, h: s.h } );

		// joints: shrink toward the centroid
		const gap = 0.022 + 0.02 * smoothstep( 4, 0, s.h );
		const ring0 = world.map( ( [ x, z ] ) => {
			const dx = x - cx, dz = z - cz, L = Math.hypot( dx, dz );
			const f = Math.max( 0.2, 1 - gap / L );
			return [ cx + dx * f, cz + dz * f ];
		} );
		const n = ring0.length;
		const faceN = [];
		for ( let k = 0; k < n; k ++ ) {
			const A = ring0[ k ], B = ring0[ ( k + 1 ) % n ];
			const ex = B[ 0 ] - A[ 0 ], ez = B[ 1 ] - A[ 1 ], L = Math.hypot( ex, ez ) || 1;
			let nx = ez / L, nz = - ex / L;
			const mx = ( A[ 0 ] + B[ 0 ] ) / 2 - cx, mz = ( A[ 1 ] + B[ 1 ] ) / 2 - cz;
			if ( nx * mx + nz * mz < 0 ) { nx = - nx; nz = - nz; }
			faceN.push( [ nx, nz ] );
		}
		// winding: make ring counter-clockwise seen from above (+Y) so side quads face outward
		let area = 0;
		for ( let k = 0; k < n; k ++ ) {
			const A = ring0[ k ], B = ring0[ ( k + 1 ) % n ];
			area += A[ 0 ] * B[ 1 ] - B[ 0 ] * A[ 1 ];
		}
		const ccw = area < 0; // in x/z with +Y up, negative shoelace (x,z) means CCW from above

		// chamfered ring: two points per corner; each ring point belongs to one face (normal + neighbour)
		const ch = 0.045 + 0.07 * smoothstep( 3, 0, s.h );
		const ring = [];
		for ( let k = 0; k < n; k ++ ) {
			const P = ring0[ k ], Pp = ring0[ ( k - 1 + n ) % n ], Pn = ring0[ ( k + 1 ) % n ];
			const lp = Math.hypot( Pp[ 0 ] - P[ 0 ], Pp[ 1 ] - P[ 1 ] ), ln = Math.hypot( Pn[ 0 ] - P[ 0 ], Pn[ 1 ] - P[ 1 ] );
			const tp = Math.min( ch / lp, 0.3 ), tn = Math.min( ch / ln, 0.3 );
			const prevFace = ( k - 1 + n ) % n;
			ring.push( { x: P[ 0 ] + ( Pp[ 0 ] - P[ 0 ] ) * tp, z: P[ 1 ] + ( Pp[ 1 ] - P[ 1 ] ) * tp, n: faceN[ prevFace ], nb: cell.labels[ prevFace ] } );
			ring.push( { x: P[ 0 ] + ( Pn[ 0 ] - P[ 0 ] ) * tn, z: P[ 1 ] + ( Pn[ 1 ] - P[ 1 ] ) * tn, n: faceN[ k ], nb: cell.labels[ k ] } );
		}
		const m = ring.length;

		// slightly tilted, weathered top
		const tiltX = ( rand() - 0.5 ) * 0.09, tiltZ = ( rand() - 0.5 ) * 0.09;
		const topAt = ( x, z ) => top + ( x - cx ) * tiltX + ( z - cz ) * tiltZ;
		const bevel = 0.035 + 0.04 * smoothstep( 3, 0, s.h );

		// vertical levels: neighbour tops create AO gradients down the joints
		const levels = new Set( [ base, top - bevel ] );
		for ( const rp of ring ) {
			const nh = rp.nb >= 0 && sites[ rp.nb ].h > 0 ? ground + sites[ rp.nb ].h : ground;
			for ( const y of [ nh, nh - 0.35, nh + 0.6 ] ) if ( y > base + 0.05 && y < top - bevel - 0.05 ) levels.add( Math.round( y * 10 ) / 10 );
		}
		const ys = [ ...levels ].sort( ( p, q ) => p - q );

		const aoAt = ( rp, y ) => {
			const nbH = rp.nb >= 0 && sites[ rp.nb ].h > 0 ? ground + sites[ rp.nb ].h : ground;
			const depth = nbH - y;
			if ( depth <= 0 ) return 0.6 + 0.4 * smoothstep( 0, 1.6, - depth );
			return Math.max( 0.035, 0.6 * Math.exp( - depth / 0.22 ) );
		};

		const sideIdx = [];
		for ( const y of ys ) {
			const row = [];
			for ( const rp of ring ) {
				const yy = y === top - bevel ? topAt( rp.x, rp.z ) - bevel : y;
				row.push( geoB.vert( rp.x, yy, rp.z, rp.n[ 0 ], 0, rp.n[ 1 ], aoAt( rp, yy ), seed, ground ) );
			}
			sideIdx.push( row );
		}
		for ( let l = 0; l < ys.length - 1; l ++ ) {
			for ( let k = 0; k < m; k ++ ) {
				const a0 = sideIdx[ l ][ k ], a1 = sideIdx[ l ][ ( k + 1 ) % m ];
				const b0v = sideIdx[ l + 1 ][ k ], b1v = sideIdx[ l + 1 ][ ( k + 1 ) % m ];
				if ( ccw ) { geoB.tri( a0, a1, b0v ); geoB.tri( a1, b1v, b0v ); } else { geoB.tri( a0, b0v, a1 ); geoB.tri( a1, b0v, b1v ); }
			}
		}

		// bevel: outer ring (top - bevel) to inner ring (top), smooth normals rounding the edge
		const topAO = ( rp ) => {
			const nbH = rp.nb >= 0 && sites[ rp.nb ].h > 0 ? sites[ rp.nb ].h : 0;
			const dh = nbH - s.h;
			return dh > 0 ? 0.95 - 0.55 * Math.min( 1, dh / ( dh + 0.7 ) ) : 0.97;
		};
		const outer = [], inner = [];
		for ( const rp of ring ) {
			const dx = rp.x - cx, dz = rp.z - cz, L = Math.hypot( dx, dz );
			const f = Math.max( 0.3, 1 - bevel / L );
			const ix = cx + dx * f, iz = cz + dz * f;
			const on = new THREE.Vector3( rp.n[ 0 ], 0.55, rp.n[ 1 ] ).normalize();
			const inn = new THREE.Vector3( rp.n[ 0 ] * 0.35 - tiltX, 1, rp.n[ 1 ] * 0.35 - tiltZ ).normalize();
			const ao = topAO( rp );
			outer.push( geoB.vert( rp.x, topAt( rp.x, rp.z ) - bevel, rp.z, on.x, on.y, on.z, ao * 0.95, seed, ground ) );
			inner.push( geoB.vert( ix, topAt( ix, iz ), iz, inn.x, inn.y, inn.z, ao, seed, ground ) );
		}
		for ( let k = 0; k < m; k ++ ) {
			const o0 = outer[ k ], o1 = outer[ ( k + 1 ) % m ], i0 = inner[ k ], i1 = inner[ ( k + 1 ) % m ];
			if ( ccw ) { geoB.tri( o0, o1, i0 ); geoB.tri( o1, i1, i0 ); } else { geoB.tri( o0, i0, o1 ); geoB.tri( o1, i0, i1 ); }
		}
		const tn = new THREE.Vector3( - tiltX, 1, - tiltZ ).normalize();
		const c = geoB.vert( cx, topAt( cx, cz ) + 0.012, cz, tn.x, tn.y, tn.z, 0.98, seed, ground );
		for ( let k = 0; k < m; k ++ ) {
			const i0 = inner[ k ], i1 = inner[ ( k + 1 ) % m ];
			if ( ccw ) geoB.tri( i0, i1, c ); else geoB.tri( i0, c, i1 );
		}

	}

	const mesh = new THREE.Mesh( geoB.geometry(), createRockMaterial( tex, 'columns' ) );
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	mesh.layers.enable( LAYER_REFLECT );
	mesh.name = 'columns';
	mesh.userData.stats = `${cells.length} columns, ${geoB.idx.length / 3} tris`;
	mesh.userData.footprints = footprints;
	return mesh;

}
