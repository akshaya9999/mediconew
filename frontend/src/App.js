import './App.css';
import Home from "./components/Home";
import Explore from './components/Explore';
import Add from './components/Add';
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
    <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>


      </div>
      </>
  );
}


export default App;
