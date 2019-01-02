const express = require('express');

const init = (data) => {
    const app = express();

    require('../config/app.config').configApp(app);
    require('../config/auth.config').configAuth(app, data);

    const controllers = require('./controllers').init(data);
    require('./routers/public.routes').attachTo(app, controllers);

    return Promise.resolve(app);
};

module.exports = { init };