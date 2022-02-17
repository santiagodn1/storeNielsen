import Item from './Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='grid-container'>
            {products.map((product) => (
                <Item {...product} key={product.id} />
            ))}
        </div>
    );
};

export default ItemList;