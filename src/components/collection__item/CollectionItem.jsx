import React from "react";
import "./collection__item.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection__item">
    <div
      className="collection__item-img"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection__item-footer">
      <span className="collection__item-name">{name}</span>
      <span className="collection__item-price">{price}</span>
    </div>
  </div>
);
export default CollectionItem;
