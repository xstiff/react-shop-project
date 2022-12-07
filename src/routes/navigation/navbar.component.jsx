import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import crownLogo from "../../assets/crown.svg";
import JDLOGO from "../../assets/jdlogo.png";
import { UserSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../Components/Cart-Icon/cart-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/cart-dropdown.component";

import {
    NavigationContainer,
    NavLinksContainer,
    NavLink,
    LogoContainer,
    Email,
    LogoutContainer,
} from "./navbar.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";

const Nav = () => {
    const currentUser = useSelector(selectCurrentUser);
    const cartSelector = useSelector((state) => state.cart);

    const getStringFromEmail = (emailAddress) =>
        emailAddress.substring(0, emailAddress.indexOf("@"));

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <img src={JDLOGO} alt="logo" className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">Shop</NavLink>
                    {currentUser ? (
                        <LogoutContainer>
                            <NavLink onClick={UserSignOut}>Log out</NavLink>
                            <Email>
                                ({getStringFromEmail(currentUser.email)})
                            </Email>
                        </LogoutContainer>
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
