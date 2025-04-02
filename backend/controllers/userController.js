const userModel = require("../models/user.js")

async function signup(req, res,) {
    username = req.body.username;
    password = req.body.password

    try {
        const user = new userModel({
            username: username,
            password: password
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
    

    username = req.body.username;
    password = req.body.password


    try {
        const user = await userModel.findOne({ username })
        if (password === user.password) {
            res.json({message:"User authenticated"})
        } else {
            res.status(404)
            res.json({ message: "Incorrect Password" })
        }
    } catch (error) {
        message = error.message
        res.status(404)
        res.json({ message })
    }
}

module.exports = { login, signup }