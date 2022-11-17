import Button from "../Button/button.component";
import { Link } from "react-router-dom";
import "./cart-dropdown.styles.jsx";
import CartItem from "../Cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CartDropdownContainer>
            {cartItems.length < 1 && (
                <div>
                    <h3 className="empty-cart">Your cart is empty!</h3>
                </div>
            )}
            <CartItems>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
                {cartItems.length > 0 && (
                    <EmptyMessage>Total: {cartTotal}$</EmptyMessage>
                )}
            </CartItems>

            {cartItems.length > 0 && (
                <Link to="/checkout">
                    <Button>Checkout!</Button>
                </Link>
            )}
        </CartDropdownContainer>
    );
};

export default CartDropdown;
