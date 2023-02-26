const express = require("express");
const { query } = require("../db");
const db = require('../db');
const router = express.Router();
const path = require('path');


//Request
router.use((req, res, next) => {
	console.log("Request made to ISNSTRUCTORS Route");
	next();
})

router.get('/instructors', (req, res) => {
	res.json({route: "Instructor"});
	
})


//POST /Create into instructors table
router.post('/', (req, res) => {
	const { firstName, lastName, password, email} = req.body;
	if(firstName && lastName && password && email){
			try{
				db.promise().query(`INSERT INTO INSTRUCTORS VALUES('${firstName}', '${lastName}', '${password}', '${email}')`)
				res.status(200).send({msg: 'Instructor Inserted'})
			}
			catch(err){
				console.log(err);
			}
	}
 })

 //Fetch all istructors
router.get('/getinstructors', (req, res) => {
	let sql = 'SELECT * FROM instructors';
	 db.query(sql, (err, results) => {
		if(err) throw err;
		console.log(results);
		res.send('Istructors fetched from the database...');
	})
})
//GEt data from database (table: 'instructors') 
router.get('/', async (req, res) => {
	const results = await db.promise().query(`SELECT * FROM instructors`);
  if(!err){
    return res.status(200).json('Instructor added succesfully ...').send(results);
    console.log(results);
 } else 
 return res.status(500).json(err);
  
})


router.post('/create', (req, res, next) => {
	let courses = req.body;
	query = "INSERT INTO instructors (firstName, lastName, password, email) VALUES ('Abebe', 'Ke','1234', 'abebe@gmail.com')";
	
	db.query(query,[instructors.firstName, instructors.lastName, instructors.password, instructors.email], (err, result) => {
		if(!err){
			 return res.status(200).json('Instructor added succesfully ...');
		} else 
		return res.status(500).json(err);
	});
})


//Fetch spesific course 
router.put('/getinstructor/:id', (req, res) => {
	let sql = `SELECT * FROM instructors WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single Istructors fetched from the database...');
	})
})

// Update Course
router.put('/updateinstructor/:id', (req, res) => {
	const { firstName, lastName, password, email} = req.body;
	let sql = `UPDATE instructors SET firstName='${instructors.firstName}', lastName='${instructors.lastName}' WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single instructors updated in the database...');
	})
})
// Delete single Course
router.delete('/deleteinstructor/:id', (req, res) => {
	let sql = `DELETE istructors WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single Instructor deleted in the database...');
	})
})

module.exports = router;