const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

let conteudo = fs.readFileSync(caminho, 'utf8');
//__dirname => carregar automaticamente o caminho para o arquivo atual.

console.log(caminho);
console.log(conteudo);