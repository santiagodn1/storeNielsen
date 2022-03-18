
import React from 'react';
import { CartContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase';
import './Cart.css'
import { collection, addDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import Swal from 'sweetalert2'




const Cart = () => {
    const { cartItems, removeItems, cantidadTotal, vaciarCarro, precioFinal } = useContext(CartContext);



    const mostrarAlerta = async () => {
        const { value: e } = await Swal.fire({
            title: 'Ingrese sus datos',
            html:
                '<input class="swal2-input" id="swal-input1" type="text" placeholder="Nombre" />' +
                '<input class="swal2-input" id="swal-input2" type="text" placeholder="Email" />' +
                '<input class="swal2-input" id="swal-input3" type="text" placeholder="telefono" />' +
                '<input class="swal2-input" id="swal-input4" type="text" placeholder="dirección" />',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value,
                    document.getElementById('swal-input4').value
                ]
            }
        })
        if (e) {
            let order = {
                buyer: {
                    name: e[0],
                    email: e[1],
                    telefono: e[2],
                    direccion: e[3],
                },
                date: Timestamp.fromDate(new Date()),
                items: cartItems,
                total: precioFinal,
            }
            const queryCollection = collection(db, 'orders')
            console.log('order', order)


            if (order.buyer.direccion !== "" && order.buyer.email !== "" && order.buyer.name !== "" && order.buyer.telefono !== "") {
                const docRef = await addDoc(queryCollection, order)
                Swal.fire({
                    icon: 'success',
                    title: '¡Orden Realizada!',
                    text: "Su número de pedido es: " + docRef.id
                })
                removeItems()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, verifica los datos ingresados.',
                    footer: 'No se permiten campos en blanco'
                })
            }

        }

    }


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
                        <button className="button" type="submit" onClick={mostrarAlerta} >Finalizar Compra</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart;
