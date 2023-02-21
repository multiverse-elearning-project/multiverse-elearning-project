const express = require("express");
const { query } = require("../db");
const db = require('../db');
const router = express.Router();
const path = require('path');

//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to PAYMENTS Route");
	next();
})


//POST /Creat payments
router.post('/', (req, res) => {
	const { city, PostalCode, country, state, studFirstName, studLastName} = req.body;
	if(city && PostalCode && country && state && studFirstName && studLastName){
			try{
				db.promise().query(`INSERT INTO COURSES VALUES('${city}', 
				'${PostalCode}', '${country}', '${state}', '${studFirstName}', '${studLastName}')`)
				res.status(200).send({msg: 'Course created'})
			}
			catch(err){
				console.log(err);
			}
	}
 })
//Insert data to database (table: 'payments') 
router.post('/', (req, res, next) => {
	let courses = req.body;
	query = "INSERT INTO payments (city, PostalCode, country, state, studFirstName, studLastName) VALUES ('12346', 'Java 1','Intermediate-level', 21, '2022-03-06','Yes','This course is prepared for enrollers required to upscale thier skill in software engineering')";
	
	db.query(query,[payments.city, payments.PostalCode, payments.country, payments.state, payments.studFirstName, payments.studLastName], (err, result) => {
		if(!err){
			 return res.status(200).json('Users added succesfully ...');
		} else 
		return res.status(500).json(err);
	});
})


//Fetch all payments 
router.get('/getpayments', (req, res) => {
	let sql = 'SELECT * FROM payments';
	 db.query(sql, (err, results) => {
		if(err) throw err;
		console.log(results);
		res.send('Payments fetched from the database...');
	})
})

//Fetch spesific payments 
router.get('/getpayment/:id', (req, res) => {
	let sql = `SELECT * FROM payments WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single payment fetched from the database...');
	})
})

// Update payments
router.get('/updatepayment/:id', (req, res) => {
	let newCourse = 'Updated payment'
	let sql = `UPDATE payments SET title='${newTitle}' WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single payment updated in the database...');
	})
})
// Delete single payments
router.get('/deletepayment/:id', (req, res) => {
	let sql = `DELETE courses WHERE id=${req.params.id}`;
	 db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Single payment deleted in the database...');
	})
})

module.exports = router;