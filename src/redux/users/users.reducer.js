import { usersActionTypes } from "./users.type.js";

const INITIAL__STATE = {
  currentUser: null,
};
const usersReducer = (state = INITIAL__STATE, action) => {
  switch (action.type) {
    case usersActionTypes.SET__CURRENT__USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
