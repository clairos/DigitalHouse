const { Usuario } = require('../models/Usuario');

const UserController = {
    index: async (req, res) => {
        let users = await Usuario.findAll();
        console.log(users);
    },

    findById: async (req, res) => {
        let { id } = req.params;


        let user = Usuario.findOne({
            where:{
                nome: 'Exemplo de nome'
            }
        })
    }
}

module.exports = UserController;