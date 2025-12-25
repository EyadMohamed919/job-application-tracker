const [getAllJobApplications, createJobApplication] = require("../controllers/jobController");
const express = require("express");
const jobRouter = express.Router();

jobRouter.get("/", getAllJobApplications)
jobRouter.post("/", createJobApplication);

module.exports = jobRouter;