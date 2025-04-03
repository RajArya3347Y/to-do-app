const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: [true,"The account already already exists, try loging in"], 
        trim: true 
    },
    password: { 
        type: String, 
        required: true,
        trim:true,
        minlength: [6,"Minimum length is 6"]
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
