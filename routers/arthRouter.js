const express = require('express');
const authController = require('../controller/authController');

const authRouter = express.Router();

authRouter.get('/login', authController.getLogin);
authRouter.post('/loggedIn', authController.postLogin);
authRouter.get('/getSignup', authController.getSignup);
authRouter.post('/postSignup', authController.postSignup);

module.exports = authRouter;