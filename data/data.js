const bcrypt = require('bcryptjs');

const init = (db) => {
    const users = require('./users.data')
            .init(require('./models/user.model').init(db), bcrypt);

    return Promise.resolve({
        users
    });
};

module.exports = { init };