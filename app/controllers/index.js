const init = (data) => {
    
    const controllers = {
        getController: 
            require('./get.controller')
                .init(data),
        postController: 
            require('./post.controller')
                .init(data)
    };

    return controllers;
}

module.exports = { init };