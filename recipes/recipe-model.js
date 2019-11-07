// //select r.recipe_id, r.title, ri.quantity, ing.name from recipes as r
// join recipe_ingredients as ri
// on r.recipe_id = ri.recipe_id
// join ingredients as ing
// on ri.ingredient_id = ing.ingredient_id
// where r.recipe_id=1
const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredientId
};

function getRecipes() {
  return db("recipes");
}


function getShoppingList(id) {
  return db("recipes as r")
    .join("recipe_ingredient_quantities as riq", "r.recipe_id", "riq.recipe_id")
    .join("ingredients as ing", "riq.ingredient_id", "ing.ingredient_id")
    .select(
      "r.recipe_id",
      "r.recipe_title",
      "riq.quantity",
      "ing.ingredient_title"
    )
    .where({ "r.recipe_id": id });
}


function getInstructions(id) {
  return db("instructions")
    .select("recipe_id", "step_number", "content")
    .where({ recipe_id: id });
}


function getRecipesByIngredientId(id) {
  return db("recipes as r")
    .join("recipe_ingredient_quantities as riq", "r.recipe_id", "riq.recipe_id")
    .join("ingredients as ing", "riq.ingredient_id", "ing.ingredient_id")
    .select(
      "r.recipe_id",
      "r.recipe_title",
      "ing.ingredient_id",
      "ing.ingredient_title"
    )
    .where({ "ing.ingredient_id": id });
}
