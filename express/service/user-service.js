const bcrypt = require("bcrypt");  // библиотека для хеширования паролей. скачиваем через npm i bcrypt
const tokenService = require("./token-service"); // подключаем сервис для работы с токенами

// класс в котором мы работаем с баззой данных и отправляем ответы контроллеру
class UserService {
    constructor() {
      this.users = [];
    }
     async getAllUsers() {
        return this.users;
     }
        async getOneUser(id) {
        return this.users.find((user) => user.id === id);
        }
        // метод регистрации пользователя
        async registration(email, password) {
            const candidate = await db.User.findOne({where: {email}}); // ищем в базе нет ли такого пользователя с таким email
            if (candidate) { // если такой пользователь есть то выбрасываем ошибку
                throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} существует`); // если есть то кидаем ошибку
            }
            const hashPassword = await bcrypt.hash(password, 3,3); // далее хешируем пароль. в чистом виде пароль не хранится в базе используем библиотеку bcrypt
            // метод hash принимает пароль и соль. соль нужна для того чтобы пароль был надежнее. соль это строка которая добавляется к паролю
            // и при хешировании пароля она тоже хешируется. соль нужна для того чтобы если взломщик украл базу данных с паролями
            // то он не смог бы восстановить пароли. соль нужна для того чтобы пароли были надежнее
            // второй параметр это количество итераций. чем больше итераций тем дольше будет хеширование пароля
            // но чем больше итераций тем сложнее взломать пароль

            const user = await db.User.create({email, password: hashPassword}); // создаем пользователя в базе данных( вставляем захешированный пароль)
            // База данных отправляет нам нашего пользователя вместе с id и паролем. но нам в токен не надо отправлять пароль
            const userDto = new UserDto(user); // создаем объект класса UserDto чтобы пароль не отправлялся в токен
            const tokens = tokenService.generateToken({...userDto}); // генерируем токен из метода generateToken
            await tokenService.saveToken(userDto.id, tokens.refreshToken); // сохраняем токен в базе данных
            return {
                ...tokens, // возвращаем оба токена
            }


        }
        async login(email, password) {
            const user = await db.User.findOne({where: {email}}); // ищем пользователя в базе данных
            if (!user) { // если такого пользователя нет то кидаем ошибку
                throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} не найден`); // если есть то кидаем ошибку
            }
            const isPassEquals = await bcrypt.compare( // метод compare сравнивает пароли. он принимает пароль который ввел пользователь и пароль который в базе данных
                password, // пароль который ввел пользователь
                user.password); // пароль который в базе данных в захешированном виде
            if (!isPassEquals) { // если пароли не совпадают то кидаем ошибку
                throw ApiError.BadRequest(`Неверный пароль`); // если совпадают то кидаем ошибку
            }
            const userDto = new UserDto(user);  // создаем объект класса UserDto чтобы пароль не отправлялся в токен
            const tokens =  tokenService.generateToken({...userDto}); // генерируем токен из метода generateToken
            await tokenService.saveToken(userDto.id, tokens.refreshToken) // сохраняем токен в базе данных
            return {...tokens, user: userDto}; // возвращаем оба токена и пользователя
            // один токен сохраниться в куки а другим будет пользоваться при каждом запросе
            // refresh токен будет использоваться для обновления access токена
            // access токен будет использоваться для получения доступа к ресурсам
        }


  }



  module.exports = new UserService();