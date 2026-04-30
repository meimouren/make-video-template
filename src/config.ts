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
  name: "GiM",
  nameEn: "Girls in Math at Yale",
  nameCn: "耶鲁大学全球高中女子数学挑战",
  participationData: [
    { year: "2018", value: 200 },
    { year: "2020", value: 350 },
    { year: "2022", value: 500 },
    { year: "2023", value: 600 },
    { year: "2024", value: 700 },
    { year: "2026", value: 800 },
  ],
  participationTitle: "GiM 历年参赛规模",
  participationUnit: "人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是GiM，耶鲁大学全球高中女子数学挑战。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "GiM",
    competitionNameEn: "Girls in Math at Yale",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "GiM 是什么？",
    subtitle: "耶鲁大学主办的女生数学挑战",
    text: "GiM，全称Girls in Math at Yale，中文译为耶鲁大学全球高中女子数学挑战。由耶鲁大学数学竞赛组织主办，是面向全球高中女生及性别少数群体学生的团队数学竞赛，也是耶鲁数学竞赛组织的两大旗舰赛事之一。",
    openingStats: {
      midLabel: "举办方",
      midValue: "耶鲁",
      scaleLabel: "年参赛规模",
      scaleValue: "800+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "耶鲁主办 · 团队赛 · 国内可参赛",
    text: "GiM的稀缺性来自三方面。第一是耶鲁主办，藤校品牌加成。第二是女生定位，是国际化的女生STEM赛事。第三是团队赛形式，培养协作能力。国内学生通过阿思丹官方代理可以在上海赛区参赛。",
    stats: [
      { value: "Yale", label: "藤校主办" },
      { value: "4-6", label: "人一队" },
      { value: "800+", label: "年参赛人数" },
      { value: "上海", label: "国内赛区" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "GiM 核心定位",
    subtitle: "高中女生 · 团队加个人 · 多轮赛制",
    text: "GiM的核心定位是面向高中阶段女生和性别少数群体学生的团队数学挑战赛。每队四到六人，比赛通过多个回合形式进行，包括个人轮、团队轮、抢答轮等。是为STEM领域中代表性不足的群体专门设计的赛事。",
    highlights: ["耶鲁主办", "女生加少数群体", "4-6 人一队", "多轮赛制", "STEM 包容"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 耶鲁数学竞赛",
    subtitle: "Yale Math Competition · 学生组织运营",
    text: "GiM由耶鲁数学竞赛组织Yale Math Competition主办，是一个由耶鲁本科生运营的学生组织。该组织还主办另一项赛事MMATHS。GiM的初心是为STEM领域中代表性不足的女生和性别少数学生提供一个友好和高质量的数学竞赛平台。",
    benefits: [
      { icon: "", title: "Yale", desc: "藤校品牌" },
      { icon: "", title: "学生运营", desc: "耶鲁本科生" },
      { icon: "", title: "STEM 包容", desc: "代表性不足群体" },
      { icon: "", title: "公益性质", desc: "非营利赛事" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "4 轮赛制 · 个人加团队",
    text: "GiM的比赛分四个轮次。个人轮十二道题限时七十五分钟，团队轮十道题限时四十五分钟。然后是Tiebreaker决胜轮，前八名进入。最后是Lightning Finals闪电决赛，一对一形式角逐冠军。",
    keyPoints: [
      { label: "个人轮", value: "12 题 · 75 分钟" },
      { label: "团队轮", value: "10 题 · 45 分钟" },
      { label: "决胜轮", value: "前 8 名进入" },
      { label: "闪电决赛", value: "一对一" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "评分与奖项",
    subtitle: "个人加团队双线奖项",
    text: "GiM的奖项分两条线。个人方面：全球前八名Top 8个人奖，再分高荣誉前百分之十、荣誉前百分之二十五、Credit前百分之四十三个层级。团队方面：前三名团队奖。国内赛区还有阿思丹EPQ奖学金，金奖三千、银奖两千、铜奖一千人民币。",
    keyPoints: [
      { label: "Top 8", value: "全球前 8 个人" },
      { label: "高荣誉", value: "前 10%" },
      { label: "团队前 3", value: "Top 3 团队奖" },
      { label: "EPQ 奖学金", value: "1-3 千人民币" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "高中女生及性别少数群体 · 全球开放",
    text: "GiM的参赛资格定位明确。高中阶段在读、女生身份或性别少数群体（含非二元、跨性别等）的学生均可报名。国内学生通过阿思丹官方代理在上海赛区参赛。每队四到六人，需要一名指导教师。",
    keyPoints: [
      { label: "学段", value: "高中在读" },
      { label: "性别", value: "女生或性别少数" },
      { label: "国籍", value: "全球开放" },
      { label: "国内通道", value: "阿思丹上海赛区" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "GiM 的申请价值",
    subtitle: "藤校品牌 · 团队 STEM 信号 · 国际化",
    text: "对中国家长而言，GiM的价值首先在藤校品牌：耶鲁主办本身就是高质量信号。其次是性别 STEM 视角：女生数学背景对申请非常稀缺。第三是团队赛形式：体现协作能力是申请背景里少有的角度。第四是国际化：和全球高中女生同台竞技。",
    benefits: [
      { icon: "", title: "Yale 品牌", desc: "藤校认证" },
      { icon: "", title: "女生 STEM", desc: "申请稀缺点" },
      { icon: "", title: "团队信号", desc: "协作能力" },
      { icon: "", title: "全球视野", desc: "国际化对标" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "GiM vs MPFG",
    subtitle: "两大女生数学专项赛对比",
    text: "GiM和MPFG是国际女生数学赛事的两大代表。MPFG限定北美居住、邀请制、奖金导向；GiM全球开放、报名制、奖学金导向。MPFG侧重个人选拔，GiM侧重团队挑战。两者面向的目标人群和申请价值各有不同。",
    comparison: [
      { aspect: "主办方", left: "Yale", right: "Advantage Testing" },
      { aspect: "居住地", left: "全球开放", right: "美加限定" },
      { aspect: "选拔方式", left: "报名参加", right: "申请邀请" },
      { aspect: "形式", left: "团队加个人", right: "纯个人" },
      { aspect: "奖励", left: "证书加奖学金", right: "10 万美金现金" },
    ],
    leftLabel: "GiM",
    rightLabel: "MPFG",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 GiM 赛程",
    subtitle: "2026 春季赛 · 上海赛区",
    text: "GiM二零二六年春季赛已确定。报名截止三月六日，比赛日期三月二十一到二十二日，国内赛区在上海。每年比赛集中在春季三月份举办，与耶鲁学期节奏一致。",
    events: [
      { date: "2026 年 3 月 6 日", event: "报名截止" },
      { date: "2026 年 3 月 21 日", event: "比赛第一天" },
      { date: "2026 年 3 月 22 日", event: "比赛第二天" },
      { date: "2026 年 4 月", event: "成绩公布" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "GiM 在女生数学路径中的位置",
    subtitle: "高中阶段女生 STEM 多元背景",
    text: "对国内高中女生而言，路径建议是先以AMC 10和AMC 12积累个人数学背景，同时参加GiM获得团队赛背景，对北美居住学生还可以申请MPFG。这三个赛事组合是高中女生申请理工科顶尖大学最常见的数学背景组合。",
    pathway: [
      { stage: "AMC 10 / 12", desc: "个人基础" },
      { stage: "GiM", desc: "团队赛背景" },
      { stage: "MPFG 申请", desc: "北美女生" },
      { stage: "AIME 加 USAMO", desc: "晋级方向" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "团队磨合 · AMC 真题 · 限时模拟",
    text: "第一步是组队，提前一到两个月找到四到六位水平接近的队友。第二步以AMC 10和AMC 12真题作为基础练习。第三步限时七十五分钟做个人轮模拟、四十五分钟做团队轮模拟。第四步专门训练抢答类题目应对Lightning Finals。第五步赛前一周做完整四轮全真模考。",
    steps: [
      { step: "01", title: "提前组队", desc: "1-2 月磨合" },
      { step: "02", title: "AMC 真题", desc: "10 加 12 基础" },
      { step: "03", title: "限时套题", desc: "个人加团队" },
      { step: "04", title: "抢答训练", desc: "Lightning 应对" },
      { step: "05", title: "全真模考", desc: "赛前一周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "GiM 是耶鲁主办的女生数学团队赛",
    subtitle: "藤校品牌 · 全球开放 · 国内可赛",
    text: "GiM是耶鲁大学数学竞赛组织主办的全球高中女生数学挑战赛，国内学生可以在上海赛区参赛。对家有高中女生、希望积累藤校相关背景的家庭来说，GiM值得重点关注。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
