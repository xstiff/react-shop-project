import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem.component";
import Button from "../../Components/Button/button.component";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const CheckOut = () => {
    const { cartItems, cartCount } = useContext(CartContext);
    // const navigate = useNavigate();

    useEffect(() => {
        if (cartItems.length < 1) {
            return <Navigate to="/shop" />;
        }
    }, [cartItems]);

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Product &nbsp;</th>
                        <th>Name &nbsp;</th>
                        <th>Amount &nbsp;</th>
                        <th>Price &nbsp;</th>
                        <th>Remove &nbsp;</th>
                    </tr>
                    {cartItems.map((item) => (
                        <CheckoutItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>

            <Button buttonType="invert">Checkout</Button>
        </div>
    );
};

export default CheckOut;
