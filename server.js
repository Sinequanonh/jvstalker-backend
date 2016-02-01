// server.js

// Set up ============================
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var bodyParser   = require('body-parser');

// Configuration =====================
var db = require('./config/db');

// Set the port
var port = process.env.PORT || 8080;

// Connect to the database
mongoose.connect(db.url);

// Parse the app to json
app.use(bodyParser.json());

app.listen(port);
console.log('App listening to port ' + port);