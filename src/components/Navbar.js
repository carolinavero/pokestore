import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-light">
            <div className="navbar-brand">
                PokeStore
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