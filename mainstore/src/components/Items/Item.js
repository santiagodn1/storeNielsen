import './Item.css'
import { Link, NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Item = ({ id, nombre, estilo, genero, price, pictureUrl }) => {
    return (
        <>
            <Card key={id} style={{ width: '18rem' }}>
                <div className="cardBase"><Card.Img className="cardImagen" variant="top" src={pictureUrl} />
                    <Card.Body className="cardBody">
                        <Card.Title ><b>{nombre}</b></Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{estilo}</ListGroup.Item>
                            <ListGroup.Item>{genero}</ListGroup.Item>
                            <ListGroup.Item><b>${price}</b></ListGroup.Item>
                        </ListGroup>
                        <Link className="btn" to={`/ItemDetails/${id}`}>Ver detalles</Link>
                    </Card.Body>
                </div>
            </Card >
        </>
    );
};
export default Item;
