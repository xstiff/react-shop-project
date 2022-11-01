import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import crownLogo from "../../assets/crown.svg";
import "./navbar.styles.scss";
import { UserSignOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../Components/Cart-Icon/cart-icon.component";
import CartDropdown from "../../Components/Cart-dropdown/cart-dropdown.component";

const Nav = () => {
    const UserCtx = useContext(UserContext).CurrentUser;
    // console.log(UserCtx);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img src={crownLogo} alt="logo" className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {UserCtx ? (
                        <span className="nav-link" onClick={UserSignOut}>
                            Sign Out
                        </span>
                    ) : (
                        <Link className="nav-link" to="/sign-in">
                            Login
                        </Link>
                    )}

                    <CartIcon />
                </div>
                <CartDropdown />
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Nav;
