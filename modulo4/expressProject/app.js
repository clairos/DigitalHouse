const express = require('express');

let app = express();

app.get('/', (req,res) => res.send("Olá mundo!"));
app.get('/contato', (req,res) => res.send('Página de contatos'));

// criando um server
app.listen(3000, () => console.log('servidor rodando na porta 3000'));