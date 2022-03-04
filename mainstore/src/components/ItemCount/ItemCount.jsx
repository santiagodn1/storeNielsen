import './ItemCount.css'
import { useState } from 'react'
import React from 'react';


const ItemCount = ({ stock, initial, onAdd }) => {

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


    return (

        <div>
            <span className="pqt-minus" onClick={DisminuirMonto}>-</span>
            {count > 0 ? <span className="pqt-add" onClick={() => onAdd(count)} variant="primary">Agregar al Carro</span> : <></>}
            <span className="pqt-plus" onClick={AumentarMonto}>+</span>
            <div className="countValue">{count}</div>
        </div>

    )
}
export default ItemCount



