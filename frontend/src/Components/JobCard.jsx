import React, { useState } from 'react'

function JobCard({
    jobTitle, 
    companyName, 
    companyDescription, 
    location, 
    employmentType,
    date,
    experience,
    source,
    status,
    salary,
    period
}) {

    
  return (
    <div className="job-card">
        <div className="salary-box h-[100%]">
            <h3 className="h-max text-3xl flex justify-center items-center font-bold m-auto">{salary}</h3>
            <h3 className="h-max text-2xl flex justify-center items-center m-auto">{period}</h3>
            
        </div>
        <div className="min-w-1/3 w-[28%] h-max flex flex-col justify-items-start mr-14">
            <h3 id="jobTitle" className="text-left text-2xl font-bold">{jobTitle}</h3>
            <h3 id="companyTitle" className="text-left text-xl mt-6">{companyName}</h3>
            <p id="companyDescription" className="text-left">{companyDescription}</p>
        </div>

        <div className="h-max flex flex-col min-w-1/3 w-[12%] justify-items-start mr-14">
            <h3 id="jobType" className="text-left text-2xl font-bold">{location}</h3>
            <h3 id="jobContract" className="text-left text-xl mt-3">{employmentType}</h3>
            <h3 id="jobLevel" className="text-left text-xl mt-3">{experience}</h3>
        </div>

        <div className="w-max h-max flex flex-col justify-items-start">
            <h3 id="jobAppliedDate" className="text-left text-xl mt-3">{date}</h3>
            <a id="jobWebsite" href={source} className="flex-row w-fit flex justify-center items-center text-left text-xl mt-3"><i class="m-auto mr-1 w-fit fa-solid fa-globe"></i>{source}</a>
        </div>

        <div className="status-box h-[100%] bg-red-400 border-red-900 m-auto mr-0">
            <h3 className="h-max text-3xl flex justify-center items-center font-bold m-auto text-red-900">{status}</h3>
        </div>
    </div>
  )
}

export default JobCard