import { Link } from "react-router-dom"
import "./itemlistcontainer.scss"

const Item = ({ product }) => {
    return (
        <div className="product">
            <img src={product.image} width={300} alt="" />
            <h2>{product.brand}</h2>
            <p>{product.model}</p>
            <p>Precio: ${product.price}</p>
            <Link to={"/detail/" + product.id} className="product_details">Ver detalles</Link>
        </div>
    )
}

export default Item