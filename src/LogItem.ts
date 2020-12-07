import {LogLevel} from './LogLevel'
import { ILogItem } from './ILogItem';

export class LogItem implements ILogItem {
	ts: string;
	constructor(public sev: LogLevel, public msg: string, public logger: string) {}
}
