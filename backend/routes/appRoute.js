const express = require("express");
require("dotenv").config()

const router = express.Router();
// router.use(express.static("../frontend/dist"))

router.get("/", (req,res) => {
    if(req.isAuthenticated()){
        res.send(express.static("../frontend/dist"));
    }
    else{
        res.send("User not autenticated")
    }
})


module.exports = router