import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Productos } from '../../data/data'
import './ItemListContainer.css'
import ItemList from '../Items/ItemList';

export const ItemListContainer = () => {
    const greetings = "Bienvenido a nuestra tienda OnLine"
    const category = useParams();

    const [myProducts, setMyProducts] = useState([]);


    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos)
        }, 2000);

    })

    useEffect(() => {
        getProductos.then((data) => {
            if (category.Tipo == undefined) {
                setMyProducts(data)
            } else {
                let filter = data.filter(e => e.Tipo == category.Tipo)
                setMyProducts(filter);
            }

        })
            .catch(error => { console.log(error) })

    }, [myProducts])

    return (
        <>

            <h1 className="greetings">{greetings}</h1>

            <ItemList Productos={myProducts} />


        </>
    );
};