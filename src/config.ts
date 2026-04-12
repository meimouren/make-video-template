export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const COLORS = {
  background: "#000000",
  primary: "#FFD600",       // 黄色 — 标题、数字、强调
  highlight: "#FFD600",     // 统一黄色
  text: "#FFFFFF",          // 白色正文
  textLight: "#999999",     // 灰色说明文字
  gold: "#FFD600",
  green: "#4ADE80",
  divider: "#333333",       // 暗灰网格线
  cardBg: "rgba(255,255,255,0.04)",
  cardBorder: "rgba(255,255,255,0.10)",
};

// 每个场景 = 一段配音 + 一个独立视觉画面
// 相邻场景配音连贯，画面 5-8 秒切换
export const SCENES = [
  // ===== 封面 =====
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是AMC，美国数学竞赛。",
  },

  // ===== 开场 Part1: 折线图 =====
  {
    id: "opening-1",
    type: "opening-chart",
    text: "全球最具影响力的中学生数学竞赛，每年超过三十万名来自全球各地的优秀学子参与角逐。",
  },

  // ===== 开场 Part2: 关键数字 =====
  {
    id: "opening-2",
    type: "opening-stats",
    text: "无论你是初次了解还是正在备赛，这个视频将为你全面解读AMC的方方面面。",
    stats: [
      { label: "创办年份", value: 1950, suffix: "年" },
      { label: "年参赛人数", value: 300000, suffix: "+" },
      { label: "参赛学校", value: 4000, suffix: "+" },
      { label: "历史", value: 75, suffix: "年+" },
    ],
  },

  // ===== 什么是AMC Part1: 历史 =====
  {
    id: "what-is-amc-1",
    type: "title-card",
    title: "什么是 AMC",
    subtitle: "American Mathematics Competitions",
    text: "AMC，全称American Mathematics Competitions，美国数学竞赛，由MAA，Mathematical Association of America，美国数学协会主办。自1950年创办。",
    highlights: ["MAA 主办", "1950年创办", "纽约起步"],
  },

  // ===== 什么是AMC Part2: 发展 =====
  {
    id: "what-is-amc-2",
    type: "title-card",
    title: "发展历程",
    subtitle: "从6000人到30万人",
    text: "2000年正式拆分为AMC 10和AMC 12两个级别。AMC 8于1985年推出。如今已发展为覆盖全球四千多所学校的顶级赛事。",
    highlights: ["AMC 8 · 1985", "AMC 10/12 · 2000", "4000+ 学校"],
  },

  // ===== 什么是AMC Part3: 三级对比 =====
  {
    id: "what-is-amc-3",
    type: "levels-compare",
    text: "AMC分为三个级别，分别面向初中和高中学生。",
    levels: [
      { name: "AMC 8", target: "8年级及以下", questions: 25, time: "40分钟", scoring: "每题1分，满分25" },
      { name: "AMC 10", target: "10年级及以下", questions: 25, time: "75分钟", scoring: "答对6分 · 空白1.5分" },
      { name: "AMC 12", target: "12年级及以下", questions: 25, time: "75分钟", scoring: "答对6分 · 满分150" },
    ],
  },

  // ===== AMC8 Part1: 基本信息 =====
  {
    id: "amc8-1",
    type: "key-points",
    title: "AMC 8 详解",
    subtitle: "初中生的数学挑战",
    text: "AMC 8面向8年级及以下学生，是入门级别的数学竞赛。共25道选择题，限时40分钟。",
    keyPoints: [
      { label: "题目数量", value: "25 道选择题" },
      { label: "考试时间", value: "40 分钟" },
      { label: "满分", value: "25 分" },
    ],
  },

  // ===== AMC8 Part2: 评分与奖项 =====
  {
    id: "amc8-2",
    type: "key-points",
    title: "AMC 8 评分与奖项",
    subtitle: "答错不扣分",
    text: "评分简单：答对得1分，答错不扣分。由于没有罚分，建议每道题都作答。全球前1%可获卓越奖，前5%获优秀奖。",
    keyPoints: [
      { label: "答对", value: "1 分" },
      { label: "答错", value: "不扣分" },
      { label: "卓越奖", value: "全球前 1%" },
      { label: "优秀奖", value: "全球前 5%" },
    ],
  },

  // ===== AMC10/12 Part1: 对比表 =====
  {
    id: "amc1012-1",
    type: "comparison",
    title: "AMC 10 与 AMC 12",
    subtitle: "高中阶段的核心赛事",
    text: "AMC 10面向10年级及以下学生，考试内容不超过代数II。AMC 12面向12年级及以下学生，内容扩展到预微积分。",
    comparison: [
      { item: "适用年级", amc10: "10年级及以下", amc12: "12年级及以下" },
      { item: "知识范围", amc10: "至代数 II", amc12: "至预微积分" },
      { item: "AIME门槛", amc10: "达到晋级线", amc12: "达到晋级线" },
      { item: "晋级赛", amc10: "USAJMO", amc12: "USAMO" },
    ],
  },

  // ===== AMC10/12 Part2: 共同规则 =====
  {
    id: "amc1012-2",
    type: "key-points",
    title: "AMC 10/12 规则",
    subtitle: "策略性跳题很重要",
    text: "两个级别均为25道四选一选择题，限时75分钟。答对6分，空白1.5分，答错不得分，满分150分。每年11月A卷和B卷两场。",
    keyPoints: [
      { label: "题数", value: "25 道四选一" },
      { label: "时间", value: "75 分钟" },
      { label: "答对", value: "6 分" },
      { label: "空白", value: "1.5 分" },
      { label: "满分", value: "150 分" },
    ],
  },

  // ===== 评分 Part1: 公式 =====
  {
    id: "scoring-1",
    type: "scoring-formula",
    title: "评分公式",
    subtitle: "如何最大化你的得分",
    text: "得分等于6乘以答对题数，加上1.5乘以空白题数。答错不得分也不扣分，但放弃作答可以获得1.5分保底。",
    formula: "得分 = 6 × 正确数 + 1.5 × 空白数",
  },

  // ===== 评分 Part2: 得分示例 =====
  {
    id: "scoring-2",
    type: "scoring-examples",
    title: "得分对照",
    subtitle: "不同水平的分数段",
    text: "顶尖学生通常答对20题以上，同时战略性跳过最难的几题。不确定的题留空比乱猜更划算。",
    scoringExamples: [
      { correct: 25, blank: 0, score: 150, label: "满分" },
      { correct: 20, blank: 3, score: 124.5, label: "优秀" },
      { correct: 15, blank: 5, score: 97.5, label: "良好" },
      { correct: 10, blank: 10, score: 75, label: "中等" },
    ],
  },

  // ===== 考点 Part1: 条形图 =====
  {
    id: "topics-1",
    type: "topics-chart",
    title: "四大核心考点",
    subtitle: "知识领域分布",
    text: "AMC考试涵盖四大核心领域：代数占30%，几何25%，数论25%，组合数学20%。",
    domains: [
      { name: "代数", percentage: 30, topics: "多项式·方程组·数列·函数" },
      { name: "几何", percentage: 25, topics: "平面几何·坐标几何·三角" },
      { name: "数论", percentage: 25, topics: "整除·素数·同余·GCD/LCM" },
      { name: "组合", percentage: 20, topics: "排列组合·概率·递推" },
    ],
  },

  // ===== 考点 Part2: 详细内容 =====
  {
    id: "topics-2",
    type: "title-card",
    title: "考点详解",
    subtitle: "AMC 12 额外考点",
    text: "高年级AMC 12还会涉及复数、对数函数和更深入的三角恒等式。不允许使用计算器，注重创新思维与逻辑推理。",
    highlights: ["复数运算", "对数函数", "三角恒等式", "禁用计算器"],
  },

  // ===== 日历 =====
  {
    id: "calendar",
    type: "calendar",
    title: "2025-2026 赛事日历",
    subtitle: "关键时间节点",
    text: "了解时间安排至关重要。AMC 10和12每年11月举行A卷和B卷两场，AIME在次年2月。建议至少提前三到六个月备考。",
    events: [
      { date: "2025.11.05", event: "AMC 10A / 12A" },
      { date: "2025.11.13", event: "AMC 10B / 12B" },
      { date: "2026.01.22", event: "AMC 8" },
      { date: "2026.02.05", event: "AIME I" },
      { date: "2026.02.11", event: "AIME II" },
      { date: "2026.03.21", event: "USAMO / USAJMO" },
    ],
  },

  // ===== AIME Part1: 基本信息 =====
  {
    id: "aime-1",
    type: "key-points",
    title: "AIME 邀请赛",
    subtitle: "顶尖学生的角逐",
    text: "AIME，全称American Invitational Mathematics Examination，美国数学邀请赛。只有AMC成绩达到晋级分数线的学生才能受邀参加。",
    keyPoints: [
      { label: "题目", value: "15 道填空题" },
      { label: "答案", value: "0~999 整数" },
      { label: "时间", value: "3 小时" },
    ],
  },

  // ===== AIME Part2: 难度与分数线 =====
  {
    id: "aime-2",
    type: "key-points",
    title: "AIME 难度与分数线",
    subtitle: "2025-2026 赛季晋级线",
    text: "AIME难度远高于AMC，平均分只有5到6分，10分以上属于非常优秀。本赛季晋级线：AMC 10A需105分，12A需96分。",
    keyPoints: [
      { label: "满分", value: "15 分" },
      { label: "平均分", value: "5-6 分" },
      { label: "优秀线", value: "10+ 分" },
      { label: "10A晋级线", value: "105 分" },
      { label: "12A晋级线", value: "96 分" },
    ],
  },

  // ===== 晋级路径 =====
  {
    id: "progression",
    type: "progression",
    title: "完整晋级路径",
    subtitle: "从 AMC 到 IMO",
    text: "AMC构建了完整的晋级通道。三十万参赛者中约一万人晋级AIME。再选拔约250人参加USAMO，全称United States of America Mathematical Olympiad，美国数学奥林匹克。最终6人代表国家出征IMO，International Mathematical Olympiad，国际数学奥林匹克。",
    pathway: [
      { stage: "AMC 10/12", participants: "300,000+", desc: "初赛" },
      { stage: "AIME", participants: "~10,000", desc: "邀请赛" },
      { stage: "USAMO", participants: "~250", desc: "国家级" },
      { stage: "MOP", participants: "~60", desc: "集训" },
      { stage: "IMO", participants: "6", desc: "国际赛" },
    ],
  },

  // ===== 晋级公式变化 =====
  {
    id: "progression-formula",
    type: "scoring-formula",
    title: "2025-26 新变化",
    subtitle: "AIME 权重提升",
    text: "2025至2026赛季的重要变化。USAMO选拔公式中，AIME成绩权重从10倍提高到20倍，AIME的表现变得更加关键。",
    formula: "选拔指数 = AMC分 + 20 × AIME分",
  },

  // ===== 为什么选择AMC =====
  {
    id: "why-amc",
    type: "benefits",
    title: "为什么选择 AMC",
    subtitle: "名校认可的学术利器",
    text: "对于计划申请海外名校的学生来说，AMC是最具含金量的学术背景之一。哈佛、MIT、斯坦福等顶尖院校明确认可AMC和AIME成绩。",
    benefits: [
      { icon: "🏫", title: "名校认可", desc: "哈佛·MIT·斯坦福明确认可" },
      { icon: "🧠", title: "思维提升", desc: "系统训练逻辑推理能力" },
      { icon: "🏆", title: "荣誉认证", desc: "前1%卓越奖·前5%优秀奖" },
      { icon: "🚀", title: "竞赛通道", desc: "直通AIME·USAMO·IMO" },
    ],
  },

  // ===== 备赛 Part1 =====
  {
    id: "prep-1",
    type: "prep-steps",
    title: "备赛建议",
    subtitle: "四步高效备考法",
    text: "成功的AMC备赛需要系统规划，建议至少提前3到6个月。先做历年真题了解题型，然后专项突破薄弱领域。",
    steps: [
      { num: "01", title: "真题入手", desc: "做3-5年历年真题" },
      { num: "02", title: "专项突破", desc: "针对薄弱领域集中训练" },
    ],
  },

  // ===== 备赛 Part2 =====
  {
    id: "prep-2",
    type: "prep-steps",
    title: "冲刺阶段",
    subtitle: "限时训练与模考",
    text: "第三步做限时训练培养时间管理能力，第四步考前模拟冲刺。推荐使用Art of Problem Solving在线平台和专业竞赛辅导课程。",
    steps: [
      { num: "03", title: "限时训练", desc: "培养考场时间管理" },
      { num: "04", title: "模考冲刺", desc: "考前高强度模拟" },
    ],
  },

  // ===== 结语 =====
  {
    id: "closing",
    type: "closing",
    text: "AMC不仅是一场竞赛，更是一次自我突破的旅程。选择AMC，就是选择通往世界顶级学术殿堂的道路。现在就开始准备，让数学成为你最强大的竞争力。",
  },
];
