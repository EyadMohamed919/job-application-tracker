const Job = require("../models/JobModel");
const User = require("../models/UserModel");
const { getJson } = require("serpapi");
const jwt = require("jsonwebtoken");

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
        const job = await Job.create(req.body);
        res.status(200).json({
            "message":"Job Application Created Successfully",
            "job":job
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

const getJobPostings = async (req, res) => {
    try {
        const token = req.cookies ? req.cookies.token : null;
        
        if (!token) {
            return res.status(403).json({ message: "Invalid token" });
        }

        const decoded = jwt.verify(token, "anykey");
        const userEmail = decoded.email;

        const user = await User.findOne({ email: userEmail });
        
        if (!user || !user.profession) {
            return res.status(400).json({ message: "User profession not found" });
        }

        const userProfession = user.profession;

        getJson({
            engine: "google_jobs",
            q: userProfession,
            location: "Austin, Texas, United States",
            google_domain: "google.com",
            hl: "en",
            gl: "us",
            api_key: process.env.SERP_KEY,
        }, (json) => {
            if (json.error) {
                return res.status(500).json({ error: json.error });
            }

            res.status(200).json({
                postings: json["jobs_results"] || []
            });
        });

    } catch (error) {
        console.error("getJobPostings error:", error);
        // Handle JWT expiration or DB errors specifically
        const status = error.name === "JsonWebTokenError" ? 403 : 500;
        return res.status(status).json({
            "message": "Failed to fetch jobs",
            "error": error.message
        });
    }
};

module.exports = [getAllJobApplications, createJobApplication, getJobPostings];