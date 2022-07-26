const User = require('../models/User');

module.exports = {
    register (req, res) {
        res.render('usersRegisterForm', { errors: [] });
    },

    save (req, res) {
        const user = req.body;
        const errors = [];

        if (!user.fullName && !user.password) {
            errors.push({ msg: 'Registro inválido' });
            return res.render('usersRegisterForm', { errors, user });
        }

        delete user.re_password
        User.save(user);
        res.redirect('/users/login');
    },

    login (req, res) {
        res.render('usersLoginForm', { errors: [] });
    },

    auth (req, res) {
        const userReceived = req.body;
        const errors = [];

        const userFound = User.find(userReceived.email);

        console.log(userFound);
        if(!userFound) {
            errors.push({ msg: 'Login inválido' });
            return res.render('usersLoginForm', { errors, user: userReceived });
        }

        const samePassword = User.comparePassword(userReceived.password, userFound.re_password);

        if (!samePassword) {
            errors.push({ msg: 'Login inválido' });
            return res.render('usersLoginForm', { errors, user: userReceived });
        }

        req.session.user = userReceived;

        return res.redirect('/users/profile');
    },

    profile (req, res) {
        res.render('userProfile', { user: req.session.user });
    }
}