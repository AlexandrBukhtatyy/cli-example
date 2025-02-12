import {Command} from 'commander';
import {spinnerSuccess, updateSpinnerText} from '../../utils/spinner';
import {getById} from '../../lib/api/widgets.service';

export function widgetsGetCommand() {
    return new Command('get')
        .argument('<id>', 'the id of the widget')
        .option('-f, --format <format>', 'the format of the widget') // an optional flag, this will be in options.f
        .action(async (id, options) => {
            updateSpinnerText('Getting widget ' + id);
            const result = await getById(1);
            spinnerSuccess();
            console.table(result);
        });
}
