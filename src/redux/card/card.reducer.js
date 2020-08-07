import cardActionsType from "./card.types"
import {addItemsToCard,  removeItemFromCart} from "./card.utilits"

const INITIAL_STATE = {
    hidden: true, 
    cardItems: []
}


 const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cardActionsType.TOGGLE_CART_HIDDEN: return {
            ...state,
            hidden: !state.hidden   
        }
        case cardActionsType.EDD_ITEM: return {
            ...state,
            cardItems: addItemsToCard(state.cardItems, action.payload)
        }
        case cardActionsType.DELETE_ITEM: return {
            ...state,
            cardItems:  state.cardItems.filter((cardItem) => cardItem.id !== action.payload.id)
        }
        case cardActionsType.REMOVE_ITEM: return {
            ...state,
            cardItems: removeItemFromCart(state.cardItems, action.payload)
        }
    
        default: return state
    }
}

export default cardReducer