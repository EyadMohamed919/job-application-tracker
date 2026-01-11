const User = require("../models/UserModel");

const getAllUsers = async (req, res) =>{
    const users = User.find();
    res.json(users);
}

module.exports = { getAllUsers };