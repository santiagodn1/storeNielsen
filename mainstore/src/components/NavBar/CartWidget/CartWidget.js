import React, { useContext } from 'react';
import './CartWidget.css'
import Cart from '../../../assets/CartWidget.png'
import { CartContext } from '../../../Context';

export const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)

    return (<>
        {cantidadTotal !== 0 ?
            <div className="carritoCompleto">
                <img className="imagenCarrito" src={Cart} alt="carrito" />
                <span className="carritoUnidades">{cantidadTotal}</span>
            </div>
            : <div className="carritoCompleto">
                <img className="imagenCarrito" src={Cart} alt="carrito" />
            </div>
        }
    </>
    )
}