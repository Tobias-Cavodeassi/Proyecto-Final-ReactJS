import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity }= useContext(CartContext)

    const quantity = totalQuantity()

    return (
    <Link to="/cart" className="cartwidget">
        <IoCart className={quantity === 0 ? "empty-cart" : "icon-cart" } />
        <p className="number-cartwidget">{quantity >= 1 && quantity}</p>
    </Link>
    )
}
export default CartWidget