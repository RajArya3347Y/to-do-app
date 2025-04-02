const userModel = require("../models/user.js")

async function signup(req,res,){
    username = req.body.username;
    password = req.body.password
    
    try {
        const user = new userModel({
            username:username,
            password:password
        })
        await user.save(user)
        res.end()

    } catch (error) {
        message = error.message
        res.status(404)
        res.json({message})
    }
}

async function login(req,res,) {
    
    username = req.body.username;
    password = req.body.password

    try {
        const user = await userModel.find({username})
        res.json(user)
    } catch (error) {
        error.message
        res.status(404)
        res.json({message})
    }
}

module.exports = {login,signup}