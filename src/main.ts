#!/usr/bin/env node
import { argv } from "process";

console.info("{{NAME}}");

const args = [...argv];
args.splice(0, 2);

for (const arg of args) {
    console.info(arg);
}
