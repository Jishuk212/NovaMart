const express = require('express');
const storeController = require('../controller/storeController');
const storeRouter = express.Router();

storeRouter.get('/', storeController.getHome);
storeRouter.get('/home', storeController.getHome);
storeRouter.get('/favorites', storeController.favorites);
storeRouter.get('/booking', storeController.booking);
storeRouter.get('/cart', storeController.cart);

module.exports = storeRouter;