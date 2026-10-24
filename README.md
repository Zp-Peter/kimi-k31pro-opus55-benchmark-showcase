# Kimi K3.1 Pro × Claude Opus 5.5 测评作品

本次测评的五组任务、两组模型产物与源码归档。每个模型的三种户外网站均完整保留。

**[打开作品导航](https://zp-peter.github.io/kimi-k31pro-opus55-benchmark-showcase/)**

| 任务 | Kimi K3.1 Pro | Claude Opus 5.5 |
| --- | --- | --- |
| 三种户外产品网站 | [山野](kimi/buffalo-sites/dist/index.html) · [山巅](kimi/buffalo-sites/dist/summit.html) · [周末](kimi/buffalo-sites/dist/weekend.html) | [暗黑远征](opus/buffalo/01-expedition.html) · [周末露营](opus/buffalo/02-camp.html) · [科技机能](opus/buffalo/03-xlab.html) |
| Kimi 宣传片 | [完整视频](kimi/kimi-k3.1-film/dist/Kimi-K3.1-Pro-Launch-Film.mp4) · [源码](kimi/kimi-k3.1-film/) | [完整视频](opus/kimi-k3.1-promo/out/kimi_k3.1_promo.mp4) · [源码](opus/kimi-k3.1-promo/) |
| 冰岛黑沙滩 | [场景](kimi/iceland-black-sand/dist/index.html) | [场景](opus/reynisfjara/index.html) |
| 水牛竞速 | [牧野逐风](kimi/buffalo-racing/dist/index.html) | [牧童赛牛](opus/buffalo-race/index.html) |
| 四队刀战 | [界刃](kimi/realm-blade/dist/index.html) | [换庭斩](opus/swap-blade/dist-single/index.html) |

GitHub 的文件页显示源码；直接体验请使用上方作品导航，或在本地启动静态服务器。

## 本地查看

在仓库根目录执行：

```bash
python3 -m http.server 8080
```

打开 `http://localhost:8080/`。3D 场景与游戏建议使用支持 WebGL 的桌面浏览器和键鼠；游戏内提供操作说明。部分网页使用在线字体、图片和 CDN，完全断网时可能无法加载这些资源。Opus 的 `swap-blade/dist-single/index.html` 已内联脚本和样式。

## 源码与复现

- `kimi/`：Kimi K3.1 Pro 的五项产物。
- `opus/`：Claude Opus 5.5 的五项产物。
- Kimi 的网站、黑沙滩、竞速与刀战均保留 Vite 源码和相对路径的 `dist/` 构建。进入对应目录后执行 `npm install`、`npm run dev`；重新构建用于子目录部署时使用 `npm run build -- --base ./`。
- Opus 刀战：进入 `opus/swap-blade/`，执行 `npm install`、`npm run dev`，或 `npm run build:single`。详细玩法见项目 README。
- Opus 黑沙滩：直接静态托管该项目；也可执行项目中的 `python3 serve.py`。
- Opus 竞速：现成 `index.html` 可通过静态服务器运行，`build.py` 与 `src/` 保留生成源码。
- 两支宣传片保留完整成片、配乐生成代码、分镜与渲染源码。Kimi 片使用 Remotion，Opus 片使用 Three.js；各自 `package.json` 提供预览和渲染命令。Opus 实时预览需先 `npm install`；渲染脚本可通过 `FFMPEG` 环境变量指定 FFmpeg 路径。

## 归档说明

本仓库保留作品本身的功能与表现。发布适配仅涉及静态部署路径、导航、排除本机缓存，以及视频编码；未为本次归档重新设计作品或改动玩法。

Opus 宣传片发布副本使用 H.264 编码以满足 GitHub 单文件大小限制，保持原 1920×1080、30 fps、64 秒及原音轨。Kimi 宣传片保留原始发布文件。第三方依赖和素材沿用各自授权与来源；Kimi 片引用的官方案例来源见其 `STORYBOARD.md`，不作为本仓库原创素材声明。
