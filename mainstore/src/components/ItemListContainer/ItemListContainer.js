import React from 'react';
import './ItemListContainer.css'
import { useState } from 'react';
import ItemList from '../Items/ItemList';


function ItemListContainer({ greetings }) {

    const [listadoProductos, setListadoProductos] = useState([])

    const productosPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(true)
        }, 3000);
    })
    productosPromise.then(function () {
        setListadoProductos(false);
    })

    return (

        <><h1>{greetings}</h1>
            {listadoProductos ? (
                <h2>cargando listado de productos...</h2>
            ) : (
                <div className="grid-container">
                    {ItemList}
                </div>
            )}
        </>

    )
}


export default ItemListContainer;