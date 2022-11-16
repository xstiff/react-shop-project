import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
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

const Nav = () => {
    const UserCtx = useContext(UserContext).CurrentUser;
    const CartCtx = useContext(CartContext).isCartOpen;

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <img src={crownLogo} alt="logo" className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">Shop</NavLink>
                    {UserCtx ? (
                        <NavLink onClick={UserSignOut}>Log out</NavLink>
                    ) : (
                        <NavLink to="/sign-in">Login</NavLink>
                    )}

                    <CartIcon />
                </NavLinksContainer>
            </NavigationContainer>
            {CartCtx && <CartDropdown />}

            <Outlet />
        </Fragment>
    );
};

export default Nav;
