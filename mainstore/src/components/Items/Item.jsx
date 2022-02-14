import Card from 'react-bootstrap/Card'
import React from 'react'
import './Item.css'

import ItemCount from '../../components/ItemCount/ItemCount';
import SparkyBlack from '../../../src/assets/productos/sparkyBlack.png'
import Ray from '../../../src/assets/productos/rayWhite.png'
import AceClay from '../../../src/assets/productos/axilus.png'

function Item() {
    const productos = [
        { id: '1', nombre: "Zapatillas Sparky Black", estilo: "Training", genero: "Hombre", price: "7999", stock: 5, pictureUrl: SparkyBlack },
        { id: '2', nombre: "Zapatillas Ray", estilo: "Heritage", genero: "Hombre", price: "11999", stock: 15, pictureUrl: Ray },
        { id: '3', nombre: "Zapatillas Ace Clay", estilo: "Tennis", genero: "Mujer", price: "7499", stock: 10, pictureUrl: AceClay }
    ]

    const productoLista = productos.map(u =>
        <Card key={u.id} style={{ width: '18rem' }}>
            <div className="cardBase"><Card.Img className="cardImagen" variant="top" src={u.pictureUrl} />
                <Card.Body className="cardBody">
                    <Card.Title ><b>{u.nombre}</b></Card.Title>
                    <Card.Text>
                        <ul>{u.estilo}</ul>
                        <ul>{u.genero}</ul>
                        <p><ul><b>${u.price}</b></ul></p>
                    </Card.Text>
                    <ItemCount stock={u.stock} initial="0" />
                </Card.Body></div>
        </Card >)



    return <div className="grid-container"> {productoLista} </div>
}

export default Item