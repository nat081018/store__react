import CartActionTypes from "./cardBasket.type.js";

const INITIAL_STATE = {
  hidden: true,
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CASE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cardReducer;
