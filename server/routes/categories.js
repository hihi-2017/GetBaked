var express = require('express')
var router = express.Router()

var db = require('../db')


router.get('/', (req, res) => {
  db.getCategories(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

router.get('/recipes', (req, res) => {
  db.getRecipes(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/random-recipe', (req, res) => {
  db.getRecipes(req.app.get('knex'))
    .then((result) => {
      //get random recipe from result array
    })
})


router.get('/:id', (req, res) => {
  db.getCategory(req.params.id, req.app.get('knex'))
  .then((result) => {
    res.status(200).json(result)
  })
  .catch(function(err){
    res.status(500).send('DATABASE ERROR ' + err.message)
  })
})

router.get('/recipes/:recipe_id', (req, res) => {
  db.getRecipe(req.params.recipe_id, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR ' + err.message)
    })
})


router.post('/add_recipe', (req, res) => {
  db.addRecipe(req.body, req.app.get('knex'))
  .then((result) => {
    res.sendStatus(201)
  })
  .catch((err) => {
    console.log({err});
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})


module.exports = router
