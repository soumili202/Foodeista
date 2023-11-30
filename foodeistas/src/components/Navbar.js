
import React from 'react';
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navstyles.css';
export const Navbar = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState('/');

    return (
        <header>
            <nav className="nav">
                <h1 className="logo">Foodie</h1>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
                
                    <Link to="/" className={activeLink === '/' ? 'active' : 'x'} onClick={() => setActiveLink('/')}>
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className={activeLink === '/about' ? 'active' : 'x'} onClick={() => setActiveLink('/about')}>
                        <li>About</li>
                    </Link>
                    <Link to="/restaurants" className={activeLink === '/restaurants' ? 'active' : 'x'} onClick={() => setActiveLink('/restaurants')}>
                        <li>Restaurants</li>
                    </Link>
                    <Link to="/contact" className={activeLink === '/contact' ? 'active' : 'x'} onClick={() => setActiveLink('/contact')}>
                        <li>Contact</li>
                    </Link>
                </ul>
                <button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </button>
            </nav>
        </header>
    );
}
