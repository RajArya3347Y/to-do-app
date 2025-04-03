require("dotenv").config();

const config = {
    PORT: process.env.PORT, 
    DATABASE_URL: process.env.DATABASE_URL,
    SALT_ROUNDS:Number(process.env.SALT_ROUNDS),
    SECRET: process.env.SECRET
}

module.exports = config
