const userService = require('../service/user-service');// Импортируем сервис для работы с пользователями
// создаем отдельный файл с сервисами, чтобы не засорять контроллер

const {validationResult} = require("express-validator");  // Импортируем метод для валидации данных

  // Создаем отдельный файл для контроллера

  /// Можно создать с помощью класса
    class UserController {

        // создаем методы которые будем использовать в роутах
        async getAllUsers(req, res, next) {  // первый параметр это запрос, второй ответ, третий next
            // next - это функция которая позволяет передать управление следующему обработчику
            try { // оборачиваем в try чтобы отлавливать ошибки
                // если возникла ошибка то мы передаем ее в next
                // next получив ошибку передает ее в обработчик ошибок
                const users = await userService.getAllUsers(); //  используем метод описанный в сервисе. Так как это гет запрос то мы просто возвращаем данные и не передаем в параметры ничего
             return   res.json(users);
            } catch (err) {
                next(err);
            }
        }
        // пример метода для получения одного пользователя
        async getOneUser(req, res, next) {
            try {

                const {id} = req.params; // получаем id из параметров запроса
                // из req мы можем получить параметры запроса, заголовки, тело запроса, куки, сессии и т.д.
                // req.params - это параметры запроса (то что идет после /users/:id) но до вопросительного знака
                // req.query - это параметры запроса которые передаются через ? (то что идет после вопросительного знака)
                // req.body - это тело запроса
                // req.headers - это заголовки запроса
                // req.cookies - это куки
                const user = await userService.getOneUser(id); // переадем id в сервис для получения пользователя
              return  res.json(user); // возвращаем пользователя в виде json
            } catch (err) {
                next(err);
            }
        }
         // пример реализации метода для регистрации пользователя
        async registration(req, res, next) {
              const errors = validationResult(req); // получаем ошибки валидации используя метод из библиотеки express-validator
                if (!errors.isEmpty()) { // если есть ошибки то возвращаем их
                    return res.status(400).json({errors: errors.array(), message: "Некорректные данные при регистрации"}); // возвращаем статус 400 и массив с ошибками
                    // next(errors.array()); // передаем ошибки в обработчик ошибок или такой вариант
                }


            try {
                const {email, password} = req.body; // получаем email и пароль из тела запроса
                const user = await userService.registration(email,password); //  передаем email и пароль в сервис для регистрации
                // получаем данные вместе с токеном(возвращаемые данные в сервисе может быть по разному в зависимости от реализации)
                // устанавливаем рефреш токен в куки
                res.cookie('refreshToken',   // указываем название куки
                    user.refreshToken, // передаем токен
                    {maxAge: 30 * 24 * 60 * 60 * 1000, // указываем время жизни куки
                        httpOnly: true}); // указываем что кука доступна только на сервере ( данный флаг необходим для безопасности чтобы куки не могли быть прочитаны на фронте)

              return   res.json(user); // возвращаем пользователя в виде json
        }
        catch(err) {
                next(err);
            }
        }

        async login(req, res, next) {
            try {
                const {email, password} = req.body; // получаем email и пароль из тела запроса
                const user = await userService.login(email,password); //  передаем email и пароль в сервис для регистрации
                // получаем данные вместе с токеном(возвращаемые данные в сервисе может быть по разному в зависимости от реализации)
                // устанавливаем рефреш токен в куки
                res.cookie('refreshToken',   // указываем название куки
                    user.refreshToken, // передаем токен
                    {maxAge: 30 * 24 * 60 * 60 * 1000, // указываем время жизни куки
                        httpOnly: true}); // указываем что кука доступна только на сервере ( данный флаг необходим для безопасности чтобы куки не могли быть прочитаны на фронте)

              return   res.json(user); // возвращаем пользователя в виде json
        }
        catch(err) {
                next(err);
            }
        }
    }

    module.exports = new UserController(); // и сразу экспортируем экземпляр класса чтобы не создавать его в каждом файле


   // Также создать с помощью объекта если не используется класс
   const userController = {
        async registration(req, res, next) {

        },
        async login(req, res, next) {

        }
   }

    module.exports = userController; // экспортируем объект с методами


   // можно создавать и статические методы класса

    class UserControllers {
        static async registration(req, res, next) {

        }
        static async login(req, res, next) {

        }
    }

    module.exports = UserControllers; // тогда можно не создавать экземпляр класса а вызывать методы напрямую
    // будет типа такого UserController.registration()


   // когда создаем класс через new  то это называется экзепляр класса