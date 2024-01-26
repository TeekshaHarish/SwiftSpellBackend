const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
// const MONGO_URI="mongodb+srv://siddharthgoel2105:sidd2105@cluster0.4olc2dc.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async() => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Successfully connected to database");
    } catch(error) {
        console.error(`Error in database connection : ${error}`);
    }
}

module.exports = connectDB;