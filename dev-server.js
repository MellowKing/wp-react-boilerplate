const path = require('path')
const express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config')
var webpackMiddleware = require('webpack-dev-middleware')

var app = express()
var compiler = webpack(config)

app.use(webpackMiddleware(compiler, {
  noInfo: false,
  stats: {
    colors: true,
  }
}))

app.use(webpackMiddleware(compiler))

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen(1337, function(error) {
  if (error) {
    console.log(error)
    return
  }
  console.log('Listening at http://localhost:1337')
})
