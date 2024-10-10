import React from 'react';
import { Home } from './Components/Home';
import {Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css';


function App() {
  return (
    <div className='App'>
            <Home />
            <div className='logg'>
            <Login />
            <Register />
            </div>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/Login' element={<Login />} /> */}
            {/* <Route path='/Register' element={<Register />} /> */}


          </Routes>

    </div>
    
    
   
  );
}

export default App;
