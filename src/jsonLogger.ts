import { Injectable, Logger, LoggerService, Scope } from '@nestjs/common';
import { LogItem } from './LogItem';
import { LogLevel } from './LogLevel';

Injectable({ scope: Scope.TRANSIENT });
export class JsonLogger extends Logger {
  log(message: any, context?: string) {
    const formatted = this.serialize(LogLevel.INFO, message, context);
    console.log(formatted);
  }
  error(message: any, trace?: string, context?: string) {
    const formatted = this.serialize(LogLevel.ERROR, `${message} ${JSON.stringify(trace)}`, context);
    console.log(formatted);
  }
  warn(message: any, context?: string) {
    const formatted = this.serialize(LogLevel.WARNING, message, context);
    console.log(formatted);
  }
  debug(message: any, context?: string) {
    const formatted = this.serialize(LogLevel.DEBUG, message, context);
    console.log(formatted);
  }
  verbose(message: any, context?: string) {
    const formatted = this.serialize(LogLevel.VERBOSE, message, context);
    console.log(formatted);
  }

  private serialize(logLevel: LogLevel, message: string, context?: string): string {
    const logItem = new LogItem(logLevel, message, context || this.context);
    const serialized = JSON.stringify(logItem);
    return serialized;
  }
}
