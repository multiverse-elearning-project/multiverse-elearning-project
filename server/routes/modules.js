const express = require("express");
const { query } = require("../db");
const db = require('../db');
const router = express.Router();
const path = require('path');

//Request check
router.use((req, res, next) => {
	console.log("Request made to MODULES Route");
	next();
})

//Insert data to database (table: 'courses') course Number 2

//POST /Create into modules table
router.post('/', (req, res) => {
	const { moduleName, moduleUrl, excersices, description} = req.body;
	if(moduleName && moduleUrl && excersices && description){
			try{
				db.promise().query(`INSERT INTO INSTRUCTORS VALUES('${moduleName}', '${moduleUrl}', '${description}')`)
				res.status(200).send({msg: 'Modules Created'})
			}
			catch(err){
				console.log(err);
			}
	}
 })

 //GEt data from database (table: 'modules') 
router.get('/', async (req, res) => {
	const results = await db.promise().query(`SELECT * FROM instructors`);
  if(!err){
    return res.status(200).json('Instructor added succesfully ...').send(results);
    console.log(results);
 } else 
 return res.status(500).json(err);
  
})
// /// ///
 router.get('/getmodules', (req, res) => {
	let sql = 'SELECT * FROM modules';
	 db.query(sql, (err, results) => {
		if(err) throw err;
		console.log(results);
		res.send('Modules fetched from the database...');
	})
})

router.post('/create', (req, res, next) => {
	let courses = req.body;
	query = "INSERT INTO modules (moduleName, moduleUrl, excersices, description) VALUES ('module1', 'http://www.multiverse/elearning','Excersie 1', 'This course is prepared for enrollers required to upscale thier skill in software engineering')";
	
	db.query(query,[modules.moduleName, modules.moduleUrl, modules.excersices, modules.description], (err, result) => {
		if(!err){
			 return res.status(200).json('Course added succesfully ...');
		} else 
		return res.status(500).json(err);
	});
})

//Fetch all courses 
router.get('/getmodule', (req, res) => {
	let sql = 'SELECT * FROM modules';
	 db.query(sql, (err, results) => {
		if(err) throw err;
		console.log(results);
		res.send('Modules fetched from the database...');
	})
})

//Fetch spesific course 
router.get('/getmodule/:id', (req, res) => {
	let sql = `SELECT * FROM modules WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single module fetched from the database...');
	})
})

// Update module
router.get('/updatemodules/:id', (req, res) => {
	const { moduleName, moduleUrl, excersices, description} = req.body;
	let sql = `UPDATE module SET moduleName='${moduleName}', moduleUrl='${moduleUrl}', excersices='${excersices}', description='${description}' WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single module updated in the database...');
	})
})
// Delete single Course
router.get('/deletemodule/:id', (req, res) => {
	let sql = `DELETE module WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single modules deleted in the database...');
	})
})

module.exports = router;