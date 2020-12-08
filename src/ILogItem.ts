import { LogLevel } from "./LogLevel";

export interface ILogItem{
  /**
   * ts: Date in ISO format
   */
  ts: string,
  /**
   * sev: severity level: 'INFO'|'ERROR'|'WARNING'|'DEBUG'|'VERBOSE'
   */
  sev: LogLevel,
  /**
   * msg: message which should be displayed
   */
  msg: string,
  /**
   * logger: log context
   */
  logger?: string,
  /**
   * print: function used to print message in JSON format
   */
}