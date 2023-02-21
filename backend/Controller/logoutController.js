const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { Users } = require("../Models/index");

const handleLogout = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.jwt) return res.status(204).json('no content'); // no response content
  const refreshToken = cookie.jwt;
  const anyUser = await Users.findOne({ where: { refreshToken } });
  // check for the existance of refresh token
  if (!anyUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
    res.status(204).json('no user');
  }
  //remove resfresh token from the DataBase
  anyUser.refreshToken = "";
  const result = await Users.update(
    { refreshToken: anyUser.refreshToken },
    { where: { userID: anyUser.userID } }
  ); // change this syntx with sequilite to update users table with refres
  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true }); // no need to define max age here sameSite:'strict', 'lax, 'none'
  res.status(204).json('success');
};

module.exports = { handleLogout };