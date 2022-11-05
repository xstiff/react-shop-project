import ShoppingIcon from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const CartCTX = useContext(CartContext); //iscartopen, setiscartopen
    const toggleCart = () => CartCTX.setIsCartOpen(!CartCTX.isCartOpen);

    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            <img src={ShoppingIcon} className="shopping-icon" />
            <span className="item-count">{CartCTX.cartCount}</span>
        </div>
    );
};

export default CartIcon;
