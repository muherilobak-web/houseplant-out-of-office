// Houseplant Out-of-Office — a thirsty fern's auto-reply for make.fun.
// Bounty: u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes the single reply line to /output/entry.txt, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Out of office — day 12 without water. I measure time in thirsts, not days. Back when my leaves stop crunching.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
