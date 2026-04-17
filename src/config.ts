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

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是HMMT，哈佛麻省理工数学锦标赛。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "HMMT",
    competitionNameEn: "Harvard-MIT Mathematics Tournament",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    text: "由哈佛大学和麻省理工学院联合举办的顶级高中数学锦标赛。自1998年创办至今，是全美竞争最激烈的数学团队赛之一。",
  },

  {
    id: "opening-2",
    type: "opening-stats",
    text: "如果你的数学团队想挑战全美最强对手，HMMT就是最佳舞台。这个视频帮你全面了解这项赛事。",
    stats: [
      { label: "创办年份", value: 1998, suffix: "年" },
      { label: "每年两场", value: 2, suffix: "场" },
      { label: "团队人数", value: 8, suffix: "人" },
      { label: "历史", value: 27, suffix: "年" },
    ],
  },

  {
    id: "what-is-hmmt-1",
    type: "title-card",
    title: "什么是 HMMT",
    subtitle: "Harvard-MIT Mathematics Tournament",
    text: "HMMT，全称Harvard-MIT Mathematics Tournament，哈佛麻省理工数学锦标赛。由哈佛大学和MIT的本科生联合组织运营。每年举办秋季和春季两场。",
    highlights: ["哈佛+MIT联办", "本科生组织", "每年两场"],
  },

  {
    id: "what-is-hmmt-2",
    type: "title-card",
    title: "两场赛事",
    subtitle: "秋季@MIT · 春季@哈佛",
    text: "秋季赛在11月于MIT举行，难度相对较低，适合初次参赛的队伍。春季赛在2月于哈佛举行，难度更高，前30名队伍自动获得下一年春季赛的参赛资格。",
    highlights: ["11月·MIT·入门", "2月·哈佛·进阶", "前30保送"],
  },

  {
    id: "individual-rounds",
    type: "key-points",
    title: "个人赛",
    subtitle: "四大科目测试",
    text: "个人赛包含综合测试和三个科目测试：代数、几何和组合。每个科目10道题，限时50分钟。科目测试需要在报名时选择。",
    keyPoints: [
      { label: "科目数", value: "3 + 1 综合" },
      { label: "每科题量", value: "10 道" },
      { label: "每科时间", value: "50 分钟" },
      { label: "春季增加", value: "微积分" },
    ],
  },

  {
    id: "team-round",
    type: "key-points",
    title: "团队赛 Team Round",
    subtitle: "6-8人协作",
    text: "团队赛由6到8人组成的队伍共同完成，限时60分钟。题目按难度加权计分，满分400分。考验团队协作和分工策略。",
    keyPoints: [
      { label: "队伍人数", value: "6-8 人" },
      { label: "时间", value: "60 分钟" },
      { label: "满分", value: "400 分" },
      { label: "占比", value: "总分25%" },
    ],
  },

  {
    id: "guts-round",
    type: "key-points",
    title: "Guts Round",
    subtitle: "限时团队速答赛",
    text: "Guts Round是最刺激的环节。80分钟内团队需要完成36道题，分为12组每组3题。答完一组才能拿到下一组，实时公布排名。",
    keyPoints: [
      { label: "题目数", value: "36 道" },
      { label: "分组", value: "12组×3题" },
      { label: "时间", value: "80 分钟" },
      { label: "特点", value: "实时排名" },
    ],
  },

  {
    id: "scoring",
    type: "scoring-formula",
    title: "综合排名",
    subtitle: "Sweepstakes总分",
    text: "最终的Sweepstakes总排名综合个人赛和团队赛的成绩。团队赛Team Round占总分的25%，Guts Round也占重要比例。个人赛成绩累加计入团队总分。",
    formula: "总分 = 个人累计 + Team(25%) + Guts",
  },

  {
    id: "topics",
    type: "topics-chart",
    title: "考试科目",
    subtitle: "个人赛科目分布",
    text: "秋季赛设代数、几何和组合三个科目测试。春季赛增加微积分科目。综合测试覆盖所有领域。题目难度从AMC水平到USAMO水平不等。",
    domains: [
      { name: "代数", percentage: 25, topics: "多项式·数列·不等式·函数" },
      { name: "几何", percentage: 25, topics: "欧氏几何·坐标·三角" },
      { name: "组合", percentage: 25, topics: "计数·概率·图论·博弈" },
      { name: "综合/微积分", percentage: 25, topics: "跨领域·极限·积分（春季）" },
    ],
  },

  {
    id: "calendar",
    type: "calendar",
    title: "2025-2026 赛事日历",
    subtitle: "关键时间节点",
    text: "报名在每年9月开放，约3周窗口期。由于场地限制，参赛资格通过随机抽签决定。秋季赛11月在MIT，春季赛2月在哈佛。",
    events: [
      { date: "2025.08.24", event: "报名开始" },
      { date: "2025.09中旬", event: "报名截止" },
      { date: "2025.11.08", event: "秋季赛 @MIT" },
      { date: "2026.02.14", event: "春季赛 @哈佛" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "报名与抽签",
    text: "参赛者必须21岁以下，且在报名时为全日制中小学在校生。由于名额有限，通过随机抽签确定参赛队伍。但春季赛前30名队伍可直接保送下一年。",
    keyPoints: [
      { label: "年龄", value: "21 岁以下" },
      { label: "身份", value: "在校中学生" },
      { label: "秋季队伍", value: "至少 4 人" },
      { label: "春季队伍", value: "至少 6 人" },
    ],
  },

  {
    id: "why-hmmt",
    type: "benefits",
    title: "为什么要参加",
    subtitle: "对升学和成长的价值",
    text: "HMMT是全美竞争最激烈的数学团队赛。在哈佛和MIT的校园里与全美最强数学选手同台竞技，参赛经历本身就是名校申请的亮点。",
    benefits: [
      { icon: "🏫", title: "名校背书", desc: "哈佛+MIT联合举办" },
      { icon: "👥", title: "团队竞技", desc: "培养数学协作能力" },
      { icon: "🏆", title: "顶级赛场", desc: "全美最强队伍同台" },
      { icon: "📈", title: "申请亮点", desc: "在名校校园的竞赛经历" },
    ],
  },

  {
    id: "prep-1",
    type: "prep-steps",
    title: "备赛建议",
    subtitle: "两步入门",
    text: "建议先有AMC和AIME的竞赛基础。团队成员要有明确分工，每人主攻一个科目。HMMT官网提供历年真题和解答。",
    steps: [
      { num: "01", title: "竞赛基础", desc: "AMC/AIME水平是起点" },
      { num: "02", title: "科目分工", desc: "每人主攻代数/几何/组合" },
    ],
  },

  {
    id: "prep-2",
    type: "prep-steps",
    title: "冲刺阶段",
    subtitle: "团队配合是关键",
    text: "Guts Round是最考验团队默契的环节，需要大量团队模拟练习。Team Round则要训练高效的分工和讨论策略。",
    steps: [
      { num: "03", title: "Guts模拟", desc: "团队速答配合训练" },
      { num: "04", title: "Team策略", desc: "分工+讨论流程优化" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "挑战哈佛MIT的数学巅峰",
    text: "HMMT不仅是一场比赛，更是与全美最强数学高手同台竞技的机会。组建你的团队，现在就开始准备。",
  },
];
