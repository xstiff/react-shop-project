import {
    CardItemContainer,
    Name,
    ItemDetails,
    Price,
    Deletion,
    ImageAndDeletionContainer,
} from "./cart-item.styles";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { ConfirmedRemove } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
    const { name, quantity, imageUrl, price } = item;
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const RemoveFromCart = () => {
        const response = ConfirmedRemove(cartItems, item);
        dispatch(response[0]);
        dispatch(response[1]);

        // console.log("Removed Item");
    };

    return (
        <CardItemContainer>
            <ImageAndDeletionContainer>
                <img src={imageUrl} alt={name} />
                <Deletion onClick={RemoveFromCart}>
                    <FontAwesomeIcon icon={faTimes} />
                </Deletion>
            </ImageAndDeletionContainer>
            <ItemDetails>
                <Name>{name}</Name>
                <Price>
                    {quantity} x {price}$
                </Price>
            </ItemDetails>
        </CardItemContainer>
    );
};

export default CartItem;
