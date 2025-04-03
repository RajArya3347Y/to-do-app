const bcrypt = require("bcrypt");

const saltRounds = require("../config/env.js").SALT_ROUNDS

const userModel = require("../models/user.js");

async function signup(req, res,) {
    username = req.body.username;
    password = req.body.password
    

    try {
        // Password Hasing
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        const user = new userModel({
            username: username,
            password: hashedPassword
        })
        await user.save(user)
        
        res.end()
        

    } catch (error) {
        message = error.message
        res.status(404)
        res.json({ message })
    }
}

async function login(req, res,) {
    
}

module.exports = { login, signup }