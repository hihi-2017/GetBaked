import request from 'superagent'

module.exports = {
  getCategories,
  getRecipes,
  saveRecipe
}


function getCategories(callback) {
  request
    .get('/categories')
    .end((err, res) => {
      callback(null, res.body)
    })
  }

function getRecipes(callback) {
  request
    .get('/categories/recipes')
    .end((err, res) => {
      callback(null, res.body)
    })
}

function saveRecipe (recipe, callback) {
  request
    .post('/categories/add_recipe')
    .send(recipe)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}
