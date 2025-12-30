import { useEffect, useEffectEvent, useState } from "react";
import axios from "axios";
import React from "react";
import JobForm from "./JobForm";
import JobCard from "./JobCard";
import StatusBar from "./StatusBar";

function Home()
{
    const [isVisible, setIsVisible] = useState(false);
    const [noAccepted, setNoAccepted] = useState(0);

    const jobPlaceholder = [{
        title: "Job Title",
        company: "Company Name",
        companyDescription: "Company Description",
        location: "Location",
        employmentType: "Employment Type",
        date: "12-10-26",
        experience: "Experience Level",
        source: "Job Listing Source",
        status: "Application Status",
        salary: {
          amount: 1500000,
          period: "Yearly",
        },
      }];
  
    const [jobs, setJobs] = useState(jobPlaceholder)

    useEffect(() => {
        
        const fetchJobs = async()=>{
            const response = await axios.get("http://localhost:5000/api/job");
            const jobsData = response.data;
            setJobs(jobsData);

            const acceptedJobs = jobsData.filter(job => job.status == "Accepted");

            setNoAccepted(acceptedJobs.length);
        };

        fetchJobs()
    }, []);
    
    return(
        <div className="w-[80%] h-max m-auto mt-10 flex flex-col">
            <JobForm isVisible={isVisible} setIsVisible={setIsVisible}></JobForm>
            <StatusBar noAccepted={noAccepted}></StatusBar>
            <div>
                <div className="mt-4 mb-2 w-full h-fit flex justify-center items-center">
                    <h2 className="page-subtitle">Recent Jobs</h2>
                    <button onClick={()=>setIsVisible(!isVisible)} className="w-8 h-8 flex flex-col justify-center rounded-full 
                    items-center bg-white shadow-bottom-black border-2 border-solid border-black text-black
                    hover:bg-black hover:shadow-none hover:text-white transition-all duration-200">
                        <i class="fa-solid fa-plus m-auto flex justify-center items-center text-xl "></i>
                    </button>

                    
                </div>
                <div className="overflow-y-scroll h-[320px]">
                    {jobs && jobs.length > 0 ? jobs.map((job)=>{
                        return(<JobCard 
                            jobTitle={job.title}
                            companyName={job.company}
                            companyDescription={job.companyDescription}
                            location={job.location}
                            employmentType={job.employmentType}
                            date={job.date}
                            experience={job.experience}
                            source={job.source}
                            status={job.status}
                            salary={job.salary.amount}
                            period={job.salary.period}
                            ></JobCard>);
                    }) : (<>No application found</>)}
                </div>
                
               
            </div>
            
        </div>
        
    );
}

export default Home;