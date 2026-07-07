/**
 * 信息源核查辅助脚本
 * 扫描 src/config.ts 的 SCENES，对照 volatile-fields.json，
 * 标出每个场景命中的「易变字段」——这些数据点必须用当季官网复核。
 * 运行: npx ts-node check-sources.ts
 * 政策见 docs/信息源优先级.md
 */
import { readFileSync } from "fs";
import { SCENES } from "./src/config";

const policy = JSON.parse(readFileSync("volatile-fields.json", "utf-8"));
const volatile: { key: string; label: string; verifyAgainst: string; keywords: string[] }[] =
  policy.volatile;

console.log("=== 易变数据核查清单 ===");
console.log(`当季: ${policy.currentSeason} | 政策: ${policy.policyDoc}\n`);

let total = 0;
for (const scene of SCENES as any[]) {
  const blob = JSON.stringify(scene);
  const hits = volatile.filter((f) => f.keywords.some((k) => blob.includes(k)));
  if (hits.length === 0) continue;
  total += hits.length;
  console.log(`【${scene.id}】(${scene.type})`);
  for (const h of hits) {
    console.log(`  ⚠️  ${h.label.padEnd(6)} → 复核来源: ${h.verifyAgainst}`);
  }
  console.log("");
}

console.log(`共 ${total} 处易变数据需对照当季官网核实。`);
console.log("逐项确认后，把 (来源URL + 抓取日期) 记入 docs/IMA回写日志.md。");
