
// Вся инфоомация о Nest.js  в одном месте

// Nest.js - это фреймворк для создания серверных приложений на Node.js с использованием TypeScript или JavaScript (ES6, ES7, ES8).
// Он использует принципы ООП (объектно-ориентированного программирования), функционального программирования и асинхронного программирования.
// Nest.js основан на принципах инверсии управления (IoC) и внедрения зависимостей (DI).

// Установка необходимых пакетов для Nest.js
// npm i -g @nestjs/cli // сперва устанавливаем Nest.js CLI (Command Line Interface) глобально
// nest new project-name // создаем новый проект с именем project-name (вместо project-name вводим свое имя проекта)
// cd project-name // переходим в папку с проектом

// Запуск Nest.js приложения
// npm run start // запускаем Nest.js приложение
// npm run start:dev // запускаем Nest.js приложение в режиме разработки
// npm run start:debug // запускаем Nest.js приложение в режиме отладки

// Структура Nest.js приложения
// src
// ├── app.controller.ts // контроллер приложения (все запросы к приложению обрабатываются контроллерами)
// ├── app.module.ts // модуль приложения (все модули приложения объединяются в один модуль приложения)
// ├── app.service.ts // сервис приложения (все сервисы приложения объединяются в один сервис приложения)
// ├── main.ts // точка входа в приложение (все модули приложения объединяются в один модуль приложения)
// ├── nest-cli.json // конфигурационный файл Nest.js CLI
// ├── package.json // конфигурационный файл Node.js
// ├── tsconfig.build.json // конфигурационный файл TypeScript
// ├── tsconfig.json // конфигурационный файл TypeScript
// └── tslint.json // конфигурационный файл TSLint

// Контроллер Nest.js
// Контроллер - это класс, который обрабатывает запросы к приложению.
// Контроллер Nest.js наследуется от класса Controller из пакета @nestjs/common.
// Контроллер Nest.js определяется с помощью декоратора @Controller().
// Контроллер Nest.js может содержать обработчики запросов (методы), которые обрабатывают запросы к приложению.
// Обработчик запроса Nest.js определяется с помощью декоратора @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All().
// Обработчик запроса Nest.js может содержать параметры, которые передаются в обработчик запроса.

// Модуль Nest.js
// Модуль - это класс, который объединяет в себе контроллеры, сервисы, провайдеры и другие модули.
// Модуль Nest.js наследуется от класса Module из пакета @nestjs/common.
// Модуль Nest.js определяется с помощью декоратора @Module().
// Модуль Nest.js может содержать контроллеры, сервисы, провайдеры и другие модули.
// Контроллер Nest.js определяется с помощью декоратора @Controller().
// Сервис Nest.js определяется с помощью декоратора @Injectable().
// Провайдер Nest.js определяется с помощью декоратора @Injectable().
// Другой модуль Nest.js определяется с помощью декоратора @Module().
// Модуль Nest.js может содержать контроллеры, сервисы, провайдеры и другие модули.

// Сервис Nest.js
// Сервис - это класс, который содержит бизнес-логику приложения.
// Сервис Nest.js наследуется от класса Injectable из пакета @nestjs/common.
// Сервис Nest.js определяется с помощью декоратора @Injectable().
// Сервис Nest.js может содержать бизнес-логику приложения.

// Образец контроллера Nest.js

//import { Controller, Get } from '@nestjs/common';

//@Controller('cats')  // декоратор @Controller() определяет контроллер
//export class CatsController {  // класс CatsController наследуется от класса Controller из пакета @nestjs/common
//  constructor(private readonly catsService: CatsService) {}  // внедрение зависимости сервиса CatsService
//  @Get()  // декоратор @Get() определяет обработчик запроса GET /cats
//  findAll(): Cat[] {  // метод findAll() возвращает массив объектов Cat
//    return this.catsService.findAll();  // вызов метода findAll() сервиса CatsService
//}

////////////////////////////////

// Образец модуля Nest.js

//import { Module } from '@nestjs/common';
//import { CatsController } from './cats.controller';
//import { CatsService } from './cats.service';

//@Module({  // декоратор @Module() определяет модуль
//  imports: [CatsModule],  // импорт модуля CatsModule
//  controllers: [CatsController], // массив контроллеров
//  providers: [CatsService], // массив сервисов и провайдеров
// exports: [CatsService], // массив экспортируемых сервисов и провайдеров. Экспортируемые сервисы и провайдеры могут быть использованы в других модулях
//})

//export class CatsModule {}

////////////////////////////////

// Образец сервиса Nest.js

//import { Injectable } from '@nestjs/common';

//@Injectable()
//export class CatsService {
// constructor(private readonly catsRepository: CatsRepository) {}  // внедрение зависимости репозитория CatsRepository
// async create(cat: Cat) {
// const newCat = await this.catsRepository.create(cat);
// return newCat;
//  }
//  async findAll(): Promise<Cat[]> {
//    return this.catsRepository.findAll();
//  }
//}

////////////////////////////////

// Образец Repository Nest.js


//import { EntityRepository, AbstractRepository } from 'typeorm';  // импорт класса EntityRepository из пакета typeorm и класса AbstractRepository из пакета typeorm
//import { Cat } from './cat.entity'; // импорт класса Cat из файла cat.entity.ts

//@EntityRepository(Cat) // декоратор @EntityRepository() определяет репозиторий для сущности Cat из файла cat.entity.ts
//export class CatsRepository extends AbstractRepository<Cat> { // класс CatsRepository наследуется от класса AbstractRepository из пакета typeorm

// async createCat(createCatDto: CreateCatDto): Promise<Cat> { // метод createCat() создает новую сущность Cat и возвращает ее в виде объекта Cat
// const { name, age, breed } = createCatDto; // деструктуризация объекта createCatDto на переменные name, age, breed
// const cat = new Cat();
// cat.name = name;
// cat.age = age;
// cat.breed = breed;
// await this.repository.save(cat); // сохранение сущности cat в базе данных с помощью метода save() репозитория
// return cat; // возвращение сущности cat в виде объекта Cat
//  }
//  async findAll(): Promise<Cat[]> { // метод findAll() возвращает массив объектов Cat из базы данных
//    const query = this.createQueryBuilder('cat'); // создание запроса к базе данных с помощью метода createQueryBuilder() репозитория
//    const cats = await query.getMany();
//    return cats;
//  }
//}

////////////////////////////////

// Образец сущности Nest.js

//import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; // импорт класса Entity, Column, PrimaryGeneratedColumn из пакета typeorm

//@Entity() // декоратор @Entity() определяет сущность
//export class Cat {
// @PrimaryGeneratedColumn() // декоратор @PrimaryGeneratedColumn() определяет первичный ключ
// id: number;
// @Column() // декоратор @Column() определяет колонку
// name: string;
// @Column() // декоратор @Column() определяет колонку
// age: number;
// @Column() // декоратор @Column() определяет колонку
// breed: string;
// @OneToMany(type => Cat, cat => cat.owner) // декоратор @OneToMany() определяет связь один ко многим
// cats: Cat[]; // массив объектов Cat
// @ManyToOne(type => Owner, owner => owner.cats) // декоратор @ManyToOne() определяет связь многие к одному
// owner: Owner; // объект Owner

////////////////////////////////


// Главный файл Nest.js App.module.ts

//import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm'; // импорт модуля TypeOrmModule из пакета @nestjs/typeorm
//import { CatsModule } from './cats/cats.module'; // импорт модуля CatsModule из файла cats.module.ts
//import { OwnersModule } from './owners/owners.module'; // импорт модуля OwnersModule из файла owners.module.ts

//@Module({
// imports: [TypeOrmModule.forRoot(), CatsModule, OwnersModule], // импорт модулей TypeOrmModule, CatsModule, OwnersModule
// controllers: [], // контроллеры
// providers: [], // провайдеры
//})
//export class AppModule {}

////////////////////////////////

// Главный файл Nest.js main.ts

//import { NestFactory } from '@nestjs/core'; // импорт класса NestFactory из пакета @nestjs/core
//import { AppModule } from './app.module'; // импорт модуля AppModule из файла app.module.ts

//async function bootstrap() { // функция bootstrap() асинхронная
//  const app = await NestFactory.create(AppModule); // создание приложения Nest.js с помощью функции create() класса NestFactory
//  await app.listen(3000); // запуск приложения Nest.js на порту 3000
//}
//bootstrap(); // вызов функции bootstrap()

////////////////////////////////

// подключение к базе данных Postgres с помощью TypeORM и Nest.js

// import { Module } from '@nestjs/common'; // импорт класса Module из пакета @nestjs/common
// import { ConfigModule, ConfigService } from '@nestjs/config'; // импорт классов ConfigModule, ConfigService из пакета @nestjs/config
// import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'; // импорт классов TypeOrmModule, TypeOrmModuleOptions из пакета @nestjs/typeorm
// import { TYPEORM_DATABASE, TYPEORM_HOST, TYPEORM_PASSWORD, TYPEORM_PORT, TYPEORM_USERNAME } from './db.constants'; // импорт констант из файла db.constants.ts
// import { join } from 'path'; // импорт функции join из пакета path
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies'; // импорт класса SnakeNamingStrategy из пакета typeorm-naming-strategies
//
// @Module({
//     imports: [
//         TypeOrmModule.forRootAsync({ // импорт модуля TypeOrmModule с асинхронными настройками
//             imports: [ConfigModule], // импорт модуля ConfigModule
//             useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => { // асинхронная функция useFactory с аргументом configService типа ConfigService и возвращаемым значением типа TypeOrmModuleOptions
//     const conf: TypeOrmModuleOptions = { // создание объекта conf типа TypeOrmModuleOptions
//         type: 'postgres', // тип базы данных
//         host: configService.get<string>(TYPEORM_HOST), // хост базы данных
//         port: Number(configService.get<string>(TYPEORM_PORT)), // порт базы данных
//         username: configService.get<string>(TYPEORM_USERNAME), // имя пользователя базы данных
//         password: configService.get<string>(TYPEORM_PASSWORD), // пароль пользователя базы данных
//         database: configService.get<string>(TYPEORM_DATABASE), // имя базы данных
//         entities: [join(__dirname, '../entities/**/*.entity{.ts,.js}')], // путь к сущностям базы данных
//         synchronize: true, // синхронизация сущностей с базой данных
//         migrationsTableName: 'migrations', // имя таблицы миграций
//         namingStrategy: new SnakeNamingStrategy(), // стратегия именования таблиц и полей
//         migrations: ['src/db/migrations/*.ts'], // путь к миграциям
//         cli: { // настройки командной строки
//             migrationsDir: 'src/db/migrations', // путь к миграциям
//         },
//     };
//     return conf; // возвращение объекта conf
// },
// inject: [ConfigService], // инъекция зависимости ConfigService
// }),
// ],
// })
// export class DbModule {}


////////////////////////////////








