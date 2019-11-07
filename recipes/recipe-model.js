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

// select r.recipe_id, r.recipe_title, riq.quantity, ing.ingredient_title
// from recipes as r
// join recipe_ingredient_quantities as riq
// on r.recipe_id = riq.recipe_id
// join ingredients as ing
// on riq.ingredient_id = ing.ingredient_id
// where r.recipe_id=1;

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

// select recipe_id, step_number, content
// from instructions
// where recipe_id = 1
// order by step_number;

function getInstructions(id) {
  return db("instructions")
    .select("recipe_id", "step_number", "content")
    .where({ recipe_id: id });
}

// select r.recipe_id, r.recipe_title, ing.ingredient_id, ing.ingredient_title
// from recipes as r
// join recipe_ingredient_quantities as riq
// on r.recipe_id = riq.recipe_id
// join ingredients as ing
// on riq.ingredient_id = ing.ingredient_id
// where ing.ingredient_id=5

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
