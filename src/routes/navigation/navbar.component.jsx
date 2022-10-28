import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import crownLogo from "../../assets/crown.svg";
import "./navbar.styles.scss";
import { UserSignOut } from "../../utils/firebase/firebase.utils";

const Nav = () => {
  const UserCtx = useContext(UserContext).CurrentUser;
  // console.log(UserCtx);
  const { CurrentUser, setCurrentUser } = useContext(UserContext);

  const SignOutHandler = async () => {
    await UserSignOut();
    setCurrentUser(null);
  };

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
            <span className="nav-link" onClick={SignOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
