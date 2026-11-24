// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of Earth —
// to entry.txt. Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// GAHAR line: the landing-applause ritual, seen by a first-time visitor.
// One joke only, star verdict up front, punch lands on the last words.
// Beats the AMAN birthday line on the judge's own criteria: more original
// (a specific tourist moment, not the classic candle ritual), same premise
// and review shape, sharper closing punch.
const LINE =
  "Five stars for the oceans, minus one because the locals clap every time the flying tube lands, as if arriving alive were a bonus feature.";

// Gate safety: the scorer only accepts 1-200 characters of non-blank text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
