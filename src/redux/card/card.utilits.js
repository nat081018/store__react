

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