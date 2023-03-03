const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { Op } = require("sequelize");
const { AuthChecker } = require("../Models/index");

const CreateAuthChecker = async (req, res, next) => {
  const { accessToken } = req.body;

  try {
    if (
      !accessToken
    )
      {return res
        .sendStatus(400)
        .json({ message: "No token. Please authenticate." })};
    const auth = await AuthChecker.findAll({
      where: { token: accessToken },
    });
    if (auth.length > 0){
        const replaceToken = await AuthChecker.patch({where: {token: accessToken}})
      return res
        .send(200)
        .json(replaceToken)}
        else {
            const newToken = await AuthChecker.create({accessToken});
            res.send(200).json(newToken);
        }

  } catch (error) {
    res.sendStatus(500).json({ message: error.message }); // server error
    next(error);
  }
};

const getAuthCheckerById = async (req, res, next) => {
  try {
    const user = await AuthChecker.findOne({
      where:{authID: req.body.authID}
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message }); // server error
    next(error);
  }
};

const deleteAuthCheckerToken = async (req, res, next) => {
  try {
    const deletedUser = await AuthChecker.destroy({
      where: {
        authID: req.params.authID,
      },
    });
    res.send(deletedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  CreateAuthChecker,
  getAuthCheckerById,
  deleteAuthCheckerToken
};
