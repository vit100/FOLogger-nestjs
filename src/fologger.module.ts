import { Module } from '@nestjs/common';
import { JsonLogger } from './jsonLogger';

@Module({
	providers: [JsonLogger],
	exports: [JsonLogger],
})
export class FOLoggerModule {}
