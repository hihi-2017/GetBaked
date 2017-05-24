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

test.todo('GET /categories/:id returns all recipes in one category')
