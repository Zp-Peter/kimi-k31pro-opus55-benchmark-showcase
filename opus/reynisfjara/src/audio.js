import { shoreZ, waveBeta, travelTime, waveHeightN, breakDist } from './glsl/shore.js';

// Procedural surf soundscape driven by the same wave clock as the shaders: each breaker
// crashes when it breaks in front of the camera, then the bore's uprush hisses over the
// sand and drains back. A low surf bed and gusting wind fill the gaps.

function pinkNoiseBuffer( ctx, seconds ) {

	const len = Math.floor( ctx.sampleRate * seconds );
	const buf = ctx.createBuffer( 2, len, ctx.sampleRate );
	for ( let c = 0; c < 2; c ++ ) {
		const d = buf.getChannelData( c );
		let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
		for ( let i = 0; i < len; i ++ ) {
			const w = Math.random() * 2 - 1;
			b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759; b2 = 0.969 * b2 + w * 0.153852;
			b3 = 0.8665 * b3 + w * 0.3104856; b4 = 0.55 * b4 + w * 0.5329522; b5 = - 0.7616 * b5 - w * 0.016898;
			d[ i ] = ( b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362 ) * 0.11;
			b6 = w * 0.115926;
		}
		// cross-fade the loop point
		const f = Math.floor( ctx.sampleRate * 0.05 );
		for ( let i = 0; i < f; i ++ ) { const t = i / f; d[ i ] = d[ i ] * t + d[ len - f + i ] * ( 1 - t ); }
	}
	return buf;

}

export class SurfAudio {

	constructor() {

		this.ctx = null;
		this.on = false;
		this.scheduled = new Set();

	}

	get supported() { return typeof window.AudioContext !== 'undefined' || typeof window.webkitAudioContext !== 'undefined'; }

	start() {

		if ( this.ctx ) {
			this.ctx.resume();
			this.on = true;
			this.master.gain.setTargetAtTime( 0.9, this.ctx.currentTime, 0.5 );
			return;
		}
		const ctx = this.ctx = new ( window.AudioContext || window.webkitAudioContext )();
		const buf = pinkNoiseBuffer( ctx, 7 );
		const source = ( offset, rate = 1 ) => {
			const s = ctx.createBufferSource();
			s.buffer = buf; s.loop = true; s.playbackRate.value = rate;
			s.start( 0, offset );
			return s;
		};
		const filter = ( type, f, q = 0.7 ) => {
			const b = ctx.createBiquadFilter();
			b.type = type; b.frequency.value = f; b.Q.value = q;
			return b;
		};
		const gain = ( v ) => { const g = ctx.createGain(); g.gain.value = v; return g; };

		this.master = gain( 0 );
		const comp = ctx.createDynamicsCompressor();
		comp.threshold.value = - 16; comp.ratio.value = 3.5; comp.attack.value = 0.02; comp.release.value = 0.4;
		this.master.connect( comp ).connect( ctx.destination );

		// distant surf bed
		this.bedGain = gain( 0.3 );
		source( 0, 0.9 ).connect( filter( 'lowpass', 380, 0.5 ) ).connect( this.bedGain ).connect( this.master );

		// breaker crash
		this.crashLP = filter( 'lowpass', 700, 0.4 );
		this.crashGain = gain( 0 );
		this.crashPan = ctx.createStereoPanner();
		source( 2.3, 0.8 ).connect( this.crashLP ).connect( this.crashGain ).connect( this.crashPan ).connect( this.master );

		// swash hiss and backwash fizz
		this.fizzHP = filter( 'highpass', 1400, 0.5 );
		this.fizzGain = gain( 0 );
		this.fizzPan = ctx.createStereoPanner();
		source( 4.1, 1.1 ).connect( this.fizzHP ).connect( filter( 'lowpass', 9000, 0.3 ) ).connect( this.fizzGain ).connect( this.fizzPan ).connect( this.master );

		// wind
		this.windBP = filter( 'bandpass', 520, 0.8 );
		this.windGain = gain( 0.05 );
		source( 5.6, 1.0 ).connect( this.windBP ).connect( this.windGain ).connect( this.master );

		this.on = true;
		this.master.gain.setTargetAtTime( 0.9, ctx.currentTime, 0.6 );

	}

	stop() {

		if ( ! this.ctx ) return;
		this.on = false;
		this.master.gain.setTargetAtTime( 0, this.ctx.currentTime, 0.25 );

	}

	// simTime: shader clock (s), timeScale: sim seconds per real second, surf: U.uSurf.value, wind: 0..2
	update( simTime, timeScale, camera, surf, wind ) {

		if ( ! this.ctx || ! this.on || timeScale <= 0 ) return;
		const ctx = this.ctx, now = ctx.currentTime;
		const cp = camera.position;
		const T = surf.x;
		const beta = waveBeta( cp.x );
		const sz = shoreZ( cp.x );
		const camS = cp.z - sz; // camera offshore distance (negative on the beach)
		const height = Math.max( 0, cp.y );

		// camera right vector for panning
		const e = camera.matrixWorld.elements;
		const rx = e[ 0 ], rz = e[ 2 ];
		const pan = ( x, z ) => {
			const dx = x - cp.x, dz = z - cp.z, L = Math.hypot( dx, dz ) || 1;
			return Math.max( - 0.85, Math.min( 0.85, ( dx * rx + dz * rz ) / L ) );
		};

		const n0 = Math.floor( simTime / T + beta );
		for ( let k = 0; k <= 2; k ++ ) {
			const n = n0 + k;
			if ( this.scheduled.has( n ) ) continue;
			const H = waveHeightN( n ) * surf.y;
			const sb = breakDist( n, H );
			const tShore = ( n - beta ) * T;
			const tBreak = tShore - travelTime( sb );
			const lead = tBreak - simTime;
			if ( lead < 0 || lead > 0.3 ) continue;
			this.scheduled.add( n );
			if ( this.scheduled.size > 32 ) this.scheduled.delete( Math.min( ...this.scheduled ) );

			const t0 = now + lead / timeScale;
			const dBreak = Math.hypot( camS - sb, height ) + 4;
			const vol = Math.min( 1.4, H * H * 1.1 / ( 1 + dBreak / 30 ) );
			const g = this.crashGain.gain;
			g.cancelScheduledValues( t0 );
			g.setTargetAtTime( vol, t0, 0.09 / timeScale );
			g.setTargetAtTime( vol * 0.12, t0 + 0.7 / timeScale, 1.3 / timeScale );
			const f = this.crashLP.frequency;
			f.cancelScheduledValues( t0 );
			f.setTargetAtTime( 650 + 1100 * Math.min( H, 1.6 ), t0, 0.05 );
			f.setTargetAtTime( 380, t0 + 0.8 / timeScale, 1.2 / timeScale );
			this.crashPan.pan.setTargetAtTime( pan( cp.x, sz + sb ), t0, 0.2 );

			const ts = now + ( tShore - simTime ) / timeScale;
			const dShore = Math.hypot( camS, height ) + 3;
			const fv = Math.min( 0.9, 0.55 * H / ( 1 + dShore / 22 ) );
			const fg = this.fizzGain.gain;
			fg.cancelScheduledValues( ts - 0.6 / timeScale );
			fg.setTargetAtTime( fv, ts - 0.6 / timeScale, 0.35 / timeScale );
			fg.setTargetAtTime( fv * 0.45, ts + 2.2 / timeScale, 1.0 / timeScale );
			fg.setTargetAtTime( 0.0, ts + 5.0 / timeScale, 1.6 / timeScale );
			this.fizzPan.pan.setTargetAtTime( pan( cp.x, sz ), ts, 0.3 );
		}

		// surf bed fades with distance from the surf zone and with altitude; wind grows with altitude
		const dz = Math.max( 0, - camS - 30 ) + Math.max( 0, camS - 120 );
		this.bedGain.gain.setTargetAtTime( 0.12 + 0.3 * surf.y / ( 1 + dz / 80 + height / 120 ), now, 0.5 );
		const gust = 0.5 + 0.5 * Math.sin( simTime * 0.37 ) * Math.sin( simTime * 0.113 + 1.3 );
		this.windGain.gain.setTargetAtTime( ( 0.02 + 0.06 * wind ) * ( 0.6 + 0.8 * gust ) * ( 1 + height / 60 ), now, 0.8 );
		this.windBP.frequency.setTargetAtTime( 380 + 380 * gust * ( 0.5 + 0.5 * wind ), now, 1.0 );

	}

}
