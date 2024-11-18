import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState(true)
    const { addProductInCart} = useContext(CartContext)

    const addProduct = (count) => {
        const productCart = {...product, quantity: count}
        addProductInCart(productCart)
        setShowItemCount(false) 
    }

    return (
        <div className="product_detail">
            <img src={product.image} width={500} alt=""/>
            <div className="item_detail_text">
                <h2>{product.brand} {product.model}</h2>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
                {
                    showItemCount === true ? (
                        <ItemCount stock={product.stock} addProduct={addProduct} />
                    ) : (
                        <Link to="/cart">Terminar mi compra</Link>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail