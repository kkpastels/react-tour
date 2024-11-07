import React from 'react';
import logo from "../image/logo.svg";
import PageLinks from "./PageLinks";
import IconLinks from './IconLinks';
import { useState } from 'react';

function Nav() {
    const [isToggled, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggled);
    };
    return (
<nav classNameName="navbar">
    <div className="nav-logo">
        <a href="#home">
            <img src={logo} className="logo-link" alt="logo"/>
        </a>
    </div>
    {/* Navbar links */}
    <div className="nav-links">
        <PageLinks parentClass='nav-list' itemClass='nav-link' id='nav-list' />
        </div>
    <div className="nav-icons">
        {/* Navbar icon */}
        <IconLinks parentClass='nav-icon-list' itemClass='nav-icon' />
    </div>
    {/* <!-- mobile hamburger --> */}
    <div className="nav-mobile">
        <button 
            type="button" 
            className="nav-mobile-toggle" 
            id="nav-mobile-toggle" 
            onClick={handleToggle}
        >
            <i className="fa-solid fa-bars"></i>
        </button>
        <PageLinks
            parentClass={isToggled ? "mobile-nav-list active" : "mobile-nav-list"}
            itemClass="mobile-nav-link"
            id="mobile-nav-list"
            />
    </div>
</nav>
    );
}
export default Nav;
