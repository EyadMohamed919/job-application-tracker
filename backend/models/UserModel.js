const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    major: {type: String, required: true},
    degree: {
        type: String,
        required: [true, 'Please specify a degree'],
        enum: {
            values: ['Bachelors', 'Masters', 'PhD', 'Associate', 'High School'],
            message: '{VALUE} is not a supported degree'
        }
    },
    profession: {type: String, required: true}
});

const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;