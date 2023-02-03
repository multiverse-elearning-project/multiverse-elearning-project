// load environment variables from .env or elsewhere
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

//Allow cors requests
app.use(cors());

// middleware
app.use(morgan('dev'));

// parsing middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve up static files
app.use(express.static(path.join(__dirname, '../dist')));

// router
app.use('/api', require('./routes'));

module.exports = app;
