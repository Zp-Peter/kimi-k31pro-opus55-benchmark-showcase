import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {Opening} from './scenes/Opening.jsx';
import {Reveal} from './scenes/Reveal.jsx';
import {ContextScene} from './scenes/ContextScene.jsx';
import {CreationScene} from './scenes/CreationScene.jsx';
import {ResearchScene} from './scenes/ResearchScene.jsx';
import {MontageScene} from './scenes/MontageScene.jsx';
import {Finale} from './scenes/Finale.jsx';
import {Grain, Vignette} from './components/Visuals.jsx';

export const Film = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill className="film-root">
      <Sequence durationInFrames={150}><Opening /></Sequence>
      <Sequence from={150} durationInFrames={150}><Reveal /></Sequence>
      <Sequence from={300} durationInFrames={180}><ContextScene /></Sequence>
      <Sequence from={480} durationInFrames={270}><CreationScene /></Sequence>
      <Sequence from={750} durationInFrames={210}><ResearchScene /></Sequence>
      <Sequence from={960} durationInFrames={150}><MontageScene /></Sequence>
      <Sequence from={1110} durationInFrames={150}><Finale /></Sequence>
      <Audio src={staticFile('audio/kimi-original-score.wav')} volume={0.9} />
      <Vignette />
      <Grain frame={frame} />
    </AbsoluteFill>
  );
};
