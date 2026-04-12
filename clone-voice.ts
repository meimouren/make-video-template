/**
 * CosyVoice 声音克隆：从参考视频音频中提取音色
 * 运行: npx ts-node clone-voice.ts
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const API_KEY = process.env.DASHSCOPE_API_KEY;
if (!API_KEY) {
  console.error("❌ 请设置环境变量 DASHSCOPE_API_KEY");
  process.exit(1);
}
const CLONE_URL =
  "https://dashscope.aliyuncs.com/api/v1/services/audio/tts/customization";
const TARGET_MODEL = "cosyvoice-v3-flash";

async function cloneVoice(): Promise<void> {
  console.log("=== CosyVoice 声音克隆 ===\n");

  // 读取音频样本，转为 base64 data URI
  const samplePath = resolve(
    "C:/Users/梅奇强/Desktop/技能专家/视频生成/素材/voice_sample.mp3",
  );
  const audioBuffer = readFileSync(samplePath);
  const base64Audio = audioBuffer.toString("base64");
  const dataUri = `data:audio/mp3;base64,${base64Audio}`;

  console.log(`样本文件: ${samplePath}`);
  console.log(`大小: ${(audioBuffer.length / 1024).toFixed(1)} KB`);
  console.log(`目标模型: ${TARGET_MODEL}\n`);

  // 方式 1: 尝试 data URI
  // 方式 2: 如果不支持 data URI，先上传到临时存储
  const response = await fetch(CLONE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "voice-enrollment",
      input: {
        action: "create_voice",
        target_model: TARGET_MODEL,
        prefix: "amcvoice",
        url: dataUri,
        language_hints: ["zh"],
      },
    }),
  });

  const data = await response.json();
  console.log("API 响应:", JSON.stringify(data, null, 2));

  if (data.output?.voice_id) {
    const voiceId = data.output.voice_id;
    console.log(`\n✅ 声音克隆成功！`);
    console.log(`voice_id: ${voiceId}`);

    // 保存 voice_id 到文件
    writeFileSync(
      "voice-clone-id.json",
      JSON.stringify({ voiceId, targetModel: TARGET_MODEL }, null, 2),
    );
    console.log("已保存到 voice-clone-id.json");
  } else {
    console.error("\n❌ 克隆失败:", data.message || data);
  }
}

cloneVoice();
