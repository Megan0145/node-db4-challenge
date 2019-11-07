const express = require('express');
const recipes = require('./recipe-model');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Welcome')
})

module.exports = router;