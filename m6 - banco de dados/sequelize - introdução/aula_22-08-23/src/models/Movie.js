module.exports = (sequelize, dataTypes) => {
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: dataTypes.STRING
        },

        rating: {
            type: dataTypes.STRING
        },

        length: {
            type: dataTypes.INTEGER
        },

        awards: {
            type: dataTypes.INTEGER
        },

        release_date: {
            type: dataTypes.DATE
        }
    }

    const config = {
        tablename: 'movies',
        timestamps: false
    }

    return sequelize.define('Movie', cols, config);
}