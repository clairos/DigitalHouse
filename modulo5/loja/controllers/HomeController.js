const Menu = require('../models/Menu')

const HomeController = {
    index: (req, res) => {
        const menuCompleto = Menu.findAll();
        res.render('index', { title: 'titulo', menuCompleto});
    }
}

module.exports = HomeController;