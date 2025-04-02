const express = require("express");
require("dotenv").config()

const router = express.Router();

// DB

const {addTask,getTasks,deleteTask,updateTask, getIsCompleted} = require('../controllers/todoController')

router.use(express.json())

router.get('/',getTasks)
router.get('/:title',getIsCompleted)
router.post("/:title",addTask)
router.delete("/:title",deleteTask)
router.patch("/:title",updateTask)

module.exports = router

