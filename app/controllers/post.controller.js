const passport = require('passport');

const init = (data) => {
    const { addUser } = data.users;

    const postRegister = (req, res) => {
        const errors = require('../validation/user.validator').userValidator(req.body);

        const { username, name, email, password, confirmed } = req.body;

        if (errors.length > 0) {
            return res.render('register', {
                errors,
                username,
                name,
                email,
                password,
                confirmed
            });
        }

      addUser({ username, name, email, password, confirmed })
        .then((result) => {
            res.redirect('/login');
        })
        .catch((err) => {
            errors.push(err);

            return res.render('register', {
                errors,
                username,
                name,
                email,
                password,
                confirmed
            });
        });
    };

    const postLogin = (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: false
        })(req, res, next);
    };

    return {
        postRegister,
        postLogin       
    }
};

module.exports = { init };