const express = require("express");
const router = express.Router();
const { User } = require("../models");

//Request Made to this route
router.use((req, res, next) => {
	console.log("Request made to USERS Route");
	next();
})

// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// GET / select and GET spesific user by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedUser = await User.findByPk(req.params.id);
    res.send(selectedUser);
  } catch (error) {
    next(error);
  }
});

// GET users by course category ????? TBD
router.get("/course/:course", async (req, res, next) => {
  try {
    const listUserByCourse = await Payment.findAll({where: {course: req.params.type}});
    res.send(listUserByCourse);
  } catch (error) {
    next(error);
  }
});

//POST /create list of users enrolled for the course/s
router.post("/", async (req, res, next) => {
  try {
    const [user, createdUser] = await User.findOrCreate({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
				password: req.body.password,
				email: req.body.email
      }
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// PUT / Update user list by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

// DELETE / from users list by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});


module.exports = router;