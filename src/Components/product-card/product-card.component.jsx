import Button from "../Button/button.component";
import {
    Price,
    Name,
    ProductCardContainer,
    Footer,
} from "./product-card.style";
import { useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const Add = () => {
        console.log(` Adding: ${product.id}`);
        return dispatch(addItemToCart(cartItems, product));
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
