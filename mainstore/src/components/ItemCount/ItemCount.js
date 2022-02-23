import './ItemCount.css'
import { useState } from 'react'
import React from 'react';

function ItemCount({ stock, initial, onAdd }) {
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
            <div class="countValue">{count}</div>
            <span class="pqt-minus" onClick={DisminuirMonto}>-</span>
            <span class="pqt-add" onClick={void (0)}>Agregar al carro</span>
            <span class="pqt-plus" onClick={AumentarMonto}>+</span>
        </div>
    )
}

export default ItemCount;

