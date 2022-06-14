const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"text/html;charset=utf-8"});

        switch(req.url){
            case "/":
                res.end("Você está na página inicial!");
                break;
            case "/contato":
                res.end("Você está na página de contato!");
                break;
            default:
                res.end("Página não encontrada.")
        }

}).listen(3000);