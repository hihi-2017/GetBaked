import request from 'superagent'

module.exports = {
  getCategories,
  getRecipes,
  addNewRecipe,
  getRecipe
}


function getCategories(callback) {
  request
    .get('/categories')
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
  }

function getRecipes(callback) {
  request
    .get('/categories/recipes')
    .end((err, res) => {
      callback(err, res.body)
    })
}

function getRecipe (id, callback) {
  //get individual recipe
}

function addNewRecipe (newRecipe, callback) {
  request
    .post('/categories/add_recipe')
    .send(newRecipe)
    .end((err, res) => {
      console.log({err,res});
      err ? callback(err) : callback(null)
    })
  }
