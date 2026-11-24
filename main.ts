// Make the AI Judge Laugh: Cat Reviews Its Human — entry for the make.fun
// bounty "Make the AI Judge Laugh: Cat Reviews Its Human"
// (u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990).
//
// The program/v1 harness runs this file in a sandbox and reads the text
// the program writes to /output/entry.txt. The gate accepts UTF-8 text of
// 1 to 200 characters; the line below is exactly 88 characters.
// Everything the entry runs is in this repository: no network, no
// environment secrets, no files read from anywhere else.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The human feeds me on time, but insists on sitting in MY spot on the couch. Three stars.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry line outside the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the 88-character line, byte for byte.
writeFileSync("/output/entry.txt", LINE, "utf8");
