const express = require("express");
const router = express.Router();
import { Instructor } from "../models/index";
import { Course } from "../models/index";
import { Module } from "../models/index";
import { User} from "../models/index";
import { Payment } from "../models/index";

// model routers
router.use('/instructors', require(Instructor));
router.use('/courses', require(Course));
router.use('/modules', require(Module));
router.use('/users', require(User));
router.use('/payments', require(Payment));

module.exports = router;
