// Entry for make.fun: "One Line of Earned Pride".
// Writes one line about earned pride to the grader's output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "After three years of night shifts, she finally watched her daughter graduate — and for the first time, she let herself sit in the front row.";

// The output file holds exactly this one line plus a trailing newline,
// so every run produces the same bytes.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
console.log(`Wrote entry to ${join(outputDir, "entry.txt")}`);
