const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Users } = require("../Models/index");

//Authentication controller
let RegistrationController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password)
    return res.status(400).json({
      message: "full name along with email and password are required",
    });
  const anyUsers = await Users.findAll({ where: { email: email } }); // check for duplicate
  if (anyUsers.length > 0)
    return res.status(409).json({ message: "This user already exist" });
  try {
    const bcryptedpassword = await bcrypt.hash(password, 10); // encrypt( hash and salt) the password
    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: bcryptedpassword,
      avatarImage: "",
      refreshToken: "",
    });
    const token = jwt.sign(
      {
        id: newUser.userID,
        username: newUser.firstName,
        role: newUser.role,
        avatarImage: newUser.avatarImage,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    res
      .status(200)
      .json({
        Success: "successfully registered",
        accessToken: token,
        newUser,
      });
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
  }
};

module.exports = { RegistrationController };
