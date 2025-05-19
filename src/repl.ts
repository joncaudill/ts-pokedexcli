import readline from 'readline';
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

    rl.on('line', (line: string) => {
        const cleanedInput = cleanInput(line);
        if (cleanedInput.length > 0) {
            console.log(`Your command was: ${cleanedInput[0]}`);
        } else {
            rl.prompt();
        }
        rl.prompt();
    }).on('close', () => {
        console.log('Exiting REPL.');
        process.exit(0);
    });
}