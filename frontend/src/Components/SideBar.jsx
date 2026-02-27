import React from "react";

function SideBar({setIsHomeVisible})
{
    return(
        <div className="w-[20%] min-w-[20%] h-[100%] bg-white pb-56 m-auto mr-10 ml-0 border-black overflow-hidden shadow-bottom-black border-2 border-solid rounded-lg flex flex-col justify-center items-center">
            <button onClick={()=>{setIsHomeVisible(true)}} className="flex m-auto w-full 
            h-8 transition-all duration-200 bg-white hover:bg-black hover:text-white
            border-b-2 border-b-solid border-b-black
            flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-house w-max text-sm flex justify-center items-center m-auto ml-0 mr-2"></i>Home</button>
            
            <a href="#" className="flex m-auto w-full 
            h-8 transition-all duration-200 bg-white hover:bg-gray-400 hover:text-gray-900
            border-b-2 border-b-solid border-b-black
            flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-clock w-max text-sm flex justify-center items-center m-auto ml-0 mr-2"></i>Pending</a>
            
            <a href="#" className="flex m-auto w-full 
            h-8 transition-all duration-200 bg-white hover:bg-green-400 hover:text-green-900
            border-b-2 border-b-solid border-b-black
            flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-square-check w-max text-sm flex justify-center items-center m-auto ml-0 mr-2"></i>Accepted</a>
            
            <a href="#" className="flex m-auto w-full 
            h-8 transition-all duration-200 bg-white hover:bg-red-400 hover:text-red-900
            border-b-2 border-b-solid border-b-black
            flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-square-xmark w-max text-sm flex justify-center items-center m-auto ml-0 mr-2"></i>Rejected</a>
            
            <button onClick={()=>{setIsHomeVisible(false)}} className="flex m-auto w-full 
            h-8 transition-all duration-200 bg-white hover:bg-yellow-400 hover:text-yellow-900
            border-b-2 border-b-solid border-b-black 
            flex-grow justify-center items-center text-lg text-black font-thin"><i class="fa-solid fa-angles-up w-max text-sm flex justify-center items-center m-auto ml-0 mr-2"></i>Growth Hub</button>
        </div>
    );
}

export default SideBar;