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
  name: "PUPC",
  nameEn: "Princeton University Physics Competition",
  nameCn: "普林斯顿大学物理挑战赛",
  participationData: [
    { year: "2018", value: 1 },
    { year: "2020", value: 2 },
    { year: "2021", value: 3 },
    { year: "2022", value: 4 },
    { year: "2023", value: 5 },
    { year: "2024", value: 6 },
    { year: "2026", value: 7 },
  ],
  participationTitle: "PUPC 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是PUPC，普林斯顿大学物理挑战赛。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "PUPC",
    competitionNameEn: "Princeton Univ Physics",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "PUPC 是什么？",
    subtitle: "Physics Unlimited 主办的高中物理挑战赛",
    text: "PUPC，全称Princeton University Physics Competition，中文译为普林斯顿大学物理挑战赛。最初由普林斯顿大学物理学生社团主办，现由普林斯顿校友创立的非营利组织Physics Unlimited运营，是面向全球高中生的物理挑战赛。",
    openingStats: {
      midLabel: "举办方",
      midValue: "Physics Unlimited",
      scaleLabel: "年参赛规模",
      scaleValue: "7K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "藤校品牌 · 创新题型 · 团队加个人",
    text: "PUPC的稀缺性在三方面。第一是藤校品牌，普林斯顿主办自带学术权威。第二是题型创新，强调物理直觉而非套路。第三是双轨赛制，团队赛加个人赛，培养协作和深度思考能力。",
    stats: [
      { value: "Princeton", label: "藤校主办" },
      { value: "团队加个人", label: "双轨赛制" },
      { value: "AP Physics C", label: "对标难度" },
      { value: "全球", label: "开放赛区" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "PUPC 核心定位",
    subtitle: "高中物理 · 创意题型 · 双轨赛制",
    text: "PUPC的核心定位是面向高中阶段物理顶尖学生的挑战赛。题目难度对标AP Physics C，但题型新颖、强调创造性思维，常常超出经典力学进入广义物理范畴。比赛分Online Round线上团队赛和Onsite Round线下个人赛两个部分。",
    highlights: ["普林斯顿主办", "AP Physics C", "团队加个人", "创意题型", "全球认证"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 Physics Unlimited",
    subtitle: "Princeton 校友非营利组织",
    text: "PUPC现在由Physics Unlimited主办，这是一家由普林斯顿大学物理校友成立的非营利组织。Physics Unlimited专注于推广中学物理教育和竞赛，旗下还运营着Online Physics Olympiad等其他赛事。普林斯顿大学物理学生社团PSPS担任PUPC的协办方。",
    benefits: [
      { icon: "", title: "Physics Unlimited", desc: "非营利运营" },
      { icon: "", title: "Princeton 校友", desc: "藤校背书" },
      { icon: "", title: "PSPS", desc: "学生社团协办" },
      { icon: "", title: "全球赛事", desc: "高中物理推广" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "线上团队赛 + 线下个人赛",
    text: "PUPC的赛制分两部分。Online Round线上团队赛持续约一周，每队三到五人，可以协作研究开放性物理题目。Onsite Round线下个人赛限时两小时，主要考察经典力学板块。两部分独立评分，独立颁奖。",
    keyPoints: [
      { label: "Online Round", value: "团队 · 约 1 周" },
      { label: "Onsite Round", value: "个人 · 2 小时" },
      { label: "队伍规模", value: "3-5 人" },
      { label: "Onsite 板块", value: "经典力学" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "评分与奖项",
    subtitle: "团队个人双榜 · 全球前列特别表彰",
    text: "PUPC的评分按Online Round和Onsite Round分别排名。团队榜评出全球前列团队奖项，个人榜评出全球前列个人奖项。表现优异者会获得Physics Unlimited的官方证书和普林斯顿物理系的认证。",
    keyPoints: [
      { label: "Online 团队榜", value: "全球前列" },
      { label: "Onsite 个人榜", value: "全球前列" },
      { label: "证书背书", value: "Physics Unlimited" },
      { label: "学术加分", value: "申请加分" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "全球高中生 · 阿思丹中国赛区",
    text: "PUPC对全球高中阶段学生开放。国内学生通过阿思丹官方代理报名，参赛地点遍布国内主要城市。Online Round完全线上，全球同步；Onsite Round在国内赛区线下举办。",
    keyPoints: [
      { label: "学段", value: "高中" },
      { label: "国籍", value: "全球开放" },
      { label: "国内通道", value: "阿思丹承办" },
      { label: "Online 形式", value: "全球同步" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "PUPC 的申请价值",
    subtitle: "藤校背书 · 物理思维标识 · 协作能力",
    text: "对中国家长而言，PUPC的价值首先在普林斯顿藤校品牌：在美国理工科顶尖大学申请中是有辨识度的物理背景。其次是题型独特：和AMC AIME类的标准化测评不同，PUPC强调物理直觉和创造性，是物理思维深度的体现。第三是双轨赛制：团队和个人协作能力都被检验。",
    benefits: [
      { icon: "", title: "Princeton 品牌", desc: "藤校认证" },
      { icon: "", title: "物理思维", desc: "深度创造性" },
      { icon: "", title: "团队信号", desc: "协作能力" },
      { icon: "", title: "全球前列", desc: "国际化对标" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "PUPC vs F=ma",
    subtitle: "藤校挑战赛 vs 国家队选拔赛",
    text: "PUPC和F等于ma是两种不同维度的高水平物理赛事。PUPC由普林斯顿运营、强调创造性思维，团队加个人双轨；F等于ma是USAPhO选拔赛、纯个人、纯力学专项。两者侧重的物理能力维度不同，可以并行参加。",
    comparison: [
      { aspect: "主办方", left: "Princeton 校友", right: "AAPT 美国" },
      { aspect: "形式", left: "团队加个人", right: "纯个人" },
      { aspect: "题型", left: "开放创造性", right: "选择题选拔" },
      { aspect: "时长", left: "1 周加 2 小时", right: "75 分钟" },
      { aspect: "目标", left: "申请加分", right: "国家队晋级" },
    ],
    leftLabel: "PUPC",
    rightLabel: "F=ma",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 PUPC 赛程",
    subtitle: "通常每年秋季举办",
    text: "PUPC每年通常在秋季十月到十一月举办，分Online Round和Onsite Round两个阶段。具体时间每年由Physics Unlimited官方公告。国内赛区时间和阿思丹官方同步。",
    events: [
      { date: "每年 9 月", event: "报名开启" },
      { date: "每年 10 月", event: "Online Round" },
      { date: "每年 11 月", event: "Onsite Round" },
      { date: "每年 12 月", event: "成绩公布" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "PUPC 在物理路径中的位置",
    subtitle: "藤校风格物理挑战赛",
    text: "国内高中物理学生路径建议是先以AP Physics 1或2作为基础，参加Physics Bowl作为入门测评，进而冲F等于ma或PUPC作为进阶挑战。PUPC的团队赛部分尤其适合作为申请简历上的协作能力背景。",
    pathway: [
      { stage: "AP Physics", desc: "课程基础" },
      { stage: "Physics Bowl", desc: "入门测评" },
      { stage: "PUPC", desc: "藤校挑战" },
      { stage: "F=ma 或 USAPhO", desc: "国家队方向" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "AP Physics 同步 · 历届真题 · 团队磨合",
    text: "第一步同步AP Physics C或更高级别课程。第二步从Physics Unlimited官网获取近五年PUPC真题。第三步组队三到五人，分工协作训练Online Round题型。第四步限时两小时做Onsite Round模拟。第五步赛前一周完整跑一遍两段赛制。",
    steps: [
      { step: "01", title: "AP Physics C", desc: "课程基础" },
      { step: "02", title: "近五年真题", desc: "PU 官网" },
      { step: "03", title: "组队磨合", desc: "3-5 人" },
      { step: "04", title: "Onsite 模拟", desc: "限时 2 小时" },
      { step: "05", title: "全真模考", desc: "赛前一周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "PUPC 是藤校风格的高中物理挑战赛",
    subtitle: "Princeton 主办 · 创意题型 · 全球开放",
    text: "PUPC是普林斯顿大学物理学生社团和校友共同主办的全球高中物理挑战赛，强调创造性思维和团队协作。对希望积累藤校相关物理背景的高中学生家庭来说，PUPC值得重点关注。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
