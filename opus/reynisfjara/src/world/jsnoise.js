// CPU-side noise for terrain and scattering: seeded RNG and 2D simplex noise
// (after Stefan Gustavson's public-domain reference implementation).

export function mulberry32( seed ) {
	let a = seed >>> 0;
	return function () {
		a = ( a + 0x6D2B79F5 ) >>> 0;
		let t = a;
		t = Math.imul( t ^ ( t >>> 15 ), t | 1 );
		t ^= t + Math.imul( t ^ ( t >>> 7 ), t | 61 );
		return ( ( t ^ ( t >>> 14 ) ) >>> 0 ) / 4294967296;
	};
}

const GRAD = new Float32Array( [ 1, 1, - 1, 1, 1, - 1, - 1, - 1, 1, 0, - 1, 0, 0, 1, 0, - 1 ] );
const F2 = 0.5 * ( Math.sqrt( 3 ) - 1 );
const G2 = ( 3 - Math.sqrt( 3 ) ) / 6;

export function makeSimplex2( seed = 1 ) {
	const rand = mulberry32( seed );
	const p = new Uint8Array( 256 );
	for ( let i = 0; i < 256; i ++ ) p[ i ] = i;
	for ( let i = 255; i > 0; i -- ) {
		const j = Math.floor( rand() * ( i + 1 ) );
		const t = p[ i ]; p[ i ] = p[ j ]; p[ j ] = t;
	}
	const perm = new Uint8Array( 512 );
	for ( let i = 0; i < 512; i ++ ) perm[ i ] = p[ i & 255 ];

	return function noise( xin, yin ) {
		const s = ( xin + yin ) * F2;
		const i = Math.floor( xin + s ), j = Math.floor( yin + s );
		const t = ( i + j ) * G2;
		const x0 = xin - ( i - t ), y0 = yin - ( j - t );
		const i1 = x0 > y0 ? 1 : 0, j1 = 1 - i1;
		const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
		const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
		const ii = i & 255, jj = j & 255;
		let n = 0;
		let t0 = 0.5 - x0 * x0 - y0 * y0;
		if ( t0 > 0 ) { const g = ( perm[ ii + perm[ jj ] ] & 7 ) * 2; t0 *= t0; n += t0 * t0 * ( GRAD[ g ] * x0 + GRAD[ g + 1 ] * y0 ); }
		let t1 = 0.5 - x1 * x1 - y1 * y1;
		if ( t1 > 0 ) { const g = ( perm[ ii + i1 + perm[ jj + j1 ] ] & 7 ) * 2; t1 *= t1; n += t1 * t1 * ( GRAD[ g ] * x1 + GRAD[ g + 1 ] * y1 ); }
		let t2 = 0.5 - x2 * x2 - y2 * y2;
		if ( t2 > 0 ) { const g = ( perm[ ii + 1 + perm[ jj + 1 ] ] & 7 ) * 2; t2 *= t2; n += t2 * t2 * ( GRAD[ g ] * x2 + GRAD[ g + 1 ] * y2 ); }
		return 70 * n;
	};
}

export function fbm( noise, x, y, octaves = 4, lacunarity = 2.03, gain = 0.5 ) {
	let sum = 0, amp = 0.5, f = 1;
	for ( let o = 0; o < octaves; o ++ ) {
		sum += amp * noise( x * f + o * 17.17, y * f - o * 9.31 );
		f *= lacunarity; amp *= gain;
	}
	return sum;
}

export const smoothstep = ( a, b, x ) => {
	const t = Math.min( 1, Math.max( 0, ( x - a ) / ( b - a ) ) );
	return t * t * ( 3 - 2 * t );
};
export const clamp = ( x, a, b ) => Math.min( b, Math.max( a, x ) );
export const lerp = ( a, b, t ) => a + ( b - a ) * t;
