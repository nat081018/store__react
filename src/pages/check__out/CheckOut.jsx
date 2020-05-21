import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./check__out.scss";
import {
  selectCardItems,
  selectCartTotal,
} from "../../redux/card__basket/cardBasket.selectors.js";
import CheckOutItem from "../../components/check__out__item/CheckOutItem.jsx";

const CheckOut = ({ cardItems, total }) => {
  console.log(cardItems);
  return (
    <div className="check__out">
      <div className="check__out-header">
        <div className="check__out-blok">
          <span></span>
        </div>
        <div className="check__out-blok">
          <span>Product</span>
        </div>
        <div className="check__out-blok">
          <span>Description</span>
        </div>
        <div className="check__out-blok">
          <span>Quantity</span>
        </div>
        <div className="check__out-blok">
          <span>Price</span>
        </div>
        <div className="check__out-blok">
          <span>Remove</span>
        </div>
      </div>
      {cardItems.map((cardItem) => (
        <CheckOutItem key={cardItem.id} cardItem={cardItem} />
      ))}
      <div className="check__out-total">
        <span>TOTAL: ${total} </span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOut);
