import {
    CardItemContainer,
    Name,
    ItemDetails,
    Price,
    Deletion,
    ImageAndDeletionContainer,
} from "./cart-item.styles";

import { useContext } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ item }) => {
    const { name, quantity, imageUrl, price } = item;

    const Cart = useContext(CartContext);

    const RemoveFromCart = () => {
        Cart.ConfirmedRemove(item);
        console.log("Removed Item");
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
