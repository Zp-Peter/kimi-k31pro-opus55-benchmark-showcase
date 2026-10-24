import React from 'react';
import {AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame} from 'remotion';
import {enter, smooth} from '../lib/motion.js';
import {Eyebrow, GlowOrb, OrbitRings, SpeedLines} from '../components/Visuals.jsx';

const SHOTS = [
  {src: 'assets/celestial-palace.mp4', start: 960, label: 'CODE', cn: '编程与智能体', filter: 'saturate(.8) contrast(1.12) brightness(.82)'},
  {src: 'assets/cathedral.mp4', start: 450, label: 'CREATE', cn: '3D 创作', filter: 'saturate(.72) contrast(1.1) brightness(.85)'},
  {src: 'assets/airport.mp4', start: 465, label: 'WORLD', cn: '完整世界构建', filter: 'saturate(.72) contrast(1.12) brightness(.8)'},
  {src: 'assets/turbofan.mp4', start: 210, label: 'MODEL', cn: '空间与参数化建模', filter: 'saturate(.55) contrast(1.08)'},
];

export const MontageScene = () => {
  const frame = useCurrentFrame();
  const shotIndex = Math.min(3, Math.floor(frame / 30));
  const local = frame - shotIndex * 30;
  const shot = SHOTS[shotIndex];
  const tunnel = Math.max(0, frame - 120);
  const labelIn = enter(local, 1, 8);
  const endFade = smooth(frame, 145, 149);

  return (
    <AbsoluteFill className="scene montage-scene">
      {frame < 120 ? (
        <AbsoluteFill style={{background: '#050609'}}>
          <OffthreadVideo
            key={shot.src}
            muted
            src={staticFile(shot.src)}
            startFrom={shot.start}
            playbackRate={1.15}
            style={{
              position: 'absolute', width: '100%', height: '100%', objectFit: 'cover',
              transform: `scale(${1.16 - local * (shotIndex % 2 ? 0.0025 : -0.0015)}) translateX(${(shotIndex - 1.5) * local * 0.018}%)`,
              filter: `${shot.filter} blur(${Math.max(0, 3 - local) * 1.5}px)`,
            }}
          />
          <div className="montage-grade" />
          <SpeedLines frame={frame * 2} amount={28} opacity={0.16} />
          <div className="montage-label" style={{opacity: labelIn, transform: `translateX(${(1 - labelIn) * -90}px) skewX(${(1 - labelIn) * -8}deg)`}}>
            <span>0{shotIndex + 1} / CAPABILITY</span>
            <div>{shot.label}</div>
            <small>{shot.cn}</small>
          </div>
          <div className="montage-time">K3.1&nbsp;&nbsp; / &nbsp;&nbsp;00:0{shotIndex + 1}</div>
          <AbsoluteFill style={{background: shotIndex === 3 ? '#fff' : '#dff5ff', opacity: Math.max(0, 1 - local / 4) * 0.42}} />
        </AbsoluteFill>
      ) : (
        <AbsoluteFill className="tunnel-shot">
          <div className="ambient ambient-cyan" />
          <GlowOrb frame={frame} size={240} intensity={1.3} style={{left: 'calc(50% - 120px)', top: 'calc(50% - 120px)'}} />
          <OrbitRings frame={frame * 4} size={720} style={{left: 'calc(50% - 360px)', top: 'calc(50% - 360px)'}} />
          <SpeedLines frame={tunnel * 5} amount={72} opacity={0.75} />
          <div className="tunnel-copy" style={{transform: `translate(-50%, -50%) scale(${0.72 + enter(tunnel, 0, 12) * 0.28 + tunnel * 0.012})`, opacity: enter(tunnel, 0, 8), filter: `blur(${(1 - enter(tunnel, 0, 8)) * 10}px)`}}>
            <Eyebrow style={{justifyContent: 'center'}}>THINK DEEPER / GO FURTHER</Eyebrow>
            <div className="tunnel-title">BEYOND.</div>
          </div>
        </AbsoluteFill>
      )}
      <AbsoluteFill style={{background: '#050609', opacity: endFade, zIndex: 80}} />
    </AbsoluteFill>
  );
};
