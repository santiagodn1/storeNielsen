import { useState, useEffect } from 'react'
import { traerProductos } from '../../data/data'
import './ItemListContainer.css'
import ItemList from '../Items/ItemList';


export const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <h2 class="cargando">cargando listado de productos...</h2>
            ) : (
                <>
                    <h1 class="greetings">{greetings}</h1>

                    <ItemList products={products} />

                </>
            )}
        </>
    );
};