/**
 * 使用阿里百炼 CosyVoice TTS (WebSocket) 生成配音
 * 运行: npx ts-node generate-voiceover.ts
 */
import WebSocket from "ws";
import { writeFileSync, existsSync, mkdirSync, createWriteStream } from "fs";
import { v4 as uuid } from "uuid";
import { SCENES } from "./src/config";

const API_KEY = process.env.DASHSCOPE_API_KEY;
if (!API_KEY) {
  console.error("❌ 请设置环境变量 DASHSCOPE_API_KEY");
  console.error("   Windows: set DASHSCOPE_API_KEY=sk-xxx");
  console.error("   Mac/Linux: export DASHSCOPE_API_KEY=sk-xxx");
  process.exit(1);
}
const WS_URL = "wss://dashscope.aliyuncs.com/api-ws/v1/inference/";

// 使用克隆音色 — 从参考视频提取的年轻男声
const VOICE = "cosyvoice-v3-flash-amcvoice-44d14163400c4610af94ea79715540ae";
const MODEL = "cosyvoice-v3-flash";

function synthesize(sceneId: string, text: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const outputDir = "public/voiceover";
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = `${outputDir}/${sceneId}.mp3`;

    if (existsSync(outputPath)) {
      console.log(`[跳过] ${sceneId}.mp3 已存在`);
      resolve();
      return;
    }

    console.log(`[生成] ${sceneId}: "${text.slice(0, 30)}..."`);

    const taskId = uuid();
    const chunks: Buffer[] = [];

    const ws = new WebSocket(WS_URL, {
      headers: {
        Authorization: `bearer ${API_KEY}`,
        "X-DashScope-DataInspection": "enable",
      },
    });

    const timeout = setTimeout(() => {
      ws.close();
      reject(new Error(`${sceneId}: WebSocket 超时`));
    }, 60000);

    ws.on("open", () => {
      // Step 1: run-task
      ws.send(
        JSON.stringify({
          header: {
            action: "run-task",
            task_id: taskId,
            streaming: "duplex",
          },
          payload: {
            task_group: "audio",
            task: "tts",
            function: "SpeechSynthesizer",
            model: MODEL,
            parameters: {
              text_type: "PlainText",
              voice: VOICE,
              format: "mp3",
              sample_rate: 22050,
              volume: 80,
              rate: 1.35,
              pitch: 1.05,
            },
            input: {},
          },
        }),
      );
    });

    ws.on("message", (data: WebSocket.Data, isBinary: boolean) => {
      if (isBinary) {
        // 音频数据块
        chunks.push(Buffer.from(data as ArrayBuffer));
      } else {
        const msg = JSON.parse(data.toString());
        const event = msg.header?.event;

        switch (event) {
          case "task-started":
            // Step 2: 发送文本
            ws.send(
              JSON.stringify({
                header: {
                  action: "continue-task",
                  task_id: taskId,
                  streaming: "duplex",
                },
                payload: { input: { text } },
              }),
            );
            // Step 3: 结束任务
            setTimeout(() => {
              ws.send(
                JSON.stringify({
                  header: {
                    action: "finish-task",
                    task_id: taskId,
                    streaming: "duplex",
                  },
                  payload: { input: {} },
                }),
              );
            }, 500);
            break;

          case "task-finished":
            clearTimeout(timeout);
            const audioBuffer = Buffer.concat(chunks);
            writeFileSync(outputPath, audioBuffer);
            console.log(
              `[完成] ${outputPath} (${(audioBuffer.length / 1024).toFixed(1)} KB)`,
            );
            ws.close();
            resolve();
            break;

          case "task-failed":
            clearTimeout(timeout);
            const errMsg =
              msg.header?.error_message || JSON.stringify(msg);
            console.error(`[错误] ${sceneId}: ${errMsg}`);
            ws.close();
            reject(new Error(errMsg));
            break;

          case "result-generated":
            // 中间状态，忽略
            break;

          default:
            break;
        }
      }
    });

    ws.on("error", (err) => {
      clearTimeout(timeout);
      reject(err);
    });

    ws.on("close", () => {
      clearTimeout(timeout);
    });
  });
}

async function main(): Promise<void> {
  console.log("=== AMC 视频配音生成 ===");
  console.log(`模型: ${MODEL} | 音色: ${VOICE}\n`);

  for (const scene of SCENES) {
    // 跳过封面等无配音文案的场景
    if (!scene.text || scene.text.trim() === "") {
      console.log(`[跳过] ${scene.id}: 无配音文案`);
      continue;
    }
    try {
      await synthesize(scene.id, scene.text);
    } catch (error) {
      console.error(`[失败] ${scene.id}:`, error);
    }
    // 防止 API 限流
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log("\n=== 配音生成完成 ===");
}

main();
