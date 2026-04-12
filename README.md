# 【每天介绍一个国际竞赛】视频制作模板

> 翰林有方 · 国际竞赛系列视频标准制作流程

## 项目简介

使用 Remotion（React 视频框架）+ 阿里百炼 CosyVoice TTS 生成竖屏短视频。  
风格参考 Top guide 抖音账号：黑底 + 黄字 + 网格背景 + 克隆声音配音 + BGM。

**输出规格：** 1080 × 1920（9:16竖屏）· 30fps · H.264

---

## 环境准备

### 1. 安装 Node.js
- 版本要求：v18+
- 下载：https://nodejs.org/

### 2. 安装项目依赖
```bash
cd amc-video
npm install
```

### 3. 配置 API Key
打开 `generate-voiceover.ts`，修改第 10 行：
```typescript
const API_KEY = "你的阿里百炼API Key";
```
获取地址：https://dashscope.console.aliyun.com/

---

## 制作新视频（7步流程）

### 第一步：信息搜集 ⚠️ 必须先做

在写文案之前，必须搜集并核实以下信息：
- 赛事官方网站的最新数据
- 考试格式（题数、时间、评分规则）
- 最新赛季日期和变更
- 晋级条件和分数线
- 参赛资格和年龄限制

**原则：所有数据必须有来源支撑，不允许凭记忆编写。**

### 第二步：撰写文案

编辑 `src/config.ts` 中的 `SCENES` 数组。

**文案规范：**
- 每个场景 2-3 句话（对应 5-10 秒配音）
- 拆分为 20-25 个场景，画面切换频繁不枯燥
- 赛事名称首次出现时加英文全称（如"AIME，全称 American Invitational Mathematics Examination"）
- AMC 10 和 AMC 12 的信息分开说，不要合在一句

**场景类型对照：**

| type 值 | 视觉效果 | 适用场景 |
|---------|---------|---------|
| `cover` | 黑底黄字封面 | 开场第一页 |
| `opening-chart` | 折线图 | 数据趋势展示 |
| `opening-stats` | 数字滚动 | 关键统计数据 |
| `title-card` | 标签墙 | 知识点概览 |
| `levels-compare` | 三级卡片 | 竞赛级别对比 |
| `key-points` | 数据列表 | 规则/关键信息 |
| `comparison` | 双栏表格 | 两个级别对比 |
| `scoring-formula` | 公式展示 | 评分公式 |
| `scoring-examples` | 得分卡片 | 分数段对照 |
| `topics-chart` | 条形图+卡片 | 知识领域分布 |
| `calendar` | 时间轴 | 赛事日历 |
| `progression` | 晋级路径图 | 竞赛通道 |
| `benefits` | 四宫格卡片 | 优势/价值 |
| `prep-steps` | 步骤卡片 | 备赛建议 |
| `closing` | 结语页 | 视频结尾 |

### 第三步：生成配音

```bash
npx ts-node generate-voiceover.ts
```

- 自动跳过已存在的音频文件
- 如需重新生成某段，删除 `public/voiceover/对应文件.mp3` 后重新运行
- 如需重新生成全部：`rm public/voiceover/*.mp3` 后运行

**配音参数（在 generate-voiceover.ts 中）：**
- `VOICE`：克隆声音 ID
- `rate`：语速（当前 1.35x）
- `volume`：音量（当前 80）

### 第四步：计算时长

```bash
npx ts-node compute-durations.ts
```

生成 `src/scene-durations.json`，每段配音时长 + 0.3 秒缓冲。

### 第五步：生成字幕

```bash
npx ts-node generate-srt.ts
```

生成两个文件：
- `src/subtitles.json` — Remotion 读取（可手动编辑调整字幕内容和时间）
- `public/subtitles.srt` — 标准 SRT 格式

**手动编辑字幕：** 打开 `src/subtitles.json`，修改 `text` 字段内容，或调整 `startFrame` / `endFrame`（30帧 = 1秒）。

### 第六步：渲染输出

```bash
# 渲染视频
npx remotion render src/index.ts AMCVideo out/视频名.mp4 --codec h264

# 渲染封面图
npx remotion still src/index.ts AMCCover out/封面名.png
```

### 第七步：生成发布文案

```bash
npx ts-node generate-copy.ts
```

自动生成：
- **推荐标题**（20字以内，多个备选）
- **正文摘要**（从视频文案提取关键信息）
- **标签**（竞赛名+通用标签，去重）

输出到 `out/发布文案.txt`，直接复制到短视频平台。

### 第八步：检查验收

1. 播放视频检查画面、配音、字幕
2. 根据反馈微调后重复第 3-6 步

---

## 换主题指南

以这个项目为模板，制作新竞赛视频只需修改：

| 文件 | 要改的内容 |
|------|-----------|
| `src/config.ts` | `SCENES` 数组（文案、数据、场景类型） |
| `src/scenes/CoverScene.tsx` | 封面上的竞赛名称 |
| `src/scenes/CoverStill.tsx` | 封面图上的竞赛名称 |
| `src/scenes/ChartScene.tsx` | 折线图数据（参赛人数等） |
| `src/scenes/OpeningScene.tsx` | 开场大标题 |

**不需要改的：**
- 所有组件样式（Background、BrandOverlay、SubtitleOverlay 等）
- 配色方案（黑底黄字）
- 脚本文件（generate-voiceover.ts、compute-durations.ts、generate-srt.ts）
- BGM 文件（public/bgm.mp3）

---

## 视觉规范

### 配色
| 元素 | 色值 |
|------|------|
| 背景 | 纯黑 `#000000` |
| 网格 | 暗灰 `#222222` |
| 标题/强调 | 黄色 `#FFD600` |
| 正文 | 白色 `#FFFFFF` |
| 说明文字 | 灰色 `#999999` |

### 固定 UI 层
- 左上角：黄色双引号 `"`
- 顶部居中：翰林有方（黄色）
- 右上角：灰色注释文字
- 底部：白色粗体字幕

### 音频
- 配音：克隆声音，语速 1.35x
- BGM：音量 22%，循环播放
- 转场：0.3 秒 fade

---

## 项目结构

```
amc-video/
├── src/
│   ├── config.ts              ← 【主要编辑】场景文案和数据
│   ├── index.ts               ← 入口
│   ├── Root.tsx               ← 合成注册
│   ├── AMCVideo.tsx           ← 主合成组件
│   ├── fonts.ts               ← 字体配置
│   ├── scene-durations.json   ← 自动生成的时长数据
│   ├── subtitles.json         ← 字幕数据（可手动编辑）
│   ├── captions.ts            ← 备用手写字幕
│   ├── components/            ← 可复用视觉组件
│   │   ├── Background.tsx
│   │   ├── BrandOverlay.tsx
│   │   ├── SubtitleOverlay.tsx
│   │   ├── AnimatedTitle.tsx
│   │   ├── AnimatedNumber.tsx
│   │   ├── AnimatedLineChart.tsx
│   │   ├── BarChart.tsx
│   │   ├── BenefitGrid.tsx
│   │   ├── DataCard.tsx
│   │   ├── FormulaDisplay.tsx
│   │   ├── ProgressPathway.tsx
│   │   └── ...
│   └── scenes/                ← 场景组件
│       ├── CoverScene.tsx
│       ├── ChartScene.tsx
│       ├── StatsScene.tsx
│       ├── KeyPointsScene.tsx
│       ├── ComparisonScene.tsx
│       ├── ScoringScene.tsx
│       ├── TopicsScene.tsx
│       ├── CalendarScene.tsx
│       ├── ProgressionScene.tsx
│       ├── PrepScene.tsx
│       ├── ClosingScene.tsx
│       └── ...
├── public/
│   ├── voiceover/             ← 配音 MP3 文件
│   ├── bgm.mp3                ← 背景音乐
│   └── subtitles.srt          ← SRT 字幕文件
├── out/                       ← 渲染输出
├── generate-voiceover.ts      ← 配音生成脚本
├── compute-durations.ts       ← 时长计算脚本
├── generate-srt.ts            ← 字幕生成脚本
├── clone-voice.ts             ← 声音克隆脚本
└── package.json
```

---

## 常见问题

**Q: 如何更换配音声音？**  
A: 运行 `clone-voice.ts` 上传新的参考音频，获取新的 `voice_id`，更新 `generate-voiceover.ts` 中的 `VOICE` 常量。

**Q: 如何调整 BGM？**  
A: 替换 `public/bgm.mp3` 文件，音量在 `src/AMCVideo.tsx` 中的 `<Audio>` 组件调整。

**Q: 字幕不同步怎么办？**  
A: 编辑 `src/subtitles.json`，调整每句的 `startFrame` 和 `endFrame`（30帧=1秒），然后重新渲染。

**Q: 如何预览不渲染？**  
A: 运行 `npx remotion studio src/index.ts` 打开 Studio 在浏览器中预览。
