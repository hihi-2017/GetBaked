var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/:category_name', function (req, res) {
  let knex = req.app.get('db')
    knex('categories')
    .then(function(categories) {
      res.render('categories', {categories})
    })
})
