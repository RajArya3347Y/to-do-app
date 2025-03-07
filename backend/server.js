const express = require("express")
require("dotenv").config()

const PORT = process.env.PORT

const app = express();

const toDoAppRoute = require("./routes/appRoute")
const dbRoute = require("./routes/dbRoute")

app.use("/",toDoAppRoute);
app.use("/api",dbRoute)

app.listen(PORT,(err) => {
    console.log("Server is running at port 8000")
})