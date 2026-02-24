const [getAllJobApplications, createJobApplication, getJobPostings] = require("../controllers/jobController");
const express = require("express");
const jobRouter = express.Router();

jobRouter.get("/", getAllJobApplications)
jobRouter.post("/", createJobApplication);
jobRouter.get("/postings", getJobPostings);

module.exports = jobRouter;