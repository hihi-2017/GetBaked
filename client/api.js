import request from 'superagent'

module.exports = {
  getCategories,
  getRecipes
}


function getCategories(callback) {
  request
    .get('/categories')
    .end((err, res) => {
      callback(res.body)
    })
  }

function getRecipes(callback) {
  request
    .get('/categories/recipes')
    .end((err, res) => {
      callback(res.body)
    })
}
