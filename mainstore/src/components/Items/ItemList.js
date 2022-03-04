import Item from './Item'
import './ItemList.css'

const ItemList = ({ Productos }) => {
    return (
        <div className='grid-container'>
            {
                Productos.map((prods) => (<Item {...prods} key={prods.id} />))
            }
        </div>
    );
};

export default ItemList;