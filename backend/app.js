const express = require("express")


const app = express();

const toDoAppRouter = require("./routes/appRoute")
const loginRouter = require("./routes/loginRoute")
const signupRouter = require("./routes/signupRoute")
const dbRouter = require("./routes/dbRoute")

app.use("/", toDoAppRouter);
app.use("/api", dbRouter)
app.use('/login',loginRouter),
app.use("/signup",signupRouter)

module.exports = app