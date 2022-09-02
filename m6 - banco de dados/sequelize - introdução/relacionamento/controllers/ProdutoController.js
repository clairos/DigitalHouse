const Sequelize = require('sequelize')
const config = require('../config/database') // exemplo caminho pasta config
const { Produto, Categoria } = require('../models')
const ProdutoController = {
    index: async (req, res) => {
        const produtos = await Produto.findAll({
            include:{
                model:Categoria,
                as:'categoria',
                required:true
            }
        });

        console.log(produtos) // apenas para visualizacao no terminal

        return res.render('produtos', { produtos }) // exemplo de view
    }
}

module.exports = ProdutoController;