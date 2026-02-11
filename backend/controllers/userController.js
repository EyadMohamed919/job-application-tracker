const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

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

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user && user.password === req.body.password) {
            const token = jwt.sign({
                fname: user.fname,
                lname: user.lname,
                email:user.email
            }, "anykey", { expiresIn: "3d" });

            res.cookie("token", token, {
                httpOnly: true,
                sameSite: 'strict',
                path: "/",
                maxAge: 3 * 24 * 60 * 60 * 1000,
                expiresIn: 3 * 24 * 60 * 60 * 1000
            });
            

            console.log(token);

            // 2. Send the JSON response LAST and RETURN
            return res.status(200).json({
                "message": "User Logged In Successfully",
                "user": {
                    fname: user.fname,
                    lname: user.lname,
                    email: user.email
                }
            });

        } else {
            // 3. Always use return when sending error responses
            return res.status(401).json({ "message": "Incorrect Credentials" });
        }

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            "message": "Failed to Fetch User",
            "error": error.message
        });
    }
};

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