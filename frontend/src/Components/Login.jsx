import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import { Link, Router, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [coverOn, setCoverOn] = useState(false);
    
    const navigate = useNavigate();
    const { login, user } = useContext(AuthContext);


    if(user != null)
    {
      navigate("/");
    }

    // useEffect(() => {
    //   setCoverOn(coverOn);
    // }, [coverOn]);

    const LoginWithToken = async () =>{
        const response = await axios.post("http://localhost:5000/api/user/login/token", {
        }, {withCredentials:true});
        console.log("Extracted Cookie: " + response.data);

        if(response)
        {
          setCoverOn(!coverOn);
          setTimeout(() => {
            login(response.data.user);
            navigate("/");
          }, 500);
        }
    }

    LoginWithToken();

    const handleLogin = async (e) =>{
      e.preventDefault();
      
      try {
        
        const response = await axios.post("http://localhost:5000/api/user/login", {
              email,
              password
          });
          
          console.log("Success:", response.data.message);

        if(response)
        {
          setCoverOn(!coverOn);
          setTimeout(() => {
            login(response.data.user);
            navigate("/");
          }, 500);
        }
        
    } catch (error) {
        if (error.response) {
            console.log("Error Status:", error.response.data);
            setMessage(error.response.data.message);
        } else {
            console.error("Error Message:", error.message);
        }
    }
    }

  return (
    <div className="w-full h-full p-10 overflow-hidden">
        <form onSubmit={(e)=>handleLogin(e)} className="w-1/3 bg-blue-300 flex-col flex p-10 border-2 border-black border-solid rounded-xl items-center justify-start">
        <h1 className="h-fit w-full justify-center mt-5 mb-16 flex items-center text-center text-black text-5xl font-bold">Login</h1>
            
            {message ? (<div className="h-10 flex rounded-lg mb-2 items-center justify-center w-full border-2 border-solid border-black bg-red-600 text-white"><i class="w-fit h-fit mr-2 fa-solid fa-circle-xmark"></i>Incorrect Credentials</div>): (<></>)}
            
            
            <input required className="h-20 mb-2 rounded-lg border-2 border-black border-solid shadow-bottom-black p-2 text-xl" placeholder="Enter your email" type="text" onChange={(e)=>setEmail(e.target.value)}  />
            <input required className="h-20 mb-2 rounded-lg border-2 border-black border-solid shadow-bottom-black p-2 text-xl" placeholder="Enter your password" type="text" onChange={(e)=>setPassword(e.target.value)} />

            <Link className="h-fit w-full justify-start m-auto mt-2 mb-2 ml-0 flex items-center text-left text-black" to={"/"}>Forgot Password?</Link>
            <button type="submit" className="h-20 mt-10 rounded-lg border-2 bg-white border-black border-solid shadow-bottom-black p-2 text-xl transition-all duration-200
            hover:bg-black hover:text-white hover:shadow-none">Submit</button>
        </form>

        <div className={`absolute bg-black left-0 w-full transition-all duration-200 h-full ${!coverOn ? "top-[100%]" : "top-0"}`}>
        </div>
    </div>
    
  )
}

export default Login