import cardActionsType from "./card.types"

const INITIAL_STATE = {
    hidden: true
}


 const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cardActionsType.TOGGLE_CART_HIDDEN: return {
            ...state,
            hidden: !state.hidden   
        }
    
        default: return state
    }
}

export default cardReducer