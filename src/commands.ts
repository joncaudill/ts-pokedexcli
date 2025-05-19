import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { CLICommand } from './command_type.js';

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            command: 'exit',
            description: 'Exits the pokedex',
            callback: commandExit,
        },
        help: {
            command: 'help',
            description: 'Displays a help message',
            callback: commandHelp,
        },
        // Add more commands here
    };
}