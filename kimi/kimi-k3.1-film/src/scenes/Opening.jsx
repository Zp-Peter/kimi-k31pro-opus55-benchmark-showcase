import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {enter, exit, range, smooth} from '../lib/motion.js';
import {ChapterTag, Eyebrow, GlowOrb, Grid, MaskLine, OrbitRings, Starfield} from '../components/Visuals.jsx';

export const Opening = () => {
  const frame = useCurrentFrame();
  const camera = range(frame, [0, 132], [0.82, 1.08]);
  const handoff = smooth(frame, 132, 149);
  const copyOpacity = exit(frame, 112, 22);

  return (
    <AbsoluteFill className="scene scene-dark">
      <div className="ambient ambient-violet" />
      <Starfield frame={frame} count={115} opacity={0.9} speed={0.5} />
      <Grid frame={frame} perspective />
      <div
        className="opening-camera"
        style={{
          transform: `scale(${camera + handoff * 4.5}) translate3d(${handoff * -4}%, 0, 0)`,
          filter: `blur(${handoff * 8}px)`,
        }}
      >
        <GlowOrb frame={frame} size={590} intensity={1.1} style={{left: '56%', top: '15%'}} />
        <OrbitRings frame={frame} size={880} style={{left: 'calc(56% - 145px)', top: 'calc(15% - 145px)'}} />
      </div>

      <div className="opening-copy" style={{opacity: copyOpacity}}>
        <Eyebrow style={{opacity: enter(frame, 4, 20)}}>WHEN COMPLEXITY BECOMES THE NORM</Eyebrow>
        <MaskLine progress={enter(frame, 18, 30)} className="opening-title">
          <span className="opening-title">当复杂，</span>
        </MaskLine>
        <MaskLine progress={enter(frame, 38, 30)} style={{marginTop: 4}}>
          <span className="opening-title opening-title-outline">成为常态。</span>
        </MaskLine>
        <div className="opening-sub" style={{opacity: enter(frame, 70, 24), transform: `translateY(${(1 - enter(frame, 70, 24)) * 18}px)`}}>
          我们需要的不只是答案，而是向前的能力。
        </div>
      </div>

      <ChapterTag index="00" style={{left: 72, bottom: 54, opacity: enter(frame, 8, 20)}}>THE QUESTION</ChapterTag>
      <div className="coordinate-readout" style={{opacity: enter(frame, 30, 20)}}>
        <span>31.2304° N</span><span>121.4737° E</span><i />
      </div>
      <AbsoluteFill style={{background: '#eef6ff', opacity: handoff, zIndex: 80}} />
    </AbsoluteFill>
  );
};
