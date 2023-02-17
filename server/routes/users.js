const express = require("express");
const db = require('../db');
const router = express.Router();
const path = require('path');


//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to USERS Route");
	next();
})

router.post('/', (req, res) => {
	const {username, password } = req.body;
	if(username && password){
		console.log(username, password);
	}
})

//Insert data to database (table: 'courses') course Number 2
router.post('/create', (req, res, next) => {
	let courses = req.body;
	query = "INSERT INTO USERS (firstName, lastName, password, email) VALUES ('12346', 'Java 1','Intermediate-level', 21, '2022-03-06','Yes','This course is prepared for enrollers required to upscale thier skill in software engineering')";
	
	db.query(query,[users.firstName, users.lastName, users.password, users.email], (err, result) => {
		if(!err){
			 return res.status(200).json('Users added succesfully ...');
		} else 
		return res.status(500).json(err);
	});
})


//Fetch all courses 
router.get('/getusers', (req, res) => {
	let sql = 'SELECT * FROM users';
	 db.query(sql, (err, results) => {
		if(err) throw err;
		console.log(results);
		res.send('Users fetched from the database...');
	})
})

//Fetch spesific course 
router.get('/getuser/:id', (req, res) => {
	let sql = `SELECT * FROM users WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single User fetched from the database...');
	})
})

// Update Course
router.get('/updateuser/:id', (req, res) => {
	let newCourse = 'Updated User'
	let sql = `UPDATE users SET title='${newTitle}' WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single User updated in the database...');
	})
})
// Delete single Course
router.get('/deleteuser/:id', (req, res) => {
	let sql = `DELETE courses WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single User deleted in the database...');
	})
})

module.exports = router;