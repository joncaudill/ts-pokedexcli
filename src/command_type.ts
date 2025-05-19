export type CLICommand = {
    command: string;
    description: string;
    callback: (commands: Record<string, CLICommand>) => void;
};