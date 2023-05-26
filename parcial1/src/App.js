import img from './image1.png';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Principal from './components/principal.js';
import Login from './components/login.js';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <img src={img} alt="imagen cafe"></img>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/principal" element={<Principal/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
