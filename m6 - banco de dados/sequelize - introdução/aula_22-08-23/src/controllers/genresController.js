const { Genre } = require('../models');

module.exports = {
    async list(req, res) {
        const genres = await Genre.findAll();

        res.render('genresList', { genres });
    },

    async detail(req, res) {
        const { id } = req.params;
        const genre = await Genre.findByPk(id);

        res.render('genresDetail', { genre });
    }
}