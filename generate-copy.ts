/**
 * 生成短视频平台发布文案（标题+正文+标签）
 * 运行: npx ts-node generate-copy.ts
 */
import { writeFileSync } from "fs";
import { SCENES } from "./src/config";

function main(): void {
  const cover = SCENES.find((s) => (s as any).type === "cover") as any;
  const name = cover?.competitionName || "竞赛";

  const cnMatch = cover?.text?.match(/[，,]([^，,。！？]+竞赛)/);
  const nameCn = cnMatch ? cnMatch[1] : name;

  // 从文案中提取核心信息
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
    name, nameCn, "国际竞赛", "数学竞赛", "留学申请",
    "名校认可", "竞赛备考", "升学规划",
  ].filter((t) => t.length > 0);
  const tags = [...new Set(rawTags)].map((t) => `#${t}`).join(" ");

  const output = `${title}\n${body}\n${tags}`;

  console.log(output);
  writeFileSync("out/发布文案.txt", output, "utf-8");
  console.log("\n\n✅ 已保存到 out/发布文案.txt");
}

main();
