import React from "react";
import Home from "./pages/home";
import { Routes, Route } from 'react-router-dom'; 
import Navbar from "./navbar/navbar";




function App() {

  return (
     
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          


        </Routes>
    
    </div>
  );
}

export default App;
