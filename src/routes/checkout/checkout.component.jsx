import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem.component";
import Button from "../../Components/Button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../Components/Button/button.component";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Confirmation from "../../Components/Confirmation/confirmation.component";
const CheckOut = () => {
    const {
        cartItems,
        cartTotal,
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
                    <div className="total-price-container">
                        <h3 className="total-price">Total: {cartTotal}$</h3>
                    </div>

                    {confirmVisible ? (
                        <Button
                            buttonType={BUTTON_TYPE_CLASSES.inverteddisabled}
                        >
                            Checkout
                        </Button>
                    ) : (
                        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
                            Checkout
                        </Button>
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
