module.exports = (sequelize, dataTypes) => {
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING
        },

        ranking: {
            type: dataTypes.INTEGER
        },

        active: {
            type: dataTypes.BOOLEAN
        }
    }

    const config = {
        tablename: 'genres',
        timestamps: false
    }

    return sequelize.define('Genre', cols, config)
}