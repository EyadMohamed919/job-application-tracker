import React, { useState } from 'react'

function Growth() {

    const noGoals = 5;
    const noCompletedGoals = 3;
    const [progressPercentage, setProgress] = useState(0);
    
    setTimeout(() => {
        setProgress(Math.round(noCompletedGoals/noGoals * 100));
    }, 300);

  return (
    <div className="w-[80%] h-max m-auto mt-10 flex flex-col">
        <div className="max-w-full h-52 m-auto flex">
        <div className="number-box shadow-bottom-red ml-0 mr-2 relative bg-transparent
                text-yellow-900 border-yellow-900 w-1/2 overflow-hidden">
                    <div
                        className="absolute transition-all duration-300 left-0 top-0 h-full bg-yellow-500 -z-10"
                        style={{ width: `${progressPercentage}%` }}
                    />
                
                <h3 className="h-max pt-7 text-6xl flex justify-center items-center font-bold m-auto">1/1</h3>
                <h3 className="h-fit w-fit text-2xl flex justify-center items-center m-auto">
                    <i class="fa-solid w-fit h-fit m-auto mr-2 fa-angles-up"></i>
                    {progressPercentage}% Goals Completed
                </h3>
                
            </div>
        </div>

        <div className="mt-4 mb-2 w-full h-fit flex justify-center items-center">
            <h2 className="page-subtitle">Goals & Tasks</h2>
            <button className="w-8 h-8 flex flex-col justify-center rounded-full 
            items-center bg-white shadow-bottom-black border-2 border-solid border-black text-black
            hover:bg-black hover:shadow-none hover:text-white transition-all duration-200">
               
                <i class="fa-solid fa-plus m-auto flex justify-center items-center text-xl "></i>
            
            </button>

            
        </div>
    </div>
  )
}

export default Growth