const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: [true,"The username already exists"], 
        trim: true 
    },
    password: { 
        type: String, 
        required: true,
        minlength: 6
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
