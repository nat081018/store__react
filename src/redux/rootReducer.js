import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer.js";

export default combineReducers({
  user: usersReducer,
});
