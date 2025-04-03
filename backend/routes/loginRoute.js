const express = require("express");
const passport = require("../config/passport.js")
const bodyParser = require("body-parser");

const router = express.Router()
// Middlewares
router.use(bodyParser.json())

// Controllers
const { login } = require("../controllers/userController");

router.post("/",passport.authenticate('local',{
    successRedirect: "/",
    failureRedirect: "/login"
}))

module.exports = router