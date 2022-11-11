import Button from "../Button/button.component";
import { Link } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CartItem from "../Cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    if (cartItems.length < 1) {
        return (
            <div className="cart-dropdown-container">
                <p>ur cart is empty ;)</p>
            </div>
        );
    }
    return (
        <div className="cart-dropdown-container">
            {cartItems.length < 1 && (
                <div>
                    <h3 className="empty-cart">Your cart is empty!</h3>
                </div>
            )}
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
                <div>
                    <h3>Total: {cartTotal}$</h3>
                </div>
            </div>

            <Link to="/checkout">
                <Button>Checkout!</Button>
            </Link>
        </div>
    );
};

export default CartDropdown;
