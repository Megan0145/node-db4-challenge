
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_title: "Eggs"},
        {ingredient_title: "Flour", measurement_units: "grams"},
        {ingredient_title: "Sugar", measurement_units: "grams"},
        {ingredient_title: "Milk", measurement_units: "mls"},
        {ingredient_title: "Butter", measurement_units: "grams"},
        {ingredient_title: "Baking Powder", measurement_units: "tbsps"},
        {ingredient_title: "Bread", measurement_units: "slices"},
        {ingredient_title: "Pastry", measurement_units: "grams"},
        {ingredient_title: "Apple"},
        {ingredient_title: "Chocolate", measurement_units: "grams"},
        {ingredient_title: "Chicken"}
      ]);
    });
};
