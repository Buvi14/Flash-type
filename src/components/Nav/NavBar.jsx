import React from 'react'
import flash from './flash-logo.png';
import linklogo from './link-buvan.png';
import './Nav.css';

export default function NavBar() {
    return (
        // whole nav bar is created here and designed in Nav.css in the same folder
        <div className="nav-container">
            <div className="nav-left">
                <img src={flash} alt="flash-logo" className="logo" />
                <p className="logo-name">Flash Type</p>
            </div>
            <div className="nav-right">
                <a href="https://www.linkedin.com/in/buvankumar/" target="_blank" rel="noreferrer">
                    <img src={linklogo} alt="linkedin" className="linkedin" />
                </a>
            </div>
        </div>
    )
}
