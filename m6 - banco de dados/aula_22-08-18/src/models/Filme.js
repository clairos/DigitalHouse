const sequelize= require('sequelize');
const { DataTypes } = require('sequelize');

const cols = {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(500)
    },
    rating: {
        type: DataTypes.DECIMAL(3,1)
    },
    awards: {
        type: DataTypes.INTEGER(10),
        default: 0
    },
    release_date:{
        type: DataTypes.DATE
    },
    length: {
        type: DataTypes.INTEGER(10)
    }
}

const Filme = sequelize.define('Filme', cols, {
    tableName: 'movies',
    timestamps: false
});

return Filme;