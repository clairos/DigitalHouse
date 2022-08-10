const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const usersData = require('../data/users.json'); // Node já executa o JSON.parse no require!

const usersJSONPath = path.join(__dirname, '../data/users.json');

module.exports = {
    save (user) {
        if (!user.fullName && !user.email && !user.password && !user.country) return;

        user.id = usersData.length + 1;
        user.re_password = bcryptjs.hashSync(user.password, 10);
        usersData.push(user);
        fs.writeFileSync(usersJSONPath, JSON.stringify(usersData));

        return user;
    },

    find (receivedEmail) {
        return usersData.find(user => user.email == receivedEmail);
    },

    comparePassword (password1, password2) {
        return bcryptjs.compareSync(password1, password2);
    }
}