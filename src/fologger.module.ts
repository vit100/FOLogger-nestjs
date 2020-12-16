import { Global, Module } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/Logging.interceptor';
import { JsonLogger } from './jsonLogger';

@Global()
@Module({
	providers: [JsonLogger, LoggingInterceptor],
	exports: [JsonLogger, LoggingInterceptor],
})
export class FOLoggerModule {}
