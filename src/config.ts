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
  name: "Isaac Physics",
  nameEn: "Isaac Physics SPC",
  nameCn: "剑桥 Isaac 物理马拉松",
  participationData: [
    { year: "2018", value: 30 },
    { year: "2020", value: 35 },
    { year: "2021", value: 40 },
    { year: "2022", value: 42 },
    { year: "2023", value: 45 },
    { year: "2024", value: 48 },
    { year: "2026", value: 50 },
  ],
  participationTitle: "Isaac Physics 历年用户规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是Isaac Physics，剑桥物理马拉松。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "Isaac",
    competitionNameEn: "Isaac Physics SPC",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "Isaac Physics 是什么？",
    subtitle: "剑桥大学卡文迪许实验室物理学习平台",
    text: "Isaac Physics是英国剑桥大学卡文迪许实验室Cavendish Laboratory主办的物理学习与竞赛平台，由英国教育部资助。面向十六到十九岁的高中物理学生，平台累计服务超过五万名学生、四千多所学校。Senior Physics Challenge是平台旗舰选拔活动。",
    openingStats: {
      midLabel: "举办方",
      midValue: "剑桥 Cavendish",
      scaleLabel: "全球用户",
      scaleValue: "50K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "剑桥背书 · 长期积累机制 · SPC 营地",
    text: "Isaac Physics的稀缺性来自三方面。第一是剑桥背书：卡文迪许实验室是物理学历史最悠久的实验室之一。第二是长期积累机制：在平台上长时间解题积分，形成持续输出的学术轨迹。第三是Senior Physics Challenge：年度剑桥校园营地是顶尖物理学生的集中体验。",
    stats: [
      { value: "Cambridge", label: "剑桥主办" },
      { value: "免费", label: "平台开放" },
      { value: "16-19", label: "目标年龄" },
      { value: "SPC", label: "年度选拔" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "Isaac Physics 核心定位",
    subtitle: "免费物理学习 + 选拔型营地",
    text: "Isaac Physics的核心定位是双轨制：日常是免费物理学习平台，提供海量题目和指导；年度是Senior Physics Challenge选拔型营地，从平台最活跃的解题用户中选拔参加剑桥校园集训。是英国物理教育的国家级公益项目。",
    highlights: ["剑桥免费平台", "海量物理题", "年度营地", "16-19 岁", "国家级项目"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 卡文迪许实验室",
    subtitle: "Cavendish Laboratory · 剑桥大学物理系",
    text: "卡文迪许实验室是剑桥大学物理系主体实验室，自一八七四年成立以来诞生了三十位诺贝尔物理学和化学奖得主，包括麦克斯韦、卢瑟福、汤姆森等历史巨匠。Isaac Physics由实验室运营，承载剑桥物理教育对全英中学生的学术推广使命。",
    benefits: [
      { icon: "", title: "Cavendish", desc: "百年实验室" },
      { icon: "", title: "30 诺奖", desc: "校友传统" },
      { icon: "", title: "教育部资助", desc: "国家级项目" },
      { icon: "", title: "免费开放", desc: "全球访问" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "平台累计积分 + 选拔测试 + 剑桥营地",
    text: "Isaac Physics的赛制由两阶段组成。第一阶段是平台日常积分，学生在isaacphysics.org上完成大量物理题，按完成数量和难度积分。第二阶段是年度选拔，平台最活跃用户在四月份做线上测试加提交手写解题过程。被选中的学生受邀参加在剑桥校园举行的Senior Physics Challenge营地。",
    keyPoints: [
      { label: "第一阶段", value: "平台积分" },
      { label: "第二阶段", value: "线上测试加手写" },
      { label: "选拔时间", value: "每年 4 月" },
      { label: "终极活动", value: "剑桥营地" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "选拔标准",
    subtitle: "做题数量 · 难度梯度 · 笔试质量",
    text: "Isaac Physics的选拔综合考察三方面。第一是做题数量：在平台上完成的题目总数；第二是难度梯度：完成更多高难度题目权重更高；第三是笔试质量：四月线上测试和手写解题过程的清晰度。被选中学生收到Senior Physics Challenge入营邀请。",
    keyPoints: [
      { label: "题量", value: "累计完成数" },
      { label: "难度", value: "高难加权" },
      { label: "笔试", value: "线上加手写" },
      { label: "邀请", value: "营地通知" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "16-19 岁全球开放 · 平台免费注册",
    text: "Isaac Physics平台对全球十六到十九岁学生免费开放，注册即用，没有报名费或材料门槛。Senior Physics Challenge营地选拔同样对所有平台活跃用户开放。国内学生可以通过平台账号正常参与。",
    keyPoints: [
      { label: "目标年龄", value: "16-19 岁" },
      { label: "国籍", value: "全球开放" },
      { label: "平台费用", value: "免费" },
      { label: "营地形式", value: "剑桥线下" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "Isaac Physics 的申请价值",
    subtitle: "剑桥背书 · 长期学习轨迹 · 校园体验",
    text: "对中国家长而言，Isaac Physics的价值在三方面。第一是剑桥品牌背书：平台账号和SPC邀请直接关联剑桥物理系。第二是长期学习轨迹：在平台上的累计积分体现持续的物理学习投入。第三是校园体验：Senior Physics Challenge营地直接进入剑桥校园上课、互动，是申请剑桥物理工程的真实学术经历。",
    benefits: [
      { icon: "", title: "剑桥背书", desc: "Cavendish 关联" },
      { icon: "", title: "长期学习", desc: "持续轨迹" },
      { icon: "", title: "校园体验", desc: "剑桥营地" },
      { icon: "", title: "免费门槛", desc: "国内可参与" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "Isaac Physics vs BPhO Round 1",
    subtitle: "平台马拉松 vs 单场考试",
    text: "Isaac Physics和BPhO Round 1是英国物理学习路径上互补的两个赛道。Isaac Physics是长期平台积分加营地选拔；BPhO Round 1是单次高强度笔试。Isaac考察持续学习能力；BPhO考察临场解题能力。两者并行参与最佳。",
    comparison: [
      { aspect: "形式", left: "平台马拉松", right: "单次笔试" },
      { aspect: "时长", left: "全年累计", right: "2 小时 45 分" },
      { aspect: "考察", left: "持续学习", right: "临场解题" },
      { aspect: "终点", left: "剑桥营地", right: "金奖证书" },
      { aspect: "国家队", left: "无", right: "IPhO 通道" },
    ],
    leftLabel: "Isaac Physics",
    rightLabel: "BPhO Round 1",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "Isaac Physics 年度节奏",
    subtitle: "全年平台 · 4 月选拔 · 暑期营地",
    text: "Isaac Physics的节奏是全年平台累计积分。每年四月份开放Senior Physics Challenge选拔通道，需要在线提交线上测试加手写解题。被选中学生收到剑桥营地入营邀请。营地通常在七月暑期举行，为期数天。",
    events: [
      { date: "全年", event: "平台积分累计" },
      { date: "每年 4 月", event: "SPC 选拔申请" },
      { date: "每年 5 月", event: "营地名单公布" },
      { date: "每年 7 月", event: "剑桥校园营地" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "Isaac Physics 在物理路径中的位置",
    subtitle: "英国物理体系长期积累通道",
    text: "在英国物理竞赛体系中，Isaac Physics是日常学习平台、BPhO Round 1是高强度选拔考试、IPhO是国际终点。三者互补：Isaac积累、BPhO检验、IPhO终点。国内学生可以同时使用Isaac平台学习+参加BPhO考试，形成完整路径。",
    pathway: [
      { stage: "Isaac 平台日常", desc: "全年积累" },
      { stage: "BPhO Round 1", desc: "牛津选拔" },
      { stage: "BAAO 或 IOAA", desc: "天体方向" },
      { stage: "IPhO 国际奥赛", desc: "终极目标" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "平台日常 · 难度梯度 · 笔试准备",
    text: "第一步注册isaacphysics.org账号，开始日常做题。第二步制定每周计划，平均每周完成五到十道题。第三步主动挑战高难度题目，难题完成度对选拔权重高。第四步保留手写解题过程，四月份提交时使用。第五步关注Isaac平台公告，及时申请Senior Physics Challenge。",
    steps: [
      { step: "01", title: "平台注册", desc: "isaacphysics.org" },
      { step: "02", title: "每周计划", desc: "5-10 道题" },
      { step: "03", title: "高难挑战", desc: "权重加分" },
      { step: "04", title: "手写存档", desc: "笔试备用" },
      { step: "05", title: "关注公告", desc: "及时申请" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "Isaac Physics 是剑桥的物理长期积累平台",
    subtitle: "Cavendish 主办 · 免费开放 · 营地选拔",
    text: "Isaac Physics是剑桥大学卡文迪许实验室主办的物理学习平台和Senior Physics Challenge选拔营地，免费向全球十六到十九岁学生开放。对计划走英国物理工程方向、希望积累长期物理学习轨迹的学生家庭来说，Isaac Physics是值得长期投入的国际平台。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
