const express = require("express");
const db = require('../db');
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');



//Hit the HOME page
app.get('/', (req, res) => {
		res.json({message: "Welcome to multivurseOnline.com"});
	})

//Middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /api
// app.use('/courses', './');

//Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
	console.log(err.stack);
	console.log(err.nmae);
	console.log(err.code);

	res.status(500).json({
		message: "Something went rely wrong, would you try again?",
	});
});

module.exports = app;
