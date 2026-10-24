# Kimi K3.1 Pro 宣传短片

**主题：复杂，交给 Kimi。**  
**规格：42 秒 / 1920×1080 / 30 fps / H.264 + AAC / 120 BPM 原创电子配乐**

## 创意与视觉

以「从问题到完成」为叙事轴，以月蚀、轨道和 Token 流为贯穿图形。视觉采用月面黑、冷白、电光紫青；研究章节切换为暖白，形成明暗反差。素材不是简单拼贴，而是通过推拉、甩镜、分屏、圆形遮罩、速度线、曝光切点与界面追踪重新编排。

## 分镜

| 时间 | 章节 | 画面与运镜 | 核心文案 |
| --- | --- | --- | --- |
| 00–05s | 问题 / 月蚀开场 | 星场与月面缓慢推进，轨道多层次旋转，末段快速穿入 | 当复杂，成为常态。 |
| 05–10s | 旗舰揭示 | 白闪衔接，K3.1 由虚到实并稳定落位，扫描光掠过 | Kimi K3.1 Pro / 新一代旗舰模型 |
| 10–16s | 百万上下文 | Token 流环绕，数字递增至 1,000,000，随后推镜切换主张 | 长线思考，不断线。 |
| 16–20s | 从指令到世界 | 官方天宫案例，电影感推进、追踪框与信息 HUD | 一句指令，构建完整世界。 |
| 20–22.3s | 空间与建模 | 教堂与涡扇甩镜分屏，动态中缝和视差推近 | 理解空间 / 创造细节 |
| 22.3–25s | 世界完成 | 圆形遮罩展开机场案例，缓慢升起 | 从代码，到世界。 |
| 25–32s | 研究与 Agent | 暖白研究台、横向视差、图表描线、工作流逐步完成 | 复杂信息，清晰判断。 |
| 32–37s | 能力蒙太奇 | 天宫、教堂、机场、涡扇 1 秒一切；速度线进入 BEYOND 隧道 | CODE / CREATE / WORLD / MODEL |
| 37–42s | 品牌定格 | 月蚀与轨道收束，标题弹性落位，四音声音标识 | 复杂，交给 Kimi。 |

## 官方信息依据

- Kimi K3.1 Pro 为 K3.1 系列首个模型、3 万亿级参数、支持 100 万 token 上下文。
- 原生支持视觉理解。
- 代码、3D 创作、金融研究及其他长程 Agent 能力为官方重点提升方向。

来源：Kimi API 开放平台《Kimi K3.1 Pro》  
https://platform.kimi.com/docs/guide/kimi-k3-1-pro-quickstart

## 案例素材

以下视频均来自上述官方文档，画面在短片中以静音方式使用：

- `coding-celestial-palace.mp4`：Unreal Engine 天宫案例。
- `3d-cathedral.mp4`：Blender / Three.js 教堂案例。
- `3d-airport-blender.mp4`：Blender 机场热带雨林案例。
- `3d-turbofan-freecad.mp4`：FreeCAD 涡扇发动机案例。

## 声音

`public/audio/kimi-original-score.wav` 由 `scripts/generate_audio.py` 全程序合成：48 kHz、立体声、16-bit、42 秒。无外部音乐或音效素材。剪辑点均落在 120 BPM 的 0.5 秒网格上。

## 编辑与渲染

```bash
npm install
npm run audio        # 可选：重新生成配乐与颗粒
npm run studio       # Remotion Studio
npm run stills       # 关键帧预览
npm run render       # 1080P 成片
npm run render -- --draft  # 540P 快速草稿
```

时间线入口：`src/Film.jsx`。各镜头位于 `src/scenes/`，共享视觉组件位于 `src/components/`。
