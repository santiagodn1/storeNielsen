import React from 'react';
import './CartWidget.css'
import Cart from '../../../assets/CartWidget.png'

export const CartWidget = () => {
    return (
        <div className="carritoCompleto">
            <img className="imagenCarrito" src={Cart} alt="carrito" />
            <span className="carritoUnidades">2</span>
        </div>
    )
}