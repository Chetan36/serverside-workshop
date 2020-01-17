// Import and configure express
var express = require('express');
var app = express();

// Import and configure body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Import and configure mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/emisha',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var model = require('./user');
app.use('/user', function(req, res, next) {
    var obj = {
        _id: new mongoose.Types.ObjectId(),
        name: 'Priyabrata Pati',
        contactNumber: '9988776655'
    };
    const user = new model(obj);
    user.save().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        next(new Error('Could not save data'));
    });
});

// Url route not found error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Common error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        status: err.status || 500,
        data: null
    });
});


module.exports = app;
