const express = require("express");
const {MongoClient, ServerApiVersion} = require("mongodb");
require("dotenv").config();
const app = express();
const PORT = 5000;

const client = new MongoClient(process.env.MONGO_URL, {
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
});

const connectDB = async ()=>{
    try {
        await client.connect();
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error);
    }
};

connectDB();

app.get("/", (req, res)=>{
    res.send("Hello world");
})

// Start the server
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})