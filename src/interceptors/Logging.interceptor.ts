import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JsonLogger } from '../jsonLogger';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.jsonLogger.log(
      `START: ${context.getClass().name}.${context.getHandler().name}(): ${
        context.switchToHttp().getRequest().method
      } ${context.switchToHttp().getRequest().url}`,
    );

    return next
      .handle()
      .pipe(
        tap(() =>
          this.jsonLogger.log(
            `STOP: ${context.getClass().name}.${context.getHandler().name}(): ${
              context.switchToHttp().getRequest().method
            } ${context.switchToHttp().getRequest().url}`,
          ),
        ),
      );
  }

  constructor(private jsonLogger: JsonLogger) {
   this.jsonLogger.setContext('http');
  }
}
