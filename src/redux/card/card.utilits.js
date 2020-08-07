import cardActionsType from "./card.types"


export const addItemsToCard = (cardItems, addItemToCard) => {
    const isExistingItem = cardItems.find((cardItem) => 
    cardItem.id === addItemToCard.id
    )

    if(isExistingItem) {
        return cardItems.map((cardItem) => 
            cardItem.id === addItemToCard.id ? 
            {...cardItem, quantity: cardItem.quantity + 1} :
            cardItem
         )
    }

    return [...cardItems, {...addItemToCard, quantity: 1}]

}
    export const  removeItemFromCart = (cardItems, cardItemToRemove) => {
        const isExistingCardItem = cardItems.find((cardItem) => (
            cardItem.id === cardItemToRemove.id))

            console.log(cardItems)

        if(isExistingCardItem.quantity === 1) {
            return cardItems.filter((cardItem) => 
            cardItem.id !== cardItemToRemove.id)
        }

        return cardItems.map((cardItem) => 
        cardItem.id === cardItemToRemove.id ?
         {...cardItem, quantity: cardItem.quantity -1 } : cardItem
         )
    }