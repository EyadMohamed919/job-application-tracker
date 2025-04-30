import React from "react";
import JobForm from "./JobForm";

function Home()
{
    return(
        <div className="w-[80%] h-max m-auto mt-10 flex flex-col">
            <JobForm></JobForm>
            <div className="max-w-full h-52 m-auto flex">
                <div className="number-box shadow-bottom-red ml-0 mr-2 text-red-900  bg-red-400 border-red-900">
                    <h3 className="h-max pt-7 text-6xl flex justify-center items-center font-bold m-auto">19</h3>
                    <h3 className="h-max text-2xl flex justify-center items-center m-auto">Rejected</h3>
                </div>
                <div className="number-box shadow-bottom-gray mr-2 ml-2 text-gray-900 bg-gray-400 border-gray-900">
                    <h3 className="h-max pt-7 text-6xl flex justify-center items-center font-bold m-auto">7</h3>
                    <h3 className="h-max text-2xl flex justify-center items-center m-auto">Pending</h3>
                </div>
                <div className="number-box shadow-bottom-green ml-2 mr-0 text-green-900 bg-green-400 border-green-900">
                    <h3 className="h-max pt-7 text-6xl flex justify-center items-center font-bold m-auto">3</h3>
                    <h3 className="h-max text-2xl flex justify-center items-center m-auto">Accepted</h3>
                </div>   
            </div>

            <div>
                <div className="mt-4 mb-2 w-full h-fit flex justify-center items-center">
                    <h2 className="page-subtitle">Recent Jobs</h2>
                    <button onClick={()=>showJobForm()} className="w-8 h-8 flex flex-col justify-center rounded-full 
                    items-center bg-white shadow-bottom-black border-2 border-solid border-black text-black
                    hover:bg-black hover:shadow-none hover:text-white transition-all duration-200">
                        <i class="fa-solid fa-plus m-auto flex justify-center items-center text-xl "></i>
                    </button>
                </div>

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

               
            </div>
            
        </div>
        
    );
}

function showJobForm()
{
    const jobFormContainer = document.getElementById("jobFormContainer");
    const jobForm = document.getElementById("jobForm");

    // jobFormContainer.style.display = "flex";
    jobForm.style.top = "50%";
}

export default Home;