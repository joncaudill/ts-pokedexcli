// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState, State } from "./state.js";

async function main() {
    const state = initState();
    startREPL(state);
}

main();