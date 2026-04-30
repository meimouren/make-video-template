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
  name: "JPC",
  nameEn: "Junior Physics Challenge",
  nameCn: "BPhO 初级物理挑战",
  participationData: [
    { year: "2018", value: 5 },
    { year: "2020", value: 7 },
    { year: "2021", value: 9 },
    { year: "2022", value: 11 },
    { year: "2023", value: 13 },
    { year: "2024", value: 15 },
    { year: "2026", value: 17 },
  ],
  participationTitle: "JPC 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是BPhO Junior Physics Challenge，初级物理挑战。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "JPC",
    competitionNameEn: "Junior Physics Challenge",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "JPC 是什么？",
    subtitle: "BPhO 体系最入门的初中物理挑战",
    text: "JPC，全称Junior Physics Challenge，中文译为初级物理挑战。是英国物理奥林匹克BPhO体系最入门的层级，由牛津大学BPhO Trust运营，专门面向Year 9即九年级的初中生。是国内学生最早可以接触BPhO体系的入口。",
    openingStats: {
      midLabel: "BPhO 体系",
      midValue: "最入门",
      scaleLabel: "年参赛规模",
      scaleValue: "17K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "牛津背书 · 初中入门 · BPhO 体系起点",
    text: "JPC的稀缺性来自三方面。第一是牛津背书：BPhO Trust旗下最入门级别。第二是初中入门：Year 9学生即可参赛，是国内学生最早可拿BPhO相关证书的赛事。第三是体系起点：JPC是通往IPC、SPC、BPhO Round 1的清晰阶梯起点。",
    stats: [
      { value: "Year 9", label: "初中入门" },
      { value: "Oxford", label: "牛津 BPhO" },
      { value: "IGCSE", label: "课程对标" },
      { value: "选择题", label: "题型友好" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "JPC 核心定位",
    subtitle: "Year 9 · IGCSE 难度 · 入门测评",
    text: "JPC的核心定位是BPhO体系下针对九年级学生的物理入门测评。题目基于IGCSE课程标准，但加入一些日常生活相关的物理常识。覆盖动力学、电学、光学、热学、波动等高中物理基础板块，加少量天文学。",
    highlights: ["BPhO 入门级", "Year 9", "IGCSE 对标", "选择题", "覆盖广"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 BPhO Trust",
    subtitle: "British Physics Olympiad Trust · 牛津运营",
    text: "JPC由British Physics Olympiad Trust运营，与高级BPhO Round 1是同一个母体组织。BPhO Trust成立于一九七九年，旗下囊括从入门到国家队的所有英国物理竞赛。JPC作为体系入门，是体系一以贯之的初中起点。",
    benefits: [
      { icon: "", title: "BPhO Trust", desc: "牛津运营" },
      { icon: "", title: "同体系", desc: "与 BPhO Round 1" },
      { icon: "", title: "47 年传统", desc: "1979 起" },
      { icon: "", title: "全球认可", desc: "牛剑认证" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "选择题 · 一小时 · 学校组织",
    text: "JPC的考试格式简洁友好。题型为多选选择题，限时一小时。考试由学校教师在校内组织监考，时间一般在三月份。由于难度对标IGCSE课程，对在英美澳加学习的国际课程学生来说门槛较低。",
    keyPoints: [
      { label: "题型", value: "多选选择题" },
      { label: "限时", value: "60 分钟" },
      { label: "组织方", value: "学校老师" },
      { label: "考试日", value: "每年 3 月" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "奖项体系",
    subtitle: "金银铜证书 · 牛津官方颁发",
    text: "JPC的奖项体系按全球同年级排名颁发。Top Gold顶级金奖、Gold金奖、Silver银奖、Bronze铜奖、Commendation表扬五个层级。所有获奖证书由BPhO Trust牛津官方发放，是英国课程体系下学生简历上最早可获得的物理学背景。",
    keyPoints: [
      { label: "Top Gold", value: "顶级金奖" },
      { label: "Gold", value: "金奖" },
      { label: "Silver", value: "银奖" },
      { label: "Bronze", value: "铜奖" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "Year 9 主体 · 全球开放",
    text: "JPC主要面向英国Year 9即九年级学生，对应国内初二阶段。低于Year 9的学生也可以挑战，但题目难度可能偏高。考试在学校或机构组织的考点进行。国内学生通过阿思丹官方代理在国内赛区参赛。",
    keyPoints: [
      { label: "主要学段", value: "Year 9" },
      { label: "低年级", value: "可挑战" },
      { label: "国内通道", value: "阿思丹承办" },
      { label: "考试形式", value: "学校监考" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "JPC 的申请价值",
    subtitle: "初中物理入门 · BPhO 体系起点",
    text: "对中国家长而言，JPC的价值在三方面。第一是初中入门：是初二阶段就能参加的国际物理竞赛，时间窗口提前。第二是体系起点：从JPC到IPC再到BPhO Round 1是清晰的英国物理竞赛阶梯，连续参赛形成完整背景。第三是英国方向加分：在英国寄宿初中和G5物理工程申请中是有效背景。",
    benefits: [
      { icon: "", title: "初中起步", desc: "Year 9 可参赛" },
      { icon: "", title: "体系起点", desc: "BPhO 入门" },
      { icon: "", title: "英国方向", desc: "牛剑认可" },
      { icon: "", title: "课程同步", desc: "IGCSE 一致" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "JPC vs IPC",
    subtitle: "BPhO 体系初级对比中级",
    text: "JPC和IPC是BPhO体系中相邻的两个级别。JPC全称Junior Physics Challenge，面向Year 9；IPC全称Intermediate Physics Challenge，面向Year 10。难度循序渐进，国内学生可以连续两年参加，逐步进入BPhO体系核心赛事Round 1。",
    comparison: [
      { aspect: "学段", left: "Year 9", right: "Year 10" },
      { aspect: "中文对应", left: "初二", right: "初三" },
      { aspect: "课程", left: "IGCSE 入门", right: "IGCSE 进阶" },
      { aspect: "难度", left: "入门", right: "中阶" },
      { aspect: "下一站", left: "IPC", right: "SPC" },
    ],
    leftLabel: "JPC",
    rightLabel: "IPC",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 JPC 赛程",
    subtitle: "通常每年 3 月举办",
    text: "JPC每年通常在三月份举办。具体日期由BPhO Trust官方在前一年年底公告。学校或机构提前一两个月报名，考试日各地学校自行选择监考时间。国内赛区时间和阿思丹官方同步。",
    events: [
      { date: "前一年 12 月", event: "次年时间公告" },
      { date: "每年 1-2 月", event: "报名通道开启" },
      { date: "每年 3 月", event: "JPC 考试日" },
      { date: "每年 5 月", event: "成绩公布" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "JPC 在物理路径中的位置",
    subtitle: "BPhO 体系最入门的起点",
    text: "国内学生进入英国物理竞赛体系建议是初二Year 9阶段从JPC入门，初三Year 10进入IPC，高一Year 11参加SPC，高二高三Year 12-13冲BPhO Round 1获取金奖证书，最终竞争IPhO国家队。整套路径稳定连贯。",
    pathway: [
      { stage: "JPC Year 9", desc: "BPhO 入门" },
      { stage: "IPC Year 10", desc: "中阶" },
      { stage: "SPC Year 11", desc: "进阶" },
      { stage: "BPhO Round 1", desc: "Year 12-13 核心" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "IGCSE 同步 · 历届真题 · 选择题速度",
    text: "第一步同步IGCSE Physics基础课程。第二步从BPhO官网获取近五年JPC真题。第三步每周限时一小时做一套真题。第四步重点训练光学、电学、波动板块，是初中阶段较容易失分的板块。第五步赛前一周保持速度训练。",
    steps: [
      { step: "01", title: "IGCSE 同步", desc: "Physics 课程" },
      { step: "02", title: "近五年真题", desc: "BPhO 官网" },
      { step: "03", title: "限时套题", desc: "每周一套" },
      { step: "04", title: "失分板块", desc: "光电波动" },
      { step: "05", title: "速度训练", desc: "考前一周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "JPC 是 BPhO 体系最入门的初中物理挑战",
    subtitle: "Year 9 · IGCSE 友好 · 牛津官方",
    text: "JPC是英国BPhO体系最入门的初中物理挑战赛，由牛津大学BPhO Trust官方运营。对家有初二阶段、计划走英国留学方向的物理学生家庭来说，JPC是开启BPhO竞赛体系的最早起点。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
