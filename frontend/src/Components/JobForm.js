import React from "react";
import axios from "axios";
function JobForm()
{
    return(
            <form onSubmit={()=>{submitJob(
                document.getElementById("jobTitle").value,
                document.getElementById("companyName").value,
                document.getElementById("companyDescription").value,
                document.getElementById("location").value,
                document.getElementById("employmentType").value,
                document.getElementById("experience").value,
                document.getElementById("date").value,
                document.getElementById("source").value,
                document.getElementById("status").value,
                document.getElementById("amount").value,
                document.getElementById("period").value
            )}} id="jobForm" className="w-[80%] h-[80%] z-20 p-2 border-solid border-2 border-black bg-white rounded-lg shadow-bottom-black 
            fixed flex flex-col justify-start items-center top-[200%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500">
                <div className="w-full h-14 rounded-tr-md rounded-tl-md flex justify-end items-center">
                    
                    <div onClick={() => hideJobForm()} className="w-14 h-14 flex justify-center items-center shadow-bottom-red
                    rounded-md border-solid border-2 text-red-900  bg-red-400 border-red-900
                    hover:bg-red-100 hover:shadow-none transition-all duration-200 cursor-pointer">
                        <i className="fa-solid fa-x flex justify-center items-center text-xl "></i>
                    </div>

                </div>

            <h1 className="h-fit m-auto mt-0 mb-0 text-3xl font-bold">Add a New Job</h1>

            {/* Job Title */}
            <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex flex-col justify-start items-start">
                <label for="jobTitle" className=" w-fit h-fit text-xl">Job Title</label>
                <input required type="text" name="jobTile" id="jobTitle" placeholder="Enter job title/position"
                className="form-input-box"></input>
            </div>

            {/* Company Inputs */}
            <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
                <div className="flex flex-col mr-1">
                <label for="companyName" className=" w-fit h-fit text-xl">Company Name</label>
                    <input required type="text" name="companyName" id="companyName" placeholder="Enter company name"
                    className="form-input-box"></input>
                </div>
                <div className="flex flex-col ml-1">
                <label for="companyDescription" className=" w-fit h-fit text-xl">Company Description</label>
                    <input required type="text" name="companyDescription" id="companyDescription" placeholder="Enter company description"
                    className="form-input-box"></input>
                </div>
            </div>

            {/*  location & employment type */}
            <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
                <div className="flex flex-col mr-1">
                <label for="location" className=" w-fit h-fit text-xl">Location</label>
                    
                    <select id="location" className="form-input-box">
                        <option value="On-Site">On-Site</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                <div className="flex flex-col ml-1">
                <label for="employmentType" className=" w-fit h-fit text-xl">Employment Type</label>
                    <select id="employmentType" className="form-input-box">
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Temporary">Temporary</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
            </div>

            {/*  Experience & Date */}
            <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
                <div className="flex flex-col mr-1">
                <label for="experience" className=" w-fit h-fit text-xl">Experience</label>
                    
                    <select id="experience" className="form-input-box">
                        <option value="Entry Level">Entry Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior Level">Senior Level</option>
                        <option value="Executive">Executive</option>
                    </select>
                </div>
                <div className="flex flex-col ml-1">
                <label for="date" className=" w-fit h-fit text-xl">Applied Date</label>
                    <input id="date" className="form-input-box" type="date" required />
                </div>
            </div>

            {/*  Source & Status */}
            <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
                <div className="flex flex-col mr-1">
                <label for="source" className=" w-fit h-fit text-xl">Source</label>
                  <input required id="source" className="form-input-box" placeholder="Enter the website where you applied" type="text" />
                </div>
                <div className="flex flex-col ml-1">
                <label for="status" className=" w-fit h-fit text-xl">Status</label>
                    
                    <select id="status" className="form-input-box">
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
            </div>

            {/*  Salary amount and period */}
            <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
                <div className="flex flex-col mr-1">
                <label for="amount" className=" w-fit h-fit text-xl">Salary Amount</label>
                  <input required id="amount" className="form-input-box" placeholder="Enter the amount in the currency set" type="number" min={0}/>
                </div>
                <div className="flex flex-col ml-1">
                <label for="period" className=" w-fit h-fit text-xl">Salary Period</label>
                    
                    <select id="period" className="form-input-box">
                        <option value="per year">per year</option>
                        <option value="per month">per month</option>
                        <option value="per day">per day</option>
                        <option value="per hour">per hour</option>
                    </select>
                </div>
            </div>
            
            <button type="submit" className="w-[15%] h-14 mt-2 flex justify-center items-center shadow-bottom-black
                    rounded-md border-solid border-2 text-black bg-white border-black
                    hover:bg-black hover:shadow-none hover:text-white transition-all duration-200 cursor-pointer">Done</button>
            </form>
    );
}

function hideJobForm()
{
    const jobFormContainer = document.getElementById("jobFormContainer");
    const jobForm = document.getElementById("jobForm");

    // jobFormContainer.style.display = "none";
    jobForm.style.top = "200%";
}

async function submitJob(title, company, companyDescription, location, employmentType, experience, date, source, status, amount, period)
{
    event.preventDefault();
    const job = {
        title:title,
        company:company,
        companyDescription:companyDescription,
        location:location,
        employmentType:employmentType,
        date:date,
        experience:experience,
        source:source,
        status:status,
        salary: {
            amount:amount,
            period:period
        }
    }

    try {
        const response = await axios.post("http://localhost:5000/api/job", job, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        console.log("Job submitted successfully:", response.data);
      } catch (error) {
        console.error("Error submitting job:", error.response?.data || error.message);
      }
} 

export default JobForm;