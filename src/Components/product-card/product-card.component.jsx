import "./product-card.style.scss";
import Button from "../Button/button.component";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price} USD</span>
            </div>
            <Button buttonType="inverted" type="button">
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;
