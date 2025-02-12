import {Command} from 'commander';
import {widgetsGetCommand} from './get';
import {widgetsListCommand} from './list';
import {widgetsErrorHandler} from './unhandled-error';

export const widgets = new Command('widgets');

widgets.addCommand(widgetsGetCommand());
widgets.addCommand(widgetsListCommand());
widgets.addCommand(widgetsErrorHandler());


