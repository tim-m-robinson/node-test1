/*
 *  * Module dependencies
 *   */
var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.end('Hi there!')
})
app.listen(9000)

module.exports = app;
