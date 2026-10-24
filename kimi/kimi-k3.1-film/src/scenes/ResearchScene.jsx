import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {enter, range, smooth} from '../lib/motion.js';
import {ChapterTag, Eyebrow, Grid} from '../components/Visuals.jsx';

const STEPS = ['检索与理解', '跨文档核对', '推理与建模', '交付完整结果'];

const AgentWorkflow = ({frame}) => {
  const cardIn = enter(frame, 48, 24);
  return (
    <div className="agent-card" style={{opacity: cardIn, transform: `translateY(${(1 - cardIn) * 70}px) rotateY(${(1 - cardIn) * -9}deg)`}}>
      <div className="agent-card-head"><span>KIMI / AGENT WORKFLOW</span><i />LIVE</div>
      <div className="agent-prompt">“ 完成研究，并交付可核验的结论。 ”</div>
      <div className="agent-steps">
        {STEPS.map((step, i) => {
          const p = enter(frame, 72 + i * 19, 14);
          return (
            <div className="agent-step" key={step} style={{opacity: p, transform: `translateX(${(1 - p) * 24}px)`}}>
              <div className="step-check" style={{transform: `scale(${0.5 + p * 0.5})`}}>{p > 0.85 ? '✓' : i + 1}</div>
              <span>{step}</span>
              <small>{p > 0.85 ? 'DONE' : 'RUNNING'}</small>
            </div>
          );
        })}
      </div>
      <div className="agent-progress"><i style={{transform: `scaleX(${range(frame, [65, 151], [0, 1])})`}} /></div>
      <div className="agent-foot"><span>LONG-HORIZON EXECUTION</span><b>{frame > 145 ? 'COMPLETE' : 'THINKING…'}</b></div>
    </div>
  );
};

const ResearchChart = ({frame}) => {
  const p = range(frame, [64, 140], [0, 1]);
  const area = range(frame, [100, 150], [0, 1]);
  return (
    <div className="research-chart" style={{opacity: enter(frame, 56, 22)}}>
      <div className="chart-head"><div><span>RESEARCH SYNTHESIS</span><b>从信息，到判断</b></div><small>VERIFIABLE / CLEAR</small></div>
      <svg viewBox="0 0 900 360" fill="none">
        <defs>
          <linearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#7367f8" stopOpacity=".32" />
            <stop offset="1" stopColor="#7367f8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 105, 170, 235, 300].map((y) => <path key={y} d={`M40 ${y}H860`} stroke="currentColor" strokeOpacity=".1" />)}
        {[40, 176, 312, 448, 584, 720, 860].map((x) => <path key={x} d={`M${x} 25V320`} stroke="currentColor" strokeOpacity=".07" />)}
        <path className="chart-area" d="M40 282C120 275 140 232 210 245C280 258 300 194 370 205C440 216 470 148 540 169C610 190 650 93 720 119C790 145 810 63 860 52V320H40Z" fill="url(#chartArea)" style={{opacity: area}} />
        <path pathLength="1" className="chart-line-shadow" d="M40 282C120 275 140 232 210 245C280 258 300 194 370 205C440 216 470 148 540 169C610 190 650 93 720 119C790 145 810 63 860 52" stroke="#7367f8" strokeOpacity=".18" strokeWidth="16" strokeLinecap="round" strokeDasharray="1" strokeDashoffset={1 - p} />
        <path pathLength="1" d="M40 282C120 275 140 232 210 245C280 258 300 194 370 205C440 216 470 148 540 169C610 190 650 93 720 119C790 145 810 63 860 52" stroke="#5750c9" strokeWidth="4" strokeLinecap="round" strokeDasharray="1" strokeDashoffset={1 - p} />
        {[[210,245],[370,205],[540,169],[720,119],[860,52]].map(([x,y], i) => <circle key={x} cx={x} cy={y} r="7" fill="#f0eee8" stroke="#5750c9" strokeWidth="4" style={{opacity: enter(frame, 82 + i * 12, 8)}} />)}
      </svg>
      <div className="chart-tags"><span>DOCUMENTS</span><span>MARKET DATA</span><span>FINANCIAL MODEL</span><span>REASONING</span></div>
    </div>
  );
};

export const ResearchScene = () => {
  const frame = useCurrentFrame();
  const titleA = enter(frame, 8, 22);
  const titleB = enter(frame, 24, 22);
  const camera = range(frame, [0, 209], [1.035, 1]);
  const iris = smooth(frame, 191, 209);

  return (
    <AbsoluteFill className="scene research-scene">
      <Grid frame={frame} dark={false} />
      <div className="research-orbit" style={{transform: `translate(${frame * 0.12}px, ${-frame * 0.04}px) rotate(${frame * 0.025}deg)`}} />
      <div className="research-camera" style={{transform: `scale(${camera}) translateX(${18 - frame * 0.12}px)`, opacity: 1 - iris * 0.35}}>
        <ChapterTag index="03" dark style={{left: 72, top: 54, opacity: enter(frame, 0, 18)}}>REASONING TO RESULT</ChapterTag>
        <div className="research-title">
          <div style={{opacity: titleA, transform: `translateY(${(1 - titleA) * 45}px)`}}>复杂信息，</div>
          <div style={{opacity: titleB, transform: `translateY(${(1 - titleB) * 45}px)`}}><span>清晰判断。</span></div>
        </div>
        <div className="research-side-copy" style={{opacity: enter(frame, 38, 20)}}>
          <Eyebrow dark>DEEP RESEARCH / FINANCE / AGENT</Eyebrow>
          <p>不止汇总信息。<br />更核对证据、建立模型、完成工作。</p>
        </div>
        <AgentWorkflow frame={frame} />
        <ResearchChart frame={frame} />
        <div className="floating-source source-one" style={{transform: `translateY(${Math.sin(frame * 0.04) * 8}px) rotate(-5deg)`, opacity: enter(frame, 72, 20)}}><span>SOURCE / 042</span><i /><i /><i /></div>
        <div className="floating-source source-two" style={{transform: `translateY(${Math.sin(frame * 0.035 + 2) * 10}px) rotate(4deg)`, opacity: enter(frame, 90, 20)}}><span>EVIDENCE VERIFIED</span><b>✓</b></div>
      </div>
      <div className="research-footer" style={{opacity: enter(frame, 132, 20) * (1 - iris)}}><span>RESEARCH</span><i /><span>FINANCE</span><i /><span>LONG-HORIZON AGENT</span></div>
      <div className="black-iris" style={{transform: `translate(-50%, -50%) scale(${iris})`, width: 2500, height: 2500, borderRadius: '50%', background: '#050609', position: 'absolute', left: '50%', top: '50%', zIndex: 70}} />
      <AbsoluteFill style={{background: '#fff', opacity: 1 - enter(frame, 0, 9), zIndex: 80}} />
    </AbsoluteFill>
  );
};
