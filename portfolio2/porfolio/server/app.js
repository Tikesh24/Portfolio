var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var appDetails = require('./routes/app-route');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
//app.use(express.static('dist/index.html'))
//Put your angular dist folder here
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/server-api', appDetails);

module.exports = app;