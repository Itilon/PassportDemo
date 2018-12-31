const init = () => {
    
    const controllers = {
        getController: require('./get.controller').init()
    };

    return controllers;
}

module.exports = { init };