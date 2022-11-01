import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
    const name = item.name;
    const quant = item.quantity;
    const url = item.imageUrl;
    const price = item.price;
    return (
        <div className="cart-item-container">
            <img src={url} alt={name} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quant} x {price}$
                    <br />
                    Total: {quant * price}$
                </span>
            </div>
        </div>
    );
};

export default CartItem;
