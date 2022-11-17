import Button from "../Button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
    Price,
    Name,
    ProductCardContainer,
    Footer,
} from "./product-card.style";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const Add = () => {
        console.log(` Adding: ${product.id}`);
        return addItemToCart(product);
    };
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price} USD</Price>
            </Footer>
            <Button buttonType="inverted" type="button" onClick={Add}>
                Add to cart
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
