import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {hash, range} from '../lib/motion.js';

export const Starfield = ({frame, count = 90, opacity = 1, speed = 1}) => (
  <AbsoluteFill style={{opacity}}>
    {Array.from({length: count}, (_, i) => {
      const depth = 0.25 + hash(i + 4) * 0.75;
      const size = 0.7 + depth * 2.2;
      const x = (hash(i + 11) * 2100 - 90 + frame * speed * depth * 0.14) % 2100;
      const y = hash(i + 29) * 1080;
      const flicker = 0.4 + 0.6 * Math.abs(Math.sin(frame * 0.025 + i));
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            width: size,
            height: size,
            borderRadius: '50%',
            background: i % 7 === 0 ? '#8eeaff' : '#ffffff',
            opacity: flicker * depth * 0.6,
            boxShadow: depth > 0.85 ? '0 0 10px rgba(160,210,255,.6)' : 'none',
          }}
        />
      );
    })}
  </AbsoluteFill>
);

export const GlowOrb = ({frame, size = 520, style = {}, intensity = 1}) => {
  const breathe = 1 + Math.sin(frame * 0.035) * 0.012;
  return (
    <div
      className="glow-orb-wrap"
      style={{width: size, height: size, transform: `scale(${breathe})`, ...style}}
    >
      <div className="orb-aura" style={{opacity: 0.6 * intensity}} />
      <div className="glow-orb" style={{filter: `brightness(${0.85 + intensity * 0.15})`}} />
      <div className="orb-shade" />
      <div className="orb-rim" style={{opacity: intensity}} />
    </div>
  );
};

export const OrbitRings = ({frame, size = 760, style = {}, color = '#8f80ff'}) => (
  <div className="orbit-rings" style={{width: size, height: size, ...style}}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className={`orbit-ring orbit-ring-${i}`}
        style={{
          borderColor: `${color}${i === 0 ? '70' : '35'}`,
          transform: `translate(-50%, -50%) rotate(${frame * (i % 2 ? -0.11 : 0.08) + i * 57}deg) rotateX(${62 + i * 8}deg)`,
        }}
      >
        <i style={{background: color, boxShadow: `0 0 18px ${color}`}} />
      </div>
    ))}
  </div>
);

export const Grid = ({frame, dark = true, perspective = false}) => (
  <div
    className={perspective ? 'perspective-grid' : 'line-grid'}
    style={{
      opacity: dark ? 0.18 : 0.12,
      backgroundPosition: perspective ? `0 ${frame * 1.8}px` : `${frame * 0.08}px 0`,
    }}
  />
);

export const Grain = ({frame}) => {
  const x = -(frame % 4) * 31;
  const y = -(frame % 3) * 47;
  return (
    <AbsoluteFill className="grain-layer">
      <Img
        src={staticFile('assets/grain.png')}
        style={{width: 'calc(100% + 180px)', height: 'calc(100% + 180px)', left: x, top: y}}
      />
    </AbsoluteFill>
  );
};

export const Vignette = () => <AbsoluteFill className="vignette" />;

export const Eyebrow = ({children, style = {}, dark = false}) => (
  <div className={`eyebrow ${dark ? 'eyebrow-dark' : ''}`} style={style}>
    <span className="eyebrow-line" />
    {children}
  </div>
);

export const MaskLine = ({children, progress, style = {}, delay = 0}) => {
  const p = Math.max(0, Math.min(1, progress - delay));
  return (
    <div className="mask-line" style={style}>
      <div
        style={{
          transform: `translateY(${(1 - p) * 112}%) rotate(${(1 - p) * 2.5}deg)`,
          opacity: p,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const ChapterTag = ({index, children, dark = false, style = {}}) => (
  <div className={`chapter-tag ${dark ? 'chapter-tag-dark' : ''}`} style={style}>
    <b>{index}</b>
    <span>{children}</span>
  </div>
);

export const FocusCorners = ({color = 'rgba(255,255,255,.6)', inset = 42}) => (
  <div className="focus-corners" style={{inset, '--corner-color': color}}>
    <i /><i /><i /><i />
  </div>
);

export const OrbitalMark = ({size = 68, color = '#f4f5f7', frame = 0}) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <circle cx="40" cy="40" r="25" stroke={color} strokeOpacity=".25" />
    <path d="M58 15C44 17 34 28 34 41C34 54 44 64 57 65C51 72 42 76 32 74C15 71 4 54 8 37C12 20 29 9 46 13" fill={color} />
    <ellipse cx="40" cy="40" rx="36" ry="14" stroke={color} strokeOpacity=".75" transform={`rotate(${-24 + Math.sin(frame * 0.03) * 4} 40 40)`} />
    <circle cx="70" cy="29" r="3" fill="#8fe8ff" />
  </svg>
);

export const SpeedLines = ({frame, amount = 36, opacity = 0.5}) => (
  <AbsoluteFill style={{overflow: 'hidden', opacity}}>
    {Array.from({length: amount}, (_, i) => {
      const angle = (i / amount) * Math.PI * 2 + hash(i) * 0.08;
      const length = 80 + hash(i + 33) * 240;
      const travel = ((frame * (12 + hash(i) * 15) + hash(i + 8) * 1500) % 1500) + 180;
      const x = 960 + Math.cos(angle) * travel;
      const y = 540 + Math.sin(angle) * travel * 0.62;
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            width: length,
            height: i % 4 === 0 ? 2 : 1,
            transformOrigin: 'right center',
            transform: `rotate(${angle}rad)`,
            background: 'linear-gradient(90deg, transparent, rgba(185,225,255,.8))',
          }}
        />
      );
    })}
  </AbsoluteFill>
);

export const ExposureFlash = ({frame, at = 0, duration = 10, color = '#fff', peak = 0.9}) => {
  const local = frame - at;
  if (local < 0 || local > duration) return null;
  const opacity = Math.sin((local / duration) * Math.PI) * peak;
  return <AbsoluteFill style={{background: color, opacity, zIndex: 90, pointerEvents: 'none'}} />;
};
