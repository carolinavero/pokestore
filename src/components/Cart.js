import React, { useState, useEffect } from 'react';

import { useCart } from '../hooks/cart';

const Cart = () => {

    const [ totalCartValue, setTotalCartValue ] = useState(0);
    const { cartItems }  = useCart();
    
    useEffect(() => {
        const totalItems = cartItems.reduce((total, item) => {
            let soma = item.price * item.quant;
            return total + soma;
        }, 0);
        setTotalCartValue(totalItems);
    }, [cartItems]);

    function handleCheckout() {
        console.log("checkout!!");
        alert("Parabéns! Compra realizada.")
    }

    return (
        <>

        <div className="row cart fixed-top">
            <div className="col-12">

                    <h2>Carrinho</h2>

                    <ul>
                        {   cartItems.length ? 
                            cartItems.map((pokemon) => (
                                <li key={pokemon.name}>
                                    <img src={pokemon.image} alt={pokemon.name} />
                                    {pokemon.name} 
                                    <span>{pokemon.quant} x R$ {pokemon.price},00</span>
                                </li>
                            ))
                            : <p>Nenhum item no carrinho</p>
                        }
                 
                        <li className="total">TOTAL <span>R$ {totalCartValue},00</span></li>
                    </ul>

                    <button 
                        className="btn btn-success btn-block"
                        disabled={totalCartValue === 0 ? 'disabled' : ''}
                        onClick={handleCheckout}
                    >
                        Finalizar compra
                    </button>

            </div>
        </div>
        

        </>

    )
}

export default Cart;