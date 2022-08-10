const express = require('express');
const app = express();


app.get('/', (req, res)=> res.send("página inicial"));

const usuarios = require('./models/usuarios');
app.get('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const dados = usuarios.filter((item) => item.id == id);
    return res.send(dados[0].nome + ' ' + dados[0].idade);
});


const usuariosController = require('./controllers/usuarios');
app.get('/usuario/:id', usuariosController.get);


app.listen(3000, ()=> console.log('servidor rodando na porta 3000'));