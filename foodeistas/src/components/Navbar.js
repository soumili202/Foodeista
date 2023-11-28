
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
            <Link to="/" className="x"><li>Home</li></Link>
            <Link to="/about" className="x"><li>About</li></Link>
            <Link to="/restaurants" className="x"><li>Restaurants</li></Link>
            <Link to="/contact" className="x"><li>Contact</li></Link>
        </ul>
        
    </nav>
    
    </header>


}
