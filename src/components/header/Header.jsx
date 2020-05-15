import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utilit.js";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo__wrapper" to="/">
      <Logo className="logo" />
    </Link>
    <div className="header__options">
      <Link className="header__option" to="/shop">
        SHOP
      </Link>
      <Link className="header__option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="header__option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="header__option" to="singin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });
export default connect(mapStateToProps)(Header);
// export default Header;
