import "./checkoutitem.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleLeft,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import {
    RemoveProduct,
    IncreaseAmount,
    ReduceAmount,
} from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";

const CheckoutItem = (x) => {
    const { item } = x;
    const { name, quantity, price, imageUrl } = item;
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    const CartRemoveItem = () => {
        const response = RemoveProduct(item);
        dispatch(response[0]);
        dispatch(response[1]);
        console.log("Dispatched cart remove item");
    };
    const CartIncreaseAmount = () => {
        dispatch(IncreaseAmount(cartItems, item));
    };

    const CartReduceAmount = () => {
        dispatch(ReduceAmount(cartItems, item));
    };

    return (
        <>
            <tr className="table-row-item">
                <td className="checkout-image">
                    <div className="image-container-checkout">
                        <img src={imageUrl} alt={name} />
                    </div>
                </td>
                <td className="checkout-name">
                    <span className="name">{name}</span>
                </td>
                <td className="checkout-quantity">
                    {quantity == 1 ? (
                        <span className="arrow-left disabled" onClick={null}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </span>
                    ) : (
                        <span className="arrow-left" onClick={CartReduceAmount}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </span>
                    )}
                    <span className="quantity">{quantity}</span>
                    <span className="arrow-right" onClick={CartIncreaseAmount}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </td>
                <td className="checkout-price">{price * quantity}$</td>
                <td onClick={CartRemoveItem} className="checkout-remove">
                    <FontAwesomeIcon icon={faX} className="remove-x" />
                </td>
            </tr>
        </>
    );
};

export default CheckoutItem;
