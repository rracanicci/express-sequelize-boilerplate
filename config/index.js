'use strict';

/*
    dependencies
*/
const get_var = require('./utils/getvar');
const _       = require('lodash');

/*
    running environment
*/
const env = process.env.NODE_ENV || 'development';

/*
    actual configuration for all environments
*/
let config = {
    development: {
        db: {
            username: get_var('DB_USERNAME', null),
            password: get_var('DB_PASSWORD', null),
            database: get_var('DB_DATABASE', 'db_development'),
            host: get_var('DB_HOST', null),
            dialect: get_var('DB_DIALECT', 'sqlite'),
            storage: get_var('DB_STORAGE', './db/database.sqlite')
        },
        app: {
            port: get_var('PORT', '3000'),
            jsonError: get_var('JSON_ERROR', 'false')
        }
    },
    test: {
        db: {
            username: get_var('DB_USERNAME', null),
            password: get_var('DB_PASSWORD', null),
            database: get_var('DB_DATABASE', 'db_test'),
            host: get_var('DB_HOST', null),
            dialect: get_var('DB_DIALECT', 'sqlite'),
            storage: get_var('DB_STORAGE', './db/database.sqlite')
        },
        app: {
            port: get_var('PORT', '3000'),
            jsonError: get_var('JSON_ERROR', 'true')
        }
    },
    production: {
        db: {
            username: get_var('DB_USERNAME', null),
            password: get_var('DB_PASSWORD', null),
            database: get_var('DB_DATABASE', 'db_production'),
            host: get_var('DB_HOST', null),
            dialect: get_var('DB_DIALECT', 'sqlite'),
            storage: get_var('DB_STORAGE', './db/database.sqlite')
        },
        app: {
            port: get_var('PORT', '3000'),
            jsonError: get_var('JSON_ERROR', 'true')
        }
    },
};

/*
    parameters common to all environments
*/
config = _.merge(config[env], {
    isDev: (env === 'development')
});

module.exports = config;