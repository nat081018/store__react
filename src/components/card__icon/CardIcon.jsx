import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";
import "./card__icon.scss";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/card__basket/cardBasket.action.js";
import { selectCardCount } from "../../redux/card__basket/cardBasket.selectors.js";

const CardIcon = ({ toggleCardHidden, countItem }) => (
  <div className="card__icon" onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping__icon" />
    <span className="item__count">{countItem}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

const mapStateToProps = (state) => ({
  countItem: selectCardCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
