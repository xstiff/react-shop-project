import "./checkoutitem.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = (x) => {
    const { item } = x;
    const { name, quantity, price, imageUrl } = item;

    const Cart = useContext(CartContext);
    // console.log(Cart);

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
                    <span className="arrow-left" onClick={ReduceAmount}>
                        &lArr;
                    </span>
                    <span className="quantity">{quantity}</span>
                    <span className="arrow-right" onClick={IncreaseAmount}>
                        &rArr;
                    </span>
                </td>
                <td className="checkout-price">{price * quantity}$</td>
                <td onClick={RemoveItem} className="checkout-remove">
                    <span className="remove-x">X</span>
                </td>
            </tr>
        </>
    );
};

export default CheckoutItem;
