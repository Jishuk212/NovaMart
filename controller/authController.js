exports.getLogin = (req, res, next) => {
    res.render('getLogin', {
        pageTitle: 'Login',
        currentPage: 'login'
    });
};

exports.postLogin = (req, res, next) => {
    res.session.isLoggedIn = true;
    console.log(req.body);
    res.redirect('/');
};

exports.getSignup = (req, res, next) => {
    res.render('getSignup.ejs')
};

exports.postSignup = (req, res, next) => {
    res.redirect('/login');
};