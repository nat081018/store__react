import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";
import "./card__icon.scss";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/card__basket/cardBasket.action.js";

const CardIcon = ({ toggleCardHidden }) => (
  <div className="card__icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping__icon" />
    <span className="item__count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

export default connect(null, mapDispatchToProps)(CardIcon);
