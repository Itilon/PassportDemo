const { Router } = require('express');

const attachTo = (app) => {
    const router = new Router();

    app
        .get('/', (req, res) => {
            res.render('home');
        });

    app.use('/', router);
};

module.exports = { attachTo };