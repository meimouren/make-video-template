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

/**
 * 字幕单条最大字数——确保字幕在底部渲染时不超过 2 行。
 * 当前渲染配置：fontSize=44, maxWidth=960 → 中文每行约 21 字，英文更窄。
 * 保留余量，取 30 字作为阈值。
 */
const MAX_SUBTITLE_CHARS = 30;

function framesToTime(totalFrames: number): string {
  const totalSeconds = totalFrames / FPS;
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  const ms = Math.round((totalSeconds % 1) * 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")},${String(ms).padStart(3, "0")}`;
}

/**
 * 若整句超过阈值，则按逗号/顿号/分号贪心合并切成多段，
 * 每段尽量接近阈值但不超过，保留一个中文逗号作为连接。
 */
function splitLongSentence(sentence: string): string[] {
  if (sentence.length <= MAX_SUBTITLE_CHARS) return [sentence];

  const parts = sentence
    .split(/[，、；]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  if (parts.length <= 1) return [sentence]; // 无可切分点，原样返回

  const chunks: string[] = [];
  let buffer = "";
  for (const part of parts) {
    if (buffer.length === 0) {
      buffer = part;
    } else if (buffer.length + 1 + part.length <= MAX_SUBTITLE_CHARS) {
      buffer = buffer + "，" + part;
    } else {
      chunks.push(buffer);
      buffer = part;
    }
  }
  if (buffer.length > 0) chunks.push(buffer);
  return chunks;
}

/**
 * 将场景 text 切成若干字幕块：
 *   1. 先按句号/问号/感叹号切成句子
 *   2. 对超长句子再按逗号贪心合并，确保每块 ≤ MAX_SUBTITLE_CHARS
 */
function toSubtitleChunks(text: string): string[] {
  const sentences = text
    .split(/[。！？]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const chunks: string[] = [];
  for (const s of sentences) {
    chunks.push(...splitLongSentence(s));
  }
  return chunks;
}

type SubtitleEntry = {
  id: number;
  startFrame: number;
  endFrame: number;
  text: string;
};

function buildSubtitleEntries(): SubtitleEntry[] {
  const entries: SubtitleEntry[] = [];
  let idx = 1;
  let curFrame = 0;

  for (let i = 0; i < SCENES.length; i++) {
    const scene = SCENES[i] as any;
    const duration = sceneDurations[i] || 5 * FPS;

    if (!scene.text || scene.text.trim() === "") {
      curFrame += duration - (i < SCENES.length - 1 ? transitionFrames : 0);
      continue;
    }

    const chunks = toSubtitleChunks(scene.text);
    const totalChars = chunks.reduce((sum, c) => sum + c.length, 0);
    let start = curFrame;

    for (const chunk of chunks) {
      const frames = Math.round((chunk.length / totalChars) * duration);
      entries.push({
        id: idx,
        startFrame: start,
        endFrame: start + frames,
        text: chunk,
      });
      idx++;
      start += frames;
    }

    curFrame += duration - (i < SCENES.length - 1 ? transitionFrames : 0);
  }

  return entries;
}

function main(): void {
  const entries = buildSubtitleEntries();

  // SRT 格式
  const srtLines: string[] = [];
  for (const e of entries) {
    srtLines.push(`${e.id}`);
    srtLines.push(`${framesToTime(e.startFrame)} --> ${framesToTime(e.endFrame)}`);
    srtLines.push(e.text);
    srtLines.push("");
  }
  writeFileSync("public/subtitles.srt", srtLines.join("\n"), "utf-8");

  // JSON 格式（Remotion 读取）
  writeFileSync(
    "src/subtitles.json",
    JSON.stringify(entries, null, 2),
    "utf-8",
  );

  const overLimit = entries.filter((e) => e.text.length > MAX_SUBTITLE_CHARS);
  console.log(`✅ 生成完成！`);
  console.log(`  SRT 文件: public/subtitles.srt （可手动编辑）`);
  console.log(`  JSON 文件: src/subtitles.json （Remotion 读取）`);
  console.log(`  共 ${entries.length} 条字幕（阈值 ${MAX_SUBTITLE_CHARS} 字）`);
  if (overLimit.length > 0) {
    console.log(
      `  ⚠️  ${overLimit.length} 条超过阈值（无可切分标点），最长 ${Math.max(...overLimit.map((e) => e.text.length))} 字`,
    );
  }
  console.log(`\n编辑 src/subtitles.json 后直接渲染即可生效。`);
}

main();
