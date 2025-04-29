const express = require("express");
const Job = require("../models/Job");
const jobRouter = express.jobRouter;

jobRouter.get("/", async (req, res)=>{
    try {
        const job = await Job.find({});
        console.log("Fetched jobs successfully");
        console.log(job);
        res.json(job)
    } catch (error) {
        console.log("Failed job fetching: " + error);
    }
    
}).post("/", (req, res)=>{
    try {
        Job.create(req.body());
        console.log("Created Job successfully");
    } catch (error) {
        console.log("Failed creating job " + error);
    }
});

module.exports = jobRouter;