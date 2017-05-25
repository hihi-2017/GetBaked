import request from 'superagent'

module.exports = {
  getCategories
}


function getCategories(callback) {
  request
    .get('/categories')
    .end((err, res) => {
      callback(res.body)
    })
  }
