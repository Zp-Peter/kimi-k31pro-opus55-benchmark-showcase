import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {enter, pop, smooth} from '../lib/motion.js';
import {GlowOrb, Grid, OrbitRings, Starfield} from '../components/Visuals.jsx';

export const Finale = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const orbIn = enter(frame, 0, 28);
  const titleIn = pop(frame, fps, 14);
  const taglineIn = enter(frame, 50, 24);
  const footerIn = enter(frame, 82, 22);
  const fadeOut = smooth(frame, 140, 149);

  return (
    <AbsoluteFill className="scene scene-dark finale-scene" style={{opacity: 1 - fadeOut}}>
      <Starfield frame={-frame} count={80} opacity={0.48} speed={0.18} />
      <Grid frame={frame} />
      <div className="finale-aura" style={{opacity: orbIn}} />
      <GlowOrb frame={frame} size={176} intensity={1.15} style={{left: 'calc(50% - 88px)', top: 105, opacity: orbIn}} />
      <OrbitRings frame={frame} size={360} style={{left: 'calc(50% - 180px)', top: 13, opacity: orbIn * 0.7}} />

      <div className="finale-lockup" style={{transform: `translate(-50%, -50%) scale(${0.86 + titleIn * 0.14})`, opacity: titleIn, filter: `blur(${(1 - titleIn) * 10}px)`}}>
        <div className="finale-kimi">KIMI</div>
        <div className="finale-title">K3.1 <span>PRO</span></div>
        <div className="finale-rule"><i style={{transform: `scaleX(${enter(frame, 34, 24)})`}} /></div>
      </div>
      <div className="finale-tagline" style={{opacity: taglineIn, transform: `translate(-50%, ${(1 - taglineIn) * 24}px)`}}>
        复杂，交给 <span>Kimi。</span>
      </div>
      <div className="finale-cta" style={{opacity: footerIn}}>
        <span>新一代旗舰模型</span><i /><b>kimi.com</b>
      </div>
      <div className="finale-footer" style={{opacity: footerIn}}>
        <span>MOONSHOT AI</span><i /><span>月之暗面</span>
      </div>
      <div className="finale-corner left">INTELLIGENCE<br />IN MOTION</div>
      <div className="finale-corner right">K3.1 / 2026<br />FLAGSHIP MODEL</div>
    </AbsoluteFill>
  );
};
