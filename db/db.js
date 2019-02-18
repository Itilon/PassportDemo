const mongoose = require('mongoose');

const init = async (connectionString) => {
    try {
        const db = await mongoose.connect(connectionString, { useNewUrlParser: true });
        console.log(`Connected to ${db.connections[0].name}.`);
        return db;
    } catch(err) {
        console.error(err.message);
    }
};

module.exports = { init };