const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { Users } = require("../Models/index");

const LoginHandeler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "email and password are required" });
  const subscribedUser = await Users.findOne({ where: { email } }); // check if the user exists
  if (!subscribedUser)
    return res.status(401).json({ message: "Incorrect username or password" });
  const isAMatch = await bcrypt.compare(password, subscribedUser.password); // returns a boolean
  if (isAMatch) {
    const role = subscribedUser.role;
    const accessToken = jwt.sign(
      {
        userInfo: {
          id: subscribedUser.userID,
          username: subscribedUser.firstName,
          roles: role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "600s" }
    );
    const refreshToken = jwt.sign(
      { id: subscribedUser.userID, username: subscribedUser.firstName },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "24h" }
    );
    subscribedUser.refreshToken = refreshToken;
    const result = await Users.update(
      { refreshToken: refreshToken },
      { where: { userID: subscribedUser.userID } }
    );
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 86400,
    });
    res
      .status(200)
      .json({ Authorized: true, accessToken: accessToken, role: role });
  } else {
    res.status(401).json({ message: "something went wrong" }); //unauthorized
  }
};

const EditProfile = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, avatarImage, role } =
      req.body;
    if (!firstName && !lastName && !email && !password && !avatarImage && !role)
      return res
        .sendStatus(400)
        .json({ msg: "atleast one field has to be edited" });
    const payload = {
      firstName,
      lastName,
      email,
      password,
      avatarImage,
      role,
    };
    const updatedUser = await Users.update(payload, {
      where: { userID: req.params.id },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};
const getUserById = async (req, res, next) => {
  try {
    const user = await Users.findOne({
      where: { userID: req.params.id },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};

module.exports = { LoginHandeler, EditProfile, getUserById };
