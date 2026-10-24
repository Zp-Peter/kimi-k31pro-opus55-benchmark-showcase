import * as THREE from 'three';
import { LAYOUT } from '../config.js';
import { patchMaterial, inject, LAYER_REFLECT } from '../shared.js';
import { makeSimplex2, mulberry32, smoothstep } from './jsnoise.js';

// Fulmars and kittiwakes riding the updraft around the cliffs and sea stacks: stiff-winged
// glides with bursts of flapping. Paths are analytic loops; banking follows the turn.

const noise = makeSimplex2( 77 );

function birdGeometry() {

	const pos = [], col = [];
	const body = 0.82, wing = 0.6, tip = 0.22;
	const tri = ( a, b, c, up, ca, cb = ca, cc = ca ) => {
		// orient the triangle so its front face points along 'up'
		const ab = [ b[ 0 ] - a[ 0 ], b[ 1 ] - a[ 1 ], b[ 2 ] - a[ 2 ] ], ac = [ c[ 0 ] - a[ 0 ], c[ 1 ] - a[ 1 ], c[ 2 ] - a[ 2 ] ];
		const n = [ ab[ 1 ] * ac[ 2 ] - ab[ 2 ] * ac[ 1 ], ab[ 2 ] * ac[ 0 ] - ab[ 0 ] * ac[ 2 ], ab[ 0 ] * ac[ 1 ] - ab[ 1 ] * ac[ 0 ] ];
		if ( n[ 0 ] * up[ 0 ] + n[ 1 ] * up[ 1 ] + n[ 2 ] * up[ 2 ] < 0 ) { [ b, c ] = [ c, b ]; [ cb, cc ] = [ cc, cb ]; }
		pos.push( ...a, ...b, ...c );
		col.push( ca, ca, ca, cb, cb, cb, cc, cc, cc );
	};
	// body: a slim double cone
	const nose = [ 0, 0, - 0.24 ], tail = [ 0, 0.01, 0.2 ];
	const ring = [ [ 0.045, 0, 0 ], [ 0, 0.042, 0 ], [ - 0.045, 0, 0 ], [ 0, - 0.04, 0 ] ];
	for ( let i = 0; i < 4; i ++ ) {
		const a = ring[ i ], b = ring[ ( i + 1 ) % 4 ];
		const mid = [ ( a[ 0 ] + b[ 0 ] ) / 2, ( a[ 1 ] + b[ 1 ] ) / 2, 0 ];
		tri( nose, a, b, [ mid[ 0 ], mid[ 1 ], - 0.3 ], body );
		tri( tail, a, b, [ mid[ 0 ], mid[ 1 ], 0.3 ], body );
	}
	// tail fan
	tri( [ 0, 0.01, 0.16 ], [ - 0.06, 0.01, 0.29 ], [ 0.06, 0.01, 0.29 ], [ 0, 1, 0 ], body );
	// wings: inner and outer panels, grey above with darker tips
	for ( const s of [ 1, - 1 ] ) {
		const a = [ 0.05 * s, 0, - 0.07 ], b = [ 0.3 * s, 0, - 0.065 ], c = [ 0.3 * s, 0, 0.07 ], d = [ 0.05 * s, 0, 0.09 ];
		const e = [ 0.57 * s, 0, - 0.005 ], f = [ 0.54 * s, 0, 0.04 ];
		tri( a, b, c, [ 0, 1, 0 ], wing );
		tri( a, c, d, [ 0, 1, 0 ], wing );
		tri( b, e, f, [ 0, 1, 0 ], wing, tip, tip );
		tri( b, f, c, [ 0, 1, 0 ], wing, tip, wing );
	}
	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.Float32BufferAttribute( pos, 3 ) );
	geo.setAttribute( 'color', new THREE.Float32BufferAttribute( col, 3 ) );
	geo.computeVertexNormals();
	return geo;

}

const FLAP = /* glsl */`
	attribute vec2 aBird; // x: wing angle (rad), y: unused
	vec3 rfFlap( vec3 p, vec3 nIn, out vec3 n ) {
		float ax = abs( p.x );
		n = nIn;
		if ( ax < 0.046 || p.z > 0.12 ) return p;
		float sg = sign( p.x );
		float th = aBird.x, th2 = aBird.x * 1.5 - 0.06;
		float r1 = min( ax, 0.3 ) - 0.05, r2 = max( ax - 0.3, 0.0 );
		float nx = 0.05 + r1 * cos( th ) + r2 * cos( th2 );
		float ny = r1 * sin( th ) + r2 * sin( th2 );
		float ta = ax > 0.3 ? th2 : th;
		n = vec3( - sg * sin( ta ), cos( ta ), 0.0 );
		return vec3( sg * nx, p.y + ny, p.z );
	}
`;

export class Birds {

	constructor( count = 46 ) {

		const rand = mulberry32( 1234 );
		this.count = count;
		this.birds = [];
		const st = LAYOUT.stacks;
		for ( let i = 0; i < count; i ++ ) {
			const aroundStacks = i < count * 0.6;
			const c = aroundStacks ? st[ Math.floor( rand() * 3 ) ] : null;
			this.birds.push( {
				cx: c ? c.x + ( rand() - 0.5 ) * 30 : 120 + rand() * 260,
				cz: c ? c.z + ( rand() - 0.5 ) * 30 : - 40 + rand() * 120,
				cy: c ? 14 + rand() * 46 : 18 + rand() * 40,
				rx: 18 + rand() * 45, rz: 14 + rand() * 40,
				w: ( 0.14 + rand() * 0.16 ) * ( rand() < 0.5 ? - 1 : 1 ),
				ph: rand() * Math.PI * 2, ph2: rand() * Math.PI * 2,
				dy: 3 + rand() * 8, seed: rand() * 100,
				flap: rand() * Math.PI * 2, rate: 4.2 + rand() * 1.4, amount: 0,
				scale: 0.85 + rand() * 0.35
			} );
		}

		const geo = birdGeometry();
		this.angle = new THREE.InstancedBufferAttribute( new Float32Array( count * 2 ), 2 );
		this.angle.setUsage( THREE.DynamicDrawUsage );
		geo.setAttribute( 'aBird', this.angle );

		const material = new THREE.MeshStandardMaterial( { vertexColors: true, roughness: 0.85, side: THREE.DoubleSide } );
		patchMaterial( material, 'rf-birds', ( shader ) => {
			let vs = shader.vertexShader;
			vs = inject( vs, 'common', FLAP );
			vs = inject( vs, 'beginnormal_vertex', 'vec3 rfN; rfFlap( position, objectNormal, rfN ); objectNormal = rfN;' );
			vs = inject( vs, 'begin_vertex', 'vec3 rfN2; transformed = rfFlap( position, normal, rfN2 );' );
			shader.vertexShader = vs;
			// pale undersides
			shader.fragmentShader = inject( shader.fragmentShader, 'color_fragment', 'if ( ! gl_FrontFacing ) diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.86 ), 0.75 );' );
		} );

		this.mesh = new THREE.InstancedMesh( geo, material, count );
		this.mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
		this.mesh.frustumCulled = false;
		this.mesh.layers.enable( LAYER_REFLECT );
		this.mesh.name = 'birds';

		this._m = new THREE.Matrix4();
		this._p = [ new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3() ];
		this._v = new THREE.Vector3(); this._a = new THREE.Vector3();
		this._f = new THREE.Vector3(); this._r = new THREE.Vector3(); this._u = new THREE.Vector3(); this._b = new THREE.Vector3();
		this._s = new THREE.Vector3();
		this.update( 0, 0 );

	}

	path( b, t, out ) {

		const a = b.w * t + b.ph;
		const wob = noise( b.seed, t * 0.05 ) * 0.5;
		out.set(
			b.cx + b.rx * Math.cos( a ) + 12 * wob,
			b.cy + b.dy * Math.sin( a * 0.5 + b.ph2 ) + 4 * noise( t * 0.07, b.seed ),
			b.cz + b.rz * Math.sin( a + 0.4 * Math.sin( a * 0.5 ) ) + 9 * noise( b.seed + 3, t * 0.05 )
		);
		return out;

	}

	update( t, dt ) {

		const h = 0.25;
		const [ p0, p1, p2 ] = this._p;
		const v = this._v, acc = this._a, f = this._f, r = this._r, u = this._u, back = this._b;
		for ( let i = 0; i < this.count; i ++ ) {
			const b = this.birds[ i ];
			this.path( b, t - h, p0 ); this.path( b, t, p1 ); this.path( b, t + h, p2 );
			v.subVectors( p2, p0 ).divideScalar( 2 * h );
			acc.copy( p2 ).add( p0 ).addScaledVector( p1, - 2 ).divideScalar( h * h );
			f.copy( v ).normalize();
			// lift balances gravity plus the turn: the body's up axis follows it (banking)
			u.copy( acc );
			u.y += 9.81;
			u.addScaledVector( f, - u.dot( f ) ).normalize();
			back.copy( f ).negate();
			r.crossVectors( u, back ).normalize();
			u.crossVectors( back, r );
			this._m.makeBasis( r, u, back ).scale( this._s.setScalar( b.scale ) ).setPosition( p1 );
			this.mesh.setMatrixAt( i, this._m );

			// glide with the wings in a shallow dihedral, flap in bursts (faster when climbing)
			const climb = smoothstep( - 0.5, 1.5, v.y );
			const want = smoothstep( 0.25, 0.55, noise( t * 0.13, b.seed ) * 0.5 + 0.5 + climb * 0.25 );
			b.amount += ( want - b.amount ) * Math.min( 1, dt * 3 );
			b.flap += dt * b.rate * Math.PI * 2 * ( 0.3 + 0.7 * b.amount );
			this.angle.array[ i * 2 ] = 0.1 + b.amount * 0.62 * Math.sin( b.flap );
		}
		this.mesh.instanceMatrix.needsUpdate = true;
		this.angle.needsUpdate = true;

	}

}
