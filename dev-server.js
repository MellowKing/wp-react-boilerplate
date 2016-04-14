const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')


var app = express()
var compiler = webpack(config)

app.use(webpackMiddleware(compiler, {
  noInfo: false,
  stats: {
    colors: true,
  }
}))

app.use(webpackHotMiddleware(compiler))

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
