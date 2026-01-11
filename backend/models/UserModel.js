const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    major: {type: String, required: true},
    profession: {type: String, required: true}
});

const userModel = new mongoose.model("User", userModel);

module.exports = userModel;