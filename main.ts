import { mkdirSync, writeFileSync } from "node:fs";

// The line below must stay byte-for-byte: a single sentence, no trailing newline.
const LINE =
  "Imagine a library the size of a city that answers back instantly, lives in your pocket, and argues with itself all day — that is the internet.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
