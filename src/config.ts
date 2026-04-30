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
  name: "CAP",
  nameEn: "CAP High School Prize Exam",
  nameCn: "加拿大物理奥林匹克",
  participationData: [
    { year: "2018", value: 3 },
    { year: "2020", value: 3 },
    { year: "2021", value: 4 },
    { year: "2022", value: 4 },
    { year: "2023", value: 4 },
    { year: "2024", value: 5 },
    { year: "2026", value: 5 },
  ],
  participationTitle: "CAP 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是CAP，加拿大物理奥林匹克。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "CAP",
    competitionNameEn: "CAP HS Prize Exam",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "CAP 是什么？",
    subtitle: "加拿大物理学家协会主办的高中物理奥赛",
    text: "CAP，全称CAP High School Prize Exam，由加拿大物理学家协会Canadian Association of Physicists主办的高中物理奥林匹克。它是加拿大物理国家队选拔的入口考试，每年挑选前十五名进入UBC夏令营，最终决出五人代表加拿大出征IPhO国际物理奥赛。",
    openingStats: {
      midLabel: "举办方",
      midValue: "CAP 加物理学会",
      scaleLabel: "年参赛规模",
      scaleValue: "5K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "加拿大物理国家队 · IPhO 入口",
    text: "CAP的稀缺性来自三方面。第一是加拿大物理国家队入口：晋级到UBC夏令营是加拿大顶尖物理学生的标志。第二是申请价值：在加拿大顶尖工程类大学申请中是最硬的物理学背景。第三是国际通道：通向IPhO国际物理奥赛。",
    stats: [
      { value: "CAP", label: "物理学家协会主办" },
      { value: "前 15", label: "晋级 UBC" },
      { value: "5 人", label: "国家队规模" },
      { value: "IPhO", label: "通往国际赛" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "CAP 核心定位",
    subtitle: "加拿大物理国家队选拔考试",
    text: "CAP的核心定位是加拿大本土最权威的高中物理奥林匹克。每年由全国各省加拿大物理学家协会分支组织当地高中举办考试。题目难度对标AP Physics C或更高，覆盖力学、电磁学、热学、近代物理等高中物理全板块。",
    highlights: ["CAP 主办", "国家队选拔", "全板块物理", "4 月考试", "IPhO 通道"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 加拿大物理学家协会",
    subtitle: "Canadian Association of Physicists",
    text: "CAP全称Canadian Association of Physicists，加拿大物理学家协会，是加拿大物理学界最具权威性的学术组织。CAP高中物理奖学金考试是该协会面向中学生的旗舰项目。UBC不列颠哥伦比亚大学物理与天文学系负责承办夏令营和国家队训练。",
    benefits: [
      { icon: "", title: "CAP 主办", desc: "物理权威" },
      { icon: "", title: "UBC 训练", desc: "国家队营地" },
      { icon: "", title: "省级承办", desc: "全国分赛" },
      { icon: "", title: "IPhO 选拔", desc: "国际通道" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "学校组织 · 全板块物理 · 选择加自由响应",
    text: "CAP的考试由各地学校在校内组织，监考由教师承担，每年通常在四月初的某个工作日。题型包含选择题和自由响应题两部分，覆盖高中物理全板块。考试通常一天内完成。",
    keyPoints: [
      { label: "考试日", value: "每年 4 月" },
      { label: "组织方", value: "学校教师" },
      { label: "题型", value: "选择加自由响应" },
      { label: "覆盖", value: "物理全板块" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "晋级机制",
    subtitle: "前 15 名 → UBC 夏令营 → 5 人国家队",
    text: "CAP的晋级路径清晰。考试结束两周后批改完成，前十五名学生收到UBC训练营邀请。训练营在五月十七到二十三日在UBC校园举行。营地最后一天选出五人代表加拿大出征IPhO。该路径每年稳定运作。",
    keyPoints: [
      { label: "前 15", value: "UBC 营地邀请" },
      { label: "营期", value: "5 月 17-23 日" },
      { label: "国家队", value: "5 人代表" },
      { label: "IPhO", value: "7 月国际赛" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "加拿大全日制高中 · 加籍或永居",
    text: "CAP的参赛资格相对严格。学生必须是加拿大全日制高中或CEGEP的在读学生、加拿大公民或永久居民、IPhO竞赛日前未满二十岁。这意味着国内学生需要在加拿大就读高中才能参加CAP正式选拔。",
    keyPoints: [
      { label: "学校", value: "加拿大全日制高中" },
      { label: "身份", value: "加籍或永居" },
      { label: "年龄", value: "未满 20 岁" },
      { label: "学段", value: "高中" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "CAP 的申请价值",
    subtitle: "加拿大顶尖大学 · 物理国家队信号",
    text: "对中国家长而言，CAP的价值首先在加拿大方向：CAP奖项在多伦多大学、UBC、麦吉尔等加拿大顶尖大学物理工程申请中是最硬的物理学背景。其次是国家队潜力：晋级前十五是加拿大顶尖物理学生标志。第三是IPhO通道：从CAP到国家队再到国际奥赛的清晰路径。",
    benefits: [
      { icon: "", title: "加拿大顶尖", desc: "U of T UBC" },
      { icon: "", title: "国家队信号", desc: "前 15 标志" },
      { icon: "", title: "IPhO 通道", desc: "国际方向" },
      { icon: "", title: "学术加分", desc: "工程申请" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "CAP vs F=ma",
    subtitle: "加美两国家队选拔赛对比",
    text: "CAP和F等于ma是加美两国通往物理国家队的入口考试。CAP由加拿大物理学家协会主办、限定加拿大学生参加；F等于ma由AAPT主办、限定美国学生参加。两者的晋级路径都通向各自国家的IPhO国家队，但完全独立。",
    comparison: [
      { aspect: "主办方", left: "CAP 加拿大", right: "AAPT 美国" },
      { aspect: "学生身份", left: "加籍或在加", right: "美籍或在美" },
      { aspect: "考试时间", left: "4 月", right: "2 月" },
      { aspect: "题型", left: "选择加自由响应", right: "纯选择" },
      { aspect: "国家队规模", left: "5 人", right: "5 人" },
    ],
    leftLabel: "CAP",
    rightLabel: "F=ma",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 CAP 赛程",
    subtitle: "2026 赛季已确定",
    text: "CAP二零二六赛季时间已经确定。考试日为四月八日，由各高中在校内组织。两周后即四月二十二日前后公布前十五名晋级名单。UBC夏令营五月十七到二十三日。IPhO在七月四到十二日于哥伦比亚布卡拉曼加举行。",
    events: [
      { date: "2026 年 4 月 8 日", event: "CAP 考试日" },
      { date: "2026 年 4 月底", event: "前 15 晋级公布" },
      { date: "2026 年 5 月 17-23 日", event: "UBC 训练营" },
      { date: "2026 年 7 月 4-12 日", event: "IPhO 哥伦比亚" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "CAP 在物理路径中的位置",
    subtitle: "加拿大物理国家队晋级阶梯",
    text: "国内在加拿大就读的物理学生路径建议是先以SIN作为高中入门测评，进而冲CAP奖学金考试，前十五名进入UBC训练营，最终五人代表加拿大出征IPhO国际物理奥赛。整条路径每年稳定运作。",
    pathway: [
      { stage: "SIN", desc: "Waterloo 入门" },
      { stage: "CAP", desc: "前 15 晋级" },
      { stage: "UBC 训练营", desc: "国家队选拔" },
      { stage: "IPhO 国际赛", desc: "5 人代表" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "AP Physics C · 历届真题 · 自由响应训练",
    text: "第一步同步AP Physics C或加拿大十二年级物理课程。第二步从CAP官网获取近十年真题。第三步每周做一套完整真题，限时与考试一致。第四步重点训练自由响应题，是CAP和Physics Bowl这类纯选择题最大的不同。第五步赛前两周加强电磁学和近代物理板块。",
    steps: [
      { step: "01", title: "AP Physics C", desc: "课程基础" },
      { step: "02", title: "近十年真题", desc: "CAP 官网" },
      { step: "03", title: "限时套题", desc: "每周一套" },
      { step: "04", title: "自由响应", desc: "重点训练" },
      { step: "05", title: "弱项专项", desc: "电磁加近代" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "CAP 是加拿大物理国家队的入口考试",
    subtitle: "CAP 主办 · IPhO 通道 · 加拿大顶尖大学认可",
    text: "CAP是加拿大物理学家协会主办的高中物理奥林匹克，是加拿大物理国家队选拔的入门考试，通往UBC夏令营和IPhO国际物理奥赛。对在加拿大就读高中、志在物理工程方向的学生家庭来说，CAP是必选项。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
