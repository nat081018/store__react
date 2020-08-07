import {combineReducers} from "redux"
import userReducer from "./user/user.reducer"
import cardReducer from "./card/card.reducer"
import directoryReduser from "./directory/directory.reducer"
import shopReducer from "./shop/shop.reducer"

import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['card']
}

  const  rootReducer = combineReducers({
    user: userReducer,
    card: cardReducer,
    directory: directoryReduser,
    shop: shopReducer
})

export default  persistReducer(persistConfig, rootReducer)



