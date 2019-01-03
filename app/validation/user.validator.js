const userValidator = (input) => {
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

module.exports = { userValidator };