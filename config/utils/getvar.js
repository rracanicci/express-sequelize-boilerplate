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

module.exports = get_var;