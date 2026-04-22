const Product = require('../model/homeDatabase');
let product = [];
Product.fetchAll().then(([rows]) => {
    product = rows;
});

exports.getHome = (req, res, next) => {
    res.render('home.ejs', {
        products: product,
        pageTitle: 'NovaCart : Favorites',
        currentPage: 'home'
    });
};

exports.favorites = (req, res, next) => {
    res.render('favorites.ejs', {
        pageTitle: 'NovaCart : Favorites',
        currentPage: 'favorites'
    });
};

exports.booking = (req, res, next) => {
    res.render('booking.ejs', {
        pageTitle: 'NovaCart : Booking',
        currentPage: 'booking'
    });
};

exports.cart = (req, res, next) => {
    res.render('cart.ejs', {
        pageTitle: 'NovaCart : Cart',
        currentPage: 'cart'
    });
};

