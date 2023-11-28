
import React from 'react';
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navstyles.css';
export const Navbar = () => {
    const navref= useRef();
    const showNav = () => {
        navref.current.classList.toggle('nav-show');
    }
    return <header>
    
    <nav className="nav" ref={navref}>
        <h1 className="logo">Foodie</h1>
        
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/restaurants"><li>Restaurants</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
        
    </nav>
    
    </header>


}
