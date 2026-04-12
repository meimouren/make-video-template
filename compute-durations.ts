/**
 * 计算每段配音的时长，生成 scene-durations.json
 * 运行: npx ts-node compute-durations.ts
 */
import { parseFile } from "music-metadata";
import { writeFileSync, existsSync } from "fs";
import { SCENES, FPS } from "./src/config";

async function main(): Promise<void> {
  console.log("=== 计算音频时长 ===\n");

  const durations: Record<string, number> = {};
  const sceneDurations: number[] = [];

  for (const scene of SCENES) {
    const filePath = `public/voiceover/${scene.id}.mp3`;
    if (!existsSync(filePath)) {
      // 无音频场景固定 3 秒
      const frames = Math.ceil(3 * FPS);
      durations[scene.id] = 3;
      sceneDurations.push(frames);
      console.log(`${scene.id}: 固定 3s → ${frames} frames`);
      continue;
    }

    const metadata = await parseFile(filePath);
    const durationSec = metadata.format.duration || 6;

    // 零空白：音频结束后仅加 0.3 秒缓冲
    const totalSec = durationSec + 0.3;
    const frames = Math.ceil(totalSec * FPS);

    durations[scene.id] = durationSec;
    sceneDurations.push(frames);

    console.log(`${scene.id}: ${durationSec.toFixed(2)}s → ${frames} frames`);
  }

  const output = { durations, sceneDurations };
  writeFileSync("src/scene-durations.json", JSON.stringify(output, null, 2));
  console.log("\n已写入 src/scene-durations.json");
}

main();
