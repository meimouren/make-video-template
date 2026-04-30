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
  name: "SIN",
  nameEn: "Sir Isaac Newton Exam",
  nameCn: "滑铁卢牛顿物理挑战",
  participationData: [
    { year: "2018", value: 4 },
    { year: "2020", value: 4 },
    { year: "2021", value: 4 },
    { year: "2022", value: 5 },
    { year: "2023", value: 5 },
    { year: "2024", value: 6 },
    { year: "2026", value: 6 },
  ],
  participationTitle: "SIN 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是SIN，滑铁卢牛顿物理挑战。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "SIN",
    competitionNameEn: "Sir Isaac Newton Exam",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "SIN 是什么？",
    subtitle: "滑铁卢大学主办的高中物理挑战赛",
    text: "SIN，全称Sir Isaac Newton Exam，中文译为牛顿物理挑战，由加拿大滑铁卢大学物理与天文系主办。是面向北美和全球高中生的物理测评赛，以基础经典力学为主线，每年五月举办。",
    openingStats: {
      midLabel: "举办方",
      midValue: "Waterloo",
      scaleLabel: "年参赛规模",
      scaleValue: "6K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "滑铁卢大学认证 · 加拿大物理入门",
    text: "SIN的稀缺性来自三方面。第一是滑铁卢大学背书：滑铁卢是北美最强工程学院之一，名声在国内家长圈非常熟悉。第二是适合入门：题型基础经典，对高中物理学生友好。第三是申请加分：滑铁卢工程系直接认可SIN成绩。",
    stats: [
      { value: "Waterloo", label: "工程牛校主办" },
      { value: "5 月", label: "每年考试" },
      { value: "选择题", label: "题型" },
      { value: "120", label: "分钟限时" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "SIN 核心定位",
    subtitle: "高中物理 · 经典力学 · 入门挑战",
    text: "SIN的核心定位是面向高中阶段学生的物理入门挑战。题目基于安大略省高中物理课程标准，强调经典力学和物理直觉。题型为选择题，难度对高中物理基础扎实的学生友好，比起F等于ma和BPhO Round 1门槛更低。",
    highlights: ["Waterloo 主办", "经典力学", "选择题", "120 分钟", "5 月考试"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 滑铁卢大学物理与天文系",
    subtitle: "Department of Physics and Astronomy",
    text: "SIN由加拿大滑铁卢大学Department of Physics and Astronomy主办。滑铁卢是北美工程领域顶尖大学之一，特别在量子计算、应用物理、计算机工程等专业全球知名。SIN的命题风格延续了滑铁卢理工教学的特色：题目设计有趣、有时甚至加入一点幽默元素。",
    benefits: [
      { icon: "", title: "Waterloo", desc: "工程顶级" },
      { icon: "", title: "理工传统", desc: "幽默风格" },
      { icon: "", title: "在线考试", desc: "学校统一组织" },
      { icon: "", title: "OAOPT 协办", desc: "安省物理教师" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "选择题 · 120 分钟 · 答错倒扣",
    text: "SIN的考试格式标准化。所有题目均为多选题，限时两小时。计分规则：答对加四分，留空零分，答错倒扣一分。倒扣机制鼓励学生只在有把握的题目作答。考试通过线上平台进行，学校统一组织监考。",
    keyPoints: [
      { label: "题型", value: "多选选择题" },
      { label: "限时", value: "120 分钟" },
      { label: "答对", value: "加 4 分" },
      { label: "答错", value: "倒扣 1 分" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "评分与奖项",
    subtitle: "全球排名 · 滑铁卢申请关联",
    text: "SIN的成绩按全球排名颁发奖项。前五名获得Sir Isaac Newton Plaque纪念牌；其后获得证书和奖学金。表现优异的学生在申请滑铁卢大学物理工程相关专业时会受到招生官重点关注。",
    keyPoints: [
      { label: "Top 5", value: "Newton 纪念牌" },
      { label: "高分获奖", value: "证书加奖学金" },
      { label: "学校认证", value: "Waterloo 招生关联" },
      { label: "排名", value: "全球同台" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "全球高中生 · 学校组织报名",
    text: "SIN对全球高中生开放，必须由教师代表学校组织报名，不接受个人单独报名。国内学生通过阿思丹官方代理在国内赛区参赛。考试为线上形式，由学校监考老师在本地学校教室组织进行。",
    keyPoints: [
      { label: "学段", value: "高中" },
      { label: "国籍", value: "全球开放" },
      { label: "报名方式", value: "教师代报" },
      { label: "国内通道", value: "阿思丹承办" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "SIN 的申请价值",
    subtitle: "滑铁卢加分 · 物理入门 · 加拿大方向",
    text: "对中国家长而言，SIN的价值在三方面。第一是滑铁卢大学申请加分：物理工程系招生官认可SIN成绩。第二是物理竞赛入门：门槛低于F等于ma和BPhO，适合刚开始接触物理竞赛的学生。第三是加拿大方向：作为加拿大本土物理竞赛，对申请加拿大工程类大学有针对性认证。",
    benefits: [
      { icon: "", title: "Waterloo 加分", desc: "工程系认证" },
      { icon: "", title: "竞赛入门", desc: "门槛友好" },
      { icon: "", title: "加拿大方向", desc: "本土认证" },
      { icon: "", title: "经典力学", desc: "高中基础" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "SIN vs Physics Bowl",
    subtitle: "加美两大物理入门赛对比",
    text: "SIN和Physics Bowl是加美两大高中物理入门测评赛。SIN由滑铁卢大学主办、答错倒扣；Physics Bowl由AAPT主办、答错不倒扣。SIN偏重经典力学；Physics Bowl覆盖物理全板块。两者面向不同的留学方向。",
    comparison: [
      { aspect: "主办方", left: "滑铁卢大学", right: "AAPT 美国" },
      { aspect: "题量", left: "因年而异", right: "40 题" },
      { aspect: "限时", left: "120 分钟", right: "45 分钟" },
      { aspect: "倒扣", left: "答错倒扣 1 分", right: "无倒扣" },
      { aspect: "申请方向", left: "加拿大工程", right: "美国理工" },
    ],
    leftLabel: "SIN",
    rightLabel: "Physics Bowl",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 SIN 赛程",
    subtitle: "通常每年 5 月举办",
    text: "SIN每年通常在五月初举办。二零二六年报名截止四月十七日，考试在五月由学校自行选定时间组织。下届二零二七年预计同样在五月初进行，报名通道由滑铁卢大学官网在每年三月开放。",
    events: [
      { date: "2026 年 4 月 17 日", event: "报名截止" },
      { date: "2026 年 5 月初", event: "上届考试日" },
      { date: "2027 年 3 月预计", event: "下届报名开启" },
      { date: "2027 年 5 月预计", event: "下届考试" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "SIN 在物理路径中的位置",
    subtitle: "加拿大物理竞赛入门起点",
    text: "国内学生进入加拿大物理竞赛体系建议是先以SIN作为高中入门测评，进而冲CAP加拿大物理奥赛进入加拿大物理国家队选拔。同时可以并行参加美国Physics Bowl和F等于ma作为多线积累。",
    pathway: [
      { stage: "AP Physics 1 / 2", desc: "课程基础" },
      { stage: "SIN", desc: "Waterloo 入门" },
      { stage: "CAP 加拿大物理奥赛", desc: "进阶" },
      { stage: "IPhO 国家队选拔", desc: "国际方向" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "经典力学 · 历届真题 · 倒扣策略",
    text: "第一步同步AP Physics 1或安大略省高中物理课程的力学板块。第二步从滑铁卢大学SIN官网获取近五年真题。第三步每周限时两小时做完整套题。第四步重点训练倒扣策略：模糊题宁愿留空也不要乱猜。第五步赛前一周做全真模考。",
    steps: [
      { step: "01", title: "AP 力学", desc: "Physics 1 同步" },
      { step: "02", title: "近五年真题", desc: "Waterloo 官网" },
      { step: "03", title: "限时套题", desc: "每周一套" },
      { step: "04", title: "倒扣策略", desc: "模糊题留空" },
      { step: "05", title: "全真模考", desc: "赛前一周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "SIN 是滑铁卢大学主办的高中物理入门赛",
    subtitle: "经典力学 · 5 月考试 · 加拿大工程通道",
    text: "SIN是加拿大滑铁卢大学物理与天文系主办的高中物理挑战赛，是加拿大物理竞赛体系的入门级测评。对计划走加拿大留学方向、特别是滑铁卢工程申请的学生家庭，SIN值得重点关注。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
