import React from 'react';
import {Composition} from 'remotion';
import {Film} from './Film.jsx';

export const Root = () => (
  <Composition
    id="KimiFilm"
    component={Film}
    durationInFrames={1260}
    fps={30}
    width={1920}
    height={1080}
    defaultProps={{}}
  />
);
