'use strict';

const createError  = require('http-errors');

function handleError(err, req, res, next) {
    const config = req.app.get('config');

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error   = config.isDev ? err : {};

    // setup response
    res.status(err.status || 500);

    if (config.app.jsonError != 'true') {
        res.render('error');
    }
    else res.json(err);
}

function throwError(func) {
    return async (req, res, next) => {
        try {
            await func(req, res, next);
        }
        catch(err) {
            next(createError(createError.InternalServerError, err));
        }
    };
}

module.exports = {
    handleError,
    throwError
};