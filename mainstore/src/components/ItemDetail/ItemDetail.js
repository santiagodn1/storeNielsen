import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.css';
import React, { useState } from "react"
import { useContext } from "react";
import { CartContext } from "../../Context";

export const ItemDetail = ({ id, nombre, estilo, genero, price, stock, pictureUrl }) => {


  const [carrito, setCarrito] = useState(0);

  const { addItem } = useContext(CartContext)
  const handleItemCount = (stockagregado) => {
    addItem({ id, nombre, estilo, genero, price, stock, stockagregado, pictureUrl })

    setCarrito(stockagregado)

  }


  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={pictureUrl} alt="Preview" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1 className="nombreDetail">{nombre}</h1>
          <h2 className="detalleDetail">{estilo}</h2>
          <h2 className="detalleDetail">{genero}</h2>
          <p className="precioDetail">${price}</p>

          <div className="product-price-btn">
            {carrito === 0 ? <ItemCount initial={1} stock={stock} onAdd={(stockagregado) => handleItemCount(stockagregado)} /> : <> <Link to={"/Cart"}><span className="pqt-add">Finalizar Compra</span></Link><div>Unidades añadidas al carro</div></>}
          </div>
        </div>
      </div>
    </div>
  )
}

