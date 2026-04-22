const express = require('express');
const hostController = require('../controller/hostController')
const hostRouter = express.Router();


hostRouter.get('/list-product', hostController.getAddProduct);
hostRouter.post('/product-listed', hostController.postAddProduct);
hostRouter.get('/admin-product', hostController.hostHome);


module.exports = hostRouter;