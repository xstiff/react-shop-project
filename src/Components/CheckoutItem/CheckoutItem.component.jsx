import "./checkoutitem.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleLeft,
    faX,
} from "@fortawesome/free-solid-svg-icons";

const CheckoutItem = (x) => {
    const { item } = x;
    const { name, quantity, price, imageUrl } = item;

    const Cart = useContext(CartContext);

    const RemoveItem = () => {
        Cart.RemoveProduct(item);
    };
    const IncreaseAmount = () => {
        Cart.IncreaseAmount(item);
    };

    const ReduceAmount = () => {
        Cart.ReduceAmount(item);
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
                        <span className="arrow-left" onClick={ReduceAmount}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </span>
                    )}
                    <span className="quantity">{quantity}</span>
                    <span className="arrow-right" onClick={IncreaseAmount}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </td>
                <td className="checkout-price">{price * quantity}$</td>
                <td onClick={RemoveItem} className="checkout-remove">
                    {/* <span className="">X</span> */}
                    <FontAwesomeIcon icon={faX} className="remove-x" />
                </td>
            </tr>
        </>
    );
};

export default CheckoutItem;
