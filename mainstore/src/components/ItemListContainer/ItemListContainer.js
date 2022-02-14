import React from 'react';
import './ItemListContainer.css'
import Item from './../Items/Item'




function ItemListContainer({ greetings }) {
    return (
        <>
            <h1>{greetings}</h1>
            <Item />
        </>

    )

}

export default ItemListContainer;