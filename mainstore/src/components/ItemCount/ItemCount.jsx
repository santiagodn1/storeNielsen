import './ItemCount.css'
import { useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [boton, setBoton] = useState("AddOn")


    const [count, setCount] = useState(parseInt(initial))

    const AumentarMonto = () => {
        if (count < parseInt(stock)) {
            setCount(count + 1)
        }
    }

    const DisminuirMonto = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const BtnAddOn = () => {
        const agregarCarrito = () => {
            setBoton("carrito")
            setCount(false)
        }
        return (
            <span className="pqt-add" onClick={agregarCarrito}>Agregar al carro</span>

        )
    }

    const BtnCarrito = () => {
        return (
            <Link to={"/Cart"}>
                <span className="pqt-add-resized">Finalizar Compra</span>
            </Link>
        )
    }


    return (

        <div>

            <span className="pqt-minus" onClick={DisminuirMonto}>-</span>
            {boton === "AddOn" ? <BtnAddOn /> : <BtnCarrito />}
            <span className="pqt-plus" onClick={AumentarMonto}>+</span>
            <div className="countValue">{count}
            </div>
        </div>

    )
}
export default ItemCount



