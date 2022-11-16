import "./product-card.style.scss";
import Button from "../Button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const Add = () => {
        console.log(` Adding: ${product.id}`);
        return addItemToCart(product);
    };
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price} USD</span>
            </div>
            <Button buttonType="inverted" type="button" onClick={Add}>
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;
