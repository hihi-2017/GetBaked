module.exports = {
  getCategories,
  getRecipes,
  getCategory,
  getRecipe,
  addRecipe
}


function getCategories(connection) {
  return connection('categories')
}

function getRecipes(connection) {
  return connection('recipes')
}

function getCategory(id, connection) {
  return connection('categories').where('id', id).first()
}

function getRecipe(recipe_id, connection) {
  return connection('recipes').where('recipe_id', recipe_id).first()
}

function addRecipe(newRecipe, connection){
  return connection('recipes')
  .insert(newRecipe)
}
