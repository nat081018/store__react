import  userActionsType from "./user.types"

const INITIAL_STATE = {
    currentUser: null
}

export const userReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionsType.SET_CURRENT_USER: return {
            ...state, 
            currentUser: action.payload
        }
    
        default:
        return state
    }

}


