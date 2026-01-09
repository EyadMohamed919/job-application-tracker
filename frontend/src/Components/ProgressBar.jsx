import React, { useState } from 'react'

function ProgressBar() {
    const noGoals = 5;
    const noCompletedGoals = 3;
    const [progressPercentage, setProgress] = useState(0);
    
    setTimeout(() => {
        setProgress(Math.round(noCompletedGoals/noGoals * 100));
    }, 300);  
    return (
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
  )
}

export default ProgressBar