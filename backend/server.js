const config = require("./config/env.js")

const app = require("./app.js")


const PORT = config.PORT


const connectDB = require("./config/connectDB.js")
const DATABASE_URL = config.DATABASE_URL;
connectDB(DATABASE_URL)

app.listen(PORT,(err) => {
    console.log("Server is running at port 8000")
})