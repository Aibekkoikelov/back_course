const express = require('express');  // Подключаем express
const path = require('path');  // Подключаем path (чтобы работать с путями)
const cookieParser = require('cookie-parser');  // Подключаем cookie-parser (чтобы работать с куками)
const app = express();  // Создаем экземпляр приложение

// Подключаем необходимые мидлвары (промежуточные обработчики)
app.use(express.static(path.join(__dirname, 'public')));  // Подключаем статические файлы
app.use(express.urlencoded({extended: true}));  // Подключаем body-parser для работы с формами
app.use(express.json());  // Подключаем body-parser для работы с json
app.use(cookieParser());  // Подключаем cookie-parser для работы с куками
// app.use(require('./routes/index'));  // Подключаем роуты
// Подключаем необходимые мидлвары (промежуточные обработчики)



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
