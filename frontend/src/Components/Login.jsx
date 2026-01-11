import React, { useState } from 'react'
import { Link } from 'react-router';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  return (
    <div className="w-full h-full p-10 overflow-hidden">
        <form className="w-1/3 bg-blue-300 flex-col flex p-10 border-2 border-black border-solid rounded-xl items-center justify-start">
        <h1 className="h-fit w-full justify-center mt-5 mb-16 flex items-center text-center text-black text-5xl font-bold">Login</h1>
            <input className="h-20 mb-2 rounded-lg border-2 border-black border-solid shadow-bottom-black p-2 text-xl" placeholder="Enter your email" type="text" onChange={(e)=>setEmail(e.target.value)}  />
            <input className="h-20 mb-2 rounded-lg border-2 border-black border-solid shadow-bottom-black p-2 text-xl" placeholder="Enter your password" type="text" onChange={(e)=>setPassword(e.target.value)} />

            <Link className="h-fit w-full justify-start m-auto mt-2 mb-2 ml-0 flex items-center text-left text-black" to={"/"}>Forgot Password?</Link>
            <button type="button" className="h-20 mt-10 rounded-lg border-2 bg-white border-black border-solid shadow-bottom-black p-2 text-xl transition-all duration-200
            hover:bg-black hover:text-white hover:shadow-none" onClick={()=>console.log(email)}>Submit</button>
        </form>
    </div>
  )
}

export default Login