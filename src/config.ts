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
  name: "IAAC",
  nameEn: "International Astronomy and Astrophysics Competition",
  nameCn: "国际天文学和天体物理学挑战",
  participationData: [
    { year: "2018", value: 5 },
    { year: "2020", value: 8 },
    { year: "2021", value: 12 },
    { year: "2022", value: 15 },
    { year: "2023", value: 18 },
    { year: "2024", value: 22 },
    { year: "2026", value: 25 },
  ],
  participationTitle: "IAAC 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是IAAC，国际天文学和天体物理学挑战。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "IAAC",
    competitionNameEn: "Intl Astro Astrophysics",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "IAAC 是什么？",
    subtitle: "全球纯线上的天文与天体物理挑战赛",
    text: "IAAC，全称International Astronomy and Astrophysics Competition，中文译为国际天文学和天体物理学挑战。这是一项纯线上的全球性天文奥赛，对中学和大学生都开放，由国际天文与天体物理委员会运营，每年吸引来自一百多个国家的学生参加。",
    openingStats: {
      midLabel: "举办形式",
      midValue: "纯线上",
      scaleLabel: "年参赛规模",
      scaleValue: "25K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "天文奥赛入门 · 全球前列奖学金 · 三轮制",
    text: "IAAC的稀缺性来自三方面。第一是入门友好：纯线上、按年级分Junior、Youth、Senior三档，参赛门槛低。第二是国际化：来自一百多国学生同台。第三是奖项含金量：总奖金两千五百美金，包括宇航员和诺贝尔奖得主签名望远镜。",
    stats: [
      { value: "100+", label: "国家参赛" },
      { value: "3 轮", label: "晋级制" },
      { value: "$2500", label: "奖金池" },
      { value: "线上", label: "形式友好" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "IAAC 核心定位",
    subtitle: "中学到大学 · 天文物理 · 三档分级",
    text: "IAAC的核心定位是纯线上的全球性天文与天体物理竞赛。按年龄分Junior十四岁以下、Youth十四到十八岁、Senior十八岁以上三档，每档独立题目和独立排名。覆盖天文学、天体物理学、宇宙学的核心知识点。",
    highlights: ["纯线上", "三档分级", "全年龄", "100+ 国", "签名望远镜奖"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 IAAC 国际理事会",
    subtitle: "International Astronomy Astrophysics Committee",
    text: "IAAC由国际天文与天体物理委员会IAAC运营，是一个由各国天文教育者组成的非营利组织。该组织专注于推广天文物理科普教育，IAAC是其旗舰赛事。比赛获奖者有机会获得宇航员Frank De Winne和诺贝尔奖得主签名的望远镜实物奖品。",
    benefits: [
      { icon: "", title: "IAAC 理事会", desc: "非营利运营" },
      { icon: "", title: "宇航员签名", desc: "实物奖品" },
      { icon: "", title: "诺奖签名", desc: "纪念望远镜" },
      { icon: "", title: "全球开放", desc: "纯线上" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "三轮线上 · 资格赛 + 准决赛 + 决赛",
    text: "IAAC的赛制由三轮组成。资格赛Qualification Round是五道天文题；通过后进入准决赛Pre-Final Round约四到五天答题窗口；最后是决赛Final Round二十道选择题、由学校教师监考的线上考试。整个赛事完全在线进行。",
    keyPoints: [
      { label: "资格赛", value: "5 道天文题" },
      { label: "准决赛", value: "4-5 天窗口" },
      { label: "决赛", value: "20 题在线" },
      { label: "监考", value: "学校教师" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "晋级与奖项",
    subtitle: "分档分级 · 三轮各有门槛",
    text: "IAAC的晋级机制按档次设置门槛。Junior需在资格赛拿到至少十五分、Youth十七分、Senior二十分晋级准决赛。准决赛通过后进入决赛。最终全球前列学生获奖金、签名望远镜及证书。",
    keyPoints: [
      { label: "Junior 门槛", value: "≥15/20" },
      { label: "Youth 门槛", value: "≥17/20" },
      { label: "Senior 门槛", value: "≥20/20" },
      { label: "终极奖项", value: "签名望远镜" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "Junior · Youth · Senior 三档",
    text: "IAAC按年龄分三档参赛。Junior面向十四岁以下学生，对应国内小学和初中阶段。Youth面向十四到十八岁，对应国内高中阶段。Senior面向十八岁以上，包括大学和研究生。每档独立题目，按年龄段公平比较。",
    keyPoints: [
      { label: "Junior", value: "<14 岁 · 中小学" },
      { label: "Youth", value: "14-18 岁 · 高中" },
      { label: "Senior", value: ">18 岁 · 大学" },
      { label: "形式", value: "全球线上" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "IAAC 的申请价值",
    subtitle: "天文兴趣证明 · 国际化 · 奖品稀缺",
    text: "对中国家长而言，IAAC的价值在三方面。第一是天文兴趣的可量化证明：是国内最容易接触的天文奥赛之一。第二是国际化背景：和一百多国学生同台对标。第三是奖品稀缺性：宇航员和诺奖得主签名望远镜在中学生奖项中极为罕见，是有故事感的申请加分点。",
    benefits: [
      { icon: "", title: "天文兴趣", desc: "可量化证明" },
      { icon: "", title: "国际化", desc: "100+ 国对比" },
      { icon: "", title: "奖品稀缺", desc: "签名望远镜" },
      { icon: "", title: "线上友好", desc: "国内可参赛" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "IAAC vs BAAO",
    subtitle: "国际线上 vs 英国选拔",
    text: "IAAC和BAAO是两种不同性质的天文物理赛事。IAAC由国际天文物理委员会运营、纯线上、面向全球Junior到Senior多档；BAAO由牛津BPhO Trust运营、面向英国Year 12-13、是IOAA国家队选拔。两者目标受众和申请价值不同，可以并行参加。",
    comparison: [
      { aspect: "主办方", left: "国际理事会", right: "Oxford 牛津" },
      { aspect: "形式", left: "纯线上", right: "线下纸笔" },
      { aspect: "年龄", left: "三档全覆盖", right: "Year 12-13" },
      { aspect: "奖项", left: "签名望远镜", right: "国家队席位" },
      { aspect: "申请方向", left: "国际通用", right: "英国 G5" },
    ],
    leftLabel: "IAAC",
    rightLabel: "BAAO",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 IAAC 赛程",
    subtitle: "2026 赛季时间表",
    text: "IAAC二零二六赛季时间已公布。资格赛截止日为四月十七日UTC时间下午十一点五十九分。准决赛在五月二十九日发题，到六月二日前完成。决赛在五月底六月初由学校监考。最终成绩在六月底公布。",
    events: [
      { date: "2026 年 4 月 17 日", event: "资格赛截止" },
      { date: "2026 年 5 月 29 日", event: "准决赛发题" },
      { date: "2026 年 6 月 2 日", event: "准决赛截止" },
      { date: "2026 年 6 月底", event: "成绩公布" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "IAAC 在物理路径中的位置",
    subtitle: "天文物理入门兴趣赛事",
    text: "国内学生的天文物理路径建议是先以IAAC作为入门兴趣赛积累天文基础，进而向系统化的BAAO BPhO Round 1等深度挑战推进，最终冲刺IOAA国际天文与天体物理奥赛和IPhO国际物理奥赛。IAAC的入门门槛低，是天文兴趣的最好起点。",
    pathway: [
      { stage: "IAAC Junior 或 Youth", desc: "天文入门" },
      { stage: "BAAO 加 BPhO", desc: "深度挑战" },
      { stage: "IOAA 加 IPhO", desc: "国际奥赛" },
      { stage: "天文物理研究", desc: "大学方向" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "天文基础 · 历届真题 · 时区适应",
    text: "第一步阅读基础天文学和天体物理学入门教材，重点是开普勒定律、恒星演化、星系、宇宙学。第二步从IAAC官网获取近三年资格赛真题。第三步限时做完整套题。第四步关注当年天文新闻热点。第五步注意时区，IAAC按UTC时间，国内对应北京时间提前安排。",
    steps: [
      { step: "01", title: "天文入门", desc: "教材基础" },
      { step: "02", title: "近三年真题", desc: "IAAC 官网" },
      { step: "03", title: "限时套题", desc: "模拟训练" },
      { step: "04", title: "天文新闻", desc: "考前热点" },
      { step: "05", title: "时区适应", desc: "UTC 转北京" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "IAAC 是全球开放的纯线上天文挑战",
    subtitle: "全球开放 · 三档分级 · 签名望远镜奖品",
    text: "IAAC是国际天文与天体物理委员会运营的全球性纯线上挑战赛，按年龄分三档面向中小学到大学全阶段学生。对家有对天文物理感兴趣的孩子来说，IAAC是最容易接触的国际天文奥赛入口。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
