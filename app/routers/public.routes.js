const { Router } = require('express');

const attachTo = (app, controllers) => {
    const router = new Router();

    const { getController: { getHome, getRegister, getLogin } } = controllers;

    app
        .get('/', getHome)

        .get('/register', getRegister)

        .get('/login', getLogin);

    app.use('/', router);
};

module.exports = { attachTo };