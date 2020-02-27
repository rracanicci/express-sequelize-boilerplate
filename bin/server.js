'use strict';

/*
    dependencies
*/
const app    = require('../app');
const debug  = require('debug')('app:server');
const http   = require('http');
const config = app.get('config');

/*
    set PORT on express
*/
const port = normalizePort(config.port);
app.set('port', port);

/*
    setup HTTP server
*/
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/*
    normalize a port into a number, string, or false
*/
function normalizePort(val) {
    var port = parseInt(val, 10);

    // named pipe
    if (isNaN(port)) { return val; }
    // port number
    else if (port >= 0) { return port; }

    return false;
}

/*
    event listener for HTTP server "error" event
*/
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/*
    event listener for HTTP server "listening" event
*/
function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr : 'port ' + addr.port;
    debug('listening on ' + bind);
}
