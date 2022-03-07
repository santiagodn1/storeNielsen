import React from 'react';
import { CartContext } from '../../Context';
import { useContext } from 'react';
import './Cart.css'

const Cart = () => {
    const { cartItems, removeItems } = useContext(CartContext);


    return (
        <>
            <div className="ContenedorPrincipal">
                <div className="Cart-Container">
                    <div className="Header">
                        <h3 className="Heading">Carrito de compras</h3>
                        <h5 className="Action">Vaciar Carrito</h5>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="Cart-Items">carrito vacio</div>
                    ) : (cartItems.map((prod) => {

                        return (
                            <React.Fragment key={prod.id}>
                                <div className="Cart-Items" >
                                    <div className="image-box">
                                        <img src={prod.pictureUrl} style={{ height: "300px" }} alt="imagen" />
                                    </div>
                                    <div className="about">
                                        {prod.nombre}
                                    </div>

                                    <div class="counter">
                                        <div className="pqt-minus">-</div>
                                        <div className="pqt-add">{prod.stockagregado}</div>
                                        <div className="pqt-plus">+</div>
                                    </div>
                                    <div class="prices">
                                        <div className="amount">{prod.price}</div>

                                        <div className="remove" onClick={(prod) => removeItems(prod)}><u>Quitar producto</u></div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )

                    }))}
                </div>
            </div>
        </>
    )
}

export default Cart;
