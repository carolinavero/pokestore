import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/pokestore.png';

const Navbar = () => {

    return (

        <div className="container ">

            <nav className="navbar">
                <div className="navbar-brand">
                    <img src={logo} alt="PokeStore" className="logo" />
                </div>

                <div className="navbar-cart">
                    
                    <a href="#">
                        <FontAwesomeIcon icon={faTruck} />
                        <span className="badge badge-pill badge-success">
                            1
                        </span>
                    </a>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;