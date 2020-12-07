# FOLogger-nestjs

nest-js logging module with custom Fusion Operate formatter.

## How to install

1.  Install npm package:

    `npm install fologger-nestjs`

2.  Import module into your appication

        ```
        // app.module.ts
        import { FOLoggerModule, LoggingInterceptor } from 'fologger-nestjs';
        ```

    3 Register module import and `LoggingInterceptor` provider

        @Module({
          imports: [FOLoggerModule],
          providers: [LoggingInterceptor],
        })
        export class AppModule {}
        ```

## How to use

In your service register DI `JsonLogger` and use logger instance methods in your class functions:

```
@Controller()
export class AppController {
  constructor(private _logger: JsonLogger) {
    this._logger.setContext('AppController'); //optionally set context
  }

  @Get()
  getHello(): string {
    this._logger.log('getHello invoked'); // Logger will log message with context 'AppController'
    return this._appService.getHello();
  }
```

For detailed usage examples, please see Fusion Opeate [nest-helloworld](https://fusionfabric.visualstudio.com/FusionOperate/_git/nest-helloworld) template project.
