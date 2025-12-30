const Job = require("../models/Job");

const getAllJobApplications = async (req, res)=>{
    try {
        const job = await Job.find({});
        console.log("Fetched jobs successfully");
        console.log(job);
        res.json(job)
    } catch (error) {
        console.log("Failed job fetching: " + error);
    }
    
};

const createJobApplication = async (req, res) =>{
    
    try {
        Job.create(req.body);
        res.status(200).json({
            "message":"Job Application Created Successfully"
        });
        console.log(req.body);
    } catch (error) {
        res.status(500).json({
            "message":"Failed to create a Job Application",
            "error":error
        });
        console.log(error);
    }
};

module.exports = [getAllJobApplications, createJobApplication];