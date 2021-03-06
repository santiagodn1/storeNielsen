import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../Items/ItemList';
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";


export const ItemListContainer = () => {
    const greetings = "Bienvenido a nuestra tienda OnLine"

    const { categoryId } = useParams();

    //const [prodFiltrados, setprodFiltrados] = useState([])
    const [items, setItems] = useState([]);
    const [setLoad] = useState(true)


    const getData = async () => {
        try {
            const itemsCollection = collection(db, "items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setItems(result)
            setLoad(false)
        } catch (error) {
            console.warn("error", error)
        }
    }

    const getDataCategory = async () => {
        try {
            const itemsCollection = collection(db, "items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setItems(result.filter(e => e.estilo === categoryId))
            setLoad(false)
        } catch (error) {
            console.warn("error", error)
        }
    }

    useEffect(() => {
        categoryId ? getDataCategory() : getData()
    }, [categoryId])

    return (
        <>

            <h1 className="greetings">{greetings}</h1>

            <ItemList Productos={items} />


        </>
    );
};