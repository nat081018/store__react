import { createSelector } from "reselect";

const selectorUsers = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectorUsers],
  (user) => user.currentUser
);
