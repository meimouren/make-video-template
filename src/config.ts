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

// ===== 竞赛主题全局常量 =====
export const COMPETITION = {
  name: "MOEMS",
  nameEn: "Math Olympiads for Elementary and Middle Schools",
  nameCn: "美国中小学数学奥林匹克",
  // Approximate participation curve — official sources cite ~120k current.
  // Earlier numbers reconstructed from program history (1979-present growth).
  participationData: [
    { year: "2000", value: 60 },
    { year: "2005", value: 75 },
    { year: "2010", value: 90 },
    { year: "2015", value: 100 },
    { year: "2020", value: 110 },
    { year: "2025", value: 120 },
    { year: "2026", value: 120 },
  ],
  participationTitle: "MOEMS 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是MOEMS，美国中小学数学奥林匹克。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "MOEMS",
    competitionNameEn: "Math Olympiads for Elementary and Middle Schools",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "MOEMS 是什么？",
    subtitle: "美国本土历史较久的小学初中数学奥赛",
    text: "MOEMS全称是Math Olympiads for Elementary and Middle Schools，美国中小学数学奥林匹克。一九七九年正式开赛，至今运营已超过四十年，是美国本土历史较久、覆盖面较广的小学初中阶段数学竞赛之一。",
    openingStats: {
      midLabel: "1979 年开赛至今",
      midValue: "47 年",
      scaleLabel: "年参赛规模",
      scaleValue: "120K",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "39 国参赛 · 数学思维启蒙路径起点",
    text: "MOEMS每年吸引来自三十九个国家、约十二万名学生参加。它是美国小学和初中阶段最早建立的数学竞赛之一，也是国际学生开始接触数学竞赛的常见入门选择。",
    stats: [
      { value: "1979", label: "首届开赛" },
      { value: "5", label: "场考试" },
      { value: "39", label: "国家参赛" },
      { value: "120K", label: "年参赛规模" },
    ],
  },

  {
    id: "what-is-moems",
    type: "title-card",
    title: "MOEMS 核心定位",
    subtitle: "小学到初中 · 思维型数学竞赛",
    text: "MOEMS的核心定位是培养小学到初中阶段学生的数学思维。题目不依赖技巧或公式记忆，而是强调用数学方式去思考问题。两个组别分别面向小学高年级和初中生。",
    highlights: ["小学初中", "5 场考试", "团队加个人", "Lenchner 创办", "覆盖 39 国"],
  },

  {
    id: "founder",
    type: "benefits",
    title: "创办人 George Lenchner",
    subtitle: "1979 年由数学教育家创办",
    text: "MOEMS由美国数学教育家George Lenchner创办于一九七九年。Lenchner长期从事小学初中数学教学，编写过多本面向中小学的解题书籍，是美国基础数学教育领域有影响力的学者之一。",
    benefits: [
      { icon: "", title: "1979 创办", desc: "公开赛事开赛年" },
      { icon: "", title: "Lenchner", desc: "数学教育家" },
      { icon: "", title: "501c3", desc: "非营利运营" },
      { icon: "", title: "47 年", desc: "至今持续举办" },
    ],
  },

  {
    id: "divisions",
    type: "key-points",
    title: "两个组别",
    subtitle: "Division E · Division M",
    text: "MOEMS分两个组别。Division E面向小学四到六年级；Division M面向六到八年级的初中生。允许低年级学生参加更高一级组别，但不允许反过来。两个组别题目不同、难度阶梯不同。",
    keyPoints: [
      { label: "Division E", value: "4-6 年级" },
      { label: "Division M", value: "6-8 年级" },
      { label: "降级参赛", value: "不允许" },
      { label: "升级参赛", value: "允许" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "5 场月赛 · 5 题 30 分钟",
    text: "MOEMS的赛季从十一月开始，到次年三月结束。每月一场考试，整个赛季总共五场。每场考试五道题，限时三十分钟。考试由学校或注册机构现场组织，所有学生在同一时间作答。",
    keyPoints: [
      { label: "赛季月份", value: "11 月至 3 月" },
      { label: "考试场数", value: "5 场月赛" },
      { label: "单场题量", value: "5 道题" },
      { label: "单场限时", value: "30 分钟" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "评分与奖项",
    subtitle: "个人累计 + 团队汇总",
    text: "MOEMS的评分按整个赛季二十五道题累计。个人方面：累计得分前百分之五十获参赛徽章，前百分之三到十获银牌徽章，前百分之二获金牌徽章；满分者获George Lenchner纪念徽章。团队方面：前百分之十获奖牌，前百分之十一到二十获证书。",
    keyPoints: [
      { label: "前 50%", value: "参赛徽章" },
      { label: "前 3-10%", value: "银牌徽章" },
      { label: "前 2%", value: "金牌徽章" },
      { label: "满分", value: "Lenchner 纪念徽章" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "全球开放 · 学校或机构注册",
    text: "MOEMS对全球小学四年级到初中八年级学生开放。报名通过学校或注册机构进行，需要先注册成为MOEMS的会员学校或团队，再以团队为单位参赛。每个团队至少需要一名指导教师。",
    keyPoints: [
      { label: "年级范围", value: "4 至 8 年级" },
      { label: "国籍", value: "全球开放" },
      { label: "报名通道", value: "学校或机构" },
      { label: "组织形式", value: "团队注册" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "MOEMS 的申请价值",
    subtitle: "数学竞赛背景的早期切入点",
    text: "对中国家长而言，MOEMS的价值首先在覆盖面：运营已经超过四十年，参赛网络遍及全美和海外三十九个国家。其次在题目设计：强调用数学思考而非依赖技巧。第三在申请价值：对申请美国寄宿初中、Day School的孩子，MOEMS是简历上最早可产出的可量化数学竞赛背景。",
    benefits: [
      { icon: "", title: "历史悠久", desc: "运营超 40 年" },
      { icon: "", title: "题目质量", desc: "思维优先" },
      { icon: "", title: "申请加分", desc: "寄宿初中可量化" },
      { icon: "", title: "团队意识", desc: "学校组队启蒙" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "MOEMS vs AMC 8",
    subtitle: "两大美国小学初中数学竞赛对比",
    text: "MOEMS和AMC 8是中国家长最常被问到的两个美国初中阶段数学竞赛。MOEMS赛季长五个月、有团队赛；AMC 8一年只有一场、纯个人赛。MOEMS适合更早接触竞赛、注重团队合作；AMC 8偏向高强度个人测评。",
    comparison: [
      { aspect: "起赛年级", left: "4 年级", right: "6 年级" },
      { aspect: "赛季长度", left: "5 个月", right: "1 天" },
      { aspect: "考试场数", left: "5 场", right: "1 场" },
      { aspect: "单场时长", left: "30 分钟", right: "40 分钟" },
      { aspect: "团队赛", left: "有", right: "无" },
    ],
    leftLabel: "MOEMS",
    rightLabel: "AMC 8",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 MOEMS 赛程",
    subtitle: "2026-2027 赛季已公布完整时间表",
    text: "MOEMS的二零二六到二零二七赛季时间已经全部公布。第一场考试十一月九日到三十日，第二场十二月七日到二十八日，第三场次年一月四日到二十五日，第四场二月一日到二十二日，第五场三月一日到二十九日收官。",
    events: [
      { date: "2026 年 11 月 9-30 日", event: "第一场考试" },
      { date: "2026 年 12 月 7-28 日", event: "第二场考试" },
      { date: "2027 年 1 月 4-25 日", event: "第三场考试" },
      { date: "2027 年 2 月 1-22 日", event: "第四场考试" },
      { date: "2027 年 3 月 1-29 日", event: "第五场赛季收官" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "MOEMS 在竞赛路径中的位置",
    subtitle: "数学竞赛启蒙到进阶",
    text: "国内小学高年级和初中学生建议从MOEMS入手积累数学思维和竞赛意识，初中阶段过渡到MathCounts和AMC 8进行个人测评，初二之后进入AMC 10、AIME，再向更专业的高中级别数学竞赛发展。",
    pathway: [
      { stage: "MOEMS", desc: "小学竞赛启蒙" },
      { stage: "MathCounts · AMC 8", desc: "初中个人和团队赛" },
      { stage: "AMC 10 · AIME", desc: "高中入门" },
      { stage: "HMMT · MIT 系列", desc: "高级数学赛" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "历届真题 · 思维训练 · 团队磨合",
    text: "第一步通过MOEMS官方Resources或代理机构获取历届真题。第二步每周固定做一套真题，时长按真实考试三十分钟限制。第三步重点训练数学思维型题目，不要只刷套路。第四步以学校或机构团队形式做完整赛季模拟。第五步每场考完做错题归类。",
    steps: [
      { step: "01", title: "历届真题", desc: "官方 Resources" },
      { step: "02", title: "每周一套", desc: "限时 30 分钟" },
      { step: "03", title: "思维训练", desc: "不刷套路" },
      { step: "04", title: "团队模拟", desc: "完整赛季" },
      { step: "05", title: "错题归类", desc: "按板块" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "MOEMS 是数学竞赛起步的常见入门选择",
    subtitle: "47 年历史 · 39 国参赛 · 思维优先",
    text: "MOEMS是美国本土最早建立的小学初中数学竞赛之一，运营已超过四十年。对小学高年级和初中阶段的孩子来说，MOEMS是开始接触数学竞赛的常见入门选择。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
