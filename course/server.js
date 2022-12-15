

// Создание сервар с импользованием http

const http = require('http')


const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        console.log(req.url)
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(`
      <h1>Form</h1>
      <form method="post" action="/">
        <input name="title" type="text" />
        <button type="submit">Send</button>
      </form>
    `)
    } else if (req.method === 'POST') {
        const body = []
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`
        <h1>Ваше сообщение: ${message}</h1>
      `)
        })
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})


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
    // req.fresh() - проверяет fresh
    // req.stale() - проверяет stale
    // req.xhr() - проверяет xhr
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

