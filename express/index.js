const express = require('express');  // Подключаем express
const path = require('path');  // Подключаем path (чтобы работать с путями)
const cookieParser = require('cookie-parser');  // Подключаем cookie-parser (чтобы работать с куками)
const app = express();  // Создаем экземпляр приложение

const db = require('./models');  // Подключаем модели

// Подключаем необходимые мидлвары (промежуточные обработчики)
app.use(express.static(path.join(__dirname, 'public')));  // Подключаем статические файлы
app.use(express.urlencoded({extended: true}));  // Подключаем body-parser для работы с формами
app.use(express.json());  // Подключаем body-parser для работы с json
app.use(cookieParser());  // Подключаем cookie-parser для работы с куками
// app.use(require('./routes/index'));  // Подключаем роуты
// Подключаем необходимые мидлвары (промежуточные обработчики)


 // Старый вариант подключения роутов
app.get('/', (req, res) => {   // Создаем get запрос  Первый параметр - путь, второй - колбек функция, которая принимает 2 параметра - запрос и ответ
    res.send('Hello World!'); // Отправляем ответ
})
app.post('/', (req, res) => {   // Создаем post запрос  Первый параметр - путь, второй - колбек функция, которая принимает 2 параметра - запрос и ответ
    res.send('Hello World!'); // Отправляем ответ
})
app.put('/', (req, res) => {   // Создаем put запрос  Первый параметр - путь, второй - колбек функция, которая принимает 2 параметра - запрос и ответ
    res.send('Hello World!'); // Отправляем ответ
})
app.delete('/', (req, res) => {   // Создаем delete запрос  Первый параметр - путь, второй - колбек функция, которая принимает 2 параметра - запрос и ответ
    res.send('Hello World!'); // Отправляем ответ
})

// Вариант с использованием Router (подключаем роуты)

// Подключаем роуты
// Можем создать отдельную папку routes и в ней создать файлы с роутами
const router = require('./routers/userRouter'); // импортируем роутер
app.use("/users", router)  // ПЕрвый параметр - префикс( префикс устанавливает перед всеми роутами данного роута), второй - сам роут )


// Запуск базы данных
db.sequelize.sync().then(() => {  // Синхронизируем модели с базой данных
        console.log('Server has been started');  // Выводим сообщение в консоль
    })


// Подключение swagger для документации API Express
/// Необходимо создать в корне проекта файл swagger.json и в нем описать API
  const swaggerUI = require('swagger-ui-express');  // Подключаем swagger-ui-express
    const swaggerDocument = require('./swagger.json');  // Подключаем swagger.json
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));  // Подключаем swagger.json
  // по url http://localhost:3000/api-docs будет доступна документация API


const PORT = process.env.PORT || 4000;  // Получаем порт из переменной окружения или устанавливаем 3000


app.listen(PORT, () => {  // Запускаем сервер на порту 3000
    console.log(`Server has been started on port ${PORT}...`);  // Выводим сообщение в консоль
});



// Все методы Request

// req.method() - get, post, put, delete, etc
// req.url() - юрл
// req.headers() - заголовки
// req.body() - тело запроса
// req.query() - параметры запроса
// req.params() - параметры запроса
// req.cookies() - куки
// req.files() - файлы
// req.ip() - ip
// req.hostname() - хост
// req.protocol() - протокол
// req.originalUrl() - оригинальный юрл
// req.subdomains() - поддомены
// req.accepts() - принимает
// req.acceptsCharsets() - принимает кодировки
// req.acceptsEncodings() - принимает кодировки
// req.acceptsLanguages() - принимает языки
// req.is() - проверяет тип
// req.range() - проверяет диапазон
// req.get() - получает заголовок
// req.param() - получает параметр
// req.path() - получает путь
// req.route() - получает маршрут
// req.fresh() - проверяет fresh // fresh - когда данные не изменились
// req.stale() - проверяет stale
// req.xhr() - проверяет xhr // xhr - когда запрос пришел через ajax
// req.secure() - проверяет secure
// req.signedCookies() - проверяет подписанные куки
// req.unsignCookie() - проверяет неподписанные куки

// res.status() - статус
// res.set() - устанавливает заголовок
// res.get() - получает заголовок
// res.cookie() - устанавливает куки
// res.clearCookie() - удаляет куки
// res.redirect() - редирект
// res.location() - локация
// res.links() - ссылки
// res.send() - отправляет
// res.json() - отправляет json
// res.jsonp() - отправляет jsonp
// res.type() - устанавливает тип
// res.format() - формат
// res.attachment() - вложение
// res.sendfile() - отправляет файл
// res.download() - скачивает файл
// res.charset() - устанавливает кодировку
// res.header() - устанавливает заголовок
// res.vary() - устанавливает vary
// res.render() - рендерит
// res.locals() - локальные переменные
// res.append() - добавляет заголовок
// res.end() - заканчивает
// res.writeHead() - устанавливает заголовок


//  Все методы Response
// res.on('close') - закрытие
// res.on('finish') - завершение
// res.on('pipe') - пайп
// res.on('unpipe') - отмена пайпа
// res.on('drain') - дрейн
// res.on('error') - ошибка
// res.on('timeout') - таймаут
// res.on('aborted') - отмена
// res.on('upgrade') - апгрейд
// res.on('continue') - продолжение
// res.on('connect') - коннект
// res.on('information') - информация
// res.on('checkContinue') - проверка продолжения
// res.on('checkExpectation') - проверка ожидания
// res.on('clientError') - ошибка клиента

//













// Подключение swagger для документации API Express

// из старых уроков
/////////////////////
// из урока 19 урока Раюота с HTML файлами
// app.get('/', (req, res) => {  // Создаем роут для главной страницы
//     res.status(200)
//         .sendFile(path.join(__dirname, "views",'index.html'));  // Отправляем файл index.html
// }, );
///////////////////


/// Pug, Handlebars, EJS - шаблонизаторы

// const exphbs = require('express-handlebars');  // Подключаем express-handlebars (шаблонизатор)
// const hbs = exphbs.create({  // Создаем экземпляр шаблонизатора
//     defaultLayout: 'main',  // Указываем, что основным шаблоном будет index.hbs
//     extname: 'hbs'  // Указываем, что расширение файлов будет hbs
// });
// app.engine('hbs', hbs.engine);  // Регистрируем движок hbs
// app.set('view engine', 'hbs');  // Указываем, что движком шаблонов будет hbs
// app.set('views', 'views');  // Указываем, что папка с шаблонами будет называться views (по умолчанию)
//
// app.get('/about', (req, res) => {  // Создаем роут для главной страницы
//     res.render('index', {  // Отправляем файл index.hbs
//         title: 'Главная страница',  // Передаем в шаблон переменную title
//         message: 'Привет, Express + Handlebars', // Передаем в шаблон переменную message
//         isHome: true // Передаем в шаблон переменную isHome
//     });
// });
