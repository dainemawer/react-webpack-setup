const express = require('express');
const webpack = require('webpack');
const open = require('open');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const port = process.env.PORT || 3000;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

app.listen( port , function () {
    console.log('Example app listening on port 3000!\n');
    open('http://localhost:' + port);
});