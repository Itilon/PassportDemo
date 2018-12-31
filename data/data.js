const init = (db) => {
    const users = require('./users.data').init(require('./models/user.model').init(db));

    return Promise.resolve({
        users
    });
};

module.exports = { init };