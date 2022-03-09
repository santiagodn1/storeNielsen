import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { CartContext } from '../../Context';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
import { db } from '../../utils/firebase';


const Cart = () => {
    const { cartItems, removeItems, cantidadTotal, vaciarCarro, precioFinal } = useContext(CartContext);

    const [productos, setProductos] = useState([])
    useEffect(() => {
        const getData = async () => {
            const query = collection(db, 'items');
            const response = await getDocs(query);
            const dataItems = response.docs.map(doc => { return { id: doc.id, ...doc.data() } });
            setProductos(dataItems);
            console.log('dataItems', dataItems)
            const queryDoc = doc(db, 'items', 'HISkcfJMuzLkwpzSKy4R')
            const responseDoc = await getDoc(queryDoc);
            const dataDoc = responseDoc.data();
            console.log('dataDoc', dataDoc)
            console.log('id', responseDoc.id)

        }

        getData();

    }, [])

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

                                    <div class="counter">
                                        <div className="pqt-minus">-</div>
                                        <div className="pqt-add">{prod.stockagregado}</div>
                                        <div className="pqt-plus">+</div>
                                    </div>
                                    <div class="prices">
                                        <div className="amount">{prod.price}</div>

                                        <div className="remove" onClick={() => removeItems(prod)}><u>Quitar producto</u></div>
                                    </div>
                                </div>

                            </React.Fragment>
                        )

                    }))}
                    <hr></hr>
                    <div class="checkout">
                        <div class="total">
                            <div>
                                <div class="Subtotal">Sub-Total</div>
                                <div class="items">Productos {cantidadTotal}</div>
                            </div>
                            <div class="total-amount">$ {precioFinal}</div>
                        </div>
                        <button class="button">Finalizar Compra</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart;
