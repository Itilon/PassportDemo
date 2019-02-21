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

    const getLogout = (req, res) => {
        req.logout();
        req.flash('success_msg', 'You are now logged out.');
        res.redirect('/login');
    }

    const getDashboard = (req, res) => {
        res.render('dashboard', {
            user: req.user
        });
    };

    const get401 = (req, res) => {
        res.status(401).render('401');
    }

    const get404 = (req, res) => {
        res.status(404).render('404');
    }

    return {
        getHome,
        getRegister,
        getLogin,
        getLogout,
        getDashboard,
        get401,
        get404
    }
};

module.exports = { init };
