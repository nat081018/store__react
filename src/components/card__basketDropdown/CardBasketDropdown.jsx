import React from "react";
import CustomButton from "../custom__button/CustomButton.jsx";
import "./card__basketDropdown.scss";
import BasketItem from "../basket__item/BasketItem.jsx";
import { connect } from "react-redux";
import { selectCardItems } from "../../redux/card__basket/cardBasket.selectors.js";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCardHidden } from "../../redux/card__basket/cardBasket.action.js";

const CardBasketDropdown = ({ cardItems, history, dispatch }) => {
  return (
    <div className=" cardBasket__dropdown">
      <div className="cardBasket__dropdown-items">
        {cardItems.length ? (
          cardItems.map((cardItem) => (
            <BasketItem key={cardItem.id} item={cardItem} />
          ))
        ) : (
          <div className="cardBasket__dropdown-emptyMassage">
            your card is empty
          </div>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("./checkout");
          dispatch(toggleCardHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
});

export default withRouter(connect(mapStateToProps)(CardBasketDropdown));
