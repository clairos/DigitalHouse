const express = require('express');
const rotasProdutos = require('./rotas/rotasProduto');

let app = express();

app.get('/', (req,res) => res.send("Olá mundo!"));
app.get('/contatos', (req,res) => res.send('Página de contatos'));

app.use('/produtos', rotasProdutos);

// criando um server
app.listen(3000, () => console.log('servidor rodando na porta 3000'));