import {updateSpinnerText} from '../../utils/spinner';
import {Command} from 'commander';

export function widgetsErrorHandler() {
    return new Command('unhandled-error').action(async () => {
        updateSpinnerText('Processing an unhandled failure ');
        await new Promise(resolve => setTimeout(resolve, 3000));
        throw new Error('Unhandled error');
    });
}
