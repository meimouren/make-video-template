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
  name: "BAAO",
  nameEn: "British Astronomy and Astrophysics Olympiad",
  nameCn: "英国天文学和天体物理学奥林匹克",
  participationData: [
    { year: "2018", value: 1 },
    { year: "2020", value: 1 },
    { year: "2021", value: 2 },
    { year: "2022", value: 2 },
    { year: "2023", value: 3 },
    { year: "2024", value: 3 },
    { year: "2026", value: 3 },
  ],
  participationTitle: "BAAO 历年参赛规模（千人）",
  participationUnit: "千人",
};

export const SCENES = [
  {
    id: "cover",
    type: "cover",
    text: "每天介绍一个国际竞赛，今天要介绍的是BAAO，英国天文学和天体物理学奥林匹克。",
    seriesName: "每天介绍一个国际竞赛",
    competitionName: "BAAO",
    competitionNameEn: "British Astro Astrophysics",
    episodeTag: "翰林有方 · 国际竞赛系列",
  },

  {
    id: "opening-1",
    type: "opening-chart",
    title: "BAAO 是什么？",
    subtitle: "牛津主办 · 英国 IOAA 国家队选拔赛",
    text: "BAAO，全称British Astronomy and Astrophysics Olympiad，中文译为英国天文学和天体物理学奥林匹克。由牛津大学物理系British Physics Olympiad Trust运营，是英国通往IOAA国际天文与天体物理奥赛的官方选拔通道。",
    openingStats: {
      midLabel: "举办方",
      midValue: "Oxford BPhO Trust",
      scaleLabel: "年参赛规模",
      scaleValue: "3K+",
    },
  },

  {
    id: "opening-2",
    type: "opening-stats",
    title: "为什么受家长关注？",
    subtitle: "天体物理稀缺方向 · 牛剑申请加分",
    text: "BAAO的稀缺性来自三方面。第一是赛道独特：天文物理是物理学中较稀缺的细分方向，简历差异化强。第二是牛津背书：BPhO Trust运营，权威认可度高。第三是国家队通道：通向IOAA国际天文奥赛，五人代表英国队。",
    stats: [
      { value: "Oxford", label: "牛津主办" },
      { value: "IOAA", label: "通往国际赛" },
      { value: "Year 12-13", label: "高中后期" },
      { value: "5 人", label: "国家队规模" },
    ],
  },

  {
    id: "what-is",
    type: "title-card",
    title: "BAAO 核心定位",
    subtitle: "高中后期 · 天文物理 · 牛剑申请稀缺背景",
    text: "BAAO的核心定位是面向高中后期学生的天文物理选拔赛。题目融合物理基础和天文知识，包括观测天文学、轨道力学、恒星物理、宇宙学等专业板块。是BPhO Trust旗下专门面向天体方向的子赛事。",
    highlights: ["BPhO 系列", "天体物理", "Year 12-13", "选拔赛", "IOAA 通道"],
  },

  {
    id: "host",
    type: "benefits",
    title: "主办方 BPhO Trust",
    subtitle: "British Physics Olympiad Trust · 牛津运营",
    text: "BAAO由British Physics Olympiad Trust运营，与BPhO是同一个母体组织。BPhO Trust成立于一九七九年，已运营英国物理类奥林匹克四十多年。BAAO作为天体物理分支专门面向IOAA国际天文奥赛选拔。",
    benefits: [
      { icon: "", title: "BPhO Trust", desc: "牛津运营" },
      { icon: "", title: "1979 创建", desc: "47 年传统" },
      { icon: "", title: "BAAO 分支", desc: "天体专项" },
      { icon: "", title: "IOAA 选拔", desc: "国际方向" },
    ],
  },

  {
    id: "format",
    type: "key-points",
    title: "比赛格式",
    subtitle: "10 道选择 + 短题 + 长题 · 三段制",
    text: "BAAO的考试结构由三部分组成。十道选择题，覆盖观测天文、近期天文新闻等基础。两道五分短题。再加一道十分长题，从两题中二选一作答。整套试卷综合考察天体物理直觉和深度推理。",
    keyPoints: [
      { label: "Section 1", value: "10 选择题" },
      { label: "Section 2", value: "2 短题 5 分" },
      { label: "Section 3", value: "1 长题 10 分" },
      { label: "总分", value: "约 30 分" },
    ],
  },

  {
    id: "scoring",
    type: "key-points",
    title: "晋级与奖项",
    subtitle: "金银铜证书 · 通往 IOAA 国家队",
    text: "BAAO的成绩按全球排名颁发。Gold金奖、Silver银奖、Bronze铜奖三级证书。表现突出的高分选手会受邀参加复活节训练营在牛津举行，最终选出五名学生代表英国出征IOAA国际天文与天体物理奥赛。",
    keyPoints: [
      { label: "Gold", value: "金奖证书" },
      { label: "Silver", value: "银奖证书" },
      { label: "Bronze", value: "铜奖证书" },
      { label: "国家队", value: "复活节牛津营" },
    ],
  },

  {
    id: "eligibility",
    type: "key-points",
    title: "参赛资格",
    subtitle: "Year 12-13 主体 · GCSE 学生可挑战",
    text: "BAAO主要面向英国Year 12和Year 13学生开放，相当于高三和高二阶段。GCSE阶段的学生也可以挑战，但题目难度对低年级偏高。考试不假设学生学过专门的天文模块，所有问题从基础物理推导。",
    keyPoints: [
      { label: "主要学段", value: "Year 12-13" },
      { label: "GCSE", value: "可挑战" },
      { label: "前置知识", value: "无需天文专业" },
      { label: "国内通道", value: "阿思丹承办" },
    ],
  },

  {
    id: "value",
    type: "benefits",
    title: "BAAO 的申请价值",
    subtitle: "天体物理差异化 · 牛剑稀缺背景",
    text: "对中国家长而言，BAAO的价值首先在赛道稀缺：天文物理在国内学生申请背景中明显少于纯物理或数学。其次是牛剑认可：BPhO Trust运营，在英国G5物理工程申请中获得高度认可。第三是IOAA通道：是通往国际天文奥赛的英国官方路径。",
    benefits: [
      { icon: "", title: "赛道稀缺", desc: "天体差异化" },
      { icon: "", title: "牛剑认可", desc: "G5 加分" },
      { icon: "", title: "IOAA 通道", desc: "国际方向" },
      { icon: "", title: "学术深度", desc: "天体物理" },
    ],
  },

  {
    id: "comparison",
    type: "comparison",
    title: "BAAO vs BPhO Round 1",
    subtitle: "天体物理 vs 综合物理对比",
    text: "BAAO和BPhO Round 1是BPhO Trust旗下两个并列的高级竞赛。BPhO Round 1覆盖物理全板块、为IPhO选拔；BAAO专注天文物理、为IOAA选拔。两者都面向Year 12-13学生，可以同时参加。",
    comparison: [
      { aspect: "覆盖范围", left: "天体物理专项", right: "物理全板块" },
      { aspect: "考试日", left: "12 月 1 月", right: "11 月" },
      { aspect: "国际通道", left: "IOAA", right: "IPhO" },
      { aspect: "稀缺度", left: "高", right: "中" },
      { aspect: "国家队", left: "5 人", right: "5 人" },
    ],
    leftLabel: "BAAO",
    rightLabel: "BPhO Round 1",
  },

  {
    id: "calendar",
    type: "calendar",
    title: "下一届 BAAO 赛程",
    subtitle: "2025-2026 赛季时间表",
    text: "BAAO二零二五到二零二六赛季时间已经公布。Astro Challenge入门挑战在二零二五年九月到十二月十三日。Round 1正式赛在二零二五年十二月二日。Round 2进阶赛在二零二六年一月二十七日。复活节训练营在二零二六年四月在牛津举行。",
    events: [
      { date: "2025 年 12 月 2 日", event: "Round 1 正赛" },
      { date: "2026 年 1 月 27 日", event: "Round 2 进阶赛" },
      { date: "2026 年 4 月", event: "复活节牛津训练营" },
      { date: "2026 年 8 月", event: "IOAA 国际赛" },
    ],
  },

  {
    id: "progression",
    type: "progression",
    title: "BAAO 在物理路径中的位置",
    subtitle: "天体物理国际奥赛阶梯",
    text: "国内学生进入天体物理竞赛体系建议是先打好A-Level或IB物理基础，参加BAAO Astro Challenge入门，再冲BAAO Round 1选拔，进入Round 2进阶，最终竞争IOAA国际天文与天体物理奥赛的英国国家队席位。",
    pathway: [
      { stage: "A-Level 或 IB 物理", desc: "课程基础" },
      { stage: "Astro Challenge", desc: "入门挑战" },
      { stage: "BAAO Round 1 加 Round 2", desc: "选拔进阶" },
      { stage: "IOAA 国际赛", desc: "5 人国家队" },
    ],
  },

  {
    id: "prep",
    type: "prep-steps",
    title: "备考策略",
    subtitle: "天体物理基础 · 历届真题 · 长题训练",
    text: "第一步阅读天体物理入门教材，重点是开普勒定律、轨道力学、恒星演化、宇宙学基础。第二步从BPhO官网下载近五年BAAO真题。第三步每周做一套限时模拟。第四步重点训练长题和论述题，是BAAO拉分大户。第五步赛前两周关注当年天文新闻。",
    steps: [
      { step: "01", title: "天体基础", desc: "教材入门" },
      { step: "02", title: "近五年真题", desc: "BPhO 官网" },
      { step: "03", title: "限时模拟", desc: "每周一套" },
      { step: "04", title: "长题专项", desc: "拉分关键" },
      { step: "05", title: "天文新闻", desc: "考前两周" },
    ],
  },

  {
    id: "closing",
    type: "closing",
    title: "BAAO 是英国通往 IOAA 的天体物理奥赛",
    subtitle: "BPhO Trust 主办 · 牛剑认可 · 赛道稀缺",
    text: "BAAO是英国最权威的高中天体物理选拔赛，由BPhO Trust牛津运营，是英国通往IOAA国际天文与天体物理奥赛的官方通道。对希望在物理领域走天体方向、积累稀缺申请背景的学生家庭来说，BAAO值得重点关注。关注翰林有方获取更多国际竞赛信息。",
    ctaText: "关注翰林有方",
    ctaSubtext: "获取国际竞赛资讯",
  },
];
