import { useState } from "react";
import React from "react";
import JobForm from "./JobForm";
import StatusBar from "./StatusBar";

function Home()
{
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div className="w-[80%] h-max m-auto mt-10 flex flex-col">
            <JobForm isVisible={isVisible} setIsVisible={setIsVisible}></JobForm>
            
            <StatusBar></StatusBar>
            <div>
                <div className="mt-4 mb-2 w-full h-fit flex justify-center items-center">
                    <h2 className="page-subtitle">Recent Jobs</h2>
                    <button onClick={()=>setIsVisible(!isVisible)} className="w-8 h-8 flex flex-col justify-center rounded-full 
                    items-center bg-white shadow-bottom-black border-2 border-solid border-black text-black
                    hover:bg-black hover:shadow-none hover:text-white transition-all duration-200">
                        <i class="fa-solid fa-plus m-auto flex justify-center items-center text-xl "></i>
                    </button>
                </div>

                

               
            </div>
            
        </div>
        
    );
}

export default Home;