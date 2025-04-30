import React from "react";

function SideBar()
{
    return(
        <div className="w-[20%] h-[80%] bg-white pb-56 m-auto mt-10 mr-10 ml-0 border-black shadow-bottom-black border-2 border-solid rounded-lg flex flex-col justify-center items-center">
            <a href="#" className="flex m-auto w-full h-max flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-house w-max text-sm flex justify-center items-center text-black m-auto ml-0 mr-2"></i>Home</a>
            <hr className="h-0.5 w-full bg-black"></hr>
            <a href="#" className="flex m-auto w-full h-max flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-clock w-max text-sm flex justify-center items-center text-black m-auto ml-0 mr-2"></i>Pending</a>
            <hr className="h-0.5 w-full bg-black"></hr>
            <a href="#" className="flex m-auto w-full h-max flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-square-check w-max text-sm flex justify-center items-center text-black m-auto ml-0 mr-2"></i>Accepted</a>
            <hr className="h-0.5 w-full bg-black"></hr>
            <a href="#" className="flex m-auto w-full h-max flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-square-xmark w-max text-sm flex justify-center items-center text-black m-auto ml-0 mr-2"></i>Rejected</a>
            <hr className="h-0.5 w-full bg-black"></hr>
            <a href="#" className="flex m-auto w-full h-max flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-building w-max text-sm flex justify-center items-center text-black m-auto ml-0 mr-2"></i>Companies</a>
        </div>
    );
}

export default SideBar;