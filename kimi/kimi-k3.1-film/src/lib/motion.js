import {Easing, interpolate, spring} from 'remotion';

export const clamp = {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
};

export const range = (frame, input, output, easing = Easing.out(Easing.cubic)) =>
  interpolate(frame, input, output, {...clamp, easing});

export const smooth = (frame, start, end) =>
  range(frame, [start, end], [0, 1], Easing.inOut(Easing.cubic));

export const enter = (frame, delay = 0, duration = 24) =>
  range(frame, [delay, delay + duration], [0, 1], Easing.out(Easing.exp));

export const exit = (frame, start, duration = 18) =>
  range(frame, [start, start + duration], [1, 0], Easing.in(Easing.cubic));

export const pop = (frame, fps, delay = 0) =>
  spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: {damping: 18, stiffness: 110, mass: 0.8},
  });

export const hash = (seed) => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
  return value - Math.floor(value);
};

export const formatNumber = (value) => Math.round(value).toLocaleString('en-US');

export const fadeThrough = (frame, inEnd, outStart, outEnd) =>
  Math.min(
    range(frame, [0, inEnd], [0, 1], Easing.linear),
    range(frame, [outStart, outEnd], [1, 0], Easing.linear),
  );
