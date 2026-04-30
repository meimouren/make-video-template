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
  name: "Physics Bowl",
  nameEn: "PhysicsBowl",
  nameCn: "物理碗",
  participationData: [
    { year: "2018", value: 8 },
    { year: "2019", value: 9 },
    { year: "2021", value: 9 },
    { year: "2022", value: 10 },
    { year: "2023", value: 10 },
    { year: "2024", value: 10 },
    { year: "2026", value: 10 },
  ],
  participationTitle: "Physics Bowl 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是Physics Bowl，物理碗。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "PhysicsBowl",
    competitionNameEn: "PhysicsBowl",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "Physics Bowl 是什么？",
    subtitle: "AAPT 主办的高中物理测评赛",
    text: "Physics Bowl，中文译名物理碗，是由美国物理教师协会AAPT主办的全球高中物理竞赛。一九八三年作为评估工具创立，一九八五年开始全国正式举办，一九九零年正式更名Physics Bowl，至今每年吸引约一万名学生参赛。",
    openingStats: {
      midLabel: "1985 年开赛至今",
      midValue: "41 年",
      scaleLabel: "年参赛规模",
      scaleValue: "10K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "AP 物理过渡赛 · 申请理工科强信号",
    text: "Physics Bowl是中国家长非常熟悉的高中物理入门竞赛。它衔接AP Physics课程体系，是冲刺F等于ma和USAPhO的过渡训练台，也是申请美国理工科专业的可量化物理学背景。",
    stats: [
      { value: "AAPT", label: "美国物理教师协会主办" },
      { value: "40", label: "题 / 单场" },
      { value: "45", label: "分钟限时" },
      { value: "10K+", label: "年参赛规模" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "Physics Bowl 核心定位",
    subtitle: "高中物理 · 个人加团队赛",
    text: "Physics Bowl的核心定位是高中物理标准化测评赛。题目覆盖力学、电磁学、热学、光学、近代物理等高中物理全板块，难度对标美国 AP Physics 课程。比赛分两个组别，分别面向第一年和第二年物理学习者。",
    highlights: ["AAPT 主办", "高中物理", "选择题", "两个组别", "团队加个人"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 美国物理教师协会",
    subtitle: "American Association of Physics Teachers",
    text: "AAPT全称American Association of Physics Teachers，美国物理教师协会，是美国最具权威性的物理教育组织之一。Physics Bowl是AAPT旗下面向中学生的核心赛事，每年由全球十四个赛区分别承办。",
    benefits: [
      { icon: "", title: "AAPT", desc: "美国物理教师协会" },
      { icon: "", title: "1985", desc: "全国开赛元年" },
      { icon: "", title: "14 赛区", desc: "全球分区承办" },
      { icon: "", title: "AP 协同", desc: "对标 AP Physics" },
    ],
  },

  {
    id: "divisions",
    type: "key-points",
    title: "两个组别",
    subtitle: "Division 1 · Division 2",
    text: "Physics Bowl分两个组别。Division 1面向第一年学习物理的学生，对应AP Physics 1或国内高一物理水平；Division 2面向第二年及以上的物理学习者，对应AP Physics 2、AP Physics C或更高难度。两个组别题目部分共享。",
    keyPoints: [
      { label: "Division 1", value: "第一年物理" },
      { label: "Division 2", value: "第二年及以上" },
      { label: "对标 AP", value: "Physics 1 / 2 / C" },
      { label: "题目重叠", value: "共享 30 题" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "40 题 · 45 分钟 · 选择题",
    text: "Physics Bowl的考试格式非常标准。整套试卷一共五十道题，Division 1做第一到第四十题，Division 2做第十一到第五十题。选择题，每题四十五秒平均时长，限时四十五分钟。每题答对得一分，答错不倒扣。",
    keyPoints: [
      { label: "试卷总题数", value: "50 题" },
      { label: "单 Division", value: "做 40 题" },
      { label: "限时", value: "45 分钟" },
      { label: "题型", value: "四选一" },
      { label: "倒扣", value: "无" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "评分与奖项",
    subtitle: "个人前十 · 团队前五汇总",
    text: "Physics Bowl的评分按个人和团队两条线。个人方面：每个Division评出全球前十名；团队方面：每所学校的前五名分数累加为团队成绩。此外每个赛区评出第一第二名团队，颁发地区荣誉。",
    keyPoints: [
      { label: "个人荣誉", value: "全球前 10 名" },
      { label: "团队成绩", value: "校内前 5 累加" },
      { label: "赛区奖项", value: "区域第一第二" },
      { label: "学校认证", value: "AAPT 国际认可" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "高中阶段 · 全球开放",
    text: "Physics Bowl对全球高中阶段学生开放，国内学生可以通过国际赛区或代理机构报名参加。报名以学校或培训机构为单位组队，每个团队由教师指导。报名通过AAPT官网完成，截止日期通常在二月中下旬。",
    keyPoints: [
      { label: "学段", value: "高中" },
      { label: "国籍", value: "全球开放" },
      { label: "组织形式", value: "学校或机构组队" },
      { label: "国内通道", value: "代理赛区报名" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "Physics Bowl 的申请价值",
    subtitle: "理工科申请 · AP Physics 同步",
    text: "对中国家长而言，Physics Bowl的价值首先在它和AP Physics课程的高度同步：物理碗成绩可以作为AP学习成果的客观验证。其次是申请价值：在美国理工科顶尖项目申请中，Physics Bowl成绩是物理能力的可量化证据。第三是路径价值：是通往F等于ma和USAPhO的常见过渡赛。",
    benefits: [
      { icon: "", title: "AP 同步", desc: "对标 AP Physics" },
      { icon: "", title: "申请加分", desc: "理工科背景" },
      { icon: "", title: "晋级跳板", desc: "F=ma 过渡赛" },
      { icon: "", title: "国际认可", desc: "AAPT 权威" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "Physics Bowl vs F=ma",
    subtitle: "两大美国高中物理竞赛对比",
    text: "Physics Bowl和F等于ma是国内家长经常被放在一起比较的两个高中物理赛事。Physics Bowl更偏标准化测评，门槛低、覆盖面广；F等于ma是USAPhO的选拔赛，难度明显更高、面向顶尖物理选手。两者通常分阶段参加。",
    comparison: [
      { aspect: "难度等级", left: "中等", right: "高难" },
      { aspect: "题型", left: "选择题", right: "选择加自由响应" },
      { aspect: "题量", left: "40 题", right: "25 题" },
      { aspect: "限时", left: "45 分钟", right: "75 分钟" },
      { aspect: "晋级路径", left: "无晋级", right: "晋级 USAPhO" },
    ],
    leftLabel: "Physics Bowl",
    rightLabel: "F=ma",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 Physics Bowl 赛程",
    subtitle: "2025-2026 赛季时间表",
    text: "Physics Bowl的二零二六赛季时间表已公布。报名截止二月二十五日，考试窗口三月十八日到四月三日，全球各赛区在窗口期内任选一日组织考试。AAPT官方在五月公布全球榜单。",
    events: [
      { date: "2026 年 2 月 25 日", event: "报名截止" },
      { date: "2026 年 3 月 18 日", event: "考试窗口开启" },
      { date: "2026 年 4 月 3 日", event: "考试窗口收尾" },
      { date: "2026 年 5 月", event: "全球榜单公布" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "Physics Bowl 在竞赛路径中的位置",
    subtitle: "高中物理竞赛起步路径",
    text: "国内高中学生建议先完成AP Physics 1的学习，参加Physics Bowl Division 1作为入门测评，第二年AP Physics 2或C阶段进入Division 2，同步冲刺F等于ma的选拔，进而向USAPhO甚至IPhO国际物理奥赛迈进。",
    pathway: [
      { stage: "AP Physics 1", desc: "课程铺垫" },
      { stage: "Physics Bowl D1", desc: "第一年测评" },
      { stage: "Physics Bowl D2 + F=ma", desc: "第二年进阶" },
      { stage: "USAPhO · IPhO", desc: "国家及国际赛" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "AP 同步 · 真题刷套 · 速度训练",
    text: "第一步同步学习AP Physics 1或2作为基础。第二步在AAPT官网或代理机构获取近五年Physics Bowl真题。第三步每周限时四十五分钟做一套完整真题。第四步重点刷电磁学和近代物理板块，是失分大户。第五步赛前一周做完整模考，按区分错误类型。",
    steps: [
      { step: "01", title: "AP 同步", desc: "Physics 1 或 2" },
      { step: "02", title: "近五年真题", desc: "AAPT 官方" },
      { step: "03", title: "限时套题", desc: "每周一套" },
      { step: "04", title: "弱项专项", desc: "电磁加近代" },
      { step: "05", title: "全真模考", desc: "赛前一周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "Physics Bowl 是高中物理路径的常见起点",
    subtitle: "AAPT 主办 · AP 同步 · 全球认可",
    text: "Physics Bowl是美国物理教师协会主办的高中物理测评赛，运营已超过四十年，是国内学生进入高中物理竞赛体系的常见起点。想给孩子规划理工科申请路径的家长，可以重点关注。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
