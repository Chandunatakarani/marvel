import React from 'react';
import { Home } from './Components/Home';
import {Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <div className='App'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />


          </Routes>

    </div>
    
    
   
  );
}

export default App;
