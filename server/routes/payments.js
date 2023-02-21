const express = require("express");
const router = express.Router();
const { Payment } = require("../models");

//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to PAYMENTS Route");
	next();
})

// GET /all lists of payments
router.get("/", async (req, res, next) => {
  try {
    const payments = await Payment.findAll();
    res.send(payments);
  } catch (error) {
    next(error);
  }
});


// GET / select and GET spesific payment by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedPayment = await Payment.findByPk(req.params.id);
    res.send(selectedPayment);
  } catch (error) {
    next(error);
  }
});

// GET modules by paymentType category "fee" or "payment"
router.get("/paymentType/:paymentType", async (req, res, next) => {
  try {
    const listPaymentByType = await Payment.findAll({where: {paymentType: req.params.type}});
    res.send(listPaymentByType);
  } catch (error) {
    next(error);
  }
});

//POST /create list of fees from users and/or payment for instructors
router.post("/", async (req, res, next) => {
  try {
    const [payment, createdPayment] = await Payment.findOrCreate({
      where: {
        city: req.body.city,
        postalCode: req.body.postalCode,
        country: req.body.country,
				state: req.body.state,
        paymentType: req.body.paymentType,
        firstName: req.body.firstName,
				lastName: req.body.lastName
      }
    });
    res.send(payment);
  } catch (error) {
    next(error);
  }
});

// PUT / Update payment list by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedPayment = await Payment.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedPayment);
  } catch (error) {
    next(error);
  }
});

// DELETE / from payments list by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Payment.destroy({
      where: {
        id: req.params.id
      }
    });
    const payments = await Payment.findAll();
    res.send(payments);
  } catch (error) {
    next(error);
  }
});


module.exports = router;