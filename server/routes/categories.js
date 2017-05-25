var express = require('express')
var router = express.Router()

var db = require('../db')


router.get('/', (req, res) => {
  db.getCategories(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/recipes', (req, res) => {
  db.getRecipes(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/:id', (req, res) => {
  db.getCategory(req.params.id, req.app.get('knex'))
    .then((result)=> {
      console.log(result)
      res.status(200).json(result)
    })
    .catch(function(err){
      res.status(500).send('DATABASE ERROR ' + err.message)
    })
})



module.exports = router
