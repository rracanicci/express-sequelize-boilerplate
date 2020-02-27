'use strict';

const fs = require('fs');

/*
    - look for the environment variable named "name"
    - if not found, look for the same variable with the sufix _FILE to get the file
      content
    - if not found, return the default value 
*/
function get_var(name, defaultValue = null) {
    if (process.env[name]) {
        return process.env[name].toLowerCase();
    }
    else {
        const value = process.env[name + '_FILE'];
        if (value) {
            return fs.readFileSync(value, 'utf8').toLowerCase();
        }
    }
    return defaultValue;
}

module.exports = {
    /*
        port that the application should run
    */
    port: get_var('PORT', '3000'),

    /*
        in case of error, indicate if should return the error as pure HTML or
        JSON
    */
    jsonError: get_var('JSON_ERROR', 'false')
};