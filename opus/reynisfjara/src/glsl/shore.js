// Shoreline, surf and swash model shared by the sand, ocean and pebble shaders.
// The same functions exist in JS (bottom of the file) for audio timing, without the small
// alongshore noise that only matters to the eye.
//
// s = offshore distance from the mean shoreline (m, > 0 in the sea)
// d = inland distance (= -s)
// Breakers travel shoreward with shallow-water speed over a ~0.1 sloping bed, so the
// phase of wave n at s is (t + travelTime(s)) / T. Bore n reaches the shoreline at
// t = (n - beta(x)) * T, then runs up the beach and drains back (ballistic swash).

export const SHORE = /* glsl */`
#ifndef RF_SHORE
#define RF_SHORE

#ifndef RF_UTIME
#define RF_UTIME
uniform float uTime;
#endif
uniform vec4 uSurf; // x: period (s), y: breaker height scale, z: run-up scale, w: offshore swell scale

float shoreZ( float x ) {
	return 2.6 * sin( x * 0.0105 + 0.4 ) + 1.5 * sin( x * 0.0263 + 2.1 ) + 0.7 * sin( x * 0.061 + 0.7 );
}
float shoreZp( float x ) {
	return 0.0273 * cos( x * 0.0105 + 0.4 ) + 0.03945 * cos( x * 0.0263 + 2.1 ) + 0.0427 * cos( x * 0.061 + 0.7 );
}
float cuspShape( float x ) { return sin( x * 0.2327 + 0.8 * sin( x * 0.017 ) ); }
float waveBeta( float x ) { return ( 1.15 * sin( x * 0.0071 + 0.3 ) + 0.55 * sin( x * 0.0187 + 1.7 ) ) / 6.2831853; }
float travelTime( float s ) { return 2.0 * sqrt( max( s, 0.0 ) / 0.981 ); }

float waveHeightN( float n ) {
	float h = 0.62 + 0.55 * hash11( n * 0.6180339 + 3.1 );
	h *= 0.82 + 0.28 * sin( n * 0.897 + 1.3 );
	h *= 1.0 + 0.55 * step( 0.93, hash11( n * 1.3711 + 7.7 ) );
	return h;
}

float breakDist( float n, float H ) { return ( 17.0 + 15.0 * hash11( n * 1.731 + 0.37 ) ) * ( 0.7 + 0.42 * H ); }

// Alongshore irregularity: the bore line wobbles, and every wave peaks and breaks at its own place.
float wavePhase( float x ) {
	return waveBeta( x ) + 0.06 * gnoise( vec2( x * 0.029, 1.7 ) ) + 0.025 * gnoise( vec2( x * 0.077, 4.1 ) );
}
float waveHeightX( float n, float x ) {
	return waveHeightN( n ) * ( 1.0 + 0.22 * gnoise( vec2( x * 0.012 - n * 2.3, n * 0.77 + 9.0 ) ) );
}
float breakDistX( float n, float H, float x ) {
	return breakDist( n, H ) * ( 1.0 + 0.3 * gnoise( vec2( x * 0.019 + n * 3.7, n * 1.31 ) ) );
}

float surfAmp( float s, float H, float sb ) {
	float pre = H * ( 0.45 + 0.55 * smoothstep( sb + 150.0, sb, s ) );
	float post = H * ( 0.24 + 0.42 * clamp( s / sb, 0.0, 1.0 ) ) * smoothstep( - 3.0, 5.0, s );
	return mix( post, pre, smoothstep( sb - 3.0, sb + 1.5, s ) );
}

// Breaker surface elevation at offshore distance s. foam: whitewater coverage, crest: 0..1 near crests
float surfEta( float x, float s, out float foam, out float crest ) {
	float T = uSurf.x;
	float cyc = ( uTime + travelTime( s ) ) / T + wavePhase( x );
	float n = floor( cyc );
	float p = cyc - n; // 0: crest n just passed shoreward, 1: crest n+1 arriving from offshore
	float Hn = waveHeightX( n, x ) * uSurf.y;
	float Hm = waveHeightX( n + 1.0, x ) * uSurf.y;
	float sbn = breakDistX( n, Hn, x ), sbm = breakDistX( n + 1.0, Hm, x );
	float An = surfAmp( s, Hn, sbn ), Am = surfAmp( s, Hm, sbm );
	float brokeN = smoothstep( sbn + 2.0, sbn - 4.0, s );
	float brokeM = smoothstep( sbm + 2.0, sbm - 4.0, s );
	// a swell crest has a long gentle back; a bore keeps a raised plateau that sags behind its front
	float back = mix( exp( - pow( p / 0.27, 2.0 ) ), exp( - p / 0.2 ), brokeN );
	// the face steepens as the wave shoals, and stays a short step once it has become a bore
	float fw = mix( 0.11, 0.024, smoothstep( sbm + 30.0, sbm, s ) );
	float front = exp( - pow( ( 1.0 - p ) / fw, 2.0 ) );
	float eta = An * back + Am * front - 0.2 * ( An + Am ) * 0.5;
	crest = max( back * smoothstep( 0.0, 0.6, An ), front * smoothstep( 0.0, 0.6, Am ) );
	// the churning roller on a bore, and the plunge where the lip lands, carried along with the wave
	float churn = gnoise3( vec3( x * 0.45, cyc * 9.0, uTime * 0.3 ) ) * 0.5 + 0.5;
	float roll = smoothstep( 0.955, 0.998, p ) * brokeM * Am + exp( - p / 0.035 ) * brokeN * An;
	float plunge = exp( - pow( ( s - sbm + 2.5 ) / 3.5, 2.0 ) ) * smoothstep( 0.86, 1.0, p );
	eta += ( roll * 0.26 + plunge * Am * 0.45 ) * churn;
	// whitewater: the roller, then a foam sheet left behind that thins out in patches.
	// Each bore churns harder in some stretches than others, so its line is never uniform.
	float vigN = clamp( 0.3 + 0.95 * ( gnoise( vec2( x * 0.024 + n * 2.9, n * 1.13 ) ) * 0.5 + 0.5 ), 0.0, 1.0 );
	float vigM = clamp( 0.3 + 0.95 * ( gnoise( vec2( x * 0.024 + n * 2.9 + 2.9, n * 1.13 + 1.13 ) ) * 0.5 + 0.5 ), 0.0, 1.0 );
	float patchy = 0.45 + 0.75 * ( gnoise( vec2( x * 0.055, s * 0.08 - n * 1.9 ) ) * 0.5 + 0.5 );
	float trail = exp( - p * T / ( 2.5 + 4.5 * vigN ) ) * brokeN * mix( 1.0, patchy, smoothstep( 0.0, 0.08 + 0.1 * vigN, p ) ) * mix( 0.55, 1.0, vigN );
	float bore = smoothstep( 0.95, 0.995, p ) * brokeM * mix( 0.6, 1.0, vigM );
	// spilling crest just before the break: white along the top, clear dark water on the face below
	float lip = max( smoothstep( sbm + 10.0, sbm, s ) * smoothstep( 0.985, 1.0, p ) * ( 1.0 - brokeM ),
		smoothstep( sbn + 10.0, sbn, s ) * exp( - p / 0.025 ) * ( 1.0 - brokeN ) ) * 0.8;
	foam = clamp( max( max( trail, bore ), max( lip, plunge ) ), 0.0, 1.0 ) * smoothstep( - 4.0, 2.0, s );
	return eta;
}

float runupMax( float n, float x ) {
	float r = 11.0 * uSurf.z * waveHeightX( n, x );
	r *= 1.0 + 0.22 * sin( x * 0.043 + n * 2.17 ) + 0.12 * sin( x * 0.11 + n * 5.3 );
	r *= 1.0 - 0.18 * cuspShape( x );
	return r;
}

const float SW_UP = 1.3; // uprush deceleration (m/s^2)
const float SW_DN = 0.8; // backwash acceleration (m/s^2)

// Swash over the beach face at inland distance d.
// depth: water sheet thickness, foam: coverage, damp: wet darkening, sheen: glossy film, adv: front position
void swashAt( float x, float d, out float depth, out float foam, out float damp, out float sheen, out float adv ) {
	float T = uSurf.x;
	float cyc = uTime / T + wavePhase( x );
	float n0 = floor( cyc );
	float R0 = 11.0 * uSurf.z;
	depth = 0.0; foam = 0.0; sheen = 0.0; adv = 0.0;
	damp = 1.0 - smoothstep( 0.45 * R0, 1.2 * R0, d );
	float best = - 1.0;
	for ( int k = 0; k < 4; k ++ ) {
		float n = n0 - float( k );
		float dt = ( cyc - n ) * T;
		float R = runupMax( n, x );
		float tUp = sqrt( 2.0 * R / SW_UP );
		float v0 = SW_UP * tUp;
		float tDn = sqrt( 2.0 * R / SW_DN );
		float front, h, f;
		if ( dt < tUp ) {
			front = v0 * dt - 0.5 * SW_UP * dt * dt;
			float u = dt / tUp;
			float rel = clamp( 1.0 - d / max( front, 0.01 ), 0.0, 1.0 );
			h = ( 0.035 + 0.2 * ( 1.0 - u ) ) * pow( rel, 0.4 );
			float band = 0.5 + 3.0 * ( 1.0 - u );
			f = ( smoothstep( front - band, front - 0.03, d ) * 0.9 + 0.45 - 0.32 * u ) * step( d, front );
		} else {
			float tb = dt - tUp;
			front = R - 0.5 * SW_DN * tb * tb;
			float rel = clamp( 1.0 - d / R, 0.0, 1.0 );
			float drain = clamp( 1.0 - tb / tDn, 0.0, 1.0 );
			h = ( 0.04 * pow( rel, 0.7 ) * drain + 0.003 ) * step( d, front );
			float line = exp( - pow( ( d - R + 0.25 ) / 0.3, 2.0 ) ) * exp( - tb / 2.2 );
			f = max( line * 0.85, step( d, front ) * 0.3 * exp( - tb / 3.0 ) );
		}
		if ( d < front ) {
			depth = max( depth, h );
			sheen = 1.0;
			damp = 1.0;
			if ( front > best ) { best = front; adv = front; }
		} else if ( d < R && dt >= tUp ) {
			float tUnc = tUp + sqrt( 2.0 * max( R - d, 0.0 ) / SW_DN );
			float since = max( dt - tUnc, 0.0 );
			sheen = max( sheen, exp( - since / 4.5 ) );
			damp = max( damp, exp( - since / 30.0 ) );
		}
		foam = max( foam, f );
	}
	if ( d < 0.0 ) { damp = 1.0; sheen = 1.0; depth = max( depth, - d * 0.105 ); }
}

#endif
`;

// ---------------- JS mirror ----------------

const fract = ( v ) => v - Math.floor( v );
export function hash11( p ) {
	p = fract( p * 0.1031 ); p *= p + 33.33; p *= p + p; return fract( p );
}
export function shoreZ( x ) {
	return 2.6 * Math.sin( x * 0.0105 + 0.4 ) + 1.5 * Math.sin( x * 0.0263 + 2.1 ) + 0.7 * Math.sin( x * 0.061 + 0.7 );
}
export function cuspShape( x ) { return Math.sin( x * 0.2327 + 0.8 * Math.sin( x * 0.017 ) ); }
export function waveBeta( x ) { return ( 1.15 * Math.sin( x * 0.0071 + 0.3 ) + 0.55 * Math.sin( x * 0.0187 + 1.7 ) ) / ( Math.PI * 2 ); }
export function travelTime( s ) { return 2 * Math.sqrt( Math.max( s, 0 ) / 0.981 ); }
export function waveHeightN( n ) {
	let h = 0.62 + 0.55 * hash11( n * 0.6180339 + 3.1 );
	h *= 0.82 + 0.28 * Math.sin( n * 0.897 + 1.3 );
	h *= 1 + 0.55 * ( hash11( n * 1.3711 + 7.7 ) >= 0.93 ? 1 : 0 );
	return h;
}
export function breakDist( n, H ) { return ( 17 + 15 * hash11( n * 1.731 + 0.37 ) ) * ( 0.7 + 0.42 * H ); }
