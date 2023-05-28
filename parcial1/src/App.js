import img from './image1.png';

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.js';
import Listar from './components/listar.js';
import Login from './components/login.js';
import { FormattedMessage } from 'react-intl';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <img src={img} alt="imagen cafe" className='cafe-banner'></img>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/listar" element={<Listar/>} />
        </Routes>
      </BrowserRouter>
      <div className='info'>
        <span><FormattedMessage id='contacto' />: +57 3102105253 - info@elaromamagico.com - @elaromamagico</span>
      </div>
    </div>
  );
}

export default App;
