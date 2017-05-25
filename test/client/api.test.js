import test from 'ava'
import nock from 'nock'

import * as api from '../../client/api'

test.cb('api.getCategories', t => {
  let scope = nock('http://localhost:80')
    .get('/categories')
    .reply(200, {message: 'test'})

  api.getCategories((actual) => {
    scope.done()
    t.is(actual.message, 'test')
    t.end()
  })
})
