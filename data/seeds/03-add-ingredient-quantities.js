
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient_quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient_quantities').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: "2 large"},
        {recipe_id: 1, ingredient_id: 2, quantity: "2 cups"},
        {recipe_id: 1, ingredient_id: 3, quantity: "150 grams"},
        {recipe_id: 1, ingredient_id: 4, quantity: "200 ml"},
        {recipe_id: 1, ingredient_id: 5, quantity: "200 grams"},
        {recipe_id: 1, ingredient_id: 6, quantity: "2 tbsps"},
        {recipe_id: 1, ingredient_id: 8, quantity: "1 roll readymade"},
        {recipe_id: 1, ingredient_id: 9, quantity: "5 large"},

        {recipe_id: 2, ingredient_id: 1, quantity: "2 large"},
        {recipe_id: 2, ingredient_id: 7, quantity: "2 slices"},

        {recipe_id: 3, ingredient_id: 1, quantity: "2 large"},
        {recipe_id: 3, ingredient_id: 2, quantity: "200 grams"},
        {recipe_id: 3, ingredient_id: 3, quantity: "150 grams"},
        {recipe_id: 3, ingredient_id: 4, quantity: "3 tbsps"},
        {recipe_id: 3, ingredient_id: 5, quantity: "150 grams"},
        {recipe_id: 3, ingredient_id: 10, quantity: "150 grams chopped"},

        {recipe_id: 4, ingredient_id: 1, quantity: "4 large"},
        {recipe_id: 4, ingredient_id: 3, quantity: "150 grams"},
        {recipe_id: 4, ingredient_id: 5, quantity: "150 grams"},
        {recipe_id: 4, ingredient_id: 10, quantity: "200 grams"},

        {recipe_id: 5, ingredient_id: 11, quantity: "1 large"},
      ]);
    });
};
