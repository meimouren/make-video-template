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
  name: "ASOP",
  nameEn: "Australian Science Olympiad - Physics",
  nameCn: "澳大利亚物理奥林匹克",
  participationData: [
    { year: "2018", value: 3 },
    { year: "2020", value: 3 },
    { year: "2021", value: 4 },
    { year: "2022", value: 4 },
    { year: "2023", value: 5 },
    { year: "2024", value: 5 },
    { year: "2026", value: 6 },
  ],
  participationTitle: "ASOP 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是ASOP，澳大利亚物理奥林匹克。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "ASOP",
    competitionNameEn: "Australian Sci Olympiad",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "ASOP 是什么？",
    subtitle: "澳大利亚科学创新机构主办的物理奥赛",
    text: "ASOP，全称Australian Science Olympiad - Physics，中文译为澳大利亚物理奥林匹克。由澳大利亚科学创新机构Australian Science Innovations主办，是澳大利亚通往国际物理奥赛IPhO国家队的官方选拔赛。",
    openingStats: {
      midLabel: "举办方",
      midValue: "ASI",
      scaleLabel: "年参赛规模",
      scaleValue: "6K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "澳洲国家队入口 · APhO 亚太物理奥赛",
    text: "ASOP的稀缺性来自三方面。第一是澳洲方向：是澳大利亚IPhO国家队选拔的官方入口。第二是APhO通道：澳洲八人代表参加亚洲物理奥林匹克。第三是澳洲八大认可：澳洲八大名校理工科申请认可ASOP成绩。",
    stats: [
      { value: "ASI", label: "澳大利亚主办" },
      { value: "8 人", label: "APhO 代表" },
      { value: "120", label: "分钟限时" },
      { value: "5 月", label: "考试日" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "ASOP 核心定位",
    subtitle: "澳洲高中 · 物理国家队选拔",
    text: "ASOP的核心定位是澳大利亚高中阶段最权威的物理选拔赛。考试由学校组织，限时两小时，覆盖物理全板块。表现优异者受邀参加澳大利亚国立大学ANU的暑期训练营，再经选拔代表澳洲出征APhO亚太物理奥赛和IPhO国际物理奥赛。",
    highlights: ["ASI 主办", "高中物理", "ANU 训练营", "APhO 通道", "IPhO 入口"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 Australian Science Innovations",
    subtitle: "ASI · 澳大利亚国家级科学奥林匹克项目",
    text: "ASI全称Australian Science Innovations，是澳大利亚专门组织科学奥林匹克项目的国家级机构。除了物理ASOP，ASI同样运营化学、生物、地球与环境四个学科的奥林匹克。澳大利亚国家队的所有科学奥赛选拔由ASI统一管理。",
    benefits: [
      { icon: "", title: "ASI 主办", desc: "澳洲国家级机构" },
      { icon: "", title: "四学科", desc: "物化生地" },
      { icon: "", title: "ANU 营地", desc: "国立大学训练" },
      { icon: "", title: "国家代表", desc: "APhO IPhO" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "纸笔考试 · 120 分钟 · 学校监考",
    text: "ASOP的考试格式标准化。学生通过学校报名，由学校老师在校内组织监考。整套试卷限时两小时，纸笔形式作答。所有学生在同一考试期内参加，确保公平。题目难度对标AP Physics或更高。",
    keyPoints: [
      { label: "形式", value: "纸笔考试" },
      { label: "限时", value: "120 分钟" },
      { label: "组织方", value: "学校监考" },
      { label: "板块", value: "物理全覆盖" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "晋级机制",
    subtitle: "暑期营 → 国家队 → APhO/IPhO",
    text: "ASOP的晋级体系层层递进。考试高分学生受邀参加澳大利亚国立大学ANU的暑期训练营。营地中再选出八人代表澳洲参加APhO亚太物理奥赛。最终五人代表澳洲参加IPhO国际物理奥赛。从ASOP到IPhO是清晰的晋级路径。",
    keyPoints: [
      { label: "ANU 营地", value: "暑期训练" },
      { label: "APhO 代表", value: "8 人" },
      { label: "IPhO 国家队", value: "5 人" },
      { label: "晋级路径", value: "层层递进" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "澳洲高中 · 学校组织参赛",
    text: "ASOP主要面向澳洲高中学生开放，由学校代表学生在ASI官网注册参赛。国际学生在澳洲就读期间可以参加。考试时间通常在每年五月四日到十五日之间的某个工作日，由学校自行选择。",
    keyPoints: [
      { label: "学段", value: "澳洲高中" },
      { label: "组织方式", value: "学校报名" },
      { label: "考试期", value: "5 月 4-15 日" },
      { label: "国际学生", value: "在澳即可参赛" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "ASOP 的申请价值",
    subtitle: "澳洲八大 · 物理国家队 · APhO 通道",
    text: "对中国家长而言，ASOP的价值首先在澳洲方向：墨尔本大学、悉尼大学、ANU等澳洲八大物理工程申请中是认可的物理学背景。其次是国际通道：APhO代表队是亚太地区物理顶尖选手集中地。第三是路径价值：通向IPhO国际物理奥赛的官方入口。",
    benefits: [
      { icon: "", title: "澳洲八大", desc: "申请加分" },
      { icon: "", title: "APhO 代表", desc: "亚太赛入口" },
      { icon: "", title: "IPhO 通道", desc: "国际方向" },
      { icon: "", title: "ANU 营地", desc: "国立大学训练" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "ASOP vs F=ma",
    subtitle: "澳洲 vs 美国国家队入口对比",
    text: "ASOP和F等于ma是澳洲和美国通往各自IPhO国家队的入口考试。ASOP由ASI主办、限定澳洲学生；F等于ma由AAPT主办、限定美国学生。两者考试形式有差异：ASOP是纸笔考试，F等于ma是线上选择题。两者的国际终点都是IPhO。",
    comparison: [
      { aspect: "主办方", left: "ASI 澳洲", right: "AAPT 美国" },
      { aspect: "学生身份", left: "澳洲学生", right: "美国学生" },
      { aspect: "考试形式", left: "纸笔 120 分钟", right: "线上 75 分钟" },
      { aspect: "国家代表", left: "5 人 IPhO", right: "5 人 IPhO" },
      { aspect: "亚太通道", left: "APhO 代表", right: "无" },
    ],
    leftLabel: "ASOP",
    rightLabel: "F=ma",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 ASOP 赛程",
    subtitle: "2026 赛季时间表",
    text: "ASOP二零二六赛季时间已经公布。考试期间为五月四日到十五日，由学校自行选择某个工作日组织。两周后批改完成，受邀学生进入ANU暑期训练营。八人代表赴五月十七到二十五日韩国釜山的APhO亚太物理奥赛。",
    events: [
      { date: "2026 年 5 月 4-15 日", event: "ASOP 考试期" },
      { date: "2026 年 5 月底", event: "ANU 训练营邀请" },
      { date: "2026 年 5 月 17-25 日", event: "APhO 釜山" },
      { date: "2026 年 7 月", event: "IPhO 国际赛" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "ASOP 在物理路径中的位置",
    subtitle: "澳洲物理国家队晋级阶梯",
    text: "在澳洲就读的物理学生路径建议是先以学校物理课程作为基础，参加ASOP奥林匹克考试，进入ANU暑期训练营，竞争APhO亚太物理奥赛代表队席位，最终五人代表澳洲出征IPhO国际物理奥赛。",
    pathway: [
      { stage: "澳洲高中物理", desc: "课程基础" },
      { stage: "ASOP 考试", desc: "入门选拔" },
      { stage: "ANU 暑期营", desc: "国家队训练" },
      { stage: "APhO 加 IPhO", desc: "国际方向" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "澳洲 ATAR · 历届真题 · 全板块训练",
    text: "第一步同步澳洲十一到十二年级物理ATAR课程或剑桥AS A2 Level物理。第二步从ASI官网获取近十年ASOP真题。第三步每周限时两小时做完整套题。第四步重点训练电磁学和量子力学，是ASOP高难度板块。第五步赛前两周冲刺真题模考。",
    steps: [
      { step: "01", title: "ATAR 同步", desc: "澳洲物理课纲" },
      { step: "02", title: "近十年真题", desc: "ASI 官网" },
      { step: "03", title: "限时套题", desc: "每周一套" },
      { step: "04", title: "电磁量子", desc: "高难板块" },
      { step: "05", title: "全真模考", desc: "赛前两周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "ASOP 是澳洲物理国家队的入口考试",
    subtitle: "ASI 主办 · APhO 通道 · 澳洲八大认可",
    text: "ASOP是澳大利亚科学创新机构ASI主办的高中物理奥林匹克，是通往APhO亚太物理奥赛和IPhO国际物理奥赛的澳洲国家队入口。对在澳大利亚就读高中的物理学生家庭来说，ASOP是核心赛道。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
