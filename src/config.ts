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
  // ===== 封面 =====
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是Euclid，欧几里得数学竞赛。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "Euclid",
    competitionNameEn: "Euclid Mathematics Contest",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  // ===== 开场1: 折线图 =====
  {
    id: "opening-1",
    type: "opening-chart",
    text: "加拿大最具含金量的高中数学竞赛，每年超过两万七千名学生参与角逐。被誉为申请北美名校理工专业的敲门砖。",
  },

  // ===== 开场2: 关键数字 =====
  {
    id: "opening-2",
    type: "opening-stats",
    text: "无论你是计划申请滑铁卢大学，还是想提升数学竞争力，这个视频帮你全面了解欧几里得竞赛。",
    stats: [
      { label: "创办年份", value: 1963, suffix: "年" },
      { label: "年参赛人数", value: 27092, suffix: "+" },
      { label: "参赛学校", value: 1760, suffix: "+" },
      { label: "历史", value: 60, suffix: "年+" },
    ],
  },

  // ===== 什么是欧几里得1 =====
  {
    id: "what-is-euclid-1",
    type: "title-card",
    title: "什么是 Euclid",
    subtitle: "Euclid Mathematics Contest",
    text: "Euclid，全称Euclid Mathematics Contest，欧几里得数学竞赛。由CEMC，Centre for Education in Mathematics and Computing，滑铁卢大学数学与计算机教育中心主办。",
    highlights: ["CEMC 主办", "滑铁卢大学", "1963年创办"],
  },

  // ===== 什么是欧几里得2 =====
  {
    id: "what-is-euclid-2",
    type: "title-card",
    title: "赛事定位",
    subtitle: "加拿大数学竞赛之王",
    text: "欧几里得是加拿大认可度最高的高中数学竞赛。滑铁卢大学数学与工程学院在官网上明确表示强烈推荐申请学生参加。成绩也是入学奖学金发放的重要依据。",
    highlights: ["加拿大最权威", "滑大强烈推荐", "奖学金依据"],
  },

  // ===== 考试基本信息 =====
  {
    id: "exam-basic",
    type: "key-points",
    title: "考试概览",
    subtitle: "基本信息一览",
    text: "考试共10道题，每题10分，满分100分。限时150分钟，也就是两个半小时。纸质笔试，独立作答。",
    keyPoints: [
      { label: "题目数量", value: "10 题" },
      { label: "满分", value: "100 分" },
      { label: "考试时间", value: "150 分钟" },
      { label: "考试形式", value: "纸质笔试" },
    ],
  },

  // ===== 题型详解 =====
  {
    id: "question-types",
    type: "comparison",
    title: "两种题型",
    subtitle: "简答题(Short) vs 全解题(Full)",
    text: "每道题由多个小题组成。简答题只需写出最终答案，每小题3分。全解题需要完整的解题过程，每小题最高7分。",
    comparison: [
      { item: "分值", amc10: "3 分/小题", amc12: "最高 7 分/小题" },
      { item: "要求", amc10: "只需写答案", amc12: "完整解题过程" },
      { item: "评分", amc10: "对错分明", amc12: "看过程给分" },
      { item: "标记", amc10: "💡 灯泡图标", amc12: "📝 笔纸图标" },
    ],
  },

  // ===== 评分特点 =====
  {
    id: "scoring-special",
    type: "scoring-formula",
    title: "评分标准",
    subtitle: "过程比答案更重要",
    text: "欧几里得最大的特点是全解题会根据解题过程的完整性、清晰度和表达方式来评分。即使答案正确，如果表达不清晰也不能拿满分。",
    formula: "得分 = 完整性 + 清晰度 + 表达规范",
  },

  // ===== 得分分布 =====
  {
    id: "score-stats",
    type: "scoring-examples",
    title: "2025年分数线",
    subtitle: "你需要考多少分",
    text: "2025年欧几里得竞赛平均分54.8分。前25%的证书线为68分，学校冠军的奖牌线为54分。",
    scoringExamples: [
      { correct: 0, blank: 0, score: 100, label: "满分" },
      { correct: 0, blank: 0, score: 68, label: "前25%证书" },
      { correct: 0, blank: 0, score: 54.8, label: "平均分" },
      { correct: 0, blank: 0, score: 54, label: "奖牌线" },
    ],
  },

  // ===== 考试内容 =====
  {
    id: "topics",
    type: "topics-chart",
    title: "核心考点",
    subtitle: "五大数学领域",
    text: "考试内容涵盖函数、几何、数列、排列组合和代数五大领域。题目难度递增，前几题基础，后几题极具挑战性。",
    domains: [
      { name: "代数", percentage: 25, topics: "多项式·方程·不等式" },
      { name: "函数", percentage: 25, topics: "函数图像·性质·变换" },
      { name: "几何", percentage: 20, topics: "平面几何·坐标几何" },
      { name: "数列", percentage: 15, topics: "等差·等比·递推" },
      { name: "组合", percentage: 15, topics: "排列组合·概率·计数" },
    ],
  },

  // ===== 考试时间 =====
  {
    id: "calendar",
    type: "calendar",
    title: "2026 赛事日历",
    subtitle: "关键时间节点",
    text: "2026年欧几里得竞赛将于3月31日在北美和南美举行，4月1日在其他地区举行。报名截止日期是3月5日。",
    events: [
      { date: "2026.03.05", event: "报名截止" },
      { date: "2026.03.31", event: "北美/南美考试日" },
      { date: "2026.04.01", event: "其他地区考试日" },
    ],
  },

  // ===== 参赛资格 =====
  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "谁可以参加",
    text: "面向高中最后一年的学生，但低年级优秀学生也可以参加。正式参赛者须在2007年1月1日或之后出生。报名费每人18加元。",
    keyPoints: [
      { label: "目标年级", value: "高中最后一年" },
      { label: "低年级", value: "可以参加" },
      { label: "报名费", value: "18 加元/人" },
      { label: "计算器", value: "部分允许使用" },
    ],
  },

  // ===== 奖项设置 =====
  {
    id: "awards",
    type: "key-points",
    title: "奖项设置",
    subtitle: "荣誉与奖金",
    text: "前25%获得滑铁卢大学颁发的荣誉证书。加拿大前5名获得500加元奖金和奖牌。接下来10名获得200加元奖金。",
    keyPoints: [
      { label: "荣誉证书", value: "前 25%" },
      { label: "加拿大前5", value: "$500 + 奖牌" },
      { label: "加拿大前15", value: "$200 奖金" },
      { label: "学校冠军", value: "竞赛奖牌" },
    ],
  },

  // ===== 对大学申请的价值 =====
  {
    id: "why-euclid",
    type: "benefits",
    title: "为什么要参加",
    subtitle: "升学与成长的核心价值",
    text: "欧几里得成绩已经成为北美各大院校理工专业评估学生的重要依据。不仅是滑铁卢大学，加拿大和英美的众多名校都高度认可。",
    benefits: [
      { icon: "🏫", title: "滑大认可", desc: "数学/工程学院强烈推荐" },
      { icon: "💰", title: "奖学金", desc: "入学奖学金发放的必要条件" },
      { icon: "🌍", title: "北美通行", desc: "加拿大英美名校广泛认可" },
      { icon: "🧠", title: "能力证明", desc: "数学思维与解题能力的权威认证" },
    ],
  },

  // ===== 备赛建议1 =====
  {
    id: "prep-1",
    type: "prep-steps",
    title: "备赛建议",
    subtitle: "四步高效备考",
    text: "建议至少提前3到6个月准备。CEMC官网提供历年真题和详细解析，是最好的备考资源。重点练习全解题的书写规范。",
    steps: [
      { num: "01", title: "历年真题", desc: "CEMC官网免费下载" },
      { num: "02", title: "全解训练", desc: "重点练习解题过程书写" },
    ],
  },

  // ===== 备赛建议2 =====
  {
    id: "prep-2",
    type: "prep-steps",
    title: "冲刺阶段",
    subtitle: "提分关键",
    text: "第三步针对薄弱领域专项突破，第四步做限时模拟训练。特别注意全解题的表达规范，阅卷非常看重解题过程的清晰度。",
    steps: [
      { num: "03", title: "专项突破", desc: "函数和几何是重点" },
      { num: "04", title: "限时模拟", desc: "150分钟完整模考" },
    ],
  },

  // ===== 结语 =====
  {
    id: "closing",
    type: "closing",
    title: "开启你的数学之旅",
    text: "欧几里得不仅是一场竞赛，更是通往北美顶尖大学理工专业的黄金通道。现在就开始准备，让数学成为你最亮眼的名片。",
  },
];
