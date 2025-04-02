require("dotenv").config();

const config = {
    PORT: process.env.PORT || 5000,  // Default to 5000 if not set
    DATABASE_URL: process.env.DATABASE_URL || '',  // Ensure DB URI is set
}

module.exports = config
