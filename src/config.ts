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
  name: "CLMC",
  nameEn: "Canada Lynx Mathematical Competition",
  nameCn: "加拿大数学测评中级",
  participationData: [
    { year: "2020", value: 5 },
    { year: "2021", value: 8 },
    { year: "2022", value: 12 },
    { year: "2023", value: 18 },
    { year: "2024", value: 22 },
    { year: "2025", value: 25 },
    { year: "2026", value: 28 },
  ],
  participationTitle: "CLMC 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是CLMC，加拿大数学测评中级。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "CLMC",
    competitionNameEn: "Canada Lynx Math Comp",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "CLMC 是什么？",
    subtitle: "加拿大数学学会主办的中学生数学测评",
    text: "CLMC，全称Canada Lynx Mathematical Competition，中文译为加拿大数学测评中级，由加拿大数学学会CMS主办。这是面向中学阶段学生的数学测评赛，由加拿大数学学会作为官方背书。",
    openingStats: {
      midLabel: "举办方",
      midValue: "CMS 加数学会",
      scaleLabel: "年参赛规模",
      scaleValue: "28K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "加拿大数学学会官方 · 中学生友好门槛",
    text: "CLMC的稀缺性来自三方面。第一是加拿大数学学会CMS官方主办，背书强。第二是命题难度对中学生友好，是入门级国际数学测评。第三是申请加拿大顶尖大学的相关认可度高，包括滑铁卢大学、多伦多大学、UBC。",
    stats: [
      { value: "CMS", label: "加拿大数学学会" },
      { value: "7-11", label: "年级覆盖" },
      { value: "15", label: "题 / 单场" },
      { value: "90", label: "分钟限时" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "CLMC 核心定位",
    subtitle: "中学阶段 · 数学测评 · 个人赛",
    text: "CLMC的核心定位是面向七到十一年级中学生的数学测评赛。题目基于加拿大中学课程核心知识点，涵盖代数几何概率初步等基础数学板块。难度对应中学课程要求，适合作为加拿大数学竞赛体系的入门门槛。",
    highlights: ["CMS 官方", "中学生", "选择题", "90 分钟", "课程同步"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 加拿大数学学会",
    subtitle: "Canadian Mathematical Society · CMS",
    text: "CMS全称Canadian Mathematical Society，加拿大数学学会，是加拿大数学领域最权威的学术组织。CMS旗下还主办着加拿大数学奥赛CMO等其他权威赛事。CLMC作为CMS的中学生入门赛事，承担着加拿大数学竞赛体系最早入口的角色。",
    benefits: [
      { icon: "", title: "CMS 主办", desc: "数学权威" },
      { icon: "", title: "CMO 同体系", desc: "加拿大顶级赛" },
      { icon: "", title: "中学入门", desc: "最早入口" },
      { icon: "", title: "课程同步", desc: "加拿大教纲" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "15 题 · 90 分钟 · 选择题",
    text: "CLMC的考试格式标准化。整套试卷十五道选择题，限时九十分钟，平均每题六分钟思考时间。题型为四选一选择题，难度循序渐进，前几题基础送分、后几题需要灵活思考。",
    keyPoints: [
      { label: "题目数量", value: "15 题" },
      { label: "限时", value: "90 分钟" },
      { label: "题型", value: "四选一选择" },
      { label: "难度", value: "循序渐进" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "评分与奖项",
    subtitle: "全球排名 · 金银铜证书",
    text: "CLMC评分按全球同年级排名颁奖。金奖颁给前百分之十的选手，银奖颁给前百分之十一到二十五，铜奖颁给前百分之二十六到五十。所有完成考试的学生都会获得参赛证书。所有奖项由加拿大数学学会CMS官方颁发。",
    keyPoints: [
      { label: "Gold", value: "前 10%" },
      { label: "Silver", value: "前 11-25%" },
      { label: "Bronze", value: "前 26-50%" },
      { label: "证书", value: "CMS 官方" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "7 到 11 年级 · 全球开放",
    text: "CLMC对全球七到十一年级在读学生开放。国内学生通过加拿大教育考试中心ICAE或代理机构在国内考点参加。考试时间根据时区分两天进行，加拿大和美洲在第一天，亚太地区在第二天。",
    keyPoints: [
      { label: "年级", value: "7-11 年级" },
      { label: "国籍", value: "全球开放" },
      { label: "国内通道", value: "ICAE 等代理" },
      { label: "考试时区", value: "亚太次日" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "CLMC 的申请价值",
    subtitle: "加拿大留学 · 数学竞赛入门",
    text: "对中国家长而言，CLMC的价值首先在加拿大留学方向：加拿大数学学会主办的赛事在加拿大顶尖大学申请中获得认可。其次是数学竞赛入门：90分钟15题的格式适合刚开始接触数学竞赛的学生。第三是奖项含金量：CMS官方颁发的证书在简历上有清晰来源背书。",
    benefits: [
      { icon: "", title: "加拿大方向", desc: "顶尖大学认可" },
      { icon: "", title: "竞赛入门", desc: "格式友好" },
      { icon: "", title: "CMS 证书", desc: "官方背书" },
      { icon: "", title: "晋级跳板", desc: "通向 CMO" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "CLMC vs CSMC",
    subtitle: "加拿大两大中学数学赛对比",
    text: "CLMC和CSMC是加拿大数学学会和滑铁卢大学CEMC旗下两个不同的中学数学赛。CLMC由CMS主办，是数学学会的中学入门赛；CSMC全称Canadian Senior and Intermediate Mathematics Contests，由滑铁卢大学CEMC主办，是另一条加拿大数学竞赛体系。",
    comparison: [
      { aspect: "主办方", left: "CMS", right: "Waterloo CEMC" },
      { aspect: "覆盖年级", left: "7-11 年级", right: "高中分级" },
      { aspect: "限时", left: "90 分钟", right: "120 分钟" },
      { aspect: "题量", left: "15 题", right: "因级而异" },
      { aspect: "晋级", left: "通往 CMO", right: "通往 CMC" },
    ],
    leftLabel: "CLMC",
    rightLabel: "CSMC",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 CLMC 赛程",
    subtitle: "通常每年九月底十月初举办",
    text: "CLMC每年通常在九月底或十月初举办，分两天进行。二零二五赛季于十月二日和三日举办，已经结束。下届二零二六赛季预计在九月底十月初进行，具体日期由CMS官方公告。",
    events: [
      { date: "2025 年 10 月 2 日", event: "上届考试日（已结束）" },
      { date: "2026 年 9 月预计", event: "报名通道开启" },
      { date: "2026 年 10 月预计", event: "下届考试日" },
      { date: "2026 年 11 月", event: "成绩公布" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "CLMC 在加拿大数学路径中的位置",
    subtitle: "加拿大体系数学竞赛的入门起点",
    text: "对国内学生而言，加拿大数学竞赛路径建议是先参加CLMC作为中学阶段入门，初中后期参加滑铁卢大学CEMC旗下的Pascal、Cayley、Fermat三联赛事，高中阶段参加CSMC、Euclid，最终冲刺CMO加拿大数学奥赛。",
    pathway: [
      { stage: "CLMC", desc: "中学入门" },
      { stage: "Pascal Cayley Fermat", desc: "Waterloo 三联" },
      { stage: "CSMC 加 Euclid", desc: "高中进阶" },
      { stage: "CMO", desc: "加拿大数学奥赛" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "加拿大教纲 · 历届真题 · 限时套题",
    text: "第一步同步加拿大七到十一年级中学数学课纲，重点是代数几何概率初步。第二步从CMS官网获取近五年CLMC真题。第三步每周限时九十分钟做完整一套。第四步重点训练应用题和文字题，是CLMC的失分大户。第五步赛前两周做全真模考。",
    steps: [
      { step: "01", title: "课纲同步", desc: "加拿大中学" },
      { step: "02", title: "近五年真题", desc: "CMS 官网" },
      { step: "03", title: "限时套题", desc: "每周一套" },
      { step: "04", title: "应用题专项", desc: "失分板块" },
      { step: "05", title: "全真模考", desc: "赛前两周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "CLMC 是加拿大数学竞赛体系的入门起点",
    subtitle: "CMS 官方 · 7-11 年级 · 中学友好",
    text: "CLMC是加拿大数学学会CMS主办的中学生数学测评赛，是国内学生进入加拿大数学竞赛体系的常见入门起点。对计划走加拿大留学路径的中学生家庭来说，CLMC值得重点关注。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
