const express = require('express');

const init = (data) => {
    const app = express();

    require('../config/app.config').configApp(app);

    const controllers = require('./controllers').init();
    require('./routers/public.routes').attachTo(app, controllers);

    return Promise.resolve(app);
};

module.exports = { init };