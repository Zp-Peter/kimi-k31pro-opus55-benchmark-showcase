import * as THREE from 'three';
import { U, LAYER_REFLECT } from '../shared.js';

// Planar reflection about the sea surface (after three's Reflector): the main camera is
// mirrored below y = height, an oblique near plane clips everything under the water, and
// only LAYER_REFLECT objects are drawn. Materials look it up in world space through
// U.uReflMatrix, so the ocean and the wet sand can share one texture.

export class PlanarReflection {

	constructor( renderer, { scale = 0.5, height = 0 } = {} ) {

		this.renderer = renderer;
		this.scale = scale;
		this.height = height;
		this.enabled = true;
		this.camera = new THREE.PerspectiveCamera();
		this.camera.layers.set( LAYER_REFLECT );
		this.rt = new THREE.WebGLRenderTarget( 2, 2, {
			type: THREE.HalfFloatType,
			generateMipmaps: true,
			minFilter: THREE.LinearMipmapLinearFilter,
			magFilter: THREE.LinearFilter
		} );
		this.rt.texture.name = 'PlanarReflection';
		this.textureMatrix = new THREE.Matrix4();
		U.uReflTex.value = this.rt.texture;
		U.uReflMatrix.value = this.textureMatrix;

		this._normal = new THREE.Vector3( 0, 1, 0 );
		this._planePos = new THREE.Vector3();
		this._camPos = new THREE.Vector3();
		this._rot = new THREE.Matrix4();
		this._look = new THREE.Vector3();
		this._target = new THREE.Vector3();
		this._view = new THREE.Vector3();
		this._plane = new THREE.Plane();
		this._clip = new THREE.Vector4();
		this._q = new THREE.Vector4();

	}

	setSize( width, height ) {

		this.rt.setSize( Math.max( 2, Math.round( width * this.scale ) ), Math.max( 2, Math.round( height * this.scale ) ) );

	}

	update( scene, camera ) {

		U.uReflOn.value = this.enabled ? 1 : 0;
		if ( ! this.enabled ) return;

		const normal = this._normal, cam = this.camera;
		this._camPos.setFromMatrixPosition( camera.matrixWorld );
		this._planePos.set( this._camPos.x, this.height, this._camPos.z );

		const view = this._view.subVectors( this._planePos, this._camPos );
		if ( view.dot( normal ) > 0 ) { U.uReflOn.value = 0; return; } // camera under water
		view.reflect( normal ).negate().add( this._planePos );

		this._rot.extractRotation( camera.matrixWorld );
		this._look.set( 0, 0, - 1 ).applyMatrix4( this._rot ).add( this._camPos );
		this._target.subVectors( this._planePos, this._look ).reflect( normal ).negate().add( this._planePos );

		cam.position.copy( view );
		cam.up.set( 0, 1, 0 ).applyMatrix4( this._rot ).reflect( normal );
		cam.lookAt( this._target );
		cam.near = camera.near;
		cam.far = camera.far;
		cam.updateMatrixWorld();
		cam.projectionMatrix.copy( camera.projectionMatrix );

		this.textureMatrix.set(
			0.5, 0.0, 0.0, 0.5,
			0.0, 0.5, 0.0, 0.5,
			0.0, 0.0, 0.5, 0.5,
			0.0, 0.0, 0.0, 1.0
		);
		this.textureMatrix.multiply( cam.projectionMatrix ).multiply( cam.matrixWorldInverse );

		// oblique near plane = the water surface (Lengyel)
		this._plane.setFromNormalAndCoplanarPoint( normal, this._planePos ).applyMatrix4( cam.matrixWorldInverse );
		const clip = this._clip.set( this._plane.normal.x, this._plane.normal.y, this._plane.normal.z, this._plane.constant );
		const e = cam.projectionMatrix.elements, q = this._q;
		q.x = ( Math.sign( clip.x ) + e[ 8 ] ) / e[ 0 ];
		q.y = ( Math.sign( clip.y ) + e[ 9 ] ) / e[ 5 ];
		q.z = - 1.0;
		q.w = ( 1.0 + e[ 10 ] ) / e[ 14 ];
		clip.multiplyScalar( 2.0 / clip.dot( q ) );
		e[ 2 ] = clip.x; e[ 6 ] = clip.y; e[ 10 ] = clip.z + 1.0; e[ 14 ] = clip.w;
		cam.projectionMatrixInverse.copy( cam.projectionMatrix ).invert();

		const r = this.renderer;
		const prevTarget = r.getRenderTarget();
		const shadowNeedsUpdate = r.shadowMap.needsUpdate;
		r.shadowMap.needsUpdate = false; // shadows are rendered from the main camera only
		U.uFogMirror.value = 1;
		r.setRenderTarget( this.rt );
		r.state.buffers.depth.setMask( true );
		if ( r.autoClear === false ) r.clear();
		r.render( scene, cam );
		r.setRenderTarget( prevTarget );
		U.uFogMirror.value = 0;
		r.shadowMap.needsUpdate = shadowNeedsUpdate;

	}

}
