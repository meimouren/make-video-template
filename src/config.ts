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
  name: "AMO",
  nameEn: "American Mathematics Olympiad",
  nameCn: "美国数学思维挑战赛",
  participationData: [
    { year: "2015", value: 50 },
    { year: "2018", value: 80 },
    { year: "2020", value: 110 },
    { year: "2022", value: 130 },
    { year: "2024", value: 145 },
    { year: "2026", value: 150 },
  ],
  participationTitle: "AMO 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是AMO，美国数学思维挑战赛。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "AMO",
    competitionNameEn: "American Math Olympiad",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "AMO 是什么？",
    subtitle: "SIMCC 和 SIU 联合主办的全球数学赛",
    text: "AMO，全称American Mathematics Olympiad，中文译为美国数学思维挑战赛。由新加坡国际数学竞赛中心SIMCC联合美国南伊利诺伊大学SIU主办，每年吸引来自约三十个国家、近十五万名学生参加。",
    openingStats: {
      midLabel: "全球覆盖",
      midValue: "30+ 国",
      scaleLabel: "年参赛规模",
      scaleValue: "150K",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "Common Core 标准 · 二到十二年级覆盖",
    text: "AMO的命题依据美国Common Core State Standards，覆盖小学二年级到高中十二年级的全学段，是国内学生最早可以接触的国际数学竞赛之一。它由阿思丹在国内承办，参赛流程对中国学生友好。",
    stats: [
      { value: "2-12", label: "年级覆盖" },
      { value: "30+", label: "国家参赛" },
      { value: "150K", label: "年参赛人数" },
      { value: "90", label: "分钟单场" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "AMO 核心定位",
    subtitle: "二到十二年级 · 数学思维测评",
    text: "AMO的核心定位是数学思维标准化测评。题目按学段分级，从小学到高中各有不同的难度梯度。题型以选择题和填空题为主，限时九十分钟。强调数学思考能力的应用，不依赖技巧训练。",
    highlights: ["SIMCC 主办", "全学段", "Common Core", "90 分钟", "11 个级别"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 SIMCC 与 SIU",
    subtitle: "新加坡国际数学竞赛中心 + 美国南伊利诺伊大学",
    text: "AMO由两家机构联合主办。SIMCC全称Singapore International Math Contests Centre，是亚太区域最大的数学竞赛组织之一。SIU是美国南伊利诺伊大学，负责命题学术权威性背书。这种合作让AMO同时具有美国学术标准和国际化运营能力。",
    benefits: [
      { icon: "", title: "SIMCC", desc: "新加坡运营" },
      { icon: "", title: "SIU 背书", desc: "美国学术" },
      { icon: "", title: "Common Core", desc: "美国标准" },
      { icon: "", title: "30+ 国", desc: "全球考点" },
    ],
  },

  {
    id: "levels",
    type: "key-points",
    title: "十一个分级",
    subtitle: "Grade 2 到 Grade 12 · 每级独立排名",
    text: "AMO按年级分十一个级别，从二年级一路到十二年级，每个级别有独立的题目和独立的排名。这种细分级别让低年级学生不会和高年级学生在同一个池子里竞争，奖项产出更精准。",
    keyPoints: [
      { label: "小学低年级", value: "Grade 2 - 5" },
      { label: "小学高年级", value: "Grade 5 - 6" },
      { label: "初中", value: "Grade 7 - 8" },
      { label: "高中", value: "Grade 9 - 12" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "90 分钟 · 选择填空 · 个人赛",
    text: "AMO的考试格式标准化。每场考试限时九十分钟，题型以选择题和填空题为主，按级别难度递增。所有题目按Common Core知识点出题，覆盖代数几何概率统计的主要板块。",
    keyPoints: [
      { label: "限时", value: "90 分钟" },
      { label: "题型", value: "选择加填空" },
      { label: "形式", value: "个人赛" },
      { label: "知识点", value: "Common Core" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "评分与奖项",
    subtitle: "金银铜奖 + 全球前列特别奖",
    text: "AMO的奖项体系按全球同级别排名颁发。每个级别评出金银铜三个等级，并颁发证书。全球前列学生还可以获得SIMCC的奖学金、暑期学术营、国际青年荣誉学会IJHS会员资格等附加权益。",
    keyPoints: [
      { label: "Gold", value: "金奖证书" },
      { label: "Silver", value: "银奖证书" },
      { label: "Bronze", value: "铜奖证书" },
      { label: "Global Top", value: "奖学金加 IJHS" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "全球开放 · 阿思丹中国赛区",
    text: "AMO对全球二年级到十二年级学生开放。国内学生通过阿思丹官方代理报名，参赛地点遍布全国主要城市。报名以个人为单位，不需要团队组队。每个级别参赛费用相对友好。",
    keyPoints: [
      { label: "年级", value: "Grade 2 - 12" },
      { label: "国籍", value: "全球开放" },
      { label: "国内通道", value: "阿思丹承办" },
      { label: "形式", value: "个人报名" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "AMO 的申请价值",
    subtitle: "竞赛起步 · 国际化背景 · 奖学金通道",
    text: "对中国家长而言，AMO的价值体现在三方面。第一是竞赛起步：从二年级就能参加，是最早可量化的数学竞赛背景。第二是国际化：覆盖全球三十国，证明孩子在国际同龄人池里的相对水平。第三是奖学金通道：全球前列学生可以拿到SIMCC的实质性奖学金资源。",
    benefits: [
      { icon: "", title: "早期切入", desc: "Grade 2 可参赛" },
      { icon: "", title: "国际化", desc: "全球同台" },
      { icon: "", title: "Common Core", desc: "对标美国" },
      { icon: "", title: "奖学金", desc: "Global Top 通道" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "AMO vs AMC 8",
    subtitle: "两大美国体系数学赛对比",
    text: "AMO和AMC 8是中国家长经常被放在一起比的美国体系数学赛。AMO覆盖二到十二年级、有十一个级别细分；AMC 8只面向八年级及以下的学生、不分级。AMO题型更标准化、AMC 8难度更高、含金量公认更强。",
    comparison: [
      { aspect: "覆盖年级", left: "Grade 2 - 12", right: "Grade 8 及以下" },
      { aspect: "级别细分", left: "11 个级别", right: "不分级" },
      { aspect: "限时", left: "90 分钟", right: "40 分钟" },
      { aspect: "题量", left: "因级而异", right: "25 题" },
      { aspect: "认可度", left: "国际化广", right: "美国权威" },
    ],
    leftLabel: "AMO",
    rightLabel: "AMC 8",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 AMO 赛程",
    subtitle: "通常每年春季和秋季两次赛季",
    text: "AMO每年通常分春季和秋季两个赛季。春季赛季报名通常在二到三月，考试在三到四月进行。秋季赛季报名在八到九月，考试在十到十一月进行。具体日期以阿思丹官方公告为准。",
    events: [
      { date: "每年 2-3 月", event: "春季报名" },
      { date: "每年 3-4 月", event: "春季考试" },
      { date: "每年 8-9 月", event: "秋季报名" },
      { date: "每年 10-11 月", event: "秋季考试" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "AMO 在竞赛路径中的位置",
    subtitle: "数学竞赛启蒙到进阶",
    text: "国内学生建议小学阶段从AMO低年级级别入手培养竞赛意识，初中阶段过渡到AMC 8和MathCounts，初二之后参加AMC 10、AIME，高中后期向更专业的高级数学赛和USAMO推进。",
    pathway: [
      { stage: "AMO Grade 2-6", desc: "小学竞赛启蒙" },
      { stage: "AMC 8 加 AMO Grade 7-8", desc: "初中过渡" },
      { stage: "AMC 10 加 AIME", desc: "高中进阶" },
      { stage: "USAMO", desc: "国家级数学奥赛" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "分级真题 · Common Core 同步 · 限时套题",
    text: "第一步通过阿思丹官方或SIMCC官网获取近几年AMO真题。第二步按对应学段同步学习Common Core数学知识点。第三步每周限时九十分钟做完整套题。第四步重点训练应用题和文字题。第五步考前一周限时全真模考一次。",
    steps: [
      { step: "01", title: "近五年真题", desc: "阿思丹获取" },
      { step: "02", title: "Common Core 同步", desc: "对应学段" },
      { step: "03", title: "限时套题", desc: "每周一套" },
      { step: "04", title: "应用题专项", desc: "失分大户" },
      { step: "05", title: "全真模考", desc: "考前一周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "AMO 是早期数学竞赛体验的常见选择",
    subtitle: "SIMCC 主办 · 全球三十国 · Common Core 标准",
    text: "AMO是新加坡国际数学竞赛中心和美国南伊利诺伊大学联合主办的全球数学竞赛，覆盖二到十二年级。对希望孩子早期接触国际数学竞赛的家长而言，AMO是常见的入门选择。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
