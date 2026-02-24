const Job = require("../models/JobModel");
const { getJson } = require("serpapi");

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

const getJobPostings = async () =>{
    

    getJson({
      engine: "google_jobs",
      q: "Barista",
      location: "Austin, Texas, United States",
      google_domain: "google.com",
      hl: "en",
      gl: "us",
      api_key: "3ec099c38bb21d22615659ed0309a340b623d6f03ca3f2418a74ac9a0a0380d4"
    }, (json) => {
      console.log(json["jobs_results"]);
    }); 
}

module.exports = [getAllJobApplications, createJobApplication];