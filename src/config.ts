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
  name: "BPhO",
  nameEn: "British Physics Olympiad",
  nameCn: "英国物理奥林匹克",
  participationData: [
    { year: "2018", value: 8 },
    { year: "2020", value: 10 },
    { year: "2021", value: 12 },
    { year: "2022", value: 14 },
    { year: "2023", value: 16 },
    { year: "2024", value: 18 },
    { year: "2026", value: 20 },
  ],
  participationTitle: "BPhO 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是BPhO，英国物理奥林匹克。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "BPhO",
    competitionNameEn: "British Physics Olympiad",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "BPhO 是什么？",
    subtitle: "牛津大学主办的英国物理顶级赛事",
    text: "BPhO，全称British Physics Olympiad，中文译为英国物理奥林匹克，是英国最权威的高中物理竞赛体系。由牛津大学物理系运营，旗下涵盖从初级Junior Physics Challenge到Round 1再到BAAO天体物理奥赛多个层级，是英国通往IPhO国际物理奥赛的官方通道。",
    openingStats: {
      midLabel: "举办方",
      midValue: "牛津大学",
      scaleLabel: "年参赛规模",
      scaleValue: "20K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "牛剑申请加分 · 英国物理国家队入口",
    text: "BPhO是冲刺牛津剑桥物理工程专业的核心加分项。作为英国本土最权威的高中物理赛事，它在英国和G5大学申请中的认可度极高。同时它是IPhO英国国家队的选拔通道，含金量在国际物理竞赛中名列前茅。",
    stats: [
      { value: "Oxford", label: "牛津大学主办" },
      { value: "G5", label: "牛剑英国大学认可" },
      { value: "IPhO", label: "国家队入口" },
      { value: "多层级", label: "Junior 到 Olympiad" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "BPhO 核心定位",
    subtitle: "高中物理 · 多层级体系 · 牛剑申请",
    text: "BPhO的核心定位是英国权威的高中物理竞赛体系。题目难度分层细致，覆盖Year 9到Year 13全学段。命题强调物理思维深度和解题创造性，与牛剑物理面试和入学考试逻辑高度同步。",
    highlights: ["牛津主办", "多层级", "Year 9-13", "高难度", "牛剑同步"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 牛津大学物理系",
    subtitle: "British Physics Olympiad Trust",
    text: "BPhO由牛津大学物理系成立的British Physics Olympiad Trust运营，是英国唯一被国际物理奥赛认证的国家队选拔机构。除了BPhO本身，Trust还运营BAAO天体物理奥赛和与剑桥合作的Senior Physics Challenge。",
    benefits: [
      { icon: "", title: "牛津物理系", desc: "Oxford 学术运营" },
      { icon: "", title: "BPhO Trust", desc: "非营利信托" },
      { icon: "", title: "BAAO 同体系", desc: "天体物理分支" },
      { icon: "", title: "IPhO 选拔", desc: "英国国家队" },
    ],
  },

  {
    id: "levels",
    type: "key-points",
    title: "竞赛层级",
    subtitle: "Junior · Intermediate · Senior · Round 1 · BAAO",
    text: "BPhO体系按学段分多个层级。Junior Physics Challenge面向Year 9学生入门；Intermediate Physics Challenge面向Year 10；Senior Physics Challenge面向Year 11；BPhO Round 1是核心Olympiad考试面向Year 12和13；BAAO天体物理面向Year 12和13。",
    keyPoints: [
      { label: "JPC", value: "Year 9 入门" },
      { label: "IPC", value: "Year 10 中阶" },
      { label: "SPC", value: "Year 11 进阶" },
      { label: "Round 1", value: "Year 12-13 Olympiad" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "Round 1 比赛格式",
    subtitle: "Section A 短题 + Section B 主题长题",
    text: "BPhO Round 1的考试格式是两段制。Section A是短答题集合，限时一小时二十分钟；Section B是主题长题选答，限时一小时二十分钟加五分钟阅读。两段可以分别在不同时间作答。题目深度大，强调物理直觉。",
    keyPoints: [
      { label: "Section A", value: "1 小时 20 分" },
      { label: "Section B", value: "1 小时 25 分" },
      { label: "总时长", value: "2 小时 45 分" },
      { label: "题型", value: "短答加长答" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "奖项体系",
    subtitle: "金银铜证书 · 牛剑面邀关联",
    text: "BPhO Round 1的奖项分Top Gold、Gold、Silver、Bronze一二三个层级。获得Gold以上奖项是申请牛剑物理工程专业的硬性参考。Top Gold获得者还可能受邀参加BPhO选拔训练营，进一步竞争IPhO英国国家队席位。",
    keyPoints: [
      { label: "Top Gold", value: "顶级金奖" },
      { label: "Gold", value: "金奖证书" },
      { label: "Silver", value: "银奖证书" },
      { label: "Bronze", value: "铜奖证书" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "全球开放 · 阿思丹中国赛区",
    text: "BPhO对全球高中生开放，国内学生通过阿思丹官方在国内赛区报名参赛。考试通常在学校或机构组织的考点进行，由教师监考。国内赛区分布于主要城市，覆盖广泛。",
    keyPoints: [
      { label: "学段", value: "Year 9-13" },
      { label: "国籍", value: "全球开放" },
      { label: "国内通道", value: "阿思丹承办" },
      { label: "考试形式", value: "线下监考" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "BPhO 的申请价值",
    subtitle: "牛剑物理工程 · G5 申请硬背景",
    text: "对中国家长而言，BPhO的价值体现在三方面。第一是英国方向：BPhO金奖在英国G5大学物理工程专业申请中是最硬的物理学背景。第二是路径价值：通往BPhO Round 2和最终IPhO的国家队选拔。第三是与英国课程的高度同步，A-Level和IB物理学生可以无缝过渡。",
    benefits: [
      { icon: "", title: "牛剑申请", desc: "G5 硬背景" },
      { icon: "", title: "IPhO 通道", desc: "英国国家队" },
      { icon: "", title: "课程同步", desc: "A-Level IB" },
      { icon: "", title: "国际权威", desc: "牛津官方" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "BPhO vs F=ma",
    subtitle: "英美两大高中物理体系对比",
    text: "BPhO和F等于ma是英美两大高中物理竞赛体系的代表。BPhO题型多样（短答加长答），覆盖物理全板块；F等于ma只考代数力学。BPhO面向Year 9到13多层级；F等于ma只面向高中。两者通常分别对应英美申请方向。",
    comparison: [
      { aspect: "主办方", left: "牛津大学", right: "AAPT 美国" },
      { aspect: "覆盖", left: "Year 9-13", right: "高中" },
      { aspect: "题型", left: "短答加长答", right: "选择题" },
      { aspect: "覆盖板块", left: "物理全板块", right: "力学专项" },
      { aspect: "申请方向", left: "英国 G5", right: "美国顶尖理工" },
    ],
    leftLabel: "BPhO",
    rightLabel: "F=ma",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 BPhO 赛程",
    subtitle: "通常 11 月 Round 1",
    text: "BPhO的赛季每年从九月开始。Junior Physics Challenge通常三月举办；Intermediate Physics Challenge通常二月举办；Senior Physics Challenge通常二月举办；BPhO Round 1通常十一月举办；BAAO Round 1十二月、Round 2次年一月。",
    events: [
      { date: "每年 9 月", event: "新赛季报名开启" },
      { date: "每年 11 月", event: "BPhO Round 1" },
      { date: "每年 12 月", event: "BAAO Round 1" },
      { date: "次年 1-3 月", event: "其他级别考试" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "BPhO 在物理路径中的位置",
    subtitle: "英国物理竞赛晋级阶梯",
    text: "国内学生进入BPhO体系建议是从Year 9起从Junior Physics Challenge入门，Year 10进Intermediate，Year 11进Senior Physics Challenge打底，Year 12和13冲BPhO Round 1获取金奖证书，最终竞争IPhO国家队席位。也可以并行参加BAAO天体物理。",
    pathway: [
      { stage: "JPC Year 9", desc: "入门启蒙" },
      { stage: "IPC + SPC", desc: "Year 10-11 进阶" },
      { stage: "BPhO Round 1", desc: "Year 12-13 核心" },
      { stage: "Round 2 加 IPhO", desc: "国家队选拔" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "近十年真题 · 长题训练 · 物理直觉",
    text: "第一步从BPhO官网下载近十年真题。第二步同步A-Level或IB物理课程进度。第三步每周限时做一套Section A短答题。第四步重点训练Section B长题，培养完整推导能力。第五步赛前一个月做完整两段制全真模考。",
    steps: [
      { step: "01", title: "近十年真题", desc: "BPhO 官方" },
      { step: "02", title: "A-Level 同步", desc: "或 IB 物理" },
      { step: "03", title: "短答专项", desc: "Section A" },
      { step: "04", title: "长题专项", desc: "Section B" },
      { step: "05", title: "全真模考", desc: "赛前一月" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "BPhO 是英国物理竞赛体系的核心",
    subtitle: "牛津主办 · G5 认可 · IPhO 通道",
    text: "BPhO是英国权威的高中物理竞赛体系，由牛津大学主办，在牛剑等英国G5大学申请中获得高度认可。对走英国留学方向的物理学生家庭来说，BPhO是必选项。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
