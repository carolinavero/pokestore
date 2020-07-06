import React from 'react';

const Cart = () => {

    function handleCheckout() {
        console.log("checkout!!");
    }
    return (
        <>

        <div className="row cart fixed-top">
            <div className="col-12">

                    <h2>Carrinho</h2>

                    <ul>
                        <li>Bulbasaur <span>R$100,00</span></li>
                        <li>Charmeleon <span>R$100,00</span></li>
                        <li className="total">TOTAL <span>R$200,00</span></li>
                    </ul>

                    <button className="btn btn-success btn-block" onClick={handleCheckout}>Finalizar compra</button>


            </div>
        </div>
        

        </>

    )
}

export default Cart;