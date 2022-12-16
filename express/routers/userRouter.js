import {body} from "express-validator";

const Router = require('express').Router; // Импортируем роутер из express
    const router = new Router(); // Создаем экземпляр роутера

 // В данном файле описываем все роуты для работы с пользователями
 // Роуты мы отделяем чтобы описать все методы которые есть в данной сущности
 const  userController = require('../controller/user-controller'); // Импортируем контроллер для работы с пользователями
    // для контролеров мы создаем отдельные файлы, чтобы не засорять роутер
 // В контороллере описаны все методы для работы с пользователями
    router.get('/', userController.getAllUsers); // Первый параметр это путь, второй это метод который будет вызываться при запросе на этот путь
    router.get('/:id', userController.getOneUser); // Получаем одного пользователя
    router.post('/',body("email").isEmail(), body("password").isLength({min: 6}), userController.registration); // Создаем пользователя  и валидируем данные с помощью библиотеки express-validator
    router.put('/', userController.login); // вход пользователя


 // для каждой сущности создаете свой файл роутера



 export default router; // Экспортируем роутер по умолчанию также можно и именнованный экспорт


// для валиадции испольуем библиотеку express-validator
// устанавливаем npm i express-validator
// для валидации используем методы библиотеки body, query, params и проверяем с их методавми isEmail, isLength, isInt, isBoolean и т.д.