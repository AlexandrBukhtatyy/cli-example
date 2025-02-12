#!/usr/bin/env node
import {Command} from 'commander';
import {widgets} from './commands/widgets/index';
import {unhandledRejectionHandler} from './handlers/unhandled-rejection.handler';


const program = new Command();

program.description('CLI-Example');
program.version('0.0.2');
program.option('-v, --verbose', 'verbose logging');
program.addCommand(widgets);

async function main() {
    await program.parseAsync();

}

console.log();
main();

process.on('unhandledRejection', unhandledRejectionHandler(program));
