import {createSelector} from "reselect"

const selectCard = state => state.card

export const selectCardItems = createSelector( 
    [selectCard],
    (card) => card.cardItems
)

export const selectCardItemsReduce = createSelector ( 
    [selectCardItems],
    cardItems => cardItems.reduce((accumItems, cardItem) => accumItems + cardItem.quantity , 0)
)
     