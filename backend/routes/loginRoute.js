const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router()
// Middlewares
router.use(bodyParser.json())

// Controllers
const { login } = require("../controllers/userController");

router.post("/",login)

module.exports = router