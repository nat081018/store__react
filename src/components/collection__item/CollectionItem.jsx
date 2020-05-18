import React from "react";
import "./collection__item.scss";
import CustomButton from "../custom__button/CustomButton.jsx";
import { connect } from "react-redux";
import { addItemToTheBasket } from "../../redux/card__basket/cardBasket.action.js";

const CollectionItem = ({ addItemToTheBasket, item }) => {
  const { name, price, imageUrl } = item;
  return (
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
      <CustomButton onClick={() => addItemToTheBasket(item)} inverted>
        ADD
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToTheBasket: (item) => dispatch(addItemToTheBasket(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
