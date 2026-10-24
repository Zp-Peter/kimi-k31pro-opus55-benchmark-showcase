import * as THREE from 'three';
import { LAYOUT } from '../config.js';
import { shoreZ, cuspShape } from '../glsl/shore.js';
import { makeSimplex2, fbm, smoothstep } from './jsnoise.js';

// CPU description of the ground: the Reynisfjall base line, a rock mask (mountain + sea
// stacks), a distance-to-rock field, and the beach/seabed height field. It is the single
// source of truth for meshes, scattering, the GPU height texture and camera collision.

const noise = makeSimplex2( 7 );
const noiseB = makeSimplex2( 19 );

export function stackFootprint( st, theta ) {
	// Elliptical, lumpy section of a sea stack at the waterline (also used by the mesh)
	const c = Math.cos( theta - st.rot ), s = Math.sin( theta - st.rot );
	const ell = 1 / Math.sqrt( ( c * c ) / ( st.e * st.e ) + s * s );
	const lump = 1 + 0.16 * noise( Math.cos( theta ) * 1.3 + st.seed, Math.sin( theta ) * 1.3 - st.seed ) +
		0.07 * noise( Math.cos( theta ) * 3.1 - st.seed, Math.sin( theta ) * 3.1 + st.seed * 0.5 );
	return st.r * ell * lump;
}

function bell( x, c, w ) {
	const t = ( x - c ) / w;
	return Math.exp( - t * t );
}

function beachProfile( d ) {
	if ( d < 0 ) {
		const s = - d;
		return - 0.105 * s / ( 1 + 0.0055 * s );
	}
	const fore = 0.105 * d;
	const back = 2.62 + 0.017 * ( d - 25 );
	const k = 1.5;
	const h = Math.max( k - Math.abs( fore - back ), 0 ) / k;
	return Math.min( fore, back ) - h * h * k * 0.25;
}

export class TerrainData {

	constructor() {

		const F = LAYOUT.field;
		this.x0 = F.x0; this.z0 = F.z0; this.cell = F.cell;
		this.W = Math.round( ( F.x1 - F.x0 ) / F.cell );
		this.H = Math.round( ( F.z1 - F.z0 ) / F.cell );

		this.curve = new THREE.CatmullRomCurve3(
			LAYOUT.cliffPoints.map( ( [ x, z ] ) => new THREE.Vector3( x, 0, z ) ), false, 'centripetal', 0.5 );
		this.curveLength = this.curve.getLength();
		this.stacks = LAYOUT.stacks;

	}

	build() {

		const { W, H } = this;
		this.buildMask();
		this.dist = distanceTransform( this.mask, W, H, this.cell );
		this.buildInside();

		const heights = new Float32Array( W * H );
		for ( let j = 0; j < H; j ++ ) {
			const z = this.z0 + ( j + 0.5 ) * this.cell;
			for ( let i = 0; i < W; i ++ ) {
				const x = this.x0 + ( i + 0.5 ) * this.cell;
				heights[ j * W + i ] = this.heightAt( x, z, this.dist[ j * W + i ] );
			}
		}
		this.heights = heights;
		this.texture = this.makeTexture();

	}

	buildMask() {

		const { W, H, x0, z0, cell } = this;
		const mask = new Uint8Array( W * H );

		// Mountain polygon: the cliff line closed far behind the mountain
		const pts = this.curve.getSpacedPoints( Math.ceil( this.curveLength / 2 ) ).map( ( p ) => [ p.x, p.z ] );
		const last = pts[ pts.length - 1 ], first = pts[ 0 ];
		pts.push( [ last[ 0 ], - 3000 ], [ first[ 0 ], - 3000 ] );

		const xs = [];
		for ( let j = 0; j < H; j ++ ) {
			const z = z0 + ( j + 0.5 ) * cell;
			xs.length = 0;
			for ( let k = 0, n = pts.length; k < n; k ++ ) {
				const a = pts[ k ], b = pts[ ( k + 1 ) % n ];
				if ( ( a[ 1 ] <= z && b[ 1 ] > z ) || ( b[ 1 ] <= z && a[ 1 ] > z ) ) {
					xs.push( a[ 0 ] + ( z - a[ 1 ] ) / ( b[ 1 ] - a[ 1 ] ) * ( b[ 0 ] - a[ 0 ] ) );
				}
			}
			xs.sort( ( p, q ) => p - q );
			for ( let k = 0; k + 1 < xs.length; k += 2 ) {
				const i0 = Math.max( 0, Math.ceil( ( xs[ k ] - x0 ) / cell - 0.5 ) );
				const i1 = Math.min( W - 1, Math.floor( ( xs[ k + 1 ] - x0 ) / cell - 0.5 ) );
				for ( let i = i0; i <= i1; i ++ ) mask[ j * W + i ] = 1;
			}
		}

		// Sea stacks
		for ( const st of this.stacks ) {
			const R = st.r * st.e * 1.4;
			const ja = Math.max( 0, Math.floor( ( st.z - R - z0 ) / cell ) ), jb = Math.min( H - 1, Math.ceil( ( st.z + R - z0 ) / cell ) );
			const ia = Math.max( 0, Math.floor( ( st.x - R - x0 ) / cell ) ), ib = Math.min( W - 1, Math.ceil( ( st.x + R - x0 ) / cell ) );
			for ( let j = ja; j <= jb; j ++ ) for ( let i = ia; i <= ib; i ++ ) {
				const dx = x0 + ( i + 0.5 ) * cell - st.x, dz = z0 + ( j + 0.5 ) * cell - st.z;
				const r = Math.hypot( dx, dz );
				if ( r < stackFootprint( st, Math.atan2( dz, dx ) ) ) mask[ j * W + i ] = 2;
			}
		}

		this.mask = mask;

	}

	// Exact ground height (beach + seabed + lowland). distRock: metres to the nearest rock.
	heightAt( x, z, distRock ) {

		const d = shoreZ( x ) - z; // inland distance
		let h = beachProfile( d );

		// beach cusps on the foreshore and a little micro relief
		h += 0.27 * cuspShape( x ) * bell( d, 10.5, 8 );
		h += 0.045 * noise( x * 0.11, z * 0.11 ) * bell( d, 9, 16 );

		// hummocky backshore, then the grassy lowland inland
		const back = smoothstep( 18, 46, d );
		if ( back > 0 ) h += back * ( 0.5 * fbm( noise, x * 0.022, z * 0.022, 4 ) + 0.22 * noiseB( x * 0.07, z * 0.07 ) );
		const low = smoothstep( 80, 210, d );
		if ( low > 0 ) h += low * ( 2.2 + 1.8 * fbm( noiseB, x * 0.0045, z * 0.0045, 3 ) );

		// talus apron at the foot of the cliffs, shoals around stacks
		if ( distRock !== undefined ) {
			if ( d > - 6 ) h += 3.4 * Math.exp( - distRock / 7.5 ) * smoothstep( - 6, 6, d );
			else h += 3.0 * Math.exp( - distRock / 14 );
		}

		// the seabed in deep water stays well below the swell troughs
		if ( d < - 40 ) h = Math.min( h, - 3.5 - ( - d - 40 ) * 0.01 );
		return h;

	}

	sampleGrid( arr, x, z ) {

		const fx = ( x - this.x0 ) / this.cell - 0.5, fz = ( z - this.z0 ) / this.cell - 0.5;
		const i = Math.max( 0, Math.min( this.W - 2, Math.floor( fx ) ) );
		const j = Math.max( 0, Math.min( this.H - 2, Math.floor( fz ) ) );
		const tx = Math.min( 1, Math.max( 0, fx - i ) ), tz = Math.min( 1, Math.max( 0, fz - j ) );
		const k = j * this.W + i;
		const a = arr[ k ], b = arr[ k + 1 ], c = arr[ k + this.W ], e = arr[ k + this.W + 1 ];
		return ( a * ( 1 - tx ) + b * tx ) * ( 1 - tz ) + ( c * ( 1 - tx ) + e * tx ) * tz;

	}

	distAt( x, z ) { return this.sampleGrid( this.dist, x, z ); }

	groundAt( x, z ) { return this.sampleGrid( this.heights, x, z ); }

	isRock( x, z ) {

		const i = Math.floor( ( x - this.x0 ) / this.cell ), j = Math.floor( ( z - this.z0 ) / this.cell );
		if ( i < 0 || j < 0 || i >= this.W || j >= this.H ) return false;
		return this.mask[ j * this.W + i ] > 0;

	}

	// Distance from the cliff line into the mountain, and the arc length of the nearest line point
	buildInside() {

		const { W, H, x0, z0, cell, mask } = this;
		const d = new Float32Array( W * H ).fill( 1e9 );
		const nu = new Float32Array( W * H ).fill( 0 );
		const n = Math.ceil( this.curveLength / 0.5 );
		const pts = this.curve.getSpacedPoints( n );
		for ( let s = 0; s <= n; s ++ ) {
			const p = pts[ s ], u = s / n * this.curveLength;
			const ci = Math.floor( ( p.x - x0 ) / cell ), cj = Math.floor( ( p.z - z0 ) / cell );
			for ( let dj = - 1; dj <= 1; dj ++ ) for ( let di = - 1; di <= 1; di ++ ) {
				const i = ci + di, j = cj + dj;
				if ( i < 0 || j < 0 || i >= W || j >= H ) continue;
				const k = j * W + i;
				if ( mask[ k ] !== 1 ) continue;
				const dd = Math.hypot( x0 + ( i + 0.5 ) * cell - p.x, z0 + ( j + 0.5 ) * cell - p.z );
				if ( dd < d[ k ] ) { d[ k ] = dd; nu[ k ] = u; }
			}
		}
		const a = cell, b = cell * Math.SQRT2;
		const relax = ( k, kn, w ) => {
			if ( mask[ kn ] === 1 && d[ kn ] + w < d[ k ] ) { d[ k ] = d[ kn ] + w; nu[ k ] = nu[ kn ]; }
		};
		for ( let j = 0; j < H; j ++ ) for ( let i = 0; i < W; i ++ ) {
			const k = j * W + i;
			if ( mask[ k ] !== 1 ) continue;
			if ( i > 0 ) relax( k, k - 1, a );
			if ( j > 0 ) {
				relax( k, k - W, a );
				if ( i > 0 ) relax( k, k - W - 1, b );
				if ( i < W - 1 ) relax( k, k - W + 1, b );
			}
		}
		for ( let j = H - 1; j >= 0; j -- ) for ( let i = W - 1; i >= 0; i -- ) {
			const k = j * W + i;
			if ( mask[ k ] !== 1 ) continue;
			if ( i < W - 1 ) relax( k, k + 1, a );
			if ( j < H - 1 ) {
				relax( k, k + W, a );
				if ( i < W - 1 ) relax( k, k + W + 1, b );
				if ( i > 0 ) relax( k, k + W - 1, b );
			}
		}
		for ( let k = 0; k < W * H; k ++ ) if ( mask[ k ] !== 1 ) d[ k ] = - this.dist[ k ];
		this.inside = d;
		this.nearestU = nu;

	}

	// Height of the rock cliff top along the base line (also the edge of the mountain surface)
	cliffTop( u ) {

		const L = this.curveLength;
		let h = 9 + 27 * smoothstep( 200, 450, u ) + 20 * smoothstep( 560, 760, u ) - 24 * smoothstep( L - 760, L - 420, u );
		h += 5 * noise( u * 0.011, 4.2 ) + 2.5 * noise( u * 0.04, 1.7 );
		return h;

	}

	nearestUAt( x, z ) {

		const i = Math.min( this.W - 1, Math.max( 0, Math.floor( ( x - this.x0 ) / this.cell ) ) );
		const j = Math.min( this.H - 1, Math.max( 0, Math.floor( ( z - this.z0 ) / this.cell ) ) );
		return this.nearestU[ j * this.W + i ];

	}

	insideAt( x, z ) { return this.sampleGrid( this.inside, x, z ); }

	// Grassy slopes and plateau of Reynisfjall above the cliff line
	mountainHeight( x, z ) {

		const di = Math.max( 0, this.insideAt( x, z ) );
		const u = this.nearestUAt( x, z );
		const Hc = this.cliffTop( u );
		const P = 150 + 35 * fbm( noiseB, x * 0.0021, z * 0.0021, 3 ) + 45 * smoothstep( - 150, - 650, z );
		const run = Math.max( P - Hc, 6 );
		const slope = 0.66;
		const a = di * slope, k = 22;
		const hh = Math.max( k - Math.abs( a - run ), 0 ) / k;
		let rise = Math.min( a, run ) - hh * hh * k * 0.25;
		rise += 1.2 * smoothstep( 0, 3, di );
		const g = 1 - Math.abs( noise( u * 0.03, di * 0.007 ) );
		const crestDi = run / slope;
		const gully = g * g * g * 11 * smoothstep( 6, 40, di ) * ( 1 - smoothstep( crestDi * 0.8, crestDi * 1.25, di ) );
		const lumps = 3 * fbm( noise, x * 0.02, z * 0.02, 3 ) * smoothstep( 10, 60, di );
		return Hc + rise - gully + lumps;

	}

	makeTexture() {

		const { W, H } = this;
		const data = new Uint16Array( W * H * 2 );
		for ( let k = 0; k < W * H; k ++ ) {
			data[ k * 2 ] = THREE.DataUtils.toHalfFloat( this.heights[ k ] );
			data[ k * 2 + 1 ] = THREE.DataUtils.toHalfFloat( Math.min( this.dist[ k ], 400 ) );
		}
		const tex = new THREE.DataTexture( data, W, H, THREE.RGFormat, THREE.HalfFloatType );
		tex.minFilter = THREE.LinearFilter;
		tex.magFilter = THREE.LinearFilter;
		tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
		tex.needsUpdate = true;
		return tex;

	}

	get bounds() {

		return new THREE.Vector4( this.x0, this.z0, this.W * this.cell, this.H * this.cell );

	}

	// Frame of the cliff line at arc length u (metres): point, unit tangent, outward normal (away from the mountain)
	frameAt( u ) {

		const t = THREE.MathUtils.clamp( u / this.curveLength, 0, 1 );
		const p = this.curve.getPointAt( t );
		const tan = this.curve.getTangentAt( t );
		const n = new THREE.Vector3( - tan.z, 0, tan.x ); // the beach / sea side of the line
		return { p, tan, n };

	}

}

// Two-pass chamfer distance transform (metres to the nearest masked cell)
function distanceTransform( mask, W, H, cell ) {

	const INF = 1e9;
	const d = new Float32Array( W * H );
	for ( let k = 0; k < W * H; k ++ ) d[ k ] = mask[ k ] ? 0 : INF;
	const a = cell, b = cell * Math.SQRT2;
	for ( let j = 0; j < H; j ++ ) {
		for ( let i = 0; i < W; i ++ ) {
			const k = j * W + i;
			let v = d[ k ];
			if ( v === 0 ) continue;
			if ( i > 0 ) v = Math.min( v, d[ k - 1 ] + a );
			if ( j > 0 ) {
				v = Math.min( v, d[ k - W ] + a );
				if ( i > 0 ) v = Math.min( v, d[ k - W - 1 ] + b );
				if ( i < W - 1 ) v = Math.min( v, d[ k - W + 1 ] + b );
			}
			d[ k ] = v;
		}
	}
	for ( let j = H - 1; j >= 0; j -- ) {
		for ( let i = W - 1; i >= 0; i -- ) {
			const k = j * W + i;
			let v = d[ k ];
			if ( v === 0 ) continue;
			if ( i < W - 1 ) v = Math.min( v, d[ k + 1 ] + a );
			if ( j < H - 1 ) {
				v = Math.min( v, d[ k + W ] + a );
				if ( i < W - 1 ) v = Math.min( v, d[ k + W + 1 ] + b );
				if ( i > 0 ) v = Math.min( v, d[ k + W - 1 ] + b );
			}
			d[ k ] = v;
		}
	}
	return d;

}
