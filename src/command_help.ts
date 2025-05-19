import { CLICommand } from './command_type.js';
export function commandHelp(commands: Record<string, CLICommand>) {
    console.log();
    console.log('Welcome to the Pokedex!');
    console.log('Usage:');
    console.log();
    for (const key in commands) {
        const command = commands[key];
        console.log(`  ${command.command}: ${command.description}`);
    }
    console.log();
}