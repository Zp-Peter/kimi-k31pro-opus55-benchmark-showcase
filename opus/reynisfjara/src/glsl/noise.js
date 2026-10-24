// Shared GLSL noise: sine-free hashes (Dave Hoskins), value / gradient / cellular noise,
// fBm, and periodic variants used when baking tileable textures.

export const NOISE = /* glsl */`
#ifndef RF_NOISE
#define RF_NOISE

float hash11( float p ) { p = fract( p * 0.1031 ); p *= p + 33.33; p *= p + p; return fract( p ); }
float hash12( vec2 p ) { vec3 p3 = fract( vec3( p.xyx ) * 0.1031 ); p3 += dot( p3, p3.yzx + 33.33 ); return fract( ( p3.x + p3.y ) * p3.z ); }
vec2 hash22( vec2 p ) { vec3 p3 = fract( vec3( p.xyx ) * vec3( 0.1031, 0.1030, 0.0973 ) ); p3 += dot( p3, p3.yzx + 33.33 ); return fract( ( p3.xx + p3.yz ) * p3.zy ); }
vec3 hash32( vec2 p ) { vec3 p3 = fract( vec3( p.xyx ) * vec3( 0.1031, 0.1030, 0.0973 ) ); p3 += dot( p3, p3.yxz + 33.33 ); return fract( ( p3.xxy + p3.yzz ) * p3.zyx ); }
float hash13( vec3 p3 ) { p3 = fract( p3 * 0.1031 ); p3 += dot( p3, p3.zyx + 31.32 ); return fract( ( p3.x + p3.y ) * p3.z ); }
vec3 hash33( vec3 p3 ) { p3 = fract( p3 * vec3( 0.1031, 0.1030, 0.0973 ) ); p3 += dot( p3, p3.yxz + 33.33 ); return fract( ( p3.xxy + p3.yxx ) * p3.zyx ); }

float vnoise( vec2 p ) {
	vec2 i = floor( p ); vec2 f = fract( p );
	vec2 u = f * f * ( 3.0 - 2.0 * f );
	float a = hash12( i ), b = hash12( i + vec2( 1.0, 0.0 ) ), c = hash12( i + vec2( 0.0, 1.0 ) ), d = hash12( i + vec2( 1.0, 1.0 ) );
	return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y );
}

float gnoise( vec2 p ) {
	vec2 i = floor( p ); vec2 f = fract( p );
	vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 );
	float a = dot( hash22( i ) * 2.0 - 1.0, f );
	float b = dot( hash22( i + vec2( 1.0, 0.0 ) ) * 2.0 - 1.0, f - vec2( 1.0, 0.0 ) );
	float c = dot( hash22( i + vec2( 0.0, 1.0 ) ) * 2.0 - 1.0, f - vec2( 0.0, 1.0 ) );
	float d = dot( hash22( i + vec2( 1.0, 1.0 ) ) * 2.0 - 1.0, f - vec2( 1.0, 1.0 ) );
	return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.414;
}

float gnoise3( vec3 p ) {
	vec3 i = floor( p ); vec3 f = fract( p );
	vec3 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 );
	#define RF_G3( o ) dot( hash33( i + o ) * 2.0 - 1.0, f - o )
	float n000 = RF_G3( vec3( 0.0, 0.0, 0.0 ) ), n100 = RF_G3( vec3( 1.0, 0.0, 0.0 ) );
	float n010 = RF_G3( vec3( 0.0, 1.0, 0.0 ) ), n110 = RF_G3( vec3( 1.0, 1.0, 0.0 ) );
	float n001 = RF_G3( vec3( 0.0, 0.0, 1.0 ) ), n101 = RF_G3( vec3( 1.0, 0.0, 1.0 ) );
	float n011 = RF_G3( vec3( 0.0, 1.0, 1.0 ) ), n111 = RF_G3( vec3( 1.0, 1.0, 1.0 ) );
	#undef RF_G3
	return mix( mix( mix( n000, n100, u.x ), mix( n010, n110, u.x ), u.y ),
		mix( mix( n001, n101, u.x ), mix( n011, n111, u.x ), u.y ), u.z ) * 1.15;
}

float fbm2( vec2 p, int oct ) {
	float s = 0.0, a = 0.5;
	for ( int i = 0; i < 8; i ++ ) {
		if ( i >= oct ) break;
		s += a * gnoise( p );
		p = mat2( 1.6, 1.2, - 1.2, 1.6 ) * p + 17.3;
		a *= 0.5;
	}
	return s;
}

float fbm3( vec3 p, int oct ) {
	float s = 0.0, a = 0.5;
	for ( int i = 0; i < 6; i ++ ) {
		if ( i >= oct ) break;
		s += a * gnoise3( p );
		p = p * 2.03 + vec3( 11.7, 3.1, 7.9 );
		a *= 0.5;
	}
	return s;
}

// Cellular noise in the plane: x = F1, y = F2, z = id of the nearest cell
vec3 worley( vec2 p ) {
	vec2 i = floor( p ); vec2 f = fract( p );
	float F1 = 9.0, F2 = 9.0, id = 0.0;
	for ( int y = - 1; y <= 1; y ++ ) for ( int x = - 1; x <= 1; x ++ ) {
		vec2 g = vec2( float( x ), float( y ) );
		vec2 o = hash22( i + g + 31.0 );
		vec2 r = g + o - f; float d = dot( r, r );
		if ( d < F1 ) { F2 = F1; F1 = d; id = hash12( i + g + 7.0 ); } else if ( d < F2 ) { F2 = d; }
	}
	return vec3( sqrt( F1 ), sqrt( F2 ), id );
}

// ---- periodic variants (tile seamlessly over 'period' lattice cells) ----

float vnoiseP( vec2 p, vec2 period ) {
	vec2 i = floor( p ); vec2 f = fract( p );
	vec2 u = f * f * ( 3.0 - 2.0 * f );
	float a = hash12( mod( i, period ) ), b = hash12( mod( i + vec2( 1.0, 0.0 ), period ) );
	float c = hash12( mod( i + vec2( 0.0, 1.0 ), period ) ), d = hash12( mod( i + vec2( 1.0, 1.0 ), period ) );
	return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y );
}

float gnoiseP( vec2 p, vec2 period ) {
	vec2 i = floor( p ); vec2 f = fract( p );
	vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 );
	float a = dot( hash22( mod( i, period ) ) * 2.0 - 1.0, f );
	float b = dot( hash22( mod( i + vec2( 1.0, 0.0 ), period ) ) * 2.0 - 1.0, f - vec2( 1.0, 0.0 ) );
	float c = dot( hash22( mod( i + vec2( 0.0, 1.0 ), period ) ) * 2.0 - 1.0, f - vec2( 0.0, 1.0 ) );
	float d = dot( hash22( mod( i + vec2( 1.0, 1.0 ), period ) ) * 2.0 - 1.0, f - vec2( 1.0, 1.0 ) );
	return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.414;
}

float fbmP( vec2 p, vec2 period, int oct ) {
	float s = 0.0, a = 0.5;
	for ( int i = 0; i < 10; i ++ ) {
		if ( i >= oct ) break;
		s += a * gnoiseP( p, period );
		p *= 2.0; period *= 2.0; a *= 0.5;
	}
	return s;
}

vec3 worleyP( vec2 p, vec2 period ) {
	vec2 i = floor( p ); vec2 f = fract( p );
	float F1 = 9.0, F2 = 9.0, id = 0.0;
	for ( int y = - 1; y <= 1; y ++ ) for ( int x = - 1; x <= 1; x ++ ) {
		vec2 g = vec2( float( x ), float( y ) );
		vec2 c = mod( i + g, period );
		vec2 o = hash22( c + 31.0 );
		vec2 r = g + o - f; float d = dot( r, r );
		if ( d < F1 ) { F2 = F1; F1 = d; id = hash12( c + 7.0 ); } else if ( d < F2 ) { F2 = d; }
	}
	return vec3( sqrt( F1 ), sqrt( F2 ), id );
}

#endif
`;
