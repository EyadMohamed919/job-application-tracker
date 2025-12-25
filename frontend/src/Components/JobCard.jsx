import React from 'react'

function JobCard() {

    
  return (
    <div className="job-card">
        <div className="salary-box h-[100%]">
            <h3 className="h-max text-3xl flex justify-center items-center font-bold m-auto">$120,000</h3>
            <h3 className="h-max text-2xl flex justify-center items-center m-auto">per year</h3>
            
        </div>
        <div className="w-max h-max flex flex-col justify-items-start mr-14">
            <h3 id="jobTitle" className="text-left text-2xl font-bold">Front End Developer</h3>
            <h3 id="companyTitle" className="text-left text-xl mt-6">Dragons Bootcamp LLC</h3>
            <p id="companyDescription" className="text-left">CTO services and software outsourcing</p>
        </div>

        <div className="w-max h-max flex flex-col justify-items-start mr-14">
            <h3 id="jobType" className="text-left text-2xl font-bold">Remote</h3>
            <h3 id="jobContract" className="text-left text-xl mt-3">Full-Time</h3>
            <h3 id="jobLevel" className="text-left text-xl mt-3">Entry Level</h3>
        </div>

        <div className="w-max h-max flex flex-col justify-items-start">
            <h3 id="jobCountry" className="text-left text-2xl font-bold">United States</h3>
            <h3 id="jobAppliedDate" className="text-left text-xl mt-3">12/30/2024</h3>
            <a id="jobWebsite" href="#" className="text-left text-xl mt-3">Wuzzuf.com</a>
        </div>

        <div className="status-box h-[100%] bg-red-400 border-red-900 m-auto mr-0">
            <h3 className="h-max text-3xl flex justify-center items-center font-bold m-auto text-red-900">Rejected</h3>
        </div>
    </div>
  )
}

export default JobCard