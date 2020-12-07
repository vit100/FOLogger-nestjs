import { JsonLogger } from '../jsonLogger';
import { LoggingInterceptor } from './Logging.interceptor';

describe('CommonHttpServiceInterceptor', () => {
  it('should be defined', () => {
    expect(new LoggingInterceptor(new JsonLogger())).toBeDefined();
  });
});
