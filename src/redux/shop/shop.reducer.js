import SHOP_DATA from "../../data.local"


const INITIAL_STATE ={
    colletions:  SHOP_DATA
}

const shopReducer = (state= INITIAL_STATE, action)=> {
    switch (action.type) {
        default: return state   
    }
}
export default shopReducer