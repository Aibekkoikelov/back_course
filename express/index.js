const express = require('express');  // Подключаем express

const app = express();  // Создаем экземпляр приложение

/////////////////////
// из урока 19 урока Раюота с HTML файлами
// app.get('/', (req, res) => {  // Создаем роут для главной страницы
//     res.status(200)
//         .sendFile(path.join(__dirname, "views",'index.html'));  // Отправляем файл index.html
// }, );
///////////////////


/// Pug, Handlebars, EJS - шаблонизаторы

const exphbs = require('express-handlebars');  // Подключаем express-handlebars (шаблонизатор)
const hbs = exphbs.create({  // Создаем экземпляр шаблонизатора
    defaultLayout: 'main',  // Указываем, что основным шаблоном будет index.hbs
    extname: 'hbs'  // Указываем, что расширение файлов будет hbs
});
app.engine('hbs', hbs.engine);  // Регистрируем движок hbs
app.set('view engine', 'hbs');  // Указываем, что движком шаблонов будет hbs
app.set('views', 'views');  // Указываем, что папка с шаблонами будет называться views (по умолчанию)

app.get('/', (req, res) => {  // Создаем роут для главной страницы
    res.render('index', {  // Отправляем файл index.hbs
        title: 'Главная страница',  // Передаем в шаблон переменную title
        message: 'Привет, Express + Handlebars', // Передаем в шаблон переменную message
        isHome: true // Передаем в шаблон переменную isHome
    });
});







const PORT = process.env.PORT || 4000;  // Получаем порт из переменной окружения или устанавливаем 3000


app.listen(PORT, () => {  // Запускаем сервер на порту 3000
    console.log(`Server has been started on port ${PORT}...`);  // Выводим сообщение в консоль
});