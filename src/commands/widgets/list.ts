import {Command} from 'commander';
import {spinnerSuccess, updateSpinnerText} from '../../utils/spinner';
import {getList} from '../../lib/api/widgets.service';

export function widgetsListCommand() {
    return new Command('list')
        .action(async () => {
            updateSpinnerText('Processing ');
            await new Promise(resolve => setTimeout(resolve, 1000)); // emulate work
            const result = await getList();
            spinnerSuccess();
            console.table(result);
        });
}
