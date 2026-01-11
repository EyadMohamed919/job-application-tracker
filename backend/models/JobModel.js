const express = require("express");
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title:{ type:String, required:true },
    company:{ type:String, required:true },
    companyDescription:{ type:String, required:true },
    location:{ type:String, required:true },
    employmentType: { type: String, enum: ['Full-Time', 'Part-Time', 'Contract', 'Temporary', 'Internship'], required: true },
    date: { type: String, required:true },
    experience:{ type: String, enum: ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'], required: true },
    source: { type: String, required: true },
    status:{ type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    salary: {
        amount: { type: Number, required: true },
        period: { type: String, enum: ['per year', 'per month', 'per hour'], required: true }
      }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;