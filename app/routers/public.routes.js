const { Router } = require('express');
const { ensureAuthentication } = require('../validation/auth.validator');

const attachTo = (app, controllers) => {
    const router = new Router();

    const { 
        getController: { getHome, getRegister, getLogin, getDashboard }, 
        postController: { postRegister, postLogin } 
    } = controllers;


    app
        .get('/', getHome)

        .get('/register', getRegister)

        .get('/login', getLogin)

        .get('/dashboard', ensureAuthentication, getDashboard)

        .post('/register', postRegister)

        .post('/login', postLogin);

    app.use('/', router);
};

module.exports = { attachTo };