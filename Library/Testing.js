

// все библиотеки для тестирования проекта на Nest js
//
// 1. Jest - это фреймворк для тестирования JavaScript, который использует Jasmine в качестве библиотеки для тестирования.
// 2. Supertest - это библиотека для тестирования HTTP-запросов, которая использует Jest в качестве фреймворка для тестирования.
// 3. Mocha - это фреймворк для тестирования JavaScript, который использует Chai в качестве библиотеки для тестирования.
// 4. Chai - это библиотека для тестирования JavaScript, которая использует Mocha в качестве фреймворка для тестирования.
// 5. Sinon - это библиотека для тестирования JavaScript, которая использует Mocha в качестве фреймворка для тестирования.
// 6. Nock - это библиотека для тестирования HTTP-запросов, которая использует Mocha в качестве фреймворка для тестирования.

// 1. Jest
// npm i --save-dev @types/jest jest
//
// 2. Supertest
// npm i --save-dev supertest
//
// 3. Mocha
// npm i --save-dev @types/mocha mocha
//
// 4. Chai
// npm i --save-dev @types/chai chai
//

// пример теста на Jest
//
// import { Test, TestingModule } from '@nestjs/testing';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
//
// describe('AppController', () => {  // describe - это функция, которая принимает два аргумента: название теста и функцию, которая содержит тесты.
//   let appController: AppController;
//
//   beforeEach(async () => { // beforeEach - это функция, которая выполняется перед каждым тестом.
//     const app: TestingModule = await Test.createTestingModule({ // Test.createTestingModule - это функция, которая создает новый модуль Nest для тестирования.
//       controllers: [AppController], // controllers - это массив контроллеров, которые будут использоваться в тестах.
//       providers: [AppService], // providers - это массив провайдеров, которые будут использоваться в тестах.
//     }).compile(); // compile - это функция, которая компилирует модуль Nest для тестирования.
//
//     appController = app.get<AppController>(AppController); // app.get - это функция, которая возвращает экземпляр контроллера.
//   });
//
//   describe('root', () => { // describe - это функция, которая принимает два аргумента: название теста и функцию, которая содержит тесты.
//     it('should return "Hello World!"', () => { // it - это функция, которая принимает два аргумента: название теста и функцию, которая содержит тесты.
//       expect(appController.getHello()).toBe('Hello World!'); // expect - это функция, которая принимает аргумент, который будет проверен.
//     });
//   });
// });

// пример теста на Supertest
//
// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { AppModule } from './../src/app.module';
//
// describe('AppController (e2e)', () => {
//   let app: INestApplication;
//
//   beforeAll(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();
//
//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   it('/ (GET)', () => {
//     return request(app.getHttpServer())
//       .get('/')
//       .expect(200)
//       .expect('Hello World!');
//   });
// });

// пример теста на Mocha
//
// import { expect } from 'chai';
// import { sum } from '../src/sum';
//
// describe('sum', () => {
//   it('should return sum of two numbers', () => {
//     const result = sum(1, 2);
//     expect(result).to.equal(3);
//   });
// });

// пример теста на Chai
//
// import { expect } from 'chai';
// import { sum } from '../src/sum';
//
// describe('sum', () => {
//   it('should return sum of two numbers', () => {
//     const result = sum(1, 2);
//     expect(result).to.equal(3);
//   });
// });


// Все методы Jest
//
// describe(name, fn) - создает блок, который группирует тесты.
// it(name, fn) - создает тест.

// Список методовов которые можно использовать внутри блока describe
// beforeEach(fn) - выполняет функцию перед каждым тестом.
// afterEach(fn) - выполняет функцию после каждого теста.
// beforeAll(fn) - выполняет функцию перед всеми тестами.
// afterAll(fn) - выполняет функцию после всех тестов.

// Список методов expect
// expect(value) - создает объект, который содержит методы для проверки значения.
// toBe(value) - проверяет, равно ли значение другому значению.
// toEqual(value) - проверяет, равно ли значение другому значению.
// toBeTruthy() - проверяет, является ли значение истинным.
// toBeFalsy() - проверяет, является ли значение ложным.
// toBeGreaterThan(number) - проверяет, больше ли значение другого числа.
// toBeGreaterThanOrEqual(number) - проверяет, больше или равно ли значение другому числу.
// toBeLessThan(number) - проверяет, меньше ли значение другого числа.
// toBeLessThanOrEqual(number) - проверяет, меньше или равно ли значение другому числу.
// toBeCloseTo(number, numDigits) - проверяет, близко ли значение другому числу.
// toMatch(regexp) - проверяет, соответствует ли значение регулярному выражению.
// toContain(item) - проверяет, содержит ли значение другое значение.
// toThrow(error) - проверяет, выбрасывает ли функция ошибку.
// toThrowError(error) - проверяет, выбрасывает ли функция ошибку.
// toHaveBeenCalled() - проверяет, была ли вызвана функция.
// toHaveBeenCalledTimes(number) - проверяет, была ли вызвана функция определенное количество раз.
// toHaveBeenCalledWith(arg1, arg2, ...) - проверяет, была ли вызвана функция с определенными аргументами.
// toHaveBeenLastCalledWith(arg1, arg2, ...) - проверяет, была ли вызвана функция с определенными аргументами последней.
// toHaveBeenNthCalledWith(nthCall, arg1, arg2, ...) - проверяет, была ли вызвана функция с определенными аргументами в определенном порядке.
// toHaveReturned() - проверяет, была ли возвращена функция.
// toHaveReturnedTimes(number) - проверяет, была ли возвращена функция определенное количество раз.
// toHaveReturnedWith(value) - проверяет, была ли возвращена функция с определенным значением.
// toHaveLastReturnedWith(value) - проверяет, была ли возвращена функция с определенным значением последней.
// toHaveNthReturnedWith(nthCall, value) - проверяет, была ли возвращена функция с определенным значением в определенном порядке.
// toHaveLength(number) - проверяет, имеет ли значение определенную длину.
// toHaveProperty(keyPath, value) - проверяет, имеет ли объект определенное свойство.
// toHaveBeenCalledWith(arg1, arg2, ...) - проверяет, была ли вызвана функция с определенными аргументами.
// toHaveBeenLastCalledWith(arg1, arg2, ...) - проверяет, была ли вызвана функция с определенными аргументами последней.
// toHaveBeenNthCalledWith(nthCall, arg1, arg2, ...) - проверяет, была ли вызвана функция с определенными аргументами в определенном порядке.
