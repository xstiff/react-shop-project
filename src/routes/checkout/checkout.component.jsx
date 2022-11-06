import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem.component";
import Button from "../../Components/Button/button.component";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Confirmation from "../../Components/Confirmation/confirmation.component";
const CheckOut = () => {
    const {
        cartItems,
        cartCount,
        confirmVisible,
        setconfirmVisible,
        setIsCartOpen,
    } = useContext(CartContext);

    useEffect(() => {
        setconfirmVisible(false);
        setIsCartOpen(false);
    }, []);

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {confirmVisible && <Confirmation />}
            {cartItems.length ? (
                <>
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
                    {confirmVisible ? (
                        <Button buttonType="inverted" is_disabled="true">
                            Checkout
                        </Button>
                    ) : (
                        <Button buttonType="inverted">Checkout</Button>
                    )}
                </>
            ) : (
                <>
                    <h3 className="empty-cart">Your cart is empty </h3>
                    <Link to="/shop" className="go-shopping">
                        Let's go shopping
                    </Link>
                </>
            )}
        </div>
    );
};

export default CheckOut;
