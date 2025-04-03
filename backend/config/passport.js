const passport = require("passport")
const bcrypt = require("bcrypt")
const {Strategy} = require("passport-local")

const userModel = require("../models/user.js")

passport.use(new Strategy(async (username,password,cb) => {
    try {
        
        const user = await userModel.findOne({ username })
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                return cb(null,user)
            } else {
                return cb(null,false)    
            }
        }
        else {
           return cb("User not found")
        }
    } catch (error) {
        message = error.message
        return cb(message)
    }
}))

passport.serializeUser((user,cb) => {
    cb(null,user)
})

passport.deserializeUser((user,cb) => {
    cb(null,user)
})

module.exports = passport