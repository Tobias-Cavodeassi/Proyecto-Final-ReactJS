import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.scss"

const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)
    if(cart.lenght === 0){
        return(
            <div>
                <h2 className="cart">No hay productos en el carrito</h2>
                <Link to="/" >Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
        <h2 className="cart">Productos en el carrito:</h2>
        {
            cart.map((productCart)=> (
                <div className="cart" key={productCart.id}>
                    <img src={productCart.image} width={200} alt="" />
                    <p>{productCart.model}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio c/u: {productCart.price}</p>
                    <p>Precio parcial: {productCart.quantity * productCart.price}</p>
                    <button className="deleteProductButton" onClick={()=>deleteProductById(productCart.id)}>Borrar producto</button>
                </div>
            ))
        }
        <p className="cart">Precio total: {totalPrice()}</p>
        <button className="deleteCartButton" onClick={deleteCart}>Borrar carrito</button>
        </div>
    )
}
export default Cart