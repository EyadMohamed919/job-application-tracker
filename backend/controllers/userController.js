const User = require("../models/UserModel");

const getAllUsers = async (req, res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
        console.log("Fetching All Users Successfully");
    } catch (error) {
        res.status(500).json({
            "message":"Failed to Fetch All Users"
        });
    }
}

const login = async (req, res) =>{
    try {
        const user = await User.findOne({email: req.body.email});
        if(user.password == req.body.password && user.email == req.body.email)
        {
            res.status(200).json({
                "message":"User Logged In Successfully",
                "user":user
            });
            console.log("User Logged In Successfully");
        }
        else
        {
            res.status(404).json({
                "message":"Incorrect Credentials"
            });

            console.log("Incorrect Credentials");
        }
        
        
    } catch (error) {
        res.status(500).json({
            "message":"Failed to Fetch User",
            "error":error
        });
        console.log("Failed to login user" + error);
    }
}

const getUser = async (req, res) =>{
    try {
        const user = await User.findOne(req.body);
        res.status(200).json(users);
        console.log("Fetching User Successfully");
    } catch (error) {
        res.status(500).json({
            "message":"Failed to Fetch User",
            "user": user
        });
    }
}

const createUser = async (req, res) =>{
    try {
        const user = await User.create(req.body);
        res.status(202).json({
            "message":"Created a New User Successfully",
            "user":user
        });
        console.log({
            "message":"Created a New User Successfully",
            "user":user
        });
    } catch (error) {
        res.status(500).json({
            "message":"Failed to Create a New User",
            
        });

        console.log(error);
    }
    
}

module.exports = { getAllUsers, createUser, login };