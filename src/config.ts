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
  name: "IEO",
  nameEn: "International Economics Olympiad",
  nameCn: "国际经济学奥林匹克",
  participationData: [
    { year: "2018", value: 12 },
    { year: "2019", value: 25 },
    { year: "2020", value: 29 },
    { year: "2022", value: 39 },
    { year: "2023", value: 43 },
    { year: "2024", value: 60 },
    { year: "2026", value: 65 },
  ],
  participationTitle: "IEO 历年参赛国家数",
  participationUnit: "国",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是IEO，国际经济学奥林匹克。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "IEO",
    competitionNameEn: "International Economics Olympiad",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "IEO 是什么？",
    subtitle: "国际科学奥赛体系唯一经济学项目",
    text: "IEO，全称International Economics Olympiad，国际经济学奥林匹克竞赛，由二零零七年诺贝尔经济学奖得主、哈佛大学教授Eric Maskin于二零一七年发起，二零一八年首次举办。是国际科学奥林匹克体系中唯一的经济学竞赛。",
    openingStats: {
      midLabel: "发起人",
      midValue: "Eric Maskin",
      scaleLabel: "参赛国家",
      scaleValue: "60+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "诺奖背书 · 唯一经济奥赛 · 深圳主办",
    text: "IEO的稀缺性来自三方面。第一是诺奖背书：发起人Eric Maskin是诺贝尔经济学奖得主。第二是唯一性：经济学方向全球唯一的国际科学奥赛。第三是二零二六年全球决赛由中国深圳主办，中国学生本土参赛机会前所未有。",
    stats: [
      { value: "2018", label: "首次举办" },
      { value: "唯一", label: "经济奥赛" },
      { value: "诺奖", label: "发起人背书" },
      { value: "深圳", label: "2026 主办" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "IEO 核心定位",
    subtitle: "经济学 + 金融 + 商业案例",
    text: "IEO的核心定位是经济+金融+商业三轨综合考察。既考察学术知识，也考察实战能力和团队协作。是国际经济学最具权威性的中学生赛事，对标IMO数学、IPhO物理一梯队。",
    highlights: ["经济学", "金融素养", "商业案例", "团队赛", "诺奖发起", "G6-G12"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 国际经济学奥林匹克协会",
    subtitle: "Eric Maskin · 哈佛大学 · 科学奥赛体系",
    text: "IEO由Eric Maskin教授于二零一七年发起并担任理事会主席。是国际科学奥林匹克家族的第十三个成员，与IMO、IPhO、IChO、IBO等并列。八届赛事吸引六十余国参与，已成为经济学方向公认的国际顶级中学生赛事。",
    benefits: [
      { icon: "", title: "Eric Maskin", desc: "2007 诺奖得主" },
      { icon: "", title: "哈佛大学", desc: "理事会主席" },
      { icon: "", title: "13 项奥赛", desc: "科学奥赛家族" },
      { icon: "", title: "2018 起", desc: "8 届赛事" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛三轨制",
    subtitle: "经济学 + 金融素养 + 商业案例",
    text: "IEO由三个部分组成。第一是Economics经济学考试，个人项目。第二是Financial Literacy金融素养考试，个人项目。第三是Business Case商业案例分析，团队项目。三轨综合成绩决定个人和团队奖项。",
    keyPoints: [
      { label: "经济学", value: "个人笔试" },
      { label: "金融素养", value: "个人测试" },
      { label: "商业案例", value: "团队展示" },
      { label: "评奖方式", value: "三轨综合" },
    ],
  },

  {
    id: "round-economics",
    type: "key-points",
    title: "经济学考试",
    subtitle: "微观 · 宏观 · 国际经济",
    text: "全球站的经济学考试由两部分组成。第一部分是四十道选择题，时长九十分钟，全部计分。第二部分是五道开放题，每题最高三十分，最终取最高的四道计入总分。考察微观、宏观、国际经济等主干内容。",
    keyPoints: [
      { label: "选择题", value: "40 道 / 90 分钟" },
      { label: "开放题", value: "5 选 4 计分" },
      { label: "单题满分", value: "30 分" },
      { label: "考察范围", value: "微观+宏观" },
    ],
  },

  {
    id: "round-finance",
    type: "key-points",
    title: "金融素养",
    subtitle: "理财 · 投资 · 风险管理",
    text: "金融部分考察个人理财、投资决策、风险管理等实战能力。全球站采用一点五小时在线理财模拟游戏的形式；中国站采用二十五道选择题，时长六十分钟。金融部分占比与经济学相当。",
    keyPoints: [
      { label: "全球站", value: "1.5h 理财游戏" },
      { label: "中国站", value: "25 题 / 60 分钟" },
      { label: "考察重点", value: "理财+投资" },
      { label: "答题形式", value: "模拟实战" },
    ],
  },

  {
    id: "round-case",
    type: "key-points",
    title: "商业案例 团队项目",
    subtitle: "3-5 人 · 24 小时备赛 · 路演答辩",
    text: "Business Case是IEO唯一的团队环节。每支队伍三到五人，拿到一个真实的经济或商业问题，在二十四小时内完成方案分析并向评委做展示答辩。考察的是团队协作、商业逻辑和路演能力。",
    keyPoints: [
      { label: "团队规模", value: "3-5 人" },
      { label: "准备时间", value: "24 小时" },
      { label: "输出形式", value: "现场路演" },
      { label: "核心能力", value: "协作+表达" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "20 岁以下 · G6-G12 · 中英文可选",
    text: "全球站的资格要求是二零二六年六月三十日时不满二十周岁，且高中毕业日期晚于二零二五年十二月一日。中国赛区面向G6到G12学生，按年级和语言分为三个组别。官方语言英语，部分中国区组别支持中文。",
    keyPoints: [
      { label: "年龄上限", value: "20 岁以下" },
      { label: "学段", value: "G6 - G12" },
      { label: "官方语言", value: "英语" },
      { label: "中国分组", value: "三个等级" },
    ],
  },

  {
    id: "levels",
    type: "levels-compare",
    title: "中国赛区三个组别",
    subtitle: "Junior-SL / Junior-HL / Senior",
    text: "IEO China按年级和语言把学生分为三档。Junior-SL面向G6到G9，可选中文或英文。Junior-HL面向G9到G12，可选中文或英文。Senior高级组面向G9到G12，全英文，对接全球站晋级通道。",
    levels: [
      { name: "Junior-SL", target: "G6 - G9", detail: "中文或英文均可", badge: "初级低段" },
      { name: "Junior-HL", target: "G9 - G12", detail: "中文或英文均可", badge: "初级高段" },
      { name: "Senior", target: "G9 - G12", detail: "全英文 · 对接全球站", badge: "高级组" },
    ],
  },

  {
    id: "calendar",
    type: "calendar",
    title: "IEO 2026 赛季时间线",
    subtitle: "11 月报名 · 12 月初赛 · 3 月中国站 · 7 月全球站",
    text: "二零二六赛季的报名截止于二零二五年十一月三十日。初赛在二零二五年十二月线上举行。中国站决赛在二零二六年三月五号到八号在浙江湖州举办。全球站在二零二六年七月十二号到二十号在中国深圳举行。",
    events: [
      { date: "2025-11-30", event: "中国赛区报名截止" },
      { date: "2025-12", event: "初选站线上测评" },
      { date: "2026-03-05", event: "中国站决赛 湖州" },
      { date: "2026-07-12", event: "全球站决赛 深圳" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "IEO 三级晋级路径",
    subtitle: "初选站 → 中国站 → 全球站",
    text: "IEO China采用三级晋级制。第一级初选站，线上经济学测评。第二级中国站，团队总分前百分之二十晋级。第三级全球站，由中国队选拔代表，赴深圳与全球各国队伍同场竞争。",
    pathway: [
      { stage: "初选站", desc: "线上测评 / 全员可报" },
      { stage: "中国站", desc: "团队前 20% 晋级" },
      { stage: "中国队选拔", desc: "国家队 5 人" },
      { stage: "全球站", desc: "深圳 / 60+ 国家" },
    ],
  },

  {
    id: "awards",
    type: "scoring-examples",
    title: "中国站奖项分布",
    subtitle: "金奖 15% · 银奖 30% · 铜奖 45%",
    text: "中国站的奖项按总分排名分布。前百分之十五获得金奖，前百分之十六到四十五获得银奖，前百分之四十六到九十获得铜奖。所有参赛者均可获得官方参赛证书。全球站金银铜总数不超过参赛人数一半。",
    scoringExamples: [
      { label: "金奖", value: "前 15%", color: "#FFD600" },
      { label: "银奖", value: "16 - 45%", color: "#C0C0C0" },
      { label: "铜奖", value: "46 - 90%", color: "#CD7F32" },
      { label: "参赛证书", value: "全员发放", color: "#999999" },
    ],
  },

  {
    id: "topics",
    type: "topics-chart",
    title: "IEO 知识领域分布",
    subtitle: "经济 + 金融 + 商业三大板块",
    text: "IEO考察的知识领域大致分为四个板块。微观经济学占比最大，约百分之三十五；宏观经济学约百分之三十；金融素养约百分之二十五；商业与国际经济约百分之十。备考时建议按权重分配时间。",
    domains: [
      { name: "微观经济", percentage: 35, topics: "供需 · 市场 · 厂商" },
      { name: "宏观经济", percentage: 30, topics: "GDP · 货币 · 财政" },
      { name: "金融素养", percentage: 25, topics: "理财 · 投资 · 风险" },
      { name: "商业国际", percentage: 10, topics: "贸易 · 案例" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "IEO vs NEC",
    subtitle: "国际奥赛 vs 全美经济挑战",
    text: "IEO和NEC全美经济挑战是经济方向最主流的两个赛事。IEO是国际科学奥赛体系，权威性最高，覆盖六十多国。NEC是美国本土赛事，题量更大，规则更稳定。两者并行参加，互为申请背书。",
    comparison: [
      { aspect: "性质", left: "国际科学奥赛", right: "美国国家赛" },
      { aspect: "覆盖", left: "60+ 国家", right: "美国为主" },
      { aspect: "考察", left: "三轨综合", right: "经济+案例" },
      { aspect: "权威性", left: "诺奖背书", right: "CEE 主办" },
      { aspect: "团队赛", left: "Business Case", right: "Critical Thinking" },
    ],
    leftLabel: "IEO",
    rightLabel: "NEC",
  },

  {
    id: "china-team",
    type: "opening-stats",
    title: "中国队近期表现",
    subtitle: "2025 巴库 · 团队第三",
    text: "二零二五年七月，第八届IEO在阿塞拜疆首都巴库举行。中国队斩获四枚个人金牌、一枚个人铜牌，团队总成绩位列全球第三。历届中国金奖得主多被哈佛、斯坦福、芝大经济学专业录取。",
    stats: [
      { value: "4 金", label: "2025 个人金牌" },
      { value: "1 铜", label: "2025 个人铜牌" },
      { value: "第 3", label: "团队全球排名" },
      { value: "哈佛", label: "金奖去向" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "IEO 的申请价值",
    subtitle: "诺奖发起 · 经济顶赛 · 名校认可",
    text: "对计划申请经济、金融、商科方向的家庭而言，IEO的价值在三个方面。第一是国际科学奥赛的最高权威性。第二是诺奖发起人背书的稀缺品牌。第三是历届金奖去向哈佛、斯坦福等顶校的真实案例。",
    benefits: [
      { icon: "", title: "国际奥赛", desc: "13 项之一" },
      { icon: "", title: "诺奖背书", desc: "Maskin 发起" },
      { icon: "", title: "藤校通道", desc: "金奖去向" },
      { icon: "", title: "本土赛季", desc: "深圳主办" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "教材打底 · 真题刷穿 · 团队磨合",
    text: "第一步选一本经济学原理教材打底，曼昆或克鲁格曼任选。第二步刷历年真题，重点把握选择题手感和开放题模板。第三步学习金融素养基础，关注理财与投资。第四步组建三到五人团队，提前练习商业案例答辩。第五步保持英文输入输出，对接全球站。",
    steps: [
      { step: "01", title: "教材打底", desc: "曼昆 / 克鲁格曼" },
      { step: "02", title: "真题刷穿", desc: "选择 + 开放" },
      { step: "03", title: "金融基础", desc: "理财投资" },
      { step: "04", title: "组队练习", desc: "案例答辩" },
      { step: "05", title: "英文输出", desc: "全球站对接" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "IEO 是经济方向的国际顶级赛事",
    subtitle: "Eric Maskin 发起 · 60+ 国参与 · 深圳主办",
    text: "IEO是国际经济学奥林匹克竞赛，由诺贝尔经济学奖得主Eric Maskin发起，是国际科学奥赛体系中唯一的经济学项目。二零二六年全球决赛在深圳举行，是中国学生本土参赛的黄金窗口。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
