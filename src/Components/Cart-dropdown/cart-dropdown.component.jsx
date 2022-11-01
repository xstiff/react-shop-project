import Button from "../Button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../Cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
    const cartItems = useContext(CartContext).cartItems;

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <Button>Checkout!</Button>
        </div>
    );
};

export default CartDropdown;
