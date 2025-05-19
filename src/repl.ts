import readline from 'readline';
import { getCommands } from './commands.js';

export function cleanInput(input: string): string[] {
    // Remove leading and trailing whitespace
    input = input.trim().toLowerCase();
    
    // Split the input string by whitespace
    const words = input.split(/\s+/);
    
    // Filter out empty strings
    const cleanedWords = words.filter(word => word.length > 0);
    
    return cleanedWords;
}

export function startREPL() {
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> ',
    });

    rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];

    const commands = getCommands();
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    cmd.callback(commands);

    rl.prompt();
  });
}