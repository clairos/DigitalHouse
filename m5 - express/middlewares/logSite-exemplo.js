/***** configuração Middleware novo *****/
const fs = require('fs');

function logSite(req, res, next){
    fs.appendFileSync('log.txt', 'O usuário entrou na url: ' + req.url); // cria um arquivo log TXT e adiciona a mensagem toda vez que um usuário acessar o site
    next(); // proximo log
}

module.exports = logSite;

/****** setar Middleware app.js ******/
var logMiddleWare = require('./middlewares/logSite-exemplo');

app.use(logMiddleWare);