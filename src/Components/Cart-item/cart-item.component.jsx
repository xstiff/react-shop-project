import "./cart-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartItem = ({ item }) => {
    const { name, quantity, imageUrl, price } = item;
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x {price}$
                    <br />
                    Total: {quantity * price}$
                </span>
            </div>
        </div>
    );
};

export default CartItem;
