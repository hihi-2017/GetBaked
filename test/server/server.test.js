import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

var setupDb = require('./setup-db')

setupDb(test, function (db) {
  app.set('knex', db)
})


test.serial('GET /categories returns a list of categories', t => {
  return request(app)
    .get('/categories')
    .expect(200)
    .then((res) => {
      t.is(res.body.length, 9)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

test.serial("GET /recipes returns a list of recipes", t => {
  return request(app)
    .get('/categories/recipes')
    .expect(200)
    .then((res) => {
      t.is(res.body.length, 3)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

test.serial('GET /categories/:category_id return category by id', t => {
  return request(app)
    .get('/categories/2201')
    .expect(200)
    .then((res) => {
      t.is(res.body.id, 2201)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

test.serial('GET /recipes/:recipe_id', t => {
  return request(app)
    .get('/categories/recipes/1')
    .expect(200)
    .then((res)=> {
      t.is(res.body.recipe_id, 1)
    })
    .catch((err) => {
      console.log(err.message);
    })
})

test.serial('POST /categories/add_recipe', (t) =>{
  const newRecipe= {
    recipe_name: "Recipe",
    recipe_ingredients: "Food"
  }

  return request(app)
    .post('/categories/add_recipe')
    .send(newRecipe, app.get('knex'))
    .expect(201)
    .then(()=> {
      return app.get('knex')('recipes').select()
    })
    .then((recipes) => {
      return new Promise((resolve, reject) => {
        t.is(recipes.length, 4)
        resolve()
      })
    })
  })
