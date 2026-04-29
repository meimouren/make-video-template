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

// ===== 竞赛主题全局常量 =====
export const COMPETITION = {
  name: "EMCC",
  nameEn: "Exeter Math Club Competition",
  nameCn: "埃克塞特数学俱乐部挑战赛",
  participationData: [
    { year: "2018", value: 500 },
    { year: "2019", value: 600 },
    { year: "2022", value: 800 },
    { year: "2023", value: 900 },
    { year: "2024", value: 1100 },
    { year: "2025", value: 1300 },
    { year: "2026", value: 1500 },
  ],
  participationTitle: "EMCC 历年参赛人数",
  participationUnit: "人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是EMCC，埃克塞特数学俱乐部挑战赛。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "EMCC",
    competitionNameEn: "Exeter Math Club Competition",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "EMCC 是什么？",
    subtitle: "菲利普斯埃克塞特主办的初中数学挑战赛",
    text: "EMCC中文译为埃克塞特数学俱乐部挑战赛，由美国顶级寄宿高中菲利普斯埃克塞特的数学俱乐部主办，面向全球初中生，二零一一年首届举办，至今已超过十届。",
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受中国家长关注？",
    subtitle: "顶级寄宿高中认可 · 招生直接关注",
    text: "如果你的孩子正在冲刺埃克塞特、安多福、迪尔菲尔德这些美国顶级寄宿高中，EMCC几乎是最有直接加分效果的初中数学赛。它由埃克塞特学生亲自命题，埃克塞特招生官自己就认识这项赛事。",
    stats: [
      { value: "2011", label: "首届举办" },
      { value: "4", label: "轮赛制" },
      { value: "4", label: "人一队" },
      { value: "1500+", label: "二零二六参赛" },
    ],
  },

  {
    id: "what-is-emcc",
    type: "title-card",
    title: "EMCC 核心定位",
    subtitle: "八年级及以下 · 团队数学挑战赛",
    text: "EMCC是一项面向全球八年级及以下中学生的数学团队赛。四人一队，学生可以组学校队、校外队或者跨国队。比赛由埃克塞特在校学生亲自命题和组织，是该校数学俱乐部的年度重磅活动。",
    highlights: ["埃克塞特主办", "初中数学", "团队赛", "4 轮赛制", "学生自办"],
  },

  {
    id: "host-institution",
    type: "benefits",
    title: "主办方 菲利普斯埃克塞特",
    subtitle: "Phillips Exeter Academy · 美国顶级寄宿高中",
    text: "菲利普斯埃克塞特是美国历史最悠久的寄宿高中之一，马克·扎克伯格和前总统富兰克林·皮尔斯都是校友。EMCC由该校数学俱乐部Exeter Math Club承办，完全由学生运营，代表学校最顶尖的数学学术传统。",
    benefits: [
      { icon: "🎓", title: "埃克塞特校", desc: "全美顶级寄宿" },
      { icon: "👥", title: "学生自办", desc: "数学俱乐部" },
      { icon: "📐", title: "原创命题", desc: "学生亲自命题" },
      { icon: "🏛️", title: "百年传统", desc: "1781 年建校" },
    ],
  },

  {
    id: "four-rounds",
    type: "key-points",
    title: "EMCC 四大轮",
    subtitle: "Speed · Accuracy · Team · Guts",
    text: "EMCC完整赛制由四个环节组成。Speed快速轮比速度，Accuracy精准轮比稳定度，Team团队轮比合作，Guts疯狂轮是全场最有看点的收官环节。四个轮加在一起决定总排名。",
    keyPoints: [
      { label: "Speed", value: "20 题 · 25 分钟" },
      { label: "Accuracy", value: "10 题 · 45 分钟" },
      { label: "Team", value: "15 题 · 60 分钟" },
      { label: "Guts", value: "24 题 · 75 分钟" },
    ],
  },

  {
    id: "speed-round",
    type: "key-points",
    title: "Speed Round · 快速轮",
    subtitle: "25分钟 · 20道题 · 个人赛",
    text: "Speed快速轮是第一轮个人赛。二十五分钟内独立完成二十道题，平均每题只有一分多钟。题目难度循序递增，前几题送分，后几题拉分。这一轮考察的是学生基础扎实度和手速。",
    keyPoints: [
      { label: "时长", value: "25 分钟" },
      { label: "题目数量", value: "20 题" },
      { label: "形式", value: "个人独立作答" },
      { label: "考察", value: "速度加基础" },
    ],
  },

  {
    id: "accuracy-round",
    type: "key-points",
    title: "Accuracy Round · 精准轮",
    subtitle: "45分钟 · 10道题 · 个人赛",
    text: "Accuracy精准轮是第二轮个人赛。四十五分钟内只做十道题，题目明显更难，要求学生静下心慢慢推理。每道题权重大，算错一题就会对总分产生明显影响，考察的是精度和稳定性。",
    keyPoints: [
      { label: "时长", value: "45 分钟" },
      { label: "题目数量", value: "10 题" },
      { label: "单题难度", value: "明显更高" },
      { label: "考察", value: "精度加稳定" },
    ],
  },

  {
    id: "team-round",
    type: "key-points",
    title: "Team Round · 团队轮",
    subtitle: "60分钟 · 15道题 · 4人合作",
    text: "Team团队轮是整场比赛里纯粹的协作环节。一小时内队内四人共同完成十五道题，队员可以自由讨论、分工、相互验证。这一轮考的是团队分工能力和战术选择，也是EMCC的精髓之一。",
    keyPoints: [
      { label: "时长", value: "60 分钟" },
      { label: "题目数量", value: "15 题" },
      { label: "形式", value: "4 人合作" },
      { label: "考察", value: "协作加分工" },
    ],
  },

  {
    id: "guts-round",
    type: "key-points",
    title: "Guts Round · 疯狂轮",
    subtitle: "75分钟 · 24题 · 团队分组拿题",
    text: "Guts疯狂轮是EMCC最具有观赏性的环节。七十五分钟内分六组、每组四道题依次拿题作答。前一组答完才能拿下一组，时间卡得极紧。最后还有Bonus加分环节，是收官之战。",
    keyPoints: [
      { label: "时长", value: "75 分钟" },
      { label: "题目数量", value: "24 题" },
      { label: "分组方式", value: "6 组 × 4 题" },
      { label: "节奏", value: "极紧 加 Bonus" },
    ],
  },

  {
    id: "answer-format",
    type: "key-points",
    title: "答题格式",
    subtitle: "非负整数 · 无选择题",
    text: "EMCC所有题目最终答案都是介于零到一百万之间的非负整数。不设选择题，不设过程分。答对得满分，答错不倒扣。这种格式类似AIME和MOAA，考察的是严密推理和精确计算。",
    keyPoints: [
      { label: "答案类型", value: "非负整数" },
      { label: "答案范围", value: "0 - 1000000" },
      { label: "题型", value: "无选择题" },
      { label: "倒扣", value: "无倒扣" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "全球 8 年级及以下 · 4 人组队",
    text: "EMCC面向全球八年级及以下的中学生开放，国际学生完全平等。一支队伍固定四人，既可以是同校队，也可以跨校组队。国际赛场多数由阿思丹赛事组织承办，国内选手可以在国内直接参赛。",
    keyPoints: [
      { label: "年级", value: "8 年级及以下" },
      { label: "队伍规模", value: "4 人" },
      { label: "国籍", value: "全球开放" },
      { label: "国内通道", value: "阿思丹承办" },
    ],
  },

  {
    id: "online-vs-inperson",
    type: "benefits",
    title: "两种参赛方式",
    subtitle: "线下 埃克塞特校园 + 线上 全球同考",
    text: "EMCC同时提供两种参赛方式。线下在菲利普斯埃克塞特校园的Phillips Hall举行，体验最原汁原味的藤校级赛事氛围。线上考试通过官方平台进行，全球学生同一时区窗口开考，评审标准完全一致。",
    benefits: [
      { icon: "🏫", title: "埃克塞特校园", desc: "线下原场赛" },
      { icon: "💻", title: "线上通道", desc: "全球同题" },
      { icon: "🇨🇳", title: "国内赛场", desc: "阿思丹多城" },
      { icon: "🏆", title: "奖项互认", desc: "三线统一评分" },
    ],
  },

  {
    id: "awards",
    type: "key-points",
    title: "奖项设置",
    subtitle: "个人赛奖 + 团队赛奖 + 高级荣誉",
    text: "EMCC奖项体系包含三档。个人赛方面Speed和Accuracy分别评选高分奖。团队赛方面Team和Guts分别颁团队高分奖。总榜前几名另外颁发Grand Champion大满贯奖，每位获奖选手都有官方证书邮寄。",
    keyPoints: [
      { label: "Speed 个人奖", value: "单轮高分" },
      { label: "Accuracy 个人奖", value: "单轮高分" },
      { label: "Team 团队奖", value: "团队高分" },
      { label: "大满贯", value: "总榜前列" },
    ],
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 EMCC 赛程",
    subtitle: "2026-2027 年度日历（参考往年时间安排）",
    text: "参考往年时间安排，EMCC在每年一月下旬的周末举办一届。今年二零二六的比赛已经在一月完成。明年二零二七报名通常在十一月开启，十二月中下旬报名截止，明年一月下旬开考，国内赛场同步开放。",
    events: [
      { date: "2026年1月", event: "今年比赛已结束" },
      { date: "2026年11月", event: "下届报名开启" },
      { date: "2026年12月中", event: "下届报名截止" },
      { date: "2027年1月底", event: "下届开考日" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "EMCC vs MOAA",
    subtitle: "两大寄宿高中初中数学赛",
    text: "EMCC和MOAA是两场经常被放在一起比的初中数学赛。EMCC由菲利普斯埃克塞特主办，MOAA由菲利普斯安多福主办。两所顶尖寄宿高中，各自用赛事为未来学生做出预筛选。",
    comparison: [
      { aspect: "主办方", left: "埃克塞特 Math Club", right: "安多福 Math Club" },
      { aspect: "创办年份", left: "2011 年", right: "2019 年" },
      { aspect: "最后一轮", left: "Guts 6 组接力", right: "Gunga Bowl 9 组" },
      { aspect: "难度", left: "中上", right: "中上" },
      { aspect: "定位", left: "埃克塞特申请强信号", right: "安多福申请强信号" },
    ],
    leftLabel: "EMCC",
    rightLabel: "MOAA",
  },

  {
    id: "value",
    type: "benefits",
    title: "EMCC 的申请价值",
    subtitle: "顶级寄宿高中申请 · 直接认可",
    text: "EMCC最核心的价值在于美国顶级寄宿高中申请。埃克塞特、安多福、迪尔菲尔德、乔特罗斯玛丽这些寄宿名校招生官，都非常熟悉EMCC。对冲刺这些学校的孩子来说，EMCC获奖是直接有效的加分。",
    benefits: [
      { icon: "🎯", title: "埃克塞特", desc: "招生直接认可" },
      { icon: "🏫", title: "Ten Schools", desc: "美国顶级寄宿" },
      { icon: "🧠", title: "数学能力", desc: "成体系证明" },
      { icon: "👥", title: "团队背景", desc: "申请稀缺点" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "EMCC 在竞赛路径中的位置",
    subtitle: "AMC 8 · MathCounts · EMCC · MOAA",
    text: "国内初中学生建议先从AMC 8和MathCounts打底，春季参加EMCC和MOAA两场寄宿高中主办的团队赛，积累国际赛成绩，九年级之后过渡到AMC 10、AIME、HMMT和MIT主办的高中级别数学赛。",
    pathway: [
      { stage: "AMC 8", desc: "初中入门" },
      { stage: "MathCounts", desc: "国内团队赛" },
      { stage: "EMCC · MOAA", desc: "寄宿高中赛" },
      { stage: "AMC 10 · AIME · HMMT", desc: "高中进阶" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "真题 · 组队 · 分轮训练",
    text: "第一步从EMCC官网下载历届真题，题库可以追溯到二零一一年。第二步提前两个月组建四人队伍，磨合分工。第三步分Speed、Accuracy、Team、Guts四个轮分别做专项训练。第四步限时全真模拟完整四轮。",
    steps: [
      { step: "01", title: "历届真题", desc: "官方 Archive" },
      { step: "02", title: "4 人组队", desc: "提前两个月" },
      { step: "03", title: "分轮训练", desc: "四轮分别练" },
      { step: "04", title: "Guts 冲刺", desc: "节奏控制" },
      { step: "05", title: "全真模考", desc: "四轮连跑" },
      { step: "06", title: "错题复盘", desc: "按板块归类" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "EMCC 是美国顶级寄宿高中的初中数学舞台",
    subtitle: "埃克塞特主办 · 寄宿申请直接加分",
    text: "EMCC是菲利普斯埃克塞特学生主办的初中数学锦标赛，是冲刺美国顶级寄宿高中最直接的数学加分赛之一。想让孩子申请埃克塞特、安多福、Ten Schools的家长，可以重点关注。关注翰林有方获取更多信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取 EMCC 真题与报名规划",
  },
];
