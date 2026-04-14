export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const COLORS = {
  background: "#000000",
  primary: "#FFD600",
  highlight: "#FFD600",
  text: "#FFFFFF",
  textLight: "#999999",
  gold: "#FFD600",
  green: "#4ADE80",
  divider: "#333333",
  cardBg: "rgba(255,255,255,0.04)",
  cardBorder: "rgba(255,255,255,0.10)",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是SPC，英国高级物理挑战赛。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "SPC",
    competitionNameEn: "Senior Physics Challenge",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    text: "英国最权威的高中物理竞赛之一，每年超过6000名学生参加。由牛津大学物理系联合主办，顶尖选手受邀前往皇家学会领奖。",
  },

  {
    id: "opening-2",
    type: "opening-stats",
    text: "如果你是10到11年级的学生，想挑战更高难度的物理问题，SPC是你的最佳选择。",
    stats: [
      { label: "年参赛人数", value: 6000, suffix: "+" },
      { label: "考试时长", value: 60, suffix: "分钟" },
      { label: "满分", value: 40, suffix: "分" },
      { label: "适合年级", value: 11, suffix: "年级" },
    ],
  },

  {
    id: "what-is-spc-1",
    type: "title-card",
    title: "什么是 SPC",
    subtitle: "Senior Physics Challenge",
    text: "SPC，全称Senior Physics Challenge，英国高级物理挑战赛。由BPhO，British Physics Olympiad，英国物理奥林匹克组委会主办。该组委会由牛津大学物理系、英国物理学会和奥格登基金会联合组成。",
    highlights: ["牛津大学物理系", "英国物理学会", "BPhO 主办"],
  },

  {
    id: "what-is-spc-2",
    type: "title-card",
    title: "赛事定位",
    subtitle: "BPhO正赛的入场券",
    text: "从2025年起，没有SPC或IPC奖项的学生将无法报名BPhO正赛Round 1。SPC正式成为通往英国物理奥林匹克的资格通行证。而且BPhO正赛名额严格控制在3500个席位。",
    highlights: ["BPhO资格证", "2025新规", "仅3500席位"],
  },

  {
    id: "exam-format",
    type: "key-points",
    title: "考试概览",
    subtitle: "线下笔试 满分40分",
    text: "线下赛时长60分钟，满分40分。包含若干短答题加一到两道长题。由学校老师监考，不可远程参加。不需要太多A-level新知识，但题目风格比课堂更高阶。",
    keyPoints: [
      { label: "考试时长", value: "60 分钟" },
      { label: "满分", value: "40 分" },
      { label: "题型", value: "短答+长题" },
      { label: "考试形式", value: "校内笔试" },
    ],
  },

  {
    id: "online-vs-paper",
    type: "comparison",
    title: "线上赛 vs 线下赛",
    subtitle: "两种参赛模式",
    text: "SPC提供线上和线下两种模式。线上赛全部选择题，分两组各20题，每组30分钟，可以在不同日期完成。线下赛包含短答和长题，考查更深入。",
    comparison: [
      { item: "题型", amc10: "40道选择题", amc12: "短答+长题" },
      { item: "时间", amc10: "2×30分钟", amc12: "60分钟" },
      { item: "难度", amc10: "基础概念", amc12: "深度分析" },
      { item: "日期", amc10: "1月19-23日", amc12: "3月" },
    ],
  },

  {
    id: "scoring",
    type: "scoring-examples",
    title: "评分与分数线",
    subtitle: "2024年参考分数线",
    text: "奖项按英国学生成绩排名划线。金奖约前5%，银奖约前15%，铜奖I约前30%，铜奖II约前45%。历史数据显示金奖线约26分，银奖线约20分。",
    scoringExamples: [
      { correct: 0, blank: 0, score: 40, label: "满分" },
      { correct: 0, blank: 0, score: 26, label: "金奖线≈" },
      { correct: 0, blank: 0, score: 20, label: "银奖线≈" },
      { correct: 0, blank: 0, score: 12, label: "铜奖线≈" },
    ],
  },

  {
    id: "awards",
    type: "key-points",
    title: "奖项设置",
    subtitle: "全球统一评奖标准",
    text: "设超级金奖、金奖、银奖、铜奖I和铜奖II五个等级。顶尖获奖者受邀前往皇家学会参加颁奖典礼。金奖获得者还可获得ASDAN奖学金。",
    keyPoints: [
      { label: "超级金奖", value: "Top Gold" },
      { label: "金奖", value: "约前 5%" },
      { label: "银奖", value: "约前 15%" },
      { label: "铜奖", value: "约前 30-45%" },
      { label: "特别荣誉", value: "皇家学会颁奖" },
    ],
  },

  {
    id: "vs-ipc",
    type: "comparison",
    title: "SPC vs IPC",
    subtitle: "高级 vs 中级",
    text: "SPC面向10到11年级，难度高于IPC。IPC面向9到10年级，是更基础的入门赛事。两者都是BPhO正赛的资格赛，获得任一奖项即可报名。",
    comparison: [
      { item: "适合年级", amc10: "G10-G11", amc12: "G9-G10" },
      { item: "满分", amc10: "40分", amc12: "50分" },
      { item: "难度", amc10: "较高", amc12: "中等" },
      { item: "BPhO资格", amc10: "均可", amc12: "均可" },
    ],
  },

  {
    id: "calendar",
    type: "calendar",
    title: "2026 赛事日历",
    subtitle: "关键时间节点",
    text: "线上赛在1月中旬进行，线下赛在3月。顶尖获奖者4月受邀前往皇家学会领奖。",
    events: [
      { date: "2026.01.19-23", event: "SPC 线上赛" },
      { date: "2026.03（待定）", event: "SPC 线下赛" },
      { date: "2026.04", event: "皇家学会颁奖" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "晋级路径",
    subtitle: "从 SPC 到 IPhO",
    text: "SPC获奖后可报名BPhO正赛Round 1。BPhO优秀选手进入Round 2决赛，再选拔进入国家队训练营，最终5人代表英国出征IPhO，International Physics Olympiad，国际物理奥林匹克。",
    pathway: [
      { stage: "SPC/IPC", participants: "6,000+", desc: "资格赛" },
      { stage: "BPhO R1", participants: "3,500", desc: "正赛" },
      { stage: "BPhO R2", participants: "~100", desc: "决赛" },
      { stage: "IPhO", participants: "5", desc: "国家队" },
    ],
  },

  {
    id: "why-spc",
    type: "benefits",
    title: "为什么要参加",
    subtitle: "对升学和发展的价值",
    text: "SPC是申请英国G5大学物理和工程专业的重要加分项。获奖经历证明你具备超越课堂的物理思维能力。更是通往BPhO正赛和IPhO的必经之路。",
    benefits: [
      { icon: "🏫", title: "G5加分", desc: "牛剑/帝国理工物理工程认可" },
      { icon: "🔑", title: "BPhO门票", desc: "2025起获奖才能报名正赛" },
      { icon: "👑", title: "皇家学会", desc: "顶尖选手受邀领奖" },
      { icon: "🌍", title: "IPhO通道", desc: "通往国际物理奥林匹克" },
    ],
  },

  {
    id: "prep-1",
    type: "prep-steps",
    title: "备赛建议",
    subtitle: "两步入门",
    text: "建议提前2到3个月准备。以A-level物理和IB物理为基础。BPhO官网提供历年真题和评分标准，建议至少做4套真题熟悉题型。",
    steps: [
      { num: "01", title: "做4套真题", desc: "BPhO官网免费下载" },
      { num: "02", title: "核心知识", desc: "A-level/IB物理核心章节" },
    ],
  },

  {
    id: "prep-2",
    type: "prep-steps",
    title: "冲刺阶段",
    subtitle: "长题是拉分关键",
    text: "长题分值高且考查深度分析能力，是拿高分的关键。重点练习物理原理的推导和应用，考前做限时模拟适应60分钟节奏。",
    steps: [
      { num: "03", title: "长题突破", desc: "深度分析与推导" },
      { num: "04", title: "限时模拟", desc: "60分钟完整模考" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "挑战更高的物理巅峰",
    text: "SPC不仅是一场挑战，更是迈向英国物理奥林匹克的关键一步。现在就开始准备，让物理成为你最亮眼的名片。",
  },
];
