import React, { useState } from 'react'
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="menu">
            <div className='menu-logo'>
                <Link className='menu-logo-title' to="/">Landy</Link>
            </div>
            <ul className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#acerca">Acerca de</a></li>
                <li><Link to="/products">Comprar</Link></li>
                <li><Link className='menu-list-button' to="/car">Carrito <HiShoppingCart /></Link></li>
            </ul>
            <button className="menu-hamburger" onClick={toggleMenu}>
                <HiMenu />
            </button>
        </nav>
    );
}
