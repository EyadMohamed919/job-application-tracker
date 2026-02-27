import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext';
function Postings() {
    const { getUserData } = useContext(AuthContext);
    const user = getUserData();
    const [job, setJob] = useState(null);
    const [level, setLevel] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(()=>{
        const setValues = ()=>{
            if(user)
            {
                setJob(user.profession);
                setLevel(user.degree);
                setLocation(user.location);    
            }
        }

        setValues();
    }, []);
    

    return (
        <div className="w-[95%] h-fit m-auto mt-10 ">
            <h2 className='ml-0 text-left text-xl'>Searching jobs for '{job}' in '{location}'</h2>
            <div className="w-full h-[400px] m-auto mt-10 border-solid border-2 border-black rounded-md bg-orange-600">

            </div>
        </div>
    )
}

export default Postings