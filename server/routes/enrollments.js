const express = require("express");
const db = require('../db');
const router = express.Router();
const path = require('path');


//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to USERS Route");
	next();
})

//Enable to enrolle
router.post('/', (req, res) => {
	const {username, password, courseID, userID} = req.body;
	if(username && password && courseID && userID){
		console.log(username, password, courseID, userID);
	}
})

//POST Enable user to enroll
router.post('/', (req, res) => {
	const { enrollmentID, courseID, userID} = req.body;
	if(enrollmentID && courseID && userID ){
			try{
				db.promise().query(`INSERT INTO ENROLLMENTS VALUES('${enrollmentID}', '${courseID}', '${userID}')`)
				res.status(200).send({msg: 'User Enrolled'})
			}
			catch(err){
				console.log(err);
			}
	}
 })

//Fetch all Enrollment
router.get('/enrollments', (req, res) => {
	let sql = 'SELECT * FROM enrollments';
	 db.query(sql, (err, results) => {
		if(err) throw err;
		console.log(results);
		res.send('Enrolled students fetched from the database...');
	})
})

//Fetch spesific course 
router.get('/enrollmnts/:id', (req, res) => {
	let sql = `SELECT * FROM enrollments WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single Enrolled students fetched from the database...');
	})
})

// Update Course
router.put('/enrollmnts/:id', (req, res) => {
	let newCourse = 'Updated Enrollemnet'
	let sql = `UPDATE users SET title='${newTitle}' WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single Enrollemts updated in the database...');
	})
})
// Delete single Course
router.delete('/enrollmnts/:id', (req, res) => {
	let sql = `DELETE enrollmnets WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single User enrolled deleted in the database...');
	})
})

module.exports = router;