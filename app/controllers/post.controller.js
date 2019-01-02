const passport = require('passport');

const _verifyFields = (input) => {
    const { username, name, email, password, confirmed } = input;
    const errors = [];

    if (!username || !name || !email || !password || !confirmed) {
        errors.push({ msg: 'Please, fill in all fields!'});
    }

    if (username.length < 6 || username.length > 30) {
        errors.push({ msg: 'Username must be between 6 and 30 characters long.' });
    }

    if (name.length < 2 || name.length > 40) {
        errors.push({ msg: 'Name must be between 2 and 40 characters long.' });
    }

    if (password.length < 6 || password.length > 30) {
        errors.push({ msg: 'Password must be between 6 and 30 characters long.' });
    }

    if (password !== confirmed) {
        errors.push({ msg: 'Your password and confirmed password do not match.'});
    }

    return errors;
};

const init = (data) => {
    const postRegister = (req, res) => {
        const errors = _verifyFields(req.body);

        const { username, name, email, password, confirmed } = req.body;

        if (errors.length > 0) {
            res.render('register', {
                errors,
                username,
                name,
                email,
                password,
                confirmed
            });
        }

       data.users.addUser({ username, name, email, password, confirmed })
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