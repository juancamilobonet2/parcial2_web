import React, { useState } from 'react';
import logo from "../logo.png";
import './styles/navbar.css';

function Navbar(props) {

    return (
        <div className="navbar">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <img src={logo} alt="logo" className='logo'></img>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;