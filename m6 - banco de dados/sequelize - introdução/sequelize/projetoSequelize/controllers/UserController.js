const { Usuario } = require('../models/Usuario');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const UserController = {
    index: async (req, res) => {
        let { page } = req.query;

        let users = await Usuario.findAll({
            limit:5,
            offset: (page - 1) * 5
        });
        console.log(users);
    },

    edit: async (req, res) => {
        const { id } = req.params;

        const usuario = await Usuario.findByPk(id);

        return res.render('editarUsuario', { usuario })
    },

    update: async (req, res) => {
        const {nome, email, senha} = req.body;
        
        const resultado = await Usuario.update(
            {
                nome,
                email,
                senha
            },
            {
                where: {
                    id_usuario
                }
            }
        )

        console.log(resultado);

        return res.redirect('/users');
    },

    destroy: async (req, res) => {
        const { id } = req.params;

        const resultado = await Usuario.destroy({
            where: {
                id_usuario: id
            }
        })

        console.log(resultado);

        return res.redirect('/users');
    },

    findById: async (req, res) => {
        let { id } = req.params;


        let user = Usuario.findOne({
            where:{
                nome: 'Exemplo de nome'
            }
        })
    },

    search: async (req, res) => {
        let { key } = req.query;
        let users = await Usuario.findAll({
            where:{ // objeto que recebe outro objeto
                nome:{
                    [Op.like]: '%Exemplo'
                }
            },
            order:[ // array que recebe outro array
                ['id_usuario', 'DESC']
            ]
        })
    }
}

module.exports = UserController;