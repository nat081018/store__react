import CartActionTypes from "./cardBasket.type.js";

export const toggleCardHidden = () => ({
  type: CartActionTypes.TOGGLE_CASE_HIDDEN,
});

export const addItemToTheBasket = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_THE_BASKET,
  payload: item,
});
