//require("dotenv").config(); //Allows environment Variables to be set on Process.env
// const config = require('config.json');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db');


const courseRoute = require('./routes/courses');
const usersRoute = require('./routes/users');
const modulesRoute = require('./routes/modules');
const paymentsRoute = require('./routes/payments');
const instructorsRoute = require('./routes/instructors');
const enrollmentsRoute = require('./routes/enrollments');


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // parse json bodies in the request object
app.use(express.urlencoded({ extended: false}));


//Hit the HOME page

app.get('/', (req, res) => {
		res.json({message: "Welcome to multivurseOnline.com"});
	})
// 

//Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
	console.log(err.stack);
	console.log(err.nmae);
	console.log(err.code);

	res.status(500).json({
		message: "Something went rely wrong, would you try again?",
	});
});

app.use('/users', usersRoute);
app.use('/courses', courseRoute);
app.use('/modules', modulesRoute);
app.use('/payments', paymentsRoute);
app.use('/instructors', instructorsRoute);
app.use('/enrollments', enrollmentsRoute);


// set port, listen for requests
const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
console.log ('Server is running on port $(PORT).');
});


