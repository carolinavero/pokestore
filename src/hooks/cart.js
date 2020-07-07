import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        console.log("dentro do context..", item);

        console.log("quant do item", item.quant)

        // carrinho vazio
        if(cartItems.length === 0) {
            setCartItems([item]);
            console.log("carrinho vazio - item:", item.quant)

        // carrinho nao vazio
        } else {

            //verifca se ja existe
            const searchItem = cartItems.find(pokemon => pokemon.name === item.name);

            // adiciona se nao existir - muda pra qtd recebida
            if(!searchItem) {
                setCartItems([...cartItems, item]);
            }
            // se existir.. 
            else {
                const updatedItems = cartItems.reduce((items, pokemon) => {
                    if(pokemon.name === item.name) {
                        pokemon.quant = item.quant;
                    }
                    if(pokemon.quant > 0) {
                        items.push(pokemon);
                    }
                    return items;
                }, []);

                setCartItems(updatedItems);
            }
        }

        console.log("meu carrinho", cartItems);

    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);

    if(!context) {
        throw new Error('useCart precisa ser usado com o CartContext');
    }
    return context;
}

export { CartProvider, useCart };