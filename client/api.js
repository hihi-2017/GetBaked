import request from 'superagent'

module.exports = {
  getCategories,
  getRecipes,
  addNewRecipe
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

function addNewRecipe (newRecipe, callback) {
  request
    .post('/categories/add_recipe')
    .send(newRecipe)
    .end((err, res) => {
      (err) ? callback(err) : callback(res.body)
    })
  }
