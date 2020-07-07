import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import { useCart } from '../hooks/cart';

import logo from '../images/pokestore.png';

const Navbar = () => {

    const { totalQuantItems } = useCart();
    console.log("nav - total quant", totalQuantItems)

    return (

        <div className="container ">

            <nav className="navbar">
                <div className="navbar-brand">
                    <img src={logo} alt="PokeStore" className="logo" />
                </div>

                <div className="navbar-cart">
                    
                    <button>
                        <FontAwesomeIcon icon={faTruck} />
                        <span className="badge badge-pill badge-success">
                            {totalQuantItems}
                        </span>
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;