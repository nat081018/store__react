import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utilit.js";
import CardIcon from "../card__icon/CardIcon";
import CardBasketDropdown from "../card__basketDropdown/CardBasketDropdown.jsx";
import { selectCardHidden } from "../../redux/card__basket/cardBasket.selectors.js";
import { selectCurrentUser } from "../../redux/users/users.selectors.js";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo__wrapper" to="/">
      <Logo className="logo" />
    </Link>
    <div className="header__options">
      <Link className="header__option" to="/">HOME</Link>
      <Link className="header__option" to="/shop">
        SHOP
      </Link>
      <Link className="header__option" to="/contact">
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
      <CardIcon />
    </div>
    {hidden ? null : <CardBasketDropdown />}
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCardHidden,
});

export default connect(mapStateToProps)(Header);
