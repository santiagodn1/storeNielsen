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
            <div>
                <p>{count}</p>
                <button onClick={DisminuirMonto}>
                    -
                </button>
                <button onClick={AumentarMonto}>
                    +
                </button>
            </div>
            <div>
                <button>
                    Agregar al Carro
                </button>
            </div>
        </div>
    )
}

export default ItemCount;

