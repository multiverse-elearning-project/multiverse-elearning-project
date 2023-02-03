const express = require("express");
const router = express.Router();
const {check, validationResult} = require('express-validator')
const { Course } = require("../models");

// GET /all courses
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET / course by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedCourses = await Course.findByPk(req.params.id);
    res.send(selectedCourses);
  } catch (error) {
    next(error);
  }
});

// GET /items by category
router.get("/type/:type", async (req, res, next) => {
  try {
    const courses = await Course.findAll({where: {category: req.params.category}});
    res.send(courses);
  } catch (error) {
    next(error);
  }
});


//POST Item
router.post("/",[check('name').not().isEmpty()], async (req, res, next) => {
  const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.json({error:errors.array()});
    }
  try {
    const [course, wasCreated] = await Course.findOrCreate({
      where: {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category:req.body.category,
        imageUrl: req.body.imageUrl
      }
    });
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// PUT / Update course by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedCourse = await Course.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedCourse);
  } catch (error) {
    next(error);
  }
});


// DELETE / item by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    });
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;