import CartActionTypes from "./cardBasket.type.js";
import { addItemToTheBasket } from "./cardBasket.utilts.js";

const INITIAL_STATE = {
  hidden: true,
  cardItems: [],
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CASE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM_TO_THE_BASKET: {
      return {
        ...state,
        cardItems: addItemToTheBasket(state.cardItems, action.payload),
      };
    }

    default:
      return state;
  }
};

export default cardReducer;
