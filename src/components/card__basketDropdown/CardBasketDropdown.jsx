import React from "react";
import CustomButton from "../custom__button/CustomButton.jsx";
import "./card__basketDropdown.scss";
import BasketItem from "../basket__item/BasketItem.jsx";
import { connect } from "react-redux";

const CardBasketDropdown = ({ cardItems }) => (
  <div className=" cardBasket__dropdown">
    <div className="cardBasket__dropdown-items">
      {cardItems.map((cardItem) => (
        <BasketItem key={cardItem.id} item={cardItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cardBasket: { cardItems } }) => ({
  cardItems,
});

export default connect(mapStateToProps)(CardBasketDropdown);
