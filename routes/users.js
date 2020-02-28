'use strict';

const express    = require('express');
const router     = express.Router();
const models     = require('../db/models');
const throwError = require('../middlewares/error').throwError;

router.get('/', throwError(async function(req, res, next) {
    res.json(
        await models.User.findAll()
    );
}));

module.exports = router;