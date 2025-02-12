import {Command} from 'commander';
import {spinnerSuccess, updateSpinnerText} from '../../utils/spinner';

export function widgetsGetCommand() {
    return new Command('get')
        .argument('<id>', 'the id of the widget')
        .option('-f, --format <format>', 'the format of the widget') // an optional flag, this will be in options.f
        .action(async (id, options) => {
            updateSpinnerText('Getting widget ' + id);
            await new Promise(resolve => setTimeout(resolve, 3000));
            spinnerSuccess();
            console.table({id: 1, name: 'Tommy'});
        });
}
