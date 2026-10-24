// Scene layout and look presets.
// World units are metres, +Y up, +X east, +Z south (the sea is on the +Z side of the beach).

export const LAYOUT = {
	// Reynisfjall base line, from the inland (north-west) flank, past the basalt columns,
	// round the headland tip and along its south-facing sea cliff.
	cliffPoints: [
		[ - 140, - 470 ], [ - 40, - 330 ], [ 30, - 205 ], [ 66, - 128 ], [ 92, - 84 ],
		[ 128, - 64 ], [ 170, - 55 ], [ 208, - 41 ], [ 238, - 16 ], [ 257, 20 ],
		[ 270, 58 ], [ 296, 86 ], [ 348, 98 ], [ 430, 94 ], [ 560, 84 ], [ 760, 76 ], [ 905, 64 ],
		[ 985, 22 ], [ 1030, - 110 ], [ 1060, - 380 ], [ 1080, - 700 ]
	],

	// Reynisdrangar sea stacks: base position, height, base radius, elongation, rotation, seed
	stacks: [
		{ x: 338, z: 152, h: 66, r: 15, e: 1.55, rot: 0.55, seed: 11 },
		{ x: 376, z: 222, h: 49, r: 12, e: 1.35, rot: 0.2, seed: 23 },
		{ x: 312, z: 206, h: 37, r: 10, e: 1.8, rot: - 0.4, seed: 37 },
		{ x: 405, z: 140, h: 15, r: 6, e: 1.3, rot: 0.9, seed: 51 },
		{ x: 288, z: 120, h: 8, r: 5, e: 1.6, rot: 0.1, seed: 67 }
	],

	// Arc-length window of the cliff line (metres from its start) that holds the column formation
	columns: { from: 462, to: 532, caveAt: 548, caveWidth: 15, caveHeight: 13, caveDepth: 11 },

	// Height texture / distance field bounds
	field: { x0: - 640, z0: - 520, x1: 1150, z1: 520, cell: 1.0 }
};

// Camera stations. y values are heights above the local ground (or the sea surface).
export const CAMERA_PRESETS = {
	beach: { pos: [ 6, 1.8, - 15 ], target: [ 230, 12, 34 ], fov: 46 },
	columns: { pos: [ 117, 1.75, - 18 ], target: [ 131, 6, - 58 ], fov: 52 },
	stacks: { pos: [ 165, 1.8, - 4 ], target: [ 345, 26, 170 ], fov: 40 },
	shore: { pos: [ 48, 1.0, - 6.5 ], target: [ 70, 0.2, 14 ], fov: 50 },
	aerial: { pos: [ - 70, 95, 120 ], target: [ 200, 0, - 20 ], fov: 45 }
};

// Linear-space colours. Each preset fully describes sky, light, fog and sea state.
export const MOODS = {
	overcast: {
		label: '阴天 · Overcast',
		sunElevation: 13, sunAzimuth: 128, // azimuth: degrees clockwise from north (+X is 90)
		sunIntensity: 0.9, sunColor: [ 1.0, 0.94, 0.86 ],
		zenith: [ 0.6, 0.63, 0.68 ], horizon: [ 0.7, 0.72, 0.75 ],
		cloudLit: [ 0.84, 0.86, 0.9 ], cloudDark: [ 0.33, 0.35, 0.39 ],
		cloudCover: 0.84, cloudDensity: 1.6, cloudScale: 1.15, sunDisc: 0.0, sunGlow: [ 0.45, 0.42, 0.36 ],
		fogDensity: 0.00042, fogFalloff: 0.012, haze: 0.00009, fogTint: [ 0.66, 0.69, 0.72 ], fogSunTint: [ 0.86, 0.83, 0.77 ],
		waveHeight: 2.1, wavePeriod: 10.5, runup: 1.0, swell: 0.9, wind: 0.6,
		exposure: 1.0, envIntensity: 1.0
	},
	golden: {
		label: '黄金时刻 · Golden hour',
		sunElevation: 4.5, sunAzimuth: 127, // low winter sun just beside the stacks: backlit rock, a glitter path
		sunIntensity: 3.6, sunColor: [ 1.0, 0.68, 0.42 ],
		zenith: [ 0.22, 0.31, 0.46 ], horizon: [ 0.98, 0.74, 0.55 ],
		cloudLit: [ 1.25, 0.9, 0.7 ], cloudDark: [ 0.28, 0.25, 0.28 ],
		cloudCover: 0.5, cloudDensity: 1.4, cloudScale: 1.0, sunDisc: 1.0, sunGlow: [ 2.4, 1.3, 0.6 ],
		fogDensity: 0.00024, fogFalloff: 0.012, haze: 0.00005, fogTint: [ 0.86, 0.7, 0.58 ], fogSunTint: [ 1.5, 0.95, 0.55 ],
		waveHeight: 1.7, wavePeriod: 11.5, runup: 0.95, swell: 0.6, wind: 0.35,
		exposure: 0.95, envIntensity: 1.0
	},
	storm: {
		label: '风暴 · Storm',
		sunElevation: 18, sunAzimuth: 160,
		sunIntensity: 0.35, sunColor: [ 0.9, 0.93, 1.0 ],
		zenith: [ 0.2, 0.22, 0.25 ], horizon: [ 0.44, 0.47, 0.5 ],
		cloudLit: [ 0.5, 0.53, 0.57 ], cloudDark: [ 0.13, 0.145, 0.165 ],
		cloudCover: 0.97, cloudDensity: 2.4, cloudScale: 1.4, sunDisc: 0.0, sunGlow: [ 0.15, 0.15, 0.15 ],
		fogDensity: 0.0017, fogFalloff: 0.01, haze: 0.00035, fogTint: [ 0.42, 0.45, 0.48 ], fogSunTint: [ 0.5, 0.52, 0.55 ],
		waveHeight: 3.0, wavePeriod: 12.5, runup: 1.35, swell: 1.25, wind: 1.6,
		exposure: 1.25, envIntensity: 1.0
	}
};
