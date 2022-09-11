const Pedido = require("./Pedido")

module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto', {
        id_produto:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:DataType.STRING,
        descricao:DataType.STRING,
        imagem:DataType.STRING,
        preco:DataType.DECIMAL,
        fk_categoria: {
            type:DataType.INTEGER
        }

    }, {
        tableName: 'produto',
        timestamps: false
    })

    Produto.associate = (listadeModelos) => {
        Produto.belongsTo(listadeModelos.Categoria,{
            foreignKey:'fk_categoria',
            as:'categoria'
        })

        Produto.belongsToMany(listadeModelos.Pedido, {
            foreignKey:'fk_pedido',
            as: 'pedidos',
            through: listadeModelos.ItemPedido
        })
    }

    return Produto
}