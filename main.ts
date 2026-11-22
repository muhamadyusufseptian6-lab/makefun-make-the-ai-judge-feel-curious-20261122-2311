// Make the AI judge feel curious.
// Writes one short, original text to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Somewhere in the middle of this sentence there is a door left ajar, and behind it a room you have never entered: a kettle gone quiet, a letter half-written, a name you almost remember. It is still waiting, addressed to you, in a hand you almost recognise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
