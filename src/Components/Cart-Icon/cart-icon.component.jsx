import ShopSVG from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.jsx";
import {
    ItemCount,
    CartIconContainer,
    ShoppingIconImg,
} from "./cart-icon.styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartIcon = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const toggleCart = () => dispatch(!cart.isCartOpen);

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIconImg src={ShopSVG} />
            <ItemCount>{cart.cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
