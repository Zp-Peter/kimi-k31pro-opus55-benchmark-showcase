import GUI from 'three/addons/libs/lil-gui.module.min.js';
import { CAMERA_PRESETS, MOODS } from './config.js';

// Overlay controls (camera stations, moods, sound) and a lil-gui panel for the details.

export function setupUI( app ) {

	const presetButtons = [ ...document.querySelectorAll( '[data-preset]' ) ];
	const moodButtons = [ ...document.querySelectorAll( '[data-mood]' ) ];
	const sound = document.getElementById( 'sound' );

	presetButtons.forEach( ( b ) => b.addEventListener( 'click', () => app.goTo( b.dataset.preset ) ) );
	moodButtons.forEach( ( b ) => b.addEventListener( 'click', () => app.setMood( b.dataset.mood ) ) );
	sound.addEventListener( 'click', () => setSound( app.toggleSound() ) );

	function setSound( on ) {
		sound.classList.toggle( 'on', on );
		sound.querySelector( 'span' ).textContent = on ? '声音 开' : '声音 关';
	}

	const presetNames = Object.keys( CAMERA_PRESETS );
	const moodNames = Object.keys( MOODS );
	window.addEventListener( 'keydown', ( e ) => {
		if ( e.target.closest && e.target.closest( '.lil-gui' ) ) return;
		const k = e.key.toLowerCase();
		const i = parseInt( e.key, 10 );
		if ( i >= 1 && i <= presetNames.length ) app.goTo( presetNames[ i - 1 ] );
		else if ( k === 'm' ) app.setMood( moodNames[ ( moodNames.indexOf( app.moodName ) + 1 ) % moodNames.length ] );
		else if ( k === 'h' ) document.body.classList.toggle( 'clean' );
		else if ( k === ' ' ) { app.paused = ! app.paused; e.preventDefault(); }
	} );

	// ---- advanced panel ----
	const p = app.params;
	const gui = new GUI( { title: '参数 Settings', width: 290 } );
	gui.close();
	const light = () => app.applyParams( { environment: false } );
	const heavy = () => app.applyParams( { environment: true } );

	const fL = gui.addFolder( '光照 Light' );
	fL.add( p, 'sunElevation', - 3, 45, 0.1 ).name( '太阳高度 °' ).onChange( light ).onFinishChange( heavy );
	fL.add( p, 'sunAzimuth', 60, 260, 0.5 ).name( '太阳方位 °' ).onChange( light ).onFinishChange( heavy );
	fL.add( p, 'sunIntensity', 0, 6, 0.01 ).name( '日光强度' ).onChange( light );
	fL.add( p, 'exposure', 0.3, 2.5, 0.01 ).name( '曝光' ).onChange( light );

	const fS = gui.addFolder( '海况 Sea state' );
	fS.add( p, 'waveHeight', 0.3, 3.6, 0.01 ).name( '碎浪高度' ).onChange( light );
	fS.add( p, 'wavePeriod', 6, 16, 0.1 ).name( '浪周期 s' ).onChange( light );
	fS.add( p, 'runup', 0.3, 1.8, 0.01 ).name( '上冲距离' ).onChange( light );
	fS.add( p, 'swell', 0, 2, 0.01 ).name( '外海涌浪' ).onChange( light );
	fS.add( p, 'wind', 0, 2, 0.01 ).name( '风' ).onChange( light );

	const fA = gui.addFolder( '大气 Atmosphere' );
	fA.add( p, 'fogDensity', 0, 0.006, 0.00005 ).name( '雾浓度' ).onChange( light );
	fA.add( p, 'haze', 0, 0.002, 0.00001 ).name( '远景霾' ).onChange( light );
	fA.add( p, 'cloudCover', 0, 1, 0.01 ).name( '云量' ).onChange( light ).onFinishChange( heavy );
	fA.add( p, 'cloudDensity', 0.2, 3, 0.01 ).name( '云厚度' ).onChange( light ).onFinishChange( heavy );

	const v = app.view;
	const fV = gui.addFolder( '画面 View' );
	fV.add( v, 'timeScale', 0, 3, 0.01 ).name( '时间流速' );
	fV.add( v, 'reflections' ).name( '平面反射' ).onChange( () => app.applyView() );
	fV.add( v, 'bloom', 0, 1, 0.01 ).name( '泛光' ).onChange( () => app.applyView() );
	fV.add( v, 'vignette', 0, 1, 0.01 ).name( '暗角' ).onChange( () => app.applyView() );
	fV.add( v, 'grain', 0, 0.1, 0.001 ).name( '胶片颗粒' ).onChange( () => app.applyView() );
	fV.add( v, 'pixelRatio', 0.5, 2, 0.05 ).name( '渲染分辨率' ).onFinishChange( () => app.applyView( true ) );
	fV.close();

	function syncMood( name ) {
		moodButtons.forEach( ( b ) => b.classList.toggle( 'active', b.dataset.mood === name ) );
		gui.controllersRecursive().forEach( ( c ) => c.updateDisplay() );
	}

	function syncPreset( name ) {
		presetButtons.forEach( ( b ) => b.classList.toggle( 'active', b.dataset.preset === name ) );
	}

	return { syncMood, syncPreset, setSound, gui };

}
