/**
 * 生成短视频平台发布文案（标题+正文+标签）
 * 运行: npx ts-node generate-copy.ts
 */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { SCENES } from "./src/config";

// 学科关键词映射
const SUBJECT_TAGS: Record<string, string[]> = {
  物理: ["物理竞赛", "物理"],
  数学: ["数学竞赛", "数学"],
  化学: ["化学竞赛", "化学"],
  生物: ["生物竞赛", "生物"],
  经济: ["商赛", "经济", "金融"],
  投资: ["商赛", "投资", "金融"],
  金融: ["商赛", "金融"],
  计算机: ["编程竞赛", "计算机"],
  信息: ["信息学竞赛", "编程"],
  写作: ["写作竞赛", "英语"],
  辩论: ["辩论赛", "演讲"],
};

function detectSubjectTags(allText: string): string[] {
  for (const [keyword, tags] of Object.entries(SUBJECT_TAGS)) {
    if (allText.includes(keyword)) {
      return tags;
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

  // 合并所有文案用于学科检测
  const allText = SCENES.map((s) => s.text || "").join("");
  const subjectTags = detectSubjectTags(allText);

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
