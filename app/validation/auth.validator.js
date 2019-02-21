const ensureAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    req.flash('error_msg', 'Sorry, but access is denied due to invalid credentials. You do not have a permission to view this page.');
    res.redirect('/401');
};

module.exports = { ensureAuthentication };