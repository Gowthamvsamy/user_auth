const mongoose = require('mongoose');
require('dotenv').config();

async function createDbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = { createDbConnection };