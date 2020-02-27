'use strict';

function handleError(err, req, res, next) {
    const config = req.app.get('config');

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error   = config.env === 'development' ? err : {};

    // setup response
    res.status(err.status || 500);

    if (config.jsonError != 'true') {
        res.render('error');
    }
    else res.json(err);
}

module.exports = {
    handleError
};