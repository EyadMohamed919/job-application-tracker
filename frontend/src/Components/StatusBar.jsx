import { useEffect, useState } from "react"
import React from 'react'

function StatusBar() {
  
    const icons = [
        "fa-solid fa-hourglass-start",
        "fa-solid fa-hourglass-half",
        "fa-solid fa-hourglass-end"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 300);

        return () => clearInterval(interval);
    }, [icons.length]);

    return (
    <div className="max-w-full h-52 m-auto flex">
        <div className="number-box shadow-bottom-red ml-0 mr-2 text-red-900  bg-red-400 border-red-900">
            <h3 className="h-max pt-7 text-6xl flex justify-center items-center font-bold m-auto">19</h3>
            <h3 className="h-fit w-fit text-2xl flex justify-center items-center m-auto">
                <i class="fa-solid w-fit h-fit m-auto mr-2 fa-ban"></i>
                Refused
            </h3>
        </div>
        <div className="number-box shadow-bottom-gray mr-2 ml-2 text-gray-900 bg-gray-400 border-gray-900">
            <h3 className="h-max pt-7 text-6xl flex justify-center items-center font-bold m-auto">7</h3>
            <h3 className="h-fit w-fit text-2xl flex justify-center items-center m-auto">
                <i className={`${icons[index]} w-fit h-fit m-auto mr-2`}></i>
                Pending
            </h3>
        </div>
        <div className="number-box shadow-bottom-green ml-2 mr-0 text-green-900 bg-green-400 border-green-900">
            <h3 className="h-max pt-7 text-6xl flex justify-center items-center font-bold m-auto">3</h3>
            <h3 className="h-max text-2xl flex justify-center items-center m-auto">Accepted</h3>
        </div>   
    </div>
  )
}

export default StatusBar