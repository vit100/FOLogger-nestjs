import { Test } from '@nestjs/testing';
import { jest, describe, it } from '@jest/globals';
import MockDate from 'mockdate';

import { JsonLogger } from './jsonLogger';
import { LogLevel } from './LogLevel';
import { FOLoggerModule } from './fologger.module';

describe('JsonLogger.serialize()', () => {
  let jsonLogger: JsonLogger;
  let mockedData = '2020-01-01T00:00:00.000Z';
  const message = 'msg';
  const context = 'cont';

  MockDate.set(mockedData);

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [FOLoggerModule],
    }).compile();
    jsonLogger = await module.resolve<JsonLogger>(JsonLogger);
  });

  it('should return properly formatted string with LogLevel.INFO', () => {
    // @ts-ignore
    const result = jsonLogger.serialize(LogLevel.INFO, message, context);
    const parsedResult = JSON.parse(result);
    expect(parsedResult['ts']).toEqual(mockedData);
    expect(parsedResult['sev']).toEqual(LogLevel.INFO);
    expect(parsedResult['msg']).toEqual(message);
    expect(parsedResult['logger']).toEqual(context);
  });

  it('should return properly formatted string with LogLevel.DEBUG', () => {
    // @ts-ignore
    const result = jsonLogger.serialize(LogLevel.DEBUG, message, context);
    const parsedResult = JSON.parse(result);
    expect(parsedResult['ts']).toEqual(mockedData);
    expect(parsedResult['sev']).toEqual(LogLevel.DEBUG);
    expect(parsedResult['msg']).toEqual(message);
    expect(parsedResult['logger']).toEqual(context);
  });

  it('should return properly formatted string with LogLevel.ERROR', () => {
    // @ts-ignore
    const result = jsonLogger.serialize(LogLevel.ERROR, message, context);
    const parsedResult = JSON.parse(result);
    expect(parsedResult['ts']).toEqual(mockedData);
    expect(parsedResult['sev']).toEqual(LogLevel.ERROR);
    expect(parsedResult['msg']).toEqual(message);
    expect(parsedResult['logger']).toEqual(context);
  });

  it('should return properly formatted string with LogLevel.Verbose', () => {
    // @ts-ignore
    const result = jsonLogger.serialize(LogLevel.VERBOSE, message, context);
    const parsedResult = JSON.parse(result);
    expect(parsedResult['ts']).toEqual(mockedData);
    expect(parsedResult['sev']).toEqual(LogLevel.VERBOSE);
    expect(parsedResult['msg']).toEqual(message);
    expect(parsedResult['logger']).toEqual(context);
  });

  it('should return properly formatted string with LogLevel.WARNING', () => {
    // @ts-ignore
    const result = jsonLogger.serialize(LogLevel.WARNING, message, context);
    const parsedResult = JSON.parse(result);
    expect(parsedResult['ts']).toEqual(mockedData);
    expect(parsedResult['sev']).toEqual(LogLevel.WARNING);
    expect(parsedResult['msg']).toEqual(message);
    expect(parsedResult['logger']).toEqual(context);
  });
});

describe('JsonLog', () => {
  let consoleSpy;
  let serializeSpy;
  let jsonLogger;
  const message = 'msg';
  const context = 'cont';

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [FOLoggerModule],
    }).compile();
    jsonLogger = await module.resolve<JsonLogger>(JsonLogger);
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    serializeSpy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('.log() should call internal method serialize', () => {
    jsonLogger.log(message, context);;
    expect(serializeSpy).toHaveBeenCalled();
  });

  it('log() should call internal method serialize with param logLevel==LogLevel.INFO', () => {
    jsonLogger.log(message, context);
    expect(serializeSpy).toBeCalledWith(LogLevel.INFO, message, context);
  });

  it('.error() should call internal method serialize', () => {
    // @ts-ignore
    jsonLogger.error(message, 'trace', context);
    expect(serializeSpy).toHaveBeenCalled();
  });

  it('.error() should call internal method serialize with param logLevel==LogLevel.ERROR', () => {
    jsonLogger.error(message, 'trace', context);
    expect(serializeSpy).toBeCalledWith(LogLevel.ERROR, `${message} "trace"`, context);
  });

  it('.warn() should call internal method serialize', () => {
    jsonLogger.warn(message, context);
    expect(serializeSpy).toHaveBeenCalled();
  });

  it('.warn() should call internal method serialize with param logLevel==LogLevel.WARNING', () => {
    jsonLogger.warn(message, context);
    expect(serializeSpy).toBeCalledWith(LogLevel.WARNING, message, context);
  });

  it('.debug() should call internal method serialize', () => {
    jsonLogger.debug(message, context);
    expect(serializeSpy).toHaveBeenCalled();
  });

  it('.debug() should call internal method serialize with param logLevel==LogLevel.DEBUG', () => {
    jsonLogger.debug(message, context);
    expect(serializeSpy).toBeCalledWith(LogLevel.DEBUG, message, context);
  });

  it('.verbose() should call internal method serialize', () => {
    jsonLogger.verbose(message, context);
    expect(serializeSpy).toHaveBeenCalled();
  });

  it('.verbose() should call internal method serialize with param logLevel==LogLevel.VERBOSE', () => {
    jsonLogger.verbose(message, context);
    expect(serializeSpy).toBeCalledWith(LogLevel.VERBOSE, message, context);
  });
});
