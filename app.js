'use strict';

/*
    dependencies
*/
const createError  = require('http-errors');
const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const error        = require('./middlewares/error');
const debug        = require('debug')('app:app');
const config       = require('./config');

/*
    routes
*/
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/*
    app setup
*/
const app = express();

// set global config to be used latter on
app.set('config', config);
if (config.isDev) {
    debug('config: ', app.get('config'));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/api/v1.0/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(createError.NotFound));
});

// error handler
app.use(error.handleError);

module.exports = app;