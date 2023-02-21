//require("dotenv").config(); //Allows environment Variables to be set on Process.env
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');
const app = express();
const path = require('path');

//Allow CORS requests
app.use(cors());
// logging middleware
app.use(morgan('dev'));
// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json()); // parse json bodies in the request object

// serve up static files (e.g. html and css files)
app.use(express.static(path.join(__dirname, '../dist')));

//Middleware for authentication


//routers
app.use('/api', require('./routes'));

//Welcome message
app.get('/', (req, res) => {
		res.json({message: "Welcome to multivurseOnline.com"});
})

//404 Error Handler
app.use((req, res) => {
  res.status(404).send({error: '404 - Not Found', message: 'No route found for the requested URL'});
});

// error handling middleware
app.use((error, req, res, next) => {
  console.error('SERVER ERROR: ', error);
  if(res.statusCode < 400) res.status(500);
  res.send({error: error.message, name: error.name, message: error.message, table: error.table});
});

module.exports = app;

