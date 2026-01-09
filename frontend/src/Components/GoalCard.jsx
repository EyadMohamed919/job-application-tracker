import React from 'react'

function GoalCard() {
  return (
    <div className="border-2 p-3 border-solid border-yellow-600 rounded-2xl flex justify-center items-center">
        
        <div className="min-w-1/3 w-[28%] h-max flex flex-col justify-items-start mr-14">
            <h3 id="jobTitle" className="text-left text-3xl text-yellow-900 font-bold">Title</h3>
            <h3 id="companyTitle" className="text-left text-xl mt-6 w-fit flex justify-center items-center"><i className="fa-solid fa-clock w-fit m-auto mr-2"></i>Deadline</h3>
            <p id="companyDescription" className="text-left">Description</p>
        </div>

        

        <div className="w-48 h-32 mt-0 mb-1  flex flex-col rounded-xl shadow-bottom-yellow text-yellow-900 border-solid border-2 bg-yellow-400 border-yellow-900 m-auto mr-0
        hover:shadow-none hover:text-white hover:bg-yellow-900 duration-200 transition-all hover:cursor-pointer">
            <h3 className="h-max text-3xl flex justify-center items-center font-bold m-auto ">Completed</h3>
        </div>
    </div>
  )
}

export default GoalCard