import React from "react";
import "./check__out__item.scss";

const CheckOutItem = ({ cardItem: { name, imageUrl, price, quantity } }) => (
  <div className="check__out__item">
    <div className="check__out__item-img">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="check__out__item-name">{name}</span>
    <span className="check__out__item-quantity">{quantity}</span>
    <span className="check__out__item-price">{price}</span>
    <div className="check__out__item-remove__btn">&#10005;</div>
  </div>
);

export default CheckOutItem;
