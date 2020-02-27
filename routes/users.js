'use strict';

const express = require('express');
const router  = express.Router();
const models  = require('../db/models');

router.get('/', async function(req, res, next) {
    res.json(
        await models.User.findAll()
    );
});

module.exports = router;