import React from "react";

function JobForm()
{
    return(
            <form method="get" action="../form" id="jobForm" className="w-[80%] h-[80%] z-20 p-2 border-solid border-2 border-black bg-white rounded-lg shadow-bottom-black 
            fixed flex flex-col justify-start items-center top-[200%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500">
                <div className="w-full h-14 rounded-tr-md rounded-tl-md flex justify-end items-center">
                    
                    <div onClick={() => hideJobForm()} className="w-14 h-14 flex justify-center items-center shadow-bottom-red
                    rounded-md border-solid border-2 text-red-900  bg-red-400 border-red-900
                    hover:bg-red-100 hover:shadow-none transition-all duration-200 cursor-pointer">
                        <i className="fa-solid fa-x flex justify-center items-center text-xl "></i>
                    </div>

                </div>

            <h1 className="h-fit m-auto mt-0 mb-0 text-3xl font-bold">Add a New Job</h1>

            <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex flex-col justify-start items-start">
                <label for="jobTitle" className=" w-fit h-fit text-xl">Job Title</label>
                <input type="text" name="jobTile" placeholder="Enter job title/position"
                className="form-input-box"></input>
            </div>

            <div className="w-full h-20 mt-2 mb-0 m-auto p-1 flex justify-start items-start">
                <div className="flex flex-col mr-1">
                <label for="companyName" className=" w-fit h-fit text-xl">Company Name</label>
                    <input type="text" name="companyName" placeholder="Enter company name"
                    className="form-input-box"></input>
                </div>
                <div className="flex flex-col ml-1">
                <label for="companyDescription" className=" w-fit h-fit text-xl">Company Description</label>
                    <input type="text" name="companyDescription" placeholder="Enter company description"
                    className="form-input-box"></input>
                </div>
            </div>
            <button type="submit">Done</button>
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

export default JobForm;