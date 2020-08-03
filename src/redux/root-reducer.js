import {combineReducers} from "redux"
import {userReduser} from "./user/user.reduser"


  const  rootReducer = combineReducers({
    user: userReduser,
})

export default rootReducer

