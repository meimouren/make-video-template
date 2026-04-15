/**
 * 生成短视频平台发布文案（标题+正文+标签）
 * 运行: npx ts-node generate-copy.ts
 */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { SCENES } from "./src/config";

// 学科检测：按竞赛名称和标题中的关键词判断，避免内容中的误匹配
const SUBJECT_RULES: Array<{ patterns: string[]; tags: string[] }> = [
  { patterns: ["化学奥", "化学竞赛", "Chemistry Olympiad", "化学奥赛", "UKChO", "化学挑战"], tags: ["化学竞赛", "化学"] },
  { patterns: ["物理奥", "物理竞赛", "Physics Challenge", "Physics Olympiad", "物理奥赛", "BPhO", "IPC", "SPC", "CAP"], tags: ["物理竞赛", "物理"] },
  { patterns: ["数学竞赛", "数学奥", "Mathematics Competition", "Math Olympiad", "AMC", "Euclid", "AIME"], tags: ["数学竞赛", "数学"] },
  { patterns: ["生物奥", "生物竞赛", "Biology Olympiad", "BBO", "USABO"], tags: ["生物竞赛", "生物"] },
  { patterns: ["投资挑战", "商赛", "Investment Challenge", "SIC", "KWHS"], tags: ["商赛", "投资", "金融"] },
  { patterns: ["经济学", "Economics"], tags: ["商赛", "经济", "金融"] },
  { patterns: ["计算机", "信息学", "编程", "Informatics", "USACO"], tags: ["编程竞赛", "计算机"] },
  { patterns: ["写作", "Writing"], tags: ["写作竞赛", "英语"] },
  { patterns: ["辩论", "Debate", "模联", "Model UN"], tags: ["辩论赛", "演讲"] },
];

function detectSubjectTags(coverText: string, allText: string): string[] {
  // 优先从封面和标题文案判断
  const combined = coverText + " " + allText.slice(0, 500);
  for (const rule of SUBJECT_RULES) {
    if (rule.patterns.some((p) => combined.includes(p))) {
      return rule.tags;
    }
  }
  return ["学科竞赛"];
}

function main(): void {
  const cover = SCENES.find((s) => (s as any).type === "cover") as any;
  const name = cover?.competitionName || "竞赛";

  // 提取中文竞赛名（匹配"挑战赛"、"竞赛"、"奥赛"等）
  const cnMatch = cover?.text?.match(/[，,]([^，,。！？]+(竞赛|挑战赛|奥赛|奥林匹克))/);
  const nameCn = cnMatch ? cnMatch[1] : name;

  // 学科检测：封面文案+前500字
  const coverText = cover?.text || "";
  const allText = SCENES.map((s) => s.text || "").join("");
  const subjectTags = detectSubjectTags(coverText, allText);

  // 提取核心信息
  const highlights: string[] = [];
  for (const scene of SCENES) {
    if (!scene.text || scene.text.trim() === "") continue;
    const type = (scene as any).type;
    if (type === "cover" || type === "closing") continue;
    const first = scene.text.split(/[。！？]/)[0]?.trim();
    if (first && first.length > 10) {
      highlights.push(first);
    }
    if (highlights.length >= 2) break;
  }

  const title = `每天介绍一个国际竞赛-${nameCn}！`;
  const body = highlights.join("，") + "。";

  const rawTags = [
    name,
    nameCn,
    "国际竞赛",
    ...subjectTags,
    "留学申请",
    "名校认可",
    "竞赛备考",
    "升学规划",
  ].filter((t) => t.length > 0);
  const tags = [...new Set(rawTags)].map((t) => `#${t}`).join(" ");

  const output = `${title}\n${body}\n${tags}`;

  console.log(output);

  const dir = "out/发布文案";
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const fileName = title.replace(/[！!？?]/g, "").trim();
  const filePath = `${dir}/${fileName}.txt`;
  writeFileSync(filePath, output, "utf-8");
  console.log(`\n✅ 已保存到 ${filePath}`);
}

main();
