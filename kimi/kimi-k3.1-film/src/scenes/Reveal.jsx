import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {enter, pop, range, smooth} from '../lib/motion.js';
import {Eyebrow, Grid, OrbitRings, Starfield} from '../components/Visuals.jsx';

export const Reveal = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const titleIn = pop(frame, fps, 2);
  const subtitleIn = enter(frame, 64, 24);
  const statIn = enter(frame, 86, 24);
  const camera = range(frame, [0, 149], [1.13, 1.01]);
  const exitPush = smooth(frame, 138, 149);

  return (
    <AbsoluteFill className="scene scene-dark reveal-scene">
      <div className="ambient ambient-cyan" />
      <Starfield frame={frame} count={65} opacity={0.45} speed={-0.25} />
      <Grid frame={frame} />
      <OrbitRings frame={-frame} size={1250} color="#79ddff" style={{left: '50%', top: '50%', opacity: 0.25, transform: 'translate(-50%, -50%) rotate(18deg)'}} />
      <div className="reveal-ghost" style={{transform: `translate(-50%, -50%) scale(${1.05 + frame * 0.001})`, opacity: 0.12}}>K3.1</div>

      <div
        className="reveal-lockup"
        style={{
          transform: `translate(-50%, -50%) scale(${camera * (0.74 + titleIn * 0.26) + exitPush * 0.3})`,
          opacity: Math.min(1, titleIn * 1.4),
          filter: `blur(${(1 - titleIn) * 14 + exitPush * 5}px)`,
        }}
      >
        <div className="reveal-kimi">KIMI</div>
        <div className="reveal-title-row">
          <div className="reveal-title">K3.1</div>
          <div className="reveal-pro">PRO</div>
        </div>
        <div className="reveal-scan" style={{transform: `translateX(${range(frame, [6, 62], [-900, 1100])}px)`, opacity: range(frame, [6, 16, 52, 62], [0, 0.8, 0.8, 0])}} />
      </div>

      <div className="reveal-subtitle" style={{opacity: subtitleIn, transform: `translate(-50%, ${24 * (1 - subtitleIn)}px)`}}>
        新一代旗舰模型
      </div>
      <div className="reveal-stats" style={{opacity: statIn * (1 - exitPush)}}>
        <div><b>3 万亿级</b><span>参数规模</span></div>
        <i />
        <div><b>原生视觉理解</b><span>多模态感知</span></div>
      </div>
      <Eyebrow style={{position: 'absolute', left: 72, top: 54, opacity: enter(frame, 25, 20)}}>THE NEW FLAGSHIP / 2026</Eyebrow>
      <div className="reveal-side-note">MOONSHOT AI<br />INTELLIGENCE, IN MOTION</div>
      <div className="handoff-line" style={{transform: `scaleX(${exitPush})`, opacity: exitPush}} />
      <AbsoluteFill style={{background: '#f3f7ff', opacity: 1 - enter(frame, 0, 10), zIndex: 80}} />
    </AbsoluteFill>
  );
};
