import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// HDR chain: multisampled half-float scene -> soft bloom -> grade, tone map (renderer's AgX),
// then display-space vignette and film grain. Lateral chromatic aberration at the edges.

const FinalShader = {
	name: 'RfFinal',
	uniforms: {
		tDiffuse: { value: null },
		uTime: { value: 0 },
		uResolution: { value: new THREE.Vector2( 1, 1 ) },
		uGain: { value: new THREE.Vector3( 1, 1, 1 ) },
		uSaturation: { value: 1.0 },
		uContrast: { value: 1.08 },
		uVignette: { value: 0.32 },
		uGrain: { value: 0.03 },
		uAberration: { value: 0.0025 }
	},
	vertexShader: /* glsl */`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}
	`,
	fragmentShader: /* glsl */`
		uniform sampler2D tDiffuse;
		uniform float uTime;
		uniform vec2 uResolution;
		uniform vec3 uGain;
		uniform float uSaturation;
		uniform float uContrast;
		uniform float uVignette;
		uniform float uGrain;
		uniform float uAberration;
		varying vec2 vUv;

		float hashG( vec3 p ) { p = fract( p * 0.1031 ); p += dot( p, p.zyx + 31.32 ); return fract( ( p.x + p.y ) * p.z ); }

		void main() {
			vec2 c = vUv - 0.5;
			float r2 = dot( c, c );
			vec2 off = c * r2 * uAberration * 4.0;
			vec3 col;
			col.r = texture2D( tDiffuse, vUv - off ).r;
			col.g = texture2D( tDiffuse, vUv ).g;
			col.b = texture2D( tDiffuse, vUv + off ).b;

			// grade in scene-linear: white balance, saturation, contrast pivoting on mid grey
			col *= uGain;
			float l = dot( col, vec3( 0.2126, 0.7152, 0.0722 ) );
			col = max( mix( vec3( l ), col, uSaturation ), 0.0 );
			col = 0.18 * pow( col / 0.18 + 1e-6, vec3( uContrast ) );

			gl_FragColor = vec4( col, 1.0 );
			#include <tonemapping_fragment>
			#include <colorspace_fragment>

			float asp = uResolution.x / uResolution.y;
			vec2 vc = c * vec2( asp, 1.0 ) / max( asp, 1.0 );
			float vig = smoothstep( 0.95, 0.15, length( vc ) * 1.25 );
			gl_FragColor.rgb *= mix( 1.0, vig, uVignette );

			float g = hashG( vec3( gl_FragCoord.xy, fract( uTime * 7.31 ) * 413.0 ) ) + hashG( vec3( gl_FragCoord.yx + 17.0, fract( uTime * 3.17 ) * 211.0 ) ) - 1.0;
			float lum = dot( gl_FragColor.rgb, vec3( 0.333 ) );
			gl_FragColor.rgb += g * uGrain * ( 1.0 - lum * 0.6 );
		}
	`
};

export function createPost( renderer, scene, camera ) {

	const size = renderer.getDrawingBufferSize( new THREE.Vector2() );
	const target = new THREE.WebGLRenderTarget( size.x, size.y, { type: THREE.HalfFloatType, samples: 4 } );
	target.texture.name = 'SceneHDR';
	const composer = new EffectComposer( renderer, target );

	const renderPass = new RenderPass( scene, camera );
	const bloom = new UnrealBloomPass( new THREE.Vector2( size.x, size.y ), 0.22, 0.55, 1.05 );
	const final = new ShaderPass( FinalShader );

	composer.addPass( renderPass );
	composer.addPass( bloom );
	composer.addPass( final );

	const setSize = ( w, h ) => {
		composer.setPixelRatio( renderer.getPixelRatio() );
		composer.setSize( w, h );
		final.uniforms.uResolution.value.set( w, h );
	};
	setSize( renderer.domElement.clientWidth || window.innerWidth, renderer.domElement.clientHeight || window.innerHeight );

	return {
		composer, bloom, final, setSize,
		render( time ) {
			final.uniforms.uTime.value = time;
			composer.render();
		}
	};

}
