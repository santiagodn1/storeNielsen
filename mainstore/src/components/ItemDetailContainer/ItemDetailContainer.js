import React from "react";
import { productos } from "../../data/data";
import { useState, useEffect } from 'react'
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [myDetail, setMyDetail] = useState([])
    const [loading, setLoading] = useState(true);

    const getDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })

    useEffect(() => {
        getDetail.then((details) => {
            setMyDetail(details);
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
                <h2>cargando producto individual...</h2>
            ) : (

                <div>
                    <ItemDetail {...myDetail[id - 1]} />
                </div>
            )}
        </>
    );
}
