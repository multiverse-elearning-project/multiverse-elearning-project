const express = require("express");
const router = express.Router();
const AuthCheckerController = require("../Controller/AuthCheckerController");

router.get("/", AuthCheckerController.getAuthCheckerById);
router.post("/", AuthCheckerController.CreateAuthChecker);
router.delete("/:authID", AuthCheckerController.deleteAuthCheckerToken);

module.exports = router;
