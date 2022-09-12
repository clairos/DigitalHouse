const { Movie } = require("../models");

module.exports = {
    async list (req, res) {
        const movies = await Movie.findAll();

        res.render('moviesList', { movies });
    },

    async detail (req, res) {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);

        res.render('moviesDetail', { movie });
    }
}