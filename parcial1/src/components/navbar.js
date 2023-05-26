import React, { useState } from 'react';
import './styles/navbar.css';

function Navbar(props) {

    return (
        <div className="navbar">
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">El aroma magico</a>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;