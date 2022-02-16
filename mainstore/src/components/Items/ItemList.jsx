import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ItemCount from '../../components/ItemCount/ItemCount';
import { productos } from './Item';

const ItemList = productos.map(u =>
    <Card key={u.id} style={{ width: '18rem' }}>
        <div className="cardBase"><Card.Img className="cardImagen" variant="top" src={u.pictureUrl} />
            <Card.Body className="cardBody">
                <Card.Title ><b>{u.nombre}</b></Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>{u.estilo}</ListGroup.Item>
                    <ListGroup.Item>{u.genero}</ListGroup.Item>
                    <ListGroup.Item><b>${u.price}</b></ListGroup.Item>
                </ListGroup>
                <ItemCount stock={u.stock} initial="0" />
            </Card.Body></div>
    </Card >)



export default ItemList
