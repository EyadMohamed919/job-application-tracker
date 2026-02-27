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

const loginWithToken = async (req, res) =>{
    try {
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
                if(err) return res.status(403).json({ message: "Invalid token" });
                console.log(decoded);
                res.status(200).json({
                    "message": "User Logged In Successfully",
                    "user": {
                        fname: decoded.fname,
                        lname: decoded.lname,
                        email: decoded.email
                    }
                })
            });


        }
    } catch (error) {
        console.error("LoginWithToken error:", error);
        return res.status(500).json({
            "message": "Failed to Fetch User Using Token",
            "error": error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user && user.password === req.body.password) {
            const token = jwt.sign({
                fname: user.fname,
                lname: user.lname,
                email:user.email,
                profession: user.profession,
                degree: user.degree,
                location:user.location
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
                    email: user.email,
                    profession: user.profession,
                    degree: user.degree,
                    location:user.location
                }
            });

        } else {
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

 const logout =  (req, res) =>{
    // const token = jwt.sign({"logout":true}, "anykey", {"expiresIn":new Date(0)})
    console.log("Attempting to Logout");
    res.cookie("token", "token", {
        httpOnly: true,
        sameSite: 'strict',
        path: "/",
        maxAge: 3 * 24 * 60 * 60 * 1000,
        expiresIn: 0
    });

    res.status(200).json({
        message:"Logged out successfully"
    });

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

module.exports = { getAllUsers, createUser, login, loginWithToken, logout};