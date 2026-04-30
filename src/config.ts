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
  name: "F=ma",
  nameEn: "F=ma Contest",
  nameCn: "美国物理 F=ma 选拔赛",
  participationData: [
    { year: "2018", value: 5 },
    { year: "2020", value: 5 },
    { year: "2021", value: 5 },
    { year: "2022", value: 6 },
    { year: "2023", value: 6 },
    { year: "2024", value: 6 },
    { year: "2026", value: 6 },
  ],
  participationTitle: "F=ma 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是F=ma，美国物理选拔赛。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "F=ma",
    competitionNameEn: "F=ma Contest",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "F=ma 是什么？",
    subtitle: "USAPhO 选拔赛 · 美国物理奥赛入口",
    text: "F等于ma，是美国物理奥林匹克USAPhO的初选考试，也是通往美国物理国家队的第一道门槛。由美国物理教师协会AAPT和美国物理学会AIP联合主办，每年约六千名顶尖学生参加，前四百名晋级USAPhO半决赛。",
    openingStats: {
      midLabel: "晋级 USAPhO",
      midValue: "前 400 名",
      scaleLabel: "年参赛规模",
      scaleValue: "6K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "美国物理国家队选拔通道",
    text: "F等于ma是国内学生进入美国物理国家队的标志性赛事。它是USAPhO的初选，USAPhO又是IPhO国际物理奥赛美国国家队的选拔赛。F等于ma的成绩在顶尖大学物理和工程专业申请中是非常硬的物理学背景。",
    stats: [
      { value: "AAPT", label: "美国物理教师协会主办" },
      { value: "25", label: "题 / 单场" },
      { value: "75", label: "分钟限时" },
      { value: "400", label: "晋级名额" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "F=ma 核心定位",
    subtitle: "高中物理 · 力学专项 · 选拔赛",
    text: "F等于ma的核心定位是基于代数的力学高难度选拔赛。所有题目集中在牛顿力学板块，包括运动学、动力学、能量、动量、转动、振动等核心力学知识点。难度对标AP Physics 1甚至更高，是物理竞赛体系中最严肃的入门门槛之一。",
    highlights: ["AAPT 主办", "代数力学", "选择题", "USAPhO 入口", "高难度"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 AAPT 与 AIP",
    subtitle: "美国物理教师协会 + 美国物理学会",
    text: "F等于ma由两家美国物理学界顶级机构联合主办。AAPT是American Association of Physics Teachers，美国物理教师协会。AIP是American Institute of Physics，美国物理学会。美国物理国家队Project U.S. Physics Team自一九八六年开始运作，F等于ma是其选拔体系的入门考试。",
    benefits: [
      { icon: "", title: "AAPT", desc: "物理教师协会" },
      { icon: "", title: "AIP", desc: "物理学会" },
      { icon: "", title: "1986", desc: "国家队元年" },
      { icon: "", title: "IPhO 通道", desc: "国际奥赛入口" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "25 题 · 75 分钟 · 多选题",
    text: "F等于ma的考试格式经多年迭代后稳定。整套试卷二十五道选择题，限时七十五分钟，平均每题三分钟。题目均为多选题中的单选形式，答错不倒扣。从二零一五年起取消倒扣机制，鼓励学生大胆作答。",
    keyPoints: [
      { label: "题目数量", value: "25 题" },
      { label: "限时", value: "75 分钟" },
      { label: "题型", value: "多选单选" },
      { label: "倒扣", value: "无" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "晋级机制",
    subtitle: "前 400 名晋级 USAPhO",
    text: "F等于ma的核心机制是晋级制。每年得分前四百名学生晋级USAPhO美国物理奥赛半决赛。USAPhO中的前二十名进入美国物理国家队夏令营。夏令营中再选出五人代表美国队出征IPhO国际物理奥赛。F等于ma是这条路径的入口。",
    keyPoints: [
      { label: "晋级人数", value: "前 400 名" },
      { label: "晋级目标", value: "USAPhO 半决赛" },
      { label: "国家队人数", value: "20 人夏令营" },
      { label: "IPhO 队员", value: "5 人代表" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "美国身份或在美国就读 · 二零二六全程线上",
    text: "F等于ma的参赛资格相对严格。学生必须是美国公民、绿卡持有者或目前正在美国学校就读的国际学生。从二零二六年开始，F等于ma和USAPhO全部改为线上考试，通过Educational Vistas平台进行，不再发放纸质试卷。",
    keyPoints: [
      { label: "身份要求", value: "美国身份或在美就读" },
      { label: "考试形式", value: "2026 起线上" },
      { label: "考试平台", value: "Educational Vistas" },
      { label: "学段", value: "高中" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "F=ma 的申请价值",
    subtitle: "顶尖理工科 · 物理国家队信号",
    text: "对中国家长而言，F等于ma的价值首先在物理学背景含金量：即使没有晋级，参赛和成绩本身就是高水平物理能力的证明。其次是国家队路径：晋级到USAPhO甚至国家队夏令营是申请MIT、Caltech、普林斯顿等顶尖理工大学物理或工程专业的重量级背景。",
    benefits: [
      { icon: "", title: "学术信号", desc: "顶级物理能力" },
      { icon: "", title: "顶尖申请", desc: "MIT Caltech Princeton" },
      { icon: "", title: "USAPhO 通道", desc: "晋级前 400 名" },
      { icon: "", title: "国家队潜力", desc: "IPhO 路径" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "F=ma vs Physics Bowl",
    subtitle: "美国高中两大物理赛对比",
    text: "F等于ma和Physics Bowl是国内家长经常被放在一起比较的两个美国物理赛事。Physics Bowl是入门级测评、覆盖面广、门槛低；F等于ma是高难度选拔、晋级USAPhO、面向顶尖物理选手。两者通常分阶段参加，先Physics Bowl打底，再冲F等于ma。",
    comparison: [
      { aspect: "难度等级", left: "高难选拔", right: "中等测评" },
      { aspect: "题型", left: "代数力学专项", right: "高中物理全板块" },
      { aspect: "题量", left: "25 题", right: "40 题" },
      { aspect: "限时", left: "75 分钟", right: "45 分钟" },
      { aspect: "晋级路径", left: "USAPhO IPhO", right: "无晋级" },
    ],
    leftLabel: "F=ma",
    rightLabel: "Physics Bowl",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 F=ma 赛程",
    subtitle: "通常每年 2 月初考试",
    text: "F等于ma每年通常在二月初举办考试。二零二六年的考试日已经举办完毕，时间是二月十二日，下午一点到四点东部时间。下届二零二七年预计同样在二月初进行，报名通道由AAPT在每年一月开放。",
    events: [
      { date: "2026 年 2 月 12 日", event: "上届考试日（已结束）" },
      { date: "2027 年 1 月预计", event: "下届报名开启" },
      { date: "2027 年 2 月初预计", event: "下届考试日" },
      { date: "2027 年 4 月", event: "USAPhO 半决赛" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "F=ma 在物理路径中的位置",
    subtitle: "美国物理竞赛晋级阶梯",
    text: "国内物理竞赛路径建议是先完成AP Physics课程基础，参加Physics Bowl作为入门测评，进而冲F等于ma挑战晋级USAPhO，前四百名进入USAPhO半决赛，前二十名进入美国物理国家队夏令营，最终五人代表美国出征IPhO国际物理奥赛。",
    pathway: [
      { stage: "AP Physics + Physics Bowl", desc: "基础铺垫" },
      { stage: "F=ma 选拔", desc: "前 400 名晋级" },
      { stage: "USAPhO 半决赛", desc: "前 20 进国家队" },
      { stage: "IPhO 国际奥赛", desc: "5 人代表美国" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "近十年真题 · 力学专项 · 速度训练",
    text: "第一步同步AP Physics 1或Physics C的力学板块。第二步从AAPT官网获取近十年F等于ma真题。第三步每周限时七十五分钟做完整一套真题。第四步重点训练能量、动量、转动力学三大板块。第五步冲刺阶段以速度训练为主，平均每题三分钟做完。",
    steps: [
      { step: "01", title: "AP 力学", desc: "Physics 1 或 C" },
      { step: "02", title: "近十年真题", desc: "AAPT 官方" },
      { step: "03", title: "限时套题", desc: "每周一套" },
      { step: "04", title: "三大板块", desc: "能量动量转动" },
      { step: "05", title: "速度训练", desc: "平均 3 分钟一题" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "F=ma 是美国物理国家队的入口考试",
    subtitle: "AAPT 主办 · USAPhO 选拔 · 顶尖理工硬背景",
    text: "F等于ma是美国物理教师协会主办的USAPhO选拔考试，是通往美国物理国家队和IPhO国际物理奥赛的入口。对志在顶尖理工科申请的高中物理学生家庭来说，F等于ma是最值得规划的物理竞赛之一。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
