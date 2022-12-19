const tokenService = require("../service/token-service");

// Создаем middleware для проверки авторизации
module.exports = (req, res, next) => { // next - это функция, которая позволяет перейти к следующему middleware
    try{
        const authorizationHeader = req.headers.authorization; // Получаем токен из заголовка запроса
        if(!authorizationHeader){ // Если токена нет, то возвращаем ошибку
           return next(ApiError.Unauthorized());
        }
        const accessToken = authorizationHeader.split(" ")[1]; // Разбиваем строку на массив по пробелу и берем второй элемент массива
        if(!accessToken){ // Если токена нет, то возвращаем ошибку
            return next(ApiError.Unauthorized());
        }
        const userData = tokenService.validateAccessToken(accessToken); // Проверяем токен
        if(!userData){ // Если токен не валидный, то возвращаем ошибку
            return next(ApiError.Unauthorized());
        }
        req.user = userData; // Если токен валидный, то записываем данные пользователя в req.user
        next(); // Переходим к следующему middleware

    }catch (e) {
        return next(ApiError.Unauthorized());
    }
}


// Данный мидлвар проверяет валидный токен и записывает данные пользователя в req.user
// Далее мы можем получить данные пользователя из req.user
// если токен умер то мы выкидываем ошибку 401


// Применение мидлвара
// router.get('/users',authMiddleware, userController.getAllUser); // authMiddleware - это мидлвар который мы создали выше вставляем его между роутом и контроллером