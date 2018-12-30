const express = require('express');

const init = (data) => {
    const app = express();

    require('../config/app.config').configApp(app);

    require('./routers/public.routes').attachTo(app);

    return Promise.resolve(app);
};

module.exports = { init };