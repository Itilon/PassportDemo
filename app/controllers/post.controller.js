const init = (data) => {
    const postRegister = (req, res) => {
        const errors = _verifyFields(req.body);

        const { username, name, email, password, confirmed } = req.body;

        if (errors.length > 0) {
            res.json(errors);
        }

        res.send(username);
    };

    const postLogin = (req, res) => {

    };

    const _verifyFields = (input) => {
        const { username, name, email, password, confirmed } = input;
        const errors = [];

        if (!username || !name || !email || !password || !confirmed) {
            errors.push({ msg: 'Please, fill in all fields!'});
        }

        if (username.length < 6 || username.length > 30) {
            errors.push({ msg: 'Username must be between 6 and 30 characters longs'});
        }

        if (password.length < 6 || password.length > 30) {
            errors.push({ msg: 'Password must be between 6 and 30 characters long.' });
        }

        if (password !== confirmed) {
            errors.push({ msg: 'Your password and confirmed password do not match.'});
        }

        return errors;
    };

    return {
        postRegister,
        postLogin       
    }
};

module.exports = { init };