import cardActionsType from "./card.types"

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
            cardItems: [state.cardItems , action.payload]
        }
    
        default: return state
    }
}

export default cardReducer