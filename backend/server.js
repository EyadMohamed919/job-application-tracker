const express = require("express");
const mongoose = require("mongoose");
const jobRouter = require("./routes/JobRouter");
require("dotenv").config();
const cors = require('cors');
const PORT = 5000;
const app = express();

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed" + error);
    }
} 

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/job", jobRouter);
app.listen(PORT, console.log(`Server is running on port ${PORT}`));