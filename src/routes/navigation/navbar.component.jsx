import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import crownLogo from '../../assets/crown.svg'
import './navbar.styles.scss';

const Nav = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <img src={crownLogo} alt="logo" className="logo"/>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            <Link className="nav-link" to='/sign-in'>
                Login
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
}


export default Nav;