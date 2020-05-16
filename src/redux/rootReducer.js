import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer.js";
import cardReducer from "./card__basket/cardBasket.reducer.js";

export default combineReducers({
  user: usersReducer,
  cardBasket: cardReducer,
});
