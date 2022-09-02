const Sequelize = require('sequelize')
const config = require('../config/database')
const { Produto, Categoria } = require('../models')
const CategoriaController = {
    index: async (req, res) => {
        const categorias = await Categoria.findAll();
        return res.render('categorias', { categorias });
    },

    showProducts: async (req, res) => {
        const { id } = req.params;

        const categoria = await Categoria.findOne({
            where:{
                id_categoria:id
            },
            include:{
                model:Produto,
                as:'produtos', 
                required:true
            }
        });

        return res.render('produtosCategorias', { categoria });
    }
}

module.exports = CategoriaController;