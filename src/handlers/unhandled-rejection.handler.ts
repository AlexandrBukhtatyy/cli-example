import {spinnerError, stopSpinner} from '../utils/spinner';

export function unhandledRejectionHandler(program) {
    return (err: Error) => {
        const debug = program.opts().verbose;
        if(debug) {
            console.error(err.stack);
        }
        spinnerError()
        stopSpinner()
        program.error('', { exitCode: 1 });
    }
}
