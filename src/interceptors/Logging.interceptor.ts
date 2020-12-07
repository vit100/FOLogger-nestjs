import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JsonLogger } from '../jsonLogger';


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle();
  }

  constructor(private jsonLogger: JsonLogger) {
    this.jsonLogger.setContext('http');
  }
}
