import React from 'react';
import './CartWidget.css'
import Cart from '../../../assets/CartWidget.png'

export const CartWidget = () => {
    const valor = 0
    return (
        <div className="carritoCompleto">
            <img className="imagenCarrito" src={Cart} alt="carrito" />
            <span className="carritoUnidades">{valor}</span>
        </div>
    )
}