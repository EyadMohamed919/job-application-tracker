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
        const database = client.db("tracker");
        const user = database.collection("user");
        

        const result = await user.find({
            "age":{$lt:20}
        }).toArray();
        
        console.log(result);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error);
    }
};

connectDB();

app.get("http://localhost:3000/", (req, res)=>{
    res.send("Hello world");
})

app.get("http://localhost:3000/form", (req, res)=>{
    res.send(req.params);
});


// Start the server
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})