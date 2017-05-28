import test from 'ava'
import nock from 'nock'

import * as api from '../../client/api'


test.cb('api.getCategories', t => {
  let scope = nock('http://localhost:80')
    .get('/categories')
    .reply(200, {message: 'home page working'})

  api.getCategories((actual) => {
    scope.done()
    t.is(actual.message, 'home page working')
    t.end()
  })
})

//
// test.cb('api.getRecipes', t => {
//   let scope = nock('http://localhost:80')
//     .get('/categories/recipes')
//     .reply(200, {message: 'test recipes'})
//
//   api.getRecipes((actual) => {
//     scope.done()
//     console.log(actual)
//     t.is(actual.message, 'test recipes')
//     t.end()
//   })
// })
