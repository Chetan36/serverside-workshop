var express = require('express');
var app = express();

app.use('/', function(req, res, next) {
    res.status(200).send("Hello world!")
});

app.use('/emisha', function(req, res, next) {
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello Emisha</h1>")
});

module.exports = app;
