import {createSelector} from "reselect"


const selectUsers = state => state.user



export const selectUser = createSelector(
    [selectUsers],
    (user) => user.currentUser
)

