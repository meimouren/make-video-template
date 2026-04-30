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

export const COMPETITION = {
  name: "IYPT",
  nameEn: "International Young Physicists Tournament",
  nameCn: "国际青年物理学家锦标赛",
  participationData: [
    { year: "2018", value: 30 },
    { year: "2020", value: 28 },
    { year: "2021", value: 30 },
    { year: "2022", value: 32 },
    { year: "2023", value: 33 },
    { year: "2024", value: 33 },
    { year: "2026", value: 35 },
  ],
  participationTitle: "IYPT 历年参赛国家数",
  participationUnit: "国",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是IYPT，国际青年物理学家锦标赛。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "IYPT",
    competitionNameEn: "Intl Young Physicists",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "IYPT 是什么？",
    subtitle: "全球团队物理研究锦标赛",
    text: "IYPT，全称International Young Physicists Tournament，中文译为国际青年物理学家锦标赛。是一项面向高中生的团队物理研究竞赛，由国际青年物理学家锦标赛理事会主办。每年三十多个国家代表队进行真正的科学辩论和研究展示。",
    openingStats: {
      midLabel: "举办形式",
      midValue: "全球轮办",
      scaleLabel: "参赛国家",
      scaleValue: "35+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "团队科研 · 真实物理辩论 · 研究型选手",
    text: "IYPT的稀缺性来自三方面。第一是赛制独特：不是考试，而是真实的物理研究和学术辩论。第二是团队科研：每队五人围绕开放性物理问题做实验和理论探索。第三是申请价值：在顶尖大学申请中是体现科研能力的非常硬背景，与传统考试型奥赛形成强差异化。",
    stats: [
      { value: "17", label: "题 / 一年" },
      { value: "5 人", label: "一队规模" },
      { value: "5 + 1", label: "选拔加决赛轮" },
      { value: "Physics Fight", label: "学术辩论" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "IYPT 核心定位",
    subtitle: "高中团队 · 开放性研究 · 学术辩论",
    text: "IYPT的核心定位是高中阶段最具科研感的物理竞赛。每年由国际理事会IOC公布十七道开放性物理问题，团队需要花一整年时间做实验、推导理论、撰写报告，最终在Physics Fight物理辩论中向其他队伍展示和挑战。",
    highlights: ["开放性研究", "Physics Fight", "5 人团队", "17 题一年", "答辩制"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 IOC 国际理事会",
    subtitle: "International Organising Committee",
    text: "IYPT由国际青年物理学家锦标赛理事会IOC主办，是一个由各国物理学界代表组成的非营利组织。每年由理事会公布次年的十七道问题，由各成员国组织本国选拔。第三十九届二零二六年IYPT决赛将在瑞士苏黎世举行。",
    benefits: [
      { icon: "", title: "IOC 主办", desc: "国际理事会" },
      { icon: "", title: "1988 创办", desc: "37 年历史" },
      { icon: "", title: "成员国轮办", desc: "各国分担" },
      { icon: "", title: "苏黎世 2026", desc: "第 39 届" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "5 轮选拔 + 1 轮决赛 · Physics Fight 形式",
    text: "IYPT的比赛由Physics Fight物理辩论赛组成。每场Physics Fight有三到四个队伍参与，分轮次扮演Reporter报告人、Opponent反方、Reviewer评审三种角色。整个赛事五轮选拔加一轮决赛，每位队员每场最多发言两次。",
    keyPoints: [
      { label: "Reporter", value: "报告人 · 展示研究" },
      { label: "Opponent", value: "反方 · 质询挑战" },
      { label: "Reviewer", value: "评审 · 双方点评" },
      { label: "总轮次", value: "5 选拔 + 1 决赛" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "评分与奖项",
    subtitle: "团队累计积分 · 金银铜代表",
    text: "IYPT的评分按团队累计积分。每场Physics Fight中Reporter、Opponent、Reviewer三个角色都有独立评分，加权后形成本场得分。整个赛事所有Physics Fight得分汇总后形成最终团队排名。Top代表团队获Gold金牌、Silver银牌、Bronze铜牌。",
    keyPoints: [
      { label: "三角色评分", value: "Reporter Opponent Reviewer" },
      { label: "Gold", value: "金牌团队" },
      { label: "Silver", value: "银牌团队" },
      { label: "Bronze", value: "铜牌团队" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "国家队选拔 · 高中阶段团队",
    text: "IYPT的参赛资格通过各国国家队选拔。中国队由中国本土IYPT国家队选拔赛CYPT决出。CYPT每年由各高中报名，全国高中赛区选拔出顶尖团队代表中国出征IYPT国际赛。每队五名队员加一到两位指导教练。",
    keyPoints: [
      { label: "参赛形式", value: "国家代表队" },
      { label: "中国选拔", value: "CYPT" },
      { label: "队伍规模", value: "5 人 + 教练" },
      { label: "学段", value: "高中" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "IYPT 的申请价值",
    subtitle: "科研能力 · 团队 · 学术辩论 · 顶尖大学认可",
    text: "对中国家长而言，IYPT的价值在四方面。第一是科研能力：一年的开放性研究最接近真正的科学研究过程。第二是团队协作：五人长期合作的团队信号。第三是学术辩论：英文展示和科学辩论能力。第四是申请认可：MIT、Caltech、剑桥、ETH等顶尖大学认可IYPT是高度差异化的硬背景。",
    benefits: [
      { icon: "", title: "科研能力", desc: "一年研究" },
      { icon: "", title: "团队协作", desc: "5 人长期" },
      { icon: "", title: "学术辩论", desc: "英文展示" },
      { icon: "", title: "顶尖大学", desc: "MIT 加 ETH" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "IYPT vs IPhO",
    subtitle: "团队研究赛 vs 个人考试赛",
    text: "IYPT和IPhO是两种完全不同维度的国际物理顶级赛事。IPhO是个人考试型奥赛，限时做物理题；IYPT是团队研究型锦标赛，一年时间做开放性研究。IPhO侧重做题速度和精度；IYPT侧重科研、团队和辩论能力。",
    comparison: [
      { aspect: "形式", left: "团队 5 人", right: "个人" },
      { aspect: "周期", left: "一年研究", right: "几小时考试" },
      { aspect: "题目", left: "17 道开放题", right: "5 道精选题" },
      { aspect: "考察", left: "研究加辩论", right: "做题精度" },
      { aspect: "申请角度", left: "科研协作", right: "学术能力" },
    ],
    leftLabel: "IYPT",
    rightLabel: "IPhO",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 IYPT 赛程",
    subtitle: "第 39 届 · 2026 年苏黎世",
    text: "IYPT每年通常在七月份举办。二零二六年第三十九届国际锦标赛将在瑞士苏黎世举行。各国选拔赛在前一年下半年到当年春季完成。中国队伍通过CYPT中国青年物理学家锦标赛进行选拔，时间通常在六月。",
    events: [
      { date: "2025 年下半年", event: "下届 17 题公布" },
      { date: "2026 年 3-6 月", event: "各国选拔赛" },
      { date: "2026 年 6 月", event: "CYPT 中国选拔" },
      { date: "2026 年 7 月", event: "IYPT 苏黎世决赛" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "IYPT 在物理路径中的位置",
    subtitle: "高中科研型物理顶级赛事",
    text: "国内学生的IYPT路径建议是先选定高中阶段对物理科研感兴趣的方向，加入学校或机构组建的IYPT团队，完成CYPT中国选拔，进入CYPT国家队代表中国出征IYPT国际赛。整个过程是真实的科研经历，与做题型奥赛形成完全不同的能力培养路径。",
    pathway: [
      { stage: "学校 IYPT 团队", desc: "组队磨合" },
      { stage: "选定 17 题方向", desc: "全年研究" },
      { stage: "CYPT 国内选拔", desc: "代表权" },
      { stage: "IYPT 国际锦标赛", desc: "国际舞台" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "实验设计 · 理论建模 · 英文答辩",
    text: "第一步是组队和选题，从十七道开放题中选定五到八道作为深耕方向。第二步设计实验装置，反复验证数据。第三步建立理论模型，用物理推导对接实验结果。第四步撰写报告并制作答辩PPT。第五步反复模拟Physics Fight，重点训练英文学术辩论能力。",
    steps: [
      { step: "01", title: "选题分工", desc: "17 题中精选" },
      { step: "02", title: "实验装置", desc: "数据反复验证" },
      { step: "03", title: "理论建模", desc: "对接实验" },
      { step: "04", title: "报告答辩", desc: "PPT 加英文" },
      { step: "05", title: "模拟 PF", desc: "辩论训练" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "IYPT 是高中阶段最具科研感的物理赛事",
    subtitle: "团队科研 · 物理辩论 · 顶尖大学认可",
    text: "IYPT是国际青年物理学家锦标赛，每年由全球三十多个国家代表队进行团队科研和物理辩论。对家有高中阶段、有志于物理科研、追求差异化背景的学生家庭来说，IYPT是最特别的物理赛事之一。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
