import { Placeholder } from './base.js';
import { MoonShot } from './s01_moon.js';
import { PromptShot } from './s02_prompt.js';
import { TunnelShot } from './s03_tunnel.js';
import { MoeShot } from './s04_moe.js';
import { CodeShot } from './s05_code.js';
import { CadShot } from './s06_cad.js';
import { FinanceShot } from './s07_finance.js';
import { HallucShot } from './s08_halluc.js';
import { SpeedShot } from './s09_speed.js';
import { EffortShot } from './s10_effort.js';
import { FrontierShot } from './s11_frontier.js';
import { LogoShot } from './s13_logo.js';

export const SHOTS = {
  __placeholder: Placeholder,
  moon: MoonShot,
  prompt: PromptShot,
  tunnel: TunnelShot,
  moe: MoeShot,
  code: CodeShot,
  cad: CadShot,
  finance: FinanceShot,
  halluc: HallucShot,
  speed: SpeedShot,
  effort: EffortShot,
  frontier: FrontierShot,
  logo: LogoShot,
};
