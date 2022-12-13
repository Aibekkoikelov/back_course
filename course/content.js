

const http = require('http');
const fs = require('fs');
const path = require('path');

 // Сервер с отправкой html файла

const server = http.createServer((req, res) => {
    if(req.method === "GET" ){
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        if(req.url === "/"){
           fs.readFile(path.join(__dirname, "views",'index.html'), 'utf-8', (err, data) => {
                if(err) throw err;
                res.end(data);

           });
        }
        else if(req.url === "/about"){
            fs.readFile(path.join(__dirname, "views",'about.html'), 'utf-8', (err, data) => {
                if(err) throw err;
                res.end(data);
            });
        }
    }
})

server.listen(4000, () => {
    console.log('Server is running...')
})