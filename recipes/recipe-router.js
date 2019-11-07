const express = require('express');
const recipes = require('./recipe-model');
const router = express.Router();

router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({message: "Could not get recipes" + err.message})
    })
})

module.exports = router;