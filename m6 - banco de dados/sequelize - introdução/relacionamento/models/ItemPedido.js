module.exports = (sequelize, DataType) => {
    const ItemPedido = sequelize.define('ItemPedido', {
        id_item_pedido: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        fk_pedido: DataType.INTEGER,
        dk_produto: DataType.INTEGER

    }, {
        tableName: 'item_pedido',
        timestamps: false
    })

    return ItemPedido
}