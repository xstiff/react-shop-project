import ShopSVG from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.jsx";
import {
    ItemCount,
    CartIconContainer,
    ShoppingIconImg,
} from "./cart-icon.styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.selector";
const CartIcon = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const toggleCart = () => dispatch(setIsCartOpen(!cart.isCartOpen));

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIconImg src={ShopSVG} />
            <ItemCount>{cart.cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
