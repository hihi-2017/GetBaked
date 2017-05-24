var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

var categories = require('./routes/categories')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/categories', categories)

module.exports = server
