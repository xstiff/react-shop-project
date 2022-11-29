import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import crownLogo from "../../assets/crown.svg";
import { UserSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../Components/Cart-Icon/cart-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
    NavigationContainer,
    NavLinksContainer,
    NavLink,
    LogoContainer,
} from "./navbar.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";

const Nav = () => {
    const currentUser = useSelector(selectCurrentUser);
    const cartSelector = useSelector((state) => state.cart);
    // console.log("Cart selector: ", cartSelector.isCartOpen);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <img src={crownLogo} alt="logo" className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">Shop</NavLink>
                    {currentUser ? (
                        <NavLink onClick={UserSignOut}>Log out</NavLink>
                    ) : (
                        <NavLink to="/sign-in">Login</NavLink>
                    )}

                    <CartIcon />
                </NavLinksContainer>
            </NavigationContainer>
            {cartSelector.isCartOpen && <CartDropdown />}

            <Outlet />
        </Fragment>
    );
};

export default Nav;
