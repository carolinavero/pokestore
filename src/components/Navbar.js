import React from 'react';
import logo from '../images/pokestore.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="PokeStore" className="logo" />
            </div>

            <div className="navbar-cart">
                <span className="badge badge-pill badge-success m-3" style={{ width: 50 }}>
                    0
                </span>
                <a href>
                    Carrinho
                </a>
            </div>

            
        </nav>
    )
}

export default Navbar;