import { useParams } from "react-router-dom"
import './ItemDetail.css';

export const ItemDetail = ({ id, nombre, estilo, genero, price, pictureUrl }) => {
  return (
    <div class="wrapper">
      <div class="product-img">
        <img src={pictureUrl} />
      </div>
      <div class="product-info">
        <div class="product-text">
          <h1 class="nombreDetail">{nombre}</h1>
          <h2 class="detalleDetail">{estilo}</h2>
          <h2 class="detalleDetail">{genero}</h2>
          <p class="precioDetail">${price}</p>
          <div class="product-price-btn">
            <button type="button">Añadir al carro</button>
          </div>
        </div>

      </div>
    </div>
  )
}


