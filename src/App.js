import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from './components/Shop';


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
              <Shop/>
              }/>
        </Routes>
        </div>
      </BrowserRouter>
     
    </>
  );
}

export default App;
