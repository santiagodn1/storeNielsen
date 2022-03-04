import React from 'react';
import { useCartContext } from '../../Context';

const Cart = () => {
    const { cartItems } = useCartContext();
    console.log(cartItems)

    return (
        <>
            {cartItems.length === 0 ? (
                <p>Carrito vacio</p>
            ) : (
                cartItems.map((i) => {
                    return (
                        <>
                            <p>
                                {i.title} x {i.amount} = ${i.amount * i.price}
                            </p>
                            <img src={i.thumbnail} style={{ width: 200 }} alt="imagen" />
                        </>
                    );
                })
            )}
        </>
    );
};

export default Cart;
