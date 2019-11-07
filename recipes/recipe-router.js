const express = require("express");
const recipes = require("./recipe-model");
const router = express.Router();

router.get("/", (req, res) => {
  recipes
    .getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get recipes" + err.message });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  recipes
    .getShoppingList(req.params.id)
    .then(shoppingList => {
      res.json(shoppingList);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `Could not get shopping list for recipe with id of ${rewq.params.id} : ${err.message}`
        });
    });
});

module.exports = router;
