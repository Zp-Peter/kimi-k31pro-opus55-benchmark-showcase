import React from 'react';
import {AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame} from 'remotion';
import {enter, range, smooth} from '../lib/motion.js';
import {ChapterTag, Eyebrow, FocusCorners} from '../components/Visuals.jsx';

const videoBase = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const CreationScene = () => {
  const frame = useCurrentFrame();
  const aExit = smooth(frame, 110, 124);
  const b = Math.max(0, frame - 110);
  const bEnter = enter(b, 0, 12);
  const c = Math.max(0, frame - 190);
  const cEnter = enter(c, 0, 14);
  const copyIn = enter(frame, 18, 26);
  const copyOut = 1 - smooth(frame, 90, 108);
  const airportCopy = enter(c, 18, 22);
  const whiteOut = smooth(frame, 259, 269);

  return (
    <AbsoluteFill className="scene creation-scene">
      <AbsoluteFill style={{background: '#000', zIndex: 0}}>
        <OffthreadVideo
          muted
          src={staticFile('assets/celestial-palace.mp4')}
          startFrom={0}
          style={{
            ...videoBase,
            transform: `scale(${1.08 + frame * 0.0013 + aExit * 0.12}) translateX(${-aExit * 22}%)`,
            filter: `saturate(.82) contrast(1.08) blur(${aExit * 8}px)`,
          }}
        />
        <div className="cinema-grade" />
        <FocusCorners inset={38} />
        <ChapterTag index="02" style={{left: 72, top: 54, opacity: enter(frame, 4, 16)}}>CODE → WORLD</ChapterTag>
        <div className="source-badge" style={{opacity: enter(frame, 10, 18)}}><i />K3.1 GENERATED / UNREAL ENGINE 5.8</div>
        <div className="creation-copy" style={{opacity: copyIn * copyOut, transform: `translateY(${(1 - copyIn) * 44}px)`}}>
          <Eyebrow>FROM A SINGLE PROMPT</Eyebrow>
          <div className="creation-copy-small">一句指令，</div>
          <div className="creation-copy-big">构建完整世界。</div>
          <div className="capability-row"><span>CODE</span><i /><span>3D</span><i /><span>AGENT</span></div>
        </div>
        <div className="camera-readout">CAM 01&nbsp;&nbsp; 35MM&nbsp;&nbsp; DOLLY IN</div>
      </AbsoluteFill>

      {frame >= 110 && frame < 200 ? (
        <AbsoluteFill
          style={{
            clipPath: `inset(0 0 0 ${(1 - bEnter) * 100}%)`,
            transform: `translateX(${(1 - bEnter) * 220}px) scale(${1.04 - bEnter * 0.04})`,
            filter: `blur(${(1 - bEnter) * 7}px)`,
            background: '#0a0a0b',
            zIndex: 10,
          }}
        >
          <div className="spatial-left">
            <OffthreadVideo
              muted
              src={staticFile('assets/cathedral.mp4')}
              startFrom={360}
              playbackRate={1.15}
              style={{...videoBase, transform: `scale(${1.1 + b * 0.0018}) translateX(${-b * 0.035}%)`, filter: 'saturate(.75) contrast(1.08)'}}
            />
            <div className="panel-shade" />
            <div className="panel-caption"><span>01 / SPATIAL REASONING</span><b>理解空间</b></div>
          </div>
          <div className="spatial-divider"><i style={{transform: `scaleY(${enter(b, 8, 16)})`}} /></div>
          <div className="spatial-right">
            <OffthreadVideo
              muted
              src={staticFile('assets/turbofan.mp4')}
              startFrom={174}
              playbackRate={1.1}
              style={{...videoBase, objectFit: 'cover', transform: `scale(${1.05 + b * 0.001})`, filter: 'contrast(1.06) saturate(.7)'}}
            />
            <div className="model-label"><span>02 / PARAMETRIC MODELING</span><b>创造细节</b></div>
            <div className="model-crosshair">+<i />2,100 ENTITIES</div>
          </div>
          <div className="whip-line" style={{left: `${range(b, [0, 12], [100, 64])}%`}} />
        </AbsoluteFill>
      ) : null}

      {frame >= 190 ? (
        <AbsoluteFill style={{clipPath: `circle(${cEnter * 145}% at 72% 48%)`, background: '#132019', zIndex: 20}}>
          <OffthreadVideo
            muted
            src={staticFile('assets/airport.mp4')}
            startFrom={375}
            playbackRate={1.1}
            style={{...videoBase, transform: `scale(${1.13 - cEnter * 0.06 + c * 0.0008}) translateY(${-c * 0.025}%)`, filter: 'saturate(.75) contrast(1.1) brightness(.88)'}}
          />
          <div className="airport-grade" />
          <ChapterTag index="02" style={{left: 72, top: 54, opacity: airportCopy}}>CODE → WORLD</ChapterTag>
          <div className="source-badge" style={{opacity: airportCopy}}><i />K3.1 GENERATED / BLENDER + CYCLES</div>
          <div className="airport-copy" style={{opacity: airportCopy, transform: `translateY(${(1 - airportCopy) * 38}px)`}}>
            <Eyebrow>IDEA → EXECUTION → DELIVERY</Eyebrow>
            <div className="airport-title">从代码，<span>到世界。</span></div>
          </div>
          <div className="airport-hud"><span>GENERATIVE WORLD 03</span><i /><span>RENDER COMPLETE</span></div>
          <FocusCorners inset={38} color="rgba(255,255,255,.48)" />
        </AbsoluteFill>
      ) : null}
      <AbsoluteFill style={{background: '#f0eee8', opacity: whiteOut, zIndex: 80}} />
    </AbsoluteFill>
  );
};
