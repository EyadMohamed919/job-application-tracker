import React, { useState, useEffect } from "react";
import axios from "axios";

function JobForm({isVisible, setIsVisible}) {

  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    companyDescription: "",
    location: "On-Site",
    employmentType: "Full-Time",
    experience: "Entry Level",
    date: "",
    source: "",
    status: "Pending",
    amount: "",
    period: "per year",
  });

  


  useEffect(() => {
    setIsVisible(isVisible);
  }, [isVisible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const hideJobForm = () => {
    setIsVisible(false);
  };

  const submitJob = async (e) => {
    e.preventDefault();

    const job = {
      title: formData.jobTitle,
      company: formData.companyName,
      companyDescription: formData.companyDescription,
      location: formData.location,
      employmentType: formData.employmentType,
      date: formData.date,
      experience: formData.experience,
      source: formData.source,
      status: formData.status,
      salary: {
        amount: formData.amount,
        period: formData.period,
      },
    };

    try {
      const response = await axios.post("http://localhost:5000/api/job", job, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Job submitted successfully:", response.data);
      hideJobForm();
    } catch (error) {
      console.error("Error submitting job:", error.response?.data || error.message);
    }
  };

  return (
    <>
    <form
      onSubmit={submitJob}
      className={`w-[80%] h-[80%] z-20 p-2 border-solid border-2 border-black bg-white rounded-lg shadow-bottom-black 
      fixed flex flex-col justify-start items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
        isVisible ? "top-1/2" : "top-[200%]"
      }`}
    >
      <div className="w-full h-14 rounded-tr-md rounded-tl-md flex justify-end items-center">
        <div
          onClick={hideJobForm}
          className="w-14 h-14 flex justify-center items-center shadow-bottom-red rounded-md border-solid border-2 text-red-900 bg-red-400 border-red-900 hover:bg-red-100 hover:shadow-none transition-all duration-200 cursor-pointer"
        >
          <i className="fa-solid fa-x flex justify-center items-center text-xl"></i>
        </div>
      </div>

      <h1 className="h-fit m-auto mt-0 mb-0 text-3xl font-bold">Add a New Job</h1>

      {/* Job Title */}
      <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex flex-col justify-start items-start">
        <label htmlFor="jobTitle" className="w-fit h-fit text-xl">Job Title</label>
        <input
          required
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Enter job title/position"
          className="form-input-box"
        />
      </div>

      {/* Company Inputs */}
      <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
        <div className="flex flex-col mr-1">
          <label htmlFor="companyName" className="w-fit h-fit text-xl">Company Name</label>
          <input
            required
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
            className="form-input-box"
          />
        </div>
        <div className="flex flex-col ml-1">
          <label htmlFor="companyDescription" className="w-fit h-fit text-xl">Company Description</label>
          <input
            required
            type="text"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
            placeholder="Enter company description"
            className="form-input-box"
          />
        </div>
      </div>

      {/* Location & Employment Type */}
      <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
        <div className="flex flex-col mr-1">
          <label htmlFor="location" className="w-fit h-fit text-xl">Location</label>
          <select 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            className="form-input-box"
          >
            <option value="On-Site">On-Site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div className="flex flex-col ml-1">
          <label htmlFor="employmentType" className="w-fit h-fit text-xl">Employment Type</label>
          <select 
            name="employmentType" 
            value={formData.employmentType} 
            onChange={handleChange} 
            className="form-input-box"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>

      {/* Experience & Date */}
      <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
        <div className="flex flex-col mr-1">
          <label htmlFor="experience" className="w-fit h-fit text-xl">Experience</label>
          <select 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
            className="form-input-box"
          >
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
            <option value="Executive">Executive</option>
          </select>
        </div>
        <div className="flex flex-col ml-1">
          <label htmlFor="date" className="w-fit h-fit text-xl">Applied Date</label>
          <input 
            name="date" 
            type="date" 
            value={formData.date} 
            onChange={handleChange} 
            className="form-input-box" 
            required 
          />
        </div>
      </div>

      {/* Source & Status */}
      <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
        <div className="flex flex-col mr-1">
          <label htmlFor="source" className="w-fit h-fit text-xl">Source</label>
          <input 
            required 
            name="source" 
            value={formData.source} 
            onChange={handleChange} 
            className="form-input-box" 
            placeholder="LinkedIn, Indeed, etc." 
            type="text" 
          />
        </div>
        <div className="flex flex-col ml-1">
          <label htmlFor="status" className="w-fit h-fit text-xl">Status</label>
          <select 
            name="status" 
            value={formData.status} 
            onChange={handleChange} 
            className="form-input-box"
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Salary amount and period */}
      <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
        <div className="flex flex-col mr-1">
          <label htmlFor="amount" className="w-fit h-fit text-xl">Salary Amount</label>
          <input 
            required 
            name="amount" 
            value={formData.amount} 
            onChange={handleChange} 
            className="form-input-box" 
            type="number" 
            min={0}
          />
        </div>
        <div className="flex flex-col ml-1">
          <label htmlFor="period" className="w-fit h-fit text-xl">Salary Period</label>
          <select 
            name="period" 
            value={formData.period} 
            onChange={handleChange} 
            className="form-input-box"
          >
            <option value="per year">per year</option>
            <option value="per month">per month</option>
            <option value="per day">per day</option>
            <option value="per hour">per hour</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-[15%] h-14 mt-2 flex justify-center items-center shadow-bottom-black rounded-md border-solid border-2 text-black bg-white border-black hover:bg-black hover:shadow-none hover:text-white transition-all duration-200 cursor-pointer"
      >
        Done
      </button>
    </form>
    </>
  );
}

export default JobForm;