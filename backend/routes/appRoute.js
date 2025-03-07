const express = require("express");
require("dotenv").config()

const router = express.Router();
router.use(express.static("../frontend/dist"))


module.exports = router