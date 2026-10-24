import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { LAYOUT } from '../config.js';
import { shoreZ } from '../glsl/shore.js';
import { makeSimplex2, mulberry32, smoothstep, clamp } from './jsnoise.js';
import { createRockMaterial } from './rock.js';
import { sandAO } from './beach.js';
import { LAYER_REFLECT } from '../shared.js';

// Loose rock on the beach: wave-polished pebbles banked against the cliff foot, basalt
// boulders fallen from Reynisfjall, broken column pieces below the Gardar formation.
// Everything is instanced; their contact shadows are splatted into the sand AO map.

const noise = makeSimplex2( 555 );
const noise3 = ( x, y, z ) => ( noise( x, y ) + noise( y + 31.7, z ) + noise( z - 17.3, x + 5.1 ) ) / 3;

function icosphere( detail ) {

	const geo = new THREE.IcosahedronGeometry( 1, detail );
	geo.deleteAttribute( 'normal' );
	geo.deleteAttribute( 'uv' );
	return mergeVertices( geo );

}

// Flattened ellipsoid with gentle lumps. Local y is up, the half height is returned in userData.
function pebbleGeometry( seed, detail ) {

	const rand = mulberry32( seed );
	const geo = icosphere( detail );
	const sz = 0.62 + 0.32 * rand(), sy = 0.36 + 0.24 * rand(), o = rand() * 100;
	const p = geo.attributes.position;
	for ( let i = 0; i < p.count; i ++ ) {
		const x = p.getX( i ), y = p.getY( i ), z = p.getZ( i );
		const n = 1 + 0.13 * noise3( x * 1.2 + o, y * 1.2, z * 1.2 );
		p.setXYZ( i, x * n, y * sy * n, z * sz * n );
	}
	geo.computeVertexNormals();
	geo.userData.halfHeight = sy;
	return geo;

}

// Fractured basalt block: a rounded cube, lumpy, with a few flat fracture planes
function boulderGeometry( seed ) {

	const rand = mulberry32( seed );
	const geo = icosphere( 4 );
	const cuts = [];
	for ( let c = 0; c < 9; c ++ ) {
		const n = new THREE.Vector3( rand() * 2 - 1, rand() * 2 - 1, rand() * 2 - 1 ).normalize();
		cuts.push( [ n, 0.6 + 0.3 * rand() ] );
	}
	const sy = 0.55 + 0.3 * rand(), sz = 0.7 + 0.3 * rand(), o = rand() * 100;
	const p = geo.attributes.position, v = new THREE.Vector3();
	for ( let i = 0; i < p.count; i ++ ) {
		v.fromBufferAttribute( p, i );
		const m = Math.pow( v.x ** 4 + v.y ** 4 + v.z ** 4, 0.25 );
		v.divideScalar( m );
		v.multiplyScalar( 1 + 0.1 * noise3( v.x * 1.7 + o, v.y * 1.7, v.z * 1.7 ) + 0.035 * noise3( v.x * 5 - o, v.y * 5, v.z * 5 ) );
		for ( const [ n, d ] of cuts ) {
			const t = v.dot( n ) - d;
			if ( t > 0 ) v.addScaledVector( n, - t * 0.9 );
		}
		p.setXYZ( i, v.x, v.y * sy, v.z * sz );
	}
	geo.computeVertexNormals();
	geo.userData.halfHeight = sy * 0.85;
	return geo;

}

// Broken hexagonal column: unit radius, unit length along y, oblique fractured ends, flat shaded
function prismGeometry( seed ) {

	const rand = mulberry32( seed );
	const geo = new THREE.CylinderGeometry( 1, 1, 1, 6, 1 );
	const jit = Array.from( { length: 6 }, () => 0.86 + 0.22 * rand() );
	const ta = [ ( rand() - 0.5 ) * 0.5, ( rand() - 0.5 ) * 0.5 ], tb = [ ( rand() - 0.5 ) * 0.5, ( rand() - 0.5 ) * 0.5 ];
	const p = geo.attributes.position;
	for ( let i = 0; i < p.count; i ++ ) {
		let x = p.getX( i ), y = p.getY( i ), z = p.getZ( i );
		const r = Math.hypot( x, z );
		if ( r > 1e-3 ) {
			const c = ( ( Math.round( Math.atan2( x, z ) / ( Math.PI / 3 ) ) % 6 ) + 6 ) % 6;
			x *= jit[ c ]; z *= jit[ c ];
		}
		const t = y > 0 ? ta : tb;
		y += t[ 0 ] * x + t[ 1 ] * z;
		p.setXYZ( i, x, y, z );
	}
	const flat = geo.toNonIndexed();
	flat.computeVertexNormals();
	return flat;

}

function instanced( geo, material, items, { castShadow = true, reflect = false } = {} ) {

	const g = geo.clone();
	const mesh = new THREE.InstancedMesh( g, material, items.length );
	const aRock = new Float32Array( items.length * 4 );
	const m = new THREE.Matrix4();
	items.forEach( ( it, i ) => {
		m.compose( it.pos, it.quat, it.scale );
		mesh.setMatrixAt( i, m );
		aRock[ i * 4 ] = it.ao;
		aRock[ i * 4 + 1 ] = it.seed;
		aRock[ i * 4 + 2 ] = it.contact;
		aRock[ i * 4 + 3 ] = it.ground;
	} );
	g.setAttribute( 'aRock', new THREE.InstancedBufferAttribute( aRock, 4 ) );
	mesh.instanceMatrix.needsUpdate = true;
	mesh.computeBoundingSphere();
	mesh.castShadow = castShadow;
	mesh.receiveShadow = true;
	if ( reflect ) mesh.layers.enable( LAYER_REFLECT );
	return mesh;

}

const _e = new THREE.Euler();
const X_AXIS = new THREE.Vector3( 1, 0, 0 ), Y_AXIS = new THREE.Vector3( 0, 1, 0 );

function randomQuat( rand, tilt ) {

	_e.set( ( rand() - 0.5 ) * tilt, rand() * Math.PI * 2, ( rand() - 0.5 ) * tilt, 'YXZ' );
	return new THREE.Quaternion().setFromEuler( _e );

}

export function buildRocks( terrain, tex, columnFootprints = [] ) {

	const group = new THREE.Group();
	group.name = 'loose-rock';
	const rand = mulberry32( 8086 );
	const C = LAYOUT.columns;
	const colA = terrain.frameAt( C.from - 15 ).p, colB = terrain.frameAt( C.to + 15 ).p;
	const nearColumns = ( x, z ) => {
		const dx = colB.x - colA.x, dz = colB.z - colA.z, L2 = dx * dx + dz * dz;
		const t = clamp( ( ( x - colA.x ) * dx + ( z - colA.z ) * dz ) / L2, 0, 1 );
		return Math.hypot( x - colA.x - dx * t, z - colA.z - dz * t );
	};
	const splats = [];

	// ---- pebbles ----
	const pebbleMat = createRockMaterial( tex, 'pebble' );
	const pebbleGeos = [ pebbleGeometry( 1, 1 ), pebbleGeometry( 2, 1 ), pebbleGeometry( 3, 2 ), pebbleGeometry( 4, 2 ) ];
	const pebbles = [ [], [], [], [] ];
	for ( let tries = 0; tries < 260000; tries ++ ) {
		const x = - 120 + rand() * 560, z = - 150 + rand() * 190;
		const d = shoreZ( x ) - z;
		if ( d < 10 || terrain.isRock( x, z ) ) continue;
		const dr = terrain.distAt( x, z );
		const patch = smoothstep( 0.15, 0.55, noise( x * 0.035, z * 0.035 ) + 0.5 * noise( x * 0.11, z * 0.11 ) );
		let p = Math.exp( - dr / 9 ) * 0.9 + Math.exp( - nearColumns( x, z ) / 14 ) * 0.7;
		p += patch * smoothstep( 13, 22, d ) * ( 1 - smoothstep( 45, 80, d ) ) * 0.35;
		p *= 0.4 + 0.6 * patch;
		if ( rand() > p * 0.45 ) continue;
		const big = rand() < 0.3;
		const size = big ? 0.07 + 0.13 * rand() ** 1.6 : 0.022 + 0.05 * rand();
		const v = ( big ? 2 : 0 ) + ( rand() < 0.5 ? 0 : 1 );
		const geo = pebbleGeos[ v ];
		const ground = terrain.groundAt( x, z );
		const hh = geo.userData.halfHeight * size;
		pebbles[ v ].push( {
			pos: new THREE.Vector3( x, ground + hh * 0.45, z ),
			quat: randomQuat( rand, 0.35 ),
			scale: new THREE.Vector3( size, size, size ),
			ao: 1, seed: rand(), contact: hh * 1.4, ground
		} );
		if ( size > 0.1 ) splats.push( [ x, z, size * 1.8, 0.35 ] );
		if ( pebbles[ 0 ].length + pebbles[ 1 ].length + pebbles[ 2 ].length + pebbles[ 3 ].length > 14000 ) break;
	}
	pebbles.forEach( ( items, v ) => {
		if ( items.length ) group.add( instanced( pebbleGeos[ v ], pebbleMat, items, { castShadow: v >= 2 } ) );
	} );

	// ---- boulders ----
	const boulderMat = createRockMaterial( tex, 'boulder' );
	const boulderGeos = [ boulderGeometry( 11 ), boulderGeometry( 12 ), boulderGeometry( 13 ), boulderGeometry( 14 ) ];
	const boulders = [ [], [], [], [] ];
	const addBoulder = ( x, z, size ) => {
		const v = Math.floor( rand() * 4 );
		const geo = boulderGeos[ v ];
		const ground = terrain.groundAt( x, z );
		const hh = geo.userData.halfHeight * size;
		boulders[ v ].push( {
			pos: new THREE.Vector3( x, ground + hh * ( 0.25 + 0.35 * rand() ), z ),
			quat: randomQuat( rand, 0.6 ),
			scale: new THREE.Vector3( size, size * ( 0.8 + 0.4 * rand() ), size ),
			ao: 0.95, seed: rand(), contact: hh * 0.9, ground
		} );
		if ( ground > - 0.5 ) splats.push( [ x, z, size * 1.6, 0.6 ] );
	};
	for ( let tries = 0, n = 0; tries < 60000 && n < 420; tries ++ ) {
		const x = - 100 + rand() * 560, z = - 160 + rand() * 300;
		if ( terrain.isRock( x, z ) ) continue;
		const d = shoreZ( x ) - z;
		const dr = terrain.distAt( x, z );
		// talus at the cliff foot, rock-strewn surf below the headland, shoals around the stacks
		let p = Math.exp( - dr / 4 ) * ( d > 12 ? 0.55 : 0.0 );
		if ( x > 225 && d < 8 ) p += Math.exp( - dr / 9 ) * 0.8;
		p += Math.exp( - nearColumns( x, z ) / 8 ) * 0.25;
		if ( d < 10 && d > - 20 && x < 225 ) p *= 0.1;
		if ( rand() > p ) continue;
		const big = rand() < 0.22;
		const size = big ? 1.1 + 1.8 * rand() ** 2 : 0.3 + 0.7 * rand();
		addBoulder( x, z, size );
		n ++;
	}
	boulders.forEach( ( items, v ) => {
		if ( items.length ) group.add( instanced( boulderGeos[ v ], boulderMat, items, { reflect: true } ) );
	} );

	// ---- broken columns below Gardar ----
	const prisms = [];
	const prismGeo = prismGeometry( 21 );
	for ( let tries = 0; tries < 4000 && prisms.length < 90; tries ++ ) {
		const u = C.from - 8 + rand() * ( C.to - C.from + 16 );
		const { p, n } = terrain.frameAt( u );
		const b = 9 + rand() ** 1.5 * 22;
		const x = p.x + n.x * b + ( rand() - 0.5 ) * 3, z = p.z + n.z * b + ( rand() - 0.5 ) * 3;
		if ( terrain.isRock( x, z ) ) continue;
		let blocked = false;
		for ( const f of columnFootprints ) if ( Math.abs( f.x - x ) < 1.4 && Math.abs( f.z - z ) < 1.4 ) { blocked = true; break; }
		if ( blocked ) continue;
		const r = 0.32 + 0.12 * rand();
		// a few short stumps stand half-buried right at the foot of the wall; the rest lie toppled
		const lying = b > 13 || rand() < 0.7;
		const len = ! lying ? 0.45 + rand() * 0.7 : rand() < 0.75 ? 0.5 + rand() * 1.6 : 1.8 + rand() * 1.4;
		const ground = terrain.groundAt( x, z );
		const q = new THREE.Quaternion();
		if ( lying ) {
			// roll about its own axis, lay it down, then yaw
			const roll = new THREE.Quaternion().setFromAxisAngle( Y_AXIS, rand() * Math.PI );
			const lay = new THREE.Quaternion().setFromAxisAngle( X_AXIS, Math.PI / 2 + ( rand() - 0.5 ) * 0.25 );
			q.setFromAxisAngle( Y_AXIS, rand() * Math.PI * 2 ).multiply( lay ).multiply( roll );
		} else {
			q.copy( randomQuat( rand, 0.45 ) );
		}
		const y = lying ? ground + r * 0.55 : ground + len * 0.25;
		prisms.push( {
			pos: new THREE.Vector3( x, y, z ), quat: q, scale: new THREE.Vector3( r, len, r ),
			ao: 0.95, seed: rand(), contact: r * 0.9, ground
		} );
		splats.push( [ x, z, Math.max( r * 2.6, lying ? len * 0.8 : r * 2.6 ), 0.55 ] );
	}
	if ( prisms.length ) group.add( instanced( prismGeo, boulderMat, prisms, { reflect: true } ) );

	// ---- contact shadows on the sand ----
	for ( const f of columnFootprints ) splats.push( [ f.x, f.z, f.r * 3.2, 0.5 ] );
	buildAOMap( splats );

	group.userData.stats = `${pebbles.reduce( ( s, a ) => s + a.length, 0 )} pebbles, ${boulders.reduce( ( s, a ) => s + a.length, 0 )} boulders, ${prisms.length} column pieces`;
	return group;

}

function buildAOMap( splats ) {

	const x0 = - 130, z0 = - 170, w = 620, h = 240, res = 0.25;
	const W = Math.round( w / res ), H = Math.round( h / res );
	const canvas = document.createElement( 'canvas' );
	canvas.width = W; canvas.height = H;
	const ctx = canvas.getContext( '2d' );
	ctx.fillStyle = '#fff';
	ctx.fillRect( 0, 0, W, H );
	ctx.globalCompositeOperation = 'multiply';
	const grey = ( v ) => { const c = Math.round( 255 * clamp( v, 0, 1 ) ); return `rgb(${c},${c},${c})`; };
	for ( const [ x, z, r, s ] of splats ) {
		const px = ( x - x0 ) / res, py = ( z - z0 ) / res, pr = Math.max( r / res, 1.5 );
		if ( px < - pr || py < - pr || px > W + pr || py > H + pr ) continue;
		const g = ctx.createRadialGradient( px, py, 0, px, py, pr );
		g.addColorStop( 0, grey( 1 - s ) );
		g.addColorStop( 0.35, grey( 1 - s * 0.75 ) );
		g.addColorStop( 0.7, grey( 1 - s * 0.25 ) );
		g.addColorStop( 1, '#fff' );
		ctx.fillStyle = g;
		ctx.beginPath();
		ctx.arc( px, py, pr, 0, Math.PI * 2 );
		ctx.fill();
	}
	const tex = new THREE.CanvasTexture( canvas );
	tex.flipY = false;
	tex.colorSpace = THREE.NoColorSpace;
	tex.anisotropy = 4;
	sandAO.uAOTex.value = tex;
	sandAO.uAOBounds.value.set( x0, z0, w, h );

}
