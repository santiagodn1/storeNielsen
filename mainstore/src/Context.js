import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);


    const addItem = (item, amount) => {
        if (cartItems.some((product) => product.id === item.id)) {
            const copy = [...cartItems];
            const repeatItemIndex = cartItems.findIndex(
                (product) => product.id === item.id
            );
            copy[repeatItemIndex] = {
                ...copy[repeatItemIndex],
                amount: copy[repeatItemIndex].amount + amount,
            };

            setCartItems(copy);
            setCartCount((prev) => prev + amount);

        } else {
            setCartItems([...cartItems, { ...item, amount }]);
            setCartCount((prev) => prev + amount);

        }
    };

    /*  const deleteItem = (item) =>
      cartItems.filter((product) => product.id !== item.id); //función incompleta */

    return (
        <CartContext.Provider
            value={{ cartCount, cartItems, addItem }}
        >
            {children}
        </CartContext.Provider>
    );
};
