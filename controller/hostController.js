const Product = require('../model/homeDatabase');
let productList = [];

Product.fetchAll().then(([rows])=>{
    productList = rows;
});

exports.hostHome = (req, res, next) => {
    res.render('home.ejs', {
        products: productList,
        pageTitle: 'NovaCart : Favorites',
        currentPage: 'home'
    });
};

exports.getAddProduct = (req, res, next) => {
    console.log(productList[0]);
    res.render('getListProduct.ejs', {
        pageTitle: 'listProduct',
        currentPage: 'listProduct'
    });
};

exports.postAddProduct = (req, res, next) => {
    const {productName, price, rating, location, discount, image} = req.body;
    const product = new Product(productName, price, rating, location, discount, image);
    product.save();
    res.render('postListProduct.ejs', {
        pageTitle: 'listProduct',
        currentPage: 'listProduct'
    });
};