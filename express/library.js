

// Флаг --save или -S устанавливает зависимость в разделе dependencies в package.json.
// Флаг --save-dev или -D устанавливает зависимость в разделе devDependencies в package.json.

// пакеты используемые в проекте

// npm i express --save  // express - это библотека для создания веб-приложений на Node.js
// npm i jsonwebtoken --save   // jsonwebtoken - это библиотека для создания токенов
// npm i bcrypt --save  // bcrypt - это библиотека для шифрования паролей
// npm i nodemon --save-dev // nodemon - это библиотека для автоматического перезапуска сервера при изменении кода
// npm i swagger-ui-express --save // swagger-ui-express - это библиотека для создания документации API
// npm i express-validator --save // express-validator - это библиотека для валидации данных









// DTO - это объект, который содержит данные, которые будут переданы в другой объект.

// образец DTO
// class UserDto {
//     id;
//     email;
//     isActivated;
//     constructor(model) {
//         this.id = model.id;
//         this.email = model.email;
//         this.isActivated = model.isActivated;
//     }
// }