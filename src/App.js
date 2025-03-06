import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App w-full h-full flex flex-col pt-2">
      <div className="w-[95%] h-16 flex justify-center shadow-bottom-black items-center pt-1 pb-1 mt-2 bg-white rounded-lg border-solid border-black border-2">
        <h1 className="h-max text-2xl font-bold text-black">Job Applications Tracker</h1>
      </div>
      <div className="w-[95%] flex justify-center items-center">
        <SideBar></SideBar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
