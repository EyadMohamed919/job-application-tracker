const express = require("express");
const jobRouter = require("./routes/JobRouter");
const connectDB = require("./config/MongoConfig");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const userRouter = require("./routes/userRouter");
const PORT = 5000;
const app = express();



connectDB();

// Middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(cookieParser());

const isAuthenticated = (req, res, next) =>{
    console.log(req.cookies);
    const token = req.cookies ? req.cookies.token : null;
    console.log("Token from upcomings: " + token);
    if(!token)
    {
        res.status(403).json({ message: "Invalid token" });
    }
    else
    {
        jwt.verify(token, "anykey", (err, decoded)=>{
            if(err) res.status(403).json({ message: "Invalid token" });
            console.log(decoded);
            req.user = decoded;
            next();
        });


    }
}

//app.use(isAuthenticated)

// Routers
app.use("/api/job", isAuthenticated,jobRouter);
app.use("/api/user", userRouter);
app.listen(PORT, console.log(`Server is running on port ${PORT}`));