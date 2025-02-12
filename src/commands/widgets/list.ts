import {Command} from 'commander';
import {spinnerSuccess, updateSpinnerText} from '../../utils/spinner';

export function widgetsListCommand() {
    return new Command('list')
        .action(async () => {
            updateSpinnerText('Processing ');
            // do work
            await new Promise(resolve => setTimeout(resolve, 1000)); // emulate work
            spinnerSuccess();
            console.table([{id: 1, name: 'Tommy'}, {id: 2, name: 'Bob'}]);
        });
}
