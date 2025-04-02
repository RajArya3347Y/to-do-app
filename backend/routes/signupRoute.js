const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router()
// Middlewares
router.use(bodyParser.json())

// Controllers
const { signup } = require("../controllers/userController");

router.post("/", signup)

module.exports = router