/**
 * 生成短视频平台发布文案（标题+正文+标签）
 * 运行: npx ts-node generate-copy.ts
 */
import { writeFileSync } from "fs";
import { SCENES } from "./src/config";

function main(): void {
  const cover = SCENES.find((s) => (s as any).type === "cover") as any;
  const name = cover?.competitionName || "竞赛";
  const nameEn = cover?.competitionNameEn || "";

  // 从文案中提取中文竞赛名
  const cnMatch = cover?.text?.match(/[，,]([^，,。！？]+竞赛)/);
  const nameCn = cnMatch ? cnMatch[1] : name;

  // 提取关键信息（去掉封面和结语）
  const keyFacts: string[] = [];
  for (const scene of SCENES) {
    if (!scene.text || scene.text.trim() === "") continue;
    const type = (scene as any).type;
    if (type === "cover" || type === "closing") continue;
    const first = scene.text.split(/[。！？]/)[0]?.trim();
    if (first && first.length > 8 && first.length < 50) {
      keyFacts.push(first);
    }
    if (keyFacts.length >= 6) break;
  }

  // 标题（从内容主题提炼，20字以内）
  const titles = [
    `${nameCn}全面解析｜考试规则+备考攻略`,
    `${name}竞赛到底考什么？一次讲透`,
    `${nameCn}考试形式、评分、备赛全攻略`,
    `一个视频搞懂${nameCn}`,
  ].filter((t) => t.length <= 22);

  // 标签（去重）
  const rawTags = [
    name,
    nameCn,
    nameEn.split(" ")[0] || "",
    "国际竞赛",
    "数学竞赛",
    "留学申请",
    "名校认可",
    "竞赛备考",
    "升学规划",
  ].filter((t) => t.length > 0);
  const uniqueTags = [...new Set(rawTags)];

  const output = `========================================
  短视频发布文案 — ${nameCn}
========================================

【推荐标题】
${titles.map((t, i) => `  ${i + 1}. ${t}`).join("\n")}

【正文】
${keyFacts.map((f) => `· ${f}`).join("\n")}

【标签】
${uniqueTags.map((t) => `#${t}`).join(" ")}

========================================`;

  console.log(output);
  writeFileSync("out/发布文案.txt", output, "utf-8");
  console.log("\n\n✅ 已保存到 out/发布文案.txt");
}

main();
