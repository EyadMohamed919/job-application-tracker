import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import GoalCard from './GoalCard';

function Growth() {

  return (
    <div className="w-[80%] h-max m-auto mt-10 flex flex-col">
        <ProgressBar/>

        <div className="mt-4 mb-2 w-full h-fit flex justify-center items-center">
            <h2 className="page-subtitle">Goals & Tasks</h2>
            <button className="w-8 h-8 flex flex-col justify-center rounded-full 
            items-center bg-white shadow-bottom-black border-2 border-solid border-black text-black
            hover:bg-black hover:shadow-none hover:text-white transition-all duration-200">
               
                <i class="fa-solid fa-plus m-auto flex justify-center items-center text-xl "></i>
            
            </button>

            
        </div>

        <div>
            <GoalCard></GoalCard>
        </div>
    </div>
  )
}

export default Growth