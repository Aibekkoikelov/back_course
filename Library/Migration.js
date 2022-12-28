

// что такое миграции?
// миграции - это способ обновления данных в БД при обновлении приложения

// работа с миграциями в nestjs
//Порядок работы с миграциями в typeorm:
//1. Создаем миграцию
//2. Выполняем миграцию
//3. Откатываем миграцию

//1. Создаем миграцию
//Для создания миграции в typeorm используется команда:
//typeorm migration:create -n <имя миграции>
//В результате выполнения команды в папке src/migrations создастся файл с миграцией

//2. Выполняем миграцию
//Для выполнения миграции в typeorm используется команда:
//typeorm migration:run
//В результате выполнения команды в БД будут выполнены все миграции, которые еще не были выполнены

//3. Откатываем миграцию
//Для отката миграции в typeorm используется команда:
//typeorm migration:revert
//В результате выполнения команды в БД будет отменена последняя выполненная миграция


// при использовании команды typeorm migration:create -n <имя миграции> в папке src/migrations создастся файл с миграцией
// в этом файле будет функция up, которая будет выполняться при выполнении миграции
// и функция down, которая будет выполняться при откате миграции

// в функции up мы можем использовать методы queryRunner для выполнения запросов к БД
// например, queryRunner.query('CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))')

// в функции down мы можем использовать методы queryRunner для выполнения запросов к БД
// например, queryRunner.query('DROP TABLE "user"')


// образец файла миграции
// import {MigrationInterface, QueryRunner} from "typeorm";

// export class Migration1611111111111 implements MigrationInterface {
//     name = 'Migration1611111111111'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DROP TABLE "user"`);
//     }

// }

// в фалйе миграции можно создавать таблицы, удалять таблицы, добавлять колонки, удалять колонки, изменять колонки,
// добавлять индексы, удалять индексы, изменять индексы,
// добавлять внешние ключи, удалять внешние ключи, изменять внешние ключи


// при выполнении миграции в БД будут выполнены все миграции, которые еще не были выполнены
// при откате миграции в БД будет отменена последняя выполненная миграция

// команда миграции
// typeorm migration:run  - выполняет все миграции, которые еще не были выполнены
// typeorm migration:revert - откатывает последнюю выполненную миграцию

// как заупстить один файл миграции
// typeorm migration:run -f src/migrations/1611111111111-Migration.ts - выполняет миграцию из файла 1611111111111-Migration.ts

// как откатить один файл миграции
// typeorm migration:revert -f src/migrations/1611111111111-Migration.ts - откатывает миграцию из файла 1611111111111-Migration.ts


// как создать миграцию с указанием пути
// typeorm migration:create -n Migration -d src/migrations - создает миграцию с именем Migration в папке src/migrations

// как создать миграцию с указанием пути и указанием даты

// typeorm migration:create -n Migration -d src/migrations -c 1611111111111 - создает миграцию с именем Migration в папке src/migrations с датой 1611111111111

// как создать миграцию с указанием пути и указанием даты и указанием расширения файла

// typeorm migration:create -n Migration -d src/migrations -c 1611111111111 -e ts - создает миграцию с именем Migration в папке src/migrations с датой 1611111111111 и расширением файла ts

// как создать миграцию с указанием пути и указанием даты и указанием расширения файла и указанием имени файла

// typeorm migration:create -n Migration -d src/migrations -c 1611111111111 -e ts -f 1611111111111-Migration.ts - создает миграцию с именем Migration в папке src/migrations с датой 1611111111111 и расширением файла ts и именем файла 1611111111111-Migration.ts



// установка typeorm cli
// npm install -g typeorm