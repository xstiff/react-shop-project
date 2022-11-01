import ShoppingIcon from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { setPersistence } from "firebase/auth";
const CartIcon = () => {
    const CartCTX = useContext(CartContext); //iscartopen, setiscartopen
    const toggleCart = () => CartCTX.setIsCartOpen(!CartCTX.isCartOpen);

    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            <img src={ShoppingIcon} className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
