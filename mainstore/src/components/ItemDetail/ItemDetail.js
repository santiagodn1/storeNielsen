import { useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

export const ItemDetail = ({ id, nombre, estilo, genero, price, stock, pictureUrl }) => {
  return (
    <div class="wrapper">
      <div class="product-img">
        <img src={pictureUrl} alt="Preview" />
      </div>
      <div class="product-info">
        <div class="product-text">
          <h1 class="nombreDetail">{nombre}</h1>
          <h2 class="detalleDetail">{estilo}</h2>
          <h2 class="detalleDetail">{genero}</h2>
          <p class="precioDetail">${price}</p>

          <div class="product-price-btn">
            <ItemCount class="asd" stock={stock} initial="1" />
          </div>
        </div>

      </div>
    </div>
  )
}


