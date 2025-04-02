const express = require("express")


const app = express();

const toDoAppRoute = require("./routes/appRoute")
const dbRoute = require("./routes/dbRoute")

app.use("/", toDoAppRoute);
app.use("/api", dbRoute)

module.exports = app