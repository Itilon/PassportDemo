const init = (data) => {
    const getHome = (req, res) => {
        res.render('home');
    };

    const getRegister = (req, res) => {
        res.render('register');
    };

    const getLogin = (req, res) => {
        res.render('login');
    };

    return {
        getHome,
        getRegister,
        getLogin
    }
};

module.exports = { init };
