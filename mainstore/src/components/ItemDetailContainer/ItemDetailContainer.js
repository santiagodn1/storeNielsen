import { Productos } from "../../data/data";
import { useState, useEffect } from 'react'
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [myDetail, setMyDetail] = useState()

    const getItemId = () => {
        let item = Productos.find((e) => {
            return e.id === Number(id);
        })
    }


    useEffect(() => {

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


    return (
        <ItemDetail {...myDetail} />

    )
}
export default ItemDetailContainer;