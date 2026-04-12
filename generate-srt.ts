/**
 * 根据场景配置和音频时长，生成 SRT 字幕文件
 * 你可以手动编辑 public/subtitles.srt 来调整每句字幕
 * 运行: npx ts-node generate-srt.ts
 */
import { writeFileSync, readFileSync } from "fs";
import { SCENES, FPS } from "./src/config";

const durationsData = JSON.parse(
  readFileSync("src/scene-durations.json", "utf-8"),
);
const sceneDurations: number[] = durationsData.sceneDurations;
const transitionFrames = Math.round(0.3 * FPS);

function framesToTime(totalFrames: number): string {
  const totalSeconds = totalFrames / FPS;
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  const ms = Math.round((totalSeconds % 1) * 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
}

function main(): void {
  const lines: string[] = [];
  let index = 1;
  let currentFrame = 0;

  for (let i = 0; i < SCENES.length; i++) {
    const scene = SCENES[i] as any;
    const duration = sceneDurations[i] || 5 * FPS;

    if (!scene.text || scene.text.trim() === "") {
      currentFrame += duration - (i < SCENES.length - 1 ? transitionFrames : 0);
      continue;
    }

    // 按句号拆分
    const sentences = scene.text
      .split(/[。！？]/)
      .filter((s: string) => s.trim().length > 0)
      .map((s: string) => s.trim());

    // 按字数比例分配时间
    const totalChars = sentences.reduce(
      (sum: number, s: string) => sum + s.length,
      0,
    );
    let sentenceStart = currentFrame;

    for (const sentence of sentences) {
      const sentenceFrames = Math.round(
        (sentence.length / totalChars) * duration,
      );
      const startTime = framesToTime(sentenceStart);
      const endTime = framesToTime(sentenceStart + sentenceFrames);

      lines.push(`${index}`);
      lines.push(`${startTime} --> ${endTime}`);
      lines.push(sentence);
      lines.push("");

      index++;
      sentenceStart += sentenceFrames;
    }

    currentFrame +=
      duration - (i < SCENES.length - 1 ? transitionFrames : 0);
  }

  const srtContent = lines.join("\n");
  writeFileSync("public/subtitles.srt", srtContent, "utf-8");

  // 同时生成 JSON 格式（Remotion 更容易读取）
  const jsonLines: Array<{
    id: number;
    startFrame: number;
    endFrame: number;
    text: string;
  }> = [];

  let idx = 1;
  let curFrame = 0;

  for (let i = 0; i < SCENES.length; i++) {
    const scene = SCENES[i] as any;
    const duration = sceneDurations[i] || 5 * FPS;

    if (!scene.text || scene.text.trim() === "") {
      curFrame += duration - (i < SCENES.length - 1 ? transitionFrames : 0);
      continue;
    }

    const sentences = scene.text
      .split(/[。！？]/)
      .filter((s: string) => s.trim().length > 0)
      .map((s: string) => s.trim());

    const totalChars = sentences.reduce(
      (sum: number, s: string) => sum + s.length,
      0,
    );
    let sStart = curFrame;

    for (const sentence of sentences) {
      const sFrames = Math.round((sentence.length / totalChars) * duration);
      jsonLines.push({
        id: idx,
        startFrame: sStart,
        endFrame: sStart + sFrames,
        text: sentence,
      });
      idx++;
      sStart += sFrames;
    }

    curFrame += duration - (i < SCENES.length - 1 ? transitionFrames : 0);
  }

  writeFileSync(
    "src/subtitles.json",
    JSON.stringify(jsonLines, null, 2),
    "utf-8",
  );

  console.log(`✅ 生成完成！`);
  console.log(`  SRT 文件: public/subtitles.srt （可手动编辑）`);
  console.log(`  JSON 文件: src/subtitles.json （Remotion 读取）`);
  console.log(`  共 ${jsonLines.length} 条字幕`);
  console.log(`\n编辑 src/subtitles.json 后直接渲染即可生效。`);
}

main();
