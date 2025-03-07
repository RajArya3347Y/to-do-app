const mongoose = require("mongoose");

// Define schema
const taskSchema = new mongoose.Schema({
    title: {type:String,required:true},
    isCompleted: {type:Boolean,default:false}
})

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel