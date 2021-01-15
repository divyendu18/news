import React from 'react';
import Hamburger from './Hamburger';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="head">
                <h1><span className="tag">Hacker</span>News</h1>
            </div>
            <div>
            <Hamburger/>
            </div>
        </div>
        
    )
}

export default Navbar
