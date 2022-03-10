//import { Productos } from "../../data/data";
import React from 'react';
import { useState, useEffect } from 'react'
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [selectedItem, setSelectedItem] = useState()
    const [load, setLoad] = useState(true)

    const getSelected = async () => {
        try {
            const document = doc(db, "items", id)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }
            setSelectedItem(result)
            setLoad(false)
        } catch (error) {
            console.warn("error", error)
        }
    }

    useEffect(() => {
        getSelected()
    }, [id])

    /*useEffect(() => {

        const getDetail = new Promise((resolve, reject) => {
            resolve(Productos)
        })

        getDetail.then((details) => {

            let getId = details.find((e) => {
                return e.id === Number(id)
            })

            setMyDetail(getId);
        })
    }, [])

*/
    return (
        <ItemDetail {...selectedItem} />

    )
}
export default ItemDetailContainer;