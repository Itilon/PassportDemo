const { Router } = require('express');
const { ensureAuthentication } = require('../validation/auth.validator');

const attachTo = (app, controllers) => {
    const router = new Router();

    const { 
        getController: { getHome, getRegister, getLogin, getLogout, getDashboard, get401, get404 }, 
        postController: { postRegister, postLogin, postUpdate, postDelete } 
    } = controllers;


    app
        .get('/', getHome)

        .get('/register', getRegister)

        .get('/login', getLogin)

        .get('/logout', getLogout)

        .get('/dashboard', ensureAuthentication, getDashboard)

        .get('/401', get401)

        .get('*', get404)

        .post('/register', postRegister)

        .post('/login', postLogin)
        
        .post('/update', postUpdate)

        .post('/delete/:id', ensureAuthentication, postDelete);

    app.use('/', router);
};

module.exports = { attachTo };