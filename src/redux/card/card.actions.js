import cardActionsType from "./card.types"

export const toggleCardHidden = () => ({
    type: cardActionsType.TOGGLE_CART_HIDDEN
})

export const addItemToCard = (item) => ({
    type: cardActionsType.EDD_ITEM,
    payload: item

})

export const deleteItemFromCard = (item) => ({
    type: cardActionsType.DELETE_ITEM,
    payload: item

})


export const removeCardItem = (item) => ({
    type: cardActionsType.REMOVE_ITEM,
    payload: item
})