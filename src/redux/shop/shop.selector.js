import {createSelector} from  "reselect"

const shopSelect = (state) => state.shop

 export const shopSelector = createSelector(
    [shopSelect],
    (shop) => shop.colletions

)