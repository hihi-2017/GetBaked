var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  req.app.get('knex')('categories')
    .then((result) => {
      res.json(result)
    })
})

router.get('/recipes', (req, res) => {
  req.app.get('knex')('recipes')
    .then((result) => {
      console.log(result);
      res.json(result)
    })
})

module.exports = router
