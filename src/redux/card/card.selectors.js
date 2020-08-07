import {createSelector} from "reselect"

const selectCard = state => state.card

export const selectCardItems = createSelector( 
    [selectCard],
    (card) => card.cardItems
)
export const selectUserHiddenCardDropdown = createSelector(
    [selectCard],
    (card) => card.hidden
)


export const selectCardItemsReduce = createSelector ( 
    [selectCardItems],
    cardItems => cardItems.reduce((accumItems, cardItem) => accumItems + cardItem.quantity , 0)
)

export const selectCartTotal = createSelector(
    [selectCardItems],

    (cardItems) => cardItems.reduce((accumTotal, cardItem) => accumTotal + cardItem.quantity * cardItem.price, 0 )

)
