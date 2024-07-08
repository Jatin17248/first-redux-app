import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <>
 
      <BrowserRouter>
        <Navbar/>
       
        <div className='container'>
        <Routes>
          
        </Routes>
        </div>
      </BrowserRouter>
     
    </>
  );
}

export default App;
