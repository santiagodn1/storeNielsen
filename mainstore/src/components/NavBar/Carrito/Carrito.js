import React from 'react';
import './Carrito.css'

import carrito from '../../../assets/carrito.png'
export const Carrito = () => {
    return (
        <div className="carritoCompleto">
            <img className="imagenCarrito" src={carrito} alt="carrito" />
            <span className="carritoUnidades">2</span>
        </div>
    )
}