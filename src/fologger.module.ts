import { Global, Module, Scope } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/Logging.interceptor';
import { JsonLogger } from './jsonLogger';

@Global()
@Module({
	providers: [{provide: JsonLogger, useClass: JsonLogger, scope: Scope.TRANSIENT}, LoggingInterceptor],
	exports: [JsonLogger, LoggingInterceptor],
})
export class FOLoggerModule {}
