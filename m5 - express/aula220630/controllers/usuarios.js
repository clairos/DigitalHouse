const usuarios = require('../models/usuarios');

const usuariosController = {
    get: (req, res) => {
        const {id} = req.params;
        const dados = usuarios.filter((item) => item.id == id);
        return res.send(dados[0].nome + ' ' + dados[0].idade);
    }
}

module.exports = usuariosController;