import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext';
import axios from "axios";

function Post()
{
    
    return (
        <div >

        </div>
    );
}
function Postings() {
    const { getUserData } = useContext(AuthContext);
    const user = getUserData();
    const [job, setJob] = useState(null);
    const [level, setLevel] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(()=>{
        const setValues = ()=>{
            console.log(user);
            
            if(user)
            {
                setJob(user.profession);
                setLevel(user.degree);
                setLocation("US");    
            }
        }

        const getJobs = async () => {
            try {
                const result = await axios.get("http://api.adzuna.com/v1/api/jobs/us/search/1", {
                    params: {
                        app_id: "5eba2eba",
                        app_key: "28f23d8ca0603f452739b27dcad0bc09",
                        results_per_page: 10,
                        what: user.profession,
                        'content-type': 'application/json'
                    }
                });
                
                console.log(result.data.results); 
            } catch (error) {
                console.error("API Call Failed:", error.message);
            }
        }

        setValues();
        getJobs();
    }, []);
    

    return (
        <div className="w-[95%] h-fit m-auto mt-10 ">
            <h2 className='ml-0 text-left text-xl'>Searching jobs for '{job}' in '{location}'</h2>
            <div className="w-full h-[400px] m-auto mt-10 border-solid border-2 border-black rounded-md bg-orange-600">
                {Post()}
            </div>
        </div>
    )
}

export default Postings