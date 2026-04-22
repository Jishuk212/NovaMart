//External Module
const express = require('express');
const ejs = require('ejs');
const session = require('express-session');

//Core Module
const path = require('path');

//Local module
const storeRouter = require('./routers/storeRouter');
const hostRouter = require('./routers/hostRouter');
const authRouter = require('./routers/arthRouter');
const rootDir = require('./utils/pathUtil');

//initilize express app
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.isLoggedIn = req.session.isLoggedIn;
    next();
});

app.use(express.static(path.join(rootDir, 'public')));
app.use(express.urlencoded({extended: true}));

app.use(storeRouter);
app.use('/host', hostRouter)
app.use(authRouter);

module.exports = app;