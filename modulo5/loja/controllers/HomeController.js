const Menu = require('../models/Menu')

const HomeController = {
    index: (req, res) => {
        const menuCompleto = Menu.findAll();
        res.render('indexView', { title: 'Pimenta & Sal', menuCompleto});
    }
}

module.exports = HomeController;