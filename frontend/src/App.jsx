import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import { useContext, useState } from 'react';
import Growth from './Components/Growth';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router';
import axios from 'axios';

function App() {
  
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const { getUserData, logout } = useContext(AuthContext);
  const [coverOn, setCoverOn] = useState(true);
  const user = getUserData();
  const navigate = useNavigate();
  if(!user)
  {
    navigate("Login");
  }
 
  async function logoutUser()
  {
    const response = await axios.get("http://localhost:5000/api/user/logout");
    if(response){
      
      logout();
      navigate("/Login");
    }
  }

  setTimeout(()=>setCoverOn(false), 500)
  return (
    <div className="App w-full h-full flex flex-col pt-2">
      <div className="w-[95%] h-16 relative flex justify-center shadow-bottom-black items-center pt-1 pb-1 mt-2 bg-white rounded-lg border-solid border-black border-2">
        <h1 className="h-max text-2xl font-bold text-black">Job Applications Tracker</h1>

        <i onClick={()=>logoutUser()} class="w-auto h-[80%] bg-red-400 aspect-square flex rounded-lg border-2 border-solid
        border-red-900 shadow-bottom-red margin absolute right-4 top-1 transition-all duration-200
        hover:shadow-none hover:top-[0.35rem]
         text-red-900 justify-center items-center fa-solid fa-right-from-bracket"></i>
      </div>
      <div className="w-[95%] relative overflow-hidden flex justify-center items-center">
        <SideBar setIsHomeVisible={setIsHomeVisible}></SideBar>
        
        {isHomeVisible ? (<Home></Home>) : (<Growth></Growth>)}
      </div>


      <div className={`absolute bg-black left-0 w-full transition-all duration-200 h-full ${!coverOn ? "top-[-100%]" : "top-0"}`}>
      </div>
    </div>
  );
}

export default App;
