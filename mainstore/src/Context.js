import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);


    const addItem = (item) => {
        if (cartItems.some((product) => product.id === item.id)) {
            const copy = [...cartItems];
            const repeatItemIndex = cartItems.findIndex(
                (product) => product.id === item.id
            );
            copy[repeatItemIndex] = {
                ...copy[repeatItemIndex],
                stockagregado: copy[repeatItemIndex].stockagregado + item.stockagregado,
            };

            setCartItems(copy);
            setCartCount((prev) => prev + item.stockagregado);

        } else {
            setCartItems([...cartItems, { ...item }]);
            setCartCount((prev) => prev + item.stockagregado);

        }
    };

    const removeItems = (item) => {

        const removed = cartItems.filter(prod => prod.id !== item.id)
        setCartItems(removed)

    }
    const cantidadTotal = cartItems.reduce((prev, items) => prev + (items.stockagregado), 0)

    const precioFinal = cartItems.reduce((prev, items) => prev + (items.price * items.stockagregado), 0)

    const vaciarCarro = () => {
        setCartItems([])
        setCartCount(0)
    }

    return (
        <CartContext.Provider
            value={{ cartCount, cartItems, addItem, removeItems, cantidadTotal, vaciarCarro, precioFinal }}
        >
            {children}
        </CartContext.Provider>
    );
};
