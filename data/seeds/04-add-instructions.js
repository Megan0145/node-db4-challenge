
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, content: "Mix eggs, flour, butter, milk & sugar"},
        {recipe_id: 1, step_number: 2, content: "Chop apples & bake"},
        {recipe_id: 1, step_number: 3, content: "Mix all ingredients together"},
        {recipe_id: 1, step_number: 4, content: "Grease tin, line with pastry and pour in mix. Bake & serve"},

        {recipe_id: 2, step_number: 1, content: "Fry eggs"},
        {recipe_id: 2, step_number: 2, content: "Toast bread & serve"},

        {recipe_id: 3, step_number: 1, content: "Mix "},
        {recipe_id: 3, step_number: 2, content: "Mix eggs, flour, butter, milk & sugar"},
        {recipe_id: 3, step_number: 3, content: "Chop chocolate and mix in"},
        {recipe_id: 3, step_number: 4, content: "Bake for 25 mins at 180"},

        {recipe_id: 4, step_number: 1, content: "Mix eggs, flour, butter, milk & sugar"},
        {recipe_id: 4, step_number: 2, content: "Add melted chocolate"},
        {recipe_id: 4, step_number: 3, content: "Bake in oven & serve"},

        {recipe_id: 5, step_number: 1, content: "Chop veg"},
        {recipe_id: 5, step_number: 2, content: "Place chicken & veg in oven "},
        {recipe_id: 5, step_number: 3, content: "Serve"},
      ]);
    });
};
