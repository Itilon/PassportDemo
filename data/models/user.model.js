const init = (db) => {
    const userSchema = new db.Schema({
        username: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    });

    const User = db.model('User', userSchema);
    return User;
};

module.exports = { init };