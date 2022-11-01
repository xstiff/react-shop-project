import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem.component";
import Button from "../../Components/Button/button.component";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CheckOut = () => {
    const { cartItems, cartCount } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (cartItems.length < 1) {
            navigate("../shop");
        }
    }, []);

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <table>
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
            </table>

            <Button buttonType="invert">Checkout</Button>
        </div>
    );
};

export default CheckOut;
