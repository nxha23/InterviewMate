import { Link } from "react-router-dom"
import "../CSS/NavbarStyles.css"

import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
        <div className="header">
            <Link to="/">
                <img src="../images/logoimg.png" alt="logo" width={200}/>      
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/BusinessPlan">Business Plan</Link>
                </li>
                <li>
                    <Link to="/FinancialPlan">Financial Plan</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                <FaTimes size={20} style={{color:"#101635"}}/>
                ) : ( 
                <FaBars size={20} style={{color:"#101635"}}/> 
                )}  
            </div>    
        </div>
    )
}

export default Navbar;
