const express = require("express");
const recipes = require("./recipe-model");
const router = express.Router();

router.get("/recipes/", (req, res) => {
  recipes
    .getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get recipes" + err.message });
    });
});

router.get("/recipes/:id/shoppingList", (req, res) => {
  recipes
    .getShoppingList(req.params.id)
    .then(shoppingList => {
      res.json(shoppingList);
    })
    .catch(err => {
      res.status(500).json({
        message: `Could not get shopping list for recipe with id of ${req.params.id} : ${err.message}`
      });
    });
});

router.get("/recipes/:id/instructions", (req, res) => {
  recipes
    .getInstructions(req.params.id)
    .then(instructions => {
      res.json(instructions);
    })
    .catch(err => {
      res.status(500).json({
        message: `Could not get instructions for recipe wiht id of ${req.params.id}: ${err.message}`
      });
    });
});

router.get("/ingredients/:id/recipes", (req, res) => {
  recipes
    .getRecipesByIngredientId(req.params.id)
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `Could not get recipes containing ingredient with id of ${req.params.id}: ${err.message}`
        });
    });
});

module.exports = router;
