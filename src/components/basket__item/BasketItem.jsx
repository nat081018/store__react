import React from "react";
import "./basket__item.scss";

const BasketItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className="basket__item">
    <img className="basket__item-img" src={imageUrl} alt="item" />
    <div className="basket__item-details">
      <span className="basket__item-details-name">{name}</span>
      <span className="basket__item-details-price">
        {" "}
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default BasketItem;
