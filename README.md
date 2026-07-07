# 【每天介绍一个国际竞赛】视频制作技能

> 翰林有方 · 国际竞赛系列竖屏短视频 · 标准制作流程与设计系统

## 项目简介

用 **Remotion**（React 视频框架）+ **阿里百炼 CosyVoice TTS**（克隆声音）生成竖屏短视频。

- **输出规格：** 1080 × 1920（9:16 竖屏）· 30fps · H.264
- **视觉风格：** **Bold Editorial**（大胆编辑风）——近白纸底 + 钴蓝强调 + Playfair 衬线大字 + 可见纸感纹理。严肃权威、适合教育行业，同时靠巨型字号/高对比/反白重音页做到"大胆不平淡"。
- **音频：** 克隆声音配音（语速 1.35x）+ BGM（音量 22%，循环）。

> ⚠️ 旧版「黑底黄字」和「米色纸底+暗红」都已废弃（后者是 AI 高频套路色，别回退）。当前唯一视觉标准是 Bold Editorial，见下方「设计系统」。

---

## 环境准备

1. **Node.js** v18+（本机已升级到 v22）。
2. **依赖**：`cd amc-video && npm install`。
3. **API Key**：在项目根目录 `.env` 写入
   ```
   DASHSCOPE_API_KEY=sk-你的key
   ```
   （`generate-voiceover.ts` 已 `import "dotenv/config"` 自动读取，不要再改脚本里的常量。）获取地址：https://dashscope.console.aliyun.com/

---

## 制作新视频（流程）

### 一、信息搜集 ⚠️ 必须先做，不许凭记忆

搜集并核实：赛事官网最新数据、考试格式（题数/时间/评分）、最新赛季日期、晋级条件与分数线、参赛资格与年龄。

**来源核查规范：** 见 [`docs/信息源优先级.md`](docs/信息源优先级.md)。核心：
- 先分「**恒定事实**」（创办人/定位/历史）和「**易变事实**」（日期/费用/题量/资格/获奖比例/成绩）。
- **易变事实必须用当季官网复核**；IMA 笔记在易变字段上降级，走时效闸门。
- 机器清单 [`volatile-fields.json`](volatile-fields.json) + 扫描器 `npx ts-node check-sources.ts`（一键列出本期需复核的易变数据）。
- 全球站 vs 中国区格式可能不同，别混用；中介来源标「待核实」，需官方印证。

### 二、撰写文案

编辑 [`src/config.ts`](src/config.ts) 的 `SCENES` 数组 + `COMPETITION`（含折线图数据 `participationData`）。

**规范：** 每场景 2-3 句（5-10 秒配音）；拆成 **18-22 个场景**；赛事名首次出现加英文全称；同一赛事的不同级别分句说。

**场景类型 → 组件 → 版式（Bold Editorial）：**

| type | 组件 | 版式 |
|------|------|------|
| `cover` | CoverScene | **静态封面**（首帧即封面，见铁律①）：黑顶栏 + 钴蓝眉签 + 巨型 Playfair 名称 + 钴蓝粗线 + 底部数据条 |
| `opening-chart` | OpeningScene | 钴蓝折线/面积图 + 两个巨型 hero 数字 |
| `opening-stats` | StatsScene | 2×2 大数字网格（数字滚动） |
| `title-card` | TitleCardScene | **反白钴蓝重音页**：白衬线大陈述 + 白描边胶囊标签 |
| `levels-compare` | WhatIsAMCScene | 级别行（序号+名称+徽标+说明），发丝线分隔 |
| `key-points` | KeyPointsScene | 左 label / 右钴蓝 value 行列表 |
| `scoring-examples` | ScoringExamplesScene | 行列表 + 彩色 value 色块 |
| `topics-chart` | TopicsScene | 粗壮横向条形图（最大项钴蓝，余墨色） |
| `calendar` | CalendarScene | 垂直时间线（日期列 + 贯穿竖线圆点 + 事件） |
| `progression` | ProgressionScene | 序号流程（01→02→…，竖线连接节点） |
| `comparison` | ComparisonScene | **主角列 + 结论条**：左列钴蓝实心面板当主角，右列灰，底部黑色一句话结论 |
| `benefits` | WhyAMCScene | 2×2 图标网格（Phosphor 图标，`components/icons.tsx`） |
| `prep-steps` | PrepScene | 大钴蓝 Playfair 序号 + 标题 + 描述列表 |
| `closing` | ClosingScene | **反白钴蓝重音页** + 白色 CTA「关注翰林有方」 |

> 「反白钴蓝重音页」（title-card / closing）是打破浅色平铺的节奏页，全片 2-3 处即可，别滥用。

### 三、生成配音
```bash
npx ts-node generate-voiceover.ts
```
自动跳过已存在音频。**换主题必须先清空旧配音**（否则同名场景会复用上一期音频）：`rm public/voiceover/*.mp3` 后再跑。参数在脚本内：`VOICE`（克隆音色）、`rate` 1.35、`volume` 80。

### 四、计算时长
```bash
npx ts-node compute-durations.ts   # 生成 src/scene-durations.json（每段+0.3s 缓冲）
```

### 五、生成字幕
```bash
npx ts-node generate-srt.ts        # 生成 src/subtitles.json（Remotion 读取）+ public/subtitles.srt
```
可手动编辑 `src/subtitles.json` 的 `text` / `startFrame` / `endFrame`（30 帧 = 1 秒）。

### 六、渲染视频（不单独出封面！）
```bash
npx remotion render src/index.ts AMCVideo out/竞赛名-video-v2.mp4 --codec h264
```
> **不要**再 `remotion still AMCCover`。**视频第一帧就是封面**（见铁律①），平台自动取首帧做封面图。只交付 mp4。

### 七、生成发布文案
```bash
npx ts-node generate-copy.ts       # → out/发布文案/…txt（标题+摘要+标签）
```

### 八、IMA 回写（可选但推荐）
把当季核实过的事实写进用户的腾讯 IMA 知识库（技能 `~/.claude/skills/ima-skill`，`node ima_api.cjs`）。🟢 一手官方可直接回写；🔴 仅中介来源标「待核实」。本地台账见 [`docs/IMA回写日志.md`](docs/IMA回写日志.md)。

### 九、验收 + 清理
播放检查画面/配音/字幕；`out/` 只留成片 mp4，删掉打样/抽帧等临时图（别误删其它竞赛成片和 `发布文案/`）。

---

## 设计系统（Bold Editorial）

**改 token 即全局换肤，是所有视觉的单一入口。**

### 配色 — [`src/theme/colors.ts`](src/theme/colors.ts) `BRAND`
| token（语义名沿用旧的以稳 API） | 值 | 用途 |
|------|------|------|
| `black` | `#FAFAFA` | 纸底（背景） |
| `yellow` | `#1D4ED8` | 钴蓝（唯一强调色，换主题可换红/绿/品牌色） |
| `white` | `#111111` | 墨色（文字、粗线） |
| `textLight` | `#5B5B5B` | 次要灰字 |
| `divider` | `#C4C4C4` | 分隔线（要看得见，别再调淡） |
| `ON_ACCENT` | `#FFFFFF` | 钴蓝/墨底上的文字 |

### 字体 — [`src/theme/typography.ts`](src/theme/typography.ts)
- `FONT_HEAD_EN` = Playfair Display（衬线，**所有大数字/英文**，经 `@remotion/google-fonts` 加载）
- `FONT_CN` = 中文衬线（Source Han Serif / SimSun 回退）
- `FONT_CN_SANS` = 小标签/眉签

### 背景 — [`src/components/Background.tsx`](src/components/Background.tsx)
方格纸底纹 + 编辑栏线 + 右下角钴蓝半调网点 + 细内框，缓慢漂移。**要可见但克制**（透明度太低会显得纯白单调）。

### 场景骨架（每个场景都照这个写）
```tsx
<AbsoluteFill style={{ background: BRAND.black }}>
  <Background />
  <div style={{ position:'absolute', inset:0, padding:'150px 70px 290px', display:'flex', flexDirection:'column' }}>
    <SceneHeader kicker={subtitle} title={title} />
    {/* 内容包一层 flex:1 + justifyContent:'center' 居中为紧凑块 */}
  </div>
</AbsoluteFill>
```
共享件：`components/SceneHeader.tsx`（钴蓝竖条+眉签+衬线标题）、`components/Watermark.tsx`（巨型幽灵字）、`components/icons.tsx`（Phosphor 图标，来自 better-icons）。
覆盖层：`BrandOverlay`（右上角小墨块「翰林有方」，封面自动隐藏避免重复）、`SubtitleOverlay`（实心墨条白字，bottom:64）。

---

## ⚠️ 排版铁律 / 避坑清单（都是踩过的坑）

1. **封面首帧即封面** → `CoverScene` 必须**静态、无入场动效**（帧 0 就是完整封面），否则平台抓首帧只得空白。不单独渲染封面图。
2. **字幕安全区** → 场景内容底部 padding **≥ 290px**；字幕在 `bottom:64`。否则字幕会盖住底部内容（对比页结论条、封面数据条最易中招）。
3. **不要用 `flex:1` 把少数几行撑满** → 会出现巨大空隙。内容包一层 `justifyContent:'center'` 居中为**紧凑块**，行高由内容定。
4. **分隔线要看得见** → `BRAND.divider`（#C4C4C4）+ 1.5px；区块起头用 2px `BRAND.white` 粗线。别用近白发丝线。
5. **时间轴/流程轴对齐** → 日期/序号列**固定宽度、不折行**；圆点串在**贯穿的竖线**上；圆点与右侧文字**垂直居中对齐**。
6. **背景别太淡** → 要有可见的方格纸纹理+装饰，否则页面像纯白很单调。
7. **单一强调色** → 全片只用一个强调色（钴蓝）。数字/图标/强调统一用它。
8. **换主题先清旧配音** → `rm public/voiceover/*.mp3`，否则同名场景复用上期音频。
9. **禁 emoji**；图标只用 `components/icons.tsx` 的 Phosphor 图标。

---

## 换主题指南

做新竞赛视频，**基本只改两处**：

| 改 | 内容 |
|----|------|
| [`src/config.ts`](src/config.ts) | `SCENES` 文案/数据/场景类型 + `COMPETITION`（名称、`participationData` 折线数据） |
| `src/theme/colors.ts` 的 `yellow` | 想换强调色时改这一个 token（钴蓝→红/绿/品牌色） |

**全部继承、不用动：** 所有场景组件版式与动效、背景系统、字体、覆盖层、脚本（配音/时长/字幕/发布文案）、BGM。封面主名称从 `config.ts` 自动读取；**唯一例外**——封面底部数据条（如「60+ 国家 · 2018 创办 · 诺奖发起」）目前硬编码在 `src/scenes/CoverScene.tsx`，换主题时顺手改那一行（后续可参数化到 config）。

---

## 项目结构（关键）

```
amc-video/
├── .env                       ← DASHSCOPE_API_KEY
├── src/
│   ├── config.ts              ← 【主要编辑】SCENES + COMPETITION
│   ├── Root.tsx / index.ts / AMCVideo.tsx
│   ├── theme/
│   │   ├── colors.ts          ← 配色 token（换肤入口）
│   │   └── typography.ts       ← 字体 + 字阶
│   ├── animations/            ← useFrom / useStagger / useNumberCount / easings
│   ├── components/
│   │   ├── Background.tsx  SceneHeader.tsx  Watermark.tsx  icons.tsx
│   │   ├── BrandOverlay.tsx  SubtitleOverlay.tsx  StatBlock.tsx …
│   ├── scenes/                ← 各场景组件（见上方类型表）
│   ├── scene-durations.json   ← 自动生成
│   └── subtitles.json         ← 自动生成，可手改
├── public/{voiceover/, bgm.mp3, subtitles.srt}
├── out/                       ← 只留成片 mp4
├── docs/{信息源优先级.md, IMA回写日志.md}
├── volatile-fields.json  check-sources.ts   ← 易变字段核查
├── generate-voiceover.ts  compute-durations.ts  generate-srt.ts  generate-copy.ts  clone-voice.ts
└── package.json
```

---

## 常见问题

**换配音声音？** 跑 `clone-voice.ts` 上传参考音频拿到 `voice_id`，更新 `generate-voiceover.ts` 的 `VOICE`。
**调 BGM？** 换 `public/bgm.mp3`，音量在 `src/AMCVideo.tsx` 的 `<Audio volume>`。
**字幕不同步？** 改 `src/subtitles.json` 的 `startFrame`/`endFrame`（30帧=1秒）重渲染。
**只预览不渲染？** `npx remotion studio src/index.ts`。
**背景/强调色/纹理想微调？** 背景改 `components/Background.tsx`，颜色改 `theme/colors.ts`。
