const taskModel = require("../models/tasks")

async function getTasks(_req,res) {
    try {
        res.json(await taskModel.find());
    } catch (error) {
        console.log(error);
    }
}

async function addTask(req,res) {
    try {
        const task = new taskModel({
            title: req.params.title,
        })
        await task.save();
        res.json(await taskModel.find());
    } catch (error) {
        console.log(error);
    }

}

async function deleteTask(req,res) {
    try {
       const title = req.params.title;
       await taskModel.deleteOne({title:`${title}`})
       res.end();
    } catch (error) {
        console.log(error);
    }
}

async function updateTask(req,res) {
    const {title} = req.params  ;
    const {newTitle} = req.body;
    const {isCompleted} = req.body;     
    try {
        await taskModel.updateOne({title:title}, {title:newTitle || title,isCompleted:isCompleted || false})
        res.json(await taskModel.find());
    } catch (error) {
        console.log(error);
    }
}

module.exports = {addTask,getTasks,deleteTask,updateTask}