import { usersActionTypes } from "./users.type.js";

export const setCurrentUser = (user) => ({
  type: usersActionTypes.SET__CURRENT__USER,
  payload: user,
});
