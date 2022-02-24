import { useState, useEffect } from 'react'
import { traerProductos } from '../../data/data'
import './ItemListContainer.css'
import ItemList from '../Items/ItemList';


export const ItemListContainer = ({ }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const greetings = "Bienvenido a nuestra tienda Online"


    const productsSneakers = products.filter(zapatilla => zapatilla.estilo == "Sneakers");
    const productsTraining = products.filter(zapatilla => zapatilla.estilo == "Training");
    const productsTennis = products.filter(zapatilla => zapatilla.estilo == "Tennis");
    const productsOjotas = products.filter(zapatilla => zapatilla.estilo == "Ojotas");

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
                <h2 className="greetings">cargando listado de productos...</h2>
            ) : (
                <>
                    <h1 className="greetings">{greetings}</h1>

                    <ItemList products={productsSneakers} />
                    <ItemList products={productsTraining} />
                    <ItemList products={productsTennis} />
                    <ItemList products={productsOjotas} />

                </>
            )}
        </>
    );
};