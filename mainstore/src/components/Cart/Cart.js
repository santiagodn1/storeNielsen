import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { CartContext } from '../../Context';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'



const Cart = () => {
    const { cartItems, removeItems, cantidadTotal, vaciarCarro, precioFinal } = useContext(CartContext);


    return (
        <>
            <div className="ContenedorPrincipal">
                <div className="Cart-Container">
                    <div className="Header">
                        <h3 className="Heading">Carrito de compras</h3>
                        <h5 className="Action" onClick={vaciarCarro}>Vaciar Carrito</h5>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="Cart-Items">
                            <div >carrito vacio</div>
                            <div className="Action"><Link to='/'>Volver al Home</Link></div>
                        </div>
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

                                    <div className="counter">
                                        <div className="pqt-minus">-</div>
                                        <div className="pqt-add">{prod.stockagregado}</div>
                                        <div className="pqt-plus">+</div>
                                    </div>
                                    <div className="prices">
                                        <div className="amount">{prod.price}</div>

                                        <div className="remove" onClick={() => removeItems(prod)}><u>Quitar producto</u></div>
                                    </div>
                                </div>

                            </React.Fragment>
                        )

                    }))}
                    <hr></hr>
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="Subtotal">Sub-Total</div>
                                <div className="items">Productos {cantidadTotal}</div>
                            </div>
                            <div className="total-amount">$ {precioFinal}</div>
                        </div>
                        <button className="button">Finalizar Compra</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart;
