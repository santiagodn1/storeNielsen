import './Item.css'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ItemCount from '../../components/ItemCount/ItemCount';

const Item = ({ id, nombre, estilo, genero, price, stock, pictureUrl }) => {
    return (
        <Link to={`/ItemDetails/${id}`}>
            <Card key={id} style={{ width: '18rem' }}>
                <div className="cardBase"><Card.Img className="cardImagen" variant="top" src={pictureUrl} />
                    <Card.Body className="cardBody">
                        <Card.Title ><b>{nombre}</b></Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{estilo}</ListGroup.Item>
                            <ListGroup.Item>{genero}</ListGroup.Item>
                            <ListGroup.Item><b>${price}</b></ListGroup.Item>
                        </ListGroup>
                        <ItemCount stock={stock} initial="1" />
                    </Card.Body></div>
            </Card >
        </Link>
    );
};
export default Item;
