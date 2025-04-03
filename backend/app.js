const express = require("express")
const session = require("express-session")
const passport = require("./config/passport")

const config = require("./config/env")


const app = express();

const toDoAppRouter = require("./routes/appRoute")
const loginRouter = require("./routes/loginRoute")
const signupRouter = require("./routes/signupRoute")
const dbRouter = require("./routes/dbRoute")

// Middlewares
app.use(session({
    secret: config.SECRET,
    resave: false,
    saveUninitialized:true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use("/", toDoAppRouter);
app.use("/api", dbRouter)
app.use('/login',loginRouter),
app.use("/signup",signupRouter)


module.exports = app