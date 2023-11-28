import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return <nav className="nav">
        <a href="/" className="nav__title">Foodie</a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>


}
