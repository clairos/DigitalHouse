const menuJson = require('./menu.json');

const Menu = {
    findAll: () => {
        return menuJson;
    }
}

module.exports = Menu;