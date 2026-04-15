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
    text: "每天介绍一个国际竞赛，今天要介绍的是UKChO，英国化学奥林匹克。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "UKChO",
    competitionNameEn: "UK Chemistry Olympiad",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    text: "英国最权威的高中化学竞赛，由英国皇家化学学会主办，已有超过50年历史。获奖经历是申请牛剑理科和医学专业的重要加分项。",
  },

  {
    id: "opening-2",
    type: "opening-stats",
    text: "无论你是化学爱好者还是想冲刺英国G5名校，这个视频帮你全面了解UKChO英国化学奥赛。",
    stats: [
      { label: "历史", value: 50, suffix: "年+" },
      { label: "考试时长", value: 120, suffix: "分钟" },
      { label: "满分", value: 84, suffix: "分" },
      { label: "国家队", value: 4, suffix: "人" },
    ],
  },

  {
    id: "what-is-ukcho-1",
    type: "title-card",
    title: "什么是 UKChO",
    subtitle: "UK Chemistry Olympiad",
    text: "UKChO，全称UK Chemistry Olympiad，英国化学奥林匹克。由RSC，Royal Society of Chemistry，英国皇家化学学会主办。旨在培养学生的化学问题解决能力和创造性思维。",
    highlights: ["RSC 主办", "皇家化学学会", "50年历史"],
  },

  {
    id: "what-is-ukcho-2",
    type: "title-card",
    title: "赛事定位",
    subtitle: "通往国际化学奥林匹克的起点",
    text: "UKChO是英国国际化学奥林匹克IChO国家队的选拔通道。Round 1全球开放参赛，Round 2选拔约30人集训，最终4人代表英国出征IChO。",
    highlights: ["IChO选拔赛", "30人集训", "4人国家队"],
  },

  {
    id: "exam-format",
    type: "key-points",
    title: "考试概览",
    subtitle: "Round 1 基本信息",
    text: "Round 1是一场120分钟的笔试，满分约84分。包含5到6道大题，每道大题有3到10个小题。在学校内进行，由老师监考。",
    keyPoints: [
      { label: "考试时间", value: "120 分钟" },
      { label: "满分", value: "约 84 分" },
      { label: "大题数量", value: "5-6 道" },
      { label: "考试形式", value: "校内笔试" },
    ],
  },

  {
    id: "exam-content",
    type: "topics-chart",
    title: "四大考试领域",
    subtitle: "覆盖化学核心方向",
    text: "考试内容涵盖无机化学、有机化学、物理化学和分析化学四大方向。题目以真实世界的化学问题为背景，不涉及现场实验。",
    domains: [
      { name: "有机化学", percentage: 30, topics: "反应机理·合成路线·立体化学" },
      { name: "物理化学", percentage: 25, topics: "热力学·动力学·电化学" },
      { name: "无机化学", percentage: 25, topics: "元素化学·配位化学·结构" },
      { name: "分析化学", percentage: 20, topics: "光谱分析·滴定·计算" },
    ],
  },

  {
    id: "scoring",
    type: "scoring-examples",
    title: "2026年 Round 1 分数线",
    subtitle: "你需要考多少分",
    text: "2026年Round 1满分84分。金奖线38分，约8.5%的学生获得。银奖线23分，约25.7%。铜奖线13分，约36.5%。",
    scoringExamples: [
      { correct: 0, blank: 0, score: 84, label: "满分" },
      { correct: 0, blank: 0, score: 38, label: "金奖 8.5%" },
      { correct: 0, blank: 0, score: 23, label: "银奖 25.7%" },
      { correct: 0, blank: 0, score: 13, label: "铜奖 36.5%" },
    ],
  },

  {
    id: "scoring-rule",
    type: "scoring-formula",
    title: "评分标准",
    subtitle: "全球统一阅卷",
    text: "所有试卷寄回英国，由RSC指定考官统一评分。全球奖项先按英国学生成绩划出分数线，其他国家学生参照同一标准评奖。",
    formula: "英国学生划线 → 全球统一标准",
  },

  {
    id: "three-rounds",
    type: "progression",
    title: "三轮选拔机制",
    subtitle: "从 Round 1 到 IChO",
    text: "Round 1全球开放。前30名进入Round 2在诺丁汉大学集训。经过选拔训练，4人组成英国国家队出征IChO，International Chemistry Olympiad，国际化学奥林匹克。",
    pathway: [
      { stage: "Round 1", participants: "全球", desc: "校内笔试" },
      { stage: "Round 2", participants: "~30", desc: "诺丁汉集训" },
      { stage: "训练营", participants: "~10", desc: "强化选拔" },
      { stage: "IChO", participants: "4", desc: "国家队" },
    ],
  },

  {
    id: "calendar",
    type: "calendar",
    title: "2026 赛事日历",
    subtitle: "关键时间节点",
    text: "报名从9月中旬到1月中旬。Round 1在1月底进行。Round 2在4月初于诺丁汉大学举行。IChO在7月于乌兹别克斯坦塔什干举行。",
    events: [
      { date: "2025.09.17", event: "报名开始" },
      { date: "2026.01.14", event: "报名截止" },
      { date: "2026.01.28", event: "Round 1 考试" },
      { date: "2026.04.09-12", event: "Round 2 诺丁汉" },
      { date: "2026.07", event: "IChO 塔什干" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "谁可以参加",
    text: "面向16到19岁的高中生，主要针对高中最后一年的学生。中国籍学生可以参加Round 1，与英国学生统一考试统一评奖。需通过学校或指定机构报名。",
    keyPoints: [
      { label: "年龄要求", value: "16-19 岁" },
      { label: "目标年级", value: "高中最后一年" },
      { label: "中国学生", value: "可参加 Round 1" },
      { label: "报名方式", value: "通过学校报名" },
    ],
  },

  {
    id: "why-ukcho",
    type: "benefits",
    title: "为什么要参加",
    subtitle: "对升学和发展的价值",
    text: "UKChO获奖经历是申请英国G5大学化学、医学和药学专业的重要加分项。由英国皇家化学学会背书，含金量极高。",
    benefits: [
      { icon: "🏫", title: "G5加分", desc: "牛剑/帝国理工化学医学认可" },
      { icon: "👑", title: "皇家背书", desc: "英国皇家化学学会主办" },
      { icon: "🌍", title: "IChO通道", desc: "国际化学奥林匹克选拔赛" },
      { icon: "🧪", title: "化学素养", desc: "真实问题驱动的化学思维" },
    ],
  },

  {
    id: "prep-1",
    type: "prep-steps",
    title: "备赛建议",
    subtitle: "两步入门",
    text: "建议提前3到6个月准备。以A-level化学为基础，重点深化有机化学和物理化学。RSC官网提供历年真题和考官报告。",
    steps: [
      { num: "01", title: "历年真题", desc: "RSC官网免费下载" },
      { num: "02", title: "有机化学", desc: "反应机理是核心考点" },
    ],
  },

  {
    id: "prep-2",
    type: "prep-steps",
    title: "冲刺阶段",
    subtitle: "拿金奖的关键",
    text: "重点攻克合成路线设计和复杂计算题。阅读考官报告了解常见失分点。考前做限时模拟训练，适应120分钟的考试节奏。",
    steps: [
      { num: "03", title: "合成路线", desc: "有机合成设计能力" },
      { num: "04", title: "限时模拟", desc: "120分钟完整模考" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "开启你的化学之旅",
    text: "UKChO不仅是一场竞赛，更是通往国际化学奥林匹克的起点。现在就开始准备，让化学成为你最闪亮的名片。",
  },
];
