import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {enter, formatNumber, hash, range, smooth} from '../lib/motion.js';
import {ChapterTag, Eyebrow, Grid} from '../components/Visuals.jsx';

const TOKENS = ['推理', '{ }', 'CODE', '视觉', '01', 'RESEARCH', '文档', '→', 'AGENT', '上下文', 'fn()', '3D'];

const TokenStreams = ({frame, opacity}) => (
  <div className="token-streams" style={{opacity}}>
    {Array.from({length: 48}, (_, i) => {
      const lane = i % 12;
      const speed = 3 + hash(i + 20) * 7;
      const x = ((hash(i + 3) * 2400 + frame * speed) % 2400) - 240;
      const y = 80 + lane * 82 + (hash(i + 9) - 0.5) * 20;
      return (
        <div key={i} className="floating-token" style={{left: x, top: y, opacity: 0.18 + hash(i + 40) * 0.5}}>
          <span>{TOKENS[i % TOKENS.length]}</span><i />
        </div>
      );
    })}
  </div>
);

export const ContextScene = () => {
  const frame = useCurrentFrame();
  const countProgress = range(frame, [4, 84], [0, 1]);
  const count = Math.floor(1000000 * countProgress);
  const shift = smooth(frame, 112, 138);
  const exitPush = smooth(frame, 168, 179);
  const taglineIn = enter(frame, 122, 24);

  return (
    <AbsoluteFill className="scene scene-dark context-scene">
      <div className="ambient ambient-context" />
      <Grid frame={frame} />
      <TokenStreams frame={frame} opacity={0.42 + shift * 0.25} />
      <div className="context-aperture" style={{transform: `translate(-50%, -50%) scale(${1 + exitPush * 2.8})`, opacity: 0.8 - exitPush * 0.6}}>
        <div className="aperture-core" />
        {[0, 1, 2, 3].map((i) => <i key={i} style={{transform: `rotate(${i * 90 + frame * 0.15}deg)`}} />)}
      </div>

      <div
        className="context-counter"
        style={{
          opacity: enter(frame, 6, 10) * (1 - shift) * (1 - exitPush),
          transform: `translate(-50%, -50%) scale(${0.92 + enter(frame, 0, 20) * 0.08 + shift * 0.22}) translateY(${-shift * 70}px)`,
          filter: `blur(${shift * 9}px)`,
        }}
      >
        <div className="context-overline">CONTEXT WINDOW</div>
        <div className="context-number">{formatNumber(count)}</div>
        <div className="context-unit"><span>TOKENS</span><i />百万级上下文</div>
      </div>

      <div className="context-tagline" style={{opacity: taglineIn * (1 - exitPush), transform: `translate(-50%, -50%) translateY(${(1 - taglineIn) * 40}px) scale(${0.96 + taglineIn * 0.04})`}}>
        <Eyebrow style={{justifyContent: 'center', marginBottom: 28}}>ONE MILLION TOKENS / UNBROKEN THOUGHT</Eyebrow>
        <div className="context-tagline-main">长线思考，<span>不断线。</span></div>
        <p>从第一篇文档，到最后一次推演，始终理解全局。</p>
      </div>

      <div className="context-side-label" style={{opacity: enter(frame, 20, 20)}}>1M<br /><span>CONTEXT</span></div>
      <ChapterTag index="01" style={{left: 72, top: 54, opacity: enter(frame, 0, 20)}}>LONG CONTEXT</ChapterTag>
      <div className="context-bottom" style={{opacity: enter(frame, 36, 20)}}>
        <span>理解更多</span><i /><span>连接更远</span><i /><span>推理更深</span>
      </div>
      <AbsoluteFill style={{background: '#c8f3ff', opacity: (1 - enter(frame, 0, 8)) * 0.85 + exitPush * 0.35, zIndex: 80}} />
    </AbsoluteFill>
  );
};
