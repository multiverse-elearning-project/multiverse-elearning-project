const { Router } = require("express");
const db = require('../db');
const router = Router();

// const path = require('path');

router.use((req, res, next) => {
	console.log("Request made to COURSES Route");
	next();
})

router.get('/courses', (req, res) => {
	res.json({route: "Courses"});
	
})

router.get('/', async (req, res) => {
	const results = await db.promise().query(`SELECT * FROM courses`);
	console.log(results);
	res.status(200).send(results);
})

//POST /Creat Courses
router.post('/', async (req, res) => {
	const { studentNumber, courseName, courseType, coursePrice, courseReleaseDate, isEnrolled, description} = req.body;
	if(studentNumber && courseName && courseType && coursePrice && courseReleaseDate && isEnrolled && description){
			try{
				db.promise().query(`INSERT INTO COURSES VALUES('${studentNumber}', '${courseName}', '${courseType}', '${coursePrice}', '${courseReleaseDate}', '${isEnrolled}', '${description}')`)
				res.status(200).send({msg: 'Course created'})
			}
			catch(err){
				console.log(err);
			}
	}
 })

//Fetch all courses 
router.get('/', (req, res) => {
	let sql = 'SELECT * FROM courses';
	 db.query(sql, (err, results) => {
		if(err) throw err;
		console.log(results);
		res.send('Courses fetched from the database...');
	})
})

//Fetch spesific course 
router.get('/courses/:id', (req, res) => {
	let sql = `SELECT * FROM courses WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single Course fetched from the database...');
	})
})

// Update Course
router.put('/courses/:id', (req, res) => {
	let newCourse = 'Updated Course'
	let sql = `UPDATE courses SET title='${newTitle}' WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single Course updated in the database...');
	})
})
// Delete single Course
router.delete('/courses/:id', (req, res) => {
	let sql = `DELETE courses WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single Course deleted in the database...');
	})
})

module.exports = router;