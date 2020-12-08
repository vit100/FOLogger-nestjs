import { LogLevel } from './LogLevel';
import { ILogItem } from './ILogItem';

export class LogItem implements ILogItem {
	public ts: string;
	public sev: LogLevel;
	public msg: string;
	public logger?: string;

	constructor(sev: LogLevel, msg: string, logger?: string) {
    this.ts = new Date().toISOString();
    this.sev = sev;
    this.msg = msg;
    this.logger = logger;
    
	}
}
