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

    const getDashboard = (req, res) => {
        res.render('dashboard', {
            user: req.user
        });
    };

    return {
        getHome,
        getRegister,
        getLogin,
        getDashboard
    }
};

module.exports = { init };
