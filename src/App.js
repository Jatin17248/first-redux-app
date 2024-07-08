import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bank from './components/bank';


function App() {
  
  return (
    <>
 
      <BrowserRouter>
        <Navbar/>
       
        <div className='container'>
        <Routes>
                        <Route
            exact
            path="/"
            element={
              <Bank/>
              }/>
        </Routes>
        </div>
      </BrowserRouter>
     
    </>
  );
}

export default App;
