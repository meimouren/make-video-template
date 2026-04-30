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
  name: "MPFG",
  nameEn: "Math Prize for Girls",
  nameCn: "麻省理工女生数学奖",
  participationData: [
    { year: "2010", value: 250 },
    { year: "2014", value: 270 },
    { year: "2018", value: 280 },
    { year: "2020", value: 280 },
    { year: "2022", value: 290 },
    { year: "2024", value: 300 },
    { year: "2026", value: 300 },
  ],
  participationTitle: "MPFG 历年获邀人数",
  participationUnit: "人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是MPFG，麻省理工女生数学奖。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "MPFG",
    competitionNameEn: "Math Prize for Girls",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "MPFG 是什么？",
    subtitle: "MIT 主场 · 北美最高奖金的女生数学赛",
    text: "MPFG，全称Math Prize for Girls，中文译为麻省理工女生数学奖，是由美国Advantage Testing Foundation和Jane Street联合赞助、在麻省理工学院校园举办的女生专属数学竞赛。每年仅约三百人受邀参加。",
    openingStats: {
      midLabel: "举办地",
      midValue: "MIT",
      scaleLabel: "总奖金池",
      scaleValue: "10 万美金",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "全球最高奖金女生数学赛 · 5 万美金一等奖",
    text: "MPFG的稀缺性来自三方面。它是北美最高奖金的女生数学专项赛事，一等奖五万美金现金。它在麻省理工校园举办，自带名校加成。它仅向北美高中以下女生开放，是真正的精选邀请赛。",
    stats: [
      { value: "$50K", label: "一等奖现金" },
      { value: "$100K", label: "总奖金池" },
      { value: "300", label: "受邀名额" },
      { value: "MIT", label: "举办地" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "MPFG 核心定位",
    subtitle: "女生限定 · MIT 主场 · 邀请制",
    text: "MPFG的核心定位是女生限定的高难度数学邀请赛。每年约三百名表现优秀的高中女生受邀来到MIT校园参赛。比赛只考一天，二十道高难度问题，是Advantage Testing Foundation的旗舰女生STEM项目。",
    highlights: ["女生限定", "MIT 主场", "邀请制", "20 题", "10 万美金奖池"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 Advantage Testing Foundation",
    subtitle: "Jane Street 长期赞助 · MIT 校园承办",
    text: "MPFG由Advantage Testing Foundation主办，是美国知名考试辅导机构Advantage Testing的非营利分支。著名量化基金Jane Street长期作为冠名赞助。比赛承办地常年在麻省理工学院校园，强化了MIT和女生STEM教育的关联。",
    benefits: [
      { icon: "", title: "ATF", desc: "非营利主办" },
      { icon: "", title: "Jane Street", desc: "长期冠名" },
      { icon: "", title: "MIT", desc: "校园承办" },
      { icon: "", title: "女生 STEM", desc: "旗舰项目" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "20 题 · 2.5 小时 · 分级计分",
    text: "MPFG的考试格式独特。整套试卷二十道题，限时两个半小时。前十道题每题三到四点五分，后十道题每题四点五到七点五分。题目难度对标AMC 10和AIME之间，非常考验耐力和精度。",
    keyPoints: [
      { label: "题目数量", value: "20 题" },
      { label: "限时", value: "2.5 小时" },
      { label: "前 10 题", value: "3 - 4.5 分" },
      { label: "后 10 题", value: "4.5 - 7.5 分" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "奖金与奖项",
    subtitle: "10 万美金现金 · 全部颁给前 22 名",
    text: "MPFG的奖金体系是数学竞赛中最丰厚的之一。一等奖单人五万美金现金，二等奖两万美金，三等奖一万美金，四到十名各一千五百美金。整个奖金池十万美金，全部以现金支票形式颁发给获奖学生本人。",
    keyPoints: [
      { label: "1 等奖", value: "5 万美金" },
      { label: "2 等奖", value: "2 万美金" },
      { label: "3 等奖", value: "1 万美金" },
      { label: "4-10 名", value: "各 1500 美金" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "女生限定 · 美加居住 · 11 年级及以下",
    text: "MPFG有严格的参赛门槛。第一性别要求是女生身份。第二居住地必须是美国或加拿大。第三年级要求是申请截止日为止仍在十一年级或以下。第四需要通过申请筛选，不是直接报名就能参加，每年约三百名额。",
    keyPoints: [
      { label: "性别", value: "女生限定" },
      { label: "居住地", value: "美国或加拿大" },
      { label: "年级", value: "11 年级及以下" },
      { label: "录取方式", value: "申请筛选" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "MPFG 的申请价值",
    subtitle: "MIT 校园经验 · 女生 STEM 标志性背景",
    text: "对中国家长而言，MPFG的价值首先在稀缺性，全球女生数学奖金最高的专项赛事。其次在校园经验，受邀者将进入MIT校园参与比赛和现场颁奖。第三在申请背景，MPFG是顶尖大学招生官非常熟悉的女生STEM标志性背景。",
    benefits: [
      { icon: "", title: "稀缺", desc: "全球最高奖金" },
      { icon: "", title: "MIT 校园", desc: "现场参赛" },
      { icon: "", title: "招生官认知", desc: "顶尖大学熟知" },
      { icon: "", title: "STEM 信号", desc: "女生数学旗舰" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "MPFG vs AIME",
    subtitle: "邀请制女生赛 vs 选拔进阶赛",
    text: "MPFG和AIME是两种完全不同维度的高水平数学赛事。MPFG限定女生身份和居住地，邀请制，奖金导向；AIME是AMC 10和12晋级而来的选拔赛，无性别要求，是USAMO的过渡。两者很多顶尖女生选手会同时参加。",
    comparison: [
      { aspect: "性别要求", left: "女生限定", right: "无要求" },
      { aspect: "居住地", left: "美加限定", right: "无要求" },
      { aspect: "选拔方式", left: "申请邀请", right: "AMC 晋级" },
      { aspect: "题量", left: "20 题", right: "15 题" },
      { aspect: "奖金", left: "10 万美金", right: "无现金奖" },
    ],
    leftLabel: "MPFG",
    rightLabel: "AIME",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "MPFG 年度赛程",
    subtitle: "每年 5 月申请 · 10 月 MIT 现场",
    text: "MPFG每年的时间节奏固定。申请通常二月开放，五月底申请截止。九月公布受邀名单。十月第二个周末在MIT校园举办比赛和颁奖。二零二六年比赛已确定为十月十一日。",
    events: [
      { date: "2026 年 5 月 31 日", event: "申请截止" },
      { date: "2026 年 9 月", event: "受邀名单公布" },
      { date: "2026 年 10 月 11 日", event: "MIT 现场比赛" },
      { date: "2026 年 10 月 11 日", event: "颁奖典礼" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "MPFG 在女生数学路径中的位置",
    subtitle: "高中阶段女生 STEM 标志性赛事",
    text: "对北美高中女生而言，路径建议是先冲AMC 10和AMC 12积累数学竞赛背景，同时申请MPFG获得MIT现场经验，进入大学后参加Putnam等大学级别数学竞赛。MPFG在简历上是非常有辨识度的女生STEM背景。",
    pathway: [
      { stage: "AMC 10 / 12", desc: "基础积累" },
      { stage: "MPFG 申请", desc: "11 年级前申请" },
      { stage: "AIME 加 MPFG", desc: "顶尖女生路径" },
      { stage: "Putnam", desc: "大学级数学赛" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "申请材料 · AMC 真题 · 历届套题",
    text: "第一步是申请材料：成绩单加推荐信加竞赛记录。第二步通过AMC 10和AMC 12真题训练数学竞赛思维。第三步从MPFG官网获取历届二十道题真题，限时两个半小时模拟。第四步重点训练几何题和组合题，是MPFG的失分大户。第五步保持AIME水平的解题速度。",
    steps: [
      { step: "01", title: "申请材料", desc: "5 月底前提交" },
      { step: "02", title: "AMC 真题", desc: "10 加 12 训练" },
      { step: "03", title: "历届套题", desc: "限时模考" },
      { step: "04", title: "几何组合专项", desc: "失分板块" },
      { step: "05", title: "AIME 同步", desc: "速度匹配" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "MPFG 是北美顶尖女生数学的标志性赛事",
    subtitle: "MIT 校园 · 10 万美金 · 邀请制",
    text: "MPFG是北美高中女生数学竞赛中奖金最高、影响力最大的邀请赛之一，每年约三百人在MIT现场参赛。对家有北美居住、对数学有兴趣的高中女生家庭来说，MPFG值得重点关注。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
