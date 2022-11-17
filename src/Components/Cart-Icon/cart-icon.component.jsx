import ShopSVG from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import {
    ItemCount,
    CartIconContainer,
    ShoppingIconImg,
} from "./cart-icon.styles";

const CartIcon = () => {
    const CartCTX = useContext(CartContext); //iscartopen, setiscartopen
    const toggleCart = () => CartCTX.setIsCartOpen(!CartCTX.isCartOpen);

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIconImg src={ShopSVG} />
            <ItemCount>{CartCTX.cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
