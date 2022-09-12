const { Genre } = require('../models');

module.exports = {
    async list(req, res) {
        const genres = await Genre.findAll();

        res.render('genresList', { genres });
    }
}