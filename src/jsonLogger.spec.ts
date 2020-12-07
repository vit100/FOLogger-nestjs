import { Test } from '@nestjs/testing';
import { jest, describe, it } from '@jest/globals';
import { JsonLogger } from './jsonLogger';
import { LogLevel } from './LogLevel';
import { FOLoggerModule } from './fologger.module';

describe('JsonLogger tests', () => {
	let jsonLogger: JsonLogger;

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			imports: [FOLoggerModule],
		}).compile();
		jsonLogger = module.get<JsonLogger>(JsonLogger);
	});

	it('JsonLogger.serialize should return properly formatted string with LogLevel.INFO', () => {
		const expectedResult = '{"sev":"INFO","msg":"message","logger":"context"}';
		// @ts-ignore
		const result = jsonLogger.serialize(LogLevel.INFO, 'message', 'context');
		expect(result).toEqual(expectedResult);
	});

	it('JsonLogger.serialize should return properly formatted string with LogLevel.DEBUG', () => {
		const expectedResult = '{"sev":"DEBUG","msg":"message","logger":"context"}';
		// @ts-ignore
		const result = jsonLogger.serialize(LogLevel.DEBUG, 'message', 'context');
		expect(result).toEqual(expectedResult);
	});

	it('JsonLogger.serialize should return properly formatted string with LogLevel.ERROR', () => {
		const expectedResult = '{"sev":"ERROR","msg":"message","logger":"context"}';
		// @ts-ignore
		const result = jsonLogger.serialize(LogLevel.ERROR, 'message', 'context');
		expect(result).toEqual(expectedResult);
	});

	it('JsonLogger.serialize should return properly formatted string with LogLevel.Verbose', () => {
		const expectedResult = '{"sev":"VERBOSE","msg":"message","logger":"context"}';
		// @ts-ignore
		const result = jsonLogger.serialize(LogLevel.VERBOSE, 'message', 'context');
		expect(result).toEqual(expectedResult);
	});

	it('JsonLogger.serialize should return properly formatted string with LogLevel.WARNING', () => {
		const expectedResult = '{"sev":"WARNING","msg":"message","logger":"context"}';
		// @ts-ignore
		const result = jsonLogger.serialize(LogLevel.WARNING, 'message', 'context');
		expect(result).toEqual(expectedResult);
	});

	it('JsonLogger.log should call internal method serialize', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		// @ts-ignore
		jsonLogger.log();
		expect(spy).toHaveBeenCalled();
	});

	it('JsonLogger.log should call internal method serialize with param logLevel==LogLevel.INFO', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		jsonLogger.log('message', 'context');
		expect(spy).toBeCalledWith(LogLevel.INFO, 'message', 'context');
	});

	it('JsonLogger.error should call internal method serialize', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		// @ts-ignore
		jsonLogger.error();
		expect(spy).toHaveBeenCalled();
	});

	it('JsonLogger.error should call internal method serialize with param logLevel==LogLevel.ERROR', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		jsonLogger.error('message', 'trace', 'context');
		expect(spy).toBeCalledWith(LogLevel.ERROR, 'message "trace"', 'context');
	});

	it('JsonLogger.warn should call internal method serialize', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		// @ts-ignore
		jsonLogger.warn();
		expect(spy).toHaveBeenCalled();
	});

	it('JsonLogger.error should call internal method serialize with param logLevel==LogLevel.WARNING', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		jsonLogger.warn('message', 'context');
		expect(spy).toBeCalledWith(LogLevel.WARNING, 'message', 'context');
	});

	it('JsonLogger.debug should call internal method serialize', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		// @ts-ignore
		jsonLogger.debug();
		expect(spy).toHaveBeenCalled();
	});

	it('JsonLogger.debug should call internal method serialize with param logLevel==LogLevel.DEBUG', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		jsonLogger.debug('message', 'context');
		expect(spy).toBeCalledWith(LogLevel.DEBUG, 'message', 'context');
	});

	it('JsonLogger.verbose should call internal method serialize', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		// @ts-ignore
		jsonLogger.verbose();
		expect(spy).toHaveBeenCalled();
	});

	it('JsonLogger.debug should call internal method serialize with param logLevel==LogLevel.VERBOSE', () => {
		// @ts-ignore
		let spy = jest.spyOn(jsonLogger, 'serialize').mockImplementation(() => {});
		jsonLogger.verbose('message', 'context');
		expect(spy).toBeCalledWith(LogLevel.VERBOSE, 'message', 'context');
	});
});
