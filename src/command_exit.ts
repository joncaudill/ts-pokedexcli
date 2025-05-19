import { StatementSync } from "node:sqlite";
import type { State } from "./state.js";
import { stat } from "fs";

export function commandExit(state: State) {
    console.log('Closing the Pokedex... Goodbye!');
    state.readline.close();
    process.exit(0);
}