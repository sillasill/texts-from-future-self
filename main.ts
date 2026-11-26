import { mkdirSync, writeFileSync } from "node:fs";

// The joke's mechanism: a grand time-travel warning that deflates into the
// most boring culprit possible — the chair — and the kicker repeats it, so
// the punchline lands twice: once as a spoiler, once as a confession.
// One text message from your future self, sent back to the present.
const LINE =
  "It's you from 2042. Stop Googling your symptoms. Spoiler: it's the chair. It was always the chair.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
